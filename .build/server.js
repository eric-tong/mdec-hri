!function(e){function n(e){var n=require("./"+e+"."+o+".hot-update.js");!function(e,n){if(!w[e]||!m[e])return;for(var r in m[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--y&&0===g&&x()}(n.id,n.modules)}var r,t=!0,o="3492bbf0bf4940886253",i={},c=[],d=[];function a(e){var n=D[e];if(!n)return E;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(c=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),c=[]),E(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return E[e]},set:function(n){E[e]=n}}};for(var i in E)Object.prototype.hasOwnProperty.call(E,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===l&&f("prepare"),g++,E.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===l&&(b[e]||O(e),0===g&&0===y&&x())}},t.t=function(e,n){return 1&n&&(e=t(e)),E.t(e,-2&n)},t}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:H,status:function(e){if(!e)return l;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:i[e]};return r=void 0,n}var u=[],l="idle";function f(e){l=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var p,h,v,y=0,g=0,b={},m={},w={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return t=e,f("check"),function(){try{var e=require("./"+o+".hot-update.json")}catch(e){return Promise.resolve()}return Promise.resolve(e)}().then(function(e){if(!e)return f("idle"),null;m={},b={},w=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){p={resolve:e,reject:n}});h={};return O(0),"prepare"===l&&0===g&&0===y&&x(),n})}function O(e){w[e]?(m[e]=!0,y++,n(e)):b[e]=!0}function x(){f("ready");var e=p;if(p=null,e)if(t)Promise.resolve().then(function(){return H(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(j(r));e.resolve(n)}}function H(n){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var r,t,d,a,s;function u(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],u=D[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),p(r[s],[i])):(delete r[s],n.push(s),t.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var y={},g=[],b={},m=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var O;s=j(_);var x=!1,H=!1,M=!1,P="";switch((O=h[_]?u(s):{type:"disposed",moduleId:_}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(x=new Error("Aborted because "+s+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),H=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),M=!0;break;default:throw new Error("Unexception type "+O.type)}if(x)return f("abort"),Promise.reject(x);if(H)for(s in b[s]=h[s],p(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(y[s]||(y[s]=[]),p(y[s],O.outdatedDependencies[s]));M&&(p(g,[O.moduleId]),b[s]=m)}var k,R=[];for(t=0;t<g.length;t++)s=g[t],D[s]&&D[s].hot._selfAccepted&&R.push({module:s,errorHandler:D[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var I,q,S=g.slice();S.length>0;)if(s=S.pop(),a=D[s]){var A={},C=a.hot._disposeHandlers;for(d=0;d<C.length;d++)(r=C[d])(A);for(i[s]=A,a.hot.active=!1,delete D[s],delete y[s],d=0;d<a.children.length;d++){var U=D[a.children[d]];U&&((k=U.parents.indexOf(s))>=0&&U.parents.splice(k,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=D[s]))for(q=y[s],d=0;d<q.length;d++)I=q[d],(k=a.children.indexOf(I))>=0&&a.children.splice(k,1);for(s in f("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var T=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=D[s])){q=y[s];var L=[];for(t=0;t<q.length;t++)if(I=q[t],r=a.hot._acceptedDependencies[I]){if(-1!==L.indexOf(r))continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:q[t],error:e}),n.ignoreErrored||T||(T=e)}}}for(t=0;t<R.length;t++){var N=R[t];s=N.module,c=[s];try{E(s)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),n.ignoreErrored||T||(T=r),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(g)}))}var D={};function E(n){if(D[n])return D[n].exports;var r=D[n]={i:n,l:!1,exports:{},hot:s(n),parents:(d=c,c=[],d),children:[]};return e[n].call(r.exports,r,r.exports,a(n)),r.l=!0,r.exports}E.m=e,E.c=D,E.d=function(e,n,r){E.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,n){if(1&n&&(e=E(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(E.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)E.d(r,t,function(n){return e[n]}.bind(null,t));return r},E.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(n,"a",n),n},E.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},E.p="",E.h=function(){return o},a(0)(E.s=0)}({"./node_modules/webpack/hot/log-apply-result.js":function(e,n,r){e.exports=function(e,n){var t=e.filter(function(e){return n&&n.indexOf(e)<0}),o=r("./node_modules/webpack/hot/log.js");(t.length>0&&(o("warning","[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),t.forEach(function(e){o("warning","[HMR]  - "+e)})),n&&0!==n.length)?(o("info","[HMR] Updated modules:"),n.forEach(function(e){if("string"==typeof e&&-1!==e.indexOf("!")){var n=e.split("!");o.groupCollapsed("info","[HMR]  - "+n.pop()),o("info","[HMR]  - "+e),o.groupEnd("info")}else o("info","[HMR]  - "+e)}),n.every(function(e){return"number"==typeof e})&&o("info","[HMR] Consider using the NamedModulesPlugin for module names.")):o("info","[HMR] Nothing hot updated.")}},"./node_modules/webpack/hot/log.js":function(e,n){var r="info";function t(){}function o(e){return"info"===r&&"info"===e||["info","warning"].indexOf(r)>=0&&"warning"===e||["info","warning","error"].indexOf(r)>=0&&"error"===e}function i(e){return function(n,r){o(n)&&e(r)}}e.exports=function(e,n){o(e)&&("info"===e?console.log(n):"warning"===e?console.warn(n):"error"===e&&console.error(n))};var c=console.group||t,d=console.groupCollapsed||t,a=console.groupEnd||t;e.exports.group=i(c),e.exports.groupCollapsed=i(d),e.exports.groupEnd=i(a),e.exports.setLogLevel=function(e){r=e}},"./node_modules/webpack/hot/poll.js?1000":function(e,n,r){(function(n){var t=+n.substr(1)||6e5,o=r("./node_modules/webpack/hot/log.js");setInterval(function n(t){"idle"===e.hot.status()&&e.hot.check(!0).then(function(e){e?(r("./node_modules/webpack/hot/log-apply-result.js")(e,e),n(!0)):t&&o("info","[HMR] Update applied.")}).catch(function(n){var r=e.hot.status();["abort","fail"].indexOf(r)>=0?(o("warning","[HMR] Cannot apply update."),o("warning","[HMR] "+(n.stack||n.message)),o("warning","[HMR] You need to restart the application!")):o("warning","[HMR] Update failed: "+(n.stack||n.message))})},t)}).call(this,"?1000")},"./server/index.js":function(e,n,r){"use strict";r.r(n);var t=r("http"),o=r.n(t),i=r("./server/server.js"),c=o.a.createServer(i.default),d=i.default;c.listen(3e3),e.hot.accept("./server/server.js",function(e){i=r("./server/server.js"),c.removeListener("request",d),c.on("request",i.default),d=i.default})},"./server/server.js":function(e,n,r){"use strict";r.r(n);var t=r("express"),o=r.n(t)()();o.get("/api",function(e,n){n.send({message:"Hot reload!"})}),n.default=o},0:function(e,n,r){r("./node_modules/webpack/hot/poll.js?1000"),e.exports=r("./server/index.js")},express:function(e,n){e.exports=require("express")},http:function(e,n){e.exports=require("http")}});