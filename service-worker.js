/* === service-worker.js === */

const CACHE_NAME = 'js-tutorial-v6.0';
const urlsToCache = [ 
  '/', 
  '/index.html', 
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
  '/lesson19.html',
  '/lesson20.html',
  '/lesson21.html',
  '/lesson22.html',
  '/lesson23.html',
  '/lesson24.html',
  '/lesson25.html',
  '/lesson26.html',
  '/lesson27.html',
   '/lesson28.html',
  '/lesson29.html',
  '/lesson30.html',
  '/lesson31.html',
  '/lesson32.html',
  '/lesson33.html',
  '/lesson34.html',
  '/lesson35.html',
  '/lesson36.html',
  '/lesson37.html',
  '/lesson38.html',
  '/lesson39.html',
  '/lesson40.html',
  '/lesson41.html',
  '/lesson42.html',
  '/lesson43.html',
  '/lesson44.html',
  '/lesson45.html',
  '/lesson46.html',
  '/lesson47.html',
  '/lesson48.html',
  '/lesson49.html',
  '/lesson50.html',
  '/lesson51.html',
  '/lesson52.html',
  '/lesson53.html',
  '/lesson54.html',
  '/lesson55.html',
  '/lesson56.html',
  '/lesson57.html',
  '/lesson58.html',
  '/lesson59.html',
  '/lesson60.html',
  '/lesson61.html',
  '/lesson62.html',
  '/lesson63.html',
  '/lesson64.html',
  '/lesson65.html',
  '/lesson66.html',
  '/lesson67.html',
  '/lesson68.html',
  '/lesson69.html',
  '/lesson70.html',
  '/lesson71.html',
  '/lesson72.html',
  '/lesson73.html',
  '/lesson73.html',
  '/lesson74.html',
  '/lesson75.html',
  '/lesson76.html',
  '/lesson77.html',
  '/lesson78.html',
  '/lesson79.html',



  
  
  // Add all lesson pages here...
  ];

self.addEventListener('install', (event) => { event.waitUntil( caches.open(CACHE_NAME).then((cache) => { return cache.addAll(urlsToCache); }) ); });

self.addEventListener('fetch', (event) => { event.respondWith( caches.match(event.request).then((response) => { return response || fetch(event.request); }) ); });

self.addEventListener('activate', (event) => { event.waitUntil( caches.keys().then((cacheNames) => { return Promise.all( cacheNames.map((cache) => { if (cache !== CACHE_NAME) { return caches.delete(cache); } }) ); }) ); });

self.addEventListener('message', (event) => { if (event.data === 'skipWaiting') { self.skipWaiting(); } });













/* === service-worker.js === 

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

