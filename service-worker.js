self.addEventListener("install", e => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", e => {
  // PWA basic fetch handler
});
