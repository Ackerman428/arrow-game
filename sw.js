const CACHE = 'arrow-escape-v36';
const ASSETS = ['./', 'index.html', 'app.css', 'reference.css', 'mobile-v35.css', 'game-v36.js', 'bgm.mp3', 'arrow-whoosh.mp3', 'manifest.json', 'favicon.svg', 'icon.svg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
