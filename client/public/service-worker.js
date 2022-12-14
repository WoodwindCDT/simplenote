// Website Given Name: simplenote
const APP_PREFIX = 'simplenote'; 
// Website Verion_01
const VERSION = 'version_01';
// Constants for CACHE_NAME && FILES_TO_CACHE: `Sending specific files to cache on load`
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    "/",
    "./index.html",
    "../src/index.js",
    "../src/App.js",
    "../src/components/Body/index.js",
    "../src/components/Canvas/index.js",
    "../src/components/Navigator/index.js",
    "../src/components/Setting/index.js",
    "../src/assets/Action/index.js",
    "../src/assets/GetNote/index.js",
    "../src/assets/Getters/index.js",
    "../src/assets/Modal/index.js",
    "../src/assets/More/index.js",
    "../src/assets/Pin/index.js",
    "../src/index.css",
    "./logo192.png",
    "./logo512.png"
];

// To install the service worker and begin the CACHE operation
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE)
    })
  )
  self.skipWaiting();
})

// Activate the service worker and remove old data from the cache
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      let cacheKeeplist = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      });
      // To add the current CACHE_NAME to the `keeplist`
      cacheKeeplist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function(key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
  self.clients.claim()
});

// Intercept fetch requests
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (request) {
            return request || fetch(e.request)
        })
    )
})