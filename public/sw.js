if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>n(e,c),r={module:{uri:c},exports:o,require:t};s[c]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2176db5c73a0a287b6ff80582624bf06"},{url:"/_next/static/3o7SR_97yJo-oL1ywCjEZ/_buildManifest.js",revision:"d4cbbcaf5792610295ecb5a01e0f6ec4"},{url:"/_next/static/3o7SR_97yJo-oL1ywCjEZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/295-92629f9b37a8293f.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/810-6a296449bb56bb1e.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/app/About/page-6c448f641f3467e3.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/app/_not-found/page-254ea3bf74e16720.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/app/layout-81850a369e581080.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/app/page-c6c91bc69a7523bd.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/e24818a2-0d2a7fc4216728c8.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/framework-bba3881a2c887294.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/main-665dac9f293c00c1.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/main-app-0061e1b784c7120d.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/pages/_app-24d1ca1f6967a468.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/pages/_error-454df326fff91aff.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-899a29c9204078a0.js",revision:"3o7SR_97yJo-oL1ywCjEZ"},{url:"/_next/static/css/01284aa7a5e9b3a8.css",revision:"01284aa7a5e9b3a8"},{url:"/_next/static/css/b6602fd1847a4c45.css",revision:"b6602fd1847a4c45"},{url:"/_next/static/css/d21d4b29a9403076.css",revision:"d21d4b29a9403076"},{url:"/_next/static/media/pause.3dc0c79f.svg",revision:"3ed7c9f313660fb62908163cb1c71df0"},{url:"/_next/static/media/play.22a9974a.svg",revision:"01c5449ca84b2e8cb9fccf1d0f305c7a"},{url:"/_next/static/media/sradio.04c6b7fa.svg",revision:"d0637bbe75c06e6b226c06a88e50376d"},{url:"/favicon.svg",revision:"d0637bbe75c06e6b226c06a88e50376d"},{url:"/icons/icon-128x128.png",revision:"b74a293cd738396a6dbc30105b7e5f8c"},{url:"/icons/icon-144x144.png",revision:"db075fd3860e81429ca76881cfa6721c"},{url:"/icons/icon-152x152.png",revision:"7318efd14f2483607864a1663c8c0e6e"},{url:"/icons/icon-192x192.png",revision:"a2894d90d5058f07e7f70fde28890590"},{url:"/icons/icon-384x384.png",revision:"d326c3f253761a6c348abdb272fdd62d"},{url:"/icons/icon-512x512.png",revision:"91094e63b55dbb6225aa22b5f9b88c9b"},{url:"/icons/icon-72x72.png",revision:"726ec5168cb12bdca213221d52054379"},{url:"/icons/icon-96x96.png",revision:"53a660310b0a9e494ff41295b8e75972"},{url:"/icons/pause.svg",revision:"3ed7c9f313660fb62908163cb1c71df0"},{url:"/icons/play.svg",revision:"01c5449ca84b2e8cb9fccf1d0f305c7a"},{url:"/icons/sradio.svg",revision:"d0637bbe75c06e6b226c06a88e50376d"},{url:"/manifest.json",revision:"2788e1ee56344ea7a076f5402232b7a7"},{url:"/screenshots/sradio_desktop_screenshot.webp",revision:"be09e11871bdaa431807833d9b3b9e08"},{url:"/screenshots/sradio_mobile_screenshot.webp",revision:"a73517e63ea903e6c5c68f24c816f26f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
