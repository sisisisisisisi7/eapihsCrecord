(() => {
  const config = window.EAPIHS_INTEGRATION_CONFIG;
  if (!config?.firebase?.apiKey) {
    window.portalAuth = null;
    window.portalAuthError = "Firebase is not configured for this website.";
    return;
  }
  if (!window.firebase?.initializeApp) {
    window.portalAuth = null;
    window.portalAuthError = "The Firebase SDK could not load. Check your internet connection and reload the page.";
    return;
  }

  try {
    const { functionsRegion, ...firebaseOptions } = config.firebase;
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseOptions);
    const siteKey = String(config.firebase.appCheckSiteKey ?? "").trim();
    let appCheckConfigured = false;

    if (siteKey && firebase.appCheck) {
      firebase.appCheck(app).activate(new firebase.appCheck.ReCaptchaV3Provider(siteKey), true);
      appCheckConfigured = true;
    }

    window.portalAuth = {
      auth: firebase.auth(app),
      functions: firebase.functions(app, functionsRegion || "us-central1"),
      appCheckConfigured,
      describeError(error) {
        const messages = {
          "functions/failed-precondition": "The secure signup service is not fully configured. Verify Firebase Functions, EmailJS, and App Check deployment settings.",
          "functions/invalid-argument": "Check the information and verification code, then try again.",
          "functions/not-found": "The verification service could not be found. Deploy Firebase Functions to the configured region.",
          "functions/already-exists": "An account already exists for this email. Please sign in.",
          "functions/permission-denied": "This request is not permitted. This form is for student signup only.",
          "functions/resource-exhausted": "Too many requests. Wait before requesting another code.",
          "functions/unauthenticated": "This browser could not be verified. Check the reCAPTCHA App Check site key and allowed domains.",
          "functions/unavailable": "The verification service is unavailable. Try again later.",
          "functions/internal": "The account could not be created. Request a new verification code and try again.",
          "auth/email-already-in-use": "An account already exists for this email. Please sign in.",
          "auth/invalid-credential": "The email or password is incorrect.",
          "auth/invalid-email": "Check the email address and try again.",
          "auth/operation-not-allowed": "Email/password sign-in is not enabled in Firebase.",
          "auth/unauthorized-continue-uri": "This website domain is not authorized for password reset. Add it to Firebase authorized domains.",
          "auth/too-many-requests": "Too many attempts. Wait before trying again.",
          "auth/network-request-failed": "Firebase could not be reached. Check your internet connection and try again.",
        };
        return messages[error?.code] || "The request could not be completed. Check your connection and try again.";
      },
    };
    window.portalAuthError = "";

    if (!appCheckConfigured) {
      console.error("Firebase App Check is not configured. Secure signup callable functions will reject requests.");
    }
  } catch (error) {
    console.error("Firebase initialization failed.", error);
    window.portalAuth = null;
    window.portalAuthError = "Firebase could not be initialized. Check the Firebase configuration and reload the page.";
  }
})();
