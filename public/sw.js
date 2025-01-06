if (!self.define) {
  let e,
    s = {}
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (i, a) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const r = e => n(e, t),
      o = {module: {uri: t}, exports: c, require: r}
    s[t] = Promise.all(i.map(e => o[e] || r(e))).then(e => (a(...e), c))
  }
}
define(['./workbox-e9849328'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '73b483654ee7671f3b77955f9238701b',
        },
        {
          url: '/_next/static/PbE3HUNFkHhEndFNokIXB/_buildManifest.js',
          revision: 'c710c2d5ed2310096f2b98eac50d3708',
        },
        {
          url: '/_next/static/PbE3HUNFkHhEndFNokIXB/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/545-a8e63bd318ea0de1.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/841-db630d1fa2e3fc22.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/app/About/page-d345a4bf8ddc3ec1.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-d7734b32e8e593a4.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/app/layout-2bfdb8df16d182d5.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/app/page-1eeb8e3dd7943be9.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/e2f9a570-f3758ede07b6c38c.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/framework-52f00847554068e5.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/main-app-07db31bbb8dc3c01.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/main-e60ebd5582bd740a.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/pages/_app-62cc323c9998aa81.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/pages/_error-45e51db5ac8ca299.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-6c0259f97039c75e.js',
          revision: 'PbE3HUNFkHhEndFNokIXB',
        },
        {
          url: '/_next/static/css/18a79ef0fdaf060a.css',
          revision: '18a79ef0fdaf060a',
        },
        {
          url: '/_next/static/css/52d5b8cd45886714.css',
          revision: '52d5b8cd45886714',
        },
        {
          url: '/_next/static/css/8ae4f9bc49457543.css',
          revision: '8ae4f9bc49457543',
        },
        {
          url: '/_next/static/media/logo.04c6b7fa.svg',
          revision: 'd0637bbe75c06e6b226c06a88e50376d',
        },
        {
          url: '/_next/static/media/pause.f4e87c07.svg',
          revision: 'd28261474efc63c63105abd3911261dd',
        },
        {
          url: '/_next/static/media/play.ee93e0c9.svg',
          revision: '4a501053f08a45ed77504006181615ac',
        },
        {
          url: '/_next/static/media/spinning.7ff7c8f8.svg',
          revision: '1e2620cb8205c5f7867fca825a847c31',
        },
        {url: '/manifest.json', revision: '9de1329133acbe2bf22c02be074cd0c7'},
        {
          url: '/pictures/apple-touch-icon-180x180.png',
          revision: '4619ba9eff27030be8ead4fd3cadf2d2',
        },
        {
          url: '/pictures/favicon.ico',
          revision: '80fe05e4d9a472754dd823f38afecfaf',
        },
        {
          url: '/pictures/logo.svg',
          revision: 'd0637bbe75c06e6b226c06a88e50376d',
        },
        {
          url: '/pictures/maskable-icon-512x512.png',
          revision: 'cdd91850eb6ce233b2592fa815202cf6',
        },
        {
          url: '/pictures/pause.svg',
          revision: 'd28261474efc63c63105abd3911261dd',
        },
        {
          url: '/pictures/play.svg',
          revision: '4a501053f08a45ed77504006181615ac',
        },
        {
          url: '/pictures/pwa-192x192.png',
          revision: 'fe9f254af45036335b312129f053c310',
        },
        {
          url: '/pictures/pwa-512x512.png',
          revision: '6325b05f4272d2ee79ba8f8a3c2acdb6',
        },
        {
          url: '/pictures/pwa-64x64.png',
          revision: '67df109790962be58fd4daae90a1905e',
        },
        {
          url: '/pictures/spinning.svg',
          revision: '1e2620cb8205c5f7867fca825a847c31',
        },
      ],
      {ignoreURLParametersMatching: []},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({url: e}) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600}),
        ],
      }),
      'GET',
    )
})
