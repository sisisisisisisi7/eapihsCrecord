(() => {
  const scriptUrl = document.currentScript?.src ?? window.location.href;
  const branding = window.APP_BRANDING ?? {};
  const appName = branding.appName || "School";
  const fullName = branding.fullName || appName;
  const productName = branding.productName || "School Management & Grading System";
  const values = {
    appName,
    fullName,
    productName,
    tagline: branding.tagline || "",
    portalTitle: `${appName} Portal`,
    studentPortal: `${appName} Student Portal`,
    teacherPortal: `${appName} Teacher Portal`,
    welcomeMessage: `Welcome to the ${appName} ${productName}.`,
    demoTitle: `${appName} Demo Sandbox`,
    homeLabel: `${appName} Portal home`,
    copyright: `© ${new Date().getFullYear()} ${fullName}`,
    loginPageTitle: `${appName} Portal | Sign in`,
    teacherPageTitle: `Teacher Portal | ${appName}`,
    studentPageTitle: `Student Portal | ${appName}`,
    demoPageTitle: `${appName} Demo Sandbox`,
    loginDescription: `${appName} school portal sign in and account registration.`,
    teacherDescription: `${appName} teacher portal welcome page.`,
  };

  for (const element of document.querySelectorAll("[data-brand]")) {
    const value = values[element.dataset.brand];
    if (value !== undefined) element.textContent = value;
  }

  for (const element of document.querySelectorAll("[data-brand-title]")) {
    const title = values[element.dataset.brandTitle];
    if (title) document.title = title;
  }

  for (const element of document.querySelectorAll("[data-brand-description]")) {
    const description = values[element.dataset.brandDescription];
    if (description) element.setAttribute("content", description);
  }

  for (const element of document.querySelectorAll("[data-brand-aria]")) {
    const label = values[element.dataset.brandAria];
    if (label) element.setAttribute("aria-label", label);
  }

  if (branding.logoPath) {
    const logoUrl = new URL(branding.logoPath, scriptUrl);
    for (const element of document.querySelectorAll("[data-brand-logo]")) {
      const image = document.createElement("img");
      image.src = logoUrl.href;
      image.alt = "";
      image.className = "brand-logo-image";
      image.addEventListener("error", () => {
        image.remove();
        element.textContent = branding.appName || appName;
      }, { once: true });
      element.replaceChildren(image);
    }
    const icon = document.querySelector('link[rel="icon"]');
    if (icon) icon.href = logoUrl.href;
  }
})();
