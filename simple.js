!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},i="undefined",o=undefined,a=Object.keys,u=Array.isArray,c="|boolean|number|string|object|function|"+i+"|",s=function(t,e){return-1===c.indexOf("|"+t+"|")?(e||(e=t),e):t},f=function(t,e){var n=Object.prototype.toString.call(t).replace(/^\[object\s(.*)\]$/,"$1").toLowerCase();return s(n,e)},l=function(t,e){if(null==t)return f(t,e);try{var n=Object.getPrototypeOf(t).constructor.name.toLowerCase();return s(n,e)}catch(r){return f(t,e)}};function p(t){for(var e=1,n=arguments.length;e<n;e++)if(e%2||!Object.getOwnPropertyDescriptors){var i=null!=arguments[e]?arguments[e]:{},o=a(i);"function"===l(Object.getOwnPropertySymbols)&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){r(t,e,i[e])}))}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var d=function(t){return null!=t?new Date(t):new Date},v=function(t){return+d(t)},g=function(){return v()+""+Math.random()},h=v(),m=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(t,e){for(var n=0,r=e.length;n<r;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}},b=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t},k=function(t,e,n,r,i){if(!i&&function(t){var e="|".concat(t.join("|"),"|");return["__proto__","constructor","prototype"].some((function(t){return-1!==e.indexOf("|".concat(t,"|"))}))}(e))throw"Contain un-safe key.";var o=e.pop(),a=t;e.forEach((function(t){var e;a[t]=null!==(e=a[t])&&void 0!==e?e:Object.create(null),a=a[t]})),!r||a[o]&&a[o].push?r&&a[o].push?a[o].push(n):a[o]=n:a[o]?a[o]=[a[o],n]:a[o]=[n]},w=function(t){return"symbol"===l(t)?"symbol":l(t,"object")},I=function(t,e){return"function"===w(t)?t(e):null!=t?t:e},_=function(t){return t&&t.toJS?t.toJS():t},x=function(t,e){var n=O(t,e,{}),r={};return a(n).forEach((function(t){return r[t]=_(n[t])})),r},O=function(t,e,n){if(null==t)return I(n,t);var r=_(t);if(!e||!u(e))return r;try{for(var o=e.length,a=e.length-1;o--;){var c=e[a-o];if(!r||i===w(r[c])){r=I(n);break}if(null==(r=r[c])){r=I(n,r);break}}}catch(s){console.warn({e:s}),r=I(n)}return r},E=O,C=function(t,e,n,r){return"function"===w(t)?t.apply(n,e):i!==w(r)?r:t},P=function(t){return E(t,["params"],{})},S=function(){function t(){m(this,t)}return b(t,[{key:"sendBeacon",value:function(t,e){return t}},{key:"initDone",value:function(t,e){var n=this,r=e||{},i=r.triggerImpression,o=r.asyncInit,a=function(t){return t.set("init",!0).set("nextEmit","init")};return!o&&this.dispatch(a(t)),setTimeout((function(){i?i((function(){return n.dispatch("impression")})):n.dispatch("impression")})),o?a(t):t}},{key:"processImpression",value:function(t,e){return this.sendBeacon(t,e)}},{key:"processAction",value:function(t,e){var n=t.get("vpvid");return n&&k(e,[PARAMS,"query","vpvid"],n),this.sendBeacon(t,e)}},{key:"handleInit",value:function(t,e){var n=t.get("initHandler"),r=this.initDone.bind(this);return n||(e.asyncInit=!0),C(n||r,[t,e,r])}},{key:"handleImpression",value:function(t,e){var n=this;return t.get("init")?t.get("disableHandleImpression")?t:function(t){var r=t.get("impressionHandler"),i=C(r||n.processImpression.bind(n),[t,e]);return P(e).stop||(i=i.set("nextEmit","impression")),i}(t):this.handleInit(t,e)}},{key:"handleAction",value:function(t,e){var n=t.get("actionHandler"),r=C(n||this.processAction.bind(this),[t,e]),i=P(e),o=i.wait,a=i.stop;return null!=o||a||(r=r.set("nextEmit","action")),r}},{key:"mergeMap",value:function(){throw"abstract method"}},{key:"reduce",value:function(t,e){switch(t.get("nextEmit")&&(t=t.set("nextEmit",null)),e.type){case"impression":return this.handleImpression(t,e);case"action":return this.handleAction(t,e);case"config/set":return this.mergeMap(t,e.params);case"reset":return this.mergeMap(this.store.reset(),e.params);default:return a(e).length?this.mergeMap(t,e):t}}}]),t}(),j=Object.assign||function(t){for(var e=1,n=arguments.length;e<n;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},D=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},A=Object.keys,N=function(){function t(e){m(this,t),this._storage=e}return b(t,[{key:"set",value:function(e,n){var r=JSON.stringify(_(n)),i=r.length+","+r;return this._storage(e)(i),new t(this._storage)}},{key:"merge",value:function(e){var n=this;if(!e||"object"!==w(e))return this;var r=A(e);return r&&r.length?(r.forEach((function(t){return n.set(t,e[t])})),new t(this._storage)):this}},{key:"get",value:function(t){var e=this._storage(t)();if(e){var n,r=e.indexOf(","),i=(n=e.substring(0,r),parseInt(n,10)),o=e.substr(r+1);return i===o.length?JSON.parse(o):null}}}]),t}(),T={__null:!0},z=function(t,e){return t=t||M(),i!==w(t.document)?t.document:e||T},M=function(t){return"undefined"!=typeof window?window:t||T},L={},H=function(t){return function(e){return function(n){var r=M();if(r&&!L[t]){var o=E(r,[t]);if(i===w(o))return console.warn("Not support. ["+t+"]"),void(L[t]=!0);if(i===w(n))return o.getItem(e);try{return null==n?o.removeItem(e):o.setItem(e,n)}catch(a){return o.clear(),o.setItem(e,n)}}}}},q=H("localStorage"),R=(H("sessionStorage"),function(t){var e=d(t),n=[e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map((function(t){return(e=t)<10?"0"+e:e;var e}));return{toArray:function(){return n},toString:function(){return[n.slice(0,3).join("-"),"T",n.slice(3).join(":"),"Z"].join("")}}}),U=["stop","wait","lazeInfo","lazyKey"];function F(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[];return a(t).some((function(r,i){if(n.push(t[r]),e===i+1)return!0})),n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J,V,B,K,X,$=function(){function t(e){m(this,t),r(this,"_state",{}),e&&(this._state=e)}return b(t,[{key:"get",value:function(e){return"object"===w(this._state[e])&&null!==this._state[e]?new t(this._state[e]):this._state[e]}},{key:"set",value:function(e,n){var i=p(p({},this._state),{},r({},e,_(n)));return this._state=i,new t(i)}},{key:"delete",value:function(e){var n=p({},this._state);return delete n[e],this._state=n,new t(n)}},{key:"merge",value:function(e){var n=p(p({},this._state),_(e));return this._state=n,new t(n)}},{key:"toJS",value:function(){return this._state}}]),t}(),G=(Object.keys,!1),W=0,Y=function(t,e,n){if(5===W)console.log("Max Errors exceed.",5);else if(W>5)return;W++;var r=t||{},i=r.message,a=(r.stack,{message:i,stack:E(t,["stack"],"").split(/\n/),url:z().URL,lastExec:void 0});if(n&&(a.name=n),setTimeout((function(){var t=e&&-1!==e.indexOf("I13nScriptErr")?0:o;nt("action",{wait:t,I13N:{action:e,category:"Error",label:a}})})),G)throw console.error({action:e,name:n},void 0),t},Z=JSON,Q=new S,tt=F((J=Q.reduce.bind(Q),V=new $,K={current:C(V||{})},B=[],[{reset:function(){return X.reset()&&C(V||{})},getState:function(){return K.current},addListener:(X={reset:function(){return B.splice(0,B.length)},add:function(t){return B.unshift(t)},remove:function(t){return B.splice(B.indexOf(t)>>>0,1)},emit:function(t,e,n){return setTimeout((function(){for(var r=B.length;r--;){var i=B[r];i&&i(t,e,n)}}))}}).add,removeListener:X.remove},function(t,e){t=function(t,e){return(t=t||{}).trim&&(t={type:t},e&&(t.params=e)),t}(t,e);var n=K.current,r=J(n,t);if(r===o)throw console.trace(),"reduce() return ".concat(i,".");n!==r&&(K.current=r,X.emit(r,t,n))}]),2),et=tt[0],nt=tt[1],rt=function(t,e){return t.merge(e)};(function(t){var e=t.oI13n,n=t.store,r=t.i13nDispatch,i=t.mergeMap;e.store=n,e.dispatch=r,e.mergeMap=i,n.i13n=e})({oI13n:Q,store:et,i13nDispatch:nt,mergeMap:rt}),et.getClone=function(t){return function(t){try{return Z.parse(Z.stringify(t))}catch(e){Y(e,"I13nScriptErr")}}(x(et.getState().get(t)))},Object.keys;var it,ot,at=Object.keys,ut=Array.isArray,ct=function(t,e,n){if(!t)return t;e&&"function"!==w(e)&&(e=function(t){return i!==w(t)});var r={};return at(t).forEach((function(i){var o=t[i];n&&n.length&&-1!==n.indexOf(i)||(o||e&&e(o))&&(r[i]=o)})),ut(t)?at(r).map((function(t){return r[t]})):r},st=new $,ft=new $,lt=function(t,e){return function(n){var r=x(st.get("i13nLazyAttr"));if(i===w(t))return r;var o=x(st.get("i13nLazyExpire")),a=v();return i!==w(n)&&(r[t]=n,o[t]=a,st.set("i13nLazyAttr",r),st.set("i13nLazyExpire",o)),function(t,e,n,r){var i=v(),o=!1;return null==t||isNaN(t)||(!e||i-t<=e)&&(o=!0),C(o?n:r)}(o[t],e?1e3*e:null,(function(){return r[t]}))}},pt=lt("__prods"),dt=function(t){var e=x(pt());return["impressions","detailProducts","products"].forEach((function(n){var r,i=u(t[n])?t[n]:(r=t[n],a(r||{}).map((function(t){return r[t]})));i.length?function(t,e){t.forEach((function(n,r){n&&n.id&&(e[n.id]=p(p({},e[n.id]),ct(n)),delete e[n.id].quantity,delete e[n.id].variant,delete e[n.id].position,t[r]=p(p({},n),e[n.id]))}))}(i,e):delete t[n]})),pt(e),t},vt=function(t){var e=dt(x(t.get("I13N"))),n=dt(x(t.get("i13nPage")));return t.set("I13N",e).set("i13nPage",n)},gt=function(){return{dispatch:nt}},ht=function(){return"https://www.google-analytics.com/".concat(G?"debug/":"","collect")},mt=[{},[]],yt=function(t){t=t||new N(q);var e=function(){return x(t.get("lazyAction"))},n=function(e){return t.set("lazyAction",e)};return{process:function(t){return n(function(t,e){var n=function(t,n){var r=t[n],o=P(r),a=o.wait,u=o.stop;return!a||a<=0?(u||(i!==w(E(r,["params","wait"]))&&delete r.params.wait,e&&e(r)),delete t[n]):r.params.wait=function(t){throw new Error('"wait" is read-only')}(),t[n]},r=E(t,["__seq"]);u(r)&&(t.__seq=r.filter((function(t,e){return n(r,e)})));var o=E(t,["__hash"]);return o&&a(o).forEach((function(t){return n(o,t)})),t}(e(),t))},handleAction:function(t,r){var i=P(r).withLazy;i&&(r=function(t,n){var r=e(),i=E(r,["__hash",n,"params"],{}),o=(i.stop,i.wait,i.lazeInfo,i.lazyKey,D(i,U));return a(o).forEach((function(e){var n=o[e],r="object"===w(n)?p(p({},n),E(t,["params",e],{})):E(t,["params",e],n);k(t,["params",e],r)})),delete t.params.withLazy,t}(r,i));var o,u,c=t.get("lazyActionHandler"),s=C(c,[t,r])||t,f=P(r),l=f.wait,d=f.stop,v=f.lazyKey;return null!=l||d||i&&i!==v&&(o=i,u=e(),E(u,["__hash",o])&&(delete u.__hash[o],n(u))),s},getAll:e,getOne:function(t){return x(e().__hash)[t]},push:function(t,r){var i=P(t),o={params:j({},i),type:t.type};k(o,["params","lazeInfo"],{from:z().URL,time:R().toString()});var a=e();r?k(a,["__hash",r],o):k(a,["__seq"],o,!0),n(a)}}}(ft),bt=function(t,e){return function(){t.get("init")||k(e,["params","wait"],0);var n=F(mt,2),r=n[0],o=n[1],a=o[0],u=o[1],c=P(e);isNaN(c.delay)||delete e.params.delay;var s,f,l=c.i13nCb,p=c.lazeInfo,d=c.i13nPageCb,v=c.wait,g=c.lazyKey,h=c.I13N;if(p&&(h.lazeInfo=p),"function"===w(l)&&(r.currentTarget=null!==(s=r.currentTarget)&&void 0!==s?s:u,h=l(a,null!==(f=h)&&void 0!==f?f:{},r,t),delete e.params.i13nCb),h=function(t,e){var n=e&&e.get("oneTimeAction"),r=t&&t.action;if(r&&n&&n.length){var i=lt("oneTimeAction"),o=i()||{};if(o[r])return!1;-1!==n.indexOf(r)&&(o[r]=!0,i(o))}return t}(h,t),t=t.set("I13N",h),h?i!==w(v)&&(k(e,["params","I13N"],dt(h)),yt.push(e,g)):k(e,["params","stop"],!0),"function"===w(d)){var m=d(e,h,r);if(m){var y=t.get("i13nPage");t=t.set("i13nPage",y?y.merge(m):m)}}return vt(t)}},kt=function(t,e){var n=P(e),r=n.delay,o=n.wait,u=bt(t,e);return isNaN(r)?t=u():(setTimeout((function(){var t=u();t&&nt(t);var e=t.get("I13N");i===w(o)&&a(e.toJS()).length&&nt("action",{I13N:e})}),r),k(e,["params","stop"],!0)),t},wt=function(t,e){return function(n,r){n.get("nextEmit")===e&&C(t)}},It=/[|\\{}()[\]^$+*?.]/g,_t=function(t){return function(e,n){return function(r){if(!t[r]){var i=e?e(r):r;t[r]=new RegExp(i,n)}return t[r]}}},xt=function(t){return(e=t,e?e+"":"").replace(It,"\\$&");var e},Ot=function(t){return"(([#?&])"+xt(t)+"=)([^&#]*)"},Et=_t({})(Ot),Ct=_t({})(Ot,"g"),Pt=function(t){return Et(t)},St=/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,jt={},Dt=o,At=function(t){var e=function(t){return jt[t]||(jt[t]=St.exec(t)),jt[t]}(t);return{host:e[11],query:e[16],path:e[13]}},Nt=function(t){return t||z().URL},Tt=function(t,e){var n=At(Nt(e)).query,r=void 0===n?"":n,i=function(t){var e=t+"=";if(r.indexOf(e)===r.lastIndexOf(e)){var n=Pt(t).exec(r);return n?decodeURIComponent(n[3]):Dt}var i,o=zt(t,r);return u(i=o)?i.length>1?i:i[0]:i};if(u(t)){var o={};return t.forEach((function(t){o[t]=i(t)})),o}return t?i(t):Dt},zt=function(t,e){var n=At(Nt(e)).query;return function(t,e){for(var n,r=Ct(t),i=[];n=r.exec(e);)i.push(decodeURIComponent(n[3]));return i}(t,void 0===n?"":n)},Mt=["Shopify","Checkout"],Lt=function(){return E(M(),[].concat(Mt,["step"]))},Ht=function(){var t=E(M(),["__st","pageurl"]);if(t)return"https://"+t},qt=function(){switch(Lt()){default:break;case"contact_information":return 1;case"shipping_method":return 2;case"payment_method":return 3}},Rt=Lt,Ut=function(){return E(M(),["Shopify","shop"],(function(){return E(M(),[].concat(Mt,["apiHost"]))}))},Ft=function(){if("thank_you"===Lt())return"thank_you";var t=M();return E(t,["__st","t"],(function(){return E(t,["__st","p"])}))},Jt=function(){return E(M(),["__st","cid"])},Vt=function(){var t=Ht(),e=Tt("_ga",t)||"";return E(e.split("-"),[1])},Bt=Ht,Kt=function(){return E(M(),[].concat(Mt,["currency"]),(function(){return E(M(),["Shopify","currency","active"])}))},Xt=function(){var t=E(M(),[].concat(Mt,["token"]));if(t)return"shopify-checkout-"+t},$t=function(t,e,n){var r=E(t,["currencyCode"])||n;k(e,["currencyCode"],r)},Gt={},Wt=function(t,e,n){var r=t.stepNo,i=t.stepOption,o=t.products,a=null!=r?r:qt(),u=null!=i?i:Rt();if(a){var c={step:a,option:u};!Gt[a]||o&&o.length||!u?(Gt[a]={actionField:c,products:o},$t(t,e,n),k(e,["checkout"],Gt[a])):k(e,["checkout_option"],{actionField:c})}},Yt=function(t,e){var n=t.promotions;n&&k(e,["promoView","promotions"],n)},Zt=function(t,e,n){var r=t.fromP,i=t.detailProducts;i&&(r&&k(e,["detail","actionField","list"],r),$t(t,e,n),k(e,["detail","products"],i))},Qt=function(t,e,n){var r=t.p,i=t.impressions;i&&($t(t,e,n),r&&i.forEach((function(t,e){return i[e].list=t.list||r})),k(e,["impressions"],i))},te=function(t,e,n,r){var i=t.purchaseId,o=t.refundId,a=t.products,u=E(t,["affiliation"],""),c=E(t,["coupon"],""),s=E(t,["revenue"],0),f=E(t,["tax"],0),l=E(t,["shipping"],0);i&&($t(t,e,n),k(e,["purchase","actionField"],{id:i,affiliation:u,revenue:s,tax:f,shipping:l,coupon:c}),k(e,["purchase","products"],a)),o&&(k(e,["refund","actionField","id"],o),a&&($t(t,e,n),k(e,["refund","products"],a)))},ee=function(t,e){var n,r,i=e.defaultCurrencyCode,o=t.p,a=t.action,u=t.products,c=t.promotions,s={};o&&(r={list:o});var f={actionField:r,products:u};switch(a){case"ClickPromotion":s.promoClick={promotions:c};break;case"ClickProduct":s.click=f,n=E(u,[0,"price"]),$t(t,s,i);break;case"BuyNow":case"AddToCart":s.add=f,$t(t,s,i);break;case"RemoveFromCart":s.remove=f,$t(t,s,i);break;case"ViewContent":Yt(t,s),Zt(t,s,i),Qt(t,s,i)}return Wt(t,s,i),te(t,s,i),{ecommerce:s,value:n}},ne=function(t,e){var n=e.defaultCurrencyCode,r={};return Yt(t,r),Zt(t,r,n),Qt(t,r,n),te(t,r,n),Wt(t,r,n),{ecommerce:r}},re=function(t,e,n){var r=n.getState(),o=C("action"===t.trigger?ee:ne,[e,{defaultCurrencyCode:r.get("currencyCode")}]),u=o.ecommerce,c=o.value;return a(u).length&&(t.ecommerce=u,"action"===t.trigger&&(t.category="Ecommerce",i!==w(t.value)||isNaN(c)||(t.value=c))),t},ie="|number|".concat("string","|"),oe=function(t){if(i===w(t))return 0;if(-1!==ie.indexOf("|"+w(t)+"|")&&t){var e=t&&t.trim?t.trim():t+"",n=parseFloat(e),r=parseInt(e,10);if(n!==r||r+""!==e&&0!==r){if(e===n+"")return n;var o=0;return-1!==e.indexOf(".")?n:(isNaN(e)||(o=e),console.warn("Can not change to number well.",{willNum:o,maybeString:e,num:t}),o)}return r}var a=Number(t);return isNaN(a)?0:a},ae=/(\-)?(\d+)(\.)?(\d+)?/g,ue=function(t){if("string"!==w(t))return oe(t);var e=t.replace(",","").match(ae);return e?oe(e[0]):(console.warn("Get number fail",t),0)},ce=!0,se=_t({})((function(t){return"(?:^|;)\\s?"+xt(t)+"=([^;]+)"})),fe=function(t){console.warn("cookie not support",{e:t}),ce=!1},le=function(t,e){e=function(t){if(t)return t;if(!ce)return"";try{return z().cookie}catch(e){return fe(e),""}}(e);var n=function(t){return se(t)}(t).exec(e);return null!==n?decodeURIComponent(n[1]):null},pe=function(t){return E(t,["location"],(function(){return Bt()||z().URL}))},de=pe,ve=function(t){var e=(le(t||"")||"").split(".");if(e[2]&&e[3])return e[2]+"."+e[3]},ge=function(){return Xt()||((t=ve("_ga"))||function(t,e,n,r){if(ce)try{z().cookie=function(t,e,n,r){r=r||"";var i="";if(n=n||0){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="expires="+o.toUTCString()+";"}return r&&(r="domain="+r+";"||!1),t+"="+e+";"+i+r+"path=/"}(t,e,n,r)}catch(i){fe(i)}}("_ga","GA1.3."+(t=g()),730),t);var t},he=["id","name","category","brand","variant","position","price","quantity","coupon","image","sku"],me=["list"],ye=function(t){return t&&Array.isArray(t)&&t.length},be=function(t){return i!==w(t)?ue(t):t},ke=function(){function t(){var e=this;m(this,t),r(this,"isSameHost",(function(t){return function(e){var n="//"+t,r=e.indexOf(n);if(5===r||6===r){var i=e.charAt(r+n.length);if("/"===i||"?"===i||""===i||":"===i)return!0}return!1}})),r(this,"getPromotionsData",(function(t){return e.getItemsData(t,"promo",e.setOnePromotion)})),r(this,"setOnePromotion",(function(t,e,n,r){var i=n.id,o=n.name,a=n.creative,u=n.position;e[t+"id"]=i,e[t+"nm"]=o,e[t+"cr"]=a,e[t+"ps"]=be(u)})),r(this,"getProductsData",(function(t,n){return e.getItemsData(t,"pr",e.setOneProduct,n)}))}return b(t,[{key:"getReferrer",value:function(t){t||(t=z());var e=At(pe(void 0)).host,n=E(t,["referrer"]);if(n&&!this.isSameHost(e)(n))return{dr:n}}},{key:"getActionData",value:function(t){var e=t||{},n=e.action,r=e.category,i=e.label,o=e.value;return{ec:r,ea:n,el:i,ev:be(o)}}},{key:"getItemsData",value:function(t,e,n,r){if(ye(t)){var i=1,o={};return t.forEach((function(t){if(t){var a=e+i;i++,C(n,[a,o,t,r])}})),o}}},{key:"getEcPromotionData",value:function(t,e){if(t||e){var n=(t||e).promotions;return p({promoa:t?"view":"click"},this.getPromotionsData(n))}}},{key:"setOneProduct",value:function(t,e,n,r){var i=n.id,o=n.name,u=n.category,c=n.brand,s=n.variant,f=n.position,l=n.price,p=n.quantity,d=n.coupon,v=n.image,g=n.sku,h=D(n,he);null==i&&null==o||(e[t+"id"]=i,e[t+"nm"]=o,e[t+"br"]=c,e[t+"ca"]=u,e[t+"va"]=s,e[t+"pr"]=be(l),e[t+"qt"]=p,e[t+"cc"]=d,e[t+"ps"]=be(f),e[t+"img"]=v,e[t+"sku"]=g,a(h).forEach((function(n){var r;if(0===n.indexOf("dimension")&&(r="cd"),0===n.indexOf("metric")&&(r="cm"),r){var i=ue(n);e[t+r+i]=h[n]}})),(r||{}).imageIndex&&(e[t+"cd"+r.imageIndex]=v))}},{key:"getEcPurchaseData",value:function(t,e,n){if(t||e){var r,i=t||e,o=i.actionField,a=i.products,u=o||{},c=u.id,s=u.affiliation,f=u.revenue,l=u.tax,d=u.shipping,v=u.coupon;return r=t?{pa:"purchase",ti:c,ta:s,tr:be(f),tt:be(l),ts:be(d),tcc:v}:{pa:"refund",ti:c},a&&(r=p(p({},r),this.getProductsData(a,n))),r}}},{key:"getEcStepData",value:function(t,e,n){if(t||e){var r=t||e,i=r.actionField,o=r.products,a=i||{};return p({cos:a.step,col:a.option,pa:e?"checkout_option":"checkout"},this.getProductsData(o,n))}}},{key:"getEcActionData",value:function(t,e,n){if(t){var r=t.actionField,i=t.products,o=(r||{}).list,a=p(p({},this.getProductsData(i,n)),{},{pa:e,pal:o});return ct(a,!0)}}},{key:"getEcImpressionsData",value:function(t,e){var n=this;if(ye(t)){var r=1,i={},o={};return t.forEach((function(t){var a=t.list,u=D(t,me);i[a]||(i[a]={key:"il"+r,n:1},r++,o[i[a].key+"nm"]=a);var c=i[a].key+"pi"+i[a].n;i[a].n++,n.setOneProduct(c,o,u,e)})),o}}},{key:"getEcData",value:function(t){var e=(t||{}).ecommerce;if(e){var n=e.impressions,r=e.detail,i=e.click,o=e.add,a=e.remove,u=e.checkout,c=e.checkout_option,s=e.purchase,f=e.refund,l=e.promoView,d=e.promoClick,v=e.currencyCode;return p(p(p(p(p(p(p(p(p({},this.getEcImpressionsData(n,t)),this.getEcActionData(r,"detail",t)),this.getEcActionData(i,"click",t)),this.getEcActionData(o,"add",t)),this.getEcActionData(a,"remove",t)),this.getEcStepData(u,c,t)),this.getEcPurchaseData(s,f,t)),this.getEcPromotionData(l,d)),{},{cu:null!=v?v:Kt()})}}},{key:"getMp",value:function(t,e){var n=z(),r=M(),i=r.navigator||{},a=r.screen||{},u=n.documentElement||{},c=Math.max(u.clientWidth||0,r.innerWidth||0),s=Math.max(u.clientHeight||0,r.innerHeight||0),f=t||{},l=f.trackingId,d=f.needTrackingId,g=f.version;if(d&&null==l)return!1;var m=e||{},y=m.trigger,b=(m.trackingType,m.bCookieIndex),k=m.bCookie,w=m.lazeInfoIndex,I=m.lazeInfo,_=m.expId,x=m.expVar,O=m.siteId,E=m.email,P=m.p,S=m.p2,j=m.p3,D=m.p4,A=m.p5,N=p(p(p(p({},this.getActionData(e)),this.getEcData(e)),this.getReferrer()),{},{siteid:O,em:E,xid:_,xvar:x,fbp:le("_fbp")||o,fbc:le("_fbc")||o,cg1:P,cg2:S,cg3:j,cg4:D,cg5:A,_s:it,dl:de(),ul:(i.language||i.browserLanguage||"").toLowerCase(),de:n.characterSet||n.charset,dt:n.title,sd:a.colorDepth+"-bit",sr:a.width+"x"+a.height,vp:c+"x"+s,je:oe(C(i.javaEnabled,null,i)),tid:l,cid:ge(),scid:Vt(),dh:Ut(),_gid:ve("_gid"),v:g||1,z:ot,t:"impression"===y?"pageview":"event"});if(it++,"Error"===N.ec&&(N.t="exception",N.exd=N.ea),k&&(b&&(N["cd"+b]=k),N.uid=k),I){w&&(N["cd"+w]=I);var T=function(t){try{return Z.parse(t)}catch(e){Y(e,"I13nScriptErr")}}(I);if(T.time){var L=v(T.time);isNaN(L)||(N.qt=v()-L)}}return h&&(N.plt=v()-h),ct(N,!0)}}]),t}();it=1,ot=g();var we,Ie,_e,xe,Oe,Ee,Ce,Pe,Se=ke,je=function(t,e,n,r){var i=function(t,e){var n=M()||self;t=t||"GET";var r=null!=n.XMLHttpRequest?new n.XMLHttpRequest:null;return r&&"withCredentials"in r?r.open(t,e,!0):null!=n.XDomainRequest?(r=new n.XDomainRequest).open(t,e):r=null,r}(n,t);if(!i)return!1;i.timeout=3e4,i.onload=function(){we=!0,C(C(e,[i]))};try{return i.send(r),!0}catch(o){return console.warn("req failed.",{url:t,e:o}),!1}},De=function(t){if(M().__null)return je(t);var e,n=new Image;n.onload=function(){e&&clearTimeout(e),we=!0},n.src=t,e=setTimeout((function(){n.src=""}),9e4)},Ae=function(t,e,n,r){n=n||je,r=r||De;var i=function(t){var e="?";return t?(a(t).forEach((function(n){e=function(t,e,n,r){var i=u(e);return n=function(t,e){e=Nt(e);for(var n,r=Pt(t);n=r.exec(e);)e="?"===n[2]?e.replace(r,"?"):e.replace(r,"");return e}(t,Nt(n)),(i?e:[e]).forEach((function(e){r||(e=encodeURIComponent(e)),n=n+(-1===n.indexOf("?")?"?":"&")+t+"="+e})),n}(n,t[n],e)})),e.substring(2)):e}(e),o=t+"?"+i;2036>=o.length?r(o):function(t,e){var n=E(M(),["navigator","sendBeacon"]);return!(!n||!we||(n.call(M().navigator,t,e),0))}(t,i)||n(t,null,"POST",i)||r(o)},Ne=function(t){var e=t.store,n=t.gaId,r=t.bCookieIndex,i=t.lazeInfoIndex,o=t.mpHost,u=new Se,c=function(t){var c,s,f,l,d,v,g=e.getState(),h=null!==(d=null==et||null===(v=et.getState())||void 0===v?void 0:v.get("uid"))&&void 0!==d?d:Jt();h&&(t.bCookie=h,r&&(t.bCookieIndex=r)),t.lazeInfo&&i&&(t.lazeInfoIndex=i),"action"===t.trigger&&(t.label=(s=t.label,f=t.ecommerce?{ecommerce:t.ecommerce}:null,l=s,a(f||{}).length&&(l="object"!==w(l)?p({label:s},f):p(p({},l),f)),"object"===w(l)&&(l=JSON.stringify(l)),l)),t.p=null!==(c=t.p)&&void 0!==c?c:Ft(),t.expId=g.get("expId"),t.expVar=g.get("expVar"),t.siteId=g.get("siteId"),t.email=g.get("email"),t.gaId=n||g.get("trackingId"),function(t,n){n=n||Ae;var r=e.getState(),i=C(o)||r.get("mpHost"),a=r.get("defaultMpHost"),c=i||a;if(c){var s=u.getMp({trackingId:t.gaId,needTrackingId:r.get("needTrackingId"),version:r.get("version")},t);s&&n(c,s)}else console.warn("mp host not found")}(ct(t))};!function(t){return function(e){var n=e.init,r=e.action,i=e.impression;n&&t.addListener(wt(n,"init")),r&&t.addListener(wt(r,"action")),i&&t.addListener(wt(i,"impression"))}}(e)({action:function(){var t=e.getClone("I13N"),n=t.lazeInfo,r=t.action,i=t.category,o=t.label,a=t.value,u=t.p,s=t.p2,f=t.p3,l=t.p4,p=t.p5,d={trigger:"action",lazeInfo:JSON.stringify(n),action:r,category:null!=i?i:r,label:o,value:a,p:u,p2:s,p3:f,p4:l,p5:p};c(re(d,t,e))},impression:function(){var t=e.getClone("i13nPage"),n=t.p,r=t.p2,i=t.p3,o=t.p4,a=t.p5;c(re({trigger:"impression",p:n,p2:r,p3:i,p4:o,p5:a},t,e))}})},Te=function(t,e,n){var r=P(e);return function(t){for(var e=E(t,["tags"],[]),n=e.length;n--;)(r=e[n]).store=et,r.type,Ne(r);var r}(p(p({},E(t)),r)),e.asyncInit=!0,n(rt(t,r),e)},ze=function(t,e){return vt(t)};Ie=function(){var t=z().currentScript;if(t)return Tt("id",t.src)}(),_e={global:M()},Oe=(xe=_e||{}).global,Ee=xe.globalKey,Pe=void 0===(Ce=xe.utils)?gt:Ce,!1||((void 0===Oe?{}:Oe)[void 0===Ee?"i13n":Ee]=C(Pe),!0,nt("reset",{initHandler:Te,actionHandler:kt,impressionHandler:ze}),nt("impression",{trackingId:Ie,tags:[{mpHost:ht}]}))}]);