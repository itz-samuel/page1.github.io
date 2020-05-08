'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "81ad6bf47d7517103f01eeef39e6da97",
"index.html": "32402a53616b52372478bbacaf87b66c",
"/": "32402a53616b52372478bbacaf87b66c",
"main.dart.js": "6518a8233327e488641d998b87ad0d17",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/AssetManifest.json": "d1c0cae173f7b9ed017d5bd819ca6ffa",
"assets/assets/3.jpg": "316e29cbe4e680e5b24a6b53dff599d9",
"assets/assets/logo.png": "ee244fee3986be133b8324c8d7f4cb4b",
"assets/assets/1.jpg": "058b72a3b78ffbc1d6d8b3f951e8a5ae",
"assets/assets/header.png": "a1612ade66208def50ddf9354823d5e5",
"assets/assets/2.jpg": "e90b4d6eae42cda12cd9efc0fcc176f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
