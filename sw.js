self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open("eapihs-shell-v2");
    await cache.addAll([
      "./offline.html",
      "./manifest.webmanifest",
      "./styles.css",
      "./teacher.css?v=20261044",
      "./student.css?v=20261040",
      "./app.js",
      "./auth.js",
      "./branding-config.js",
      "./branding.js",
      "./integrations-config.js",
      "./storage.js",
      "./teacher.js?v=20261044",
      "./student.js?v=20261040",
      "./pwa.js",
      "./assets/logo.svg",
      "./assets/pwa-icon.svg",
      "./assets/icons/icon-192.png",
      "./assets/icons/icon-512.png",
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((cacheName) => cacheName.startsWith("eapihs-shell-") && cacheName !== "eapihs-shell-v2")
        .map((cacheName) => caches.delete(cacheName)),
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open("eapihs-shell-v2");
        return cache.match("./offline.html");
      }),
    );
    return;
  }

  if (!/\.(?:css|js|svg|webmanifest)$/.test(url.pathname)) return;

  event.respondWith((async () => {
    const cache = await caches.open("eapihs-shell-v2");
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      const cached = await cache.match(request, { ignoreSearch: true });
      if (cached) return cached;
      throw error;
    }
  })());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url ?? "./student.html";
  event.waitUntil((async () => {
    const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    const matchingClient = clients.find((client) => client.url.startsWith(self.location.origin));
    if (matchingClient) {
      await matchingClient.focus();
      return;
    }
    await self.clients.openWindow(targetUrl);
  })());
});

self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data?.json() ?? {};
  } catch {
    payload = { body: event.data?.text() ?? "You have a new school portal update." };
  }

  const title = payload.title ?? "School Portal";
  const options = {
    body: payload.body ?? "You have a new school portal update.",
    tag: payload.tag ?? "eapihs-push",
    data: { url: payload.url ?? "./student.html" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});