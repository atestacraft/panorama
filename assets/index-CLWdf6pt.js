var gf=Object.defineProperty;var _f=(n,e,t)=>e in n?gf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var wn=(n,e,t)=>_f(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yo(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ke={},Bi=[],on=()=>{},vf=()=>!1,vs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),jo=n=>n.startsWith("onUpdate:"),ht=Object.assign,Ko=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xf=Object.prototype.hasOwnProperty,je=(n,e)=>xf.call(n,e),Le=Array.isArray,Hi=n=>Tr(n)==="[object Map]",xs=n=>Tr(n)==="[object Set]",Aa=n=>Tr(n)==="[object Date]",Oe=n=>typeof n=="function",ot=n=>typeof n=="string",ln=n=>typeof n=="symbol",Je=n=>n!==null&&typeof n=="object",bc=n=>(Je(n)||Oe(n))&&Oe(n.then)&&Oe(n.catch),Ac=Object.prototype.toString,Tr=n=>Ac.call(n),Mf=n=>Tr(n).slice(8,-1),wc=n=>Tr(n)==="[object Object]",$o=n=>ot(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ar=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sf=/-(\w)/g,zn=Ms(n=>n.replace(Sf,(e,t)=>t?t.toUpperCase():"")),Ef=/\B([A-Z])/g,di=Ms(n=>n.replace(Ef,"-$1").toLowerCase()),Rc=Ms(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fs=Ms(n=>n?`on${Rc(n)}`:""),Fn=(n,e)=>!Object.is(n,e),is=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cc=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Pc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let wa;const Ss=()=>wa||(wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zo(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ot(i)?Af(i):Zo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ot(n)||Je(n))return n}const yf=/;(?![^(]*\))/g,Tf=/:([^]+)/,bf=/\/\*[^]*?\*\//g;function Af(n){const e={};return n.replace(bf,"").split(yf).forEach(t=>{if(t){const i=t.split(Tf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jo(n){let e="";if(ot(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=Jo(n[t]);i&&(e+=i+" ")}else if(Je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rf=Yo(wf);function Lc(n){return!!n||n===""}function Cf(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Es(n[i],e[i]);return t}function Es(n,e){if(n===e)return!0;let t=Aa(n),i=Aa(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ln(n),i=ln(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Cf(n,e):!1;if(t=Je(n),i=Je(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Es(n[a],e[a]))return!1}}return String(n)===String(e)}function Pf(n,e){return n.findIndex(t=>Es(t,e))}const Dc=n=>!!(n&&n.__v_isRef===!0),Uc=n=>ot(n)?n:n==null?"":Le(n)||Je(n)&&(n.toString===Ac||!Oe(n.toString))?Dc(n)?Uc(n.value):JSON.stringify(n,Ic,2):String(n),Ic=(n,e)=>Dc(e)?Ic(n,e.value):Hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Bs(i,s)+" =>"]=r,t),{})}:xs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Bs(t))}:ln(e)?Bs(e):Je(e)&&!Le(e)&&!wc(e)?String(e):e,Bs=(n,e="")=>{var t;return ln(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Lf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Df(){return It}let $e;const Hs=new WeakSet;class Nc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hs.has(this)&&(Hs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ra(this),Bc(this);const e=$e,t=Jt;$e=this,Jt=!0;try{return this.fn()}finally{Hc(this),$e=e,Jt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ta(e);this.deps=this.depsTail=void 0,Ra(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wo(this)&&this.run()}get dirty(){return wo(this)}}let Oc=0,lr,cr;function Fc(n,e=!1){if(n.flags|=8,e){n.next=cr,cr=n;return}n.next=lr,lr=n}function Qo(){Oc++}function ea(){if(--Oc>0)return;if(cr){let e=cr;for(cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;lr;){let e=lr;for(lr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Bc(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hc(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ta(i),Uf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function wo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function zc(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===mr))return;n.globalVersion=mr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!wo(n)){n.flags&=-3;return}const t=$e,i=Jt;$e=n,Jt=!0;try{Bc(n);const r=n.fn(n._value);(e.version===0||Fn(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=t,Jt=i,Hc(n),n.flags&=-3}}function ta(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ta(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Uf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Jt=!0;const Gc=[];function Vn(){Gc.push(Jt),Jt=!1}function kn(){const n=Gc.pop();Jt=n===void 0?!0:n}function Ra(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$e;$e=void 0;try{e()}finally{$e=t}}}let mr=0;class If{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class na{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!Jt||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink=new If($e,this),$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,Vc(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=i)}return t}trigger(e){this.version++,mr++,this.notify(e)}notify(e){Qo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ea()}}}function Vc(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Vc(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ro=new WeakMap,ni=Symbol(""),Co=Symbol(""),gr=Symbol("");function _t(n,e,t){if(Jt&&$e){let i=Ro.get(n);i||Ro.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new na),r.map=i,r.key=t),r.track()}}function Sn(n,e,t,i,r,s){const a=Ro.get(n);if(!a){mr++;return}const o=l=>{l&&l.trigger()};if(Qo(),e==="clear")a.forEach(o);else{const l=Le(n),c=l&&$o(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===gr||!ln(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(gr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ni)),Hi(n)&&o(a.get(Co)));break;case"delete":l||(o(a.get(ni)),Hi(n)&&o(a.get(Co)));break;case"set":Hi(n)&&o(a.get(ni));break}}ea()}function gi(n){const e=Ye(n);return e===n?e:(_t(e,"iterate",gr),Vt(n)?e:e.map(vt))}function ys(n){return _t(n=Ye(n),"iterate",gr),n}const Nf={__proto__:null,[Symbol.iterator](){return zs(this,Symbol.iterator,vt)},concat(...n){return gi(this).concat(...n.map(e=>Le(e)?gi(e):e))},entries(){return zs(this,"entries",n=>(n[1]=vt(n[1]),n))},every(n,e){return hn(this,"every",n,e,void 0,arguments)},filter(n,e){return hn(this,"filter",n,e,t=>t.map(vt),arguments)},find(n,e){return hn(this,"find",n,e,vt,arguments)},findIndex(n,e){return hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hn(this,"findLast",n,e,vt,arguments)},findLastIndex(n,e){return hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Gs(this,"includes",n)},indexOf(...n){return Gs(this,"indexOf",n)},join(n){return gi(this).join(n)},lastIndexOf(...n){return Gs(this,"lastIndexOf",n)},map(n,e){return hn(this,"map",n,e,void 0,arguments)},pop(){return Ji(this,"pop")},push(...n){return Ji(this,"push",n)},reduce(n,...e){return Ca(this,"reduce",n,e)},reduceRight(n,...e){return Ca(this,"reduceRight",n,e)},shift(){return Ji(this,"shift")},some(n,e){return hn(this,"some",n,e,void 0,arguments)},splice(...n){return Ji(this,"splice",n)},toReversed(){return gi(this).toReversed()},toSorted(n){return gi(this).toSorted(n)},toSpliced(...n){return gi(this).toSpliced(...n)},unshift(...n){return Ji(this,"unshift",n)},values(){return zs(this,"values",vt)}};function zs(n,e,t){const i=ys(n),r=i[e]();return i!==n&&!Vt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Of=Array.prototype;function hn(n,e,t,i,r,s){const a=ys(n),o=a!==n&&!Vt(n),l=a[e];if(l!==Of[e]){const f=l.apply(n,s);return o?vt(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,vt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ca(n,e,t,i){const r=ys(n);let s=t;return r!==n&&(Vt(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,vt(o),l,n)}),r[e](s,...i)}function Gs(n,e,t){const i=Ye(n);_t(i,"iterate",gr);const r=i[e](...t);return(r===-1||r===!1)&&oa(t[0])?(t[0]=Ye(t[0]),i[e](...t)):r}function Ji(n,e,t=[]){Vn(),Qo();const i=Ye(n)[e].apply(n,t);return ea(),kn(),i}const Ff=Yo("__proto__,__v_isRef,__isVue"),kc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ln));function Bf(n){ln(n)||(n=String(n));const e=Ye(this);return _t(e,"has",n),e.hasOwnProperty(n)}class Wc{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?jf:jc:s?Yc:qc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Le(e);if(!r){let l;if(a&&(l=Nf[t]))return l;if(t==="hasOwnProperty")return Bf}const o=Reflect.get(e,t,Mt(e)?e:i);return(ln(t)?kc.has(t):Ff(t))||(r||_t(e,"get",t),s)?o:Mt(o)?a&&$o(t)?o:o.value:Je(o)?r?Kc(o):ra(o):o}}class Xc extends Wc{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ci(s);if(!Vt(i)&&!ci(i)&&(s=Ye(s),i=Ye(i)),!Le(e)&&Mt(s)&&!Mt(i))return l?!1:(s.value=i,!0)}const a=Le(e)&&$o(t)?Number(t)<e.length:je(e,t),o=Reflect.set(e,t,i,Mt(e)?e:r);return e===Ye(r)&&(a?Fn(i,s)&&Sn(e,"set",t,i):Sn(e,"add",t,i)),o}deleteProperty(e,t){const i=je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Sn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ln(t)||!kc.has(t))&&_t(e,"has",t),i}ownKeys(e){return _t(e,"iterate",Le(e)?"length":ni),Reflect.ownKeys(e)}}class Hf extends Wc{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const zf=new Xc,Gf=new Hf,Vf=new Xc(!0);const Po=n=>n,Dr=n=>Reflect.getPrototypeOf(n);function kf(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),a=Hi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Po:e?Lo:vt;return!e&&_t(s,"iterate",l?Co:ni),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ur(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wf(n,e){const t={get(r){const s=this.__v_raw,a=Ye(s),o=Ye(r);n||(Fn(r,o)&&_t(a,"get",r),_t(a,"get",o));const{has:l}=Dr(a),c=e?Po:n?Lo:vt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&_t(Ye(r),"iterate",ni),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Ye(s),o=Ye(r);return n||(Fn(r,o)&&_t(a,"has",r),_t(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ye(o),c=e?Po:n?Lo:vt;return!n&&_t(l,"iterate",ni),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return ht(t,n?{add:Ur("add"),set:Ur("set"),delete:Ur("delete"),clear:Ur("clear")}:{add(r){!e&&!Vt(r)&&!ci(r)&&(r=Ye(r));const s=Ye(this);return Dr(s).has.call(s,r)||(s.add(r),Sn(s,"add",r,r)),this},set(r,s){!e&&!Vt(s)&&!ci(s)&&(s=Ye(s));const a=Ye(this),{has:o,get:l}=Dr(a);let c=o.call(a,r);c||(r=Ye(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Fn(s,u)&&Sn(a,"set",r,s):Sn(a,"add",r,s),this},delete(r){const s=Ye(this),{has:a,get:o}=Dr(s);let l=a.call(s,r);l||(r=Ye(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Sn(s,"delete",r,void 0),c},clear(){const r=Ye(this),s=r.size!==0,a=r.clear();return s&&Sn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=kf(r,n,e)}),t}function ia(n,e){const t=Wf(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const Xf={get:ia(!1,!1)},qf={get:ia(!1,!0)},Yf={get:ia(!0,!1)};const qc=new WeakMap,Yc=new WeakMap,jc=new WeakMap,jf=new WeakMap;function Kf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $f(n){return n.__v_skip||!Object.isExtensible(n)?0:Kf(Mf(n))}function ra(n){return ci(n)?n:sa(n,!1,zf,Xf,qc)}function Zf(n){return sa(n,!1,Vf,qf,Yc)}function Kc(n){return sa(n,!0,Gf,Yf,jc)}function sa(n,e,t,i,r){if(!Je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=$f(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function zi(n){return ci(n)?zi(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function Vt(n){return!!(n&&n.__v_isShallow)}function oa(n){return n?!!n.__v_raw:!1}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Jf(n){return!je(n,"__v_skip")&&Object.isExtensible(n)&&Cc(n,"__v_skip",!0),n}const vt=n=>Je(n)?ra(n):n,Lo=n=>Je(n)?Kc(n):n;function Mt(n){return n?n.__v_isRef===!0:!1}function Pa(n){return Zc(n,!1)}function $c(n){return Zc(n,!0)}function Zc(n,e){return Mt(n)?n:new Qf(n,e)}class Qf{constructor(e,t){this.dep=new na,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:vt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Vt(e)||ci(e);e=i?e:Ye(e),Fn(e,t)&&(this._rawValue=e,this._value=i?e:vt(e),this.dep.trigger())}}function eh(n){return Mt(n)?n.value:n}const th={get:(n,e,t)=>e==="__v_raw"?n:eh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Mt(r)&&!Mt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Jc(n){return zi(n)?n:new Proxy(n,th)}class nh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new na(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Fc(this,!0),!0}get value(){const e=this.dep.track();return zc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ih(n,e,t=!1){let i,r;return Oe(n)?i=n:(i=n.get,r=n.set),new nh(i,r,t)}const Ir={},cs=new WeakMap;let Jn;function rh(n,e=!1,t=Jn){if(t){let i=cs.get(t);i||cs.set(t,i=[]),i.push(n)}}function sh(n,e,t=Ke){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=E=>r?E:Vt(E)||r===!1||r===0?En(E,1):En(E);let u,f,d,m,v=!1,_=!1;if(Mt(n)?(f=()=>n.value,v=Vt(n)):zi(n)?(f=()=>c(n),v=!0):Le(n)?(_=!0,v=n.some(E=>zi(E)||Vt(E)),f=()=>n.map(E=>{if(Mt(E))return E.value;if(zi(E))return c(E);if(Oe(E))return l?l(E,2):E()})):Oe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Vn();try{d()}finally{kn()}}const E=Jn;Jn=u;try{return l?l(n,3,[m]):n(m)}finally{Jn=E}}:f=on,e&&r){const E=f,b=r===!0?1/0:r;f=()=>En(E(),b)}const p=Df(),h=()=>{u.stop(),p&&p.active&&Ko(p.effects,u)};if(s&&e){const E=e;e=(...b)=>{E(...b),h()}}let C=_?new Array(n.length).fill(Ir):Ir;const S=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const b=u.run();if(r||v||(_?b.some((D,P)=>Fn(D,C[P])):Fn(b,C))){d&&d();const D=Jn;Jn=u;try{const P=[b,C===Ir?void 0:_&&C[0]===Ir?[]:C,m];l?l(e,3,P):e(...P),C=b}finally{Jn=D}}}else u.run()};return o&&o(S),u=new Nc(f),u.scheduler=a?()=>a(S,!1):S,m=E=>rh(E,!1,u),d=u.onStop=()=>{const E=cs.get(u);if(E){if(l)l(E,4);else for(const b of E)b();cs.delete(u)}},e?i?S(!0):C=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function En(n,e=1/0,t){if(e<=0||!Je(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Mt(n))En(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)En(n[i],e,t);else if(xs(n)||Hi(n))n.forEach(i=>{En(i,e,t)});else if(wc(n)){for(const i in n)En(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&En(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(n,e,t,i){try{return i?n(...i):n()}catch(r){Ts(r,e,t)}}function cn(n,e,t,i){if(Oe(n)){const r=br(n,e,t,i);return r&&bc(r)&&r.catch(s=>{Ts(s,e,t)}),r}if(Le(n)){const r=[];for(let s=0;s<n.length;s++)r.push(cn(n[s],e,t,i));return r}}function Ts(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ke;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Vn(),br(s,null,10,[n,l,c]),kn();return}}oh(n,t,r,i,a)}function oh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const At=[];let nn=-1;const Gi=[];let Dn=null,Ni=0;const Qc=Promise.resolve();let us=null;function eu(n){const e=us||Qc;return n?e.then(this?n.bind(this):n):e}function ah(n){let e=nn+1,t=At.length;for(;e<t;){const i=e+t>>>1,r=At[i],s=_r(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function aa(n){if(!(n.flags&1)){const e=_r(n),t=At[At.length-1];!t||!(n.flags&2)&&e>=_r(t)?At.push(n):At.splice(ah(e),0,n),n.flags|=1,tu()}}function tu(){us||(us=Qc.then(iu))}function lh(n){Le(n)?Gi.push(...n):Dn&&n.id===-1?Dn.splice(Ni+1,0,n):n.flags&1||(Gi.push(n),n.flags|=1),tu()}function La(n,e,t=nn+1){for(;t<At.length;t++){const i=At[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;At.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nu(n){if(Gi.length){const e=[...new Set(Gi)].sort((t,i)=>_r(t)-_r(i));if(Gi.length=0,Dn){Dn.push(...e);return}for(Dn=e,Ni=0;Ni<Dn.length;Ni++){const t=Dn[Ni];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Dn=null,Ni=0}}const _r=n=>n.id==null?n.flags&2?-1:1/0:n.id;function iu(n){try{for(nn=0;nn<At.length;nn++){const e=At[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),br(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<At.length;nn++){const e=At[nn];e&&(e.flags&=-2)}nn=-1,At.length=0,nu(),us=null,(At.length||Gi.length)&&iu()}}let Nt=null,ru=null;function fs(n){const e=Nt;return Nt=n,ru=n&&n.type.__scopeId||null,e}function ch(n,e=Nt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ga(-1);const s=fs(e);let a;try{a=n(...r)}finally{fs(s),i._d&&Ga(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Da(n,e){if(Nt===null)return n;const t=Rs(Nt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Ke]=e[r];s&&(Oe(s)&&(s={mounted:s,updated:s}),s.deep&&En(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function qn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Vn(),cn(l,t,8,[n.el,o,n,e]),kn())}}const uh=Symbol("_vte"),fh=n=>n.__isTeleport;function la(n,e){n.shapeFlag&6&&n.component?(n.transition=e,la(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function hh(n,e){return Oe(n)?ht({name:n.name},e,{setup:n}):n}function su(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function dh(n){const e=fd(),t=$c(null);if(e){const r=e.refs===Ke?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function hs(n,e,t,i,r=!1){if(Le(n)){n.forEach((v,_)=>hs(v,e&&(Le(e)?e[_]:e),t,i,r));return}if(ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&hs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Rs(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ke?o.refs={}:o.refs,f=o.setupState,d=Ye(f),m=f===Ke?()=>!1:v=>je(d,v);if(c!=null&&c!==l&&(ot(c)?(u[c]=null,m(c)&&(f[c]=null)):Mt(c)&&(c.value=null)),Oe(l))br(l,o,12,[a,u]);else{const v=ot(l),_=Mt(l);if(v||_){const p=()=>{if(n.f){const h=v?m(l)?f[l]:u[l]:l.value;r?Le(h)&&Ko(h,s):Le(h)?h.includes(s)||h.push(s):v?(u[l]=[s],m(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=a,m(l)&&(f[l]=a)):_&&(l.value=a,n.k&&(u[n.k]=a))};a?(p.id=-1,Ut(p,t)):p()}}}Ss().requestIdleCallback;Ss().cancelIdleCallback;const ur=n=>!!n.type.__asyncLoader,ou=n=>n.type.__isKeepAlive;function ph(n,e){au(n,"a",e)}function mh(n,e){au(n,"da",e)}function au(n,e,t=xt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(bs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ou(r.parent.vnode)&&gh(i,e,t,r),r=r.parent}}function gh(n,e,t,i){const r=bs(e,n,i,!0);ca(()=>{Ko(i[e],r)},t)}function bs(n,e,t=xt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Vn();const o=Ar(t),l=cn(e,t,n,a);return o(),kn(),l});return i?r.unshift(s):r.push(s),s}}const An=n=>(e,t=xt)=>{(!Mr||n==="sp")&&bs(n,(...i)=>e(...i),t)},_h=An("bm"),lu=An("m"),vh=An("bu"),xh=An("u"),Mh=An("bum"),ca=An("um"),Sh=An("sp"),Eh=An("rtg"),yh=An("rtc");function Th(n,e=xt){bs("ec",n,e)}const bh=Symbol.for("v-ndc");function Ah(n,e,t,i){let r;const s=t,a=Le(n);if(a||ot(n)){const o=a&&zi(n);let l=!1;o&&(l=!Vt(n),n=ys(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?vt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Je(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Do=n=>n?Ru(n)?Rs(n):Do(n.parent):null,fr=ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Do(n.parent),$root:n=>Do(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ua(n),$forceUpdate:n=>n.f||(n.f=()=>{aa(n.update)}),$nextTick:n=>n.n||(n.n=eu.bind(n.proxy)),$watch:n=>jh.bind(n)}),Vs=(n,e)=>n!==Ke&&!n.__isScriptSetup&&je(n,e),wh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Vs(i,e))return a[e]=1,i[e];if(r!==Ke&&je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(t!==Ke&&je(t,e))return a[e]=4,t[e];Uo&&(a[e]=0)}}const u=fr[e];let f,d;if(u)return e==="$attrs"&&_t(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ke&&je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Vs(r,e)?(r[e]=t,!0):i!==Ke&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ke&&je(n,a)||Vs(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(fr,a)||je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ua(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Uo=!0;function Rh(n){const e=ua(n),t=n.proxy,i=n.ctx;Uo=!1,e.beforeCreate&&Ia(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:C,destroyed:S,unmounted:E,render:b,renderTracked:D,renderTriggered:P,errorCaptured:ee,serverPrefetch:M,expose:R,inheritAttrs:ue,components:he,directives:H,filters:$}=e;if(c&&Ch(c,i,null),a)for(const k in a){const W=a[k];Oe(W)&&(i[k]=W.bind(t))}if(r){const k=r.call(t,t);Je(k)&&(n.data=ra(k))}if(Uo=!0,s)for(const k in s){const W=s[k],fe=Oe(W)?W.bind(t,t):Oe(W.get)?W.get.bind(t,t):on,ae=!Oe(W)&&Oe(W.set)?W.set.bind(t):on,G=_d({get:fe,set:ae});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>G.value,set:X=>G.value=X})}if(o)for(const k in o)cu(o[k],i,t,k);if(l){const k=Oe(l)?l.call(t):l;Reflect.ownKeys(k).forEach(W=>{Nh(W,k[W])})}u&&Ia(u,n,"c");function se(k,W){Le(W)?W.forEach(fe=>k(fe.bind(t))):W&&k(W.bind(t))}if(se(_h,f),se(lu,d),se(vh,m),se(xh,v),se(ph,_),se(mh,p),se(Th,ee),se(yh,D),se(Eh,P),se(Mh,C),se(ca,E),se(Sh,M),Le(R))if(R.length){const k=n.exposed||(n.exposed={});R.forEach(W=>{Object.defineProperty(k,W,{get:()=>t[W],set:fe=>t[W]=fe})})}else n.exposed||(n.exposed={});b&&n.render===on&&(n.render=b),ue!=null&&(n.inheritAttrs=ue),he&&(n.components=he),H&&(n.directives=H),M&&su(n)}function Ch(n,e,t=on){Le(n)&&(n=Io(n));for(const i in n){const r=n[i];let s;Je(r)?"default"in r?s=rs(r.from||i,r.default,!0):s=rs(r.from||i):s=rs(r),Mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ia(n,e,t){cn(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cu(n,e,t,i){let r=i.includes(".")?yu(t,i):()=>t[i];if(ot(n)){const s=e[n];Oe(s)&&ss(r,s)}else if(Oe(n))ss(r,n.bind(t));else if(Je(n))if(Le(n))n.forEach(s=>cu(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&ss(r,s,n)}}function ua(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ds(l,c,a,!0)),ds(l,e,a)),Je(e)&&s.set(e,l),l}function ds(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ds(n,s,t,!0),r&&r.forEach(a=>ds(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Ph[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Ph={data:Na,props:Oa,emits:Oa,methods:sr,computed:sr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:sr,directives:sr,watch:Dh,provide:Na,inject:Lh};function Na(n,e){return e?n?function(){return ht(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function Lh(n,e){return sr(Io(n),Io(e))}function Io(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yt(n,e){return n?[...new Set([].concat(n,e))]:e}function sr(n,e){return n?ht(Object.create(null),n,e):e}function Oa(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:ht(Object.create(null),Ua(n),Ua(e??{})):e}function Dh(n,e){if(!n)return e;if(!e)return n;const t=ht(Object.create(null),n);for(const i in e)t[i]=yt(n[i],e[i]);return t}function uu(){return{app:null,config:{isNativeTag:vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uh=0;function Ih(n,e){return function(i,r=null){Oe(i)||(i=ht({},i)),r!=null&&!Je(r)&&(r=null);const s=uu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Uh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:vd,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Oe(u.install)?(a.add(u),u.install(c,...f)):Oe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||ii(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(m,u):n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Rs(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(cn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Vi;Vi=c;try{return u()}finally{Vi=f}}};return c}}let Vi=null;function Nh(n,e){if(xt){let t=xt.provides;const i=xt.parent&&xt.parent.provides;i===t&&(t=xt.provides=Object.create(i)),t[n]=e}}function rs(n,e,t=!1){const i=xt||Nt;if(i||Vi){const r=Vi?Vi._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i&&i.proxy):e}}const fu={},hu=()=>Object.create(fu),du=n=>Object.getPrototypeOf(n)===fu;function Oh(n,e,t,i=!1){const r={},s=hu();n.propsDefaults=Object.create(null),pu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Zf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Fh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ye(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(As(n.emitsOptions,d))continue;const m=e[d];if(l)if(je(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const v=zn(d);r[v]=No(l,o,v,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{pu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!je(e,f)&&((u=di(f))===f||!je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=No(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!je(e,f))&&(delete s[f],c=!0)}c&&Sn(n.attrs,"set","")}function pu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ar(l))continue;const c=e[l];let u;r&&je(r,u=zn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:As(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ye(t),c=o||Ke;for(let u=0;u<s.length;u++){const f=s[u];t[f]=No(r,l,f,c[f],n,!je(c,f))}}return a}function No(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Oe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ar(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===di(t))&&(i=!0))}return i}const Bh=new WeakMap;function mu(n,e,t=!1){const i=t?Bh:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[d,m]=mu(f,e,!0);ht(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Je(n)&&i.set(n,Bi),Bi;if(Le(s))for(let u=0;u<s.length;u++){const f=zn(s[u]);Fa(f)&&(a[f]=Ke)}else if(s)for(const u in s){const f=zn(u);if(Fa(f)){const d=s[u],m=a[f]=Le(d)||Oe(d)?{type:d}:ht({},d),v=m.type;let _=!1,p=!0;if(Le(v))for(let h=0;h<v.length;++h){const C=v[h],S=Oe(C)&&C.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(p=!1)}else _=Oe(v)&&v.name==="Boolean";m[0]=_,m[1]=p,(_||je(m,"default"))&&o.push(f)}}const c=[a,o];return Je(n)&&i.set(n,c),c}function Fa(n){return n[0]!=="$"&&!ar(n)}const gu=n=>n[0]==="_"||n==="$stable",fa=n=>Le(n)?n.map(rn):[rn(n)],Hh=(n,e,t)=>{if(e._n)return e;const i=ch((...r)=>fa(e(...r)),t);return i._c=!1,i},_u=(n,e,t)=>{const i=n._ctx;for(const r in n){if(gu(r))continue;const s=n[r];if(Oe(s))e[r]=Hh(r,s,i);else if(s!=null){const a=fa(s);e[r]=()=>a}}},vu=(n,e)=>{const t=fa(e);n.slots.default=()=>t},xu=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},zh=(n,e,t)=>{const i=n.slots=hu();if(n.vnode.shapeFlag&32){const r=e._;r?(xu(i,e,t),t&&Cc(i,"_",r,!0)):_u(e,i)}else e&&vu(n,e)},Gh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ke;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:xu(r,e,t):(s=!e.$stable,_u(e,r)),a=e}else e&&(vu(n,e),a={default:1});if(s)for(const o in r)!gu(o)&&a[o]==null&&delete r[o]},Ut=td;function Vh(n){return kh(n)}function kh(n,e){const t=Ss();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=on,insertStaticContent:v}=n,_=(A,w,I,V=null,Z=null,K=null,ie=void 0,oe=null,ce=!!w.dynamicChildren)=>{if(A===w)return;A&&!Qi(A,w)&&(V=Pe(A),X(A,Z,K,!0),A=null),w.patchFlag===-2&&(ce=!1,w.dynamicChildren=null);const{type:re,ref:x,shapeFlag:g}=w;switch(re){case ws:p(A,w,I,V);break;case vr:h(A,w,I,V);break;case Xs:A==null&&C(w,I,V,ie);break;case jt:he(A,w,I,V,Z,K,ie,oe,ce);break;default:g&1?b(A,w,I,V,Z,K,ie,oe,ce):g&6?H(A,w,I,V,Z,K,ie,oe,ce):(g&64||g&128)&&re.process(A,w,I,V,Z,K,ie,oe,ce,Qe)}x!=null&&Z&&hs(x,A&&A.ref,K,w||A,!w)},p=(A,w,I,V)=>{if(A==null)i(w.el=o(w.children),I,V);else{const Z=w.el=A.el;w.children!==A.children&&c(Z,w.children)}},h=(A,w,I,V)=>{A==null?i(w.el=l(w.children||""),I,V):w.el=A.el},C=(A,w,I,V)=>{[A.el,A.anchor]=v(A.children,w,I,V,A.el,A.anchor)},S=({el:A,anchor:w},I,V)=>{let Z;for(;A&&A!==w;)Z=d(A),i(A,I,V),A=Z;i(w,I,V)},E=({el:A,anchor:w})=>{let I;for(;A&&A!==w;)I=d(A),r(A),A=I;r(w)},b=(A,w,I,V,Z,K,ie,oe,ce)=>{w.type==="svg"?ie="svg":w.type==="math"&&(ie="mathml"),A==null?D(w,I,V,Z,K,ie,oe,ce):M(A,w,Z,K,ie,oe,ce)},D=(A,w,I,V,Z,K,ie,oe)=>{let ce,re;const{props:x,shapeFlag:g,transition:U,dirs:q}=A;if(ce=A.el=a(A.type,K,x&&x.is,x),g&8?u(ce,A.children):g&16&&ee(A.children,ce,null,V,Z,ks(A,K),ie,oe),q&&qn(A,null,V,"created"),P(ce,A,A.scopeId,ie,V),x){for(const T in x)T!=="value"&&!ar(T)&&s(ce,T,null,x[T],K,V);"value"in x&&s(ce,"value",null,x.value,K),(re=x.onVnodeBeforeMount)&&tn(re,V,A)}q&&qn(A,null,V,"beforeMount");const Q=Wh(Z,U);Q&&U.beforeEnter(ce),i(ce,w,I),((re=x&&x.onVnodeMounted)||Q||q)&&Ut(()=>{re&&tn(re,V,A),Q&&U.enter(ce),q&&qn(A,null,V,"mounted")},Z)},P=(A,w,I,V,Z)=>{if(I&&m(A,I),V)for(let K=0;K<V.length;K++)m(A,V[K]);if(Z){let K=Z.subTree;if(w===K||bu(K.type)&&(K.ssContent===w||K.ssFallback===w)){const ie=Z.vnode;P(A,ie,ie.scopeId,ie.slotScopeIds,Z.parent)}}},ee=(A,w,I,V,Z,K,ie,oe,ce=0)=>{for(let re=ce;re<A.length;re++){const x=A[re]=oe?Un(A[re]):rn(A[re]);_(null,x,w,I,V,Z,K,ie,oe)}},M=(A,w,I,V,Z,K,ie)=>{const oe=w.el=A.el;let{patchFlag:ce,dynamicChildren:re,dirs:x}=w;ce|=A.patchFlag&16;const g=A.props||Ke,U=w.props||Ke;let q;if(I&&Yn(I,!1),(q=U.onVnodeBeforeUpdate)&&tn(q,I,w,A),x&&qn(w,A,I,"beforeUpdate"),I&&Yn(I,!0),(g.innerHTML&&U.innerHTML==null||g.textContent&&U.textContent==null)&&u(oe,""),re?R(A.dynamicChildren,re,oe,I,V,ks(w,Z),K):ie||W(A,w,oe,null,I,V,ks(w,Z),K,!1),ce>0){if(ce&16)ue(oe,g,U,I,Z);else if(ce&2&&g.class!==U.class&&s(oe,"class",null,U.class,Z),ce&4&&s(oe,"style",g.style,U.style,Z),ce&8){const Q=w.dynamicProps;for(let T=0;T<Q.length;T++){const Y=Q[T],le=g[Y],F=U[Y];(F!==le||Y==="value")&&s(oe,Y,le,F,Z,I)}}ce&1&&A.children!==w.children&&u(oe,w.children)}else!ie&&re==null&&ue(oe,g,U,I,Z);((q=U.onVnodeUpdated)||x)&&Ut(()=>{q&&tn(q,I,w,A),x&&qn(w,A,I,"updated")},V)},R=(A,w,I,V,Z,K,ie)=>{for(let oe=0;oe<w.length;oe++){const ce=A[oe],re=w[oe],x=ce.el&&(ce.type===jt||!Qi(ce,re)||ce.shapeFlag&70)?f(ce.el):I;_(ce,re,x,null,V,Z,K,ie,!0)}},ue=(A,w,I,V,Z)=>{if(w!==I){if(w!==Ke)for(const K in w)!ar(K)&&!(K in I)&&s(A,K,w[K],null,Z,V);for(const K in I){if(ar(K))continue;const ie=I[K],oe=w[K];ie!==oe&&K!=="value"&&s(A,K,oe,ie,Z,V)}"value"in I&&s(A,"value",w.value,I.value,Z)}},he=(A,w,I,V,Z,K,ie,oe,ce)=>{const re=w.el=A?A.el:o(""),x=w.anchor=A?A.anchor:o("");let{patchFlag:g,dynamicChildren:U,slotScopeIds:q}=w;q&&(oe=oe?oe.concat(q):q),A==null?(i(re,I,V),i(x,I,V),ee(w.children||[],I,x,Z,K,ie,oe,ce)):g>0&&g&64&&U&&A.dynamicChildren?(R(A.dynamicChildren,U,I,Z,K,ie,oe),(w.key!=null||Z&&w===Z.subTree)&&Mu(A,w,!0)):W(A,w,I,x,Z,K,ie,oe,ce)},H=(A,w,I,V,Z,K,ie,oe,ce)=>{w.slotScopeIds=oe,A==null?w.shapeFlag&512?Z.ctx.activate(w,I,V,ie,ce):$(w,I,V,Z,K,ie,ce):J(A,w,ce)},$=(A,w,I,V,Z,K,ie)=>{const oe=A.component=ud(A,V,Z);if(ou(A)&&(oe.ctx.renderer=Qe),hd(oe,!1,ie),oe.asyncDep){if(Z&&Z.registerDep(oe,se,ie),!A.el){const ce=oe.subTree=ii(vr);h(null,ce,w,I)}}else se(oe,A,w,I,Z,K,ie)},J=(A,w,I)=>{const V=w.component=A.component;if(Qh(A,w,I))if(V.asyncDep&&!V.asyncResolved){k(V,w,I);return}else V.next=w,V.update();else w.el=A.el,V.vnode=w},se=(A,w,I,V,Z,K,ie)=>{const oe=()=>{if(A.isMounted){let{next:g,bu:U,u:q,parent:Q,vnode:T}=A;{const Ee=Su(A);if(Ee){g&&(g.el=T.el,k(A,g,ie)),Ee.asyncDep.then(()=>{A.isUnmounted||oe()});return}}let Y=g,le;Yn(A,!1),g?(g.el=T.el,k(A,g,ie)):g=T,U&&is(U),(le=g.props&&g.props.onVnodeBeforeUpdate)&&tn(le,Q,g,T),Yn(A,!0);const F=Ws(A),ve=A.subTree;A.subTree=F,_(ve,F,f(ve.el),Pe(ve),A,Z,K),g.el=F.el,Y===null&&ed(A,F.el),q&&Ut(q,Z),(le=g.props&&g.props.onVnodeUpdated)&&Ut(()=>tn(le,Q,g,T),Z)}else{let g;const{el:U,props:q}=w,{bm:Q,m:T,parent:Y,root:le,type:F}=A,ve=ur(w);if(Yn(A,!1),Q&&is(Q),!ve&&(g=q&&q.onVnodeBeforeMount)&&tn(g,Y,w),Yn(A,!0),U&&O){const Ee=()=>{A.subTree=Ws(A),O(U,A.subTree,A,Z,null)};ve&&F.__asyncHydrate?F.__asyncHydrate(U,A,Ee):Ee()}else{le.ce&&le.ce._injectChildStyle(F);const Ee=A.subTree=Ws(A);_(null,Ee,I,V,A,Z,K),w.el=Ee.el}if(T&&Ut(T,Z),!ve&&(g=q&&q.onVnodeMounted)){const Ee=w;Ut(()=>tn(g,Y,Ee),Z)}(w.shapeFlag&256||Y&&ur(Y.vnode)&&Y.vnode.shapeFlag&256)&&A.a&&Ut(A.a,Z),A.isMounted=!0,w=I=V=null}};A.scope.on();const ce=A.effect=new Nc(oe);A.scope.off();const re=A.update=ce.run.bind(ce),x=A.job=ce.runIfDirty.bind(ce);x.i=A,x.id=A.uid,ce.scheduler=()=>aa(x),Yn(A,!0),re()},k=(A,w,I)=>{w.component=A;const V=A.vnode.props;A.vnode=w,A.next=null,Fh(A,w.props,V,I),Gh(A,w.children,I),Vn(),La(A),kn()},W=(A,w,I,V,Z,K,ie,oe,ce=!1)=>{const re=A&&A.children,x=A?A.shapeFlag:0,g=w.children,{patchFlag:U,shapeFlag:q}=w;if(U>0){if(U&128){ae(re,g,I,V,Z,K,ie,oe,ce);return}else if(U&256){fe(re,g,I,V,Z,K,ie,oe,ce);return}}q&8?(x&16&&Ae(re,Z,K),g!==re&&u(I,g)):x&16?q&16?ae(re,g,I,V,Z,K,ie,oe,ce):Ae(re,Z,K,!0):(x&8&&u(I,""),q&16&&ee(g,I,V,Z,K,ie,oe,ce))},fe=(A,w,I,V,Z,K,ie,oe,ce)=>{A=A||Bi,w=w||Bi;const re=A.length,x=w.length,g=Math.min(re,x);let U;for(U=0;U<g;U++){const q=w[U]=ce?Un(w[U]):rn(w[U]);_(A[U],q,I,null,Z,K,ie,oe,ce)}re>x?Ae(A,Z,K,!0,!1,g):ee(w,I,V,Z,K,ie,oe,ce,g)},ae=(A,w,I,V,Z,K,ie,oe,ce)=>{let re=0;const x=w.length;let g=A.length-1,U=x-1;for(;re<=g&&re<=U;){const q=A[re],Q=w[re]=ce?Un(w[re]):rn(w[re]);if(Qi(q,Q))_(q,Q,I,null,Z,K,ie,oe,ce);else break;re++}for(;re<=g&&re<=U;){const q=A[g],Q=w[U]=ce?Un(w[U]):rn(w[U]);if(Qi(q,Q))_(q,Q,I,null,Z,K,ie,oe,ce);else break;g--,U--}if(re>g){if(re<=U){const q=U+1,Q=q<x?w[q].el:V;for(;re<=U;)_(null,w[re]=ce?Un(w[re]):rn(w[re]),I,Q,Z,K,ie,oe,ce),re++}}else if(re>U)for(;re<=g;)X(A[re],Z,K,!0),re++;else{const q=re,Q=re,T=new Map;for(re=Q;re<=U;re++){const pe=w[re]=ce?Un(w[re]):rn(w[re]);pe.key!=null&&T.set(pe.key,re)}let Y,le=0;const F=U-Q+1;let ve=!1,Ee=0;const ye=new Array(F);for(re=0;re<F;re++)ye[re]=0;for(re=q;re<=g;re++){const pe=A[re];if(le>=F){X(pe,Z,K,!0);continue}let we;if(pe.key!=null)we=T.get(pe.key);else for(Y=Q;Y<=U;Y++)if(ye[Y-Q]===0&&Qi(pe,w[Y])){we=Y;break}we===void 0?X(pe,Z,K,!0):(ye[we-Q]=re+1,we>=Ee?Ee=we:ve=!0,_(pe,w[we],I,null,Z,K,ie,oe,ce),le++)}const Te=ve?Xh(ye):Bi;for(Y=Te.length-1,re=F-1;re>=0;re--){const pe=Q+re,we=w[pe],ze=pe+1<x?w[pe+1].el:V;ye[re]===0?_(null,we,I,ze,Z,K,ie,oe,ce):ve&&(Y<0||re!==Te[Y]?G(we,I,ze,2):Y--)}}},G=(A,w,I,V,Z=null)=>{const{el:K,type:ie,transition:oe,children:ce,shapeFlag:re}=A;if(re&6){G(A.component.subTree,w,I,V);return}if(re&128){A.suspense.move(w,I,V);return}if(re&64){ie.move(A,w,I,Qe);return}if(ie===jt){i(K,w,I);for(let g=0;g<ce.length;g++)G(ce[g],w,I,V);i(A.anchor,w,I);return}if(ie===Xs){S(A,w,I);return}if(V!==2&&re&1&&oe)if(V===0)oe.beforeEnter(K),i(K,w,I),Ut(()=>oe.enter(K),Z);else{const{leave:g,delayLeave:U,afterLeave:q}=oe,Q=()=>i(K,w,I),T=()=>{g(K,()=>{Q(),q&&q()})};U?U(K,Q,T):T()}else i(K,w,I)},X=(A,w,I,V=!1,Z=!1)=>{const{type:K,props:ie,ref:oe,children:ce,dynamicChildren:re,shapeFlag:x,patchFlag:g,dirs:U,cacheIndex:q}=A;if(g===-2&&(Z=!1),oe!=null&&hs(oe,null,I,A,!0),q!=null&&(w.renderCache[q]=void 0),x&256){w.ctx.deactivate(A);return}const Q=x&1&&U,T=!ur(A);let Y;if(T&&(Y=ie&&ie.onVnodeBeforeUnmount)&&tn(Y,w,A),x&6)Me(A.component,I,V);else{if(x&128){A.suspense.unmount(I,V);return}Q&&qn(A,null,w,"beforeUnmount"),x&64?A.type.remove(A,w,I,Qe,V):re&&!re.hasOnce&&(K!==jt||g>0&&g&64)?Ae(re,w,I,!1,!0):(K===jt&&g&384||!Z&&x&16)&&Ae(ce,w,I),V&&ge(A)}(T&&(Y=ie&&ie.onVnodeUnmounted)||Q)&&Ut(()=>{Y&&tn(Y,w,A),Q&&qn(A,null,w,"unmounted")},I)},ge=A=>{const{type:w,el:I,anchor:V,transition:Z}=A;if(w===jt){_e(I,V);return}if(w===Xs){E(A);return}const K=()=>{r(I),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(A.shapeFlag&1&&Z&&!Z.persisted){const{leave:ie,delayLeave:oe}=Z,ce=()=>ie(I,K);oe?oe(A.el,K,ce):ce()}else K()},_e=(A,w)=>{let I;for(;A!==w;)I=d(A),r(A),A=I;r(w)},Me=(A,w,I)=>{const{bum:V,scope:Z,job:K,subTree:ie,um:oe,m:ce,a:re}=A;Ba(ce),Ba(re),V&&is(V),Z.stop(),K&&(K.flags|=8,X(ie,A,w,I)),oe&&Ut(oe,w),Ut(()=>{A.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ae=(A,w,I,V=!1,Z=!1,K=0)=>{for(let ie=K;ie<A.length;ie++)X(A[ie],w,I,V,Z)},Pe=A=>{if(A.shapeFlag&6)return Pe(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const w=d(A.anchor||A.el),I=w&&w[uh];return I?d(I):w};let Re=!1;const We=(A,w,I)=>{A==null?w._vnode&&X(w._vnode,null,null,!0):_(w._vnode||null,A,w,null,null,null,I),w._vnode=A,Re||(Re=!0,La(),nu(),Re=!1)},Qe={p:_,um:X,m:G,r:ge,mt:$,mc:ee,pc:W,pbc:R,n:Pe,o:n};let Ie,O;return{render:We,hydrate:Ie,createApp:Ih(We,Ie)}}function ks({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Mu(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Un(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Mu(a,o)),o.type===ws&&(o.el=a.el)}}function Xh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Su(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Su(e)}function Ba(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const qh=Symbol.for("v-scx"),Yh=()=>rs(qh);function ss(n,e,t){return Eu(n,e,t)}function Eu(n,e,t=Ke){const{immediate:i,deep:r,flush:s,once:a}=t,o=ht({},t),l=e&&i||!e&&s!=="post";let c;if(Mr){if(s==="sync"){const m=Yh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=on,m.resume=on,m.pause=on,m}}const u=xt;o.call=(m,v,_)=>cn(m,u,v,_);let f=!1;s==="post"?o.scheduler=m=>{Ut(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,v)=>{v?m():aa(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=sh(n,e,o);return Mr&&(c?c.push(d):l&&d()),d}function jh(n,e,t){const i=this.proxy,r=ot(n)?n.includes(".")?yu(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const a=Ar(this),o=Eu(r,s.bind(i),t);return a(),o}function yu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Kh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${zn(e)}Modifiers`]||n[`${di(e)}Modifiers`];function $h(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ke;let r=t;const s=e.startsWith("update:"),a=s&&Kh(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ot(u)?u.trim():u)),a.number&&(r=t.map(Pc)));let o,l=i[o=Fs(e)]||i[o=Fs(zn(e))];!l&&s&&(l=i[o=Fs(di(e))]),l&&cn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,cn(c,n,6,r)}}function Tu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Oe(n)){const l=c=>{const u=Tu(c,e,!0);u&&(o=!0,ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Je(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>a[l]=null):ht(a,s),Je(n)&&i.set(n,a),a)}function As(n,e){return!n||!vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,di(e))||je(n,e))}function Ws(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:v,inheritAttrs:_}=n,p=fs(n);let h,C;try{if(t.shapeFlag&4){const E=r||i,b=E;h=rn(c.call(b,E,u,f,m,d,v)),C=o}else{const E=e;h=rn(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),C=e.props?o:Zh(o)}}catch(E){hr.length=0,Ts(E,n,1),h=ii(vr)}let S=h;if(C&&_!==!1){const E=Object.keys(C),{shapeFlag:b}=S;E.length&&b&7&&(s&&E.some(jo)&&(C=Jh(C,s)),S=Xi(S,C,!1,!0))}return t.dirs&&(S=Xi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&la(S,t.transition),h=S,fs(p),h}const Zh=n=>{let e;for(const t in n)(t==="class"||t==="style"||vs(t))&&((e||(e={}))[t]=n[t]);return e},Jh=(n,e)=>{const t={};for(const i in n)(!jo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ha(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!As(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ha(i,a,c):!0:!!a;return!1}function Ha(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!As(t,s))return!0}return!1}function ed({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const bu=n=>n.__isSuspense;function td(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):lh(n)}const jt=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),Xs=Symbol.for("v-stc"),hr=[];let Ot=null;function za(n=!1){hr.push(Ot=n?null:[])}function nd(){hr.pop(),Ot=hr[hr.length-1]||null}let xr=1;function Ga(n,e=!1){xr+=n,n<0&&Ot&&e&&(Ot.hasOnce=!0)}function id(n){return n.dynamicChildren=xr>0?Ot||Bi:null,nd(),xr>0&&Ot&&Ot.push(n),n}function Va(n,e,t,i,r,s){return id(dr(n,e,t,i,r,s,!0))}function Au(n){return n?n.__v_isVNode===!0:!1}function Qi(n,e){return n.type===e.type&&n.key===e.key}const wu=({key:n})=>n??null,os=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ot(n)||Mt(n)||Oe(n)?{i:Nt,r:n,k:e,f:!!t}:n:null);function dr(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wu(e),ref:e&&os(e),scopeId:ru,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Nt};return o?(ha(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ot(t)?8:16),xr>0&&!a&&Ot&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ot.push(l),l}const ii=rd;function rd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===bh)&&(n=vr),Au(n)){const o=Xi(n,e,!0);return t&&ha(o,t),xr>0&&!s&&Ot&&(o.shapeFlag&6?Ot[Ot.indexOf(n)]=o:Ot.push(o)),o.patchFlag=-2,o}if(gd(n)&&(n=n.__vccOpts),e){e=sd(e);let{class:o,style:l}=e;o&&!ot(o)&&(e.class=Jo(o)),Je(l)&&(oa(l)&&!Le(l)&&(l=ht({},l)),e.style=Zo(l))}const a=ot(n)?1:bu(n)?128:fh(n)?64:Je(n)?4:Oe(n)?2:0;return dr(n,e,t,i,r,a,s,!0)}function sd(n){return n?oa(n)||du(n)?ht({},n):n:null}function Xi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?ad(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wu(c),ref:e&&e.ref?t&&s?Le(s)?s.concat(os(e)):[s,os(e)]:os(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&la(u,l.clone(u)),u}function od(n=" ",e=0){return ii(ws,null,n,e)}function rn(n){return n==null||typeof n=="boolean"?ii(vr):Le(n)?ii(jt,null,n.slice()):Au(n)?Un(n):ii(ws,null,String(n))}function Un(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xi(n)}function ha(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ha(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!du(e)?e._ctx=Nt:r===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Nt},t=32):(e=String(e),i&64?(t=16,e=[od(e)]):t=8);n.children=e,n.shapeFlag|=t}function ad(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jo([e.class,i.class]));else if(r==="style")e.style=Zo([e.style,i.style]);else if(vs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function tn(n,e,t,i=null){cn(n,e,7,[t,i])}const ld=uu();let cd=0;function ud(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ld,s={uid:cd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(i,r),emitsOptions:Tu(i,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:i.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$h.bind(null,s),n.ce&&n.ce(s),s}let xt=null;const fd=()=>xt||Nt;let ps,Oo;{const n=Ss(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ps=e("__VUE_INSTANCE_SETTERS__",t=>xt=t),Oo=e("__VUE_SSR_SETTERS__",t=>Mr=t)}const Ar=n=>{const e=xt;return ps(n),n.scope.on(),()=>{n.scope.off(),ps(e)}},ka=()=>{xt&&xt.scope.off(),ps(null)};function Ru(n){return n.vnode.shapeFlag&4}let Mr=!1;function hd(n,e=!1,t=!1){e&&Oo(e);const{props:i,children:r}=n.vnode,s=Ru(n);Oh(n,i,s,e),zh(n,r,t);const a=s?dd(n,e):void 0;return e&&Oo(!1),a}function dd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wh);const{setup:i}=t;if(i){Vn();const r=n.setupContext=i.length>1?md(n):null,s=Ar(n),a=br(i,n,0,[n.props,r]),o=bc(a);if(kn(),s(),(o||n.sp)&&!ur(n)&&su(n),o){if(a.then(ka,ka),e)return a.then(l=>{Wa(n,l,e)}).catch(l=>{Ts(l,n,0)});n.asyncDep=a}else Wa(n,a,e)}else Cu(n,e)}function Wa(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Je(e)&&(n.setupState=Jc(e)),Cu(n,t)}let Xa;function Cu(n,e,t){const i=n.type;if(!n.render){if(!e&&Xa&&!i.render){const r=i.template||ua(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ht(ht({isCustomElement:s,delimiters:o},a),l);i.render=Xa(r,c)}}n.render=i.render||on}{const r=Ar(n);Vn();try{Rh(n)}finally{kn(),r()}}}const pd={get(n,e){return _t(n,"get",""),n[e]}};function md(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,pd),slots:n.slots,emit:n.emit,expose:e}}function Rs(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jc(Jf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fr)return fr[t](n)},has(e,t){return t in e||t in fr}})):n.proxy}function gd(n){return Oe(n)&&"__vccOpts"in n}const _d=(n,e)=>ih(n,e,Mr),vd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fo;const qa=typeof window<"u"&&window.trustedTypes;if(qa)try{Fo=qa.createPolicy("vue",{createHTML:n=>n})}catch{}const Pu=Fo?n=>Fo.createHTML(n):n=>n,xd="http://www.w3.org/2000/svg",Md="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,Ya=Mn&&Mn.createElement("template"),Sd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Mn.createElementNS(xd,n):e==="mathml"?Mn.createElementNS(Md,n):t?Mn.createElement(n,{is:t}):Mn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Mn.createTextNode(n),createComment:n=>Mn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ya.innerHTML=Pu(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ya.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ed=Symbol("_vtc");function yd(n,e,t){const i=n[Ed];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ms=Symbol("_vod"),Lu=Symbol("_vsh"),Td={beforeMount(n,{value:e},{transition:t}){n[ms]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):er(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),er(n,!0),i.enter(n)):i.leave(n,()=>{er(n,!1)}):er(n,e))},beforeUnmount(n,{value:e}){er(n,e)}};function er(n,e){n.style.display=e?n[ms]:"none",n[Lu]=!e}const bd=Symbol(""),Ad=/(^|;)\s*display\s*:/;function wd(n,e,t){const i=n.style,r=ot(t);let s=!1;if(t&&!r){if(e)if(ot(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&as(i,o,"")}else for(const a in e)t[a]==null&&as(i,a,"");for(const a in t)a==="display"&&(s=!0),as(i,a,t[a])}else if(r){if(e!==t){const a=i[bd];a&&(t+=";"+a),i.cssText=t,s=Ad.test(t)}}else e&&n.removeAttribute("style");ms in n&&(n[ms]=s?i.display:"",n[Lu]&&(i.display="none"))}const ja=/\s*!important$/;function as(n,e,t){if(Le(t))t.forEach(i=>as(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Rd(n,e);ja.test(t)?n.setProperty(di(i),t.replace(ja,""),"important"):n[i]=t}}const Ka=["Webkit","Moz","ms"],qs={};function Rd(n,e){const t=qs[e];if(t)return t;let i=zn(e);if(i!=="filter"&&i in n)return qs[e]=i;i=Rc(i);for(let r=0;r<Ka.length;r++){const s=Ka[r]+i;if(s in n)return qs[e]=s}return e}const $a="http://www.w3.org/1999/xlink";function Za(n,e,t,i,r,s=Rf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS($a,e.slice(6,e.length)):n.setAttributeNS($a,e,t):t==null||s&&!Lc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ln(t)?String(t):t)}function Ja(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pu(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Lc(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Du(n,e,t,i){n.addEventListener(e,t,i)}function Cd(n,e,t,i){n.removeEventListener(e,t,i)}const Qa=Symbol("_vei");function Pd(n,e,t,i,r=null){const s=n[Qa]||(n[Qa]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Ld(e);if(i){const c=s[e]=Id(i,r);Du(n,o,c,l)}else a&&(Cd(n,o,a,l),s[e]=void 0)}}const el=/(?:Once|Passive|Capture)$/;function Ld(n){let e;if(el.test(n)){e={};let i;for(;i=n.match(el);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):di(n.slice(2)),e]}let Ys=0;const Dd=Promise.resolve(),Ud=()=>Ys||(Dd.then(()=>Ys=0),Ys=Date.now());function Id(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;cn(Nd(i,t.value),e,5,[i])};return t.value=n,t.attached=Ud(),t}function Nd(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Od=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?yd(n,i,a):e==="style"?wd(n,t,i):vs(e)?jo(e)||Pd(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fd(n,e,i,a))?(Ja(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Za(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ot(i))?Ja(n,zn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Za(n,e,i,a))};function Fd(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&tl(e)&&Oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tl(e)&&ot(t)?!1:e in n}const nl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>is(e,t):e},js=Symbol("_assign"),Bd={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=xs(e);Du(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Pc(gs(a)):gs(a));n[js](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,eu(()=>{n._assigning=!1})}),n[js]=nl(i)},mounted(n,{value:e}){il(n,e)},beforeUpdate(n,e,t){n[js]=nl(t)},updated(n,{value:e}){n._assigning||il(n,e)}};function il(n,e){const t=n.multiple,i=Le(e);if(!(t&&!i&&!xs(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=gs(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Pf(e,o)>-1}else a.selected=e.has(o);else if(Es(gs(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function gs(n){return"_value"in n?n._value:n.value}const Hd=ht({patchProp:Od},Sd);let rl;function zd(){return rl||(rl=Vh(Hd))}const Gd=(...n)=>{const e=zd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=kd(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Vd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Vd(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function kd(n){return ot(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="154",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wd=0,sl=1,Xd=2,Uu=1,qd=2,xn=3,Gn=0,Rt=1,yn=2,Bn=0,ki=1,ol=2,al=3,ll=4,Yd=5,Oi=100,jd=101,Kd=102,cl=103,ul=104,$d=200,Zd=201,Jd=202,Qd=203,Iu=204,Nu=205,ep=206,tp=207,np=208,ip=209,rp=210,sp=0,op=1,ap=2,Bo=3,lp=4,cp=5,up=6,fp=7,Ou=0,hp=1,dp=2,bn=0,pp=1,mp=2,gp=3,_p=4,vp=5,Fu=300,qi=301,Yi=302,Ho=303,zo=304,Cs=306,Go=1e3,$t=1001,Vo=1002,bt=1003,fl=1004,Ks=1005,zt=1006,xp=1007,Sr=1008,Hn=1009,Mp=1010,Sp=1011,pa=1012,Bu=1013,In=1014,Nn=1015,Er=1016,Hu=1017,zu=1018,ri=1020,Ep=1021,Zt=1023,yp=1024,Tp=1025,si=1026,ji=1027,bp=1028,Gu=1029,Ap=1030,Vu=1031,ku=1033,$s=33776,Zs=33777,Js=33778,Qs=33779,hl=35840,dl=35841,pl=35842,ml=35843,wp=36196,gl=37492,_l=37496,vl=37808,xl=37809,Ml=37810,Sl=37811,El=37812,yl=37813,Tl=37814,bl=37815,Al=37816,wl=37817,Rl=37818,Cl=37819,Pl=37820,Ll=37821,eo=36492,Rp=36283,Dl=36284,Ul=36285,Il=36286,Wu=3e3,oi=3001,Cp=3200,Pp=3201,Lp=0,Dp=1,ai="",Fe="srgb",un="srgb-linear",Xu="display-p3",to=7680,Up=519,Ip=512,Np=513,Op=514,Fp=515,Bp=516,Hp=517,zp=518,Gp=519,Nl=35044,Ol="300 es",ko=1035,Tn=2e3,_s=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Wo=180/Math.PI;function wr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Vp(n,e){return(n%e+e)%e}function io(n,e,t){return(1-t)*n+t*e}function Fl(n){return(n&n-1)===0&&n!==0}function Xo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],h=r[6],C=r[1],S=r[4],E=r[7],b=r[2],D=r[5],P=r[8];return s[0]=a*_+o*C+l*b,s[3]=a*p+o*S+l*D,s[6]=a*h+o*E+l*P,s[1]=c*_+u*C+f*b,s[4]=c*p+u*S+f*D,s[7]=c*h+u*E+f*P,s[2]=d*_+m*C+v*b,s[5]=d*p+m*S+v*D,s[8]=d*h+m*E+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Ge;function qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Bl={};function pr(n){n in Bl||(Bl[n]=!0,console.warn(n))}function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function so(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const kp=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wp=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Xp(n){return n.convertSRGBToLinear().applyMatrix3(Wp)}function qp(n){return n.applyMatrix3(kp).convertLinearToSRGB()}const Yp={[un]:n=>n,[Fe]:n=>n.convertSRGBToLinear(),[Xu]:Xp},jp={[un]:n=>n,[Fe]:n=>n.convertLinearToSRGB(),[Xu]:qp},Wt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return un},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Yp[e],r=jp[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let xi;class Yu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=yr("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kp=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oo(r[a].image)):s.push(oo(r[a]))}else s=oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class Ft extends pi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=$t,r=$t,s=zt,a=Sr,o=Zt,l=Hn,c=Ft.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=wr(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===oi?Fe:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?oi:Wu}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===oi?Fe:ai}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Fu;Ft.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,b=(h+1)/2,D=(u+d)/4,P=(f+_)/4,ee=(v+p)/4;return S>E&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=P/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=ee/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=ee/s),this.set(i,r,s,t),this}let C=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(p-v)/C,this.y=(f-_)/C,this.z=(d-u)/C,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends pi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===oi?Fe:ai),this.texture=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ju(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ku extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zp extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==v){let p=1-o;const h=l*d+c*m+u*v+f*_,C=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const b=Math.sqrt(S),D=Math.atan2(b,h*C);p=Math.sin(p*D)/b,o=Math.sin(o*D)/b}const E=o*C;if(l=l*p+d*E,c=c*p+m*E,u=u*p+v*E,f=f*p+_*E,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*m-c*d,e[t+1]=l*v+u*d+c*f-o*m,e[t+2]=c*v+u*m+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new z,Hl=new fi;class Rr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Mi.copy(e.boundingBox),Mi.applyMatrix4(e.matrixWorld),this.union(Mi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)pn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else r.boundingBox===null&&r.computeBoundingBox(),Mi.copy(r.boundingBox),Mi.applyMatrix4(e.matrixWorld),this.union(Mi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Or.subVectors(this.max,tr),Si.subVectors(e.a,tr),Ei.subVectors(e.b,tr),yi.subVectors(e.c,tr),Rn.subVectors(Ei,Si),Cn.subVectors(yi,Ei),jn.subVectors(Si,yi);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-jn.z,jn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,jn.z,0,-jn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-jn.y,jn.x,0];return!lo(t,Si,Ei,yi,Or)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Si,Ei,yi,Or))?!1:(Fr.crossVectors(Rn,Cn),t=[Fr.x,Fr.y,Fr.z],lo(t,Si,Ei,yi,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],pn=new z,Mi=new Rr,Si=new z,Ei=new z,yi=new z,Rn=new z,Cn=new z,jn=new z,tr=new z,Or=new z,Fr=new z,Kn=new z;function lo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Kn.fromArray(n,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=i.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Jp=new Rr,nr=new z,co=new z;class ma{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(co)),this.expandByPoint(nr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new z,uo=new z,Br=new z,Pn=new z,fo=new z,Hr=new z,ho=new z;class Qp{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Pn.dot(this.direction),l=-Pn.dot(Br),c=Pn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(uo).addScaledVector(Br,d),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const i=mn.dot(this.direction),r=mn.dot(mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,i,r,s){fo.subVectors(t,e),Hr.subVectors(i,e),ho.crossVectors(fo,Hr);let a=this.direction.dot(ho),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(Pn,Hr));if(l<0)return null;const c=o*this.direction.dot(fo.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(ho);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,v,_,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,v,_,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,v,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,_=c*f;t[0]=d+_*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Ln.crossVectors(i,Lt),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Ln.crossVectors(i,Lt)),Ln.normalize(),zr.crossVectors(Lt,Ln),r[0]=Ln.x,r[4]=zr.x,r[8]=Lt.x,r[1]=Ln.y,r[5]=zr.y,r[9]=Lt.y,r[2]=Ln.z,r[6]=zr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],h=i[14],C=i[3],S=i[7],E=i[11],b=i[15],D=r[0],P=r[4],ee=r[8],M=r[12],R=r[1],ue=r[5],he=r[9],H=r[13],$=r[2],J=r[6],se=r[10],k=r[14],W=r[3],fe=r[7],ae=r[11],G=r[15];return s[0]=a*D+o*R+l*$+c*W,s[4]=a*P+o*ue+l*J+c*fe,s[8]=a*ee+o*he+l*se+c*ae,s[12]=a*M+o*H+l*k+c*G,s[1]=u*D+f*R+d*$+m*W,s[5]=u*P+f*ue+d*J+m*fe,s[9]=u*ee+f*he+d*se+m*ae,s[13]=u*M+f*H+d*k+m*G,s[2]=v*D+_*R+p*$+h*W,s[6]=v*P+_*ue+p*J+h*fe,s[10]=v*ee+_*he+p*se+h*ae,s[14]=v*M+_*H+p*k+h*G,s[3]=C*D+S*R+E*$+b*W,s[7]=C*P+S*ue+E*J+b*fe,s[11]=C*ee+S*he+E*se+b*ae,s[15]=C*M+S*H+E*k+b*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],h=e[15],C=f*p*c-_*d*c+_*l*m-o*p*m-f*l*h+o*d*h,S=v*d*c-u*p*c-v*l*m+a*p*m+u*l*h-a*d*h,E=u*_*c-v*f*c+v*o*m-a*_*m-u*o*h+a*f*h,b=v*f*l-u*_*l-v*o*d+a*_*d+u*o*p-a*f*p,D=t*C+i*S+r*E+s*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=C*P,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*P,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*h+i*l*h)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*P,e[4]=S*P,e[5]=(u*p*s-v*d*s+v*r*m-t*p*m-u*r*h+t*d*h)*P,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*h-t*l*h)*P,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*P,e[8]=E*P,e[9]=(v*f*s-u*_*s-v*i*m+t*_*m+u*i*h-t*f*h)*P,e[10]=(a*_*s-v*o*s+v*i*c-t*_*c-a*i*h+t*o*h)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=b*P,e[13]=(u*_*r-v*f*r+v*i*d-t*_*d-u*i*p+t*f*p)*P,e[14]=(v*o*r-a*_*r-v*i*l+t*_*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,v=s*f,_=a*u,p=a*f,h=o*f,C=l*c,S=l*u,E=l*f,b=i.x,D=i.y,P=i.z;return r[0]=(1-(_+h))*b,r[1]=(m+E)*b,r[2]=(v-S)*b,r[3]=0,r[4]=(m-E)*D,r[5]=(1-(d+h))*D,r[6]=(p+C)*D,r[7]=0,r[8]=(v+S)*P,r[9]=(p-C)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/a,f=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,v;if(o===Tn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===_s)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Tn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let v,_;if(o===Tn)v=(a+s)*f,_=-2*f;else if(o===_s)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new z,Xt=new pt,em=new z(0,0,0),tm=new z(1,1,1),Ln=new z,zr=new z,Lt=new z,zl=new pt,Gl=new fi;class Ps{constructor(e=0,t=0,i=0,r=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nm=0;const Vl=new z,bi=new fi,gn=new pt,Gr=new z,ir=new z,im=new z,rm=new fi,kl=new z(1,0,0),Wl=new z(0,1,0),Xl=new z(0,0,1),sm={type:"added"},ql={type:"removed"};class Bt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new z,t=new Ps,i=new fi,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ir,Gr,this.up):gn.lookAt(Gr,ir,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(gn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ql)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new z(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new z,_n=new z,po=new z,vn=new z,Ai=new z,wi=new z,Yl=new z,mo=new z,go=new z,_o=new z;let Vr=!1;class Kt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),_n.subVectors(i,t),po.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(_n),l=qt.dot(po),c=_n.dot(_n),u=_n.dot(po),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vn),l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),_n.subVectors(e,t),qt.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),qt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,i),wi.subVectors(s,i),mo.subVectors(e,i);const l=Ai.dot(mo),c=wi.dot(mo);if(l<=0&&c<=0)return t.copy(i);go.subVectors(e,r);const u=Ai.dot(go),f=wi.dot(go);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ai,a);_o.subVectors(e,s);const m=Ai.dot(_o),v=wi.dot(_o);if(v>=0&&m<=v)return t.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(wi,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return Yl.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(Yl,o);const h=1/(p+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(Ai,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let om=0;class Ls extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=ki,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Nu,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},kr={h:0,s:0,l:0};function vo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Wt.workingColorSpace){if(e=Vp(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=vo(a,s,e+1/3),this.g=vo(a,s,e),this.b=vo(a,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const i=Zu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Wt.fromWorkingColorSpace(gt.copy(this),e),Math.round(wt(gt.r*255,0,255))*65536+Math.round(wt(gt.g*255,0,255))*256+Math.round(wt(gt.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(gt.copy(this),t);const i=gt.r,r=gt.g,s=gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Fe){Wt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,i=gt.g,r=gt.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=i,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(kr);const i=io(Yt.h,kr.h,t),r=io(Yt.s,kr.s,t),s=io(Yt.l,kr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ze;Ze.NAMES=Zu;class Ju extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new z,Wr=new ke;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nl,this.updateRange={offset:0,count:-1},this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Qu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ef extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let am=0;const Ht=new pt,xo=new Bt,Ri=new z,Dt=new Rr,rr=new Rr,ft=new z;class mi extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?ef:Qu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Dt.min,rr.min),Dt.expandByPoint(ft),ft.addVectors(Dt.max,rr.max),Dt.expandByPoint(ft)):(Dt.expandByPoint(rr.min),Dt.expandByPoint(rr.max))}Dt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ft.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),ft.add(Ri)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new z,u[R]=new z;const f=new z,d=new z,m=new z,v=new ke,_=new ke,p=new ke,h=new z,C=new z;function S(R,ue,he){f.fromArray(r,R*3),d.fromArray(r,ue*3),m.fromArray(r,he*3),v.fromArray(a,R*2),_.fromArray(a,ue*2),p.fromArray(a,he*2),d.sub(f),m.sub(f),_.sub(v),p.sub(v);const H=1/(_.x*p.y-p.x*_.y);isFinite(H)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(H),C.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(H),c[R].add(h),c[ue].add(h),c[he].add(h),u[R].add(C),u[ue].add(C),u[he].add(C))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,ue=E.length;R<ue;++R){const he=E[R],H=he.start,$=he.count;for(let J=H,se=H+$;J<se;J+=3)S(i[J+0],i[J+1],i[J+2])}const b=new z,D=new z,P=new z,ee=new z;function M(R){P.fromArray(s,R*3),ee.copy(P);const ue=c[R];b.copy(ue),b.sub(P.multiplyScalar(P.dot(ue))).normalize(),D.crossVectors(ee,ue);const H=D.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=H}for(let R=0,ue=E.length;R<ue;++R){const he=E[R],H=he.start,$=he.count;for(let J=H,se=H+$;J<se;J+=3)M(i[J+0]),M(i[J+1]),M(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new an(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new pt,$n=new Qp,Xr=new ma,Kl=new z,Ci=new z,Pi=new z,Li=new z,Mo=new z,qr=new z,Yr=new ke,jr=new ke,Kr=new ke,$l=new z,Zl=new z,Jl=new z,$r=new z,Zr=new z;class On extends Bt{constructor(e=new mi,t=new Ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Mo.fromBufferAttribute(f,e),a?qr.addScaledVector(Mo,u):qr.addScaledVector(Mo.sub(t),u))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Xr.containsPoint($n.origin)===!1&&($n.intersectSphere(Xr,Kl)===null||$n.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(jl.copy(s).invert(),$n.copy(e.ray).applyMatrix4(jl),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=a[p.materialIndex],C=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=C,b=S;E<b;E+=3){const D=o.getX(E),P=o.getX(E+1),ee=o.getX(E+2);r=Jr(this,h,e,i,c,u,f,D,P,ee),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,h=_;p<h;p+=3){const C=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=Jr(this,a,e,i,c,u,f,C,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],h=a[p.materialIndex],C=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=C,b=S;E<b;E+=3){const D=E,P=E+1,ee=E+2;r=Jr(this,h,e,i,c,u,f,D,P,ee),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,h=_;p<h;p+=3){const C=p,S=p+1,E=p+2;r=Jr(this,a,e,i,c,u,f,C,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function lm(n,e,t,i,r,s,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Gn,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function Jr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ci),n.getVertexPosition(l,Pi),n.getVertexPosition(c,Li);const u=lm(n,e,t,i,Ci,Pi,Li,$r);if(u){r&&(Yr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Kr.fromBufferAttribute(r,c),u.uv=Kt.getInterpolation($r,Ci,Pi,Li,Yr,jr,Kr,new ke)),s&&(Yr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),u.uv1=Kt.getInterpolation($r,Ci,Pi,Li,Yr,jr,Kr,new ke),u.uv2=u.uv1),a&&($l.fromBufferAttribute(a,o),Zl.fromBufferAttribute(a,l),Jl.fromBufferAttribute(a,c),u.normal=Kt.getInterpolation($r,Ci,Pi,Li,$l,Zl,Jl,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};Kt.getNormal(Ci,Pi,Li,f.normal),u.face=f}return u}class Cr extends mi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(f,2));function v(_,p,h,C,S,E,b,D,P,ee,M){const R=E/P,ue=b/ee,he=E/2,H=b/2,$=D/2,J=P+1,se=ee+1;let k=0,W=0;const fe=new z;for(let ae=0;ae<se;ae++){const G=ae*ue-H;for(let X=0;X<J;X++){const ge=X*R-he;fe[_]=ge*C,fe[p]=G*S,fe[h]=$,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[p]=0,fe[h]=D>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(X/P),f.push(1-ae/ee),k+=1}}for(let ae=0;ae<ee;ae++)for(let G=0;G<P;G++){const X=d+G+J*ae,ge=d+G+J*(ae+1),_e=d+(G+1)+J*(ae+1),Me=d+(G+1)+J*ae;l.push(X,ge,Me),l.push(ge,_e,Me),W+=6}o.addGroup(m,W,M),m+=W,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Ki(n[t]);for(const r in i)e[r]=i[r]}return e}function cm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tf(n){return n.getRenderTarget()===null?n.outputColorSpace:un}const um={clone:Ki,merge:Tt};var fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nf extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends nf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ui=1;class dm extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Gt(Di,Ui,e,t);r.layers=this.layers,this.add(r);const s=new Gt(Di,Ui,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Di,Ui,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Di,Ui,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Di,Ui,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ga extends Ft{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pm extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===oi?Fe:ai),this.texture=new ga(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Bn});s.uniforms.tEquirect.value=t;const a=new On(r,s),o=t.minFilter;return t.minFilter===Sr&&(t.minFilter=zt),new dm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const So=new z,mm=new z,gm=new Ge;class Qn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=So.subVectors(i,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(So),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gm.getNormalMatrix(e),r=this.coplanarPoint(So).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new ma,Qr=new z;class rf{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,s=new Qn,a=new Qn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],h=r[12],C=r[13],S=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,p-m,E-h).normalize(),i[1].setComponents(l+s,d+c,p+m,E+h).normalize(),i[2].setComponents(l+a,d+u,p+v,E+C).normalize(),i[3].setComponents(l-a,d-u,p-v,E-C).normalize(),i[4].setComponents(l-o,d-f,p-_,E-S).normalize(),t===Tn)i[5].setComponents(l+o,d+f,p+_,E+S).normalize();else if(t===_s)i[5].setComponents(o,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _m(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class _a extends mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],v=[],_=[],p=[];for(let h=0;h<u;h++){const C=h*d-a;for(let S=0;S<c;S++){const E=S*f-s;v.push(E,-C,0),_.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<o;C++){const S=C+c*h,E=C+c*(h+1),b=C+1+c*(h+1),D=C+1+c*h;m.push(S,E,D),m.push(E,b,D)}this.setIndex(m),this.setAttribute("position",new li(v,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,i_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:vm,alphahash_pars_fragment:xm,alphamap_fragment:Mm,alphamap_pars_fragment:Sm,alphatest_fragment:Em,alphatest_pars_fragment:ym,aomap_fragment:Tm,aomap_pars_fragment:bm,begin_vertex:Am,beginnormal_vertex:wm,bsdfs:Rm,iridescence_fragment:Cm,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Im,color_fragment:Nm,color_pars_fragment:Om,color_pars_vertex:Fm,color_vertex:Bm,common:Hm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Vm,displacementmap_vertex:km,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:$m,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:cg,envmap_vertex:Jm,fog_vertex:Qm,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_fragment:rg,lightmap_pars_fragment:sg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:ug,lights_toon_pars_fragment:fg,lights_phong_fragment:hg,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:vg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:Mg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:Eg,map_fragment:yg,map_pars_fragment:Tg,map_particle_fragment:bg,map_particle_pars_fragment:Ag,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Rg,morphcolor_vertex:Cg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Lg,morphtarget_vertex:Dg,normal_fragment_begin:Ug,normal_fragment_maps:Ig,normal_pars_fragment:Ng,normal_pars_vertex:Og,normal_vertex:Fg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Vg,opaque_fragment:kg,packing:Wg,premultiplied_alpha_fragment:Xg,project_vertex:qg,dithering_fragment:Yg,dithering_pars_fragment:jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Qg,shadowmask_pars_fragment:e_,skinbase_vertex:t_,skinning_pars_vertex:n_,skinning_vertex:i_,skinnormal_vertex:r_,specularmap_fragment:s_,specularmap_pars_fragment:o_,tonemapping_fragment:a_,tonemapping_pars_fragment:l_,transmission_fragment:c_,transmission_pars_fragment:u_,uv_pars_fragment:f_,uv_pars_vertex:h_,uv_vertex:d_,worldpos_vertex:p_,background_vert:m_,background_frag:g_,backgroundCube_vert:__,backgroundCube_frag:v_,cube_vert:x_,cube_frag:M_,depth_vert:S_,depth_frag:E_,distanceRGBA_vert:y_,distanceRGBA_frag:T_,equirect_vert:b_,equirect_frag:A_,linedashed_vert:w_,linedashed_frag:R_,meshbasic_vert:C_,meshbasic_frag:P_,meshlambert_vert:L_,meshlambert_frag:D_,meshmatcap_vert:U_,meshmatcap_frag:I_,meshnormal_vert:N_,meshnormal_frag:O_,meshphong_vert:F_,meshphong_frag:B_,meshphysical_vert:H_,meshphysical_frag:z_,meshtoon_vert:G_,meshtoon_frag:V_,points_vert:k_,points_frag:W_,shadow_vert:X_,shadow_frag:q_,sprite_vert:Y_,sprite_frag:j_},me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},sn={basic:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Tt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Tt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Tt([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Tt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Tt([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Tt([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Tt([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Tt([me.lights,me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};sn.physical={uniforms:Tt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const es={r:0,b:0,g:0};function K_(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(p,h){let C=!1,S=h.isScene===!0?h.background:null;switch(S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,l):S&&S.isColor&&(_(S,1),C=!0),n.xr.getEnvironmentBlendMode()){case"opaque":C=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),C=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),C=!0;break}(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Cs)?(u===void 0&&(u=new On(new Cr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Ki(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,ee){this.matrixWorld.copyPosition(ee.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=S.colorSpace!==Fe,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new On(new _a(2,2),new hi({name:"BackgroundMaterial",uniforms:Ki(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=S.colorSpace!==Fe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(es,tf(n)),i.buffers.color.setClear(es.r,es.g,es.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:v}}function $_(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f($,J,se,k,W){let fe=!1;if(a){const ae=_(k,se,J);c!==ae&&(c=ae,m(c.object)),fe=h($,k,se,W),fe&&C($,k,se,W)}else{const ae=J.wireframe===!0;(c.geometry!==k.id||c.program!==se.id||c.wireframe!==ae)&&(c.geometry=k.id,c.program=se.id,c.wireframe=ae,fe=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,ee($,J,se,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m($){return i.isWebGL2?n.bindVertexArray($):s.bindVertexArrayOES($)}function v($){return i.isWebGL2?n.deleteVertexArray($):s.deleteVertexArrayOES($)}function _($,J,se){const k=se.wireframe===!0;let W=o[$.id];W===void 0&&(W={},o[$.id]=W);let fe=W[J.id];fe===void 0&&(fe={},W[J.id]=fe);let ae=fe[k];return ae===void 0&&(ae=p(d()),fe[k]=ae),ae}function p($){const J=[],se=[],k=[];for(let W=0;W<r;W++)J[W]=0,se[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:se,attributeDivisors:k,object:$,attributes:{},index:null}}function h($,J,se,k){const W=c.attributes,fe=J.attributes;let ae=0;const G=se.getAttributes();for(const X in G)if(G[X].location>=0){const _e=W[X];let Me=fe[X];if(Me===void 0&&(X==="instanceMatrix"&&$.instanceMatrix&&(Me=$.instanceMatrix),X==="instanceColor"&&$.instanceColor&&(Me=$.instanceColor)),_e===void 0||_e.attribute!==Me||Me&&_e.data!==Me.data)return!0;ae++}return c.attributesNum!==ae||c.index!==k}function C($,J,se,k){const W={},fe=J.attributes;let ae=0;const G=se.getAttributes();for(const X in G)if(G[X].location>=0){let _e=fe[X];_e===void 0&&(X==="instanceMatrix"&&$.instanceMatrix&&(_e=$.instanceMatrix),X==="instanceColor"&&$.instanceColor&&(_e=$.instanceColor));const Me={};Me.attribute=_e,_e&&_e.data&&(Me.data=_e.data),W[X]=Me,ae++}c.attributes=W,c.attributesNum=ae,c.index=k}function S(){const $=c.newAttributes;for(let J=0,se=$.length;J<se;J++)$[J]=0}function E($){b($,0)}function b($,J){const se=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;se[$]=1,k[$]===0&&(n.enableVertexAttribArray($),k[$]=1),W[$]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,J),W[$]=J)}function D(){const $=c.newAttributes,J=c.enabledAttributes;for(let se=0,k=J.length;se<k;se++)J[se]!==$[se]&&(n.disableVertexAttribArray(se),J[se]=0)}function P($,J,se,k,W,fe,ae){ae===!0?n.vertexAttribIPointer($,J,se,W,fe):n.vertexAttribPointer($,J,se,k,W,fe)}function ee($,J,se,k){if(i.isWebGL2===!1&&($.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=k.attributes,fe=se.getAttributes(),ae=J.defaultAttributeValues;for(const G in fe){const X=fe[G];if(X.location>=0){let ge=W[G];if(ge===void 0&&(G==="instanceMatrix"&&$.instanceMatrix&&(ge=$.instanceMatrix),G==="instanceColor"&&$.instanceColor&&(ge=$.instanceColor)),ge!==void 0){const _e=ge.normalized,Me=ge.itemSize,Ae=t.get(ge);if(Ae===void 0)continue;const Pe=Ae.buffer,Re=Ae.type,We=Ae.bytesPerElement,Qe=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||ge.gpuType===Bu);if(ge.isInterleavedBufferAttribute){const Ie=ge.data,O=Ie.stride,A=ge.offset;if(Ie.isInstancedInterleavedBuffer){for(let w=0;w<X.locationSize;w++)b(X.location+w,Ie.meshPerAttribute);$.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let w=0;w<X.locationSize;w++)E(X.location+w);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let w=0;w<X.locationSize;w++)P(X.location+w,Me/X.locationSize,Re,_e,O*We,(A+Me/X.locationSize*w)*We,Qe)}else{if(ge.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)b(X.location+Ie,ge.meshPerAttribute);$.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)E(X.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Ie=0;Ie<X.locationSize;Ie++)P(X.location+Ie,Me/X.locationSize,Re,_e,Me*We,Me/X.locationSize*Ie*We,Qe)}}else if(ae!==void 0){const _e=ae[G];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(X.location,_e);break;case 3:n.vertexAttrib3fv(X.location,_e);break;case 4:n.vertexAttrib4fv(X.location,_e);break;default:n.vertexAttrib1fv(X.location,_e)}}}}D()}function M(){he();for(const $ in o){const J=o[$];for(const se in J){const k=J[se];for(const W in k)v(k[W].object),delete k[W];delete J[se]}delete o[$]}}function R($){if(o[$.id]===void 0)return;const J=o[$.id];for(const se in J){const k=J[se];for(const W in k)v(k[W].object),delete k[W];delete J[se]}delete o[$.id]}function ue($){for(const J in o){const se=o[J];if(se[$.id]===void 0)continue;const k=se[$.id];for(const W in k)v(k[W].object),delete k[W];delete se[$.id]}}function he(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:he,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:ue,initAttributes:S,enableAttribute:E,disableUnusedAttributes:D}}function Z_(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function J_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,E=a||e.has("OES_texture_float"),b=S&&E,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:C,vertexTextures:S,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:D}}function Q_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Qn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const C=s?0:i,S=C*4;let E=h.clippingState||null;l.value=E,E=u(v,d,S,m);for(let b=0;b!==S;++b)E[b]=t[b];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const h=m+_*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,E=m;S!==_;++S,E+=4)a.copy(f[S]).applyMatrix4(C,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ev(n){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=qi:o===zo&&(a.mapping=Yi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ho||o===zo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pm(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tv extends nf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,Ql=[.125,.215,.35,.446,.526,.582],ti=20,Eo=new tv,ec=new Ze;let yo=null;const ei=(1+Math.sqrt(5))/2,Ii=1/ei,tc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ei,Ii),new z(0,ei,-Ii),new z(Ii,0,ei),new z(-Ii,0,ei),new z(ei,Ii,0),new z(-ei,Ii,0)];class nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yo),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Er,format:Zt,colorSpace:un,depthBuffer:!1},r=ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nv(s)),this._blurMaterial=iv(s,e,t)}return r}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,i,r){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ec),u.toneMapping=bn,u.autoClear=!1;const m=new Ju({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),v=new On(new Cr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(ec),_=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):C===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;ts(r,C*S,h>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new On(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Eo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tc[(r-1)%tc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new On(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ti-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):ti;p>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const h=[];let C=0;for(let P=0;P<ti;++P){const ee=P/_,M=Math.exp(-ee*ee/2);h.push(M),P===0?C+=M:P<p&&(C+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const E=this._sizeLods[r],b=3*E*(r>S-Fi?r-S+Fi:0),D=4*(this._cubeSize-E);ts(t,b,D,3*E,2*E),l.setRenderTarget(t),l.render(f,Eo)}}function nv(n){const e=[],t=[],i=[];let r=n;const s=n-Fi+1+Ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Fi?l=Ql[a-n+Fi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,_=3,p=2,h=1,C=new Float32Array(_*v*m),S=new Float32Array(p*v*m),E=new Float32Array(h*v*m);for(let D=0;D<m;D++){const P=D%3*2/3-1,ee=D>2?0:-1,M=[P,ee,0,P+2/3,ee,0,P+2/3,ee+1,0,P,ee,0,P+2/3,ee+1,0,P,ee+1,0];C.set(M,_*v*D),S.set(d,p*v*D);const R=[D,D,D,D,D,D];E.set(R,h*v*D)}const b=new mi;b.setAttribute("position",new an(C,_)),b.setAttribute("uv",new an(S,p)),b.setAttribute("faceIndex",new an(E,h)),e.push(b),r>Fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ic(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iv(n,e,t){const i=new Float32Array(ti),r=new z(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function rc(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function sc(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===zo,u=l===qi||l===Yi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new nc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new nc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ov(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const C=m.array;_=m.version;for(let S=0,E=C.length;S<E;S+=3){const b=C[S+0],D=C[S+1],P=C[S+2];d.push(b,D,D,P,P,b)}}else{const C=v.array;_=v.version;for(let S=0,E=C.length/3-1;S<E;S+=3){const b=S+0,D=S+1,P=S+2;d.push(b,D,D,P,P,b)}}const p=new(qu(d)?ef:Qu)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function av(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,v){if(v===0)return;let _,p;if(r)_=n,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,v),t.update(m,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function lv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cv(n,e){return n[0]-e[0]}function uv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let J=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],ee=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),E===!0&&(M=2),b===!0&&(M=3);let R=u.attributes.position.count*M,ue=1;R>e.maxTextureSize&&(ue=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const he=new Float32Array(R*ue*4*_),H=new Ku(he,R,ue,_);H.type=Nn,H.needsUpdate=!0;const $=M*4;for(let se=0;se<_;se++){const k=D[se],W=P[se],fe=ee[se],ae=R*ue*4*se;for(let G=0;G<k.count;G++){const X=G*$;S===!0&&(a.fromBufferAttribute(k,G),he[ae+X+0]=a.x,he[ae+X+1]=a.y,he[ae+X+2]=a.z,he[ae+X+3]=0),E===!0&&(a.fromBufferAttribute(W,G),he[ae+X+4]=a.x,he[ae+X+5]=a.y,he[ae+X+6]=a.z,he[ae+X+7]=0),b===!0&&(a.fromBufferAttribute(fe,G),he[ae+X+8]=a.x,he[ae+X+9]=a.y,he[ae+X+10]=a.z,he[ae+X+11]=fe.itemSize===4?a.w:1)}}p={count:_,texture:H,size:new ke(R,ue)},s.set(u,p),u.addEventListener("dispose",J)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const C=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",C),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let E=0;E<v;E++)_[E]=[E,0];i[u.id]=_}for(let E=0;E<v;E++){const b=_[E];b[0]=E,b[1]=d[E]}_.sort(uv);for(let E=0;E<8;E++)E<v&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(cv);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const b=o[E],D=b[0],P=b[1];D!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+E)!==p[D]&&u.setAttribute("morphTarget"+E,p[D]),h&&u.getAttribute("morphNormal"+E)!==h[D]&&u.setAttribute("morphNormal"+E,h[D]),r[E]=P,C+=P):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const S=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function hv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const of=new Ft,af=new Ku,lf=new Zp,cf=new ga,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),uc=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=oc[r];if(s===void 0&&(s=new Float32Array(r),oc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ds(n,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function _v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;uc.set(i),n.uniformMatrix2fv(this.addr,!1,uc),lt(t,i)}}function vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;cc.set(i),n.uniformMatrix3fv(this.addr,!1,cc),lt(t,i)}}function xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;lc.set(i),n.uniformMatrix4fv(this.addr,!1,lc),lt(t,i)}}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function Tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function Rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||of,r)}function Cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lf,r)}function Pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cf,r)}function Lv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||af,r)}function Dv(n){switch(n){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return _v;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return yv;case 5125:return Tv;case 36294:return bv;case 36295:return Av;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Uv(n,e){n.uniform1fv(this.addr,e)}function Iv(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function Nv(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function Ov(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function Fv(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bv(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Vv(n,e){n.uniform3iv(this.addr,e)}function kv(n,e){n.uniform4iv(this.addr,e)}function Wv(n,e){n.uniform1uiv(this.addr,e)}function Xv(n,e){n.uniform2uiv(this.addr,e)}function qv(n,e){n.uniform3uiv(this.addr,e)}function Yv(n,e){n.uniform4uiv(this.addr,e)}function jv(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||of,s[a])}function Kv(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lf,s[a])}function $v(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cf,s[a])}function Zv(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||af,s[a])}function Jv(n){switch(n){case 5126:return Uv;case 35664:return Iv;case 35665:return Nv;case 35666:return Ov;case 35674:return Fv;case 35675:return Bv;case 35676:return Hv;case 5124:case 35670:return zv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return kv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Zv}}class Qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Dv(t.type)}}class ex{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Jv(t.type)}}class tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function fc(n,e){n.seq.push(e),n.map[e.id]=e}function nx(n,e,t){const i=n.name,r=i.length;for(To.lastIndex=0;;){const s=To.exec(i),a=To.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fc(t,c===void 0?new Qv(o,n,e):new ex(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tx(o),fc(t,f)),t=f}}}class ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);nx(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let ix=0;function rx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function sx(n){switch(n){case un:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function dc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rx(n.getShaderSource(e),a)}else return r}function ox(n,e){const t=sx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ax(n,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="OptimizedCineon";break;case _p:t="ACESFilmic";break;case vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function cx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ux(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function or(n){return n!==""}function pc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(n){return n.replace(fx,dx)}const hx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dx(n,e){let t=He[e];if(t===void 0){const i=hx.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qo(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(n){return n.replace(px,mx)}function mx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function _x(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function xx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ou:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=gx(t),c=_x(t),u=vx(t),f=xx(t),d=Mx(t),m=t.isWebGL2?"":lx(t),v=cx(s),_=r.createProgram();let p,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(or).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(or).join(`
`),h.length>0&&(h+=`
`)):(p=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),h=[m,_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?He.tonemapping_pars_fragment:"",t.toneMapping!==bn?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=qo(a),a=pc(a,t),a=mc(a,t),o=qo(o),o=pc(o,t),o=mc(o,t),a=gc(a),o=gc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=C+p+a,E=C+h+o,b=hc(r,r.VERTEX_SHADER,S),D=hc(r,r.FRAGMENT_SHADER,E);if(r.attachShader(_,b),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(b).trim(),ue=r.getShaderInfoLog(D).trim();let he=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,D);else{const $=dc(r,b,"vertex"),J=dc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+$+`
`+J)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||ue==="")&&(H=!1);H&&(this.diagnostics={runnable:he,programLog:M,vertexShader:{log:R,prefix:p},fragmentShader:{log:ue,prefix:h}})}r.deleteShader(b),r.deleteShader(D);let P;this.getUniforms=function(){return P===void 0&&(P=new ls(r,_)),P};let ee;return this.getAttributes=function(){return ee===void 0&&(ee=ux(r,_)),ee},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=D,this}let Ex=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tx(e),t.set(e,i)),i}}class Tx{constructor(e){this.id=Ex++,this.code=e,this.usedTimes=0}}function bx(n,e,t,i,r,s,a){const o=new $u,l=new yx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,R,ue,he,H){const $=he.fog,J=H.geometry,se=M.isMeshStandardMaterial?he.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||se),W=k&&k.mapping===Cs?k.image.height:null,fe=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ae=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,G=ae!==void 0?ae.length:0;let X=0;J.morphAttributes.position!==void 0&&(X=1),J.morphAttributes.normal!==void 0&&(X=2),J.morphAttributes.color!==void 0&&(X=3);let ge,_e,Me,Ae;if(fe){const Qt=sn[fe];ge=Qt.vertexShader,_e=Qt.fragmentShader}else ge=M.vertexShader,_e=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const Pe=n.getRenderTarget(),Re=H.isInstancedMesh===!0,We=!!M.map,Qe=!!M.matcap,Ie=!!k,O=!!M.aoMap,A=!!M.lightMap,w=!!M.bumpMap,I=!!M.normalMap,V=!!M.displacementMap,Z=!!M.emissiveMap,K=!!M.metalnessMap,ie=!!M.roughnessMap,oe=M.anisotropy>0,ce=M.clearcoat>0,re=M.iridescence>0,x=M.sheen>0,g=M.transmission>0,U=oe&&!!M.anisotropyMap,q=ce&&!!M.clearcoatMap,Q=ce&&!!M.clearcoatNormalMap,T=ce&&!!M.clearcoatRoughnessMap,Y=re&&!!M.iridescenceMap,le=re&&!!M.iridescenceThicknessMap,F=x&&!!M.sheenColorMap,ve=x&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ye=!!M.specularColorMap,Te=!!M.specularIntensityMap,pe=g&&!!M.transmissionMap,we=g&&!!M.thicknessMap,ze=!!M.gradientMap,L=!!M.alphaMap,xe=M.alphaTest>0,j=!!M.alphaHash,de=!!M.extensions,Se=!!J.attributes.uv1,qe=!!J.attributes.uv2,et=!!J.attributes.uv3;return{isWebGL2:u,shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:_e,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Re,instancingColor:Re&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:un,map:We,matcap:Qe,envMap:Ie,envMapMode:Ie&&k.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:A,bumpMap:w,normalMap:I,displacementMap:d&&V,emissiveMap:Z,normalMapObjectSpace:I&&M.normalMapType===Dp,normalMapTangentSpace:I&&M.normalMapType===Lp,metalnessMap:K,roughnessMap:ie,anisotropy:oe,anisotropyMap:U,clearcoat:ce,clearcoatMap:q,clearcoatNormalMap:Q,clearcoatRoughnessMap:T,iridescence:re,iridescenceMap:Y,iridescenceThicknessMap:le,sheen:x,sheenColorMap:F,sheenRoughnessMap:ve,specularMap:Ee,specularColorMap:ye,specularIntensityMap:Te,transmission:g,transmissionMap:pe,thicknessMap:we,gradientMap:ze,opaque:M.transparent===!1&&M.blending===ki,alphaMap:L,alphaTest:xe,alphaHash:j,combine:M.combine,mapUv:We&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:A&&_(M.lightMap.channel),bumpMapUv:w&&_(M.bumpMap.channel),normalMapUv:I&&_(M.normalMap.channel),displacementMapUv:V&&_(M.displacementMap.channel),emissiveMapUv:Z&&_(M.emissiveMap.channel),metalnessMapUv:K&&_(M.metalnessMap.channel),roughnessMapUv:ie&&_(M.roughnessMap.channel),anisotropyMapUv:U&&_(M.anisotropyMap.channel),clearcoatMapUv:q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:T&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:F&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Te&&_(M.specularIntensityMap.channel),transmissionMapUv:pe&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:L&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(I||oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:qe,vertexUv3s:et,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(We||L),fog:!!$,useFog:M.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&ue.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:bn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ue in M.defines)R.push(ue),R.push(M.defines[ue]);return M.isRawShaderMaterial===!1&&(C(R,M),S(R,M),R.push(n.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function C(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function S(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),M.push(o.mask)}function E(M){const R=v[M.type];let ue;if(R){const he=sn[R];ue=um.clone(he.uniforms)}else ue=M.uniforms;return ue}function b(M,R){let ue;for(let he=0,H=c.length;he<H;he++){const $=c[he];if($.cacheKey===R){ue=$,++ue.usedTimes;break}}return ue===void 0&&(ue=new Sx(n,R,M,s),c.push(ue)),ue}function D(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function ee(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:b,releaseProgram:D,releaseShaderCache:P,programs:c,dispose:ee}}function Ax(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,v,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,v,_,p){const h=a(f,d,m,v,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,v,_,p){const h=a(f,d,m,v,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||wx),i.length>1&&i.sort(d||vc),r.length>1&&r.sort(d||vc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Rx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xc,n.set(i,[a])):r>=s.length?(a=new xc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Px(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lx=0;function Dx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ux(n,e){const t=new Cx,i=Px(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new pt,o=new pt;function l(u,f){let d=0,m=0,v=0;for(let ue=0;ue<9;ue++)r.probe[ue].set(0,0,0);let _=0,p=0,h=0,C=0,S=0,E=0,b=0,D=0,P=0,ee=0;u.sort(Dx);const M=f===!0?Math.PI:1;for(let ue=0,he=u.length;ue<he;ue++){const H=u[ue],$=H.color,J=H.intensity,se=H.distance,k=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=$.r*J*M,m+=$.g*J*M,v+=$.b*J*M;else if(H.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],J);else if(H.isDirectionalLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*M),H.castShadow){const fe=H.shadow,ae=i.get(H);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,r.directionalShadow[_]=ae,r.directionalShadowMap[_]=k,r.directionalShadowMatrix[_]=H.shadow.matrix,E++}r.directional[_]=W,_++}else if(H.isSpotLight){const W=t.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy($).multiplyScalar(J*M),W.distance=se,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[h]=W;const fe=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,fe.updateMatrices(H),H.castShadow&&ee++),r.spotLightMatrix[h]=fe.matrix,H.castShadow){const ae=i.get(H);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,r.spotShadow[h]=ae,r.spotShadowMap[h]=k,D++}h++}else if(H.isRectAreaLight){const W=t.get(H);W.color.copy($).multiplyScalar(J),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[C]=W,C++}else if(H.isPointLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*M),W.distance=H.distance,W.decay=H.decay,H.castShadow){const fe=H.shadow,ae=i.get(H);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,ae.shadowCameraNear=fe.camera.near,ae.shadowCameraFar=fe.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=k,r.pointShadowMatrix[p]=H.shadow.matrix,b++}r.point[p]=W,p++}else if(H.isHemisphereLight){const W=t.get(H);W.skyColor.copy(H.color).multiplyScalar(J*M),W.groundColor.copy(H.groundColor).multiplyScalar(J*M),r.hemi[S]=W,S++}}C>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==h||R.rectAreaLength!==C||R.hemiLength!==S||R.numDirectionalShadows!==E||R.numPointShadows!==b||R.numSpotShadows!==D||R.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=C,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=D+P-ee,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=ee,R.directionalLength=_,R.pointLength=p,R.spotLength=h,R.rectAreaLength=C,R.hemiLength=S,R.numDirectionalShadows=E,R.numPointShadows=b,R.numSpotShadows=D,R.numSpotMaps=P,r.version=Lx++)}function c(u,f){let d=0,m=0,v=0,_=0,p=0;const h=f.matrixWorldInverse;for(let C=0,S=u.length;C<S;C++){const E=u[C];if(E.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),d++}else if(E.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),v++}else if(E.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(h),o.identity(),a.copy(E.matrixWorld),a.premultiply(h),o.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Mc(n,e){const t=new Ux(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ix(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Mc(n,e),t.set(s,[l])):a>=o.length?(l=new Mc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Nx extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ox extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hx(n,e,t){let i=new rf;const r=new ke,s=new ke,a=new dt,o=new Nx({depthPacking:Pp}),l=new Ox,c={},u=t.maxTextureSize,f={[Gn]:Rt,[Rt]:Gn,[yn]:yn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Fx,fragmentShader:Bx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new mi;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let h=this.type;this.render=function(b,D,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const ee=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),ue=n.state;ue.setBlending(Bn),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const he=h!==xn&&this.type===xn,H=h===xn&&this.type!==xn;for(let $=0,J=b.length;$<J;$++){const se=b[$],k=se.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const W=k.getFrameExtents();if(r.multiply(W),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||he===!0||H===!0){const ae=this.type!==xn?{minFilter:bt,magFilter:bt}:{};k.map!==null&&k.map.dispose(),k.map=new ui(r.x,r.y,ae),k.map.texture.name=se.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const fe=k.getViewportCount();for(let ae=0;ae<fe;ae++){const G=k.getViewport(ae);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),ue.viewport(a),k.updateMatrices(se,ae),i=k.getFrustum(),E(D,P,k.camera,se,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&C(k,P),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(ee,M,R)};function C(b,D){const P=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ui(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(D,null,P,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(D,null,P,m,_,null)}function S(b,D,P,ee){let M=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ue=M.uuid,he=D.uuid;let H=c[ue];H===void 0&&(H={},c[ue]=H);let $=H[he];$===void 0&&($=M.clone(),H[he]=$),M=$}if(M.visible=D.visible,M.wireframe=D.wireframe,ee===xn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ue=n.properties.get(M);ue.light=P}return M}function E(b,D,P,ee,M){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===xn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const he=e.update(b),H=b.material;if(Array.isArray(H)){const $=he.groups;for(let J=0,se=$.length;J<se;J++){const k=$[J],W=H[k.materialIndex];if(W&&W.visible){const fe=S(b,W,ee,M);n.renderBufferDirect(P,null,he,fe,b,k)}}}else if(H.visible){const $=S(b,H,ee,M);n.renderBufferDirect(P,null,he,$,b,null)}}const ue=b.children;for(let he=0,H=ue.length;he<H;he++)E(ue[he],D,P,ee,M)}}function zx(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const xe=new dt;let j=null;const de=new dt(0,0,0,0);return{setMask:function(Se){j!==Se&&!L&&(n.colorMask(Se,Se,Se,Se),j=Se)},setLocked:function(Se){L=Se},setClear:function(Se,qe,et,ct,Qt){Qt===!0&&(Se*=ct,qe*=ct,et*=ct),xe.set(Se,qe,et,ct),de.equals(xe)===!1&&(n.clearColor(Se,qe,et,ct),de.copy(xe))},reset:function(){L=!1,j=null,de.set(-1,0,0,0)}}}function s(){let L=!1,xe=null,j=null,de=null;return{setTest:function(Se){Se?Pe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!L&&(n.depthMask(Se),xe=Se)},setFunc:function(Se){if(j!==Se){switch(Se){case sp:n.depthFunc(n.NEVER);break;case op:n.depthFunc(n.ALWAYS);break;case ap:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case lp:n.depthFunc(n.EQUAL);break;case cp:n.depthFunc(n.GEQUAL);break;case up:n.depthFunc(n.GREATER);break;case fp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=Se}},setLocked:function(Se){L=Se},setClear:function(Se){de!==Se&&(n.clearDepth(Se),de=Se)},reset:function(){L=!1,xe=null,j=null,de=null}}}function a(){let L=!1,xe=null,j=null,de=null,Se=null,qe=null,et=null,ct=null,Qt=null;return{setTest:function(tt){L||(tt?Pe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(tt){xe!==tt&&!L&&(n.stencilMask(tt),xe=tt)},setFunc:function(tt,en,St){(j!==tt||de!==en||Se!==St)&&(n.stencilFunc(tt,en,St),j=tt,de=en,Se=St)},setOp:function(tt,en,St){(qe!==tt||et!==en||ct!==St)&&(n.stencilOp(tt,en,St),qe=tt,et=en,ct=St)},setLocked:function(tt){L=tt},setClear:function(tt){Qt!==tt&&(n.clearStencil(tt),Qt=tt)},reset:function(){L=!1,xe=null,j=null,de=null,Se=null,qe=null,et=null,ct=null,Qt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,h=!1,C=null,S=null,E=null,b=null,D=null,P=null,ee=null,M=!1,R=null,ue=null,he=null,H=null,$=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,k=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),se=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),se=k>=2);let fe=null,ae={};const G=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),ge=new dt().fromArray(G),_e=new dt().fromArray(X);function Me(L,xe,j,de){const Se=new Uint8Array(4),qe=n.createTexture();n.bindTexture(L,qe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<j;et++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(xe+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return qe}const Ae={};Ae[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),l.setFunc(Bo),V(!1),Z(sl),Pe(n.CULL_FACE),w(Bn);function Pe(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function We(L,xe){return m[L]!==xe?(n.bindFramebuffer(L,xe),m[L]=xe,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Qe(L,xe){let j=_,de=!1;if(L)if(j=v.get(xe),j===void 0&&(j=[],v.set(xe,j)),L.isWebGLMultipleRenderTargets){const Se=L.texture;if(j.length!==Se.length||j[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,et=Se.length;qe<et;qe++)j[qe]=n.COLOR_ATTACHMENT0+qe;j.length=Se.length,de=!0}}else j[0]!==n.COLOR_ATTACHMENT0&&(j[0]=n.COLOR_ATTACHMENT0,de=!0);else j[0]!==n.BACK&&(j[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Ie(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const O={[Oi]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};if(i)O[cl]=n.MIN,O[ul]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(O[cl]=L.MIN_EXT,O[ul]=L.MAX_EXT)}const A={[$d]:n.ZERO,[Zd]:n.ONE,[Jd]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[rp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[ep]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[Nu]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[tp]:n.ONE_MINUS_DST_ALPHA};function w(L,xe,j,de,Se,qe,et,ct){if(L===Bn){h===!0&&(Re(n.BLEND),h=!1);return}if(h===!1&&(Pe(n.BLEND),h=!0),L!==Yd){if(L!==C||ct!==M){if((S!==Oi||D!==Oi)&&(n.blendEquation(n.FUNC_ADD),S=Oi,D=Oi),ct)switch(L){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.ONE,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,P=null,ee=null,C=L,M=ct}return}Se=Se||xe,qe=qe||j,et=et||de,(xe!==S||Se!==D)&&(n.blendEquationSeparate(O[xe],O[Se]),S=xe,D=Se),(j!==E||de!==b||qe!==P||et!==ee)&&(n.blendFuncSeparate(A[j],A[de],A[qe],A[et]),E=j,b=de,P=qe,ee=et),C=L,M=!1}function I(L,xe){L.side===yn?Re(n.CULL_FACE):Pe(n.CULL_FACE);let j=L.side===Rt;xe&&(j=!j),V(j),L.blending===ki&&L.transparent===!1?w(Bn):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(L){R!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),R=L)}function Z(L){L!==Wd?(Pe(n.CULL_FACE),L!==ue&&(L===sl?n.cullFace(n.BACK):L===Xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),ue=L}function K(L){L!==he&&(se&&n.lineWidth(L),he=L)}function ie(L,xe,j){L?(Pe(n.POLYGON_OFFSET_FILL),(H!==xe||$!==j)&&(n.polygonOffset(xe,j),H=xe,$=j)):Re(n.POLYGON_OFFSET_FILL)}function oe(L){L?Pe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function ce(L){L===void 0&&(L=n.TEXTURE0+J-1),fe!==L&&(n.activeTexture(L),fe=L)}function re(L,xe,j){j===void 0&&(fe===null?j=n.TEXTURE0+J-1:j=fe);let de=ae[j];de===void 0&&(de={type:void 0,texture:void 0},ae[j]=de),(de.type!==L||de.texture!==xe)&&(fe!==j&&(n.activeTexture(j),fe=j),n.bindTexture(L,xe||Ae[L]),de.type=L,de.texture=xe)}function x(){const L=ae[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function T(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){ge.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Te(L){_e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function pe(L,xe){let j=f.get(xe);j===void 0&&(j=new WeakMap,f.set(xe,j));let de=j.get(L);de===void 0&&(de=n.getUniformBlockIndex(xe,L.name),j.set(L,de))}function we(L,xe){const de=f.get(xe).get(L);u.get(xe)!==de&&(n.uniformBlockBinding(xe,de,L.__bindingPointIndex),u.set(xe,de))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},fe=null,ae={},m={},v=new WeakMap,_=[],p=null,h=!1,C=null,S=null,E=null,b=null,D=null,P=null,ee=null,M=!1,R=null,ue=null,he=null,H=null,$=null,ge.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Re,bindFramebuffer:We,drawBuffers:Qe,useProgram:Ie,setBlending:w,setMaterial:I,setFlipSided:V,setCullFace:Z,setLineWidth:K,setPolygonOffset:ie,setScissorTest:oe,activeTexture:ce,bindTexture:re,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:ve,texImage3D:Ee,updateUBOMapping:pe,uniformBlockBinding:we,texStorage2D:le,texStorage3D:F,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:T,compressedTexSubImage3D:Y,scissor:ye,viewport:Te,reset:ze}}function Gx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(x,g){return h?new OffscreenCanvas(x,g):yr("canvas")}function S(x,g,U,q){let Q=1;if((x.width>q||x.height>q)&&(Q=q/Math.max(x.width,x.height)),Q<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const T=g?Xo:Math.floor,Y=T(Q*x.width),le=T(Q*x.height);_===void 0&&(_=C(Y,le));const F=U?C(Y,le):_;return F.width=Y,F.height=le,F.getContext("2d").drawImage(x,0,0,Y,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Y+"x"+le+")."),F}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function E(x){return Fl(x.width)&&Fl(x.height)}function b(x){return o?!1:x.wrapS!==$t||x.wrapT!==$t||x.minFilter!==bt&&x.minFilter!==zt}function D(x,g){return x.generateMipmaps&&g&&x.minFilter!==bt&&x.minFilter!==zt}function P(x){n.generateMipmap(x)}function ee(x,g,U,q,Q=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let T=g;return g===n.RED&&(U===n.FLOAT&&(T=n.R32F),U===n.HALF_FLOAT&&(T=n.R16F),U===n.UNSIGNED_BYTE&&(T=n.R8)),g===n.RG&&(U===n.FLOAT&&(T=n.RG32F),U===n.HALF_FLOAT&&(T=n.RG16F),U===n.UNSIGNED_BYTE&&(T=n.RG8)),g===n.RGBA&&(U===n.FLOAT&&(T=n.RGBA32F),U===n.HALF_FLOAT&&(T=n.RGBA16F),U===n.UNSIGNED_BYTE&&(T=q===Fe&&Q===!1?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(T=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(T=n.RGB5_A1)),(T===n.R16F||T===n.R32F||T===n.RG16F||T===n.RG32F||T===n.RGBA16F||T===n.RGBA32F)&&e.get("EXT_color_buffer_float"),T}function M(x,g,U){return D(x,U)===!0||x.isFramebufferTexture&&x.minFilter!==bt&&x.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function R(x){return x===bt||x===fl||x===Ks?n.NEAREST:n.LINEAR}function ue(x){const g=x.target;g.removeEventListener("dispose",ue),H(g),g.isVideoTexture&&v.delete(g)}function he(x){const g=x.target;g.removeEventListener("dispose",he),J(g)}function H(x){const g=i.get(x);if(g.__webglInit===void 0)return;const U=x.source,q=p.get(U);if(q){const Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&$(x),Object.keys(q).length===0&&p.delete(U)}i.remove(x)}function $(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const U=x.source,q=p.get(U);delete q[g.__cacheKey],a.memory.textures--}function J(x){const g=x.texture,U=i.get(x),q=i.get(g);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(U.__webglFramebuffer[Q]),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let Q=0,T=g.length;Q<T;Q++){const Y=i.get(g[Q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(g[Q])}i.remove(g),i.remove(x)}let se=0;function k(){se=0}function W(){const x=se;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),se+=1,x}function fe(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function ae(x,g){const U=i.get(x);if(x.isVideoTexture&&ce(x),x.isRenderTargetTexture===!1&&x.version>0&&U.__version!==x.version){const q=x.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(U,x,g);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function G(x,g){const U=i.get(x);if(x.version>0&&U.__version!==x.version){We(U,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function X(x,g){const U=i.get(x);if(x.version>0&&U.__version!==x.version){We(U,x,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function ge(x,g){const U=i.get(x);if(x.version>0&&U.__version!==x.version){Qe(U,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const _e={[Go]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},Me={[bt]:n.NEAREST,[fl]:n.NEAREST_MIPMAP_NEAREST,[Ks]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[xp]:n.LINEAR_MIPMAP_NEAREST,[Sr]:n.LINEAR_MIPMAP_LINEAR},Ae={[Ip]:n.NEVER,[Gp]:n.ALWAYS,[Np]:n.LESS,[Fp]:n.LEQUAL,[Op]:n.EQUAL,[zp]:n.GEQUAL,[Bp]:n.GREATER,[Hp]:n.NOTEQUAL};function Pe(x,g,U){if(U?(n.texParameteri(x,n.TEXTURE_WRAP_S,_e[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,_e[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,_e[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Me[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Me[g.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==$t||g.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,R(g.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==bt&&g.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===bt||g.minFilter!==Ks&&g.minFilter!==Sr||g.type===Nn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Re(x,g){let U=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",ue));const q=g.source;let Q=p.get(q);Q===void 0&&(Q={},p.set(q,Q));const T=fe(g);if(T!==x.__cacheKey){Q[T]===void 0&&(Q[T]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[T].usedTimes++;const Y=Q[x.__cacheKey];Y!==void 0&&(Q[x.__cacheKey].usedTimes--,Y.usedTimes===0&&$(g)),x.__cacheKey=T,x.__webglTexture=Q[T].texture}return U}function We(x,g,U){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const Q=Re(x,g),T=g.source;t.bindTexture(q,x.__webglTexture,n.TEXTURE0+U);const Y=i.get(T);if(T.version!==Y.__version||Q===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const le=b(g)&&E(g.image)===!1;let F=S(g.image,le,!1,u);F=re(g,F);const ve=E(F)||o,Ee=s.convert(g.format,g.colorSpace);let ye=s.convert(g.type),Te=ee(g.internalFormat,Ee,ye,g.colorSpace);Pe(q,g,ve);let pe;const we=g.mipmaps,ze=o&&g.isVideoTexture!==!0,L=Y.__version===void 0||Q===!0,xe=M(g,F,ve);if(g.isDepthTexture)Te=n.DEPTH_COMPONENT,o?g.type===Nn?Te=n.DEPTH_COMPONENT32F:g.type===In?Te=n.DEPTH_COMPONENT24:g.type===ri?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:g.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===si&&Te===n.DEPTH_COMPONENT&&g.type!==pa&&g.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=In,ye=s.convert(g.type)),g.format===ji&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,g.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ri,ye=s.convert(g.type))),L&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Te,F.width,F.height):t.texImage2D(n.TEXTURE_2D,0,Te,F.width,F.height,0,Ee,ye,null));else if(g.isDataTexture)if(we.length>0&&ve){ze&&L&&t.texStorage2D(n.TEXTURE_2D,xe,Te,we[0].width,we[0].height);for(let j=0,de=we.length;j<de;j++)pe=we[j],ze?t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,Ee,ye,pe.data):t.texImage2D(n.TEXTURE_2D,j,Te,pe.width,pe.height,0,Ee,ye,pe.data);g.generateMipmaps=!1}else ze?(L&&t.texStorage2D(n.TEXTURE_2D,xe,Te,F.width,F.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,F.width,F.height,Ee,ye,F.data)):t.texImage2D(n.TEXTURE_2D,0,Te,F.width,F.height,0,Ee,ye,F.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Te,we[0].width,we[0].height,F.depth);for(let j=0,de=we.length;j<de;j++)pe=we[j],g.format!==Zt?Ee!==null?ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,F.depth,Ee,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Te,pe.width,pe.height,F.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,F.depth,Ee,ye,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Te,pe.width,pe.height,F.depth,0,Ee,ye,pe.data)}else{ze&&L&&t.texStorage2D(n.TEXTURE_2D,xe,Te,we[0].width,we[0].height);for(let j=0,de=we.length;j<de;j++)pe=we[j],g.format!==Zt?Ee!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Te,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,Ee,ye,pe.data):t.texImage2D(n.TEXTURE_2D,j,Te,pe.width,pe.height,0,Ee,ye,pe.data)}else if(g.isDataArrayTexture)ze?(L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Te,F.width,F.height,F.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,Ee,ye,F.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,F.width,F.height,F.depth,0,Ee,ye,F.data);else if(g.isData3DTexture)ze?(L&&t.texStorage3D(n.TEXTURE_3D,xe,Te,F.width,F.height,F.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,Ee,ye,F.data)):t.texImage3D(n.TEXTURE_3D,0,Te,F.width,F.height,F.depth,0,Ee,ye,F.data);else if(g.isFramebufferTexture){if(L)if(ze)t.texStorage2D(n.TEXTURE_2D,xe,Te,F.width,F.height);else{let j=F.width,de=F.height;for(let Se=0;Se<xe;Se++)t.texImage2D(n.TEXTURE_2D,Se,Te,j,de,0,Ee,ye,null),j>>=1,de>>=1}}else if(we.length>0&&ve){ze&&L&&t.texStorage2D(n.TEXTURE_2D,xe,Te,we[0].width,we[0].height);for(let j=0,de=we.length;j<de;j++)pe=we[j],ze?t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ee,ye,pe):t.texImage2D(n.TEXTURE_2D,j,Te,Ee,ye,pe);g.generateMipmaps=!1}else ze?(L&&t.texStorage2D(n.TEXTURE_2D,xe,Te,F.width,F.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,ye,F)):t.texImage2D(n.TEXTURE_2D,0,Te,Ee,ye,F);D(g,ve)&&P(q),Y.__version=T.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Qe(x,g,U){if(g.image.length!==6)return;const q=Re(x,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+U);const T=i.get(Q);if(Q.version!==T.__version||q===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Y=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,F=[];for(let j=0;j<6;j++)!Y&&!le?F[j]=S(g.image[j],!1,!0,c):F[j]=le?g.image[j].image:g.image[j],F[j]=re(g,F[j]);const ve=F[0],Ee=E(ve)||o,ye=s.convert(g.format,g.colorSpace),Te=s.convert(g.type),pe=ee(g.internalFormat,ye,Te,g.colorSpace),we=o&&g.isVideoTexture!==!0,ze=T.__version===void 0||q===!0;let L=M(g,ve,Ee);Pe(n.TEXTURE_CUBE_MAP,g,Ee);let xe;if(Y){we&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,pe,ve.width,ve.height);for(let j=0;j<6;j++){xe=F[j].mipmaps;for(let de=0;de<xe.length;de++){const Se=xe[de];g.format!==Zt?ye!==null?we?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,0,0,Se.width,Se.height,ye,Te,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,pe,Se.width,Se.height,0,ye,Te,Se.data)}}}else{xe=g.mipmaps,we&&ze&&(xe.length>0&&L++,t.texStorage2D(n.TEXTURE_CUBE_MAP,L,pe,F[0].width,F[0].height));for(let j=0;j<6;j++)if(le){we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,F[j].width,F[j].height,ye,Te,F[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,pe,F[j].width,F[j].height,0,ye,Te,F[j].data);for(let de=0;de<xe.length;de++){const qe=xe[de].image[j].image;we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,0,0,qe.width,qe.height,ye,Te,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,pe,qe.width,qe.height,0,ye,Te,qe.data)}}else{we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye,Te,F[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,pe,ye,Te,F[j]);for(let de=0;de<xe.length;de++){const Se=xe[de];we?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,0,0,ye,Te,Se.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,pe,ye,Te,Se.image[j])}}}D(g,Ee)&&P(n.TEXTURE_CUBE_MAP),T.__version=Q.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ie(x,g,U,q,Q){const T=s.convert(U.format,U.colorSpace),Y=s.convert(U.type),le=ee(U.internalFormat,T,Y,U.colorSpace);i.get(g).__hasExternalTextures||(Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,le,g.width,g.height,g.depth,0,T,Y,null):t.texImage2D(Q,0,le,g.width,g.height,0,T,Y,null)),t.bindFramebuffer(n.FRAMEBUFFER,x),oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,i.get(U).__webglTexture,0,ie(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,i.get(U).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(x,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let q=n.DEPTH_COMPONENT16;if(U||oe(g)){const Q=g.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Nn?q=n.DEPTH_COMPONENT32F:Q.type===In&&(q=n.DEPTH_COMPONENT24));const T=ie(g);oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T,q,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,T,q,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const q=ie(g);U&&oe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,g.width,g.height):oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Q=0;Q<q.length;Q++){const T=q[Q],Y=s.convert(T.format,T.colorSpace),le=s.convert(T.type),F=ee(T.internalFormat,Y,le,T.colorSpace),ve=ie(g);U&&oe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,F,g.width,g.height):oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,F,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,F,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function A(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const q=i.get(g.depthTexture).__webglTexture,Q=ie(g);if(g.depthTexture.format===si)oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(g.depthTexture.format===ji)oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function w(x){const g=i.get(x),U=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");A(g.__webglFramebuffer,x)}else if(U){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]=n.createRenderbuffer(),O(g.__webglDepthbuffer[q],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),O(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(x,g,U){const q=i.get(x);g!==void 0&&Ie(q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),U!==void 0&&w(x)}function V(x){const g=x.texture,U=i.get(x),q=i.get(g);x.addEventListener("dispose",he),x.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++);const Q=x.isWebGLCubeRenderTarget===!0,T=x.isWebGLMultipleRenderTargets===!0,Y=E(x)||o;if(Q){U.__webglFramebuffer=[];for(let le=0;le<6;le++)U.__webglFramebuffer[le]=n.createFramebuffer()}else{if(U.__webglFramebuffer=n.createFramebuffer(),T)if(r.drawBuffers){const le=x.texture;for(let F=0,ve=le.length;F<ve;F++){const Ee=i.get(le[F]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&oe(x)===!1){const le=T?g:[g];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let F=0;F<le.length;F++){const ve=le[F];U.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[F]);const Ee=s.convert(ve.format,ve.colorSpace),ye=s.convert(ve.type),Te=ee(ve.internalFormat,Ee,ye,ve.colorSpace,x.isXRRenderTarget===!0),pe=ie(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,U.__webglColorRenderbuffer[F])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),O(U.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,g,Y);for(let le=0;le<6;le++)Ie(U.__webglFramebuffer[le],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le);D(g,Y)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(T){const le=x.texture;for(let F=0,ve=le.length;F<ve;F++){const Ee=le[F],ye=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),Pe(n.TEXTURE_2D,Ee,Y),Ie(U.__webglFramebuffer,x,Ee,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D),D(Ee,Y)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?le=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,q.__webglTexture),Pe(le,g,Y),Ie(U.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,le),D(g,Y)&&P(le),t.unbindTexture()}x.depthBuffer&&w(x)}function Z(x){const g=E(x)||o,U=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let q=0,Q=U.length;q<Q;q++){const T=U[q];if(D(T,g)){const Y=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(T).__webglTexture;t.bindTexture(Y,le),P(Y),t.unbindTexture()}}}function K(x){if(o&&x.samples>0&&oe(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],U=x.width,q=x.height;let Q=n.COLOR_BUFFER_BIT;const T=[],Y=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(x),F=x.isWebGLMultipleRenderTargets===!0;if(F)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){T.push(n.COLOR_ATTACHMENT0+ve),x.depthBuffer&&T.push(Y);const Ee=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ee===!1&&(x.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),F&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ve]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Y]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Y])),F){const ye=i.get(g[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,U,q,0,0,U,q,Q,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),F)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,le.__webglColorRenderbuffer[ve]);const Ee=i.get(g[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function ie(x){return Math.min(f,x.samples)}function oe(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ce(x){const g=a.render.frame;v.get(x)!==g&&(v.set(x,g),x.update())}function re(x,g){const U=x.colorSpace,q=x.format,Q=x.type;return x.isCompressedTexture===!0||x.format===ko||U!==un&&U!==ai&&(U===Fe?o===!1?e.has("EXT_sRGB")===!0&&q===Zt?(x.format=ko,x.minFilter=zt,x.generateMipmaps=!1):g=Yu.sRGBToLinear(g):(q!==Zt||Q!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=ge,this.rebindTextures=I,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=oe}function Vx(n,e,t){const i=t.isWebGL2;function r(s,a=ai){let o;if(s===Hn)return n.UNSIGNED_BYTE;if(s===Hu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===zu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Mp)return n.BYTE;if(s===Sp)return n.SHORT;if(s===pa)return n.UNSIGNED_SHORT;if(s===Bu)return n.INT;if(s===In)return n.UNSIGNED_INT;if(s===Nn)return n.FLOAT;if(s===Er)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ep)return n.ALPHA;if(s===Zt)return n.RGBA;if(s===yp)return n.LUMINANCE;if(s===Tp)return n.LUMINANCE_ALPHA;if(s===si)return n.DEPTH_COMPONENT;if(s===ji)return n.DEPTH_STENCIL;if(s===ko)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===bp)return n.RED;if(s===Gu)return n.RED_INTEGER;if(s===Ap)return n.RG;if(s===Vu)return n.RG_INTEGER;if(s===ku)return n.RGBA_INTEGER;if(s===$s||s===Zs||s===Js||s===Qs)if(a===Fe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===$s)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$s)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hl||s===dl||s===pl||s===ml)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ml)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gl||s===_l)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===gl)return a===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===_l)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vl||s===xl||s===Ml||s===Sl||s===El||s===yl||s===Tl||s===bl||s===Al||s===wl||s===Rl||s===Cl||s===Pl||s===Ll)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===vl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ml)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===El)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Al)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ll)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===eo)return a===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Rp||s===Dl||s===Ul||s===Il)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===eo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ul)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Il)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ri?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class kx extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ns extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wx={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xx extends Ft{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===si&&(i=In),i===void 0&&u===ji&&(i=ri),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qx extends pi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const _=t.getContextAttributes();let p=null,h=null;const C=[],S=[],E=new Gt;E.layers.enable(1),E.viewport=new dt;const b=new Gt;b.layers.enable(2),b.viewport=new dt;const D=[E,b],P=new kx;P.layers.enable(1),P.layers.enable(2);let ee=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=C[G];return X===void 0&&(X=new bo,C[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=C[G];return X===void 0&&(X=new bo,C[G]=X),X.getGripSpace()},this.getHand=function(G){let X=C[G];return X===void 0&&(X=new bo,C[G]=X),X.getHandSpace()};function R(G){const X=S.indexOf(G.inputSource);if(X===-1)return;const ge=C[X];ge!==void 0&&(ge.update(G.inputSource,G.frame,c||a),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function ue(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",he);for(let G=0;G<C.length;G++){const X=S[G];X!==null&&(S[G]=null,C[G].disconnect(X))}ee=null,M=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),h=new ui(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let X=null,ge=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=_.stencil?ji:si,ge=_.stencil?ri:In);const Me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),h=new ui(d.textureWidth,d.textureHeight,{format:Zt,type:Hn,depthTexture:new Xx(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(h);Ae.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function he(G){for(let X=0;X<G.removed.length;X++){const ge=G.removed[X],_e=S.indexOf(ge);_e>=0&&(S[_e]=null,C[_e].disconnect(ge))}for(let X=0;X<G.added.length;X++){const ge=G.added[X];let _e=S.indexOf(ge);if(_e===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=S.length){S.push(ge),_e=Ae;break}else if(S[Ae]===null){S[Ae]=ge,_e=Ae;break}if(_e===-1)break}const Me=C[_e];Me&&Me.connect(ge)}}const H=new z,$=new z;function J(G,X,ge){H.setFromMatrixPosition(X.matrixWorld),$.setFromMatrixPosition(ge.matrixWorld);const _e=H.distanceTo($),Me=X.projectionMatrix.elements,Ae=ge.projectionMatrix.elements,Pe=Me[14]/(Me[10]-1),Re=Me[14]/(Me[10]+1),We=(Me[9]+1)/Me[5],Qe=(Me[9]-1)/Me[5],Ie=(Me[8]-1)/Me[0],O=(Ae[8]+1)/Ae[0],A=Pe*Ie,w=Pe*O,I=_e/(-Ie+O),V=I*-Ie;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(V),G.translateZ(I),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Z=Pe+I,K=Re+I,ie=A-V,oe=w+(_e-V),ce=We*Re/K*Z,re=Qe*Re/K*Z;G.projectionMatrix.makePerspective(ie,oe,ce,re,Z,K),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function se(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;P.near=b.near=E.near=G.near,P.far=b.far=E.far=G.far,(ee!==P.near||M!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,M=P.far);const X=G.parent,ge=P.cameras;se(P,X);for(let _e=0;_e<ge.length;_e++)se(ge[_e],X);ge.length===2?J(P,E,b):P.projectionMatrix.copy(E.projectionMatrix),k(G,P,X)};function k(G,X,ge){ge===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const _e=G.children;for(let Me=0,Ae=_e.length;Me<Ae;Me++)_e[Me].updateMatrixWorld(!0);G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Wo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let W=null;function fe(G,X){if(u=X.getViewerPose(c||a),v=X,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let _e=!1;ge.length!==P.cameras.length&&(P.cameras.length=0,_e=!0);for(let Me=0;Me<ge.length;Me++){const Ae=ge[Me];let Pe=null;if(m!==null)Pe=m.getViewport(Ae);else{const We=f.getViewSubImage(d,Ae);Pe=We.viewport,Me===0&&(e.setRenderTargetTextures(h,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(h))}let Re=D[Me];Re===void 0&&(Re=new Gt,Re.layers.enable(Me),Re.viewport=new dt,D[Me]=Re),Re.matrix.fromArray(Ae.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ae.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Me===0&&(P.matrix.copy(Re.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),_e===!0&&P.cameras.push(Re)}}for(let ge=0;ge<C.length;ge++){const _e=S[ge],Me=C[ge];_e!==null&&Me!==void 0&&Me.update(_e,X,c||a)}W&&W(G,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),v=null}const ae=new sf;ae.setAnimationLoop(fe),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}}function Yx(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,tf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,C,S,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,C,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Rt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Rt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const C=e.get(h).envMap;if(C&&(p.envMap.value=C,p.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,C,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*C,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,C){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const C=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,S){const E=S.program;i.uniformBlockBinding(C,E)}function c(C,S){let E=r[C.id];E===void 0&&(v(C),E=u(C),r[C.id]=E,C.addEventListener("dispose",p));const b=S.program;i.updateUBOMapping(C,b);const D=e.render.frame;s[C.id]!==D&&(d(C),s[C.id]=D)}function u(C){const S=f();C.__bindingPointIndex=S;const E=n.createBuffer(),b=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const S=r[C.id],E=C.uniforms,b=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,P=E.length;D<P;D++){const ee=E[D];if(m(ee,D,b)===!0){const M=ee.__offset,R=Array.isArray(ee.value)?ee.value:[ee.value];let ue=0;for(let he=0;he<R.length;he++){const H=R[he],$=_(H);typeof H=="number"?(ee.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,M+ue,ee.__data)):H.isMatrix3?(ee.__data[0]=H.elements[0],ee.__data[1]=H.elements[1],ee.__data[2]=H.elements[2],ee.__data[3]=H.elements[0],ee.__data[4]=H.elements[3],ee.__data[5]=H.elements[4],ee.__data[6]=H.elements[5],ee.__data[7]=H.elements[0],ee.__data[8]=H.elements[6],ee.__data[9]=H.elements[7],ee.__data[10]=H.elements[8],ee.__data[11]=H.elements[0]):(H.toArray(ee.__data,ue),ue+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,ee.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(C,S,E){const b=C.value;if(E[S]===void 0){if(typeof b=="number")E[S]=b;else{const D=Array.isArray(b)?b:[b],P=[];for(let ee=0;ee<D.length;ee++)P.push(D[ee].clone());E[S]=P}return!0}else if(typeof b=="number"){if(E[S]!==b)return E[S]=b,!0}else{const D=Array.isArray(E[S])?E[S]:[E[S]],P=Array.isArray(b)?b:[b];for(let ee=0;ee<D.length;ee++){const M=D[ee];if(M.equals(P[ee])===!1)return M.copy(P[ee]),!0}}return!1}function v(C){const S=C.uniforms;let E=0;const b=16;let D=0;for(let P=0,ee=S.length;P<ee;P++){const M=S[P],R={boundary:0,storage:0},ue=Array.isArray(M.value)?M.value:[M.value];for(let he=0,H=ue.length;he<H;he++){const $=ue[he],J=_($);R.boundary+=J.boundary,R.storage+=J.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=E,P>0){D=E%b;const he=b-D;D!==0&&he-R.boundary<0&&(E+=b-D,M.__offset=E)}E+=R.storage}return D=E%b,D>0&&(E+=b-D),C.__size=E,C.__cache={},this}function _(C){const S={boundary:0,storage:0};return typeof C=="number"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function p(C){const S=C.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const C in r)n.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function Kx(){const n=yr("canvas");return n.style.display="block",n}class uf{constructor(e={}){const{canvas:t=Kx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const h=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=bn,this.toneMappingExposure=1;const S=this;let E=!1,b=0,D=0,P=null,ee=-1,M=null;const R=new dt,ue=new dt;let he=null;const H=new Ze(0);let $=0,J=t.width,se=t.height,k=1,W=null,fe=null;const ae=new dt(0,0,J,se),G=new dt(0,0,J,se);let X=!1;const ge=new rf;let _e=!1,Me=!1,Ae=null;const Pe=new pt,Re=new ke,We=new z,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return P===null?k:1}let O=i;function A(y,B){for(let te=0;te<y.length;te++){const N=y[te],ne=t.getContext(N,B);if(ne!==null)return ne}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",de,!1),O===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),O=A(B,y),O===null)throw A(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let w,I,V,Z,K,ie,oe,ce,re,x,g,U,q,Q,T,Y,le,F,ve,Ee,ye,Te,pe,we;function ze(){w=new sv(O),I=new J_(O,w,e),w.init(I),Te=new Vx(O,w,I),V=new zx(O,w,I),Z=new lv(O),K=new Ax,ie=new Gx(O,w,V,K,I,Te,Z),oe=new ev(S),ce=new rv(S),re=new _m(O,I),pe=new $_(O,w,re,I),x=new ov(O,re,Z,pe),g=new hv(O,x,re,Z),ve=new fv(O,I,ie),Y=new Q_(K),U=new bx(S,oe,ce,w,I,pe,Y),q=new Yx(S,K),Q=new Rx,T=new Ix(w,I),F=new K_(S,oe,ce,V,g,d,l),le=new Hx(S,g,I),we=new jx(O,Z,I,V),Ee=new Z_(O,w,Z,I),ye=new av(O,w,Z,I),Z.programs=U.programs,S.capabilities=I,S.extensions=w,S.properties=K,S.renderLists=Q,S.shadowMap=le,S.state=V,S.info=Z}ze();const L=new qx(S,O);this.xr=L,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=w.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=w.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(J,se,!1))},this.getSize=function(y){return y.set(J,se)},this.setSize=function(y,B,te=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,se=B,t.width=Math.floor(y*k),t.height=Math.floor(B*k),te===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(J*k,se*k).floor()},this.setDrawingBufferSize=function(y,B,te){J=y,se=B,k=te,t.width=Math.floor(y*te),t.height=Math.floor(B*te),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,B,te,N){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,B,te,N),V.viewport(R.copy(ae).multiplyScalar(k).floor())},this.getScissor=function(y){return y.copy(G)},this.setScissor=function(y,B,te,N){y.isVector4?G.set(y.x,y.y,y.z,y.w):G.set(y,B,te,N),V.scissor(ue.copy(G).multiplyScalar(k).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(y){V.setScissorTest(X=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(y=!0,B=!0,te=!0){let N=0;if(y){let ne=!1;if(P!==null){const be=P.texture.format;ne=be===ku||be===Vu||be===Gu}if(ne){const be=P.texture.type,Ce=be===Hn||be===In||be===pa||be===ri||be===Hu||be===zu,De=F.getClearColor(),Ue=F.getClearAlpha(),Ve=De.r,Ne=De.g,Be=De.b;Ce?(m[0]=Ve,m[1]=Ne,m[2]=Be,m[3]=Ue,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Ve,v[1]=Ne,v[2]=Be,v[3]=Ue,O.clearBufferiv(O.COLOR,0,v))}else N|=O.COLOR_BUFFER_BIT}B&&(N|=O.DEPTH_BUFFER_BIT),te&&(N|=O.STENCIL_BUFFER_BIT),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Q.dispose(),T.dispose(),K.dispose(),oe.dispose(),ce.dispose(),g.dispose(),pe.dispose(),we.dispose(),U.dispose(),L.dispose(),L.removeEventListener("sessionstart",tt),L.removeEventListener("sessionend",en),Ae&&(Ae.dispose(),Ae=null),St.stop()};function xe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=Z.autoReset,B=le.enabled,te=le.autoUpdate,N=le.needsUpdate,ne=le.type;ze(),Z.autoReset=y,le.enabled=B,le.autoUpdate=te,le.needsUpdate=N,le.type=ne}function de(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Se(y){const B=y.target;B.removeEventListener("dispose",Se),qe(B)}function qe(y){et(y),K.remove(y)}function et(y){const B=K.get(y).programs;B!==void 0&&(B.forEach(function(te){U.releaseProgram(te)}),y.isShaderMaterial&&U.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,te,N,ne,be){B===null&&(B=Qe);const Ce=ne.isMesh&&ne.matrixWorld.determinant()<0,De=hf(y,B,te,N,ne);V.setMaterial(N,Ce);let Ue=te.index,Ve=1;N.wireframe===!0&&(Ue=x.getWireframeAttribute(te),Ve=2);const Ne=te.drawRange,Be=te.attributes.position;let nt=Ne.start*Ve,it=(Ne.start+Ne.count)*Ve;be!==null&&(nt=Math.max(nt,be.start*Ve),it=Math.min(it,(be.start+be.count)*Ve)),Ue!==null?(nt=Math.max(nt,0),it=Math.min(it,Ue.count)):Be!=null&&(nt=Math.max(nt,0),it=Math.min(it,Be.count));const kt=it-nt;if(kt<0||kt===1/0)return;pe.setup(ne,N,De,te,Ue);let fn,rt=Ee;if(Ue!==null&&(fn=re.get(Ue),rt=ye,rt.setIndex(fn)),ne.isMesh)N.wireframe===!0?(V.setLineWidth(N.wireframeLinewidth*Ie()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(ne.isLine){let Xe=N.linewidth;Xe===void 0&&(Xe=1),V.setLineWidth(Xe*Ie()),ne.isLineSegments?rt.setMode(O.LINES):ne.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else ne.isPoints?rt.setMode(O.POINTS):ne.isSprite&&rt.setMode(O.TRIANGLES);if(ne.isInstancedMesh)rt.renderInstances(nt,kt,ne.count);else if(te.isInstancedBufferGeometry){const Xe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Us=Math.min(te.instanceCount,Xe);rt.renderInstances(nt,kt,Us)}else rt.render(nt,kt)},this.compile=function(y,B){function te(N,ne,be){N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,Lr(N,ne,be),N.side=Gn,N.needsUpdate=!0,Lr(N,ne,be),N.side=yn):Lr(N,ne,be)}p=T.get(y),p.init(),C.push(p),y.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(S.useLegacyLights),y.traverse(function(N){const ne=N.material;if(ne)if(Array.isArray(ne))for(let be=0;be<ne.length;be++){const Ce=ne[be];te(Ce,y,N)}else te(ne,y,N)}),C.pop(),p=null};let ct=null;function Qt(y){ct&&ct(y)}function tt(){St.stop()}function en(){St.start()}const St=new sf;St.setAnimationLoop(Qt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(y){ct=y,L.setAnimationLoop(y),y===null?St.stop():St.start()},L.addEventListener("sessionstart",tt),L.addEventListener("sessionend",en),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,B,P),p=T.get(y,C.length),p.init(),C.push(p),Pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ge.setFromProjectionMatrix(Pe),Me=this.localClippingEnabled,_e=Y.init(this.clippingPlanes,Me),_=Q.get(y,h.length),_.init(),h.push(_),Ma(y,B,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(W,fe),this.info.render.frame++,_e===!0&&Y.beginShadows();const te=p.state.shadowsArray;if(le.render(te,y,B),_e===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(_,y),p.setupLights(S.useLegacyLights),B.isArrayCamera){const N=B.cameras;for(let ne=0,be=N.length;ne<be;ne++){const Ce=N[ne];Sa(_,y,Ce,Ce.viewport)}}else Sa(_,y,B);P!==null&&(ie.updateMultisampleRenderTarget(P),ie.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(S,y,B),pe.resetDefaultState(),ee=-1,M=null,C.pop(),C.length>0?p=C[C.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Ma(y,B,te,N){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)te=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ge.intersectsSprite(y)){N&&We.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pe);const Ce=g.update(y),De=y.material;De.visible&&_.push(y,Ce,De,te,We.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ge.intersectsObject(y))){const Ce=g.update(y),De=y.material;if(N&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),We.copy(y.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),We.copy(Ce.boundingSphere.center)),We.applyMatrix4(y.matrixWorld).applyMatrix4(Pe)),Array.isArray(De)){const Ue=Ce.groups;for(let Ve=0,Ne=Ue.length;Ve<Ne;Ve++){const Be=Ue[Ve],nt=De[Be.materialIndex];nt&&nt.visible&&_.push(y,Ce,nt,te,We.z,Be)}}else De.visible&&_.push(y,Ce,De,te,We.z,null)}}const be=y.children;for(let Ce=0,De=be.length;Ce<De;Ce++)Ma(be[Ce],B,te,N)}function Sa(y,B,te,N){const ne=y.opaque,be=y.transmissive,Ce=y.transparent;p.setupLightsView(te),_e===!0&&Y.setGlobalState(S.clippingPlanes,te),be.length>0&&ff(ne,be,B,te),N&&V.viewport(R.copy(N)),ne.length>0&&Pr(ne,B,te),be.length>0&&Pr(be,B,te),Ce.length>0&&Pr(Ce,B,te),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function ff(y,B,te,N){const ne=I.isWebGL2;Ae===null&&(Ae=new ui(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")?Er:Hn,minFilter:Sr,samples:ne?4:0})),S.getDrawingBufferSize(Re),ne?Ae.setSize(Re.x,Re.y):Ae.setSize(Xo(Re.x),Xo(Re.y));const be=S.getRenderTarget();S.setRenderTarget(Ae),S.getClearColor(H),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear();const Ce=S.toneMapping;S.toneMapping=bn,Pr(y,te,N),ie.updateMultisampleRenderTarget(Ae),ie.updateRenderTargetMipmap(Ae);let De=!1;for(let Ue=0,Ve=B.length;Ue<Ve;Ue++){const Ne=B[Ue],Be=Ne.object,nt=Ne.geometry,it=Ne.material,kt=Ne.group;if(it.side===yn&&Be.layers.test(N.layers)){const fn=it.side;it.side=Rt,it.needsUpdate=!0,Ea(Be,te,N,nt,it,kt),it.side=fn,it.needsUpdate=!0,De=!0}}De===!0&&(ie.updateMultisampleRenderTarget(Ae),ie.updateRenderTargetMipmap(Ae)),S.setRenderTarget(be),S.setClearColor(H,$),S.toneMapping=Ce}function Pr(y,B,te){const N=B.isScene===!0?B.overrideMaterial:null;for(let ne=0,be=y.length;ne<be;ne++){const Ce=y[ne],De=Ce.object,Ue=Ce.geometry,Ve=N===null?Ce.material:N,Ne=Ce.group;De.layers.test(te.layers)&&Ea(De,B,te,Ue,Ve,Ne)}}function Ea(y,B,te,N,ne,be){y.onBeforeRender(S,B,te,N,ne,be),y.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),ne.onBeforeRender(S,B,te,N,y,be),ne.transparent===!0&&ne.side===yn&&ne.forceSinglePass===!1?(ne.side=Rt,ne.needsUpdate=!0,S.renderBufferDirect(te,B,N,ne,y,be),ne.side=Gn,ne.needsUpdate=!0,S.renderBufferDirect(te,B,N,ne,y,be),ne.side=yn):S.renderBufferDirect(te,B,N,ne,y,be),y.onAfterRender(S,B,te,N,ne,be)}function Lr(y,B,te){B.isScene!==!0&&(B=Qe);const N=K.get(y),ne=p.state.lights,be=p.state.shadowsArray,Ce=ne.state.version,De=U.getParameters(y,ne.state,be,B,te),Ue=U.getProgramCacheKey(De);let Ve=N.programs;N.environment=y.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(y.isMeshStandardMaterial?ce:oe).get(y.envMap||N.environment),Ve===void 0&&(y.addEventListener("dispose",Se),Ve=new Map,N.programs=Ve);let Ne=Ve.get(Ue);if(Ne!==void 0){if(N.currentProgram===Ne&&N.lightsStateVersion===Ce)return ya(y,De),Ne}else De.uniforms=U.getUniforms(y),y.onBuild(te,De,S),y.onBeforeCompile(De,S),Ne=U.acquireProgram(De,Ue),Ve.set(Ue,Ne),N.uniforms=De.uniforms;const Be=N.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=Y.uniform),ya(y,De),N.needsLights=pf(y),N.lightsStateVersion=Ce,N.needsLights&&(Be.ambientLightColor.value=ne.state.ambient,Be.lightProbe.value=ne.state.probe,Be.directionalLights.value=ne.state.directional,Be.directionalLightShadows.value=ne.state.directionalShadow,Be.spotLights.value=ne.state.spot,Be.spotLightShadows.value=ne.state.spotShadow,Be.rectAreaLights.value=ne.state.rectArea,Be.ltc_1.value=ne.state.rectAreaLTC1,Be.ltc_2.value=ne.state.rectAreaLTC2,Be.pointLights.value=ne.state.point,Be.pointLightShadows.value=ne.state.pointShadow,Be.hemisphereLights.value=ne.state.hemi,Be.directionalShadowMap.value=ne.state.directionalShadowMap,Be.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Be.spotShadowMap.value=ne.state.spotShadowMap,Be.spotLightMatrix.value=ne.state.spotLightMatrix,Be.spotLightMap.value=ne.state.spotLightMap,Be.pointShadowMap.value=ne.state.pointShadowMap,Be.pointShadowMatrix.value=ne.state.pointShadowMatrix);const nt=Ne.getUniforms(),it=ls.seqWithValue(nt.seq,Be);return N.currentProgram=Ne,N.uniformsList=it,Ne}function ya(y,B){const te=K.get(y);te.outputColorSpace=B.outputColorSpace,te.instancing=B.instancing,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}function hf(y,B,te,N,ne){B.isScene!==!0&&(B=Qe),ie.resetTextureUnits();const be=B.fog,Ce=N.isMeshStandardMaterial?B.environment:null,De=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:un,Ue=(N.isMeshStandardMaterial?ce:oe).get(N.envMap||Ce),Ve=N.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ne=!!te.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Be=!!te.morphAttributes.position,nt=!!te.morphAttributes.normal,it=!!te.morphAttributes.color,kt=N.toneMapped?S.toneMapping:bn,fn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,rt=fn!==void 0?fn.length:0,Xe=K.get(N),Us=p.state.lights;if(_e===!0&&(Me===!0||y!==M)){const Ct=y===M&&N.id===ee;Y.setState(N,y,Ct)}let ut=!1;N.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Us.state.version||Xe.outputColorSpace!==De||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ue||N.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Y.numPlanes||Xe.numIntersection!==Y.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==Ne||Xe.morphTargets!==Be||Xe.morphNormals!==nt||Xe.morphColors!==it||Xe.toneMapping!==kt||I.isWebGL2===!0&&Xe.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,Xe.__version=N.version);let Wn=Xe.currentProgram;ut===!0&&(Wn=Lr(N,B,ne));let Ta=!1,Zi=!1,Is=!1;const Et=Wn.getUniforms(),Xn=Xe.uniforms;if(V.useProgram(Wn.program)&&(Ta=!0,Zi=!0,Is=!0),N.id!==ee&&(ee=N.id,Zi=!0),Ta||M!==y){if(Et.setValue(O,"projectionMatrix",y.projectionMatrix),I.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),M!==y&&(M=y,Zi=!0,Is=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ct=Et.map.cameraPosition;Ct!==void 0&&Ct.setValue(O,We.setFromMatrixPosition(y.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Et.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||ne.isSkinnedMesh)&&Et.setValue(O,"viewMatrix",y.matrixWorldInverse)}if(ne.isSkinnedMesh){Et.setOptional(O,ne,"bindMatrix"),Et.setOptional(O,ne,"bindMatrixInverse");const Ct=ne.skeleton;Ct&&(I.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(O,"boneTexture",Ct.boneTexture,ie),Et.setValue(O,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ns=te.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&I.isWebGL2===!0)&&ve.update(ne,te,Wn),(Zi||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,Et.setValue(O,"receiveShadow",ne.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Xn.envMap.value=Ue,Xn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Zi&&(Et.setValue(O,"toneMappingExposure",S.toneMappingExposure),Xe.needsLights&&df(Xn,Is),be&&N.fog===!0&&q.refreshFogUniforms(Xn,be),q.refreshMaterialUniforms(Xn,N,k,se,Ae),ls.upload(O,Xe.uniformsList,Xn,ie)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ls.upload(O,Xe.uniformsList,Xn,ie),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Et.setValue(O,"center",ne.center),Et.setValue(O,"modelViewMatrix",ne.modelViewMatrix),Et.setValue(O,"normalMatrix",ne.normalMatrix),Et.setValue(O,"modelMatrix",ne.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ct=N.uniformsGroups;for(let Os=0,mf=Ct.length;Os<mf;Os++)if(I.isWebGL2){const ba=Ct[Os];we.update(ba,Wn),we.bind(ba,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function df(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function pf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,B,te){K.get(y.texture).__webglTexture=B,K.get(y.depthTexture).__webglTexture=te;const N=K.get(y);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=te===void 0,N.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,B){const te=K.get(y);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,te=0){P=y,b=B,D=te;let N=!0,ne=null,be=!1,Ce=!1;if(y){const Ue=K.get(y);Ue.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(O.FRAMEBUFFER,null),N=!1):Ue.__webglFramebuffer===void 0?ie.setupRenderTarget(y):Ue.__hasExternalTextures&&ie.rebindTextures(y,K.get(y.texture).__webglTexture,K.get(y.depthTexture).__webglTexture);const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Ne=K.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(ne=Ne[B],be=!0):I.isWebGL2&&y.samples>0&&ie.useMultisampledRTT(y)===!1?ne=K.get(y).__webglMultisampledFramebuffer:ne=Ne,R.copy(y.viewport),ue.copy(y.scissor),he=y.scissorTest}else R.copy(ae).multiplyScalar(k).floor(),ue.copy(G).multiplyScalar(k).floor(),he=X;if(V.bindFramebuffer(O.FRAMEBUFFER,ne)&&I.drawBuffers&&N&&V.drawBuffers(y,ne),V.viewport(R),V.scissor(ue),V.setScissorTest(he),be){const Ue=K.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,te)}else if(Ce){const Ue=K.get(y.texture),Ve=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,te||0,Ve)}ee=-1},this.readRenderTargetPixels=function(y,B,te,N,ne,be,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){V.bindFramebuffer(O.FRAMEBUFFER,De);try{const Ue=y.texture,Ve=Ue.format,Ne=Ue.type;if(Ve!==Zt&&Te.convert(Ve)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===Er&&(w.has("EXT_color_buffer_half_float")||I.isWebGL2&&w.has("EXT_color_buffer_float"));if(Ne!==Hn&&Te.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Nn&&(I.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-N&&te>=0&&te<=y.height-ne&&O.readPixels(B,te,N,ne,Te.convert(Ve),Te.convert(Ne),be)}finally{const Ue=P!==null?K.get(P).__webglFramebuffer:null;V.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(y,B,te=0){const N=Math.pow(2,-te),ne=Math.floor(B.image.width*N),be=Math.floor(B.image.height*N);ie.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,y.x,y.y,ne,be),V.unbindTexture()},this.copyTextureToTexture=function(y,B,te,N=0){const ne=B.image.width,be=B.image.height,Ce=Te.convert(te.format),De=Te.convert(te.type);ie.setTexture2D(te,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,te.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,te.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,y.x,y.y,ne,be,Ce,De,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,y.x,y.y,B.mipmaps[0].width,B.mipmaps[0].height,Ce,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,N,y.x,y.y,Ce,De,B.image),N===0&&te.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(y,B,te,N,ne=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=y.max.x-y.min.x+1,Ce=y.max.y-y.min.y+1,De=y.max.z-y.min.z+1,Ue=Te.convert(N.format),Ve=Te.convert(N.type);let Ne;if(N.isData3DTexture)ie.setTexture3D(N,0),Ne=O.TEXTURE_3D;else if(N.isDataArrayTexture)ie.setTexture2DArray(N,0),Ne=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Be=O.getParameter(O.UNPACK_ROW_LENGTH),nt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),it=O.getParameter(O.UNPACK_SKIP_PIXELS),kt=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES),rt=te.isCompressedTexture?te.mipmaps[0]:te.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,y.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,y.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,y.min.z),te.isDataTexture||te.isData3DTexture?O.texSubImage3D(Ne,ne,B.x,B.y,B.z,be,Ce,De,Ue,Ve,rt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,ne,B.x,B.y,B.z,be,Ce,De,Ue,rt.data)):O.texSubImage3D(Ne,ne,B.x,B.y,B.z,be,Ce,De,Ue,Ve,rt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,it),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),ne===0&&N.generateMipmaps&&O.generateMipmap(Ne),V.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ie.setTextureCube(y,0):y.isData3DTexture?ie.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ie.setTexture2DArray(y,0):ie.setTexture2D(y,0),V.unbindTexture()},this.resetState=function(){b=0,D=0,P=null,V.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?oi:Wu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===oi?Fe:un}}class $x extends uf{}$x.prototype.isWebGL1Renderer=!0;class Zx extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Sc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Jx{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Qx=new Jx;class xa{constructor(e){this.manager=e!==void 0?e:Qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";class e0 extends xa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Sc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=yr("img");function l(){u(),Sc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class t0 extends xa{constructor(e){super(e)}load(e,t,i,r){const s=new ga;s.colorSpace=Fe;const a=new e0(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Ec{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);const yc={type:"change"},Ao={type:"start"},Tc={type:"end"};class n0 extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",oe),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(yc),i.update(),s=r.NONE},this.update=function(){const T=new z,Y=new fi().setFromUnitVectors(e.up,new z(0,1,0)),le=Y.clone().invert(),F=new z,ve=new fi,Ee=new z,ye=2*Math.PI;return function(){const pe=i.object.position;T.copy(pe).sub(i.target),T.applyQuaternion(Y),o.setFromVector3(T),i.autoRotate&&s===r.NONE&&M(P()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let we=i.minAzimuthAngle,ze=i.maxAzimuthAngle;return isFinite(we)&&isFinite(ze)&&(we<-Math.PI?we+=ye:we>Math.PI&&(we-=ye),ze<-Math.PI?ze+=ye:ze>Math.PI&&(ze-=ye),we<=ze?o.theta=Math.max(we,Math.min(ze,o.theta)):o.theta=o.theta>(we+ze)/2?Math.max(we,o.theta):Math.min(ze,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),T.setFromSpherical(o),T.applyQuaternion(le),pe.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||F.distanceToSquared(i.object.position)>a||8*(1-ve.dot(i.object.quaternion))>a||Ee.distanceToSquared(i.target)>0?(i.dispatchEvent(yc),F.copy(i.object.position),ve.copy(i.object.quaternion),Ee.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",x),i.domElement.removeEventListener("pointerdown",w),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",oe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Ec,l=new Ec;let c=1;const u=new z;let f=!1;const d=new ke,m=new ke,v=new ke,_=new ke,p=new ke,h=new ke,C=new ke,S=new ke,E=new ke,b=[],D={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function ee(){return Math.pow(.95,i.zoomSpeed)}function M(T){l.theta-=T}function R(T){l.phi-=T}const ue=function(){const T=new z;return function(le,F){T.setFromMatrixColumn(F,0),T.multiplyScalar(-le),u.add(T)}}(),he=function(){const T=new z;return function(le,F){i.screenSpacePanning===!0?T.setFromMatrixColumn(F,1):(T.setFromMatrixColumn(F,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(le),u.add(T)}}(),H=function(){const T=new z;return function(le,F){const ve=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;T.copy(Ee).sub(i.target);let ye=T.length();ye*=Math.tan(i.object.fov/2*Math.PI/180),ue(2*le*ye/ve.clientHeight,i.object.matrix),he(2*F*ye/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ue(le*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),he(F*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(T){i.object.isPerspectiveCamera?c/=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*T)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(T){i.object.isPerspectiveCamera?c*=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/T)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(T){d.set(T.clientX,T.clientY)}function k(T){C.set(T.clientX,T.clientY)}function W(T){_.set(T.clientX,T.clientY)}function fe(T){m.set(T.clientX,T.clientY),v.subVectors(m,d).multiplyScalar(i.rotateSpeed);const Y=i.domElement;M(2*Math.PI*v.x/Y.clientHeight),R(2*Math.PI*v.y/Y.clientHeight),d.copy(m),i.update()}function ae(T){S.set(T.clientX,T.clientY),E.subVectors(S,C),E.y>0?$(ee()):E.y<0&&J(ee()),C.copy(S),i.update()}function G(T){p.set(T.clientX,T.clientY),h.subVectors(p,_).multiplyScalar(i.panSpeed),H(h.x,h.y),_.copy(p),i.update()}function X(T){T.deltaY<0?J(ee()):T.deltaY>0&&$(ee()),i.update()}function ge(T){let Y=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),Y=!0;break}Y&&(T.preventDefault(),i.update())}function _e(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const T=.5*(b[0].pageX+b[1].pageX),Y=.5*(b[0].pageY+b[1].pageY);d.set(T,Y)}}function Me(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const T=.5*(b[0].pageX+b[1].pageX),Y=.5*(b[0].pageY+b[1].pageY);_.set(T,Y)}}function Ae(){const T=b[0].pageX-b[1].pageX,Y=b[0].pageY-b[1].pageY,le=Math.sqrt(T*T+Y*Y);C.set(0,le)}function Pe(){i.enableZoom&&Ae(),i.enablePan&&Me()}function Re(){i.enableZoom&&Ae(),i.enableRotate&&_e()}function We(T){if(b.length==1)m.set(T.pageX,T.pageY);else{const le=Q(T),F=.5*(T.pageX+le.x),ve=.5*(T.pageY+le.y);m.set(F,ve)}v.subVectors(m,d).multiplyScalar(i.rotateSpeed);const Y=i.domElement;M(2*Math.PI*v.x/Y.clientHeight),R(2*Math.PI*v.y/Y.clientHeight),d.copy(m)}function Qe(T){if(b.length===1)p.set(T.pageX,T.pageY);else{const Y=Q(T),le=.5*(T.pageX+Y.x),F=.5*(T.pageY+Y.y);p.set(le,F)}h.subVectors(p,_).multiplyScalar(i.panSpeed),H(h.x,h.y),_.copy(p)}function Ie(T){const Y=Q(T),le=T.pageX-Y.x,F=T.pageY-Y.y,ve=Math.sqrt(le*le+F*F);S.set(0,ve),E.set(0,Math.pow(S.y/C.y,i.zoomSpeed)),$(E.y),C.copy(S)}function O(T){i.enableZoom&&Ie(T),i.enablePan&&Qe(T)}function A(T){i.enableZoom&&Ie(T),i.enableRotate&&We(T)}function w(T){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",I),i.domElement.addEventListener("pointerup",V)),g(T),T.pointerType==="touch"?ce(T):Z(T))}function I(T){i.enabled!==!1&&(T.pointerType==="touch"?re(T):K(T))}function V(T){U(T),b.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(Tc),s=r.NONE}function Z(T){let Y;switch(T.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case _i.DOLLY:if(i.enableZoom===!1)return;k(T),s=r.DOLLY;break;case _i.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;W(T),s=r.PAN}else{if(i.enableRotate===!1)return;se(T),s=r.ROTATE}break;case _i.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;se(T),s=r.ROTATE}else{if(i.enablePan===!1)return;W(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ao)}function K(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;fe(T);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(T);break;case r.PAN:if(i.enablePan===!1)return;G(T);break}}function ie(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Ao),X(T),i.dispatchEvent(Tc))}function oe(T){i.enabled===!1||i.enablePan===!1||ge(T)}function ce(T){switch(q(T),b.length){case 1:switch(i.touches.ONE){case vi.ROTATE:if(i.enableRotate===!1)return;_e(),s=r.TOUCH_ROTATE;break;case vi.PAN:if(i.enablePan===!1)return;Me(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ao)}function re(T){switch(q(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;We(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Qe(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(T),i.update();break;default:s=r.NONE}}function x(T){i.enabled!==!1&&T.preventDefault()}function g(T){b.push(T)}function U(T){delete D[T.pointerId];for(let Y=0;Y<b.length;Y++)if(b[Y].pointerId==T.pointerId){b.splice(Y,1);return}}function q(T){let Y=D[T.pointerId];Y===void 0&&(Y=new ke,D[T.pointerId]=Y),Y.set(T.pageX,T.pageY)}function Q(T){const Y=T.pointerId===b[0].pointerId?b[1]:b[0];return D[Y.pointerId]}i.domElement.addEventListener("contextmenu",x),i.domElement.addEventListener("pointerdown",w),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}const i0={rotateSpeed:.3,enablePan:!1,enableRotate:!0,cameraFov:100};class r0 extends EventTarget{constructor(t,i={}){super();wn(this,"raf",null);wn(this,"camera");wn(this,"scene");wn(this,"renderer");wn(this,"controls");wn(this,"container");wn(this,"options");this.container=t,this.updateOptions({...i0,...i})}init(t,i="png",r={}){if(this.raf!==null)return;const s=["panorama_1","panorama_3","panorama_4","panorama_5","panorama_0","panorama_2"].map(o=>`${t.replace(/\/$/,"")}/${o}.${i}`);this.camera=new Gt(this.options.cameraFov,window.innerWidth/window.innerHeight,.1),this.cameraPosition(.2,.2,-1),this.scene=new Zx,this.scene.add(this.camera),new t0().load(s,async o=>{this.dispatchEvent(new Event("load")),this.scene.background=o}),this.renderer=new uf({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.controls=new n0(this.camera,this.renderer.domElement),this.controls.enablePan=!1,this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.render=this.render.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),this.render(),this.updateOptions(r)}dispose(){this.raf!==null&&(window.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf),this.raf=null,this.renderer.domElement.remove())}updateOptions(t){if(this.options={...this.options,...t},this.raf!==null){const{cameraFov:i,enablePan:r,enableRotate:s,rotateSpeed:a}=this.options;this.camera.fov=i,this.controls.enabled=r,this.controls.autoRotate=s,this.controls.autoRotateSpeed=a}}cameraPosition(t,i,r){this.camera.position.set(t,i,r)}render(){this.raf=requestAnimationFrame(this.render),this.controls.update(),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}const s0=["disabled"],o0=["value"],a0=hh({__name:"app",setup(n){const e=Pa("1.15"),t=["classic","1.13","1.13b","1.14","1.14b","1.15","1.16","1.17","1.18","1.19","1.20","24w14potato","1.21","1.21.4","holiday2017b","halloween21","halloween22"],i=Pa(!1),r=dh("panoramaRef"),s=$c();return lu(()=>{r.value&&(s.value=new r0(r.value),s.value.addEventListener("load",()=>i.value=!0),s.value.init(`images/${e.value}`))}),ca(()=>{s.value&&s.value.dispose()}),ss(e,a=>{s.value&&(i.value=!1,s.value.dispose(),s.value.init(`images/${a}`))}),(a,o)=>(za(),Va(jt,null,[Da(dr("div",{ref_key:"panoramaRef",ref:r,class:"panorama"},null,512),[[Td,i.value]]),Da(dr("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),class:"version",disabled:!i.value},[(za(),Va(jt,null,Ah(t,l=>dr("option",{key:l,value:l},Uc(l),9,o0)),64))],8,s0),[[Bd,e.value]])],64))}});Gd(a0).mount("#app");
