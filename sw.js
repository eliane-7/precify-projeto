/* ==============================
   PRECIFY — SERVICE WORKER
   PWA offline caching strategy
   ============================== */

const CACHE_VERSION = 'precify-v1';
const STATIC_CACHE = `precify-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `precify-runtime-${CACHE_VERSION}`;

// Assets to pre-cache on install (same-origin, relative paths)
const PRECACHE_URLS = [
  './',
  './index.html',
  './demo.html',
  './styles.css',
  './script.js',
  './demo-styles.css',
  './demo-script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png'
];

// --- Install: pre-cache static assets ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        // Use individual puts so one failure doesn't reject the whole batch
        return Promise.all(
          PRECACHE_URLS.map((url) =>
            cache.put(url, new Request(url, { cache: 'reload' }))
              .catch((err) => console.warn('[SW] Failed to cache:', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// --- Activate: clean up old caches ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key))
        );
      })
      .then(() => self.clients.claim())
  );
});

// --- Fetch: serve from cache, fall back to network ---
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip cross-origin requests (Google Fonts, etc.) from static cache
  // but allow them in runtime cache via stale-while-revalidate
  if (url.origin !== self.location.origin) {
    // For cross-origin, try network first, then runtime cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Same-origin: stale-while-revalidate for navigation and assets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          // Only cache valid responses
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // If navigation fails and we have no cached response,
          // serve the cached index.html as fallback
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });

      // Return cached response immediately if available, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});

// --- Message: allow page to trigger skipWaiting ---
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
