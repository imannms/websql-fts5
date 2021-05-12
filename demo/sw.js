self.importScripts('/websql-worker-debug.js');

self.addEventListener("install", (event) => {
    console.log("sw, location: ", location);
    self.skipWaiting();
    // const preCache = async () => {
    //     // cache assets
    //     const cacheAsset = await caches.open(_assetCacheName);
    //     cacheAsset.addAll(_assetFileList);
    //     // cache images
    //     const cacheImage = await caches.open(_imageCacheName);
    //     cacheImage.addAll(_imageFileList);
    //     // cache html
    //     const cacheHtml = await caches.open(_htmlCacheName);
    //     return cacheHtml.addAll(_htmlFileList);
    // };

    // event.waitUntil(
    //     // Add your file to cache
    //     preCache()
    //         // Tell SW to end 'waiting' state
    //         .then(() => self.skipWaiting())
    // );
    /* event.waitUntil(
        caches
            .open(_assetCacheName)
            // Add your file to cache
            .then((cache) => {
                return cache.addAll(_assetFileList);
            })
            // Tell SW to end 'waiting' state
            .then(() => self.skipWaiting())
    ); */
});
self.addEventListener("activate", (e) => {
    e.waitUntil(
        (async () => {
            // remove previous cache
            /* const keyList = await caches.keys();
            await Promise.all(
                keyList.map((key) => {
                    if (key === _assetCacheName || key === _imageCacheName || key === _htmlCacheName) {
                        return;
                    }
                    caches.delete(key);
                })
            ); */

            // tell browser to use this service worker and not outdated one
            self.clients.claim();
        })()
    );
});

