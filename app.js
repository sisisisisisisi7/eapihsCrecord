const authForm = document.querySelector("#auth-form");
const nameField = document.querySelector("#name-field");
const fullNameInput = document.querySelector("#full-name");
const lrnField = document.querySelector("#lrn-field");
const lrnInput = document.querySelector("#lrn");
const lrnConfirmField = document.querySelector("#lrn-confirm-field");
const lrnConfirmInput = document.querySelector("#lrn-confirm");
const schoolIdField = document.querySelector("#school-id-field");
const schoolIdInput = document.querySelector("#school-id-image");
const schoolIdPreview = document.querySelector("#school-id-preview");
const schoolIdConsentField = document.querySelector("#school-id-consent-field");
const schoolIdConsent = document.querySelector("#school-id-consent");
const roleField = document.querySelector("#role-field");
const passwordField = document.querySelector("#password");
const passwordLabel = document.querySelector("#password-label");
const submitLabel = document.querySelector("#submit-label");
const modePrompt = document.querySelector("#mode-prompt");
const modeToggle = document.querySelector("#mode-toggle");
const formStatus = document.querySelector("#form-status");
const emailInput = document.querySelector("#email");
const forgotPasswordButton = document.querySelector("#forgot-password");
const verificationCodeField = document.querySelector("#verification-code-field");
const verificationCodeInput = document.querySelector("#verification-code");
const resendCodeButton = document.querySelector("#resend-code");

let currentMode = "login";
let signupCodeSentTo = "";
let signupInProgress = false;
let schoolIdImageBase64 = "";
let schoolIdImageProcessing = false;
let schoolIdPreviewUrl = "";
const maxSchoolIdImageBytes = 550 * 1024;

function showStatus(message, state = "success") {
  formStatus.textContent = message;
  formStatus.dataset.state = state;
}

function setMode(mode) {
  currentMode = mode;
  signupCodeSentTo = "";
  const isSignup = mode === "signup";

  const isStudentSignup = isSignup && document.querySelector("#role").value === "student";
  nameField.hidden = !isSignup;
  fullNameInput.required = isSignup;
  roleField.hidden = !isSignup;
  lrnField.hidden = !isStudentSignup;
  lrnInput.required = isStudentSignup;
  lrnConfirmField.hidden = !isStudentSignup;
  lrnConfirmInput.required = isStudentSignup;
  lrnConfirmInput.setCustomValidity("");
  schoolIdField.hidden = !isStudentSignup;
  schoolIdInput.required = isStudentSignup;
  schoolIdConsentField.hidden = !isStudentSignup;
  schoolIdConsent.required = isStudentSignup;
  schoolIdInput.value = "";
  schoolIdInput.setCustomValidity("");
  schoolIdConsent.checked = false;
  schoolIdImageBase64 = "";
  if (schoolIdPreviewUrl) URL.revokeObjectURL(schoolIdPreviewUrl);
  schoolIdPreviewUrl = "";
  schoolIdPreview.removeAttribute("src");
  schoolIdPreview.hidden = true;
  verificationCodeField.hidden = true;
  verificationCodeInput.required = false;
  verificationCodeInput.value = "";
  forgotPasswordButton.hidden = isSignup;
  resendCodeButton.hidden = true;
  passwordField.autocomplete = isSignup ? "new-password" : "current-password";
  passwordField.placeholder = isSignup ? "Create a password" : "Enter your password";
  passwordField.minLength = isSignup ? 8 : 0;
  passwordLabel.textContent = isSignup ? "CREATE PASSWORD" : "SECURE PIN / PASSWORD";
  submitLabel.textContent = isSignup ? "Send Verification Code" : "Secure Login";
  modePrompt.textContent = isSignup ? "Already have an account?" : "Don't have an account yet?";
  modeToggle.textContent = isSignup ? "Sign in" : "Sign up";
  document.querySelector("#portal-title").textContent = isSignup ? "Create account" : window.APP_BRANDING.portalTitle;
  showStatus("");
}

document.querySelector("#role").addEventListener("change", () => setMode(currentMode));

async function compressSchoolIdImage(file) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    throw new Error("Choose a School ID image in JPEG, PNG, or WebP format.");
  }
  if (file.size > 20 * 1024 * 1024) {
    throw new Error("The selected image is too large. Choose an image smaller than 20 MB.");
  }

  const bitmap = await createImageBitmap(file);
  try {
    let scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
    while (scale >= 0.35) {
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);

      for (const quality of [0.82, 0.72, 0.62, 0.52]) {
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", quality));
        if (!blob) throw new Error("The image could not be processed. Choose a different image file.");
        if (blob.size > maxSchoolIdImageBytes) continue;

        const bytes = new Uint8Array(await blob.arrayBuffer());
        let binary = "";
        for (let offset = 0; offset < bytes.length; offset += 0x8000) {
          binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
        }
        return { base64: btoa(binary), preview: URL.createObjectURL(blob) };
      }
      scale *= 0.8;
    }
  } finally {
    bitmap.close();
  }
  throw new Error("The image could not be compressed below 550 KB. Choose a smaller or clearer image.");
}

schoolIdInput.addEventListener("change", async () => {
  schoolIdImageBase64 = "";
  schoolIdInput.setCustomValidity("");
  if (schoolIdPreviewUrl) URL.revokeObjectURL(schoolIdPreviewUrl);
  schoolIdPreviewUrl = "";
  schoolIdPreview.removeAttribute("src");
  schoolIdPreview.hidden = true;
  const file = schoolIdInput.files?.[0];
  if (!file) return;

  schoolIdImageProcessing = true;
  document.querySelector("#submit-button").disabled = true;
  showStatus("Preparing the School ID image…");
  try {
    const image = await compressSchoolIdImage(file);
    schoolIdImageBase64 = image.base64;
    schoolIdPreviewUrl = image.preview;
    schoolIdPreview.src = image.preview;
    schoolIdPreview.hidden = false;
    showStatus("The School ID image is ready. It will be stored privately for administrator review.");
  } catch (error) {
    schoolIdInput.setCustomValidity(error.message);
    schoolIdInput.reportValidity();
    showStatus(error.message, "error");
  } finally {
    schoolIdImageProcessing = false;
    document.querySelector("#submit-button").disabled = false;
  }
});

forgotPasswordButton.addEventListener("click", async () => {
  if (!emailInput.value.trim()) {
    emailInput.setCustomValidity("Enter your email address to reset your password.");
    emailInput.reportValidity();
    emailInput.setCustomValidity("");
    return;
  }
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }
  if (!window.portalAuth) {
    showStatus("Firebase password reset is not configured. Complete the Firebase setup before using this feature.", "error");
    return;
  }

  forgotPasswordButton.disabled = true;
  try {
    await window.portalAuth.auth.sendPasswordResetEmail(emailInput.value.trim().toLowerCase());
    showStatus("If an account exists for this email, Firebase will send a password reset link. Check your Spam/Junk folder too.");
  } catch (error) {
    showStatus(window.portalAuth.describeError(error), "error");
  } finally {
    forgotPasswordButton.disabled = false;
  }
});

lrnConfirmInput.addEventListener("input", () => {
  if (lrnConfirmInput.value.trim() === lrnInput.value.trim()) lrnConfirmInput.setCustomValidity("");
});
lrnInput.addEventListener("input", () => {
  if (lrnConfirmInput.value.trim() === lrnInput.value.trim()) lrnConfirmInput.setCustomValidity("");
});

modeToggle.addEventListener("click", () => {
  setMode(currentMode === "login" ? "signup" : "login");
});

async function requestSignupCode() {
  if (!window.portalAuth) {
    showStatus(window.portalAuthError || "Secure signup is not configured. Complete the Firebase deployment setup first.", "error");
    return;
  }
  if (!window.portalAuth.appCheckConfigured) {
    showStatus("Secure signup is unavailable because the reCAPTCHA App Check site key has not been configured for this website.", "error");
    return;
  }

  const email = document.querySelector("#email").value.trim().toLowerCase();
  try {
    await window.portalAuth.functions.httpsCallable("requestSignupOtp")({ email });
    signupCodeSentTo = email;
    verificationCodeField.hidden = false;
    verificationCodeInput.required = true;
    resendCodeButton.hidden = false;
    submitLabel.textContent = "Verify Code & Create Account";
    verificationCodeInput.focus();
    showStatus(`A verification code was sent to ${email}. It expires in 10 minutes.`);
  } catch (error) {
    showStatus(window.portalAuth.describeError(error), "error");
  }
}

async function verifySignupCode() {
  const email = document.querySelector("#email").value.trim().toLowerCase();
  if (email !== signupCodeSentTo) {
    signupCodeSentTo = "";
    verificationCodeField.hidden = true;
    verificationCodeInput.required = false;
    resendCodeButton.hidden = true;
    showStatus("The email address changed. Request a new verification code.", "error");
    return;
  }

  try {
    const response = await window.portalAuth.functions.httpsCallable("verifySignupOtp")({
      email,
      passcode: verificationCodeInput.value.trim(),
      password: passwordField.value,
      fullName: fullNameInput.value.trim(),
      role: document.querySelector("#role").value,
      lrn: lrnInput.value.trim(),
      confirmLrn: lrnConfirmInput.value.trim(),
      schoolIdConsent: schoolIdConsent.checked,
      schoolIdImage: schoolIdImageBase64,
    });
    const { customToken, student } = response.data;
    await window.portalAuth.auth.signInWithCustomToken(customToken);
    window.localStorage.setItem("eapihs-current-student", JSON.stringify(student));
    window.location.href = "student.html";
  } catch (error) {
    showStatus(window.portalAuth.describeError(error), "error");
  }
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (signupInProgress) return;

  if (!authForm.reportValidity()) {
    showStatus("Please complete the required fields.", "error");
    return;
  }

  if (currentMode === "signup") {
    if (schoolIdImageProcessing) {
      showStatus("Wait for the School ID image to finish processing.", "error");
      return;
    }
    if (lrnInput.value.trim() !== lrnConfirmInput.value.trim()) {
      lrnConfirmInput.setCustomValidity("The LRNs do not match.");
      lrnConfirmInput.reportValidity();
      showStatus("The LRNs do not match. Check both entries and try again.", "error");
      return;
    }
    lrnConfirmInput.setCustomValidity("");
    signupInProgress = true;
    const submitButton = document.querySelector("#submit-button");
    submitButton.disabled = true;
    try {
      if (!signupCodeSentTo) await requestSignupCode();
      else await verifySignupCode();
    } finally {
      signupInProgress = false;
      submitButton.disabled = false;
    }
    return;
  }

  if (!window.portalAuth) {
    showStatus(window.portalAuthError || "Firebase sign-in is not configured.", "error");
    return;
  }

  signupInProgress = true;
  document.querySelector("#submit-button").disabled = true;
  try {
    const email = document.querySelector("#email").value.trim().toLowerCase();
    const credential = await window.portalAuth.auth.signInWithEmailAndPassword(email, passwordField.value);
    const token = await credential.user.getIdTokenResult();
    if (token.claims.role === "teacher") {
      window.location.href = "teacher.html";
      return;
    }
    if (token.claims.role !== "student") {
      showStatus("This account does not have portal access. Contact the school administrator.", "error");
      await window.portalAuth.auth.signOut();
      return;
    }
    const lrn = String(token.claims.lrn || "");
    const student = {
      name: credential.user.displayName || "",
      lrn,
      email,
      qrValue: `EAPIHS-LRN-${lrn}`,
    };
    window.localStorage.setItem("eapihs-current-student", JSON.stringify(student));
    window.location.href = "student.html";
  } catch (error) {
    showStatus(window.portalAuth.describeError(error), "error");
  } finally {
    signupInProgress = false;
    document.querySelector("#submit-button").disabled = false;
  }
});

resendCodeButton.addEventListener("click", async () => {
  if (signupInProgress) return;
  signupInProgress = true;
  resendCodeButton.disabled = true;
  try {
    await requestSignupCode();
  } finally {
    signupInProgress = false;
    resendCodeButton.disabled = false;
  }
});