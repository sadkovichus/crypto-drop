if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>i(e,r),c={module:{uri:r},exports:l,require:o};s[r]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-fb0596ae"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C7TT8Hwq.js",revision:null},{url:"assets/index-legacy-LliFFpzG.js",revision:null},{url:"assets/polyfills-legacy-NvypbrlJ.js",revision:null},{url:"index.html",revision:"e7b1aae5364102a108074f1fb369a9bf"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"d9f1f15576035376278f2080e72c29d0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/^https:\/\/api\.CryptoDrop\.com\/.*$/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET")}));
