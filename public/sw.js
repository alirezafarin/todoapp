const staticCacheName = 'app-static-v9';
const assets = [
  '/',
  '/icons/list(2).png',
  '/static/css/main.c64ebd2d.chunk.css',
  '/static/js/2.4071fcee.chunk.js',
  '/static/js/main.4d86671b.chunk.js',
  'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
  'https://use.fontawesome.com/releases/v5.0.13/webfonts/fa-solid-900.woff'
];

//add install event
self.addEventListener('install', (e) => {
  console.log("has been installed", e);
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching assets");
      cache.addAll(assets)
        .then(() => console.log('done'))
        .catch((err) => console.log(err));
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

//add fetch event listener sadsa
self.addEventListener('fetch', (e) => { 
  console.log('has fetched', e);  
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
})
