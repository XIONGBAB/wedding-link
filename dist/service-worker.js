if(!self.define){let i,e={};const n=(n,s)=>(n=new URL(n+".js",s).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,t)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let r={};const c=i=>n(i,l),o={module:{uri:l},exports:r,require:c};e[l]=Promise.all(s.map((i=>o[i]||c(i)))).then((i=>(t(...i),r)))}}define(["./workbox-460519b3"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"index.html",revision:"91e0cb544af005b974d2bccf44a38c22"},{url:"static/css/main.ef878e1a.css",revision:null},{url:"static/css/wdpage.cd4bcc58.css",revision:null},{url:"static/js/main.3512a726.js",revision:null},{url:"static/js/runtime~main.c186db86.js",revision:null},{url:"static/js/runtime~wdpage.7bf7e319.js",revision:null},{url:"static/js/wdpage.2767795b.js",revision:null},{url:"static/media/flower.2e445bc590267b2cccb1.png",revision:null},{url:"static/media/hb_img51.83bb856f3e0ff3fbda87.jpg",revision:null},{url:"static/media/hb_img52.737da898e6df1db19e99.jpg",revision:null},{url:"static/media/hb_img53.8200b5a344ddc33b6368.jpg",revision:null},{url:"static/media/iconfont.1dcd20572fa5d192a9bd.ttf?t=1675687781335",revision:null},{url:"static/media/iconfont.2ada9fef7d73d1d1d259.woff2?t=1675687781335",revision:null},{url:"static/media/iconfont.8ba54191b4e19a42d4d9.woff?t=1675687781335",revision:null},{url:"static/media/marryImg.cf3b670a5826c95b3f15.png",revision:null},{url:"static/media/marryLogo.f744f439e8db8a17cdf1.png",revision:null},{url:"wdpage.html",revision:"475b56731f771ef4232b7a8019698836"}],{})}));
//# sourceMappingURL=service-worker.js.map
