const staticCacheName = 'app-static-v1';
const assests = [
  '/',
  '/index.html',
  '/icons/list(2).png',
  '/static/css/main.9ac9bcf5.chunk.css',
  '/static/js/2.965e8395.chunk.js',
  '/static/js/main.1859bc82.chunk.js',
  'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
  'https://use.fontawesome.com/releases/v5.0.13/webfonts/fa-solid-900.woff'
];

//add install event
self.addEventListener('install', (e) => {
  console.log("has been installed", e);
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching assests");
      cache.addAll(assests);
    })
  );
})

//add activate event
self.addEventListener('activate', (e) => {
  console.log("has been activated", e);
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys
        .filter((key) => key !== staticCacheName)
        .map((key) => caches.delete(key)));
    })
  );
})

//add fetch event listener
self.addEventListener('fetch', (e) => { 
  console.log('has fetched', e);  
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
})
