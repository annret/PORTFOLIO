const PWAnna = "PWAnna";
const assets = [
    "/PWA-homework/",
    "/PWA-homework/index.html",
    "/PWA-homework/style.css",
    "/PWA-homework/index.js",
    "/PWA-homework/logo.png"
  ];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(PWAnna).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return fetch(fetchEvent.request);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

