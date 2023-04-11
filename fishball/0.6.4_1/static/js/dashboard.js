import{R as c,r as v,c as Qe,W as Q,d as os,A as ls}from"./chunk-19c1a2bd.js";import{k as kt,_ as w,O as Oa,o as zi,y as Ui,z as ss,s as le,g as L,c as H,B as us,r as Er,P as cs,Q as ds,R as ae,a as z,W as ps,S as jt,U as Wi,V as fs,e as ms,C as qe,b as $e,A as gs,X as qi,Y as vs,Z as hs,M as Gn,$ as Ki,v as it,a0 as bs,a1 as xs,a2 as ys,a3 as Es,f as Cs,h as Ds,i as Ss}from"./chunk-31319f41.js";import{u as de,j as Fe,b as zt,c as Ut,d as Wt,e as qt,f as lt,r as Kt,g as Yi,I as ws,s as _i,T as _e,M as jn,S as zn,a as Ji,h as Is,k as As,l as Os,n as Xi,L as dt,O as Fs,R as Ps,m as We,o as Rs,p as Ms,q as Ts,P as Bs,F as Ns}from"./chunk-f316eabd.js";import{I as Zi,_ as xt,a as yt,b as ks,M as st,k as Ls,j as $,C as Vs,c as Qi,d as Un,u as In,S as Fa,e as eo,f as $s,P as Et,g as Ye,h as to,r as Lr}from"./chunk-9710b720.js";import{s as Ke,r as xr,g as we}from"./chunk-7a2a1854.js";import{g as Wn}from"./chunk-4e43f09b.js";function gt(e){return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(e)}function Hs(e,t){if(gt(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(gt(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ro(e){var t=Hs(e,"string");return gt(t)==="symbol"?t:String(t)}function Ve(e,t,r){return t=ro(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pa(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function Ra(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pa(Object(r),!0).forEach(function(a){Ve(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pa(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ye(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ma=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),an=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ta={INIT:"@@redux/INIT"+an(),REPLACE:"@@redux/REPLACE"+an(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+an()}};function Gs(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function no(e,t,r){var a;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(ye(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(ye(1));return r(no)(e,t)}if(typeof e!="function")throw new Error(ye(2));var n=e,i=t,o=[],l=o,s=!1;function u(){l===o&&(l=o.slice())}function d(){if(s)throw new Error(ye(3));return i}function p(h){if(typeof h!="function")throw new Error(ye(4));if(s)throw new Error(ye(5));var b=!0;return u(),l.push(h),function(){if(!!b){if(s)throw new Error(ye(6));b=!1,u();var y=l.indexOf(h);l.splice(y,1),o=null}}}function f(h){if(!Gs(h))throw new Error(ye(7));if(typeof h.type>"u")throw new Error(ye(8));if(s)throw new Error(ye(9));try{s=!0,i=n(i,h)}finally{s=!1}for(var b=o=l,x=0;x<b.length;x++){var y=b[x];y()}return h}function m(h){if(typeof h!="function")throw new Error(ye(10));n=h,f({type:Ta.REPLACE})}function g(){var h,b=p;return h={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(ye(11));function C(){y.next&&y.next(d())}C();var E=b(C);return{unsubscribe:E}}},h[Ma]=function(){return this},h}return f({type:Ta.INIT}),a={dispatch:f,subscribe:p,getState:d,replaceReducer:m},a[Ma]=g,a}function Ba(e,t){return function(){return t(e.apply(this,arguments))}}function Na(e,t){if(typeof e=="function")return Ba(e,t);if(typeof e!="object"||e===null)throw new Error(ye(16));var r={};for(var a in e){var n=e[a];typeof n=="function"&&(r[a]=Ba(n,t))}return r}function ao(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return a}:t.length===1?t[0]:t.reduce(function(a,n){return function(){return a(n.apply(void 0,arguments))}})}function js(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(a){return function(){var n=a.apply(void 0,arguments),i=function(){throw new Error(ye(15))},o={getState:n.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(o)});return i=ao.apply(void 0,l)(n.dispatch),Ra(Ra({},n),{},{dispatch:i})}}}var io=c.createContext(null);function zs(e){e()}var oo=zs,Us=function(t){return oo=t},Ws=function(){return oo};function qs(){var e=Ws(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e(function(){for(var n=t;n;)n.callback(),n=n.next})},get:function(){for(var n=[],i=t;i;)n.push(i),i=i.next;return n},subscribe:function(n){var i=!0,o=r={callback:n,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var ka={notify:function(){},get:function(){return[]}};function lo(e,t){var r,a=ka;function n(p){return s(),a.subscribe(p)}function i(){a.notify()}function o(){d.onStateChange&&d.onStateChange()}function l(){return Boolean(r)}function s(){r||(r=t?t.addNestedSub(o):e.subscribe(o),a=qs())}function u(){r&&(r(),r=void 0,a.clear(),a=ka)}var d={addNestedSub:n,notifyNestedSubs:i,handleChangeWrapper:o,isSubscribed:l,trySubscribe:s,tryUnsubscribe:u,getListeners:function(){return a}};return d}var so=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?v.exports.useLayoutEffect:v.exports.useEffect;function Ks(e){var t=e.store,r=e.context,a=e.children,n=v.exports.useMemo(function(){var l=lo(t);return{store:t,subscription:l}},[t]),i=v.exports.useMemo(function(){return t.getState()},[t]);so(function(){var l=n.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),i!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[n,i]);var o=r||io;return c.createElement(o.Provider,{value:n},a)}var uo={exports:{}},re={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=60103,$r=60106,Yt=60107,_t=60108,Jt=60114,Xt=60109,Zt=60110,Qt=60112,er=60113,qn=60120,tr=60115,rr=60116,co=60121,po=60122,fo=60117,mo=60129,go=60131;if(typeof Symbol=="function"&&Symbol.for){var me=Symbol.for;Vr=me("react.element"),$r=me("react.portal"),Yt=me("react.fragment"),_t=me("react.strict_mode"),Jt=me("react.profiler"),Xt=me("react.provider"),Zt=me("react.context"),Qt=me("react.forward_ref"),er=me("react.suspense"),qn=me("react.suspense_list"),tr=me("react.memo"),rr=me("react.lazy"),co=me("react.block"),po=me("react.server.block"),fo=me("react.fundamental"),mo=me("react.debug_trace_mode"),go=me("react.legacy_hidden")}function Ge(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vr:switch(e=e.type,e){case Yt:case Jt:case _t:case er:case qn:return e;default:switch(e=e&&e.$$typeof,e){case Zt:case Qt:case rr:case tr:case Xt:return e;default:return t}}case $r:return t}}}var Ys=Xt,_s=Vr,Js=Qt,Xs=Yt,Zs=rr,Qs=tr,eu=$r,tu=Jt,ru=_t,nu=er;re.ContextConsumer=Zt;re.ContextProvider=Ys;re.Element=_s;re.ForwardRef=Js;re.Fragment=Xs;re.Lazy=Zs;re.Memo=Qs;re.Portal=eu;re.Profiler=tu;re.StrictMode=ru;re.Suspense=nu;re.isAsyncMode=function(){return!1};re.isConcurrentMode=function(){return!1};re.isContextConsumer=function(e){return Ge(e)===Zt};re.isContextProvider=function(e){return Ge(e)===Xt};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr};re.isForwardRef=function(e){return Ge(e)===Qt};re.isFragment=function(e){return Ge(e)===Yt};re.isLazy=function(e){return Ge(e)===rr};re.isMemo=function(e){return Ge(e)===tr};re.isPortal=function(e){return Ge(e)===$r};re.isProfiler=function(e){return Ge(e)===Jt};re.isStrictMode=function(e){return Ge(e)===_t};re.isSuspense=function(e){return Ge(e)===er};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yt||e===Jt||e===mo||e===_t||e===er||e===qn||e===go||typeof e=="object"&&e!==null&&(e.$$typeof===rr||e.$$typeof===tr||e.$$typeof===Xt||e.$$typeof===Zt||e.$$typeof===Qt||e.$$typeof===fo||e.$$typeof===co||e[0]===po)};re.typeOf=Ge;(function(e){e.exports=re})(uo);var au=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],iu=["reactReduxForwardedRef"],ou=[],lu=[null,null];function su(e,t){var r=e[1];return[t.payload,r+1]}function La(e,t,r){so(function(){return e.apply(void 0,t)},r)}function uu(e,t,r,a,n,i,o){e.current=a,t.current=n,r.current=!1,i.current&&(i.current=null,o())}function cu(e,t,r,a,n,i,o,l,s,u){if(!!e){var d=!1,p=null,f=function(){if(!d){var h=t.getState(),b,x;try{b=a(h,n.current)}catch(y){x=y,p=y}x||(p=null),b===i.current?o.current||s():(i.current=b,l.current=b,o.current=!0,u({type:"STORE_UPDATED",payload:{error:x}}))}};r.onStateChange=f,r.trySubscribe(),f();var m=function(){if(d=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p};return m}}var du=function(){return[null,0]};function pu(e,t){t===void 0&&(t={});var r=t,a=r.getDisplayName,n=a===void 0?function(C){return"ConnectAdvanced("+C+")"}:a,i=r.methodName,o=i===void 0?"connectAdvanced":i,l=r.renderCountProp,s=l===void 0?void 0:l,u=r.shouldHandleStateChanges,d=u===void 0?!0:u,p=r.storeKey,f=p===void 0?"store":p;r.withRef;var m=r.forwardRef,g=m===void 0?!1:m,h=r.context,b=h===void 0?io:h,x=kt(r,au),y=b;return function(E){var I=E.displayName||E.name||"Component",D=n(I),P=w({},x,{getDisplayName:n,methodName:o,renderCountProp:s,shouldHandleStateChanges:d,storeKey:f,displayName:D,wrappedComponentName:I,WrappedComponent:E}),F=x.pure;function M(N){return e(N.dispatch,P)}var S=F?v.exports.useMemo:function(N){return N()};function A(N){var R=v.exports.useMemo(function(){var be=N.reactReduxForwardedRef,ue=kt(N,iu);return[N.context,be,ue]},[N]),G=R[0],K=R[1],Y=R[2],ee=v.exports.useMemo(function(){return G&&G.Consumer&&uo.exports.isContextConsumer(c.createElement(G.Consumer,null))?G:y},[G,y]),X=v.exports.useContext(ee),ne=Boolean(N.store)&&Boolean(N.store.getState)&&Boolean(N.store.dispatch);Boolean(X)&&Boolean(X.store);var W=ne?N.store:X.store,te=v.exports.useMemo(function(){return M(W)},[W]),se=v.exports.useMemo(function(){if(!d)return lu;var be=lo(W,ne?null:X.subscription),ue=be.notifyNestedSubs.bind(be);return[be,ue]},[W,ne,X]),q=se[0],j=se[1],_=v.exports.useMemo(function(){return ne?X:w({},X,{subscription:q})},[ne,X,q]),ie=v.exports.useReducer(su,ou,du),Ee=ie[0],Ce=Ee[0],Ne=ie[1];if(Ce&&Ce.error)throw Ce.error;var ke=v.exports.useRef(),he=v.exports.useRef(Y),De=v.exports.useRef(),Se=v.exports.useRef(!1),je=S(function(){return De.current&&Y===he.current?De.current:te(W.getState(),Y)},[W,Ce,Y]);La(uu,[he,ke,Se,Y,je,De,j]),La(cu,[d,W,q,te,he,ke,Se,De,j,Ne],[W,q,te]);var rt=v.exports.useMemo(function(){return c.createElement(E,w({},je,{ref:K}))},[K,E,je]),Ue=v.exports.useMemo(function(){return d?c.createElement(ee.Provider,{value:_},rt):rt},[ee,rt,_]);return Ue}var T=F?c.memo(A):A;if(T.WrappedComponent=E,T.displayName=A.displayName=D,g){var B=c.forwardRef(function(R,G){return c.createElement(T,w({},R,{reactReduxForwardedRef:G}))});return B.displayName=D,B.WrappedComponent=E,Oa(B,E)}return Oa(T,E)}}function Va(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function on(e,t){if(Va(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(var n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Va(e[r[n]],t[r[n]]))return!1;return!0}function fu(e,t){var r={},a=function(o){var l=e[o];typeof l=="function"&&(r[o]=function(){return t(l.apply(void 0,arguments))})};for(var n in e)a(n);return r}function Kn(e){return function(r,a){var n=e(r,a);function i(){return n}return i.dependsOnOwnProps=!1,i}}function $a(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?Boolean(e.dependsOnOwnProps):e.length!==1}function vo(e,t){return function(a,n){n.displayName;var i=function(l,s){return i.dependsOnOwnProps?i.mapToProps(l,s):i.mapToProps(l)};return i.dependsOnOwnProps=!0,i.mapToProps=function(l,s){i.mapToProps=e,i.dependsOnOwnProps=$a(e);var u=i(l,s);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=$a(u),u=i(l,s)),u},i}}function mu(e){return typeof e=="function"?vo(e):void 0}function gu(e){return e?void 0:Kn(function(t){return{dispatch:t}})}function vu(e){return e&&typeof e=="object"?Kn(function(t){return fu(e,t)}):void 0}const hu=[mu,gu,vu];function bu(e){return typeof e=="function"?vo(e):void 0}function xu(e){return e?void 0:Kn(function(){return{}})}const yu=[bu,xu];function Eu(e,t,r){return w({},r,e,t)}function Cu(e){return function(r,a){a.displayName;var n=a.pure,i=a.areMergedPropsEqual,o=!1,l;return function(u,d,p){var f=e(u,d,p);return o?(!n||!i(f,l))&&(l=f):(o=!0,l=f),l}}}function Du(e){return typeof e=="function"?Cu(e):void 0}function Su(e){return e?void 0:function(){return Eu}}const wu=[Du,Su];var Iu=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Au(e,t,r,a){return function(i,o){return r(e(i,o),t(a,o),o)}}function Ou(e,t,r,a,n){var i=n.areStatesEqual,o=n.areOwnPropsEqual,l=n.areStatePropsEqual,s=!1,u,d,p,f,m;function g(C,E){return u=C,d=E,p=e(u,d),f=t(a,d),m=r(p,f,d),s=!0,m}function h(){return p=e(u,d),t.dependsOnOwnProps&&(f=t(a,d)),m=r(p,f,d),m}function b(){return e.dependsOnOwnProps&&(p=e(u,d)),t.dependsOnOwnProps&&(f=t(a,d)),m=r(p,f,d),m}function x(){var C=e(u,d),E=!l(C,p);return p=C,E&&(m=r(p,f,d)),m}function y(C,E){var I=!o(E,d),D=!i(C,u,E,d);return u=C,d=E,I&&D?h():I?b():D?x():m}return function(E,I){return s?y(E,I):g(E,I)}}function Fu(e,t){var r=t.initMapStateToProps,a=t.initMapDispatchToProps,n=t.initMergeProps,i=kt(t,Iu),o=r(e,i),l=a(e,i),s=n(e,i),u=i.pure?Ou:Au;return u(o,l,s,e,i)}var Pu=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function ln(e,t,r){for(var a=t.length-1;a>=0;a--){var n=t[a](e);if(n)return n}return function(i,o){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+o.wrappedComponentName+".")}}function Ru(e,t){return e===t}function Mu(e){var t=e===void 0?{}:e,r=t.connectHOC,a=r===void 0?pu:r,n=t.mapStateToPropsFactories,i=n===void 0?yu:n,o=t.mapDispatchToPropsFactories,l=o===void 0?hu:o,s=t.mergePropsFactories,u=s===void 0?wu:s,d=t.selectorFactory,p=d===void 0?Fu:d;return function(m,g,h,b){b===void 0&&(b={});var x=b,y=x.pure,C=y===void 0?!0:y,E=x.areStatesEqual,I=E===void 0?Ru:E,D=x.areOwnPropsEqual,P=D===void 0?on:D,F=x.areStatePropsEqual,M=F===void 0?on:F,S=x.areMergedPropsEqual,A=S===void 0?on:S,T=kt(x,Pu),B=ln(m,i,"mapStateToProps"),N=ln(g,l,"mapDispatchToProps"),R=ln(h,u,"mergeProps");return a(p,w({methodName:"connect",getDisplayName:function(K){return"Connect("+K+")"},shouldHandleStateChanges:Boolean(m),initMapStateToProps:B,initMapDispatchToProps:N,initMergeProps:R,pure:C,areStatesEqual:I,areOwnPropsEqual:P,areStatePropsEqual:M,areMergedPropsEqual:A},T))}}const ho=Mu();Us(zi.exports.unstable_batchedUpdates);function Tu(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function bo(e,t){var r=v.exports.useState(function(){return{inputs:t,result:e()}})[0],a=v.exports.useRef(!0),n=v.exports.useRef(r),i=a.current||Boolean(t&&n.current.inputs&&Tu(t,n.current.inputs)),o=i?n.current:{inputs:t,result:e()};return v.exports.useEffect(function(){a.current=!1,n.current=o},[o]),o.result}function Bu(e,t){return bo(function(){return e},t)}var J=bo,V=Bu,Nu=!0,sn="Invariant failed";function ku(e,t){if(!e){if(Nu)throw new Error(sn);var r=typeof t=="function"?t():t,a=r?"".concat(sn,": ").concat(r):sn;throw new Error(a)}}var He=function(t){var r=t.top,a=t.right,n=t.bottom,i=t.left,o=a-i,l=n-r,s={top:r,right:a,bottom:n,left:i,width:o,height:l,x:i,y:r,center:{x:(a+i)/2,y:(n+r)/2}};return s},Yn=function(t,r){return{top:t.top-r.top,left:t.left-r.left,bottom:t.bottom+r.bottom,right:t.right+r.right}},Ha=function(t,r){return{top:t.top+r.top,left:t.left+r.left,bottom:t.bottom-r.bottom,right:t.right-r.right}},Lu=function(t,r){return{top:t.top+r.y,left:t.left+r.x,bottom:t.bottom+r.y,right:t.right+r.x}},un={top:0,right:0,bottom:0,left:0},_n=function(t){var r=t.borderBox,a=t.margin,n=a===void 0?un:a,i=t.border,o=i===void 0?un:i,l=t.padding,s=l===void 0?un:l,u=He(Yn(r,n)),d=He(Ha(r,o)),p=He(Ha(d,s));return{marginBox:u,borderBox:He(r),paddingBox:d,contentBox:p,margin:n,border:o,padding:s}},Pe=function(t){var r=t.slice(0,-2),a=t.slice(-2);if(a!=="px")return 0;var n=Number(r);return isNaN(n)&&ku(!1),n},Vu=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Cr=function(t,r){var a=t.borderBox,n=t.border,i=t.margin,o=t.padding,l=Lu(a,r);return _n({borderBox:l,border:n,margin:i,padding:o})},Dr=function(t,r){return r===void 0&&(r=Vu()),Cr(t,r)},xo=function(t,r){var a={top:Pe(r.marginTop),right:Pe(r.marginRight),bottom:Pe(r.marginBottom),left:Pe(r.marginLeft)},n={top:Pe(r.paddingTop),right:Pe(r.paddingRight),bottom:Pe(r.paddingBottom),left:Pe(r.paddingLeft)},i={top:Pe(r.borderTopWidth),right:Pe(r.borderRightWidth),bottom:Pe(r.borderBottomWidth),left:Pe(r.borderLeftWidth)};return _n({borderBox:t,margin:a,padding:n,border:i})},yo=function(t){var r=t.getBoundingClientRect(),a=window.getComputedStyle(t);return xo(r,a)},Ga=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function $u(e,t){return!!(e===t||Ga(e)&&Ga(t))}function Hu(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!$u(e[r],t[r]))return!1;return!0}function ce(e,t){t===void 0&&(t=Hu);var r,a=[],n,i=!1;function o(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&r===this&&t(l,a)||(n=e.apply(this,l),i=!0,r=this,a=l),n}return o}var Gu=function(t){var r=[],a=null,n=function(){for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];r=l,!a&&(a=requestAnimationFrame(function(){a=null,t.apply(void 0,r)}))};return n.cancel=function(){!a||(cancelAnimationFrame(a),a=null)},n};const Lt=Gu;function Eo(e,t){}Eo.bind(null,"warn");Eo.bind(null,"error");function Je(){}function ju(e,t){return w({},e,{},t)}function Te(e,t,r){var a=t.map(function(n){var i=ju(r,n.options);return e.addEventListener(n.eventName,n.fn,i),function(){e.removeEventListener(n.eventName,n.fn,i)}});return function(){a.forEach(function(i){i()})}}var zu="Invariant failed";function Sr(e){this.message=e}Sr.prototype.toString=function(){return this.message};function O(e,t){if(!e)throw new Sr(zu)}var Uu=function(e){Ui(t,e);function t(){for(var a,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=e.call.apply(e,[this].concat(i))||this,a.callbacks=null,a.unbind=Je,a.onWindowError=function(l){var s=a.getCallbacks();s.isDragging()&&s.tryAbort();var u=l.error;u instanceof Sr&&l.preventDefault()},a.getCallbacks=function(){if(!a.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return a.callbacks},a.setCallbacks=function(l){a.callbacks=l},a}var r=t.prototype;return r.componentDidMount=function(){this.unbind=Te(window,[{eventName:"error",fn:this.onWindowError}])},r.componentDidCatch=function(n){if(n instanceof Sr){this.setState({});return}throw n},r.componentWillUnmount=function(){this.unbind()},r.render=function(){return this.props.children(this.setCallbacks)},t}(c.Component),Wu=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,wr=function(t){return t+1},qu=function(t){return`
  You have lifted an item in position `+wr(t.source.index)+`
`},Co=function(t,r){var a=t.droppableId===r.droppableId,n=wr(t.index),i=wr(r.index);return a?`
      You have moved the item from position `+n+`
      to position `+i+`
    `:`
    You have moved the item from position `+n+`
    in list `+t.droppableId+`
    to list `+r.droppableId+`
    in position `+i+`
  `},Do=function(t,r,a){var n=r.droppableId===a.droppableId;return n?`
      The item `+t+`
      has been combined with `+a.draggableId:`
      The item `+t+`
      in list `+r.droppableId+`
      has been combined with `+a.draggableId+`
      in list `+a.droppableId+`
    `},Ku=function(t){var r=t.destination;if(r)return Co(t.source,r);var a=t.combine;return a?Do(t.draggableId,t.source,a):"You are over an area that cannot be dropped on"},ja=function(t){return`
  The item has returned to its starting position
  of `+wr(t.index)+`
`},Yu=function(t){if(t.reason==="CANCEL")return`
      Movement cancelled.
      `+ja(t.source)+`
    `;var r=t.destination,a=t.combine;return r?`
      You have dropped the item.
      `+Co(t.source,r)+`
    `:a?`
      You have dropped the item.
      `+Do(t.draggableId,t.source,a)+`
    `:`
    The item has been dropped while not over a drop area.
    `+ja(t.source)+`
  `},yr={dragHandleUsageInstructions:Wu,onDragStart:qu,onDragUpdate:Ku,onDragEnd:Yu},pe={x:0,y:0},ge=function(t,r){return{x:t.x+r.x,y:t.y+r.y}},Ie=function(t,r){return{x:t.x-r.x,y:t.y-r.y}},Xe=function(t,r){return t.x===r.x&&t.y===r.y},Ct=function(t){return{x:t.x!==0?-t.x:0,y:t.y!==0?-t.y:0}},ot=function(t,r,a){var n;return a===void 0&&(a=0),n={},n[t]=r,n[t==="x"?"y":"x"]=a,n},Vt=function(t,r){return Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))},za=function(t,r){return Math.min.apply(Math,r.map(function(a){return Vt(t,a)}))},So=function(t){return function(r){return{x:t(r.x),y:t(r.y)}}},_u=function(e,t){var r=He({top:Math.max(t.top,e.top),right:Math.min(t.right,e.right),bottom:Math.min(t.bottom,e.bottom),left:Math.max(t.left,e.left)});return r.width<=0||r.height<=0?null:r},nr=function(t,r){return{top:t.top+r.y,left:t.left+r.x,bottom:t.bottom+r.y,right:t.right+r.x}},Ua=function(t){return[{x:t.left,y:t.top},{x:t.right,y:t.top},{x:t.left,y:t.bottom},{x:t.right,y:t.bottom}]},Ju={top:0,right:0,bottom:0,left:0},Xu=function(t,r){return r?nr(t,r.scroll.diff.displacement):t},Zu=function(t,r,a){if(a&&a.increasedBy){var n;return w({},t,(n={},n[r.end]=t[r.end]+a.increasedBy[r.line],n))}return t},Qu=function(t,r){return r&&r.shouldClipSubject?_u(r.pageMarginBox,t):He(t)},vt=function(e){var t=e.page,r=e.withPlaceholder,a=e.axis,n=e.frame,i=Xu(t.marginBox,n),o=Zu(i,a,r),l=Qu(o,n);return{page:t,withPlaceholder:r,active:l}},Jn=function(e,t){e.frame||O(!1);var r=e.frame,a=Ie(t,r.scroll.initial),n=Ct(a),i=w({},r,{scroll:{initial:r.scroll.initial,current:t,diff:{value:a,displacement:n},max:r.scroll.max}}),o=vt({page:e.subject.page,withPlaceholder:e.subject.withPlaceholder,axis:e.axis,frame:i}),l=w({},e,{frame:i,subject:o});return l};function Ir(e){return Object.values?Object.values(e):Object.keys(e).map(function(t){return e[t]})}function Xn(e,t){if(e.findIndex)return e.findIndex(t);for(var r=0;r<e.length;r++)if(t(e[r]))return r;return-1}function tt(e,t){if(e.find)return e.find(t);var r=Xn(e,t);if(r!==-1)return e[r]}function wo(e){return Array.prototype.slice.call(e)}var Io=ce(function(e){return e.reduce(function(t,r){return t[r.descriptor.id]=r,t},{})}),Ao=ce(function(e){return e.reduce(function(t,r){return t[r.descriptor.id]=r,t},{})}),Hr=ce(function(e){return Ir(e)}),ec=ce(function(e){return Ir(e)}),Dt=ce(function(e,t){var r=ec(t).filter(function(a){return e===a.descriptor.droppableId}).sort(function(a,n){return a.descriptor.index-n.descriptor.index});return r});function Zn(e){return e.at&&e.at.type==="REORDER"?e.at.destination:null}function Gr(e){return e.at&&e.at.type==="COMBINE"?e.at.combine:null}var jr=ce(function(e,t){return t.filter(function(r){return r.descriptor.id!==e.descriptor.id})}),tc=function(e){var t=e.isMovingForward,r=e.draggable,a=e.destination,n=e.insideDestination,i=e.previousImpact;if(!a.isCombineEnabled)return null;var o=Zn(i);if(!o)return null;function l(h){var b={type:"COMBINE",combine:{draggableId:h,droppableId:a.descriptor.id}};return w({},i,{at:b})}var s=i.displaced.all,u=s.length?s[0]:null;if(t)return u?l(u):null;var d=jr(r,n);if(!u){if(!d.length)return null;var p=d[d.length-1];return l(p.descriptor.id)}var f=Xn(d,function(h){return h.descriptor.id===u});f===-1&&O(!1);var m=f-1;if(m<0)return null;var g=d[m];return l(g.descriptor.id)},St=function(e,t){return e.descriptor.droppableId===t.descriptor.id},Oo={point:pe,value:0},$t={invisible:{},visible:{},all:[]},rc={displaced:$t,displacedBy:Oo,at:null},Be=function(e,t){return function(r){return e<=r&&r<=t}},Fo=function(e){var t=Be(e.top,e.bottom),r=Be(e.left,e.right);return function(a){var n=t(a.top)&&t(a.bottom)&&r(a.left)&&r(a.right);if(n)return!0;var i=t(a.top)||t(a.bottom),o=r(a.left)||r(a.right),l=i&&o;if(l)return!0;var s=a.top<e.top&&a.bottom>e.bottom,u=a.left<e.left&&a.right>e.right,d=s&&u;if(d)return!0;var p=s&&o||u&&i;return p}},nc=function(e){var t=Be(e.top,e.bottom),r=Be(e.left,e.right);return function(a){var n=t(a.top)&&t(a.bottom)&&r(a.left)&&r(a.right);return n}},Qn={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},Po={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},ac=function(e){return function(t){var r=Be(t.top,t.bottom),a=Be(t.left,t.right);return function(n){return e===Qn?r(n.top)&&r(n.bottom):a(n.left)&&a(n.right)}}},ic=function(t,r){var a=r.frame?r.frame.scroll.diff.displacement:pe;return nr(t,a)},oc=function(t,r,a){return r.subject.active?a(r.subject.active)(t):!1},lc=function(t,r,a){return a(r)(t)},ea=function(t){var r=t.target,a=t.destination,n=t.viewport,i=t.withDroppableDisplacement,o=t.isVisibleThroughFrameFn,l=i?ic(r,a):r;return oc(l,a,o)&&lc(l,n,o)},sc=function(t){return ea(w({},t,{isVisibleThroughFrameFn:Fo}))},Ro=function(t){return ea(w({},t,{isVisibleThroughFrameFn:nc}))},uc=function(t){return ea(w({},t,{isVisibleThroughFrameFn:ac(t.destination.axis)}))},cc=function(t,r,a){if(typeof a=="boolean")return a;if(!r)return!0;var n=r.invisible,i=r.visible;if(n[t])return!1;var o=i[t];return o?o.shouldAnimate:!0};function dc(e,t){var r=e.page.marginBox,a={top:t.point.y,right:0,bottom:0,left:t.point.x};return He(Yn(r,a))}function Ht(e){var t=e.afterDragging,r=e.destination,a=e.displacedBy,n=e.viewport,i=e.forceShouldAnimate,o=e.last;return t.reduce(function(s,u){var d=dc(u,a),p=u.descriptor.id;s.all.push(p);var f=sc({target:d,destination:r,viewport:n,withDroppableDisplacement:!0});if(!f)return s.invisible[u.descriptor.id]=!0,s;var m=cc(p,o,i),g={draggableId:p,shouldAnimate:m};return s.visible[p]=g,s},{all:[],visible:{},invisible:{}})}function pc(e,t){if(!e.length)return 0;var r=e[e.length-1].descriptor.index;return t.inHomeList?r:r+1}function Wa(e){var t=e.insideDestination,r=e.inHomeList,a=e.displacedBy,n=e.destination,i=pc(t,{inHomeList:r});return{displaced:$t,displacedBy:a,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:i}}}}function Ar(e){var t=e.draggable,r=e.insideDestination,a=e.destination,n=e.viewport,i=e.displacedBy,o=e.last,l=e.index,s=e.forceShouldAnimate,u=St(t,a);if(l==null)return Wa({insideDestination:r,inHomeList:u,displacedBy:i,destination:a});var d=tt(r,function(h){return h.descriptor.index===l});if(!d)return Wa({insideDestination:r,inHomeList:u,displacedBy:i,destination:a});var p=jr(t,r),f=r.indexOf(d),m=p.slice(f),g=Ht({afterDragging:m,destination:a,displacedBy:i,last:o,viewport:n.frame,forceShouldAnimate:s});return{displaced:g,displacedBy:i,at:{type:"REORDER",destination:{droppableId:a.descriptor.id,index:l}}}}function et(e,t){return Boolean(t.effected[e])}var fc=function(e){var t=e.isMovingForward,r=e.destination,a=e.draggables,n=e.combine,i=e.afterCritical;if(!r.isCombineEnabled)return null;var o=n.draggableId,l=a[o],s=l.descriptor.index,u=et(o,i);return u?t?s:s-1:t?s+1:s},mc=function(e){var t=e.isMovingForward,r=e.isInHomeList,a=e.insideDestination,n=e.location;if(!a.length)return null;var i=n.index,o=t?i+1:i-1,l=a[0].descriptor.index,s=a[a.length-1].descriptor.index,u=r?s:s+1;return o<l||o>u?null:o},gc=function(e){var t=e.isMovingForward,r=e.isInHomeList,a=e.draggable,n=e.draggables,i=e.destination,o=e.insideDestination,l=e.previousImpact,s=e.viewport,u=e.afterCritical,d=l.at;if(d||O(!1),d.type==="REORDER"){var p=mc({isMovingForward:t,isInHomeList:r,location:d.destination,insideDestination:o});return p==null?null:Ar({draggable:a,insideDestination:o,destination:i,viewport:s,last:l.displaced,displacedBy:l.displacedBy,index:p})}var f=fc({isMovingForward:t,destination:i,displaced:l.displaced,draggables:n,combine:d.combine,afterCritical:u});return f==null?null:Ar({draggable:a,insideDestination:o,destination:i,viewport:s,last:l.displaced,displacedBy:l.displacedBy,index:f})},vc=function(e){var t=e.displaced,r=e.afterCritical,a=e.combineWith,n=e.displacedBy,i=Boolean(t.visible[a]||t.invisible[a]);return et(a,r)?i?pe:Ct(n.point):i?n.point:pe},hc=function(e){var t=e.afterCritical,r=e.impact,a=e.draggables,n=Gr(r);n||O(!1);var i=n.draggableId,o=a[i].page.borderBox.center,l=vc({displaced:r.displaced,afterCritical:t,combineWith:i,displacedBy:r.displacedBy});return ge(o,l)},Mo=function(t,r){return r.margin[t.start]+r.borderBox[t.size]/2},bc=function(t,r){return r.margin[t.end]+r.borderBox[t.size]/2},ta=function(t,r,a){return r[t.crossAxisStart]+a.margin[t.crossAxisStart]+a.borderBox[t.crossAxisSize]/2},qa=function(t){var r=t.axis,a=t.moveRelativeTo,n=t.isMoving;return ot(r.line,a.marginBox[r.end]+Mo(r,n),ta(r,a.marginBox,n))},Ka=function(t){var r=t.axis,a=t.moveRelativeTo,n=t.isMoving;return ot(r.line,a.marginBox[r.start]-bc(r,n),ta(r,a.marginBox,n))},xc=function(t){var r=t.axis,a=t.moveInto,n=t.isMoving;return ot(r.line,a.contentBox[r.start]+Mo(r,n),ta(r,a.contentBox,n))},yc=function(e){var t=e.impact,r=e.draggable,a=e.draggables,n=e.droppable,i=e.afterCritical,o=Dt(n.descriptor.id,a),l=r.page,s=n.axis;if(!o.length)return xc({axis:s,moveInto:n.page,isMoving:l});var u=t.displaced,d=t.displacedBy,p=u.all[0];if(p){var f=a[p];if(et(p,i))return Ka({axis:s,moveRelativeTo:f.page,isMoving:l});var m=Cr(f.page,d.point);return Ka({axis:s,moveRelativeTo:m,isMoving:l})}var g=o[o.length-1];if(g.descriptor.id===r.descriptor.id)return l.borderBox.center;if(et(g.descriptor.id,i)){var h=Cr(g.page,Ct(i.displacedBy.point));return qa({axis:s,moveRelativeTo:h,isMoving:l})}return qa({axis:s,moveRelativeTo:g.page,isMoving:l})},An=function(e,t){var r=e.frame;return r?ge(t,r.scroll.diff.displacement):t},Ec=function(t){var r=t.impact,a=t.draggable,n=t.droppable,i=t.draggables,o=t.afterCritical,l=a.page.borderBox.center,s=r.at;return!n||!s?l:s.type==="REORDER"?yc({impact:r,draggable:a,draggables:i,droppable:n,afterCritical:o}):hc({impact:r,draggables:i,afterCritical:o})},zr=function(e){var t=Ec(e),r=e.droppable,a=r?An(r,t):t;return a},To=function(e,t){var r=Ie(t,e.scroll.initial),a=Ct(r),n=He({top:t.y,bottom:t.y+e.frame.height,left:t.x,right:t.x+e.frame.width}),i={frame:n,scroll:{initial:e.scroll.initial,max:e.scroll.max,current:t,diff:{value:r,displacement:a}}};return i};function Ya(e,t){return e.map(function(r){return t[r]})}function Cc(e,t){for(var r=0;r<t.length;r++){var a=t[r].visible[e];if(a)return a}return null}var Dc=function(e){var t=e.impact,r=e.viewport,a=e.destination,n=e.draggables,i=e.maxScrollChange,o=To(r,ge(r.scroll.current,i)),l=a.frame?Jn(a,ge(a.frame.scroll.current,i)):a,s=t.displaced,u=Ht({afterDragging:Ya(s.all,n),destination:a,displacedBy:t.displacedBy,viewport:o.frame,last:s,forceShouldAnimate:!1}),d=Ht({afterDragging:Ya(s.all,n),destination:l,displacedBy:t.displacedBy,viewport:r.frame,last:s,forceShouldAnimate:!1}),p={},f={},m=[s,u,d];s.all.forEach(function(h){var b=Cc(h,m);if(b){f[h]=b;return}p[h]=!0});var g=w({},t,{displaced:{all:s.all,invisible:p,visible:f}});return g},Sc=function(e,t){return ge(e.scroll.diff.displacement,t)},ra=function(e){var t=e.pageBorderBoxCenter,r=e.draggable,a=e.viewport,n=Sc(a,t),i=Ie(n,r.page.borderBox.center);return ge(r.client.borderBox.center,i)},Bo=function(e){var t=e.draggable,r=e.destination,a=e.newPageBorderBoxCenter,n=e.viewport,i=e.withDroppableDisplacement,o=e.onlyOnMainAxis,l=o===void 0?!1:o,s=Ie(a,t.page.borderBox.center),u=nr(t.page.borderBox,s),d={target:u,destination:r,withDroppableDisplacement:i,viewport:n};return l?uc(d):Ro(d)},wc=function(e){var t=e.isMovingForward,r=e.draggable,a=e.destination,n=e.draggables,i=e.previousImpact,o=e.viewport,l=e.previousPageBorderBoxCenter,s=e.previousClientSelection,u=e.afterCritical;if(!a.isEnabled)return null;var d=Dt(a.descriptor.id,n),p=St(r,a),f=tc({isMovingForward:t,draggable:r,destination:a,insideDestination:d,previousImpact:i})||gc({isMovingForward:t,isInHomeList:p,draggable:r,draggables:n,destination:a,insideDestination:d,previousImpact:i,viewport:o,afterCritical:u});if(!f)return null;var m=zr({impact:f,draggable:r,droppable:a,draggables:n,afterCritical:u}),g=Bo({draggable:r,destination:a,newPageBorderBoxCenter:m,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(g){var h=ra({pageBorderBoxCenter:m,draggable:r,viewport:o});return{clientSelection:h,impact:f,scrollJumpRequest:null}}var b=Ie(m,l),x=Dc({impact:f,viewport:o,destination:a,draggables:n,maxScrollChange:b});return{clientSelection:s,impact:x,scrollJumpRequest:b}},ve=function(t){var r=t.subject.active;return r||O(!1),r},Ic=function(e){var t=e.isMovingForward,r=e.pageBorderBoxCenter,a=e.source,n=e.droppables,i=e.viewport,o=a.subject.active;if(!o)return null;var l=a.axis,s=Be(o[l.start],o[l.end]),u=Hr(n).filter(function(p){return p!==a}).filter(function(p){return p.isEnabled}).filter(function(p){return Boolean(p.subject.active)}).filter(function(p){return Fo(i.frame)(ve(p))}).filter(function(p){var f=ve(p);return t?o[l.crossAxisEnd]<f[l.crossAxisEnd]:f[l.crossAxisStart]<o[l.crossAxisStart]}).filter(function(p){var f=ve(p),m=Be(f[l.start],f[l.end]);return s(f[l.start])||s(f[l.end])||m(o[l.start])||m(o[l.end])}).sort(function(p,f){var m=ve(p)[l.crossAxisStart],g=ve(f)[l.crossAxisStart];return t?m-g:g-m}).filter(function(p,f,m){return ve(p)[l.crossAxisStart]===ve(m[0])[l.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var d=u.filter(function(p){var f=Be(ve(p)[l.start],ve(p)[l.end]);return f(r[l.line])});return d.length===1?d[0]:d.length>1?d.sort(function(p,f){return ve(p)[l.start]-ve(f)[l.start]})[0]:u.sort(function(p,f){var m=za(r,Ua(ve(p))),g=za(r,Ua(ve(f)));return m!==g?m-g:ve(p)[l.start]-ve(f)[l.start]})[0]},_a=function(t,r){var a=t.page.borderBox.center;return et(t.descriptor.id,r)?Ie(a,r.displacedBy.point):a},Ac=function(t,r){var a=t.page.borderBox;return et(t.descriptor.id,r)?nr(a,Ct(r.displacedBy.point)):a},Oc=function(e){var t=e.pageBorderBoxCenter,r=e.viewport,a=e.destination,n=e.insideDestination,i=e.afterCritical,o=n.filter(function(l){return Ro({target:Ac(l,i),destination:a,viewport:r.frame,withDroppableDisplacement:!0})}).sort(function(l,s){var u=Vt(t,An(a,_a(l,i))),d=Vt(t,An(a,_a(s,i)));return u<d?-1:d<u?1:l.descriptor.index-s.descriptor.index});return o[0]||null},ar=ce(function(t,r){var a=r[t.line];return{value:a,point:ot(t.line,a)}}),Fc=function(t,r,a){var n=t.axis;if(t.descriptor.mode==="virtual")return ot(n.line,r[n.line]);var i=t.subject.page.contentBox[n.size],o=Dt(t.descriptor.id,a),l=o.reduce(function(d,p){return d+p.client.marginBox[n.size]},0),s=l+r[n.line],u=s-i;return u<=0?null:ot(n.line,u)},No=function(t,r){return w({},t,{scroll:w({},t.scroll,{max:r})})},ko=function(t,r,a){var n=t.frame;St(r,t)&&O(!1),t.subject.withPlaceholder&&O(!1);var i=ar(t.axis,r.displaceBy).point,o=Fc(t,i,a),l={placeholderSize:i,increasedBy:o,oldFrameMaxScroll:t.frame?t.frame.scroll.max:null};if(!n){var s=vt({page:t.subject.page,withPlaceholder:l,axis:t.axis,frame:t.frame});return w({},t,{subject:s})}var u=o?ge(n.scroll.max,o):n.scroll.max,d=No(n,u),p=vt({page:t.subject.page,withPlaceholder:l,axis:t.axis,frame:d});return w({},t,{subject:p,frame:d})},Pc=function(t){var r=t.subject.withPlaceholder;r||O(!1);var a=t.frame;if(!a){var n=vt({page:t.subject.page,axis:t.axis,frame:null,withPlaceholder:null});return w({},t,{subject:n})}var i=r.oldFrameMaxScroll;i||O(!1);var o=No(a,i),l=vt({page:t.subject.page,axis:t.axis,frame:o,withPlaceholder:null});return w({},t,{subject:l,frame:o})},Rc=function(e){var t=e.previousPageBorderBoxCenter,r=e.moveRelativeTo,a=e.insideDestination,n=e.draggable,i=e.draggables,o=e.destination,l=e.viewport,s=e.afterCritical;if(!r){if(a.length)return null;var u={displaced:$t,displacedBy:Oo,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},d=zr({impact:u,draggable:n,droppable:o,draggables:i,afterCritical:s}),p=St(n,o)?o:ko(o,n,i),f=Bo({draggable:n,destination:p,newPageBorderBoxCenter:d,viewport:l.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return f?u:null}var m=Boolean(t[o.axis.line]<=r.page.borderBox.center[o.axis.line]),g=function(){var b=r.descriptor.index;return r.descriptor.id===n.descriptor.id||m?b:b+1}(),h=ar(o.axis,n.displaceBy);return Ar({draggable:n,insideDestination:a,destination:o,viewport:l,displacedBy:h,last:$t,index:g})},Mc=function(e){var t=e.isMovingForward,r=e.previousPageBorderBoxCenter,a=e.draggable,n=e.isOver,i=e.draggables,o=e.droppables,l=e.viewport,s=e.afterCritical,u=Ic({isMovingForward:t,pageBorderBoxCenter:r,source:n,droppables:o,viewport:l});if(!u)return null;var d=Dt(u.descriptor.id,i),p=Oc({pageBorderBoxCenter:r,viewport:l,destination:u,insideDestination:d,afterCritical:s}),f=Rc({previousPageBorderBoxCenter:r,destination:u,draggable:a,draggables:i,moveRelativeTo:p,insideDestination:d,viewport:l,afterCritical:s});if(!f)return null;var m=zr({impact:f,draggable:a,droppable:u,draggables:i,afterCritical:s}),g=ra({pageBorderBoxCenter:m,draggable:a,viewport:l});return{clientSelection:g,impact:f,scrollJumpRequest:null}},Ae=function(e){var t=e.at;return t?t.type==="REORDER"?t.destination.droppableId:t.combine.droppableId:null},Tc=function(t,r){var a=Ae(t);return a?r[a]:null},Bc=function(e){var t=e.state,r=e.type,a=Tc(t.impact,t.dimensions.droppables),n=Boolean(a),i=t.dimensions.droppables[t.critical.droppable.id],o=a||i,l=o.axis.direction,s=l==="vertical"&&(r==="MOVE_UP"||r==="MOVE_DOWN")||l==="horizontal"&&(r==="MOVE_LEFT"||r==="MOVE_RIGHT");if(s&&!n)return null;var u=r==="MOVE_DOWN"||r==="MOVE_RIGHT",d=t.dimensions.draggables[t.critical.draggable.id],p=t.current.page.borderBoxCenter,f=t.dimensions,m=f.draggables,g=f.droppables;return s?wc({isMovingForward:u,previousPageBorderBoxCenter:p,draggable:d,destination:o,draggables:m,viewport:t.viewport,previousClientSelection:t.current.client.selection,previousImpact:t.impact,afterCritical:t.afterCritical}):Mc({isMovingForward:u,previousPageBorderBoxCenter:p,draggable:d,isOver:o,draggables:m,droppables:g,viewport:t.viewport,afterCritical:t.afterCritical})};function at(e){return e.phase==="DRAGGING"||e.phase==="COLLECTING"}function Lo(e){var t=Be(e.top,e.bottom),r=Be(e.left,e.right);return function(n){return t(n.y)&&r(n.x)}}function Nc(e,t){return e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top}function kc(e){var t=e.pageBorderBox,r=e.draggable,a=e.candidates,n=r.page.borderBox.center,i=a.map(function(o){var l=o.axis,s=ot(o.axis.line,t.center[l.line],o.page.borderBox.center[l.crossAxisLine]);return{id:o.descriptor.id,distance:Vt(n,s)}}).sort(function(o,l){return l.distance-o.distance});return i[0]?i[0].id:null}function Lc(e){var t=e.pageBorderBox,r=e.draggable,a=e.droppables,n=Hr(a).filter(function(i){if(!i.isEnabled)return!1;var o=i.subject.active;if(!o||!Nc(t,o))return!1;if(Lo(o)(t.center))return!0;var l=i.axis,s=o.center[l.crossAxisLine],u=t[l.crossAxisStart],d=t[l.crossAxisEnd],p=Be(o[l.crossAxisStart],o[l.crossAxisEnd]),f=p(u),m=p(d);return!f&&!m?!0:f?u<s:d>s});return n.length?n.length===1?n[0].descriptor.id:kc({pageBorderBox:t,draggable:r,candidates:n}):null}var Vo=function(t,r){return He(nr(t,r))},Vc=function(e,t){var r=e.frame;return r?Vo(t,r.scroll.diff.value):t};function $o(e){var t=e.displaced,r=e.id;return Boolean(t.visible[r]||t.invisible[r])}function $c(e){var t=e.draggable,r=e.closest,a=e.inHomeList;return r?a&&r.descriptor.index>t.descriptor.index?r.descriptor.index-1:r.descriptor.index:null}var Hc=function(e){var t=e.pageBorderBoxWithDroppableScroll,r=e.draggable,a=e.destination,n=e.insideDestination,i=e.last,o=e.viewport,l=e.afterCritical,s=a.axis,u=ar(a.axis,r.displaceBy),d=u.value,p=t[s.start],f=t[s.end],m=jr(r,n),g=tt(m,function(b){var x=b.descriptor.id,y=b.page.borderBox.center[s.line],C=et(x,l),E=$o({displaced:i,id:x});return C?E?f<=y:p<y-d:E?f<=y+d:p<y}),h=$c({draggable:r,closest:g,inHomeList:St(r,a)});return Ar({draggable:r,insideDestination:n,destination:a,viewport:o,last:i,displacedBy:u,index:h})},Gc=4,jc=function(e){var t=e.draggable,r=e.pageBorderBoxWithDroppableScroll,a=e.previousImpact,n=e.destination,i=e.insideDestination,o=e.afterCritical;if(!n.isCombineEnabled)return null;var l=n.axis,s=ar(n.axis,t.displaceBy),u=s.value,d=r[l.start],p=r[l.end],f=jr(t,i),m=tt(f,function(h){var b=h.descriptor.id,x=h.page.borderBox,y=x[l.size],C=y/Gc,E=et(b,o),I=$o({displaced:a.displaced,id:b});return E?I?p>x[l.start]+C&&p<x[l.end]-C:d>x[l.start]-u+C&&d<x[l.end]-u-C:I?p>x[l.start]+u+C&&p<x[l.end]+u-C:d>x[l.start]+C&&d<x[l.end]-C});if(!m)return null;var g={displacedBy:s,displaced:a.displaced,at:{type:"COMBINE",combine:{draggableId:m.descriptor.id,droppableId:n.descriptor.id}}};return g},Ho=function(e){var t=e.pageOffset,r=e.draggable,a=e.draggables,n=e.droppables,i=e.previousImpact,o=e.viewport,l=e.afterCritical,s=Vo(r.page.borderBox,t),u=Lc({pageBorderBox:s,draggable:r,droppables:n});if(!u)return rc;var d=n[u],p=Dt(d.descriptor.id,a),f=Vc(d,s);return jc({pageBorderBoxWithDroppableScroll:f,draggable:r,previousImpact:i,destination:d,insideDestination:p,afterCritical:l})||Hc({pageBorderBoxWithDroppableScroll:f,draggable:r,destination:d,insideDestination:p,last:i.displaced,viewport:o,afterCritical:l})},na=function(e,t){var r;return w({},e,(r={},r[t.descriptor.id]=t,r))},zc=function(t){var r=t.previousImpact,a=t.impact,n=t.droppables,i=Ae(r),o=Ae(a);if(!i||i===o)return n;var l=n[i];if(!l.subject.withPlaceholder)return n;var s=Pc(l);return na(n,s)},Uc=function(e){var t=e.draggable,r=e.draggables,a=e.droppables,n=e.previousImpact,i=e.impact,o=zc({previousImpact:n,impact:i,droppables:a}),l=Ae(i);if(!l)return o;var s=a[l];if(St(t,s)||s.subject.withPlaceholder)return o;var u=ko(s,t,r);return na(o,u)},Bt=function(e){var t=e.state,r=e.clientSelection,a=e.dimensions,n=e.viewport,i=e.impact,o=e.scrollJumpRequest,l=n||t.viewport,s=a||t.dimensions,u=r||t.current.client.selection,d=Ie(u,t.initial.client.selection),p={offset:d,selection:u,borderBoxCenter:ge(t.initial.client.borderBoxCenter,d)},f={selection:ge(p.selection,l.scroll.current),borderBoxCenter:ge(p.borderBoxCenter,l.scroll.current),offset:ge(p.offset,l.scroll.diff.value)},m={client:p,page:f};if(t.phase==="COLLECTING")return w({phase:"COLLECTING"},t,{dimensions:s,viewport:l,current:m});var g=s.draggables[t.critical.draggable.id],h=i||Ho({pageOffset:f.offset,draggable:g,draggables:s.draggables,droppables:s.droppables,previousImpact:t.impact,viewport:l,afterCritical:t.afterCritical}),b=Uc({draggable:g,impact:h,previousImpact:t.impact,draggables:s.draggables,droppables:s.droppables}),x=w({},t,{current:m,dimensions:{draggables:s.draggables,droppables:b},impact:h,viewport:l,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return x};function Wc(e,t){return e.map(function(r){return t[r]})}var Go=function(e){var t=e.impact,r=e.viewport,a=e.draggables,n=e.destination,i=e.forceShouldAnimate,o=t.displaced,l=Wc(o.all,a),s=Ht({afterDragging:l,destination:n,displacedBy:t.displacedBy,viewport:r.frame,forceShouldAnimate:i,last:o});return w({},t,{displaced:s})},jo=function(e){var t=e.impact,r=e.draggable,a=e.droppable,n=e.draggables,i=e.viewport,o=e.afterCritical,l=zr({impact:t,draggable:r,draggables:n,droppable:a,afterCritical:o});return ra({pageBorderBoxCenter:l,draggable:r,viewport:i})},zo=function(e){var t=e.state,r=e.dimensions,a=e.viewport;t.movementMode!=="SNAP"&&O(!1);var n=t.impact,i=a||t.viewport,o=r||t.dimensions,l=o.draggables,s=o.droppables,u=l[t.critical.draggable.id],d=Ae(n);d||O(!1);var p=s[d],f=Go({impact:n,viewport:i,destination:p,draggables:l}),m=jo({impact:f,draggable:u,droppable:p,draggables:l,viewport:i,afterCritical:t.afterCritical});return Bt({impact:f,clientSelection:m,state:t,dimensions:o,viewport:i})},qc=function(e){return{index:e.index,droppableId:e.droppableId}},Uo=function(e){var t=e.draggable,r=e.home,a=e.draggables,n=e.viewport,i=ar(r.axis,t.displaceBy),o=Dt(r.descriptor.id,a),l=o.indexOf(t);l===-1&&O(!1);var s=o.slice(l+1),u=s.reduce(function(m,g){return m[g.descriptor.id]=!0,m},{}),d={inVirtualList:r.descriptor.mode==="virtual",displacedBy:i,effected:u},p=Ht({afterDragging:s,destination:r,displacedBy:i,last:null,viewport:n.frame,forceShouldAnimate:!1}),f={displaced:p,displacedBy:i,at:{type:"REORDER",destination:qc(t.descriptor)}};return{impact:f,afterCritical:d}},Kc=function(e,t){return{draggables:e.draggables,droppables:na(e.droppables,t)}},Yc=function(e){var t=e.draggable,r=e.offset,a=e.initialWindowScroll,n=Cr(t.client,r),i=Dr(n,a),o=w({},t,{placeholder:w({},t.placeholder,{client:n}),client:n,page:i});return o},_c=function(e){var t=e.frame;return t||O(!1),t},Jc=function(e){var t=e.additions,r=e.updatedDroppables,a=e.viewport,n=a.scroll.diff.value;return t.map(function(i){var o=i.descriptor.droppableId,l=r[o],s=_c(l),u=s.scroll.diff.value,d=ge(n,u),p=Yc({draggable:i,offset:d,initialWindowScroll:a.scroll.initial});return p})},Xc=function(e){var t=e.state,r=e.published,a=r.modified.map(function(C){var E=t.dimensions.droppables[C.droppableId],I=Jn(E,C.scroll);return I}),n=w({},t.dimensions.droppables,{},Io(a)),i=Ao(Jc({additions:r.additions,updatedDroppables:n,viewport:t.viewport})),o=w({},t.dimensions.draggables,{},i);r.removals.forEach(function(C){delete o[C]});var l={droppables:n,draggables:o},s=Ae(t.impact),u=s?l.droppables[s]:null,d=l.draggables[t.critical.draggable.id],p=l.droppables[t.critical.droppable.id],f=Uo({draggable:d,home:p,draggables:o,viewport:t.viewport}),m=f.impact,g=f.afterCritical,h=u&&u.isCombineEnabled?t.impact:m,b=Ho({pageOffset:t.current.page.offset,draggable:l.draggables[t.critical.draggable.id],draggables:l.draggables,droppables:l.droppables,previousImpact:h,viewport:t.viewport,afterCritical:g}),x=w({phase:"DRAGGING"},t,{phase:"DRAGGING",impact:b,onLiftImpact:m,dimensions:l,afterCritical:g,forceShouldAnimate:!1});if(t.phase==="COLLECTING")return x;var y=w({phase:"DROP_PENDING"},x,{phase:"DROP_PENDING",reason:t.reason,isWaiting:!1});return y},On=function(t){return t.movementMode==="SNAP"},cn=function(t,r,a){var n=Kc(t.dimensions,r);return!On(t)||a?Bt({state:t,dimensions:n}):zo({state:t,dimensions:n})};function dn(e){return e.isDragging&&e.movementMode==="SNAP"?w({phase:"DRAGGING"},e,{scrollJumpRequest:null}):e}var Ja={phase:"IDLE",completed:null,shouldFlush:!1},Zc=function(e,t){if(e===void 0&&(e=Ja),t.type==="FLUSH")return w({},Ja,{shouldFlush:!0});if(t.type==="INITIAL_PUBLISH"){e.phase!=="IDLE"&&O(!1);var r=t.payload,a=r.critical,n=r.clientSelection,i=r.viewport,o=r.dimensions,l=r.movementMode,s=o.draggables[a.draggable.id],u=o.droppables[a.droppable.id],d={selection:n,borderBoxCenter:s.client.borderBox.center,offset:pe},p={client:d,page:{selection:ge(d.selection,i.scroll.initial),borderBoxCenter:ge(d.selection,i.scroll.initial),offset:ge(d.selection,i.scroll.diff.value)}},f=Hr(o.droppables).every(function(Ne){return!Ne.isFixedOnPage}),m=Uo({draggable:s,home:u,draggables:o.draggables,viewport:i}),g=m.impact,h=m.afterCritical,b={phase:"DRAGGING",isDragging:!0,critical:a,movementMode:l,dimensions:o,initial:p,current:p,isWindowScrollAllowed:f,impact:g,afterCritical:h,onLiftImpact:g,viewport:i,scrollJumpRequest:null,forceShouldAnimate:null};return b}if(t.type==="COLLECTION_STARTING"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&O(!1);var x=w({phase:"COLLECTING"},e,{phase:"COLLECTING"});return x}if(t.type==="PUBLISH_WHILE_DRAGGING")return e.phase==="COLLECTING"||e.phase==="DROP_PENDING"||O(!1),Xc({state:e,published:t.payload});if(t.type==="MOVE"){if(e.phase==="DROP_PENDING")return e;at(e)||O(!1);var y=t.payload.client;return Xe(y,e.current.client.selection)?e:Bt({state:e,clientSelection:y,impact:On(e)?e.impact:null})}if(t.type==="UPDATE_DROPPABLE_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="COLLECTING")return dn(e);at(e)||O(!1);var C=t.payload,E=C.id,I=C.newScroll,D=e.dimensions.droppables[E];if(!D)return e;var P=Jn(D,I);return cn(e,P,!1)}if(t.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(e.phase==="DROP_PENDING")return e;at(e)||O(!1);var F=t.payload,M=F.id,S=F.isEnabled,A=e.dimensions.droppables[M];A||O(!1),A.isEnabled===S&&O(!1);var T=w({},A,{isEnabled:S});return cn(e,T,!0)}if(t.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(e.phase==="DROP_PENDING")return e;at(e)||O(!1);var B=t.payload,N=B.id,R=B.isCombineEnabled,G=e.dimensions.droppables[N];G||O(!1),G.isCombineEnabled===R&&O(!1);var K=w({},G,{isCombineEnabled:R});return cn(e,K,!0)}if(t.type==="MOVE_BY_WINDOW_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="DROP_ANIMATING")return e;at(e)||O(!1),e.isWindowScrollAllowed||O(!1);var Y=t.payload.newScroll;if(Xe(e.viewport.scroll.current,Y))return dn(e);var ee=To(e.viewport,Y);return On(e)?zo({state:e,viewport:ee}):Bt({state:e,viewport:ee})}if(t.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!at(e))return e;var X=t.payload.maxScroll;if(Xe(X,e.viewport.scroll.max))return e;var ne=w({},e.viewport,{scroll:w({},e.viewport.scroll,{max:X})});return w({phase:"DRAGGING"},e,{viewport:ne})}if(t.type==="MOVE_UP"||t.type==="MOVE_DOWN"||t.type==="MOVE_LEFT"||t.type==="MOVE_RIGHT"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&O(!1);var W=Bc({state:e,type:t.type});return W?Bt({state:e,impact:W.impact,clientSelection:W.clientSelection,scrollJumpRequest:W.scrollJumpRequest}):e}if(t.type==="DROP_PENDING"){var te=t.payload.reason;e.phase!=="COLLECTING"&&O(!1);var se=w({phase:"DROP_PENDING"},e,{phase:"DROP_PENDING",isWaiting:!0,reason:te});return se}if(t.type==="DROP_ANIMATE"){var q=t.payload,j=q.completed,_=q.dropDuration,ie=q.newHomeClientOffset;e.phase==="DRAGGING"||e.phase==="DROP_PENDING"||O(!1);var Ee={phase:"DROP_ANIMATING",completed:j,dropDuration:_,newHomeClientOffset:ie,dimensions:e.dimensions};return Ee}if(t.type==="DROP_COMPLETE"){var Ce=t.payload.completed;return{phase:"IDLE",completed:Ce,shouldFlush:!1}}return e},Qc=function(t){return{type:"BEFORE_INITIAL_CAPTURE",payload:t}},ed=function(t){return{type:"LIFT",payload:t}},td=function(t){return{type:"INITIAL_PUBLISH",payload:t}},rd=function(t){return{type:"PUBLISH_WHILE_DRAGGING",payload:t}},nd=function(){return{type:"COLLECTION_STARTING",payload:null}},ad=function(t){return{type:"UPDATE_DROPPABLE_SCROLL",payload:t}},id=function(t){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:t}},od=function(t){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:t}},Wo=function(t){return{type:"MOVE",payload:t}},ld=function(t){return{type:"MOVE_BY_WINDOW_SCROLL",payload:t}},sd=function(t){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:t}},ud=function(){return{type:"MOVE_UP",payload:null}},cd=function(){return{type:"MOVE_DOWN",payload:null}},dd=function(){return{type:"MOVE_RIGHT",payload:null}},pd=function(){return{type:"MOVE_LEFT",payload:null}},aa=function(){return{type:"FLUSH",payload:null}},fd=function(t){return{type:"DROP_ANIMATE",payload:t}},ia=function(t){return{type:"DROP_COMPLETE",payload:t}},qo=function(t){return{type:"DROP",payload:t}},md=function(t){return{type:"DROP_PENDING",payload:t}},Ko=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},gd=function(e){return function(t){var r=t.getState,a=t.dispatch;return function(n){return function(i){if(i.type!=="LIFT"){n(i);return}var o=i.payload,l=o.id,s=o.clientSelection,u=o.movementMode,d=r();d.phase==="DROP_ANIMATING"&&a(ia({completed:d.completed})),r().phase!=="IDLE"&&O(!1),a(aa()),a(Qc({draggableId:l,movementMode:u}));var p={shouldPublishImmediately:u==="SNAP"},f={draggableId:l,scrollOptions:p},m=e.startPublishing(f),g=m.critical,h=m.dimensions,b=m.viewport;a(td({critical:g,dimensions:h,clientSelection:s,movementMode:u,viewport:b}))}}}},vd=function(e){return function(){return function(t){return function(r){r.type==="INITIAL_PUBLISH"&&e.dragging(),r.type==="DROP_ANIMATE"&&e.dropping(r.payload.completed.result.reason),(r.type==="FLUSH"||r.type==="DROP_COMPLETE")&&e.resting(),t(r)}}}},oa={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Gt={opacity:{drop:0,combining:.7},scale:{drop:.75}},la={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},nt=la.outOfTheWay+"s "+oa.outOfTheWay,Nt={fluid:"opacity "+nt,snap:"transform "+nt+", opacity "+nt,drop:function(t){var r=t+"s "+oa.drop;return"transform "+r+", opacity "+r},outOfTheWay:"transform "+nt,placeholder:"height "+nt+", width "+nt+", margin "+nt},Xa=function(t){return Xe(t,pe)?null:"translate("+t.x+"px, "+t.y+"px)"},Fn={moveTo:Xa,drop:function(t,r){var a=Xa(t);return a?r?a+" scale("+Gt.scale.drop+")":a:null}},Pn=la.minDropTime,Yo=la.maxDropTime,hd=Yo-Pn,Za=1500,bd=.6,xd=function(e){var t=e.current,r=e.destination,a=e.reason,n=Vt(t,r);if(n<=0)return Pn;if(n>=Za)return Yo;var i=n/Za,o=Pn+hd*i,l=a==="CANCEL"?o*bd:o;return Number(l.toFixed(2))},yd=function(e){var t=e.impact,r=e.draggable,a=e.dimensions,n=e.viewport,i=e.afterCritical,o=a.draggables,l=a.droppables,s=Ae(t),u=s?l[s]:null,d=l[r.descriptor.droppableId],p=jo({impact:t,draggable:r,draggables:o,afterCritical:i,droppable:u||d,viewport:n}),f=Ie(p,r.client.borderBox.center);return f},Ed=function(e){var t=e.draggables,r=e.reason,a=e.lastImpact,n=e.home,i=e.viewport,o=e.onLiftImpact;if(!a.at||r!=="DROP"){var l=Go({draggables:t,impact:o,destination:n,viewport:i,forceShouldAnimate:!0});return{impact:l,didDropInsideDroppable:!1}}if(a.at.type==="REORDER")return{impact:a,didDropInsideDroppable:!0};var s=w({},a,{displaced:$t});return{impact:s,didDropInsideDroppable:!0}},Cd=function(e){var t=e.getState,r=e.dispatch;return function(a){return function(n){if(n.type!=="DROP"){a(n);return}var i=t(),o=n.payload.reason;if(i.phase==="COLLECTING"){r(md({reason:o}));return}if(i.phase!=="IDLE"){var l=i.phase==="DROP_PENDING"&&i.isWaiting;l&&O(!1),i.phase==="DRAGGING"||i.phase==="DROP_PENDING"||O(!1);var s=i.critical,u=i.dimensions,d=u.draggables[i.critical.draggable.id],p=Ed({reason:o,lastImpact:i.impact,afterCritical:i.afterCritical,onLiftImpact:i.onLiftImpact,home:i.dimensions.droppables[i.critical.droppable.id],viewport:i.viewport,draggables:i.dimensions.draggables}),f=p.impact,m=p.didDropInsideDroppable,g=m?Zn(f):null,h=m?Gr(f):null,b={index:s.draggable.index,droppableId:s.droppable.id},x={draggableId:d.descriptor.id,type:d.descriptor.type,source:b,reason:o,mode:i.movementMode,destination:g,combine:h},y=yd({impact:f,draggable:d,dimensions:u,viewport:i.viewport,afterCritical:i.afterCritical}),C={critical:i.critical,afterCritical:i.afterCritical,result:x,impact:f},E=!Xe(i.current.client.offset,y)||Boolean(x.combine);if(!E){r(ia({completed:C}));return}var I=xd({current:i.current.client.offset,destination:y,reason:o}),D={newHomeClientOffset:y,dropDuration:I,completed:C};r(fd(D))}}}},_o=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function Dd(e){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(r){r.target!==window&&r.target!==window.document||e()}}}function Sd(e){var t=e.onWindowScroll;function r(){t(_o())}var a=Lt(r),n=Dd(a),i=Je;function o(){return i!==Je}function l(){o()&&O(!1),i=Te(window,[n])}function s(){o()||O(!1),a.cancel(),i(),i=Je}return{start:l,stop:s,isActive:o}}var wd=function(t){return t.type==="DROP_COMPLETE"||t.type==="DROP_ANIMATE"||t.type==="FLUSH"},Id=function(e){var t=Sd({onWindowScroll:function(a){e.dispatch(ld({newScroll:a}))}});return function(r){return function(a){!t.isActive()&&a.type==="INITIAL_PUBLISH"&&t.start(),t.isActive()&&wd(a)&&t.stop(),r(a)}}},Ad=function(e){var t=!1,r=!1,a=setTimeout(function(){r=!0}),n=function(o){t||r||(t=!0,e(o),clearTimeout(a))};return n.wasCalled=function(){return t},n},Od=function(){var e=[],t=function(i){var o=Xn(e,function(u){return u.timerId===i});o===-1&&O(!1);var l=e.splice(o,1),s=l[0];s.callback()},r=function(i){var o=setTimeout(function(){return t(o)}),l={timerId:o,callback:i};e.push(l)},a=function(){if(!!e.length){var i=[].concat(e);e.length=0,i.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:r,flush:a}},Fd=function(t,r){return t==null&&r==null?!0:t==null||r==null?!1:t.droppableId===r.droppableId&&t.index===r.index},Pd=function(t,r){return t==null&&r==null?!0:t==null||r==null?!1:t.draggableId===r.draggableId&&t.droppableId===r.droppableId},Rd=function(t,r){if(t===r)return!0;var a=t.draggable.id===r.draggable.id&&t.draggable.droppableId===r.draggable.droppableId&&t.draggable.type===r.draggable.type&&t.draggable.index===r.draggable.index,n=t.droppable.id===r.droppable.id&&t.droppable.type===r.droppable.type;return a&&n},Ft=function(t,r){r()},sr=function(t,r){return{draggableId:t.draggable.id,type:t.droppable.type,source:{droppableId:t.droppable.id,index:t.draggable.index},mode:r}},pn=function(t,r,a,n){if(!t){a(n(r));return}var i=Ad(a),o={announce:i};t(r,o),i.wasCalled()||a(n(r))},Md=function(e,t){var r=Od(),a=null,n=function(f,m){a&&O(!1),Ft("onBeforeCapture",function(){var g=e().onBeforeCapture;if(g){var h={draggableId:f,mode:m};g(h)}})},i=function(f,m){a&&O(!1),Ft("onBeforeDragStart",function(){var g=e().onBeforeDragStart;g&&g(sr(f,m))})},o=function(f,m){a&&O(!1);var g=sr(f,m);a={mode:m,lastCritical:f,lastLocation:g.source,lastCombine:null},r.add(function(){Ft("onDragStart",function(){return pn(e().onDragStart,g,t,yr.onDragStart)})})},l=function(f,m){var g=Zn(m),h=Gr(m);a||O(!1);var b=!Rd(f,a.lastCritical);b&&(a.lastCritical=f);var x=!Fd(a.lastLocation,g);x&&(a.lastLocation=g);var y=!Pd(a.lastCombine,h);if(y&&(a.lastCombine=h),!(!b&&!x&&!y)){var C=w({},sr(f,a.mode),{combine:h,destination:g});r.add(function(){Ft("onDragUpdate",function(){return pn(e().onDragUpdate,C,t,yr.onDragUpdate)})})}},s=function(){a||O(!1),r.flush()},u=function(f){a||O(!1),a=null,Ft("onDragEnd",function(){return pn(e().onDragEnd,f,t,yr.onDragEnd)})},d=function(){if(!!a){var f=w({},sr(a.lastCritical,a.mode),{combine:null,destination:null,reason:"CANCEL"});u(f)}};return{beforeCapture:n,beforeStart:i,start:o,update:l,flush:s,drop:u,abort:d}},Td=function(e,t){var r=Md(e,t);return function(a){return function(n){return function(i){if(i.type==="BEFORE_INITIAL_CAPTURE"){r.beforeCapture(i.payload.draggableId,i.payload.movementMode);return}if(i.type==="INITIAL_PUBLISH"){var o=i.payload.critical;r.beforeStart(o,i.payload.movementMode),n(i),r.start(o,i.payload.movementMode);return}if(i.type==="DROP_COMPLETE"){var l=i.payload.completed.result;r.flush(),n(i),r.drop(l);return}if(n(i),i.type==="FLUSH"){r.abort();return}var s=a.getState();s.phase==="DRAGGING"&&r.update(s.critical,s.impact)}}}},Bd=function(e){return function(t){return function(r){if(r.type!=="DROP_ANIMATION_FINISHED"){t(r);return}var a=e.getState();a.phase!=="DROP_ANIMATING"&&O(!1),e.dispatch(ia({completed:a.completed}))}}},Nd=function(e){var t=null,r=null;function a(){r&&(cancelAnimationFrame(r),r=null),t&&(t(),t=null)}return function(n){return function(i){if((i.type==="FLUSH"||i.type==="DROP_COMPLETE"||i.type==="DROP_ANIMATION_FINISHED")&&a(),n(i),i.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var s=e.getState();s.phase==="DROP_ANIMATING"&&e.dispatch(Ko())}};r=requestAnimationFrame(function(){r=null,t=Te(window,[o])})}}}},kd=function(e){return function(){return function(t){return function(r){(r.type==="DROP_COMPLETE"||r.type==="FLUSH"||r.type==="DROP_ANIMATE")&&e.stopPublishing(),t(r)}}}},Ld=function(e){var t=!1;return function(){return function(r){return function(a){if(a.type==="INITIAL_PUBLISH"){t=!0,e.tryRecordFocus(a.payload.critical.draggable.id),r(a),e.tryRestoreFocusRecorded();return}if(r(a),!!t){if(a.type==="FLUSH"){t=!1,e.tryRestoreFocusRecorded();return}if(a.type==="DROP_COMPLETE"){t=!1;var n=a.payload.completed.result;n.combine&&e.tryShiftRecord(n.draggableId,n.combine.draggableId),e.tryRestoreFocusRecorded()}}}}}},Vd=function(t){return t.type==="DROP_COMPLETE"||t.type==="DROP_ANIMATE"||t.type==="FLUSH"},$d=function(e){return function(t){return function(r){return function(a){if(Vd(a)){e.stop(),r(a);return}if(a.type==="INITIAL_PUBLISH"){r(a);var n=t.getState();n.phase!=="DRAGGING"&&O(!1),e.start(n);return}r(a),e.scroll(t.getState())}}}},Hd=function(e){return function(t){return function(r){if(t(r),r.type==="PUBLISH_WHILE_DRAGGING"){var a=e.getState();a.phase==="DROP_PENDING"&&(a.isWaiting||e.dispatch(qo({reason:a.reason})))}}}},Gd=ao,jd=function(e){var t=e.dimensionMarshal,r=e.focusMarshal,a=e.styleMarshal,n=e.getResponders,i=e.announce,o=e.autoScroller;return no(Zc,Gd(js(vd(a),kd(t),gd(t),Cd,Bd,Nd,Hd,$d(o),Id,Ld(r),Td(n,i))))},fn=function(){return{additions:{},removals:{},modified:{}}};function zd(e){var t=e.registry,r=e.callbacks,a=fn(),n=null,i=function(){n||(r.collectionStarting(),n=requestAnimationFrame(function(){n=null;var d=a,p=d.additions,f=d.removals,m=d.modified,g=Object.keys(p).map(function(x){return t.draggable.getById(x).getDimension(pe)}).sort(function(x,y){return x.descriptor.index-y.descriptor.index}),h=Object.keys(m).map(function(x){var y=t.droppable.getById(x),C=y.callbacks.getScrollWhileDragging();return{droppableId:x,scroll:C}}),b={additions:g,removals:Object.keys(f),modified:h};a=fn(),r.publish(b)}))},o=function(d){var p=d.descriptor.id;a.additions[p]=d,a.modified[d.descriptor.droppableId]=!0,a.removals[p]&&delete a.removals[p],i()},l=function(d){var p=d.descriptor;a.removals[p.id]=!0,a.modified[p.droppableId]=!0,a.additions[p.id]&&delete a.additions[p.id],i()},s=function(){!n||(cancelAnimationFrame(n),n=null,a=fn())};return{add:o,remove:l,stop:s}}var Jo=function(e){var t=e.scrollHeight,r=e.scrollWidth,a=e.height,n=e.width,i=Ie({x:r,y:t},{x:n,y:a}),o={x:Math.max(0,i.x),y:Math.max(0,i.y)};return o},Xo=function(){var e=document.documentElement;return e||O(!1),e},Zo=function(){var e=Xo(),t=Jo({scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,width:e.clientWidth,height:e.clientHeight});return t},Ud=function(){var e=_o(),t=Zo(),r=e.y,a=e.x,n=Xo(),i=n.clientWidth,o=n.clientHeight,l=a+i,s=r+o,u=He({top:r,left:a,right:l,bottom:s}),d={frame:u,scroll:{initial:e,current:e,max:t,diff:{value:pe,displacement:pe}}};return d},Wd=function(e){var t=e.critical,r=e.scrollOptions,a=e.registry,n=Ud(),i=n.scroll.current,o=t.droppable,l=a.droppable.getAllByType(o.type).map(function(p){return p.callbacks.getDimensionAndWatchScroll(i,r)}),s=a.draggable.getAllByType(t.draggable.type).map(function(p){return p.getDimension(i)}),u={draggables:Ao(s),droppables:Io(l)},d={dimensions:u,critical:t,viewport:n};return d};function Qa(e,t,r){if(r.descriptor.id===t.id||r.descriptor.type!==t.type)return!1;var a=e.droppable.getById(r.descriptor.droppableId);return a.descriptor.mode==="virtual"}var qd=function(e,t){var r=null,a=zd({callbacks:{publish:t.publishWhileDragging,collectionStarting:t.collectionStarting},registry:e}),n=function(m,g){e.droppable.exists(m)||O(!1),r&&t.updateDroppableIsEnabled({id:m,isEnabled:g})},i=function(m,g){!r||(e.droppable.exists(m)||O(!1),t.updateDroppableIsCombineEnabled({id:m,isCombineEnabled:g}))},o=function(m,g){!r||(e.droppable.exists(m)||O(!1),t.updateDroppableScroll({id:m,newScroll:g}))},l=function(m,g){!r||e.droppable.getById(m).callbacks.scroll(g)},s=function(){if(!!r){a.stop();var m=r.critical.droppable;e.droppable.getAllByType(m.type).forEach(function(g){return g.callbacks.dragStopped()}),r.unsubscribe(),r=null}},u=function(m){r||O(!1);var g=r.critical.draggable;m.type==="ADDITION"&&Qa(e,g,m.value)&&a.add(m.value),m.type==="REMOVAL"&&Qa(e,g,m.value)&&a.remove(m.value)},d=function(m){r&&O(!1);var g=e.draggable.getById(m.draggableId),h=e.droppable.getById(g.descriptor.droppableId),b={draggable:g.descriptor,droppable:h.descriptor},x=e.subscribe(u);return r={critical:b,unsubscribe:x},Wd({critical:b,registry:e,scrollOptions:m.scrollOptions})},p={updateDroppableIsEnabled:n,updateDroppableIsCombineEnabled:i,scrollDroppable:l,updateDroppableScroll:o,startPublishing:d,stopPublishing:s};return p},Qo=function(e,t){return e.phase==="IDLE"?!0:e.phase!=="DROP_ANIMATING"||e.completed.result.draggableId===t?!1:e.completed.result.reason==="DROP"},Kd=function(e){window.scrollBy(e.x,e.y)},Yd=ce(function(e){return Hr(e).filter(function(t){return!(!t.isEnabled||!t.frame)})}),_d=function(t,r){var a=tt(Yd(r),function(n){return n.frame||O(!1),Lo(n.frame.pageMarginBox)(t)});return a},Jd=function(e){var t=e.center,r=e.destination,a=e.droppables;if(r){var n=a[r];return n.frame?n:null}var i=_d(t,a);return i},Ze={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(t){return Math.pow(t,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},Xd=function(e,t){var r=e[t.size]*Ze.startFromPercentage,a=e[t.size]*Ze.maxScrollAtPercentage,n={startScrollingFrom:r,maxScrollValueAt:a};return n},el=function(e){var t=e.startOfRange,r=e.endOfRange,a=e.current,n=r-t;if(n===0)return 0;var i=a-t,o=i/n;return o},sa=1,Zd=function(e,t){if(e>t.startScrollingFrom)return 0;if(e<=t.maxScrollValueAt)return Ze.maxPixelScroll;if(e===t.startScrollingFrom)return sa;var r=el({startOfRange:t.maxScrollValueAt,endOfRange:t.startScrollingFrom,current:e}),a=1-r,n=Ze.maxPixelScroll*Ze.ease(a);return Math.ceil(n)},ei=Ze.durationDampening.accelerateAt,ti=Ze.durationDampening.stopDampeningAt,Qd=function(e,t){var r=t,a=ti,n=Date.now(),i=n-r;if(i>=ti)return e;if(i<ei)return sa;var o=el({startOfRange:ei,endOfRange:a,current:i}),l=e*Ze.ease(o);return Math.ceil(l)},ri=function(e){var t=e.distanceToEdge,r=e.thresholds,a=e.dragStartTime,n=e.shouldUseTimeDampening,i=Zd(t,r);return i===0?0:n?Math.max(Qd(i,a),sa):i},ni=function(e){var t=e.container,r=e.distanceToEdges,a=e.dragStartTime,n=e.axis,i=e.shouldUseTimeDampening,o=Xd(t,n),l=r[n.end]<r[n.start];return l?ri({distanceToEdge:r[n.end],thresholds:o,dragStartTime:a,shouldUseTimeDampening:i}):-1*ri({distanceToEdge:r[n.start],thresholds:o,dragStartTime:a,shouldUseTimeDampening:i})},ep=function(e){var t=e.container,r=e.subject,a=e.proposedScroll,n=r.height>t.height,i=r.width>t.width;return!i&&!n?a:i&&n?null:{x:i?0:a.x,y:n?0:a.y}},tp=So(function(e){return e===0?0:e}),tl=function(e){var t=e.dragStartTime,r=e.container,a=e.subject,n=e.center,i=e.shouldUseTimeDampening,o={top:n.y-r.top,right:r.right-n.x,bottom:r.bottom-n.y,left:n.x-r.left},l=ni({container:r,distanceToEdges:o,dragStartTime:t,axis:Qn,shouldUseTimeDampening:i}),s=ni({container:r,distanceToEdges:o,dragStartTime:t,axis:Po,shouldUseTimeDampening:i}),u=tp({x:s,y:l});if(Xe(u,pe))return null;var d=ep({container:r,subject:a,proposedScroll:u});return d?Xe(d,pe)?null:d:null},rp=So(function(e){return e===0?0:e>0?1:-1}),ua=function(){var e=function(r,a){return r<0?r:r>a?r-a:0};return function(t){var r=t.current,a=t.max,n=t.change,i=ge(r,n),o={x:e(i.x,a.x),y:e(i.y,a.y)};return Xe(o,pe)?null:o}}(),rl=function(t){var r=t.max,a=t.current,n=t.change,i={x:Math.max(a.x,r.x),y:Math.max(a.y,r.y)},o=rp(n),l=ua({max:i,current:a,change:o});return!l||o.x!==0&&l.x===0||o.y!==0&&l.y===0},ca=function(t,r){return rl({current:t.scroll.current,max:t.scroll.max,change:r})},np=function(t,r){if(!ca(t,r))return null;var a=t.scroll.max,n=t.scroll.current;return ua({current:n,max:a,change:r})},da=function(t,r){var a=t.frame;return a?rl({current:a.scroll.current,max:a.scroll.max,change:r}):!1},ap=function(t,r){var a=t.frame;return!a||!da(t,r)?null:ua({current:a.scroll.current,max:a.scroll.max,change:r})},ip=function(e){var t=e.viewport,r=e.subject,a=e.center,n=e.dragStartTime,i=e.shouldUseTimeDampening,o=tl({dragStartTime:n,container:t.frame,subject:r,center:a,shouldUseTimeDampening:i});return o&&ca(t,o)?o:null},op=function(e){var t=e.droppable,r=e.subject,a=e.center,n=e.dragStartTime,i=e.shouldUseTimeDampening,o=t.frame;if(!o)return null;var l=tl({dragStartTime:n,container:o.pageMarginBox,subject:r,center:a,shouldUseTimeDampening:i});return l&&da(t,l)?l:null},ai=function(e){var t=e.state,r=e.dragStartTime,a=e.shouldUseTimeDampening,n=e.scrollWindow,i=e.scrollDroppable,o=t.current.page.borderBoxCenter,l=t.dimensions.draggables[t.critical.draggable.id],s=l.page.marginBox;if(t.isWindowScrollAllowed){var u=t.viewport,d=ip({dragStartTime:r,viewport:u,subject:s,center:o,shouldUseTimeDampening:a});if(d){n(d);return}}var p=Jd({center:o,destination:Ae(t.impact),droppables:t.dimensions.droppables});if(!!p){var f=op({dragStartTime:r,droppable:p,subject:s,center:o,shouldUseTimeDampening:a});f&&i(p.descriptor.id,f)}},lp=function(e){var t=e.scrollWindow,r=e.scrollDroppable,a=Lt(t),n=Lt(r),i=null,o=function(d){i||O(!1);var p=i,f=p.shouldUseTimeDampening,m=p.dragStartTime;ai({state:d,scrollWindow:a,scrollDroppable:n,dragStartTime:m,shouldUseTimeDampening:f})},l=function(d){i&&O(!1);var p=Date.now(),f=!1,m=function(){f=!0};ai({state:d,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:m,scrollDroppable:m}),i={dragStartTime:p,shouldUseTimeDampening:f},f&&o(d)},s=function(){!i||(a.cancel(),n.cancel(),i=null)};return{start:l,stop:s,scroll:o}},sp=function(e){var t=e.move,r=e.scrollDroppable,a=e.scrollWindow,n=function(u,d){var p=ge(u.current.client.selection,d);t({client:p})},i=function(u,d){if(!da(u,d))return d;var p=ap(u,d);if(!p)return r(u.descriptor.id,d),null;var f=Ie(d,p);r(u.descriptor.id,f);var m=Ie(d,f);return m},o=function(u,d,p){if(!u||!ca(d,p))return p;var f=np(d,p);if(!f)return a(p),null;var m=Ie(p,f);a(m);var g=Ie(p,m);return g},l=function(u){var d=u.scrollJumpRequest;if(!!d){var p=Ae(u.impact);p||O(!1);var f=i(u.dimensions.droppables[p],d);if(!!f){var m=u.viewport,g=o(u.isWindowScrollAllowed,m,f);!g||n(u,g)}}};return l},up=function(e){var t=e.scrollDroppable,r=e.scrollWindow,a=e.move,n=lp({scrollWindow:r,scrollDroppable:t}),i=sp({move:a,scrollWindow:r,scrollDroppable:t}),o=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){n.scroll(u);return}!u.scrollJumpRequest||i(u)}},l={scroll:o,start:n.start,stop:n.stop};return l},ht="data-rbd",bt=function(){var e=ht+"-drag-handle";return{base:e,draggableId:e+"-draggable-id",contextId:e+"-context-id"}}(),Rn=function(){var e=ht+"-draggable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),cp=function(){var e=ht+"-droppable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),ii={contextId:ht+"-scroll-container-context-id"},dp=function(t){return function(r){return"["+r+'="'+t+'"]'}},Pt=function(t,r){return t.map(function(a){var n=a.styles[r];return n?a.selector+" { "+n+" }":""}).join(" ")},pp="pointer-events: none;",fp=function(e){var t=dp(e),r=function(){var l=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:t(bt.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:l,dragging:pp,dropAnimating:l}}}(),a=function(){var l=`
      transition: `+Nt.outOfTheWay+`;
    `;return{selector:t(Rn.contextId),styles:{dragging:l,dropAnimating:l,userCancel:l}}}(),n={selector:t(cp.contextId),styles:{always:"overflow-anchor: none;"}},i={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[a,r,n,i];return{always:Pt(o,"always"),resting:Pt(o,"resting"),dragging:Pt(o,"dragging"),dropAnimating:Pt(o,"dropAnimating"),userCancel:Pt(o,"userCancel")}},Oe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?v.exports.useLayoutEffect:v.exports.useEffect,mn=function(){var t=document.querySelector("head");return t||O(!1),t},oi=function(t){var r=document.createElement("style");return t&&r.setAttribute("nonce",t),r.type="text/css",r};function mp(e,t){var r=J(function(){return fp(e)},[e]),a=v.exports.useRef(null),n=v.exports.useRef(null),i=V(ce(function(p){var f=n.current;f||O(!1),f.textContent=p}),[]),o=V(function(p){var f=a.current;f||O(!1),f.textContent=p},[]);Oe(function(){!a.current&&!n.current||O(!1);var p=oi(t),f=oi(t);return a.current=p,n.current=f,p.setAttribute(ht+"-always",e),f.setAttribute(ht+"-dynamic",e),mn().appendChild(p),mn().appendChild(f),o(r.always),i(r.resting),function(){var m=function(h){var b=h.current;b||O(!1),mn().removeChild(b),h.current=null};m(a),m(n)}},[t,o,i,r.always,r.resting,e]);var l=V(function(){return i(r.dragging)},[i,r.dragging]),s=V(function(p){if(p==="DROP"){i(r.dropAnimating);return}i(r.userCancel)},[i,r.dropAnimating,r.userCancel]),u=V(function(){!n.current||i(r.resting)},[i,r.resting]),d=J(function(){return{dragging:l,dropping:s,resting:u}},[l,s,u]);return d}var nl=function(e){return e&&e.ownerDocument?e.ownerDocument.defaultView:window};function Ur(e){return e instanceof nl(e).HTMLElement}function gp(e,t){var r="["+bt.contextId+'="'+e+'"]',a=wo(document.querySelectorAll(r));if(!a.length)return null;var n=tt(a,function(i){return i.getAttribute(bt.draggableId)===t});return!n||!Ur(n)?null:n}function vp(e){var t=v.exports.useRef({}),r=v.exports.useRef(null),a=v.exports.useRef(null),n=v.exports.useRef(!1),i=V(function(f,m){var g={id:f,focus:m};return t.current[f]=g,function(){var b=t.current,x=b[f];x!==g&&delete b[f]}},[]),o=V(function(f){var m=gp(e,f);m&&m!==document.activeElement&&m.focus()},[e]),l=V(function(f,m){r.current===f&&(r.current=m)},[]),s=V(function(){a.current||!n.current||(a.current=requestAnimationFrame(function(){a.current=null;var f=r.current;f&&o(f)}))},[o]),u=V(function(f){r.current=null;var m=document.activeElement;!m||m.getAttribute(bt.draggableId)===f&&(r.current=f)},[]);Oe(function(){return n.current=!0,function(){n.current=!1;var f=a.current;f&&cancelAnimationFrame(f)}},[]);var d=J(function(){return{register:i,tryRecordFocus:u,tryRestoreFocusRecorded:s,tryShiftRecord:l}},[i,u,s,l]);return d}function hp(){var e={draggables:{},droppables:{}},t=[];function r(p){return t.push(p),function(){var m=t.indexOf(p);m!==-1&&t.splice(m,1)}}function a(p){t.length&&t.forEach(function(f){return f(p)})}function n(p){return e.draggables[p]||null}function i(p){var f=n(p);return f||O(!1),f}var o={register:function(f){e.draggables[f.descriptor.id]=f,a({type:"ADDITION",value:f})},update:function(f,m){var g=e.draggables[m.descriptor.id];!g||g.uniqueId===f.uniqueId&&(delete e.draggables[m.descriptor.id],e.draggables[f.descriptor.id]=f)},unregister:function(f){var m=f.descriptor.id,g=n(m);!g||f.uniqueId===g.uniqueId&&(delete e.draggables[m],a({type:"REMOVAL",value:f}))},getById:i,findById:n,exists:function(f){return Boolean(n(f))},getAllByType:function(f){return Ir(e.draggables).filter(function(m){return m.descriptor.type===f})}};function l(p){return e.droppables[p]||null}function s(p){var f=l(p);return f||O(!1),f}var u={register:function(f){e.droppables[f.descriptor.id]=f},unregister:function(f){var m=l(f.descriptor.id);!m||f.uniqueId===m.uniqueId&&delete e.droppables[f.descriptor.id]},getById:s,findById:l,exists:function(f){return Boolean(l(f))},getAllByType:function(f){return Ir(e.droppables).filter(function(m){return m.descriptor.type===f})}};function d(){e.draggables={},e.droppables={},t.length=0}return{draggable:o,droppable:u,subscribe:r,clean:d}}function bp(){var e=J(hp,[]);return v.exports.useEffect(function(){return function(){requestAnimationFrame(e.clean)}},[e]),e}var pa=c.createContext(null),Or=function(){var e=document.body;return e||O(!1),e},xp={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},yp=function(t){return"rbd-announcement-"+t};function Ep(e){var t=J(function(){return yp(e)},[e]),r=v.exports.useRef(null);v.exports.useEffect(function(){var i=document.createElement("div");return r.current=i,i.id=t,i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),w(i.style,xp),Or().appendChild(i),function(){setTimeout(function(){var s=Or();s.contains(i)&&s.removeChild(i),i===r.current&&(r.current=null)})}},[t]);var a=V(function(n){var i=r.current;if(i){i.textContent=n;return}},[]);return a}var Cp=0,Dp={separator:"::"};function fa(e,t){return t===void 0&&(t=Dp),J(function(){return""+e+t.separator+Cp++},[t.separator,e])}function Sp(e){var t=e.contextId,r=e.uniqueId;return"rbd-hidden-text-"+t+"-"+r}function wp(e){var t=e.contextId,r=e.text,a=fa("hidden-text",{separator:"-"}),n=J(function(){return Sp({contextId:t,uniqueId:a})},[a,t]);return v.exports.useEffect(function(){var o=document.createElement("div");return o.id=n,o.textContent=r,o.style.display="none",Or().appendChild(o),function(){var s=Or();s.contains(o)&&s.removeChild(o)}},[n,r]),n}var Wr=c.createContext(null);function al(e){var t=v.exports.useRef(e);return v.exports.useEffect(function(){t.current=e}),t}function Ip(){var e=null;function t(){return Boolean(e)}function r(o){return o===e}function a(o){e&&O(!1);var l={abandon:o};return e=l,l}function n(){e||O(!1),e=null}function i(){e&&(e.abandon(),n())}return{isClaimed:t,isActive:r,claim:a,release:n,tryAbandon:i}}var Ap=9,Op=13,ma=27,il=32,Fp=33,Pp=34,Rp=35,Mp=36,Tp=37,Bp=38,Np=39,kp=40,ur,Lp=(ur={},ur[Op]=!0,ur[Ap]=!0,ur),ol=function(e){Lp[e.keyCode]&&e.preventDefault()},qr=function(){var e="visibilitychange";if(typeof document>"u")return e;var t=[e,"ms"+e,"webkit"+e,"moz"+e,"o"+e],r=tt(t,function(a){return"on"+a in document});return r||e}(),ll=0,li=5;function Vp(e,t){return Math.abs(t.x-e.x)>=li||Math.abs(t.y-e.y)>=li}var si={type:"IDLE"};function $p(e){var t=e.cancel,r=e.completed,a=e.getPhase,n=e.setPhase;return[{eventName:"mousemove",fn:function(o){var l=o.button,s=o.clientX,u=o.clientY;if(l===ll){var d={x:s,y:u},p=a();if(p.type==="DRAGGING"){o.preventDefault(),p.actions.move(d);return}p.type!=="PENDING"&&O(!1);var f=p.point;if(!!Vp(f,d)){o.preventDefault();var m=p.actions.fluidLift(d);n({type:"DRAGGING",actions:m})}}}},{eventName:"mouseup",fn:function(o){var l=a();if(l.type!=="DRAGGING"){t();return}o.preventDefault(),l.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"mousedown",fn:function(o){a().type==="DRAGGING"&&o.preventDefault(),t()}},{eventName:"keydown",fn:function(o){var l=a();if(l.type==="PENDING"){t();return}if(o.keyCode===ma){o.preventDefault(),t();return}ol(o)}},{eventName:"resize",fn:t},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){a().type==="PENDING"&&t()}},{eventName:"webkitmouseforcedown",fn:function(o){var l=a();if(l.type==="IDLE"&&O(!1),l.actions.shouldRespectForcePress()){t();return}o.preventDefault()}},{eventName:qr,fn:t}]}function Hp(e){var t=v.exports.useRef(si),r=v.exports.useRef(Je),a=J(function(){return{eventName:"mousedown",fn:function(p){if(!p.defaultPrevented&&p.button===ll&&!(p.ctrlKey||p.metaKey||p.shiftKey||p.altKey)){var f=e.findClosestDraggableId(p);if(!!f){var m=e.tryGetLock(f,o,{sourceEvent:p});if(!!m){p.preventDefault();var g={x:p.clientX,y:p.clientY};r.current(),u(m,g)}}}}}},[e]),n=J(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(p){if(!p.defaultPrevented){var f=e.findClosestDraggableId(p);if(!!f){var m=e.findOptionsForDraggable(f);!m||m.shouldRespectForcePress||!e.canGetLock(f)||p.preventDefault()}}}}},[e]),i=V(function(){var p={passive:!1,capture:!0};r.current=Te(window,[n,a],p)},[n,a]),o=V(function(){var d=t.current;d.type!=="IDLE"&&(t.current=si,r.current(),i())},[i]),l=V(function(){var d=t.current;o(),d.type==="DRAGGING"&&d.actions.cancel({shouldBlockNextClick:!0}),d.type==="PENDING"&&d.actions.abort()},[o]),s=V(function(){var p={capture:!0,passive:!1},f=$p({cancel:l,completed:o,getPhase:function(){return t.current},setPhase:function(g){t.current=g}});r.current=Te(window,f,p)},[l,o]),u=V(function(p,f){t.current.type!=="IDLE"&&O(!1),t.current={type:"PENDING",point:f,actions:p},s()},[s]);Oe(function(){return i(),function(){r.current()}},[i])}var pt;function Gp(){}var jp=(pt={},pt[Pp]=!0,pt[Fp]=!0,pt[Mp]=!0,pt[Rp]=!0,pt);function zp(e,t){function r(){t(),e.cancel()}function a(){t(),e.drop()}return[{eventName:"keydown",fn:function(i){if(i.keyCode===ma){i.preventDefault(),r();return}if(i.keyCode===il){i.preventDefault(),a();return}if(i.keyCode===kp){i.preventDefault(),e.moveDown();return}if(i.keyCode===Bp){i.preventDefault(),e.moveUp();return}if(i.keyCode===Np){i.preventDefault(),e.moveRight();return}if(i.keyCode===Tp){i.preventDefault(),e.moveLeft();return}if(jp[i.keyCode]){i.preventDefault();return}ol(i)}},{eventName:"mousedown",fn:r},{eventName:"mouseup",fn:r},{eventName:"click",fn:r},{eventName:"touchstart",fn:r},{eventName:"resize",fn:r},{eventName:"wheel",fn:r,options:{passive:!0}},{eventName:qr,fn:r}]}function Up(e){var t=v.exports.useRef(Gp),r=J(function(){return{eventName:"keydown",fn:function(i){if(i.defaultPrevented||i.keyCode!==il)return;var o=e.findClosestDraggableId(i);if(!o)return;var l=e.tryGetLock(o,d,{sourceEvent:i});if(!l)return;i.preventDefault();var s=!0,u=l.snapLift();t.current();function d(){s||O(!1),s=!1,t.current(),a()}t.current=Te(window,zp(u,d),{capture:!0,passive:!1})}}},[e]),a=V(function(){var i={passive:!1,capture:!0};t.current=Te(window,[r],i)},[r]);Oe(function(){return a(),function(){t.current()}},[a])}var gn={type:"IDLE"},Wp=120,qp=.15;function Kp(e){var t=e.cancel,r=e.getPhase;return[{eventName:"orientationchange",fn:t},{eventName:"resize",fn:t},{eventName:"contextmenu",fn:function(n){n.preventDefault()}},{eventName:"keydown",fn:function(n){if(r().type!=="DRAGGING"){t();return}n.keyCode===ma&&n.preventDefault(),t()}},{eventName:qr,fn:t}]}function Yp(e){var t=e.cancel,r=e.completed,a=e.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(i){var o=a();if(o.type!=="DRAGGING"){t();return}o.hasMoved=!0;var l=i.touches[0],s=l.clientX,u=l.clientY,d={x:s,y:u};i.preventDefault(),o.actions.move(d)}},{eventName:"touchend",fn:function(i){var o=a();if(o.type!=="DRAGGING"){t();return}i.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"touchcancel",fn:function(i){if(a().type!=="DRAGGING"){t();return}i.preventDefault(),t()}},{eventName:"touchforcechange",fn:function(i){var o=a();o.type==="IDLE"&&O(!1);var l=i.touches[0];if(!!l){var s=l.force>=qp;if(!!s){var u=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){u&&t();return}if(u){if(o.hasMoved){i.preventDefault();return}t();return}i.preventDefault()}}}},{eventName:qr,fn:t}]}function _p(e){var t=v.exports.useRef(gn),r=v.exports.useRef(Je),a=V(function(){return t.current},[]),n=V(function(m){t.current=m},[]),i=J(function(){return{eventName:"touchstart",fn:function(m){if(!m.defaultPrevented){var g=e.findClosestDraggableId(m);if(!!g){var h=e.tryGetLock(g,l,{sourceEvent:m});if(!!h){var b=m.touches[0],x=b.clientX,y=b.clientY,C={x,y};r.current(),p(h,C)}}}}}},[e]),o=V(function(){var m={capture:!0,passive:!1};r.current=Te(window,[i],m)},[i]),l=V(function(){var f=t.current;f.type!=="IDLE"&&(f.type==="PENDING"&&clearTimeout(f.longPressTimerId),n(gn),r.current(),o())},[o,n]),s=V(function(){var f=t.current;l(),f.type==="DRAGGING"&&f.actions.cancel({shouldBlockNextClick:!0}),f.type==="PENDING"&&f.actions.abort()},[l]),u=V(function(){var m={capture:!0,passive:!1},g={cancel:s,completed:l,getPhase:a},h=Te(window,Yp(g),m),b=Te(window,Kp(g),m);r.current=function(){h(),b()}},[s,a,l]),d=V(function(){var m=a();m.type!=="PENDING"&&O(!1);var g=m.actions.fluidLift(m.point);n({type:"DRAGGING",actions:g,hasMoved:!1})},[a,n]),p=V(function(m,g){a().type!=="IDLE"&&O(!1);var h=setTimeout(d,Wp);n({type:"PENDING",point:g,actions:m,longPressTimerId:h}),u()},[u,a,n,d]);Oe(function(){return o(),function(){r.current();var g=a();g.type==="PENDING"&&(clearTimeout(g.longPressTimerId),n(gn))}},[a,o,n]),Oe(function(){var m=Te(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return m},[])}var Jp={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function sl(e,t){if(t==null)return!1;var r=Boolean(Jp[t.tagName.toLowerCase()]);if(r)return!0;var a=t.getAttribute("contenteditable");return a==="true"||a===""?!0:t===e?!1:sl(e,t.parentElement)}function Xp(e,t){var r=t.target;return Ur(r)?sl(e,r):!1}var Zp=function(e){return He(e.getBoundingClientRect()).center};function Qp(e){return e instanceof nl(e).Element}var ef=function(){var e="matches";if(typeof document>"u")return e;var t=[e,"msMatchesSelector","webkitMatchesSelector"],r=tt(t,function(a){return a in Element.prototype});return r||e}();function ul(e,t){return e==null?null:e[ef](t)?e:ul(e.parentElement,t)}function tf(e,t){return e.closest?e.closest(t):ul(e,t)}function rf(e){return"["+bt.contextId+'="'+e+'"]'}function nf(e,t){var r=t.target;if(!Qp(r))return null;var a=rf(e),n=tf(r,a);return!n||!Ur(n)?null:n}function af(e,t){var r=nf(e,t);return r?r.getAttribute(bt.draggableId):null}function of(e,t){var r="["+Rn.contextId+'="'+e+'"]',a=wo(document.querySelectorAll(r)),n=tt(a,function(i){return i.getAttribute(Rn.id)===t});return!n||!Ur(n)?null:n}function lf(e){e.preventDefault()}function cr(e){var t=e.expected,r=e.phase,a=e.isLockActive;return e.shouldWarn,!(!a()||t!==r)}function cl(e){var t=e.lockAPI,r=e.store,a=e.registry,n=e.draggableId;if(t.isClaimed())return!1;var i=a.draggable.findById(n);return!(!i||!i.options.isEnabled||!Qo(r.getState(),n))}function sf(e){var t=e.lockAPI,r=e.contextId,a=e.store,n=e.registry,i=e.draggableId,o=e.forceSensorStop,l=e.sourceEvent,s=cl({lockAPI:t,store:a,registry:n,draggableId:i});if(!s)return null;var u=n.draggable.getById(i),d=of(r,u.descriptor.id);if(!d||l&&!u.options.canDragInteractiveElements&&Xp(d,l))return null;var p=t.claim(o||Je),f="PRE_DRAG";function m(){return u.options.shouldRespectForcePress}function g(){return t.isActive(p)}function h(D,P){cr({expected:D,phase:f,isLockActive:g,shouldWarn:!0})&&a.dispatch(P())}var b=h.bind(null,"DRAGGING");function x(D){function P(){t.release(),f="COMPLETED"}f!=="PRE_DRAG"&&(P(),f!=="PRE_DRAG"&&O(!1)),a.dispatch(ed(D.liftActionArgs)),f="DRAGGING";function F(M,S){if(S===void 0&&(S={shouldBlockNextClick:!1}),D.cleanup(),S.shouldBlockNextClick){var A=Te(window,[{eventName:"click",fn:lf,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(A)}P(),a.dispatch(qo({reason:M}))}return w({isActive:function(){return cr({expected:"DRAGGING",phase:f,isLockActive:g,shouldWarn:!1})},shouldRespectForcePress:m,drop:function(S){return F("DROP",S)},cancel:function(S){return F("CANCEL",S)}},D.actions)}function y(D){var P=Lt(function(M){b(function(){return Wo({client:M})})}),F=x({liftActionArgs:{id:i,clientSelection:D,movementMode:"FLUID"},cleanup:function(){return P.cancel()},actions:{move:P}});return w({},F,{move:P})}function C(){var D={moveUp:function(){return b(ud)},moveRight:function(){return b(dd)},moveDown:function(){return b(cd)},moveLeft:function(){return b(pd)}};return x({liftActionArgs:{id:i,clientSelection:Zp(d),movementMode:"SNAP"},cleanup:Je,actions:D})}function E(){var D=cr({expected:"PRE_DRAG",phase:f,isLockActive:g,shouldWarn:!0});D&&t.release()}var I={isActive:function(){return cr({expected:"PRE_DRAG",phase:f,isLockActive:g,shouldWarn:!1})},shouldRespectForcePress:m,fluidLift:y,snapLift:C,abort:E};return I}var uf=[Hp,Up,_p];function cf(e){var t=e.contextId,r=e.store,a=e.registry,n=e.customSensors,i=e.enableDefaultSensors,o=[].concat(i?uf:[],n||[]),l=v.exports.useState(function(){return Ip()})[0],s=V(function(y,C){y.isDragging&&!C.isDragging&&l.tryAbandon()},[l]);Oe(function(){var y=r.getState(),C=r.subscribe(function(){var E=r.getState();s(y,E),y=E});return C},[l,r,s]),Oe(function(){return l.tryAbandon},[l.tryAbandon]);for(var u=V(function(x){return cl({lockAPI:l,registry:a,store:r,draggableId:x})},[l,a,r]),d=V(function(x,y,C){return sf({lockAPI:l,registry:a,contextId:t,store:r,draggableId:x,forceSensorStop:y,sourceEvent:C&&C.sourceEvent?C.sourceEvent:null})},[t,l,a,r]),p=V(function(x){return af(t,x)},[t]),f=V(function(x){var y=a.draggable.findById(x);return y?y.options:null},[a.draggable]),m=V(function(){!l.isClaimed()||(l.tryAbandon(),r.getState().phase!=="IDLE"&&r.dispatch(aa()))},[l,r]),g=V(l.isClaimed,[l]),h=J(function(){return{canGetLock:u,tryGetLock:d,findClosestDraggableId:p,findOptionsForDraggable:f,tryReleaseLock:m,isLockClaimed:g}},[u,d,p,f,m,g]),b=0;b<o.length;b++)o[b](h)}var df=function(t){return{onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragEnd:t.onDragEnd,onDragUpdate:t.onDragUpdate}};function Rt(e){return e.current||O(!1),e.current}function pf(e){var t=e.contextId,r=e.setCallbacks,a=e.sensors,n=e.nonce,i=e.dragHandleUsageInstructions,o=v.exports.useRef(null),l=al(e),s=V(function(){return df(l.current)},[l]),u=Ep(t),d=wp({contextId:t,text:i}),p=mp(t,n),f=V(function(M){Rt(o).dispatch(M)},[]),m=J(function(){return Na({publishWhileDragging:rd,updateDroppableScroll:ad,updateDroppableIsEnabled:id,updateDroppableIsCombineEnabled:od,collectionStarting:nd},f)},[f]),g=bp(),h=J(function(){return qd(g,m)},[g,m]),b=J(function(){return up(w({scrollWindow:Kd,scrollDroppable:h.scrollDroppable},Na({move:Wo},f)))},[h.scrollDroppable,f]),x=vp(t),y=J(function(){return jd({announce:u,autoScroller:b,dimensionMarshal:h,focusMarshal:x,getResponders:s,styleMarshal:p})},[u,b,h,x,s,p]);o.current=y;var C=V(function(){var M=Rt(o),S=M.getState();S.phase!=="IDLE"&&M.dispatch(aa())},[]),E=V(function(){var M=Rt(o).getState();return M.isDragging||M.phase==="DROP_ANIMATING"},[]),I=J(function(){return{isDragging:E,tryAbort:C}},[E,C]);r(I);var D=V(function(M){return Qo(Rt(o).getState(),M)},[]),P=V(function(){return at(Rt(o).getState())},[]),F=J(function(){return{marshal:h,focus:x,contextId:t,canLift:D,isMovementAllowed:P,dragHandleUsageInstructionsId:d,registry:g}},[t,h,d,x,D,P,g]);return cf({contextId:t,store:y,registry:g,customSensors:a,enableDefaultSensors:e.enableDefaultSensors!==!1}),v.exports.useEffect(function(){return C},[C]),c.createElement(Wr.Provider,{value:F},c.createElement(Ks,{context:pa,store:y},e.children))}var ff=0;function mf(){return J(function(){return""+ff++},[])}function dl(e){var t=mf(),r=e.dragHandleUsageInstructions||yr.dragHandleUsageInstructions;return c.createElement(Uu,null,function(a){return c.createElement(pf,{nonce:e.nonce,contextId:t,setCallbacks:a,dragHandleUsageInstructions:r,enableDefaultSensors:e.enableDefaultSensors,sensors:e.sensors,onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragUpdate:e.onDragUpdate,onDragEnd:e.onDragEnd},e.children)})}var pl=function(t){return function(r){return t===r}},gf=pl("scroll"),vf=pl("auto"),ui=function(t,r){return r(t.overflowX)||r(t.overflowY)},hf=function(t){var r=window.getComputedStyle(t),a={overflowX:r.overflowX,overflowY:r.overflowY};return ui(a,gf)||ui(a,vf)},bf=function(){return!1},xf=function e(t){return t==null?null:t===document.body?bf()?t:null:t===document.documentElement?null:hf(t)?t:e(t.parentElement)},Mn=function(e){return{x:e.scrollLeft,y:e.scrollTop}},yf=function e(t){if(!t)return!1;var r=window.getComputedStyle(t);return r.position==="fixed"?!0:e(t.parentElement)},Ef=function(e){var t=xf(e),r=yf(e);return{closestScrollable:t,isFixedOnPage:r}},Cf=function(e){var t=e.descriptor,r=e.isEnabled,a=e.isCombineEnabled,n=e.isFixedOnPage,i=e.direction,o=e.client,l=e.page,s=e.closest,u=function(){if(!s)return null;var m=s.scrollSize,g=s.client,h=Jo({scrollHeight:m.scrollHeight,scrollWidth:m.scrollWidth,height:g.paddingBox.height,width:g.paddingBox.width});return{pageMarginBox:s.page.marginBox,frameClient:g,scrollSize:m,shouldClipSubject:s.shouldClipSubject,scroll:{initial:s.scroll,current:s.scroll,max:h,diff:{value:pe,displacement:pe}}}}(),d=i==="vertical"?Qn:Po,p=vt({page:l,withPlaceholder:null,axis:d,frame:u}),f={descriptor:t,isCombineEnabled:a,isFixedOnPage:n,axis:d,isEnabled:r,client:o,page:l,frame:u,subject:p};return f},Df=function(t,r){var a=yo(t);if(!r||t!==r)return a;var n=a.paddingBox.top-r.scrollTop,i=a.paddingBox.left-r.scrollLeft,o=n+r.scrollHeight,l=i+r.scrollWidth,s={top:n,right:l,bottom:o,left:i},u=Yn(s,a.border),d=_n({borderBox:u,margin:a.margin,border:a.border,padding:a.padding});return d},Sf=function(e){var t=e.ref,r=e.descriptor,a=e.env,n=e.windowScroll,i=e.direction,o=e.isDropDisabled,l=e.isCombineEnabled,s=e.shouldClipSubject,u=a.closestScrollable,d=Df(t,u),p=Dr(d,n),f=function(){if(!u)return null;var g=yo(u),h={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:g,page:Dr(g,n),scroll:Mn(u),scrollSize:h,shouldClipSubject:s}}(),m=Cf({descriptor:r,isEnabled:!o,isCombineEnabled:l,isFixedOnPage:a.isFixedOnPage,direction:i,client:d,page:p,closest:f});return m},wf={passive:!1},If={passive:!0},ci=function(e){return e.shouldPublishImmediately?wf:If};function Fr(e){var t=v.exports.useContext(e);return t||O(!1),t}var dr=function(t){return t&&t.env.closestScrollable||null};function Af(e){var t=v.exports.useRef(null),r=Fr(Wr),a=fa("droppable"),n=r.registry,i=r.marshal,o=al(e),l=J(function(){return{id:e.droppableId,type:e.type,mode:e.mode}},[e.droppableId,e.mode,e.type]),s=v.exports.useRef(l),u=J(function(){return ce(function(E,I){t.current||O(!1);var D={x:E,y:I};i.updateDroppableScroll(l.id,D)})},[l.id,i]),d=V(function(){var E=t.current;return!E||!E.env.closestScrollable?pe:Mn(E.env.closestScrollable)},[]),p=V(function(){var E=d();u(E.x,E.y)},[d,u]),f=J(function(){return Lt(p)},[p]),m=V(function(){var E=t.current,I=dr(E);E&&I||O(!1);var D=E.scrollOptions;if(D.shouldPublishImmediately){p();return}f()},[f,p]),g=V(function(E,I){t.current&&O(!1);var D=o.current,P=D.getDroppableRef();P||O(!1);var F=Ef(P),M={ref:P,descriptor:l,env:F,scrollOptions:I};t.current=M;var S=Sf({ref:P,descriptor:l,env:F,windowScroll:E,direction:D.direction,isDropDisabled:D.isDropDisabled,isCombineEnabled:D.isCombineEnabled,shouldClipSubject:!D.ignoreContainerClipping}),A=F.closestScrollable;return A&&(A.setAttribute(ii.contextId,r.contextId),A.addEventListener("scroll",m,ci(M.scrollOptions))),S},[r.contextId,l,m,o]),h=V(function(){var E=t.current,I=dr(E);return E&&I||O(!1),Mn(I)},[]),b=V(function(){var E=t.current;E||O(!1);var I=dr(E);t.current=null,I&&(f.cancel(),I.removeAttribute(ii.contextId),I.removeEventListener("scroll",m,ci(E.scrollOptions)))},[m,f]),x=V(function(E){var I=t.current;I||O(!1);var D=dr(I);D||O(!1),D.scrollTop+=E.y,D.scrollLeft+=E.x},[]),y=J(function(){return{getDimensionAndWatchScroll:g,getScrollWhileDragging:h,dragStopped:b,scroll:x}},[b,g,h,x]),C=J(function(){return{uniqueId:a,descriptor:l,callbacks:y}},[y,l,a]);Oe(function(){return s.current=C.descriptor,n.droppable.register(C),function(){t.current&&b(),n.droppable.unregister(C)}},[y,l,b,C,i,n.droppable]),Oe(function(){!t.current||i.updateDroppableIsEnabled(s.current.id,!e.isDropDisabled)},[e.isDropDisabled,i]),Oe(function(){!t.current||i.updateDroppableIsCombineEnabled(s.current.id,e.isCombineEnabled)},[e.isCombineEnabled,i])}function vn(){}var di={width:0,height:0,margin:Ju},Of=function(t){var r=t.isAnimatingOpenOnMount,a=t.placeholder,n=t.animate;return r||n==="close"?di:{height:a.client.borderBox.height,width:a.client.borderBox.width,margin:a.client.margin}},Ff=function(t){var r=t.isAnimatingOpenOnMount,a=t.placeholder,n=t.animate,i=Of({isAnimatingOpenOnMount:r,placeholder:a,animate:n});return{display:a.display,boxSizing:"border-box",width:i.width,height:i.height,marginTop:i.margin.top,marginRight:i.margin.right,marginBottom:i.margin.bottom,marginLeft:i.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:n!=="none"?Nt.placeholder:null}};function Pf(e){var t=v.exports.useRef(null),r=V(function(){!t.current||(clearTimeout(t.current),t.current=null)},[]),a=e.animate,n=e.onTransitionEnd,i=e.onClose,o=e.contextId,l=v.exports.useState(e.animate==="open"),s=l[0],u=l[1];v.exports.useEffect(function(){return s?a!=="open"?(r(),u(!1),vn):t.current?vn:(t.current=setTimeout(function(){t.current=null,u(!1)}),r):vn},[a,s,r]);var d=V(function(f){f.propertyName==="height"&&(n(),a==="close"&&i())},[a,i,n]),p=Ff({isAnimatingOpenOnMount:s,animate:e.animate,placeholder:e.placeholder});return c.createElement(e.placeholder.tagName,{style:p,"data-rbd-placeholder-context-id":o,onTransitionEnd:d,ref:e.innerRef})}var Rf=c.memo(Pf),ga=c.createContext(null),Mf=function(e){Ui(t,e);function t(){for(var a,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=e.call.apply(e,[this].concat(i))||this,a.state={isVisible:Boolean(a.props.on),data:a.props.on,animate:a.props.shouldAnimate&&a.props.on?"open":"none"},a.onClose=function(){a.state.animate==="close"&&a.setState({isVisible:!1})},a}t.getDerivedStateFromProps=function(n,i){return n.shouldAnimate?n.on?{isVisible:!0,data:n.on,animate:"open"}:i.isVisible?{isVisible:!0,data:i.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:Boolean(n.on),data:n.on,animate:"none"}};var r=t.prototype;return r.render=function(){if(!this.state.isVisible)return null;var n={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(n)},t}(c.PureComponent),pi={dragging:5e3,dropAnimating:4500},Tf=function(t,r){return r?Nt.drop(r.duration):t?Nt.snap:Nt.fluid},Bf=function(t,r){return t?r?Gt.opacity.drop:Gt.opacity.combining:null},Nf=function(t){return t.forceShouldAnimate!=null?t.forceShouldAnimate:t.mode==="SNAP"};function kf(e){var t=e.dimension,r=t.client,a=e.offset,n=e.combineWith,i=e.dropping,o=Boolean(n),l=Nf(e),s=Boolean(i),u=s?Fn.drop(a,o):Fn.moveTo(a),d={position:"fixed",top:r.marginBox.top,left:r.marginBox.left,boxSizing:"border-box",width:r.borderBox.width,height:r.borderBox.height,transition:Tf(l,i),transform:u,opacity:Bf(o,s),zIndex:s?pi.dropAnimating:pi.dragging,pointerEvents:"none"};return d}function Lf(e){return{transform:Fn.moveTo(e.offset),transition:e.shouldAnimateDisplacement?null:"none"}}function Vf(e){return e.type==="DRAGGING"?kf(e):Lf(e)}function $f(e,t,r){r===void 0&&(r=pe);var a=window.getComputedStyle(t),n=t.getBoundingClientRect(),i=xo(n,a),o=Dr(i,r),l={client:i,tagName:t.tagName.toLowerCase(),display:a.display},s={x:i.marginBox.width,y:i.marginBox.height},u={descriptor:e,placeholder:l,displaceBy:s,client:i,page:o};return u}function Hf(e){var t=fa("draggable"),r=e.descriptor,a=e.registry,n=e.getDraggableRef,i=e.canDragInteractiveElements,o=e.shouldRespectForcePress,l=e.isEnabled,s=J(function(){return{canDragInteractiveElements:i,shouldRespectForcePress:o,isEnabled:l}},[i,l,o]),u=V(function(m){var g=n();return g||O(!1),$f(r,g,m)},[r,n]),d=J(function(){return{uniqueId:t,descriptor:r,options:s,getDimension:u}},[r,u,s,t]),p=v.exports.useRef(d),f=v.exports.useRef(!0);Oe(function(){return a.draggable.register(p.current),function(){return a.draggable.unregister(p.current)}},[a.draggable]),Oe(function(){if(f.current){f.current=!1;return}var m=p.current;p.current=d,a.draggable.update(d,m)},[d,a.draggable])}function Gf(e){e.preventDefault()}function jf(e){var t=v.exports.useRef(null),r=V(function(M){t.current=M},[]),a=V(function(){return t.current},[]),n=Fr(Wr),i=n.contextId,o=n.dragHandleUsageInstructionsId,l=n.registry,s=Fr(ga),u=s.type,d=s.droppableId,p=J(function(){return{id:e.draggableId,index:e.index,type:u,droppableId:d}},[e.draggableId,e.index,u,d]),f=e.children,m=e.draggableId,g=e.isEnabled,h=e.shouldRespectForcePress,b=e.canDragInteractiveElements,x=e.isClone,y=e.mapped,C=e.dropAnimationFinished;if(!x){var E=J(function(){return{descriptor:p,registry:l,getDraggableRef:a,canDragInteractiveElements:b,shouldRespectForcePress:h,isEnabled:g}},[p,l,a,b,h,g]);Hf(E)}var I=J(function(){return g?{tabIndex:0,role:"button","aria-describedby":o,"data-rbd-drag-handle-draggable-id":m,"data-rbd-drag-handle-context-id":i,draggable:!1,onDragStart:Gf}:null},[i,o,m,g]),D=V(function(M){y.type==="DRAGGING"&&(!y.dropping||M.propertyName==="transform"&&C())},[C,y]),P=J(function(){var M=Vf(y),S=y.type==="DRAGGING"&&y.dropping?D:null,A={innerRef:r,draggableProps:{"data-rbd-draggable-context-id":i,"data-rbd-draggable-id":m,style:M,onTransitionEnd:S},dragHandleProps:I};return A},[i,I,m,y,D,r]),F=J(function(){return{draggableId:p.id,type:p.type,source:{index:p.index,droppableId:p.droppableId}}},[p.droppableId,p.id,p.index,p.type]);return f(P,y.snapshot,F)}var fl=function(e,t){return e===t},ml=function(e){var t=e.combine,r=e.destination;return r?r.droppableId:t?t.droppableId:null},zf=function(t){return t.combine?t.combine.draggableId:null},Uf=function(t){return t.at&&t.at.type==="COMBINE"?t.at.combine.draggableId:null};function Wf(){var e=ce(function(n,i){return{x:n,y:i}}),t=ce(function(n,i,o,l,s){return{isDragging:!0,isClone:i,isDropAnimating:Boolean(s),dropAnimation:s,mode:n,draggingOver:o,combineWith:l,combineTargetFor:null}}),r=ce(function(n,i,o,l,s,u,d){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:s,combineWith:u,mode:i,offset:n,dimension:o,forceShouldAnimate:d,snapshot:t(i,l,s,u,null)}}}),a=function(i,o){if(i.isDragging){if(i.critical.draggable.id!==o.draggableId)return null;var l=i.current.client.offset,s=i.dimensions.draggables[o.draggableId],u=Ae(i.impact),d=Uf(i.impact),p=i.forceShouldAnimate;return r(e(l.x,l.y),i.movementMode,s,o.isClone,u,d,p)}if(i.phase==="DROP_ANIMATING"){var f=i.completed;if(f.result.draggableId!==o.draggableId)return null;var m=o.isClone,g=i.dimensions.draggables[o.draggableId],h=f.result,b=h.mode,x=ml(h),y=zf(h),C=i.dropDuration,E={duration:C,curve:oa.drop,moveTo:i.newHomeClientOffset,opacity:y?Gt.opacity.drop:null,scale:y?Gt.scale.drop:null};return{mapped:{type:"DRAGGING",offset:i.newHomeClientOffset,dimension:g,dropping:E,draggingOver:x,combineWith:y,mode:b,forceShouldAnimate:null,snapshot:t(b,m,x,y,E)}}}return null};return a}function gl(e){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:e,combineWith:null}}var qf={mapped:{type:"SECONDARY",offset:pe,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:gl(null)}};function Kf(){var e=ce(function(o,l){return{x:o,y:l}}),t=ce(gl),r=ce(function(o,l,s){return l===void 0&&(l=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:l,shouldAnimateDisplacement:s,snapshot:t(l)}}}),a=function(l){return l?r(pe,l,!0):null},n=function(l,s,u,d){var p=u.displaced.visible[l],f=Boolean(d.inVirtualList&&d.effected[l]),m=Gr(u),g=m&&m.draggableId===l?s:null;if(!p){if(!f)return a(g);if(u.displaced.invisible[l])return null;var h=Ct(d.displacedBy.point),b=e(h.x,h.y);return r(b,g,!0)}if(f)return a(g);var x=u.displacedBy.point,y=e(x.x,x.y);return r(y,g,p.shouldAnimate)},i=function(l,s){if(l.isDragging)return l.critical.draggable.id===s.draggableId?null:n(s.draggableId,l.critical.draggable.id,l.impact,l.afterCritical);if(l.phase==="DROP_ANIMATING"){var u=l.completed;return u.result.draggableId===s.draggableId?null:n(s.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return i}var Yf=function(){var t=Wf(),r=Kf(),a=function(i,o){return t(i,o)||r(i,o)||qf};return a},_f={dropAnimationFinished:Ko},Jf=ho(Yf,_f,null,{context:pa,pure:!0,areStatePropsEqual:fl})(jf);function vl(e){var t=Fr(ga),r=t.isUsingCloneFor;return r===e.draggableId&&!e.isClone?null:c.createElement(Jf,e)}function hl(e){var t=typeof e.isDragDisabled=="boolean"?!e.isDragDisabled:!0,r=Boolean(e.disableInteractiveElementBlocking),a=Boolean(e.shouldRespectForcePress);return c.createElement(vl,w({},e,{isClone:!1,isEnabled:t,canDragInteractiveElements:r,shouldRespectForcePress:a}))}function Xf(e){var t=v.exports.useContext(Wr);t||O(!1);var r=t.contextId,a=t.isMovementAllowed,n=v.exports.useRef(null),i=v.exports.useRef(null),o=e.children,l=e.droppableId,s=e.type,u=e.mode,d=e.direction,p=e.ignoreContainerClipping,f=e.isDropDisabled,m=e.isCombineEnabled,g=e.snapshot,h=e.useClone,b=e.updateViewportMaxScroll,x=e.getContainerForClone,y=V(function(){return n.current},[]),C=V(function(A){n.current=A},[]);V(function(){return i.current},[]);var E=V(function(A){i.current=A},[]),I=V(function(){a()&&b({maxScroll:Zo()})},[a,b]);Af({droppableId:l,type:s,mode:u,direction:d,isDropDisabled:f,isCombineEnabled:m,ignoreContainerClipping:p,getDroppableRef:y});var D=c.createElement(Mf,{on:e.placeholder,shouldAnimate:e.shouldAnimatePlaceholder},function(A){var T=A.onClose,B=A.data,N=A.animate;return c.createElement(Rf,{placeholder:B,onClose:T,innerRef:E,animate:N,contextId:r,onTransitionEnd:I})}),P=J(function(){return{innerRef:C,placeholder:D,droppableProps:{"data-rbd-droppable-id":l,"data-rbd-droppable-context-id":r}}},[r,l,D,C]),F=h?h.dragging.draggableId:null,M=J(function(){return{droppableId:l,type:s,isUsingCloneFor:F}},[l,F,s]);function S(){if(!h)return null;var A=h.dragging,T=h.render,B=c.createElement(vl,{draggableId:A.draggableId,index:A.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(N,R){return T(N,R,A)});return ss.createPortal(B,x())}return c.createElement(ga.Provider,{value:M},o(P,g),S())}var hn=function(t,r){return t===r.droppable.type},fi=function(t,r){return r.draggables[t.draggable.id]},Zf=function(){var t={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},r=w({},t,{shouldAnimatePlaceholder:!1}),a=ce(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),n=ce(function(o,l,s,u,d,p){var f=d.descriptor.id,m=d.descriptor.droppableId===o;if(m){var g=p?{render:p,dragging:a(d.descriptor)}:null,h={isDraggingOver:s,draggingOverWith:s?f:null,draggingFromThisWith:f,isUsingPlaceholder:!0};return{placeholder:d.placeholder,shouldAnimatePlaceholder:!1,snapshot:h,useClone:g}}if(!l)return r;if(!u)return t;var b={isDraggingOver:s,draggingOverWith:f,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:d.placeholder,shouldAnimatePlaceholder:!0,snapshot:b,useClone:null}}),i=function(l,s){var u=s.droppableId,d=s.type,p=!s.isDropDisabled,f=s.renderClone;if(l.isDragging){var m=l.critical;if(!hn(d,m))return r;var g=fi(m,l.dimensions),h=Ae(l.impact)===u;return n(u,p,h,h,g,f)}if(l.phase==="DROP_ANIMATING"){var b=l.completed;if(!hn(d,b.critical))return r;var x=fi(b.critical,l.dimensions);return n(u,p,ml(b.result)===u,Ae(b.impact)===u,x,f)}if(l.phase==="IDLE"&&l.completed&&!l.shouldFlush){var y=l.completed;if(!hn(d,y.critical))return r;var C=Ae(y.impact)===u,E=Boolean(y.impact.at&&y.impact.at.type==="COMBINE"),I=y.critical.droppable.id===u;return C?E?t:r:I?t:r}return r};return i},Qf={updateViewportMaxScroll:sd};function em(){return document.body||O(!1),document.body}var tm={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:em},va=ho(Zf,Qf,null,{context:pa,pure:!0,areStatePropsEqual:fl})(Xf);va.defaultProps=tm;const rm=le.div`
  width: 24rem;
  min-width: 13rem;
  height: 100%;
  max-height: 100vh;
  position: relative;
  overflow: auto;
  resize: horizontal;

  border-right: 1px solid var(--text-body);

  header {
    background: ${({fill:e})=>e!=null?e:L.blue};
    width: 100%;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    display: grid;
    place-items: center;
    text-align: center;
    position: sticky;
    top: 0;
    span {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .searchIcon {
        cursor: pointer;
        background: ${L.background};
        fill: ${L.textTitle};
        padding: 0.2rem;
        border-radius: 50%;
      }
    }
  }
  .itemDraggableListContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    border-bottom: 1px solid var(--text-body);
    &.itemDraggableSelected {
      background: ${({fill:e})=>e&&H(.8,e)};
    }
    .leftDotsIconContainer {
      width: 1rem;
      margin: 0 0.5rem;
      .leftDotsIcon {
        width: 1rem;
      }
    }
    button {
      min-width: 4rem;
      width: 100%;
      min-height: 3.25rem;
      background: transparent;
      border: 0;
      text-align: left;
      padding: 0 1rem;
      font-size: 1.15rem;
      color: var(--text-title);
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: ${H(.9,L.textBody)};
      }
    }
  }
  #addFirstItemContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 1rem;
    span {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    #addFirstItemBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--triple-gradient);
      background-size: 250%;
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 100%;
      }
    }
    #addFirstFunnelBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--yellow);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
    }
    #addFirstTriggerBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--orange);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
    }
  }
`,nm={audios:"\xC1udios",mensagens:"Mensagens",medias:"M\xEDdias",funis:"Funis",docs:"Documentos",triggers:"Gatilhos"};function wt({fill:e,itemType:t}){const{selectedItem:r,setSelectedItem:a,selectedTrigger:n,selectedFunnel:i,setSelectedFunnel:o,setSelectedTrigger:l,getItemFromStorage:s,getFunnelFromStorage:u,getTriggerFromStorage:d,changeItemPosition:p,getFunnelName:f}=de(),{isDarkTheme:m}=Fe(),[g,h]=v.exports.useState(!0),{mensagensIndex:b,createNewMessage:x}=zt(),{audiosIndex:y,createNewAudio:C}=Ut(),{mediasIndex:E,createNewMedia:I}=Wt(),{docsIndex:D,createNewDoc:P}=qt(),{funnelsIndex:F,createNewFunnel:M}=lt(),{triggersIndex:S,createNewTrigger:A,toggleEnabledTrigger:T,updateTriggerFunnelId:B}=Kt(),[N,R]=v.exports.useState([]),[G,K]=v.exports.useState(""),Y={audios:y,mensagens:b,medias:E,docs:D,funis:F,triggers:S},ee={mensagens:x,audios:C,medias:I,funis:M,docs:P,triggers:A};v.exports.useEffect(()=>{R(Y[t]),h(!1)},[t,b,y,E,D,F,S]);function X(q,j){t==="funis"?u(q).then(_=>{o(_)}):t==="triggers"?d(q).then(_=>{l(_)}):s(q).then(_=>{a({..._,name:j})})}function ne(q){const{source:j,destination:_}=q;!_||j.index===_.index||p(j.index,_.index,t)}const[W,te]=v.exports.useState(!1);function se(){W&&K(""),te(q=>!q)}return N[0],Yi(),c.createElement(rm,{fill:e!=null?e:""},c.createElement("header",null,c.createElement("span",null,"Gerenciamento de ",nm[t]," ",c.createElement(us,{className:"searchIcon",onClick:se})),!!W&&c.createElement(ws,{value:G,onChange:q=>K(q.target.value),autoFocus:!0})),g&&c.createElement("div",{id:"loadingContainer",className:"w-ful h-full text-lg text-center pt-4"},"Carregando..."),Y&&!g&&(!N||N.length===0)?c.createElement("div",{id:"addFirstItemContainer"},c.createElement("span",null,"Nenhum"," ",t==="funis"?"funil":t==="triggers"?"gatilho":"item"," ","cadastrado ainda, clique no bot\xE3o abaixo para adicionar seu primeiro"),c.createElement("button",{type:"button",id:t==="funis"?"addFirstFunnelBtn":t==="triggers"?"addFirstTriggerBtn":"addFirstItemBtn",onClick:()=>{ee[t]()}},"+ Novo"," ",t==="funis"?"Funil":t==="triggers"?"Gatilho":"Item")):c.createElement(dl,{onDragEnd:ne},c.createElement(va,{droppableId:"listedItems"},q=>c.createElement("div",{...q.droppableProps,ref:q.innerRef},Y&&(N==null?void 0:N.map((j,_)=>Er(j.name).toLowerCase().includes(Er(G).toLowerCase())&&c.createElement(hl,{key:j.id,draggableId:j.id,index:_,isDragDisabled:G.length>0},ie=>c.createElement("div",{className:`itemDraggableListContainer ${(r==null?void 0:r.id)===j.id||(i==null?void 0:i.id)===j.id||(n==null?void 0:n.id)===j.id?"itemDraggableSelected":""}`,ref:ie.innerRef,...ie.draggableProps,...ie.dragHandleProps,style:ie.draggableProps.style},c.createElement("div",{className:"leftDotsIconContainer"},c.createElement(_i,{className:"leftDotsIcon"})),c.createElement("button",{type:"button",id:j.id,onClick:()=>{X(j.id,j.name)}},j.name,t==="triggers"&&j.type==="trigger"&&c.createElement("div",{className:"flex items-center justify-between ml-4"},!!j.dontSendToContact&&c.createElement(_e,{title:"Gatilho n\xE3o ser\xE1 enviado para contatos salvos"},c.createElement("div",{className:"w-6"},c.createElement(cs,{className:Qe("w-full fill-gray-400")}))),c.createElement(_e,{title:j.funnelId?`Funil: ${f(j.funnelId)}`:"Gatilho n\xE3o vinculado a um funil"},c.createElement("div",{className:"w-6"},c.createElement(ds,{className:Qe("w-full",{"fill-zap-gold":!!j.funnelId,"fill-gray-400":!j.funnelId})}))),c.createElement(_e,{title:j.enabled?"Clique para desativar o gatilho":"Clique para ativar o gatilho"},c.createElement("div",null,c.createElement(Zi,{zvTheme:m?"dark":"light",sx:{m:1},checked:!!j.enabled,onChange:()=>{T(j.id)}}))))))))),q.placeholder))))}var am=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ir(e,t){var r=im(e);if(typeof r.path!="string"){var a=e.webkitRelativePath;Object.defineProperty(r,"path",{value:typeof t=="string"?t:typeof a=="string"&&a.length>0?a:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}function im(e){var t=e.name,r=t&&t.lastIndexOf(".")!==-1;if(r&&!e.type){var a=t.split(".").pop().toLowerCase(),n=am.get(a);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}var om=[".DS_Store","Thumbs.db"];function lm(e){return xt(this,void 0,void 0,function(){return yt(this,function(t){return Pr(e)&&sm(e)?[2,pm(e.dataTransfer,e.type)]:um(e)?[2,cm(e)]:Array.isArray(e)&&e.every(function(r){return"getFile"in r&&typeof r.getFile=="function"})?[2,dm(e)]:[2,[]]})})}function sm(e){return Pr(e.dataTransfer)}function um(e){return Pr(e)&&Pr(e.target)}function Pr(e){return typeof e=="object"&&e!==null}function cm(e){return Tn(e.target.files).map(function(t){return ir(t)})}function dm(e){return xt(this,void 0,void 0,function(){var t;return yt(this,function(r){switch(r.label){case 0:return[4,Promise.all(e.map(function(a){return a.getFile()}))];case 1:return t=r.sent(),[2,t.map(function(a){return ir(a)})]}})})}function pm(e,t){return xt(this,void 0,void 0,function(){var r,a;return yt(this,function(n){switch(n.label){case 0:return e===null?[2,[]]:e.items?(r=Tn(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,r]:[4,Promise.all(r.map(fm))]):[3,2];case 1:return a=n.sent(),[2,mi(bl(a))];case 2:return[2,mi(Tn(e.files).map(function(i){return ir(i)}))]}})})}function mi(e){return e.filter(function(t){return om.indexOf(t.name)===-1})}function Tn(e){if(e===null)return[];for(var t=[],r=0;r<e.length;r++){var a=e[r];t.push(a)}return t}function fm(e){if(typeof e.webkitGetAsEntry!="function")return gi(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?xl(t):gi(e)}function bl(e){return e.reduce(function(t,r){return ks(t,Array.isArray(r)?bl(r):[r])},[])}function gi(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var r=ir(t);return Promise.resolve(r)}function mm(e){return xt(this,void 0,void 0,function(){return yt(this,function(t){return[2,e.isDirectory?xl(e):gm(e)]})})}function xl(e){var t=e.createReader();return new Promise(function(r,a){var n=[];function i(){var o=this;t.readEntries(function(l){return xt(o,void 0,void 0,function(){var s,u,d;return yt(this,function(p){switch(p.label){case 0:if(l.length)return[3,5];p.label=1;case 1:return p.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return s=p.sent(),r(s),[3,4];case 3:return u=p.sent(),a(u),[3,4];case 4:return[3,6];case 5:d=Promise.all(l.map(mm)),n.push(d),i(),p.label=6;case 6:return[2]}})})},function(l){a(l)})}i()})}function gm(e){return xt(this,void 0,void 0,function(){return yt(this,function(t){return[2,new Promise(function(r,a){e.file(function(n){var i=ir(n,e.fullPath);r(i)},function(n){a(n)})})]})})}var vm=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),a=e.name||"",n=(e.type||"").toLowerCase(),i=n.replace(/\/.*$/,"");return r.some(function(o){var l=o.trim().toLowerCase();return l.charAt(0)==="."?a.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):n===l})}return!0};function vi(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function hi(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vi(Object(r),!0).forEach(function(a){yl(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vi(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function yl(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bi(e,t){return ym(e)||xm(e,t)||bm(e,t)||hm()}function hm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bm(e,t){if(!!e){if(typeof e=="string")return xi(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xi(e,t)}}function xi(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function xm(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a=[],n=!0,i=!1,o,l;try{for(r=r.call(e);!(n=(o=r.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(s){i=!0,l=s}finally{try{!n&&r.return!=null&&r.return()}finally{if(i)throw l}}return a}}function ym(e){if(Array.isArray(e))return e}var Em="file-invalid-type",Cm="file-too-large",Dm="file-too-small",Sm="too-many-files",wm=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var r=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:Em,message:"File type must be ".concat(r)}},yi=function(t){return{code:Cm,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},Ei=function(t){return{code:Dm,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},Im={code:Sm,message:"Too many files"};function El(e,t){var r=e.type==="application/x-moz-file"||vm(e,t);return[r,r?null:wm(t)]}function Cl(e,t,r){if(Mt(e.size))if(Mt(t)&&Mt(r)){if(e.size>r)return[!1,yi(r)];if(e.size<t)return[!1,Ei(t)]}else{if(Mt(t)&&e.size<t)return[!1,Ei(t)];if(Mt(r)&&e.size>r)return[!1,yi(r)]}return[!0,null]}function Mt(e){return e!=null}function Am(e){var t=e.files,r=e.accept,a=e.minSize,n=e.maxSize,i=e.multiple,o=e.maxFiles;return!i&&t.length>1||i&&o>=1&&t.length>o?!1:t.every(function(l){var s=El(l,r),u=bi(s,1),d=u[0],p=Cl(l,a,n),f=bi(p,1),m=f[0];return d&&m})}function Rr(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function pr(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ci(e){e.preventDefault()}function Om(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Fm(e){return e.indexOf("Edge/")!==-1}function Pm(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Om(e)||Fm(e)}function ze(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(a){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.some(function(l){return!Rr(a)&&l&&l.apply(void 0,[a].concat(i)),Rr(a)})}}function Rm(){return"showOpenFilePicker"in window}function Mm(e){return e=typeof e=="string"?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter(function(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||/\w+\/[-+.\w]+/g.test(t)}).reduce(function(t,r){return hi(hi({},t),{},yl({},r,[]))},{}):{}}]}function Tm(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Bm(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}var Nm=["children"],km=["open"],Lm=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Vm=["refKey","onChange","onClick"];function $m(e){return jm(e)||Gm(e)||Dl(e)||Hm()}function Hm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jm(e){if(Array.isArray(e))return Bn(e)}function bn(e,t){return Wm(e)||Um(e,t)||Dl(e,t)||zm()}function zm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dl(e,t){if(!!e){if(typeof e=="string")return Bn(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Bn(e,t)}}function Bn(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Um(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a=[],n=!0,i=!1,o,l;try{for(r=r.call(e);!(n=(o=r.next()).done)&&(a.push(o.value),!(t&&a.length===t));n=!0);}catch(s){i=!0,l=s}finally{try{!n&&r.return!=null&&r.return()}finally{if(i)throw l}}return a}}function Wm(e){if(Array.isArray(e))return e}function Di(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Di(Object(r),!0).forEach(function(a){Nn(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Di(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Nn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mr(e,t){if(e==null)return{};var r=qm(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function qm(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Kr=v.exports.forwardRef(function(e,t){var r=e.children,a=Mr(e,Nm),n=Km(a),i=n.open,o=Mr(n,km);return v.exports.useImperativeHandle(t,function(){return{open:i}},[i]),c.createElement(v.exports.Fragment,null,r(oe(oe({},o),{},{open:i})))});Kr.displayName="Dropzone";var Sl={disabled:!1,getFilesFromEvent:lm,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0};Kr.defaultProps=Sl;Kr.propTypes={children:ae.exports.func,accept:ae.exports.oneOfType([ae.exports.string,ae.exports.arrayOf(ae.exports.string)]),multiple:ae.exports.bool,preventDropOnDocument:ae.exports.bool,noClick:ae.exports.bool,noKeyboard:ae.exports.bool,noDrag:ae.exports.bool,noDragEventsBubbling:ae.exports.bool,minSize:ae.exports.number,maxSize:ae.exports.number,maxFiles:ae.exports.number,disabled:ae.exports.bool,getFilesFromEvent:ae.exports.func,onFileDialogCancel:ae.exports.func,onFileDialogOpen:ae.exports.func,useFsAccessApi:ae.exports.bool,onDragEnter:ae.exports.func,onDragLeave:ae.exports.func,onDragOver:ae.exports.func,onDrop:ae.exports.func,onDropAccepted:ae.exports.func,onDropRejected:ae.exports.func,validator:ae.exports.func};const Yr=Kr;var kn={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Km(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=oe(oe({},Sl),e),r=t.accept,a=t.disabled,n=t.getFilesFromEvent,i=t.maxSize,o=t.minSize,l=t.multiple,s=t.maxFiles,u=t.onDragEnter,d=t.onDragLeave,p=t.onDragOver,f=t.onDrop,m=t.onDropAccepted,g=t.onDropRejected,h=t.onFileDialogCancel,b=t.onFileDialogOpen,x=t.useFsAccessApi,y=t.preventDropOnDocument,C=t.noClick,E=t.noKeyboard,I=t.noDrag,D=t.noDragEventsBubbling,P=t.validator,F=v.exports.useMemo(function(){return typeof b=="function"?b:Si},[b]),M=v.exports.useMemo(function(){return typeof h=="function"?h:Si},[h]),S=v.exports.useRef(null),A=v.exports.useRef(null),T=v.exports.useReducer(Ym,kn),B=bn(T,2),N=B[0],R=B[1],G=N.isFocused,K=N.isFileDialogActive,Y=N.draggedFiles,ee=v.exports.useRef(typeof window<"u"&&window.isSecureContext&&x&&Rm()),X=function(){!ee.current&&K&&setTimeout(function(){if(A.current){var U=A.current.files;U.length||(R({type:"closeDialog"}),M())}},300)};v.exports.useEffect(function(){return window.addEventListener("focus",X,!1),function(){window.removeEventListener("focus",X,!1)}},[A,K,M,ee]);var ne=v.exports.useRef([]),W=function(U){S.current&&S.current.contains(U.target)||(U.preventDefault(),ne.current=[])};v.exports.useEffect(function(){return y&&(document.addEventListener("dragover",Ci,!1),document.addEventListener("drop",W,!1)),function(){y&&(document.removeEventListener("dragover",Ci),document.removeEventListener("drop",W))}},[S,y]);var te=v.exports.useCallback(function(k){k.preventDefault(),k.persist(),je(k),ne.current=[].concat($m(ne.current),[k.target]),pr(k)&&Promise.resolve(n(k)).then(function(U){Rr(k)&&!D||(R({draggedFiles:U,isDragActive:!0,type:"setDraggedFiles"}),u&&u(k))})},[n,u,D]),se=v.exports.useCallback(function(k){k.preventDefault(),k.persist(),je(k);var U=pr(k);if(U&&k.dataTransfer)try{k.dataTransfer.dropEffect="copy"}catch{}return U&&p&&p(k),!1},[p,D]),q=v.exports.useCallback(function(k){k.preventDefault(),k.persist(),je(k);var U=ne.current.filter(function(xe){return S.current&&S.current.contains(xe)}),fe=U.indexOf(k.target);fe!==-1&&U.splice(fe,1),ne.current=U,!(U.length>0)&&(R({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),pr(k)&&d&&d(k))},[S,d,D]),j=v.exports.useCallback(function(k,U){var fe=[],xe=[];k.forEach(function(Le){var Ot=El(Le,r),ct=bn(Ot,2),Xr=ct[0],Zr=ct[1],Qr=Cl(Le,o,i),lr=bn(Qr,2),en=lr[0],tn=lr[1],rn=P?P(Le):null;if(Xr&&en&&!rn)fe.push(Le);else{var nn=[Zr,tn];rn&&(nn=nn.concat(rn)),xe.push({file:Le,errors:nn.filter(function(is){return is})})}}),(!l&&fe.length>1||l&&s>=1&&fe.length>s)&&(fe.forEach(function(Le){xe.push({file:Le,errors:[Im]})}),fe.splice(0)),R({acceptedFiles:fe,fileRejections:xe,type:"setFiles"}),f&&f(fe,xe,U),xe.length>0&&g&&g(xe,U),fe.length>0&&m&&m(fe,U)},[R,l,r,o,i,s,f,m,g,P]),_=v.exports.useCallback(function(k){k.preventDefault(),k.persist(),je(k),ne.current=[],pr(k)&&Promise.resolve(n(k)).then(function(U){Rr(k)&&!D||j(U,k)}),R({type:"reset"})},[n,j,D]),ie=v.exports.useCallback(function(){if(ee.current){R({type:"openDialog"}),F();var k={multiple:l,types:Mm(r)};window.showOpenFilePicker(k).then(function(U){return n(U)}).then(function(U){j(U,null),R({type:"closeDialog"})}).catch(function(U){Tm(U)?(M(U),R({type:"closeDialog"})):Bm(U)&&(ee.current=!1,A.current&&(A.current.value=null,A.current.click()))});return}A.current&&(R({type:"openDialog"}),F(),A.current.value=null,A.current.click())},[R,F,M,x,j,r,l]),Ee=v.exports.useCallback(function(k){!S.current||!S.current.isEqualNode(k.target)||(k.keyCode===32||k.keyCode===13)&&(k.preventDefault(),ie())},[S,ie]),Ce=v.exports.useCallback(function(){R({type:"focus"})},[]),Ne=v.exports.useCallback(function(){R({type:"blur"})},[]),ke=v.exports.useCallback(function(){C||(Pm()?setTimeout(ie,0):ie())},[C,ie]),he=function(U){return a?null:U},De=function(U){return E?null:he(U)},Se=function(U){return I?null:he(U)},je=function(U){D&&U.stopPropagation()},rt=v.exports.useMemo(function(){return function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},U=k.refKey,fe=U===void 0?"ref":U,xe=k.role,Le=k.onKeyDown,Ot=k.onFocus,ct=k.onBlur,Xr=k.onClick,Zr=k.onDragEnter,Qr=k.onDragOver,lr=k.onDragLeave,en=k.onDrop,tn=Mr(k,Lm);return oe(oe(Nn({onKeyDown:De(ze(Le,Ee)),onFocus:De(ze(Ot,Ce)),onBlur:De(ze(ct,Ne)),onClick:he(ze(Xr,ke)),onDragEnter:Se(ze(Zr,te)),onDragOver:Se(ze(Qr,se)),onDragLeave:Se(ze(lr,q)),onDrop:Se(ze(en,_)),role:typeof xe=="string"&&xe!==""?xe:"button"},fe,S),!a&&!E?{tabIndex:0}:{}),tn)}},[S,Ee,Ce,Ne,ke,te,se,q,_,E,I,a]),Ue=v.exports.useCallback(function(k){k.stopPropagation()},[]),be=v.exports.useMemo(function(){return function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},U=k.refKey,fe=U===void 0?"ref":U,xe=k.onChange,Le=k.onClick,Ot=Mr(k,Vm),ct=Nn({accept:r,multiple:l,type:"file",style:{display:"none"},onChange:he(ze(xe,_)),onClick:he(ze(Le,Ue)),autoComplete:"off",tabIndex:-1},fe,A);return oe(oe({},ct),Ot)}},[A,r,l,_,a]),ue=Y.length,or=ue>0&&Am({files:Y,accept:r,minSize:o,maxSize:i,multiple:l,maxFiles:s}),At=ue>0&&!or;return oe(oe({},N),{},{isDragAccept:or,isDragReject:At,isFocused:G&&!a,getRootProps:rt,getInputProps:be,rootRef:S,inputRef:A,open:he(ie)})}function Ym(e,t){switch(t.type){case"focus":return oe(oe({},e),{},{isFocused:!0});case"blur":return oe(oe({},e),{},{isFocused:!1});case"openDialog":return oe(oe({},kn),{},{isFileDialogActive:!0});case"closeDialog":return oe(oe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=t.isDragActive,a=t.draggedFiles;return oe(oe({},e),{},{draggedFiles:a,isDragActive:r});case"setFiles":return oe(oe({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return oe({},kn);default:return e}}function Si(){}const _m=le.section`
  padding: 0 1.5rem;
  grid-area: actionSection;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 8rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray5);
    & + button {
      margin-left: 0.5rem;
    }
    &#saveItemBtn {
      background: var(--blue);
    }
    &#cancelBtn {
      background: ${H(.2,L.red)};
    }
  }
`;function _r({conditionToShow:e,actionSave:t}){const{setSelectedItem:r}=de();return c.createElement(_m,null,e&&c.createElement(c.Fragment,null,c.createElement("button",{type:"button",id:"saveItemBtn",onClick:t},"Salvar"),c.createElement("button",{type:"button",id:"cancelBtn",onClick:()=>{r(void 0)}},"Cancelar")))}function ha(e){return new Promise((t,r)=>{const a=new FileReader;a.onload=()=>t(a.result),a.onerror=n=>{r(n)},a.readAsDataURL(e)})}const Jm=le.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${H(.8,z("audios"))};

    border: 2px dashed ${z("audios")};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${H(.85,L.green)};
      filter: brightness(0.8);
    }
    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
    }
    h2 {
      color: ${z("audios")};
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }
    span {
      margin: 1rem auto;
      font-weight: 500;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    audio {
      border: 1px solid ${z("audios")};
      border-radius: 2rem;
      box-shadow: 0px 0px 10px ${z("audios")};
    }
    .howToConvertLink {
      display: none;
    }
    video {
      display: none;
      & + .howToConvertLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 2rem;
        text-align: center;
        a.warning {
          color: var(--red);
        }
      }
    }
    #sendAsForwardedContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      #sendAsForwardedSwitch {
        margin-bottom: 0.25rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
`,ba="/assets/dropFileIcon.svg",xa="/assets/greenCheck.svg";function Xm(){const{selectedItem:e}=de(),[t,r]=v.exports.useState(""),[a,n]=v.exports.useState(!1),[i,o]=v.exports.useState(!1),{updateAudioData:l}=Ut();v.exports.useEffect(()=>{var u,d;r((u=e==null?void 0:e.data)!=null?u:""),n((d=e==null?void 0:e.sendAsForwarded)!=null?d:!1),o(!1)},[e]);async function s(u){if(!u)return;const d=await ha(u);r(String(d))}return c.createElement(c.Fragment,null,c.createElement(Jm,{id:"mainContent"},c.createElement(Yr,{accept:"audio/mpeg,audio/ogg,video/mpeg",multiple:!1,onDrop:u=>{s(u[0])},onDragOver:()=>o(!0),onDragLeave:()=>o(!1),onDropRejected:u=>{o(!1),u[0].errors.find(d=>d.code==="file-invalid-type")?Q.error(c.createElement("a",{href:"https://zapvoice.com.br/converter-audio-ogg",target:"_blank",rel:"noreferrer"},"Formato n\xE3o aceito, clique aqui para aprender a converter seu \xE1udio da maneira certa")):u[0].errors.find(d=>d.code==="file-too-large")?Q.error("Arquivo maior que 16Mb (limite colocado pelo whatsapp web)"):Q.error(u[0].errors[0].message)},onDropAccepted:u=>{o(!1),Q.success("Audio carregado")},maxSize:16*1e3*1e3},({getRootProps:u,getInputProps:d})=>c.createElement("div",{...u({className:`dropzone ${i?"isDragginOn":""}`})},c.createElement("input",{...d()}),t!==(e==null?void 0:e.data)?c.createElement(c.Fragment,null,c.createElement("img",{src:xa,alt:"Clique em Salvar"}),c.createElement("h2",null,"Arquivo carregado com sucesso!"),c.createElement("span",null,'Clique abaixo em "Salvar" para finalizar.')):c.createElement(c.Fragment,null,c.createElement("img",{src:ba,alt:"Arraste seu arquivo ou clique aqui"}),c.createElement("p",null,"Clique aqui ou arraste o novo \xE1udio a ser salvo"),c.createElement("span",null,"Formatos aceitos '.ogg' e '.mp3'")),t&&c.createElement(c.Fragment,null,c.createElement(jn,{base64:t}),c.createElement("div",{className:"howToConvertLink"},c.createElement("a",{download:!0,href:t,onClick:p=>{p.stopPropagation()}},"Baixar o \xE1udio"),c.createElement("a",{href:"https://zapvoice.com.br/converter-audio-ogg",target:"_blank",rel:"noreferrer",className:"warning",onClick:p=>{p.stopPropagation()}},"Seu \xE1udio est\xE1 em um formato que n\xE3o ser\xE1 mais aceito pelo whatsapp. Clique aqui e aprenda a converte-lo"))),t&&c.createElement("div",{id:"sendAsForwardedContainer"},c.createElement(zn,{checked:!a,id:"sendAsForwardedSwitch",onClick:p=>{p.stopPropagation(),n(!a)}}),c.createElement("h3",null,"Enviando \xE1udio como"," ",a?"encaminhado":"gravado"))))),c.createElement(_r,{conditionToShow:t!==(e==null?void 0:e.data)||e.sendAsForwarded!==void 0&&a!==e.sendAsForwarded||e.sendAsForwarded===void 0&&a,actionSave:()=>{e&&l({id:e.id,data:t,sendAsForwarded:a})}}))}const Zm="/assets/homePageAudios.svg";function Qm(){return c.createElement(c.Fragment,null,c.createElement("img",{src:Zm,alt:"Central de \xC1udios",className:"homeImg"}),c.createElement("span",null,"Selecione um \xE1udio para editar na aba ao lado ou clique em \u201CNovo Item para adicionar um novo \xE1udio para o ZapVoice"))}const eg=ps`
`,It=le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  flex: 1;
  span {
    max-width: 22rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-subtitle);
    text-align: center;
  }
  img.homeImg {
    height: 10rem;
  }
`,tg=le.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  place-items: center;
  margin: 0 auto;
  flex: 1;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &.mensagens {
        &:hover {
          outline: 1px solid
            ${H(.5,z("mensagens"))};
        }
        &:focus {
          outline: 1.2px solid ${z("mensagens")};
        }
      }
      &.audios {
        &:hover {
          outline: 1px solid
            ${H(.2,z("audios"))};
        }
        &:focus {
          outline: 1.5px solid ${z("audios")};
        }
      }
      &.medias {
        &:hover {
          outline: 1px solid
            ${H(.2,z("medias"))};
        }
        &:focus {
          outline: 1.5px solid ${z("medias")};
        }
      }
      &.docs {
        &:hover {
          outline: 1px solid ${H(.2,z("docs"))};
        }
        &:focus {
          outline: 1.5px solid ${z("docs")};
        }
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      background: ${H(.7,L.red)};
      display: grid;
      place-items: center;
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${L.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${H(.5,"black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;function Jr({children:e}){const{selectedItem:t}=de(),{updateMessageName:r,deleteMessage:a}=zt(),{updateAudioName:n,deleteAudio:i}=Ut(),{updateMediaName:o,deleteMedia:l}=Wt(),{updateDocName:s,deleteDoc:u}=qt(),{funnelsIndex:d}=lt(),{isDarkTheme:p}=Fe(),[f,m]=v.exports.useState(""),[g,h]=v.exports.useState(!1);v.exports.useEffect(()=>{var I;m((I=t==null?void 0:t.name)!=null?I:"Default Name")},[t,m]);const b={mensagens:r,audios:n,medias:o,docs:s},x={mensagens:a,audios:i,medias:l,docs:u};function y(){h(!0)}function C(){h(!1)}function E(){if(!t)return;const I=d.reduce((D,P)=>(P.data&&!!P.data.find(F=>F.id===t.id)&&D.push(P.name),D),[]);if(I.length>0){Q.error(c.createElement("div",null,'O item "',f,'" que voc\xEA est\xE1 tentando apagar est\xE1 cadastrado no',I.length>1&&"s"," seguinte",I.length>1&&"s"," funi",I.length>1?"s":"l",": ",c.createElement("br",null),c.createElement("br",null),c.createElement("ul",null,I.map((D,P)=>c.createElement("li",{key:P},D))),c.createElement("br",null),"Remova ele desse",I.length>1&&"s"," antes de apagar"));return}y()}return c.createElement(tg,null,c.createElement(st,{details:{title:`Tem certeza que deseja deletar o item "${f}"?`,description:"Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o item",okTitle:"Sim, tenho certeza",cancelTitle:"Cancelar",fillCancel:p?L.gray3:L.gray4,fillOk:L.red},onRequestOk:async()=>t&&x[t.type](t.id),isOpen:g,onRequestClose:C}),c.createElement("section",{id:"inputAndDelete"},c.createElement("input",{type:"text",value:f,className:t==null?void 0:t.type,onChange:I=>{m(I.target.value)},onBlur:()=>{!f&&(t==null?void 0:t.name)&&m(t.name),f&&t&&f!==(t==null?void 0:t.name)&&b[t.type]({id:t.id,name:f})}}),c.createElement("button",{type:"button",id:"deleteItemBtn",onClick:E},c.createElement(jt,{className:"trashIcon"}))),e)}function rg(){const{selectedItem:e}=de();return c.createElement(c.Fragment,null,c.createElement(wt,{fill:z("audios"),itemType:"audios"}),!e&&c.createElement(It,null,c.createElement(Qm,null)),!!e&&c.createElement(Jr,null,c.createElement(Xm,null)))}const ng=le.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  flex: 1;
  place-items: center;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        outline: 1px solid ${H(.2,z("funis"))};
      }
      &:focus {
        outline: 1.5px solid ${z("funis")};
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      display: grid;
      place-items: center;
      background: ${H(.7,L.red)};
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${L.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${H(.5,"black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;function ag({children:e}){const{selectedFunnel:t,setSelectedFunnel:r}=de(),{updateFunnelName:a,deleteFunnel:n}=lt(),[i,o]=v.exports.useState(""),{isDarkTheme:l}=Fe(),{triggersIndex:s}=Kt(),[u,d]=v.exports.useState(!1);v.exports.useEffect(()=>{var g;o((g=t==null?void 0:t.name)!=null?g:"Default Name")},[t,o]);function p(){if(!t)return;const g=s.reduce((h,b)=>(b.funnelId===t.id&&h.push(b.name),h),[]);if(g.length>0){Q.error(c.createElement("div",null,'O funil "',i,'" que voc\xEA est\xE1 tentando apagar est\xE1 cadastrado no',g.length>1&&"s"," seguinte",g.length>1&&"s"," gatilho",g.length>1&&"s"," : ",c.createElement("br",null),c.createElement("br",null),c.createElement("ul",null,g.map((h,b)=>c.createElement("li",{key:b},h))),c.createElement("br",null),"Remova ele desse",g.length>1&&"s"," antes de apagar"));return}f()}function f(){d(!0)}function m(){d(!1)}return c.createElement(ng,null,c.createElement(st,{details:{title:`Tem certeza que deseja deletar o funil "${i}"?`,description:"Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o funil",okTitle:"Sim, tenho certeza",cancelTitle:"Cancelar",fillCancel:l?L.gray3:L.gray4,fillOk:L.red},onRequestOk:async()=>t&&n(t.id),isOpen:u,onRequestClose:m}),c.createElement("section",{id:"inputAndDelete"},c.createElement("input",{type:"text",value:i,className:t==null?void 0:t.type,onChange:g=>{o(g.target.value)},onBlur:()=>{!i&&(t==null?void 0:t.name)&&o(t.name),i&&t&&i!==(t==null?void 0:t.name)&&(r({...t,name:i}),a({id:t.id,name:i}))}}),c.createElement("button",{type:"button",id:"deleteFunnelBtn",onClick:p},c.createElement(jt,{className:"trashIcon"}))),e)}const ig="/assets/homePageFunnels.svg";function og(){return c.createElement(c.Fragment,null,c.createElement("img",{src:ig,alt:"Central de Funis",className:"homeImg"}),c.createElement("span",null,"Selecione um funil para editar na aba ao lado ou clique em \u201CNovo Funil\u201D para adicionar um novo funil para o ZapVoice"))}const lg=Wi`

  to{
    max-height: 10rem;
    overflow:visible;
  }
`,sg=le.div`
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  background: ${({fill:e})=>e&&fs(.5,H(.5,e))};
  transition: filter 0.2s;
  .iconsAndName {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    .leftDots {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      cursor: grab;
      fill: var(--text-title);
    }
    .typeIcon {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
      fill: ${({fill:e})=>e};
      stroke: black;
      stroke-width: 0.25rem;
      filter: ${`drop-shadow(0px 0px 3px ${H(.8,"black")})`};
    }
    h2 {
      width: 100%;
    }
  }

  .delayAndActions {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.5rem;
    .delay {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 1rem;
      .delayIcon {
        fill: var(--text-title);
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
      }
      span {
        color: var(--text-title);
        font-weight: 500;
      }
    }
    button.actionFunnelContainer {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      border: none;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 10px -5px black;
      &.changeItem {
        background: ${H(.7,L.gold)};
        .changeItemBtn {
          width: 60%;
          height: 60%;
          fill: var(--gold);
          filter: drop-shadow(0px 0px 2px black);
        }
      }
      &.deleteItem {
        background: ${H(.7,L.red)};
        .deleteItemBtn {
          width: 60%;
          height: 60%;
          fill: var(--red);
          filter: drop-shadow(0px 0px 2px black);
        }
      }
      &.showItem {
        background: ${({fill:e})=>e&&H(.8,e)};

        .showItemBtn {
          width: 60%;
          height: 60%;
          fill: ${({fill:e})=>e&&ms(.3,e)};
          filter: drop-shadow(0px 0px 2px black);
          transition: transform 0.3s;
          transform: ${({isOpen:e})=>e?"rotate(-180deg)":"rotate(0)"};
        }
      }
    }
  }
`,ug=le.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({fill:e})=>e&&H(.85,e)};
  width: 98%;
  height: 10rem;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  max-height: 0rem;
  overflow: hidden;

  ${({isOpen:e})=>e&&qe`
      animation: ${lg} 0.3s ease-in forwards;
    `}

  margin: 0 auto;
  margin-top: -0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: ${({isOpen:e})=>e?"1rem":"0"};

  img,
  video {
    z-index: 1;
    display: block;
    position: absolute;
    height: 100%;
    width: auto;
    transition: transform 0.5s;
    &:hover {
      transform: scale(2);
    }
  }
  div.itemPreviewDocument {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    font-size: 1.25rem;

    .itemPreviewIcon {
      width: 3rem;
      height: 3rem;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    opacity: 1;
    cursor: auto;
  }
`;function cg({item:e,showAndHideItem:t,openEditModal:r,deleteItemFromFunnel:a}){const{isDarkTheme:n}=Fe(),[i,o]=v.exports.useState(!1),l=$e(e.type),s=Math.floor(e.delay/1e3/60),u=e.delay/1e3%60;function d(){o(!0)}function p(){o(!1)}function f(){d()}return c.createElement(c.Fragment,null,c.createElement(sg,{fill:z(e.type),isOpen:e.isOpen},c.createElement(st,{details:{title:`Tem certeza que deseja remover o item "${e.name}" desse funil?`,description:"Caso deseje inserir outro em seu lugar ou apenas alterar o delay, basta utilizar a op\xE7\xE3o de editar!",okTitle:"Sim, remover!",cancelTitle:"Cancelar",fillCancel:n?L.gray3:L.gray4,fillOk:L.red},onRequestOk:a,isOpen:i,onRequestClose:p}),c.createElement("div",{className:"iconsAndName"},c.createElement(_i,{className:"leftDots"}),c.createElement(l,{className:"typeIcon"}),c.createElement("h2",null,e.name)),c.createElement("div",{className:"delayAndActions"},e.delay>0&&c.createElement("div",{className:"delay"},c.createElement("span",null,s>0&&`${s}m `,u,"s"),c.createElement(gs,{className:"delayIcon"})),c.createElement("button",{type:"button",className:"actionFunnelContainer changeItem",onClick:r},c.createElement(qi,{className:"changeItemBtn"})),c.createElement("button",{type:"button",className:"actionFunnelContainer deleteItem",onClick:f},c.createElement(jt,{className:"deleteItemBtn"})),c.createElement("button",{type:"button",className:"actionFunnelContainer showItem",onClick:t},c.createElement(vs,{className:"showItemBtn"})))),e.data&&c.createElement(ug,{isOpen:e.isOpen,fill:z(e.type)},e.type!=="mensagens"?c.createElement(jn,{base64:e.data}):c.createElement("textarea",{defaultValue:e.data,id:"msgPreview",disabled:!0})))}const dg=le.button`
  width: 7rem;
  height: 7rem;
  border: none;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  background: ${({isActive:e,fill:t})=>e&&!!t?H(.8,t):H(.7,L.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -15px ${({fill:e})=>e&&H(.1,e)};
  &:hover {
    filter: brightness(0.9);
    background: ${({fill:e})=>e&&H(.8,e)};
  }

  .imageContainer {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({isActive:e,fill:t})=>e&&!!t?H(.8,t):H(.7,L.gray4)};

    box-shadow: 0px 0px 10px -5px #0000005d;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    margin-right: 0.75rem;
    display: relative;
    .insideIcon {
      height: 1.5rem;
    }
  }
  span {
    color: var(--text-title);
    text-decoration: none;
    font-weight: 700;
    text-shadow: 0px 0px 5px #0000005d;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({isActive:e,fill:t})=>e&&!!t?t:"var(--text-title)"};
  }
`;function fr({name:e,Icon:t,fill:r,isActive:a,...n}){return c.createElement(dg,{type:"button",fill:r,isActive:!!a,...n},c.createElement("div",{className:"imageContainer"},c.createElement(t,{className:"insideIcon"})),c.createElement("span",null,e))}const pg=le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1 {
    align-self: flex-start;
    font-size: 2rem;
  }
  label {
    align-self: flex-start;
    font-size: 1.15rem;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }
  label.delayLabel {
    margin-top: 0.25rem;
    align-self: center;
  }
  #typesContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .optionType {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .imageContainer {
        margin: 0 auto;
      }
    }
  }
  .selectItemFunnel {
    width: 100%;
  }

  #delayContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .delayItemContainer {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input[type="number"] {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;
        background: var(--shape);
        border: 1px solid var(--gray1);
        border-radius: 0.25rem;
        font-size: 1rem;
        outline: none;
        &:hover {
          border: 1px solid var(--blue);
          box-shadow: 0px 0px 1px var(--blue);
        }
        &:focus {
          border: 2px solid var(--blue);
          box-shadow: 0px 0px 1px var(--blue);
        }
        &:invalid {
          border: 2px solid var(--red);
          box-shadow: 0px 0px 1px var(--red);
        }
      }
    }
    span.separator {
      font-size: 1.5rem;
      font-weight: 700;
      transform: translateY(0.5rem);
    }
  }
  button#addItemFunnelBtn {
    margin-top: 1rem;
    background: ${H(.5,L.blue)};
    color: var(--text-title);
    font-size: 1.15rem;
    font-weight: 700;
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 0.25rem;
  }
`;function fg(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ut(e,t){if(e==null)return{};var r=kt(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function ya(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wi(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,ro(a.key),a)}}function Ea(e,t,r){return t&&wi(e.prototype,t),r&&wi(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ca(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hs(e,t)}function mg(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ii(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(r),!0).forEach(function(a){mg(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ii(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Tr(e){return Tr=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Tr(e)}function gg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hg(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:vg(e)}function Da(e){var t=gg();return function(){var a=Tr(e),n;if(t){var i=Tr(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return hg(this,n)}}var bg=["className","clearValue","cx","getStyles","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Br=function(){};function xg(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function yg(e,t,r){var a=[r];if(t&&e)for(var n in t)t.hasOwnProperty(n)&&t[n]&&a.push("".concat(xg(e,n)));return a.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var Ai=function(t){return Pg(t)?t.filter(Boolean):gt(t)==="object"&&t!==null?[t]:[]},wl=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=ut(t,bg);return Z({},r)};function Eg(e,t,r){if(r){var a=r(e,t);if(typeof a=="string")return a}return e}function Sa(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Il(e){return Sa(e)?window.pageYOffset:e.scrollTop}function Nr(e,t){if(Sa(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Cg(e){var t=getComputedStyle(e),r=t.position==="absolute",a=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var n=e;n=n.parentElement;)if(t=getComputedStyle(n),!(r&&t.position==="static")&&a.test(t.overflow+t.overflowY+t.overflowX))return n;return document.documentElement}function Dg(e,t,r,a){return r*((e=e/a-1)*e*e+1)+t}function mr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Br,n=Il(e),i=t-n,o=10,l=0;function s(){l+=o;var u=Dg(l,n,i,r);Nr(e,u),l<r?window.requestAnimationFrame(s):a(e)}s()}function Sg(e,t){var r=e.getBoundingClientRect(),a=t.getBoundingClientRect(),n=t.offsetHeight/3;a.bottom+n>r.bottom?Nr(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+n,e.scrollHeight)):a.top-n<r.top&&Nr(e,Math.max(t.offsetTop-n,0))}function wg(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Oi(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Ig(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Al=!1,Ag={get passive(){return Al=!0}},gr=typeof window<"u"?window:{};gr.addEventListener&&gr.removeEventListener&&(gr.addEventListener("p",Br,Ag),gr.removeEventListener("p",Br,!1));var Og=Al;function Fg(e){return e!=null}function Pg(e){return Array.isArray(e)}function vr(e,t,r){return e?t:r}function Rg(e){var t=e.maxHeight,r=e.menuEl,a=e.minHeight,n=e.placement,i=e.shouldScroll,o=e.isFixedPosition,l=e.theme,s=l.spacing,u=Cg(r),d={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return d;var p=u.getBoundingClientRect(),f=p.height,m=r.getBoundingClientRect(),g=m.bottom,h=m.height,b=m.top,x=r.offsetParent.getBoundingClientRect(),y=x.top,C=window.innerHeight,E=Il(u),I=parseInt(getComputedStyle(r).marginBottom,10),D=parseInt(getComputedStyle(r).marginTop,10),P=y-D,F=C-b,M=P+E,S=f-E-b,A=g-C+E+I,T=E+b-D,B=160;switch(n){case"auto":case"bottom":if(F>=h)return{placement:"bottom",maxHeight:t};if(S>=h&&!o)return i&&mr(u,A,B),{placement:"bottom",maxHeight:t};if(!o&&S>=a||o&&F>=a){i&&mr(u,A,B);var N=o?F-I:S-I;return{placement:"bottom",maxHeight:N}}if(n==="auto"||o){var R=t,G=o?P:M;return G>=a&&(R=Math.min(G-I-s.controlHeight,t)),{placement:"top",maxHeight:R}}if(n==="bottom")return i&&Nr(u,A),{placement:"bottom",maxHeight:t};break;case"top":if(P>=h)return{placement:"top",maxHeight:t};if(M>=h&&!o)return i&&mr(u,T,B),{placement:"top",maxHeight:t};if(!o&&M>=a||o&&P>=a){var K=t;return(!o&&M>=a||o&&P>=a)&&(K=o?P-D:M-D),i&&mr(u,T,B),{placement:"top",maxHeight:K}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return d}function Mg(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Ln=function(t){return t==="auto"?"bottom":t},Tg=function(t){var r,a=t.placement,n=t.theme,i=n.borderRadius,o=n.spacing,l=n.colors;return r={label:"menu"},Ve(r,Mg(a),"100%"),Ve(r,"backgroundColor",l.neutral0),Ve(r,"borderRadius",i),Ve(r,"boxShadow","0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"),Ve(r,"marginBottom",o.menuGutter),Ve(r,"marginTop",o.menuGutter),Ve(r,"position","absolute"),Ve(r,"width","100%"),Ve(r,"zIndex",1),r},Ol=v.exports.createContext({getPortalPlacement:null}),Fl=function(e){Ca(r,e);var t=Da(r);function r(){var a;ya(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=t.call.apply(t,[this].concat(i)),a.state={maxHeight:a.props.maxMenuHeight,placement:null},a.context=void 0,a.getPlacement=function(l){var s=a.props,u=s.minMenuHeight,d=s.maxMenuHeight,p=s.menuPlacement,f=s.menuPosition,m=s.menuShouldScrollIntoView,g=s.theme;if(!!l){var h=f==="fixed",b=m&&!h,x=Rg({maxHeight:d,menuEl:l,minHeight:u,placement:p,shouldScroll:b,isFixedPosition:h,theme:g}),y=a.context.getPortalPlacement;y&&y(x),a.setState(x)}},a.getUpdatedProps=function(){var l=a.props.menuPlacement,s=a.state.placement||Ln(l);return Z(Z({},a.props),{},{placement:s,maxHeight:a.state.maxHeight})},a}return Ea(r,[{key:"render",value:function(){var n=this.props.children;return n({ref:this.getPlacement,placerProps:this.getUpdatedProps()})}}]),r}(v.exports.Component);Fl.contextType=Ol;var Bg=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerRef,l=t.innerProps;return $("div",w({css:i("menu",t),className:n({menu:!0},a),ref:o},l),r)},Ng=function(t){var r=t.maxHeight,a=t.theme.spacing.baseUnit;return{maxHeight:r,overflowY:"auto",paddingBottom:a,paddingTop:a,position:"relative",WebkitOverflowScrolling:"touch"}},kg=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps,l=t.innerRef,s=t.isMulti;return $("div",w({css:i("menuList",t),className:n({"menu-list":!0,"menu-list--is-multi":s},a),ref:l},o),r)},Pl=function(t){var r=t.theme,a=r.spacing.baseUnit,n=r.colors;return{color:n.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px"),textAlign:"center"}},Lg=Pl,Vg=Pl,Rl=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps;return $("div",w({css:i("noOptionsMessage",t),className:n({"menu-notice":!0,"menu-notice--no-options":!0},a)},o),r)};Rl.defaultProps={children:"No options"};var Ml=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps;return $("div",w({css:i("loadingMessage",t),className:n({"menu-notice":!0,"menu-notice--loading":!0},a)},o),r)};Ml.defaultProps={children:"Loading..."};var $g=function(t){var r=t.rect,a=t.offset,n=t.position;return{left:r.left,position:n,top:a,width:r.width,zIndex:1}},Hg=function(e){Ca(r,e);var t=Da(r);function r(){var a;ya(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=t.call.apply(t,[this].concat(i)),a.state={placement:null},a.getPortalPlacement=function(l){var s=l.placement,u=Ln(a.props.menuPlacement);s!==u&&a.setState({placement:s})},a}return Ea(r,[{key:"render",value:function(){var n=this.props,i=n.appendTo,o=n.children,l=n.className,s=n.controlElement,u=n.cx,d=n.innerProps,p=n.menuPlacement,f=n.menuPosition,m=n.getStyles,g=f==="fixed";if(!i&&!g||!s)return null;var h=this.state.placement||Ln(p),b=wg(s),x=g?0:window.pageYOffset,y=b[h]+x,C={offset:y,position:f,rect:b},E=$("div",w({css:m("menuPortal",C),className:u({"menu-portal":!0},l)},d),o);return $(Ol.Provider,{value:{getPortalPlacement:this.getPortalPlacement}},i?zi.exports.createPortal(E,i):E)}}]),r}(v.exports.Component),Gg=function(t){var r=t.isDisabled,a=t.isRtl;return{label:"container",direction:a?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},jg=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps,l=t.isDisabled,s=t.isRtl;return $("div",w({css:i("container",t),className:n({"--is-disabled":l,"--is-rtl":s},a)},o),r)},zg=function(t){var r=t.theme.spacing,a=t.isMulti,n=t.hasValue,i=t.selectProps.controlShouldRenderValue;return{alignItems:"center",display:a&&n&&i?"flex":"grid",flex:1,flexWrap:"wrap",padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px"),WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"}},Ug=function(t){var r=t.children,a=t.className,n=t.cx,i=t.innerProps,o=t.isMulti,l=t.getStyles,s=t.hasValue;return $("div",w({css:l("valueContainer",t),className:n({"value-container":!0,"value-container--is-multi":o,"value-container--has-value":s},a)},i),r)},Wg=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},qg=function(t){var r=t.children,a=t.className,n=t.cx,i=t.innerProps,o=t.getStyles;return $("div",w({css:o("indicatorsContainer",t),className:n({indicators:!0},a)},i),r)},Fi,Kg=["size"],Yg={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Tl=function(t){var r=t.size,a=ut(t,Kg);return $("svg",w({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Yg},a))},wa=function(t){return $(Tl,w({size:20},t),$("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Bl=function(t){return $(Tl,w({size:20},t),$("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Nl=function(t){var r=t.isFocused,a=t.theme,n=a.spacing.baseUnit,i=a.colors;return{label:"indicatorContainer",color:r?i.neutral60:i.neutral20,display:"flex",padding:n*2,transition:"color 150ms",":hover":{color:r?i.neutral80:i.neutral40}}},_g=Nl,Jg=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps;return $("div",w({css:i("dropdownIndicator",t),className:n({indicator:!0,"dropdown-indicator":!0},a)},o),r||$(Bl,null))},Xg=Nl,Zg=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps;return $("div",w({css:i("clearIndicator",t),className:n({indicator:!0,"clear-indicator":!0},a)},o),r||$(wa,null))},Qg=function(t){var r=t.isDisabled,a=t.theme,n=a.spacing.baseUnit,i=a.colors;return{label:"indicatorSeparator",alignSelf:"stretch",backgroundColor:r?i.neutral10:i.neutral20,marginBottom:n*2,marginTop:n*2,width:1}},ev=function(t){var r=t.className,a=t.cx,n=t.getStyles,i=t.innerProps;return $("span",w({},i,{css:n("indicatorSeparator",t),className:a({"indicator-separator":!0},r)}))},tv=Ls(Fi||(Fi=fg([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),rv=function(t){var r=t.isFocused,a=t.size,n=t.theme,i=n.colors,o=n.spacing.baseUnit;return{label:"loadingIndicator",color:r?i.neutral60:i.neutral20,display:"flex",padding:o*2,transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"}},xn=function(t){var r=t.delay,a=t.offset;return $("span",{css:Qi({animation:"".concat(tv," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:a?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},kl=function(t){var r=t.className,a=t.cx,n=t.getStyles,i=t.innerProps,o=t.isRtl;return $("div",w({css:n("loadingIndicator",t),className:a({indicator:!0,"loading-indicator":!0},r)},i),$(xn,{delay:0,offset:o}),$(xn,{delay:160,offset:!0}),$(xn,{delay:320,offset:!o}))};kl.defaultProps={size:4};var nv=function(t){var r=t.isDisabled,a=t.isFocused,n=t.theme,i=n.colors,o=n.borderRadius,l=n.spacing;return{label:"control",alignItems:"center",backgroundColor:r?i.neutral5:i.neutral0,borderColor:r?i.neutral10:a?i.primary:i.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(i.primary):void 0,cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms","&:hover":{borderColor:a?i.primary:i.neutral30}}},av=function(t){var r=t.children,a=t.cx,n=t.getStyles,i=t.className,o=t.isDisabled,l=t.isFocused,s=t.innerRef,u=t.innerProps,d=t.menuIsOpen;return $("div",w({ref:s,css:n("control",t),className:a({control:!0,"control--is-disabled":o,"control--is-focused":l,"control--menu-is-open":d},i)},u),r)},iv=["data"],ov=function(t){var r=t.theme.spacing;return{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},lv=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,p=t.selectProps;return $("div",w({css:i("group",t),className:n({group:!0},a)},s),$(o,w({},l,{selectProps:p,theme:d,getStyles:i,cx:n}),u),$("div",null,r))},sv=function(t){var r=t.theme.spacing;return{label:"group",color:"#999",cursor:"default",display:"block",fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:r.baseUnit*3,paddingRight:r.baseUnit*3,textTransform:"uppercase"}},uv=function(t){var r=t.getStyles,a=t.cx,n=t.className,i=wl(t);i.data;var o=ut(i,iv);return $("div",w({css:r("groupHeading",t),className:a({"group-heading":!0},n)},o))},cv=["innerRef","isDisabled","isHidden","inputClassName"],dv=function(t){var r=t.isDisabled,a=t.value,n=t.theme,i=n.spacing,o=n.colors;return Z({margin:i.baseUnit/2,paddingBottom:i.baseUnit/2,paddingTop:i.baseUnit/2,visibility:r?"hidden":"visible",color:o.neutral80,transform:a?"translateZ(0)":""},pv)},Ll={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},pv={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ll)},fv=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Ll)},mv=function(t){var r=t.className,a=t.cx,n=t.getStyles,i=t.value,o=wl(t),l=o.innerRef,s=o.isDisabled,u=o.isHidden,d=o.inputClassName,p=ut(o,cv);return $("div",{className:a({"input-container":!0},r),css:n("input",t),"data-value":i||""},$("input",w({className:a({input:!0},d),ref:l,style:fv(u),disabled:s},p)))},gv=function(t){var r=t.theme,a=r.spacing,n=r.borderRadius,i=r.colors;return{label:"multiValue",backgroundColor:i.neutral10,borderRadius:n/2,display:"flex",margin:a.baseUnit/2,minWidth:0}},vv=function(t){var r=t.theme,a=r.borderRadius,n=r.colors,i=t.cropWithEllipsis;return{borderRadius:a/2,color:n.neutral80,fontSize:"85%",overflow:"hidden",padding:3,paddingLeft:6,textOverflow:i||i===void 0?"ellipsis":void 0,whiteSpace:"nowrap"}},hv=function(t){var r=t.theme,a=r.spacing,n=r.borderRadius,i=r.colors,o=t.isFocused;return{alignItems:"center",borderRadius:n/2,backgroundColor:o?i.dangerLight:void 0,display:"flex",paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:i.dangerLight,color:i.danger}}},Vl=function(t){var r=t.children,a=t.innerProps;return $("div",a,r)},bv=Vl,xv=Vl;function yv(e){var t=e.children,r=e.innerProps;return $("div",w({role:"button"},r),t||$(wa,{size:14}))}var Ev=function(t){var r=t.children,a=t.className,n=t.components,i=t.cx,o=t.data,l=t.getStyles,s=t.innerProps,u=t.isDisabled,d=t.removeProps,p=t.selectProps,f=n.Container,m=n.Label,g=n.Remove;return $(Vs,null,function(h){var b=h.css,x=h.cx;return $(f,{data:o,innerProps:Z({className:x(b(l("multiValue",t)),i({"multi-value":!0,"multi-value--is-disabled":u},a))},s),selectProps:p},$(m,{data:o,innerProps:{className:x(b(l("multiValueLabel",t)),i({"multi-value__label":!0},a))},selectProps:p},r),$(g,{data:o,innerProps:Z({className:x(b(l("multiValueRemove",t)),i({"multi-value__remove":!0},a)),"aria-label":"Remove ".concat(r||"option")},d),selectProps:p}))})},Cv=function(t){var r=t.isDisabled,a=t.isFocused,n=t.isSelected,i=t.theme,o=i.spacing,l=i.colors;return{label:"option",backgroundColor:n?l.primary:a?l.primary25:"transparent",color:r?l.neutral20:n?l.neutral0:"inherit",cursor:"default",display:"block",fontSize:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",":active":{backgroundColor:r?void 0:n?l.primary:l.primary50}}},Dv=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.isDisabled,l=t.isFocused,s=t.isSelected,u=t.innerRef,d=t.innerProps;return $("div",w({css:i("option",t),className:n({option:!0,"option--is-disabled":o,"option--is-focused":l,"option--is-selected":s},a),ref:u,"aria-disabled":o},d),r)},Sv=function(t){var r=t.theme,a=r.spacing,n=r.colors;return{label:"placeholder",color:n.neutral50,gridArea:"1 / 1 / 2 / 3",marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2}},wv=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.innerProps;return $("div",w({css:i("placeholder",t),className:n({placeholder:!0},a)},o),r)},Iv=function(t){var r=t.isDisabled,a=t.theme,n=a.spacing,i=a.colors;return{label:"singleValue",color:r?i.neutral40:i.neutral80,gridArea:"1 / 1 / 2 / 3",marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2,maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Av=function(t){var r=t.children,a=t.className,n=t.cx,i=t.getStyles,o=t.isDisabled,l=t.innerProps;return $("div",w({css:i("singleValue",t),className:n({"single-value":!0,"single-value--is-disabled":o},a)},l),r)},Ov={ClearIndicator:Zg,Control:av,DropdownIndicator:Jg,DownChevron:Bl,CrossIcon:wa,Group:lv,GroupHeading:uv,IndicatorsContainer:qg,IndicatorSeparator:ev,Input:mv,LoadingIndicator:kl,Menu:Bg,MenuList:kg,MenuPortal:Hg,LoadingMessage:Ml,NoOptionsMessage:Rl,MultiValue:Ev,MultiValueContainer:bv,MultiValueLabel:xv,MultiValueRemove:yv,Option:Dv,Placeholder:wv,SelectContainer:jg,SingleValue:Av,ValueContainer:Ug},Fv=function(t){return Z(Z({},Ov),t.components)};function Vn(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Pv(e){if(Array.isArray(e))return Vn(e)}function Rv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $l(e,t){if(!!e){if(typeof e=="string")return Vn(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Vn(e,t)}}function Mv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hl(e){return Pv(e)||Rv(e)||$l(e)||Mv()}var Tv={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Pi=function(t){return $("span",w({css:Tv},t))},Bv={guidance:function(t){var r=t.isSearchable,a=t.isMulti,n=t.isDisabled,i=t.tabSelectsValue,o=t.context;switch(o){case"menu":return"Use Up and Down to choose options".concat(n?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(a?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,a=t.label,n=a===void 0?"":a,i=t.labels,o=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(i.length>1?"s":""," ").concat(i.join(","),", selected.");case"select-option":return o?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(t){var r=t.context,a=t.focused,n=t.options,i=t.label,o=i===void 0?"":i,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=function(g,h){return g&&g.length?"".concat(g.indexOf(h)+1," of ").concat(g.length):""};if(r==="value"&&l)return"value ".concat(o," focused, ").concat(d(l,a),".");if(r==="menu"){var p=s?" disabled":"",f="".concat(u?"selected":"focused").concat(p);return"option ".concat(o," ").concat(f,", ").concat(d(n,a),".")}return""},onFilter:function(t){var r=t.inputValue,a=t.resultsMessage;return"".concat(a).concat(r?" for search term "+r:"",".")}},Nv=function(t){var r=t.ariaSelection,a=t.focusedOption,n=t.focusedValue,i=t.focusableOptions,o=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=s.ariaLiveMessages,p=s.getOptionLabel,f=s.inputValue,m=s.isMulti,g=s.isOptionDisabled,h=s.isSearchable,b=s.menuIsOpen,x=s.options,y=s.screenReaderStatus,C=s.tabSelectsValue,E=s["aria-label"],I=s["aria-live"],D=v.exports.useMemo(function(){return Z(Z({},Bv),d||{})},[d]),P=v.exports.useMemo(function(){var N="";if(r&&D.onChange){var R=r.option,G=r.options,K=r.removedValue,Y=r.removedValues,ee=r.value,X=function(_){return Array.isArray(_)?null:_},ne=K||R||X(ee),W=ne?p(ne):"",te=G||Y||void 0,se=te?te.map(p):[],q=Z({isDisabled:ne&&g(ne,l),label:W,labels:se},r);N=D.onChange(q)}return N},[r,D,g,l,p]),F=v.exports.useMemo(function(){var N="",R=a||n,G=!!(a&&l&&l.includes(a));if(R&&D.onFocus){var K={focused:R,label:p(R),isDisabled:g(R,l),isSelected:G,options:x,context:R===a?"menu":"value",selectValue:l};N=D.onFocus(K)}return N},[a,n,p,g,D,x,l]),M=v.exports.useMemo(function(){var N="";if(b&&x.length&&D.onFilter){var R=y({count:i.length});N=D.onFilter({inputValue:f,resultsMessage:R})}return N},[i,f,b,D,x,y]),S=v.exports.useMemo(function(){var N="";if(D.guidance){var R=n?"value":b?"menu":"input";N=D.guidance({"aria-label":E,context:R,isDisabled:a&&g(a,l),isMulti:m,isSearchable:h,tabSelectsValue:C})}return N},[E,a,n,m,g,h,b,D,l,C]),A="".concat(F," ").concat(M," ").concat(S),T=$(v.exports.Fragment,null,$("span",{id:"aria-selection"},P),$("span",{id:"aria-context"},A)),B=(r==null?void 0:r.action)==="initial-input-focus";return $(v.exports.Fragment,null,$(Pi,{id:u},B&&T),$(Pi,{"aria-live":I,"aria-atomic":"false","aria-relevant":"additions text"},o&&!B&&T))},$n=[{base:"A",letters:"A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",letters:"\uA732"},{base:"AE",letters:"\xC6\u01FC\u01E2"},{base:"AO",letters:"\uA734"},{base:"AU",letters:"\uA736"},{base:"AV",letters:"\uA738\uA73A"},{base:"AY",letters:"\uA73C"},{base:"B",letters:"B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"},{base:"C",letters:"C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"},{base:"D",letters:"D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"},{base:"DZ",letters:"\u01F1\u01C4"},{base:"Dz",letters:"\u01F2\u01C5"},{base:"E",letters:"E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"},{base:"F",letters:"F\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",letters:"G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"},{base:"H",letters:"H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",letters:"I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",letters:"J\u24BF\uFF2A\u0134\u0248"},{base:"K",letters:"K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",letters:"L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",letters:"\u01C7"},{base:"Lj",letters:"\u01C8"},{base:"M",letters:"M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"},{base:"N",letters:"N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"},{base:"NJ",letters:"\u01CA"},{base:"Nj",letters:"\u01CB"},{base:"O",letters:"O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OI",letters:"\u01A2"},{base:"OO",letters:"\uA74E"},{base:"OU",letters:"\u0222"},{base:"P",letters:"P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",letters:"Q\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",letters:"R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",letters:"S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",letters:"T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"TZ",letters:"\uA728"},{base:"U",letters:"U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",letters:"V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",letters:"\uA760"},{base:"W",letters:"W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",letters:"X\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",letters:"Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",letters:"Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",letters:"a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"},{base:"aa",letters:"\uA733"},{base:"ae",letters:"\xE6\u01FD\u01E3"},{base:"ao",letters:"\uA735"},{base:"au",letters:"\uA737"},{base:"av",letters:"\uA739\uA73B"},{base:"ay",letters:"\uA73D"},{base:"b",letters:"b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"},{base:"c",letters:"c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",letters:"d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"},{base:"dz",letters:"\u01F3\u01C6"},{base:"e",letters:"e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"},{base:"f",letters:"f\u24D5\uFF46\u1E1F\u0192\uA77C"},{base:"g",letters:"g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"},{base:"h",letters:"h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",letters:"\u0195"},{base:"i",letters:"i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",letters:"j\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",letters:"k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",letters:"l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"},{base:"lj",letters:"\u01C9"},{base:"m",letters:"m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",letters:"n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"},{base:"nj",letters:"\u01CC"},{base:"o",letters:"o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"},{base:"oi",letters:"\u01A3"},{base:"ou",letters:"\u0223"},{base:"oo",letters:"\uA74F"},{base:"p",letters:"p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"},{base:"q",letters:"q\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",letters:"r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",letters:"s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"},{base:"t",letters:"t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"tz",letters:"\uA729"},{base:"u",letters:"u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",letters:"v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",letters:"\uA761"},{base:"w",letters:"w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",letters:"x\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",letters:"y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",letters:"z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}],kv=new RegExp("["+$n.map(function(e){return e.letters}).join("")+"]","g"),Gl={};for(var yn=0;yn<$n.length;yn++)for(var En=$n[yn],Cn=0;Cn<En.letters.length;Cn++)Gl[En.letters[Cn]]=En.base;var jl=function(t){return t.replace(kv,function(r){return Gl[r]})},Lv=ce(jl),Ri=function(t){return t.replace(/^\s+|\s+$/g,"")},Vv=function(t){return"".concat(t.label," ").concat(t.value)},$v=function(t){return function(r,a){if(r.data.__isNew__)return!0;var n=Z({ignoreCase:!0,ignoreAccents:!0,stringify:Vv,trim:!0,matchFrom:"any"},t),i=n.ignoreCase,o=n.ignoreAccents,l=n.stringify,s=n.trim,u=n.matchFrom,d=s?Ri(a):a,p=s?Ri(l(r)):l(r);return i&&(d=d.toLowerCase(),p=p.toLowerCase()),o&&(d=Lv(d),p=jl(p)),u==="start"?p.substr(0,d.length)===d:p.indexOf(d)>-1}},Hv=["innerRef"];function Gv(e){var t=e.innerRef,r=ut(e,Hv);return $("input",w({ref:t},r,{css:Qi({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var jv=function(t){t.preventDefault(),t.stopPropagation()};function zv(e){var t=e.isEnabled,r=e.onBottomArrive,a=e.onBottomLeave,n=e.onTopArrive,i=e.onTopLeave,o=v.exports.useRef(!1),l=v.exports.useRef(!1),s=v.exports.useRef(0),u=v.exports.useRef(null),d=v.exports.useCallback(function(b,x){if(u.current!==null){var y=u.current,C=y.scrollTop,E=y.scrollHeight,I=y.clientHeight,D=u.current,P=x>0,F=E-I-C,M=!1;F>x&&o.current&&(a&&a(b),o.current=!1),P&&l.current&&(i&&i(b),l.current=!1),P&&x>F?(r&&!o.current&&r(b),D.scrollTop=E,M=!0,o.current=!0):!P&&-x>C&&(n&&!l.current&&n(b),D.scrollTop=0,M=!0,l.current=!0),M&&jv(b)}},[r,a,n,i]),p=v.exports.useCallback(function(b){d(b,b.deltaY)},[d]),f=v.exports.useCallback(function(b){s.current=b.changedTouches[0].clientY},[]),m=v.exports.useCallback(function(b){var x=s.current-b.changedTouches[0].clientY;d(b,x)},[d]),g=v.exports.useCallback(function(b){if(!!b){var x=Og?{passive:!1}:!1;b.addEventListener("wheel",p,x),b.addEventListener("touchstart",f,x),b.addEventListener("touchmove",m,x)}},[m,f,p]),h=v.exports.useCallback(function(b){!b||(b.removeEventListener("wheel",p,!1),b.removeEventListener("touchstart",f,!1),b.removeEventListener("touchmove",m,!1))},[m,f,p]);return v.exports.useEffect(function(){if(!!t){var b=u.current;return g(b),function(){h(b)}}},[t,g,h]),function(b){u.current=b}}var Mi=["boxSizing","height","overflow","paddingRight","position"],Ti={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Bi(e){e.preventDefault()}function Ni(e){e.stopPropagation()}function ki(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function Li(){return"ontouchstart"in window||navigator.maxTouchPoints}var Vi=!!(typeof window<"u"&&window.document&&window.document.createElement),Tt=0,ft={capture:!1,passive:!1};function Uv(e){var t=e.isEnabled,r=e.accountForScrollbars,a=r===void 0?!0:r,n=v.exports.useRef({}),i=v.exports.useRef(null),o=v.exports.useCallback(function(s){if(!!Vi){var u=document.body,d=u&&u.style;if(a&&Mi.forEach(function(g){var h=d&&d[g];n.current[g]=h}),a&&Tt<1){var p=parseInt(n.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,m=window.innerWidth-f+p||0;Object.keys(Ti).forEach(function(g){var h=Ti[g];d&&(d[g]=h)}),d&&(d.paddingRight="".concat(m,"px"))}u&&Li()&&(u.addEventListener("touchmove",Bi,ft),s&&(s.addEventListener("touchstart",ki,ft),s.addEventListener("touchmove",Ni,ft))),Tt+=1}},[a]),l=v.exports.useCallback(function(s){if(!!Vi){var u=document.body,d=u&&u.style;Tt=Math.max(Tt-1,0),a&&Tt<1&&Mi.forEach(function(p){var f=n.current[p];d&&(d[p]=f)}),u&&Li()&&(u.removeEventListener("touchmove",Bi,ft),s&&(s.removeEventListener("touchstart",ki,ft),s.removeEventListener("touchmove",Ni,ft)))}},[a]);return v.exports.useEffect(function(){if(!!t){var s=i.current;return o(s),function(){l(s)}}},[t,o,l]),function(s){i.current=s}}var Wv=function(){return document.activeElement&&document.activeElement.blur()},qv={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Kv(e){var t=e.children,r=e.lockEnabled,a=e.captureEnabled,n=a===void 0?!0:a,i=e.onBottomArrive,o=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=zv({isEnabled:n,onBottomArrive:i,onBottomLeave:o,onTopArrive:l,onTopLeave:s}),d=Uv({isEnabled:r}),p=function(m){u(m),d(m)};return $(v.exports.Fragment,null,r&&$("div",{onClick:Wv,css:qv}),t(p))}var Yv=function(t){return t.label},_v=function(t){return t.label},Jv=function(t){return t.value},Xv=function(t){return!!t.isDisabled},Zv={clearIndicator:Xg,container:Gg,control:nv,dropdownIndicator:_g,group:ov,groupHeading:sv,indicatorsContainer:Wg,indicatorSeparator:Qg,input:dv,loadingIndicator:rv,loadingMessage:Vg,menu:Tg,menuList:Ng,menuPortal:$g,multiValue:gv,multiValueLabel:vv,multiValueRemove:hv,noOptionsMessage:Lg,option:Cv,placeholder:Sv,singleValue:Iv,valueContainer:zg},Qv={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},eh=4,zl=4,th=38,rh=zl*2,nh={baseUnit:zl,controlHeight:th,menuGutter:rh},Dn={borderRadius:eh,colors:Qv,spacing:nh},ah={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Oi(),captureMenuScroll:!Oi(),closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:$v(),formatGroupLabel:Yv,getOptionLabel:_v,getOptionValue:Jv,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Xv,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Ig(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0};function $i(e,t,r,a){var n=Kl(e,t,r),i=Yl(e,t,r),o=ql(e,t),l=kr(e,t);return{type:"option",data:t,isDisabled:n,isSelected:i,label:o,value:l,index:a}}function Ul(e,t){return e.options.map(function(r,a){if("options"in r){var n=r.options.map(function(o,l){return $i(e,o,t,l)}).filter(function(o){return Hi(e,o)});return n.length>0?{type:"group",data:r,options:n,index:a}:void 0}var i=$i(e,r,t,a);return Hi(e,i)?i:void 0}).filter(Fg)}function Wl(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Hl(r.options.map(function(a){return a.data}))):t.push(r.data),t},[])}function ih(e,t){return Wl(Ul(e,t))}function Hi(e,t){var r=e.inputValue,a=r===void 0?"":r,n=t.data,i=t.isSelected,o=t.label,l=t.value;return(!Jl(e)||!i)&&_l(e,{label:o,value:l,data:n},a)}function oh(e,t){var r=e.focusedValue,a=e.selectValue,n=a.indexOf(r);if(n>-1){var i=t.indexOf(r);if(i>-1)return r;if(n<t.length)return t[n]}return null}function lh(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var ql=function(t,r){return t.getOptionLabel(r)},kr=function(t,r){return t.getOptionValue(r)};function Kl(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function Yl(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var a=kr(e,t);return r.some(function(n){return kr(e,n)===a})}function _l(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var Jl=function(t){var r=t.hideSelectedOptions,a=t.isMulti;return r===void 0?a:r},sh=1,Xl=function(e){Ca(r,e);var t=Da(r);function r(a){var n;return ya(this,r),n=t.call(this,a),n.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.instancePrefix="",n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(i){n.controlRef=i},n.focusedOptionRef=null,n.getFocusedOptionRef=function(i){n.focusedOptionRef=i},n.menuListRef=null,n.getMenuListRef=function(i){n.menuListRef=i},n.inputRef=null,n.getInputRef=function(i){n.inputRef=i},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(i,o){var l=n.props,s=l.onChange,u=l.name;o.name=u,n.ariaOnChange(i,o),s(i,o)},n.setValue=function(i,o,l){var s=n.props,u=s.closeMenuOnSelect,d=s.isMulti,p=s.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:p}),u&&(n.setState({inputIsHiddenAfterUpdate:!d}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(i,{action:o,option:l})},n.selectOption=function(i){var o=n.props,l=o.blurInputOnSelect,s=o.isMulti,u=o.name,d=n.state.selectValue,p=s&&n.isOptionSelected(i,d),f=n.isOptionDisabled(i,d);if(p){var m=n.getOptionValue(i);n.setValue(d.filter(function(g){return n.getOptionValue(g)!==m}),"deselect-option",i)}else if(!f)s?n.setValue([].concat(Hl(d),[i]),"select-option",i):n.setValue(i,"select-option");else{n.ariaOnChange(i,{action:"select-option",option:i,name:u});return}l&&n.blurInput()},n.removeValue=function(i){var o=n.props.isMulti,l=n.state.selectValue,s=n.getOptionValue(i),u=l.filter(function(p){return n.getOptionValue(p)!==s}),d=vr(o,u,u[0]||null);n.onChange(d,{action:"remove-value",removedValue:i}),n.focusInput()},n.clearValue=function(){var i=n.state.selectValue;n.onChange(vr(n.props.isMulti,[],null),{action:"clear",removedValues:i})},n.popValue=function(){var i=n.props.isMulti,o=n.state.selectValue,l=o[o.length-1],s=o.slice(0,o.length-1),u=vr(i,s,s[0]||null);n.onChange(u,{action:"pop-value",removedValue:l})},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return yg.apply(void 0,[n.props.classNamePrefix].concat(o))},n.getOptionLabel=function(i){return ql(n.props,i)},n.getOptionValue=function(i){return kr(n.props,i)},n.getStyles=function(i,o){var l=Zv[i](o);l.boxSizing="border-box";var s=n.props.styles[i];return s?s(l,o):l},n.getElementId=function(i){return"".concat(n.instancePrefix,"-").concat(i)},n.getComponents=function(){return Fv(n.props)},n.buildCategorizedOptions=function(){return Ul(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Wl(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(i,o){n.setState({ariaSelection:Z({value:i},o)})},n.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(i){n.blockOptionHover=!1},n.onControlMouseDown=function(i){var o=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&n.onMenuClose():o&&n.openMenu("first"):(o&&(n.openAfterFocus=!0),n.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()},n.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!n.props.isDisabled){var o=n.props,l=o.isMulti,s=o.menuIsOpen;n.focusInput(),s?(n.setState({inputIsHiddenAfterUpdate:!l}),n.onMenuClose()):n.openMenu("first"),i.preventDefault(),i.stopPropagation()}},n.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(n.clearValue(),i.preventDefault(),i.stopPropagation(),n.openAfterFocus=!1,i.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(i){typeof n.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&Sa(i.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(i)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(i){var o=i.touches,l=o&&o.item(0);!l||(n.initialTouchX=l.clientX,n.initialTouchY=l.clientY,n.userIsDragging=!1)},n.onTouchMove=function(i){var o=i.touches,l=o&&o.item(0);if(!!l){var s=Math.abs(l.clientX-n.initialTouchX),u=Math.abs(l.clientY-n.initialTouchY),d=5;n.userIsDragging=s>d||u>d}},n.onTouchEnd=function(i){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(i.target)&&n.menuListRef&&!n.menuListRef.contains(i.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(i){n.userIsDragging||n.onControlMouseDown(i)},n.onClearIndicatorTouchEnd=function(i){n.userIsDragging||n.onClearIndicatorMouseDown(i)},n.onDropdownIndicatorTouchEnd=function(i){n.userIsDragging||n.onDropdownIndicatorMouseDown(i)},n.handleInputChange=function(i){var o=n.props.inputValue,l=i.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(l,{action:"input-change",prevInputValue:o}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(i){n.props.onFocus&&n.props.onFocus(i),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(i){var o=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(i),n.onInputChange("",{action:"input-blur",prevInputValue:o}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(i){n.blockOptionHover||n.state.focusedOption===i||n.setState({focusedOption:i})},n.shouldHideSelectedOptions=function(){return Jl(n.props)},n.onKeyDown=function(i){var o=n.props,l=o.isMulti,s=o.backspaceRemovesValue,u=o.escapeClearsValue,d=o.inputValue,p=o.isClearable,f=o.isDisabled,m=o.menuIsOpen,g=o.onKeyDown,h=o.tabSelectsValue,b=o.openMenuOnFocus,x=n.state,y=x.focusedOption,C=x.focusedValue,E=x.selectValue;if(!f&&!(typeof g=="function"&&(g(i),i.defaultPrevented))){switch(n.blockOptionHover=!0,i.key){case"ArrowLeft":if(!l||d)return;n.focusValue("previous");break;case"ArrowRight":if(!l||d)return;n.focusValue("next");break;case"Delete":case"Backspace":if(d)return;if(C)n.removeValue(C);else{if(!s)return;l?n.popValue():p&&n.clearValue()}break;case"Tab":if(n.isComposing||i.shiftKey||!m||!h||!y||b&&n.isOptionSelected(y,E))return;n.selectOption(y);break;case"Enter":if(i.keyCode===229)break;if(m){if(!y||n.isComposing)return;n.selectOption(y);break}return;case"Escape":m?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:d}),n.onMenuClose()):p&&u&&n.clearValue();break;case" ":if(d)return;if(!m){n.openMenu("first");break}if(!y)return;n.selectOption(y);break;case"ArrowUp":m?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":m?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!m)return;n.focusOption("pageup");break;case"PageDown":if(!m)return;n.focusOption("pagedown");break;case"Home":if(!m)return;n.focusOption("first");break;case"End":if(!m)return;n.focusOption("last");break;default:return}i.preventDefault()}},n.instancePrefix="react-select-"+(n.props.instanceId||++sh),n.state.selectValue=Ai(a.value),n}return Ea(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput()}},{key:"componentDidUpdate",value:function(n){var i=this.props,o=i.isDisabled,l=i.menuIsOpen,s=this.state.isFocused;(s&&!o&&n.isDisabled||s&&l&&!n.menuIsOpen)&&this.focusInput(),s&&o&&!n.isDisabled&&this.setState({isFocused:!1},this.onMenuClose),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Sg(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,i){this.props.onInputChange(n,i)}},{key:"focusInput",value:function(){!this.inputRef||this.inputRef.focus()}},{key:"blurInput",value:function(){!this.inputRef||this.inputRef.blur()}},{key:"openMenu",value:function(n){var i=this,o=this.state,l=o.selectValue,s=o.isFocused,u=this.buildFocusableOptions(),d=n==="first"?0:u.length-1;if(!this.props.isMulti){var p=u.indexOf(l[0]);p>-1&&(d=p)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d]},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(n){var i=this.state,o=i.selectValue,l=i.focusedValue;if(!!this.props.isMulti){this.setState({focusedOption:null});var s=o.indexOf(l);l||(s=-1);var u=o.length-1,d=-1;if(!!o.length){switch(n){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:o[d]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,o=this.state.focusedOption,l=this.getFocusableOptions();if(!!l.length){var s=0,u=l.indexOf(o);o||(u=-1),n==="up"?s=u>0?u-1:l.length-1:n==="down"?s=(u+1)%l.length:n==="pageup"?(s=u-i,s<0&&(s=0)):n==="pagedown"?(s=u+i,s>l.length-1&&(s=l.length-1)):n==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Dn):Z(Z({},Dn),this.props.theme):Dn}},{key:"getCommonProps",value:function(){var n=this.clearValue,i=this.cx,o=this.getStyles,l=this.getValue,s=this.selectOption,u=this.setValue,d=this.props,p=d.isMulti,f=d.isRtl,m=d.options,g=this.hasValue();return{clearValue:n,cx:i,getStyles:o,getValue:l,hasValue:g,isMulti:p,isRtl:f,options:m,selectOption:s,selectProps:d,setValue:u,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,i=n.isClearable,o=n.isMulti;return i===void 0?o:i}},{key:"isOptionDisabled",value:function(n,i){return Kl(this.props,n,i)}},{key:"isOptionSelected",value:function(n,i){return Yl(this.props,n,i)}},{key:"filterOption",value:function(n,i){return _l(this.props,n,i)}},{key:"formatOptionLabel",value:function(n,i){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:i,inputValue:o,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,i=n.isDisabled,o=n.isSearchable,l=n.inputId,s=n.inputValue,u=n.tabIndex,d=n.form,p=n.menuIsOpen,f=this.getComponents(),m=f.Input,g=this.state,h=g.inputIsHidden,b=g.ariaSelection,x=this.commonProps,y=l||this.getElementId("input"),C=Z(Z({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox"),"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],role:"combobox"},!o&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?v.exports.createElement(m,w({},x,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:i,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},C)):v.exports.createElement(Gv,w({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Br,onFocus:this.onInputFocus,disabled:i,tabIndex:u,inputMode:"none",form:d,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,i=this.getComponents(),o=i.MultiValue,l=i.MultiValueContainer,s=i.MultiValueLabel,u=i.MultiValueRemove,d=i.SingleValue,p=i.Placeholder,f=this.commonProps,m=this.props,g=m.controlShouldRenderValue,h=m.isDisabled,b=m.isMulti,x=m.inputValue,y=m.placeholder,C=this.state,E=C.selectValue,I=C.focusedValue,D=C.isFocused;if(!this.hasValue()||!g)return x?null:v.exports.createElement(p,w({},f,{key:"placeholder",isDisabled:h,isFocused:D,innerProps:{id:this.getElementId("placeholder")}}),y);if(b)return E.map(function(F,M){var S=F===I,A="".concat(n.getOptionLabel(F),"-").concat(n.getOptionValue(F));return v.exports.createElement(o,w({},f,{components:{Container:l,Label:s,Remove:u},isFocused:S,isDisabled:h,key:A,index:M,removeProps:{onClick:function(){return n.removeValue(F)},onTouchEnd:function(){return n.removeValue(F)},onMouseDown:function(B){B.preventDefault(),B.stopPropagation()}},data:F}),n.formatOptionLabel(F,"value"))});if(x)return null;var P=E[0];return v.exports.createElement(d,w({},f,{data:P,isDisabled:h}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),i=n.ClearIndicator,o=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!i||s||!this.hasValue()||u)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return v.exports.createElement(i,w({},o,{innerProps:p,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),i=n.LoadingIndicator,o=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!i||!u)return null;var p={"aria-hidden":"true"};return v.exports.createElement(i,w({},o,{innerProps:p,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),i=n.DropdownIndicator,o=n.IndicatorSeparator;if(!i||!o)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return v.exports.createElement(o,w({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),i=n.DropdownIndicator;if(!i)return null;var o=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return v.exports.createElement(i,w({},o,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var n=this,i=this.getComponents(),o=i.Group,l=i.GroupHeading,s=i.Menu,u=i.MenuList,d=i.MenuPortal,p=i.LoadingMessage,f=i.NoOptionsMessage,m=i.Option,g=this.commonProps,h=this.state.focusedOption,b=this.props,x=b.captureMenuScroll,y=b.inputValue,C=b.isLoading,E=b.loadingMessage,I=b.minMenuHeight,D=b.maxMenuHeight,P=b.menuIsOpen,F=b.menuPlacement,M=b.menuPosition,S=b.menuPortalTarget,A=b.menuShouldBlockScroll,T=b.menuShouldScrollIntoView,B=b.noOptionsMessage,N=b.onMenuScrollToTop,R=b.onMenuScrollToBottom;if(!P)return null;var G=function(te,se){var q=te.type,j=te.data,_=te.isDisabled,ie=te.isSelected,Ee=te.label,Ce=te.value,Ne=h===j,ke=_?void 0:function(){return n.onOptionHover(j)},he=_?void 0:function(){return n.selectOption(j)},De="".concat(n.getElementId("option"),"-").concat(se),Se={id:De,onClick:he,onMouseMove:ke,onMouseOver:ke,tabIndex:-1};return v.exports.createElement(m,w({},g,{innerProps:Se,data:j,isDisabled:_,isSelected:ie,key:De,label:Ee,type:q,value:Ce,isFocused:Ne,innerRef:Ne?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(te.data,"menu"))},K;if(this.hasOptions())K=this.getCategorizedOptions().map(function(W){if(W.type==="group"){var te=W.data,se=W.options,q=W.index,j="".concat(n.getElementId("group"),"-").concat(q),_="".concat(j,"-heading");return v.exports.createElement(o,w({},g,{key:j,data:te,options:se,Heading:l,headingProps:{id:_,data:W.data},label:n.formatGroupLabel(W.data)}),W.options.map(function(ie){return G(ie,"".concat(q,"-").concat(ie.index))}))}else if(W.type==="option")return G(W,"".concat(W.index))});else if(C){var Y=E({inputValue:y});if(Y===null)return null;K=v.exports.createElement(p,g,Y)}else{var ee=B({inputValue:y});if(ee===null)return null;K=v.exports.createElement(f,g,ee)}var X={minMenuHeight:I,maxMenuHeight:D,menuPlacement:F,menuPosition:M,menuShouldScrollIntoView:T},ne=v.exports.createElement(Fl,w({},g,X),function(W){var te=W.ref,se=W.placerProps,q=se.placement,j=se.maxHeight;return v.exports.createElement(s,w({},g,X,{innerRef:te,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove,id:n.getElementId("listbox")},isLoading:C,placement:q}),v.exports.createElement(Kv,{captureEnabled:x,onTopArrive:N,onBottomArrive:R,lockEnabled:A},function(_){return v.exports.createElement(u,w({},g,{innerRef:function(Ee){n.getMenuListRef(Ee),_(Ee)},isLoading:C,maxHeight:j,focusedOption:h}),K)}))});return S||M==="fixed"?v.exports.createElement(d,w({},g,{appendTo:S,controlElement:this.controlRef,menuPlacement:F,menuPosition:M}),ne):ne}},{key:"renderFormField",value:function(){var n=this,i=this.props,o=i.delimiter,l=i.isDisabled,s=i.isMulti,u=i.name,d=this.state.selectValue;if(!(!u||l))if(s)if(o){var p=d.map(function(g){return n.getOptionValue(g)}).join(o);return v.exports.createElement("input",{name:u,type:"hidden",value:p})}else{var f=d.length>0?d.map(function(g,h){return v.exports.createElement("input",{key:"i-".concat(h),name:u,type:"hidden",value:n.getOptionValue(g)})}):v.exports.createElement("input",{name:u,type:"hidden"});return v.exports.createElement("div",null,f)}else{var m=d[0]?this.getOptionValue(d[0]):"";return v.exports.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,i=this.state,o=i.ariaSelection,l=i.focusedOption,s=i.focusedValue,u=i.isFocused,d=i.selectValue,p=this.getFocusableOptions();return v.exports.createElement(Nv,w({},n,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:p}))}},{key:"render",value:function(){var n=this.getComponents(),i=n.Control,o=n.IndicatorsContainer,l=n.SelectContainer,s=n.ValueContainer,u=this.props,d=u.className,p=u.id,f=u.isDisabled,m=u.menuIsOpen,g=this.state.isFocused,h=this.commonProps=this.getCommonProps();return v.exports.createElement(l,w({},h,{className:d,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),v.exports.createElement(i,w({},h,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:m}),v.exports.createElement(s,w({},h,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),v.exports.createElement(o,w({},h,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,i){var o=i.prevProps,l=i.clearFocusValueOnUpdate,s=i.inputIsHiddenAfterUpdate,u=i.ariaSelection,d=i.isFocused,p=i.prevWasFocused,f=n.options,m=n.value,g=n.menuIsOpen,h=n.inputValue,b=n.isMulti,x=Ai(m),y={};if(o&&(m!==o.value||f!==o.options||g!==o.menuIsOpen||h!==o.inputValue)){var C=g?ih(n,x):[],E=l?oh(i,x):null,I=lh(i,C);y={selectValue:x,focusedOption:I,focusedValue:E,clearFocusValueOnUpdate:!1}}var D=s!=null&&n!==o?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},P=u,F=d&&p;return d&&!F&&(P={value:vr(b,x,x[0]||null),options:x,action:"initial-input-focus"},F=!p),(u==null?void 0:u.action)==="initial-input-focus"&&(P=null),Z(Z(Z({},y),D),{},{prevProps:n,ariaSelection:P,prevWasFocused:F})}}]),r}(v.exports.Component);Xl.defaultProps=ah;function uh(e){if(Array.isArray(e))return e}function ch(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,n,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=i.call(r)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(d){u=!0,n=d}finally{try{if(!s&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw n}}return l}}function dh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t){return uh(e)||ch(e,t)||$l(e,t)||dh()}var ph=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function fh(e){var t=e.defaultInputValue,r=t===void 0?"":t,a=e.defaultMenuIsOpen,n=a===void 0?!1:a,i=e.defaultValue,o=i===void 0?null:i,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,p=e.onMenuClose,f=e.onMenuOpen,m=e.value,g=ut(e,ph),h=v.exports.useState(l!==void 0?l:r),b=Re(h,2),x=b[0],y=b[1],C=v.exports.useState(s!==void 0?s:n),E=Re(C,2),I=E[0],D=E[1],P=v.exports.useState(m!==void 0?m:o),F=Re(P,2),M=F[0],S=F[1],A=v.exports.useCallback(function(Y,ee){typeof u=="function"&&u(Y,ee),S(Y)},[u]),T=v.exports.useCallback(function(Y,ee){var X;typeof d=="function"&&(X=d(Y,ee)),y(X!==void 0?X:Y)},[d]),B=v.exports.useCallback(function(){typeof f=="function"&&f(),D(!0)},[f]),N=v.exports.useCallback(function(){typeof p=="function"&&p(),D(!1)},[p]),R=l!==void 0?l:x,G=s!==void 0?s:I,K=m!==void 0?m:M;return Z(Z({},g),{},{inputValue:R,menuIsOpen:G,onChange:A,onInputChange:T,onMenuClose:N,onMenuOpen:B,value:K})}var mh=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function gh(e){var t=e.defaultOptions,r=t===void 0?!1:t,a=e.cacheOptions,n=a===void 0?!1:a,i=e.loadOptions;e.options;var o=e.isLoading,l=o===void 0?!1:o,s=e.onInputChange,u=e.filterOption,d=u===void 0?null:u,p=ut(e,mh),f=p.inputValue,m=v.exports.useRef(void 0),g=v.exports.useRef(!1),h=v.exports.useState(Array.isArray(r)?r:void 0),b=Re(h,2),x=b[0],y=b[1],C=v.exports.useState(typeof f<"u"?f:""),E=Re(C,2),I=E[0],D=E[1],P=v.exports.useState(r===!0),F=Re(P,2),M=F[0],S=F[1],A=v.exports.useState(void 0),T=Re(A,2),B=T[0],N=T[1],R=v.exports.useState([]),G=Re(R,2),K=G[0],Y=G[1],ee=v.exports.useState(!1),X=Re(ee,2),ne=X[0],W=X[1],te=v.exports.useState({}),se=Re(te,2),q=se[0],j=se[1],_=v.exports.useState(void 0),ie=Re(_,2),Ee=ie[0],Ce=ie[1],Ne=v.exports.useState(void 0),ke=Re(Ne,2),he=ke[0],De=ke[1];n!==he&&(j({}),De(n)),r!==Ee&&(y(Array.isArray(r)?r:void 0),Ce(r)),v.exports.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var Se=v.exports.useCallback(function(Ue,be){if(!i)return be();var ue=i(Ue,be);ue&&typeof ue.then=="function"&&ue.then(be,function(){return be()})},[i]);v.exports.useEffect(function(){r===!0&&Se(I,function(Ue){!g.current||(y(Ue||[]),S(!!m.current))})},[]);var je=v.exports.useCallback(function(Ue,be){var ue=Eg(Ue,be,s);if(!ue){m.current=void 0,D(""),N(""),Y([]),S(!1),W(!1);return}if(n&&q[ue])D(ue),N(ue),Y(q[ue]),S(!1),W(!1);else{var or=m.current={};D(ue),S(!0),W(!B),Se(ue,function(At){!g||or===m.current&&(m.current=void 0,S(!1),N(ue),Y(At||[]),W(!1),j(At?Z(Z({},q),{},Ve({},ue,At)):q))})}},[n,Se,B,q,s]),rt=ne?[]:I&&B?K:x||[];return Z(Z({},p),{},{options:rt,isLoading:M||l,onInputChange:je,filterOption:d})}var vh=v.exports.forwardRef(function(e,t){var r=gh(e),a=fh(r);return v.exports.createElement(Xl,w({ref:t},a))});const hh=le(vh)`
  .react-select__control {
    background: var(--shape);

    border-color: var(--gray1);

    &:hover {
      border-color: var(--blue);
    }
    &.react-select__control--is-focused {
      border: 2px solid var(--blue);
      box-shadow: 0px 0px 1px var(--blue);
    }
    &.react-select__control--menu-is-open {
      border: 2px solid var(--blue);
      box-shadow: 0px 0px 1px var(--blue);
    }
    .react-select__value-container {
      color: var(--text-title);
      .react-select__single-value {
        color: var(--text-title);
      }
      .react-select__placeholder {
        color: var(--text-title);
      }
      .react-select__input-container {
        color: var(--blue);
      }
    }
    .react-select__indicators {
      .react-select__loading-indicator {
        span {
          color: var(--text-title);
        }
      }
      .react-select__dropdown-indicator {
        svg {
          fill: var(--text-title);
        }
      }
    }
  }
  .react-select__menu {
    background: var(--shape);
    .react-select__menu-list {
      overflow-y: scroll;
      .react-select__option {
        color: var(--text-title);
        &:not(:last-of-type) {
          border-bottom: 1px solid var(--gray3);
        }

        &.react-select__option--is-focused {
          color: var(--text-title-inverted);
          background: var(--shape-inverted);
        }
        &.react-select__option--is-disabled {
          color: var(--red);
          background: ${H(.8,L.red)};
          &:hover {
            color: var(--red);
            background: ${H(.8,L.red)};
            cursor: not-allowed;
          }
        }
        &.react-select__option--is-selected {
          color: var(--blue);
          background: ${H(.8,L.blue)};
        }
      }
    }
  }
`;function bh({props:{className:e,loadedOptions:t,isLoading:r,setIsLoading:a,selectedItemFunnel:n,setSelectedItemFunnel:i}}){const o=p=>t&&t.filter(f=>Er(f.label).toLowerCase().includes(Er(p).toLowerCase())),l=p=>new Promise(f=>{t&&a(!1),f(o(p))}),s=(p,f)=>{i(p)},u=({inputValue:p})=>c.createElement("span",null,"Carregando...",p&&` Termo: ${p}`),d=({inputValue:p})=>c.createElement("span",null,"N\xE3o foi encontrado nenhum item: ",p);return c.createElement(hh,{cacheOptions:!1,defaultOptions:t,loadOptions:l,className:`react-select-container ${e}`,classNamePrefix:"react-select",placeholder:r?"Carregando itens, aguarde...":"Selecione um item",onChange:s,isLoading:r,loadingMessage:u,noOptionsMessage:d,value:[n]})}function xh({isOpen:e,onRequestClose:t,editConfig:{itemToEdit:r,setItemToEdit:a}}){const[n,i]=v.exports.useState("mensagens"),[o,l]=v.exports.useState(),[s,u]=v.exports.useState(),[d,p]=v.exports.useState(),{mensagensIndex:f}=zt(),{audiosIndex:m}=Ut(),{mediasIndex:g}=Wt(),{docsIndex:h}=qt(),{addItemForFunnel:b,editItemFromFunnel:x}=lt(),{getItemFromStorage:y,getNameFromIndex:C}=de(),E={mensagens:f,audios:m,medias:g,docs:h};v.exports.useEffect(()=>{n==="audios"&&!!(s!=null&&s.value)&&y(s==null?void 0:s.value).then(async R=>{if(!R||R.type!=="audios"||!R.data)return;const G=await os(R.data);G&&G>0&&(S(Math.floor(G/60)),F(Math.floor(G%60)))})},[s]);const[I,D]=v.exports.useState(!1),[P,F]=v.exports.useState(5),[M,S]=v.exports.useState(0),[A,T]=v.exports.useState(0);v.exports.useEffect(()=>{async function R(G){l([]),G&&u(void 0),D(!0),l(E[n].map(K=>({label:K.name||`${n}-${K.id}`,value:K.id}))),D(!1)}R(!r||!!d&&d.type!==n||!!d&&d.type===n&&d.id!==(s==null?void 0:s.value))},[n]),v.exports.useEffect(()=>{T(M*60+P)},[M,P]),v.exports.useEffect(()=>{if(!r){p(void 0);return}y(r.id).then(R=>{var ee;const G=(ee=C(R.id,R.type))!=null?ee:"";i(R.type),u({label:G,value:R.id}),p(R);const K=Math.floor(r.delay/1e3/60),Y=r.delay/1e3%60;S(K),F(Y)})},[r]);async function B(){if(!(s!=null&&s.value)||Number.isNaN(A)||!r)return;const R=s.value;await Q.promise(x({beforeId:r.id,possibleId:r.possibleId,possibleIndex:r.possibleIndex,item:{itemId:R,delayInSeconds:A}}),{pending:"Salvando altera\xE7\xF5es, aguarde...",success:"Item editado com sucesso",error:"Algo deu errado ao tentar editar seu item"}),t(),u(void 0),S(0),F(5),a&&a(void 0)}async function N(){if(!(s!=null&&s.value)||Number.isNaN(A))return;const R=s.value;await Q.promise(b({itemId:R,delayInSeconds:A}),{pending:"Inserindo item, aguarde...",success:"Item inserido com sucesso",error:"Algo deu errado ao tentar inserir seu item"}),t(),u(void 0),S(0),F(5),a&&a(void 0)}return c.createElement(Gn,{closeTimeoutMS:400,isOpen:e,onRequestClose:()=>{t(),u(void 0),S(0),F(5),a&&a(void 0)},overlayClassName:"react-modal-overlay",className:"react-modal-content"},c.createElement("button",{type:"button",onClick:()=>{t(),u(void 0),S(0),F(5),a&&a(void 0)},className:"react-modal-close"},c.createElement(Ki,{fill:L.red})),c.createElement(pg,null,c.createElement("h1",null,d&&c.createElement(qi,null),d?" Editando o item":"Adicionar Novo Item"),c.createElement("label",{htmlFor:"typesContainer"},"Tipo:"),c.createElement("div",{id:"typesContainer"},c.createElement(fr,{className:"optionType optionMensagens",name:"Mensagens",fill:z("mensagens"),isActive:n==="mensagens",Icon:$e("mensagens"),onClick:()=>i("mensagens")}),c.createElement(fr,{className:"optionType optionAudios",name:"Audios",fill:z("audios"),isActive:n==="audios",Icon:$e("audios"),onClick:()=>i("audios")}),c.createElement(fr,{className:"optionType optionMedias",name:"M\xEDdias",fill:z("medias"),isActive:n==="medias",Icon:$e("medias"),onClick:()=>i("medias")}),c.createElement(fr,{className:"optionType optionDocs",name:"Documentos",fill:z("docs"),isActive:n==="docs",Icon:$e("docs"),onClick:()=>i("docs")})),c.createElement("label",{htmlFor:"selectItemFunnel"},"Item:"),c.createElement(bh,{props:{className:"selectItemFunnel",loadedOptions:o,isLoading:I,setIsLoading:D,selectedItemFunnel:s,setSelectedItemFunnel:u}}),c.createElement("label",{htmlFor:"delayContainer"},"Delay:"),c.createElement("div",{id:"delayContainer"},c.createElement("div",{className:"delayItemContainer",id:"delayMinutesContainer"},c.createElement("label",{className:"delayLabel",htmlFor:"minutesDelay"},"Minutos"),c.createElement("input",{type:"number",value:String(M),onChange:R=>S(Number(R.target.value)>=0?Math.round(Number(R.target.value)):0),id:"minutesDelay",min:0})),c.createElement("span",{className:"separator"},":"),c.createElement("div",{className:"delayItemContainer",id:"delaySecondsContainer"},c.createElement("label",{className:"delayLabel",htmlFor:"secondsDelay"},"Segundos"),c.createElement("input",{type:"number",value:String(P),onChange:R=>F(Number(R.target.value)>=0?Math.round(Number(R.target.value)):0),id:"secondsDelay",min:0}))),c.createElement("button",{type:"submit",id:"addItemFunnelBtn",disabled:!s,onClick:d?B:N},d?"Salvar Altera\xE7\xF5es":"Adicionar")))}const yh=le.div`
  position: relative;
  div#headerAndAddBtn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    h2 {
      font-size: 1rem;
      font-weight: 500;
      strong {
        font-weight: 900;
        color: var(--yellow);
      }
    }
  }
  .btnAddItem {
    border: none;
    border-radius: 0.25rem;
    background: var(--veryperi);
    font-weight: 700;
    padding: 0.5rem 2rem;
    color: white;
  }
  div#funnelWrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    display: inline-block;
    padding-bottom: 4.5rem;
    padding-right: 0.25rem;
  }
  div#noItemYet {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      width: 50%;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;function Eh(){const{selectedFunnel:e,getNameFromIndex:t,getItemFromStorage:r}=de(),{removeItemFromFunnel:a,changeFunnelItemPosition:n,duplicateFunnel:i}=lt(),[o,l]=v.exports.useState([]),[s,u]=v.exports.useState(0),[d,p]=v.exports.useState(!1),[f,m]=v.exports.useState(!1),[g,h]=v.exports.useState(),{isDarkTheme:b}=Fe();v.exports.useEffect(()=>{e!=null&&e.data?l(e.data.map(A=>{const T=it(),B=t(A.id,A.type);return{...A,...B&&{name:B},indexId:T,isOpen:!1}})):l([])},[e]),v.exports.useEffect(()=>{if(!o)return;const A=o.reduce((T,B)=>T+B.delay,0);u(A)},[o]);async function x(A){const T=await Promise.all(o.map(async B=>{if(B.indexId===A){if(B.data)return{...B,isOpen:!B.isOpen};const N=await r(B.id);return{...B,data:N.data,isOpen:!0}}return B}));l(T)}async function y({indexId:A,id:T}){if(!e)return;const B=o.reduce((N,R,G)=>R.indexId!==A?N:{...N,idFound:R.id,indexFound:G},{});a({id:T,possibleIndex:B.indexFound,possibleId:String(B.idFound)})}async function C({indexId:A,id:T,delay:B}){if(!e)return;const{idFound:N,indexFound:R}=o.reduce((G,K,Y)=>(K.indexId===A&&(G.idFound=K.id,G.indexFound=Y),G),{});p(!0),h({id:T,possibleId:N,possibleIndex:R,delay:B})}function E(){p(!0)}function I(){p(!1)}function D(){m(!0)}function P(){m(!1)}function F(A){const{source:T,destination:B}=A;!B||T.index===B.index||n(T.index,B.index)}const M=Math.floor(s/1e3/60),S=Math.floor(s/1e3%60);return c.createElement(yh,{id:"mainContent"},c.createElement(xh,{isOpen:d,onRequestClose:I,editConfig:{itemToEdit:g,setItemToEdit:h}}),c.createElement(st,{details:{title:`Gostaria realmente de duplicar o funil "${e==null?void 0:e.name}"?`,description:"Ele ser\xE1 criado com os MESMOS ITENS do funil original e com o nome + 'copia' . Ap\xF3s a confirma\xE7\xE3o, o novo funil ser\xE1 aberto automaticamente.",okTitle:"Sim, tenho certeza",cancelTitle:"Cancelar",fillCancel:b?L.gray3:L.gray4,fillOk:L.green},onRequestOk:async()=>{e&&await i(e.id),P()},isOpen:f,onRequestClose:P}),(e==null?void 0:e.data)&&(o==null?void 0:o.length)>0?c.createElement(c.Fragment,null,c.createElement("div",{id:"headerAndAddBtn"},c.createElement("h2",null,"Itens adicionados:",c.createElement("strong",null," ",o.length," "),"Tempo total:",c.createElement("strong",null," ",M>0&&`${M} min e `," ",S," ","segs")),c.createElement("button",{className:"bg-zap-yellow text-white py-2 px-6 rounded text-md font-bold",onClick:()=>{D()}},"Duplicar Funil"),c.createElement("button",{type:"button",className:"btnAddItem",onClick:E},"+ Adicionar Item")),c.createElement(dl,{onDragEnd:F},c.createElement(va,{droppableId:"funnelItemsDroppable"},A=>c.createElement("div",{id:"funnelWrapper",...A.droppableProps,ref:A.innerRef},o.map((T,B)=>c.createElement(hl,{key:T.indexId,draggableId:T.indexId,index:B},N=>c.createElement("div",{className:"itemDraggableFunnelListContainer",ref:N.innerRef,...N.draggableProps,...N.dragHandleProps,style:N.draggableProps.style},c.createElement(cg,{item:T,showAndHideItem:()=>x(T.indexId),deleteItemFromFunnel:()=>y({indexId:T.indexId,id:T.id}),openEditModal:()=>C({indexId:T.indexId,id:T.id,delay:T.delay})})))),A.placeholder)))):c.createElement("div",{id:"noItemYet"},c.createElement("span",null,"Voc\xEA ainda n\xE3o possui nenhum item adicionado neste funil. Caso queira adicionar um item, clique no bot\xE3o abaixo"),c.createElement("button",{type:"button",className:"btnAddItem",onClick:E},"+ Adicionar Primeiro Item")))}function Ch(){const{selectedFunnel:e}=de();return c.createElement(c.Fragment,null,c.createElement(wt,{fill:z("funis"),itemType:"funis"}),!e&&c.createElement(It,null,c.createElement(og,null)),!!e&&c.createElement(ag,null,c.createElement(Eh,null)))}const Dh="/assets/imgLogin.png",Sh=Wi`
  from {
    border-color: var(--blue);
  }

  to {
    border-color: var(--purple);
  }
`,wh=le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  #containerSwitchDarkMode {
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
  }
  #loginFrame {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    height: 90%;
    max-width: 1200px;
    max-height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--shape);
    @media (max-width: 600px) {
      max-height: 100%;
    }
    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 2rem;
      h2 {
        font-size: 2rem;
        font-weight: 900;
        margin: 2.5rem 0;
        color: var(--text-title);
      }
      span {
        font-size: 1rem;
        color: var(--text-subtitle);

        margin: 0.5rem 0;
      }

      label#labelChave {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
        border: 0;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        position: relative;
        input {
          width: 100%;
          height: 3rem;
          font-size: 1rem;
          font-weight: 500;
          margin: 0.5rem 0;
          padding: 0 1.5rem;
          border: 0;
          border-radius: 0.25rem;
          border: 1px solid var(--text-subtitle);
          color: var(--text-subtitle);
          background: var(--shape);

          animation: ${Sh} 1s alternate infinite;
          &:focus {
            border-color: var(--purple);
            outline: 1px solid var(--purple);
            & + span {
              top: -1rem;
              background: var(--shape);
              font-size: 95%;
            }
          }
          &:valid {
            border-color: var(--purple);
            outline: 1px solid var(--purple);
            & + span {
              top: -1rem;
              background: var(--shape);
              font-size: 95%;
            }
          }
        }
        span {
          position: absolute;
          top: 0.5rem;
          left: 1.5rem;
          font-size: 1rem;
          transition: 0.3s;
          padding: 0 0.5rem;
        }
      }
      button {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
        border: 0;
        border-radius: 0.25rem;

        &#entrarBtn {
          background: var(--triple-gradient);
          background-size: 250%;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          transition: background-position-x 1s;
          &:hover {
            background-position-x: 100%;
          }
        }
        &#freeUserBtn {
          background: transparent;
          border: 1px solid var(--blue);
          color: var(--blue);
        }
      }

      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-body);
        text-align: center;
        align-self: center;
      }
    }
    aside {
      width: 100%;
      height: 100%;
      background: url(${Dh});
      background-size: cover;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`,Ih="/assets/logo-login.png";function Zl(){return c.createElement("div",{style:{marginTop:"0.5rem",width:"100%",textAlign:"center",color:"var(--text-subtitle)"}},"Copyright \xA9 2022 YVFL EMPREENDIMENTOS - Todos os direitos reservados")}function Ah(){const{isDarkTheme:e,setIsDarkTheme:t}=Fe(),{isPremium:r,loginWithKey:a}=Ji(),[n,i]=v.exports.useState(""),o=Is();v.exports.useEffect(()=>{r&&o("/dashboard")});async function l(){if(!n){Q.error("Esse teste é oferecimento Garcia que foi enviada para o seu email");return}const{premium:s,data:u}=await Q.promise(a(n),{pending:"Conectando ao servidor, aguarde...",error:"Algo deu errado ao tentar se conectar ao servidor!"});s?(Ke({chave:n}),o("/dashboard"),Q.success(String(`Seja bem vindo(a) ${u}`))):Q.error(String(u))}return c.createElement(wh,null,c.createElement("div",{id:"containerSwitchDarkMode"},c.createElement("span",null," MODO ",e?"DARK":"LIGHT"),c.createElement(zn,{id:"switchDarkMode",checked:e,onClick:()=>t(!e)})),c.createElement("form",{id:"loginFrame",onSubmit:s=>{s.preventDefault(),l()}},c.createElement("main",null,c.createElement("img",{src:Ih,alt:"ZapVoice"}),c.createElement("h2",null,"Seja bem vindo(a)",c.createElement("br",null)," ao ZapVoice"),c.createElement("span",null,"Insira a sua chave  de ativa\xE7\xE3o \u{1F511} ",c.createElement("br",null),"que voc\xEA recebeu por email (verifique o spam)"),c.createElement("label",{id:"labelChave",htmlFor:"chave"},c.createElement("input",{type:"text",id:"chave",required:!0,value:n,onChange:s=>i(s.target.value)}),c.createElement("span",null,"Sua chave e ativa\xE7\xE3o")),c.createElement("button",{id:"entrarBtn",type:"submit"},"Entrar"),c.createElement("button",{id:"freeUserBtn",type:"button",onClick:()=>{o("/dashboard")}},"Sou um usu\xE1rio gr\xE1tis"),c.createElement("h3",null,"* Os \xE1udios s\xE3o limitados a 60 segundos para usu\xE1rios gr\xE1tis")),c.createElement("aside",null)),c.createElement(Zl,null))}const Oh="/assets/homePageMedias.svg";function Fh(){return c.createElement(c.Fragment,null,c.createElement("img",{src:Oh,alt:"Central de M\xEDdias",className:"homeImg"}),c.createElement("span",null,"Selecione um arquivo para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar um novo arquivo para o ZapVoice"))}function Ph(){const{selectedItem:e}=de(),[t,r]=v.exports.useState(""),[a,n]=v.exports.useState(""),[i,o]=v.exports.useState(!1),{updateMediaData:l}=Wt();v.exports.useEffect(()=>{var u,d;r((u=e==null?void 0:e.data)!=null?u:""),n((d=e==null?void 0:e.caption)!=null?d:""),o(!1)},[e]);async function s(u){if(!u)return;const d=await ha(u);r(String(d))}return c.createElement(c.Fragment,null,c.createElement("div",{id:"mainContent",className:"flex gap-2 items-center justify-center relative"},c.createElement(Yr,{accept:"image/*,video/mp4",multiple:!1,onDrop:u=>{s(u[0])},onDragOver:()=>o(!0),onDragLeave:()=>o(!1),onDropRejected:u=>{o(!1),u[0].errors.find(d=>d.code==="file-invalid-type")?Q.error("Formato de m\xEDdia n\xE3o aceito"):u[0].errors.find(d=>d.code==="file-too-large")?Q.error("M\xEDdia maior que 16Mb (limite colocado pelo whatsapp web)"):Q.error(u[0].errors[0].message)},onDropAccepted:u=>{o(!1),Q.success("M\xEDdia carregada")},maxSize:16*1e3*1e3},({getRootProps:u,getInputProps:d})=>c.createElement("div",{...u(),style:{background:H(.9,z("medias")),border:`2px dashed ${z("medias")}`,...i&&{border:"2px dashed var(--blue)",background:`${H(.85,L.blue)}`,filter:"brightness(0.8)"}},className:"w-full h-full rounded-lg flex flex-col items-center justify-center"},c.createElement("input",{...d()}),t!==(e==null?void 0:e.data)?c.createElement(c.Fragment,null,c.createElement("img",{src:xa,alt:"Clique em Salvar",className:"w-12 h-12 my-4 mx-auto"}),c.createElement("h2",{className:"text-zap-green"},"Arquivo carregado com sucesso!"),c.createElement("span",null,'Clique abaixo em "Salvar" para finalizar.')):c.createElement(c.Fragment,null,c.createElement("img",{src:ba,alt:"Arraste seu arquivo ou clique aqui"}),c.createElement("p",{className:"font-bold text-sm"},"Clique aqui ou arraste o novo arquivo a ser salvo"),c.createElement("span",{className:"my-4 mx-auto font-medium"},"Formatos aceitos ",c.createElement("br",null),"Fotos: '.jpg' .'png' '.jpeg' '.svg' '.ico' .'webp' '.bmp'",c.createElement("br",null),"V\xEDdeos: '.m4v' '.mp4'")),t&&c.createElement("div",{id:"preview",className:"relative w-full h-full flex items-center justify-center pb-4"},c.createElement(jn,{base64:t})))),c.createElement("textarea",{className:"p-4 w-full h-full my-0 mx-auto outline-none border-0 rounded bg-[var(--background)] hover:ring-1 hover:ring-[var(--green)] hover:opacity-60 focus:ring-1 focus:ring-[var(--green)] focus:opacity-100",style:{border:0},id:"newCaptionPreview",placeholder:"(Opcional) Insira uma legenda para a m\xEDdia",value:a,onChange:u=>{n(u.target.value)}})),c.createElement(_r,{conditionToShow:t!==(e==null?void 0:e.data)||a!==(e==null?void 0:e.caption),actionSave:()=>{e&&l({id:e.id,data:t,caption:a})}}))}function Rh(){const{selectedItem:e}=de();return c.createElement(c.Fragment,null,c.createElement(wt,{fill:z("medias"),itemType:"medias"}),!e&&c.createElement(It,null,c.createElement(Fh,null)),!!e&&c.createElement(Jr,null,c.createElement(Ph,null)))}const Mh="/assets/homePageDocs.svg";function Th(){return c.createElement(c.Fragment,null,c.createElement("img",{src:Mh,alt:"Central de Documentos",className:"homeImg"}),c.createElement("span",null,"Selecione um arquivo para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar um novo documento para o ZapVoice"))}const Bh=le.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${H(.9,z("docs"))};

    border: 2px dashed ${z("docs")};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${H(.85,L.green)};
      filter: brightness(0.8);
    }
    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
    }
    h2 {
      color: ${z("docs")};
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }
    span {
      margin: 1rem auto;
      font-weight: 500;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
  }
  #preview {
    position: relative;
    height: 15rem;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;
      font-size: 1.25rem;

      .itemPreviewIcon {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;function Nh(){const{selectedItem:e}=de(),[t,r]=v.exports.useState(""),[a,n]=v.exports.useState(""),[i,o]=v.exports.useState(!1),{updateDocData:l}=qt();v.exports.useEffect(()=>{var u,d;r((u=e==null?void 0:e.data)!=null?u:""),n((d=e==null?void 0:e.fileName)!=null?d:""),o(!1)},[e]);async function s(u){if(!u)return;const d=await ha(u);r(String(d)),n(u.name)}return c.createElement(c.Fragment,null,c.createElement(Bh,{id:"mainContent"},c.createElement(Yr,{multiple:!1,onDrop:u=>{s(u[0])},onDragOver:()=>o(!0),onDragLeave:()=>o(!1),onDropRejected:u=>{o(!1),u[0].errors.find(d=>d.code==="file-invalid-type")?Q.error("Formato de documento n\xE3o aceito"):u[0].errors.find(d=>d.code==="file-too-large")?Q.error("Arquivo maior que 64Mb (limite colocado pelo whatsapp web)"):Q.error(u[0].errors[0].message)},onDropAccepted:u=>{o(!1),Q.success("Documento carregado")},maxSize:64*1e3*1e3},({getRootProps:u,getInputProps:d})=>c.createElement("div",{...u({className:`dropzone ${i?"isDragginOn":""}`})},c.createElement("input",{...d()}),t!==(e==null?void 0:e.data)?c.createElement(c.Fragment,null,c.createElement("img",{src:xa,alt:"Clique em Salvar"}),c.createElement("h2",null,"Arquivo carregado com sucesso!"),c.createElement("span",null,'Clique abaixo em "Salvar" para finalizar.')):c.createElement(c.Fragment,null,c.createElement("img",{src:ba,alt:"Arraste seu arquivo ou clique aqui"}),c.createElement("p",null,"Clique aqui ou arraste o novo documento a ser salvo")),t&&c.createElement("div",{id:"preview"},c.createElement("a",{download:a,href:t,onClick:p=>{p.stopPropagation()}},c.createElement(bs,{className:"itemPreviewIcon"}),a))))),c.createElement(_r,{conditionToShow:t!==(e==null?void 0:e.data),actionSave:()=>{e&&l({id:e.id,data:t,fileName:a})}}))}function kh(){const{selectedItem:e}=de();return c.createElement(c.Fragment,null,c.createElement(wt,{fill:z("docs"),itemType:"docs"}),!e&&c.createElement(It,null,c.createElement(Th,null)),!!e&&c.createElement(Jr,null,c.createElement(Nh,null)))}const Lh="/assets/homePageMessages.svg";function Vh(){return c.createElement(c.Fragment,null,c.createElement("img",{src:Lh,alt:"Central de Mensagens",className:"homeImg"}),c.createElement("span",null,"Selecione uma mensagem para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar uma nova mensagem para o ZapVoice"))}const $h=le.div`
  position: relative;
  display: flex;

  #msgPreview {
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: 0;
    border-radius: 0.25rem;
    background: var(--background);

    &:hover {
      border: 1px solid ${H(.5,z("mensagens"))};
      outline: 1px solid
        ${H(.5,z("mensagens"))};
    }
    &:focus {
      border: 1.2px solid ${z("mensagens")};
      outline: 1.2px solid ${z("mensagens")};
    }
  }
`;function Hh(){const[e,t]=v.exports.useState(""),{selectedItem:r}=de(),{updateMessageData:a}=zt();return v.exports.useEffect(()=>{var n;t((n=r==null?void 0:r.data)!=null?n:"")},[r]),c.createElement(c.Fragment,null,c.createElement($h,{id:"mainContent"},c.createElement("textarea",{id:"msgPreview",value:e,onChange:n=>{t(n.target.value)}})),c.createElement(_r,{conditionToShow:e!==(r==null?void 0:r.data)&&(!!e||!!(r!=null&&r.data)),actionSave:()=>{r&&a({id:r.id,data:e})}}))}function Gh(){const{selectedItem:e}=de();return c.createElement(c.Fragment,null,c.createElement(wt,{fill:z("mensagens"),itemType:"mensagens"}),!e&&c.createElement(It,null,c.createElement(Vh,null)),!!e&&c.createElement(Jr,null,c.createElement(Hh,null)))}const jh=le.header`
  height: 3.5rem;
  width: 100%;
  background: var(--header-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  @media (max-width: 1024px) {
    padding: 0 0.25rem;
  }

  img {
    height: 2.5rem;
    width: auto;
    filter: drop-shadow(0px 0px 15px #0000009a);
  }
  h1 {
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: 300;
  }
  #openCentralBackupBtn {
    background: ${H(.4,L.purple)};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
  }
  #logoutBtn {
    background: ${H(.4,L.red)};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    margin-left: 1rem;
  }
  #containerSwitchDarkMode {
    display: flex;
    align-items: center;
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    span {
      font-weight: 700;
      color: white;
    }
  }
`;function zh({handleOpenCentralBackupModal:e}){const{isDarkTheme:t,setIsDarkTheme:r}=Fe(),[a,n]=v.exports.useState(!1);function i(){n(!0)}function o(){n(!1)}return c.createElement(jh,null,c.createElement("img",{src:t?As:Os,alt:"ZapVoice"}),c.createElement("div",{id:"containerSwitchDarkMode"},c.createElement("span",null," MODO ",t?"DARK":"LIGHT"),c.createElement(zn,{id:"switchDarkMode",checked:t,onClick:()=>r(!t)})),c.createElement("div",null,c.createElement("button",{type:"button",id:"openCentralBackupBtn",onClick:e},"Central de Backups"),c.createElement("button",{type:"button",id:"logoutBtn",onClick:i},"Deslogar")),c.createElement(st,{details:{title:"Tem certeza que deseja deslogar?",description:"Sua chave ser\xE1 removida, mas seus itens e configura\xE7\xF5es permanecer\xE3o",okTitle:"Sim, tenho certeza",cancelTitle:"Cancelar",fillCancel:t?L.gray3:L.gray4,fillOk:L.red},onRequestOk:async()=>{xr("chave"),window.location.reload()},isOpen:a,onRequestClose:o}))}const Uh=le.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3.5rem 1fr 2rem;
`,Wh=le.div`
  padding: ${({isMobile:e})=>e?"1rem":"1rem 5rem"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.25rem;
    font-weight: 900;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  main#mainDashboardLayout {
    height: 100%;
    width: 100%;
    ${({isMobile:e})=>e?qe`
            display: flex;
            flex-direction: column;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          `:qe`
            display: grid;
            grid-template-columns: 11rem 1fr;
            grid-template-rows: 2rem 1fr;
            grid-template-areas:
              ". btn"
              "links content";
          `};

    #addNewItemBtn {
      grid-area: btn;
      width: ${({isMobile:e})=>e?"100%":"10rem"};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--triple-gradient);
      background-size: 250%;
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({isMobile:e})=>e?"none":"translateY(-1rem);"};
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 100%;
      }
    }
    #addNewFunnelBtn {
      grid-area: btn;
      width: ${({isMobile:e})=>e?"100%":"10rem"};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--yellow);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({isMobile:e})=>e?"none":"translateY(-1rem);"};
    }
    #addNewTriggerBtn {
      grid-area: btn;
      width: ${({isMobile:e})=>e?"100%":"10rem"};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--orange);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({isMobile:e})=>e?"none":"translateY(-1rem);"};
    }
    #linksSection {
      ${({isMobile:e})=>e?qe`
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            `:qe`
              grid-area: links;
            `};
      div#linksSectionContainer {
        ${({isMobile:e})=>e?qe`
                display: flex;
                align-items: center;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;
              `:qe`
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: space-evenly;
                height: 100%;
              `};

        a {
          flex: 1;
          text-decoration: none;
          display: inline-block;
          & + a {
            margin-top: ${({isMobile:e})=>e?"0":"0.5rem"};
            margin-left: ${({isMobile:e})=>e?"0.5rem":"0"};
          }
        }
      }
    }
    #panelContent {
      grid-area: content;
      background: var(--shape);
      display: flex;
      border-radius: 0.5rem;
      overflow: hidden;
      resize: both;
      ${({isMobile:e})=>e?qe`
              width: 100%;
              flex: 0.9;
            `:qe`
              margin-left: 1rem;
              height: 65vh;
              min-height: 65vh;
            `};
    }
  }
`,qh=le.div`
  border: none;
  width: 11.25rem;
  height: 100%;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.25rem;
  background: ${({isActive:e,fill:t})=>e&&!!t?H(.8,t):H(.7,L.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -10px ${({fill:e})=>e&&H(.1,e)};
  &:hover {
    filter: brightness(0.9);
    background: ${({fill:e})=>e&&H(.8,e)};
  }

  .imageContainer {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({isActive:e,fill:t})=>e&&!!t?H(.8,t):H(.7,L.gray4)};

    box-shadow: 0px 0px 10px -5px #0000005d;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    margin-right: 0.75rem;
    display: relative;
    .insideIcon {
      height: 1.5rem;
    }
  }
  span {
    color: var(--text-title);
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    text-shadow: 0px 0px 5px #0000005d;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({isActive:e,fill:t})=>e&&!!t?t:"var(--text-title)"};
  }
`;function mt({name:e,Icon:t,fill:r,isActive:a}){return c.createElement(qh,{fill:r,isActive:!!a},c.createElement("div",{className:"imageContainer"},c.createElement(t,{className:"insideIcon"})),c.createElement("span",null,e))}function Kh(e){const t=e+"CollectionProvider",[r,a]=Un(t),[n,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),o=f=>{const{scope:m,children:g}=f,h=c.useRef(null),b=c.useRef(new Map).current;return c.createElement(n,{scope:m,itemMap:b,collectionRef:h},g)},l=e+"CollectionSlot",s=c.forwardRef((f,m)=>{const{scope:g,children:h}=f,b=i(l,g),x=In(m,b.collectionRef);return c.createElement(Fa,{ref:x},h)}),u=e+"CollectionItemSlot",d="data-radix-collection-item";return[{Provider:o,Slot:s,ItemSlot:c.forwardRef((f,m)=>{const{scope:g,children:h,...b}=f,x=c.useRef(null),y=In(m,x),C=i(u,g);return c.useEffect(()=>(C.itemMap.set(x,{ref:x,...b}),()=>{C.itemMap.delete(x)})),c.createElement(Fa,{[d]:"",ref:y},h)})},function(f){const m=i(e+"CollectionConsumer",f);return c.useCallback(()=>{const g=m.collectionRef.current;if(!g)return[];const h=Array.from(g.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((b,x)=>h.indexOf(b.ref.current)-h.indexOf(x.ref.current))},[m.collectionRef,m.itemMap])},a]}const Yh={bubbles:!1,cancelable:!0},[Hn,Ql,_h]=Kh("RovingFocusGroup"),[Jh,es]=Un("RovingFocusGroup",[_h]),[Xh,Zh]=Jh("RovingFocusGroup"),Qh=v.exports.forwardRef((e,t)=>v.exports.createElement(Hn.Provider,{scope:e.__scopeRovingFocusGroup},v.exports.createElement(Hn.Slot,{scope:e.__scopeRovingFocusGroup},v.exports.createElement(eb,w({},e,{ref:t}))))),eb=v.exports.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,orientation:a,dir:n="ltr",loop:i=!1,currentTabStopId:o,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:s,onEntryFocus:u,...d}=e,p=v.exports.useRef(null),f=In(t,p),[m=null,g]=eo({prop:o,defaultProp:l,onChange:s}),[h,b]=v.exports.useState(!1),x=$s(u),y=Ql(r),C=v.exports.useRef(!1);return v.exports.useEffect(()=>{const E=p.current;if(E)return E.addEventListener("rovingFocusGroup.onEntryFocus",x),()=>E.removeEventListener("rovingFocusGroup.onEntryFocus",x)},[x]),v.exports.createElement(Xh,{scope:r,orientation:a,dir:n,loop:i,currentTabStopId:m,onItemFocus:v.exports.useCallback(E=>g(E),[g]),onItemShiftTab:v.exports.useCallback(()=>b(!0),[])},v.exports.createElement(Et.div,w({tabIndex:h?-1:0,"data-orientation":a},d,{ref:f,style:{outline:"none",...e.style},onMouseDown:Ye(e.onMouseDown,()=>{C.current=!0}),onFocus:Ye(e.onFocus,E=>{const I=!C.current;if(E.target===E.currentTarget&&I&&!h){const D=new Event("rovingFocusGroup.onEntryFocus",Yh);if(E.currentTarget.dispatchEvent(D),!D.defaultPrevented){const P=y().filter(F=>F.focusable);ts([P.find(F=>F.active),P.find(F=>F.id===m),...P].filter(Boolean).map(F=>F.ref.current))}}C.current=!1}),onBlur:Ye(e.onBlur,()=>b(!1))})))}),tb=v.exports.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,focusable:a=!0,active:n=!1,...i}=e,o=to(),l=Zh("RovingFocusGroupItem",r),s=l.currentTabStopId===o,u=Ql(r);return v.exports.createElement(Hn.ItemSlot,{scope:r,id:o,focusable:a,active:n},v.exports.createElement(Et.span,w({tabIndex:s?0:-1,"data-orientation":l.orientation},i,{ref:t,onMouseDown:Ye(e.onMouseDown,d=>{a?l.onItemFocus(o):d.preventDefault()}),onFocus:Ye(e.onFocus,()=>l.onItemFocus(o)),onKeyDown:Ye(e.onKeyDown,d=>{if(d.key==="Tab"&&d.shiftKey)return void l.onItemShiftTab();if(d.target!==d.currentTarget)return;const p=function(g,h,b){const x=function(y,C){return C!=="rtl"?y:y==="ArrowLeft"?"ArrowRight":y==="ArrowRight"?"ArrowLeft":y}(g.key,b);return h==="vertical"&&["ArrowLeft","ArrowRight"].includes(x)||h==="horizontal"&&["ArrowUp","ArrowDown"].includes(x)?void 0:rb[x]}(d,l.orientation,l.dir);if(p!==void 0){d.preventDefault();let g=u().filter(h=>h.focusable).map(h=>h.ref.current);if(p==="last")g.reverse();else if(p==="prev"||p==="next"){p==="prev"&&g.reverse();const h=g.indexOf(d.currentTarget);g=l.loop?(m=h+1,(f=g).map((b,x)=>f[(m+x)%f.length])):g.slice(h+1)}setTimeout(()=>ts(g))}var f,m})})))}),rb={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ts(e){const t=document.activeElement;for(const r of e)if(r===t||(r.focus(),document.activeElement!==t))return}const nb=Qh,ab=tb,[ib,Hb]=Un("Tabs",[es]),rs=es(),[ob,Ia]=ib("Tabs"),lb=v.exports.forwardRef((e,t)=>{const{__scopeTabs:r,value:a,onValueChange:n,defaultValue:i,orientation:o="horizontal",dir:l="ltr",activationMode:s="automatic",...u}=e,[d,p]=eo({prop:a,onChange:n,defaultProp:i});return v.exports.createElement(ob,{scope:r,baseId:to(),value:d,onValueChange:p,orientation:o,dir:l,activationMode:s},v.exports.createElement(Et.div,w({"data-orientation":o},u,{ref:t})))}),sb=v.exports.forwardRef((e,t)=>{const{__scopeTabs:r,loop:a=!0,...n}=e,i=Ia("TabsList",r),o=rs(r);return v.exports.createElement(nb,w({asChild:!0},o,{orientation:i.orientation,dir:i.dir,loop:a}),v.exports.createElement(Et.div,w({role:"tablist","aria-orientation":i.orientation,dir:i.dir},n,{ref:t})))}),ub=v.exports.forwardRef((e,t)=>{const{__scopeTabs:r,value:a,disabled:n=!1,...i}=e,o=Ia("TabsTrigger",r),l=rs(r),s=ns(o.baseId,a),u=as(o.baseId,a),d=a===o.value;return v.exports.createElement(ab,w({asChild:!0},l,{focusable:!n,active:d}),v.exports.createElement(Et.button,w({type:"button",role:"tab","aria-selected":d,"aria-controls":u,"data-state":d?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:s},i,{ref:t,onMouseDown:Ye(e.onMouseDown,p=>{n||p.button!==0||p.ctrlKey!==!1?p.preventDefault():o.onValueChange(a)}),onKeyDown:Ye(e.onKeyDown,p=>{[" ","Enter"].includes(p.key)&&o.onValueChange(a)}),onFocus:Ye(e.onFocus,()=>{const p=o.activationMode!=="manual";d||n||!p||o.onValueChange(a)})})))}),cb=v.exports.forwardRef((e,t)=>{const{__scopeTabs:r,value:a,children:n,...i}=e,o=Ia("TabsContent",r),l=ns(o.baseId,a),s=as(o.baseId,a),u=a===o.value;return v.exports.createElement(Et.div,w({"data-state":u?"active":"inactive","data-orientation":o.orientation,role:"tabpanel","aria-labelledby":l,hidden:!u,id:s,tabIndex:0},i,{ref:t}),u&&n)});function ns(e,t){return`${e}-trigger-${t}`}function as(e,t){return`${e}-content-${t}`}const db=lb,pb=sb,fb=ub,mb=cb,gb=le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .createNewBackupBtn {
    margin: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: 800;
    border-radius: 0.5rem;
    background: ${H(.3,L.veryperi)};
  }
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${H(.8,L.veryperi)};
    font-size: 1rem;
    border: 2px dashed ${L.veryperi};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${H(.85,L.green)};
      filter: brightness(0.8);
    }
  }
  h1 {
    margin-bottom: 1rem;
  }
`,vb=Lr(db,{display:"flex",flexDirection:"column",width:"100%",minHeight:"15rem"}),hb=Lr(pb,{flexShrink:0,display:"flex",borderBottom:`1px solid ${L.gray1}`}),Sn=Lr(fb,{all:"unset",backgroundColor:"var(--shape)",padding:"0 1rem",height:45,flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,lineHeight:1,color:"var(--text-title)",userSelect:"none","&:first-child":{borderTopLeftRadius:6},"&:last-child":{borderTopRightRadius:6},"&:hover":{color:L.veryperi},'&[data-state="active"]':{color:L.veryperi,boxShadow:"inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor"},"&:focus":{position:"relative",boxShadow:"0 0 0 2px black"}}),wn=Lr(mb,{flexGrow:1,padding:"1rem",position:"relative",textAlign:"center",backgroundColor:"var(--shape)",color:"var(--text-title)",borderBottomLeftRadius:6,borderBottomRightRadius:6,outline:"none","&:focus":{boxShadow:"0 0 0 2px black"},'&[data-state="active"]':{display:"grid",gridTemplateRows:"1.5rem 1fr"}});async function bb(e){return new Promise((t,r)=>{const a=new FileReader;a.onload=async function(n){var i;try{const o=((i=n==null?void 0:n.target)==null?void 0:i.result)&&String(n.target.result).length>0?JSON.parse(String(n.target.result)):[],l=o&&(o.mensagensIndex||o.mediasIndex||o.audiosIndex||o.docsIndex)&&typeof o.objectsList=="object"&&o.objectsList.length>0,s=o&&o.mensagens&&o.medias&&o.audios;if(l||s){const u=await we("chave");chrome!=null&&chrome.storage?chrome.storage.local.clear():localStorage.clear(),Ke({chave:u})}l?(Ke({mensagensIndex:o.mensagensIndex,mediasIndex:o.mediasIndex,audiosIndex:o.audiosIndex,docsIndex:o.docsIndex}),o.funis?Ke({funis:o.funis}):xr("funis"),o.triggers?Ke({triggers:o.triggers}):xr("triggers"),o.objectsList.forEach(u=>{Ke({[u.id]:u})}),await we("LocalStorageReady"),t(!0)):s&&(o.funis?Ke({funis:o.funis}):xr("funis"),delete o.funis,await Promise.all(Object.keys(o).map(u=>{const d=o[u]&&o[u].length>0?JSON.parse(o[u]):[];if(d.length===0)return;const p=d.map(f=>{var g,h,b,x;const m={name:(g=f.name)!=null?g:"Novo Item",id:(h=f.id)!=null?h:it(),type:(b=f.type)!=null?b:u,...u==="audios"&&{sendAsForwarded:(x=f.sendAsForwarded)!=null?x:!1}};return Ke({[m.id]:JSON.stringify({type:m.type,id:m.id,data:f.data,...m.sendAsForwarded&&{sendAsForwarded:m.sendAsForwarded}})}),m});Ke({[`${u}Index`]:JSON.stringify(p)})})),await we("LocalStorageReady"),t(!0))}catch(o){Q.error(String(o)),r(o)}},a.onerror=n=>r(n),a.readAsText(e)})}const xb="/assets/loadingVeryperi.svg";function Aa({embedId:e,loading:t,props:r,className:a}){return c.createElement("div",{className:Qe("h-[90%] w-[90%] mx-auto",a),style:{background:`url(${xb}) no-repeat center center`}},!t&&c.createElement("iframe",{className:"w-full h-full",src:`https://www.youtube.com/embed/${e}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube",...r}))}async function yb(){return new Promise(async(e,t)=>{var s,u,d,p,f,m;const r=(s=await we("audiosIndex"))!=null?s:[],a=(u=await we("mensagensIndex"))!=null?u:[],n=(d=await we("mediasIndex"))!=null?d:[],i=(p=await we("docsIndex"))!=null?p:[],o=(f=await we("funis"))!=null?f:[],l=(m=await we("triggers"))!=null?m:[];if(a&&a.length>0||n&&n.length>0||i&&i.length>0||r&&r.length>0){const g=[...await Promise.all(a.map(async C=>await we(C.id))),...await Promise.all(r.map(async C=>await we(C.id))),...await Promise.all(n.map(async C=>await we(C.id))),...await Promise.all(i.map(async C=>await we(C.id)))],h=new Date,b=document.createElement("a"),x=new Blob([JSON.stringify({mensagensIndex:a,audiosIndex:r,mediasIndex:n,docsIndex:i,funis:o,triggers:l,objectsList:g})],{type:"application/json"}),y=URL.createObjectURL(x);b.href=y,b.download=`backup ${String(h.toLocaleDateString("pt-BR").replaceAll("/","-"))}.json`,b.click(),window.URL.revokeObjectURL(y),e(!0)}else Q.error("N\xE3o h\xE1 nada aqui para exportar"),t(new Error("N\xE3o h\xE1 nada aqui para exportar"))})}function Eb({isOpen:e,onRequestClose:t}){const[r,a]=v.exports.useState(!1),[n,i]=v.exports.useState(!1),{isDarkTheme:o}=Fe();function l(){i(!0)}function s(){i(!1)}const u={details:{title:"Carregando...",okTitle:"Carregando...",cancelTitle:"Carregando...",fillCancel:o?L.gray3:L.gray4,fillOk:L.red},onRequestOk:async()=>{console.log("Default onRequestOk ModalCentralBackup")},isOpen:!1,onRequestClose:s},[d,p]=v.exports.useState(u);async function f(h){!h||(l(),p({...d,details:{...d.details,title:`Tem certeza que deseja importar as configura\xE7\xF5es do arquivo ${h.name}?`,description:"Fa\xE7a um Backup antes! Essa a\xE7\xE3o vai SUBSTITUIR TODAS as suas configura\xE7\xF5es atuais",okTitle:"Importar",cancelTitle:"Cancelar",fillOk:L.green},onRequestOk:async()=>{await Q.promise(bb(h),{pending:"Importando o backup, n\xE3o feche ou recarregue a p\xE1gina...",success:"Backup importado com sucesso!",error:"Erro ao importar o backup"}),s(),t(),setTimeout(()=>window.location.reload(),2500)}}))}const[m,g]=v.exports.useState("");return v.exports.useEffect(()=>{m||Wn("tutorial-backup").then(h=>g(h)).catch(h=>{g("4TwT_pUaBco"),console.log(h)})}),c.createElement(Gn,{closeTimeoutMS:400,isOpen:e,onRequestClose:()=>{t()},overlayClassName:"react-modal-overlay",className:"react-modal-content"},c.createElement("button",{type:"button",onClick:()=>{t()},className:"react-modal-close"},c.createElement(Ki,{fill:L.red})),c.createElement(gb,null,c.createElement(st,{...d,isOpen:n}),c.createElement("h1",null,"Central de Backups"),c.createElement(vb,{defaultValue:"create",orientation:"horizontal"},c.createElement(hb,{"aria-label":"Tr\xEAs abas dispon\xEDveis: Criar um backup, Importar um backup existente e Tutorial completo sobre os backups"},c.createElement(Sn,{className:"tabTrigger",value:"create"},"Criar novo backup"),c.createElement(Sn,{className:"tabTrigger",value:"import"},"Importar backup"),c.createElement(Sn,{className:"tabTrigger",value:"tutorial"},"Tutorial completo")),c.createElement(wn,{value:"create"},c.createElement("h2",null,"Clique no bot\xE3o para criar um novo backup"),c.createElement("button",{type:"button",className:"createNewBackupBtn",onClick:()=>{p({...d,details:{...d.details,title:"Deseja realmente exportar um backup agora?",okTitle:"Exportar",cancelTitle:"Cancelar",fillOk:L.green},onRequestOk:async()=>{await Q.promise(yb(),{pending:"Gerando seu backup, aguarde...",success:"Backup gerado com sucesso!",error:"Erro ao gerar o backup"}),s(),t()}}),l()}},"Gerar um backup agora")),c.createElement(wn,{value:"import"},c.createElement("h2",null,"Importar backup existente conteudo"),c.createElement(Yr,{accept:"application/JSON",multiple:!1,onDrop:h=>{f(h[0])},onDragOver:()=>a(!0),onDragLeave:()=>a(!1),onDropRejected:h=>{a(!1),h[0].errors.find(b=>b.code==="file-invalid-type")?(console.log(h),Q.error("Formato n\xE3o aceito")):Q.error(h[0].errors[0].message)},onDropAccepted:h=>{a(!1)}},({getRootProps:h,getInputProps:b})=>c.createElement("div",{...h({className:`dropzone ${r?"isDragginOn":""}`})},c.createElement("input",{...b()}),c.createElement("p",null,"Clique aqui ou arraste o backup a ser importado"),c.createElement("span",null,"Lembre-se que ao importar, todas as configura\xE7\xF5es anteriores ser\xE3o substituidas")))),c.createElement(wn,{value:"tutorial"},c.createElement("h2",null,"Assista o tutorial de como utilizar o backup"),c.createElement(Aa,{embedId:m,loading:!m})))))}function Cb(){const[e,t]=v.exports.useState(!1),{setSelectedItem:r,setSelectedFunnel:a,setSelectedTrigger:n}=de(),{createNewMessage:i}=zt(),{createNewAudio:o}=Ut(),{createNewMedia:l}=Wt(),{createNewDoc:s}=qt(),{createNewFunnel:u}=lt(),{createNewTrigger:d}=Kt(),p=Yi(),[f,m]=v.exports.useState("");v.exports.useEffect(()=>{var I;const y=(I=p==null?void 0:p.pathname)==null?void 0:I.match(/^\/dashboard\/(.*)$/);if(!y)return m("");const[C,E]=y;return m(E||"")},[p]);const g={mensagens:i,audios:o,medias:l,funis:u,docs:s,triggers:d};function h(){t(!1)}function b(){t(!0)}const{automaticTriggers:x}=Xi();return c.createElement(Uh,null,c.createElement(Eb,{isOpen:e,onRequestClose:h}),c.createElement(zh,{handleOpenCentralBackupModal:b}),c.createElement(Wh,{isMobile:window.innerWidth<1024},c.createElement("h1",null,"Bem vindo(a) ao seu Painel de Controle!"),c.createElement("h2",null,"O que voc\xEA deseja adicionar ou gerenciar?"),c.createElement("main",{id:"mainDashboardLayout"},f&&c.createElement("button",{id:f==="funis"?"addNewFunnelBtn":f==="triggers"?"addNewTriggerBtn":"addNewItemBtn",type:"button",onClick:()=>{g[f]()}},"+ Novo"," ",f==="funis"?"Funil":f==="triggers"?"Gatilho":"Item"),c.createElement("section",{id:"linksSection"},c.createElement("div",{id:"linksSectionContainer"},c.createElement(dt,{to:Me.mensagens,onClick:()=>{r(void 0),a(void 0),n(void 0)}},c.createElement(mt,{name:"Mensagens",Icon:$e("mensagens"),isActive:f==="mensagens",fill:z("mensagens")})),c.createElement(dt,{to:Me.audios,onClick:()=>{r(void 0),a(void 0),n(void 0)}},c.createElement(mt,{name:"\xC1udios",Icon:$e("audios"),isActive:f==="audios",fill:z("audios")})),c.createElement(dt,{to:Me.medias,onClick:()=>{r(void 0),a(void 0),n(void 0)}},c.createElement(mt,{name:"M\xEDdias",Icon:$e("medias"),isActive:f==="medias",fill:z("medias")})),c.createElement(dt,{to:Me.docs,onClick:()=>{r(void 0),a(void 0),n(void 0)}},c.createElement(mt,{name:"Documentos",Icon:$e("docs"),isActive:f==="docs",fill:z("docs")})),c.createElement(dt,{to:Me.funis,onClick:()=>{r(void 0),a(void 0),n(void 0)}},c.createElement(mt,{name:"Funis",Icon:$e("funis"),isActive:f==="funis",fill:z("funis")})),!!x&&c.createElement(dt,{to:Me.triggers,onClick:()=>{r(void 0),a(void 0),n(void 0)},className:"relative"},c.createElement(mt,{name:"Gatilhos",Icon:$e("triggers"),isActive:f==="triggers",fill:z("triggers")}),c.createElement("span",{className:"absolute top-0 right-0 bg-zap-veryperi font-bold px-2 rounded translate-x-2 translate-y-[-2px]"},"BETA")))),c.createElement("section",{id:"panelContent"},c.createElement(Fs,null)))),c.createElement(Zl,null))}const Db=le.div`
  text-align: center;
  padding: 1.5rem;
  margin: 0 auto;
  position: relative;
  h1 {
    margin-bottom: 1rem;
  }
`;function Sb(){const[e,t]=v.exports.useState("");return v.exports.useEffect(()=>{e||Wn("home-video").then(r=>t(r)).catch(r=>{t("4TwT_pUaBco"),console.log(r)})}),c.createElement(Db,null,c.createElement("h1",null,"Bem-vindo(a) ao novo ZapVoice, assista o v\xEDdeo abaixo para aprender a usa-lo"),c.createElement(Aa,{embedId:e,loading:!e}))}const wb=le.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  flex: 1;
  place-items: center;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        outline: 1px solid
          ${H(.2,z("triggers"))};
      }
      &:focus {
        outline: 1.5px solid ${z("triggers")};
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      display: grid;
      place-items: center;
      background: ${H(.7,L.red)};
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${L.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${H(.5,"black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;function Gi({children:e}){const{selectedTrigger:t,setSelectedTrigger:r}=de(),{updateTriggerName:a,deleteTrigger:n}=Kt(),[i,o]=v.exports.useState(""),{isDarkTheme:l}=Fe(),[s,u]=v.exports.useState(!1);v.exports.useEffect(()=>{var f;o((f=t==null?void 0:t.name)!=null?f:"Default Name")},[t,o]);function d(){u(!0)}function p(){u(!1)}return c.createElement(wb,null,c.createElement(st,{details:{title:`Tem certeza que deseja deletar o gatilho "${i}"?`,description:"Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o gatilho",okTitle:"Sim, tenho certeza",cancelTitle:"Cancelar",fillCancel:l?L.gray3:L.gray4,fillOk:L.red},onRequestOk:async()=>t&&n(t.id),isOpen:s,onRequestClose:p}),c.createElement("section",{id:"inputAndDelete"},c.createElement("input",{type:"text",value:i,className:t==null?void 0:t.type,onChange:f=>{o(f.target.value)},onBlur:()=>{!i&&(t==null?void 0:t.name)&&o(t.name),i&&t&&i!==(t==null?void 0:t.name)&&(r({...t,name:i}),a({triggerId:t.id,name:i}))}}),c.createElement("button",{type:"button",id:"deleteTriggerBtn",onClick:()=>{d()}},c.createElement(jt,{className:"trashIcon"}))),e)}function Ib(){const[e,t]=v.exports.useState("");return v.exports.useEffect(()=>{e||Wn("triggers-tutorial").then(r=>t(r)).catch(r=>{t("4TwT_pUaBco"),console.log(r)})}),c.createElement("div",{className:"w-full h-full flex flex-col items-center justify-center p-8"},c.createElement("span",{className:"text-2xl font-bold bg-zap-purple px-2 rounded"},"NOVIDADE!"),c.createElement("span",{className:"text-2xl font-bold"},"Tutorial completo dos gatilhos"),c.createElement(Aa,{embedId:e,loading:!e}))}function ji({className:e,...t}){const{isDarkTheme:r}=Fe();return c.createElement("input",{type:"text",className:Qe("outline-none ring-1 max-w-xs py-1 px-2 w-auto rounded-xl text-sm text-center font-bold hover:ring-zap-blue",{"bg-gray-400 ring-gray-700":r,"bg-gray-100 ring-gray-200":!r},e),...t})}function Ab({keywords:e,keywordRuleId:t,handleUpdateKeywordsOfAKeywordRule:r}){const{isDarkTheme:a}=Fe();function n(p){return p.map(f=>({keyword:f,id:it()}))}const[i,o]=v.exports.useState(n(e)),[l,s]=v.exports.useState(!1),[u,d]=v.exports.useState("");return v.exports.useEffect(()=>{o(n(e))},[e]),c.createElement("div",null,c.createElement("div",{className:"flex max-w-md flex-wrap gap-3"},i&&i.map(p=>c.createElement("div",{key:p.id,className:"flex items-center gap-3"},c.createElement("div",{className:"relative flex items-center"},c.createElement(ji,{type:"text",className:"pr-5",value:p.keyword,size:p.keyword.length,placeholder:"Adicionar texto",onBlur:()=>{r(t,i.reduce((f,m)=>(m.keyword&&f.push(m.keyword),f),[]))},onKeyDown:f=>{f.key==="Enter"&&f.currentTarget.blur()},onChange:f=>{const m=f.target.value;o(g=>g.map(h=>h.id===p.id?{...h,keyword:m}:h))}}),c.createElement("button",{className:Qe("absolute right-2 p-[2px] rounded-full",{"bg-gray-700":a,"bg-gray-200":!a}),onClick:()=>{if(i.length===1)return Q("Por favor, forne\xE7a pelo menos uma palavra-chave");r(t,[...i.reduce((f,m)=>(m.keyword&&m.id!==p.id&&f.push(m.keyword),f),[])])}},c.createElement(xs,null))),c.createElement("span",null,"ou"))),!l&&c.createElement("button",{type:"button",id:"addKeywordBtn",className:"outline-none max-w-xs text-left py-1 px-4 w-auto rounded-xl text-sm font-bold border-dashed border-[1px] hover:text-zap-blue",onClick:()=>{s(!0)}},"+ Palavra-chave"),l&&c.createElement(ji,{autoFocus:!0,type:"text",value:u,size:u.length,placeholder:"Adicionar texto",onChange:p=>{d(p.target.value)},onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur()},onBlur:p=>{const f=p.target.value;f&&r(t,[...i.reduce((m,g)=>(g.keyword&&m.push(g.keyword),m),[]),f]),d(""),s(!1)}})))}function Ob({children:e,className:t,...r}){return c.createElement("select",{...r,className:Qe("bg-transparent border-b border-gray-200 font-bold cursor-pointer text-lg outline-none",t)},e)}function hr({children:e,className:t,...r}){return c.createElement("option",{...r,className:Qe("bg-[var(--background)] font-semibold",t)},e)}const br={contains:"A mensagem cont\xE9m",equals:"A mensagem \xE9 igual a",not_contains:"A mensagem n\xE3o cont\xE9m",starts:"A mensagem come\xE7a com"};function Fb(){const{isDarkTheme:e}=Fe(),{selectedTrigger:t,getFunnelName:r}=de(),{funnelsIndex:a}=lt(),{updateTriggerKeyWordRules:n,updateTriggerFunnelId:i,updateTriggerSecondsBeforeSend:o,updateDontSendToContactTrigger:l}=Kt(),[s,u]=v.exports.useState(t==null?void 0:t.funnelId),[d,p]=v.exports.useState((t==null?void 0:t.secondsBeforeSend)||0),[f,m]=v.exports.useState(!!(t!=null&&t.dontSendToContact)),[g,h]=v.exports.useState(t==null?void 0:t.keywordRules.map(S=>({...S,id:it()}))),[b,x]=v.exports.useState(!1);function y(){x(S=>!S)}function C(){m(!!(t!=null&&t.dontSendToContact)),p((t==null?void 0:t.secondsBeforeSend)||0),u(t==null?void 0:t.funnelId),!(t!=null&&t.keywordRules)||(t==null?void 0:t.keywordRules.length)===0?h([{id:it(),type:"contains",keywords:[]}]):h(t==null?void 0:t.keywordRules.map(S=>({...S,id:it()})))}v.exports.useEffect(()=>{C()},[t]);const E=v.exports.useRef(null),I=(S,A)=>{h(T=>T==null?void 0:T.map(B=>B.id===S?{...B,keywords:A}:B))},D=(S,A)=>{h(T=>T==null?void 0:T.map(B=>B.id===S?{...B,type:A}:B))},P=()=>{h(S=>[...S||[],{id:it(),type:"contains",keywords:[]}])},F=S=>{h(A=>A==null?void 0:A.filter(T=>T.id!==S))},M=()=>{if(t){if(!g||g.filter(S=>S.keywords.length===0).length>0){Q.error("Voc\xEA n\xE3o pode salvar um gatilho com palavras-chaves vazias");return}n({triggerId:t.id,keywordRules:g||[]}),i({triggerId:t.id,funnelId:s}),o({triggerId:t.id,secondsBeforeSend:d}),l({triggerId:t.id,dontSendToContact:f})}};return c.createElement("div",{id:"mainContent",className:"w-full h-full flex flex-col items-left"},c.createElement("div",{className:"flex flex-col text-base items-start gap-2"},c.createElement(_e,{title:"Selecione o funil que ser\xE1 disparado quando o gatilho for ativado"},c.createElement("label",{htmlFor:"funnelSelect",className:"flex items-center"},c.createElement("span",null,"Funil a ser disparado:"),c.createElement("select",{id:"funnelSelect",value:s||"",onChange:S=>{S.target.value!==""?u(S.target.value):u(void 0)},className:"bg-transparent border-b border-zap-gold w-full font-bold cursor-pointer text-base outline-none"},c.createElement("option",{value:"",className:"bg-[var(--background)] font-semibold"},"N\xE3o atribuido"),a==null?void 0:a.map(S=>c.createElement("option",{key:S.id,value:S.id,className:"bg-[var(--background)] font-semibold"},S.name))))),c.createElement(_e,{title:"Este valor em segundos ser\xE1 utilizado como um tempo de espera antes de iniciar o funil, evitando que a a\xE7\xE3o pare\xE7a instant\xE2nea e automatizada."},c.createElement("label",{htmlFor:"secondsDelayInput"},c.createElement("span",null,"Atraso antes do envio:"),c.createElement("input",{id:"secondsDelayInput",type:"number",value:d,onChange:S=>{p(Number(S.target.value))},className:"bg-transparent border-b w-20 border-zap-gold font-bold cursor-pointer text-center outline-none"}),c.createElement("span",{className:"ml-2"},"(segundos)"," ",d>0&&c.createElement(c.Fragment,null,"= ",Math.floor(d/60),"min e"," ",Math.floor(d%60),"seg")))),c.createElement(_e,{title:f?"Clique para ativar o envio para contatos salvos":"Clique para desativar o envio para contatos salvos"},c.createElement("label",{htmlFor:"dontSendToContactSwitch",className:"cursor-pointer flex items-center gap-2"},c.createElement("span",null,"Evitar envio para contatos salvos"),c.createElement(Zi,{zvTheme:e?"dark":"light",sx:{m:1},checked:!!f,id:"dontSendToContactSwitch",onChange:()=>{m(S=>!S)}})))),c.createElement("div",{className:Qe("",{"contents w-full":!b,"grid place-items-center fixed top-0 left-0 w-full h-full p-10":!!b})},!!b&&c.createElement("div",{className:"absolute backdrop-blur-sm w-full h-full",onClick:()=>x(!1)}),c.createElement("div",{className:"relative flex flex-col h-full w-full overflow-y-auto pt-4 pb-10 px-8 rounded border bg-[var(--background)]"},c.createElement(_e,{title:b?"Fechar modo tela cheia":"Abrir modo tela cheia"},c.createElement("button",{onClick:y,type:"button",className:"w-8 h-8 absolute top-0 right-0 p-2"},b?c.createElement(Es,{className:"w-full h-full fill-white sticky top-0"}):c.createElement(ys,{className:"w-full h-full fill-white sticky top-0"}))),g&&g.length>0&&(g==null?void 0:g.map((S,A)=>c.createElement("div",{key:S.id},A>0&&c.createElement("div",{className:"my-4 relative opacity-75"},c.createElement("div",{className:"absolute top-[50%] left-0 w-full border-b border-gray-200"}),c.createElement("span",{className:"relative text-base ml-4 bg-[var(--shape)] px-4 border border-gray-200 rounded"},"e")),c.createElement("div",{className:"relative mb-4"},g.length>1&&c.createElement("button",{className:"absolute right-2 top-2 w-4 h-4",onClick:()=>F(S.id)},c.createElement(jt,{className:"fill-zap-red w-full h-full"})),c.createElement("div",{className:"flex items-center gap-2"},A===0&&c.createElement("span",{className:"self-start text-bold text-lg"},"Se "),c.createElement(Ob,{value:S.type,onChange:T=>D(S.id,T.target.value)},g.length===1&&c.createElement(hr,{value:"equals"},String(br.equals).toLowerCase()),c.createElement(hr,{value:"contains"},String(br.contains).toLowerCase()),c.createElement(hr,{value:"starts"},String(br.starts).toLowerCase()),c.createElement(hr,{value:"not_contains"},String(br.not_contains).toLowerCase()))),c.createElement("div",{className:"flex flex-col gap-2 mt-4"},c.createElement(Ab,{keywords:S.keywords,handleUpdateKeywordsOfAKeywordRule:I,keywordRuleId:S.id})))))),g&&!(g!=null&&g.find(S=>S.type==="equals"))&&g.length<5&&c.createElement(_e,{title:"Ao adicionar uma nova condi\xE7\xE3o, cada uma delas \xE9 tratada como um 'E', permitindo que voc\xEA crie gatilhos mais precisos e espec\xEDficos."},c.createElement("button",{className:"outline-none w-full p-2 mt-8 mx-auto rounded-xl text-lg font-bold border-dashed border-[1px] hover:text-zap-blue text-center",ref:E,onClick:()=>{P(),setTimeout(()=>{var S;(S=E.current)==null||S.scrollIntoView()})}},"+ Condi\xE7\xE3o da mensagem")))),g&&g.length>0&&c.createElement("div",{className:"flex items-center justify-evenly w-full py-2"},c.createElement("button",{className:"bg-zap-red  text-[var(--text-title)] font-bold text-lg py-1 px-4 rounded-xl",onClick:C},"Cancelar"),c.createElement("button",{className:"bg-zap-blue text-[var(--text-title)] font-bold text-lg py-1 px-4 rounded-xl",onClick:M},"Salvar")))}function Pb(){return c.createElement("div",{className:"w-full h-full flex flex-col px-10 gap-2 items-center justify-center "},c.createElement("p",{className:" text-base text-center"},"Os gatilhos s\xE3o uma funcionalidade poderosa, contudo est\xE3o dispon\xEDveis"),c.createElement("p",{className:" text-base text-center underline mb-4"},"Apenas para usu\xE1rios Premium"),c.createElement("a",{href:"https://zapvoice.com.br",target:"_blank",className:"bg-zap-veryperi font-bold text-lg px-4 py-2 rounded"},"Adquira sua licen\xE7a clicando aqui"))}function Rb(){const{selectedTrigger:e}=de(),{isPremium:t}=Ji();return c.createElement(c.Fragment,null,c.createElement(wt,{fill:z("triggers"),itemType:"triggers"}),!e&&c.createElement(It,null,c.createElement(Ib,null)),!!t&&!!e&&c.createElement(Gi,null,c.createElement(Fb,null)),!t&&!!e&&c.createElement(Gi,null,c.createElement(Pb,null)))}const Me={mensagens:"/dashboard/mensagens",audios:"/dashboard/audios",medias:"/dashboard/medias",docs:"/dashboard/docs",funis:"/dashboard/funis",triggers:"/dashboard/triggers"};function Mb(){const e=Ah,{automaticTriggers:t}=Xi();return c.createElement(Ps,null,c.createElement(We,{path:"/",element:c.createElement(e,null)}),c.createElement(We,{path:"/dashboard",element:c.createElement(Cb,null)},c.createElement(We,{index:!0,element:c.createElement(Sb,null)}),c.createElement(We,{path:Me.audios,element:c.createElement(rg,null)}),c.createElement(We,{path:Me.medias,element:c.createElement(Rh,null)}),c.createElement(We,{path:Me.docs,element:c.createElement(kh,null)}),c.createElement(We,{path:Me.mensagens,element:c.createElement(Gh,null)}),c.createElement(We,{path:Me.funis,element:c.createElement(Ch,null)}),!!t&&c.createElement(We,{path:Me.triggers,element:c.createElement(Rb,null)})))}function Tb(){const{isDarkTheme:e}=Fe();return c.createElement(Rs,null,c.createElement(Ms,null,c.createElement(ls,{theme:e?"dark":"light",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0,position:"top-center",autoClose:2e3}),c.createElement(Cs,null),c.createElement(Ds,{isDarkTheme:e}),c.createElement(eg,null),c.createElement(Mb,null)))}Gn.setAppElement("#root");Ss.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(Ts,null,c.createElement(Bs,null,c.createElement(Ns,null,c.createElement(Tb,null))))));
