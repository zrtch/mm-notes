if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return l[s]||(e=new Promise((async e=>{if("document"in self){const l=document.createElement("script");l.src=s,document.head.appendChild(l),l.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!l[s])throw new Error(`Module ${s} didn’t register its module`);return l[s]}))},e=(e,l)=>{Promise.all(e.map(s)).then((s=>l(1===s.length?s[0]:s)))},l={require:Promise.resolve(e)};self.define=(e,r,i)=>{l[e]||(l[e]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return l;case"module":return n;default:return s(e)}}))).then((s=>{const e=i(...s);return l.default||(l.default=e),l}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d031102b54a45a36abc3331c0666564b"},{url:"assets/css/462.styles.a7faffcc.css",revision:null},{url:"assets/css/styles.7e10ae4b.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/instasll.8c70bf30.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/205.23d26be1.js",revision:null},{url:"assets/js/363.f673ae7b.js",revision:null},{url:"assets/js/437.ed4bc617.js",revision:null},{url:"assets/js/616.d5c85c91.js",revision:null},{url:"assets/js/961.eb465025.js",revision:null},{url:"assets/js/app.aa20e319.js",revision:null},{url:"assets/js/runtime~app.18f328a0.js",revision:null},{url:"assets/js/v-02b49bb5.fa76ff94.js",revision:null},{url:"assets/js/v-134daec4.cebe7813.js",revision:null},{url:"assets/js/v-2ab098c0.d90fffc3.js",revision:null},{url:"assets/js/v-3706649a.d62bda97.js",revision:null},{url:"assets/js/v-40748f39.85e4c92e.js",revision:null},{url:"assets/js/v-43ebe826.d54db6be.js",revision:null},{url:"assets/js/v-46e6e855.208e03b7.js",revision:null},{url:"assets/js/v-4bbf47d6.7b9d7649.js",revision:null},{url:"assets/js/v-4c78588a.5c023226.js",revision:null},{url:"assets/js/v-5f5e8084.3e66ceb4.js",revision:null},{url:"assets/js/v-6657f713.b9c04721.js",revision:null},{url:"assets/js/v-6c94be79.79b463d1.js",revision:null},{url:"assets/js/v-6dcf6fe2.36c40971.js",revision:null},{url:"assets/js/v-73bc6b79.6c6ba6a2.js",revision:null},{url:"assets/js/v-74458d05.789f400d.js",revision:null},{url:"assets/js/v-74473916.76752db3.js",revision:null},{url:"assets/js/v-744e35e2.66072bf0.js",revision:null},{url:"assets/js/v-7bd3de6f.a42b3c8b.js",revision:null},{url:"assets/js/v-8daa1a0e.ad848218.js",revision:null},{url:"assets/js/v-8e6560ec.e144828c.js",revision:null},{url:"assets/js/v-9588fb76.c6df1063.js",revision:null},{url:"assets/js/v-dd6edac6.6f6c1b77.js",revision:null},{url:"assets/js/v-eb8ea600.7d239d46.js",revision:null},{url:"assets/js/v-f20d4d92.f35379a7.js",revision:null},{url:"css/index.html",revision:"b348313420766cc2688f089fa1a0866f"},{url:"css/scss.html",revision:"1f6bc88c73d09c958e442d0560eff6d5"},{url:"css/skill.html",revision:"433f94d772e735d85d9ef9ebdfd17314"},{url:"git/command.html",revision:"c6f57e134147bfc26c9e3e8a6d9a88a2"},{url:"git/index.html",revision:"bae42c17a792ddb504606690f6c2b479"},{url:"index.html",revision:"4e9d73941d9e98487d006647074c22ec"},{url:"issue/h5.html",revision:"2ed09008927ee5f42dd8b6bf8dead6f3"},{url:"issue/pc.html",revision:"7bbce6b85e522f8be61542524afa153c"},{url:"logo.png",revision:"711c445a59ecf03e12cf2b23a6b340e3"},{url:"node/npm.html",revision:"f1a69e8d79f3a36a8abce02ab71c7696"},{url:"node/toolkit.html",revision:"78efb759108aec980c42cf892d7b2ff5"},{url:"online-tools/bookmark-scripts.html",revision:"a814b7721a18c42d5b8f56db398f11e9"},{url:"online-tools/index.html",revision:"9aac2b4ac9654427678fef93de4bf66e"},{url:"software/browser.html",revision:"8e7aa3a65e8f9d9a2bea89c8b44ca6ce"},{url:"software/cross-platform.html",revision:"36e6cca9a22e07ca86334fa1f77379eb"},{url:"software/mac.html",revision:"8367ec254412a78f2e89fad75ccde8a5"},{url:"software/vscode.html",revision:"dd8b6d5056704fc5cdeffd3ffbb22391"},{url:"software/webstorm.html",revision:"2bf62939a2680ad69d7b945bbc7660a0"},{url:"software/windows.html",revision:"5bb7c274cd3deab9eed4822ac47da439"},{url:"software/zsh.html",revision:"0d075c4825c4d6aa7b36c947943d6bb4"},{url:"utils/function.html",revision:"a65ed0f69126d75414cae4511a643658"},{url:"utils/library.html",revision:"edb3913c2643ad4129c6c550c5e67640"},{url:"utils/regexp.html",revision:"5b3e727e45516937232fe5e410b7739a"},{url:"vue/index.html",revision:"45ae3067830f7582207063335bf863e0"}],{})}));
