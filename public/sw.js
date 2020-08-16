const STATIC_CACHE = 'static-v02';
const DYNAMIC_CACHE = 'dynamic-v02'

const assets = [
  '/',
  '/icons/list(2).png',
  'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
  'https://use.fontawesome.com/releases/v5.0.13/webfonts/fa-solid-900.woff',
  '/firebasejs/7.17.2/firebase-firestore.js',
  '/firebasejs/7.17.2/firebase-app.js'
];

//add install event
self.addEventListener('install', (e) => {
  console.log("has been installed", e);
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
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
        .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
        .map((key) => caches.delete(key)));
    })
  );
})

//fetch Event
self.addEventListener('fetch', function(e) {
  //don't cache anything from firebase firestore
  if( e.request.url.indexOf('firestore.googleapis.com') === -1 ){
    e.respondWith(
      caches.match(e.request).then((response) => {
        if( response ) {
          return response;
        }
        else {
          return fetch(e.request)
          .then((res) => {
            //dynamic catching
            return caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(e.request.url, res.clone());
              return res;
            });
          })
        }
      }).catch(() => {})
    );
  }
})