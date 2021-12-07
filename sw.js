const cacheVersion = 'v2';
const cacheName = 'sounds-' + cacheVersion;

var urlsToCache = [
  "/",
  "sounds/Alors.m4a",
  "sounds/Bopapa.m4a",
  "sounds/Brian.m4a",
  "sounds/Bruno.m4a",
  "sounds/Cocotte minute.m4a",
  "sounds/Fabienne.m4a",
  "sounds/Google.m4a",
  "sounds/Helélicopter.m4a",
  "sounds/Like a diamond in the sky.m4a",
  "sounds/Lucie Giannini.m4a",
  "sounds/Maman more balls.m4a",
  "sounds/Mr Lapin.m4a",
  "sounds/Oh non.m4a",
  "sounds/One banana.m4a",
  "sounds/Papa Giannini.m4a",
  "sounds/Papa Maman Lucie.m4a",
  "sounds/Papi Giannini.m4a",
  "sounds/Raisins secs.m4a",
  "sounds/String Cheese.m4a",
  "sounds/Tatata.m4a",
  "sounds/Yeah.m4a",
  "sounds/Nope.m4a",
  "sounds/Oh papa.m4a",
  "sounds/open it.m4a",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Caching sounds');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
