if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,u)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let i={};const b=s=>n(s,r),a={module:{uri:r},exports:i,require:b};e[r]=Promise.all(l.map((s=>a[s]||b(s)))).then((s=>(u(...s),i)))}}define(["./workbox-e31792a0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"./assets/../index.html",revision:"ab2d6bcce68a9baaea487f8c9ed9a102"},{url:"./assets/0.25bb11a.bundle.js",revision:null},{url:"./assets/10.25bb11a.bundle.js",revision:null},{url:"./assets/11.25bb11a.bundle.js",revision:null},{url:"./assets/12.25bb11a.bundle.js",revision:null},{url:"./assets/13.25bb11a.bundle.js",revision:null},{url:"./assets/14.25bb11a.bundle.js",revision:null},{url:"./assets/15.25bb11a.bundle.js",revision:null},{url:"./assets/16.25bb11a.bundle.js",revision:null},{url:"./assets/17.25bb11a.bundle.js",revision:null},{url:"./assets/18.25bb11a.bundle.js",revision:null},{url:"./assets/19.25bb11a.bundle.js",revision:null},{url:"./assets/20.25bb11a.bundle.js",revision:null},{url:"./assets/21.25bb11a.bundle.js",revision:null},{url:"./assets/22.25bb11a.bundle.js",revision:null},{url:"./assets/23.25bb11a.bundle.js",revision:null},{url:"./assets/24.25bb11a.bundle.js",revision:null},{url:"./assets/4.25bb11a.bundle.js",revision:null},{url:"./assets/5.25bb11a.bundle.js",revision:null},{url:"./assets/6.25bb11a.bundle.js",revision:null},{url:"./assets/7.25bb11a.bundle.js",revision:null},{url:"./assets/8.25bb11a.bundle.js",revision:null},{url:"./assets/9.25bb11a.bundle.js",revision:null},{url:"./assets/lib.bundle.js",revision:"0022009f50691d42c57821b055ba588e"},{url:"./assets/main.bundle.js",revision:"5a17a786fb5ef2b551d8d5dce8ddede9"},{url:"./assets/vendor.bundle.js",revision:"472d3ead3c248e5023e0d846c5619d1b"},{url:"./assets/worker.bundle.worker.js",revision:"694eacf7ab1c0a0641687db4cc34d1d5"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new s.CacheFirst({cacheName:"css",plugins:[new s.ExpirationPlugin({maxEntries:10})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new s.CacheFirst({cacheName:"data",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET")}));
