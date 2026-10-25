(() => {
  const installButton = document.querySelector("#install-app");
  let installPrompt;

  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Could not register the portal service worker.", error);
    });
  }

  if (!installButton) return;

  const installHint = document.querySelector("#install-app-hint");
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isIos && installHint) {
    installHint.textContent = "On iPhone/iPad, open this site in Safari, tap Share, then select Add to Home Screen.";
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });

  installButton.addEventListener("click", async () => {
    if (!installPrompt) return;
    installButton.disabled = true;
    try {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      installButton.hidden = true;
    } catch (error) {
      console.error("Could not complete the portal installation prompt.", error);
      if (installHint) installHint.textContent = "Installation did not complete. Open the browser menu and select Install app or Add to Home Screen.";
    } finally {
      installButton.disabled = false;
    }
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    installButton.hidden = true;
    if (installHint) installHint.textContent = "The app is installed on this device.";
  });
})();
