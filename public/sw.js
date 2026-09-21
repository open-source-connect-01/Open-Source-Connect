// Self-unregistering service worker
// Cleans up stale service workers registered by previous projects running on localhost:3000

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.registration.unregister();
});
