(() => {
  const demoMode =
    new URLSearchParams(window.location.search).get("demo") === "1" ||
    /\/demo(?:\/|$)/.test(window.location.pathname);
  const demoStoragePrefix = "eapihs-demo:";
  const storagePrefix = demoMode ? demoStoragePrefix : "";
  const storage = window.localStorage;

  window.portalStorage = {
    getItem(key) {
      return storage.getItem(`${storagePrefix}${key}`);
    },
    setItem(key, value) {
      storage.setItem(`${storagePrefix}${key}`, value);
    },
    removeItem(key) {
      storage.removeItem(`${storagePrefix}${key}`);
    },
    eventKey(event) {
      if (!event.key) return null;
      if (demoMode) {
        return event.key.startsWith(demoStoragePrefix)
          ? event.key.slice(demoStoragePrefix.length)
          : null;
      }
      return event.key.startsWith(demoStoragePrefix) ? null : event.key;
    },
    isDemoMode: demoMode,
  };

  if (demoMode) {
    document.querySelectorAll('a[href="teacher.html"], a[href="student.html"]').forEach((link) => {
      const target = new URL(link.href);
      target.searchParams.set("demo", "1");
      link.href = target.href;
    });
  }
})();
