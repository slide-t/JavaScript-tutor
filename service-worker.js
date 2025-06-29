/* === service-worker.js === */

const CACHE_NAME = 'js-tutorial-v1'; const urlsToCache = [
  '/', '/index.html', 
  '/styles.css', 
  '/script.js', 
  '/manifest.json', 
  '/favicon.ico',
  '/lesson1.html',
  '/lesson2.html',
  '/lesson3.html',
  '/lesson4.html',
  '/lesson5.html',
  '/lesson6.html',
  '/lesson7.html',
  '/lesson8.html',
  '/lesson9.html',
  '/lesson10.html',
  '/lesson11.html',
  '/lesson12.html',
   '/lesson13.html',
  '/lesson14.html',
  '/lesson15.html',
  '/lesson16.html',
  '/lesson17.html',
  '/lesson18.html',
  
  // Add all lesson pages here...
  ];

self.addEventListener('install', (event) => { event.waitUntil( caches.open(CACHE_NAME).then((cache) => { return cache.addAll(urlsToCache); }) ); });

self.addEventListener('fetch', (event) => { event.respondWith( caches.match(event.request).then((response) => { return response || fetch(event.request); }) ); });

self.addEventListener('activate', (event) => { event.waitUntil( caches.keys().then((cacheNames) => { return Promise.all( cacheNames.map((cache) => { if (cache !== CACHE_NAME) { return caches.delete(cache); } }) ); }) ); });

