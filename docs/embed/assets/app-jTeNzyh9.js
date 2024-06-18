(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const It=(e,t)=>e===t,oe=Symbol("solid-proxy"),Lt=Symbol("solid-track"),ae={equals:It};let st=ft;const U=1,ce=2,lt={owned:null,cleanups:null,context:null,owner:null};var w=null;let pe=null,Nt=null,y=null,S=null,R=null,ge=0;function se(e,t){const n=y,i=w,r=e.length===0,s=t===void 0?i:t,l=r?lt:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=r?e:()=>e(()=>C(()=>me(l)));w=l,y=null;try{return q(o,!0)}finally{y=n,w=i}}function p(e,t){t=t?Object.assign({},ae,t):ae;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),ut(n,r));return[ct.bind(n),i]}function E(e,t,n){const i=Pe(e,t,!1,U);te(i)}function ot(e,t,n){st=Ut;const i=Pe(e,t,!1,U);i.user=!0,R?R.push(i):te(i)}function v(e,t,n){n=n?Object.assign({},ae,n):ae;const i=Pe(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,te(i),ct.bind(i)}function Mt(e){return q(e,!1)}function C(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function zt(e,t,n){const i=Array.isArray(e);let r;return s=>{let l;if(i){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();const o=C(()=>t(l,r,s));return r=l,o}}function Ot(e){ot(()=>C(e))}function Dt(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Bt(e,t){const n=Symbol("context");return{id:n,Provider:Ht(n),defaultValue:e}}function jt(e){return w&&w.context&&w.context[e.id]!==void 0?w.context[e.id]:e.defaultValue}function at(e){const t=v(e),n=v(()=>Ee(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function ct(){if(this.sources&&this.state)if(this.state===U)te(this);else{const e=S;S=null,q(()=>fe(this),!1),S=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function ut(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&q(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],l=pe&&pe.running;l&&pe.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?S.push(s):R.push(s),s.observers&&dt(s)),l||(s.state=U)}if(S.length>1e6)throw S=[],new Error},!1)),t}function te(e){if(!e.fn)return;me(e);const t=ge;Rt(e,e.value,t)}function Rt(e,t,n){let i;const r=w,s=y;y=w=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=U,e.owned&&e.owned.forEach(me),e.owned=null),e.updatedAt=n+1,gt(l)}finally{y=s,w=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ut(e,i):e.value=i,e.updatedAt=n)}function Pe(e,t,n,i=U,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==lt&&(w.owned?w.owned.push(s):w.owned=[s]),s}function ue(e){if(e.state===0)return;if(e.state===ce)return fe(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ge);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===U)te(e);else if(e.state===ce){const i=S;S=null,q(()=>fe(e,t[0]),!1),S=i}}function q(e,t){if(S)return e();let n=!1;t||(S=[]),R?n=!0:R=[],ge++;try{const i=e();return Ft(n),i}catch(i){n||(R=null),S=null,gt(i)}}function Ft(e){if(S&&(ft(S),S=null),e)return;const t=R;R=null,t.length&&q(()=>st(t),!1)}function ft(e){for(let t=0;t<e.length;t++)ue(e[t])}function Ut(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:ue(i)}for(t=0;t<n;t++)ue(e[t])}function fe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===U?i!==t&&(!i.updatedAt||i.updatedAt<ge)&&ue(i):r===ce&&fe(i,t)}}}function dt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ce,n.pure?S.push(n):R.push(n),n.observers&&dt(n))}}function me(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),l=n.observerSlots.pop();i<r.length&&(s.sourceSlots[l]=i,r[i]=s,n.observerSlots[i]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)me(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Gt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function gt(e,t=w){throw Gt(e)}function Ee(e){if(typeof e=="function"&&!e.length)return Ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=Ee(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Ht(e,t){return function(i){let r;return E(()=>r=C(()=>(w.context={...w.context,[e]:i.value},at(()=>i.children))),void 0),r}}const Yt=Symbol("fallback");function Ke(e){for(let t=0;t<e.length;t++)e[t]()}function Wt(e,t,n={}){let i=[],r=[],s=[],l=0,o=t.length>1?[]:null;return Dt(()=>Ke(s)),()=>{let c=e()||[],f,a;return c[Lt],C(()=>{let g=c.length,b,I,B,G,Y,$,T,L,F;if(g===0)l!==0&&(Ke(s),s=[],i=[],r=[],l=0,o&&(o=[])),n.fallback&&(i=[Yt],r[0]=se(ne=>(s[0]=ne,n.fallback())),l=1);else if(l===0){for(r=new Array(g),a=0;a<g;a++)i[a]=c[a],r[a]=se(d);l=g}else{for(B=new Array(g),G=new Array(g),o&&(Y=new Array(g)),$=0,T=Math.min(l,g);$<T&&i[$]===c[$];$++);for(T=l-1,L=g-1;T>=$&&L>=$&&i[T]===c[L];T--,L--)B[L]=r[T],G[L]=s[T],o&&(Y[L]=o[T]);for(b=new Map,I=new Array(L+1),a=L;a>=$;a--)F=c[a],f=b.get(F),I[a]=f===void 0?-1:f,b.set(F,a);for(f=$;f<=T;f++)F=i[f],a=b.get(F),a!==void 0&&a!==-1?(B[a]=r[f],G[a]=s[f],o&&(Y[a]=o[f]),a=I[a],b.set(F,a)):s[f]();for(a=$;a<g;a++)a in B?(r[a]=B[a],s[a]=G[a],o&&(o[a]=Y[a],o[a](a))):r[a]=se(d);r=r.slice(0,l=g),i=c.slice(0)}return r});function d(g){if(s[a]=g,o){const[b,I]=p(a);return o[a]=I,t(c[a],b)}return t(c[a])}}}let Vt=!1;function u(e,t){return C(()=>e(t||{}))}function re(){return!0}const $e={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function ye(e){return(e=typeof e=="function"?e():e)?e:{}}function Xt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function be(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&oe in o,e[l]=typeof o=="function"?(t=!0,v(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const c=ye(e[o])[l];if(c!==void 0)return c}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ye(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ye(e[o])));return[...new Set(l)]}},$e);const n={},i=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const c=Object.getOwnPropertyNames(o);for(let f=c.length-1;f>=0;f--){const a=c[f];if(a==="__proto__"||a==="constructor")continue;const d=Object.getOwnPropertyDescriptor(o,a);if(!i[a])i[a]=d.get?{enumerable:!0,configurable:!0,get:Xt.bind(n[a]=[d.get.bind(o)])}:d.value!==void 0?d:void 0;else{const g=n[a];g&&(d.get?g.push(d.get.bind(o)):d.value!==void 0&&g.push(()=>d.value))}}}const r={},s=Object.keys(i);for(let l=s.length-1;l>=0;l--){const o=s[l],c=i[o];c&&c.get?Object.defineProperty(r,o,c):r[o]=c?c.value:void 0}return r}function mt(e,...t){if(oe in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},$e));return s.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},$e)),s}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let o=!1,c=0;for(const f of t)f.includes(r)&&(o=!0,l?i[c][r]=s.value:Object.defineProperty(i[c],r,s)),++c;o||(l?n[r]=s.value:Object.defineProperty(n,r,s))}return[...i,n]}const ht=e=>`Stale read from <${e}>.`;function Q(e){const t="fallback"in e&&{fallback:()=>e.fallback};return v(Wt(()=>e.each,e.children,t||void 0))}function k(e){const t=e.keyed,n=v(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return v(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?C(()=>r(t?i:()=>{if(!C(n))throw ht("Show");return e.when})):r}return e.fallback},void 0,void 0)}function Zt(e){let t=!1;const n=(s,l)=>(t?s[1]===l[1]:!s[1]==!l[1])&&s[2]===l[2],i=at(()=>e.children),r=v(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let l=0;l<s.length;l++){const o=s[l].when;if(o)return t=!!s[l].keyed,[l,o,s[l]]}return[-1]},void 0,{equals:n});return v(()=>{const[s,l,o]=r();if(s<0)return e.fallback;const c=o.children;return typeof c=="function"&&c.length>0?C(()=>c(t?l:()=>{if(C(r)[0]!==s)throw ht("Match");return o.when})):c},void 0,void 0)}function ie(e){return e}const Kt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Kt]),Qt=new Set(["innerHTML","textContent","innerText","children"]),Jt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),en=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function tn(e,t){const n=en[e];return typeof n=="object"?n[t]?n.$:void 0:n}const nn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),rn=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),sn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ln(e,t,n){let i=n.length,r=t.length,s=i,l=0,o=0,c=t[r-1].nextSibling,f=null;for(;l<r||o<s;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const a=s<i?o?n[o-1].nextSibling:n[s-o]:c;for(;o<s;)e.insertBefore(n[o++],a)}else if(s===o)for(;l<r;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[o]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--s],a),t[r]=n[s]}else{if(!f){f=new Map;let d=o;for(;d<s;)f.set(n[d],d++)}const a=f.get(t[l]);if(a!=null)if(o<a&&a<s){let d=l,g=1,b;for(;++d<r&&d<s&&!((b=f.get(t[d]))==null||b!==a+g);)g++;if(g>a-o){const I=t[l];for(;o<a;)e.insertBefore(n[o++],I)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const qe="_$DX_DELEGATE";function on(e,t,n,i={}){let r;return se(s=>{r=s,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function N(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function an(e,t=window.document){const n=t[qe]||(t[qe]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,wn))}}function O(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function cn(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function x(e,t){t==null?e.removeAttribute("class"):e.className=t}function un(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n)}function fn(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let s,l;for(s=0,l=r.length;s<l;s++){const o=r[s];!o||o==="undefined"||t[o]||(Qe(e,o,!1),delete n[o])}for(s=0,l=i.length;s<l;s++){const o=i[s],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Qe(e,o,!0),n[o]=c)}return n}function dn(e,t,n){if(!t)return n?O(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(i.setProperty(s,r),n[s]=r);return n}function wt(e,t={},n,i){const r={};return E(()=>r.children=ee(e,t.children,r.children)),E(()=>typeof t.ref=="function"?gn(t.ref,e):t.ref=e),E(()=>mn(e,t,n,!0,r,!0)),r}function gn(e,t,n){return C(()=>e(t,n))}function A(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ee(e,t,i,n);E(r=>ee(e,t(),r,n),i)}function mn(e,t,n,i,r={},s=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Je(e,l,null,r[l],n,s)}for(const l in t){if(l==="children")continue;const o=t[l];r[l]=Je(e,l,o,r[l],n,s)}}function hn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Qe(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)e.classList.toggle(i[r],n)}function Je(e,t,n,i,r,s){let l,o,c,f,a;if(t==="style")return dn(e,n,i);if(t==="classList")return fn(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);i&&e.removeEventListener(d,i),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);i&&e.removeEventListener(d,i,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),g=nn.has(d);if(!g&&i){const b=Array.isArray(i)?i[0]:i;e.removeEventListener(d,b)}(g||n)&&(un(e,d,n,g),g&&an([d]))}else if(t.slice(0,5)==="attr:")O(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=Qt.has(t))||!r&&((f=tn(t,e.tagName))||(o=qt.has(t)))||(l=e.nodeName.includes("-")))a&&(t=t.slice(5),o=!0),t==="class"||t==="className"?x(e,n):l&&!o&&!c?e[hn(t)]=n:e[f||t]=n;else{const d=r&&t.indexOf(":")>-1&&sn[t.split(":")[0]];d?cn(e,d,t,n):O(e,Jt[t]||t,n)}return n}function wn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ee(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=Z(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=Z(e,n,i);else{if(s==="function")return E(()=>{let o=t();for(;typeof o=="function";)o=o();n=ee(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(Te(o,t,n,r))return E(()=>n=ee(e,o,n,i,!0)),()=>n;if(o.length===0){if(n=Z(e,n,i),l)return n}else c?n.length===0?et(e,o,i):ln(e,n,o):(n&&Z(e),et(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=Z(e,n,i,t);Z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Te(e,t,n,i){let r=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],c=n&&n[e.length],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=Te(e,o,c)||r;else if(f==="function")if(i){for(;typeof o=="function";)o=o();r=Te(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return r}function et(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function Z(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!s&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const pn="http://www.w3.org/2000/svg";function yn(e,t=!1){return t?document.createElementNS(pn,e):document.createElement(e)}function pt(e){const[t,n]=mt(e,["component"]),i=v(()=>t.component);return v(()=>{const r=i();switch(typeof r){case"function":return C(()=>r(n));case"string":const s=rn.has(r),l=yn(r,s);return wt(l,n,s),l}})}let bn={data:""},xn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||bn,An=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Sn=/\/\*[^]*?\*\/|  +/g,tt=/\n+/g,H=(e,t)=>{let n="",i="",r="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+l+";":i+=s[1]=="f"?H(l,s):s+"{"+H(l,s[1]=="k"?"":t)+"}":typeof l=="object"?i+=H(l,t?t.replace(/([^,])+/g,o=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=H.p?H.p(s,l):s+":"+l+";")}return n+(t&&r?t+"{"+r+"}":r)+i},j={},yt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+yt(e[n]);return t}return e},vn=(e,t,n,i,r)=>{let s=yt(e),l=j[s]||(j[s]=(c=>{let f=0,a=11;for(;f<c.length;)a=101*a+c.charCodeAt(f++)>>>0;return"go"+a})(s));if(!j[l]){let c=s!==e?e:(f=>{let a,d,g=[{}];for(;a=An.exec(f.replace(Sn,""));)a[4]?g.shift():a[3]?(d=a[3].replace(tt," ").trim(),g.unshift(g[0][d]=g[0][d]||{})):g[0][a[1]]=a[2].replace(tt," ").trim();return g[0]})(e);j[l]=H(r?{["@keyframes "+l]:c}:c,n?"":"."+l)}let o=n&&j.g?j.g:null;return n&&(j.g=j[l]),((c,f,a,d)=>{d?f.data=f.data.replace(d,c):f.data.indexOf(c)===-1&&(f.data=a?c+f.data:f.data+c)})(j[l],t,i,o),l},Cn=(e,t,n)=>e.reduce((i,r,s)=>{let l=t[s];if(l&&l.call){let o=l(n),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=c?"."+c:o&&typeof o=="object"?o.props?"":H(o,""):o===!1?"":o}return i+r+(l??"")},"");function h(e){let t=this||{},n=e.call?e(t.p):e;return vn(n.unshift?n.raw?Cn(n,[].slice.call(arguments,1),t.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):n,xn(t.target),t.g,t.o,t.k)}h.bind({g:1});h.bind({k:1});const _n=Bt();function bt(e){let t=this||{};return(...n)=>{const i=r=>{const s=jt(_n),l=be(r,{theme:s}),o=be(l,{get class(){const b=l.class,I="class"in l&&/^go[0-9]+/.test(b);let B=h.apply({target:t.target,o:I,p:l,g:t.g},n);return[b,B].filter(Boolean).join(" ")}}),[c,f]=mt(o,["as","theme"]),a=f,d=c.as||e;let g;return typeof d=="function"?g=d(a):t.g==1?(g=document.createElement(d),wt(g,a)):g=pt(be({component:d},a)),g};return i.class=r=>C(()=>h.apply({target:t.target,p:r,g:t.g},n)),i}}const D=new Proxy(bt,{get(e,t){return e(t)}});function En(){const e=bt.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}const $n=D("a")`
  padding-bottom: ${e=>typeof e.paddingBottom<"u"?`${e.paddingBottom}px`:"0"};
`,Tn=h`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: inherit;
  }
`,J=e=>u($n,{get title(){return e.title},get class(){return`${Tn} ${e.class}`},get href(){return e.href},target:"_blank",rel:"noopener noreferrer",get"aria-label"(){return e.label||"Open external link"},tabIndex:-1,get paddingBottom(){return e.paddingBottom},get children(){return e.children}});var kn=N("<div>");const Pn=D("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background-color: transparent;
  z-index: 100;
`,In=D("div")`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Ln=D("div")`
  height: 50px;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    border: 2px solid var(--color2);
    border: ${e=>e.bgColor==="transparent"?"2px solid rgba(0,0,0,0.25)":`2px solid ${e.bgColor}`};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    right: 0px;
  }

  &::before {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }

  &::after {
    -webkit-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }

  @-webkit-keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @-webkit-keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`,Nn=e=>u(Pn,{get children(){return u(In,{get children(){var t=kn();return A(t,u(Ln,{get bgColor(){return e.bgColor}})),t}})}});var Mn=N("<div role=alert><div>");const zn=h`
  padding: 1.5rem;
  text-align: center;
  margin: 3rem auto;
  border: 1px solid #dee2e6;

  @media only screen and (min-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`,On=e=>(()=>{var t=Mn(),n=t.firstChild;return x(t,zn),A(n,()=>e.children),t})(),Dn="key",Bn="headers",jn="category-header",Rn="category-in-subcategory",Fn="title-uppercase",Un="title-alignment",Gn="title-font-size",Hn="title-font-family",Yn="item-name",Wn="item-name-font-size",Vn="style",Xn="size",Zn="items-alignment",Kn="items-spacing",qn="bg-color",Qn="fg-color",xt="base-path";var K=(e=>(e.Basic="clean",e.BorderedBasic="bordered",e.ShadowedBasic="shadowed",e.Card="card",e))(K||{}),P=(e=>(e.XSmall="xs",e.Small="sm",e.Medium="md",e.Large="lg",e.XLarge="xl",e))(P||{}),le=(e=>(e.Serif="serif",e.SansSerif="sans-serif",e.Monospace="monospace",e))(le||{}),ke=(e=>(e[e.GitHubCircle=0]="GitHubCircle",e[e.World=1]="World",e))(ke||{});const Jn=!0,er=!0,tr=!1,nr=!1,rr="left",ir="sans-serif",sr=13,lr=!1,or=11,ar="shadowed",cr="md",ur="left",fr="#323437",dr="#ffffff",de=()=>{const t=new URLSearchParams(location.search).get(xt);return`${location.origin}${t||""}`};var gr=N("<img>"),mr=N('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M21.9 21.9l-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z">');const At=e=>{const[t,n]=p(!1);return u(k,{get when(){return!t()},get fallback(){return mr()},get children(){var i=gr();return i.addEventListener("error",()=>n(!0)),E(r=>{var s=`${e.name} logo`,l=e.class,o=`../${e.logo}`;return s!==r.e&&O(i,"alt",r.e=s),l!==r.t&&x(i,r.t=l),o!==r.a&&O(i,"src",r.a=o),r},{e:void 0,t:void 0,a:void 0}),i}})};var hr=N('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z">'),wr=N('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 512 512"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"></path><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"></path><path fill=none stroke-linecap=round stroke-linejoin=round stroke-width=32 d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></path><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48v416m208-208H48">');const pr=e=>(()=>{var t=hr();return E(()=>O(t,"class",e.class)),t})(),yr=e=>(()=>{var t=wr();return E(()=>O(t,"class",e.class)),t})(),br=[pr,yr],nt=e=>u(pt,{get component(){return br[e.kind]},get class(){return e.class}});var xe=N("<div>"),xr=N("<div><div><div></div><div><div></div><div></div><div></div></div></div><div>"),Ar=N("<div> member");const Sr=h`
  flex: 0 0 auto;
  margin-top: 24px;
  padding: 0 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 33.333333%;
  }

  @media (min-width: 1400px) {
    width: 25%;
  }

  @media (min-width: 1920px) {
    width: 20%;
  }
`,vr=h`
  text-decoration: none;
`,Cr=h`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 192px;
  border: 1px solid #d2d2d2;
  padding: 1rem;
  font-size: 90%;

  &:hover {
    border-color: var(--bg-color);
    box-shadow: 0 0 5px 0 rgba(13, 110, 253, 0.25);
  }
`,_r=h`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`,Er=h`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 90px;
  width: 70px;
  min-width: 70px;
`,$r=h`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,Tr=h`
  background-color: #f8f9fa;
  padding: 1rem;
  width: calc(100% - 70px - 1rem);
  height: 105px;
  margin-left: 1rem;
`,kr=h`
  font-size: 1.15rem;
  line-height: 1.15;
  font-weight: 600;
  padding-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pr=h`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(33, 37, 41, 0.75);
  font-size: 0.875em;
  height: 15px;
`,Ir=h`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  height: 26px;
`,Ae=h`
  margin-top: 0.5rem;
  border: 1px solid transparent;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lr=h`
  border-color: rgb(73, 80, 87) !important;
  color: rgb(73, 80, 87);
`,Nr=h`
  border-color: rgb(108, 117, 125) !important;
  background-color: rgb(108, 117, 125);
  color: #fff;
  max-width: calc(50% - 0.5rem) !important;
`,Mr=h`
  border-color: var(--bg-color) !important;
  background-color: var(--bg-color);
  color: #fff;
  max-width: calc(50% - 0.5rem) !important;
`,rt=h`
  margin-top: 0.5rem;
  position: relative;
  color: inherit;
  height: 18px;
  line-height: 22px;
  width: auto;
  margin-right: 0.5rem;

  &:hover {
    color: var(--bg-color);
  }

  svg {
    height: 15px;
    width: 15px;
  }
`,zr=h`
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(33, 37, 41, 0.75);
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: unset;
  white-space: inherit;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: normal;
  max-height: 36px;
`,Or=e=>(()=>{var t=xe();return x(t,Sr),A(t,u(J,{get href(){return`${de()}?item=${e.item.id}`},class:vr,get children(){var n=xr(),i=n.firstChild,r=i.firstChild,s=r.nextSibling,l=s.firstChild,o=l.nextSibling,c=o.nextSibling,f=i.nextSibling;return x(n,Cr),x(i,_r),x(r,Er),A(r,u(At,{get name(){return e.item.name},class:$r,get logo(){return e.item.logo}})),x(s,Tr),x(l,kr),A(l,()=>e.item.name),x(o,Pr),A(o,u(k,{get when(){return e.item.organization_name},get children(){return e.item.organization_name}})),x(c,Ir),A(c,u(k,{get when(){return e.item.maturity},get fallback(){return u(k,{get when(){return e.item.member_subcategory},get children(){var a=Ar(),d=a.firstChild;return x(a,`${Ae} ${Lr}`),A(a,()=>e.item.member_subcategory,d),E(()=>O(a,"title",`${e.item.member_subcategory} member`)),a}})},get children(){return[(()=>{var a=xe();return x(a,`${Ae} ${Mr}`),A(a,()=>e.foundation),E(()=>O(a,"title",e.item.maturity)),a})(),(()=>{var a=xe();return x(a,`${Ae} ${Nr}`),A(a,()=>e.item.maturity),E(()=>O(a,"title",e.item.maturity)),a})()]}}),null),A(c,u(k,{get when(){return e.item.website},get children(){return u(J,{title:"Website",class:rt,get href(){return e.item.website},get children(){return u(nt,{get kind(){return ke.World}})}})}}),null),A(c,u(k,{get when(){return e.item.primary_repository_url},get children(){return u(J,{title:"Repository",class:rt,get href(){return e.item.primary_repository_url},get children(){return u(nt,{get kind(){return ke.GitHubCircle}})}})}}),null),x(f,zr),A(f,()=>e.item.description||"This item does not have a description available yet"),n}})),t})(),Dr={[P.XSmall]:"0.25rem",[P.Small]:"0.35rem",[P.Medium]:"0.5rem",[P.Large]:"0.75rem",[P.XLarge]:"1rem"},Br=D("div")`
  border: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
  box-shadow: ${e=>e.withShadow?"0 .125rem .25rem rgba(0,0,0,.075)":"none"};
  padding: ${e=>Dr[e.size]};
  background-color: ${e=>e.borderless?"transparent":"#fff"};
`,jr=h`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,Rr=h`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,Fr=h`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,Ur=D("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: ${e=>e.itemNameSize<40?`${e.itemNameSize}px`:"40px"};
  line-height: ${e=>e.itemNameSize<40?`${e.itemNameSize-2}px`:"38px"};
  padding: ${e=>e.borderless?"0.35rem 0":"0.35rem 0.25rem"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-top: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
`,Se=e=>u(Br,{get class(){return`${jr} ${e.class}`},get borderless(){return e.borderless},get withShadow(){return typeof e.withShadow<"u"&&e.withShadow},get size(){return e.size},get children(){return u(J,{get href(){return`${de()}?item=${e.item.id}`},get paddingBottom(){return e.withName?e.itemNameSize+8:0},class:Rr,get children(){return[u(At,{get name(){return e.item.name},class:Fr,get logo(){return e.item.logo}}),u(k,{get when(){return e.withName},get children(){return u(Ur,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}})]}})}});var Gr=N("<div>");const ve={[P.XSmall]:{width:"55px",height:"50px",gap:"5px"},[P.Small]:{width:"77px",height:"70px",gap:"8px"},[P.Medium]:{width:"110px",height:"100px",gap:"10px"},[P.Large]:{width:"143px",height:"130px",gap:"12px"},[P.XLarge]:{width:"220px",height:"200px",gap:"15px"}},Ce=D("div")`
  --card-size-width: ${e=>ve[e.size].width};
  --card-size-height: ${e=>ve[e.size].height};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:ve[e.size].gap};
  justify-content: ${e=>e.alignment};
`,_e=h`
  width: var(--card-size-width);
  height: var(--card-size-height);
`,Hr=h`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  margin-top: -24px;
  width: calc(100% + 24px);
  overflow: hidden;
`,it=e=>u(Zt,{get children(){return[u(ie,{get when(){return e.style===K.Basic},get children(){return u(Ce,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return u(Q,{get each(){return e.items},children:t=>u(Se,{item:t,get size(){return e.size},class:_e,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!0})})}})}}),u(ie,{get when(){return e.style===K.BorderedBasic},get children(){return u(Ce,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return u(Q,{get each(){return e.items},children:t=>u(Se,{item:t,get size(){return e.size},class:_e,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1})})}})}}),u(ie,{get when(){return e.style===K.ShadowedBasic},get children(){return u(Ce,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return u(Q,{get each(){return e.items},children:t=>u(Se,{item:t,get size(){return e.size},class:_e,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1,withShadow:!0})})}})}}),u(ie,{get when(){return e.style===K.Card},get children(){var t=Gr();return x(t,Hr),A(t,u(Q,{get each(){return e.items},children:n=>u(Or,{item:n,get foundation(){return e.foundation}})})),t}})]}});var Yr=N("<div><h4>Invalid embed url</h4><p>Please visit: ");const Wr={[le.Serif]:'Times, "Times New Roman", Georgia, Palatino, serif',[le.SansSerif]:'"Clarity City", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, Roboto, Ubuntu, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',[le.Monospace]:'Courier, Consolas, "Andale Mono", monospace'},Vr=D("div")`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    font-family: ${e=>Wr[e.fontFamily]};
    box-sizing: border-box;
  }
`,Xr=D("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: ${e=>e.size?`${e.size}px`:"0.8rem"};
  text-align: ${e=>e.alignment};
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  font-weight: 500;
  line-height: 1.5;
  overflow: hidden;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zr=D("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: ${e=>e.size?`${e.size}px`:"0.8rem"};
  text-align: ${e=>e.alignment};
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  font-weight: 500;
  line-height: 1.5;
  margin: ${e=>{const t=typeof e.spacing<"u"&&e.spacing>16?`${e.spacing}px`:"16px";return typeof e.firstTitle<"u"&&e.firstTitle?`0 0 ${t} 0`:`${t} 0 ${t} 0`}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kr=()=>{const[e,t]=p(""),[n,i]=p(),[r,s]=p(),[l,o]=p(Jn),[c,f]=p(ar),[a,d]=p(!1),[g,b]=p(fr),[I,B]=p(dr),[G,Y]=p(cr),[$,T]=p(er),[L,F]=p(tr),[ne,St]=p(nr),[Ie,vt]=p(rr),[Ct,_t]=p(ir),[Le,Et]=p(sr),[Ne,$t]=p(lr),[Me,Tt]=p(or),[ze,kt]=p(ur),[he,Pt]=p(),Oe=m=>m.sort((_,M)=>_.name.toLowerCase().localeCompare(M.name.toLowerCase()));return Ot(()=>{const m=new URLSearchParams(window.location.search),_=m.get(xt),M=m.get(Dn),W=m.get(Bn),V=m.get(Vn),X=m.get(Xn),we=m.get(qn),De=m.get(Qn),Be=m.get(jn),je=m.get(Rn),Re=m.get(Un),Fe=m.get(Hn),Ue=m.get(Gn),Ge=m.get(Yn),He=m.get(Wn),Ye=m.get(Zn),We=m.get(Kn),Ve=m.get(Fn);Mt(()=>{if(M!==null){let Xe=!0,Ze=!0;if(o(W==="true"),Be!==null&&T(Be==="true"),je!==null&&F(je==="true"),Ve!==null&&St(Ve==="true"),Ge!==null&&($t(Ge==="true"),He!==null)){const z=parseInt(He);z>=10&&z<=40&&Tt(z)}if(V!==null&&(Object.values(K).includes(V)?f(V):Ze=!1),X!==null&&(Object.values(P).includes(X)?Y(X):Xe=!1),we!==null&&(b(we),d(we==="transparent")),De!==null&&B(De),Fe!==null&&_t(Fe),Re!==null&&vt(Re),Ue!==null){const z=parseInt(Ue);z>=10&&z<=60&&Et(z)}if(Ye!==null&&kt(Ye),We!==null){const z=parseInt(We);z>=0&&Pt(z)}Xe&&Ze?(t(_||""),i(M)):s(null)}else s(null)})}),ot(zt(n,()=>{async function m(){try{fetch(`${e()}/data/embed_${n()}.json`).then(_=>{if(_.ok)return _.json();throw new Error("Something went wrong")}).then(_=>{console.log(_),s(_)}).catch(()=>{s(null)})}catch{s(null)}}typeof n()<"u"&&m()})),u(Vr,{get fontFamily(){return Ct()},get style(){return{all:"initial",isolation:"isolate",overflow:"hidden","--bg-color":g(),"--fg-color":I()}},get children(){return u(k,{get when(){return r()!==null},get fallback(){return u(On,{get children(){var m=Yr(),_=m.firstChild,M=_.nextSibling;return M.firstChild,A(M,u(J,{get href(){return`${de()}/embed-setup`},get children(){return[v(()=>de()),"/embed-setup"]}}),null),m}})},get children(){return u(k,{get when(){return typeof r()<"u"},get fallback(){return u(Nn,{get bgColor(){return g()}})},get children(){return u(k,{get when(){return l()},get fallback(){return u(it,{get items(){return Oe(r().items)},get foundation(){return r().foundation},get style(){return c()},get size(){return G()},get alignment(){return ze()},get spacing(){return he()},get displayName(){return Ne()},get itemNameSize(){return Me()}})},get children(){return[u(k,{get when(){return $()},get children(){return u(Xr,{get isBgTransparent(){return a()},get size(){return Le()},get alignment(){return Ie()},get uppercase(){return ne()},get children(){return r().category.name}})}}),u(Q,{get each(){return r().category.subcategories},children:(m,_)=>{const M=Oe(r().items.filter(W=>{let V=!1;return W.additional_categories&&(V=W.additional_categories.some(X=>X.category===r().category.name&&X.subcategory===m.name)),W.category===r().category.name&&W.subcategory===m.name||V}));return[u(Zr,{get isBgTransparent(){return a()},get size(){return Le()},get alignment(){return Ie()},get uppercase(){return ne()},get firstTitle(){return _()===0},get spacing(){return he()},get children(){return[u(k,{get when(){return L()},get children(){return[v(()=>r().category.name)," - "]}}),v(()=>m.name)," (",v(()=>M.length),")"]}}),u(it,{items:M,get foundation(){return r().foundation},get style(){return c()},get size(){return G()},get alignment(){return ze()},get spacing(){return he()},get displayName(){return Ne()},get itemNameSize(){return Me()}})]}})]}})}})}})}})},qr={body:{"overflow-x":"hidden",margin:"0px"}},Qr=En(qr),Jr=document.getElementById("landscape-embeddable-view");on(()=>[u(Qr,{}),u(Kr,{})],Jr);
