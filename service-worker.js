if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,u)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const d=e=>n(e,r),t={module:{uri:r},exports:i,require:d};s[r]=Promise.all(l.map((e=>t[e]||d(e)))).then((e=>(u(...e),i)))}}define(["./workbox-e31792a0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/../index.html",revision:"f42bb9af4391de4fab9d4d1feea4f634"},{url:"./assets/0.1906ed6.bundle.js",revision:null},{url:"./assets/10.1906ed6.bundle.js",revision:null},{url:"./assets/11.1906ed6.bundle.js",revision:null},{url:"./assets/12.1906ed6.bundle.js",revision:null},{url:"./assets/13.1906ed6.bundle.js",revision:null},{url:"./assets/14.1906ed6.bundle.js",revision:null},{url:"./assets/15.1906ed6.bundle.js",revision:null},{url:"./assets/16.1906ed6.bundle.js",revision:null},{url:"./assets/17.1906ed6.bundle.js",revision:null},{url:"./assets/18.1906ed6.bundle.js",revision:null},{url:"./assets/19.1906ed6.bundle.js",revision:null},{url:"./assets/20.1906ed6.bundle.js",revision:null},{url:"./assets/21.1906ed6.bundle.js",revision:null},{url:"./assets/22.1906ed6.bundle.js",revision:null},{url:"./assets/23.1906ed6.bundle.js",revision:null},{url:"./assets/24.1906ed6.bundle.js",revision:null},{url:"./assets/4.1906ed6.bundle.js",revision:null},{url:"./assets/5.1906ed6.bundle.js",revision:null},{url:"./assets/6.1906ed6.bundle.js",revision:null},{url:"./assets/7.1906ed6.bundle.js",revision:null},{url:"./assets/8.1906ed6.bundle.js",revision:null},{url:"./assets/9.1906ed6.bundle.js",revision:null},{url:"./assets/lib.bundle.js",revision:"f2c1c17ad7f0bbdca053dc3dcecf6c38"},{url:"./assets/main.bundle.js",revision:"f744cd50e7bf8d518fa2a50d824ee888"},{url:"./assets/vendor.bundle.js",revision:"5924cccf751484cfd4d380a8e6df9349"},{url:"./assets/worker.bundle.worker.js",revision:"4869198602b44fd36d0a79d1db879ccb"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new e.CacheFirst({cacheName:"css",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET"),e.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new e.CacheFirst({cacheName:"data",plugins:[new e.ExpirationPlugin({maxEntries:5})]}),"GET"),e.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new e.CacheFirst({cacheName:"env",plugins:[new e.ExpirationPlugin({maxEntries:5})]}),"GET")}));
