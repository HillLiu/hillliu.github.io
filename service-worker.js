if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,u)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let i={};const a=s=>l(s,r),d={module:{uri:r},exports:i,require:a};e[r]=Promise.all(n.map((s=>d[s]||a(s)))).then((s=>(u(...s),i)))}}define(["./workbox-66702f27"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"./assets/../index.html",revision:"aac623274ba13681c3d4c6e8ea4a32ad"},{url:"./assets/0.9ad3710.bundle.js",revision:null},{url:"./assets/1.9ad3710.bundle.js",revision:null},{url:"./assets/10.9ad3710.bundle.js",revision:null},{url:"./assets/11.9ad3710.bundle.js",revision:null},{url:"./assets/12.9ad3710.bundle.js",revision:null},{url:"./assets/13.9ad3710.bundle.js",revision:null},{url:"./assets/14.9ad3710.bundle.js",revision:null},{url:"./assets/15.9ad3710.bundle.js",revision:null},{url:"./assets/16.9ad3710.bundle.js",revision:null},{url:"./assets/17.9ad3710.bundle.js",revision:null},{url:"./assets/18.9ad3710.bundle.js",revision:null},{url:"./assets/19.9ad3710.bundle.js",revision:null},{url:"./assets/20.9ad3710.bundle.js",revision:null},{url:"./assets/21.9ad3710.bundle.js",revision:null},{url:"./assets/22.9ad3710.bundle.js",revision:null},{url:"./assets/23.9ad3710.bundle.js",revision:null},{url:"./assets/24.9ad3710.bundle.js",revision:null},{url:"./assets/25.9ad3710.bundle.js",revision:null},{url:"./assets/26.9ad3710.bundle.js",revision:null},{url:"./assets/27.9ad3710.bundle.js",revision:null},{url:"./assets/5.9ad3710.bundle.js",revision:null},{url:"./assets/6.9ad3710.bundle.js",revision:null},{url:"./assets/7.9ad3710.bundle.js",revision:null},{url:"./assets/8.9ad3710.bundle.js",revision:null},{url:"./assets/9.9ad3710.bundle.js",revision:null},{url:"./assets/lib.9ad3710.bundle.js",revision:null},{url:"./assets/main.9ad3710.bundle.js",revision:null},{url:"./assets/vendor.9ad3710.bundle.js",revision:null},{url:"./assets/worker.719ffb5.bundle.worker.js",revision:null}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new s.CacheFirst({cacheName:"css",plugins:[new s.ExpirationPlugin({maxEntries:10})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new s.CacheFirst({cacheName:"data",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET")}));
