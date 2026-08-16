(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ff={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function ay(){if(W0)return Go;W0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var Y0;function sy(){return Y0||(Y0=1,ff.exports=ay()),ff.exports}var S=sy(),hf={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function ry(){if(Z0)return dt;Z0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),g=Symbol.iterator;function E(M){return M===null||typeof M!="object"?null:(M=g&&M[g]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function x(M,z,J){this.props=M,this.context=z,this.refs=y,this.updater=J||w}x.prototype.isReactComponent={},x.prototype.setState=function(M,z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,z,"setState")},x.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function H(){}H.prototype=x.prototype;function k(M,z,J){this.props=M,this.context=z,this.refs=y,this.updater=J||w}var N=k.prototype=new H;N.constructor=k,D(N,x.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function O(M,z,J){var _e=J.ref;return{$$typeof:r,type:M,key:z,ref:_e!==void 0?_e:null,props:J}}function q(M,z){return O(M.type,z,M.props)}function L(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function V(M){var z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(J){return z[J]})}var fe=/\/+/g;function ie(M,z){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):z.toString(36)}function Y(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(U,U):(M.status="pending",M.then(function(z){M.status==="pending"&&(M.status="fulfilled",M.value=z)},function(z){M.status==="pending"&&(M.status="rejected",M.reason=z)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function B(M,z,J,_e,Se){var Q=typeof M;(Q==="undefined"||Q==="boolean")&&(M=null);var se=!1;if(M===null)se=!0;else switch(Q){case"bigint":case"string":case"number":se=!0;break;case"object":switch(M.$$typeof){case r:case e:se=!0;break;case v:return se=M._init,B(se(M._payload),z,J,_e,Se)}}if(se)return Se=Se(M),se=_e===""?"."+ie(M,0):_e,F(Se)?(J="",se!=null&&(J=se.replace(fe,"$&/")+"/"),B(Se,z,J,"",function(qe){return qe})):Se!=null&&(L(Se)&&(Se=q(Se,J+(Se.key==null||M&&M.key===Se.key?"":(""+Se.key).replace(fe,"$&/")+"/")+se)),z.push(Se)),1;se=0;var me=_e===""?".":_e+":";if(F(M))for(var Re=0;Re<M.length;Re++)_e=M[Re],Q=me+ie(_e,Re),se+=B(_e,z,J,Q,Se);else if(Re=E(M),typeof Re=="function")for(M=Re.call(M),Re=0;!(_e=M.next()).done;)_e=_e.value,Q=me+ie(_e,Re++),se+=B(_e,z,J,Q,Se);else if(Q==="object"){if(typeof M.then=="function")return B(Y(M),z,J,_e,Se);throw z=String(M),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return se}function X(M,z,J){if(M==null)return M;var _e=[],Se=0;return B(M,_e,"","",function(Q){return z.call(J,Q,Se++)}),_e}function ae(M){if(M._status===-1){var z=M._result;z=z(),z.then(function(J){(M._status===0||M._status===-1)&&(M._status=1,M._result=J)},function(J){(M._status===0||M._status===-1)&&(M._status=2,M._result=J)}),M._status===-1&&(M._status=0,M._result=z)}if(M._status===1)return M._result.default;throw M._result}var ge=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},G={map:X,forEach:function(M,z,J){X(M,function(){z.apply(this,arguments)},J)},count:function(M){var z=0;return X(M,function(){z++}),z},toArray:function(M){return X(M,function(z){return z})||[]},only:function(M){if(!L(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return dt.Activity=b,dt.Children=G,dt.Component=x,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=k,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,dt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return I.H.useMemoCache(M)}},dt.cache=function(M){return function(){return M.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(M,z,J){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var _e=D({},M.props),Se=M.key;if(z!=null)for(Q in z.key!==void 0&&(Se=""+z.key),z)!A.call(z,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&z.ref===void 0||(_e[Q]=z[Q]);var Q=arguments.length-2;if(Q===1)_e.children=J;else if(1<Q){for(var se=Array(Q),me=0;me<Q;me++)se[me]=arguments[me+2];_e.children=se}return O(M.type,Se,_e)},dt.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},dt.createElement=function(M,z,J){var _e,Se={},Q=null;if(z!=null)for(_e in z.key!==void 0&&(Q=""+z.key),z)A.call(z,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Se[_e]=z[_e]);var se=arguments.length-2;if(se===1)Se.children=J;else if(1<se){for(var me=Array(se),Re=0;Re<se;Re++)me[Re]=arguments[Re+2];Se.children=me}if(M&&M.defaultProps)for(_e in se=M.defaultProps,se)Se[_e]===void 0&&(Se[_e]=se[_e]);return O(M,Q,Se)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(M){return{$$typeof:p,render:M}},dt.isValidElement=L,dt.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:ae}},dt.memo=function(M,z){return{$$typeof:h,type:M,compare:z===void 0?null:z}},dt.startTransition=function(M){var z=I.T,J={};I.T=J;try{var _e=M(),Se=I.S;Se!==null&&Se(J,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(U,ge)}catch(Q){ge(Q)}finally{z!==null&&J.types!==null&&(z.types=J.types),I.T=z}},dt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},dt.use=function(M){return I.H.use(M)},dt.useActionState=function(M,z,J){return I.H.useActionState(M,z,J)},dt.useCallback=function(M,z){return I.H.useCallback(M,z)},dt.useContext=function(M){return I.H.useContext(M)},dt.useDebugValue=function(){},dt.useDeferredValue=function(M,z){return I.H.useDeferredValue(M,z)},dt.useEffect=function(M,z){return I.H.useEffect(M,z)},dt.useEffectEvent=function(M){return I.H.useEffectEvent(M)},dt.useId=function(){return I.H.useId()},dt.useImperativeHandle=function(M,z,J){return I.H.useImperativeHandle(M,z,J)},dt.useInsertionEffect=function(M,z){return I.H.useInsertionEffect(M,z)},dt.useLayoutEffect=function(M,z){return I.H.useLayoutEffect(M,z)},dt.useMemo=function(M,z){return I.H.useMemo(M,z)},dt.useOptimistic=function(M,z){return I.H.useOptimistic(M,z)},dt.useReducer=function(M,z,J){return I.H.useReducer(M,z,J)},dt.useRef=function(M){return I.H.useRef(M)},dt.useState=function(M){return I.H.useState(M)},dt.useSyncExternalStore=function(M,z,J){return I.H.useSyncExternalStore(M,z,J)},dt.useTransition=function(){return I.H.useTransition()},dt.version="19.2.8",dt}var K0;function Yh(){return K0||(K0=1,hf.exports=ry()),hf.exports}var nt=Yh(),pf={exports:{}},Ho={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function oy(){return Q0||(Q0=1,(function(r){function e(B,X){var ae=B.length;B.push(X);e:for(;0<ae;){var ge=ae-1>>>1,G=B[ge];if(0<l(G,X))B[ge]=X,B[ae]=G,ae=ge;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var X=B[0],ae=B.pop();if(ae!==X){B[0]=ae;e:for(var ge=0,G=B.length,M=G>>>1;ge<M;){var z=2*(ge+1)-1,J=B[z],_e=z+1,Se=B[_e];if(0>l(J,ae))_e<G&&0>l(Se,J)?(B[ge]=Se,B[_e]=ae,ge=_e):(B[ge]=J,B[z]=ae,ge=z);else if(_e<G&&0>l(Se,ae))B[ge]=Se,B[_e]=ae,ge=_e;else break e}}return X}function l(B,X){var ae=B.sortIndex-X.sortIndex;return ae!==0?ae:B.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],v=1,b=null,g=3,E=!1,w=!1,D=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var X=i(h);X!==null;){if(X.callback===null)s(h);else if(X.startTime<=B)s(h),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(h)}}function F(B){if(D=!1,N(B),!w)if(i(m)!==null)w=!0,U||(U=!0,V());else{var X=i(h);X!==null&&Y(F,X.startTime-B)}}var U=!1,I=-1,A=5,O=-1;function q(){return y?!0:!(r.unstable_now()-O<A)}function L(){if(y=!1,U){var B=r.unstable_now();O=B;var X=!0;try{e:{w=!1,D&&(D=!1,H(I),I=-1),E=!0;var ae=g;try{t:{for(N(B),b=i(m);b!==null&&!(b.expirationTime>B&&q());){var ge=b.callback;if(typeof ge=="function"){b.callback=null,g=b.priorityLevel;var G=ge(b.expirationTime<=B);if(B=r.unstable_now(),typeof G=="function"){b.callback=G,N(B),X=!0;break t}b===i(m)&&s(m),N(B)}else s(m);b=i(m)}if(b!==null)X=!0;else{var M=i(h);M!==null&&Y(F,M.startTime-B),X=!1}}break e}finally{b=null,g=ae,E=!1}X=void 0}}finally{X?V():U=!1}}}var V;if(typeof k=="function")V=function(){k(L)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ie=fe.port2;fe.port1.onmessage=L,V=function(){ie.postMessage(null)}}else V=function(){x(L,0)};function Y(B,X){I=x(function(){B(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ae=g;g=X;try{return B()}finally{g=ae}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=g;g=B;try{return X()}finally{g=ae}},r.unstable_scheduleCallback=function(B,X,ae){var ge=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ge+ae:ge):ae=ge,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,B={id:v++,callback:X,priorityLevel:B,startTime:ae,expirationTime:G,sortIndex:-1},ae>ge?(B.sortIndex=ae,e(h,B),i(m)===null&&B===i(h)&&(D?(H(I),I=-1):D=!0,Y(F,ae-ge))):(B.sortIndex=G,e(m,B),w||E||(w=!0,U||(U=!0,V()))),B},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(B){var X=g;return function(){var ae=g;g=X;try{return B.apply(this,arguments)}finally{g=ae}}}})(gf)),gf}var J0;function ly(){return J0||(J0=1,mf.exports=oy()),mf.exports}var xf={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function cy(){if($0)return Bn;$0=1;var r=Yh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:h,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},Bn.flushSync=function(m){var h=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=v,s.d.f()}},Bn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,b=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:b,integrity:g,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Bn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Bn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,b=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Bn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,h){return m(h)},Bn.useFormState=function(m,h,v){return f.H.useFormState(m,h,v)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var ex;function uy(){if(ex)return xf.exports;ex=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xf.exports=cy(),xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function dy(){if(tx)return Ho;tx=1;var r=ly(),e=Yh(),i=uy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=d;break}if(R===o){_=!0,o=u,a=d;break}R=R.sibling}if(!_){for(R=d.child;R;){if(R===a){_=!0,a=d,o=u;break}if(R===o){_=!0,o=d,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),k=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case k:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ie(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ie(t(n))}catch{}}return null}var Y=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ge=[],G=-1;function M(t){return{current:t}}function z(t){0>G||(t.current=ge[G],ge[G]=null,G--)}function J(t,n){G++,ge[G]=t.current,t.current=n}var _e=M(null),Se=M(null),Q=M(null),se=M(null);function me(t,n){switch(J(Q,n),J(Se,t),J(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?g0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=g0(n),t=x0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}z(_e),J(_e,t)}function Re(){z(_e),z(Se),z(Q)}function qe(t){t.memoizedState!==null&&J(se,t);var n=_e.current,a=x0(n,t.type);n!==a&&(J(Se,t),J(_e,a))}function Oe(t){Se.current===t&&(z(_e),z(Se)),se.current===t&&(z(se),Io._currentValue=ae)}var lt,Qe;function Xe(t){if(lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",Qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+t+Qe}var st=!1;function rt(t,n){if(!t||st)return"";st=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(xe){var pe=xe}Reflect.construct(t,[],we)}else{try{we.call()}catch(xe){pe=xe}t.call(we.prototype)}}else{try{throw Error()}catch(xe){pe=xe}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(xe){if(xe&&pe&&typeof xe.stack=="string")return[xe.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],R=d[1];if(_&&R){var j=_.split(`
`),le=R.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===le.length)for(o=j.length-1,u=le.length-1;1<=o&&0<=u&&j[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==le[u]){var Ee=`
`+j[o].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=o&&0<=u);break}}}finally{st=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xe(a):""}function vt(t,n){switch(t.tag){case 26:case 27:case 5:return Xe(t.type);case 16:return Xe("Lazy");case 13:return t.child!==n&&n!==null?Xe("Suspense Fallback"):Xe("Suspense");case 19:return Xe("SuspenseList");case 0:case 15:return rt(t.type,!1);case 11:return rt(t.type.render,!1);case 1:return rt(t.type,!0);case 31:return Xe("Activity");default:return""}}function Ct(t){try{var n="",a=null;do n+=vt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tt=Object.prototype.hasOwnProperty,Rt=r.unstable_scheduleCallback,Ot=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,$=r.unstable_requestPaint,Nt=r.unstable_now,_t=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,T=r.unstable_UserBlockingPriority,te=r.unstable_NormalPriority,ce=r.unstable_LowPriority,ve=r.unstable_IdlePriority,Ne=r.log,Pe=r.unstable_setDisableYieldValue,be=null,ye=null;function Ue(t){if(typeof Ne=="function"&&Pe(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(be,t)}catch{}}var He=Math.clz32?Math.clz32:$e,Fe=Math.log,Ie=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var et=256,ct=262144,K=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Te(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=De(o):(_&=R,_!==0?u=De(_):a||(a=R&~t,a!==0&&(u=De(a))))):(R=o&~d,R!==0?u=De(R):_!==0?u=De(_):a||(a=o&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ce(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=K;return K<<=1,(K&62914560)===0&&(K=4194304),t}function ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gt(t,n,a,o,u,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,le=t.hiddenUpdates;for(a=_&~a;0<a;){var Ee=31-He(a),we=1<<Ee;R[Ee]=0,j[Ee]=-1;var pe=le[Ee];if(pe!==null)for(le[Ee]=null,Ee=0;Ee<pe.length;Ee++){var xe=pe[Ee];xe!==null&&(xe.lane&=-536870913)}a&=~we}o!==0&&bt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~n))}function bt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Mn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-He(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function tn(t,n){var a=n&-n;return a=(a&42)!==0?1:ni(a),(a&(t.suspendedLanes|n))!==0?0:a}function ni(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qr(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:G0(t.type))}function Ys(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Fi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Fi,Nn="__reactProps$"+Fi,Wn="__reactContainer$"+Fi,ps="__reactEvents$"+Fi,al="__reactListeners$"+Fi,sl="__reactHandles$"+Fi,ms="__reactResources$"+Fi,Na="__reactMarker$"+Fi;function Da(t){delete t[mn],delete t[Nn],delete t[ps],delete t[al],delete t[sl]}function ea(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=E0(t);t!==null;){if(a=t[mn])return a;t=E0(t)}return n}t=a,a=t.parentNode}return null}function ta(t){if(t=t[mn]||t[Wn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ua(t){var n=t[ms];return n||(n=t[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Na]=!0}var rl=new Set,C={};function ee(t,n){he(t,n),he(t+"Capture",n)}function he(t,n){for(C[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),de={},ze={};function We(t){return Tt.call(ze,t)?!0:Tt.call(de,t)?!1:ue.test(t)?ze[t]=!0:(de[t]=!0,!1)}function Be(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Bt(t){if(!t._valueTracker){var n=ht(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ht(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function $t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function qt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function je(t,n,a,o,u,d,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?yt(t,_,it(n)):a!=null?yt(t,_,it(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+it(R):t.removeAttribute("name")}function Fn(t,n,a,o,u,d,_,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Bt(t);return}a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Bt(t)}function yt(t,n,a){n==="number"&&$t(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ii(t,n,a){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+it(a):""}function wi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Y(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=it(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Bt(t)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Xt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ci(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&on(t,d,n[d])}function kt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(t){return La.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function na(){}var lu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function mp(t){var n=ta(t);if(n&&(t=n.stateNode)){var a=t[Nn]||null;e:switch(t=n.stateNode,n.type){case"input":if(je(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Nn]||null;if(!u)throw Error(s(90));je(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&rn(o)}break e;case"textarea":ii(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Sn(t,!!a.multiple,n,!1)}}}var uu=!1;function gp(t,n,a){if(uu)return t(n,a);uu=!0;try{var o=t(n);return o}finally{if(uu=!1,(Zs!==null||Ks!==null)&&(Wl(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,mp(n),t)))for(n=0;n<t.length;n++)mp(t[n])}}function Jr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(ia)try{var $r={};Object.defineProperty($r,"passive",{get:function(){du=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{du=!1}var Pa=null,fu=null,ol=null;function xp(){if(ol)return ol;var t,n=fu,a=n.length,o,u="value"in Pa?Pa.value:Pa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[d-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function _p(){return!1}function Yn(t){function n(a,o,u,d,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?cl:_p,this.isPropagationStopped=_p,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Yn(_s),eo=b({},_s,{view:0,detail:0}),nv=Yn(eo),hu,pu,to,dl=b({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(hu=t.screenX-to.screenX,pu=t.screenY-to.screenY):pu=hu=0,to=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),vp=Yn(dl),iv=b({},dl,{dataTransfer:0}),av=Yn(iv),sv=b({},eo,{relatedTarget:0}),mu=Yn(sv),rv=b({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Yn(rv),lv=b({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Yn(lv),uv=b({},_s,{data:0}),bp=Yn(uv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hv[t])?!!n[t]:!1}function gu(){return pv}var mv=b({},eo,{key:function(t){if(t.key){var n=dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=Yn(mv),xv=b({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Yn(xv),_v=b({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),vv=Yn(_v),bv=b({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Yn(bv),Mv=b({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=Yn(Mv),Ev=b({},_s,{newState:0,oldState:0}),Tv=Yn(Ev),Av=[9,13,27,32],xu=ia&&"CompositionEvent"in window,no=null;ia&&"documentMode"in document&&(no=document.documentMode);var wv=ia&&"TextEvent"in window&&!no,Mp=ia&&(!xu||no&&8<no&&11>=no),Sp=" ",Ep=!1;function Tp(t,n){switch(t){case"keyup":return Av.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function Cv(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Ep=!0,Sp);case"textInput":return t=n.data,t===Sp&&Ep?null:t;default:return null}}function Rv(t,n){if(Qs)return t==="compositionend"||!xu&&Tp(t,n)?(t=xp(),ol=fu=Pa=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mp&&n.locale!=="ko"?null:n.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Nv[t.type]:n==="textarea"}function Cp(t,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var io=null,ao=null;function Dv(t){u0(t,0)}function fl(t){var n=gs(t);if(rn(n))return t}function Rp(t,n){if(t==="change")return n}var Np=!1;if(ia){var _u;if(ia){var vu="oninput"in document;if(!vu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),vu=typeof Dp.oninput=="function"}_u=vu}else _u=!1;Np=_u&&(!document.documentMode||9<document.documentMode)}function Up(){io&&(io.detachEvent("onpropertychange",Lp),ao=io=null)}function Lp(t){if(t.propertyName==="value"&&fl(ao)){var n=[];Cp(n,ao,t,cu(t)),gp(Dv,n)}}function Uv(t,n,a){t==="focusin"?(Up(),io=n,ao=a,io.attachEvent("onpropertychange",Lp)):t==="focusout"&&Up()}function Lv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(ao)}function Pv(t,n){if(t==="click")return fl(n)}function Ov(t,n){if(t==="input"||t==="change")return fl(n)}function Iv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:Iv;function so(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,n){var a=Pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Ip(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ip(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$t(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$t(t.document)}return n}function bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Fv=ia&&"documentMode"in document&&11>=document.documentMode,Js=null,yu=null,ro=null,Mu=!1;function Bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Js==null||Js!==$t(o)||(o=Js,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&so(ro,o)||(ro=o,o=ec(yu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Js)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $s={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Su={},zp={};ia&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function bs(t){if(Su[t])return Su[t];if(!$s[t])return t;var n=$s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Su[t]=n[a];return t}var Gp=bs("animationend"),Hp=bs("animationiteration"),kp=bs("animationstart"),Bv=bs("transitionrun"),zv=bs("transitionstart"),Gv=bs("transitioncancel"),Vp=bs("transitionend"),qp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ri(t,n){qp.set(t,n),ee(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],er=0,Tu=0;function pl(){for(var t=er,n=Tu=er=0;n<t;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var d=gi[n];if(gi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}d!==0&&Xp(a,u,d)}}function ml(t,n,a,o){gi[er++]=t,gi[er++]=n,gi[er++]=a,gi[er++]=o,Tu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return ml(t,n,a,o),gl(t)}function ys(t,n){return ml(t,null,null,n),gl(t)}function Xp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-He(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function gl(t){if(50<Ro)throw Ro=0,Od=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function Hv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new Hv(t,n,a,o)}function wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xl(t,n,a,o,u,d){var _=0;if(o=t,typeof t=="function")wu(t)&&(_=1);else if(typeof t=="string")_=jb(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ri(31,a,n,u),t.elementType=O,t.lanes=d,t;case D:return Ms(a.children,u,d,n);case y:_=8,u|=24;break;case x:return t=ri(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case F:return t=ri(13,a,n,u),t.elementType=F,t.lanes=d,t;case U:return t=ri(19,a,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:_=10;break e;case H:_=9;break e;case N:_=11;break e;case I:_=14;break e;case A:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ri(_,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ms(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function Cu(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function Wp(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Ru(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Yp=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=Yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ct(n)},Yp.set(t,n),n)}return{value:t,source:n,stack:Ct(n)}}var nr=[],ir=0,_l=null,oo=0,_i=[],vi=0,Oa=null,zi=1,Gi="";function sa(t,n){nr[ir++]=oo,nr[ir++]=_l,_l=t,oo=n}function Zp(t,n,a){_i[vi++]=zi,_i[vi++]=Gi,_i[vi++]=Oa,Oa=t;var o=zi;t=Gi;var u=32-He(o)-1;o&=~(1<<u),a+=1;var d=32-He(n)+u;if(30<d){var _=u-u%5;d=(o&(1<<_)-1).toString(32),o>>=_,u-=_,zi=1<<32-He(n)+u|a<<u|o,Gi=d+t}else zi=1<<d|a<<u|o,Gi=t}function Nu(t){t.return!==null&&(sa(t,1),Zp(t,1,0))}function Du(t){for(;t===_l;)_l=nr[--ir],nr[ir]=null,oo=nr[--ir],nr[ir]=null;for(;t===Oa;)Oa=_i[--vi],_i[vi]=null,Gi=_i[--vi],_i[vi]=null,zi=_i[--vi],_i[vi]=null}function Kp(t,n){_i[vi++]=zi,_i[vi++]=Gi,_i[vi++]=Oa,zi=n.id,Gi=n.overflow,Oa=t}var Dn=null,nn=null,Dt=!1,Ia=null,bi=!1,Uu=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(xi(n,t)),Uu}function Qp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Nn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)St(Do[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),wi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||p0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Fa(t,!0)}function Jp(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Dn=Dn.return}}function ar(t){if(t!==Dn)return!1;if(!Dt)return Jp(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kd(t.type,t.memoizedProps)),a=!a),a&&nn&&Fa(t),Jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=S0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=S0(t)}else n===27?(n=nn,Qa(t.type)?(t=tf,tf=null,nn=t):nn=n):nn=Dn?Mi(t.stateNode.nextSibling):null;return!0}function Ss(){nn=Dn=null,Dt=!1}function Lu(){var t=Ia;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Ia=null),t}function lo(t){Ia===null?Ia=[t]:Ia.push(t)}var Pu=M(null),Es=null,ra=null;function Ba(t,n,a){J(Pu,n._currentValue),n._currentValue=a}function oa(t){t._currentValue=Pu.current,z(Pu)}function Ou(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Iu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var _=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var j=0;j<n.length;j++)if(R.context===n[j]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Ou(d.return,a,t),o||(_=null);break e}d=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Ou(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function sr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;si(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&Iu(n,t,a,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Es=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return $p(Es,t)}function bl(t,n){return Es===null&&Ts(t),$p(t,n)}function $p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(t===null)throw Error(s(308));ra=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ra=ra.next=n;return a}var kv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Vv=r.unstable_scheduleCallback,qv=r.unstable_NormalPriority,xn={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new kv,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&Vv(qv,function(){t.controller.abort()})}var uo=null,Bu=0,rr=0,or=null;function Xv(t,n){if(uo===null){var a=uo=[];Bu=0,rr=Hd(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bu++,n.then(em,em),n}function em(){if(--Bu===0&&uo!==null){or!==null&&(or.status="fulfilled");var t=uo;uo=null,rr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function jv(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var tm=B.S;B.S=function(t,n){Bg=Nt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xv(t,n),tm!==null&&tm(t,n)};var As=M(null);function zu(){var t=As.current;return t!==null?t:en.pooledCache}function yl(t,n){n===null?J(As,As.current):J(As,n.pool)}function nm(){var t=zu();return t===null?null:{parent:xn._currentValue,pool:t}}var lr=Error(s(460)),Gu=Error(s(474)),Ml=Error(s(542)),Sl={then:function(){}};function im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function am(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t;default:if(typeof n.status=="string")n.then(na,na);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t}throw Cs=n,lr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,lr):a}}var Cs=null;function sm(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function rm(t){if(t===lr||t===Ml)throw Error(s(483))}var cr=null,fo=0;function El(t){var n=fo;return fo+=1,cr===null&&(cr=[]),am(cr,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function om(t){function n(ne,Z){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Z],ne.flags|=16):oe.push(Z)}}function a(ne,Z){if(!t)return null;for(;Z!==null;)n(ne,Z),Z=Z.sibling;return null}function o(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=aa(ne,Z),ne.index=0,ne.sibling=null,ne}function d(ne,Z,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Z?(ne.flags|=67108866,Z):oe):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function _(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function R(ne,Z,oe,Ae){return Z===null||Z.tag!==6?(Z=Cu(oe,ne.mode,Ae),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function j(ne,Z,oe,Ae){var at=oe.type;return at===D?Ee(ne,Z,oe.props.children,Ae,oe.key):Z!==null&&(Z.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&ws(at)===Z.type)?(Z=u(Z,oe.props),ho(Z,oe),Z.return=ne,Z):(Z=xl(oe.type,oe.key,oe.props,null,ne.mode,Ae),ho(Z,oe),Z.return=ne,Z)}function le(ne,Z,oe,Ae){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=Ru(oe,ne.mode,Ae),Z.return=ne,Z):(Z=u(Z,oe.children||[]),Z.return=ne,Z)}function Ee(ne,Z,oe,Ae,at){return Z===null||Z.tag!==7?(Z=Ms(oe,ne.mode,Ae,at),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function we(ne,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Cu(""+Z,ne.mode,oe),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return oe=xl(Z.type,Z.key,Z.props,null,ne.mode,oe),ho(oe,Z),oe.return=ne,oe;case w:return Z=Ru(Z,ne.mode,oe),Z.return=ne,Z;case A:return Z=ws(Z),we(ne,Z,oe)}if(Y(Z)||V(Z))return Z=Ms(Z,ne.mode,oe,null),Z.return=ne,Z;if(typeof Z.then=="function")return we(ne,El(Z),oe);if(Z.$$typeof===k)return we(ne,bl(ne,Z),oe);Tl(ne,Z)}return null}function pe(ne,Z,oe,Ae){var at=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return at!==null?null:R(ne,Z,""+oe,Ae);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:return oe.key===at?j(ne,Z,oe,Ae):null;case w:return oe.key===at?le(ne,Z,oe,Ae):null;case A:return oe=ws(oe),pe(ne,Z,oe,Ae)}if(Y(oe)||V(oe))return at!==null?null:Ee(ne,Z,oe,Ae,null);if(typeof oe.then=="function")return pe(ne,Z,El(oe),Ae);if(oe.$$typeof===k)return pe(ne,Z,bl(ne,oe),Ae);Tl(ne,oe)}return null}function xe(ne,Z,oe,Ae,at){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ne=ne.get(oe)||null,R(Z,ne,""+Ae,at);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case E:return ne=ne.get(Ae.key===null?oe:Ae.key)||null,j(Z,ne,Ae,at);case w:return ne=ne.get(Ae.key===null?oe:Ae.key)||null,le(Z,ne,Ae,at);case A:return Ae=ws(Ae),xe(ne,Z,oe,Ae,at)}if(Y(Ae)||V(Ae))return ne=ne.get(oe)||null,Ee(Z,ne,Ae,at,null);if(typeof Ae.then=="function")return xe(ne,Z,oe,El(Ae),at);if(Ae.$$typeof===k)return xe(ne,Z,oe,bl(Z,Ae),at);Tl(Z,Ae)}return null}function Ke(ne,Z,oe,Ae){for(var at=null,zt=null,Je=Z,mt=Z=0,wt=null;Je!==null&&mt<oe.length;mt++){Je.index>mt?(wt=Je,Je=null):wt=Je.sibling;var Gt=pe(ne,Je,oe[mt],Ae);if(Gt===null){Je===null&&(Je=wt);break}t&&Je&&Gt.alternate===null&&n(ne,Je),Z=d(Gt,Z,mt),zt===null?at=Gt:zt.sibling=Gt,zt=Gt,Je=wt}if(mt===oe.length)return a(ne,Je),Dt&&sa(ne,mt),at;if(Je===null){for(;mt<oe.length;mt++)Je=we(ne,oe[mt],Ae),Je!==null&&(Z=d(Je,Z,mt),zt===null?at=Je:zt.sibling=Je,zt=Je);return Dt&&sa(ne,mt),at}for(Je=o(Je);mt<oe.length;mt++)wt=xe(Je,ne,mt,oe[mt],Ae),wt!==null&&(t&&wt.alternate!==null&&Je.delete(wt.key===null?mt:wt.key),Z=d(wt,Z,mt),zt===null?at=wt:zt.sibling=wt,zt=wt);return t&&Je.forEach(function(ns){return n(ne,ns)}),Dt&&sa(ne,mt),at}function ot(ne,Z,oe,Ae){if(oe==null)throw Error(s(151));for(var at=null,zt=null,Je=Z,mt=Z=0,wt=null,Gt=oe.next();Je!==null&&!Gt.done;mt++,Gt=oe.next()){Je.index>mt?(wt=Je,Je=null):wt=Je.sibling;var ns=pe(ne,Je,Gt.value,Ae);if(ns===null){Je===null&&(Je=wt);break}t&&Je&&ns.alternate===null&&n(ne,Je),Z=d(ns,Z,mt),zt===null?at=ns:zt.sibling=ns,zt=ns,Je=wt}if(Gt.done)return a(ne,Je),Dt&&sa(ne,mt),at;if(Je===null){for(;!Gt.done;mt++,Gt=oe.next())Gt=we(ne,Gt.value,Ae),Gt!==null&&(Z=d(Gt,Z,mt),zt===null?at=Gt:zt.sibling=Gt,zt=Gt);return Dt&&sa(ne,mt),at}for(Je=o(Je);!Gt.done;mt++,Gt=oe.next())Gt=xe(Je,ne,mt,Gt.value,Ae),Gt!==null&&(t&&Gt.alternate!==null&&Je.delete(Gt.key===null?mt:Gt.key),Z=d(Gt,Z,mt),zt===null?at=Gt:zt.sibling=Gt,zt=Gt);return t&&Je.forEach(function(iy){return n(ne,iy)}),Dt&&sa(ne,mt),at}function Jt(ne,Z,oe,Ae){if(typeof oe=="object"&&oe!==null&&oe.type===D&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:e:{for(var at=oe.key;Z!==null;){if(Z.key===at){if(at=oe.type,at===D){if(Z.tag===7){a(ne,Z.sibling),Ae=u(Z,oe.props.children),Ae.return=ne,ne=Ae;break e}}else if(Z.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===A&&ws(at)===Z.type){a(ne,Z.sibling),Ae=u(Z,oe.props),ho(Ae,oe),Ae.return=ne,ne=Ae;break e}a(ne,Z);break}else n(ne,Z);Z=Z.sibling}oe.type===D?(Ae=Ms(oe.props.children,ne.mode,Ae,oe.key),Ae.return=ne,ne=Ae):(Ae=xl(oe.type,oe.key,oe.props,null,ne.mode,Ae),ho(Ae,oe),Ae.return=ne,ne=Ae)}return _(ne);case w:e:{for(at=oe.key;Z!==null;){if(Z.key===at)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){a(ne,Z.sibling),Ae=u(Z,oe.children||[]),Ae.return=ne,ne=Ae;break e}else{a(ne,Z);break}else n(ne,Z);Z=Z.sibling}Ae=Ru(oe,ne.mode,Ae),Ae.return=ne,ne=Ae}return _(ne);case A:return oe=ws(oe),Jt(ne,Z,oe,Ae)}if(Y(oe))return Ke(ne,Z,oe,Ae);if(V(oe)){if(at=V(oe),typeof at!="function")throw Error(s(150));return oe=at.call(oe),ot(ne,Z,oe,Ae)}if(typeof oe.then=="function")return Jt(ne,Z,El(oe),Ae);if(oe.$$typeof===k)return Jt(ne,Z,bl(ne,oe),Ae);Tl(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(a(ne,Z.sibling),Ae=u(Z,oe),Ae.return=ne,ne=Ae):(a(ne,Z),Ae=Cu(oe,ne.mode,Ae),Ae.return=ne,ne=Ae),_(ne)):a(ne,Z)}return function(ne,Z,oe,Ae){try{fo=0;var at=Jt(ne,Z,oe,Ae);return cr=null,at}catch(Je){if(Je===lr||Je===Ml)throw Je;var zt=ri(29,Je,null,ne.mode);return zt.lanes=Ae,zt.return=ne,zt}finally{}}}var Rs=om(!0),lm=om(!1),za=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(t),Xp(t,null,a),n}return ml(t,o,n,a),gl(t)}function po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Mn(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var qu=!1;function mo(){if(qu){var t=or;if(t!==null)throw t}}function go(t,n,a,o){qu=!1;var u=t.updateQueue;za=!1;var d=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var j=R,le=j.next;j.next=null,_===null?d=le:_.next=le,_=j;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,R=Ee.lastBaseUpdate,R!==_&&(R===null?Ee.firstBaseUpdate=le:R.next=le,Ee.lastBaseUpdate=j))}if(d!==null){var we=u.baseState;_=0,Ee=le=j=null,R=d;do{var pe=R.lane&-536870913,xe=pe!==R.lane;if(xe?(At&pe)===pe:(o&pe)===pe){pe!==0&&pe===rr&&(qu=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ke=t,ot=R;pe=n;var Jt=a;switch(ot.tag){case 1:if(Ke=ot.payload,typeof Ke=="function"){we=Ke.call(Jt,we,pe);break e}we=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ot.payload,pe=typeof Ke=="function"?Ke.call(Jt,we,pe):Ke,pe==null)break e;we=b({},we,pe);break e;case 2:za=!0}}pe=R.callback,pe!==null&&(t.flags|=64,xe&&(t.flags|=8192),xe=u.callbacks,xe===null?u.callbacks=[pe]:xe.push(pe))}else xe={lane:pe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Ee===null?(le=Ee=xe,j=we):Ee=Ee.next=xe,_|=pe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;xe=R,R=xe.next,xe.next=null,u.lastBaseUpdate=xe,u.shared.pending=null}}while(!0);Ee===null&&(j=we),u.baseState=j,u.firstBaseUpdate=le,u.lastBaseUpdate=Ee,d===null&&(u.shared.lanes=0),ja|=_,t.lanes=_,t.memoizedState=we}}function cm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function um(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cm(a[t],n)}var ur=M(null),Al=M(0);function dm(t,n){t=ga,J(Al,t),J(ur,n),ga=t|n.baseLanes}function Xu(){J(Al,ga),J(ur,ur.current)}function ju(){ga=Al.current,z(ur),z(Al)}var oi=M(null),yi=null;function ka(t){var n=t.alternate;J(hn,hn.current&1),J(oi,t),yi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(yi=t)}function Wu(t){J(hn,hn.current),J(oi,t),yi===null&&(yi=t)}function fm(t){t.tag===22?(J(hn,hn.current),J(oi,t),yi===null&&(yi=t)):Va()}function Va(){J(hn,hn.current),J(oi,oi.current)}function li(t){z(oi),yi===t&&(yi=null),z(hn)}var hn=M(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$d(a)||ef(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,pt=null,Kt=null,_n=null,Cl=!1,dr=!1,Ns=!1,Rl=0,xo=0,fr=null,Wv=0;function dn(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Zu(t,n,a,o,u,d){return la=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Zm:ud,Ns=!1,d=a(o,u),Ns=!1,dr&&(d=pm(n,a,o,u)),hm(t),d}function hm(t){B.H=bo;var n=Kt!==null&&Kt.next!==null;if(la=0,_n=Kt=pt=null,Cl=!1,xo=0,fr=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&vl(t)&&(vn=!0))}function pm(t,n,a,o){pt=t;var u=0;do{if(dr&&(fr=null),xo=0,dr=!1,25<=u)throw Error(s(301));if(u+=1,_n=Kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Km,d=n(a,o)}while(dr);return d}function Yv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(pt.flags|=1024),n}function Ku(){var t=Rl!==0;return Rl=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}la=0,_n=Kt=pt=null,dr=!1,xo=Rl=0,fr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?pt.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Kt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var n=_n===null?pt.memoizedState:_n.next;if(n!==null)_n=n,Kt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},_n===null?pt.memoizedState=_n=t:_n=_n.next=t}return _n}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=xo;return xo+=1,fr===null&&(fr=[]),t=am(fr,t,n),n=pt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Zm:ud),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===k)return Un(t)}throw Error(s(438,String(t)))}function $u(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function ca(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=pn();return ed(n,Kt,t)}function ed(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var _=u.next;u.next=d.next,d.next=_}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=_=null,j=null,le=n,Ee=!1;do{var we=le.lane&-536870913;if(we!==le.lane?(At&we)===we:(la&we)===we){var pe=le.revertLane;if(pe===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),we===rr&&(Ee=!0);else if((la&pe)===pe){le=le.next,pe===rr&&(Ee=!0);continue}else we={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},j===null?(R=j=we,_=d):j=j.next=we,pt.lanes|=pe,ja|=pe;we=le.action,Ns&&a(d,we),d=le.hasEagerState?le.eagerState:a(d,we)}else pe={lane:we,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},j===null?(R=j=pe,_=d):j=j.next=pe,pt.lanes|=we,ja|=we;le=le.next}while(le!==null&&le!==n);if(j===null?_=d:j.next=R,!si(d,t.memoizedState)&&(vn=!0,Ee&&(a=or,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=j,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function td(t){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do d=t(d,_.action),_=_.next;while(_!==u);si(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function mm(t,n,a){var o=pt,u=pn(),d=Dt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!si((Kt||u).memoizedState,a);if(_&&(u.memoizedState=a,vn=!0),u=u.queue,ad(_m.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},xm.bind(null,o,u,a,n),null),en===null)throw Error(s(349));d||(la&127)!==0||gm(o,n,a)}return a}function gm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Nl(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function xm(t,n,a,o){n.value=a,n.getSnapshot=o,vm(n)&&bm(t)}function _m(t,n,a){return a(function(){vm(n)&&bm(t)})}function vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function bm(t){var n=ys(t,2);n!==null&&$n(n,t,2)}function nd(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ns){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function ym(t,n,a,o){return t.baseState=a,ed(t,Kt,typeof o=="function"?o:ca)}function Zv(t,n,a,o,u){if(Ol(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Mm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Mm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=B.T,_={};B.T=_;try{var R=a(u,o),j=B.S;j!==null&&j(_,R),Sm(t,n,R)}catch(le){id(t,n,le)}finally{d!==null&&_.types!==null&&(d.types=_.types),B.T=d}}else try{d=a(u,o),Sm(t,n,d)}catch(le){id(t,n,le)}}function Sm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Em(t,n,o)},function(o){return id(t,n,o)}):Em(t,n,a)}function Em(t,n,a){n.status="fulfilled",n.value=a,Tm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mm(t,a)))}function id(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==o)}t.action=null}function Tm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Am(t,n){return n}function wm(t,n){if(Dt){var a=en.formState;if(a!==null){e:{var o=pt;if(Dt){if(nn){t:{for(var u=nn,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){nn=Mi(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=jm.bind(null,pt,o),o.dispatch=a,o=nd(!1),d=cd.bind(null,pt,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Zv.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Cm(t){var n=pn();return Rm(n,Kt,t)}function Rm(t,n,a){if(n=ed(t,n,Am)[0],t=Ul(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(_){throw _===lr?Ml:_}else o=n;n=pn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,hr(9,{destroy:void 0},Kv.bind(null,u,a),null)),[o,d,t]}function Kv(t,n){t.action=n}function Nm(t){var n=pn(),a=Kt;if(a!==null)return Rm(n,a,t);pn(),n=n.memoizedState,a=pn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Nl(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Dm(){return pn().memoizedState}function Ll(t,n,a,o){var u=kn();pt.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(t,n,a,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;Kt!==null&&o!==null&&Yu(o,Kt.memoizedState.deps)?u.memoizedState=hr(n,d,a,o):(pt.flags|=t,u.memoizedState=hr(1|n,d,a,o))}function Um(t,n){Ll(8390656,8,t,n)}function ad(t,n){Pl(2048,8,t,n)}function Qv(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Nl(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Lm(t){var n=pn().memoizedState;return Qv({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Pm(t,n){return Pl(4,2,t,n)}function Om(t,n){return Pl(4,4,t,n)}function Im(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fm(t,n,a){a=a!=null?a.concat([t]):null,Pl(4,4,Im.bind(null,n,t),a)}function sd(){}function Bm(t,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=t(),Ns){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o}function rd(t,n,a){return a===void 0||(la&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),pt.lanes|=t,ja|=t,a)}function Gm(t,n,a,o){return si(a,n)?a:ur.current!==null?(t=rd(t,a,o),si(t,n)||(vn=!0),t):(la&42)===0||(la&1073741824)!==0&&(At&261930)===0?(vn=!0,t.memoizedState=a):(t=Gg(),pt.lanes|=t,ja|=t,n)}function Hm(t,n,a,o,u){var d=X.p;X.p=d!==0&&8>d?d:8;var _=B.T,R={};B.T=R,cd(t,!1,n,a);try{var j=u(),le=B.S;if(le!==null&&le(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Ee=jv(j,o);vo(t,n,Ee,di(t))}else vo(t,n,o,di(t))}catch(we){vo(t,n,{then:function(){},status:"rejected",reason:we},di())}finally{X.p=d,_!==null&&R.types!==null&&(_.types=R.types),B.T=_}}function Jv(){}function od(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=km(t).queue;Hm(t,u,n,ae,a===null?Jv:function(){return Vm(t),a(o)})}function km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vm(t){var n=km(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},di())}function ld(){return Un(Io)}function qm(){return pn().memoizedState}function Xm(){return pn().memoizedState}function $v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=Ga(a);var o=Ha(n,t,a);o!==null&&($n(o,n,a),po(o,n,a)),n={cache:Fu()},t.payload=n;return}n=n.return}}function eb(t,n,a){var o=di();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?Wm(n,a):(a=Au(t,n,a,o),a!==null&&($n(a,t,o),Ym(a,n,o)))}function jm(t,n,a){var o=di();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))Wm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,R=d(_,a);if(u.hasEagerState=!0,u.eagerState=R,si(R,_))return ml(t,n,u,0),en===null&&pl(),!1}catch{}finally{}if(a=Au(t,n,u,o),a!==null)return $n(a,t,o),Ym(a,n,o),!0}return!1}function cd(t,n,a,o){if(o={lane:2,revertLane:Hd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(s(479))}else n=Au(t,a,o,2),n!==null&&$n(n,t,2)}function Ol(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Wm(t,n){dr=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ym(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Mn(t,a)}}var bo={readContext:Un,use:Dl,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};bo.useEffectEvent=dn;var Zm={readContext:Un,use:Dl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Im.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var o=t();if(Ns){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Ns){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=eb.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=nd(t);var n=t.queue,a=jm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sd,useDeferredValue:function(t,n){var a=kn();return rd(a,t,n)},useTransition:function(){var t=nd(!1);return t=Hm.bind(null,pt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=kn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(At&127)!==0||gm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Um(_m.bind(null,o,d,t),[t]),o.flags|=2048,hr(9,{destroy:void 0},xm.bind(null,o,d,a,n),null),a},useId:function(){var t=kn(),n=en.identifierPrefix;if(Dt){var a=Gi,o=zi;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ld,useFormState:wm,useActionState:wm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cd.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:$u,useCacheRefresh:function(){return kn().memoizedState=$v.bind(null,pt)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Ht&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ud={readContext:Un,use:Dl,useCallback:Bm,useContext:Un,useEffect:ad,useImperativeHandle:Fm,useInsertionEffect:Pm,useLayoutEffect:Om,useMemo:zm,useReducer:Ul,useRef:Dm,useState:function(){return Ul(ca)},useDebugValue:sd,useDeferredValue:function(t,n){var a=pn();return Gm(a,Kt.memoizedState,t,n)},useTransition:function(){var t=Ul(ca)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:mm,useId:qm,useHostTransitionStatus:ld,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=pn();return ym(a,Kt,t,n)},useMemoCache:$u,useCacheRefresh:Xm};ud.useEffectEvent=Lm;var Km={readContext:Un,use:Dl,useCallback:Bm,useContext:Un,useEffect:ad,useImperativeHandle:Fm,useInsertionEffect:Pm,useLayoutEffect:Om,useMemo:zm,useReducer:td,useRef:Dm,useState:function(){return td(ca)},useDebugValue:sd,useDeferredValue:function(t,n){var a=pn();return Kt===null?rd(a,t,n):Gm(a,Kt.memoizedState,t,n)},useTransition:function(){var t=td(ca)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:mm,useId:qm,useHostTransitionStatus:ld,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,n){var a=pn();return Kt!==null?ym(a,Kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Xm};Km.useEffectEvent=Lm;function dd(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fd={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=di(),u=Ga(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&($n(n,t,o),po(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=di(),u=Ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,o),n!==null&&($n(n,t,o),po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),o=Ga(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(t,o,a),n!==null&&($n(n,t,a),po(n,t,a))}};function Qm(t,n,a,o,u,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(u,d):!0}function Jm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&fd.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function $m(t){hl(t)}function eg(t){console.error(t)}function tg(t){hl(t)}function Il(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ng(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hd(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(t,n)},a}function ig(t){return t=Ga(t),t.tag=3,t}function ag(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){ng(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){ng(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function tb(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Yl():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bd(t,o,u)),!1;case 22:return a.flags|=65536,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bd(t,o,u)),!1}throw Error(s(435,a.tag))}return Bd(t,o,u),Yl(),!1}if(Dt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(t=Error(s(422),{cause:o}),lo(xi(t,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),lo(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,a),u=hd(t.stateNode,o,u),Vu(t,u),fn!==4&&(fn=2)),!1;var d=Error(s(520),{cause:o});if(d=xi(d,a),Co===null?Co=[d]:Co.push(d),fn!==4&&(fn=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hd(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wa===null||!Wa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ig(u),ag(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pd=Error(s(461)),vn=!1;function Ln(t,n,a,o){n.child=t===null?lm(n,null,a,o):Rs(n,t.child,a,o)}function sg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ts(n),o=Zu(t,n,a,_,d,u),R=Ku(),t!==null&&!vn?(Qu(t,n,u),ua(t,n,u)):(Dt&&R&&Nu(n),n.flags|=1,Ln(t,n,o,u),n.child)}function rg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!wu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,og(t,n,d,o,u)):(t=xl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Md(t,u)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(_,o)&&t.ref===n.ref)return ua(t,n,u)}return n.flags|=1,t=aa(d,o),t.ref=n.ref,t.return=n,n.child=t}function og(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(so(d,o)&&t.ref===n.ref)if(vn=!1,n.pendingProps=o=d,Md(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ua(t,n,u)}return md(t,n,a,o,u)}function lg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return cg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,d!==null?d.cachePool:null),d!==null?dm(n,d):Xu(),fm(n);else return o=n.lanes=536870912,cg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(yl(n,d.cachePool),dm(n,d),Va(),n.memoizedState=null):(t!==null&&yl(n,null),Xu(),Va());return Ln(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cg(t,n,a,o,u){var d=zu();return d=d===null?null:{parent:xn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&yl(n,null),Xu(),fm(n),t!==null&&sr(t,n,o,!0),n.childLanes=u,null}function Fl(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ug(t,n,a){return Rs(n,t.child,null,a),t=Fl(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function nb(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(o.mode==="hidden")return t=Fl(n,o),n.lanes=536870912,yo(null,t);if(Wu(n),(t=nn)?(t=M0(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:zi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,Dn=n,nn=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return Fl(n,o)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(Wu(n),u)if(n.flags&256)n.flags&=-257,n=ug(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||sr(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(o=en,o!==null&&(_=tn(o,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,ys(t,_),$n(o,t,_),pd;Yl(),n=ug(t,n,a)}else t=d.treeContext,nn=Mi(_.nextSibling),Dn=n,Dt=!0,Ia=null,bi=!1,t!==null&&Kp(n,t),n=Fl(n,o),n.flags|=4096;return n}return t=aa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function md(t,n,a,o,u){return Ts(n),a=Zu(t,n,a,o,void 0,u),o=Ku(),t!==null&&!vn?(Qu(t,n,u),ua(t,n,u)):(Dt&&o&&Nu(n),n.flags|=1,Ln(t,n,a,u),n.child)}function dg(t,n,a,o,u,d){return Ts(n),n.updateQueue=null,a=pm(n,o,a,u),hm(t),o=Ku(),t!==null&&!vn?(Qu(t,n,d),ua(t,n,d)):(Dt&&o&&Nu(n),n.flags|=1,Ln(t,n,a,d),n.child)}function fg(t,n,a,o,u){if(Ts(n),n.stateNode===null){var d=tr,_=a.contextType;typeof _=="object"&&_!==null&&(d=Un(_)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fd,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Hu(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?Un(_):tr,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(dd(n,a,_,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&fd.enqueueReplaceState(d,d.state,null),go(n,o,d,u),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,j=Ds(a,R);d.props=j;var le=d.context,Ee=a.contextType;_=tr,typeof Ee=="object"&&Ee!==null&&(_=Un(Ee));var we=a.getDerivedStateFromProps;Ee=typeof we=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||le!==_)&&Jm(n,d,o,_),za=!1;var pe=n.memoizedState;d.state=pe,go(n,o,d,u),mo(),le=n.memoizedState,R||pe!==le||za?(typeof we=="function"&&(dd(n,a,we,o),le=n.memoizedState),(j=za||Qm(n,a,j,o,pe,le,_))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=_,o=j):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ku(t,n),_=n.memoizedProps,Ee=Ds(a,_),d.props=Ee,we=n.pendingProps,pe=d.context,le=a.contextType,j=tr,typeof le=="object"&&le!==null&&(j=Un(le)),R=a.getDerivedStateFromProps,(le=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==we||pe!==j)&&Jm(n,d,o,j),za=!1,pe=n.memoizedState,d.state=pe,go(n,o,d,u),mo();var xe=n.memoizedState;_!==we||pe!==xe||za||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof R=="function"&&(dd(n,a,R,o),xe=n.memoizedState),(Ee=za||Qm(n,a,Ee,o,pe,xe,j)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,xe,j),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,xe,j)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=xe),d.props=o,d.state=xe,d.context=j,o=Ee):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Rs(n,t.child,null,u),n.child=Rs(n,null,a,u)):Ln(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ua(t,n,u),t}function hg(t,n,a,o){return Ss(),n.flags|=256,Ln(t,n,a,o),n.child}var gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xd(t){return{baseLanes:t,cachePool:nm()}}function _d(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function pg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(u?ka(n):Va(),(t=nn)?(t=M0(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:zi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,Dn=n,nn=null)):t=null,t===null)throw Fa(n);return ef(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Va(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=Ms(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=xd(a),o.childLanes=_d(t,_,a),n.memoizedState=gd,yo(null,o)):(ka(n),vd(n,R))}var j=t.memoizedState;if(j!==null&&(R=j.dehydrated,R!==null)){if(d)n.flags&256?(ka(n),n.flags&=-257,n=bd(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),R=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),R=Ms(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Rs(n,t.child,null,a),o=n.child,o.memoizedState=xd(a),o.childLanes=_d(t,_,a),n.memoizedState=gd,n=yo(null,o));else if(ka(n),ef(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var le=_.dgst;_=le,o=Error(s(419)),o.stack="",o.digest=_,lo({value:o,source:null,stack:null}),n=bd(t,n,a)}else if(vn||sr(t,n,a,!1),_=(a&t.childLanes)!==0,vn||_){if(_=en,_!==null&&(o=tn(_,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,ys(t,o),$n(_,t,o),pd;$d(R)||Yl(),n=bd(t,n,a)}else $d(R)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,nn=Mi(R.nextSibling),Dn=n,Dt=!0,Ia=null,bi=!1,t!==null&&Kp(n,t),n=vd(n,o.children),n.flags|=4096);return n}return u?(Va(),R=o.fallback,u=n.mode,j=t.child,le=j.sibling,o=aa(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,le!==null?R=aa(le,R):(R=Ms(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=xd(a):(u=R.cachePool,u!==null?(j=xn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=nm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=_d(t,_,a),n.memoizedState=gd,yo(t.child,o)):(ka(n),a=t.child,t=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vd(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function bd(t,n,a){return Rs(n,t.child,null,a),t=vd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function mg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ou(t.return,n,a)}function yd(t,n,a,o,u,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=d)}function gg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var _=hn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,J(hn,_),Ln(t,n,o,a),o=Dt?oo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mg(t,a,n);else if(t.tag===19)mg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&wl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yd(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&wl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}yd(n,!0,a,null,d,o);break;case"together":yd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=aa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=aa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Md(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function ib(t,n,a){switch(n.tag){case 3:me(n,n.stateNode.containerInfo),Ba(n,xn,t.memoizedState.cache),Ss();break;case 27:case 5:qe(n);break;case 4:me(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?pg(t,n,a):(ka(n),t=ua(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return gg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(hn,hn.current),o)break;return null;case 22:return n.lanes=0,lg(t,n,a,n.pendingProps);case 24:Ba(n,xn,t.memoizedState.cache)}return ua(t,n,a)}function xg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Md(t,a)&&(n.flags&128)===0)return vn=!1,ib(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Dt&&(n.flags&1048576)!==0&&Zp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")wu(t)?(o=Ds(t,o),n.tag=1,n=fg(null,n,t,o,a)):(n.tag=0,n=md(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=sg(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=rg(null,n,t,o,a);break e}}throw n=ie(t)||t,Error(s(306,n,""))}}return n;case 0:return md(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ds(o,n.pendingProps),fg(t,n,o,u,a);case 3:e:{if(me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ku(t,n),go(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ba(n,xn,o),o!==d.cache&&Iu(n,[xn],a,!0),mo(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=hg(t,n,o,a);break e}else if(o!==u){u=xi(Error(s(424)),n),lo(u),n=hg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=Mi(t.firstChild),Dn=n,Dt=!0,Ia=null,bi=!0,a=lm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ss(),o===u){n=ua(t,n,a);break e}Ln(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=C0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,o=tc(Q.current).createElement(a),o[mn]=n,o[Nn]=t,Pn(o,a,t),gn(o),n.stateNode=o):n.memoizedState=C0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&Dt&&(o=n.stateNode=T0(n.type,n.pendingProps,Q.current),Dn=n,bi=!0,u=nn,Qa(n.type)?(tf=u,nn=Mi(o.firstChild)):nn=u),Ln(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((u=o=nn)&&(o=Lb(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Dn=n,nn=Mi(o.firstChild),bi=!1,u=!0):u=!1),u||Fa(n)),qe(n),u=n.type,d=n.pendingProps,_=t!==null?t.memoizedProps:null,o=d.children,Kd(u,d)?o=null:_!==null&&Kd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(t,n,Yv,null,null,a),Io._currentValue=u),Bl(t,n),Ln(t,n,o,a),n.child;case 6:return t===null&&Dt&&((t=a=nn)&&(a=Pb(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Dn=n,nn=null,t=!0):t=!1),t||Fa(n)),null;case 13:return pg(t,n,a);case 4:return me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rs(n,null,o,a):Ln(t,n,o,a),n.child;case 11:return sg(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),Ln(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ts(n),u=Un(u),o=o(u),n.flags|=1,Ln(t,n,o,a),n.child;case 14:return rg(t,n,n.type,n.pendingProps,a);case 15:return og(t,n,n.type,n.pendingProps,a);case 19:return gg(t,n,a);case 31:return nb(t,n,a);case 22:return lg(t,n,a,n.pendingProps);case 24:return Ts(n),o=Un(xn),t===null?(u=zu(),u===null&&(u=en,d=Fu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Hu(n),Ba(n,xn,u)):((t.lanes&a)!==0&&(ku(t,n),go(n,null,null,a),mo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,xn,o)):(o=d.cache,Ba(n,xn,o),o!==u.cache&&Iu(n,[xn],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function Sd(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(qg())t.flags|=8192;else throw Cs=Sl,Gu}else t.flags&=-16777217}function _g(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!L0(n))if(qg())t.flags|=8192;else throw Cs=Sl,Gu}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,xr|=n)}function Mo(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ab(t,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(xn),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),an(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(da(n),d!==null?(an(n),_g(n,d)):(an(n),Sd(n,u,null,o,a))):d?d!==t.memoizedState?(da(n),an(n),_g(n,d)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(n),an(n),Sd(n,u,t,o,a)),null;case 27:if(Oe(n),a=Q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return an(n),null}t=_e.current,ar(n)?Qp(n):(t=T0(u,o,a),n.stateNode=t,da(n))}return an(n),null;case 5:if(Oe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(d=_e.current,ar(n))Qp(n);else{var _=tc(Q.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}d[mn]=n,d[Nn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=d;e:switch(Pn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&da(n)}}return an(n),Sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Q.current,ar(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||p0(t.nodeValue,a)),t||Fa(n,!0)}else t=tc(t).createTextNode(o),t[mn]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ar(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[mn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),an(n),null);case 4:return Re(),t===null&&Xd(n.stateNode.containerInfo),an(n),null;case 10:return oa(n.type),an(n),null;case 19:if(z(hn),o=n.memoizedState,o===null)return an(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Mo(o,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=wl(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)jp(a,t),a=a.sibling;return J(hn,hn.current&1|2),Dt&&sa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Nt()>Xl&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=wl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Dt)return an(n),null}else 2*Nt()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Nt(),t.sibling=null,a=hn.current,J(hn,u?a&1|2:a&1),Dt&&sa(n,o.treeForkCount),t):(an(n),null);case 22:case 23:return li(n),ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&z(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(xn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function sb(t,n){switch(Du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(xn),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return z(hn),null;case 4:return Re(),null;case 10:return oa(n.type),null;case 22:case 23:return li(n),ju(),t!==null&&z(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return oa(xn),null;case 25:return null;default:return null}}function vg(t,n){switch(Du(n),n.tag){case 3:oa(xn),Re();break;case 26:case 27:case 5:Oe(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:z(hn);break;case 10:oa(n.type);break;case 22:case 23:li(n),ju(),t!==null&&z(As);break;case 24:oa(xn)}}function So(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function qa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var j=a,le=R;try{le()}catch(Ee){Wt(u,j,Ee)}}}o=o.next}while(o!==d)}}catch(Ee){Wt(n,n.return,Ee)}}function bg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{um(n,a)}catch(o){Wt(t,t.return,o)}}}function yg(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function Eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Hi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function Mg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Ed(t,n,a){try{var o=t.stateNode;wb(o,t.type,a,n),o[Nn]=n}catch(u){Wt(t,t.return,u)}}function Sg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ad(t,n,a),t=t.sibling;t!==null;)Ad(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function Eg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,o,a),n[mn]=t,n[Nn]=a}catch(d){Wt(t,t.return,d)}}var fa=!1,bn=!1,wd=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function rb(t,n){if(t=t.containerInfo,Yd=lc,t=Fp(t),bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,R=-1,j=-1,le=0,Ee=0,we=t,pe=null;t:for(;;){for(var xe;we!==a||u!==0&&we.nodeType!==3||(R=_+u),we!==d||o!==0&&we.nodeType!==3||(j=_+o),we.nodeType===3&&(_+=we.nodeValue.length),(xe=we.firstChild)!==null;)pe=we,we=xe;for(;;){if(we===t)break t;if(pe===a&&++le===u&&(R=_),pe===d&&++Ee===o&&(j=_),(xe=we.nextSibling)!==null)break;we=pe,pe=we.parentNode}we=xe}a=R===-1||j===-1?null:{start:R,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zd={focusedElem:t,selectionRange:a},lc=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ke=Ds(a.type,u);t=o.getSnapshotBeforeUpdate(Ke,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Wt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function Ag(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(t,a),o&4&&So(5,a);break;case 1:if(pa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Wt(a,a.return,_)}else{var u=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Wt(a,a.return,_)}}o&64&&bg(a),o&512&&Eo(a,a.return);break;case 3:if(pa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{um(t,n)}catch(_){Wt(a,a.return,_)}}break;case 27:n===null&&o&4&&Eg(a);case 26:case 5:pa(t,a),n===null&&o&4&&Mg(a),o&512&&Eo(a,a.return);break;case 12:pa(t,a);break;case 31:pa(t,a),o&4&&Rg(t,a);break;case 13:pa(t,a),o&4&&Ng(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mb.bind(null,a),Ob(t,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||bn,u=fa;var d=bn;fa=o,(bn=n)&&!d?ma(t,a,(a.subtreeFlags&8772)!==0):pa(t,a),fa=u,bn=d}break;case 30:break;default:pa(t,a)}}function wg(t){var n=t.alternate;n!==null&&(t.alternate=null,wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Da(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Zn=!1;function ha(t,n,a){for(a=a.child;a!==null;)Cg(t,n,a),a=a.sibling}function Cg(t,n,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:bn||Hi(a,n),ha(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Hi(a,n);var o=ln,u=Zn;Qa(a.type)&&(ln=a.stateNode,Zn=!1),ha(t,n,a),Lo(a.stateNode),ln=o,Zn=u;break;case 5:bn||Hi(a,n);case 6:if(o=ln,u=Zn,ln=null,ha(t,n,a),ln=o,Zn=u,ln!==null)if(Zn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(d){Wt(a,n,d)}else try{ln.removeChild(a.stateNode)}catch(d){Wt(a,n,d)}break;case 18:ln!==null&&(Zn?(t=ln,b0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):b0(ln,a.stateNode));break;case 4:o=ln,u=Zn,ln=a.stateNode.containerInfo,Zn=!0,ha(t,n,a),ln=o,Zn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),bn||qa(4,a,n),ha(t,n,a);break;case 1:bn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&yg(a,n,o)),ha(t,n,a);break;case 21:ha(t,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,ha(t,n,a),bn=o;break;default:ha(t,n,a)}}function Rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(a){Wt(n,n.return,a)}}}function Ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Wt(n,n.return,a)}}function ob(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tg),n;default:throw Error(s(435,t.tag))}}function kl(t,n){var a=ob(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=gb.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){ln=R.stateNode,Zn=!1;break e}break;case 5:ln=R.stateNode,Zn=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,Zn=!0;break e}R=R.return}if(ln===null)throw Error(s(160));Cg(d,_,u),ln=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dg(n,t),n=n.sibling}var Ni=null;function Dg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(qa(3,t,t.return),So(3,t),qa(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(bn||a===null||Hi(a,a.return)),o&64&&fa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ni;if(Kn(n,t),Qn(t),o&512&&(bn||a===null||Hi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Na]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Pn(d,o,a),d[mn]=t,gn(d),o=d;break e;case"link":var _=D0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(d=_[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}d=u.createElement(o),Pn(d,o,a),u.head.appendChild(d);break;case"meta":if(_=D0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(d=_[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}d=u.createElement(o),Pn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[mn]=t,gn(d),o=d}t.stateNode=o}else U0(u,t.type,t.stateNode);else t.stateNode=N0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?U0(u,t.type,t.stateNode):N0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(bn||a===null||Hi(a,a.return)),a!==null&&o&4&&Ed(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(bn||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(Ke){Wt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ed(t,u,a!==null?a.memoizedProps:u)),o&1024&&(wd=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ke){Wt(t,t.return,Ke)}}break;case 3:if(ac=null,u=Ni,Ni=nc(n.containerInfo),Kn(n,t),Ni=u,Qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Ke){Wt(t,t.return,Ke)}wd&&(wd=!1,Ug(t));break;case 4:o=Ni,Ni=nc(t.stateNode.containerInfo),Kn(n,t),Qn(t),Ni=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=Nt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,le=fa,Ee=bn;if(fa=le||u,bn=Ee||j,Kn(n,t),bn=Ee,fa=le,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||fa||bn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(d=j.stateNode,u)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=j.stateNode;var we=j.memoizedProps.style,pe=we!=null&&we.hasOwnProperty("display")?we.display:null;R.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Ke){Wt(j,j.return,Ke)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Ke){Wt(j,j.return,Ke)}}}else if(n.tag===18){if(a===null){j=n;try{var xe=j.stateNode;u?y0(xe,!0):y0(j.stateNode,!1)}catch(Ke){Wt(j,j.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(t,a))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Sg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Td(t);Hl(t,d,u);break;case 5:var _=a.stateNode;a.flags&32&&(ai(_,""),a.flags&=-33);var R=Td(t);Hl(t,R,_);break;case 3:case 4:var j=a.stateNode.containerInfo,le=Td(t);Ad(t,le,j);break;default:throw Error(s(161))}}catch(Ee){Wt(t,t.return,Ee)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function pa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ag(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Us(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&yg(n,n.return,a),Us(n);break;case 27:Lo(n.stateNode);case 26:case 5:Hi(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:ma(u,d,a),So(4,d);break;case 1:if(ma(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Wt(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)cm(j[u],R)}catch(le){Wt(o,o.return,le)}}a&&_&64&&bg(d),Eo(d,d.return);break;case 27:Eg(d);case 26:case 5:ma(u,d,a),a&&o===null&&_&4&&Mg(d),Eo(d,d.return);break;case 12:ma(u,d,a);break;case 31:ma(u,d,a),a&&_&4&&Rg(u,d);break;case 13:ma(u,d,a),a&&_&4&&Ng(u,d);break;case 22:d.memoizedState===null&&ma(u,d,a),Eo(d,d.return);break;case 30:break;default:ma(u,d,a)}n=n.sibling}}function Cd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&co(a))}function Rd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lg(t,n,a,o),n=n.sibling}function Lg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),u&2048&&So(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(u&2048){Di(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,_=d.id,R=d.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Wt(n,n.return,j)}}else Di(t,n,a,o);break;case 31:Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,_=n.alternate,n.memoizedState!==null?d._visibility&2?Di(t,n,a,o):To(t,n):d._visibility&2?Di(t,n,a,o):(d._visibility|=2,pr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cd(_,n);break;case 24:Di(t,n,a,o),u&2048&&Rd(n.alternate,n);break;default:Di(t,n,a,o)}}function pr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,_=n,R=a,j=o,le=_.flags;switch(_.tag){case 0:case 11:case 15:pr(d,_,R,j,u),So(8,_);break;case 23:break;case 22:var Ee=_.stateNode;_.memoizedState!==null?Ee._visibility&2?pr(d,_,R,j,u):To(d,_):(Ee._visibility|=2,pr(d,_,R,j,u)),u&&le&2048&&Cd(_.alternate,_);break;case 24:pr(d,_,R,j,u),u&&le&2048&&Rd(_.alternate,_);break;default:pr(d,_,R,j,u)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&Cd(o.alternate,o);break;case 24:To(a,o),u&2048&&Rd(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var Ao=8192;function mr(t,n,a){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)Pg(t,n,a),t=t.sibling}function Pg(t,n,a){switch(t.tag){case 26:mr(t,n,a),t.flags&Ao&&t.memoizedState!==null&&Wb(a,Ni,t.memoizedState,t.memoizedProps);break;case 5:mr(t,n,a);break;case 3:case 4:var o=Ni;Ni=nc(t.stateNode.containerInfo),mr(t,n,a),Ni=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,mr(t,n,a),Ao=o):mr(t,n,a));break;default:mr(t,n,a)}}function Og(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,Fg(o,t)}Og(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):wo(t);break;default:wo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,Fg(o,t)}Og(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Fg(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Cn=o;else e:for(a=t;Cn!==null;){o=Cn;var u=o.sibling,d=o.return;if(wg(o),o===a){Cn=null;break e}if(u!==null){u.return=d,Cn=u;break e}Cn=d}}}var lb={getCacheForType:function(t){var n=Un(xn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(xn).controller.signal}},cb=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,Mt=null,At=0,jt=0,ci=null,Xa=!1,gr=!1,Nd=!1,ga=0,fn=0,ja=0,Ls=0,Dd=0,ui=0,xr=0,Co=null,Jn=null,Ud=!1,ql=0,Bg=0,Xl=1/0,jl=null,Wa=null,En=0,Ya=null,_r=null,xa=0,Ld=0,Pd=null,zg=null,Ro=0,Od=null;function di(){return(Ht&2)!==0&&At!==0?At&-At:B.T!==null?Hd():Qr()}function Gg(){if(ui===0)if((At&536870912)===0||Dt){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function $n(t,n,a){(t===en&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(vr(t,0),Za(t,At,ui,!1)),Ve(t,a),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(Ls|=a),fn===4&&Za(t,At,ui,!1)),ki(t))}function Hg(t,n,a){if((Ht&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?fb(t,n):Fd(t,n,!0),d=o;do{if(u===0){gr&&!o&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ub(a)){u=Fd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Co;var j=R.current.memoizedState.isDehydrated;if(j&&(vr(R,_).flags|=256),_=Fd(R,_,!1),_!==2){if(Nd&&!j){R.errorRecoveryDisabledLanes|=d,Ls|=d,u=4;break e}d=Jn,Jn=u,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}u=_}if(d=!1,u!==2)continue}}if(u===1){vr(t,0),Za(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,ui,!Xa);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-Nt(),10<u)){if(Za(o,n,ui,!Xa),Te(o,0,!0)!==0)break e;xa=n,o.timeoutHandle=_0(kg.bind(null,o,a,Jn,jl,Ud,n,ui,Ls,xr,Xa,d,"Throttled",-0,0),u);break e}kg(o,a,Jn,jl,Ud,n,ui,Ls,xr,Xa,d,null,-0,0)}}break}while(!0);ki(t)}function kg(t,n,a,o,u,d,_,R,j,le,Ee,we,pe,xe){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},Pg(n,d,we);var Ke=(d&62914560)===d?ql-Nt():(d&4194048)===d?Bg-Nt():0;if(Ke=Yb(we,Ke),Ke!==null){xa=d,t.cancelPendingCommit=Ke(Kg.bind(null,t,n,d,a,o,u,_,R,j,Ee,we,null,pe,xe)),Za(t,d,_,!le);return}}Kg(t,n,d,a,o,u,_,R,j)}function ub(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!si(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,o){n&=~Dd,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-He(u),_=1<<d;o[d]=-1,u&=~_}a!==0&&bt(t,a,n)}function Wl(){return(Ht&6)===0?(No(0),!1):!0}function Id(){if(Mt!==null){if(jt===0)var t=Mt.return;else t=Mt,ra=Es=null,Ju(t),cr=null,fo=0,t=Mt;for(;t!==null;)vg(t.alternate,t),t=t.return;Mt=null}}function vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Nb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xa=0,Id(),en=t,Mt=a=aa(t.current,null),At=n,jt=0,ci=null,Xa=!1,gr=Le(t,n),Nd=!1,xr=ui=Dd=Ls=ja=fn=0,Jn=Co=null,Ud=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-He(o),d=1<<u;n|=t[u],o&=~d}return ga=n,pl(),a}function Vg(t,n){pt=null,B.H=bo,n===lr||n===Ml?(n=sm(),jt=3):n===Gu?(n=sm(),jt=4):jt=n===pd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Mt===null&&(fn=1,Il(t,xi(n,t.current)))}function qg(){var t=oi.current;return t===null?!0:(At&4194048)===At?yi===null:(At&62914560)===At||(At&536870912)!==0?t===yi:!1}function Xg(){var t=B.H;return B.H=bo,t===null?bo:t}function jg(){var t=B.A;return B.A=lb,t}function Yl(){fn=4,Xa||(At&4194048)!==At&&oi.current!==null||(gr=!0),(ja&134217727)===0&&(Ls&134217727)===0||en===null||Za(en,At,ui,!1)}function Fd(t,n,a){var o=Ht;Ht|=2;var u=Xg(),d=jg();(en!==t||At!==n)&&(jl=null,vr(t,n)),n=!1;var _=fn;e:do try{if(jt!==0&&Mt!==null){var R=Mt,j=ci;switch(jt){case 8:Id(),_=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var le=jt;if(jt=0,ci=null,br(t,R,j,le),a&&gr){_=0;break e}break;default:le=jt,jt=0,ci=null,br(t,R,j,le)}}db(),_=fn;break}catch(Ee){Vg(t,Ee)}while(!0);return n&&t.shellSuspendCounter++,ra=Es=null,Ht=o,B.H=u,B.A=d,Mt===null&&(en=null,At=0,pl()),_}function db(){for(;Mt!==null;)Wg(Mt)}function fb(t,n){var a=Ht;Ht|=2;var o=Xg(),u=jg();en!==t||At!==n?(jl=null,Xl=Nt()+500,vr(t,n)):gr=Le(t,n);e:do try{if(jt!==0&&Mt!==null){n=Mt;var d=ci;t:switch(jt){case 1:jt=0,ci=null,br(t,n,d,1);break;case 2:case 9:if(im(d)){jt=0,ci=null,Yg(n);break}n=function(){jt!==2&&jt!==9||en!==t||(jt=7),ki(t)},d.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:im(d)?(jt=0,ci=null,Yg(n)):(jt=0,ci=null,br(t,n,d,7));break;case 5:var _=null;switch(Mt.tag){case 26:_=Mt.memoizedState;case 5:case 27:var R=Mt;if(_?L0(_):R.stateNode.complete){jt=0,ci=null;var j=R.sibling;if(j!==null)Mt=j;else{var le=R.return;le!==null?(Mt=le,Zl(le)):Mt=null}break t}}jt=0,ci=null,br(t,n,d,5);break;case 6:jt=0,ci=null,br(t,n,d,6);break;case 8:Id(),fn=6;break e;default:throw Error(s(462))}}hb();break}catch(Ee){Vg(t,Ee)}while(!0);return ra=Es=null,B.H=o,B.A=u,Ht=a,Mt!==null?0:(en=null,At=0,pl(),fn)}function hb(){for(;Mt!==null&&!Zt();)Wg(Mt)}function Wg(t){var n=xg(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?Zl(t):Mt=n}function Yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Ju(n);default:vg(a,n),n=Mt=jp(n,ga),n=xg(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?Zl(t):Mt=n}function br(t,n,a,o){ra=Es=null,Ju(n),cr=null,fo=0;var u=n.return;try{if(tb(t,u,n,a,At)){fn=1,Il(t,xi(a,t.current)),Mt=null;return}}catch(d){if(u!==null)throw Mt=u,d;fn=1,Il(t,xi(a,t.current)),Mt=null;return}n.flags&32768?(Dt||o===1?t=!0:gr||(At&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zg(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){Zg(n,Xa);return}t=n.return;var a=ab(n.alternate,n,ga);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);fn===0&&(fn=5)}function Zg(t,n){do{var a=sb(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);fn=6,Mt=null}function Kg(t,n,a,o,u,d,_,R,j){t.cancelPendingCommit=null;do Kl();while(En!==0);if((Ht&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Tu,gt(t,a,d,_,R,j),t===en&&(Mt=en=null,At=0),_r=n,Ya=t,xa=a,Ld=d,Pd=u,zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xb(te,function(){return t0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=X.p,X.p=2,_=Ht,Ht|=4;try{rb(t,n,a)}finally{Ht=_,X.p=u,B.T=o}}En=1,Qg(),Jg(),$g()}}function Qg(){if(En===1){En=0;var t=Ya,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=X.p;X.p=2;var u=Ht;Ht|=4;try{Dg(n,t);var d=Zd,_=Fp(t.containerInfo),R=d.focusedElem,j=d.selectionRange;if(_!==R&&R&&R.ownerDocument&&Ip(R.ownerDocument.documentElement,R)){if(j!==null&&bu(R)){var le=j.start,Ee=j.end;if(Ee===void 0&&(Ee=le),"selectionStart"in R)R.selectionStart=le,R.selectionEnd=Math.min(Ee,R.value.length);else{var we=R.ownerDocument||document,pe=we&&we.defaultView||window;if(pe.getSelection){var xe=pe.getSelection(),Ke=R.textContent.length,ot=Math.min(j.start,Ke),Jt=j.end===void 0?ot:Math.min(j.end,Ke);!xe.extend&&ot>Jt&&(_=Jt,Jt=ot,ot=_);var ne=Op(R,ot),Z=Op(R,Jt);if(ne&&Z&&(xe.rangeCount!==1||xe.anchorNode!==ne.node||xe.anchorOffset!==ne.offset||xe.focusNode!==Z.node||xe.focusOffset!==Z.offset)){var oe=we.createRange();oe.setStart(ne.node,ne.offset),xe.removeAllRanges(),ot>Jt?(xe.addRange(oe),xe.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),xe.addRange(oe))}}}}for(we=[],xe=R;xe=xe.parentNode;)xe.nodeType===1&&we.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<we.length;R++){var Ae=we[R];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}lc=!!Yd,Zd=Yd=null}finally{Ht=u,X.p=o,B.T=a}}t.current=n,En=2}}function Jg(){if(En===2){En=0;var t=Ya,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=X.p;X.p=2;var u=Ht;Ht|=4;try{Ag(t,n.alternate,n)}finally{Ht=u,X.p=o,B.T=a}}En=3}}function $g(){if(En===4||En===3){En=0,$();var t=Ya,n=_r,a=xa,o=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,_r=Ya=null,e0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Wa=null),jn(a),n=n.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=X.p,X.p=2,B.T=null;try{for(var d=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];d(R.value,{componentStack:R.stack})}}finally{B.T=n,X.p=u}}(xa&3)!==0&&Kl(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Od?Ro++:(Ro=0,Od=t):Ro=0,No(0)}}function e0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function Kl(){return Qg(),Jg(),$g(),t0()}function t0(){if(En!==5)return!1;var t=Ya,n=Ld;Ld=0;var a=jn(xa),o=B.T,u=X.p;try{X.p=32>a?32:a,B.T=null,a=Pd,Pd=null;var d=Ya,_=xa;if(En=0,_r=Ya=null,xa=0,(Ht&6)!==0)throw Error(s(331));var R=Ht;if(Ht|=4,Ig(d.current),Lg(d,d.current,_,a),Ht=R,No(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{X.p=u,B.T=o,e0(t,n)}}function n0(t,n,a){n=xi(a,n),n=hd(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(Ve(t,2),ki(t))}function Wt(t,n,a){if(t.tag===3)n0(t,t,a);else for(;n!==null;){if(n.tag===3){n0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){t=xi(a,t),a=ig(2),o=Ha(n,a,2),o!==null&&(ag(a,o,n,t),Ve(o,2),ki(o));break}}n=n.return}}function Bd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new cb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nd=!0,u.add(a),t=pb.bind(null,t,n,a),n.then(t,t))}function pb(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,en===t&&(At&a)===a&&(fn===4||fn===3&&(At&62914560)===At&&300>Nt()-ql?(Ht&2)===0&&vr(t,0):Dd|=a,xr===At&&(xr=0)),ki(t)}function i0(t,n){n===0&&(n=Me()),t=ys(t,n),t!==null&&(Ve(t,n),ki(t))}function mb(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),i0(t,a)}function gb(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),i0(t,a)}function xb(t,n){return Rt(t,n)}var Ql=null,yr=null,zd=!1,Jl=!1,Gd=!1,Ka=0;function ki(t){t!==yr&&t.next===null&&(yr===null?Ql=yr=t:yr=yr.next=t),Jl=!0,zd||(zd=!0,vb())}function No(t,n){if(!Gd&&Jl){Gd=!0;do for(var a=!1,o=Ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var _=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-He(42|t)+1)-1,d&=u&~(_&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,o0(o,d))}else d=At,d=Te(o,o===en?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Le(o,d)||(a=!0,o0(o,d));o=o.next}while(a);Gd=!1}}function _b(){a0()}function a0(){Jl=zd=!1;var t=0;Ka!==0&&Rb()&&(t=Ka);for(var n=Nt(),a=null,o=Ql;o!==null;){var u=o.next,d=s0(o,n);d===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(yr=a)):(a=o,(t!==0||(d&3)!==0)&&(Jl=!0)),o=u}En!==0&&En!==5||No(t),Ka!==0&&(Ka=0)}function s0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-He(d),R=1<<_,j=u[_];j===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Ce(R,n)):j<=n&&(t.expiredLanes|=R),d&=~R}if(n=en,a=At,a=Te(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),jn(a)){case 2:case 8:a=T;break;case 32:a=te;break;case 268435456:a=ve;break;default:a=te}return o=r0.bind(null,t),a=Rt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var o=At;return o=Te(t,t===en?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Hg(t,o,n),s0(t,Nt()),t.callbackNode!=null&&t.callbackNode===a?r0.bind(null,t):null)}function o0(t,n){if(Kl())return null;Hg(t,n,!0)}function vb(){Db(function(){(Ht&6)!==0?Rt(P,_b):a0()})}function Hd(){if(Ka===0){var t=rr;t===0&&(t=et,et<<=1,(et&261888)===0&&(et=256)),Ka=t}return Ka}function l0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xs(""+t)}function c0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bb(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=l0((u[Nn]||null).action),_=o.submitter;_&&(n=(n=_[Nn]||null)?l0(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var R=new ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var j=_?c0(u,_):new FormData(u);od(a,{pending:!0,data:j,method:u.method,action:d},null,j)}}else typeof d=="function"&&(R.preventDefault(),j=_?c0(u,_):new FormData(u),od(a,{pending:!0,data:j,method:u.method,action:d},d,j))},currentTarget:u}]})}}for(var kd=0;kd<Eu.length;kd++){var Vd=Eu[kd],yb=Vd.toLowerCase(),Mb=Vd[0].toUpperCase()+Vd.slice(1);Ri(yb,"on"+Mb)}Ri(Gp,"onAnimationEnd"),Ri(Hp,"onAnimationIteration"),Ri(kp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Bv,"onTransitionRun"),Ri(zv,"onTransitionStart"),Ri(Gv,"onTransitionCancel"),Ri(Vp,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function u0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],j=R.instance,le=R.currentTarget;if(R=R.listener,j!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(Ee){hl(Ee)}u.currentTarget=null,d=j}else for(_=0;_<o.length;_++){if(R=o[_],j=R.instance,le=R.currentTarget,R=R.listener,j!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(Ee){hl(Ee)}u.currentTarget=null,d=j}}}}function St(t,n){var a=n[ps];a===void 0&&(a=n[ps]=new Set);var o=t+"__bubble";a.has(o)||(d0(n,t,2,!1),a.add(o))}function qd(t,n,a){var o=0;n&&(o|=4),d0(a,t,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Xd(t){if(!t[$l]){t[$l]=!0,rl.forEach(function(a){a!=="selectionchange"&&(Sb.has(a)||qd(a,!1,t),qd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,qd("selectionchange",!1,n))}}function d0(t,n,a,o){switch(G0(n)){case 2:var u=Qb;break;case 8:u=Jb;break;default:u=of}a=u.bind(null,n,a,t),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var j=_.tag;if((j===3||j===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=ea(R),_===null)return;if(j=_.tag,j===5||j===6||j===26||j===27){o=d=_;continue e}R=R.parentNode}}o=o.return}gp(function(){var le=d,Ee=cu(a),we=[];e:{var pe=qp.get(t);if(pe!==void 0){var xe=ul,Ke=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":xe=gv;break;case"focusin":Ke="focus",xe=mu;break;case"focusout":Ke="blur",xe=mu;break;case"beforeblur":case"afterblur":xe=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=vv;break;case Gp:case Hp:case kp:xe=ov;break;case Vp:xe=yv;break;case"scroll":case"scrollend":xe=nv;break;case"wheel":xe=Sv;break;case"copy":case"cut":case"paste":xe=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=yp;break;case"toggle":case"beforetoggle":xe=Tv}var ot=(n&4)!==0,Jt=!ot&&(t==="scroll"||t==="scrollend"),ne=ot?pe!==null?pe+"Capture":null:pe;ot=[];for(var Z=le,oe;Z!==null;){var Ae=Z;if(oe=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||oe===null||ne===null||(Ae=Jr(Z,ne),Ae!=null&&ot.push(Uo(Z,Ae,oe))),Jt)break;Z=Z.return}0<ot.length&&(pe=new xe(pe,Ke,null,a,Ee),we.push({event:pe,listeners:ot}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",pe&&a!==lu&&(Ke=a.relatedTarget||a.fromElement)&&(ea(Ke)||Ke[Wn]))break e;if((xe||pe)&&(pe=Ee.window===Ee?Ee:(pe=Ee.ownerDocument)?pe.defaultView||pe.parentWindow:window,xe?(Ke=a.relatedTarget||a.toElement,xe=le,Ke=Ke?ea(Ke):null,Ke!==null&&(Jt=c(Ke),ot=Ke.tag,Ke!==Jt||ot!==5&&ot!==27&&ot!==6)&&(Ke=null)):(xe=null,Ke=le),xe!==Ke)){if(ot=vp,Ae="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ot=yp,Ae="onPointerLeave",ne="onPointerEnter",Z="pointer"),Jt=xe==null?pe:gs(xe),oe=Ke==null?pe:gs(Ke),pe=new ot(Ae,Z+"leave",xe,a,Ee),pe.target=Jt,pe.relatedTarget=oe,Ae=null,ea(Ee)===le&&(ot=new ot(ne,Z+"enter",Ke,a,Ee),ot.target=oe,ot.relatedTarget=Jt,Ae=ot),Jt=Ae,xe&&Ke)t:{for(ot=Eb,ne=xe,Z=Ke,oe=0,Ae=ne;Ae;Ae=ot(Ae))oe++;Ae=0;for(var at=Z;at;at=ot(at))Ae++;for(;0<oe-Ae;)ne=ot(ne),oe--;for(;0<Ae-oe;)Z=ot(Z),Ae--;for(;oe--;){if(ne===Z||Z!==null&&ne===Z.alternate){ot=ne;break t}ne=ot(ne),Z=ot(Z)}ot=null}else ot=null;xe!==null&&f0(we,pe,xe,ot,!1),Ke!==null&&Jt!==null&&f0(we,Jt,Ke,ot,!0)}}e:{if(pe=le?gs(le):window,xe=pe.nodeName&&pe.nodeName.toLowerCase(),xe==="select"||xe==="input"&&pe.type==="file")var zt=Rp;else if(wp(pe))if(Np)zt=Ov;else{zt=Lv;var Je=Uv}else xe=pe.nodeName,!xe||xe.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?le&&kt(le.elementType)&&(zt=Rp):zt=Pv;if(zt&&(zt=zt(t,le))){Cp(we,zt,a,Ee);break e}Je&&Je(t,pe,le),t==="focusout"&&le&&pe.type==="number"&&le.memoizedProps.value!=null&&yt(pe,"number",pe.value)}switch(Je=le?gs(le):window,t){case"focusin":(wp(Je)||Je.contentEditable==="true")&&(Js=Je,yu=le,ro=null);break;case"focusout":ro=yu=Js=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Bp(we,a,Ee);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Bp(we,a,Ee)}var mt;if(xu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Qs?Tp(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(Mp&&a.locale!=="ko"&&(Qs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Qs&&(mt=xp()):(Pa=Ee,fu="value"in Pa?Pa.value:Pa.textContent,Qs=!0)),Je=ec(le,wt),0<Je.length&&(wt=new bp(wt,t,null,a,Ee),we.push({event:wt,listeners:Je}),mt?wt.data=mt:(mt=Ap(a),mt!==null&&(wt.data=mt)))),(mt=wv?Cv(t,a):Rv(t,a))&&(wt=ec(le,"onBeforeInput"),0<wt.length&&(Je=new bp("onBeforeInput","beforeinput",null,a,Ee),we.push({event:Je,listeners:wt}),Je.data=mt)),bb(we,t,le,a,Ee)}u0(we,n)})}function Uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Jr(t,a),u!=null&&o.unshift(Uo(t,u,d)),u=Jr(t,n),u!=null&&o.push(Uo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Eb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f0(t,n,a,o,u){for(var d=n._reactName,_=[];a!==null&&a!==o;){var R=a,j=R.alternate,le=R.stateNode;if(R=R.tag,j!==null&&j===o)break;R!==5&&R!==26&&R!==27||le===null||(j=le,u?(le=Jr(a,d),le!=null&&_.unshift(Uo(a,le,j))):u||(le=Jr(a,d),le!=null&&_.push(Uo(a,le,j)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Tb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function h0(t){return(typeof t=="string"?t:""+t).replace(Tb,`
`).replace(Ab,"")}function p0(t,n){return n=h0(n),h0(t)===n}function Qt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":Ci(t,o,d);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Qt(t,n,"name",u.name,u,null),Qt(t,n,"formEncType",u.formEncType,u,null),Qt(t,n,"formMethod",u.formMethod,u,null),Qt(t,n,"formTarget",u.formTarget,u,null)):(Qt(t,n,"encType",u.encType,u,null),Qt(t,n,"method",u.method,u,null),Qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=na);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Be(t,a,o))}}function Wd(t,n,a,o,u,d){switch(a){case"style":Ci(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ai(t,o):(typeof o=="number"||typeof o=="bigint")&&ai(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Nn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function Pn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qt(t,n,d,_,a,null)}}u&&Qt(t,n,"srcSet",a.srcSet,a,null),o&&Qt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=d=_=u=null,j=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Ee=a[o];if(Ee!=null)switch(o){case"name":u=Ee;break;case"type":_=Ee;break;case"checked":j=Ee;break;case"defaultChecked":le=Ee;break;case"value":d=Ee;break;case"defaultValue":R=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(s(137,n));break;default:Qt(t,n,o,Ee,a,null)}}Fn(t,d,R,j,le,_,u,!1);return;case"select":St("invalid",t),o=_=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Qt(t,n,u,R,a,null)}n=d,a=_,t.multiple=!!o,n!=null?Sn(t,!!o,n,!1):a!=null&&Sn(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Qt(t,n,_,R,a,null)}wi(t,o,u,d);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qt(t,n,j,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)St(Do[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qt(t,n,le,o,a,null)}return;default:if(kt(n)){for(Ee in a)a.hasOwnProperty(Ee)&&(o=a[Ee],o!==void 0&&Wd(t,n,Ee,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Qt(t,n,R,o,a,null))}function wb(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,_=null,R=null,j=null,le=null,Ee=null;for(xe in a){var we=a[xe];if(a.hasOwnProperty(xe)&&we!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":j=we;default:o.hasOwnProperty(xe)||Qt(t,n,xe,null,o,we)}}for(var pe in o){var xe=o[pe];if(we=a[pe],o.hasOwnProperty(pe)&&(xe!=null||we!=null))switch(pe){case"type":d=xe;break;case"name":u=xe;break;case"checked":le=xe;break;case"defaultChecked":Ee=xe;break;case"value":_=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:xe!==we&&Qt(t,n,pe,xe,o,we)}}je(t,_,R,j,le,Ee,d,u);return;case"select":xe=_=R=pe=null;for(d in a)if(j=a[d],a.hasOwnProperty(d)&&j!=null)switch(d){case"value":break;case"multiple":xe=j;default:o.hasOwnProperty(d)||Qt(t,n,d,null,o,j)}for(u in o)if(d=o[u],j=a[u],o.hasOwnProperty(u)&&(d!=null||j!=null))switch(u){case"value":pe=d;break;case"defaultValue":R=d;break;case"multiple":_=d;default:d!==j&&Qt(t,n,u,d,o,j)}n=R,a=_,o=xe,pe!=null?Sn(t,!!a,pe,!1):!!o!=!!a&&(n!=null?Sn(t,!!a,n,!0):Sn(t,!!a,a?[]:"",!1));return;case"textarea":xe=pe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],d=a[_],o.hasOwnProperty(_)&&(u!=null||d!=null))switch(_){case"value":pe=u;break;case"defaultValue":xe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Qt(t,n,_,u,o,d)}ii(t,pe,xe);return;case"option":for(var Ke in a)if(pe=a[Ke],a.hasOwnProperty(Ke)&&pe!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Qt(t,n,Ke,null,o,pe)}for(j in o)if(pe=o[j],xe=a[j],o.hasOwnProperty(j)&&pe!==xe&&(pe!=null||xe!=null))switch(j){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:Qt(t,n,j,pe,o,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)pe=a[ot],a.hasOwnProperty(ot)&&pe!=null&&!o.hasOwnProperty(ot)&&Qt(t,n,ot,null,o,pe);for(le in o)if(pe=o[le],xe=a[le],o.hasOwnProperty(le)&&pe!==xe&&(pe!=null||xe!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Qt(t,n,le,pe,o,xe)}return;default:if(kt(n)){for(var Jt in a)pe=a[Jt],a.hasOwnProperty(Jt)&&pe!==void 0&&!o.hasOwnProperty(Jt)&&Wd(t,n,Jt,void 0,o,pe);for(Ee in o)pe=o[Ee],xe=a[Ee],!o.hasOwnProperty(Ee)||pe===xe||pe===void 0&&xe===void 0||Wd(t,n,Ee,pe,o,xe);return}}for(var ne in a)pe=a[ne],a.hasOwnProperty(ne)&&pe!=null&&!o.hasOwnProperty(ne)&&Qt(t,n,ne,null,o,pe);for(we in o)pe=o[we],xe=a[we],!o.hasOwnProperty(we)||pe===xe||pe==null&&xe==null||Qt(t,n,we,pe,o,xe)}function m0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,_=u.initiatorType,R=u.duration;if(d&&R&&m0(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],le=j.startTime;if(le>R)break;var Ee=j.transferSize,we=j.initiatorType;Ee&&m0(we)&&(j=j.responseEnd,_+=Ee*(j<R?1:(R-le)/(j-le)))}if(--o,n+=8*(d+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yd=null,Zd=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function g0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qd=null;function Rb(){var t=window.event;return t&&t.type==="popstate"?t===Qd?!1:(Qd=t,!0):(Qd=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,Nb=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(t){return v0.resolve(null).then(t).catch(Ub)}:_0;function Ub(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function b0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Lo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Lo(a);for(var d=a.firstChild;d;){var _=d.nextSibling,R=d.nodeName;d[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&Lo(t.ownerDocument.body);a=u}while(a);Tr(n)}function y0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Jd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jd(a),Da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Lb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function Pb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function M0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function $d(t){return t.data==="$?"||t.data==="$~"}function ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ob(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var tf=null;function S0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function E0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function T0(t,n,a){switch(n=tc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Da(t)}var Si=new Map,A0=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=X.d;X.d={f:Ib,r:Fb,D:Bb,C:zb,L:Gb,m:Hb,X:Vb,S:kb,M:qb};function Ib(){var t=_a.f(),n=Wl();return t||n}function Fb(t){var n=ta(t);n!==null&&n.tag===5&&n.type==="form"?Vm(n):_a.r(t)}var Mr=typeof document>"u"?null:document;function w0(t,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=qt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),A0.has(u)||(A0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Pn(n,"link",t),gn(n),o.head.appendChild(n)))}}function Bb(t){_a.D(t),w0("dns-prefetch",t,null)}function zb(t,n){_a.C(t,n),w0("preconnect",t,n)}function Gb(t,n,a){_a.L(t,n,a);var o=Mr;if(o&&t&&n){var u='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+qt(a.imageSizes)+'"]')):u+='[href="'+qt(t)+'"]';var d=u;switch(n){case"style":d=Sr(t);break;case"script":d=Er(t)}Si.has(d)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(d))||n==="script"&&o.querySelector(Oo(d))||(n=o.createElement("link"),Pn(n,"link",t),gn(n),o.head.appendChild(n)))}}function Hb(t,n){_a.m(t,n);var a=Mr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+qt(o)+'"][href="'+qt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Er(t)}if(!Si.has(d)&&(t=b({rel:"modulepreload",href:t},n),Si.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(d)))return}o=a.createElement("link"),Pn(o,"link",t),gn(o),a.head.appendChild(o)}}}function kb(t,n,a){_a.S(t,n,a);var o=Mr;if(o&&t){var u=Ua(o).hoistableStyles,d=Sr(t);n=n||"default";var _=u.get(d);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Po(d)))R.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(d))&&nf(t,a);var j=_=o.createElement("link");gn(j),Pn(j,"link",t),j._p=new Promise(function(le,Ee){j.onload=le,j.onerror=Ee}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ic(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(d,_)}}}function Vb(t,n){_a.X(t,n);var a=Mr;if(a&&t){var o=Ua(a).hoistableScripts,u=Er(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=b({src:t,async:!0},n),(n=Si.get(u))&&af(t,n),d=a.createElement("script"),gn(d),Pn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function qb(t,n){_a.M(t,n);var a=Mr;if(a&&t){var o=Ua(a).hoistableScripts,u=Er(t),d=o.get(u);d||(d=a.querySelector(Oo(u)),d||(t=b({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&af(t,n),d=a.createElement("script"),gn(d),Pn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function C0(t,n,a,o){var u=(u=Q.current)?nc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Sr(a.href);var d=Ua(u).hoistableStyles,_=d.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=u.querySelector(Po(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,a),d||Xb(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Sr(t){return'href="'+qt(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function R0(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function Xb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Pn(n,"link",a),gn(n),t.head.appendChild(n))}function Er(t){return'[src="'+qt(t)+'"]'}function Oo(t){return"script[async]"+t}function N0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+qt(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),Pn(o,"style",u),ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=Sr(a.href);var d=t.querySelector(Po(u));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=R0(a),(u=Si.get(u))&&nf(o,u),d=(t.ownerDocument||t).createElement("link"),gn(d);var _=d;return _._p=new Promise(function(R,j){_.onload=R,_.onerror=j}),Pn(d,"link",o),n.state.loading|=4,ic(d,a.precedence,t),n.instance=d;case"script":return d=Er(a.src),(u=t.querySelector(Oo(d)))?(n.instance=u,gn(u),u):(o=a,(u=Si.get(d))&&(o=b({},a),af(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),Pn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,t));return n.instance}function ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function D0(t,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Na]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(d):o.set(_,[d])}}return o}function U0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function jb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function L0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),d=n.querySelector(Po(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,gn(d);return}d=n.ownerDocument||n,o=R0(o),(u=Si.get(u))&&nf(o,u),d=d.createElement("link"),gn(d);var _=d;_._p=new Promise(function(R,j){_.onload=R,_.onerror=j}),Pn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sf=0;function Yb(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&sf===0&&(sf=62500*Cb());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>sf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(Zb,t),rc=null,sc.call(t))}function Zb(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var o=a.get(null);else{a=new Map,rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var _=u[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,u),a.set(_,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:k,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Kb(t,n,a,o,u,d,_,R,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function P0(t,n,a,o,u,d,_,R,j,le,Ee,we){return t=new Kb(t,n,a,_,j,le,Ee,we,R),n=1,d===!0&&(n|=24),d=ri(3,null,null,n),t.current=d,d.stateNode=t,n=Fu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Hu(d),t}function O0(t){return t?(t=tr,t):tr}function I0(t,n,a,o,u,d){u=O0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ga(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ha(t,o,n),a!==null&&($n(a,t,n),po(a,t,n))}function F0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rf(t,n){F0(t,n),(t=t.alternate)&&F0(t,n)}function B0(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&$n(n,t,67108864),rf(t,67108864)}}function z0(t){if(t.tag===13||t.tag===31){var n=di();n=ni(n);var a=ys(t,n);a!==null&&$n(a,t,n),rf(t,n)}}var lc=!0;function Qb(t,n,a,o){var u=B.T;B.T=null;var d=X.p;try{X.p=2,of(t,n,a,o)}finally{X.p=d,B.T=u}}function Jb(t,n,a,o){var u=B.T;B.T=null;var d=X.p;try{X.p=8,of(t,n,a,o)}finally{X.p=d,B.T=u}}function of(t,n,a,o){if(lc){var u=lf(o);if(u===null)jd(t,n,o,cc,a),H0(t,o);else if(ey(u,t,n,a,o))o.stopPropagation();else if(H0(t,o),n&4&&-1<$b.indexOf(t)){for(;u!==null;){var d=ta(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=De(d.pendingLanes);if(_!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var j=1<<31-He(_);R.entanglements[1]|=j,_&=~j}ki(d),(Ht&6)===0&&(Xl=Nt()+500,No(0))}}break;case 31:case 13:R=ys(d,2),R!==null&&$n(R,d,2),Wl(),rf(d,2)}if(d=lf(o),d===null&&jd(t,n,o,cc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else jd(t,n,o,null,a)}}function lf(t){return t=cu(t),cf(t)}var cc=null;function cf(t){if(cc=null,t=ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function G0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_t()){case P:return 2;case T:return 8;case te:case ce:return 32;case ve:return 268435456;default:return 32}default:return 32}}var uf=!1,Ja=null,$a=null,es=null,Fo=new Map,Bo=new Map,ts=[],$b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ta(n),n!==null&&B0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ey(t,n,a,o,u){switch(n){case"focusin":return Ja=zo(Ja,t,n,a,o,u),!0;case"dragenter":return $a=zo($a,t,n,a,o,u),!0;case"mouseover":return es=zo(es,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Fo.set(d,zo(Fo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Bo.set(d,zo(Bo.get(d)||null,t,n,a,o,u)),!0}return!1}function k0(t){var n=ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){z0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=ta(a),n!==null&&B0(n),t.blockedOn=a,!1;n.shift()}return!0}function V0(t,n,a){uc(t)&&a.delete(n)}function ty(){uf=!1,Ja!==null&&uc(Ja)&&(Ja=null),$a!==null&&uc($a)&&($a=null),es!==null&&uc(es)&&(es=null),Fo.forEach(V0),Bo.forEach(V0)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,uf||(uf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ty)))}var fc=null;function q0(t){fc!==t&&(fc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(cf(o||a)===null)continue;break}var d=ta(a);d!==null&&(t.splice(n,3),n-=3,od(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(t){function n(j){return dc(j,t)}Ja!==null&&dc(Ja,t),$a!==null&&dc($a,t),es!==null&&dc(es,t),Fo.forEach(n),Bo.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)k0(a),a.blockedOn===null&&ts.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],_=u[Nn]||null;if(typeof d=="function")_||q0(a);else if(_){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,_=d[Nn]||null)R=_.formAction;else if(cf(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),q0(a)}}}function X0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function df(t){this._internalRoot=t}hc.prototype.render=df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=di();I0(a,o,t,n,null,null)},hc.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;I0(t.current,2,null,t,null,null),Wl(),n[Wn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Qr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,t),a===0&&k0(t)}};var j0=e.version;if(j0!=="19.2.8")throw Error(s(527,j0,"19.2.8"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ny={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{be=pc.inject(ny),ye=pc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=$m,d=eg,_=tg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=P0(t,1,!1,null,null,a,o,null,u,d,_,X0),t[Wn]=n.current,Xd(t),new df(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=$m,_=eg,R=tg,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=P0(t,1,!0,n,a??null,o,u,j,d,_,R,X0),n.context=O0(null),a=n.current,o=di(),o=ni(o),u=Ga(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,Ve(n,a),ki(n),t[Wn]=n.current,Xd(t),new hc(n)},Ho.version="19.2.8",Ho}var nx;function fy(){if(nx)return pf.exports;nx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pf.exports=dy(),pf.exports}var hy=fy();const W={pushup_standard:{id:"pushup_standard",name:"Flexão de Braços Clássica",category:"Peito",sets:3,repsOrDuration:"10 a 14 repetições",restSeconds:45,poseType:"pushup",muscles:{primary:["Peitoral Maior","Peitoral Menor","Tríceps Braquial"],secondary:["Deltóide Anterior","Abdômen","Serrátil Anterior"]},instructions:["Posicione as mãos no chão ligeiramente mais largas que os ombros, dedos apontando para a frente.","Mantenha o corpo em linha reta da cabeça aos calcanhares, glúteos e abdômen contraídos.","Desça o peito até quase tocar o chão, mantendo os cotovelos em um ângulo de 45° em relação ao tronco.","Empurre o chão com força, estendendo os braços e contraindo o peitoral no topo do movimento."],keyCues:["Não deixe o quadril cair nem subir excessivamente","Cotovelos para trás a 45°, nunca abertos a 90° (preserva o ombro)","Aperte o peito no topo com retração e posterior prostração escapular"],breathing:"Inspire ao descer controladamente; expire com força ao empurrar o chão.",commonMistakes:["Deixar a lombar arquear","Olhar para a frente e tensionar o pescoço (mantenha olhar 20cm à frente)","Meia repetição sem descer até o peito quase encostar no chão"],regression:"Flexão com joelhos apoiados ou flexão inclinada com as mãos no sofá/mesa.",progression:"Flexão com pés elevados (declinada) ou com pausa de 2 segundos no fundo."},pushup_incline:{id:"pushup_incline",name:"Flexão Inclinada (Peitoral Inferior & Regressão)",category:"Peito",sets:3,repsOrDuration:"12 a 15 repetições",restSeconds:45,poseType:"incline_pushup",muscles:{primary:["Peitoral Inferior","Tríceps"],secondary:["Deltóide Anterior","Core"]},instructions:["Apoie as mãos em uma superfície elevada estável (banco, sofá ou mesa baixa).","Mantenha o corpo alinhado e o abdômen travado.","Desça o peito em direção à borda da superfície com controle.","Empurre de volta à posição inicial focando na contração da parte inferior do peito."],keyCues:["Excelente para construir volume de treino sem sobrecarregar punhos e ombros","Foco em manter os ombros longe das orelhas"],breathing:"Inspire na descida, expire ao empurrar a base.",commonMistakes:["Dobrar o quadril ao invés de mover o corpo todo como uma prancha."],regression:"Aumentar a altura da superfície (ex: parede).",progression:"Reduzir a altura da superfície até o chão."},pushup_decline:{id:"pushup_decline",name:"Flexão Declinada (Foco Peitoral Superior)",category:"Peito",sets:3,repsOrDuration:"8 a 12 repetições",restSeconds:60,poseType:"decline_pushup",muscles:{primary:["Peitoral Superior (Porção Clavicular)","Deltóide Anterior"],secondary:["Tríceps","Serrátil","Core"]},instructions:["Coloque os pés apoiados em um banco, cadeira ou sofá e as mãos firmes no chão.","Alinhe todo o corpo e ative o core para não arquear a coluna lombar.","Desça a cabeça e o peitoral superior controladamente até próximo ao chão.","Empurre o chão com vigor, focando na porção alta do peito."],keyCues:["A gravidade coloca maior percentual do seu peso corporal (86kg) no peito superior","Mantenha o pescoço neutro"],breathing:"Inspire descendo em 2 segundos; expire empurrando o chão.",commonMistakes:["Hiperextensão da lombar","Abrir os cotovelos demais"],regression:"Reduzir a altura dos pés ou fazer flexão no solo.",progression:"Pés mais altos ou flexão pseudo planche."},pushup_diamond:{id:"pushup_diamond",name:"Flexão Diamante (Miolo do Peito & Tríceps)",category:"Peito",sets:3,repsOrDuration:"8 a 10 repetições",restSeconds:60,poseType:"diamond_pushup",muscles:{primary:["Tríceps Braquial","Peitoral Medial (Miolo do Peito)"],secondary:["Deltóide Anterior","Abdômen"]},instructions:["Junte as mãos no chão sob o centro do peito formando um formato de diamante/triângulo com polegares e indicadores.","Mantenha o corpo reto e os pés juntos ou ligeiramente afastados para estabilidade.","Desça o centro do peito em direção às mãos com cotovelos rentes ao tronco.","Empurre para cima espremendo o peitoral no pico."],keyCues:["Sensação intensa de contração no meio do peitoral e na parte de trás dos braços","Desça de forma suave para proteger os cotovelos"],breathing:"Inspire na descida; expire no esforço de subida.",commonMistakes:["Deixar os cotovelos abrirem para os lados em excesso"],regression:"Flexão diamante com joelhos no chão.",progression:"Pausar 2 segundos no ponto mais baixo antes de subir."},chair_dips:{id:"chair_dips",name:"Mergulho na Cadeira / Banco (Peito Inferior & Tríceps)",category:"Peito",sets:3,repsOrDuration:"10 a 14 repetições",restSeconds:45,poseType:"chair_dips",muscles:{primary:["Tríceps","Peitoral Inferior"],secondary:["Deltóide Anterior","Trapézio Inferior"]},instructions:["Sente-se na borda de uma cadeira estável com as mãos apoiadas ao lado dos quadris.","Deslize o quadril para fora da cadeira, mantendo os ombros para trás e peito aberto.","Flexione os cotovelos até formarem 90 graus, descendo o quadril rente à cadeira.","Empurre com as palmas das mãos estendendo os braços de volta."],keyCues:["Mantenha as costas próximas à cadeira para não sobrecarregar os ombros"],breathing:"Inspire na descida, expire ao estender os braços.",commonMistakes:["Encolher os ombros junto ao pescoço"],regression:"Manter os joelhos dobrados a 90 graus.",progression:"Pernas esticadas com os calcanhares no chão ou pés elevados."},plank_hold:{id:"plank_hold",name:"Prancha Abdominal Isométrica (Transverso & Reto)",category:"Abdômen & Core",sets:3,repsOrDuration:"35 a 50 segundos",restSeconds:40,poseType:"plank",muscles:{primary:["Transverso do Abdômen","Reto Abdominal"],secondary:["Oblíquos","Glúteos","Eretores da Espinha"]},instructions:["Apoie os antebraços no chão, com os cotovelos alinhados sob os ombros.","Estenda as pernas para trás e apoie a ponta dos pés.","Realize a retroversão pélvica (aperte os glúteos e puxe o umbigo para a coluna).","Mantenha a postura imóvel respirando de forma controlada pelo diafragma."],keyCues:["Pense em esmagar o abdômen como se fosse receber um golpe","Puxe os cotovelos em direção aos pés isometricamente para ativar 2x mais fibras"],breathing:"Respirações curtas e profundas sem soltar a contração abdominal.",commonMistakes:["Deixar a lombar cair (arquear) ou elevar o bumbum muito alto"],regression:"Prancha com os joelhos apoiados no chão.",progression:"Prancha com elevação alternada de uma perna."},hollow_body:{id:"hollow_body",name:"Hollow Body Hold (A Canoinha da Calistenia)",category:"Abdômen & Core",sets:3,repsOrDuration:"25 a 40 segundos",restSeconds:45,poseType:"hollow_body",muscles:{primary:["Reto Abdominal (Completo)","Transverso"],secondary:["Flexores do Quadril","Serrátil"]},instructions:["Deite de costas no chão com braços estendidos acima da cabeça e pernas esticadas.","Pressione a coluna lombar 100% colada no chão (sem espaço para passar uma folha).","Eleve as escápulas do chão e tire os pés cerca de 15 a 20 cm do solo.","Mantenha o formato côncavo de uma canoa."],keyCues:["O exercício calistênico supremo para chapar a barriga e fortalecer a parede abdominal","Lombar NUNCA pode sair do contato com o solo"],breathing:"Respiração cadenciada mantendo a pressão intra-abdominal.",commonMistakes:["Lombar descolar do chão"],regression:"Dobrar os joelhos em direção ao peito com braços ao lado do corpo.",progression:"Hollow rocks (pequenos balanços mantendo o corpo rígido)."},mountain_climber:{id:"mountain_climber",name:"Mountain Climber Explosivo (Queima & Core)",category:"Cardio Calistênico",sets:3,repsOrDuration:"40 segundos",restSeconds:30,poseType:"mountain_climber",muscles:{primary:["Reto Abdominal","Cardiovascular"],secondary:["Deltóides","Flexores do Quadril","Panturrilhas"]},instructions:["Inicie em posição de prancha alta com as mãos no chão sob os ombros.","Puxe um joelho em direção ao peito com velocidade sem elevar o quadril.","Alterne as pernas rapidamente como se estivesse correndo na horizontal.","Mantenha o abdômen extremamente contraído."],keyCues:["Acelera a queima de gordura e derrete o tecido adiposo abdominal"],breathing:"Ritmo respiratório constante e coordenado com as passadas.",commonMistakes:["Pular com o quadril muito alto"],regression:"Mountain climber lento, dando passos controlados.",progression:"Mountain climber cruzado (joelho em direção ao cotovelo oposto)."},leg_raises:{id:"leg_raises",name:"Elevação de Pernas no Solo (Abdômen Inferior)",category:"Abdômen & Core",sets:3,repsOrDuration:"12 a 15 repetições",restSeconds:45,poseType:"leg_raises",muscles:{primary:["Reto Abdominal (Porção Infra/Inferior)"],secondary:["Flexores do Quadril","Oblíquos"]},instructions:["Deite-se de costas com as mãos sob as laterais do quadril para proteger a lombar.","Junte os pés e estenda as pernas.","Eleve as pernas retas até formarem 90 graus com o tronco.","Desça as pernas lentamente até quase tocar o chão e repita sem descansar no solo."],keyCues:["Foco total na dobra da pelve para recrutar a parte de baixo da barriga","Descida lenta de 3 segundos"],breathing:"Expire ao subir as pernas; inspire ao descer.",commonMistakes:["Bater os calcanhares no chão e usar impulso"],regression:"Elevação com os joelhos flexionados a 90° (Reverse crunch).",progression:"Elevação com pequena elevação da pelve (vela) no topo."},bicycle_crunches:{id:"bicycle_crunches",name:"Abdominal Bicicleta (Oblíquos & Definição Lateral)",category:"Abdômen & Core",sets:3,repsOrDuration:"20 repetições alternadas (10 cada lado)",restSeconds:40,poseType:"bicycle_crunches",muscles:{primary:["Oblíquos Internos e Externos","Reto Abdominal"],secondary:["Flexores do Quadril"]},instructions:["Deite de costas com mãos atrás da nuca (sem puxar a cabeça) e pernas elevadas.","Gire o tronco levando o cotovelo direito em direção ao joelho esquerdo enquanto a perna direita estica.","Alterne o lado de forma contínua e com rotação consciente da caixa torácica."],keyCues:["Gire os ombros, não apenas o pescoço e os braços"],breathing:"Expire a cada rotação.",commonMistakes:["Puxar a nuca com as mãos"],regression:"Tocar os calcanhares no chão a cada repetição.",progression:"Pausa de 2 segundos a cada rotação lateral."},glute_bridge:{id:"glute_bridge",name:"Ponte de Glúteos Clássica com Pico Isométrico",category:"Glúteos",sets:4,repsOrDuration:"15 a 18 repetições (com 2s de pausa no topo)",restSeconds:45,poseType:"glute_bridge",muscles:{primary:["Glúteo Máximo","Glúteo Médio"],secondary:["Posterior de Coxa (Isquiotibiais)","Core"]},instructions:["Deite de costas no chão com os joelhos dobrados e pés firmes no solo na largura do quadril.","Empurre o chão com os calcanhares, elevando o quadril até formar uma linha reta entre ombros e joelhos.","No ponto mais alto, aperte os glúteos com força máxima e segure por 2 segundos inteiros.","Desça o quadril de forma controlada sem relaxar totalmente no chão."],keyCues:["A força deve vir 100% dos calcanhares, não da ponta dos pés","Não arqueie a lombar: trave a pelve em retroversão","Sinta o bumbum queimar no topo"],breathing:"Expire ao elevar o quadril e contrair o glúteo; inspire na descida.",commonMistakes:["Subir empurrando com a lombar em vez de contrair o glúteo","Pés muito distantes ou muito próximos do quadril"],regression:"Ponte sem a pausa no topo.",progression:"Ponte unilateral (uma perna estendida para o teto)."},single_leg_bridge:{id:"single_leg_bridge",name:"Elevação Pélvica Unilateral (Glúteo Isolado)",category:"Glúteos",sets:3,repsOrDuration:"10 a 12 repetições por perna",restSeconds:45,poseType:"single_leg_bridge",muscles:{primary:["Glúteo Máximo","Glúteo Médio"],secondary:["Isquiotibiais","Core Profundo"]},instructions:["Deite-se na mesma posição da ponte, mas eleve uma perna reta apontada para cima.","Com apenas um calcanhar apoiado no chão, empurre e eleve o quadril o mais alto possível.","Aperte o glúteo da perna de apoio no topo por 1 segundo.","Desça controladamente e complete a série antes de trocar de perna."],keyCues:["Dobra a sobrecarga no glúteo ativo, perfeito para esculpir o bumbum sem pesos","Mantenha os quadris nivelados (sem tombar para o lado)"],breathing:"Expire na subida forte; inspire na descida lenta.",commonMistakes:["Deixar o quadril inclinar para o lado da perna elevada"],regression:"Cruzar o tornozelo da perna elevada sobre o joelho oposto (formato 4).",progression:"Adicionar pulso curto no topo da repetição."},donkey_kicks:{id:"donkey_kicks",name:"Coice de Glúteo no Solo (Donkey Kicks)",category:"Glúteos",sets:3,repsOrDuration:"15 a 20 repetições por perna",restSeconds:30,poseType:"donkey_kicks",muscles:{primary:["Glúteo Máximo (Foco no Bumbum Redondo)","Glúteo Superior"],secondary:["Isquiotibiais","Core Estabilizador"]},instructions:["Posicione-se em 4 apoios (mãos sob os ombros e joelhos sob o quadril).","Mantendo o joelho direito flexionado a 90 graus e o pé em flexão (sola para o teto), empurre a perna para cima.","Suba até a coxa ficar paralela ao tronco, espremendo o glúteo no topo.","Retorne sem deixar o joelho tocar o chão e repita."],keyCues:["Imagine empurrar o teto com a sola do pé","Não torça o tronco nem entorte a coluna lombar"],breathing:"Expire ao chutar para cima; inspire ao retornar.",commonMistakes:["Balançar as costas para ajudar no movimento"],regression:"Diminuir a amplitude do movimento.",progression:"Pausa de 2 segundos no topo + 5 pulsos curtos no final da série."},fire_hydrant:{id:"fire_hydrant",name:"Abdução 4 Apoios / Fire Hydrant (Glúteo Médio & Lateral)",category:"Glúteos",sets:3,repsOrDuration:"15 a 18 repetições por lado",restSeconds:30,poseType:"fire_hydrant",muscles:{primary:["Glúteo Médio","Glúteo Mínimo (Desenha as laterais do quadril)"],secondary:["Tensor da Fáscia Lata","Oblíquos"]},instructions:["Em 4 apoios, com a coluna reta e o abdômen contraído.","Mantendo o joelho dobrado a 90°, abra a perna lateralmente para fora como um hidrante.","Eleve o joelho até a altura do quadril sentindo a lateral do glúteo queimar.","Desça de forma suave e controlada."],keyCues:["Fundamental para preencher a depressão trocantérica e desenhar o contorno do bumbum","Mantenha o peso distribuído igualmente entre as duas mãos"],breathing:"Expire ao abrir a perna lateralmente; inspire na volta.",commonMistakes:["Inclinar o tronco todo para o lado oposto"],regression:"Menor elevação da perna.",progression:"Estender a perna no ponto mais alto antes de descer."},sumo_squat:{id:"sumo_squat",name:"Agachamento Sumô Calistênico (Glúteos & Adutores)",category:"Glúteos",sets:3,repsOrDuration:"15 a 18 repetições",restSeconds:45,poseType:"sumo_squat",muscles:{primary:["Glúteo Máximo","Adutores da Coxa (Parte Interna)"],secondary:["Quadríceps","Posterior de Coxa"]},instructions:["Fique em pé com as pernas bem afastadas (mais largas que os ombros) e os pés apontados 45° para fora.","Mantenha o peito erguido e coluna reta.","Agache empurrando os joelhos para fora na mesma direção da ponta dos pés.","Desça até as coxas ficarem paralelas ao chão ou mais abaixo.","Suba empurrando os calcanhares no chão e aperte os glúteos no topo."],keyCues:["Excelente para atingir as fibras profundas dos glúteos e a parte interna da coxa","Pressione os calcanhares e jogue os joelhos para fora"],breathing:"Inspire descendo; expire subindo com contração dos glúteos.",commonMistakes:["Deixar os joelhos caírem para dentro (valgo dinâmico)"],regression:"Agachamento tradicional com pés na largura dos ombros.",progression:"Agachamento sumô com 3 pulsos no fundo da repetição."},bulgarian_split:{id:"bulgarian_split",name:"Agachamento Búlgaro (Hipertrofia Máxima de Glúteos)",category:"Glúteos",sets:3,repsOrDuration:"10 a 12 repetições por perna",restSeconds:50,poseType:"bulgarian_split",muscles:{primary:["Glúteo Máximo (Alongamento sob carga)","Quadríceps"],secondary:["Posterior de Coxa","Estabilizadores do Core"]},instructions:["Fique de costas para uma cadeira ou sofá e apoie o peito de um dos pés na superfície.","Dê um passo à frente com a perna de apoio para que ao descer o joelho não ultrapasse excessivamente a ponta do pé.","Incline levemente o tronco à frente (cerca de 15°) para direcionar 80% do estímulo para o glúteo.","Desça até o joelho de trás quase tocar o chão e suba empurrando pelo calcanhar dianteiro."],keyCues:["Considerado o melhor exercício calistênico do mundo para empinar e hipertrofiar os glúteos","Tronco levemente inclinado ativa muito mais glúteo do que tronco 100% reto"],breathing:"Inspire na descida lenta; expire ao empurrar o solo.",commonMistakes:["Colocar peso na perna de trás em vez de na perna da frente"],regression:"Afundo tradicional com ambos os pés no chão (Lunge).",progression:"Pausa de 2 segundos no ponto mais baixo antes de subir."},squat_bodyweight:{id:"squat_bodyweight",name:"Agachamento Livre Calistênico Profundo",category:"Pernas",sets:3,repsOrDuration:"15 a 20 repetições",restSeconds:45,poseType:"squat",muscles:{primary:["Quadríceps","Glúteos"],secondary:["Isquiotibiais","Panturrilhas","Core"]},instructions:["Pés na largura dos ombros, pontas ligeiramente apontadas para fora.","Jogue o quadril para trás e flexione os joelhos como se fosse sentar em uma cadeira baixa.","Desça até passar a linha de 90 graus (profundidade recruta mais glúteos).","Suba mantendo os calcanhares colados no chão e estenda o quadril."],keyCues:["Peito aberto e coluna neutra o tempo todo"],breathing:"Inspire na descida; expire na subida.",commonMistakes:["Elevar os calcanhares do chão"],regression:"Agachar até tocar um banco/cadeira e levantar.",progression:"Agachamento com salto (Jump Squat) para queima calórica extra."},wall_sit:{id:"wall_sit",name:"Cadeira Isométrica na Parede (Wall Sit)",category:"Pernas",sets:3,repsOrDuration:"35 a 50 segundos",restSeconds:40,poseType:"wall_sit",muscles:{primary:["Quadríceps","Glúteos (Estabilização)"],secondary:["Panturrilhas","Core"]},instructions:["Encoste as costas totalmente apoiadas em uma parede lisa.","Deslize até que suas coxas fiquem perfeitamente paralelas ao chão (joelhos a 90 graus).","Mantenha as mãos relaxadas na parede ou cruzadas no peito (não apoie nas coxas).","Segure a posição com respiração calma."],keyCues:["Queima metabólica profunda e fortalecimento de tendões dos joelhos"],breathing:"Respirações lentas e profundas.",commonMistakes:["Apoiar as mãos nos joelhos para aliviar o peso"],regression:"Descer menos (ângulo de 110-120° nos joelhos).",progression:"Tirar alternadamente um pé do chão por 3 segundos."},side_plank:{id:"side_plank",name:"Prancha Lateral (Cintura Fina & Glúteo Médio)",category:"Abdômen & Core",sets:3,repsOrDuration:"25 a 35 segundos cada lado",restSeconds:35,poseType:"side_plank",muscles:{primary:["Oblíquos","Quadrado Lombar"],secondary:["Glúteo Médio","Serrátil"]},instructions:["Deite-se de lado, apoiando o antebraço no chão sob o ombro.","Estenda o corpo e eleve os quadris até formar uma linha reta da cabeça aos pés.","Mantenha o braço livre no quadril ou estendido para cima.","Segure sem deixar o quadril cair."],keyCues:["Excelente para desenhar a curva da cintura e estabilizar o quadril"],breathing:"Respiração ritmada e uniforme.",commonMistakes:["Deixar o quadril afundar em direção ao solo"],regression:"Apoiar o joelho de baixo no chão dobrado.",progression:"Elevar a perna de cima durante a prancha (Star Plank)."},superman:{id:"superman",name:"Super-Homem Isométrico (Lombar, Glúteos & Postura)",category:"Full Body",sets:3,repsOrDuration:"12 a 15 repetições com 2s no topo",restSeconds:35,poseType:"superman",muscles:{primary:["Eretores da Espinha (Lombar)","Glúteo Máximo"],secondary:["Posterior de Ombro","Trapézio"]},instructions:["Deite-se de bruços com os braços esticados à frente e pernas retas.","Eleve simultaneamente o peito, os braços e as coxas do chão.","Aperte a lombar e os glúteos no ponto mais alto por 2 segundos.","Desça de volta ao solo com suavidade."],keyCues:["Corrige a postura, compensa o tempo sentado e fortalece a cadeia posterior"],breathing:"Expire ao elevar o corpo; inspire ao retornar ao chão.",commonMistakes:["Jogar a cabeça bruscamente para trás (mantenha olhar para o chão)"],regression:"Elevar apenas os braços ou apenas as pernas.",progression:"Segurar no topo e simular o movimento de nadar com os braços."},flutter_kicks:{id:"flutter_kicks",name:"Tesoura / Flutter Kicks (Abdômen Inferior & Coxas)",category:"Abdômen & Core",sets:3,repsOrDuration:"30 a 45 segundos",restSeconds:35,poseType:"flutter_kicks",muscles:{primary:["Reto Abdominal Inferior","Flexores do Quadril"],secondary:["Quadríceps","Core Estabilizador"]},instructions:["Deite-se de costas com as mãos sob o quadril e a lombar colada ao solo.","Eleve os ombros ligeiramente e tire os calcanhares cerca de 15 cm do chão.","Faça movimentos curtos e rápidos de tesoura para cima e para baixo com as pernas retas."],keyCues:["Mantenha as pernas esticadas e pontas dos pés ativas"],breathing:"Respiração constante.",commonMistakes:["Dobrar muito os joelhos ou arquear a lombar"],regression:"Elevar as pernas um pouco mais alto (ângulo maior).",progression:"Manter as mãos estendidas atrás da cabeça."},calf_raises:{id:"calf_raises",name:"Elevação de Panturrilhas Calistênica",category:"Pernas",sets:3,repsOrDuration:"20 a 25 repetições",restSeconds:30,poseType:"calf_raises",muscles:{primary:["Gastrocnêmio","Sóleo (Panturrilhas)"],secondary:["Estabilizadores do Tornozelo"]},instructions:["Em pé com as mãos apoiadas em uma parede para equilíbrio.","Empurre o chão com as pontas dos pés elevando os calcanhares o mais alto possível.","Segure 1 segundo no topo sentindo a panturrilha queimar.","Desça lentamente controlando o peso do corpo."],keyCues:["Melhora o retorno venoso, queima calórica e circulação para a caminhada diária"],breathing:"Expire na subida; inspire na descida.",commonMistakes:["Fazer o movimento rápido e quicando"],regression:"Fazer sentado.",progression:"Elevação de panturrilha unilateral (em um pé só)."}},_f={male:{gender:"male",name:"Homem (1,75m | 86kg)",height:1.75,weight:86,focus:"Definição Abdominal & Hipertrofia do Peitoral",focusSubtext:"Queima de gordura visceral/subcutânea e construção de peito e core rígidos com calistenia progressiva.",dailyWorkoutMinutes:30,dailyWalkMinutes:15,waterTargetLiters:3.2,waterTargetGlasses:10,primaryColor:"indigo",accentColor:"blue"},female:{gender:"female",name:"Mulher (1,53m | 62kg)",height:1.53,weight:62,focus:"Hipertrofia de Glúteos (Bumbum) & Cintura Fina",focusSubtext:"Ativação biomecânica e escultura tridimensional de glúteos e pernas com abdômen tonificado.",dailyWorkoutMinutes:30,dailyWalkMinutes:15,waterTargetLiters:2.3,waterTargetGlasses:8,primaryColor:"rose",accentColor:"amber"}},py=[{day:1,week:1,title:"Despertar do Peitoral & Core",focusArea:"Peito Médio, Reto Abdominal & Isometria",tagline:"Primeiro dia do desafio: estabeleça a conexão neural com seu peito e abdômen.",warmupTimeMinutes:4,warmupExercises:["Rotação de braços 360° (30s)","Gato-Camelo no solo (1 min)","Polichinelos suaves (1 min)"],exercises:[W.pushup_standard,W.plank_hold,W.pushup_incline,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de peitoral na parede (1 min)","Alongamento cobra para abdômen (1 min)"],estimatedCalories:280,walkGoalMinutes:15,walkTip:"Faça os 15 min de caminhada em ritmo moderado logo após o treino ou no final da tarde.",calisthenicsTip:"Na flexão, não deixe o cotovelo passar de 45° em relação ao tronco. Isso preserva os ombros para os 86kg."},{day:2,week:1,title:"Densidade Abdominal & Tríceps",focusArea:"Abdômen Inferior, Hollow Body & Peito Inferior",tagline:"Ativando a parede abdominal profunda e esculpindo a base do peito.",warmupTimeMinutes:4,warmupExercises:["Alongamento dinâmico de ombros","Elevação de joelhos no lugar (1 min)"],exercises:[W.hollow_body,W.chair_dips,W.leg_raises,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Postura da criança (Child pose)","Alongamento de tríceps acima da cabeça"],estimatedCalories:260,walkGoalMinutes:15,walkTip:"Mantenha os passos firmes e postura ereta, balançando os braços ritmadamente.",calisthenicsTip:"No Hollow Body, a lombar deve estar 100% colada no chão. Se descolar, dobre levemente os joelhos."},{day:3,week:1,title:"Pico de Peito Superior & Queima Metabólica",focusArea:"Peitoral Clavicular, Oblíquos & Cardio Calistênico",tagline:"Flexões declinadas para desenhar a parte alta do peitoral e queimar gordura visceral.",warmupTimeMinutes:4,warmupExercises:["Balanço de braços cruzados","Corrida estacionária leve (1 min)"],exercises:[W.pushup_decline,W.mountain_climber,W.pushup_standard,W.plank_hold],cooldownTimeMinutes:3,cooldownExercises:["Abertura de caixa torácica com mãos nas costas","Respiração diafragmática profunda"],estimatedCalories:300,walkGoalMinutes:15,walkTip:"15 minutos de caminhada ao ar livre ou esteira; respire pelo nariz para melhorar o consumo de oxigênio.",calisthenicsTip:"A flexão declinada transfere maior proporção do seu peso corporal (86kg) para o peitoral superior."},{day:4,week:1,title:"Recuperação Ativa & Mobilidade de Cadeia Anterior",focusArea:"Core Profundo, Postura & Alongamento Dinâmico",tagline:"Dia de restaurar tendões, desinflamar as articulações e manter o gasto calórico ativo.",warmupTimeMinutes:5,warmupExercises:["Círculos de quadril","Rotação torácica em 4 apoios","Balanço de pernas"],exercises:[W.superman,W.plank_hold,W.side_plank,W.calf_raises],cooldownTimeMinutes:4,cooldownExercises:["Alongamento de flexores de quadril","Torção de coluna no solo"],estimatedCalories:210,walkGoalMinutes:15,walkTip:"Caminhada regenerativa: aproveite para escutar um podcast ou música animada.",calisthenicsTip:"O descanso ativo com caminhada e pranchas leves acelera o fluxo sanguíneo e a síntese proteica."},{day:5,week:1,title:"Explosão de Peitoral & Miolo do Peito",focusArea:"Flexão Diamante, Mergulho & Queima Abdominal",tagline:"Trabalhando a densidade no centro do tórax e a linha de separação muscular.",warmupTimeMinutes:4,warmupExercises:["Rotação de punhos e cotovelos","Abertura escapular","Prancha alta dinâmica"],exercises:[W.pushup_diamond,W.leg_raises,W.chair_dips,W.flutter_kicks],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de peitoral com braço em L na parede","Relaxamento lombar"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"Complete a caminhada após o jantar para diminuir o pico glicêmico e otimizar a lipólise noturna.",calisthenicsTip:"Na flexão diamante, foque em espremer o miolo do peito no topo como se quisesse juntar as mãos."},{day:6,week:1,title:"Circuito 30 Min: Peito Blindado & Core Trincado",focusArea:"Volume Combinado Peito + Core Total",tagline:"Consolidando a primeira semana com um circuito calistênico de alta intensidade.",warmupTimeMinutes:4,warmupExercises:["Jumping jacks (polichinelos)","Giro de tronco","Flexão isométrica sustentada 10s"],exercises:[W.pushup_standard,W.bicycle_crunches,W.pushup_decline,W.hollow_body],cooldownTimeMinutes:3,cooldownExercises:["Postura do cão olhando para baixo","Alongamento frontal do tronco"],estimatedCalories:310,walkGoalMinutes:15,walkTip:"Caminhada com ritmo acelerado (passada rápida de 5 a 6 km/h).",calisthenicsTip:"Cadência: controle 2 segundos na descida de cada flexão para maximizar o tempo sob tensão."},{day:7,week:1,title:"Check-in Semanal & Supercompensação Core",focusArea:"Resistência Isométrica, Linha Abdominal & Postura",tagline:"Parabéns pelos primeiros 7 dias! Seu corpo já adaptou a resposta neuromuscular.",warmupTimeMinutes:5,warmupExercises:["Mobilidade articular completa","Respiração diafragmática ativa"],exercises:[W.plank_hold,W.pushup_incline,W.superman,W.mountain_climber],cooldownTimeMinutes:4,cooldownExercises:["Alongamento total do corpo","Relaxamento guiado"],estimatedCalories:240,walkGoalMinutes:15,walkTip:"Caminhada reflexiva: note como sua respiração e disposição já melhoraram nesta primeira semana.",calisthenicsTip:"Beba seus 3.2L de água hoje para acelerar a eliminação de toxinas e retenção hídrica."},{day:8,week:2,title:"Aumento de Tensão: Peito Largo & V-Taper",focusArea:"Peito Completo (Plano + Declinado) & Serrátil",tagline:"Semana 2: aumentando o volume para provocar hipertrofia de peito no peso corporal.",warmupTimeMinutes:4,warmupExercises:["Rotação de ombros com toalha","Prancha toque nos ombros (1 min)"],exercises:[W.pushup_decline,W.pushup_standard,W.hollow_body,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento peitoral em porta","Cobra stretch"],estimatedCalories:310,walkGoalMinutes:15,walkTip:"15 minutos de caminhada contínua com subidas leves se possível.",calisthenicsTip:"Concentre a força nos polegares e indicadores ao empurrar o chão para maior ativação do peitoral."},{day:9,week:2,title:"Esculpir o Abdômen Inferior & Miolo",focusArea:"Infra Abdominal, Flexão Diamante & Tríceps",tagline:"Atacando a gordura da linha da cintura e fortalecendo os braços.",warmupTimeMinutes:4,warmupExercises:["Elevação de joelhos","Giro torácico dinâmico"],exercises:[W.leg_raises,W.pushup_diamond,W.chair_dips,W.flutter_kicks],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de punhos e antebraços","Child pose"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"Caminhada diária: mantenha o abdômen suavemente ativo durante as passadas.",calisthenicsTip:"Na elevação de pernas, não deixe os calcanhares encostarem no chão entre as repetições."},{day:10,week:2,title:"Foco Peitoral Superior & Isometria Lateral",focusArea:"Peito Alto, Oblíquos & Prancha Lateral",tagline:"Criando a ilusão de ombros largos e cintura mais fina.",warmupTimeMinutes:4,warmupExercises:["Polichinelo frontal","Círculos escapulares"],exercises:[W.pushup_decline,W.side_plank,W.bicycle_crunches,W.pushup_incline],cooldownTimeMinutes:3,cooldownExercises:["Alongamento lateral de tronco","Abertura peitoral"],estimatedCalories:285,walkGoalMinutes:15,walkTip:"Caminhada revigorante matinal ou noturna para manter o metabolismo acelerado.",calisthenicsTip:"Na prancha lateral, mantenha o quadril alto sem deixar afundar."},{day:11,week:2,title:"Recuperação Estrutural & Cadeia Posterior",focusArea:"Lombar, Postura & Estabilizadores",tagline:"Equilibrando as forças do corpo para prevenir lesões e sustentar peitorais fortes.",warmupTimeMinutes:5,warmupExercises:["Rotação de tornozelos e joelhos","Alongamento dinâmico de peito"],exercises:[W.superman,W.plank_hold,W.calf_raises,W.squat_bodyweight],cooldownTimeMinutes:4,cooldownExercises:["Alongamento lombar","Postura da pomba suave"],estimatedCalories:230,walkGoalMinutes:15,walkTip:"Aproveite a caminhada de 15 minutos para fazer respirações profundas e desestressar.",calisthenicsTip:"O Super-Homem compensa a postura curvada do trabalho e prepara sua coluna para flexões pesadas."},{day:12,week:2,title:"Densidade Máxima: Tri-Set de Peito",focusArea:"Peito Superior + Plano + Tríceps",tagline:"Estímulo de hipertrofia por acúmulo de metabólitos no peitoral.",warmupTimeMinutes:4,warmupExercises:["Arm swings","Prancha alta para baixa"],exercises:[W.pushup_decline,W.pushup_standard,W.pushup_diamond,W.hollow_body],cooldownTimeMinutes:3,cooldownExercises:["Alongamento peitoral bilateral","Cobra stretch"],estimatedCalories:320,walkGoalMinutes:15,walkTip:"Caminhada diária de 15 min: queima a gordura liberada durante o treino de força.",calisthenicsTip:"Se falhar na flexão tradicional, continue completando as repetições apoiando os joelhos."},{day:13,week:2,title:"Circuito queima Gordura Abdominal",focusArea:"Core 360° + Mountain Climbers + Mergulho",tagline:"Atacando os 4 quadrantes abdominais para afinar a linha da cintura.",warmupTimeMinutes:4,warmupExercises:["Elevação de joelhos dinâmica","Polichinelos"],exercises:[W.mountain_climber,W.chair_dips,W.leg_raises,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de flexores de quadril","Relaxamento"],estimatedCalories:300,walkGoalMinutes:15,walkTip:"Mantenha o ritmo de caminhada constante e vigoroso durante todos os 15 minutos.",calisthenicsTip:"Gire o tronco nos abdominais bicicleta, não puxe a cabeça com os braços."},{day:14,week:2,title:"Metade do Desafio! O Teste de Força",focusArea:"Consolidação de Força e Resistência",tagline:"14 dias concluídos! Metade da sua transformação física já é realidade visível no espelho.",warmupTimeMinutes:5,warmupExercises:["Mobilidade total","Prancha ativa 30s"],exercises:[W.pushup_standard,W.plank_hold,W.pushup_decline,W.hollow_body],cooldownTimeMinutes:4,cooldownExercises:["Alongamento completo","Celebração da metade da jornada"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: sinta o aumento de tônus muscular nas pernas e abdômen.",calisthenicsTip:"Compare suas repetições de hoje com as do Dia 1 — você sentirá a flexão muito mais leve!"},{day:15,week:3,title:"Fase de Escultura: Peitoral Definido",focusArea:"Peitoral Superior, Isometria e Flexões com Pausa",tagline:"Semana 3: entrando na zona de máxima queima de gordura e lapidação muscular.",warmupTimeMinutes:4,warmupExercises:["Rotação de braços rápida","Prancha alta"],exercises:[W.pushup_decline,W.pushup_diamond,W.plank_hold,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento peitoral avançado","Torção de tronco"],estimatedCalories:310,walkGoalMinutes:15,walkTip:"Caminhada diária: tente dar passadas mais largas para ativar glúteos e queimar mais calorias.",calisthenicsTip:"Segure 1 segundo no ponto mais baixo da flexão antes de empurrar o chão."},{day:16,week:3,title:"Abdômen V-Cut & Parede Rígida",focusArea:"Oblíquos Inferiores, Hollow Body & Leg Raises",tagline:"Desenhando as linhas laterais do abdômen e aprofundando o six-pack.",warmupTimeMinutes:4,warmupExercises:["Giro de quadril","Polichinelos cruzados"],exercises:[W.hollow_body,W.leg_raises,W.bicycle_crunches,W.side_plank],cooldownTimeMinutes:3,cooldownExercises:["Cobra stretch","Child pose"],estimatedCalories:280,walkGoalMinutes:15,walkTip:"Caminhada de 15 minutos: mantenha a postura de peito aberto.",calisthenicsTip:"No Hollow Body, aponte a ponta dos pés para a frente e aperte os quadríceps."},{day:17,week:3,title:"Circuito Explosivo: Peito & Cardio Core",focusArea:"Peitoral Padrão + Mergulho + Climbers",tagline:"Elevando o gasto calórico para queimar a gordura que cobre o abdômen.",warmupTimeMinutes:4,warmupExercises:["Arm circles","Corrida estacionária alta"],exercises:[W.pushup_standard,W.chair_dips,W.mountain_climber,W.flutter_kicks],cooldownTimeMinutes:3,cooldownExercises:["Alongamento peitoral e de ombros","Respiração diafragmática"],estimatedCalories:320,walkGoalMinutes:15,walkTip:"15 minutos de caminhada logo após o treino prolongam a queima de gordura (EPOC).",calisthenicsTip:"Empurre a cadeira/banco até o travamento suave dos cotovelos sem hiperextensão forçada."},{day:18,week:3,title:"Recuperação & Alinhamento Biomecânico",focusArea:"Lombar, Serrátil & Mobilidade",tagline:"Prevenindo compensações e mantendo a taxa metabólica basal elevada.",warmupTimeMinutes:5,warmupExercises:["Alongamentos dinâmicos de corpo inteiro","Gato-Camelo"],exercises:[W.superman,W.plank_hold,W.squat_bodyweight,W.calf_raises],cooldownTimeMinutes:4,cooldownExercises:["Alongamento de cadeia posterior","Relaxamento"],estimatedCalories:220,walkGoalMinutes:15,walkTip:"Caminhada tranquila para descompressão e queima lipídica contínua.",calisthenicsTip:"O agachamento com peso do corpo mantém a produção natural de hormônios anabólicos."},{day:19,week:3,title:"Super-Série de Peito: Superior + Médio",focusArea:"Flexão Declinada + Flexão Clássica + Hollow Rocks",tagline:"Estimulando todas as porções musculares do peitoral com sobrecarga calistênica.",warmupTimeMinutes:4,warmupExercises:["Prancha rápida com toque no peito","Rotação articular"],exercises:[W.pushup_decline,W.pushup_standard,W.hollow_body,W.leg_raises],cooldownTimeMinutes:3,cooldownExercises:["Alongamento em portal","Cobra pose"],estimatedCalories:310,walkGoalMinutes:15,walkTip:"15 minutos de caminhada ao ar livre: vitamina D e gasto calórico.",calisthenicsTip:"Na descida da flexão declinada, sinta o peito alongar ao máximo antes de subir."},{day:20,week:3,title:"Core de Aço & Linha de Separação Peitoral",focusArea:"Flexão Diamante, Mergulho & Pranchas Combinadas",tagline:"Desenhando os contornos e endurecendo o abdômen transverso.",warmupTimeMinutes:4,warmupExercises:["Jumping jacks","Alongamento dinâmico de punhos"],exercises:[W.pushup_diamond,W.chair_dips,W.side_plank,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de tríceps e peitoral","Child pose"],estimatedCalories:295,walkGoalMinutes:15,walkTip:"Caminhada contínua: aproveite para monitorar sua contagem de passos.",calisthenicsTip:"Nos abdominais bicicleta, busque encostar o ombro na direção do joelho oposto com controle."},{day:21,week:3,title:"Fim da Semana 3: Consistência de Ferro",focusArea:"Circuito 30 Minutos Total Peito + Abdômen",tagline:"Você atingiu 3 semanas ininterruptas! Sua força e resistência estão no topo.",warmupTimeMinutes:5,warmupExercises:["Mobilidade geral","Corrida no lugar"],exercises:[W.pushup_standard,W.mountain_climber,W.plank_hold,W.pushup_incline],cooldownTimeMinutes:4,cooldownExercises:["Alongamento de peitoral e flexores","Respiração profunda"],estimatedCalories:300,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: seu corpo já queima calorias com muito mais eficiência.",calisthenicsTip:"Beba 3.2L de água hoje e priorize proteínas magras para recuperação muscular."},{day:22,week:4,title:"A Reta Final: Peito Esculpido",focusArea:"Peito Declinado + Diamante + Core Intenso",tagline:"Semana 4: máxima densidade e queima para fechar os 28 dias no ápice.",warmupTimeMinutes:4,warmupExercises:["Rotação de braços veloz","Prancha alta"],exercises:[W.pushup_decline,W.pushup_diamond,W.hollow_body,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento profundo de peitoral","Cobra pose"],estimatedCalories:325,walkGoalMinutes:15,walkTip:"15 minutos de caminhada acelerada com passos firmes.",calisthenicsTip:"Dê o seu melhor em cada repetição: estamos na última semana do desafio!"},{day:23,week:4,title:"Abdômen Chapado & Densidade Tríceps",focusArea:"Reto Abdominal Completo, Mergulho & Oblíquos",tagline:"Secando a gordura superficial e tonificando a musculatura central.",warmupTimeMinutes:4,warmupExercises:["Elevação de joelhos rápida","Giro torácico"],exercises:[W.chair_dips,W.leg_raises,W.bicycle_crunches,W.flutter_kicks],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de tríceps","Postura da criança"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"Caminhada diária: excelente para oxigenar os músculos fadigados.",calisthenicsTip:"Na elevação de pernas, use 3 segundos inteiros na descida."},{day:24,week:4,title:"Volume Superior: Peito Clavicular & Prancha Blindada",focusArea:"Peito Alto + Isometria de 50s",tagline:"Construindo a porção clavicular do peitoral que destaca na camiseta.",warmupTimeMinutes:4,warmupExercises:["Arm swings","Prancha toque nos pés"],exercises:[W.pushup_decline,W.plank_hold,W.pushup_standard,W.side_plank],cooldownTimeMinutes:3,cooldownExercises:["Abertura de peitoral na parede","Alongamento lombar"],estimatedCalories:310,walkGoalMinutes:15,walkTip:"15 minutos de caminhada contínua sem pausas.",calisthenicsTip:"Ao fazer a prancha de 50s, aperte os glúteos para travar a pelve."},{day:25,week:4,title:"Recuperação Estratégica & Fortalecimento Dorsal",focusArea:"Cadeia Posterior, Postura e Queima Metabólica",tagline:"Preparando o corpo para os últimos 3 dias de potência máxima.",warmupTimeMinutes:5,warmupExercises:["Alongamento dinâmico","Mobilidade articular"],exercises:[W.superman,W.plank_hold,W.squat_bodyweight,W.calf_raises],cooldownTimeMinutes:4,cooldownExercises:["Alongamento de coluna","Respiração diafragmática"],estimatedCalories:230,walkGoalMinutes:15,walkTip:"Caminhada relaxante para restaurar os níveis de cortisol.",calisthenicsTip:"A postura ereta realça o peitoral e recolhe a linha abdominal."},{day:26,week:4,title:"Circuito Mestre: O Teste Supremo de Peito",focusArea:"Todas as variações de flexão em super-circuito",tagline:"Você está a apenas 3 dias da vitória completa!",warmupTimeMinutes:4,warmupExercises:["Polichinelos","Flexão isométrica 10s","Rotação articular"],exercises:[W.pushup_decline,W.pushup_standard,W.pushup_diamond,W.pushup_incline],cooldownTimeMinutes:3,cooldownExercises:["Alongamento completo de peitoral e ombros","Cobra pose"],estimatedCalories:330,walkGoalMinutes:15,walkTip:"15 minutos de caminhada com energia máxima.",calisthenicsTip:"Sinta o pump muscular no peitoral e nos tríceps. Sua força calistênica evoluiu expressivamente."},{day:27,week:4,title:"Core Extremo: Escultura Abdominal Final",focusArea:"Hollow Body, Leg Raises, Bicicleta & Climbers",tagline:"Queima total dos 4 quadrantes abdominais no penúltimo dia.",warmupTimeMinutes:4,warmupExercises:["Jumping jacks","Prancha rápida"],exercises:[W.hollow_body,W.leg_raises,W.bicycle_crunches,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento frontal de abdômen","Child pose"],estimatedCalories:300,walkGoalMinutes:15,walkTip:"Caminhada diária de 15 minutos: mantenha o ritmo sem parar.",calisthenicsTip:"Aperte a parede abdominal a cada expiração nos exercícios."},{day:28,week:4,title:"O Grande Final: 28 Dias Vencidos!",focusArea:"Consagração Calistênica Total Peito & Abdômen",tagline:"28 dias ininterruptos de calistenia e caminhada! Sua disciplina transformou seu físico.",warmupTimeMinutes:5,warmupExercises:["Mobilidade e celebração","Polichinelo dinâmico"],exercises:[W.pushup_standard,W.pushup_decline,W.plank_hold,W.hollow_body],cooldownTimeMinutes:5,cooldownExercises:["Alongamento geral","Momento de orgulho e gratidão"],estimatedCalories:340,walkGoalMinutes:15,walkTip:"Última caminhada de 15 min do desafio: celebre cada passo da sua jornada de 28 dias!",calisthenicsTip:"Você construiu um hábito inquebrável, perdeu gordura, fortaleceu o peito e definiu a barriga!"}],my=[{day:1,week:1,title:"Ativação & Despertar dos Glúteos",focusArea:"Ponte de Glúteos, Coice 4 Apoios & Agachamento Sumô",tagline:"Primeiro dia: acordando as fibras do glúteo máximo e médio para bumbum firme.",warmupTimeMinutes:4,warmupExercises:["Círculos de quadril em pé","Ponte isométrica suave 30s","Polichinelos leves"],exercises:[W.glute_bridge,W.donkey_kicks,W.sumo_squat,W.plank_hold],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de glúteos no chão (postura do 4)","Postura da criança"],estimatedCalories:260,walkGoalMinutes:15,walkTip:"15 minutos de caminhada em ritmo confortável; excelente para o retorno venoso nas pernas.",calisthenicsTip:"Na ponte de glúteos, empurre o chão com os calcanhares e aperte o bumbum por 2 segundos no topo."},{day:2,week:1,title:"Laterais do Quadril & Cintura Fina",focusArea:"Fire Hydrant (Glúteo Médio), Prancha Lateral & Core",tagline:"Desenhando a curvatura lateral do quadril e afinando a cintura.",warmupTimeMinutes:4,warmupExercises:["Balanço lateral de pernas","Alongamento dinâmico de adutores"],exercises:[W.fire_hydrant,W.side_plank,W.bicycle_crunches,W.squat_bodyweight],cooldownTimeMinutes:3,cooldownExercises:["Alongamento lateral de tronco","Alongamento de quadríceps em pé"],estimatedCalories:250,walkGoalMinutes:15,walkTip:"Caminhada diária: mantenha a postura elegante, peito aberto e passos firmes.",calisthenicsTip:"No Fire Hydrant, não torça a coluna: isole o movimento puramente no quadril lateral."},{day:3,week:1,title:"Hipertrofia Glútea: O Agachamento Búlgaro",focusArea:"Glúteo sob Alongamento, Elevação Pélvica & Parede",tagline:"O exercício mais potente para empinar o bumbum sem precisar de pesos de academia.",warmupTimeMinutes:4,warmupExercises:["Afundo suave alternado","Ponte dinâmica"],exercises:[W.bulgarian_split,W.glute_bridge,W.wall_sit,W.superman],cooldownTimeMinutes:3,cooldownExercises:["Alongamento profundo de glúteo e psoas","Relaxamento lombar"],estimatedCalories:280,walkGoalMinutes:15,walkTip:"15 minutos de caminhada após o treino ajudam a eliminar o ácido lático e recuperar os glúteos.",calisthenicsTip:"No búlgaro, incline o tronco 15° para a frente para jogar 80% do trabalho no bumbum."},{day:4,week:1,title:"Recuperação Ativa & Abdômen Tonificado",focusArea:"Hollow Body, Flutter Kicks & Panturrilhas",tagline:"Dia regenerativo para os glúteos enquanto esculpimos a parede abdominal.",warmupTimeMinutes:5,warmupExercises:["Gato-Camelo","Rotação de tornozelos","Círculos pélvicos"],exercises:[W.hollow_body,W.flutter_kicks,W.calf_raises,W.plank_hold],cooldownTimeMinutes:4,cooldownExercises:["Alongamento de panturrilhas na parede","Cobra stretch para abdômen"],estimatedCalories:200,walkGoalMinutes:15,walkTip:"A caminhada de 15 minutos hoje é o seu principal cardio queimador de gordura.",calisthenicsTip:"Mantenha a lombar colada ao solo no Hollow Body para fortalecer o transverso do abdômen."},{day:5,week:1,title:"Pico de Contração & Queima Glútea",focusArea:"Ponte Unilateral, Coice no Solo & Sumô",tagline:"Isolamento muscular intenso para arredondar o topo e a base do glúteo.",warmupTimeMinutes:4,warmupExercises:["Ponte com os dois pés","Elevação de joelho em pé"],exercises:[W.single_leg_bridge,W.donkey_kicks,W.sumo_squat,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de glúteo em quatro apoios","Child pose"],estimatedCalories:275,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: aproveite o ar livre para renovar as energias.",calisthenicsTip:"Na ponte unilateral, empurre o calcanhar com força e segure 1s no topo de cada repetição."},{day:6,week:1,title:"Circuito 30 Min: Bumbum na Nuca & Core",focusArea:"Búlgaro + Fire Hydrant + Bicicleta + Sumô",tagline:"Fechando a primeira semana com um super circuito de tonificação inferior.",warmupTimeMinutes:4,warmupExercises:["Polichinelos","Agachamentos suaves","Balanço de pernas"],exercises:[W.bulgarian_split,W.fire_hydrant,W.bicycle_crunches,W.sumo_squat],cooldownTimeMinutes:3,cooldownExercises:["Alongamento borboleta para adutores","Alongamento de glúteo"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"Caminhada de 15 minutos em ritmo moderado a rápido.",calisthenicsTip:"No agachamento sumô, empurre os joelhos para fora na mesma direção dos dedos dos pés."},{day:7,week:1,title:"Check-in Semanal & Postura Esculpida",focusArea:"Glúteos Isométricos, Lombar & Pranchas",tagline:"7 dias completos! Sua conexão mente-glúteo já está visivelmente mais potente.",warmupTimeMinutes:5,warmupExercises:["Mobilidade de quadril","Respiração diafragmática"],exercises:[W.glute_bridge,W.superman,W.side_plank,W.wall_sit],cooldownTimeMinutes:4,cooldownExercises:["Alongamento corporal total","Relaxamento guiado"],estimatedCalories:230,walkGoalMinutes:15,walkTip:"Caminhada de 15 min: observe como suas pernas estão mais firmes e a disposição maior.",calisthenicsTip:"Beba seus 2.3L de água hoje para auxiliar na queima de gordura e na elasticidade da pele."},{day:8,week:2,title:"Glúteo Máximo: Volume & Tensão",focusArea:"Búlgaro + Elevação Pélvica com Pausa de 3s",tagline:"Semana 2: aumentando o tempo sob tensão para estimular novas fibras musculares.",warmupTimeMinutes:4,warmupExercises:["Ponte bipodal dinâmica","Alongamento dinâmico de posteriores"],exercises:[W.bulgarian_split,W.glute_bridge,W.donkey_kicks,W.plank_hold],cooldownTimeMinutes:3,cooldownExercises:["Alongamento postura do 4","Child pose"],estimatedCalories:285,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: mantenha os glúteos ligeiramente contraídos a cada passada.",calisthenicsTip:"No topo da ponte de glúteos, conte até 3 mentalmente antes de descer."},{day:9,week:2,title:"Curvatura Lateral & Cintura Fina",focusArea:"Fire Hydrant + Ponte Unilateral + Prancha Lateral",tagline:"Preenchendo a lateral do bumbum e reduzindo medidas na linha da cintura.",warmupTimeMinutes:4,warmupExercises:["Balanço de pernas lateral","Elevação de joelho"],exercises:[W.fire_hydrant,W.single_leg_bridge,W.side_plank,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de adutores","Alongamento lateral de tronco"],estimatedCalories:270,walkGoalMinutes:15,walkTip:"15 minutos de caminhada contínua; respire pelo nariz e solte pela boca.",calisthenicsTip:"Na ponte unilateral, sinta o glúteo queimar intensamente na subida."},{day:10,week:2,title:"Coxas Firmes & Glúteo Profundo",focusArea:"Sumô com Pulsos + Wall Sit + Coice no Solo",tagline:"Trabalhando a união entre coxa e bumbum para empinar e definir.",warmupTimeMinutes:4,warmupExercises:["Agachamento leve","Círculos pélvicos"],exercises:[W.sumo_squat,W.wall_sit,W.donkey_kicks,W.superman],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de quadríceps e glúteos","Postura da cobra"],estimatedCalories:280,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: excelente para tonificar as panturrilhas.",calisthenicsTip:"No Wall Sit, mantenha as costas inteiras apoiadas na parede sem apoiar as mãos nas pernas."},{day:11,week:2,title:"Recuperação dos Glúteos & Core Chapado",focusArea:"Hollow Body, Leg Raises & Panturrilhas",tagline:"Permitindo aos glúteos regenerarem enquanto fortalecemos o abdômen.",warmupTimeMinutes:5,warmupExercises:["Mobilidade de tornozelos","Alongamentos suaves"],exercises:[W.hollow_body,W.leg_raises,W.calf_raises,W.plank_hold],cooldownTimeMinutes:4,cooldownExercises:["Alongamento lombar","Child pose"],estimatedCalories:210,walkGoalMinutes:15,walkTip:"Caminhada diária: essencial para a queima calórica sem fadiga articular.",calisthenicsTip:"A elevação de panturrilha melhora a estética das pernas e a circulação linfática."},{day:12,week:2,title:"Tri-Set Glúteo Supremo: Búlgaro + Sumô + Ponte",focusArea:"Glúteo Tridimensional (Topo, Meio e Base)",tagline:"Estímulo de alta densidade para acelerar a hipertrofia glútea.",warmupTimeMinutes:4,warmupExercises:["Afundo curto","Ponte bipodal"],exercises:[W.bulgarian_split,W.sumo_squat,W.glute_bridge,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de flexores e glúteos","Relaxamento"],estimatedCalories:295,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: aproveite o efeito queima-gordura pós-treino.",calisthenicsTip:"Desça o búlgaro até o joelho quase encostar no chão para máximo alongamento do glúteo."},{day:13,week:2,title:"Escultura Lateral: Glúteo Médio & Cintura",focusArea:"Fire Hydrant + Coice + Prancha Lateral + Bicicleta",tagline:"Definindo os contornos da silhueta feminina.",warmupTimeMinutes:4,warmupExercises:["Polichinelos","Balanço de pernas"],exercises:[W.fire_hydrant,W.donkey_kicks,W.side_plank,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Alongamento borboleta","Postura do 4"],estimatedCalories:265,walkGoalMinutes:15,walkTip:"Caminhada de 15 minutos em ritmo constante.",calisthenicsTip:"No coice, imagine empurrar o teto com a sola do pé para isolar o glúteo máximo."},{day:14,week:2,title:"Metade do Desafio! O Grande Checkpoint",focusArea:"Avaliação de Força, Tônus e Resistência",tagline:"14 dias de disciplina! Seu bumbum está mais alto, firme e o abdômen mais rígido.",warmupTimeMinutes:5,warmupExercises:["Mobilidade completa","Ponte isométrica"],exercises:[W.glute_bridge,W.bulgarian_split,W.sumo_squat,W.plank_hold],cooldownTimeMinutes:4,cooldownExercises:["Alongamento completo","Comemoração dos 50% concluídos"],estimatedCalories:280,walkGoalMinutes:15,walkTip:"15 minutos de caminhada comemorativa: sinta o orgulho de sua consistência!",calisthenicsTip:"Você atingiu metade do desafio: a partir de agora a definição muscular se torna cada dia mais aparente."},{day:15,week:3,title:"Fase de Escultura: O Bumbum Redondo",focusArea:"Ponte Unilateral + Coice com Pulso + Búlgaro",tagline:"Semana 3: elevando o nível para remodelar a curvatura glútea.",warmupTimeMinutes:4,warmupExercises:["Ponte leve","Alongamento dinâmico"],exercises:[W.single_leg_bridge,W.donkey_kicks,W.bulgarian_split,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento profundo de glúteo","Postura da criança"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"15 minutos de caminhada diária: mantenha a respiração compassada.",calisthenicsTip:"Adicione 3 pulsos curtos no ponto mais alto do coice antes de descer a perna."},{day:16,week:3,title:"Cintura Marcada & Quadril Modelado",focusArea:"Fire Hydrant + Prancha Lateral + Hollow Body",tagline:"Desenhando a proporção perfeita entre cintura e quadril.",warmupTimeMinutes:4,warmupExercises:["Giro de tronco","Polichinelos cruzados"],exercises:[W.fire_hydrant,W.side_plank,W.hollow_body,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Alongamento lateral","Cobra stretch"],estimatedCalories:260,walkGoalMinutes:15,walkTip:"Caminhada diária: dê passos ágeis para aumentar o gasto de calorias.",calisthenicsTip:"Na prancha lateral, mantenha o corpo em linha reta sem deixar os quadris caírem."},{day:17,week:3,title:"Circuito Queima Total & Glúteos de Aço",focusArea:"Sumô + Wall Sit + Ponte + Mountain Climbers",tagline:"Combinação potente de hipertrofia muscular com queima lipídica.",warmupTimeMinutes:4,warmupExercises:["Corrida estacionária suave","Agachamento livre"],exercises:[W.sumo_squat,W.glute_bridge,W.wall_sit,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de quadríceps","Postura do 4"],estimatedCalories:295,walkGoalMinutes:15,walkTip:"15 minutos de caminhada logo após o treino prolongam a lipólise.",calisthenicsTip:"No agachamento sumô, contraia os glúteos com força máxima no topo."},{day:18,week:3,title:"Recuperação Estrutural & Postura de Deusa",focusArea:"Super-Mulher (Lombar & Glúteos), Panturrilhas & Core",tagline:"Alinhando a coluna para empinar a postura e realçar as curvas femininas.",warmupTimeMinutes:5,warmupExercises:["Alongamento dinâmico suave","Gato-Camelo"],exercises:[W.superman,W.plank_hold,W.calf_raises,W.flutter_kicks],cooldownTimeMinutes:4,cooldownExercises:["Alongamento de toda a coluna","Relaxamento"],estimatedCalories:215,walkGoalMinutes:15,walkTip:"Caminhada ao ar livre: excelente para diminuir o inchaço e relaxar.",calisthenicsTip:"O Super-Homem fortalece a lombar e a porção superior dos glúteos."},{day:19,week:3,title:"Foco Búlgaro & Elevação Pélvica Unilateral",focusArea:"Sobrecarga Unilateral Máxima para Glúteos",tagline:"Eliminando assimetrias e garantindo glúteos redondos e volumosos.",warmupTimeMinutes:4,warmupExercises:["Afundo curto","Ponte suave"],exercises:[W.bulgarian_split,W.single_leg_bridge,W.donkey_kicks,W.side_plank],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de glúteo e psoas","Child pose"],estimatedCalories:290,walkGoalMinutes:15,walkTip:"15 minutos de caminhada contínua em terreno plano ou leve inclinação.",calisthenicsTip:"Concentre-se em sentir o glúteo puxar a perna em cada movimento unilateral."},{day:20,week:3,title:"Laterais Firmes & Abdômen Rígido",focusArea:"Fire Hydrant + Coice + Abdominal Bicicleta + Leg Raises",tagline:"Lapidando cada centímetro do core e dos quadris.",warmupTimeMinutes:4,warmupExercises:["Jumping jacks","Balanço de pernas"],exercises:[W.fire_hydrant,W.donkey_kicks,W.bicycle_crunches,W.leg_raises],cooldownTimeMinutes:3,cooldownExercises:["Alongamento borboleta","Cobra pose"],estimatedCalories:270,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: mantenha os ombros relaxados e a respiração livre.",calisthenicsTip:"Não tenha pressa: o tempo sob tensão é o que constrói o tônus muscular."},{day:21,week:3,title:"Fim da Semana 3: Consistência Triunfante",focusArea:"Circuito 30 Minutos Total Glúteos & Core",tagline:"3 semanas inteiras concluídas! A transformação na sua autoestima e no seu corpo é real.",warmupTimeMinutes:5,warmupExercises:["Mobilidade global","Ponte rápida"],exercises:[W.glute_bridge,W.sumo_squat,W.bulgarian_split,W.plank_hold],cooldownTimeMinutes:4,cooldownExercises:["Alongamento completo","Celebração dos 21 dias"],estimatedCalories:295,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: seu corpo já queima calorias com extrema facilidade.",calisthenicsTip:"Beba 2.3L de água hoje para manter a hidratação e firmeza tecidual."},{day:22,week:4,title:"A Reta Final: Glúteos de Pedra",focusArea:"Búlgaro + Ponte Unilateral + Coice 4 Apoios",tagline:"Semana 4: os últimos 7 dias para consolidar o bumbum empinado e a cintura fina.",warmupTimeMinutes:4,warmupExercises:["Ponte bipodal","Alongamento dinâmico"],exercises:[W.bulgarian_split,W.single_leg_bridge,W.donkey_kicks,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento postura do 4","Child pose"],estimatedCalories:300,walkGoalMinutes:15,walkTip:"15 minutos de caminhada com energia e foco nos resultados.",calisthenicsTip:"Dê o seu melhor em cada repetição: estamos na semana final do desafio!"},{day:23,week:4,title:"Cintura Fina & Glúteo Lateral",focusArea:"Fire Hydrant + Prancha Lateral + Bicicleta + Sumô",tagline:"Desenhando a silhueta violão com calistenia precisa.",warmupTimeMinutes:4,warmupExercises:["Balanço lateral","Polichinelo"],exercises:[W.fire_hydrant,W.side_plank,W.sumo_squat,W.bicycle_crunches],cooldownTimeMinutes:3,cooldownExercises:["Alongamento lateral de tronco","Borboleta"],estimatedCalories:275,walkGoalMinutes:15,walkTip:"Caminhada diária: sinta a leveza nas pernas e o fôlego renovado.",calisthenicsTip:"No agachamento sumô, desça bem fundo para recrutar as fibras mais profundas do glúteo."},{day:24,week:4,title:"Isometria & Pico de Tensão Glútea",focusArea:"Ponte com Pausa de 3s + Wall Sit + Hollow Body",tagline:"Máximo tônus e firmeza muscular sem impacto prejudicial nas articulações.",warmupTimeMinutes:4,warmupExercises:["Ponte leve","Mobilidade articular"],exercises:[W.glute_bridge,W.wall_sit,W.hollow_body,W.superman],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de quadríceps e glúteos","Cobra pose"],estimatedCalories:265,walkGoalMinutes:15,walkTip:"15 minutos de caminhada: excelente para acelerar a queima de gordura.",calisthenicsTip:"No Hollow Body, expire todo o ar e sinta o abdômen afundar e travar."},{day:25,week:4,title:"Recuperação Estratégica & Fortalecimento de Pernas",focusArea:"Panturrilhas, Lombar, Mobilidade e Prancha",tagline:"Preparando o corpo para os 3 dias finais de glúteos absolutos.",warmupTimeMinutes:5,warmupExercises:["Alongamento suave","Gato-Camelo"],exercises:[W.superman,W.plank_hold,W.calf_raises,W.leg_raises],cooldownTimeMinutes:4,cooldownExercises:["Alongamento geral","Respiração diafragmática"],estimatedCalories:215,walkGoalMinutes:15,walkTip:"Caminhada relaxante para recuperar a musculatura.",calisthenicsTip:"A caminhada combinada com panturrilhas tonificadas deixa as pernas torneadas e esguias."},{day:26,week:4,title:"O Circuito de Ouro: Glúteos Esculpidos",focusArea:"Búlgaro + Sumô + Ponte Unilateral + Coice",tagline:"Você está a apenas 3 dias da linha de chegada!",warmupTimeMinutes:4,warmupExercises:["Polichinelo dinâmico","Afundo suave"],exercises:[W.bulgarian_split,W.sumo_squat,W.single_leg_bridge,W.donkey_kicks],cooldownTimeMinutes:3,cooldownExercises:["Alongamento de glúteos e adutores","Child pose"],estimatedCalories:305,walkGoalMinutes:15,walkTip:"15 minutos de caminhada com passadas firmes.",calisthenicsTip:"Sinta o pump glúteo: seu bumbum está mais empinado e firme do que nunca."},{day:27,week:4,title:"Cintura e Core Final: O Penúltimo Desafio",focusArea:"Fire Hydrant + Prancha Lateral + Bicicleta + Climbers",tagline:"Lapidação final das curvas e da definição abdominal.",warmupTimeMinutes:4,warmupExercises:["Jumping jacks","Balanço de pernas"],exercises:[W.fire_hydrant,W.side_plank,W.bicycle_crunches,W.mountain_climber],cooldownTimeMinutes:3,cooldownExercises:["Alongamento lateral de tronco","Cobra stretch"],estimatedCalories:280,walkGoalMinutes:15,walkTip:"Caminhada de 15 minutos: mantenha o ritmo sem parar.",calisthenicsTip:"Amanhã é o grande dia da coroação dos seus 28 dias!"},{day:28,week:4,title:"O Grande Final: 28 Dias Vencidos!",focusArea:"Consagração de Glúteos Firmes, Cintura Fina & Autoestima",tagline:"28 dias ininterruptos de treino e caminhada! Sua dedicação esculpiu um novo corpo e mente.",warmupTimeMinutes:5,warmupExercises:["Mobilidade e comemoração","Polichinelo"],exercises:[W.glute_bridge,W.bulgarian_split,W.fire_hydrant,W.plank_hold],cooldownTimeMinutes:5,cooldownExercises:["Alongamento corporal total","Momento de gratidão e orgulho"],estimatedCalories:320,walkGoalMinutes:15,walkTip:"Última caminhada de 15 min do desafio: celebre cada metro percorrido na sua nova versão!",calisthenicsTip:"Você provou a si mesma o poder da consistência diária: bumbum empinado, pernas firmes e core forte!"}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),ix=r=>{const e=xy(r);return e.charAt(0).toUpperCase()+e.slice(1)},u_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),_y=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=nt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>nt.createElement("svg",{ref:m,...vy,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:u_("lucide",l),...!c&&!_y(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,v])=>nt.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(r,e)=>{const i=nt.forwardRef(({className:s,...l},c)=>nt.createElement(by,{ref:c,iconNode:e,className:u_(`lucide-${gy(ix(r))}`,`lucide-${r}`,s),...l}));return i.displayName=ix(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],My=It("activity",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Ey=It("arrow-down-right",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Ay=It("arrow-up-right",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Cy=It("award",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ny=It("book-open",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],jc=It("bot",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ly=It("calendar",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],d_=It("chevron-right",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Iy=It("circle-alert",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gr=It("circle-check",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],th=It("circle",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],f_=It("clock",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],ax=It("droplets",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],h_=It("dumbbell",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vy=It("eye",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],p_=It("flame",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],nh=It("footprints",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],Wy=It("heart-handshake",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zy=It("info",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Qy=It("layers",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],tu=It("pause",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],tl=It("play",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tM=It("refresh-cw",eM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],m_=It("rotate-ccw",nM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],sx=It("rotate-cw",iM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],sM=It("search",aM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],oM=It("send",rM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],cM=It("skip-forward",lM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Zh=It("sparkles",uM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],rx=It("star",dM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],hM=It("timer",fM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],g_=It("trophy",pM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gM=It("user",mM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kh=It("x",xM),_M=({currentGender:r,onGenderChange:e,maleProfile:i,femaleProfile:s,activeTab:l,onTabChange:c,onOpenCoach:f,onStartGuidedWorkout:p,completedDaysCount:m})=>{const h=r==="male";return S.jsxs("header",{id:"main-app-header",className:"bg-white/95 backdrop-blur-xs border-b border-[#8fa38e]/15 sticky top-0 z-40",children:[S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 border-b border-[#8fa38e]/10 flex flex-col sm:flex-row items-center justify-between gap-2.5",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#8fa38e] text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-2xs",children:"28D"}),S.jsxs("div",{children:[S.jsx("span",{className:"font-extrabold text-sm sm:text-base text-[#3a3a38] tracking-tight block",children:"Desafio 28 Dias de Calistenia"}),S.jsx("span",{className:"text-[11px] text-[#6d6d6b] hidden sm:block",children:"Treino 30 min + Caminhada 15 min diários • Visualizador 3D & Mestre AI"})]})]}),S.jsxs("div",{className:"flex items-center p-1 bg-[#e5e1d8] rounded-full border border-[#d8d3c7] shadow-2xs",children:[S.jsxs("button",{id:"tab-profile-male",onClick:()=>e("male"),className:`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${h?"bg-white text-[#5c725b] shadow-xs":"text-[#6d6d6b] hover:text-[#3a3a38]"}`,children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#8fa38e]"}),S.jsx("span",{children:"Homem (1,75m | 86kg)"}),S.jsx("span",{className:"hidden md:inline text-[10px] text-[#5c725b] font-medium",children:"• Peito & Barriga"})]}),S.jsxs("button",{id:"tab-profile-female",onClick:()=>e("female"),className:`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${h?"text-[#6d6d6b] hover:text-[#3a3a38]":"bg-white text-[#8a7362] shadow-xs"}`,children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#c89f83]"}),S.jsx("span",{children:"Mulher (1,53m | 62kg)"}),S.jsx("span",{className:"hidden md:inline text-[10px] text-[#8a7362] font-medium",children:"• Glúteos & Cintura"})]})]})]}),S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3",children:[S.jsxs("nav",{className:"flex items-center gap-1 sm:gap-2",children:[S.jsxs("button",{id:"nav-tab-checklist",onClick:()=>c("checklist"),className:`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${l==="checklist"?h?"bg-[#eef3ed] text-[#5c725b] font-bold border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] font-bold border border-[#d9bba4]/50":"text-[#6d6d6b] hover:bg-[#fbfaf7] hover:text-[#3a3a38]"}`,children:[S.jsx(h_,{className:"w-4 h-4"}),S.jsx("span",{children:"Treino do Dia"})]}),S.jsxs("button",{id:"nav-tab-calendar",onClick:()=>c("calendar"),className:`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${l==="calendar"?h?"bg-[#eef3ed] text-[#5c725b] font-bold border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] font-bold border border-[#d9bba4]/50":"text-[#6d6d6b] hover:bg-[#fbfaf7] hover:text-[#3a3a38]"}`,children:[S.jsx(Ly,{className:"w-4 h-4"}),S.jsxs("span",{children:["28 Dias (",m,"/28)"]})]}),S.jsxs("button",{id:"nav-tab-exercises",onClick:()=>c("exercises"),className:`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${l==="exercises"?h?"bg-[#eef3ed] text-[#5c725b] font-bold border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] font-bold border border-[#d9bba4]/50":"text-[#6d6d6b] hover:bg-[#fbfaf7] hover:text-[#3a3a38]"}`,children:[S.jsx(Ny,{className:"w-4 h-4"}),S.jsx("span",{children:"Guia 3D"})]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("button",{id:"btn-header-guided-workout",onClick:p,className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 text-white ${h?"bg-[#8fa38e] hover:bg-[#7e937d]":"bg-[#c89f83] hover:bg-[#b88f73]"}`,children:[S.jsx(tl,{className:"w-3.5 h-3.5 fill-white"}),S.jsx("span",{className:"hidden sm:inline",children:"Iniciar Treino Guiado (30')"}),S.jsx("span",{className:"sm:hidden",children:"Treinar"})]}),S.jsxs("button",{id:"btn-header-open-coach",onClick:f,className:"px-3 py-2 rounded-xl text-xs font-bold bg-[#4a4a48] hover:bg-[#3a3a38] text-white transition-colors flex items-center gap-1.5 shadow-xs border border-[#8fa38e]/20",title:"Abrir Mestre Calistenia AI",children:[S.jsx(jc,{className:"w-4 h-4 text-[#8fa38e]"}),S.jsx("span",{children:"Mestre AI"})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="185",vM=0,ox=1,bM=2,zc=1,x_=2,Ko=3,fs=0,ti=1,Ea=2,Aa=0,Hr=1,lx=2,cx=3,ux=4,yM=5,Gs=100,MM=101,SM=102,EM=103,TM=104,AM=200,wM=201,CM=202,RM=203,ih=204,ah=205,NM=206,DM=207,UM=208,LM=209,PM=210,OM=211,IM=212,FM=213,BM=214,sh=0,rh=1,oh=2,qr=3,lh=4,ch=5,uh=6,dh=7,__=0,zM=1,GM=2,Zi=0,v_=1,b_=2,y_=3,M_=4,S_=5,E_=6,T_=7,A_=300,Xs=301,Xr=302,vf=303,bf=304,nu=306,fh=1e3,Ta=1001,hh=1002,On=1003,HM=1004,mc=1005,Hn=1006,yf=1007,Vs=1008,pi=1009,w_=1010,C_=1011,Jo=1012,Jh=1013,Ji=1014,Wi=1015,Ca=1016,$h=1017,ep=1018,$o=1020,R_=35902,N_=35899,D_=1021,U_=1022,Ii=1023,Ra=1026,qs=1027,L_=1028,tp=1029,js=1030,np=1031,ip=1033,Gc=33776,Hc=33777,kc=33778,Vc=33779,ph=35840,mh=35841,gh=35842,xh=35843,_h=36196,vh=37492,bh=37496,yh=37488,Mh=37489,Wc=37490,Sh=37491,Eh=37808,Th=37809,Ah=37810,wh=37811,Ch=37812,Rh=37813,Nh=37814,Dh=37815,Uh=37816,Lh=37817,Ph=37818,Oh=37819,Ih=37820,Fh=37821,Bh=36492,zh=36494,Gh=36495,Hh=36283,kh=36284,Yc=36285,Vh=36286,kM=3200,qh=0,VM=1,cs="",Ti="srgb",Zc="srgb-linear",Kc="linear",Yt="srgb",Ar=7680,dx=519,qM=512,XM=513,jM=514,ap=515,WM=516,YM=517,sp=518,ZM=519,fx=35044,hx="300 es",Yi=2e3,el=2001;function KM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function QM(){const r=Qc("canvas");return r.style.display="block",r}const px={};function mx(...r){const e="THREE."+r.shift();console.log(e,...r)}function P_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=P_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ft(...r){r=P_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function kr(...r){const e=r.join(" ");e in px||(px[e]=!0,ut(...r))}function JM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const $M={[sh]:rh,[oh]:uh,[lh]:dh,[qr]:ch,[rh]:sh,[uh]:oh,[dh]:lh,[ch]:qr};class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,Xh=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Lt(r,e,i){return Math.max(e,Math.min(i,r))}function eS(r,e){return(r%e+e)%e}function Sf(r,e,i){return(1-i)*r+i*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const up=class up{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Lt(this.x,e.x,i.x),this.y=Lt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Lt(this.x,e,i),this.y=Lt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Lt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Lt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let Pt=up;class Yr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],v=s[l+2],b=s[l+3],g=c[f+0],E=c[f+1],w=c[f+2],D=c[f+3];if(b!==D||m!==g||h!==E||v!==w){let y=m*g+h*E+v*w+b*D;y<0&&(g=-g,E=-E,w=-w,D=-D,y=-y);let x=1-p;if(y<.9995){const H=Math.acos(y),k=Math.sin(H);x=Math.sin(x*H)/k,p=Math.sin(p*H)/k,m=m*x+g*p,h=h*x+E*p,v=v*x+w*p,b=b*x+D*p}else{m=m*x+g*p,h=h*x+E*p,v=v*x+w*p,b=b*x+D*p;const H=1/Math.sqrt(m*m+h*h+v*v+b*b);m*=H,h*=H,v*=H,b*=H}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=b}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],b=c[f],g=c[f+1],E=c[f+2],w=c[f+3];return e[i]=p*w+v*b+m*E-h*g,e[i+1]=m*w+v*g+h*b-p*E,e[i+2]=h*w+v*E+p*g-m*b,e[i+3]=v*w-p*b-m*g-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),b=p(c/2),g=m(s/2),E=m(l/2),w=m(c/2);switch(f){case"XYZ":this._x=g*v*b+h*E*w,this._y=h*E*b-g*v*w,this._z=h*v*w+g*E*b,this._w=h*v*b-g*E*w;break;case"YXZ":this._x=g*v*b+h*E*w,this._y=h*E*b-g*v*w,this._z=h*v*w-g*E*b,this._w=h*v*b+g*E*w;break;case"ZXY":this._x=g*v*b-h*E*w,this._y=h*E*b+g*v*w,this._z=h*v*w+g*E*b,this._w=h*v*b-g*E*w;break;case"ZYX":this._x=g*v*b-h*E*w,this._y=h*E*b+g*v*w,this._z=h*v*w-g*E*b,this._w=h*v*b+g*E*w;break;case"YZX":this._x=g*v*b+h*E*w,this._y=h*E*b+g*v*w,this._z=h*v*w-g*E*b,this._w=h*v*b-g*E*w;break;case"XZY":this._x=g*v*b-h*E*w,this._y=h*E*b-g*v*w,this._z=h*v*w+g*E*b,this._w=h*v*b+g*E*w;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],v=i[6],b=i[10],g=s+p+b;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-h)*E,this._z=(f-l)*E}else if(s>p&&s>b){const E=2*Math.sqrt(1+s-p-b);this._w=(v-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+h)/E}else if(p>b){const E=2*Math.sqrt(1+p-s-b);this._w=(c-h)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+b-s-p);this._w=(f-l)/E,this._x=(c+h)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+f*p+l*h-c*m,this._y=l*v+f*m+c*p-s*h,this._z=c*v+f*h+s*m-l*p,this._w=f*v-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dp=class dp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),v=2*(p*i-c*l),b=2*(c*s-f*i);return this.x=i+m*h+f*b-p*v,this.y=s+m*v+p*h-c*b,this.z=l+m*b+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Lt(this.x,e.x,i.x),this.y=Lt(this.y,e.y,i.y),this.z=Lt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Lt(this.x,e,i),this.y=Lt(this.y,e,i),this.z=Lt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Lt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Lt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dp.prototype.isVector3=!0;let re=dp;const Ef=new re,gx=new Yr,fp=class fp{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],v=s[4],b=s[7],g=s[2],E=s[5],w=s[8],D=l[0],y=l[3],x=l[6],H=l[1],k=l[4],N=l[7],F=l[2],U=l[5],I=l[8];return c[0]=f*D+p*H+m*F,c[3]=f*y+p*k+m*U,c[6]=f*x+p*N+m*I,c[1]=h*D+v*H+b*F,c[4]=h*y+v*k+b*U,c[7]=h*x+v*N+b*I,c[2]=g*D+E*H+w*F,c[5]=g*y+E*k+w*U,c[8]=g*x+E*N+w*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*f*v-i*p*h-s*c*v+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],b=v*f-p*h,g=p*m-v*c,E=h*c-f*m,w=i*b+s*g+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/w;return e[0]=b*D,e[1]=(l*h-v*s)*D,e[2]=(p*s-l*f)*D,e[3]=g*D,e[4]=(v*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=E*D,e[7]=(s*m-h*i)*D,e[8]=(f*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tf.makeScale(e,i)),this}rotate(e){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tf.makeRotation(-e)),this}translate(e,i){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;let ft=fp;const Tf=new ft,xx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tS(){const r={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Yt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Yt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zc]:{primaries:e,whitePoint:s,transfer:Kc,toXYZ:xx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:e,whitePoint:s,transfer:Yt,toXYZ:xx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),r}const Ut=tS();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class nS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{wr===void 0&&(wr=Qc("canvas")),wr.width=e.width,wr.height=e.height;const l=wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=wa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iS=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Af(l[f].image)):c.push(Af(l[f]))}else c=Af(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Af(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let aS=0;const wf=new re;class Xn extends Ws{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ta,l=Ta,c=Hn,f=Vs,p=Ii,m=pi,h=Xn.DEFAULT_ANISOTROPY,v=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=nl(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wf).x}get height(){return this.source.getSize(wf).y}get depth(){return this.source.getSize(wf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=A_;Xn.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],v=m[4],b=m[8],g=m[1],E=m[5],w=m[9],D=m[2],y=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(b-D)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(b+D)<.1&&Math.abs(w+y)<.1&&Math.abs(h+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const k=(h+1)/2,N=(E+1)/2,F=(x+1)/2,U=(v+g)/4,I=(b+D)/4,A=(w+y)/4;return k>N&&k>F?k<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(k),l=U/s,c=I/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=U/l,c=A/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=A/c),this.set(s,l,c,i),this}let H=Math.sqrt((y-w)*(y-w)+(b-D)*(b-D)+(g-v)*(g-v));return Math.abs(H)<.001&&(H=1),this.x=(y-w)/H,this.y=(b-D)/H,this.z=(g-v)/H,this.w=Math.acos((h+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Lt(this.x,e.x,i.x),this.y=Lt(this.y,e.y,i.y),this.z=Lt(this.z,e.z,i.z),this.w=Lt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Lt(this.x,e,i),this.y=Lt(this.y,e,i),this.z=Lt(this.z,e,i),this.w=Lt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Lt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let cn=hp;class sS extends Ws{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Xn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends sS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class O_ extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=class eu{constructor(e,i,s,l,c,f,p,m,h,v,b,g,E,w,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,v,b,g,E,w,D,y)}set(e,i,s,l,c,f,p,m,h,v,b,g,E,w,D,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=v,x[10]=b,x[14]=g,x[3]=E,x[7]=w,x[11]=D,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Cr.setFromMatrixColumn(e,0).length(),c=1/Cr.setFromMatrixColumn(e,1).length(),f=1/Cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),b=Math.sin(c);if(e.order==="XYZ"){const g=f*v,E=f*b,w=p*v,D=p*b;i[0]=m*v,i[4]=-m*b,i[8]=h,i[1]=E+w*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=w+E*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,E=m*b,w=h*v,D=h*b;i[0]=g+D*p,i[4]=w*p-E,i[8]=f*h,i[1]=f*b,i[5]=f*v,i[9]=-p,i[2]=E*p-w,i[6]=D+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,E=m*b,w=h*v,D=h*b;i[0]=g-D*p,i[4]=-f*b,i[8]=w+E*p,i[1]=E+w*p,i[5]=f*v,i[9]=D-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,E=f*b,w=p*v,D=p*b;i[0]=m*v,i[4]=w*h-E,i[8]=g*h+D,i[1]=m*b,i[5]=D*h+g,i[9]=E*h-w,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,E=f*h,w=p*m,D=p*h;i[0]=m*v,i[4]=D-g*b,i[8]=w*b+E,i[1]=b,i[5]=f*v,i[9]=-p*v,i[2]=-h*v,i[6]=E*b+w,i[10]=g-D*b}else if(e.order==="XZY"){const g=f*m,E=f*h,w=p*m,D=p*h;i[0]=m*v,i[4]=-b,i[8]=h*v,i[1]=g*b+D,i[5]=f*v,i[9]=E*b-w,i[2]=w*b-E,i[6]=p*v,i[10]=D*b+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,lS)}lookAt(e,i,s){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),is.crossVectors(s,fi),is.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),is.crossVectors(s,fi)),is.normalize(),gc.crossVectors(fi,is),l[0]=is.x,l[4]=gc.x,l[8]=fi.x,l[1]=is.y,l[5]=gc.y,l[9]=fi.y,l[2]=is.z,l[6]=gc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],v=s[1],b=s[5],g=s[9],E=s[13],w=s[2],D=s[6],y=s[10],x=s[14],H=s[3],k=s[7],N=s[11],F=s[15],U=l[0],I=l[4],A=l[8],O=l[12],q=l[1],L=l[5],V=l[9],fe=l[13],ie=l[2],Y=l[6],B=l[10],X=l[14],ae=l[3],ge=l[7],G=l[11],M=l[15];return c[0]=f*U+p*q+m*ie+h*ae,c[4]=f*I+p*L+m*Y+h*ge,c[8]=f*A+p*V+m*B+h*G,c[12]=f*O+p*fe+m*X+h*M,c[1]=v*U+b*q+g*ie+E*ae,c[5]=v*I+b*L+g*Y+E*ge,c[9]=v*A+b*V+g*B+E*G,c[13]=v*O+b*fe+g*X+E*M,c[2]=w*U+D*q+y*ie+x*ae,c[6]=w*I+D*L+y*Y+x*ge,c[10]=w*A+D*V+y*B+x*G,c[14]=w*O+D*fe+y*X+x*M,c[3]=H*U+k*q+N*ie+F*ae,c[7]=H*I+k*L+N*Y+F*ge,c[11]=H*A+k*V+N*B+F*G,c[15]=H*O+k*fe+N*X+F*M,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],v=e[2],b=e[6],g=e[10],E=e[14],w=e[3],D=e[7],y=e[11],x=e[15],H=m*E-h*g,k=p*E-h*b,N=p*g-m*b,F=f*E-h*v,U=f*g-m*v,I=f*b-p*v;return i*(D*H-y*k+x*N)-s*(w*H-y*F+x*U)+l*(w*k-D*F+x*I)-c*(w*N-D*U+y*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(f*v-p*h)-s*(c*v-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],b=e[9],g=e[10],E=e[11],w=e[12],D=e[13],y=e[14],x=e[15],H=i*p-s*f,k=i*m-l*f,N=i*h-c*f,F=s*m-l*p,U=s*h-c*p,I=l*h-c*m,A=v*D-b*w,O=v*y-g*w,q=v*x-E*w,L=b*y-g*D,V=b*x-E*D,fe=g*x-E*y,ie=H*fe-k*V+N*L+F*q-U*O+I*A;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ie;return e[0]=(p*fe-m*V+h*L)*Y,e[1]=(l*V-s*fe-c*L)*Y,e[2]=(D*I-y*U+x*F)*Y,e[3]=(g*U-b*I-E*F)*Y,e[4]=(m*q-f*fe-h*O)*Y,e[5]=(i*fe-l*q+c*O)*Y,e[6]=(y*N-w*I-x*k)*Y,e[7]=(v*I-g*N+E*k)*Y,e[8]=(f*V-p*q+h*A)*Y,e[9]=(s*q-i*V-c*A)*Y,e[10]=(w*U-D*N+x*H)*Y,e[11]=(b*N-v*U-E*H)*Y,e[12]=(p*O-f*L-m*A)*Y,e[13]=(i*L-s*O+l*A)*Y,e[14]=(D*k-w*F-y*H)*Y,e[15]=(v*F-b*k+g*H)*Y,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,v=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*f,0,h*m-l*p,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,v=f+f,b=p+p,g=c*h,E=c*v,w=c*b,D=f*v,y=f*b,x=p*b,H=m*h,k=m*v,N=m*b,F=s.x,U=s.y,I=s.z;return l[0]=(1-(D+x))*F,l[1]=(E+N)*F,l[2]=(w-k)*F,l[3]=0,l[4]=(E-N)*U,l[5]=(1-(g+x))*U,l[6]=(y+H)*U,l[7]=0,l[8]=(w+k)*I,l[9]=(y-H)*I,l[10]=(1-(g+D))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Cr.set(l[0],l[1],l[2]).length();const p=Cr.set(l[4],l[5],l[6]).length(),m=Cr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ui.copy(this);const h=1/f,v=1/p,b=1/m;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=b,Ui.elements[9]*=b,Ui.elements[10]*=b,i.setFromRotationMatrix(Ui),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Yi,m=!1){const h=this.elements,v=2*c/(i-e),b=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let w,D;if(m)w=c/(f-c),D=f*c/(f-c);else if(p===Yi)w=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(p===el)w=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=b,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Yi,m=!1){const h=this.elements,v=2/(i-e),b=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let w,D;if(m)w=1/(f-c),D=f/(f-c);else if(p===Yi)w=-2/(f-c),D=-(f+c)/(f-c);else if(p===el)w=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=b,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=w,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};eu.prototype.isMatrix4=!0;let un=eu;const Cr=new re,Ui=new un,oS=new re(0,0,0),lS=new re(1,1,1),is=new re,gc=new re,fi=new re,vx=new un,bx=new Yr;class hs{constructor(e=0,i=0,s=0,l=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],v=l[9],b=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Lt(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bx.setFromEuler(this),this.setFromQuaternion(bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const yx=new re,Rr=new Yr,va=new un,xc=new re,Vo=new re,uS=new re,dS=new Yr,Mx=new re(1,0,0),Sx=new re(0,1,0),Ex=new re(0,0,1),Tx={type:"added"},fS={type:"removed"},Nr={type:"childadded",child:null},Cf={type:"childremoved",child:null};class In extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new re,i=new hs,s=new Yr,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new ft}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Mx,e)}rotateY(e){return this.rotateOnAxis(Sx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,i){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Mx,e)}translateY(e){return this.translateOnAxis(Sx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?xc.copy(e):xc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Vo,xc,this.up):va.lookAt(xc,Vo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(va),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tx),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fS),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tx),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const b=m[h];c(e.shapes,b)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),b=f(e.shapes),g=f(e.skeletons),E=f(e.animations),w=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),b.length>0&&(s.shapes=b),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),w.length>0&&(s.nodes=w)}return s.object=l,s;function f(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new re(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qn extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,s),x=this._getHandJoint(h,D);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=h.joints["index-finger-tip"],b=h.joints["thumb-tip"],g=v.position.distanceTo(b.position),E=.02,w=.005;h.inputState.pinching&&g>E+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=E-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new qn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Nf(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Et{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ut.workingColorSpace){if(e=eS(e,1),i=Lt(i,0,1),s=Lt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Nf(f,c,e+1/3),this.g=Nf(f,c,e),this.b=Nf(f,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const s=F_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Ut.workingToColorSpace(Gn.copy(this),e),Math.round(Lt(Gn.r*255,0,255))*65536+Math.round(Lt(Gn.g*255,0,255))*256+Math.round(Lt(Gn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const v=(p+f)/2;if(p===f)m=0,h=0;else{const b=f-p;switch(h=v<=.5?b/(f+p):b/(2-f-p),f){case s:m=(l-c)/b+(l<c?6:0);break;case l:m=(c-s)/b+2;break;case c:m=(s-l)/b+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ti){Ut.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,s=Gn.g,l=Gn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(_c);const s=Sf(as.h,_c.h,i),l=Sf(as.s,_c.s,i),c=Sf(as.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Et;Et.NAMES=F_;class pS extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new re,ba=new re,Df=new re,ya=new re,Dr=new re,Ur=new re,Ax=new re,Uf=new re,Lf=new re,Pf=new re,Of=new cn,If=new cn,Ff=new cn;class Oi{constructor(e=new re,i=new re,s=new re){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Li.subVectors(l,i),ba.subVectors(s,i),Df.subVectors(e,i);const f=Li.dot(Li),p=Li.dot(ba),m=Li.dot(Df),h=ba.dot(ba),v=ba.dot(Df),b=f*h-p*p;if(b===0)return c.set(0,0,0),null;const g=1/b,E=(h*m-p*v)*g,w=(f*v-p*m)*g;return c.set(1-E-w,w,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(f,ya.y),m.addScaledVector(p,ya.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Of.setScalar(0),If.setScalar(0),Ff.setScalar(0),Of.fromBufferAttribute(e,i),If.fromBufferAttribute(e,s),Ff.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Of,c.x),f.addScaledVector(If,c.y),f.addScaledVector(Ff,c.z),f}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),ba.subVectors(e,i),Li.cross(ba).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Li.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Dr.subVectors(l,s),Ur.subVectors(c,s),Uf.subVectors(e,s);const m=Dr.dot(Uf),h=Ur.dot(Uf);if(m<=0&&h<=0)return i.copy(s);Lf.subVectors(e,l);const v=Dr.dot(Lf),b=Ur.dot(Lf);if(v>=0&&b<=v)return i.copy(l);const g=m*b-v*h;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Dr,f);Pf.subVectors(e,c);const E=Dr.dot(Pf),w=Ur.dot(Pf);if(w>=0&&E<=w)return i.copy(c);const D=E*h-m*w;if(D<=0&&h>=0&&w<=0)return p=h/(h-w),i.copy(s).addScaledVector(Ur,p);const y=v*w-E*b;if(y<=0&&b-v>=0&&E-w>=0)return Ax.subVectors(c,l),p=(b-v)/(b-v+(E-w)),i.copy(l).addScaledVector(Ax,p);const x=1/(y+D+g);return f=D*x,p=g*x,i.copy(s).addScaledVector(Dr,f).addScaledVector(Ur,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),bc.subVectors(this.max,qo),Lr.subVectors(e.a,qo),Pr.subVectors(e.b,qo),Or.subVectors(e.c,qo),ss.subVectors(Pr,Lr),rs.subVectors(Or,Pr),Ps.subVectors(Lr,Or);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ps.z,Ps.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ps.z,0,-Ps.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ps.y,Ps.x,0];return!Bf(i,Lr,Pr,Or,bc)||(i=[1,0,0,0,1,0,0,0,1],!Bf(i,Lr,Pr,Or,bc))?!1:(yc.crossVectors(ss,rs),i=[yc.x,yc.y,yc.z],Bf(i,Lr,Pr,Or,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new re,new re,new re,new re,new re,new re,new re,new re],Pi=new re,vc=new il,Lr=new re,Pr=new re,Or=new re,ss=new re,rs=new re,Ps=new re,qo=new re,bc=new re,yc=new re,Os=new re;function Bf(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Os.fromArray(r,c);const p=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=e.dot(Os),h=i.dot(Os),v=s.dot(Os);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const yn=new re,Mc=new Pt;let mS=0;class Qi extends Ws{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=fx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ei(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class B_ extends Qi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class z_ extends Qi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Tn extends Qi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const gS=new il,Xo=new re,zf=new re;class iu{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):gS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(zf)),this.expandByPoint(Xo.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xS=0;const Ei=new un,Gf=new In,Ir=new re,hi=new il,jo=new il,Rn=new re;class mi extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KM(e)?z_:B_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Tn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];jo.setFromBufferAttribute(p),this.morphTargetsRelative?(Rn.addVectors(hi.min,jo.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,jo.max),hi.expandByPoint(Rn)):(hi.expandByPoint(jo.min),hi.expandByPoint(jo.max))}hi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Rn.fromBufferAttribute(p,h),m&&(Ir.fromBufferAttribute(e,h),Rn.add(Ir)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Qi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new re,m[A]=new re;const h=new re,v=new re,b=new re,g=new Pt,E=new Pt,w=new Pt,D=new re,y=new re;function x(A,O,q){h.fromBufferAttribute(s,A),v.fromBufferAttribute(s,O),b.fromBufferAttribute(s,q),g.fromBufferAttribute(c,A),E.fromBufferAttribute(c,O),w.fromBufferAttribute(c,q),v.sub(h),b.sub(h),E.sub(g),w.sub(g);const L=1/(E.x*w.y-w.x*E.y);isFinite(L)&&(D.copy(v).multiplyScalar(w.y).addScaledVector(b,-E.y).multiplyScalar(L),y.copy(b).multiplyScalar(E.x).addScaledVector(v,-w.x).multiplyScalar(L),p[A].add(D),p[O].add(D),p[q].add(D),m[A].add(y),m[O].add(y),m[q].add(y))}let H=this.groups;H.length===0&&(H=[{start:0,count:e.count}]);for(let A=0,O=H.length;A<O;++A){const q=H[A],L=q.start,V=q.count;for(let fe=L,ie=L+V;fe<ie;fe+=3)x(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const k=new re,N=new re,F=new re,U=new re;function I(A){F.fromBufferAttribute(l,A),U.copy(F);const O=p[A];k.copy(O),k.sub(F.multiplyScalar(F.dot(O))).normalize(),N.crossVectors(U,O);const L=N.dot(m[A])<0?-1:1;f.setXYZW(A,k.x,k.y,k.z,L)}for(let A=0,O=H.length;A<O;++A){const q=H[A],L=q.start,V=q.count;for(let fe=L,ie=L+V;fe<ie;fe+=3)I(e.getX(fe+0)),I(e.getX(fe+1)),I(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new re,c=new re,f=new re,p=new re,m=new re,h=new re,v=new re,b=new re;if(e)for(let g=0,E=e.count;g<E;g+=3){const w=e.getX(g+0),D=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,y),v.subVectors(f,c),b.subVectors(l,c),v.cross(b),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,D),h.fromBufferAttribute(s,y),p.add(v),m.add(v),h.add(v),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),b.subVectors(l,c),v.cross(b),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,b=p.normalized,g=new h.constructor(m.length*v);let E=0,w=0;for(let D=0,y=m.length;D<y;D++){p.isInterleavedBufferAttribute?E=m[D]*p.data.stride+p.offset:E=m[D]*v;for(let x=0;x<v;x++)g[w++]=h[E++]}return new Qi(g,v,b)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,b=h.length;v<b;v++){const g=h[v],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let b=0,g=h.length;b<g;b++){const E=h[b];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],b=c[h];for(let g=0,E=b.length;g<E;g++)v.push(b[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const b=f[h];this.addGroup(b.start,b.count,b.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _S=0;class Zr extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Hr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=ah,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ih&&(s.blendSrc=this.blendSrc),this.blendDst!==ah&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Pt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new re,Hf=new re,Sc=new re,os=new re,kf=new re,Ec=new re,Vf=new re;class G_{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Hf.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),os.copy(this.origin).sub(Hf);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Sc),p=os.dot(this.direction),m=-os.dot(Sc),h=os.lengthSq(),v=Math.abs(1-f*f);let b,g,E,w;if(v>0)if(b=f*m-p,g=f*p-m,w=c*v,b>=0)if(g>=-w)if(g<=w){const D=1/v;b*=D,g*=D,E=b*(b+f*g+2*p)+g*(f*b+g+2*m)+h}else g=c,b=Math.max(0,-(f*g+p)),E=-b*b+g*(g+2*m)+h;else g=-c,b=Math.max(0,-(f*g+p)),E=-b*b+g*(g+2*m)+h;else g<=-w?(b=Math.max(0,-(-f*c+p)),g=b>0?-c:Math.min(Math.max(-c,-m),c),E=-b*b+g*(g+2*m)+h):g<=w?(b=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+h):(b=Math.max(0,-(f*c+p)),g=b>0?c:Math.min(Math.max(-c,-m),c),E=-b*b+g*(g+2*m)+h);else g=f>0?-c:c,b=Math.max(0,-(f*g+p)),E=-b*b+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,b),l&&l.copy(Hf).addScaledVector(Sc,g),E}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,v=1/this.direction.y,b=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),b>=0?(p=(e.min.z-g.z)*b,m=(e.max.z-g.z)*b):(p=(e.max.z-g.z)*b,m=(e.min.z-g.z)*b),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,s,l,c){kf.subVectors(i,e),Ec.subVectors(s,e),Vf.crossVectors(kf,Ec);let f=this.direction.dot(Vf),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;os.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(os,Ec));if(m<0)return null;const h=p*this.direction.dot(kf.cross(os));if(h<0||m+h>f)return null;const v=-p*os.dot(Vf);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class H_ extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=__,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wx=new un,Is=new G_,Tc=new iu,Cx=new re,Ac=new re,wc=new re,Cc=new re,qf=new re,Rc=new re,Rx=new re,Nc=new re;class sn extends In{constructor(e=new mi,i=new H_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Rc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],b=c[m];v!==0&&(qf.fromBufferAttribute(b,e),f?Rc.addScaledVector(qf,v):Rc.addScaledVector(qf.sub(i),v))}i.add(Rc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),Is.copy(e.ray).recast(e.near),!(Tc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Tc,Cx)===null||Is.origin.distanceToSquared(Cx)>(e.far-e.near)**2))&&(wx.copy(c).invert(),Is.copy(e.ray).applyMatrix4(wx),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Is)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,b=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(f))for(let w=0,D=g.length;w<D;w++){const y=g[w],x=f[y.materialIndex],H=Math.max(y.start,E.start),k=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let N=H,F=k;N<F;N+=3){const U=p.getX(N),I=p.getX(N+1),A=p.getX(N+2);l=Dc(this,x,e,s,h,v,b,U,I,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let y=w,x=D;y<x;y+=3){const H=p.getX(y),k=p.getX(y+1),N=p.getX(y+2);l=Dc(this,f,e,s,h,v,b,H,k,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let w=0,D=g.length;w<D;w++){const y=g[w],x=f[y.materialIndex],H=Math.max(y.start,E.start),k=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=H,F=k;N<F;N+=3){const U=N,I=N+1,A=N+2;l=Dc(this,x,e,s,h,v,b,U,I,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let y=w,x=D;y<x;y+=3){const H=y,k=y+1,N=y+2;l=Dc(this,f,e,s,h,v,b,H,k,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vS(r,e,i,s,l,c,f,p){let m;if(e.side===ti?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===fs,p),m===null)return null;Nc.copy(p),Nc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Nc);return h<i.near||h>i.far?null:{distance:h,point:Nc.clone(),object:r}}function Dc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Ac),r.getVertexPosition(m,wc),r.getVertexPosition(h,Cc);const v=vS(r,e,i,s,Ac,wc,Cc,Rx);if(v){const b=new re;Oi.getBarycoord(Rx,Ac,wc,Cc,b),l&&(v.uv=Oi.getInterpolatedAttribute(l,p,m,h,b,new Pt)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,p,m,h,b,new Pt)),f&&(v.normal=Oi.getInterpolatedAttribute(f,p,m,h,b,new re),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Oi.getNormal(Ac,wc,Cc,g.normal),v.face=g,v.barycoord=b}return v}class bS extends Xn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=On,v=On,b,g){super(null,f,p,m,h,v,l,c,b,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xf=new re,yS=new re,MS=new ft;class zs{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Xf.subVectors(s,i).cross(yS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Xf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||MS.getNormalMatrix(e),l=this.coplanarPoint(Xf).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new iu,SS=new Pt(.5,.5),Uc=new re;class op{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Yi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],v=c[4],b=c[5],g=c[6],E=c[7],w=c[8],D=c[9],y=c[10],x=c[11],H=c[12],k=c[13],N=c[14],F=c[15];if(l[0].setComponents(h-f,E-v,x-w,F-H).normalize(),l[1].setComponents(h+f,E+v,x+w,F+H).normalize(),l[2].setComponents(h+p,E+b,x+D,F+k).normalize(),l[3].setComponents(h-p,E-b,x-D,F-k).normalize(),s)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(h-m,E-g,x-y,F-N).normalize();else if(l[4].setComponents(h-m,E-g,x-y,F-N).normalize(),i===Yi)l[5].setComponents(h+m,E+g,x+y,F+N).normalize();else if(i===el)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const i=SS.distanceTo(e.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k_ extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new re,$c=new re,Nx=new un,Wo=new G_,Lc=new iu,jf=new re,Dx=new re;class ES extends In{constructor(e=new mi,i=new k_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);e.setAttribute("lineDistance",new Tn(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;Nx.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(Nx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,f.start),w=Math.min(v.count,f.start+f.count);for(let D=E,y=w-1;D<y;D+=h){const x=v.getX(D),H=v.getX(D+1),k=Pc(this,e,Wo,m,x,H,D);k&&i.push(k)}if(this.isLineLoop){const D=v.getX(w-1),y=v.getX(E),x=Pc(this,e,Wo,m,D,y,w-1);x&&i.push(x)}}else{const E=Math.max(0,f.start),w=Math.min(g.count,f.start+f.count);for(let D=E,y=w-1;D<y;D+=h){const x=Pc(this,e,Wo,m,D,D+1,D);x&&i.push(x)}if(this.isLineLoop){const D=Pc(this,e,Wo,m,w-1,E,w-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Pc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(Jc.fromBufferAttribute(p,l),$c.fromBufferAttribute(p,c),i.distanceSqToSegment(Jc,$c,jf,Dx)>s)return;jf.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(jf);if(!(h<e.near||h>e.far))return{distance:h,point:Dx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Ux=new re,Lx=new re;class TS extends ES{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Ux.fromBufferAttribute(i,l),Lx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Ux.distanceTo(Lx);e.setAttribute("lineDistance",new Tn(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V_ extends Xn{constructor(e=[],i=Xs,s,l,c,f,p,m,h,v){super(e,i,s,l,c,f,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jr extends Xn{constructor(e,i,s=Ji,l,c,f,p=On,m=On,h,v=Ra,b=1){if(v!==Ra&&v!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:b};super(g,l,c,f,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class AS extends jr{constructor(e,i=Ji,s=Xs,l,c,f=On,p=On,m,h=Ra){const v={width:e,height:e,depth:1},b=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,p,m,h),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q_ extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ds extends mi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],v=[],b=[];let g=0,E=0;w("z","y","x",-1,-1,s,i,e,f,c,0),w("z","y","x",1,-1,s,i,-e,f,c,1),w("x","z","y",1,1,e,s,i,l,f,2),w("x","z","y",1,-1,e,s,-i,l,f,3),w("x","y","z",1,-1,e,i,s,l,c,4),w("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(b,2));function w(D,y,x,H,k,N,F,U,I,A,O){const q=N/I,L=F/A,V=N/2,fe=F/2,ie=U/2,Y=I+1,B=A+1;let X=0,ae=0;const ge=new re;for(let G=0;G<B;G++){const M=G*L-fe;for(let z=0;z<Y;z++){const J=z*q-V;ge[D]=J*H,ge[y]=M*k,ge[x]=ie,h.push(ge.x,ge.y,ge.z),ge[D]=0,ge[y]=0,ge[x]=U>0?1:-1,v.push(ge.x,ge.y,ge.z),b.push(z/I),b.push(1-G/A),X+=1}}for(let G=0;G<A;G++)for(let M=0;M<I;M++){const z=g+M+Y*G,J=g+M+Y*(G+1),_e=g+(M+1)+Y*(G+1),Se=g+(M+1)+Y*G;m.push(z,J,Se),m.push(J,_e,Se),ae+=6}p.addGroup(E,ae,O),E+=ae,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xi extends mi{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const v=[],b=[],g=[],E=[];let w=0;const D=[],y=s/2;let x=0;H(),f===!1&&(e>0&&k(!0),i>0&&k(!1)),this.setIndex(v),this.setAttribute("position",new Tn(b,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(E,2));function H(){const N=new re,F=new re;let U=0;const I=(i-e)/s;for(let A=0;A<=c;A++){const O=[],q=A/c,L=q*(i-e)+e;for(let V=0;V<=l;V++){const fe=V/l,ie=fe*m+p,Y=Math.sin(ie),B=Math.cos(ie);F.x=L*Y,F.y=-q*s+y,F.z=L*B,b.push(F.x,F.y,F.z),N.set(Y,I,B).normalize(),g.push(N.x,N.y,N.z),E.push(fe,1-q),O.push(w++)}D.push(O)}for(let A=0;A<l;A++)for(let O=0;O<c;O++){const q=D[O][A],L=D[O+1][A],V=D[O+1][A+1],fe=D[O][A+1];(e>0||O!==0)&&(v.push(q,L,fe),U+=3),(i>0||O!==c-1)&&(v.push(L,V,fe),U+=3)}h.addGroup(x,U,0),x+=U}function k(N){const F=w,U=new Pt,I=new re;let A=0;const O=N===!0?e:i,q=N===!0?1:-1;for(let V=1;V<=l;V++)b.push(0,y*q,0),g.push(0,q,0),E.push(.5,.5),w++;const L=w;for(let V=0;V<=l;V++){const ie=V/l*m+p,Y=Math.cos(ie),B=Math.sin(ie);I.x=O*B,I.y=y*q,I.z=O*Y,b.push(I.x,I.y,I.z),g.push(0,q,0),U.x=Y*.5+.5,U.y=B*.5*q+.5,E.push(U.x,U.y),w++}for(let V=0;V<l;V++){const fe=F+V,ie=L+V;N===!0?v.push(ie,ie+1,fe):v.push(ie+1,ie,fe),A+=3}h.addGroup(x,A,N===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class au extends mi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,b=e/p,g=i/m,E=[],w=[],D=[],y=[];for(let x=0;x<v;x++){const H=x*g-f;for(let k=0;k<h;k++){const N=k*b-c;w.push(N,-H,0),D.push(0,0,1),y.push(k/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let H=0;H<p;H++){const k=H+h*x,N=H+h*(x+1),F=H+1+h*(x+1),U=H+1+h*x;E.push(k,N,U),E.push(N,F,U)}this.setIndex(E),this.setAttribute("position",new Tn(w,3)),this.setAttribute("normal",new Tn(D,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hs extends mi{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let h=0;const v=[],b=new re,g=new re,E=[],w=[],D=[],y=[];for(let x=0;x<=s;x++){const H=[],k=x/s,N=f+k*p,F=e*Math.cos(N),U=Math.sqrt(e*e-F*F);let I=0;x===0&&f===0?I=.5/i:x===s&&m===Math.PI&&(I=-.5/i);for(let A=0;A<=i;A++){const O=A/i,q=l+O*c;b.x=-U*Math.cos(q),b.y=F,b.z=U*Math.sin(q),w.push(b.x,b.y,b.z),g.copy(b).normalize(),D.push(g.x,g.y,g.z),y.push(O+I,1-k),H.push(h++)}v.push(H)}for(let x=0;x<s;x++)for(let H=0;H<i;H++){const k=v[x][H+1],N=v[x][H],F=v[x+1][H],U=v[x+1][H+1];(x!==0||f>0)&&E.push(k,N,U),(x!==s-1||m<Math.PI)&&E.push(N,F,U)}this.setIndex(E),this.setAttribute("position",new Tn(w,3)),this.setAttribute("normal",new Tn(D,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Px(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Px(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)e[l]=s[l]}return e}function Px(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function wS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function X_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const CS={clone:Wr,merge:Vn};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=wS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Et().setHex(l.value);break;case"v2":this.uniforms[s].value=new Pt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new re().fromArray(l.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(l.value);break;case"m4":this.uniforms[s].value=new un().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class DS extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bs extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class US extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LS extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class j_ extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Wf=new un,Ox=new re,Ix=new re;class PS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Ox.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ox),Ix.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ix),i.updateMatrixWorld(),Wf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===el||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oc=new re,Ic=new Yr,Vi=new re;class W_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Ic,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Ic,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Oc,Ic,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Ic,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new re,Fx=new Pt,Bx=new Pt;class Ai extends W_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,Fx,Bx),i.subVectors(Bx,Fx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Mf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class lp extends W_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OS extends PS{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yf extends j_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new OS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class IS extends j_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fr=-90,Br=1;class FS extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Fr,Br,e,i);l.layers=this.layers,this.add(l);const c=new Ai(Fr,Br,e,i);c.layers=this.layers,this.add(c);const f=new Ai(Fr,Br,e,i);f.layers=this.layers,this.add(f);const p=new Ai(Fr,Br,e,i);p.layers=this.layers,this.add(p);const m=new Ai(Fr,Br,e,i);m.layers=this.layers,this.add(m);const h=new Ai(Fr,Br,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===el)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,v]=this.children,b=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(b,g,E),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class BS extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pp=class pp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};pp.prototype.isMatrix2=!0;let zx=pp;class zS extends TS{constructor(e=10,i=10,s=4473924,l=8947848){s=new Et(s),l=new Et(l);const c=i/2,f=e/i,p=e/2,m=[],h=[];for(let g=0,E=0,w=-p;g<=i;g++,w+=f){m.push(-p,0,w,p,0,w),m.push(w,0,-p,w,0,p);const D=g===c?s:l;D.toArray(h,E),E+=3,D.toArray(h,E),E+=3,D.toArray(h,E),E+=3,D.toArray(h,E),E+=3}const v=new mi;v.setAttribute("position",new Tn(m,3)),v.setAttribute("color",new Tn(h,3));const b=new k_({vertexColors:!0,toneMapped:!1});super(v,b),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Gx(r,e,i,s){const l=GS(s);switch(i){case D_:return r*e;case L_:return r*e/l.components*l.byteLength;case tp:return r*e/l.components*l.byteLength;case js:return r*e*2/l.components*l.byteLength;case np:return r*e*2/l.components*l.byteLength;case U_:return r*e*3/l.components*l.byteLength;case Ii:return r*e*4/l.components*l.byteLength;case ip:return r*e*4/l.components*l.byteLength;case Gc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mh:case xh:return Math.max(r,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(r,8)*Math.max(e,8)/2;case _h:case vh:case yh:case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bh:case Wc:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Gh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hh:case kh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yc:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GS(r){switch(r){case pi:case w_:return{byteLength:1,components:1};case Jo:case C_:case Ca:return{byteLength:2,components:1};case $h:case ep:return{byteLength:2,components:4};case Ji:case Jh:case Wi:return{byteLength:4,components:1};case R_:case N_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function HS(r){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,b=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,v),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:b}}function s(p,m,h){const v=m.array,b=m.updateRanges;if(r.bindBuffer(h,p),b.length===0)r.bufferSubData(h,0,v);else{b.sort((E,w)=>E.start-w.start);let g=0;for(let E=1;E<b.length;E++){const w=b[g],D=b[E];D.start<=w.start+w.count+1?w.count=Math.max(w.count,D.start+D.count-w.start):(++g,b[g]=D)}b.length=g+1;for(let E=0,w=b.length;E<w;E++){const D=b[E];r.bufferSubData(h,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,qS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,d1=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,f1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,h1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
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
}`,N1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,P1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,O1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dE=`#ifdef USE_NORMALMAP
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
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
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
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ZE=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,QE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,iT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,aT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,oT=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gT=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,xT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,yT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,xt={alphahash_fragment:kS,alphahash_pars_fragment:VS,alphamap_fragment:qS,alphamap_pars_fragment:XS,alphatest_fragment:jS,alphatest_pars_fragment:WS,aomap_fragment:YS,aomap_pars_fragment:ZS,batching_pars_vertex:KS,batching_vertex:QS,begin_vertex:JS,beginnormal_vertex:$S,bsdfs:e1,iridescence_fragment:t1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:a1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:r1,color_fragment:o1,color_pars_fragment:l1,color_pars_vertex:c1,color_vertex:u1,common:d1,cube_uv_reflection_fragment:f1,defaultnormal_vertex:h1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:x1,colorspace_fragment:_1,colorspace_pars_fragment:v1,envmap_fragment:b1,envmap_common_pars_fragment:y1,envmap_pars_fragment:M1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:P1,envmap_vertex:E1,fog_vertex:T1,fog_pars_vertex:A1,fog_fragment:w1,fog_pars_fragment:C1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:N1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:U1,lights_pars_begin:L1,lights_toon_fragment:O1,lights_toon_pars_fragment:I1,lights_phong_fragment:F1,lights_phong_pars_fragment:B1,lights_physical_fragment:z1,lights_physical_pars_fragment:G1,lights_fragment_begin:H1,lights_fragment_maps:k1,lights_fragment_end:V1,lightprobes_pars_fragment:q1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:Y1,map_fragment:Z1,map_pars_fragment:K1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:eE,morphinstance_vertex:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:aE,morphtarget_vertex:sE,normal_fragment_begin:rE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:dE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:xE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:bE,dithering_pars_fragment:yE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:AE,shadowmask_pars_fragment:wE,skinbase_vertex:CE,skinning_pars_vertex:RE,skinning_vertex:NE,skinnormal_vertex:DE,specularmap_fragment:UE,specularmap_pars_fragment:LE,tonemapping_fragment:PE,tonemapping_pars_fragment:OE,transmission_fragment:IE,transmission_pars_fragment:FE,uv_pars_fragment:BE,uv_pars_vertex:zE,uv_vertex:GE,worldpos_vertex:HE,background_vert:kE,background_frag:VE,backgroundCube_vert:qE,backgroundCube_frag:XE,cube_vert:jE,cube_frag:WE,depth_vert:YE,depth_frag:ZE,distance_vert:KE,distance_frag:QE,equirect_vert:JE,equirect_frag:$E,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:aT,meshlambert_frag:sT,meshmatcap_vert:rT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:dT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:xT,shadow_vert:_T,shadow_frag:vT,sprite_vert:bT,sprite_frag:yT},Ge={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ji={basic:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Vn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Vn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Vn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Vn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Vn([Ge.points,Ge.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Vn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Vn([Ge.common,Ge.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Vn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Vn([Ge.sprite,Ge.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Vn([Ge.common,Ge.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Vn([Ge.lights,Ge.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ji.physical={uniforms:Vn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Fc={r:0,b:0,g:0},MT=new un,Z_=new ft;Z_.set(-1,0,0,0,1,0,0,0,1);function ST(r,e,i,s,l,c){const f=new Et(0);let p=l===!0?0:1,m,h,v=null,b=0,g=null;function E(H){let k=H.isScene===!0?H.background:null;if(k&&k.isTexture){const N=H.backgroundBlurriness>0;k=e.get(k,N)}return k}function w(H){let k=!1;const N=E(H);N===null?y(f,p):N&&N.isColor&&(y(N,1),k=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||k)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(H,k){const N=E(k);N&&(N.isCubeTexture||N.mapping===nu)?(h===void 0&&(h=new sn(new ds(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Wr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(k.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Z_),h.material.toneMapped=Ut.getTransfer(N.colorSpace)!==Yt,(v!==N||b!==N.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=N,b=N.version,g=r.toneMapping),h.layers.enableAll(),H.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new sn(new au(2,2),new $i({name:"BackgroundMaterial",uniforms:Wr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(N.colorSpace)!==Yt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||b!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,b=N.version,g=r.toneMapping),m.layers.enableAll(),H.unshift(m,m.geometry,m.material,0,0,null))}function y(H,k){H.getRGB(Fc,X_(r)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,k,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(H,k=1){f.set(H),p=k,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(H){p=H,y(f,p)},render:w,addToRenderList:D,dispose:x}}function ET(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(L,V,fe,ie,Y){let B=!1;const X=b(L,ie,fe,V);c!==X&&(c=X,h(c.object)),B=E(L,ie,fe,Y),B&&w(L,ie,fe,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,N(L,V,fe,ie),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return r.createVertexArray()}function h(L){return r.bindVertexArray(L)}function v(L){return r.deleteVertexArray(L)}function b(L,V,fe,ie){const Y=ie.wireframe===!0;let B=s[V.id];B===void 0&&(B={},s[V.id]=B);const X=L.isInstancedMesh===!0?L.id:0;let ae=B[X];ae===void 0&&(ae={},B[X]=ae);let ge=ae[fe.id];ge===void 0&&(ge={},ae[fe.id]=ge);let G=ge[Y];return G===void 0&&(G=g(m()),ge[Y]=G),G}function g(L){const V=[],fe=[],ie=[];for(let Y=0;Y<i;Y++)V[Y]=0,fe[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:fe,attributeDivisors:ie,object:L,attributes:{},index:null}}function E(L,V,fe,ie){const Y=c.attributes,B=V.attributes;let X=0;const ae=fe.getAttributes();for(const ge in ae)if(ae[ge].location>=0){const M=Y[ge];let z=B[ge];if(z===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),M===void 0||M.attribute!==z||z&&M.data!==z.data)return!0;X++}return c.attributesNum!==X||c.index!==ie}function w(L,V,fe,ie){const Y={},B=V.attributes;let X=0;const ae=fe.getAttributes();for(const ge in ae)if(ae[ge].location>=0){let M=B[ge];M===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(M=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(M=L.instanceColor));const z={};z.attribute=M,M&&M.data&&(z.data=M.data),Y[ge]=z,X++}c.attributes=Y,c.attributesNum=X,c.index=ie}function D(){const L=c.newAttributes;for(let V=0,fe=L.length;V<fe;V++)L[V]=0}function y(L){x(L,0)}function x(L,V){const fe=c.newAttributes,ie=c.enabledAttributes,Y=c.attributeDivisors;fe[L]=1,ie[L]===0&&(r.enableVertexAttribArray(L),ie[L]=1),Y[L]!==V&&(r.vertexAttribDivisor(L,V),Y[L]=V)}function H(){const L=c.newAttributes,V=c.enabledAttributes;for(let fe=0,ie=V.length;fe<ie;fe++)V[fe]!==L[fe]&&(r.disableVertexAttribArray(fe),V[fe]=0)}function k(L,V,fe,ie,Y,B,X){X===!0?r.vertexAttribIPointer(L,V,fe,Y,B):r.vertexAttribPointer(L,V,fe,ie,Y,B)}function N(L,V,fe,ie){D();const Y=ie.attributes,B=fe.getAttributes(),X=V.defaultAttributeValues;for(const ae in B){const ge=B[ae];if(ge.location>=0){let G=Y[ae];if(G===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const M=G.normalized,z=G.itemSize,J=e.get(G);if(J===void 0)continue;const _e=J.buffer,Se=J.type,Q=J.bytesPerElement,se=Se===r.INT||Se===r.UNSIGNED_INT||G.gpuType===Jh;if(G.isInterleavedBufferAttribute){const me=G.data,Re=me.stride,qe=G.offset;if(me.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ge.locationSize;Oe++)x(ge.location+Oe,me.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Oe=0;Oe<ge.locationSize;Oe++)y(ge.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Oe=0;Oe<ge.locationSize;Oe++)k(ge.location+Oe,z/ge.locationSize,Se,M,Re*Q,(qe+z/ge.locationSize*Oe)*Q,se)}else{if(G.isInstancedBufferAttribute){for(let me=0;me<ge.locationSize;me++)x(ge.location+me,G.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let me=0;me<ge.locationSize;me++)y(ge.location+me);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let me=0;me<ge.locationSize;me++)k(ge.location+me,z/ge.locationSize,Se,M,z*Q,z/ge.locationSize*me*Q,se)}}else if(X!==void 0){const M=X[ae];if(M!==void 0)switch(M.length){case 2:r.vertexAttrib2fv(ge.location,M);break;case 3:r.vertexAttrib3fv(ge.location,M);break;case 4:r.vertexAttrib4fv(ge.location,M);break;default:r.vertexAttrib1fv(ge.location,M)}}}}H()}function F(){O();for(const L in s){const V=s[L];for(const fe in V){const ie=V[fe];for(const Y in ie){const B=ie[Y];for(const X in B)v(B[X].object),delete B[X];delete ie[Y]}}delete s[L]}}function U(L){if(s[L.id]===void 0)return;const V=s[L.id];for(const fe in V){const ie=V[fe];for(const Y in ie){const B=ie[Y];for(const X in B)v(B[X].object),delete B[X];delete ie[Y]}}delete s[L.id]}function I(L){for(const V in s){const fe=s[V];for(const ie in fe){const Y=fe[ie];if(Y[L.id]===void 0)continue;const B=Y[L.id];for(const X in B)v(B[X].object),delete B[X];delete Y[L.id]}}}function A(L){for(const V in s){const fe=s[V],ie=L.isInstancedMesh===!0?L.id:0,Y=fe[ie];if(Y!==void 0){for(const B in Y){const X=Y[B];for(const ae in X)v(X[ae].object),delete X[ae];delete Y[B]}delete fe[ie],Object.keys(fe).length===0&&delete s[V]}}}function O(){q(),f=!0,c!==l&&(c=l,h(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:q,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:A,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:H}}function TT(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,v){v!==0&&(r.drawArraysInstanced(s,m,h,v),i.update(h,s,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,v);let g=0;for(let E=0;E<v;E++)g+=h[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function AT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ii&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const A=I===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==pi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wi&&!A)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(ut("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const b=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),H=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),k=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:w,maxTextureSize:D,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:H,maxVaryings:k,maxFragmentUniforms:N,maxSamples:F,samples:U}}function wT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new zs,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){const E=b.length!==0||g||s!==0||l;return l=g,s=b.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,g){i=v(b,g,0)},this.setState=function(b,g,E){const w=b.clippingPlanes,D=b.clipIntersection,y=b.clipShadows,x=r.get(b);if(!l||w===null||w.length===0||c&&!y)c?v(null):h();else{const H=c?0:s,k=H*4;let N=x.clippingState||null;m.value=N,N=v(w,g,k,E);for(let F=0;F!==k;++F)N[F]=i[F];x.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=H}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(b,g,E,w){const D=b!==null?b.length:0;let y=null;if(D!==0){if(y=m.value,w!==!0||y===null){const x=E+D*4,H=g.matrixWorldInverse;p.getNormalMatrix(H),(y===null||y.length<x)&&(y=new Float32Array(x));for(let k=0,N=E;k!==D;++k,N+=4)f.copy(b[k]).applyMatrix4(H,p),f.normal.toArray(y,N),y[N+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const us=4,Hx=[.125,.215,.35,.446,.526,.582],ks=20,CT=256,Yo=new lp,kx=new Et;let Zf=null,Kf=0,Qf=0,Jf=!1;const RT=new re;class Vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=RT}=c;Zf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Kf,Qf),this._renderer.xr.enabled=Jf,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Xs||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),Jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ca,format:Ii,colorSpace:Zc,depthBuffer:!1},l=qx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NT(c)),this._blurMaterial=UT(c,e,i),this._ggxMaterial=DT(c,e,i)}return l}_compileMaterial(e){const i=new sn(new mi,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new Ai(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],b=this._renderer,g=b.autoClear,E=b.toneMapping;b.getClearColor(kx),b.toneMapping=Zi,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(l),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new ds,new H_({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let x=!1;const H=e.background;H?H.isColor&&(y.color.copy(H),e.background=null,x=!0):(y.color.copy(kx),x=!0);for(let k=0;k<6;k++){const N=k%3;N===0?(m.up.set(0,h[k],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[k],c.y,c.z)):N===1?(m.up.set(0,0,h[k]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[k],c.z)):(m.up.set(0,h[k],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[k]));const F=this._cubeSize;zr(l,N*F,k>2?F:0,F,F),b.setRenderTarget(l),x&&b.render(D,m),b.render(e,m)}b.toneMapping=E,b.autoClear=g,e.background=H}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Xs||e.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),b=Math.sqrt(h*h-v*v),g=0+h*1.25,E=b*g,{_lodMax:w}=this,D=this._sizeLods[s],y=3*D*(s>w-us?s-w+us:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=w-i,zr(c,y,x,3*D,2*D),l.setRenderTarget(c),l.render(p,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=w-s,zr(e,y,x,3*D,2*D),l.setRenderTarget(e),l.render(p,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const v=3,b=this._lodMeshes[l];b.material=h;const g=h.uniforms,E=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*ks-1),D=c/w,y=isFinite(c)?1+Math.floor(v*D):ks;y>ks&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const x=[];let H=0;for(let I=0;I<ks;++I){const A=I/D,O=Math.exp(-A*A/2);x.push(O),I===0?H+=O:I<y&&(H+=2*O)}for(let I=0;I<x.length;I++)x[I]=x[I]/H;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:k}=this;g.dTheta.value=w,g.mipInt.value=k-s;const N=this._sizeLods[l],F=3*N*(l>k-us?l-k+us:0),U=4*(this._cubeSize-N);zr(i,F,U,3*N,2*N),m.setRenderTarget(i),m.render(b,Yo)}}function NT(r){const e=[],i=[],s=[];let l=r;const c=r-us+1+Hx.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-us?m=Hx[f-r+us-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,b=1+h,g=[v,v,b,v,b,b,v,v,b,b,v,b],E=6,w=6,D=3,y=2,x=1,H=new Float32Array(D*w*E),k=new Float32Array(y*w*E),N=new Float32Array(x*w*E);for(let U=0;U<E;U++){const I=U%3*2/3-1,A=U>2?0:-1,O=[I,A,0,I+2/3,A,0,I+2/3,A+1,0,I,A,0,I+2/3,A+1,0,I,A+1,0];H.set(O,D*w*U),k.set(g,y*w*U);const q=[U,U,U,U,U,U];N.set(q,x*w*U)}const F=new mi;F.setAttribute("position",new Qi(H,D)),F.setAttribute("uv",new Qi(k,y)),F.setAttribute("faceIndex",new Qi(N,x)),s.push(new sn(F,null)),l>us&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function qx(r,e,i){const s=new Ki(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function DT(r,e,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function UT(r,e,i){const s=new Float32Array(ks),l=new re(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Xx(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function jx(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}class K_ extends Ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new V_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ds(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Aa});c.uniforms.tEquirect.value=i;const f=new sn(l,c),p=i.minFilter;return i.minFilter===Vs&&(i.minFilter=Hn),new FS(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function LT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?f(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===vf||E===bf)if(e.has(g)){const w=e.get(g).texture;return p(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const D=new K_(w.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const E=g.mapping,w=E===vf||E===bf,D=E===Xs||E===Xr;if(w||D){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new Vx(r)),y=w?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const H=g.image;return w&&H&&H.height>0||D&&H&&m(H)?(s===null&&(s=new Vx(r)),y=w?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,E){return E===vf?g.mapping=Xs:E===bf&&(g.mapping=Xr),g}function m(g){let E=0;const w=6;for(let D=0;D<w;D++)g[D]!==void 0&&E++;return E===w}function h(g){const E=g.target;E.removeEventListener("dispose",h);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function b(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:b}}function PT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kr("WebGLRenderer: "+s+" extension not supported."),l}}}function OT(r,e,i,s){const l={},c=new WeakMap;function f(b){const g=b.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",f),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(b,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(b){const g=b.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function h(b){const g=[],E=b.index,w=b.attributes.position;let D=0;if(w===void 0)return;if(E!==null){const H=E.array;D=E.version;for(let k=0,N=H.length;k<N;k+=3){const F=H[k+0],U=H[k+1],I=H[k+2];g.push(F,U,U,I,I,F)}}else{const H=w.array;D=w.version;for(let k=0,N=H.length/3-1;k<N;k+=3){const F=k+0,U=k+1,I=k+2;g.push(F,U,U,I,I,F)}}const y=new(w.count>=65535?z_:B_)(g,1);y.version=D;const x=c.get(b);x&&e.remove(x),c.set(b,y)}function v(b){const g=c.get(b);if(g){const E=b.index;E!==null&&g.version<E.version&&h(b)}else h(b);return c.get(b)}return{get:p,update:m,getWireframeAttribute:v}}function IT(r,e,i){let s;function l(b){s=b}let c,f;function p(b){c=b.type,f=b.bytesPerElement}function m(b,g){r.drawElements(s,g,c,b*f),i.update(g,s,1)}function h(b,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,b*f,E),i.update(g,s,E))}function v(b,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,b,0,E);let D=0;for(let y=0;y<E;y++)D+=g[y];i.update(D,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function FT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ft("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function BT(r,e,i){const s=new WeakMap,l=new cn;function c(f,p,m){const h=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,b=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==b){let q=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",q)};var E=q;g!==void 0&&g.texture.dispose();const w=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],H=p.morphAttributes.normal||[],k=p.morphAttributes.color||[];let N=0;w===!0&&(N=1),D===!0&&(N=2),y===!0&&(N=3);let F=p.attributes.position.count*N,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*U*4*b),A=new O_(I,F,U,b);A.type=Wi,A.needsUpdate=!0;const O=N*4;for(let L=0;L<b;L++){const V=x[L],fe=H[L],ie=k[L],Y=F*U*4*L;for(let B=0;B<V.count;B++){const X=B*O;w===!0&&(l.fromBufferAttribute(V,B),I[Y+X+0]=l.x,I[Y+X+1]=l.y,I[Y+X+2]=l.z,I[Y+X+3]=0),D===!0&&(l.fromBufferAttribute(fe,B),I[Y+X+4]=l.x,I[Y+X+5]=l.y,I[Y+X+6]=l.z,I[Y+X+7]=0),y===!0&&(l.fromBufferAttribute(ie,B),I[Y+X+8]=l.x,I[Y+X+9]=l.y,I[Y+X+10]=l.z,I[Y+X+11]=ie.itemSize===4?l.w:1)}}g={count:b,texture:A,size:new Pt(F,U)},s.set(p,g),p.addEventListener("dispose",q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let w=0;for(let y=0;y<h.length;y++)w+=h[y];const D=p.morphTargetsRelative?1:1-w;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function zT(r,e,i,s,l){let c=new WeakMap;function f(h){const v=l.render.frame,b=h.geometry,g=e.get(h,b);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const GT={[v_]:"LINEAR_TONE_MAPPING",[b_]:"REINHARD_TONE_MAPPING",[y_]:"CINEON_TONE_MAPPING",[M_]:"ACES_FILMIC_TONE_MAPPING",[E_]:"AGX_TONE_MAPPING",[T_]:"NEUTRAL_TONE_MAPPING",[S_]:"CUSTOM_TONE_MAPPING"};function HT(r,e,i,s,l,c){const f=new Ki(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new jr(e,i):void 0}),p=new Ki(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),m=new mi;m.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const h=new DS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new sn(m,h),b=new lp(-1,1,1,-1,0,1);let g=null,E=null,w=!1,D,y=null,x=[],H=!1;this.setSize=function(k,N){f.setSize(k,N),p.setSize(k,N);for(let F=0;F<x.length;F++){const U=x[F];U.setSize&&U.setSize(k,N)}},this.setEffects=function(k){x=k,H=x.length>0&&x[0].isRenderPass===!0;const N=f.width,F=f.height;for(let U=0;U<x.length;U++){const I=x[U];I.setSize&&I.setSize(N,F)}},this.begin=function(k,N){if(w||k.toneMapping===Zi&&x.length===0)return!1;if(y=N,N!==null){const F=N.width,U=N.height;(f.width!==F||f.height!==U)&&this.setSize(F,U)}return H===!1&&k.setRenderTarget(f),D=k.toneMapping,k.toneMapping=Zi,!0},this.hasRenderPass=function(){return H},this.end=function(k,N){k.toneMapping=D,w=!0;let F=f,U=p;for(let I=0;I<x.length;I++){const A=x[I];if(A.enabled!==!1&&(A.render(k,U,F,N),A.needsSwap!==!1)){const O=F;F=U,U=O}}if(g!==k.outputColorSpace||E!==k.toneMapping){g=k.outputColorSpace,E=k.toneMapping,h.defines={},Ut.getTransfer(g)===Yt&&(h.defines.SRGB_TRANSFER="");const I=GT[E];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=F.texture,k.setRenderTarget(y),k.render(v,b),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Q_=new Xn,jh=new jr(1,1),J_=new O_,$_=new rS,ev=new V_,Wx=[],Yx=[],Zx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function Kr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Wx[l];if(c===void 0&&(c=new Float32Array(l),Wx[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function An(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function wn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function ru(r,e){let i=Yx[e];i===void 0&&(i=new Int32Array(e),Yx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function kT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2fv(this.addr,e),wn(i,e)}}function qT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;r.uniform3fv(this.addr,e),wn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4fv(this.addr,e),wn(i,e)}}function jT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(An(i,s))return;Qx.set(s),r.uniformMatrix2fv(this.addr,!1,Qx),wn(i,s)}}function WT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(An(i,s))return;Kx.set(s),r.uniformMatrix3fv(this.addr,!1,Kx),wn(i,s)}}function YT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(An(i,s))return;Zx.set(s),r.uniformMatrix4fv(this.addr,!1,Zx),wn(i,s)}}function ZT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function KT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2iv(this.addr,e),wn(i,e)}}function QT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;r.uniform3iv(this.addr,e),wn(i,e)}}function JT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4iv(this.addr,e),wn(i,e)}}function $T(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function eA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2uiv(this.addr,e),wn(i,e)}}function tA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;r.uniform3uiv(this.addr,e),wn(i,e)}}function nA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4uiv(this.addr,e),wn(i,e)}}function iA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jh.compareFunction=i.isReversedDepthBuffer()?sp:ap,c=jh):c=Q_,i.setTexture2D(e||c,l)}function aA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||$_,l)}function sA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ev,l)}function rA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||J_,l)}function oA(r){switch(r){case 5126:return kT;case 35664:return VT;case 35665:return qT;case 35666:return XT;case 35674:return jT;case 35675:return WT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}function lA(r,e){r.uniform1fv(this.addr,e)}function cA(r,e){const i=Kr(e,this.size,2);r.uniform2fv(this.addr,i)}function uA(r,e){const i=Kr(e,this.size,3);r.uniform3fv(this.addr,i)}function dA(r,e){const i=Kr(e,this.size,4);r.uniform4fv(this.addr,i)}function fA(r,e){const i=Kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function hA(r,e){const i=Kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function pA(r,e){const i=Kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function mA(r,e){r.uniform1iv(this.addr,e)}function gA(r,e){r.uniform2iv(this.addr,e)}function xA(r,e){r.uniform3iv(this.addr,e)}function _A(r,e){r.uniform4iv(this.addr,e)}function vA(r,e){r.uniform1uiv(this.addr,e)}function bA(r,e){r.uniform2uiv(this.addr,e)}function yA(r,e){r.uniform3uiv(this.addr,e)}function MA(r,e){r.uniform4uiv(this.addr,e)}function SA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=jh:f=Q_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function EA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||$_,c[f])}function TA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ev,c[f])}function AA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||J_,c[f])}function wA(r){switch(r){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return dA;case 35674:return fA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return xA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return bA;case 36295:return yA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}class CA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=oA(i.type)}}class RA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wA(i.type)}}class NA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const $f=/(\w+)(\])?(\[|\.)?/g;function Jx(r,e){r.seq.push(e),r.map[e.id]=e}function DA(r,e,i){const s=r.name,l=s.length;for($f.lastIndex=0;;){const c=$f.exec(s),f=$f.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Jx(i,h===void 0?new CA(p,r,e):new RA(p,r,e));break}else{let b=i.map[p];b===void 0&&(b=new NA(p),Jx(i,b)),i=b}}}class qc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);DA(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function $x(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const UA=37297;let LA=0;function PA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const e_=new ft;function OA(r){Ut._getMatrix(e_,Ut.workingColorSpace,r);const e=`mat3( ${e_.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(r)){case Kc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function t_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+PA(r.getShaderSource(e),p)}else return c}function IA(r,e){const i=OA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const FA={[v_]:"Linear",[b_]:"Reinhard",[y_]:"Cineon",[M_]:"ACESFilmic",[E_]:"AgX",[T_]:"Neutral",[S_]:"Custom"};function BA(r,e){const i=FA[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new re;function zA(){Ut.getLuminanceCoefficients(Bc);const r=Bc.x.toFixed(4),e=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function HA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function kA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function Qo(r){return r!==""}function n_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(r){return r.replace(VA,XA)}const qA=new Map;function XA(r,e){let i=xt[e];if(i===void 0){const s=qA.get(e);if(s!==void 0)i=xt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wh(i)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(r){return r.replace(jA,WA)}function WA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function s_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const YA={[zc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function ZA(r){return YA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KA={[Xs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function QA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":KA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const JA={[Xr]:"ENVMAP_MODE_REFRACTION"};function $A(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":JA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e3={[__]:"ENVMAP_BLENDING_MULTIPLY",[zM]:"ENVMAP_BLENDING_MIX",[GM]:"ENVMAP_BLENDING_ADD"};function t3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":e3[r.combine]||"ENVMAP_BLENDING_NONE"}function n3(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function i3(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=ZA(i),h=QA(i),v=$A(i),b=t3(i),g=n3(i),E=GA(i),w=HA(c),D=l.createProgram();let y,x,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Qo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(y=[s_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[s_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Zi?BA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,IA("linearToOutputTexel",i.outputColorSpace),zA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=Wh(f),f=n_(f,i),f=i_(f,i),p=Wh(p),p=n_(p,i),p=i_(p,i),f=a_(f),p=a_(p),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const k=H+y+f,N=H+x+p,F=$x(l,l.VERTEX_SHADER,k),U=$x(l,l.FRAGMENT_SHADER,N);l.attachShader(D,F),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(L){if(r.debug.checkShaderErrors){const V=l.getProgramInfoLog(D)||"",fe=l.getShaderInfoLog(F)||"",ie=l.getShaderInfoLog(U)||"",Y=V.trim(),B=fe.trim(),X=ie.trim();let ae=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,F,U);else{const G=t_(l,F,"vertex"),M=t_(l,U,"fragment");Ft("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+G+`
`+M)}else Y!==""?ut("WebGLProgram: Program Info Log:",Y):(B===""||X==="")&&(ge=!1);ge&&(L.diagnostics={runnable:ae,programLog:Y,vertexShader:{log:B,prefix:y},fragmentShader:{log:X,prefix:x}})}l.deleteShader(F),l.deleteShader(U),A=new qc(l,D),O=kA(l,D)}let A;this.getUniforms=function(){return A===void 0&&I(this),A};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(D,UA)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=LA++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=F,this.fragmentShader=U,this}let a3=0;class s3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new r3(e),i.set(e,s)),s}}class r3{constructor(e){this.id=a3++,this.code=e,this.usedTimes=0}}function o3(r){return r===js||r===Wc||r===Yc}function l3(r,e,i,s,l,c){const f=new I_,p=new s3,m=new Set,h=[],v=new Map,b=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return m.add(A),A===0?"uv":`uv${A}`}function D(A,O,q,L,V,fe){const ie=L.fog,Y=V.geometry,B=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?L.environment:null,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ae=e.get(A.envMap||B,X),ge=ae&&ae.mapping===nu?ae.image.height:null,G=E[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&ut("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const M=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,z=M!==void 0?M.length:0;let J=0;Y.morphAttributes.position!==void 0&&(J=1),Y.morphAttributes.normal!==void 0&&(J=2),Y.morphAttributes.color!==void 0&&(J=3);let _e,Se,Q,se;if(G){const Ve=ji[G];_e=Ve.vertexShader,Se=Ve.fragmentShader}else{_e=A.vertexShader,Se=A.fragmentShader;const Ve=p.getVertexShaderStage(A),gt=p.getFragmentShaderStage(A);p.update(A,Ve,gt),Q=Ve.id,se=gt.id}const me=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),qe=V.isInstancedMesh===!0,Oe=V.isBatchedMesh===!0,lt=!!A.map,Qe=!!A.matcap,Xe=!!ae,st=!!A.aoMap,rt=!!A.lightMap,vt=!!A.bumpMap&&A.wireframe===!1,Ct=!!A.normalMap,Tt=!!A.displacementMap,Rt=!!A.emissiveMap,Ot=!!A.metalnessMap,Zt=!!A.roughnessMap,$=A.anisotropy>0,Nt=A.clearcoat>0,_t=A.dispersion>0,P=A.iridescence>0,T=A.sheen>0,te=A.transmission>0,ce=$&&!!A.anisotropyMap,ve=Nt&&!!A.clearcoatMap,Ne=Nt&&!!A.clearcoatNormalMap,Pe=Nt&&!!A.clearcoatRoughnessMap,be=P&&!!A.iridescenceMap,ye=P&&!!A.iridescenceThicknessMap,Ue=T&&!!A.sheenColorMap,He=T&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ie=!!A.specularColorMap,$e=!!A.specularIntensityMap,et=te&&!!A.transmissionMap,ct=te&&!!A.thicknessMap,K=!!A.gradientMap,De=!!A.alphaMap,Te=A.alphaTest>0,Le=!!A.alphaHash,Ce=!!A.extensions;let Me=Zi;A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Me=r.toneMapping);const ke={shaderID:G,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Se,defines:A.defines,customVertexShaderID:Q,customFragmentShaderID:se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Oe,batchingColor:Oe&&V._colorsTexture!==null,instancing:qe,instancingColor:qe&&V.instanceColor!==null,instancingMorph:qe&&V.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:lt,matcap:Qe,envMap:Xe,envMapMode:Xe&&ae.mapping,envMapCubeUVHeight:ge,aoMap:st,lightMap:rt,bumpMap:vt,normalMap:Ct,displacementMap:Tt,emissiveMap:Rt,normalMapObjectSpace:Ct&&A.normalMapType===VM,normalMapTangentSpace:Ct&&A.normalMapType===qh,packedNormalMap:Ct&&A.normalMapType===qh&&o3(A.normalMap.format),metalnessMap:Ot,roughnessMap:Zt,anisotropy:$,anisotropyMap:ce,clearcoat:Nt,clearcoatMap:ve,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Pe,dispersion:_t,iridescence:P,iridescenceMap:be,iridescenceThicknessMap:ye,sheen:T,sheenColorMap:Ue,sheenRoughnessMap:He,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:$e,transmission:te,transmissionMap:et,thicknessMap:ct,gradientMap:K,opaque:A.transparent===!1&&A.blending===Hr&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:Te,alphaHash:Le,combine:A.combine,mapUv:lt&&w(A.map.channel),aoMapUv:st&&w(A.aoMap.channel),lightMapUv:rt&&w(A.lightMap.channel),bumpMapUv:vt&&w(A.bumpMap.channel),normalMapUv:Ct&&w(A.normalMap.channel),displacementMapUv:Tt&&w(A.displacementMap.channel),emissiveMapUv:Rt&&w(A.emissiveMap.channel),metalnessMapUv:Ot&&w(A.metalnessMap.channel),roughnessMapUv:Zt&&w(A.roughnessMap.channel),anisotropyMapUv:ce&&w(A.anisotropyMap.channel),clearcoatMapUv:ve&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&w(A.sheenRoughnessMap.channel),specularMapUv:Fe&&w(A.specularMap.channel),specularColorMapUv:Ie&&w(A.specularColorMap.channel),specularIntensityMapUv:$e&&w(A.specularIntensityMap.channel),transmissionMapUv:et&&w(A.transmissionMap.channel),thicknessMapUv:ct&&w(A.thicknessMap.channel),alphaMapUv:De&&w(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ct||$),vertexNormals:!!Y.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(lt||De),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Y.attributes.normal===void 0&&Ct===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:J,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:lt&&A.map.isVideoTexture===!0&&Ut.getTransfer(A.map.colorSpace)===Yt,decodeVideoTextureEmissive:Rt&&A.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(A.emissiveMap.colorSpace)===Yt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ea,flipSided:A.side===ti,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ke.vertexUv1s=m.has(1),ke.vertexUv2s=m.has(2),ke.vertexUv3s=m.has(3),m.clear(),ke}function y(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const q in A.defines)O.push(q),O.push(A.defines[q]);return A.isRawShaderMaterial===!1&&(x(O,A),H(O,A),O.push(r.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function x(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function H(A,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),A.push(f.mask)}function k(A){const O=E[A.type];let q;if(O){const L=ji[O];q=CS.clone(L.uniforms)}else q=A.uniforms;return q}function N(A,O){let q=v.get(O);return q!==void 0?++q.usedTimes:(q=new i3(r,O,A,l),h.push(q),v.set(O,q)),q}function F(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),v.delete(A.cacheKey),A.destroy()}}function U(A){p.remove(A)}function I(){p.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:k,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:h,dispose:I}}function c3(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function u3(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function o_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,w,D,y,x){let H=r[e];return H===void 0?(H={id:g.id,object:g,geometry:E,material:w,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:y,group:x},r[e]=H):(H.id=g.id,H.object=g,H.geometry=E,H.material=w,H.materialVariant=f(g),H.groupOrder=D,H.renderOrder=g.renderOrder,H.z=y,H.group=x),e++,H}function m(g,E,w,D,y,x){const H=p(g,E,w,D,y,x);w.transmission>0?s.push(H):w.transparent===!0?l.push(H):i.push(H)}function h(g,E,w,D,y,x){const H=p(g,E,w,D,y,x);w.transmission>0?s.unshift(H):w.transparent===!0?l.unshift(H):i.unshift(H)}function v(g,E,w){i.length>1&&i.sort(g||u3),s.length>1&&s.sort(E||r_),l.length>1&&l.sort(E||r_),w&&(i.reverse(),s.reverse(),l.reverse())}function b(){for(let g=e,E=r.length;g<E;g++){const w=r[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:b,sort:v}}function d3(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new o_,r.set(s,[f])):l>=c.length?(f=new o_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function f3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Et};break;case"SpotLight":i={position:new re,direction:new re,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=i,i}}}function h3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let p3=0;function m3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function g3(r){const e=new f3,i=h3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new re);const l=new re,c=new un,f=new un;function p(h){let v=0,b=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let E=0,w=0,D=0,y=0,x=0,H=0,k=0,N=0,F=0,U=0,I=0;h.sort(m3);for(let O=0,q=h.length;O<q;O++){const L=h[O],V=L.color,fe=L.intensity,ie=L.distance;let Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===js?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)v+=V.r*fe,b+=V.g*fe,g+=V.b*fe;else if(L.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(L.sh.coefficients[B],fe);I++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,ae=i.get(L);ae.shadowIntensity=X.intensity,ae.shadowBias=X.bias,ae.shadowNormalBias=X.normalBias,ae.shadowRadius=X.radius,ae.shadowMapSize=X.mapSize,s.directionalShadow[E]=ae,s.directionalShadowMap[E]=Y,s.directionalShadowMatrix[E]=L.shadow.matrix,H++}s.directional[E]=B,E++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(V).multiplyScalar(fe),B.distance=ie,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,s.spot[D]=B;const X=L.shadow;if(L.map&&(s.spotLightMap[F]=L.map,F++,X.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[D]=X.matrix,L.castShadow){const ae=i.get(L);ae.shadowIntensity=X.intensity,ae.shadowBias=X.bias,ae.shadowNormalBias=X.normalBias,ae.shadowRadius=X.radius,ae.shadowMapSize=X.mapSize,s.spotShadow[D]=ae,s.spotShadowMap[D]=Y,N++}D++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(V).multiplyScalar(fe),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=B,y++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const X=L.shadow,ae=i.get(L);ae.shadowIntensity=X.intensity,ae.shadowBias=X.bias,ae.shadowNormalBias=X.normalBias,ae.shadowRadius=X.radius,ae.shadowMapSize=X.mapSize,ae.shadowCameraNear=X.camera.near,ae.shadowCameraFar=X.camera.far,s.pointShadow[w]=ae,s.pointShadowMap[w]=Y,s.pointShadowMatrix[w]=L.shadow.matrix,k++}s.point[w]=B,w++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(fe),B.groundColor.copy(L.groundColor).multiplyScalar(fe),s.hemi[x]=B,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=b,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==E||A.pointLength!==w||A.spotLength!==D||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==H||A.numPointShadows!==k||A.numSpotShadows!==N||A.numSpotMaps!==F||A.numLightProbes!==I)&&(s.directional.length=E,s.spot.length=D,s.rectArea.length=y,s.point.length=w,s.hemi.length=x,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=k,s.pointShadowMap.length=k,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=k,s.spotLightMatrix.length=N+F-U,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=I,A.directionalLength=E,A.pointLength=w,A.spotLength=D,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=H,A.numPointShadows=k,A.numSpotShadows=N,A.numSpotMaps=F,A.numLightProbes=I,s.version=p3++)}function m(h,v){let b=0,g=0,E=0,w=0,D=0;const y=v.matrixWorldInverse;for(let x=0,H=h.length;x<H;x++){const k=h[x];if(k.isDirectionalLight){const N=s.directional[b];N.direction.setFromMatrixPosition(k.matrixWorld),l.setFromMatrixPosition(k.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),b++}else if(k.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(k.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(k.matrixWorld),l.setFromMatrixPosition(k.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(k.isRectAreaLight){const N=s.rectArea[w];N.position.setFromMatrixPosition(k.matrixWorld),N.position.applyMatrix4(y),f.identity(),c.copy(k.matrixWorld),c.premultiply(y),f.extractRotation(c),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),w++}else if(k.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(k.matrixWorld),N.position.applyMatrix4(y),g++}else if(k.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(k.matrixWorld),N.direction.transformDirection(y),D++}}}return{setup:p,setupView:m,state:s}}function l_(r){const e=new g3(r),i=[],s=[],l=[];function c(g){b.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const b={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:b,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function x3(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new l_(r),e.set(l,[p])):c>=f.length?(p=new l_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const _3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b3=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],y3=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],c_=new un,Zo=new re,eh=new re;function M3(r,e,i){let s=new op;const l=new Pt,c=new Pt,f=new cn,p=new US,m=new LS,h={},v=i.maxTextureSize,b={[fs]:ti,[ti]:fs,[Ea]:Ea},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:_3,fragmentShader:v3}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const w=new mi;w.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new sn(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let x=this.type;this.render=function(U,I,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===x_&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const O=r.getRenderTarget(),q=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Aa),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const fe=x!==this.type;fe&&I.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(Y=>Y.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,Y=U.length;ie<Y;ie++){const B=U[ie],X=B.shadow;if(X===void 0){ut("WebGLShadowMap:",B,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ae=X.getFrameExtents();l.multiply(ae),c.copy(X.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ae.x),l.x=c.x*ae.x,X.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ae.y),l.y=c.y*ae.y,X.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ge,X.map===null||fe===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ko){if(B.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ki(l.x,l.y,{format:js,type:Ca,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),X.map.texture.name=B.name+".shadowMap",X.map.depthTexture=new jr(l.x,l.y,Wi),X.map.depthTexture.name=B.name+".shadowMapDepth",X.map.depthTexture.format=Ra,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On}else B.isPointLight?(X.map=new K_(l.x),X.map.depthTexture=new AS(l.x,Ji)):(X.map=new Ki(l.x,l.y),X.map.depthTexture=new jr(l.x,l.y,Ji)),X.map.depthTexture.name=B.name+".shadowMap",X.map.depthTexture.format=Ra,this.type===zc?(X.map.depthTexture.compareFunction=ge?sp:ap,X.map.depthTexture.minFilter=Hn,X.map.depthTexture.magFilter=Hn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On);X.camera.updateProjectionMatrix()}const G=X.map.isWebGLCubeRenderTarget?6:1;for(let M=0;M<G;M++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,M),r.clear();else{M===0&&(r.setRenderTarget(X.map),r.clear());const z=X.getViewport(M);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),V.viewport(f)}if(B.isPointLight){const z=X.camera,J=X.matrix,_e=B.distance||z.far;_e!==z.far&&(z.far=_e,z.updateProjectionMatrix()),Zo.setFromMatrixPosition(B.matrixWorld),z.position.copy(Zo),eh.copy(z.position),eh.add(b3[M]),z.up.copy(y3[M]),z.lookAt(eh),z.updateMatrixWorld(),J.makeTranslation(-Zo.x,-Zo.y,-Zo.z),c_.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X._frustum.setFromProjectionMatrix(c_,z.coordinateSystem,z.reversedDepth)}else X.updateMatrices(B);s=X.getFrustum(),N(I,A,X.camera,B,this.type)}X.isPointLightShadow!==!0&&this.type===Ko&&H(X,A),X.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(O,q,L)};function H(U,I){const A=e.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ki(l.x,l.y,{format:js,type:Ca})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(I,null,A,g,D,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(I,null,A,E,D,null)}function k(U,I,A,O){let q=null;const L=A.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(L!==void 0)q=L;else if(q=A.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=q.uuid,fe=I.uuid;let ie=h[V];ie===void 0&&(ie={},h[V]=ie);let Y=ie[fe];Y===void 0&&(Y=q.clone(),ie[fe]=Y,I.addEventListener("dispose",F)),q=Y}if(q.visible=I.visible,q.wireframe=I.wireframe,O===Ko?q.side=I.shadowSide!==null?I.shadowSide:I.side:q.side=I.shadowSide!==null?I.shadowSide:b[I.side],q.alphaMap=I.alphaMap,q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,q.map=I.map,q.clipShadows=I.clipShadows,q.clippingPlanes=I.clippingPlanes,q.clipIntersection=I.clipIntersection,q.displacementMap=I.displacementMap,q.displacementScale=I.displacementScale,q.displacementBias=I.displacementBias,q.wireframeLinewidth=I.wireframeLinewidth,q.linewidth=I.linewidth,A.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const V=r.properties.get(q);V.light=A}return q}function N(U,I,A,O,q){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&q===Ko)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,U.matrixWorld);const fe=e.update(U),ie=U.material;if(Array.isArray(ie)){const Y=fe.groups;for(let B=0,X=Y.length;B<X;B++){const ae=Y[B],ge=ie[ae.materialIndex];if(ge&&ge.visible){const G=k(U,ge,O,q);U.onBeforeShadow(r,U,I,A,fe,G,ae),r.renderBufferDirect(A,null,fe,G,U,ae),U.onAfterShadow(r,U,I,A,fe,G,ae)}}}else if(ie.visible){const Y=k(U,ie,O,q);U.onBeforeShadow(r,U,I,A,fe,Y,null),r.renderBufferDirect(A,null,fe,Y,U,null),U.onAfterShadow(r,U,I,A,fe,Y,null)}}const V=U.children;for(let fe=0,ie=V.length;fe<ie;fe++)N(V[fe],I,A,O,q)}function F(U){U.target.removeEventListener("dispose",F);for(const A in h){const O=h[A],q=U.target.uuid;q in O&&(O[q].dispose(),delete O[q])}}}function S3(r,e){function i(){let K=!1;const De=new cn;let Te=null;const Le=new cn(0,0,0,0);return{setMask:function(Ce){Te!==Ce&&!K&&(r.colorMask(Ce,Ce,Ce,Ce),Te=Ce)},setLocked:function(Ce){K=Ce},setClear:function(Ce,Me,ke,Ve,gt){gt===!0&&(Ce*=Ve,Me*=Ve,ke*=Ve),De.set(Ce,Me,ke,Ve),Le.equals(De)===!1&&(r.clearColor(Ce,Me,ke,Ve),Le.copy(De))},reset:function(){K=!1,Te=null,Le.set(-1,0,0,0)}}}function s(){let K=!1,De=!1,Te=null,Le=null,Ce=null;return{setReversed:function(Me){if(De!==Me){const ke=e.get("EXT_clip_control");Me?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),De=Me;const Ve=Ce;Ce=null,this.setClear(Ve)}},getReversed:function(){return De},setTest:function(Me){Me?me(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Me){Te!==Me&&!K&&(r.depthMask(Me),Te=Me)},setFunc:function(Me){if(De&&(Me=$M[Me]),Le!==Me){switch(Me){case sh:r.depthFunc(r.NEVER);break;case rh:r.depthFunc(r.ALWAYS);break;case oh:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case lh:r.depthFunc(r.EQUAL);break;case ch:r.depthFunc(r.GEQUAL);break;case uh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=Me}},setLocked:function(Me){K=Me},setClear:function(Me){Ce!==Me&&(Ce=Me,De&&(Me=1-Me),r.clearDepth(Me))},reset:function(){K=!1,Te=null,Le=null,Ce=null,De=!1}}}function l(){let K=!1,De=null,Te=null,Le=null,Ce=null,Me=null,ke=null,Ve=null,gt=null;return{setTest:function(bt){K||(bt?me(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(bt){De!==bt&&!K&&(r.stencilMask(bt),De=bt)},setFunc:function(bt,Mn,tn){(Te!==bt||Le!==Mn||Ce!==tn)&&(r.stencilFunc(bt,Mn,tn),Te=bt,Le=Mn,Ce=tn)},setOp:function(bt,Mn,tn){(Me!==bt||ke!==Mn||Ve!==tn)&&(r.stencilOp(bt,Mn,tn),Me=bt,ke=Mn,Ve=tn)},setLocked:function(bt){K=bt},setClear:function(bt){gt!==bt&&(r.clearStencil(bt),gt=bt)},reset:function(){K=!1,De=null,Te=null,Le=null,Ce=null,Me=null,ke=null,Ve=null,gt=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},b={},g={},E=new WeakMap,w=[],D=null,y=!1,x=null,H=null,k=null,N=null,F=null,U=null,I=null,A=new Et(0,0,0),O=0,q=!1,L=null,V=null,fe=null,ie=null,Y=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ae=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ge)[1]),X=ae>=1):ge.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),X=ae>=2);let G=null,M={};const z=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),_e=new cn().fromArray(z),Se=new cn().fromArray(J);function Q(K,De,Te,Le){const Ce=new Uint8Array(4),Me=r.createTexture();r.bindTexture(K,Me),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<Te;ke++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(De+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return Me}const se={};se[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),me(r.DEPTH_TEST),f.setFunc(qr),vt(!1),Ct(ox),me(r.CULL_FACE),st(Aa);function me(K){v[K]!==!0&&(r.enable(K),v[K]=!0)}function Re(K){v[K]!==!1&&(r.disable(K),v[K]=!1)}function qe(K,De){return g[K]!==De?(r.bindFramebuffer(K,De),g[K]=De,K===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),K===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Oe(K,De){let Te=w,Le=!1;if(K){Te=E.get(De),Te===void 0&&(Te=[],E.set(De,Te));const Ce=K.textures;if(Te.length!==Ce.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,ke=Ce.length;Me<ke;Me++)Te[Me]=r.COLOR_ATTACHMENT0+Me;Te.length=Ce.length,Le=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Le=!0);Le&&r.drawBuffers(Te)}function lt(K){return D!==K?(r.useProgram(K),D=K,!0):!1}const Qe={[Gs]:r.FUNC_ADD,[MM]:r.FUNC_SUBTRACT,[SM]:r.FUNC_REVERSE_SUBTRACT};Qe[EM]=r.MIN,Qe[TM]=r.MAX;const Xe={[AM]:r.ZERO,[wM]:r.ONE,[CM]:r.SRC_COLOR,[ih]:r.SRC_ALPHA,[PM]:r.SRC_ALPHA_SATURATE,[UM]:r.DST_COLOR,[NM]:r.DST_ALPHA,[RM]:r.ONE_MINUS_SRC_COLOR,[ah]:r.ONE_MINUS_SRC_ALPHA,[LM]:r.ONE_MINUS_DST_COLOR,[DM]:r.ONE_MINUS_DST_ALPHA,[OM]:r.CONSTANT_COLOR,[IM]:r.ONE_MINUS_CONSTANT_COLOR,[FM]:r.CONSTANT_ALPHA,[BM]:r.ONE_MINUS_CONSTANT_ALPHA};function st(K,De,Te,Le,Ce,Me,ke,Ve,gt,bt){if(K===Aa){y===!0&&(Re(r.BLEND),y=!1);return}if(y===!1&&(me(r.BLEND),y=!0),K!==yM){if(K!==x||bt!==q){if((H!==Gs||F!==Gs)&&(r.blendEquation(r.FUNC_ADD),H=Gs,F=Gs),bt)switch(K){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lx:r.blendFunc(r.ONE,r.ONE);break;case cx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ux:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ft("WebGLState: Invalid blending: ",K);break}else switch(K){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cx:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ux:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",K);break}k=null,N=null,U=null,I=null,A.set(0,0,0),O=0,x=K,q=bt}return}Ce=Ce||De,Me=Me||Te,ke=ke||Le,(De!==H||Ce!==F)&&(r.blendEquationSeparate(Qe[De],Qe[Ce]),H=De,F=Ce),(Te!==k||Le!==N||Me!==U||ke!==I)&&(r.blendFuncSeparate(Xe[Te],Xe[Le],Xe[Me],Xe[ke]),k=Te,N=Le,U=Me,I=ke),(Ve.equals(A)===!1||gt!==O)&&(r.blendColor(Ve.r,Ve.g,Ve.b,gt),A.copy(Ve),O=gt),x=K,q=!1}function rt(K,De){K.side===Ea?Re(r.CULL_FACE):me(r.CULL_FACE);let Te=K.side===ti;De&&(Te=!Te),vt(Te),K.blending===Hr&&K.transparent===!1?st(Aa):st(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),c.setMask(K.colorWrite);const Le=K.stencilWrite;p.setTest(Le),Le&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Rt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(K){L!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),L=K)}function Ct(K){K!==vM?(me(r.CULL_FACE),K!==V&&(K===ox?r.cullFace(r.BACK):K===bM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),V=K}function Tt(K){K!==fe&&(X&&r.lineWidth(K),fe=K)}function Rt(K,De,Te){K?(me(r.POLYGON_OFFSET_FILL),(ie!==De||Y!==Te)&&(ie=De,Y=Te,f.getReversed()&&(De=-De),r.polygonOffset(De,Te))):Re(r.POLYGON_OFFSET_FILL)}function Ot(K){K?me(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Zt(K){K===void 0&&(K=r.TEXTURE0+B-1),G!==K&&(r.activeTexture(K),G=K)}function $(K,De,Te){Te===void 0&&(G===null?Te=r.TEXTURE0+B-1:Te=G);let Le=M[Te];Le===void 0&&(Le={type:void 0,texture:void 0},M[Te]=Le),(Le.type!==K||Le.texture!==De)&&(G!==Te&&(r.activeTexture(Te),G=Te),r.bindTexture(K,De||se[K]),Le.type=K,Le.texture=De)}function Nt(){const K=M[G];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function _t(){try{r.compressedTexImage2D(...arguments)}catch(K){Ft("WebGLState:",K)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(K){Ft("WebGLState:",K)}}function T(){try{r.texSubImage2D(...arguments)}catch(K){Ft("WebGLState:",K)}}function te(){try{r.texSubImage3D(...arguments)}catch(K){Ft("WebGLState:",K)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(K){Ft("WebGLState:",K)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(K){Ft("WebGLState:",K)}}function Ne(){try{r.texStorage2D(...arguments)}catch(K){Ft("WebGLState:",K)}}function Pe(){try{r.texStorage3D(...arguments)}catch(K){Ft("WebGLState:",K)}}function be(){try{r.texImage2D(...arguments)}catch(K){Ft("WebGLState:",K)}}function ye(){try{r.texImage3D(...arguments)}catch(K){Ft("WebGLState:",K)}}function Ue(K){return b[K]!==void 0?b[K]:r.getParameter(K)}function He(K,De){b[K]!==De&&(r.pixelStorei(K,De),b[K]=De)}function Fe(K){_e.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),_e.copy(K))}function Ie(K){Se.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),Se.copy(K))}function $e(K,De){let Te=h.get(De);Te===void 0&&(Te=new WeakMap,h.set(De,Te));let Le=Te.get(K);Le===void 0&&(Le=r.getUniformBlockIndex(De,K.name),Te.set(K,Le))}function et(K,De){const Le=h.get(De).get(K);m.get(De)!==Le&&(r.uniformBlockBinding(De,Le,K.__bindingPointIndex),m.set(De,Le))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},b={},G=null,M={},g={},E=new WeakMap,w=[],D=null,y=!1,x=null,H=null,k=null,N=null,F=null,U=null,I=null,A=new Et(0,0,0),O=0,q=!1,L=null,V=null,fe=null,ie=null,Y=null,_e.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:me,disable:Re,bindFramebuffer:qe,drawBuffers:Oe,useProgram:lt,setBlending:st,setMaterial:rt,setFlipSided:vt,setCullFace:Ct,setLineWidth:Tt,setPolygonOffset:Rt,setScissorTest:Ot,activeTexture:Zt,bindTexture:$,unbindTexture:Nt,compressedTexImage2D:_t,compressedTexImage3D:P,texImage2D:be,texImage3D:ye,pixelStorei:He,getParameter:Ue,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:T,texSubImage3D:te,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Fe,viewport:Ie,reset:ct}}function E3(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,v=new WeakMap,b=new Set;let g;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,T){return w?new OffscreenCanvas(P,T):Qc("canvas")}function y(P,T,te){let ce=1;const ve=_t(P);if((ve.width>te||ve.height>te)&&(ce=te/Math.max(ve.width,ve.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ne=Math.floor(ce*ve.width),Pe=Math.floor(ce*ve.height);g===void 0&&(g=D(Ne,Pe));const be=T?D(Ne,Pe):g;return be.width=Ne,be.height=Pe,be.getContext("2d").drawImage(P,0,0,Ne,Pe),ut("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ne+"x"+Pe+")."),be}else return"data"in P&&ut("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function x(P){return P.generateMipmaps}function H(P){r.generateMipmap(P)}function k(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,T,te,ce,ve,Ne=!1){if(P!==null){if(r[P]!==void 0)return r[P];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;ce&&(Pe=e.get("EXT_texture_norm16"),Pe||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let be=T;if(T===r.RED&&(te===r.FLOAT&&(be=r.R32F),te===r.HALF_FLOAT&&(be=r.R16F),te===r.UNSIGNED_BYTE&&(be=r.R8),te===r.UNSIGNED_SHORT&&Pe&&(be=Pe.R16_EXT),te===r.SHORT&&Pe&&(be=Pe.R16_SNORM_EXT)),T===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.R8UI),te===r.UNSIGNED_SHORT&&(be=r.R16UI),te===r.UNSIGNED_INT&&(be=r.R32UI),te===r.BYTE&&(be=r.R8I),te===r.SHORT&&(be=r.R16I),te===r.INT&&(be=r.R32I)),T===r.RG&&(te===r.FLOAT&&(be=r.RG32F),te===r.HALF_FLOAT&&(be=r.RG16F),te===r.UNSIGNED_BYTE&&(be=r.RG8),te===r.UNSIGNED_SHORT&&Pe&&(be=Pe.RG16_EXT),te===r.SHORT&&Pe&&(be=Pe.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.RG8UI),te===r.UNSIGNED_SHORT&&(be=r.RG16UI),te===r.UNSIGNED_INT&&(be=r.RG32UI),te===r.BYTE&&(be=r.RG8I),te===r.SHORT&&(be=r.RG16I),te===r.INT&&(be=r.RG32I)),T===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.RGB8UI),te===r.UNSIGNED_SHORT&&(be=r.RGB16UI),te===r.UNSIGNED_INT&&(be=r.RGB32UI),te===r.BYTE&&(be=r.RGB8I),te===r.SHORT&&(be=r.RGB16I),te===r.INT&&(be=r.RGB32I)),T===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(be=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(be=r.RGBA16UI),te===r.UNSIGNED_INT&&(be=r.RGBA32UI),te===r.BYTE&&(be=r.RGBA8I),te===r.SHORT&&(be=r.RGBA16I),te===r.INT&&(be=r.RGBA32I)),T===r.RGB&&(te===r.UNSIGNED_SHORT&&Pe&&(be=Pe.RGB16_EXT),te===r.SHORT&&Pe&&(be=Pe.RGB16_SNORM_EXT),te===r.UNSIGNED_INT_5_9_9_9_REV&&(be=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(be=r.R11F_G11F_B10F)),T===r.RGBA){const ye=Ne?Kc:Ut.getTransfer(ve);te===r.FLOAT&&(be=r.RGBA32F),te===r.HALF_FLOAT&&(be=r.RGBA16F),te===r.UNSIGNED_BYTE&&(be=ye===Yt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT&&Pe&&(be=Pe.RGBA16_EXT),te===r.SHORT&&Pe&&(be=Pe.RGBA16_SNORM_EXT),te===r.UNSIGNED_SHORT_4_4_4_4&&(be=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(be=r.RGB5_A1)}return(be===r.R16F||be===r.R32F||be===r.RG16F||be===r.RG32F||be===r.RGBA16F||be===r.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function F(P,T){let te;return P?T===null||T===Ji||T===$o?te=r.DEPTH24_STENCIL8:T===Wi?te=r.DEPTH32F_STENCIL8:T===Jo&&(te=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===$o?te=r.DEPTH_COMPONENT24:T===Wi?te=r.DEPTH_COMPONENT32F:T===Jo&&(te=r.DEPTH_COMPONENT16),te}function U(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==On&&P.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){const T=P.target;T.removeEventListener("dispose",I),O(T),T.isVideoTexture&&v.delete(T),T.isHTMLTexture&&b.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),L(T)}function O(P){const T=s.get(P);if(T.__webglInit===void 0)return;const te=P.source,ce=E.get(te);if(ce){const ve=ce[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(P),Object.keys(ce).length===0&&E.delete(te)}s.remove(P)}function q(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const te=P.source,ce=E.get(te);delete ce[T.__cacheKey],f.memory.textures--}function L(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let ve=0;ve<T.__webglFramebuffer[ce].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[ce][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)r.deleteFramebuffer(T.__webglFramebuffer[ce]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=P.textures;for(let ce=0,ve=te.length;ce<ve;ce++){const Ne=s.get(te[ce]);Ne.__webglTexture&&(r.deleteTexture(Ne.__webglTexture),f.memory.textures--),s.remove(te[ce])}s.remove(P)}let V=0;function fe(){V=0}function ie(){return V}function Y(P){V=P}function B(){const P=V;return P>=l.maxTextures&&ut("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function X(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ae(P,T){const te=s.get(P);if(P.isVideoTexture&&$(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&te.__version!==P.version){const ce=P.image;if(ce===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(te,P,T);return}}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+T)}function ge(P,T){const te=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){Re(te,P,T);return}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+T)}function G(P,T){const te=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){Re(te,P,T);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+T)}function M(P,T){const te=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&te.__version!==P.version){qe(te,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+T)}const z={[fh]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[hh]:r.MIRRORED_REPEAT},J={[On]:r.NEAREST,[HM]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[yf]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},_e={[qM]:r.NEVER,[ZM]:r.ALWAYS,[XM]:r.LESS,[ap]:r.LEQUAL,[jM]:r.EQUAL,[sp]:r.GEQUAL,[WM]:r.GREATER,[YM]:r.NOTEQUAL};function Se(P,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===yf||T.magFilter===mc||T.magFilter===Vs||T.minFilter===Hn||T.minFilter===yf||T.minFilter===mc||T.minFilter===Vs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,z[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,z[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,z[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,J[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,_e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==mc&&T.minFilter!==Vs||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Q(P,T){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",I));const ce=T.source;let ve=E.get(ce);ve===void 0&&(ve={},E.set(ce,ve));const Ne=X(T);if(Ne!==P.__cacheKey){ve[Ne]===void 0&&(ve[Ne]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),ve[Ne].usedTimes++;const Pe=ve[P.__cacheKey];Pe!==void 0&&(ve[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&q(T)),P.__cacheKey=Ne,P.__webglTexture=ve[Ne].texture}return te}function se(P,T,te){return Math.floor(Math.floor(P/te)/T)}function me(P,T,te,ce){const Ne=P.updateRanges;if(Ne.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,te,ce,T.data);else{Ne.sort((He,Fe)=>He.start-Fe.start);let Pe=0;for(let He=1;He<Ne.length;He++){const Fe=Ne[Pe],Ie=Ne[He],$e=Fe.start+Fe.count,et=se(Ie.start,T.width,4),ct=se(Fe.start,T.width,4);Ie.start<=$e+1&&et===ct&&se(Ie.start+Ie.count-1,T.width,4)===et?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Pe,Ne[Pe]=Ie)}Ne.length=Pe+1;const be=i.getParameter(r.UNPACK_ROW_LENGTH),ye=i.getParameter(r.UNPACK_SKIP_PIXELS),Ue=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let He=0,Fe=Ne.length;He<Fe;He++){const Ie=Ne[He],$e=Math.floor(Ie.start/4),et=Math.ceil(Ie.count/4),ct=$e%T.width,K=Math.floor($e/T.width),De=et,Te=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(r.UNPACK_SKIP_ROWS,K),i.texSubImage2D(r.TEXTURE_2D,0,ct,K,De,Te,te,ce,T.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,be),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}}function Re(P,T,te){let ce=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=r.TEXTURE_3D);const ve=Q(P,T),Ne=T.source;i.bindTexture(ce,P.__webglTexture,r.TEXTURE0+te);const Pe=s.get(Ne);if(Ne.version!==Pe.__version||ve===!0){if(i.activeTexture(r.TEXTURE0+te),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Te=Ut.getPrimaries(Ut.workingColorSpace),Le=T.colorSpace===cs?null:Ut.getPrimaries(T.colorSpace),Ce=T.colorSpace===cs||Te===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}i.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ye=y(T.image,!1,l.maxTextureSize);ye=Nt(T,ye);const Ue=c.convert(T.format,T.colorSpace),He=c.convert(T.type);let Fe=N(T.internalFormat,Ue,He,T.normalized,T.colorSpace,T.isVideoTexture);Se(ce,T);let Ie;const $e=T.mipmaps,et=T.isVideoTexture!==!0,ct=Pe.__version===void 0||ve===!0,K=Ne.dataReady,De=U(T,ye);if(T.isDepthTexture)Fe=F(T.format===qs,T.type),ct&&(et?i.texStorage2D(r.TEXTURE_2D,1,Fe,ye.width,ye.height):i.texImage2D(r.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Ue,He,null));else if(T.isDataTexture)if($e.length>0){et&&ct&&i.texStorage2D(r.TEXTURE_2D,De,Fe,$e[0].width,$e[0].height);for(let Te=0,Le=$e.length;Te<Le;Te++)Ie=$e[Te],et?K&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,Ue,He,Ie.data):i.texImage2D(r.TEXTURE_2D,Te,Fe,Ie.width,Ie.height,0,Ue,He,Ie.data);T.generateMipmaps=!1}else et?(ct&&i.texStorage2D(r.TEXTURE_2D,De,Fe,ye.width,ye.height),K&&me(T,ye,Ue,He)):i.texImage2D(r.TEXTURE_2D,0,Fe,ye.width,ye.height,0,Ue,He,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){et&&ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,$e[0].width,$e[0].height,ye.depth);for(let Te=0,Le=$e.length;Te<Le;Te++)if(Ie=$e[Te],T.format!==Ii)if(Ue!==null)if(et){if(K)if(T.layerUpdates.size>0){const Ce=Gx(Ie.width,Ie.height,T.format,T.type);for(const Me of T.layerUpdates){const ke=Ie.data.subarray(Me*Ce/Ie.data.BYTES_PER_ELEMENT,(Me+1)*Ce/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,Me,Ie.width,Ie.height,1,Ue,ke)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ie.width,Ie.height,ye.depth,Ue,Ie.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Fe,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?K&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ie.width,Ie.height,ye.depth,Ue,He,Ie.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,Fe,Ie.width,Ie.height,ye.depth,0,Ue,He,Ie.data)}else{et&&ct&&i.texStorage2D(r.TEXTURE_2D,De,Fe,$e[0].width,$e[0].height);for(let Te=0,Le=$e.length;Te<Le;Te++)Ie=$e[Te],T.format!==Ii?Ue!==null?et?K&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,Ue,Ie.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,Fe,Ie.width,Ie.height,0,Ie.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?K&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,Ue,He,Ie.data):i.texImage2D(r.TEXTURE_2D,Te,Fe,Ie.width,Ie.height,0,Ue,He,Ie.data)}else if(T.isDataArrayTexture)if(et){if(ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,ye.width,ye.height,ye.depth),K)if(T.layerUpdates.size>0){const Te=Gx(ye.width,ye.height,T.format,T.type);for(const Le of T.layerUpdates){const Ce=ye.data.subarray(Le*Te/ye.data.BYTES_PER_ELEMENT,(Le+1)*Te/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,ye.width,ye.height,1,Ue,He,Ce)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ue,He,ye.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,Ue,He,ye.data);else if(T.isData3DTexture)et?(ct&&i.texStorage3D(r.TEXTURE_3D,De,Fe,ye.width,ye.height,ye.depth),K&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ue,He,ye.data)):i.texImage3D(r.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,Ue,He,ye.data);else if(T.isFramebufferTexture){if(ct)if(et)i.texStorage2D(r.TEXTURE_2D,De,Fe,ye.width,ye.height);else{let Te=ye.width,Le=ye.height;for(let Ce=0;Ce<De;Ce++)i.texImage2D(r.TEXTURE_2D,Ce,Fe,Te,Le,0,Ue,He,null),Te>>=1,Le>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const Te=r.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),ye.parentNode!==Te){Te.appendChild(ye),b.add(T),Te.onpaint=Le=>{const Ce=Le.changedElements;for(const Me of b)Ce.includes(Me.image)&&(Me.needsUpdate=!0)},Te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ye);else{const Ce=r.RGBA,Me=r.RGBA,ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ce,Me,ke,ye)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&ct){const Te=_t($e[0]);i.texStorage2D(r.TEXTURE_2D,De,Fe,Te.width,Te.height)}for(let Te=0,Le=$e.length;Te<Le;Te++)Ie=$e[Te],et?K&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ue,He,Ie):i.texImage2D(r.TEXTURE_2D,Te,Fe,Ue,He,Ie);T.generateMipmaps=!1}else if(et){if(ct){const Te=_t(ye);i.texStorage2D(r.TEXTURE_2D,De,Fe,Te.width,Te.height)}K&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,He,ye)}else i.texImage2D(r.TEXTURE_2D,0,Fe,Ue,He,ye);x(T)&&H(ce),Pe.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function qe(P,T,te){if(T.image.length!==6)return;const ce=Q(P,T),ve=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+te);const Ne=s.get(ve);if(ve.version!==Ne.__version||ce===!0){i.activeTexture(r.TEXTURE0+te);const Pe=Ut.getPrimaries(Ut.workingColorSpace),be=T.colorSpace===cs?null:Ut.getPrimaries(T.colorSpace),ye=T.colorSpace===cs||Pe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,He=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let Me=0;Me<6;Me++)!Ue&&!He?Fe[Me]=y(T.image[Me],!0,l.maxCubemapSize):Fe[Me]=He?T.image[Me].image:T.image[Me],Fe[Me]=Nt(T,Fe[Me]);const Ie=Fe[0],$e=c.convert(T.format,T.colorSpace),et=c.convert(T.type),ct=N(T.internalFormat,$e,et,T.normalized,T.colorSpace),K=T.isVideoTexture!==!0,De=Ne.__version===void 0||ce===!0,Te=ve.dataReady;let Le=U(T,Ie);Se(r.TEXTURE_CUBE_MAP,T);let Ce;if(Ue){K&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ct,Ie.width,Ie.height);for(let Me=0;Me<6;Me++){Ce=Fe[Me].mipmaps;for(let ke=0;ke<Ce.length;ke++){const Ve=Ce[ke];T.format!==Ii?$e!==null?K?Te&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,Ve.width,Ve.height,$e,Ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ct,Ve.width,Ve.height,0,Ve.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,Ve.width,Ve.height,$e,et,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ct,Ve.width,Ve.height,0,$e,et,Ve.data)}}}else{if(Ce=T.mipmaps,K&&De){Ce.length>0&&Le++;const Me=_t(Fe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ct,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(He){K?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Fe[Me].width,Fe[Me].height,$e,et,Fe[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,Fe[Me].width,Fe[Me].height,0,$e,et,Fe[Me].data);for(let ke=0;ke<Ce.length;ke++){const gt=Ce[ke].image[Me].image;K?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,gt.width,gt.height,$e,et,gt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ct,gt.width,gt.height,0,$e,et,gt.data)}}else{K?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$e,et,Fe[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,$e,et,Fe[Me]);for(let ke=0;ke<Ce.length;ke++){const Ve=Ce[ke];K?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,$e,et,Ve.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ct,$e,et,Ve.image[Me])}}}x(T)&&H(r.TEXTURE_CUBE_MAP),Ne.__version=ve.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Oe(P,T,te,ce,ve,Ne){const Pe=c.convert(te.format,te.colorSpace),be=c.convert(te.type),ye=N(te.internalFormat,Pe,be,te.normalized,te.colorSpace),Ue=s.get(T),He=s.get(te);if(He.__renderTarget=T,!Ue.__hasExternalTextures){const Fe=Math.max(1,T.width>>Ne),Ie=Math.max(1,T.height>>Ne);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,Ne,ye,Fe,Ie,T.depth,0,Pe,be,null):i.texImage2D(ve,Ne,ye,Fe,Ie,0,Pe,be,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Zt(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,ve,He.__webglTexture,0,Ot(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,ve,He.__webglTexture,Ne),i.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(P,T,te){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const ce=T.depthTexture,ve=ce&&ce.isDepthTexture?ce.type:null,Ne=F(T.stencilBuffer,ve),Pe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Zt(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(T),Ne,T.width,T.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(T),Ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,P)}else{const ce=T.textures;for(let ve=0;ve<ce.length;ve++){const Ne=ce[ve],Pe=c.convert(Ne.format,Ne.colorSpace),be=c.convert(Ne.type),ye=N(Ne.internalFormat,Pe,be,Ne.normalized,Ne.colorSpace);Zt(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(T),ye,T.width,T.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(T),ye,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ye,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qe(P,T,te){const ce=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=s.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),Se(r.TEXTURE_CUBE_MAP,T.depthTexture);const Ue=c.convert(T.depthTexture.format),He=c.convert(T.depthTexture.type);let Fe;T.depthTexture.format===Ra?Fe=r.DEPTH_COMPONENT24:T.depthTexture.format===qs&&(Fe=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,T.width,T.height,0,Ue,He,null)}}else ae(T.depthTexture,0);const Ne=ve.__webglTexture,Pe=Ot(T),be=ce?r.TEXTURE_CUBE_MAP_POSITIVE_X+te:r.TEXTURE_2D,ye=T.depthTexture.format===qs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ra)Zt(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,be,Ne,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,be,Ne,0);else if(T.depthTexture.format===qs)Zt(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,be,Ne,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,be,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(P){const T=s.get(P),te=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",ve)};ce.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=ce}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(te)for(let ce=0;ce<6;ce++)Qe(T.__webglFramebuffer[ce],P,ce);else{const ce=P.texture.mipmaps;ce&&ce.length>0?Qe(T.__webglFramebuffer[0],P,0):Qe(T.__webglFramebuffer,P,0)}else if(te){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=r.createRenderbuffer(),lt(T.__webglDepthbuffer[ce],P,!1);else{const ve=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ne)}}else{const ce=P.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),lt(T.__webglDepthbuffer,P,!1);else{const ve=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ne)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function st(P,T,te){const ce=s.get(P);T!==void 0&&Oe(ce.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Xe(P)}function rt(P){const T=P.texture,te=s.get(P),ce=s.get(T);P.addEventListener("dispose",A);const ve=P.textures,Ne=P.isWebGLCubeRenderTarget===!0,Pe=ve.length>1;if(Pe||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=T.version,f.memory.textures++),Ne){te.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[be]=[];for(let ye=0;ye<T.mipmaps.length;ye++)te.__webglFramebuffer[be][ye]=r.createFramebuffer()}else te.__webglFramebuffer[be]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)te.__webglFramebuffer[be]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let be=0,ye=ve.length;be<ye;be++){const Ue=s.get(ve[be]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Zt(P)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const ye=ve[be];te.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[be]);const Ue=c.convert(ye.format,ye.colorSpace),He=c.convert(ye.type),Fe=N(ye.internalFormat,Ue,He,ye.normalized,ye.colorSpace,P.isXRRenderTarget===!0),Ie=Ot(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Fe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,te.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),Se(r.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Oe(te.__webglFramebuffer[be][ye],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ye);else Oe(te.__webglFramebuffer[be],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(T)&&H(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let be=0,ye=ve.length;be<ye;be++){const Ue=ve[be],He=s.get(Ue);let Fe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Fe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Fe,He.__webglTexture),Se(Fe,Ue),Oe(te.__webglFramebuffer,P,Ue,r.COLOR_ATTACHMENT0+be,Fe,0),x(Ue)&&H(Fe)}i.unbindTexture()}else{let be=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(be,ce.__webglTexture),Se(be,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Oe(te.__webglFramebuffer[ye],P,T,r.COLOR_ATTACHMENT0,be,ye);else Oe(te.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,be,0);x(T)&&H(be),i.unbindTexture()}P.depthBuffer&&Xe(P)}function vt(P){const T=P.textures;for(let te=0,ce=T.length;te<ce;te++){const ve=T[te];if(x(ve)){const Ne=k(P),Pe=s.get(ve).__webglTexture;i.bindTexture(Ne,Pe),H(Ne),i.unbindTexture()}}}const Ct=[],Tt=[];function Rt(P){if(P.samples>0){if(Zt(P)===!1){const T=P.textures,te=P.width,ce=P.height;let ve=r.COLOR_BUFFER_BIT;const Ne=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(P),be=T.length>1;if(be)for(let Ue=0;Ue<T.length;Ue++)i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ye=P.texture.mipmaps;ye&&ye.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const He=s.get(T[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,te,ce,0,0,te,ce,ve,r.NEAREST),m===!0&&(Ct.length=0,Tt.length=0,Ct.push(r.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ct.push(Ne),Tt.push(Ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<T.length;Ue++){i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const He=s.get(T[Ue]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,He,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ot(P){return Math.min(l.maxSamples,P.samples)}function Zt(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $(P){const T=f.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function Nt(P,T){const te=P.colorSpace,ce=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Zc&&te!==cs&&(Ut.getTransfer(te)===Yt?(ce!==Ii||ve!==pi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",te)),T}function _t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=fe,this.getTextureUnits=ie,this.setTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=ge,this.setTexture3D=G,this.setTextureCube=M,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function T3(r,e){function i(s,l=cs){let c;const f=Ut.getTransfer(l);if(s===pi)return r.UNSIGNED_BYTE;if(s===$h)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ep)return r.UNSIGNED_SHORT_5_5_5_1;if(s===R_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===N_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===w_)return r.BYTE;if(s===C_)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===Jh)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Ca)return r.HALF_FLOAT;if(s===D_)return r.ALPHA;if(s===U_)return r.RGB;if(s===Ii)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===qs)return r.DEPTH_STENCIL;if(s===L_)return r.RED;if(s===tp)return r.RED_INTEGER;if(s===js)return r.RG;if(s===np)return r.RG_INTEGER;if(s===ip)return r.RGBA_INTEGER;if(s===Gc||s===Hc||s===kc||s===Vc)if(f===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ph||s===mh||s===gh||s===xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ph)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_h||s===vh||s===bh||s===yh||s===Mh||s===Wc||s===Sh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_h||s===vh)return f===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===yh)return c.COMPRESSED_R11_EAC;if(s===Mh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===Sh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Eh||s===Th||s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===Dh||s===Uh||s===Lh||s===Ph||s===Oh||s===Ih||s===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Eh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Th)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ah)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ch)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ih)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return f===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bh||s===zh||s===Gh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Bh)return f===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hh||s===kh||s===Yc||s===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const A3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new $i({vertexShader:A3,fragmentShader:w3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R3 extends Ws{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,v=null,b=null,g=null,E=null,w=null;const D=typeof XRWebGLBinding<"u",y=new C3,x={},H=i.getContextAttributes();let k=null,N=null;const F=[],U=[],I=new Pt;let A=null;const O=new Ai;O.viewport=new cn;const q=new Ai;q.viewport=new cn;const L=[O,q],V=new BS;let fe=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=F[Q];return se===void 0&&(se=new Rf,F[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=F[Q];return se===void 0&&(se=new Rf,F[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=F[Q];return se===void 0&&(se=new Rf,F[Q]=se),se.getHandSpace()};function Y(Q){const se=U.indexOf(Q.inputSource);if(se===-1)return;const me=F[se];me!==void 0&&(me.update(Q.inputSource,Q.frame,h||f),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",X);for(let Q=0;Q<F.length;Q++){const se=U[Q];se!==null&&(U[Q]=null,F[Q].disconnect(se))}fe=null,ie=null,y.reset();for(const Q in x)delete x[Q];e.setRenderTarget(k),E=null,g=null,b=null,l=null,N=null,Se.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){p=Q,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return b===null&&D&&(b=new XRWebGLBinding(l,i)),b},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(k=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",B),l.addEventListener("inputsourceschange",X),H.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Re=null,qe=null;H.depth&&(qe=H.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,me=H.stencil?qs:Ra,Re=H.stencil?$o:Ji);const Oe={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};b=this.getBinding(),g=b.createProjectionLayer(Oe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Ki(g.textureWidth,g.textureHeight,{format:Ii,type:pi,depthTexture:new jr(g.textureWidth,g.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:H.stencil,colorSpace:e.outputColorSpace,samples:H.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:H.antialias,alpha:!0,depth:H.depth,stencil:H.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,me),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Ki(E.framebufferWidth,E.framebufferHeight,{format:Ii,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:H.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Se.setContext(l),Se.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(Q){for(let se=0;se<Q.removed.length;se++){const me=Q.removed[se],Re=U.indexOf(me);Re>=0&&(U[Re]=null,F[Re].disconnect(me))}for(let se=0;se<Q.added.length;se++){const me=Q.added[se];let Re=U.indexOf(me);if(Re===-1){for(let Oe=0;Oe<F.length;Oe++)if(Oe>=U.length){U.push(me),Re=Oe;break}else if(U[Oe]===null){U[Oe]=me,Re=Oe;break}if(Re===-1)break}const qe=F[Re];qe&&qe.connect(me)}}const ae=new re,ge=new re;function G(Q,se,me){ae.setFromMatrixPosition(se.matrixWorld),ge.setFromMatrixPosition(me.matrixWorld);const Re=ae.distanceTo(ge),qe=se.projectionMatrix.elements,Oe=me.projectionMatrix.elements,lt=qe[14]/(qe[10]-1),Qe=qe[14]/(qe[10]+1),Xe=(qe[9]+1)/qe[5],st=(qe[9]-1)/qe[5],rt=(qe[8]-1)/qe[0],vt=(Oe[8]+1)/Oe[0],Ct=lt*rt,Tt=lt*vt,Rt=Re/(-rt+vt),Ot=Rt*-rt;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ot),Q.translateZ(Rt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),qe[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Zt=lt+Rt,$=Qe+Rt,Nt=Ct-Ot,_t=Tt+(Re-Ot),P=Xe*Qe/$*Zt,T=st*Qe/$*Zt;Q.projectionMatrix.makePerspective(Nt,_t,P,T,Zt,$),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function M(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let se=Q.near,me=Q.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(me=y.depthFar)),V.near=q.near=O.near=se,V.far=q.far=O.far=me,(fe!==V.near||ie!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),fe=V.near,ie=V.far),V.layers.mask=Q.layers.mask|6,O.layers.mask=V.layers.mask&-5,q.layers.mask=V.layers.mask&-3;const Re=Q.parent,qe=V.cameras;M(V,Re);for(let Oe=0;Oe<qe.length;Oe++)M(qe[Oe],Re);qe.length===2?G(V,O,q):V.projectionMatrix.copy(O.projectionMatrix),z(Q,V,Re)};function z(Q,se,me){me===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(Q){m=Q,g!==null&&(g.fixedFoveation=Q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(Q){return x[Q]};let J=null;function _e(Q,se){if(v=se.getViewerPose(h||f),w=se,v!==null){const me=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Re=!1;me.length!==V.cameras.length&&(V.cameras.length=0,Re=!0);for(let Qe=0;Qe<me.length;Qe++){const Xe=me[Qe];let st=null;if(E!==null)st=E.getViewport(Xe);else{const vt=b.getViewSubImage(g,Xe);st=vt.viewport,Qe===0&&(e.setRenderTargetTextures(N,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(N))}let rt=L[Qe];rt===void 0&&(rt=new Ai,rt.layers.enable(Qe),rt.viewport=new cn,L[Qe]=rt),rt.matrix.fromArray(Xe.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Xe.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),Qe===0&&(V.matrix.copy(rt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Re===!0&&V.cameras.push(rt)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){b=s.getBinding();const Qe=b.getDepthInformation(me[0]);Qe&&Qe.isValid&&Qe.texture&&y.init(Qe,l.renderState)}if(qe&&qe.includes("camera-access")&&D){e.state.unbindTexture(),b=s.getBinding();for(let Qe=0;Qe<me.length;Qe++){const Xe=me[Qe].camera;if(Xe){let st=x[Xe];st||(st=new q_,x[Xe]=st);const rt=b.getCameraImage(Xe);st.sourceTexture=rt}}}}for(let me=0;me<F.length;me++){const Re=U[me],qe=F[me];Re!==null&&qe!==void 0&&qe.update(Re,se,h||f)}J&&J(Q,se),se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:se}),w=null}const Se=new Y_;Se.setAnimationLoop(_e),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const N3=new un,tv=new ft;tv.set(-1,0,0,0,1,0,0,0,1);function D3(r,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,X_(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,H,k,N){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),b(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(c(y,x),w(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),D(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,H,k):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ti&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ti&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const H=e.get(x),k=H.envMap,N=H.envMapRotation;k&&(y.envMap.value=k,y.envMapRotation.value.setFromMatrix4(N3.makeRotationFromEuler(N)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,H,k){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*H,y.scale.value=k*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function b(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,H){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=H.texture,y.transmissionSamplerSize.value.set(H.width,H.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function D(y,x){const H=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(H.matrixWorld),y.nearDistance.value=H.shadow.camera.near,y.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function U3(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,F){const U=F.program;s.uniformBlockBinding(N,U)}function h(N,F){let U=l[N.id];U===void 0&&(y(N),U=v(N),l[N.id]=U,N.addEventListener("dispose",H));const I=F.program;s.updateUBOMapping(N,I);const A=e.render.frame;c[N.id]!==A&&(g(N),c[N.id]=A)}function v(N){const F=b();N.__bindingPointIndex=F;const U=r.createBuffer(),I=N.__size,A=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,I,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,U),U}function b(){for(let N=0;N<p;N++)if(f.indexOf(N)===-1)return f.push(N),N;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const F=l[N.id],U=N.uniforms,I=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let A=0,O=U.length;A<O;A++){const q=U[A];if(Array.isArray(q))for(let L=0,V=q.length;L<V;L++)E(q[L],A,L,I);else E(q,A,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(N,F,U,I){if(D(N,F,U,I)===!0){const A=N.__offset,O=N.value;if(Array.isArray(O)){let q=0;for(let L=0;L<O.length;L++){const V=O[L],fe=x(V);w(V,N.__data,q),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(q+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(O,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,N.__data)}}function w(N,F,U){typeof N=="number"||typeof N=="boolean"?F[0]=N:N.isMatrix3?(F[0]=N.elements[0],F[1]=N.elements[1],F[2]=N.elements[2],F[3]=0,F[4]=N.elements[3],F[5]=N.elements[4],F[6]=N.elements[5],F[7]=0,F[8]=N.elements[6],F[9]=N.elements[7],F[10]=N.elements[8],F[11]=0):ArrayBuffer.isView(N)?F.set(new N.constructor(N.buffer,N.byteOffset,F.length)):N.toArray(F,U)}function D(N,F,U,I){const A=N.value,O=F+"_"+U;if(I[O]===void 0)return typeof A=="number"||typeof A=="boolean"?I[O]=A:ArrayBuffer.isView(A)?I[O]=A.slice():I[O]=A.clone(),!0;{const q=I[O];if(typeof A=="number"||typeof A=="boolean"){if(q!==A)return I[O]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(q.equals(A)===!1)return q.copy(A),!0}}return!1}function y(N){const F=N.uniforms;let U=0;const I=16;for(let O=0,q=F.length;O<q;O++){const L=Array.isArray(F[O])?F[O]:[F[O]];for(let V=0,fe=L.length;V<fe;V++){const ie=L[V],Y=Array.isArray(ie.value)?ie.value:[ie.value];for(let B=0,X=Y.length;B<X;B++){const ae=Y[B],ge=x(ae),G=U%I,M=G%ge.boundary,z=G+M;U+=M,z!==0&&I-z<ge.storage&&(U+=I-z),ie.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=U,U+=ge.storage}}}const A=U%I;return A>0&&(U+=I-A),N.__size=U,N.__cache={},this}function x(N){const F={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(F.boundary=4,F.storage=4):N.isVector2?(F.boundary=8,F.storage=8):N.isVector3||N.isColor?(F.boundary=16,F.storage=12):N.isVector4?(F.boundary=16,F.storage=16):N.isMatrix3?(F.boundary=48,F.storage=48):N.isMatrix4?(F.boundary=64,F.storage=64):N.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(F.boundary=16,F.storage=N.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",N),F}function H(N){const F=N.target;F.removeEventListener("dispose",H);const U=f.indexOf(F.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function k(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:h,dispose:k}}const L3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function P3(){return qi===null&&(qi=new bS(L3,16,16,js,Ca),qi.name="DFG_LUT",qi.minFilter=Hn,qi.magFilter=Hn,qi.wrapS=Ta,qi.wrapT=Ta,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class O3{constructor(e={}){const{canvas:i=QM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:E=pi}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=f;const D=E,y=new Set([ip,np,tp]),x=new Set([pi,Ji,Jo,$o,$h,ep]),H=new Uint32Array(4),k=new Int32Array(4),N=new re;let F=null,U=null;const I=[],A=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let L=!1,V=null,fe=null,ie=null,Y=null;this._outputColorSpace=Ti;let B=0,X=0,ae=null,ge=-1,G=null;const M=new cn,z=new cn;let J=null;const _e=new Et(0);let Se=0,Q=i.width,se=i.height,me=1,Re=null,qe=null;const Oe=new cn(0,0,Q,se),lt=new cn(0,0,Q,se);let Qe=!1;const Xe=new op;let st=!1,rt=!1;const vt=new un,Ct=new re,Tt=new cn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Zt(){return ae===null?me:1}let $=s;function Nt(C,ee){return i.getContext(C,ee)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qh}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",Mn,!1),$===null){const ee="webgl2";if($=Nt(ee,C),$===null)throw Nt(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Ft("WebGLRenderer: "+C.message),C}let _t,P,T,te,ce,ve,Ne,Pe,be,ye,Ue,He,Fe,Ie,$e,et,ct,K,De,Te,Le,Ce,Me;function ke(){_t=new PT($),_t.init(),Le=new T3($,_t),P=new AT($,_t,e,Le),T=new S3($,_t),P.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),fe=$.createFramebuffer(),ie=$.createFramebuffer(),Y=$.createFramebuffer(),te=new FT($),ce=new c3,ve=new E3($,_t,T,ce,P,Le,te),Ne=new LT(q),Pe=new HS($),Ce=new ET($,Pe),be=new OT($,Pe,te,Ce),ye=new zT($,be,Pe,Ce,te),K=new BT($,P,ve),$e=new wT(ce),Ue=new l3(q,Ne,_t,P,Ce,$e),He=new D3(q,ce),Fe=new d3,Ie=new x3(_t),ct=new ST(q,Ne,T,ye,w,m),et=new M3(q,ye,P),Me=new U3($,te,P,T),De=new TT($,_t,te),Te=new IT($,_t,te),te.programs=Ue.programs,q.capabilities=P,q.extensions=_t,q.properties=ce,q.renderLists=Fe,q.shadowMap=et,q.state=T,q.info=te}ke(),D!==pi&&(O=new HT(D,i.width,i.height,p,l,c));const Ve=new R3(q,$);this.xr=Ve,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(Q,se,!1))},this.getSize=function(C){return C.set(Q,se)},this.setSize=function(C,ee,he=!0){if(Ve.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,se=ee,i.width=Math.floor(C*me),i.height=Math.floor(ee*me),he===!0&&(i.style.width=C+"px",i.style.height=ee+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(Q*me,se*me).floor()},this.setDrawingBufferSize=function(C,ee,he){Q=C,se=ee,me=he,i.width=Math.floor(C*he),i.height=Math.floor(ee*he),this.setViewport(0,0,C,ee)},this.setEffects=function(C){if(D===pi){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ee=0;ee<C.length;ee++)if(C[ee].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(Oe)},this.setViewport=function(C,ee,he,ue){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,ee,he,ue),T.viewport(M.copy(Oe).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(lt)},this.setScissor=function(C,ee,he,ue){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,ee,he,ue),T.scissor(z.copy(lt).multiplyScalar(me).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(C){T.setScissorTest(Qe=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){qe=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,he=!0){let ue=0;if(C){let de=!1;if(ae!==null){const ze=ae.texture.format;de=y.has(ze)}if(de){const ze=ae.texture.type,We=x.has(ze),Be=ct.getClearColor(),Ze=ct.getClearAlpha(),Ye=Be.r,it=Be.g,ht=Be.b;We?(H[0]=Ye,H[1]=it,H[2]=ht,H[3]=Ze,$.clearBufferuiv($.COLOR,0,H)):(k[0]=Ye,k[1]=it,k[2]=ht,k[3]=Ze,$.clearBufferiv($.COLOR,0,k))}else ue|=$.COLOR_BUFFER_BIT}ee&&(ue|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&$.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",Mn,!1),ct.dispose(),Fe.dispose(),Ie.dispose(),ce.dispose(),Ne.dispose(),ye.dispose(),Ce.dispose(),Me.dispose(),Ue.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",mn),Ve.removeEventListener("sessionend",Nn),Wn.stop()};function gt(C){C.preventDefault(),mx("WebGLRenderer: Context Lost."),L=!0}function bt(){mx("WebGLRenderer: Context Restored."),L=!1;const C=te.autoReset,ee=et.enabled,he=et.autoUpdate,ue=et.needsUpdate,de=et.type;ke(),te.autoReset=C,et.enabled=ee,et.autoUpdate=he,et.needsUpdate=ue,et.type=de}function Mn(C){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tn(C){const ee=C.target;ee.removeEventListener("dispose",tn),ni(ee)}function ni(C){jn(C),ce.remove(C)}function jn(C){const ee=ce.get(C).programs;ee!==void 0&&(ee.forEach(function(he){Ue.releaseProgram(he)}),C.isShaderMaterial&&Ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,he,ue,de,ze){ee===null&&(ee=Rt);const We=de.isMesh&&de.matrixWorld.determinantAffine()<0,Be=Ua(C,ee,he,ue,de);T.setMaterial(ue,We);let Ze=he.index,Ye=1;if(ue.wireframe===!0){if(Ze=be.getWireframeAttribute(he),Ze===void 0)return;Ye=2}const it=he.drawRange,ht=he.attributes.position;let tt=it.start*Ye,Bt=(it.start+it.count)*Ye;ze!==null&&(tt=Math.max(tt,ze.start*Ye),Bt=Math.min(Bt,(ze.start+ze.count)*Ye)),Ze!==null?(tt=Math.max(tt,0),Bt=Math.min(Bt,Ze.count)):ht!=null&&(tt=Math.max(tt,0),Bt=Math.min(Bt,ht.count));const rn=Bt-tt;if(rn<0||rn===1/0)return;Ce.setup(de,ue,Be,he,Ze);let $t,Vt=De;if(Ze!==null&&($t=Pe.get(Ze),Vt=Te,Vt.setIndex($t)),de.isMesh)ue.wireframe===!0?(T.setLineWidth(ue.wireframeLinewidth*Zt()),Vt.setMode($.LINES)):Vt.setMode($.TRIANGLES);else if(de.isLine){let qt=ue.linewidth;qt===void 0&&(qt=1),T.setLineWidth(qt*Zt()),de.isLineSegments?Vt.setMode($.LINES):de.isLineLoop?Vt.setMode($.LINE_LOOP):Vt.setMode($.LINE_STRIP)}else de.isPoints?Vt.setMode($.POINTS):de.isSprite&&Vt.setMode($.TRIANGLES);if(de.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Vt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const qt=de._multiDrawStarts,je=de._multiDrawCounts,Fn=de._multiDrawCount,yt=Ze?Pe.get(Ze).bytesPerElement:1,Sn=ce.get(ue).currentProgram.getUniforms();for(let ii=0;ii<Fn;ii++)Sn.setValue($,"_gl_DrawID",ii),Vt.render(qt[ii]/yt,je[ii])}else if(de.isInstancedMesh)Vt.renderInstances(tt,rn,de.count);else if(he.isInstancedBufferGeometry){const qt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,je=Math.min(he.instanceCount,qt);Vt.renderInstances(tt,rn,je)}else Vt.render(tt,rn)};function Qr(C,ee,he){C.transparent===!0&&C.side===Ea&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Da(C,ee,he),C.side=fs,C.needsUpdate=!0,Da(C,ee,he),C.side=Ea):Da(C,ee,he)}this.compile=function(C,ee,he=null){he===null&&(he=C),U=Ie.get(he),U.init(ee),A.push(U),he.traverseVisible(function(de){de.isLight&&de.layers.test(ee.layers)&&(U.pushLight(de),de.castShadow&&U.pushShadow(de))}),C!==he&&C.traverseVisible(function(de){de.isLight&&de.layers.test(ee.layers)&&(U.pushLight(de),de.castShadow&&U.pushShadow(de))}),U.setupLights();const ue=new Set;return C.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const ze=de.material;if(ze)if(Array.isArray(ze))for(let We=0;We<ze.length;We++){const Be=ze[We];Qr(Be,he,de),ue.add(Be)}else Qr(ze,he,de),ue.add(ze)}),U=A.pop(),ue},this.compileAsync=function(C,ee,he=null){const ue=this.compile(C,ee,he);return new Promise(de=>{function ze(){if(ue.forEach(function(We){ce.get(We).currentProgram.isReady()&&ue.delete(We)}),ue.size===0){de(C);return}setTimeout(ze,10)}_t.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Ys=null;function Fi(C){Ys&&Ys(C)}function mn(){Wn.stop()}function Nn(){Wn.start()}const Wn=new Y_;Wn.setAnimationLoop(Fi),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){Ys=C,Ve.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},Ve.addEventListener("sessionstart",mn),Ve.addEventListener("sessionend",Nn),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;V!==null&&V.renderStart(C,ee);const he=Ve.enabled===!0&&Ve.isPresenting===!0,ue=O!==null&&(ae===null||he)&&O.begin(q,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(ee),ee=Ve.getCamera()),C.isScene===!0&&C.onBeforeRender(q,C,ee,ae),U=Ie.get(C,A.length),U.init(ee),U.state.textureUnits=ve.getTextureUnits(),A.push(U),vt.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Xe.setFromProjectionMatrix(vt,Yi,ee.reversedDepth),rt=this.localClippingEnabled,st=$e.init(this.clippingPlanes,rt),F=Fe.get(C,I.length),F.init(),I.push(F),Ve.enabled===!0&&Ve.isPresenting===!0){const We=q.xr.getDepthSensingMesh();We!==null&&ps(We,ee,-1/0,q.sortObjects)}ps(C,ee,0,q.sortObjects),F.finish(),q.sortObjects===!0&&F.sort(Re,qe,ee.reversedDepth),Ot=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ot&&ct.addToRenderList(F,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&$e.beginShadows();const de=U.state.shadowsArray;if(et.render(de,C,ee),st===!0&&$e.endShadows(),(ue&&O.hasRenderPass())===!1){const We=F.opaque,Be=F.transmissive;if(U.setupLights(),ee.isArrayCamera){const Ze=ee.cameras;if(Be.length>0)for(let Ye=0,it=Ze.length;Ye<it;Ye++){const ht=Ze[Ye];sl(We,Be,C,ht)}Ot&&ct.render(C);for(let Ye=0,it=Ze.length;Ye<it;Ye++){const ht=Ze[Ye];al(F,C,ht,ht.viewport)}}else Be.length>0&&sl(We,Be,C,ee),Ot&&ct.render(C),al(F,C,ee)}ae!==null&&X===0&&(ve.updateMultisampleRenderTarget(ae),ve.updateRenderTargetMipmap(ae)),ue&&O.end(q),C.isScene===!0&&C.onAfterRender(q,C,ee),Ce.resetDefaultState(),ge=-1,G=null,A.pop(),A.length>0?(U=A[A.length-1],ve.setTextureUnits(U.state.textureUnits),st===!0&&$e.setGlobalState(q.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?F=I[I.length-1]:F=null,V!==null&&V.renderEnd()};function ps(C,ee,he,ue){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLightProbeGrid)U.pushLightProbeGrid(C);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xe.intersectsSprite(C)){ue&&Tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const We=ye.update(C),Be=C.material;Be.visible&&F.push(C,We,Be,he,Tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xe.intersectsObject(C))){const We=ye.update(C),Be=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Tt.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Tt.copy(We.boundingSphere.center)),Tt.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(Be)){const Ze=We.groups;for(let Ye=0,it=Ze.length;Ye<it;Ye++){const ht=Ze[Ye],tt=Be[ht.materialIndex];tt&&tt.visible&&F.push(C,We,tt,he,Tt.z,ht)}}else Be.visible&&F.push(C,We,Be,he,Tt.z,null)}}const ze=C.children;for(let We=0,Be=ze.length;We<Be;We++)ps(ze[We],ee,he,ue)}function al(C,ee,he,ue){const{opaque:de,transmissive:ze,transparent:We}=C;U.setupLightsView(he),st===!0&&$e.setGlobalState(q.clippingPlanes,he),ue&&T.viewport(M.copy(ue)),de.length>0&&ms(de,ee,he),ze.length>0&&ms(ze,ee,he),We.length>0&&ms(We,ee,he),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function sl(C,ee,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ue.id]===void 0){const tt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ue.id]=new Ki(1,1,{generateMipmaps:!0,type:tt?Ca:pi,minFilter:Vs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const ze=U.state.transmissionRenderTarget[ue.id],We=ue.viewport||M;ze.setSize(We.z*q.transmissionResolutionScale,We.w*q.transmissionResolutionScale);const Be=q.getRenderTarget(),Ze=q.getActiveCubeFace(),Ye=q.getActiveMipmapLevel();q.setRenderTarget(ze),q.getClearColor(_e),Se=q.getClearAlpha(),Se<1&&q.setClearColor(16777215,.5),q.clear(),Ot&&ct.render(he);const it=q.toneMapping;q.toneMapping=Zi;const ht=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),U.setupLightsView(ue),st===!0&&$e.setGlobalState(q.clippingPlanes,ue),ms(C,he,ue),ve.updateMultisampleRenderTarget(ze),ve.updateRenderTargetMipmap(ze),_t.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Bt=0,rn=ee.length;Bt<rn;Bt++){const $t=ee[Bt],{object:Vt,geometry:qt,material:je,group:Fn}=$t;if(je.side===Ea&&Vt.layers.test(ue.layers)){const yt=je.side;je.side=ti,je.needsUpdate=!0,Na(Vt,he,ue,qt,je,Fn),je.side=yt,je.needsUpdate=!0,tt=!0}}tt===!0&&(ve.updateMultisampleRenderTarget(ze),ve.updateRenderTargetMipmap(ze))}q.setRenderTarget(Be,Ze,Ye),q.setClearColor(_e,Se),ht!==void 0&&(ue.viewport=ht),q.toneMapping=it}function ms(C,ee,he){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let de=0,ze=C.length;de<ze;de++){const We=C[de],{object:Be,geometry:Ze,group:Ye}=We;let it=We.material;it.allowOverride===!0&&ue!==null&&(it=ue),Be.layers.test(he.layers)&&Na(Be,ee,he,Ze,it,Ye)}}function Na(C,ee,he,ue,de,ze){C.onBeforeRender(q,ee,he,ue,de,ze),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),de.onBeforeRender(q,ee,he,ue,C,ze),de.transparent===!0&&de.side===Ea&&de.forceSinglePass===!1?(de.side=ti,de.needsUpdate=!0,q.renderBufferDirect(he,ee,ue,de,C,ze),de.side=fs,de.needsUpdate=!0,q.renderBufferDirect(he,ee,ue,de,C,ze),de.side=Ea):q.renderBufferDirect(he,ee,ue,de,C,ze),C.onAfterRender(q,ee,he,ue,de,ze)}function Da(C,ee,he){ee.isScene!==!0&&(ee=Rt);const ue=ce.get(C),de=U.state.lights,ze=U.state.shadowsArray,We=de.state.version,Be=Ue.getParameters(C,de.state,ze,ee,he,U.state.lightProbeGridArray),Ze=Ue.getProgramCacheKey(Be);let Ye=ue.programs;ue.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ee.environment:null,ue.fog=ee.fog;const it=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ue.envMap=Ne.get(C.envMap||ue.environment,it),ue.envMapRotation=ue.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",tn),Ye=new Map,ue.programs=Ye);let ht=Ye.get(Ze);if(ht!==void 0){if(ue.currentProgram===ht&&ue.lightsStateVersion===We)return ta(C,Be),ht}else Be.uniforms=Ue.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,he,Be),C.onBeforeCompile(Be,q),ht=Ue.acquireProgram(Be,Ze),Ye.set(Ze,ht),ue.uniforms=Be.uniforms;const tt=ue.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=$e.uniform),ta(C,Be),ue.needsLights=rl(C),ue.lightsStateVersion=We,ue.needsLights&&(tt.ambientLightColor.value=de.state.ambient,tt.lightProbe.value=de.state.probe,tt.directionalLights.value=de.state.directional,tt.directionalLightShadows.value=de.state.directionalShadow,tt.spotLights.value=de.state.spot,tt.spotLightShadows.value=de.state.spotShadow,tt.rectAreaLights.value=de.state.rectArea,tt.ltc_1.value=de.state.rectAreaLTC1,tt.ltc_2.value=de.state.rectAreaLTC2,tt.pointLights.value=de.state.point,tt.pointLightShadows.value=de.state.pointShadow,tt.hemisphereLights.value=de.state.hemi,tt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,tt.spotLightMatrix.value=de.state.spotLightMatrix,tt.spotLightMap.value=de.state.spotLightMap,tt.pointShadowMatrix.value=de.state.pointShadowMatrix),ue.lightProbeGrid=U.state.lightProbeGridArray.length>0,ue.currentProgram=ht,ue.uniformsList=null,ht}function ea(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=qc.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function ta(C,ee){const he=ce.get(C);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function gs(C,ee){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;N.setFromMatrixPosition(ee.matrixWorld);for(let he=0,ue=C.length;he<ue;he++){const de=C[he];if(de.texture!==null&&de.boundingBox.containsPoint(N))return de}return null}function Ua(C,ee,he,ue,de){ee.isScene!==!0&&(ee=Rt),ve.resetTextureUnits();const ze=ee.fog,We=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ee.environment:null,Be=ae===null?q.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ut.workingColorSpace,Ze=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Ye=Ne.get(ue.envMap||We,Ze),it=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ht=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),tt=!!he.morphAttributes.position,Bt=!!he.morphAttributes.normal,rn=!!he.morphAttributes.color;let $t=Zi;ue.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&($t=q.toneMapping);const Vt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,qt=Vt!==void 0?Vt.length:0,je=ce.get(ue),Fn=U.state.lights;if(st===!0&&(rt===!0||C!==G)){const kt=C===G&&ue.id===ge;$e.setState(ue,C,kt)}let yt=!1;ue.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Fn.state.version||je.outputColorSpace!==Be||de.isBatchedMesh&&je.batching===!1||!de.isBatchedMesh&&je.batching===!0||de.isBatchedMesh&&je.batchingColor===!0&&de.colorTexture===null||de.isBatchedMesh&&je.batchingColor===!1&&de.colorTexture!==null||de.isInstancedMesh&&je.instancing===!1||!de.isInstancedMesh&&je.instancing===!0||de.isSkinnedMesh&&je.skinning===!1||!de.isSkinnedMesh&&je.skinning===!0||de.isInstancedMesh&&je.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&je.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&je.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&je.instancingMorph===!1&&de.morphTexture!==null||je.envMap!==Ye||ue.fog===!0&&je.fog!==ze||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==$e.numPlanes||je.numIntersection!==$e.numIntersection)||je.vertexAlphas!==it||je.vertexTangents!==ht||je.morphTargets!==tt||je.morphNormals!==Bt||je.morphColors!==rn||je.toneMapping!==$t||je.morphTargetsCount!==qt||!!je.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,je.__version=ue.version);let Sn=je.currentProgram;yt===!0&&(Sn=Da(ue,ee,de),V&&ue.isNodeMaterial&&V.onUpdateProgram(ue,Sn,je));let ii=!1,wi=!1,ai=!1;const Xt=Sn.getUniforms(),on=je.uniforms;if(T.useProgram(Sn.program)&&(ii=!0,wi=!0,ai=!0),ue.id!==ge&&(ge=ue.id,wi=!0),je.needsLights){const kt=gs(U.state.lightProbeGridArray,de);je.lightProbeGrid!==kt&&(je.lightProbeGrid=kt,wi=!0)}if(ii||G!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue($,"projectionMatrix",C.projectionMatrix),Xt.setValue($,"viewMatrix",C.matrixWorldInverse);const Bi=Xt.map.cameraPosition;Bi!==void 0&&Bi.setValue($,Ct.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&Xt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Xt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,wi=!0,ai=!0)}if(je.needsLights&&(Fn.state.directionalShadowMap.length>0&&Xt.setValue($,"directionalShadowMap",Fn.state.directionalShadowMap,ve),Fn.state.spotShadowMap.length>0&&Xt.setValue($,"spotShadowMap",Fn.state.spotShadowMap,ve),Fn.state.pointShadowMap.length>0&&Xt.setValue($,"pointShadowMap",Fn.state.pointShadowMap,ve)),de.isSkinnedMesh){Xt.setOptional($,de,"bindMatrix"),Xt.setOptional($,de,"bindMatrixInverse");const kt=de.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Xt.setValue($,"boneTexture",kt.boneTexture,ve))}de.isBatchedMesh&&(Xt.setOptional($,de,"batchingTexture"),Xt.setValue($,"batchingTexture",de._matricesTexture,ve),Xt.setOptional($,de,"batchingIdTexture"),Xt.setValue($,"batchingIdTexture",de._indirectTexture,ve),Xt.setOptional($,de,"batchingColorTexture"),de._colorsTexture!==null&&Xt.setValue($,"batchingColorTexture",de._colorsTexture,ve));const Ci=he.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&K.update(de,he,Sn),(wi||je.receiveShadow!==de.receiveShadow)&&(je.receiveShadow=de.receiveShadow,Xt.setValue($,"receiveShadow",de.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ee.environment!==null&&(on.envMapIntensity.value=ee.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=P3()),wi){if(Xt.setValue($,"toneMappingExposure",q.toneMappingExposure),je.needsLights&&gn(on,ai),ze&&ue.fog===!0&&He.refreshFogUniforms(on,ze),He.refreshMaterialUniforms(on,ue,me,se,U.state.transmissionRenderTarget[C.id]),je.needsLights&&je.lightProbeGrid){const kt=je.lightProbeGrid;on.probesSH.value=kt.texture,on.probesMin.value.copy(kt.boundingBox.min),on.probesMax.value.copy(kt.boundingBox.max),on.probesResolution.value.copy(kt.resolution)}qc.upload($,ea(je),on,ve)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(qc.upload($,ea(je),on,ve),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Xt.setValue($,"center",de.center),Xt.setValue($,"modelViewMatrix",de.modelViewMatrix),Xt.setValue($,"normalMatrix",de.normalMatrix),Xt.setValue($,"modelMatrix",de.matrixWorld),ue.uniformsGroups!==void 0){const kt=ue.uniformsGroups;for(let Bi=0,La=kt.length;Bi<La;Bi++){const xs=kt[Bi];Me.update(xs,Sn),Me.bind(xs,Sn)}}return Sn}function gn(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function rl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,ee,he){const ue=ce.get(C);ue.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=ee,ce.get(C.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const he=ce.get(C);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(C,ee=0,he=0){ae=C,B=ee,X=he;let ue=null,de=!1,ze=!1;if(C){const Be=ce.get(C);if(Be.__useDefaultFramebuffer!==void 0){T.bindFramebuffer($.FRAMEBUFFER,Be.__webglFramebuffer),M.copy(C.viewport),z.copy(C.scissor),J=C.scissorTest,T.viewport(M),T.scissor(z),T.setScissorTest(J),ge=-1;return}else if(Be.__webglFramebuffer===void 0)ve.setupRenderTarget(C);else if(Be.__hasExternalTextures)ve.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Be.__boundDepthTexture!==it){if(it!==null&&ce.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);const Ye=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[ee])?ue=Ye[ee][he]:ue=Ye[ee],de=!0):C.samples>0&&ve.useMultisampledRTT(C)===!1?ue=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?ue=Ye[he]:ue=Ye,M.copy(C.viewport),z.copy(C.scissor),J=C.scissorTest}else M.copy(Oe).multiplyScalar(me).floor(),z.copy(lt).multiplyScalar(me).floor(),J=Qe;if(he!==0&&(ue=fe),T.bindFramebuffer($.FRAMEBUFFER,ue)&&T.drawBuffers(C,ue),T.viewport(M),T.scissor(z),T.setScissorTest(J),de){const Be=ce.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Be.__webglTexture,he)}else if(ze){const Be=ee;for(let Ze=0;Ze<C.textures.length;Ze++){const Ye=ce.get(C.textures[Ze]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ze,Ye.__webglTexture,he,Be)}}else if(C!==null&&he!==0){const Be=ce.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Be.__webglTexture,he)}ge=-1},this.readRenderTargetPixels=function(C,ee,he,ue,de,ze,We,Be=0){if(!(C&&C.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){T.bindFramebuffer($.FRAMEBUFFER,Ze);try{const Ye=C.textures[Be],it=Ye.format,ht=Ye.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Be),!P.textureFormatReadable(it)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ht)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-ue&&he>=0&&he<=C.height-de&&$.readPixels(ee,he,ue,de,Le.convert(it),Le.convert(ht),ze)}finally{const Ye=ae!==null?ce.get(ae).__webglFramebuffer:null;T.bindFramebuffer($.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,ee,he,ue,de,ze,We,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if(ee>=0&&ee<=C.width-ue&&he>=0&&he<=C.height-de){T.bindFramebuffer($.FRAMEBUFFER,Ze);const Ye=C.textures[Be],it=Ye.format,ht=Ye.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Be),!P.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,tt),$.bufferData($.PIXEL_PACK_BUFFER,ze.byteLength,$.STREAM_READ),$.readPixels(ee,he,ue,de,Le.convert(it),Le.convert(ht),0);const Bt=ae!==null?ce.get(ae).__webglFramebuffer:null;T.bindFramebuffer($.FRAMEBUFFER,Bt);const rn=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await JM($,rn,4),$.bindBuffer($.PIXEL_PACK_BUFFER,tt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,ze),$.deleteBuffer(tt),$.deleteSync(rn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,he=0){const ue=Math.pow(2,-he),de=Math.floor(C.image.width*ue),ze=Math.floor(C.image.height*ue),We=ee!==null?ee.x:0,Be=ee!==null?ee.y:0;ve.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,he,0,0,We,Be,de,ze),T.unbindTexture()},this.copyTextureToTexture=function(C,ee,he=null,ue=null,de=0,ze=0){let We,Be,Ze,Ye,it,ht,tt,Bt,rn;const $t=C.isCompressedTexture?C.mipmaps[ze]:C.image;if(he!==null)We=he.max.x-he.min.x,Be=he.max.y-he.min.y,Ze=he.isBox3?he.max.z-he.min.z:1,Ye=he.min.x,it=he.min.y,ht=he.isBox3?he.min.z:0;else{const on=Math.pow(2,-de);We=Math.floor($t.width*on),Be=Math.floor($t.height*on),C.isDataArrayTexture?Ze=$t.depth:C.isData3DTexture?Ze=Math.floor($t.depth*on):Ze=1,Ye=0,it=0,ht=0}ue!==null?(tt=ue.x,Bt=ue.y,rn=ue.z):(tt=0,Bt=0,rn=0);const Vt=Le.convert(ee.format),qt=Le.convert(ee.type);let je;ee.isData3DTexture?(ve.setTexture3D(ee,0),je=$.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ve.setTexture2DArray(ee,0),je=$.TEXTURE_2D_ARRAY):(ve.setTexture2D(ee,0),je=$.TEXTURE_2D),T.activeTexture($.TEXTURE0),T.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ee.flipY),T.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),T.pixelStorei($.UNPACK_ALIGNMENT,ee.unpackAlignment);const Fn=T.getParameter($.UNPACK_ROW_LENGTH),yt=T.getParameter($.UNPACK_IMAGE_HEIGHT),Sn=T.getParameter($.UNPACK_SKIP_PIXELS),ii=T.getParameter($.UNPACK_SKIP_ROWS),wi=T.getParameter($.UNPACK_SKIP_IMAGES);T.pixelStorei($.UNPACK_ROW_LENGTH,$t.width),T.pixelStorei($.UNPACK_IMAGE_HEIGHT,$t.height),T.pixelStorei($.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei($.UNPACK_SKIP_ROWS,it),T.pixelStorei($.UNPACK_SKIP_IMAGES,ht);const ai=C.isDataArrayTexture||C.isData3DTexture,Xt=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const on=ce.get(C),Ci=ce.get(ee),kt=ce.get(on.__renderTarget),Bi=ce.get(Ci.__renderTarget);T.bindFramebuffer($.READ_FRAMEBUFFER,kt.__webglFramebuffer),T.bindFramebuffer($.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let La=0;La<Ze;La++)ai&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,de,ht+La),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ce.get(ee).__webglTexture,ze,rn+La)),$.blitFramebuffer(Ye,it,We,Be,tt,Bt,We,Be,$.DEPTH_BUFFER_BIT,$.NEAREST);T.bindFramebuffer($.READ_FRAMEBUFFER,null),T.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(de!==0||C.isRenderTargetTexture||ce.has(C)){const on=ce.get(C),Ci=ce.get(ee);T.bindFramebuffer($.READ_FRAMEBUFFER,ie),T.bindFramebuffer($.DRAW_FRAMEBUFFER,Y);for(let kt=0;kt<Ze;kt++)ai?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,de,ht+kt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,de),Xt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ci.__webglTexture,ze,rn+kt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ci.__webglTexture,ze),de!==0?$.blitFramebuffer(Ye,it,We,Be,tt,Bt,We,Be,$.COLOR_BUFFER_BIT,$.NEAREST):Xt?$.copyTexSubImage3D(je,ze,tt,Bt,rn+kt,Ye,it,We,Be):$.copyTexSubImage2D(je,ze,tt,Bt,Ye,it,We,Be);T.bindFramebuffer($.READ_FRAMEBUFFER,null),T.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Xt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(je,ze,tt,Bt,rn,We,Be,Ze,Vt,qt,$t.data):ee.isCompressedArrayTexture?$.compressedTexSubImage3D(je,ze,tt,Bt,rn,We,Be,Ze,Vt,$t.data):$.texSubImage3D(je,ze,tt,Bt,rn,We,Be,Ze,Vt,qt,$t):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ze,tt,Bt,We,Be,Vt,qt,$t.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ze,tt,Bt,$t.width,$t.height,Vt,$t.data):$.texSubImage2D($.TEXTURE_2D,ze,tt,Bt,We,Be,Vt,qt,$t);T.pixelStorei($.UNPACK_ROW_LENGTH,Fn),T.pixelStorei($.UNPACK_IMAGE_HEIGHT,yt),T.pixelStorei($.UNPACK_SKIP_PIXELS,Sn),T.pixelStorei($.UNPACK_SKIP_ROWS,ii),T.pixelStorei($.UNPACK_SKIP_IMAGES,wi),ze===0&&ee.generateMipmaps&&$.generateMipmap(je),T.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ve.setTextureCube(C,0):C.isData3DTexture?ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ve.setTexture2DArray(C,0):ve.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){B=0,X=0,ae=null,T.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const ou=({exercise:r,gender:e})=>{const i=nt.useRef(null),[s,l]=nt.useState(!0),[c,f]=nt.useState(1),[p,m]=nt.useState(!0),[h,v]=nt.useState("Execução Contínua"),[b,g]=nt.useState(3.5),E=nt.useRef(null),w=nt.useRef(null),D=nt.useRef(null),y=nt.useRef(null),x=nt.useRef(null),H=nt.useRef(0),k=nt.useRef(!0),N=nt.useRef(1),F=nt.useRef(!0),U=nt.useRef(!1),I=nt.useRef({x:0,y:0}),A=nt.useRef({y:.4,x:.2});k.current=s,N.current=c,F.current=p,nt.useEffect(()=>{const L=i.current;if(!L)return;const V=L.clientWidth||400,fe=L.clientHeight||340,ie=new pS;ie.background=new Et("#fbfaf7"),E.current=ie;const Y=new Ai(45,V/fe,.1,100);Y.position.set(2.8,2,3.2),Y.lookAt(0,.6,0),D.current=Y;const B=new O3({antialias:!0,alpha:!0});B.setSize(V,fe),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.shadowMap.enabled=!0,B.shadowMap.type=x_,w.current=B,L.innerHTML="",L.appendChild(B.domElement);const X=new IS(16775920,.9);ie.add(X);const ae=new Yf(16776693,1.2);ae.position.set(5,8,5),ae.castShadow=!0,ae.shadow.mapSize.width=1024,ae.shadow.mapSize.height=1024,ae.shadow.bias=-.001,ie.add(ae);const ge=new Yf(e==="male"?9413518:13148035,.6);ge.position.set(-5,4,-4),ie.add(ge);const G=new Yf(16051169,.5);G.position.set(0,-3,3),ie.add(G);const M=new zS(10,20,13950667,15660013);M.position.y=-.01,ie.add(M);const z=new Xi(2.2,2.3,.05,32),J=new Bs({color:16644852,roughness:.7,metalness:.1}),_e=new sn(z,J);_e.position.y=-.03,_e.receiveShadow=!0,ie.add(_e);const Se=new qn;ie.add(Se),x.current=Se;const Q=new Bs({color:9741240,roughness:.4,metalness:.2}),se=new Bs({color:6583435,roughness:.3,metalness:.4}),me=new Bs({color:165063,emissive:223649,emissiveIntensity:.5,roughness:.3}),Re=new Bs({color:366185,emissive:292951,emissiveIntensity:.5,roughness:.3}),qe=new Bs({color:14753096,emissive:12456508,emissiveIntensity:.5,roughness:.3}),Oe=new Bs({color:14251782,emissive:11817737,emissiveIntensity:.4,roughness:.3}),lt=r.category==="Peito"||r.muscles.primary.some(Ce=>Ce.includes("Peitoral")),Qe=r.category==="Glúteos"||r.muscles.primary.some(Ce=>Ce.includes("Glúteo")),Xe=r.category==="Abdômen & Core"||r.muscles.primary.some(Ce=>Ce.includes("Abdominal")||Ce.includes("Transverso")),st=p&&lt?me:Q,rt=p&&Xe?Re:Q,vt=p&&Qe?qe:Q,Ct=p&&(Qe||r.category==="Pernas")?Oe:Q,Tt=new qn;Se.add(Tt);const Rt=new sn(new Xi(.18,.16,.16,16),vt);Rt.castShadow=!0,Tt.add(Rt);const Ot=new qn;Ot.position.y=.12,Tt.add(Ot);const Zt=new sn(new Xi(.16,.17,.22,16),rt);Zt.position.y=.11,Zt.castShadow=!0,Ot.add(Zt);const $=new qn;$.position.y=.22,Ot.add($);const Nt=new sn(new ds(.38,.28,.22),st);Nt.position.y=.14,Nt.castShadow=!0,$.add(Nt);const _t=new qn;_t.position.y=.32,$.add(_t);const P=new sn(new Xi(.08,.09,.1,12),Q);P.position.y=.05,_t.add(P);const T=new sn(new Hs(.14,20,20),Q);T.position.y=.2,T.scale.set(1,1.15,1.1),T.castShadow=!0,_t.add(T);function te(Ce){const Me=new qn,ke=Ce==="left"?1:-1;Me.position.set(ke*.24,.22,0),$.add(Me);const Ve=new sn(new Hs(.09,12,12),se);Me.add(Ve);const gt=new qn;Me.add(gt);const bt=new sn(new Xi(.07,.06,.28,12),Q);bt.position.y=-.14,bt.castShadow=!0,gt.add(bt);const Mn=new sn(new Hs(.07,12,12),se);Mn.position.y=-.28,gt.add(Mn);const tn=new qn;tn.position.y=-.28,gt.add(tn);const ni=new sn(new Xi(.06,.05,.26,12),Q);ni.position.y=-.13,ni.castShadow=!0,tn.add(ni);const jn=new sn(new ds(.07,.1,.04),se);return jn.position.y=-.28,tn.add(jn),{armRoot:Me,upperArm:gt,forearm:tn,hand:jn}}const ce=te("left"),ve=te("right");function Ne(Ce){const Me=new qn,ke=Ce==="left"?1:-1;Me.position.set(ke*.11,-.06,0),Tt.add(Me);const Ve=new sn(new Hs(.09,12,12),se);Me.add(Ve);const gt=new qn;Me.add(gt);const bt=new sn(new Xi(.09,.075,.38,14),Qe?vt:Ct);bt.position.y=-.19,bt.castShadow=!0,gt.add(bt);const Mn=new sn(new Hs(.08,12,12),se);Mn.position.y=-.38,gt.add(Mn);const tn=new qn;tn.position.y=-.38,gt.add(tn);const ni=new sn(new Xi(.075,.06,.38,14),Ct);ni.position.y=-.19,ni.castShadow=!0,tn.add(ni);const jn=new sn(new ds(.09,.06,.18),se);return jn.position.set(0,-.4,.05),jn.castShadow=!0,tn.add(jn),{hip:Me,thigh:gt,shin:tn,foot:jn}}const Pe=Ne("left"),be=Ne("right"),ye={pelvis:Tt,spine:Ot,thorax:$,headGroup:_t,leftArm:ce,rightArm:ve,leftLeg:Pe,rightLeg:be},Ue=r.poseType,He=()=>{y.current=requestAnimationFrame(He),k.current&&(H.current+=.02*N.current);const Ce=H.current,Me=(Math.sin(Ce)+1)/2;Me<.2?v("Posição Inicial / Alinhamento"):Me<.6?v("Fase Excêntrica (Descida Controlada)"):Me<.85?v("Pico de Contração & Tensão Máxima"):v("Fase Concêntrica (Retorno Firme)"),O(Ue,Me,ye,Se);const ke=4.2,Ve=A.current.y,gt=Math.max(-.5,Math.min(1.2,A.current.x));Y.position.x=ke*Math.sin(Ve)*Math.cos(gt),Y.position.y=ke*Math.sin(gt)+.6,Y.position.z=ke*Math.cos(Ve)*Math.cos(gt),Y.lookAt(0,.5,0),B.render(ie,Y)};He();const Fe=Ce=>{U.current=!0,I.current={x:Ce.clientX,y:Ce.clientY}},Ie=Ce=>{if(!U.current)return;const Me=Ce.clientX-I.current.x,ke=Ce.clientY-I.current.y;A.current.y+=Me*.01,A.current.x-=ke*.01,I.current={x:Ce.clientX,y:Ce.clientY}},$e=()=>{U.current=!1},et=Ce=>{Ce.touches.length===1&&(U.current=!0,I.current={x:Ce.touches[0].clientX,y:Ce.touches[0].clientY})},ct=Ce=>{if(!U.current||Ce.touches.length!==1)return;const Me=Ce.touches[0].clientX-I.current.x,ke=Ce.touches[0].clientY-I.current.y;A.current.y+=Me*.01,A.current.x-=ke*.01,I.current={x:Ce.touches[0].clientX,y:Ce.touches[0].clientY}},K=()=>{U.current=!1},De=B.domElement;De.addEventListener("mousedown",Fe),window.addEventListener("mousemove",Ie),window.addEventListener("mouseup",$e),De.addEventListener("touchstart",et),window.addEventListener("touchmove",ct),window.addEventListener("touchend",K);const Te=()=>{if(!L||!B||!Y)return;const Ce=L.clientWidth,Me=L.clientHeight;Y.aspect=Ce/Me,Y.updateProjectionMatrix(),B.setSize(Ce,Me)},Le=new ResizeObserver(Te);return Le.observe(L),()=>{y.current&&cancelAnimationFrame(y.current),De.removeEventListener("mousedown",Fe),window.removeEventListener("mousemove",Ie),window.removeEventListener("mouseup",$e),De.removeEventListener("touchstart",et),window.removeEventListener("touchmove",ct),window.removeEventListener("touchend",K),Le.disconnect(),B.dispose()}},[r,e,p]);function O(L,V,fe,ie){const{pelvis:Y,spine:B,thorax:X,headGroup:ae,leftArm:ge,rightArm:G,leftLeg:M,rightLeg:z}=fe;switch(ie.position.set(0,0,0),ie.rotation.set(0,0,0),Y.position.set(0,.9,0),Y.rotation.set(0,0,0),B.rotation.set(0,0,0),X.rotation.set(0,0,0),ae.rotation.set(0,0,0),ge.upperArm.rotation.set(0,0,0),G.upperArm.rotation.set(0,0,0),ge.forearm.rotation.set(0,0,0),G.forearm.rotation.set(0,0,0),M.thigh.rotation.set(0,0,0),z.thigh.rotation.set(0,0,0),M.shin.rotation.set(0,0,0),z.shin.rotation.set(0,0,0),L){case"pushup":case"diamond_pushup":case"incline_pushup":case"decline_pushup":{ie.rotation.x=-Math.PI/2;const J=.35+V*.38;ie.position.set(0,J,-.2),L==="decline_pushup"?(ie.rotation.x=-Math.PI/2-.25,ie.position.y+=.2):L==="incline_pushup"&&(ie.rotation.x=-Math.PI/2+.3,ie.position.y+=.1);const _e=(1-V)*1.5,Se=L==="diamond_pushup"?.3:.6;ge.armRoot.rotation.z=Se,G.armRoot.rotation.z=-Se,ge.upperArm.rotation.x=_e*.7,G.upperArm.rotation.x=_e*.7,ge.forearm.rotation.x=-_e,G.forearm.rotation.x=-_e,M.thigh.rotation.x=.05,z.thigh.rotation.x=.05;break}case"glute_bridge":case"single_leg_bridge":{ie.rotation.x=Math.PI/2,ie.position.set(0,.2,0);const J=V*.45;Y.position.z=J,B.rotation.x=-J*.8,M.thigh.rotation.x=1.2-J*.6,M.shin.rotation.x=-1.8+J*.3,L==="single_leg_bridge"?(z.thigh.rotation.x=.3,z.shin.rotation.x=.1):(z.thigh.rotation.x=1.2-J*.6,z.shin.rotation.x=-1.8+J*.3),ge.upperArm.rotation.x=-.2,G.upperArm.rotation.x=-.2;break}case"squat":case"sumo_squat":{const J=V*.45;Y.position.y=.9-J,B.rotation.x=J*.7;const _e=L==="sumo_squat"?.45:.2;M.hip.rotation.z=_e,z.hip.rotation.z=-_e;const Se=V*1.55;M.thigh.rotation.x=-Se,z.thigh.rotation.x=-Se,M.shin.rotation.x=Se*1.1,z.shin.rotation.x=Se*1.1,ge.upperArm.rotation.x=1.3,G.upperArm.rotation.x=1.3;break}case"bulgarian_split":{const J=V*.38;Y.position.y=.8-J,B.rotation.x=.25,M.thigh.rotation.x=-.5-V*.9,M.shin.rotation.x=.8+V*.7,z.thigh.rotation.x=.8-V*.2,z.shin.rotation.x=-1.6,ge.upperArm.rotation.x=.6,G.upperArm.rotation.x=.6;break}case"donkey_kicks":case"fire_hydrant":{if(ie.rotation.x=-Math.PI/2,ie.position.set(0,.45,0),ge.upperArm.rotation.x=1.5,G.upperArm.rotation.x=1.5,M.thigh.rotation.x=1.5,M.shin.rotation.x=-1.5,L==="donkey_kicks"){const J=V*1.2;z.thigh.rotation.x=.5-J,z.shin.rotation.x=-1.5}else{const J=V*1.3;z.thigh.rotation.x=1.5,z.thigh.rotation.z=-J,z.shin.rotation.x=-1.5}break}case"plank":case"mountain_climber":{if(ie.rotation.x=-Math.PI/2,ie.position.set(0,.35,-.2),ge.upperArm.rotation.x=1.5,G.upperArm.rotation.x=1.5,ge.forearm.rotation.x=0,G.forearm.rotation.x=0,L==="mountain_climber"){const J=Math.sin(H.current*4);M.thigh.rotation.x=J>0?1.2:0,M.shin.rotation.x=J>0?-1.5:0,z.thigh.rotation.x=J<=0?1.2:0,z.shin.rotation.x=J<=0?-1.5:0}break}case"hollow_body":case"leg_raises":case"flutter_kicks":case"bicycle_crunches":{if(ie.rotation.x=Math.PI/2,ie.position.set(0,.25,0),L==="hollow_body")B.rotation.x=.35,ge.upperArm.rotation.x=-2.8,G.upperArm.rotation.x=-2.8,M.thigh.rotation.x=-.35,z.thigh.rotation.x=-.35;else if(L==="leg_raises"){const J=V*1.5;M.thigh.rotation.x=-J,z.thigh.rotation.x=-J}else if(L==="flutter_kicks"){const J=Math.sin(H.current*5)*.3;M.thigh.rotation.x=-.4+J,z.thigh.rotation.x=-.4-J}else if(L==="bicycle_crunches"){const J=Math.sin(H.current*3);B.rotation.z=J*.4,M.thigh.rotation.x=J>0?-1.2:-.2,M.shin.rotation.x=J>0?1.5:0,z.thigh.rotation.x=J<=0?-1.2:-.2,z.shin.rotation.x=J<=0?1.5:0}break}case"chair_dips":{const J=V*.35;Y.position.set(0,.65-J,0),ge.upperArm.rotation.x=-.6-V*.9,G.upperArm.rotation.x=-.6-V*.9,ge.forearm.rotation.x=1.2,G.forearm.rotation.x=1.2,M.thigh.rotation.x=-1.2,z.thigh.rotation.x=-1.2,M.shin.rotation.x=1.2,z.shin.rotation.x=1.2;break}case"side_plank":{ie.rotation.z=Math.PI/2,ie.position.set(0,.45,0),ge.upperArm.rotation.y=1.5,G.upperArm.rotation.y=-1.5;break}case"superman":{ie.rotation.x=-Math.PI/2,ie.position.set(0,.2,0);const J=V*.35;B.rotation.x=-J,ge.upperArm.rotation.x=2.8,G.upperArm.rotation.x=2.8,M.thigh.rotation.x=J,z.thigh.rotation.x=J;break}case"wall_sit":{Y.position.set(0,.55,0),M.thigh.rotation.x=-1.57,z.thigh.rotation.x=-1.57,M.shin.rotation.x=1.57,z.shin.rotation.x=1.57;break}case"calf_raises":{const J=V*.15;Y.position.y=.9+J,M.shin.position.y=-.38+J*.5,z.shin.position.y=-.38+J*.5;break}}}const q=()=>{A.current={y:.4,x:.2}};return S.jsxs("div",{id:"exercise-3d-visualizer-card",className:"bg-white rounded-2xl border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] overflow-hidden flex flex-col",children:[S.jsxs("div",{className:"px-4 py-3 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex flex-wrap items-center justify-between gap-2",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${e==="male"?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:"3D"}),S.jsxs("div",{children:[S.jsx("h3",{className:"font-semibold text-[#3a3a38] text-sm",children:r.name}),S.jsxs("p",{className:"text-xs text-[#6d6d6b] flex items-center gap-1",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#8fa38e] animate-pulse"}),h]})]})]}),S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsxs("button",{id:"btn-toggle-muscles",onClick:()=>m(!p),className:`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 border ${p?e==="male"?"bg-[#eef3ed] text-[#5c725b] border-[#8fa38e]/40":"bg-[#fdfaf4] text-[#8a7362] border-[#d9bba4]/60":"bg-white text-[#6d6d6b] border-[#8fa38e]/20 hover:bg-[#fbfaf7]"}`,title:"Destacar grupos musculares ativos",children:[S.jsx(Qy,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Músculos"})]}),S.jsx("button",{id:"btn-play-pause-3d",onClick:()=>l(!s),className:"p-1.5 rounded-lg bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors",title:s?"Pausar animação":"Reproduzir animação",children:s?S.jsx(tu,{className:"w-3.5 h-3.5"}):S.jsx(tl,{className:"w-3.5 h-3.5 text-[#5c725b]"})}),S.jsxs("button",{id:"btn-speed-3d",onClick:()=>{const L=[.5,1,1.5],V=(L.indexOf(c)+1)%L.length;f(L[V])},className:"px-2 py-1 text-xs font-medium bg-white border border-[#8fa38e]/20 rounded-lg text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors",title:"Velocidade de reprodução",children:[c,"x"]}),S.jsx("button",{id:"btn-reset-view-3d",onClick:q,className:"p-1.5 rounded-lg bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors",title:"Centralizar câmera",children:S.jsx(sx,{className:"w-3.5 h-3.5"})})]})]}),S.jsxs("div",{className:"relative w-full h-72 sm:h-80 bg-gradient-to-b from-[#fbfaf7] to-[#f4ebe1]/50 flex items-center justify-center select-none cursor-grab active:cursor-grabbing",children:[S.jsx("div",{ref:i,className:"w-full h-full"}),S.jsxs("div",{className:"absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] text-[#6d6d6b] border border-[#8fa38e]/20 shadow-xs flex items-center gap-1 pointer-events-none",children:[S.jsx(sx,{className:"w-3 h-3 text-[#8fa38e] animate-spin-slow"}),S.jsx("span",{children:"Arraste para girar 360°"})]}),S.jsxs("div",{className:"absolute top-3 right-3 flex flex-col gap-1 items-end pointer-events-none",children:[S.jsxs("div",{className:"bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#3a3a38] border border-[#8fa38e]/20 shadow-xs",children:["Foco:"," ",S.jsx("span",{className:e==="male"?"text-[#5c725b]":"text-[#8a7362]",children:r.muscles.primary[0]})]}),r.muscles.primary[1]&&S.jsxs("div",{className:"bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] text-[#6d6d6b] border border-[#8fa38e]/20 shadow-xs",children:["+ ",r.muscles.primary[1]]})]})]}),S.jsxs("div",{className:"p-4 bg-white border-t border-[#8fa38e]/15 text-xs text-[#6d6d6b] space-y-2",children:[S.jsxs("div",{className:"flex items-start gap-2",children:[S.jsx(Zh,{className:"w-4 h-4 text-[#c89f83] shrink-0 mt-0.5"}),S.jsxs("div",{children:[S.jsx("span",{className:"font-semibold text-[#3a3a38]",children:"Dica de Ouro do Mestre: "}),S.jsx("span",{className:"text-[#4a4a48]",children:r.keyCues[0]})]})]}),S.jsxs("div",{className:"flex items-start gap-2",children:[S.jsx(Zy,{className:"w-4 h-4 text-[#8fa38e] shrink-0 mt-0.5"}),S.jsxs("div",{children:[S.jsx("span",{className:"font-semibold text-[#3a3a38]",children:"Respiração Correta: "}),S.jsx("span",{className:"text-[#4a4a48]",children:r.breathing})]})]})]})]})};var cp={};(function r(e,i,s,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",p=(function(){if(!e.OffscreenCanvas)return!1;try{var G=new OffscreenCanvas(1,1),M=G.getContext("2d");M.fillRect(0,0,1,1);var z=G.transferToImageBitmap();M.createPattern(z,"no-repeat")}catch{return!1}return!0})();function m(){}function h(G){var M=i.exports.Promise,z=M!==void 0?M:e.Promise;return typeof z=="function"?new z(G):(G(m,m),null)}var v=(function(G,M){return{transform:function(z){if(G)return z;if(M.has(z))return M.get(z);var J=new OffscreenCanvas(z.width,z.height),_e=J.getContext("2d");return _e.drawImage(z,0,0),M.set(z,J),J},clear:function(){M.clear()}}})(p,new Map),b=(function(){var G=Math.floor(16.666666666666668),M,z,J={},_e=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(Se){var Q=Math.random();return J[Q]=requestAnimationFrame(function se(me){_e===me||_e+G-1<me?(_e=me,delete J[Q],Se()):J[Q]=requestAnimationFrame(se)}),Q},z=function(Se){J[Se]&&cancelAnimationFrame(J[Se])}):(M=function(Se){return setTimeout(Se,G)},z=function(Se){return clearTimeout(Se)}),{frame:M,cancel:z}})(),g=(function(){var G,M,z={};function J(_e){function Se(Q,se){_e.postMessage({options:Q||{},callback:se})}_e.init=function(se){var me=se.transferControlToOffscreen();_e.postMessage({canvas:me},[me])},_e.fire=function(se,me,Re){if(M)return Se(se,null),M;var qe=Math.random().toString(36).slice(2);return M=h(function(Oe){function lt(Qe){Qe.data.callback===qe&&(delete z[qe],_e.removeEventListener("message",lt),M=null,v.clear(),Re(),Oe())}_e.addEventListener("message",lt),Se(se,qe),z[qe]=lt.bind(null,{data:{callback:qe}})}),M},_e.reset=function(){_e.postMessage({reset:!0});for(var se in z)z[se](),delete z[se]}}return function(){if(G)return G;if(!s&&c){var _e=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{G=new Worker(URL.createObjectURL(new Blob([_e])))}catch(Se){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Se),null}J(G)}return G}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(G,M){return M?M(G):G}function D(G){return G!=null}function y(G,M,z){return w(G&&D(G[M])?G[M]:E[M],z)}function x(G){return G<0?0:Math.floor(G)}function H(G,M){return Math.floor(Math.random()*(M-G))+G}function k(G){return parseInt(G,16)}function N(G){return G.map(F)}function F(G){var M=String(G).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:k(M.substring(0,2)),g:k(M.substring(2,4)),b:k(M.substring(4,6))}}function U(G){var M=y(G,"origin",Object);return M.x=y(M,"x",Number),M.y=y(M,"y",Number),M}function I(G){G.width=document.documentElement.clientWidth,G.height=document.documentElement.clientHeight}function A(G){var M=G.getBoundingClientRect();G.width=M.width,G.height=M.height}function O(G){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=G,M}function q(G,M,z,J,_e,Se,Q,se,me){G.save(),G.translate(M,z),G.rotate(Se),G.scale(J,_e),G.arc(0,0,1,Q,se,me),G.restore()}function L(G){var M=G.angle*(Math.PI/180),z=G.spread*(Math.PI/180);return{x:G.x,y:G.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:G.startVelocity*.5+Math.random()*G.startVelocity,angle2D:-M+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:G.color,shape:G.shape,tick:0,totalTicks:G.ticks,decay:G.decay,drift:G.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:G.gravity*3,ovalScalar:.6,scalar:G.scalar,flat:G.flat}}function V(G,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var z=M.tick++/M.totalTicks,J=M.x+M.random*M.tiltCos,_e=M.y+M.random*M.tiltSin,Se=M.wobbleX+M.random*M.tiltCos,Q=M.wobbleY+M.random*M.tiltSin;if(G.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-z)+")",G.beginPath(),f&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))G.fill(X(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(Se-J)*.1,Math.abs(Q-_e)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var se=Math.PI/10*M.wobble,me=Math.abs(Se-J)*.1,Re=Math.abs(Q-_e)*.1,qe=M.shape.bitmap.width*M.scalar,Oe=M.shape.bitmap.height*M.scalar,lt=new DOMMatrix([Math.cos(se)*me,Math.sin(se)*me,-Math.sin(se)*Re,Math.cos(se)*Re,M.x,M.y]);lt.multiplySelf(new DOMMatrix(M.shape.matrix));var Qe=G.createPattern(v.transform(M.shape.bitmap),"no-repeat");Qe.setTransform(lt),G.globalAlpha=1-z,G.fillStyle=Qe,G.fillRect(M.x-qe/2,M.y-Oe/2,qe,Oe),G.globalAlpha=1}else if(M.shape==="circle")G.ellipse?G.ellipse(M.x,M.y,Math.abs(Se-J)*M.ovalScalar,Math.abs(Q-_e)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):q(G,M.x,M.y,Math.abs(Se-J)*M.ovalScalar,Math.abs(Q-_e)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var Xe=Math.PI/2*3,st=4*M.scalar,rt=8*M.scalar,vt=M.x,Ct=M.y,Tt=5,Rt=Math.PI/Tt;Tt--;)vt=M.x+Math.cos(Xe)*rt,Ct=M.y+Math.sin(Xe)*rt,G.lineTo(vt,Ct),Xe+=Rt,vt=M.x+Math.cos(Xe)*st,Ct=M.y+Math.sin(Xe)*st,G.lineTo(vt,Ct),Xe+=Rt;else G.moveTo(Math.floor(M.x),Math.floor(M.y)),G.lineTo(Math.floor(M.wobbleX),Math.floor(_e)),G.lineTo(Math.floor(Se),Math.floor(Q)),G.lineTo(Math.floor(J),Math.floor(M.wobbleY));return G.closePath(),G.fill(),M.tick<M.totalTicks}function fe(G,M,z,J,_e){var Se=M.slice(),Q=G.getContext("2d"),se,me,Re=h(function(qe){function Oe(){se=me=null,Q.clearRect(0,0,J.width,J.height),v.clear(),_e(),qe()}function lt(){s&&!(J.width===l.width&&J.height===l.height)&&(J.width=G.width=l.width,J.height=G.height=l.height),!J.width&&!J.height&&(z(G),J.width=G.width,J.height=G.height),Q.clearRect(0,0,J.width,J.height),Se=Se.filter(function(Qe){return V(Q,Qe)}),Se.length?se=b.frame(lt):Oe()}se=b.frame(lt),me=Oe});return{addFettis:function(qe){return Se=Se.concat(qe),Re},canvas:G,promise:Re,reset:function(){se&&b.cancel(se),me&&me()}}}function ie(G,M){var z=!G,J=!!y(M||{},"resize"),_e=!1,Se=y(M,"disableForReducedMotion",Boolean),Q=c&&!!y(M||{},"useWorker"),se=Q?g():null,me=z?I:A,Re=G&&se?!!G.__confetti_initialized:!1,qe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Oe;function lt(Xe,st,rt){for(var vt=y(Xe,"particleCount",x),Ct=y(Xe,"angle",Number),Tt=y(Xe,"spread",Number),Rt=y(Xe,"startVelocity",Number),Ot=y(Xe,"decay",Number),Zt=y(Xe,"gravity",Number),$=y(Xe,"drift",Number),Nt=y(Xe,"colors",N),_t=y(Xe,"ticks",Number),P=y(Xe,"shapes"),T=y(Xe,"scalar"),te=!!y(Xe,"flat"),ce=U(Xe),ve=vt,Ne=[],Pe=G.width*ce.x,be=G.height*ce.y;ve--;)Ne.push(L({x:Pe,y:be,angle:Ct,spread:Tt,startVelocity:Rt,color:Nt[ve%Nt.length],shape:P[H(0,P.length)],ticks:_t,decay:Ot,gravity:Zt,drift:$,scalar:T,flat:te}));return Oe?Oe.addFettis(Ne):(Oe=fe(G,Ne,me,st,rt),Oe.promise)}function Qe(Xe){var st=Se||y(Xe,"disableForReducedMotion",Boolean),rt=y(Xe,"zIndex",Number);if(st&&qe)return h(function(Rt){Rt()});z&&Oe?G=Oe.canvas:z&&!G&&(G=O(rt),document.body.appendChild(G)),J&&!Re&&me(G);var vt={width:G.width,height:G.height};se&&!Re&&se.init(G),Re=!0,se&&(G.__confetti_initialized=!0);function Ct(){if(se){var Rt={getBoundingClientRect:function(){if(!z)return G.getBoundingClientRect()}};me(Rt),se.postMessage({resize:{width:Rt.width,height:Rt.height}});return}vt.width=vt.height=null}function Tt(){Oe=null,J&&(_e=!1,e.removeEventListener("resize",Ct)),z&&G&&(document.body.contains(G)&&document.body.removeChild(G),G=null,Re=!1)}return J&&!_e&&(_e=!0,e.addEventListener("resize",Ct,!1)),se?se.fire(Xe,vt,Tt):lt(Xe,vt,Tt)}return Qe.reset=function(){se&&se.reset(),Oe&&Oe.reset()},Qe}var Y;function B(){return Y||(Y=ie(null,{useWorker:!0,resize:!0})),Y}function X(G,M,z,J,_e,Se,Q){var se=new Path2D(G),me=new Path2D;me.addPath(se,new DOMMatrix(M));var Re=new Path2D;return Re.addPath(me,new DOMMatrix([Math.cos(Q)*_e,Math.sin(Q)*_e,-Math.sin(Q)*Se,Math.cos(Q)*Se,z,J])),Re}function ae(G){if(!f)throw new Error("path confetti are not supported in this browser");var M,z;typeof G=="string"?M=G:(M=G.path,z=G.matrix);var J=new Path2D(M),_e=document.createElement("canvas"),Se=_e.getContext("2d");if(!z){for(var Q=1e3,se=Q,me=Q,Re=0,qe=0,Oe,lt,Qe=0;Qe<Q;Qe+=2)for(var Xe=0;Xe<Q;Xe+=2)Se.isPointInPath(J,Qe,Xe,"nonzero")&&(se=Math.min(se,Qe),me=Math.min(me,Xe),Re=Math.max(Re,Qe),qe=Math.max(qe,Xe));Oe=Re-se,lt=qe-me;var st=10,rt=Math.min(st/Oe,st/lt);z=[rt,0,0,rt,-Math.round(Oe/2+se)*rt,-Math.round(lt/2+me)*rt]}return{type:"path",path:M,matrix:z}}function ge(G){var M,z=1,J="#000000",_e='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof G=="string"?M=G:(M=G.text,z="scalar"in G?G.scalar:z,_e="fontFamily"in G?G.fontFamily:_e,J="color"in G?G.color:J);var Se=10*z,Q=""+Se+"px "+_e,se=new OffscreenCanvas(Se,Se),me=se.getContext("2d");me.font=Q;var Re=me.measureText(M),qe=Math.ceil(Re.actualBoundingBoxRight+Re.actualBoundingBoxLeft),Oe=Math.ceil(Re.actualBoundingBoxAscent+Re.actualBoundingBoxDescent),lt=2,Qe=Re.actualBoundingBoxLeft+lt,Xe=Re.actualBoundingBoxAscent+lt;qe+=lt+lt,Oe+=lt+lt,se=new OffscreenCanvas(qe,Oe),me=se.getContext("2d"),me.font=Q,me.fillStyle=J,me.fillText(M,Qe,Xe);var st=1/z;return{type:"bitmap",bitmap:se.transferToImageBitmap(),matrix:[st,0,0,st,-qe*st/2,-Oe*st/2]}}i.exports=function(){return B().apply(this,arguments)},i.exports.reset=function(){B().reset()},i.exports.create=ie,i.exports.shapeFromPath=ae,i.exports.shapeFromText=ge})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),cp,!1);const Xc=cp.exports;cp.exports.create;const I3=({workout:r,profile:e,progress:i,onUpdateProgress:s,onOpenExerciseDetail:l,onNextDay:c,onPrevDay:f,isLastDay:p,isFirstDay:m})=>{var O,q;const h=e.gender==="male",[v,b]=nt.useState(0),[g,E]=nt.useState(!1),[w,D]=nt.useState(r.exercises[0]||null);nt.useEffect(()=>{r.exercises.length>0&&D(r.exercises[0])},[r.day]),nt.useEffect(()=>{let L=null;return g&&(L=setInterval(()=>{b(V=>{const fe=V+1;return fe===900&&!i.walkCompleted&&(s({...i,walkCompleted:!0}),Xc({particleCount:50,spread:60,origin:{y:.8}})),fe})},1e3)),()=>clearInterval(L)},[g,i,s]);const y=L=>{const V=i.exercisesCompleted||[],ie=V.includes(L)?V.filter(B=>B!==L):[...V,L],Y=r.exercises.every(B=>ie.includes(B.id))&&(i.walkCompleted||!1);s({...i,exercisesCompleted:ie,completed:Y,completedAt:Y?new Date().toISOString():i.completedAt})},x=()=>{const L=!i.walkCompleted,V=r.exercises.every(fe=>{var ie;return(ie=i.exercisesCompleted)==null?void 0:ie.includes(fe.id)})&&L;s({...i,walkCompleted:L,completed:V,completedAt:V?new Date().toISOString():i.completedAt}),L&&Xc({particleCount:40,spread:50,origin:{y:.7}})},H=L=>{s({...i,waterGlasses:Math.max(0,L)})},k=L=>{s({...i,energyLevel:L})},N=()=>{const L=r.exercises.map(V=>V.id);s({...i,completed:!0,exercisesCompleted:L,walkCompleted:!0,completedAt:new Date().toISOString()}),Xc({particleCount:120,spread:80,origin:{y:.6}})},F=r.exercises.length+1,U=(((O=i.exercisesCompleted)==null?void 0:O.length)||0)+(i.walkCompleted?1:0),I=Math.round(U/F*100),A=L=>{const V=Math.floor(L/60),fe=L%60;return`${String(V).padStart(2,"0")}:${String(fe).padStart(2,"0")}`};return S.jsxs("div",{id:"daily-checklist-container",className:"space-y-6",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-5 sm:p-6 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)]",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[S.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-bold ${h?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:["Semana ",r.week," • Dia ",r.day," de 28"]}),i.completed&&S.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/40 flex items-center gap-1",children:[S.jsx(Gr,{className:"w-3.5 h-3.5 text-[#5c725b]"})," Dia Concluído"]})]}),S.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-[#3a3a38] tracking-tight",children:r.title}),S.jsx("p",{className:"text-xs sm:text-sm text-[#6d6d6b] mt-0.5",children:r.tagline})]}),S.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center",children:[S.jsx("button",{id:"btn-prev-day",onClick:f,disabled:m,className:"px-3.5 py-1.5 rounded-xl border border-[#8fa38e]/25 text-xs font-semibold text-[#6d6d6b] hover:bg-[#fbfaf7] disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:"← Dia Anterior"}),S.jsx("button",{id:"btn-next-day",onClick:c,disabled:p,className:`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors ${h?"bg-[#8fa38e] hover:bg-[#7e937d] text-white":"bg-[#c89f83] hover:bg-[#b88f73] text-white"} disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs`,children:"Próximo Dia →"})]})]}),S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-[#8fa38e]/10 text-xs",children:[S.jsxs("div",{className:"flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(f_,{className:"w-4 h-4 text-[#8fa38e] shrink-0"}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Treino Calistenia"}),S.jsx("span",{className:"font-bold text-[#4a4a48]",children:"30 minutos"})]})]}),S.jsxs("div",{className:"flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(nh,{className:"w-4 h-4 text-[#c89f83] shrink-0"}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Caminhada Diária"}),S.jsx("span",{className:"font-bold text-[#4a4a48]",children:"15 minutos"})]})]}),S.jsxs("div",{className:"flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(p_,{className:"w-4 h-4 text-[#8a7362] shrink-0"}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Gasto Estimado"}),S.jsxs("span",{className:"font-bold text-[#4a4a48]",children:["~",r.estimatedCalories," kcal"]})]})]}),S.jsxs("div",{className:"flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(My,{className:"w-4 h-4 text-[#5c725b] shrink-0"}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Progresso do Dia"}),S.jsxs("span",{className:"font-bold text-[#4a4a48]",children:[I,"% concluído"]})]})]})]}),S.jsx("div",{className:"mt-3 w-full bg-[#e5e1d8] rounded-full h-2 overflow-hidden",children:S.jsx("div",{className:`h-full transition-all duration-500 ${I===100?"bg-[#5c725b]":h?"bg-[#8fa38e]":"bg-[#c89f83]"}`,style:{width:`${I}%`}})})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[S.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-5 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${h?"bg-[#eef3ed] text-[#5c725b]":"bg-[#fdfaf4] text-[#8a7362]"}`,children:"30'"}),S.jsxs("div",{children:[S.jsx("h3",{className:"font-bold text-[#3a3a38] text-sm sm:text-base",children:"1. Treino de Calistenia (30 min)"}),S.jsx("p",{className:"text-xs text-[#6d6d6b]",children:r.focusArea})]})]}),S.jsxs("span",{className:"text-xs font-semibold text-[#6d6d6b] bg-[#fbfaf7] border border-[#8fa38e]/15 px-2.5 py-1 rounded-lg",children:[((q=i.exercisesCompleted)==null?void 0:q.length)||0,"/",r.exercises.length," feitos"]})]}),S.jsxs("div",{className:"p-3.5 rounded-xl bg-[#fdfaf4] border border-[#d9bba4]/50 text-xs text-[#6d6d6b] space-y-1",children:[S.jsxs("div",{className:"font-bold text-[#8a7362] flex items-center gap-1.5",children:[S.jsx(Zh,{className:"w-3.5 h-3.5 text-[#c89f83]"}),"Aquecimento Articular Inicial (4 min):"]}),S.jsx("div",{className:"text-[#6d6d6b] pl-5 leading-relaxed",children:r.warmupExercises.join(" • ")})]}),S.jsx("div",{className:"space-y-2.5",children:r.exercises.map((L,V)=>{var Y;const fe=(Y=i.exercisesCompleted)==null?void 0:Y.includes(L.id),ie=(w==null?void 0:w.id)===L.id;return S.jsx("div",{className:`p-3.5 rounded-xl border transition-all ${fe?"bg-[#eef3ed]/30 border-[#8fa38e]/40":ie?"bg-[#eef3ed]/40 border-[#8fa38e] shadow-xs":"bg-white border-[#8fa38e]/15 hover:border-[#8fa38e]/40"}`,children:S.jsxs("div",{className:"flex items-start justify-between gap-3",children:[S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("button",{id:`btn-check-exercise-${L.id}`,onClick:()=>y(L.id),className:"mt-0.5 text-[#8fa38e] hover:opacity-80 transition-opacity",title:fe?"Marcar como não feito":"Marcar como feito",children:fe?S.jsx(Gr,{className:"w-5 h-5 text-[#8fa38e] fill-[#eef3ed]"}):S.jsx(th,{className:"w-5 h-5 text-[#d8d3c7] hover:text-[#8fa38e]"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("span",{className:"font-bold text-xs sm:text-sm text-[#3a3a38]",children:[V+1,". ",L.name]}),S.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded font-medium ${h?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/25":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/40"}`,children:L.category})]}),S.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6d6d6b] mt-1",children:[S.jsxs("span",{className:"font-semibold text-[#4a4a48]",children:[L.sets," séries × ",L.repsOrDuration]}),S.jsxs("span",{children:["• Descanso: ",L.restSeconds,"s"]})]}),S.jsxs("div",{className:"text-[11px] text-[#6d6d6b] mt-1",children:[S.jsx("span",{className:"text-[#999]",children:"Foco: "}),L.muscles.primary.join(", ")]})]})]}),S.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[S.jsxs("button",{id:`btn-select-3d-${L.id}`,onClick:()=>D(L),className:`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1 ${ie?"bg-[#8fa38e] text-white border-[#8fa38e]":"bg-white text-[#4a4a48] border-[#8fa38e]/25 hover:bg-[#eef3ed]"}`,title:"Carregar animação 3D ao lado",children:[S.jsx(Vy,{className:"w-3.5 h-3.5"}),S.jsx("span",{className:"hidden sm:inline",children:"3D"})]}),S.jsx("button",{id:`btn-open-detail-${L.id}`,onClick:()=>l(L),className:"p-1 text-[#6d6d6b] hover:text-[#3a3a38] rounded-lg hover:bg-[#fbfaf7] transition-colors",title:"Ver instruções completas e cronômetro",children:S.jsx(d_,{className:"w-4 h-4"})})]})]})},L.id)})}),S.jsxs("div",{className:"p-3.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-xs text-[#6d6d6b] space-y-1",children:[S.jsxs("div",{className:"font-bold text-[#4a4a48] flex items-center gap-1.5",children:[S.jsx(Wy,{className:"w-3.5 h-3.5 text-[#8fa38e]"}),"Desaquecimento & Alongamento Final (3 min):"]}),S.jsx("div",{className:"text-[#6d6d6b] pl-5 leading-relaxed",children:r.cooldownExercises.join(" • ")})]})]}),S.jsxs("div",{className:"bg-[#fdfaf4] border-l-4 border-l-[#d9bba4] border-y border-r border-[#d9bba4]/40 p-5 rounded-2xl shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4",children:[S.jsx("div",{className:"flex items-start justify-between gap-3",children:S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("button",{id:"btn-toggle-walk-completed",onClick:x,className:"mt-1 text-[#8fa38e] hover:opacity-80 transition-opacity",children:i.walkCompleted?S.jsx(Gr,{className:"w-6 h-6 text-[#8fa38e] fill-[#eef3ed]"}):S.jsx(th,{className:"w-6 h-6 text-[#d8d3c7] hover:text-[#8fa38e]"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("h3",{className:"font-bold text-[#8a7362] text-sm sm:text-base",children:"2. Caminhada Diária Obrigatória (15 min)"}),S.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30",children:"NEAT & Queima Lipídica"})]}),S.jsx("p",{className:"text-xs text-[#6d6d6b] mt-1 leading-relaxed",children:r.walkTip})]})]})}),S.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-r from-[#fbf6f0] to-[#f7ede6] border border-[#d9bba4]/50 flex flex-col sm:flex-row items-center justify-between gap-3",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#c89f83] text-white flex items-center justify-center font-bold shadow-2xs",children:S.jsx(nh,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-semibold text-[#8a7362] block",children:"Cronômetro da Caminhada (Meta: 15:00)"}),S.jsx("span",{className:"text-xs text-[#6d6d6b]",children:v>=900?"Meta dos 15 min batida!":"Passo firme e ritmado"})]})]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"font-mono text-2xl font-bold text-[#4a4a48] px-3 py-1 bg-white rounded-xl border border-[#d9bba4]/60 shadow-2xs",children:A(v)}),S.jsx("button",{id:"btn-toggle-walk-timer",onClick:()=>E(!g),className:`p-2.5 rounded-xl text-white font-bold transition-all shadow-xs ${g?"bg-[#c89f83] hover:bg-[#b88f73]":"bg-[#8fa38e] hover:bg-[#7e937d]"}`,title:g?"Pausar caminhada":"Iniciar caminhada",children:g?S.jsx(tu,{className:"w-4 h-4"}):S.jsx(tl,{className:"w-4 h-4"})}),S.jsx("button",{id:"btn-reset-walk-timer",onClick:()=>{E(!1),b(0)},className:"p-2.5 rounded-xl bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors",title:"Zerar cronômetro",children:S.jsx(m_,{className:"w-4 h-4"})})]})]})]}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-3",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(ax,{className:"w-4 h-4 text-[#8fa38e]"}),S.jsxs("h4",{className:"font-bold text-xs sm:text-sm text-[#3a3a38]",children:["Hidratação (Meta: ",e.waterTargetLiters,"L)"]})]}),S.jsxs("span",{className:"text-xs font-semibold text-[#5c725b]",children:[i.waterGlasses||0,"/",e.waterTargetGlasses," copos"]})]}),S.jsx("div",{className:"flex flex-wrap gap-1.5",children:Array.from({length:e.waterTargetGlasses}).map((L,V)=>{const fe=(i.waterGlasses||0)>V;return S.jsx("button",{id:`btn-water-glass-${V}`,onClick:()=>H(fe?V:V+1),className:`w-7 h-8 rounded-md text-xs flex items-center justify-center transition-all ${fe?"bg-[#8fa38e] text-white shadow-xs scale-105":"bg-[#fbfaf7] border border-[#8fa38e]/20 text-[#8fa38e] hover:bg-[#eef3ed]"}`,title:`${(V+1)*300}ml`,children:S.jsx(ax,{className:"w-3.5 h-3.5"})},V)})}),S.jsxs("p",{className:"text-[11px] text-[#6d6d6b]",children:["Calculado para seu peso (",e.weight,"kg): acelera o metabolismo e previne cãibras."]})]}),S.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-3",children:[S.jsxs("h4",{className:"font-bold text-xs sm:text-sm text-[#3a3a38] flex items-center gap-1.5",children:[S.jsx(rx,{className:"w-4 h-4 text-[#c89f83]"})," Sensação / Nível de Energia"]}),S.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4,5].map(L=>S.jsx("button",{id:`btn-star-energy-${L}`,onClick:()=>k(L),className:"p-1 text-[#d8d3c7] hover:text-[#c89f83] transition-colors",children:S.jsx(rx,{className:`w-5 h-5 ${(i.energyLevel||0)>=L?"text-[#c89f83] fill-[#d9bba4]":"text-[#d8d3c7]"}`})},L)),S.jsx("span",{className:"text-xs text-[#6d6d6b] ml-1",children:i.energyLevel===5?"Excelente!":i.energyLevel===4?"Ótimo":i.energyLevel===3?"Moderado":i.energyLevel?"Cansado":"Avalie seu dia"})]}),S.jsx("input",{id:"input-daily-notes",type:"text",placeholder:"Anotação rápida do treino de hoje...",value:i.notes||"",onChange:L=>s({...i,notes:L.target.value}),className:"w-full text-xs px-3 py-2 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/20 focus:outline-none focus:ring-1 focus:ring-[#8fa38e] text-[#4a4a48]"})]})]}),S.jsx("div",{className:"pt-2",children:S.jsxs("button",{id:"btn-complete-entire-day",onClick:N,className:`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 ${i.completed?"bg-[#5c725b] hover:bg-[#4d5f4c] text-white":h?"bg-[#8fa38e] hover:bg-[#7e937d] text-white":"bg-[#c89f83] hover:bg-[#b88f73] text-white"}`,children:[S.jsx(g_,{className:"w-5 h-5"}),i.completed?`Dia ${r.day} Concluído com Sucesso! (Clique para comemorar)`:`Finalizar e Registrar Dia ${r.day} do Desafio`]})})]}),S.jsx("div",{className:"lg:col-span-5 space-y-5",children:w?S.jsxs("div",{className:"sticky top-4 space-y-4",children:[S.jsx(ou,{exercise:w,gender:e.gender}),S.jsxs("div",{className:"p-4 rounded-2xl bg-white border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-2.5",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#fdfaf4] border border-[#d9bba4]/50 text-[#8a7362] flex items-center justify-center font-bold text-xs",children:"★"}),S.jsx("h4",{className:"font-bold text-[#3a3a38] text-xs sm:text-sm",children:"Dica Técnica do Mestre de Calistenia"})]}),S.jsx("p",{className:"text-xs text-[#6d6d6b] leading-relaxed",children:r.calisthenicsTip}),S.jsxs("div",{className:"pt-2 border-t border-[#8fa38e]/10 flex items-center justify-between text-xs text-[#6d6d6b]",children:[S.jsxs("span",{children:["Exercício Atual: ",S.jsx("strong",{className:"text-[#4a4a48]",children:w.name})]}),S.jsx("button",{id:"btn-view-full-instructions",onClick:()=>l(w),className:"text-[#5c725b] hover:text-[#3a3a38] font-bold",children:"Ver Tudo →"})]})]})]}):S.jsx("div",{className:"bg-[#fbfaf7] rounded-2xl p-8 border border-[#8fa38e]/20 text-center text-[#6d6d6b] text-xs",children:"Selecione um exercício na lista para carregar o modelo 3D."})})]})]})},F3=({days:r,progressMap:e,selectedDay:i,onSelectDay:s,profile:l})=>{const c=l.gender==="male",f=Object.values(e),p=f.filter(E=>E.completed).length,m=Math.round(p/28*100),h=p*30,v=f.filter(E=>E.walkCompleted).length*15,b=f.reduce((E,w)=>{if(w.completed){const D=r.find(y=>y.day===w.day);return E+((D==null?void 0:D.estimatedCalories)||280)}return E},0),g=[{number:1,title:"Semana 1: Fundação & Conexão Neural",desc:"Ativação biomecânica, postura e queima inicial de calorias.",days:r.slice(0,7)},{number:2,title:"Semana 2: Intensificação Muscular & Sobrecarga",desc:"Aumento de tempo sob tensão e resistência isométrica.",days:r.slice(7,14)},{number:3,title:"Semana 3: Hipertrofia & Modelagem Tridimensional",desc:"Estímulo metabólico profundo para esculpir as fibras.",days:r.slice(14,21)},{number:4,title:"Semana 4: Definição Máxima & Transformação",desc:"A reta final para consolidar o novo corpo e hábitos.",days:r.slice(21,28)}];return S.jsxs("div",{id:"calendar-grid-28-container",className:"space-y-6",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-5 sm:p-6 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)]",children:[S.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[S.jsx(g_,{className:"w-5 h-5 text-[#c89f83]"}),S.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#6d6d6b]",children:"Progresso Geral do Desafio (28 Dias)"})]}),S.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-[#3a3a38]",children:[p," de 28 Dias Concluídos (",m,"%)"]}),S.jsxs("p",{className:"text-xs text-[#6d6d6b] mt-0.5",children:[l.focus," • ",l.name]})]}),S.jsxs("div",{className:"grid grid-cols-3 gap-2.5 sm:gap-4 text-center",children:[S.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(f_,{className:"w-4 h-4 text-[#8fa38e] mx-auto mb-1"}),S.jsx("span",{className:"text-[10px] text-[#999] block",children:"Calistenia"}),S.jsxs("span",{className:"text-xs sm:text-sm font-bold text-[#4a4a48]",children:[h," min"]})]}),S.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(nh,{className:"w-4 h-4 text-[#c89f83] mx-auto mb-1"}),S.jsx("span",{className:"text-[10px] text-[#999] block",children:"Caminhadas"}),S.jsxs("span",{className:"text-xs sm:text-sm font-bold text-[#4a4a48]",children:[v," min"]})]}),S.jsxs("div",{className:"p-2.5 sm:p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx(p_,{className:"w-4 h-4 text-[#8a7362] mx-auto mb-1"}),S.jsx("span",{className:"text-[10px] text-[#999] block",children:"Calorias Queimadas"}),S.jsxs("span",{className:"text-xs sm:text-sm font-bold text-[#4a4a48]",children:["~",b]})]})]})]}),S.jsx("div",{className:"mt-4 w-full bg-[#e5e1d8] rounded-full h-3 overflow-hidden p-0.5 border border-[#d8d3c7]",children:S.jsx("div",{className:`h-full rounded-full transition-all duration-700 ${m===100?"bg-[#5c725b]":c?"bg-[#8fa38e]":"bg-[#c89f83]"}`,style:{width:`${Math.max(m,2)}%`}})})]}),S.jsx("div",{className:"space-y-6",children:g.map(E=>{const w=E.days.filter(y=>{var x;return(x=e[y.day])==null?void 0:x.completed}).length,D=w===7;return S.jsxs("div",{className:"bg-white rounded-2xl p-5 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8fa38e]/10 pb-3",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${D?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/40":c?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:D?"✓":`S${E.number}`}),S.jsxs("div",{children:[S.jsx("h3",{className:"font-bold text-sm sm:text-base text-[#3a3a38]",children:E.title}),S.jsx("p",{className:"text-xs text-[#6d6d6b]",children:E.desc})]})]}),S.jsxs("div",{className:"flex items-center gap-2 self-start sm:self-center",children:[S.jsxs("span",{className:"text-xs font-semibold text-[#6d6d6b] bg-[#fbfaf7] border border-[#8fa38e]/15 px-2.5 py-1 rounded-lg",children:[w,"/7 dias"]}),D&&S.jsxs("span",{className:"text-xs font-bold text-[#5c725b] bg-[#eef3ed] px-2.5 py-1 rounded-lg border border-[#8fa38e]/30 flex items-center gap-1",children:[S.jsx(Cy,{className:"w-3.5 h-3.5"})," Meta Concluída"]})]})]}),S.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5",children:E.days.map(y=>{const x=e[y.day],H=x==null?void 0:x.completed,k=i===y.day,N=x==null?void 0:x.walkCompleted;return S.jsxs("button",{id:`btn-calendar-day-${y.day}`,onClick:()=>s(y.day),className:`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-28 relative ${k?c?"bg-[#eef3ed]/70 border-[#8fa38e] shadow-xs ring-2 ring-[#8fa38e]/30":"bg-[#fdfaf4] border-[#c89f83] shadow-xs ring-2 ring-[#c89f83]/30":H?"bg-[#eef3ed]/30 border-[#8fa38e]/30 hover:border-[#8fa38e]/60":"bg-[#fbfaf7] border-[#8fa38e]/15 hover:bg-[#f3efe6] hover:border-[#8fa38e]/30"}`,children:[S.jsxs("div",{className:"flex items-center justify-between w-full",children:[S.jsxs("span",{className:"font-bold text-xs text-[#3a3a38]",children:["Dia ",y.day]}),H?S.jsx(Gr,{className:"w-4 h-4 text-[#8fa38e]"}):S.jsx(th,{className:"w-4 h-4 text-[#d8d3c7]"})]}),S.jsxs("div",{className:"my-auto",children:[S.jsx("span",{className:"text-[11px] font-semibold text-[#4a4a48] line-clamp-1 block",children:y.title}),S.jsx("span",{className:"text-[10px] text-[#6d6d6b] line-clamp-1 block mt-0.5",children:y.focusArea})]}),S.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#6d6d6b] pt-1 border-t border-[#8fa38e]/10 w-full",children:[S.jsx("span",{children:"30' + 15'"}),N&&S.jsx("span",{className:"text-[#5c725b] font-bold",children:"Walk ✓"})]})]},y.day)})})]},E.number)})})]})},B3=({gender:r,onSelectExerciseDetail:e})=>{const[i,s]=nt.useState("Todos"),[l,c]=nt.useState(""),[f,p]=nt.useState(r==="male"?W.pushup_standard:W.glute_bridge),m=r==="male",h=Object.values(W),v=["Todos","Peito","Glúteos","Abdômen & Core","Pernas","Cardio Calistênico"],b=h.filter(g=>{const E=i==="Todos"||g.category===i,w=g.name.toLowerCase().includes(l.toLowerCase())||g.muscles.primary.some(D=>D.toLowerCase().includes(l.toLowerCase()));return E&&w});return S.jsxs("div",{id:"exercise-library-view",className:"space-y-6",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-5 sm:p-6 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)]",children:[S.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-[#3a3a38] tracking-tight",children:"Biblioteca de Biomecânica 3D"}),S.jsx("p",{className:"text-xs sm:text-sm text-[#6d6d6b] mt-1",children:"Explore as animações 3D interativas, grupos musculares primários e instruções técnicas de calistenia."}),S.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row gap-3",children:[S.jsxs("div",{className:"relative flex-1",children:[S.jsx(sM,{className:"w-4 h-4 text-[#8fa38e] absolute left-3.5 top-1/2 -translate-y-1/2"}),S.jsx("input",{id:"input-search-exercises",type:"text",placeholder:"Buscar por exercício ou músculo (ex: peito, glúteo, abdômen)...",value:l,onChange:g=>c(g.target.value),className:"w-full pl-10 pr-4 py-2.5 bg-[#fbfaf7] border border-[#8fa38e]/20 rounded-xl text-xs text-[#4a4a48] focus:outline-none focus:ring-1 focus:ring-[#8fa38e]"})]}),S.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0",children:v.map(g=>S.jsx("button",{id:`btn-filter-category-${g}`,onClick:()=>s(g),className:`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${i===g?m?"bg-[#8fa38e] text-white border-[#8fa38e]":"bg-[#c89f83] text-white border-[#c89f83]":"bg-white text-[#6d6d6b] border-[#8fa38e]/20 hover:bg-[#fbfaf7]"}`,children:g},g))})]})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[S.jsx("div",{className:"lg:col-span-6 space-y-4",children:S.jsxs("div",{className:"sticky top-20 space-y-4",children:[S.jsx(ou,{exercise:f,gender:r}),S.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded ${m?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:f.category}),S.jsx("h3",{className:"text-base font-bold text-[#3a3a38] mt-1",children:f.name})]}),S.jsx("button",{id:"btn-open-full-modal-lib",onClick:()=>e(f),className:"px-3.5 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/20 hover:bg-[#eef3ed] text-[#4a4a48] text-xs font-bold transition-colors",children:"Ver Ficha Completa"})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-[#6d6d6b] mb-1.5",children:"Músculos Principais"}),S.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[f.muscles.primary.map((g,E)=>S.jsxs("span",{className:"text-xs px-2.5 py-1 rounded-md bg-[#eef3ed] text-[#5c725b] font-semibold border border-[#8fa38e]/30",children:["★ ",g]},E)),f.muscles.secondary.map((g,E)=>S.jsx("span",{className:"text-xs px-2.5 py-1 rounded-md bg-[#fbfaf7] text-[#6d6d6b] border border-[#8fa38e]/15",children:g},E))]})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-[#6d6d6b] mb-1.5",children:"Dica de Postura & Biomecânica"}),S.jsx("p",{className:"text-xs text-[#4a4a48] leading-relaxed bg-[#fbfaf7] p-3 rounded-xl border border-[#8fa38e]/15",children:f.keyCues[0]})]})]})]})}),S.jsx("div",{className:"lg:col-span-6 space-y-3",children:b.map(g=>{const E=f.id===g.id;return S.jsxs("div",{onClick:()=>p(g),className:`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${E?m?"bg-[#eef3ed]/60 border-[#8fa38e] shadow-xs ring-1 ring-[#8fa38e]/40":"bg-[#fdfaf4] border-[#c89f83] shadow-xs ring-1 ring-[#c89f83]/40":"bg-white border-[#8fa38e]/15 hover:border-[#8fa38e]/40 hover:bg-[#fbfaf7]"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${E?m?"bg-[#8fa38e] text-white shadow-2xs":"bg-[#c89f83] text-white shadow-2xs":"bg-[#fbfaf7] border border-[#8fa38e]/20 text-[#6d6d6b]"}`,children:"3D"}),S.jsxs("div",{children:[S.jsx("h4",{className:"font-bold text-xs sm:text-sm text-[#3a3a38]",children:g.name}),S.jsxs("p",{className:"text-[11px] text-[#6d6d6b] mt-0.5",children:[g.sets," séries • ",g.repsOrDuration]}),S.jsx("span",{className:"text-[10px] text-[#8a7362] block mt-1",children:g.muscles.primary.join(", ")})]})]}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{id:`btn-select-exercise-lib-${g.id}`,onClick:w=>{w.stopPropagation(),e(g)},className:"p-2 text-[#6d6d6b] hover:text-[#3a3a38] rounded-lg hover:bg-[#eef3ed] transition-colors",title:"Ver detalhes",children:S.jsx(d_,{className:"w-5 h-5"})})})]},g.id)})})]})]})},z3=({exercise:r,gender:e,onClose:i,onMarkComplete:s,isCompleted:l=!1})=>{const[c,f]=nt.useState(0),[p,m]=nt.useState(!1);if(nt.useEffect(()=>{r&&(f(r.restSeconds),m(!1))},[r]),nt.useEffect(()=>{let v=null;if(p&&c>0)v=setInterval(()=>{f(b=>b-1)},1e3);else if(c===0&&p){m(!1);try{const b=new(window.AudioContext||window.webkitAudioContext),g=b.createOscillator(),E=b.createGain();g.connect(E),E.connect(b.destination),g.frequency.setValueAtTime(587.33,b.currentTime),E.gain.setValueAtTime(.1,b.currentTime),g.start(),g.stop(b.currentTime+.3)}catch{}}return()=>clearInterval(v)},[p,c]),!r)return null;const h=e==="male";return S.jsx("div",{id:"exercise-detail-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2c332b]/50 backdrop-blur-xs animate-in fade-in duration-200",children:S.jsxs("div",{className:"bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#8fa38e]/25 flex flex-col overflow-hidden",children:[S.jsxs("div",{className:"px-6 py-4 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsx("span",{className:`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-1 ${h?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:r.category}),S.jsx("h2",{className:"text-lg font-bold text-[#3a3a38]",children:r.name})]}),S.jsx("button",{id:"btn-close-exercise-modal",onClick:i,className:"p-2 rounded-xl text-[#6d6d6b] hover:text-[#3a3a38] hover:bg-[#eef3ed] transition-colors",children:S.jsx(Kh,{className:"w-5 h-5"})})]}),S.jsxs("div",{className:"p-6 overflow-y-auto space-y-6",children:[S.jsx(ou,{exercise:r,gender:e}),S.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[S.jsxs("div",{className:"p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-center",children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Séries"}),S.jsxs("span",{className:"text-base font-bold text-[#4a4a48]",children:[r.sets," séries"]})]}),S.jsxs("div",{className:"p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-center",children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Repetições / Tempo"}),S.jsx("span",{className:"text-sm font-bold text-[#4a4a48]",children:r.repsOrDuration})]}),S.jsxs("div",{className:"p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-center",children:[S.jsx("span",{className:"text-[11px] text-[#999] font-medium block",children:"Descanso"}),S.jsxs("span",{className:"text-base font-bold text-[#4a4a48]",children:[r.restSeconds,"s"]})]})]}),S.jsxs("div",{className:"p-3.5 rounded-xl bg-[#fdfaf4] border border-[#d9bba4]/50 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx(hM,{className:"w-5 h-5 text-[#8a7362]"}),S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-semibold text-[#4a4a48] block",children:"Cronômetro de Descanso entre Séries"}),S.jsx("span",{className:"text-xs text-[#6d6d6b]",children:"Recupere o fôlego antes da próxima série"})]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("span",{className:"font-mono text-lg font-bold text-[#4a4a48] px-2.5 py-0.5 bg-white rounded-lg border border-[#d9bba4]/60 shadow-2xs",children:[Math.floor(c/60),":",String(c%60).padStart(2,"0")]}),S.jsx("button",{id:"btn-toggle-rest-timer",onClick:()=>m(!p),className:"p-2 rounded-lg bg-[#8fa38e] text-white hover:bg-[#7e937d] transition-colors shadow-2xs",title:p?"Pausar":"Iniciar descanso",children:p?S.jsx(tu,{className:"w-4 h-4"}):S.jsx(tl,{className:"w-4 h-4"})}),S.jsx("button",{id:"btn-reset-rest-timer",onClick:()=>{m(!1),f(r.restSeconds)},className:"p-2 rounded-lg bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors",title:"Reiniciar tempo",children:S.jsx(m_,{className:"w-4 h-4"})})]})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-[#6d6d6b] mb-2",children:"Instruções de Execução Perfeita"}),S.jsx("ol",{className:"space-y-2",children:r.instructions.map((v,b)=>S.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-[#4a4a48] leading-relaxed",children:[S.jsx("span",{className:"w-5 h-5 rounded-full bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30 font-bold flex items-center justify-center shrink-0 text-[11px]",children:b+1}),S.jsx("span",{children:v})]},b))})]}),S.jsxs("div",{className:"p-4 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 space-y-2",children:[S.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-[#6d6d6b]",children:"Grupos Musculares Ativados"}),S.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[r.muscles.primary.map((v,b)=>S.jsxs("span",{className:`px-2.5 py-1 rounded-md text-xs font-semibold ${h?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:["★ ",v," (Primário)"]},b)),r.muscles.secondary.map((v,b)=>S.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs bg-white text-[#6d6d6b] border border-[#8fa38e]/15",children:v},b))]})]}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[S.jsxs("div",{className:"p-3.5 rounded-xl bg-[#eef3ed]/50 border border-[#8fa38e]/30",children:[S.jsxs("h5",{className:"text-xs font-bold text-[#5c725b] mb-1 flex items-center gap-1",children:[S.jsx(Gr,{className:"w-3.5 h-3.5"})," Pontos-Chave da Postura"]}),S.jsx("ul",{className:"space-y-1 text-xs text-[#4a4a48]",children:r.keyCues.map((v,b)=>S.jsxs("li",{children:["• ",v]},b))})]}),S.jsxs("div",{className:"p-3.5 rounded-xl bg-[#fdfaf4] border border-[#d9bba4]/50",children:[S.jsxs("h5",{className:"text-xs font-bold text-[#8a7362] mb-1 flex items-center gap-1",children:[S.jsx(Iy,{className:"w-3.5 h-3.5 text-[#c89f83]"})," Erros Comuns a Evitar"]}),S.jsx("ul",{className:"space-y-1 text-xs text-[#4a4a48]",children:r.commonMistakes.map((v,b)=>S.jsxs("li",{children:["• ",v]},b))})]})]}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[S.jsxs("div",{className:"p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsxs("span",{className:"text-[11px] font-semibold text-[#8fa38e] flex items-center gap-1 mb-1",children:[S.jsx(Ey,{className:"w-3.5 h-3.5"})," Variação Mais Fácil (Regressão)"]}),S.jsx("p",{className:"text-xs text-[#4a4a48]",children:r.regression})]}),S.jsxs("div",{className:"p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsxs("span",{className:"text-[11px] font-semibold text-[#5c725b] flex items-center gap-1 mb-1",children:[S.jsx(Ay,{className:"w-3.5 h-3.5"})," Variação Mais Avançada (Progressão)"]}),S.jsx("p",{className:"text-xs text-[#4a4a48]",children:r.progression})]})]})]}),S.jsxs("div",{className:"px-6 py-4 bg-[#fbfaf7] border-t border-[#8fa38e]/15 flex items-center justify-between",children:[S.jsx("button",{id:"btn-close-modal-footer",onClick:i,className:"px-4 py-2 text-xs font-semibold text-[#6d6d6b] hover:text-[#3a3a38] hover:bg-[#eef3ed] rounded-xl transition-colors",children:"Fechar"}),s&&S.jsxs("button",{id:"btn-modal-mark-complete",onClick:()=>{s(r.id),i()},className:`px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${l?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/40":h?"bg-[#8fa38e] hover:bg-[#7e937d] text-white":"bg-[#c89f83] hover:bg-[#b88f73] text-white"}`,children:[S.jsx(Gr,{className:"w-4 h-4"}),l?"Exercício Concluído ✓":"Marcar como Feito"]})]})]})})},G3=({workout:r,gender:e,onClose:i,onCompleteWorkout:s})=>{const[l,c]=nt.useState(0),[f,p]=nt.useState(1),[m,h]=nt.useState("exercise"),[v,b]=nt.useState(45),[g,E]=nt.useState(!0),w=r.exercises[l],D=e==="male",y=(N=440)=>{try{const F=new(window.AudioContext||window.webkitAudioContext),U=F.createOscillator(),I=F.createGain();U.connect(I),I.connect(F.destination),U.frequency.setValueAtTime(N,F.currentTime),I.gain.setValueAtTime(.08,F.currentTime),U.start(),U.stop(F.currentTime+.25)}catch{}};nt.useEffect(()=>{let N=null;return g&&v>0?N=setInterval(()=>{b(F=>(F===4||F===3||F===2?y(440):F===1&&y(880),F-1))},1e3):v===0&&g&&x(),()=>clearInterval(N)},[g,v,m,f,l]);const x=()=>{m==="exercise"?(h("rest"),b(w.restSeconds||45)):f<w.sets?(p(N=>N+1),h("exercise"),b(45)):l<r.exercises.length-1?(c(N=>N+1),p(1),h("exercise"),b(45)):(E(!1),Xc({particleCount:100,spread:70,origin:{y:.6}}),s(),i())},H=()=>{x()},k=N=>{const F=Math.floor(N/60),U=N%60;return`${String(F).padStart(2,"0")}:${String(U).padStart(2,"0")}`};return S.jsx("div",{id:"workout-player-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2c332b]/50 backdrop-blur-xs animate-in fade-in duration-200",children:S.jsxs("div",{className:"bg-white w-full max-w-3xl max-h-[95vh] rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#8fa38e]/25 flex flex-col overflow-hidden",children:[S.jsxs("div",{className:"px-6 py-4 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-bold ${D?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:["Dia ",r.day," • Modo Treino Guiado"]}),S.jsxs("span",{className:"text-xs text-[#6d6d6b] font-medium hidden sm:inline",children:["Exercício ",l+1," de ",r.exercises.length]})]}),S.jsx("button",{id:"btn-close-player",onClick:i,className:"p-2 text-[#6d6d6b] hover:text-[#3a3a38] rounded-xl hover:bg-[#eef3ed] transition-colors",children:S.jsx(Kh,{className:"w-5 h-5"})})]}),S.jsxs("div",{className:"p-6 overflow-y-auto space-y-6",children:[S.jsxs("div",{className:`p-5 rounded-2xl border text-center transition-all ${m==="exercise"?D?"bg-[#eef3ed]/60 border-[#8fa38e]/40 text-[#3a3a38]":"bg-[#fdfaf4] border-[#d9bba4]/60 text-[#3a3a38]":"bg-[#eef3ed]/80 border-[#8fa38e] text-[#3a3a38]"}`,children:[S.jsx("span",{className:"text-xs font-bold uppercase tracking-wider block text-[#6d6d6b]",children:m==="exercise"?`EM EXECUÇÃO • SÉRIE ${f} DE ${w.sets}`:"DESCANSO ATIVO • RESPIRE"}),S.jsx("h2",{className:"text-xl sm:text-2xl font-bold mt-1 text-[#3a3a38]",children:m==="exercise"?w.name:"Recuperação Muscular"}),S.jsx("p",{className:"text-xs mt-0.5 text-[#6d6d6b]",children:m==="exercise"?`Meta: ${w.repsOrDuration}`:`Próximo: Série ${f<w.sets?f+1:1}`}),S.jsx("div",{className:"text-5xl sm:text-6xl font-mono font-extrabold my-4 tracking-tight text-[#4a4a48]",children:k(v)}),S.jsxs("div",{className:"flex items-center justify-center gap-3",children:[S.jsxs("button",{id:"btn-player-toggle",onClick:()=>E(!g),className:`px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-2xs transition-all flex items-center gap-1.5 ${g?"bg-[#c89f83] hover:bg-[#b88f73]":"bg-[#8fa38e] hover:bg-[#7e937d]"}`,children:[g?S.jsx(tu,{className:"w-4 h-4"}):S.jsx(tl,{className:"w-4 h-4"}),g?"Pausar":"Continuar"]}),S.jsxs("button",{id:"btn-player-skip",onClick:H,className:"px-4 py-2.5 rounded-xl font-semibold text-xs bg-white border border-[#8fa38e]/25 text-[#4a4a48] hover:bg-[#fbfaf7] transition-colors flex items-center gap-1 shadow-2xs",children:[S.jsx(cM,{className:"w-4 h-4"}),S.jsx("span",{children:"Pular Fase"})]})]})]}),S.jsxs("div",{className:"space-y-2",children:[S.jsx("h4",{className:"text-xs font-bold text-[#6d6d6b] uppercase tracking-wider",children:"Biomecânica 3D em Tempo Real"}),S.jsx(ou,{exercise:w,gender:e})]})]}),S.jsxs("div",{className:"px-6 py-4 bg-[#fbfaf7] border-t border-[#8fa38e]/15 flex items-center justify-between",children:[S.jsxs("div",{className:"text-xs text-[#6d6d6b]",children:["Foco: ",S.jsx("strong",{className:"text-[#4a4a48]",children:w.muscles.primary.join(", ")})]}),S.jsx("button",{id:"btn-finish-workout-early",onClick:()=>{s(),i()},className:"px-4 py-2 text-xs font-bold text-white bg-[#8fa38e] hover:bg-[#7e937d] rounded-xl transition-colors shadow-2xs",children:"Concluir Treino de Hoje ✓"})]})]})})},H3=({isOpen:r,onClose:e,profile:i,currentDay:s})=>{const l=i.gender==="male",c={id:"welcome",role:"assistant",content:l?`Olá, guerreiro! Sou seu **Mestre de Calistenia & Biomecânica**. Estou aqui para guiar seu desafio de 28 dias focado em **peitoral volumoso e abdômen definido** para sua estrutura (1,75m e 86kg).

Como posso te ajudar hoje no **Dia ${s}**? Posso ajustar exercícios se sentir dor, ensinar técnicas para proteger os punhos/ombros ou dar dicas de queima de gordura!`:`Olá! Sou seu **Mestre de Calistenia & Biomecânica**. Estou pronta para acompanhar sua evolução de 28 dias focada em **glúteos empinados, pernas firmes e cintura fina** para sua estrutura (1,53m e 62kg).

Como posso te ajudar hoje no **Dia ${s}**? Posso te ensinar a isolar mais o bumbum nos agachamentos, tirar dúvidas de execução ou ajustar sua rotina!`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},[f,p]=nt.useState([c]),[m,h]=nt.useState(""),[v,b]=nt.useState(!1),g=nt.useRef(null),E=l?["Como evitar dores nos ombros e punhos nas flexões?","Como isolar o peitoral superior na flexão declinada?","Técnica para não arquear a lombar no Hollow Body","Variação mais fácil para o treino de hoje","Melhor horário para a caminhada de 15 min?"]:["Como sentir mais o glúteo no agachamento búlgaro?","Como empinar o bumbum sem sobrecarregar os joelhos?","Dica para afinar a cintura com as pranchas","Variação mais fácil para o treino de hoje","O que comer após os 30 min de treino + caminhada?"],w=()=>{var y;(y=g.current)==null||y.scrollIntoView({behavior:"smooth"})};nt.useEffect(()=>{r&&w()},[f,r]);const D=async y=>{const x=(y||m).trim();if(!x||v)return;const H={id:Date.now().toString(),role:"user",content:x,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};p(k=>[...k,H]),y||h(""),b(!0);try{const N=await(await fetch("/api/coach/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:x,profile:i,day:s,history:f.map(U=>({role:U.role,content:U.content}))})})).json(),F={id:(Date.now()+1).toString(),role:"assistant",content:N.reply||"Continue firme no seu treino!",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};p(U=>[...U,F])}catch(k){console.error("Error fetching coach reply:",k);const N={id:(Date.now()+1).toString(),role:"assistant",content:"Lembre-se da regra de ouro da calistenia: controle a fase excêntrica (descida de 2 a 3 segundos) e aperte os músculos alvos no pico da contração!",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};p(F=>[...F,N])}finally{b(!1)}};return r?S.jsx("div",{id:"ai-coach-drawer-overlay",className:"fixed inset-0 z-50 flex justify-end bg-[#2c332b]/40 backdrop-blur-xs animate-in fade-in duration-200",children:S.jsxs("div",{className:"bg-white w-full max-w-md h-full shadow-2xl border-l border-[#8fa38e]/20 flex flex-col animate-in slide-in-from-right duration-300",children:[S.jsxs("div",{className:"px-5 py-4 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-2xs ${l?"bg-[#8fa38e]":"bg-[#c89f83]"}`,children:S.jsx(jc,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx("h3",{className:"font-bold text-sm text-[#3a3a38]",children:"Mestre Calistenia AI"}),S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#8fa38e] animate-pulse"})]}),S.jsxs("p",{className:"text-[11px] text-[#6d6d6b]",children:["Consultor Especialista • Dia ",s," de 28"]})]})]}),S.jsx("button",{id:"btn-close-coach-drawer",onClick:e,className:"p-1.5 rounded-lg text-[#6d6d6b] hover:text-[#3a3a38] hover:bg-[#eef3ed] transition-colors",children:S.jsx(Kh,{className:"w-5 h-5"})})]}),S.jsx("div",{className:"px-4 py-2 bg-[#fbfaf7]/60 border-b border-[#8fa38e]/10 overflow-x-auto flex gap-1.5 no-scrollbar",children:E.map((y,x)=>S.jsxs("button",{id:`btn-suggestion-chip-${x}`,onClick:()=>D(y),disabled:v,className:"text-[11px] px-2.5 py-1 rounded-full bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:border-[#8fa38e]/50 hover:bg-[#eef3ed]/50 whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 shadow-2xs",children:[S.jsx(Zh,{className:"w-3 h-3 text-[#c89f83]"}),S.jsx("span",{children:y})]},x))}),S.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-4",children:[f.map(y=>{const x=y.role==="user";return S.jsxs("div",{className:`flex gap-2.5 ${x?"justify-end":"justify-start"}`,children:[!x&&S.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-bold ${l?"bg-[#8fa38e]":"bg-[#c89f83]"}`,children:S.jsx(jc,{className:"w-4 h-4"})}),S.jsxs("div",{className:`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${x?l?"bg-[#8fa38e] text-white rounded-br-xs":"bg-[#c89f83] text-white rounded-br-xs":"bg-[#fbfaf7] text-[#4a4a48] rounded-bl-xs border border-[#8fa38e]/20"}`,children:[S.jsx("div",{className:"whitespace-pre-wrap",children:y.content}),S.jsx("div",{className:`text-[9px] mt-1 text-right ${x?"text-white/75":"text-[#999]"}`,children:y.timestamp})]}),x&&S.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#555] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs",children:S.jsx(gM,{className:"w-4 h-4"})})]},y.id)}),v&&S.jsxs("div",{className:"flex items-center gap-2 text-[#6d6d6b] text-xs pl-9",children:[S.jsx(tM,{className:"w-3.5 h-3.5 animate-spin text-[#8fa38e]"}),S.jsx("span",{children:"Mestre de Calistenia pensando..."})]}),S.jsx("div",{ref:g})]}),S.jsx("div",{className:"p-3.5 bg-[#fbfaf7] border-t border-[#8fa38e]/15",children:S.jsxs("form",{onSubmit:y=>{y.preventDefault(),D()},className:"flex items-center gap-2",children:[S.jsx("input",{id:"input-coach-chat",type:"text",placeholder:"Pergunte sobre postura, regressões ou dieta...",value:m,onChange:y=>h(y.target.value),disabled:v,className:"flex-1 text-xs px-3.5 py-2.5 bg-white rounded-xl border border-[#8fa38e]/20 focus:outline-none focus:ring-1 focus:ring-[#8fa38e] text-[#4a4a48]"}),S.jsx("button",{id:"btn-send-coach-msg",type:"submit",disabled:!m.trim()||v,className:`p-2.5 rounded-xl text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs ${l?"bg-[#8fa38e] hover:bg-[#7e937d]":"bg-[#c89f83] hover:bg-[#b88f73]"}`,children:S.jsx(oM,{className:"w-4 h-4"})})]})})]})}):null};function k3(){var O;const[r,e]=nt.useState("male"),[i,s]=nt.useState(1),[l,c]=nt.useState("checklist"),[f,p]=nt.useState(null),[m,h]=nt.useState(!1),[v,b]=nt.useState(!1),g="calisthenics_28_male_progress_v2",E="calisthenics_28_female_progress_v2",[w,D]=nt.useState(()=>{try{const q=localStorage.getItem(g);return q?JSON.parse(q):{}}catch{return{}}}),[y,x]=nt.useState(()=>{try{const q=localStorage.getItem(E);return q?JSON.parse(q):{}}catch{return{}}});nt.useEffect(()=>{try{localStorage.setItem(g,JSON.stringify(w))}catch(q){console.error(q)}},[w]),nt.useEffect(()=>{try{localStorage.setItem(E,JSON.stringify(y))}catch(q){console.error(q)}},[y]);const H=_f[r],k=r==="male"?py:my,N=k.find(q=>q.day===i)||k[0],F=r==="male"?w:y,U=F[i]||{day:i,completed:!1,exercisesCompleted:[],walkCompleted:!1,waterGlasses:0},I=q=>{r==="male"?D(L=>({...L,[i]:q})):x(L=>({...L,[i]:q}))},A=Object.values(F).filter(q=>q.completed).length;return S.jsxs("div",{className:"min-h-screen bg-[#f9f7f2] text-[#4a4a48] flex flex-col font-sans selection:bg-[#8fa38e]/30 selection:text-[#3a3a38]",children:[S.jsx(_M,{currentGender:r,onGenderChange:q=>{e(q),s(1)},maleProfile:_f.male,femaleProfile:_f.female,activeTab:l,onTabChange:c,onOpenCoach:()=>b(!0),onStartGuidedWorkout:()=>h(!0),completedDaysCount:A}),S.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-4 sm:p-5 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] flex flex-col md:flex-row md:items-center justify-between gap-4",children:[S.jsxs("div",{className:"flex items-center gap-3.5",children:[S.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-xs ${r==="male"?"bg-[#8fa38e]":"bg-[#c89f83]"}`,children:S.jsx(h_,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("h2",{className:"font-bold text-base sm:text-lg text-[#3a3a38]",children:H.name}),S.jsx("span",{className:`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${r==="male"?"bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30":"bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50"}`,children:r==="male"?"Foco: Peito & Barriga":"Foco: Bumbum & Cintura"})]}),S.jsx("p",{className:"text-xs text-[#6d6d6b] mt-0.5",children:H.focusSubtext})]})]}),S.jsxs("div",{className:"flex items-center gap-3 self-start md:self-center text-xs",children:[S.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx("span",{className:"text-[#999] block text-[10px] uppercase font-semibold",children:"Treino Diário"}),S.jsx("strong",{className:"text-[#4a4a48] font-bold",children:"30 min"})]}),S.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx("span",{className:"text-[#999] block text-[10px] uppercase font-semibold",children:"Caminhada"}),S.jsx("strong",{className:"text-[#4a4a48] font-bold",children:"15 min"})]}),S.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15",children:[S.jsx("span",{className:"text-[#999] block text-[10px] uppercase font-semibold",children:"Hidratação"}),S.jsxs("strong",{className:"text-[#4a4a48] font-bold",children:[H.waterTargetLiters,"L"]})]})]})]}),l==="checklist"&&S.jsx(I3,{workout:N,profile:H,progress:U,onUpdateProgress:I,onOpenExerciseDetail:q=>p(q),onNextDay:()=>s(q=>Math.min(28,q+1)),onPrevDay:()=>s(q=>Math.max(1,q-1)),isLastDay:i===28,isFirstDay:i===1}),l==="calendar"&&S.jsx(F3,{days:k,progressMap:F,selectedDay:i,onSelectDay:q=>{s(q),c("checklist")},profile:H}),l==="exercises"&&S.jsx(B3,{gender:r,onSelectExerciseDetail:q=>p(q)})]}),S.jsxs("button",{id:"btn-floating-ai-coach",onClick:()=>b(!0),className:"fixed bottom-5 right-5 z-40 px-4 py-3 bg-[#4a4a48] hover:bg-[#3a3a38] text-white rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 border border-[#8fa38e]/30",children:[S.jsx(jc,{className:"w-5 h-5 text-[#8fa38e] animate-bounce"}),S.jsx("span",{children:"Tirar Dúvida com Mestre AI"})]}),f&&S.jsx(z3,{exercise:f,gender:r,onClose:()=>p(null),isCompleted:(O=U.exercisesCompleted)==null?void 0:O.includes(f.id),onMarkComplete:q=>{const L=U.exercisesCompleted||[];L.includes(q)||I({...U,exercisesCompleted:[...L,q]})}}),m&&S.jsx(G3,{workout:N,gender:r,onClose:()=>h(!1),onCompleteWorkout:()=>{const q=N.exercises.map(L=>L.id);I({...U,exercisesCompleted:q})}}),S.jsx(H3,{isOpen:v,onClose:()=>b(!1),profile:H,currentDay:i}),S.jsx("footer",{className:"bg-white border-t border-[#8fa38e]/15 mt-12 py-6 text-center text-xs text-[#6d6d6b]",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2",children:[S.jsx("p",{children:"© 2026 Desafio 28 Dias de Calistenia • 30 min de Treino + 15 min de Caminhada Diária"}),S.jsx("div",{className:"flex items-center gap-3",children:S.jsx("span",{className:"text-[#8fa38e] font-medium",children:"Desenvolvido com foco em biomecânica e saúde postural"})})]})})]})}hy.createRoot(document.getElementById("root")).render(S.jsx(nt.StrictMode,{children:S.jsx(k3,{})}));
