!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){}function r(e){return e()}function l(){return Object.create(null)}function a(e){e.forEach(r)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function c(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let h;function g(e){h=e}const m=[],b=[],y=[],v=[],$=Promise.resolve();let x=!1;function _(){x||(x=!0,$.then(j))}function w(e){y.push(e)}function j(){const e=new Set;do{for(;m.length;){const e=m.shift();g(e),k(e.$$)}for(;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];e.has(n)||(n(),e.add(n))}y.length=0}while(m.length);for(;v.length;)v.pop()();x=!1}function k(e){null!==e.fragment&&(e.update(e.dirty),a(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(w))}const S=new Set;function O(e,t){e&&e.i&&(S.delete(e),e.i(t))}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let z;function C(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function M(e,t,n,s,c,u){const d=h;g(e);const f=t.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:o,not_equal:c,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:l(),dirty:null};let b=!1;var y;p.ctx=n?n(e,f,(t,n,o=n)=>(p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),b&&function(e,t){e.$$.dirty||(m.push(e),_(),e.$$.dirty=l()),e.$$.dirty[t]=!0}(e,t)),n)):f,p.update(),b=!0,a(p.before_update),p.fragment=!!s&&s(p.ctx),t.target&&(t.hydrate?p.fragment&&p.fragment.l((y=t.target,Array.from(y.childNodes))):p.fragment&&p.fragment.c(),t.intro&&O(e.$$.fragment),function(e,t,n){const{fragment:o,on_mount:l,on_destroy:s,after_update:c}=e.$$;o&&o.m(t,n),w(()=>{const t=l.map(r).filter(i);s?s.push(...t):a(t),e.$$.on_mount=[]}),c.forEach(w)}(e,t.target,t.anchor),j()),g(d)}"function"==typeof HTMLElement&&(z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){C(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class E{$destroy(){C(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function P(e){let t;return{c(){t=f("div"),t.innerHTML='<div class="fx-item fx-grow-zero"><img id="profile-pic" src="/public/vatsal_joshi.png" alt="Vatsal Joshi" class="svelte-109enod"></div> \n  <div class="fx-item fx-grow-zero"><h1>Vatsal Joshi</h1></div> \n  <div class="fx-item fx-grow-zero"><p class="svelte-109enod">I&#39;m a JavaScript and Web enthusiast, living in Banglore, India.</p> \n    <p class="svelte-109enod">\n      Pseudo blogger at\n      <a target="_blank" href="https://blog.vatz88.in" rel="noopener" class="svelte-109enod">\n        blog.vatz88.in\n      </a></p> \n    <p class="svelte-109enod">\n      Connect with me\n      <a target="_blank" href="https://twitter.com/vatz88" rel="noopener" class="svelte-109enod">\n        @vatz88\n      </a></p></div>',p(t,"class","App fx-container direction-column align-center justify-center svelte-109enod")},m(e,n){u(e,t,n)},p:o,i:o,o:o,d(e){e&&d(t)}}}function A(e){return console.log("vatz88"),{}}new class extends E{constructor(e){var t;super(),document.getElementById("svelte-109enod-style")||((t=f("style")).id="svelte-109enod-style",t.textContent=".App.svelte-109enod{background-color:rgb(50, 54, 57);color:rgb(232, 234, 237);font-family:sans-serif;height:100%;padding:1rem}#profile-pic.svelte-109enod{width:150px;height:auto}p.svelte-109enod{line-height:1.25rem}a.svelte-109enod{color:rgb(138, 180, 248);text-decoration:none}",c(document.head,t)),M(this,e,A,P,s,{})}}({target:document.body})}]);
//# sourceMappingURL=main.0eacd8b44e59b666afdb.js.map