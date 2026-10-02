/* SolLingo service worker — v6. App shell en caché, HTML y version.json
   siempre frescos de la red, audios en caché progresiva. */
var CACHE_VERSION = 7;
var CACHE = 'sollingo-v' + CACHE_VERSION;
var SHELL = [
  './',
  'index.html',
  'styles.css?v=4',
  'app.js?v=6',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'version.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf('sollingo-v') === 0 && k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function networkFirst(req) {
  return fetch(req).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(req, copy); });
    return res;
  }).catch(function () { return caches.match(req); });
}

function cacheFirst(req) {
  return caches.match(req).then(function (hit) {
    if (hit) return hit;
    return fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (e.request.method !== 'GET') return;
  var path = url.pathname;
  if (e.request.mode === 'navigate' ||
      path.endsWith('index.html') ||
      path.endsWith('version.json') ||
      path.endsWith('/sollingo/')) {
    e.respondWith(networkFirst(e.request));
  } else {
    e.respondWith(cacheFirst(e.request));
  }
});
