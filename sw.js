const CACHE='english-rpg-v6';
self.addEventListener('install',e=>{e.waitUntil(caches.delete('english-rpg-v1').then(()=>caches.delete('english-rpg-v5')).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))})