if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return l[s]||(e=new Promise((async e=>{if("document"in self){const l=document.createElement("script");l.src=s,document.head.appendChild(l),l.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!l[s])throw new Error(`Module ${s} didn’t register its module`);return l[s]}))},e=(e,l)=>{Promise.all(e.map(s)).then((s=>l(1===s.length?s[0]:s)))},l={require:Promise.resolve(e)};self.define=(e,r,i)=>{l[e]||(l[e]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return l;case"module":return n;default:return s(e)}}))).then((s=>{const e=i(...s);return l.default||(l.default=e),l}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d836777451793c8f773f923e70b75cef"},{url:"assets/css/462.styles.a3547b0a.css",revision:null},{url:"assets/css/styles.0efb1283.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/instasll.8c70bf30.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/107.67d8814d.js",revision:null},{url:"assets/js/205.74885cf9.js",revision:null},{url:"assets/js/245.a04bb517.js",revision:null},{url:"assets/js/491.323a1282.js",revision:null},{url:"assets/js/774.b52a7a58.js",revision:null},{url:"assets/js/app.88a46ac9.js",revision:null},{url:"assets/js/runtime~app.a2b476c6.js",revision:null},{url:"assets/js/v-02b49bb5.f56de457.js",revision:null},{url:"assets/js/v-134daec4.d9f62053.js",revision:null},{url:"assets/js/v-2ab098c0.417e0983.js",revision:null},{url:"assets/js/v-3706649a.e3d369d4.js",revision:null},{url:"assets/js/v-40748f39.c162425d.js",revision:null},{url:"assets/js/v-43ebe826.b277bf83.js",revision:null},{url:"assets/js/v-46e6e855.dbe0fbc9.js",revision:null},{url:"assets/js/v-4bbf47d6.03a24421.js",revision:null},{url:"assets/js/v-4c78588a.78069000.js",revision:null},{url:"assets/js/v-5f5e8084.b3af1ced.js",revision:null},{url:"assets/js/v-6657f713.9dc0d80f.js",revision:null},{url:"assets/js/v-6c94be79.e00b4743.js",revision:null},{url:"assets/js/v-6dcf6fe2.752165ed.js",revision:null},{url:"assets/js/v-73bc6b79.a245232b.js",revision:null},{url:"assets/js/v-74458d05.6ac3319d.js",revision:null},{url:"assets/js/v-74473916.2216bec9.js",revision:null},{url:"assets/js/v-744e35e2.ed8ff637.js",revision:null},{url:"assets/js/v-7bd3de6f.ba508bb9.js",revision:null},{url:"assets/js/v-8daa1a0e.31d0ccd6.js",revision:null},{url:"assets/js/v-8e6560ec.ccd2d25f.js",revision:null},{url:"assets/js/v-9588fb76.41c474db.js",revision:null},{url:"assets/js/v-dd6edac6.73925b84.js",revision:null},{url:"assets/js/v-eb8ea600.ff5dfc04.js",revision:null},{url:"assets/js/v-f20d4d92.124bbccb.js",revision:null},{url:"css/index.html",revision:"c55c35a0e26fa3c24a96393ed38873a3"},{url:"css/scss.html",revision:"827b408ee5a571044718e789a2963165"},{url:"css/skill.html",revision:"48327282c29ebd948c98786d8eb1db1d"},{url:"git/command.html",revision:"9b50b1fdbceed65ab3ebdc344182e947"},{url:"git/index.html",revision:"c50b44c454107404f9990e62310c47ea"},{url:"index.html",revision:"e83eeaa292111dffe60469d4b9f5cf85"},{url:"issue/h5.html",revision:"77b2cb9410d6d608544312c46358b5a6"},{url:"issue/pc.html",revision:"f7dd83c7a77ea9d086c12485c978eff0"},{url:"logo.png",revision:"711c445a59ecf03e12cf2b23a6b340e3"},{url:"node/npm.html",revision:"a704d0feffc93fa8540bffd19b093e79"},{url:"node/toolkit.html",revision:"f8bdd695df0532deab39ab8894026460"},{url:"online-tools/bookmark-scripts.html",revision:"b749762691d9a9b2ba9ba29ddeded976"},{url:"online-tools/index.html",revision:"ce4e63411b3656b36b89d5849231032c"},{url:"software/browser.html",revision:"d6128862ff7ff47369db19dfbc257295"},{url:"software/cross-platform.html",revision:"24e222ecfa93752d6d4e34c8c4d8c964"},{url:"software/mac.html",revision:"4c8699c41cb755e4a1d41124df19141c"},{url:"software/vscode.html",revision:"fd04645fd11a2f1984ceecc8192823c5"},{url:"software/webstorm.html",revision:"d6472b2427306dd99c65a4596cc08c7a"},{url:"software/windows.html",revision:"f60290062533d7c7ef34f781085cdc79"},{url:"software/zsh.html",revision:"ebeceb684b45cf4afed130df338c6737"},{url:"utils/function.html",revision:"a335d3b679fac52e1e9ab07c907b8d34"},{url:"utils/library.html",revision:"a7a88a776bf44e6debc9ff43ac6d9a59"},{url:"utils/regexp.html",revision:"d1ef4730975f8b42216ad0386322366e"},{url:"vue/index.html",revision:"da3b39def5ea4387be50bea6fd44c16f"}],{})}));
