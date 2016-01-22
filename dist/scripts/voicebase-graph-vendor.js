/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function a(n){return n.length}function o(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function s(n){return(n+="")===xa||n[0]===ba?ba+n:n}function f(n){return(n+="")[0]===ba?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=_a.length;r>e;++e){var u=_a[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,u){var i,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,i=e.indexOf(a)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){oa.event.preventDefault()}function k(){for(var n,t=oa.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=oa.event;u.target=n,oa.event=u,t[u.type].apply(e,r)}finally{oa.event=i}}},t}function E(n){return Sa(n,Aa),n}function A(n){return"function"==typeof n?n:function(){return ka(n,this)}}function C(n){return"function"==typeof n?n:function(){return Na(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=oa.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?i:u}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+oa.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",L(u+" "+n))):e.setAttribute("class",L(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function j(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function U(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=oa.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ea(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],a=0,o=i.length;o>a;a++)(u=i[a])&&t(u,a,e);return n}function Z(n){return Sa(n,za),n}function V(n){var t,e;return function(r,u,i){var a,o=n[i].update,l=o.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(a=o[t])&&++t<l;);return a}}function X(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function u(){var u=l(t,ca(arguments));r.call(this),this.addEventListener(n,this[a]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+oa.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),l=$;o>0&&(n=n.slice(0,o));var c=La.get(n);return c&&(n=c,l=B),o?t?u:r:t?b:i}function $(n,t){return function(e){var r=oa.event;oa.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{oa.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Ta,u="click"+r,i=oa.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==qa&&(qa="onselectstart"in e?!1:x(e.style,"userSelect")),qa){var a=n(e).style,o=a[qa];a[qa]="none"}return function(n){if(i.on(r,null),qa&&(a[qa]=o),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Ra){var i=t(n);if(i.scrollX||i.scrollY){r=oa.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=r[0][0].getScreenCTM();Ra=!(a.f||a.e),r.remove()}}return Ra?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}function G(){return oa.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?ja:Math.acos(n)}function tn(n){return n>1?Ha:-1>n?-Ha:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function an(n){return(n=Math.sin(n/2))*n}function on(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(a-i)*n/60:180>n?a:240>n?i+(a-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,i=2*e-a,new yn(u(n+120),u(n),u(n-120))}function sn(n,t,e){return this instanceof sn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof sn?new sn(n.h,n.c,n.l):n instanceof hn?pn(n.l,n.a,n.b):pn((n=Sn((n=oa.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new sn(n,t,e)}function fn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Oa)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof sn?fn(n.h,n.c,n.l):Sn((n=yn(n)).r,n.g,n.b):new hn(n,t,e)}function gn(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=vn(u)*Ka,r=vn(r)*Qa,i=vn(i)*no,new yn(mn(3.2404542*u-1.5371385*r-.4985314*i),mn(-.969266*u+1.8760108*r+.041556*i),mn(.0556434*u-.2040259*r+1.0572252*i))}function pn(n,t,e){return n>0?new sn(Math.atan2(e,t)*Ia,Math.sqrt(t*t+e*e),n):new sn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function mn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function yn(n,t,e){return this instanceof yn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof yn?new yn(n.r,n.g,n.b):_n(""+n,yn,cn):new yn(n,t,e)}function Mn(n){return new yn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,u,i,a=0,o=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Nn(u[0]),Nn(u[1]),Nn(u[2]))}return(i=ro.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(a=(3840&i)>>4,a=a>>4|a,o=240&i,o=o>>4|o,l=15&i,l=l<<4|l):7===n.length&&(a=(16711680&i)>>16,o=(65280&i)>>8,l=255&i)),t(a,o,l))}function wn(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-i,l=(a+i)/2;return o?(u=.5>l?o/(a+i):o/(2-a-i),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=NaN,u=l>0&&1>l?0:r),new ln(r,u,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/Ka),u=dn((.2126729*n+.7151522*t+.072175*e)/Qa),i=dn((.0193339*n+.119192*t+.9503041*e)/no);return hn(116*u-16,500*(r-u),200*(u-i))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function u(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(i,l)}catch(r){return void a.error.call(i,r)}a.load.call(i,n)}else a.error.call(i,l)}var i={},a=oa.dispatch("beforesend","progress","load","error"),o={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=u:l.onreadystatechange=function(){l.readyState>3&&u()},l.onprogress=function(n){var t=oa.event;oa.event=n;try{a.progress.call(i,l)}finally{oa.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(c=n,i):c},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ca(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),l.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),l.setRequestHeader)for(var s in o)l.setRequestHeader(s,o[s]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),a.beforesend.call(i,l),l.send(null==r?null:r),i},i.abort=function(){return l.abort(),i},oa.rebind(i,a,"on"),null==r?i:i.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,n:null};return io?io.n=i:uo=i,io=i,ao||(oo=clearTimeout(oo),ao=1,lo(Tn)),i}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(oo),oo=setTimeout(Tn,t)),ao=0):(ao=1,lo(Tn))}function Rn(){for(var n=Date.now(),t=uo;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=uo,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:uo=t.n;return io=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function jn(n,t){var e=Math.pow(10,3*Ma(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Un(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],a=0,o=r[0],l=0;u>0&&o>0&&(l+o+1>t&&(o=Math.max(1,t-l)),i.push(n.substring(u-=o,u+o)),!((l+=o+1)>t));)o=r[a=(a+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=so.exec(n),r=e[1]||" ",a=e[2]||">",o=e[3]||"-",l=e[4]||"",c=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===a)&&(c=r="0",a="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===l&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=fo.get(g)||Fn;var M=c&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===o?"":o;if(0>p){var l=oa.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===a?u+n+k:">"===a?k+u+n:"^"===a?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new go(e-1)),1),e}function i(n,e){return t(n=new go(+n),e),n}function a(n,r,i){var a=u(n),o=[];if(i>1)for(;r>a;)e(a)%i||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{go=Hn;var r=new Hn;return r._=n,a(r,t,e)}finally{go=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=a;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(u),l.offset=In(i),l.range=o,n}function In(n){return function(t,e){try{go=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{go=Date}}}function Yn(n){function t(n){function t(t){for(var e,u,i,a=[],o=-1,l=0;++o<r;)37===n.charCodeAt(o)&&(a.push(n.slice(l,o)),null!=(u=vo[e=n.charAt(++o)])&&(e=n.charAt(++o)),(i=A[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),a.push(e),l=o+1);return a.push(n.slice(l,o)),a.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&go!==Hn,a=new(i?Hn:go);return"j"in r?a.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),a.setFullYear(r.y,0,1),a.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(a.getDay()+5)%7:r.w+7*r.U-(a.getDay()+6)%7)):a.setFullYear(r.y,r.m,r.d),a.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?a._:a},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,a,o=0,l=t.length,c=e.length;l>o;){if(r>=c)return-1;if(u=t.charCodeAt(o++),37===u){if(a=t.charAt(o++),i=C[a in vo?t.charAt(o++):a],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{go=Hn;var t=new go;return t._=n,r(t)}finally{go=Date}}var r=t(n);return e.parse=function(n){try{go=Hn;var t=r.parse(n);return t&&t._}finally{go=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=oa.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(m),k=Xn(m),N=Vn(y),E=Xn(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ho.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ho.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ho.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:ot,"%":function(){return"%"}},C={a:r,A:u,b:i,B:a,c:o,d:tt,e:tt,H:rt,I:rt,j:et,L:at,m:nt,M:ut,p:s,S:it,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Vn(n){return new RegExp("^(?:"+n.map(oa.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ut(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function it(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function at(n,t,e){mo.lastIndex=0;var r=mo.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ot(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=Ma(t)/60|0,u=Ma(t)%60;return e+Zn(r,"0",2)+Zn(u,"0",2)}function lt(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function st(){}function ft(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ht(n,t){n&&_o.hasOwnProperty(n.type)&&_o[n.type](n,t)}function gt(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function pt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)gt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Oa,t=t*Oa/2+ja/4;var e=n-r,a=e>=0?1:-1,o=a*e,l=Math.cos(t),c=Math.sin(t),s=i*c,f=u*l+s*Math.cos(o),h=s*a*Math.sin(o);So.add(Math.atan2(h,f)),r=n,u=l,i=c}var t,e,r,u,i;ko.point=function(a,o){ko.point=n,r=(t=a)*Oa,u=Math.cos(o=(e=o)*Oa/2+ja/4),i=Math.sin(o)},ko.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function mt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function yt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return Ma(n[0]-t[0])<Da&&Ma(n[1]-t[1])<Da}function St(n,t){n*=Oa;var e=Math.cos(t*=Oa);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++No,Ao+=(n-Ao)/No,Co+=(t-Co)/No,zo+=(e-zo)/No}function Nt(){function n(n,u){n*=Oa;var i=Math.cos(u*=Oa),a=i*Math.cos(n),o=i*Math.sin(n),l=Math.sin(u),c=Math.atan2(Math.sqrt((c=e*l-r*o)*c+(c=r*a-t*l)*c+(c=t*o-e*a)*c),t*a+e*o+r*l);Eo+=c,Lo+=c*(t+(t=a)),qo+=c*(e+(e=o)),To+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;jo.point=function(u,i){u*=Oa;var a=Math.cos(i*=Oa);t=a*Math.cos(u),e=a*Math.sin(u),r=Math.sin(i),jo.point=n,kt(t,e,r)}}function Et(){jo.point=St}function At(){function n(n,t){n*=Oa;var e=Math.cos(t*=Oa),a=e*Math.cos(n),o=e*Math.sin(n),l=Math.sin(t),c=u*l-i*o,s=i*a-r*l,f=r*o-u*a,h=Math.sqrt(c*c+s*s+f*f),g=r*a+u*o+i*l,p=h&&-nn(g)/h,v=Math.atan2(h,g);Ro+=p*c,Do+=p*s,Po+=p*f,Eo+=v,Lo+=v*(r+(r=a)),qo+=v*(u+(u=o)),To+=v*(i+(i=l)),kt(r,u,i)}var t,e,r,u,i;jo.point=function(a,o){t=a,e=o,jo.point=n,a*=Oa;var l=Math.cos(o*=Oa);r=l*Math.cos(a),u=l*Math.sin(a),i=Math.sin(o),kt(r,u,i)},jo.lineEnd=function(){n(t,e),jo.lineEnd=Et,jo.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,u){var i=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){u.lineStart();for(var o=0;t>o;++o)u.point((e=n[o])[0],e[1]);return void u.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,i.push(l),a.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,i.push(l),a.push(c)}}),a.sort(t),qt(i),qt(a),i.length){for(var o=0,l=e,c=a.length;c>o;++o)a[o].e=l=!l;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var o=0,c=s.length;c>o;++o)u.point((f=s[o])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var o=s.length-1;o>=0;--o)u.point((f=s[o])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(u,i){function a(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function o(n,t){var e=u(n,t);d.point(e[0],e[1])}function l(){y.point=o,d.lineStart()}function c(){y.point=a,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,a=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Dt))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:a,lineStart:l,lineEnd:c,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=a,y.lineStart=l,y.lineEnd=c,g=oa.merge(g);var n=Ot(m,p);g.length?(b||(i.polygonStart(),b=!0),Lt(g,jt,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Pt(),x=t(M),b=!1;return y}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function jt(n,t){return((n=n.x)[0]<0?n[1]-Ha-Da:Ha-n[1])-((t=t.x)[0]<0?t[1]-Ha-Da:Ha-t[1])}function Ut(n){var t,e=NaN,r=NaN,u=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(i,a){var o=i>0?ja:-ja,l=Ma(i-e);Ma(l-ja)<Da?(n.point(e,r=(r+a)/2>0?Ha:-Ha),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(i,r),t=0):u!==o&&l>=ja&&(Ma(e-u)<Da&&(e-=u*Da),Ma(i-o)<Da&&(i-=o*Da),r=Ft(e,r,i,a),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=i,r=a),u=o},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var u,i,a=Math.sin(n-e);return Ma(a)>Da?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*a)):(t+r)/2}function Ht(n,t,e,r){var u;if(null==n)u=e*Ha,r.point(-ja,u),r.point(0,u),r.point(ja,u),r.point(ja,0),r.point(ja,-u),r.point(0,-u),r.point(-ja,-u),r.point(-ja,0),r.point(-ja,u);else if(Ma(n[0]-t[0])>Da){var i=n[0]<t[0]?ja:-ja;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,a=0;So.reset();for(var o=0,l=t.length;l>o;++o){var c=t[o],s=c.length;if(s)for(var f=c[0],h=f[0],g=f[1]/2+ja/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=c[d];var m=n[0],y=n[1]/2+ja/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>ja,k=p*M;if(So.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Ua:b,S^h>=e^m>=e){var N=yt(dt(f),dt(n));bt(N);var E=yt(u,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(a+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Da>i||Da>i&&0>So)^1&a}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,l,c,s;return{lineStart:function(){c=l=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=a?v?0:u(f,h):v?u(f+(0>f?ja:-ja),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(g=r(e,p),(wt(e,g)||wt(p,g))&&(p[0]+=Da,p[1]+=Da,v=t(p[0],p[1]))),v!==l)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^v){var m;d&i||!(m=r(p,e,!0))||(s=0,a?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&wt(e,p)||n.point(p[0],p[1]),e=p,l=v,i=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return s|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),u=dt(t),a=[1,0,0],o=yt(r,u),l=mt(o,o),c=o[0],s=l-c*c;if(!s)return!e&&n;var f=i*l/s,h=-i*c/s,g=yt(a,o),p=xt(a,f),v=xt(o,h);Mt(p,v);var d=g,m=mt(p,d),y=mt(d,d),M=m*m-y*(mt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-m-x)/y);if(Mt(b,p),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=Ma(E-ja)<Da,C=A||Da>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(Ma(b[0]-w)<Da?k:N):k<=b[1]&&b[1]<=N:E>ja^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-m+x)/y);return Mt(z,p),[b,_t(z)]}}}function u(t,e){var r=a?n:ja-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),a=i>0,o=Ma(i)>Da,l=ve(n,6*Oa);return Rt(t,e,l,a?[0,-n]:[-ja,n-ja])}function Yt(n,t,e,r){return function(u){var i,a=u.a,o=u.b,l=a.x,c=a.y,s=o.x,f=o.y,h=0,g=1,p=s-l,v=f-c;if(i=n-l,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-l,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-c,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-c,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:l+h*p,y:c+h*v}),1>g&&(u.b={x:l+g*p,y:c+g*v}),u}}}}}}function Zt(n,t,e,r){function u(r,u){return Ma(r[0]-n)<Da?u>0?0:3:Ma(r[0]-e)<Da?u>0?2:1:Ma(r[1]-t)<Da?u>0?1:0:u>0?3:2}function i(n,t){return a(n.x,t.x)}function a(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(o){function l(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,a=1,o=d[u],l=o.length,c=o[0];l>a;++a)i=o[a],c[1]<=r?i[1]>r&&Q(c,i,n)>0&&++t:i[1]<=r&&Q(c,i,n)<0&&--t,c=i;return 0!==t}function c(i,o,l,c){var s=0,f=0;if(null==i||(s=u(i,l))!==(f=u(o,l))||a(i,o)<0^l>0){do c.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+l+4)%4)!==f)}else c.point(o[0],o[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&o.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=NaN}function g(){v&&(p(y,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=f,w&&o.lineEnd()}function p(n,t){n=Math.max(-Fo,Math.min(Fo,n)),t=Math.max(-Fo,Math.min(Fo,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(o.lineStart(),o.point(n,t));else if(e&&w)o.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(o.lineStart(),o.point(r.a.x,r.a.y)),o.point(r.b.x,r.b.y),e||o.lineEnd(),k=!1):e&&(o.lineStart(),o.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,N=o,E=Pt(),A=Yt(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){o=E,v=[],d=[],k=!0},polygonEnd:function(){o=N,v=oa.merge(v);var t=l([n,r]),e=k&&t,u=v.length;(e||u)&&(o.polygonStart(),e&&(o.lineStart(),c(null,null,1,o),o.lineEnd()),u&&Lt(v,i,t,c,o),o.polygonEnd()),v=d=m=null}};return C}}function Vt(n){var t=0,e=ja/3,r=oe(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ja/180,e=n[1]*ja/180):[t/ja*180,e/ja*180]},u}function Xt(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),a-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),a=Math.sqrt(i)/u;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/u,tn((i-(n*n+e*e)*u*u)/(2*u))]},e}function $t(){function n(n,t){Oo+=u*n-r*t,r=n,u=t}var t,e,r,u;Xo.point=function(i,a){Xo.point=n,t=r=i,e=u=a},Xo.lineEnd=function(){n(t,e)}}function Bt(n,t){Io>n&&(Io=n),n>Zo&&(Zo=n),Yo>t&&(Yo=t),t>Vo&&(Vo=t)}function Wt(){function n(n,t){a.push("M",n,",",t,i)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function u(){a.push("Z")}var i=Jt(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return i=Jt(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ao+=n,Co+=t,++zo}function Kt(){function n(n,r){var u=n-t,i=r-e,a=Math.sqrt(u*u+i*i);Lo+=a*(t+n)/2,qo+=a*(e+r)/2,To+=a,Gt(t=n,e=r)}var t,e;Bo.point=function(r,u){Bo.point=n,Gt(t=r,e=u)}}function Qt(){Bo.point=Gt}function ne(){function n(n,t){var e=n-r,i=t-u,a=Math.sqrt(e*e+i*i);Lo+=a*(r+n)/2,qo+=a*(u+t)/2,To+=a,a=u*n-r*t,Ro+=a*(r+n),Do+=a*(u+t),Po+=3*a,Gt(r=n,u=t)}var t,e,r,u;Bo.point=function(i,a){Bo.point=n,Gt(t=r=i,e=u=a)},Bo.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+a,e),n.arc(t,e,a,0,Ua)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function u(){o.point=t}function i(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:u,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=u,o.point=t},pointRadius:function(n){return a=n,o},result:b};return o}function ee(n){function t(n){return(o?r:e)(n)}function e(t){return ie(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=i,t.lineStart()}function i(e,r){var i=dt([e,r]),a=n(e,r);u(M,x,y,b,_,w,M=a[0],x=a[1],y=e,b=i[0],_=i[1],w=i[2],o,t),t.point(M,x)}function a(){S.point=e,t.lineEnd()}function l(){r(),S.point=c,S.lineEnd=s}function c(n,t){
i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,o,t),S.lineEnd=a,a()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:a,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,o,l,c,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=o+g,_=l+p,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=Ma(Ma(w)-1)<Da||Ma(r-h)<Da?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-y*L;(q*q/x>i||Ma((y*z+M*L)/x-.5)>.3||a>o*g+l*p+c*v)&&(u(t,e,r,o,l,c,A,C,N,b/=S,_/=S,w,d,m),m.point(A,C),u(A,C,N,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,a=Math.cos(30*Oa),o=16;return t.precision=function(n){return arguments.length?(o=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function re(n){var t=ee(function(t,e){return n([t*Ia,e*Ia])});return function(n){return le(t(n))}}function ue(n){this.stream=n}function ie(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ae(n){return oe(function(){return n})()}function oe(n){function t(n){return n=o(n[0]*Oa,n[1]*Oa),[n[0]*h+l,c-n[1]*h]}function e(n){return n=o.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Ia,n[1]*Ia]}function r(){o=Ct(a=fe(m,M,x),i);var n=i(v,d);return l=g-n[0]*h,c=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,a,o,l,c,s,f=ee(function(n,t){return n=i(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Uo,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=le(b(a,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Uo):It((w=+n)*Oa),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Oa,d=n[1]%360*Oa,r()):[v*Ia,d*Ia]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Oa,M=n[1]%360*Oa,x=n.length>2?n[2]%360*Oa:0,r()):[m*Ia,M*Ia,x*Ia]},oa.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function le(n){return ie(n,function(t,e){n.point(t*Oa,e*Oa)})}function ce(n,t){return[n,t]}function se(n,t){return[n>ja?n-Ua:-ja>n?n+Ua:n,t]}function fe(n,t,e){return n?t||e?Ct(ge(n),pe(t,e)):ge(n):t||e?pe(t,e):se}function he(n){return function(t,e){return t+=n,[t>ja?t-Ua:-ja>t?t+Ua:t,e]}}function ge(n){var t=he(n);return t.invert=he(-n),t}function pe(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*r+o*u;return[Math.atan2(l*i-s*a,o*r-c*u),tn(s*i+l*a)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*i-l*a;return[Math.atan2(l*i+c*a,o*r+s*u),tn(s*r-o*u)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,a,o){var l=a*t;null!=u?(u=de(e,u),i=de(e,i),(a>0?i>u:u>i)&&(u+=a*Ua)):(u=n+a*Ua,i=n-.5*l);for(var c,s=u;a>0?s>i:i>s;s-=l)o.point((c=_t([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Da)%(2*Math.PI)}function me(n,t,e){var r=oa.range(n,t-Da,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function ye(n,t,e){var r=oa.range(n,t-Da,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),a=Math.cos(r),o=Math.sin(r),l=u*Math.cos(n),c=u*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(an(r-t)+u*a*an(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*l+t*s,u=e*c+t*f,a=e*i+t*o;return[Math.atan2(u,r)*Ia,Math.atan2(a,Math.sqrt(r*r+u*u))*Ia]}:function(){return[n*Ia,t*Ia]};return p.distance=h,p}function _e(){function n(n,u){var i=Math.sin(u*=Oa),a=Math.cos(u),o=Ma((n*=Oa)-t),l=Math.cos(o);Wo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*i-e*a*l)*o),e*i+r*a*l),t=n,e=i,r=a}var t,e,r;Jo.point=function(u,i){t=u*Oa,e=Math.sin(i*=Oa),r=Math.cos(i),Jo.point=n},Jo.lineEnd=function(){Jo.point=Jo.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),a=Math.cos(u);return[Math.atan2(n*i,r*a),Math.asin(r&&e*i/r)]},e}function Se(n,t){function e(n,t){a>0?-Ha+Da>t&&(t=-Ha+Da):t>Ha-Da&&(t=Ha-Da);var e=a/Math.pow(u(t),i);return[e*Math.sin(i*n),a-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ja/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),a=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=a-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(a/r,1/i))-Ha]},e):Ne}function ke(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return Ma(u)<Da?ce:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(ja/4+t/2))]}function Ee(n){var t,e=ae(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=i.apply(e,arguments);if(a===e){if(t=null==n){var o=ja*r(),l=u();i([[l[0]-o,l[1]-o],[l[0]+o,l[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(ja/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var u=n[0],i=e[0],a=t[0]-u,o=r[0]-i,l=n[1],c=e[1],s=t[1]-l,f=r[1]-c,h=(o*(l-c)-f*(u-i))/(f*a-o*s);return[u+h*a,l+h*s]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function je(n){var t=ll.pop()||new Pe;return t.site=n,t}function Ue(n){Be(n),il.remove(n),ll.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,a=n.N,o=[n];Ue(n);for(var l=i;l.circle&&Ma(e-l.circle.x)<Da&&Ma(r-l.circle.cy)<Da;)i=l.P,o.unshift(l),Ue(l),l=i;o.unshift(l),Be(l);for(var c=a;c.circle&&Ma(e-c.circle.x)<Da&&Ma(r-c.circle.cy)<Da;)a=c.N,o.push(c),Ue(c),c=a;o.push(c),Be(c);var s,f=o.length;for(s=1;f>s;++s)c=o[s],l=o[s-1],nr(c.edge,l.site,c.site,u);l=o[0],c=o[f-1],c.edge=Ke(l.site,c.site,null,u),$e(l),$e(c)}function He(n){for(var t,e,r,u,i=n.x,a=n.y,o=il._;o;)if(r=Oe(o,a)-i,r>Da)o=o.L;else{if(u=i-Ie(o,a),!(u>Da)){r>-Da?(t=o.P,e=o):u>-Da?(t=o,e=o.N):t=e=o;break}if(!o.R){t=o;break}o=o.R}var l=je(n);if(il.insert(t,l),t||e){if(t===e)return Be(t),e=je(t.site),il.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,s=c.x,f=c.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};nr(e.edge,c,p,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,p,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var a=n.P;if(!a)return-(1/0);e=a.site;var o=e.x,l=e.y,c=l-t;if(!c)return o;var s=o-r,f=1/i-1/c,h=s/c;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*c)-l+c/2+u-i/2)))/f+r:(r+o)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,u,i,a,o,l,c,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=ul,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(o=i.edges,l=o.length,a=0;l>a;)s=o[a].end(),r=s.x,u=s.y,c=o[++a%l].start(),t=c.x,e=c.y,(Ma(r-t)>Da||Ma(u-e)>Da)&&(o.splice(a,0,new tr(Qe(i.site,s,Ma(r-f)<Da&&p-u>Da?{x:f,y:Ma(t-f)<Da?e:p}:Ma(u-p)<Da&&h-r>Da?{x:Ma(e-p)<Da?t:h,y:p}:Ma(r-h)<Da&&u-g>Da?{x:h,y:Ma(t-h)<Da?e:g}:Ma(u-g)<Da&&r-f>Da?{x:Ma(e-g)<Da?t:f,y:g}:null),i.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var a=u.x,o=u.y,l=r.x-a,c=r.y-o,s=i.x-a,f=i.y-o,h=2*(l*f-c*s);if(!(h>=-Pa)){var g=l*l+c*c,p=s*s+f*f,v=(f*g-c*p)/h,d=(l*p-s*g)/h,f=d+o,m=cl.pop()||new Xe;m.arc=n,m.site=u,m.x=v+a,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=ol._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}ol.insert(y,m),y||(al=m)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ol.remove(t),cl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=rl,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Je(t,n)||!r(t)||Ma(t.a.x-t.b.x)<Da&&Ma(t.a.y-t.b.y)<Da)&&(t.a=t.b=null,e.splice(u,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,a=t[0][0],o=t[1][0],l=t[0][1],c=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(a>d||d>=o)return;if(h>p){if(i){if(i.y>=c)return}else i={x:d,y:l};e={x:d,y:c}}else{if(i){if(i.y<l)return}else i={x:d,y:c};e={x:d,y:l}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else{if(i){if(i.y<l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else if(v>g){if(i){if(i.x>=o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}else{if(i){if(i.x<a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}return n.a=i,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var u=new Ge(n,t);return rl.push(u),e&&nr(u,n,t,e),r&&nr(u,t,n,r),ul[n.i].edges.push(new tr(u,n,t)),ul[t.i].edges.push(new tr(u,t,n)),u}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,rl.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ur(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ir(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ar(n){for(;n.L;)n=n.L;return n}function or(n,t){var e,r,u,i=n.sort(lr).pop();for(rl=[],ul=new Array(n.length),il=new er,ol=new er;;)if(u=al,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(ul[i.i]=new Ye(i),He(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Fe(u.arc)}t&&(We(t),Ze(t));var a={cells:ul,edges:rl};return il=ol=rl=ul=null,a}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function sr(n){return n.x}function fr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function gr(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var a=.5*(e+u),o=.5*(r+i),l=t.nodes;l[0]&&gr(n,l[0],e,r,a,o),l[1]&&gr(n,l[1],a,r,u,o),l[2]&&gr(n,l[2],e,o,a,i),l[3]&&gr(n,l[3],a,o,u,i)}}function pr(n,t,e,r,u,i,a){var o,l=1/0;return function c(n,s,f,h,g){if(!(s>i||f>a||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(l>m){var y=Math.sqrt(l=m);r=t-y,u=e-y,i=t+y,a=e+y,o=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,s,f,x,b);break;case 1:c(n,x,f,h,b);break;case 2:c(n,s,b,x,g);break;case 3:c(n,x,b,h,g)}}}(n,r,u,i,a),o}function vr(n,t){n=oa.rgb(n),t=oa.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,a=t.g-r,o=t.b-u;return function(n){return"#"+bn(Math.round(e+i*n))+bn(Math.round(r+a*n))+bn(Math.round(u+o*n))}}function dr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function mr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function yr(n,t){var e,r,u,i=fl.lastIndex=hl.lastIndex=0,a=-1,o=[],l=[];for(n+="",t+="";(e=fl.exec(n))&&(r=hl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),o[a]?o[a]+=u:o[++a]=u),(e=e[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:mr(e,r)})),i=hl.lastIndex;return i<t.length&&(u=t.slice(i),o[a]?o[a]+=u:o[++a]=u),o.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)o[(e=l[r]).i]=e.x(n);return o.join("")})}function Mr(n,t){for(var e,r=oa.interpolators.length;--r>=0&&!(e=oa.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],u=[],i=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(Mr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;a>e;++e)u[e]=t[e];return function(n){for(e=0;o>e;++e)u[e]=r[e](n);return u}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Ha)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ua*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ua/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=oa.hcl(n),t=oa.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,a=t.c-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return fn(e+i*n,r+a*n,u+o*n)+""}}function Dr(n,t){n=oa.hsl(n),t=oa.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,a=t.s-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return cn(e+i*n,r+a*n,u+o*n)+""}}function Pr(n,t){n=oa.lab(n),t=oa.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,a=t.a-r,o=t.b-u;return function(n){return gn(e+i*n,r+a*n,u+o*n)+""}}function jr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ur(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),u=Fr(t,e),i=Hr(Or(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ia,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ia:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push("translate(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:mr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:mr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(1!==t[0]||1!==t[1])&&e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=oa.transform(n),t=oa.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,u=-1,i=r.length;++u<i;)e[(t=r[u]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),u=e.pop(),i=r.pop(),a=null;u===i;)a=u,u=e.pop(),i=r.pop();return a}function Qr(n){n.fixed|=2}function nu(n){n.fixed&=-7}function tu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function eu(n){n.fixed&=-5}function ru(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,a=n.nodes,o=a.length,l=-1;++l<o;)i=a[l],null!=i&&(ru(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,u+=c*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function uu(n,t){return oa.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=su,n}function iu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function au(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,a=-1;++a<u;)e.push(i[a]);for(;null!=(n=r.pop());)t(n)}function ou(n){return n.children}function lu(n){return n.value}function cu(n,t){return t.value-n.value}function su(n){return oa.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function fu(n){return n.x}function hu(n){return n.y}function gu(n,t,e){n.y0=t,n.y=e}function pu(n){return oa.range(n.length)}function vu(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function du(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function mu(n){return n.reduce(yu,0)}function yu(n,t){return n+t[1]}function Mu(n,t){return xu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function bu(n){return[oa.min(n),oa.max(n)]}function _u(n,t){return n.value-t.value}function wu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Su(n,t){n._pack_next=t,t._pack_prev=n}function ku(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Nu(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(c=e.length)){var e,r,u,i,a,o,l,c,s=1/0,f=-(1/0),h=1/0,g=-(1/0);if(e.forEach(Eu),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(u=e[1],u.x=u.r,u.y=0,t(u),c>2))for(i=e[2],zu(r,u,i),t(i),wu(r,i),r._pack_prev=i,wu(i,u),u=r._pack_next,a=3;c>a;a++){zu(r,u,i=e[a]);var p=0,v=1,d=1;for(o=u._pack_next;o!==u;o=o._pack_next,v++)if(ku(o,i)){p=1;break}if(1==p)for(l=r._pack_prev;l!==o._pack_prev&&!ku(l,i);l=l._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Su(r,u=o):Su(r=l,u),a--):(wu(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(a=0;c>a;a++)i=e[a],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(Au)}}function Eu(n){n._pack_next=n._pack_prev=n}function Au(n){delete n._pack_next,delete n._pack_prev}function Cu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,a=u.length;++i<a;)Cu(u[i],t,e,r)}function zu(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var a=t.r+e.r,o=u*u+i*i;a*=a,r*=r;var l=.5+(r-a)/(2*o),c=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+l*u+c*i,e.y=n.y+l*i-c*u}else e.x=n.x+r,e.y=n.y}function Lu(n,t){return n.parent==t.parent?1:2}function qu(n){var t=n.children;return t.length?t[0]:n.t}function Tu(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ru(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Du(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pu(n,t,e){return n.a.parent===t.parent?n.a:e}function ju(n){return 1+oa.max(n,function(n){return n.y})}function Uu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fu(n){var t=n.children;return t&&t.length?Fu(t[0]):n}function Hu(n){var t,e=n.children;return e&&(t=e.length)?Hu(e[t-1]):n}function Ou(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Iu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Yu(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zu(n){return n.rangeExtent?n.rangeExtent():Yu(n.range())}function Vu(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Xu(n,t){var e,r=0,u=n.length-1,i=n[r],a=n[u];return i>a&&(e=r,r=u,u=e,e=i,i=a,a=e),n[r]=t.floor(i),n[u]=t.ceil(a),n}function $u(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:wl}function Bu(n,t,e,r){var u=[],i=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)u.push(e(n[a-1],n[a])),i.push(r(t[a-1],t[a]));return function(t){var e=oa.bisect(n,t,1,o)-1;return i[e](u[e](t))}}function Wu(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Bu:Vu,l=r?Wr:Br;return a=u(n,t,l,e),o=u(t,n,l,Mr),i}function i(n){return a(n)}var a,o;return i.invert=function(n){return o(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(jr)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Qu(n,t)},i.tickFormat=function(t,e){return ni(n,t,e)},i.nice=function(t){return Gu(n,t),u()},i.copy=function(){return Wu(n,t,e,r)},u()}function Ju(n,t){return oa.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gu(n,t){return Xu(n,$u(Ku(n,t)[2])),Xu(n,$u(Ku(n,t)[2])),n}function Ku(n,t){null==t&&(t=10);var e=Yu(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Qu(n,t){return oa.range.apply(oa,Ku(n,t))}function ni(n,t,e){var r=Ku(n,t);if(e){var u=so.exec(e);if(u.shift(),"s"===u[8]){var i=oa.formatPrefix(Math.max(Ma(r[0]),Ma(r[1])));return u[7]||(u[7]="."+ti(i.scale(r[2]))),u[8]="f",e=oa.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+ei(u[8],r)),e=u.join("")}else e=",."+ti(r[2])+"f";return oa.format(e)}function ti(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function ei(n,t){var e=ti(t[2]);return n in Sl?Math.abs(e-ti(Math.max(Ma(t[0]),Ma(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ri(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(u(t))}return a.invert=function(t){return i(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),a):t},a.nice=function(){var t=Xu(r.map(u),e?Math:Nl);return n.domain(t),r=t.map(i),a},a.ticks=function(){var n=Yu(r),a=[],o=n[0],l=n[1],c=Math.floor(u(o)),s=Math.ceil(u(l)),f=t%1?2:t;if(isFinite(s-c)){if(e){for(;s>c;c++)for(var h=1;f>h;h++)a.push(i(c)*h);a.push(i(c))}else for(a.push(i(c));c++<s;)for(var h=f-1;h>0;h--)a.push(i(c)*h);for(c=0;a[c]<o;c++);for(s=a.length;a[s-1]>l;s--);a=a.slice(c,s)}return a},a.tickFormat=function(n,e){if(!arguments.length)return kl;arguments.length<2?e=kl:"function"!=typeof e&&(e=oa.format(e));var r=Math.max(1,t*n/a.ticks().length);return function(n){var a=n/i(Math.round(u(n)));return t-.5>a*t&&(a*=t),r>=a?e(n):""}},a.copy=function(){return ri(n.copy(),t,e,r)},Ju(a,n)}function ui(n,t,e){function r(t){return n(u(t))}var u=ii(t),i=ii(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Qu(e,n)},r.tickFormat=function(n,t){return ni(e,n,t)},r.nice=function(n){return r.domain(Gu(e,n))},r.exponent=function(a){return arguments.length?(u=ii(t=a),i=ii(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return ui(n.copy(),t,e)},Ju(r,n)}function ii(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ai(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):NaN))-1)%i.length]}function r(t,e){return oa.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new c;for(var i,a=-1,o=r.length;++a<o;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+o);return i=r(l+s*o/2,s),a=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+o)|0;return i=r(l+Math.round(s*o/2+(c-l-(n.length-1+o)*s)/2),s),a=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=(f-s)/(n.length-o+2*l);return i=r(s+h*l,h),c&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=Math.floor((f-s)/(n.length-o+2*l));return i=r(s+Math.round((f-s-(n.length-o)*h)/2),h),c&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Yu(t.a[0])},e.copy=function(){return ai(n,t)},e.domain(n)}function oi(n,t){function i(){var e=0,r=t.length;for(o=[];++e<r;)o[e-1]=oa.quantile(n,e/r);return a}function a(n){return isNaN(n=+n)?void 0:t[oa.bisect(o,n)]}var o;return a.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},a.range=function(n){return arguments.length?(t=n,i()):t},a.quantiles=function(){return o},a.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?o[e-1]:n[0],e<o.length?o[e]:n[n.length-1]]},a.copy=function(){return oi(n,t)},i()}function li(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),a=e.length-1,r}var i,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/i+n,[t,t+1/i]},r.copy=function(){return li(n,t,e)},u()}function ci(n,t){function e(e){return e>=e?t[oa.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ci(n,t)},e}function si(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qu(n,t)},t.tickFormat=function(t,e){return ni(n,t,e)},t.copy=function(){return si(n)},t}function fi(){return 0}function hi(n){return n.innerRadius}function gi(n){return n.outerRadius}function pi(n){return n.startAngle}function vi(n){return n.endAngle}function di(n){return n&&n.padAngle}function mi(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function yi(n,t,e,r,u){var i=n[0]-t[0],a=n[1]-t[1],o=(u?r:-r)/Math.sqrt(i*i+a*a),l=o*a,c=-o*i,s=n[0]+l,f=n[1]+c,h=t[0]+l,g=t[1]+c,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(Math.max(0,M*M*y-x*x)),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,N=_-p,E=w-v,A=S-p,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mi(n){function t(t){function a(){c.push("M",i(n(s),o))}for(var l,c=[],s=[],f=-1,h=t.length,g=En(e),p=En(r);++f<h;)u.call(this,l=t[f],f)?s.push([+g.call(this,l,f),+p.call(this,l,f)]):s.length&&(a(),s=[]);return s.length&&a(),c.length?c.join(""):null}var e=Ce,r=ze,u=zt,i=xi,a=i.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?i=n:(i=ql.get(n)||xi).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function xi(n){return n.length>1?n.join("L"):n+"Z"}function bi(n){return n.join("L")+"Z"}function _i(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function wi(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Si(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function ki(n,t){return n.length<4?xi(n):n[1]+Ai(n.slice(1,-1),Ci(n,t))}function Ni(n,t){return n.length<3?bi(n):n[0]+Ai((n.push(n[0]),n),Ci([n[n.length-2]].concat(n,[n[1]]),t))}function Ei(n,t){return n.length<3?xi(n):n[0]+Ai(n,Ci(n,t))}function Ai(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xi(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],a=t[0],o=a,l=1;if(e&&(r+="Q"+(i[0]-2*a[0]/3)+","+(i[1]-2*a[1]/3)+","+i[0]+","+i[1],u=n[1],l=2),t.length>1){o=t[1],i=n[l],l++,r+="C"+(u[0]+a[0])+","+(u[1]+a[1])+","+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1];for(var c=2;c<t.length;c++,l++)i=n[l],o=t[c],r+="S"+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1]}if(e){var s=n[l];r+="Q"+(i[0]+2*o[0]/3)+","+(i[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function Ci(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],a=n[1],o=1,l=n.length;++o<l;)e=i,i=a,a=n[o],r.push([u*(a[0]-e[0]),u*(a[1]-e[1])]);return r}function zi(n){if(n.length<3)return xi(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],a=[u,u,u,(r=n[1])[0]],o=[i,i,i,r[1]],l=[u,",",i,"L",Ri(Dl,a),",",Ri(Dl,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Di(l,a,o);return n.pop(),l.push("L",r),l.join("")}function Li(n){if(n.length<4)return xi(n);for(var t,e=[],r=-1,u=n.length,i=[0],a=[0];++r<3;)t=n[r],i.push(t[0]),a.push(t[1]);for(e.push(Ri(Dl,i)+","+Ri(Dl,a)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),a.shift(),a.push(t[1]),Di(e,i,a);return e.join("")}function qi(n){for(var t,e,r=-1,u=n.length,i=u+4,a=[],o=[];++r<4;)e=n[r%u],a.push(e[0]),o.push(e[1]);for(t=[Ri(Dl,a),",",Ri(Dl,o)],--r;++r<i;)e=n[r%u],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Di(t,a,o);return t.join("")}function Ti(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],a=n[0][1],o=n[e][0]-i,l=n[e][1]-a,c=-1;++c<=e;)r=n[c],u=c/e,r[0]=t*r[0]+(1-t)*(i+u*o),r[1]=t*r[1]+(1-t)*(a+u*l);return zi(n)}function Ri(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Di(n,t,e){n.push("C",Ri(Tl,t),",",Ri(Tl,e),",",Ri(Rl,t),",",Ri(Rl,e),",",Ri(Dl,t),",",Ri(Dl,e))}function Pi(n,t){return(t[1]-n[1])/(t[0]-n[0])}function ji(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],a=r[0]=Pi(u,i);++t<e;)r[t]=(a+(a=Pi(u=i,i=n[t+1])))/2;return r[t]=a,r}function Ui(n){for(var t,e,r,u,i=[],a=ji(n),o=-1,l=n.length-1;++o<l;)t=Pi(n[o],n[o+1]),Ma(t)<Da?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),a[o]=u*e,a[o+1]=u*r));for(o=-1;++o<=l;)u=(n[Math.min(l,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),i.push([u||0,a[o]*u||0]);return i}function Fi(n){return n.length<3?xi(n):n[0]+Ai(n,Ui(n))}function Hi(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ha,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Oi(n){function t(t){function l(){v.push("M",o(n(m),f),s,c(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=En(e),b=En(u),_=e===r?function(){
return g}:En(r),w=u===i?function(){return p}:En(i);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(l(),d=[],m=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,u=0,i=ze,a=zt,o=xi,l=o.key,c=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?o=n:(o=ql.get(n)||xi).key,c=o.reverse||o,s=o.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ii(n){return n.radius}function Yi(n){return[n.x,n.y]}function Zi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ha;return[e*Math.cos(r),e*Math.sin(r)]}}function Vi(){return 64}function Xi(){return"circle"}function $i(n){var t=Math.sqrt(n/ja);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bi(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wi(n,t,e){return Sa(n,Il),n.namespace=t,n.id=e,n}function Ji(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,a,o){n[i][u].tween.set(t,r(e.call(n,n.__data__,a,o)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Gi(n){return null==n&&(n=""),function(){this.textContent=n}}function Ki(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qi(n,t,e,r,u){function i(n){var t=v.delay;return s.t=t+l,n>=t?a(n-t):void(s.c=a)}function a(e){var u=p.active,i=p[u];i&&(i.timer.c=null,i.timer.t=NaN,--p.count,delete p[u],i.event&&i.event.interrupt.call(n,n.__data__,i.index));for(var a in p)if(r>+a){var c=p[a];c.timer.c=null,c.timer.t=NaN,--p.count,delete p[a]}s.c=o,qn(function(){return s.c&&o(e||1)&&(s.c=null,s.t=NaN),1},0,l),p.active=r,v.event&&v.event.start.call(n,n.__data__,t),g=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&g.push(r)}),h=v.ease,f=v.duration}function o(u){for(var i=u/f,a=h(i),o=g.length;o>0;)g[--o].call(n,a);return i>=1?(v.event&&v.event.end.call(n,n.__data__,t),--p.count?delete p[r]:delete n[e],1):void 0}var l,s,f,h,g,p=n[e]||(n[e]={active:0,count:0}),v=p[r];v||(l=u.time,s=qn(i,0,l),v=p[r]={tween:new c,time:l,timer:s,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++p.count)}function na(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function ta(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function ea(n){return n.toISOString()}function ra(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=oa.bisect(Gl,u);return i==Gl.length?[t.year,Ku(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Gl[i-1]<Gl[i]/u?i-1:i]:[nc,Ku(n,e)[2]]}return r.invert=function(t){return ua(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(ua)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,ua(+e+1),t).length}var i=r.domain(),a=Yu(i),o=null==n?u(a,10):"number"==typeof n&&u(a,n);return o&&(n=o[0],t=o[1]),r.domain(Xu(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=ua(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=ua(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yu(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],ua(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ra(n.copy(),t,e)},Ju(r,n)}function ua(n){return new Date(n)}function ia(n){return JSON.parse(n.responseText)}function aa(n){var t=sa.createRange();return t.selectNode(sa.body),t.createContextualFragment(n.responseText)}var oa={version:"3.5.13"},la=[].slice,ca=function(n){return la.call(n)},sa=this.document;if(sa)try{ca(sa.documentElement.childNodes)[0].nodeType}catch(fa){ca=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),sa)try{sa.createElement("DIV").style.setProperty("opacity",0,"")}catch(ha){var ga=this.Element.prototype,pa=ga.setAttribute,va=ga.setAttributeNS,da=this.CSSStyleDeclaration.prototype,ma=da.setProperty;ga.setAttribute=function(n,t){pa.call(this,n,t+"")},ga.setAttributeNS=function(n,t,e){va.call(this,n,t,e+"")},da.setProperty=function(n,t,e){ma.call(this,n,t+"",e)}}oa.ascending=e,oa.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},oa.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},oa.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},oa.extent=function(n,t){var e,r,u,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},oa.sum=function(n,t){var e,r=0,i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)u(e=+n[a])&&(r+=e);else for(;++a<i;)u(e=+t.call(n,n[a],a))&&(r+=e);return r},oa.mean=function(n,t){var e,i=0,a=n.length,o=-1,l=a;if(1===arguments.length)for(;++o<a;)u(e=r(n[o]))?i+=e:--l;else for(;++o<a;)u(e=r(t.call(n,n[o],o)))?i+=e:--l;return l?i/l:void 0},oa.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},oa.median=function(n,t){var i,a=[],o=n.length,l=-1;if(1===arguments.length)for(;++l<o;)u(i=r(n[l]))&&a.push(i);else for(;++l<o;)u(i=r(t.call(n,n[l],l)))&&a.push(i);return a.length?oa.quantile(a.sort(e),.5):void 0},oa.variance=function(n,t){var e,i,a=n.length,o=0,l=0,c=-1,s=0;if(1===arguments.length)for(;++c<a;)u(e=r(n[c]))&&(i=e-o,o+=i/++s,l+=i*(e-o));else for(;++c<a;)u(e=r(t.call(n,n[c],c)))&&(i=e-o,o+=i/++s,l+=i*(e-o));return s>1?l/(s-1):void 0},oa.deviation=function(){var n=oa.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ya=i(e);oa.bisectLeft=ya.left,oa.bisect=oa.bisectRight=ya.right,oa.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},oa.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},oa.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},oa.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},oa.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=oa.min(arguments,a),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},oa.transpose=function(n){return oa.zip.apply(oa,n)},oa.keys=function(n){var t=[];for(var e in n)t.push(e);return t},oa.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},oa.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},oa.merge=function(n){for(var t,e,r,u=n.length,i=-1,a=0;++i<u;)a+=n[i].length;for(e=new Array(a);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--a]=r[t];return e};var Ma=Math.abs;oa.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=o(Ma(e)),a=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++a)>t;)u.push(r/i);else for(;(r=n+e*++a)<t;)u.push(r/i);return u},oa.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var a in n)e.set(a,n[a]);return e};var xa="__proto__",ba="\x00";l(c,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),oa.nest=function(){function n(t,a,o){if(o>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var l,s,f,h,g=-1,p=a.length,v=i[o++],d=new c;++g<p;)(h=d.get(l=v(s=a[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,o))}):(s={},f=function(e,r){s[e]=n(t,r,o)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(oa.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},oa.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),oa.behavior={},oa.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var _a=["webkit","ms","moz","Moz","o","O"];oa.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},oa.event=null,oa.requote=function(n){return n.replace(wa,"\\$&")};var wa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Sa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ka=function(n,t){return t.querySelector(n)},Na=function(n,t){return t.querySelectorAll(n)},Ea=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ea=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(ka=function(n,t){return Sizzle(n,t)[0]||null},Na=Sizzle,Ea=Sizzle.matchesSelector),oa.selection=function(){return oa.select(sa.documentElement)};var Aa=oa.selection.prototype=[];Aa.select=function(n){var t,e,r,u,i=[];n=A(n);for(var a=-1,o=this.length;++a<o;){i.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var l=-1,c=r.length;++l<c;)(u=r[l])?(t.push(e=n.call(u,u.__data__,l,a)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return E(i)},Aa.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var a=this[u],o=-1,l=a.length;++o<l;)(e=a[o])&&(r.push(t=ca(n.call(e,e.__data__,o,u))),t.parentNode=e);return E(r)};var Ca={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};oa.ns={prefix:Ca,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Ca.hasOwnProperty(e)?{space:Ca[e],local:n}:n}},Aa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=oa.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Aa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!q(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Aa.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Aa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(j(t,n[t]));return this}return this.each(j(n,t))},Aa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Aa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Aa.append=function(n){return n=U(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Aa.insert=function(n,t){return n=U(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Aa.remove=function(){return this.each(F)},Aa.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new c,y=new Array(a);for(r=-1;++r<a;)(u=n[r])&&(m.has(d=t.call(u,u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d);for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<a;)r in y&&m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,o.push(p),l.push(g),s.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var o=Z([]),l=E([]),s=E([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return l.enter=function(){return o},l.exit=function(){return s},l},Aa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Aa.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return E(u)},Aa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},Aa.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Aa.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Aa.call=function(n){var t=ca(arguments);return n.apply(t[0]=this,t),this},Aa.empty=function(){return!this.node()},Aa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},Aa.size=function(){var n=0;return Y(this,function(){++n}),n};var za=[];oa.selection.enter=Z,oa.selection.enter.prototype=za,za.append=Aa.append,za.empty=Aa.empty,za.node=Aa.node,za.call=Aa.call,za.size=Aa.size,za.select=function(n){for(var t,e,r,u,i,a=[],o=-1,l=this.length;++o<l;){r=(u=this[o]).update,a.push(t=[]),t.parentNode=u.parentNode;for(var c=-1,s=u.length;++c<s;)(i=u[c])?(t.push(r[c]=e=n.call(u.parentNode,i.__data__,c,o)),e.__data__=i.__data__):t.push(null)}return E(a)},za.insert=function(n,t){return arguments.length<2&&(t=V(this)),Aa.insert.call(this,n,t)},oa.select=function(t){var e;return"string"==typeof t?(e=[ka(t,sa)],e.parentNode=sa.documentElement):(e=[t],e.parentNode=n(t)),E([e])},oa.selectAll=function(n){var t;return"string"==typeof n?(t=ca(Na(n,sa)),t.parentNode=sa.documentElement):(t=ca(n),t.parentNode=null),E([t])},Aa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var La=oa.map({mouseenter:"mouseover",mouseleave:"mouseout"});sa&&La.forEach(function(n){"on"+n in sa&&La.remove(n)});var qa,Ta=0;oa.mouse=function(n){return J(n,k())};var Ra=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;oa.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},oa.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",a)}function e(n,t,e,i,a){return function(){function o(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(m.on(i+d,null).on(a+d,null),y(p),g({type:"dragend"}))}var c,s=this,f=oa.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=oa.select(e(f)).on(i+d,o).on(a+d,l),y=W(f),M=t(h,v);u?(c=u.apply(s,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],g({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),u=null,i=e(b,oa.mouse,t,"mousemove","mouseup"),a=e(G,oa.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},oa.rebind(n,r,"on")},oa.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ca(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Da=1e-6,Pa=Da*Da,ja=Math.PI,Ua=2*ja,Fa=Ua-Da,Ha=ja/2,Oa=ja/180,Ia=180/ja,Ya=Math.SQRT2,Za=2,Va=4;oa.interpolateZoom=function(n,t){var e,r,u=n[0],i=n[1],a=n[2],o=t[0],l=t[1],c=t[2],s=o-u,f=l-i,h=s*s+f*f;if(Pa>h)r=Math.log(c/a)/Ya,e=function(n){return[u+n*s,i+n*f,a*Math.exp(Ya*n*r)]};else{var g=Math.sqrt(h),p=(c*c-a*a+Va*h)/(2*a*Za*g),v=(c*c-a*a-Va*h)/(2*c*Za*g),d=Math.log(Math.sqrt(p*p+1)-p),m=Math.log(Math.sqrt(v*v+1)-v);r=(m-d)/Ya,e=function(n){var t=n*r,e=rn(d),o=a/(Za*g)*(e*un(Ya*t+d)-en(d));return[u+o*s,i+o*f,a*e/rn(Ya*t+d)]}}return e.duration=1e3*r,e},oa.behavior.zoom=function(){function n(n){n.on(L,f).on($a+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(A[0],Math.min(A[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function a(t,e,r,a){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,a)),i(d=e,r),t=oa.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function o(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||(n({type:"zoomend"}),d=null)}function f(){function n(){o=1,i(oa.mouse(u),h),c(a)}function r(){f.on(q,null).on(T,null),g(o),s(a)}var u=this,a=D.of(u,arguments),o=0,f=oa.select(t(u)).on(q,n).on(T,r),h=e(oa.mouse(u)),g=W(u);Ol.call(u),l(a)}function h(){function n(){var n=oa.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=oa.event.target;oa.select(t).on(x,r).on(b,o),_.push(t);for(var e=oa.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var s=l[0];a(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var s=l[0],f=l[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,a=oa.touches(p);Ol.call(p);for(var o=0,l=a.length;l>o;++o,r=null)if(e=a[o],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),c(v)}function o(){if(oa.event.touches.length){for(var t=oa.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}oa.selectAll(_).on(y,null),w.on(L,f).on(R,h),N(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+oa.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=oa.select(p),N=W(p);t(),l(v),w.on(L,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(Ol.call(this),v=e(d=m||oa.mouse(this)),l(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Xa())*k.k),i(d,v),c(n)}function p(){var n=oa.mouse(this),t=Math.log(k.k)/Math.LN2;a(this,n,e(n),oa.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Ba,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return $a||($a="onwheel"in sa?(Xa=function(){return-oa.event.deltaY*(oa.event.deltaMode?120:1)},"wheel"):"onmousewheel"in sa?(Xa=function(){return oa.event.wheelDelta},"mousewheel"):(Xa=function(){return-oa.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Fl?oa.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=d?d[0]:e/2,i=d?d[1]:r/2,a=oa.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=a(t),o=e/r[2];this.__chart__=k={x:u-r[0]*o,y:i-r[1]*o,k:o},c(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,l(n),c(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},u(+t),o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Ba:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},oa.rebind(n,D,"on")};var Xa,$a,Ba=[0,1/0];oa.color=on,on.prototype.toString=function(){return this.rgb()+""},oa.hsl=ln;var Wa=ln.prototype=new on;Wa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Wa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Wa.rgb=function(){return cn(this.h,this.s,this.l)},oa.hcl=sn;var Ja=sn.prototype=new on;Ja.brighter=function(n){return new sn(this.h,this.c,Math.min(100,this.l+Ga*(arguments.length?n:1)))},Ja.darker=function(n){return new sn(this.h,this.c,Math.max(0,this.l-Ga*(arguments.length?n:1)))},Ja.rgb=function(){return fn(this.h,this.c,this.l).rgb()},oa.lab=hn;var Ga=18,Ka=.95047,Qa=1,no=1.08883,to=hn.prototype=new on;to.brighter=function(n){return new hn(Math.min(100,this.l+Ga*(arguments.length?n:1)),this.a,this.b)},to.darker=function(n){return new hn(Math.max(0,this.l-Ga*(arguments.length?n:1)),this.a,this.b)},to.rgb=function(){return gn(this.l,this.a,this.b)},oa.rgb=yn;var eo=yn.prototype=new on;eo.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new yn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new yn(u,u,u)},eo.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new yn(n*this.r,n*this.g,n*this.b)},eo.hsl=function(){return wn(this.r,this.g,this.b)},eo.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ro=oa.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ro.forEach(function(n,t){ro.set(n,Mn(t))}),oa.functor=En,oa.xhr=An(y),oa.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var a=Cn(n,t,null==e?r:u(e),i);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:u(n)):e},a}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(a).join(n)}function a(n){return o.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var o=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.slice(t,s-o)}return n.slice(t)}for(var r,u,i={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=e();t&&null==(h=t(h,f++))||o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},oa.csv=oa.dsv(",","text/csv"),oa.tsv=oa.dsv("	","text/tab-separated-values");var uo,io,ao,oo,lo=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};oa.timer=function(){qn.apply(this,arguments)},oa.timer.flush=function(){Rn(),Dn()},oa.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var co=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(jn);oa.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=oa.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),co[8+e/3]};var so=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,fo=oa.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=oa.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ho=oa.time={},go=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){po.setUTCDate.apply(this._,arguments)},setDay:function(){po.setUTCDay.apply(this._,arguments)},setFullYear:function(){po.setUTCFullYear.apply(this._,arguments)},setHours:function(){po.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){po.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){po.setUTCMinutes.apply(this._,arguments)},setMonth:function(){po.setUTCMonth.apply(this._,arguments)},setSeconds:function(){po.setUTCSeconds.apply(this._,arguments)},setTime:function(){po.setTime.apply(this._,arguments)}};var po=Date.prototype;ho.year=On(function(n){return n=ho.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ho.years=ho.year.range,ho.years.utc=ho.year.utc.range,ho.day=On(function(n){var t=new go(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ho.days=ho.day.range,ho.days.utc=ho.day.utc.range,ho.dayOfYear=function(n){var t=ho.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ho[n]=On(function(n){return(n=ho.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ho.year(n).getDay();return Math.floor((ho.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ho[n+"s"]=e.range,ho[n+"s"].utc=e.utc.range,ho[n+"OfYear"]=function(n){var e=ho.year(n).getDay();return Math.floor((ho.dayOfYear(n)+(e+t)%7)/7)}}),ho.week=ho.sunday,ho.weeks=ho.sunday.range,ho.weeks.utc=ho.sunday.utc.range,ho.weekOfYear=ho.sundayOfYear;var vo={"-":"",_:" ",0:"0"},mo=/^\s*\d+/,yo=/^%/;oa.locale=function(n){return{numberFormat:Un(n),timeFormat:Yn(n)}};var Mo=oa.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});oa.format=Mo.numberFormat,oa.geo={},st.prototype={s:0,t:0,add:function(n){ft(n,this.t,xo),ft(xo.s,this.s,this),this.s?this.t+=xo.t:this.s=xo.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var xo=new st;oa.geo.stream=function(n,t){n&&bo.hasOwnProperty(n.type)?bo[n.type](n,t):ht(n,t)};var bo={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ht(e[r].geometry,t)}},_o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){gt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)gt(e[r],t,0)},Polygon:function(n,t){pt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)pt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ht(e[r],t)}};oa.geo.area=function(n){return wo=0,oa.geo.stream(n,ko),wo};var wo,So=new st,ko={sphere:function(){wo+=4*ja},point:b,lineStart:b,lineEnd:b,polygonStart:function(){So.reset(),ko.lineStart=vt},polygonEnd:function(){var n=2*So;wo+=0>n?4*ja+n:n,ko.lineStart=ko.lineEnd=ko.point=b}};oa.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=dt([t*Oa,e*Oa]);if(m){var u=yt(m,r),i=[u[1],-u[0],0],a=yt(i,u);bt(a),a=_t(a);var l=t-p,c=l>0?1:-1,v=a[0]*Ia*c,d=Ma(l)>180;if(d^(v>c*p&&c*t>v)){var y=a[1]*Ia;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>c*p&&c*t>v)){var y=-a[1]*Ia;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=Ma(r)>180?r+(r>0?360:-360):r}else v=n,d=e;ko.point(n,e),t(n,e)}function i(){ko.lineStart()}function a(){u(v,d),ko.lineEnd(),Ma(y)>Da&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function o(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=a,y=0,ko.polygonStart()},polygonEnd:function(){ko.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>So?(s=-(h=180),f=-(g=90)):y>Da?g=90:-Da>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],oa.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],c(e[0],u)||c(e[1],u)?(o(u[0],e[1])>o(u[0],u[1])&&(u[1]=e[1]),o(e[0],u[1])>o(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var a,e,p=-(1/0),t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(a=o(u[1],e[0]))>p&&(p=a,s=e[0],h=u[1])}return M=x=null,s===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[s,f],[h,g]]}}(),oa.geo.centroid=function(n){No=Eo=Ao=Co=zo=Lo=qo=To=Ro=Do=Po=0,oa.geo.stream(n,jo);var t=Ro,e=Do,r=Po,u=t*t+e*e+r*r;return Pa>u&&(t=Lo,e=qo,r=To,Da>Eo&&(t=Ao,e=Co,r=zo),u=t*t+e*e+r*r,Pa>u)?[NaN,NaN]:[Math.atan2(e,t)*Ia,tn(r/Math.sqrt(u))*Ia]};var No,Eo,Ao,Co,zo,Lo,qo,To,Ro,Do,Po,jo={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){jo.lineStart=At},polygonEnd:function(){jo.lineStart=Nt}},Uo=Rt(zt,Ut,Ht,[-ja,-ja/2]),Fo=1e9;oa.geo.clipExtent=function(){var n,t,e,r,u,i,a={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(o){return arguments.length?(i=Zt(n=+o[0][0],t=+o[0][1],e=+o[1][0],r=+o[1][1]),u&&(u.valid=!1,u=null),a):[[n,t],[e,r]]}};return a.extent([[0,0],[960,500]])},(oa.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,oa.geo.albers=function(){return oa.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},oa.geo.albersUsa=function(){function n(n){var i=n[0],a=n[1];return t=null,e(i,a),t||(r(i,a),t)||u(i,a),t}var t,e,r,u,i=oa.geo.albers(),a=oa.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=oa.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?a:u>=.166&&.234>u&&r>=-.214&&-.115>r?o:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),a.precision(t),o.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),a.scale(.35*t),o.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var c=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*c,f-.238*c],[s+.455*c,f+.238*c]]).stream(l).point,r=a.translate([s-.307*c,f+.201*c]).clipExtent([[s-.425*c+Da,f+.12*c+Da],[s-.214*c-Da,f+.234*c-Da]]).stream(l).point,u=o.translate([s-.205*c,f+.212*c]).clipExtent([[s-.214*c+Da,f+.166*c+Da],[s-.115*c-Da,f+.234*c-Da]]).stream(l).point,n},n.scale(1070)};var Ho,Oo,Io,Yo,Zo,Vo,Xo={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Oo=0,Xo.lineStart=$t},polygonEnd:function(){Xo.lineStart=Xo.lineEnd=Xo.point=b,Ho+=Ma(Oo/2)}},$o={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Bo={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Bo.lineStart=ne},polygonEnd:function(){Bo.point=Gt,Bo.lineStart=Kt,Bo.lineEnd=Qt}};oa.geo.path=function(){function n(n){return n&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=u(i)),oa.geo.stream(n,a)),i.result()}function t(){return a=null,n}var e,r,u,i,a,o=4.5;return n.area=function(n){return Ho=0,oa.geo.stream(n,u(Xo)),Ho},n.centroid=function(n){return Ao=Co=zo=Lo=qo=To=Ro=Do=Po=0,oa.geo.stream(n,u(Bo)),Po?[Ro/Po,Do/Po]:To?[Lo/To,qo/To]:zo?[Ao/zo,Co/zo]:[NaN,NaN]},n.bounds=function(n){return Zo=Vo=-(Io=Yo=1/0),oa.geo.stream(n,u($o)),[[Io,Yo],[Zo,Vo]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||re(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Wt:new te(n),"function"!=typeof o&&i.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),n):o},n.projection(oa.geo.albersUsa()).context(null)},oa.geo.transform=function(n){return{stream:function(t){var e=new ue(t);for(var r in n)e[r]=n[r];return e}}},ue.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},oa.geo.projection=ae,oa.geo.projectionMutator=oe,(oa.geo.equirectangular=function(){return ae(ce)}).raw=ce.invert=ce,oa.geo.rotation=function(n){function t(t){return t=n(t[0]*Oa,t[1]*Oa),t[0]*=Ia,t[1]*=Ia,t}return n=fe(n[0]%360*Oa,n[1]*Oa,n.length>2?n[2]*Oa:0),t.invert=function(t){return t=n.invert(t[0]*Oa,t[1]*Oa),t[0]*=Ia,t[1]*=Ia,t},t},se.invert=ce,oa.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=fe(-n[0]*Oa,-n[1]*Oa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ia,n[1]*=Ia}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Oa,u*Oa),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Oa,(u=+r)*Oa),n):u},n.angle(90)},oa.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Oa,u=n[1]*Oa,i=t[1]*Oa,a=Math.sin(r),o=Math.cos(r),l=Math.sin(u),c=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*a)*e+(e=c*s-l*f*o)*e),l*s+c*f*o)},oa.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return oa.range(Math.ceil(i/d)*d,u,d).map(h).concat(oa.range(Math.ceil(c/m)*m,l,m).map(g)).concat(oa.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Ma(n%d)>Da}).map(s)).concat(oa.range(Math.ceil(o/v)*v,a,v).filter(function(n){return Ma(n%m)>Da}).map(f))}var e,r,u,i,a,o,l,c,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(l).slice(1),h(u).reverse().slice(1),g(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],c=+t[0][1],l=+t[1][1],i>u&&(t=i,i=u,u=t),c>l&&(t=c,c=l,l=t),n.precision(y)):[[i,c],[u,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=me(o,a,90),f=ye(r,e,y),h=me(c,l,90),g=ye(i,u,y),n):y},n.majorExtent([[-180,-90+Da],[180,90-Da]]).minorExtent([[-180,-80-Da],[180,80+Da]])},oa.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=Me,u=xe;return n.distance=function(){return oa.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},oa.geo.interpolate=function(n,t){return be(n[0]*Oa,n[1]*Oa,t[0]*Oa,t[1]*Oa)},oa.geo.length=function(n){return Wo=0,oa.geo.stream(n,Jo),Wo};var Wo,Jo={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Go=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(oa.geo.azimuthalEqualArea=function(){return ae(Go)}).raw=Go;var Ko=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(oa.geo.azimuthalEquidistant=function(){return ae(Ko)}).raw=Ko,(oa.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(oa.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var Qo=we(function(n){return 1/n},Math.atan);(oa.geo.gnomonic=function(){return ae(Qo)}).raw=Qo,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ha]},(oa.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var nl=we(function(){return 1},Math.asin);(oa.geo.orthographic=function(){return ae(nl)}).raw=nl;var tl=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(oa.geo.stereographic=function(){return ae(tl)}).raw=tl,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ha]},(oa.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,oa.geom={},oa.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=En(e),i=En(r),a=n.length,o=[],l=[];for(t=0;a>t;t++)o.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(o.sort(qe),t=0;a>t;t++)l.push([o[t][0],-o[t][1]]);var c=Le(o),s=Le(l),f=s[0]===c[0],h=s[s.length-1]===c[c.length-1],g=[];for(t=c.length-1;t>=0;--t)g.push(n[o[c[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[o[s[t]][2]]);return g}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},oa.geom.polygon=function(n){return Sa(n,el),n};var el=oa.geom.polygon.prototype=[];el.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},el.centroid=function(n){var t,e,r=-1,u=this.length,i=0,a=0,o=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],i+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[i*n,a*n]},el.clip=function(n){for(var t,e,r,u,i,a,o=De(n),l=-1,c=this.length-De(this),s=this[c-1];++l<c;){for(t=n.slice(),n.length=0,u=this[l],i=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],Te(a,s,u)?(Te(i,s,u)||n.push(Re(i,a,s,u)),n.push(a)):Te(i,s,u)&&n.push(Re(i,a,s,u)),i=a;o&&n.push(n[0]),s=u}return n};var rl,ul,il,al,ol,ll=[],cl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=ar(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,a=n.R;if(e=i?a?ar(a):i:a,u?u.L===n?u.L=e:u.R=e:this._=e,i&&a?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==a?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=a,a.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ur(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ir(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ur(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ir(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ur(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ir(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},oa.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=o[0][0],u=o[0][1],i=o[1][0],a=o[1][1];return or(e(n),o).cells.forEach(function(e,o){var l=e.edges,c=e.site,s=t[o]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=i&&c.y>=u&&c.y<=a?[[r,a],[i,a],[i,u],[r,u]]:[];s.point=n[o]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Da)*Da,y:Math.round(a(n,t)/Da)*Da,i:t}})}var r=Ce,u=ze,i=r,a=u,o=sl;return n?t(n):(t.links=function(n){return or(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return or(e(n)).cells.forEach(function(e,r){for(var u,i,a=e.site,o=e.edges.sort(Ve),l=-1,c=o.length,s=o[c-1].edge,f=s.l===a?s.r:s.l;++l<c;)u=s,i=f,s=o[l].edge,f=s.l===a?s.r:s.l,r<i.i&&r<f.i&&cr(a,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=En(r=n),t):r},t.y=function(n){return arguments.length?(a=En(u=n),t):u},t.clipExtent=function(n){return arguments.length?(o=null==n?sl:n,t):o===sl?null:o},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):o===sl?null:o&&o[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];oa.geom.delaunay=function(n){return oa.geom.voronoi().triangles(n)},oa.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,s=n.y;if(null!=l)if(Ma(l-e)+Ma(s-r)<.01)c(n,t,e,r,u,i,a,o);else{var f=n.point;n.x=n.y=n.point=null,c(n,f,l,s,u,i,a,o),c(n,t,e,r,u,i,a,o)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,u,i,a,o)}function c(n,t,e,r,u,a,o,l){var c=.5*(u+o),s=.5*(a+l),f=e>=c,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=hr()),f?u=c:o=c,h?a=s:l=s,i(n,t,e,r,u,a,o,l)}var s,f,h,g,p,v,d,m,y,M=En(o),x=En(l);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=hr();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){gr(n,k,v,d,m,y)},k.find=function(n){return pr(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var a,o=Ce,l=ze;return(a=arguments.length)?(o=sr,l=fr,3===a&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(o=n,i):o},i.y=function(n){return arguments.length?(l=n,i):l},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},oa.interpolateRgb=vr,oa.interpolateObject=dr,oa.interpolateNumber=mr,oa.interpolateString=yr;var fl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,hl=new RegExp(fl.source,"g");oa.interpolate=Mr,oa.interpolators=[function(n,t){var e=typeof t;return("string"===e?ro.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:yr:t instanceof on?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:mr)(n,t)}],oa.interpolateArray=xr;var gl=function(){return y},pl=oa.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),vl=oa.map({"in":y,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});oa.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=pl.get(e)||gl,r=vl.get(r)||y,br(r(e.apply(null,la.call(arguments,1))))},oa.interpolateHcl=Rr,oa.interpolateHsl=Dr,oa.interpolateLab=Pr,oa.interpolateRound=jr,oa.transform=function(n){var t=sa.createElementNS(oa.ns.prefix.svg,"g");return(oa.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Ur(e?e.matrix:dl)})(n)},Ur.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var dl={a:1,b:0,c:0,d:1,e:0,f:0};oa.interpolateTransform=$r,oa.layout={},oa.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},oa.layout.chord=function(){function n(){var n,c,f,h,g,p={},v=[],d=oa.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(c=0,g=-1;++g<i;)c+=u[h][g];v.push(c),m.push(oa.range(i)),n+=c}for(a&&d.sort(function(n,t){return a(v[n],v[t])}),o&&m.forEach(function(n,t){n.sort(function(n,e){return o(u[t][n],u[t][e])})}),n=(Ua-s*i)/n,c=0,h=-1;++h<i;){for(f=c,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=c,_=c+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:c,value:v[y]},c+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,a,o,l,c={},s=0;return c.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,c):u},c.padding=function(n){return arguments.length?(s=n,e=r=null,c):s},c.sortGroups=function(n){return arguments.length?(a=n,e=r=null,c):a},c.sortSubgroups=function(n){return arguments.length?(o=n,e=null,c):o},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},oa.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,a=t.cy-n.y,o=u-e,l=i*i+a*a;if(l>o*o/m){if(v>l){var c=t.charge/l;n.px-=i*c,n.py-=a*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=i*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=oa.event.x,n.py=oa.event.y,l.resume()}var e,r,u,i,a,o,l={},c=oa.dispatch("start","tick","end"),s=[1,1],f=.9,h=ml,g=yl,p=-30,v=Ml,d=.1,m=.64,M=[],x=[];return l.tick=function(){if((u*=.99)<.005)return e=null,c.end({type:"end",alpha:u=0}),!0;var t,r,l,h,g,v,m,y,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,g=l.target,y=g.x-h.x,b=g.y-h.y,(v=y*y+b*b)&&(v=u*a[r]*((v=Math.sqrt(v))-i[r])/v,y*=v,b*=v,g.x-=y*(m=h.weight+g.weight?h.weight/(h.weight+g.weight):.5),g.y-=b*m,h.x+=y*(m=1-m),h.y+=b*m);if((m=u*d)&&(y=s[0]/2,b=s[1]/2,r=-1,m))for(;++r<_;)l=M[r],l.x+=(y-l.x)*m,l.y+=(b-l.y)*m;if(p)for(ru(t=oa.geom.quadtree(M),u,o),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*f,l.y-=(l.py-(l.py=l.y))*f);c.tick({type:"tick",alpha:u})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(s=n,l):s},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.friction=function(n){return arguments.length?(f=+n,l):f},l.charge=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(m=n*n,l):Math.sqrt(m)},l.alpha=function(n){return arguments.length?(n=+n,u?n>0?u=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:u=0})):n>0&&(c.start({type:"start",alpha:u=n}),e=qn(l.tick)),l):u},l.start=function(){function n(n,r){if(!e){for(e=new Array(u),l=0;u>l;++l)e[l]=[];for(l=0;c>l;++l){var i=x[l];e[i.source.index].push(i.target),e[i.target.index].push(i.source)}}for(var a,o=e[t],l=-1,s=o.length;++l<s;)if(!isNaN(a=o[l][n]))return a;return Math.random()*r}var t,e,r,u=M.length,c=x.length,f=s[0],v=s[1];for(t=0;u>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;u>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",f)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(i=[],"function"==typeof h)for(t=0;c>t;++t)i[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)i[t]=h;if(a=[],"function"==typeof g)for(t=0;c>t;++t)a[t]=+g.call(this,x[t],t);else for(t=0;c>t;++t)a[t]=g;if(o=[],"function"==typeof p)for(t=0;u>t;++t)o[t]=+p.call(this,M[t],t);else for(t=0;u>t;++t)o[t]=p;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=oa.behavior.drag().origin(y).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",nu)),arguments.length?void this.on("mouseover.force",tu).on("mouseout.force",eu).call(r):r},oa.rebind(l,c,"on")};var ml=20,yl=1,Ml=1/0;oa.layout.hierarchy=function(){function n(u){var i,a=[u],o=[];for(u.depth=0;null!=(i=a.pop());)if(o.push(i),(c=e.call(n,i,i.depth))&&(l=c.length)){for(var l,c,s;--l>=0;)a.push(s=c[l]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=c}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return au(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),o}var t=cu,e=ou,r=lu;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(iu(t,function(n){n.children&&(n.value=0)}),au(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},oa.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(a=i.length)){var a,o,l,c=-1;for(r=t.value?r/t.value:0;++c<a;)n(o=i[c],e,l=o.value*r,u),e+=l}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var a=r.call(this,e,i);return n(a[0],0,u[0],u[1]/t(a[0])),a}var r=oa.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},uu(e,r)},oa.layout.pie=function(){function n(a){var o,l=a.length,c=a.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/l,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=oa.sum(c),v=p?(f-l*g)/p:0,d=oa.range(l),m=[];return null!=e&&d.sort(e===xl?function(n,t){return c[t]-c[n]}:function(n,t){return e(a[n],a[t])}),d.forEach(function(n){m[n]={data:a[n],value:o=c[n],startAngle:s,endAngle:s+=o*v+g,padAngle:h}}),m}var t=Number,e=xl,r=0,u=Ua,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var xl={};oa.layout.stack=function(){function n(o,l){if(!(h=o.length))return o;var c=o.map(function(e,r){return t.call(n,e,r)}),s=c.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,l);c=oa.permute(c,f),s=oa.permute(s,f);var h,g,p,v,d=r.call(n,s,l),m=c[0].length;for(p=0;m>p;++p)for(u.call(n,c[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,c[g][p],v+=s[g-1][p][1],s[g][p][1]);return o}var t=y,e=pu,r=vu,u=gu,i=fu,a=hu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:bl.get(t)||pu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:_l.get(t)||vu,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(u=t,n):u},n};var bl=oa.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(du),i=n.map(mu),a=oa.range(r).sort(function(n,t){return u[n]-u[t]}),o=0,l=0,c=[],s=[];for(t=0;r>t;++t)e=a[t],l>o?(o+=i[e],c.push(e)):(l+=i[e],s.push(e));return s.reverse().concat(c)},reverse:function(n){return oa.range(n.length).reverse()},"default":pu}),_l=oa.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,a=[],o=0,l=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;i>e;++e)l[e]=(o-a[e])/2;return l},wiggle:function(n){var t,e,r,u,i,a,o,l,c,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=l=c=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;i+=a*n[t][e][1]}g[e]=l-=u?i/u*o:0,c>l&&(c=l)}for(e=0;h>e;++e)g[e]-=c;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,a=1/u,o=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=a}for(e=0;i>e;++e)o[e]=0;return o},zero:vu});oa.layout.histogram=function(){function n(n,i){for(var a,o,l=[],c=n.map(e,this),s=r.call(this,c,i),f=u.call(this,s,c,i),i=-1,h=c.length,g=f.length-1,p=t?1:1/h;++i<g;)a=l[i]=[],a.dx=f[i+1]-(a.x=f[i]),a.y=0;if(g>0)for(i=-1;++i<h;)o=c[i],o>=s[0]&&o<=s[1]&&(a=l[oa.bisect(f,o,1,g)-1],a.y+=p,a.push(n[i]));return l}var t=!0,e=Number,r=bu,u=Mu;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return xu(n,t)}:En(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},oa.layout.pack=function(){function n(n,i){var a=e.call(this,n,i),o=a[0],l=u[0],c=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,au(o,function(n){n.r=+s(n.value)}),au(o,Nu),r){var f=r*(t?1:Math.max(2*o.r/l,2*o.r/c))/2;au(o,function(n){n.r+=f}),au(o,Nu),au(o,function(n){n.r-=f})}return Cu(o,l/2,c/2,t?1:1/Math.max(2*o.r/l,2*o.r/c)),a}var t,e=oa.layout.hierarchy().sort(_u),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},uu(n,e)},oa.layout.tree=function(){function n(n,u){var s=a.call(this,n,u),f=s[0],h=t(f);if(au(h,e),h.parent.m=-h.z,iu(h,r),c)iu(f,i);else{var g=f,p=f,v=f;iu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=o(g,p)/2-g.x,m=l[0]/(p.x+o(p,g)/2+d),y=l[1]/(v.depth||1);iu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,a=0,o=i.length;o>a;++a)r.push((i[a]=u={_:i[a],parent:t,children:(u=i[a].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:a}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Du(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+o(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+o(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,a=t,l=u.parent.children[0],c=u.m,s=i.m,f=a.m,h=l.m;a=Tu(a),u=qu(u),a&&u;)l=qu(l),i=Tu(i),i.a=n,r=a.z+f-u.z-c+o(a._,u._),r>0&&(Ru(Pu(a,n,e),n,r),c+=r,s+=r),f+=a.m,c+=u.m,h+=l.m,s+=i.m;a&&!Tu(i)&&(i.t=a,i.m+=f-s),u&&!qu(l)&&(l.t=u,l.m+=c-h,e=n)}return e}function i(n){n.x*=l[0],n.y=n.depth*l[1]}var a=oa.layout.hierarchy().sort(null).value(null),o=Lu,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(o=t,n):o},n.size=function(t){return arguments.length?(c=null==(l=t)?i:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:i,n):c?l:null},uu(n,a)},oa.layout.cluster=function(){function n(n,i){var a,o=t.call(this,n,i),l=o[0],c=0;au(l,function(n){var t=n.children;t&&t.length?(n.x=Uu(t),n.y=ju(t)):(n.x=a?c+=e(n,a):0,n.y=0,a=n)});var s=Fu(l),f=Hu(l),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return au(l,u?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),o}var t=oa.layout.hierarchy().sort(null).value(null),e=Lu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},uu(n,t)},oa.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var a,o,l,c=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?c.dx:"dice"===g?c.dy:"slice-dice"===g?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),s.area=0;(l=h.length)>0;)s.push(a=h[l-1]),s.area+=a.area,"squarify"!==g||(o=r(s,v))<=p?(h.pop(),p=o):(s.area-=s.pop().area,u(s,v,c,!1),v=Math.min(c.dx,c.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,c,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,a=f(t),o=r.slice(),l=[];for(n(o,a.dx*a.dy/t.value),l.area=0;i=o.pop();)l.push(i),l.area+=i.area,null!=i.z&&(u(l,i.z?a.dx:a.dy,a,!o.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,a=n.length,o=e.x,c=e.y,s=t?l(n.area/t):0;
if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<a;)u=n[i],u.x=o,u.y=c,u.dy=s,o+=u.dx=Math.min(e.x+e.dx-o,s?l(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<a;)u=n[i],u.x=o,u.y=c,u.dx=s,c+=u.dy=Math.min(e.y+e.dy-c,s?l(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-c,e.x+=s,e.dx-=s}}function i(r){var u=a||o(r),i=u[0];return i.x=i.y=0,i.value?(i.dx=c[0],i.dy=c[1]):i.dx=i.dy=0,a&&o.revalue(i),n([i],i.dx*i.dy/i.value),(a?e:t)(i),h&&(a=u),u}var a,o=oa.layout.hierarchy(),l=Math.round,c=[1,1],s=null,f=Ou,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(c=n,i):c},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ou(t):Iu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Iu(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ou:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(l=n?Math.round:Number,i):l!=Number},i.sticky=function(n){return arguments.length?(h=n,a=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},uu(i,o)},oa.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=oa.random.normal.apply(oa,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=oa.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},oa.scale={};var wl={floor:y,ceil:y};oa.scale.linear=function(){return Wu([0,1],[0,1],Mr,!1)};var Sl={s:1,g:1,p:1,r:1,e:1};oa.scale.log=function(){return ri(oa.scale.linear().domain([0,1]),10,!0,[1,10])};var kl=oa.format(".0e"),Nl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};oa.scale.pow=function(){return ui(oa.scale.linear(),1,[0,1])},oa.scale.sqrt=function(){return oa.scale.pow().exponent(.5)},oa.scale.ordinal=function(){return ai([],{t:"range",a:[[]]})},oa.scale.category10=function(){return oa.scale.ordinal().range(El)},oa.scale.category20=function(){return oa.scale.ordinal().range(Al)},oa.scale.category20b=function(){return oa.scale.ordinal().range(Cl)},oa.scale.category20c=function(){return oa.scale.ordinal().range(zl)};var El=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Al=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),Cl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),zl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);oa.scale.quantile=function(){return oi([],[])},oa.scale.quantize=function(){return li(0,1,[0,1])},oa.scale.threshold=function(){return ci([.5],[0,1])},oa.scale.identity=function(){return si([0,1])},oa.svg={},oa.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),s=a.apply(this,arguments)-Ha,f=o.apply(this,arguments)-Ha,h=Math.abs(f-s),g=s>f?0:1;if(n>c&&(p=c,c=n,n=p),h>=Fa)return t(c,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,N=0,E=0,A=[];if((m=(+l.apply(this,arguments)||0)/2)&&(d=i===Ll?Math.sqrt(n*n+c*c):+i.apply(this,arguments),g||(E*=-1),c&&(E=tn(d/c*Math.sin(m))),n&&(N=tn(d/n*Math.sin(m)))),c){y=c*Math.cos(s+E),M=c*Math.sin(s+E),x=c*Math.cos(f-E),b=c*Math.sin(f-E);var C=Math.abs(f-s-2*E)<=ja?0:1;if(E&&mi(y,M,x,b)===g^C){var z=(s+f)/2;y=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-N),w=n*Math.sin(f-N),S=n*Math.cos(s+N),k=n*Math.sin(s+N);var L=Math.abs(s-f+2*N)<=ja?0:1;if(N&&mi(_,w,S,k)===1-g^L){var q=(s+f)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Da&&(p=Math.min(Math.abs(c-n)/2,+u.apply(this,arguments)))>.001){v=c>n^g?0:1;var T=p,R=p;if(ja>h){var D=null==S?[_,w]:null==x?[y,M]:Re([y,M],[S,k],[x,b],[_,w]),P=y-D[0],j=M-D[1],U=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*U+j*F)/(Math.sqrt(P*P+j*j)*Math.sqrt(U*U+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(p,(n-O)/(H-1)),T=Math.min(p,(c-O)/(H+1))}if(null!=x){var I=yi(null==S?[_,w]:[S,k],[y,M],c,T,g),Y=yi([x,b],[_,w],c,T,g);p===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-g^mi(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",y,",",M);if(null!=S){var Z=yi([y,M],[S,k],n,-R,g),V=yi([_,w],null==x?[y,M]:[x,b],n,-R,g);p===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^mi(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",y,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",g," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-g," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hi,r=gi,u=fi,i=Ll,a=pi,o=vi,l=di;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=En(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Ll?Ll:En(t),n):i},n.startAngle=function(t){return arguments.length?(a=En(t),n):a},n.endAngle=function(t){return arguments.length?(o=En(t),n):o},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-Ha;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Ll="auto";oa.svg.line=function(){return Mi(y)};var ql=oa.map({linear:xi,"linear-closed":bi,step:_i,"step-before":wi,"step-after":Si,basis:zi,"basis-open":Li,"basis-closed":qi,bundle:Ti,cardinal:Ei,"cardinal-open":ki,"cardinal-closed":Ni,monotone:Fi});ql.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Tl=[0,2/3,1/3,0],Rl=[0,1/3,2/3,0],Dl=[0,1/6,2/3,1/6];oa.svg.line.radial=function(){var n=Mi(Hi);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wi.reverse=Si,Si.reverse=wi,oa.svg.area=function(){return Oi(y)},oa.svg.area.radial=function(){var n=Oi(Hi);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},oa.svg.chord=function(){function n(n,o){var l=t(this,i,n,o),c=t(this,a,n,o);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?u(l.r,l.p1,l.r,l.p0):u(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+u(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=o.call(n,u,r),a=l.call(n,u,r)-Ha,s=c.call(n,u,r)-Ha;return{r:i,a0:a,a1:s,p0:[i*Math.cos(a),i*Math.sin(a)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ja)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=Me,a=xe,o=Ii,l=pi,c=vi;return n.radius=function(t){return arguments.length?(o=En(t),n):o},n.source=function(t){return arguments.length?(i=En(t),n):i},n.target=function(t){return arguments.length?(a=En(t),n):a},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},oa.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),a=e.call(this,n,u),o=(i.y+a.y)/2,l=[i,{x:i.x,y:o},{x:a.x,y:o},a];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yi;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},oa.svg.diagonal.radial=function(){var n=oa.svg.diagonal(),t=Yi,e=n.projection;return n.projection=function(n){return arguments.length?e(Zi(t=n)):t},n},oa.svg.symbol=function(){function n(n,r){return(Pl.get(t.call(this,n,r))||$i)(e.call(this,n,r))}var t=Xi,e=Vi;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Pl=oa.map({circle:$i,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ul)),e=t*Ul;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});oa.svg.symbolTypes=Pl.keys();var jl=Math.sqrt(3),Ul=Math.tan(30*Oa);Aa.transition=function(n){for(var t,e,r=Fl||++Yl,u=Ki(n),i=[],a=Hl||{time:Date.now(),ease:Nr,delay:0,duration:250},o=-1,l=this.length;++o<l;){i.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(e=c[s])&&Qi(e,s,u,r,a),t.push(e)}return Wi(i,u,r)},Aa.interrupt=function(n){return this.each(null==n?Ol:Bi(Ki(n)))};var Fl,Hl,Ol=Bi(Ki()),Il=[],Yl=0;Il.call=Aa.call,Il.empty=Aa.empty,Il.node=Aa.node,Il.size=Aa.size,oa.transition=function(n,t){return n&&n.transition?Fl?n.transition(t):n:oa.selection().transition(n)},oa.transition.prototype=Il,Il.select=function(n){var t,e,r,u=this.id,i=this.namespace,a=[];n=A(n);for(var o=-1,l=this.length;++o<l;){a.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Qi(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Wi(a,i,u)},Il.selectAll=function(n){var t,e,r,u,i,a=this.id,o=this.namespace,l=[];n=C(n);for(var c=-1,s=this.length;++c<s;)for(var f=this[c],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[o][a],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&Qi(u,p,o,a,i),t.push(u)}return Wi(l,o,a)},Il.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]);for(var e=this[i],o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return Wi(u,this.namespace,this.id)},Il.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Il.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?$r:Mr,o=oa.ns.qualify(n);return Ji(this,"attr."+n,t,o.local?i:u)},Il.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=oa.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Il.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=Mr(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var a=arguments.length;if(3>a){if("string"!=typeof n){2>a&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ji(this,"style."+n,e,i)},Il.styleTween=function(n,e,r){function u(u,i){var a=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return a&&function(t){this.style.setProperty(n,a(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Il.text=function(n){return Ji(this,"text",n,Gi)},Il.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Il.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=oa.ease.apply(oa,arguments)),Y(this,function(r){r[e][t].ease=n}))},Il.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Il.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Il.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Hl,i=Fl;try{Fl=e,Y(this,function(t,u,i){Hl=t[r][e],n.call(t,t.__data__,u,i)})}finally{Hl=u,Fl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=oa.dispatch("start","end","interrupt"))).on(n,t)});return this},Il.transition=function(){for(var n,t,e,r,u=this.id,i=++Yl,a=this.namespace,o=[],l=0,c=this.length;c>l;l++){o.push(n=[]);for(var t=this[l],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[a][u],Qi(e,s,a,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wi(o,a,i)},oa.svg.axis=function(){function n(n){n.each(function(){var n,c=oa.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==l?f.ticks?f.ticks.apply(f,o):f.domain():l,g=null==t?f.tickFormat?f.tickFormat.apply(f,o):y:t,p=c.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Da),d=oa.transition(p.exit()).style("opacity",Da).remove(),m=oa.transition(p.order()).style("opacity",1),M=Math.max(u,0)+a,x=Zu(f),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),oa.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),z=v.select("text"),L=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=na,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)):(n=ta,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)),E.attr(N,q*u),z.attr(k,q*M),A.attr(S,0).attr(N,q*u),L.attr(w,0).attr(k,q*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=oa.scale.linear(),r=Zl,u=6,i=6,a=3,o=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Vl?t+"":Zl,n):r},n.ticks=function(){return arguments.length?(o=ca(arguments),n):o},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(a=+t,n):a},n.tickSubdivide=function(){return arguments.length&&n},n};var Zl="bottom",Vl={top:1,right:1,bottom:1,left:1};oa.svg.brush=function(){function n(t){t.each(function(){var t=oa.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),a=t.selectAll(".background").data([0]);a.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var o=t.selectAll(".resize").data(v,y);o.exit().remove(),o.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Xl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),o.style("display",n.empty()?"none":null);var l,f=oa.transition(t),h=oa.transition(a);c&&(l=Zu(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(f)),s&&(l=Zu(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==oa.event.keyCode&&(C||(M=null,L[0]-=f[1],L[1]-=h[1],C=2),S())}function v(){32==oa.event.keyCode&&2==C&&(L[0]+=f[1],L[1]+=h[1],C=0,S())}function d(){var n=oa.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(oa.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),L[0]=f[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&m(n,c,0)&&(r(k),t=!0),A&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=Zu(t),l=i[0],c=i[1],s=L[e],v=e?h:f,d=v[1]-v[0];return C&&(l-=s,c-=d+s),r=(e?p:g)?Math.max(l,Math.min(c,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(l,Math.min(c,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?o=null:a=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),oa.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=oa.select(oa.event.target),w=l.of(b,arguments),k=oa.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&s,C=_.classed("extent"),z=W(b),L=oa.mouse(b),q=oa.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(oa.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",y):q.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)L[0]=f[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[f[1-T]-L[0],h[1-R]-L[1]],L[0]=f[T],L[1]=h[R]}else oa.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),oa.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var a,o,l=N(n,"brushstart","brush","brushend"),c=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=$l[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:f,y:h,i:a,j:o},e=this.__chart__||t;this.__chart__=t,Fl?oa.select(this).transition().each("start.brush",function(){a=e.i,o=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(f,t.x),r=xr(h,t.y);return a=o=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){a=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=$l[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,v=$l[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(g=!!t[0],p=!!t[1]):c?g=!!t:s&&(p=!!t),n):c&&s?[g,p]:c?g:s?p:null},n.extent=function(t){var e,r,u,i,l;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),a=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],c&&(u=u[1],i=i[1]),o=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(l=u,u=i,i=l),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(c&&(a?(e=a[0],r=a[1]):(e=f[0],r=f[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),s&&(o?(u=o[0],i=o[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(l=u,u=i,i=l))),c&&s?[[e,u],[r,i]]:c?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],a=o=null),n},n.empty=function(){return!!c&&f[0]==f[1]||!!s&&h[0]==h[1]},oa.rebind(n,l,"on")};var Xl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},$l=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Bl=ho.format=Mo.timeFormat,Wl=Bl.utc,Jl=Wl("%Y-%m-%dT%H:%M:%S.%LZ");Bl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ea:Jl,ea.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ea.toString=Jl.toString,ho.second=On(function(n){return new go(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ho.seconds=ho.second.range,ho.seconds.utc=ho.second.utc.range,ho.minute=On(function(n){return new go(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ho.minutes=ho.minute.range,ho.minutes.utc=ho.minute.utc.range,ho.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new go(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ho.hours=ho.hour.range,ho.hours.utc=ho.hour.utc.range,ho.month=On(function(n){return n=ho.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ho.months=ho.month.range,ho.months.utc=ho.month.utc.range;var Gl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Kl=[[ho.second,1],[ho.second,5],[ho.second,15],[ho.second,30],[ho.minute,1],[ho.minute,5],[ho.minute,15],[ho.minute,30],[ho.hour,1],[ho.hour,3],[ho.hour,6],[ho.hour,12],[ho.day,1],[ho.day,2],[ho.week,1],[ho.month,1],[ho.month,3],[ho.year,1]],Ql=Bl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),nc={range:function(n,t,e){return oa.range(Math.ceil(n/e)*e,+t,e).map(ua)},floor:y,ceil:y};Kl.year=ho.year,ho.scale=function(){return ra(oa.scale.linear(),Kl,Ql)};var tc=Kl.map(function(n){return[n[0].utc,n[1]]}),ec=Wl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);tc.year=ho.year.utc,ho.scale.utc=function(){return ra(oa.scale.linear(),tc,ec)},oa.text=An(function(n){return n.responseText}),oa.json=function(n,t){return Cn(n,"application/json",ia,t)},oa.html=function(n,t){return Cn(n,"text/html",aa,t)},oa.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=oa,define(oa)):"object"==typeof module&&module.exports?module.exports=oa:this.d3=oa}();
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * @license
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
global.graphlib = require('./index');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./index":2}],2:[function(require,module,exports){
/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var lib = require("./lib");

module.exports = {
  Graph: lib.Graph,
  json: require("./lib/json"),
  alg: require("./lib/alg"),
  version: lib.version
};

},{"./lib":18,"./lib/alg":9,"./lib/json":19}],3:[function(require,module,exports){
var _ = require("../lodash");

module.exports = components;

function components(g) {
  var visited = {},
      cmpts = [],
      cmpt;

  function dfs(v) {
    if (_.has(visited, v)) return;
    visited[v] = true;
    cmpt.push(v);
    _.each(g.successors(v), dfs);
    _.each(g.predecessors(v), dfs);
  }

  _.each(g.nodes(), function(v) {
    cmpt = [];
    dfs(v);
    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts;
}

},{"../lodash":20}],4:[function(require,module,exports){
var _ = require("../lodash");

module.exports = dfs;

/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. This algorithm treats
 * the input as undirected.
 *
 * Order must be one of "pre" or "post".
 */
function dfs(g, vs, order) {
  if (!_.isArray(vs)) {
    vs = [vs];
  }

  var acc = [],
      visited = {};
  _.each(vs, function(v) {
    if (!g.hasNode(v)) {
      throw new Error("Graph does not have node: " + v);
    }

    doDfs(g, v, order === "post", visited, acc);
  });
  return acc;
}

function doDfs(g, v, postorder, visited, acc) {
  if (!_.has(visited, v)) {
    visited[v] = true;

    if (!postorder) { acc.push(v); }
    _.each(g.neighbors(v), function(w) {
      doDfs(g, w, postorder, visited, acc);
    });
    if (postorder) { acc.push(v); }
  }
}

},{"../lodash":20}],5:[function(require,module,exports){
var dijkstra = require("./dijkstra"),
    _ = require("../lodash");

module.exports = dijkstraAll;

function dijkstraAll(g, weightFunc, edgeFunc) {
  return _.transform(g.nodes(), function(acc, v) {
    acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
  }, {});
}

},{"../lodash":20,"./dijkstra":6}],6:[function(require,module,exports){
var _ = require("../lodash"),
    PriorityQueue = require("../data/priority-queue");

module.exports = dijkstra;

var DEFAULT_WEIGHT_FUNC = _.constant(1);

function dijkstra(g, source, weightFn, edgeFn) {
  return runDijkstra(g, String(source),
                     weightFn || DEFAULT_WEIGHT_FUNC,
                     edgeFn || function(v) { return g.outEdges(v); });
}

function runDijkstra(g, source, weightFn, edgeFn) {
  var results = {},
      pq = new PriorityQueue(),
      v, vEntry;

  var updateNeighbors = function(edge) {
    var w = edge.v !== v ? edge.v : edge.w,
        wEntry = results[w],
        weight = weightFn(edge),
        distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error("dijkstra does not allow negative edge weights. " +
                      "Bad edge: " + edge + " Weight: " + weight);
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function(v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = { distance: distance };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break;
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results;
}

},{"../data/priority-queue":16,"../lodash":20}],7:[function(require,module,exports){
var _ = require("../lodash"),
    tarjan = require("./tarjan");

module.exports = findCycles;

function findCycles(g) {
  return _.filter(tarjan(g), function(cmpt) {
    return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]));
  });
}

},{"../lodash":20,"./tarjan":14}],8:[function(require,module,exports){
var _ = require("../lodash");

module.exports = floydWarshall;

var DEFAULT_WEIGHT_FUNC = _.constant(1);

function floydWarshall(g, weightFn, edgeFn) {
  return runFloydWarshall(g,
                          weightFn || DEFAULT_WEIGHT_FUNC,
                          edgeFn || function(v) { return g.outEdges(v); });
}

function runFloydWarshall(g, weightFn, edgeFn) {
  var results = {},
      nodes = g.nodes();

  nodes.forEach(function(v) {
    results[v] = {};
    results[v][v] = { distance: 0 };
    nodes.forEach(function(w) {
      if (v !== w) {
        results[v][w] = { distance: Number.POSITIVE_INFINITY };
      }
    });
    edgeFn(v).forEach(function(edge) {
      var w = edge.v === v ? edge.w : edge.v,
          d = weightFn(edge);
      results[v][w] = { distance: d, predecessor: v };
    });
  });

  nodes.forEach(function(k) {
    var rowK = results[k];
    nodes.forEach(function(i) {
      var rowI = results[i];
      nodes.forEach(function(j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;
        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });

  return results;
}

},{"../lodash":20}],9:[function(require,module,exports){
module.exports = {
  components: require("./components"),
  dijkstra: require("./dijkstra"),
  dijkstraAll: require("./dijkstra-all"),
  findCycles: require("./find-cycles"),
  floydWarshall: require("./floyd-warshall"),
  isAcyclic: require("./is-acyclic"),
  postorder: require("./postorder"),
  preorder: require("./preorder"),
  prim: require("./prim"),
  tarjan: require("./tarjan"),
  topsort: require("./topsort")
};

},{"./components":3,"./dijkstra":6,"./dijkstra-all":5,"./find-cycles":7,"./floyd-warshall":8,"./is-acyclic":10,"./postorder":11,"./preorder":12,"./prim":13,"./tarjan":14,"./topsort":15}],10:[function(require,module,exports){
var topsort = require("./topsort");

module.exports = isAcyclic;

function isAcyclic(g) {
  try {
    topsort(g);
  } catch (e) {
    if (e instanceof topsort.CycleException) {
      return false;
    }
    throw e;
  }
  return true;
}

},{"./topsort":15}],11:[function(require,module,exports){
var dfs = require("./dfs");

module.exports = postorder;

function postorder(g, vs) {
  return dfs(g, vs, "post");
}

},{"./dfs":4}],12:[function(require,module,exports){
var dfs = require("./dfs");

module.exports = preorder;

function preorder(g, vs) {
  return dfs(g, vs, "pre");
}

},{"./dfs":4}],13:[function(require,module,exports){
var _ = require("../lodash"),
    Graph = require("../graph"),
    PriorityQueue = require("../data/priority-queue");

module.exports = prim;

function prim(g, weightFunc) {
  var result = new Graph(),
      parents = {},
      pq = new PriorityQueue(),
      v;

  function updateNeighbors(edge) {
    var w = edge.v === v ? edge.w : edge.v,
        pri = pq.priority(w);
    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);
      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result;
  }

  _.each(g.nodes(), function(v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  });

  // Start from an arbitrary node
  pq.decrease(g.nodes()[0], 0);

  var init = false;
  while (pq.size() > 0) {
    v = pq.removeMin();
    if (_.has(parents, v)) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error("Input graph is not connected: " + g);
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result;
}

},{"../data/priority-queue":16,"../graph":17,"../lodash":20}],14:[function(require,module,exports){
var _ = require("../lodash");

module.exports = tarjan;

function tarjan(g) {
  var index = 0,
      stack = [],
      visited = {}, // node id -> { onStack, lowlink, index }
      results = [];

  function dfs(v) {
    var entry = visited[v] = {
      onStack: true,
      lowlink: index,
      index: index++
    };
    stack.push(v);

    g.successors(v).forEach(function(w) {
      if (!_.has(visited, w)) {
        dfs(w);
        entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
      } else if (visited[w].onStack) {
        entry.lowlink = Math.min(entry.lowlink, visited[w].index);
      }
    });

    if (entry.lowlink === entry.index) {
      var cmpt = [],
          w;
      do {
        w = stack.pop();
        visited[w].onStack = false;
        cmpt.push(w);
      } while (v !== w);
      results.push(cmpt);
    }
  }

  g.nodes().forEach(function(v) {
    if (!_.has(visited, v)) {
      dfs(v);
    }
  });

  return results;
}

},{"../lodash":20}],15:[function(require,module,exports){
var _ = require("../lodash");

module.exports = topsort;
topsort.CycleException = CycleException;

function topsort(g) {
  var visited = {},
      stack = {},
      results = [];

  function visit(node) {
    if (_.has(stack, node)) {
      throw new CycleException();
    }

    if (!_.has(visited, node)) {
      stack[node] = true;
      visited[node] = true;
      _.each(g.predecessors(node), visit);
      delete stack[node];
      results.push(node);
    }
  }

  _.each(g.sinks(), visit);

  if (_.size(visited) !== g.nodeCount()) {
    throw new CycleException();
  }

  return results;
}

function CycleException() {}

},{"../lodash":20}],16:[function(require,module,exports){
var _ = require("../lodash");

module.exports = PriorityQueue;

/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */
function PriorityQueue() {
  this._arr = [];
  this._keyIndices = {};
}

/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */
PriorityQueue.prototype.size = function() {
  return this._arr.length;
};

/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */
PriorityQueue.prototype.keys = function() {
  return this._arr.map(function(x) { return x.key; });
};

/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */
PriorityQueue.prototype.has = function(key) {
  return _.has(this._keyIndices, key);
};

/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */
PriorityQueue.prototype.priority = function(key) {
  var index = this._keyIndices[key];
  if (index !== undefined) {
    return this._arr[index].priority;
  }
};

/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */
PriorityQueue.prototype.min = function() {
  if (this.size() === 0) {
    throw new Error("Queue underflow");
  }
  return this._arr[0].key;
};

/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */
PriorityQueue.prototype.add = function(key, priority) {
  var keyIndices = this._keyIndices;
  key = String(key);
  if (!_.has(keyIndices, key)) {
    var arr = this._arr;
    var index = arr.length;
    keyIndices[key] = index;
    arr.push({key: key, priority: priority});
    this._decrease(index);
    return true;
  }
  return false;
};

/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */
PriorityQueue.prototype.removeMin = function() {
  this._swap(0, this._arr.length - 1);
  var min = this._arr.pop();
  delete this._keyIndices[min.key];
  this._heapify(0);
  return min.key;
};

/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */
PriorityQueue.prototype.decrease = function(key, priority) {
  var index = this._keyIndices[key];
  if (priority > this._arr[index].priority) {
    throw new Error("New priority is greater than current priority. " +
        "Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
  }
  this._arr[index].priority = priority;
  this._decrease(index);
};

PriorityQueue.prototype._heapify = function(i) {
  var arr = this._arr;
  var l = 2 * i,
      r = l + 1,
      largest = i;
  if (l < arr.length) {
    largest = arr[l].priority < arr[largest].priority ? l : largest;
    if (r < arr.length) {
      largest = arr[r].priority < arr[largest].priority ? r : largest;
    }
    if (largest !== i) {
      this._swap(i, largest);
      this._heapify(largest);
    }
  }
};

PriorityQueue.prototype._decrease = function(index) {
  var arr = this._arr;
  var priority = arr[index].priority;
  var parent;
  while (index !== 0) {
    parent = index >> 1;
    if (arr[parent].priority < priority) {
      break;
    }
    this._swap(index, parent);
    index = parent;
  }
};

PriorityQueue.prototype._swap = function(i, j) {
  var arr = this._arr;
  var keyIndices = this._keyIndices;
  var origArrI = arr[i];
  var origArrJ = arr[j];
  arr[i] = origArrJ;
  arr[j] = origArrI;
  keyIndices[origArrJ.key] = i;
  keyIndices[origArrI.key] = j;
};

},{"../lodash":20}],17:[function(require,module,exports){
"use strict";

var _ = require("./lodash");

module.exports = Graph;

var DEFAULT_EDGE_NAME = "\x00",
    GRAPH_NODE = "\x00",
    EDGE_KEY_DELIM = "\x01";

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

function Graph(opts) {
  this._isDirected = _.has(opts, "directed") ? opts.directed : true;
  this._isMultigraph = _.has(opts, "multigraph") ? opts.multigraph : false;
  this._isCompound = _.has(opts, "compound") ? opts.compound : false;

  // Label for the graph itself
  this._label = undefined;

  // Defaults to be set when creating a new node
  this._defaultNodeLabelFn = _.constant(undefined);

  // Defaults to be set when creating a new edge
  this._defaultEdgeLabelFn = _.constant(undefined);

  // v -> label
  this._nodes = {};

  if (this._isCompound) {
    // v -> parent
    this._parent = {};

    // v -> children
    this._children = {};
    this._children[GRAPH_NODE] = {};
  }

  // v -> edgeObj
  this._in = {};

  // u -> v -> Number
  this._preds = {};

  // v -> edgeObj
  this._out = {};

  // v -> w -> Number
  this._sucs = {};

  // e -> edgeObj
  this._edgeObjs = {};

  // e -> label
  this._edgeLabels = {};
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;


/* === Graph functions ========= */

Graph.prototype.isDirected = function() {
  return this._isDirected;
};

Graph.prototype.isMultigraph = function() {
  return this._isMultigraph;
};

Graph.prototype.isCompound = function() {
  return this._isCompound;
};

Graph.prototype.setGraph = function(label) {
  this._label = label;
  return this;
};

Graph.prototype.graph = function() {
  return this._label;
};


/* === Node functions ========== */

Graph.prototype.setDefaultNodeLabel = function(newDefault) {
  if (!_.isFunction(newDefault)) {
    newDefault = _.constant(newDefault);
  }
  this._defaultNodeLabelFn = newDefault;
  return this;
};

Graph.prototype.nodeCount = function() {
  return this._nodeCount;
};

Graph.prototype.nodes = function() {
  return _.keys(this._nodes);
};

Graph.prototype.sources = function() {
  return _.filter(this.nodes(), function(v) {
    return _.isEmpty(this._in[v]);
  }, this);
};

Graph.prototype.sinks = function() {
  return _.filter(this.nodes(), function(v) {
    return _.isEmpty(this._out[v]);
  }, this);
};

Graph.prototype.setNodes = function(vs, value) {
  var args = arguments;
  _.each(vs, function(v) {
    if (args.length > 1) {
      this.setNode(v, value);
    } else {
      this.setNode(v);
    }
  }, this);
  return this;
};

Graph.prototype.setNode = function(v, value) {
  if (_.has(this._nodes, v)) {
    if (arguments.length > 1) {
      this._nodes[v] = value;
    }
    return this;
  }

  this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
  if (this._isCompound) {
    this._parent[v] = GRAPH_NODE;
    this._children[v] = {};
    this._children[GRAPH_NODE][v] = true;
  }
  this._in[v] = {};
  this._preds[v] = {};
  this._out[v] = {};
  this._sucs[v] = {};
  ++this._nodeCount;
  return this;
};

Graph.prototype.node = function(v) {
  return this._nodes[v];
};

Graph.prototype.hasNode = function(v) {
  return _.has(this._nodes, v);
};

Graph.prototype.removeNode =  function(v) {
  var self = this;
  if (_.has(this._nodes, v)) {
    var removeEdge = function(e) { self.removeEdge(self._edgeObjs[e]); };
    delete this._nodes[v];
    if (this._isCompound) {
      this._removeFromParentsChildList(v);
      delete this._parent[v];
      _.each(this.children(v), function(child) {
        this.setParent(child);
      }, this);
      delete this._children[v];
    }
    _.each(_.keys(this._in[v]), removeEdge);
    delete this._in[v];
    delete this._preds[v];
    _.each(_.keys(this._out[v]), removeEdge);
    delete this._out[v];
    delete this._sucs[v];
    --this._nodeCount;
  }
  return this;
};

Graph.prototype.setParent = function(v, parent) {
  if (!this._isCompound) {
    throw new Error("Cannot set parent in a non-compound graph");
  }

  if (_.isUndefined(parent)) {
    parent = GRAPH_NODE;
  } else {
    // Coerce parent to string
    parent += "";
    for (var ancestor = parent;
         !_.isUndefined(ancestor);
         ancestor = this.parent(ancestor)) {
      if (ancestor === v) {
        throw new Error("Setting " + parent+ " as parent of " + v +
                        " would create create a cycle");
      }
    }

    this.setNode(parent);
  }

  this.setNode(v);
  this._removeFromParentsChildList(v);
  this._parent[v] = parent;
  this._children[parent][v] = true;
  return this;
};

Graph.prototype._removeFromParentsChildList = function(v) {
  delete this._children[this._parent[v]][v];
};

Graph.prototype.parent = function(v) {
  if (this._isCompound) {
    var parent = this._parent[v];
    if (parent !== GRAPH_NODE) {
      return parent;
    }
  }
};

Graph.prototype.children = function(v) {
  if (_.isUndefined(v)) {
    v = GRAPH_NODE;
  }

  if (this._isCompound) {
    var children = this._children[v];
    if (children) {
      return _.keys(children);
    }
  } else if (v === GRAPH_NODE) {
    return this.nodes();
  } else if (this.hasNode(v)) {
    return [];
  }
};

Graph.prototype.predecessors = function(v) {
  var predsV = this._preds[v];
  if (predsV) {
    return _.keys(predsV);
  }
};

Graph.prototype.successors = function(v) {
  var sucsV = this._sucs[v];
  if (sucsV) {
    return _.keys(sucsV);
  }
};

Graph.prototype.neighbors = function(v) {
  var preds = this.predecessors(v);
  if (preds) {
    return _.union(preds, this.successors(v));
  }
};

Graph.prototype.filterNodes = function(filter) {
  var copy = new this.constructor({
    directed: this._isDirected,
    multigraph: this._isMultigraph,
    compound: this._isCompound
  });

  copy.setGraph(this.graph());

  _.each(this._nodes, function(value, v) {
    if (filter(v)) {
      copy.setNode(v, value);
    }
  }, this);

  _.each(this._edgeObjs, function(e) {
    if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
      copy.setEdge(e, this.edge(e));
    }
  }, this);

  var self = this;
  var parents = {};
  function findParent(v) {
    var parent = self.parent(v);
    if (parent === undefined || copy.hasNode(parent)) {
      parents[v] = parent;
      return parent;
    } else if (parent in parents) {
      return parents[parent];
    } else {
      return findParent(parent);
    }
  }

  if (this._isCompound) {
    _.each(copy.nodes(), function(v) {
      copy.setParent(v, findParent(v));
    });
  }

  return copy;
};

/* === Edge functions ========== */

Graph.prototype.setDefaultEdgeLabel = function(newDefault) {
  if (!_.isFunction(newDefault)) {
    newDefault = _.constant(newDefault);
  }
  this._defaultEdgeLabelFn = newDefault;
  return this;
};

Graph.prototype.edgeCount = function() {
  return this._edgeCount;
};

Graph.prototype.edges = function() {
  return _.values(this._edgeObjs);
};

Graph.prototype.setPath = function(vs, value) {
  var self = this,
      args = arguments;
  _.reduce(vs, function(v, w) {
    if (args.length > 1) {
      self.setEdge(v, w, value);
    } else {
      self.setEdge(v, w);
    }
    return w;
  });
  return this;
};

/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */
Graph.prototype.setEdge = function() {
  var v, w, name, value,
      valueSpecified = false,
      arg0 = arguments[0];

  if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
    v = arg0.v;
    w = arg0.w;
    name = arg0.name;
    if (arguments.length === 2) {
      value = arguments[1];
      valueSpecified = true;
    }
  } else {
    v = arg0;
    w = arguments[1];
    name = arguments[3];
    if (arguments.length > 2) {
      value = arguments[2];
      valueSpecified = true;
    }
  }

  v = "" + v;
  w = "" + w;
  if (!_.isUndefined(name)) {
    name = "" + name;
  }

  var e = edgeArgsToId(this._isDirected, v, w, name);
  if (_.has(this._edgeLabels, e)) {
    if (valueSpecified) {
      this._edgeLabels[e] = value;
    }
    return this;
  }

  if (!_.isUndefined(name) && !this._isMultigraph) {
    throw new Error("Cannot set a named edge when isMultigraph = false");
  }

  // It didn't exist, so we need to create it.
  // First ensure the nodes exist.
  this.setNode(v);
  this.setNode(w);

  this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

  var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
  // Ensure we add undirected edges in a consistent way.
  v = edgeObj.v;
  w = edgeObj.w;

  Object.freeze(edgeObj);
  this._edgeObjs[e] = edgeObj;
  incrementOrInitEntry(this._preds[w], v);
  incrementOrInitEntry(this._sucs[v], w);
  this._in[w][e] = edgeObj;
  this._out[v][e] = edgeObj;
  this._edgeCount++;
  return this;
};

Graph.prototype.edge = function(v, w, name) {
  var e = (arguments.length === 1
            ? edgeObjToId(this._isDirected, arguments[0])
            : edgeArgsToId(this._isDirected, v, w, name));
  return this._edgeLabels[e];
};

Graph.prototype.hasEdge = function(v, w, name) {
  var e = (arguments.length === 1
            ? edgeObjToId(this._isDirected, arguments[0])
            : edgeArgsToId(this._isDirected, v, w, name));
  return _.has(this._edgeLabels, e);
};

Graph.prototype.removeEdge = function(v, w, name) {
  var e = (arguments.length === 1
            ? edgeObjToId(this._isDirected, arguments[0])
            : edgeArgsToId(this._isDirected, v, w, name)),
      edge = this._edgeObjs[e];
  if (edge) {
    v = edge.v;
    w = edge.w;
    delete this._edgeLabels[e];
    delete this._edgeObjs[e];
    decrementOrRemoveEntry(this._preds[w], v);
    decrementOrRemoveEntry(this._sucs[v], w);
    delete this._in[w][e];
    delete this._out[v][e];
    this._edgeCount--;
  }
  return this;
};

Graph.prototype.inEdges = function(v, u) {
  var inV = this._in[v];
  if (inV) {
    var edges = _.values(inV);
    if (!u) {
      return edges;
    }
    return _.filter(edges, function(edge) { return edge.v === u; });
  }
};

Graph.prototype.outEdges = function(v, w) {
  var outV = this._out[v];
  if (outV) {
    var edges = _.values(outV);
    if (!w) {
      return edges;
    }
    return _.filter(edges, function(edge) { return edge.w === w; });
  }
};

Graph.prototype.nodeEdges = function(v, w) {
  var inEdges = this.inEdges(v, w);
  if (inEdges) {
    return inEdges.concat(this.outEdges(v, w));
  }
};

function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry(map, k) {
  if (!--map[k]) { delete map[k]; }
}

function edgeArgsToId(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM +
             (_.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}

function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj =  { v: v, w: w };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}

function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}

},{"./lodash":20}],18:[function(require,module,exports){
// Includes only the "core" of graphlib
module.exports = {
  Graph: require("./graph"),
  version: require("./version")
};

},{"./graph":17,"./version":21}],19:[function(require,module,exports){
var _ = require("./lodash"),
    Graph = require("./graph");

module.exports = {
  write: write,
  read: read
};

function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!_.isUndefined(g.graph())) {
    json.value = _.clone(g.graph());
  }
  return json;
}

function writeNodes(g) {
  return _.map(g.nodes(), function(v) {
    var nodeValue = g.node(v),
        parent = g.parent(v),
        node = { v: v };
    if (!_.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!_.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return _.map(g.edges(), function(e) {
    var edgeValue = g.edge(e),
        edge = { v: e.v, w: e.w };
    if (!_.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!_.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new Graph(json.options).setGraph(json.value);
  _.each(json.nodes, function(entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  _.each(json.edges, function(entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}

},{"./graph":17,"./lodash":20}],20:[function(require,module,exports){
/* global window */

var lodash;

if (typeof require === "function") {
  try {
    lodash = require("lodash");
  } catch (e) {}
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;

},{"lodash":undefined}],21:[function(require,module,exports){
module.exports = '1.0.7';

},{}]},{},[1]);

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.dagre=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

module.exports = {
  graphlib: require("./lib/graphlib"),

  layout: require("./lib/layout"),
  debug: require("./lib/debug"),
  util: {
    time: require("./lib/util").time,
    notime: require("./lib/util").notime
  },
  version: require("./lib/version")
};

},{"./lib/debug":6,"./lib/graphlib":7,"./lib/layout":9,"./lib/util":29,"./lib/version":30}],2:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    greedyFAS = require("./greedy-fas");

module.exports = {
  run: run,
  undo: undo
};

function run(g) {
  var fas = (g.graph().acyclicer === "greedy"
                ? greedyFAS(g, weightFn(g))
                : dfsFAS(g));
  _.each(fas, function(e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, _.uniqueId("rev"));
  });

  function weightFn(g) {
    return function(e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [],
      stack = {},
      visited = {};

  function dfs(v) {
    if (_.has(visited, v)) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    _.each(g.outEdges(v), function(e) {
      if (_.has(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  _.each(g.nodes(), dfs);
  return fas;
}

function undo(g) {
  _.each(g.edges(), function(e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}

},{"./greedy-fas":8,"./lodash":10}],3:[function(require,module,exports){
var _ = require("./lodash"),
    util = require("./util");

module.exports = addBorderSegments;

function addBorderSegments(g) {
  function dfs(v) {
    var children = g.children(v),
        node = g.node(v);
    if (children.length) {
      _.each(children, dfs);
    }

    if (_.has(node, "minRank")) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1;
           rank < maxRank;
           ++rank) {
        addBorderNode(g, "borderLeft", "_bl", v, node, rank);
        addBorderNode(g, "borderRight", "_br", v, node, rank);
      }
    }
  }

  _.each(g.children(), dfs);
}

function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop },
      prev = sgNode[prop][rank - 1],
      curr = util.addDummyNode(g, "border", label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}

},{"./lodash":10,"./util":29}],4:[function(require,module,exports){
"use strict";

var _ = require("./lodash");

module.exports = {
  adjust: adjust,
  undo: undo
};

function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "lr" || rankDir === "rl") {
    swapWidthHeight(g);
  }
}

function undo(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "bt" || rankDir === "rl") {
    reverseY(g);
  }

  if (rankDir === "lr" || rankDir === "rl") {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  _.each(g.nodes(), function(v) { swapWidthHeightOne(g.node(v)); });
  _.each(g.edges(), function(e) { swapWidthHeightOne(g.edge(e)); });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  _.each(g.nodes(), function(v) { reverseYOne(g.node(v)); });

  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    _.each(edge.points, reverseYOne);
    if (_.has(edge, "y")) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  _.each(g.nodes(), function(v) { swapXYOne(g.node(v)); });

  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    _.each(edge.points, swapXYOne);
    if (_.has(edge, "x")) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}

},{"./lodash":10}],5:[function(require,module,exports){
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */

module.exports = List;

function List() {
  var sentinel = {};
  sentinel._next = sentinel._prev = sentinel;
  this._sentinel = sentinel;
}

List.prototype.dequeue = function() {
  var sentinel = this._sentinel,
      entry = sentinel._prev;
  if (entry !== sentinel) {
    unlink(entry);
    return entry;
  }
};

List.prototype.enqueue = function(entry) {
  var sentinel = this._sentinel;
  if (entry._prev && entry._next) {
    unlink(entry);
  }
  entry._next = sentinel._next;
  sentinel._next._prev = entry;
  sentinel._next = entry;
  entry._prev = sentinel;
};

List.prototype.toString = function() {
  var strs = [],
      sentinel = this._sentinel,
      curr = sentinel._prev;
  while (curr !== sentinel) {
    strs.push(JSON.stringify(curr, filterOutLinks));
    curr = curr._prev;
  }
  return "[" + strs.join(", ") + "]";
};

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== "_next" && k !== "_prev") {
    return v;
  }
}

},{}],6:[function(require,module,exports){
var _ = require("./lodash"),
    util = require("./util"),
    Graph = require("./graphlib").Graph;

module.exports = {
  debugOrdering: debugOrdering
};

/* istanbul ignore next */
function debugOrdering(g) {
  var layerMatrix = util.buildLayerMatrix(g);

  var h = new Graph({ compound: true, multigraph: true }).setGraph({});

  _.each(g.nodes(), function(v) {
    h.setNode(v, { label: v });
    h.setParent(v, "layer" + g.node(v).rank);
  });

  _.each(g.edges(), function(e) {
    h.setEdge(e.v, e.w, {}, e.name);
  });

  _.each(layerMatrix, function(layer, i) {
    var layerV = "layer" + i;
    h.setNode(layerV, { rank: "same" });
    _.reduce(layer, function(u, v) {
      h.setEdge(u, v, { style: "invis" });
      return v;
    });
  });

  return h;
}

},{"./graphlib":7,"./lodash":10,"./util":29}],7:[function(require,module,exports){
/* global window */

var graphlib;

if (typeof require === "function") {
  try {
    graphlib = require("graphlib");
  } catch (e) {}
}

if (!graphlib) {
  graphlib = window.graphlib;
}

module.exports = graphlib;

},{"graphlib":undefined}],8:[function(require,module,exports){
var _ = require("./lodash"),
    Graph = require("./graphlib").Graph,
    List = require("./data/list");

/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */
module.exports = greedyFAS;

var DEFAULT_WEIGHT_FN = _.constant(1);

function greedyFAS(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return _.flatten(_.map(results, function(e) {
    return g.outEdges(e.v, e.w);
  }), true);
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [],
      sources = buckets[buckets.length - 1],
      sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while ((entry = sinks.dequeue()))   { removeNode(g, buckets, zeroIdx, entry); }
    while ((entry = sources.dequeue())) { removeNode(g, buckets, zeroIdx, entry); }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  _.each(g.inEdges(entry.v), function(edge) {
    var weight = g.edge(edge),
        uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  _.each(g.outEdges(entry.v), function(edge) {
    var weight = g.edge(edge),
        w = edge.w,
        wEntry = g.node(w);
    wEntry["in"] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new Graph(),
      maxIn = 0,
      maxOut = 0;

  _.each(g.nodes(), function(v) {
    fasGraph.setNode(v, { v: v, "in": 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  _.each(g.edges(), function(e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0,
        weight = weightFn(e),
        edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
    maxIn  = Math.max(maxIn,  fasGraph.node(e.w)["in"]  += weight);
  });

  var buckets = _.range(maxOut + maxIn + 3).map(function() { return new List(); });
  var zeroIdx = maxIn + 1;

  _.each(fasGraph.nodes(), function(v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry["in"]) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
  }
}

},{"./data/list":5,"./graphlib":7,"./lodash":10}],9:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    acyclic = require("./acyclic"),
    normalize = require("./normalize"),
    rank = require("./rank"),
    normalizeRanks = require("./util").normalizeRanks,
    parentDummyChains = require("./parent-dummy-chains"),
    removeEmptyRanks = require("./util").removeEmptyRanks,
    nestingGraph = require("./nesting-graph"),
    addBorderSegments = require("./add-border-segments"),
    coordinateSystem = require("./coordinate-system"),
    order = require("./order"),
    position = require("./position"),
    util = require("./util"),
    Graph = require("./graphlib").Graph;

module.exports = layout;

function layout(g, opts) {
  var time = opts && opts.debugTiming ? util.time : util.notime;
  time("layout", function() {
    var layoutGraph = time("  buildLayoutGraph",
                               function() { return buildLayoutGraph(g); });
    time("  runLayout",        function() { runLayout(layoutGraph, time); });
    time("  updateInputGraph", function() { updateInputGraph(g, layoutGraph); });
  });
}

function runLayout(g, time) {
  time("    makeSpaceForEdgeLabels", function() { makeSpaceForEdgeLabels(g); });
  time("    removeSelfEdges",        function() { removeSelfEdges(g); });
  time("    acyclic",                function() { acyclic.run(g); });
  time("    nestingGraph.run",       function() { nestingGraph.run(g); });
  time("    rank",                   function() { rank(util.asNonCompoundGraph(g)); });
  time("    injectEdgeLabelProxies", function() { injectEdgeLabelProxies(g); });
  time("    removeEmptyRanks",       function() { removeEmptyRanks(g); });
  time("    nestingGraph.cleanup",   function() { nestingGraph.cleanup(g); });
  time("    normalizeRanks",         function() { normalizeRanks(g); });
  time("    assignRankMinMax",       function() { assignRankMinMax(g); });
  time("    removeEdgeLabelProxies", function() { removeEdgeLabelProxies(g); });
  time("    normalize.run",          function() { normalize.run(g); });
  time("    parentDummyChains",      function() { parentDummyChains(g); });
  time("    addBorderSegments",      function() { addBorderSegments(g); });
  time("    order",                  function() { order(g); });
  time("    insertSelfEdges",        function() { insertSelfEdges(g); });
  time("    adjustCoordinateSystem", function() { coordinateSystem.adjust(g); });
  time("    position",               function() { position(g); });
  time("    positionSelfEdges",      function() { positionSelfEdges(g); });
  time("    removeBorderNodes",      function() { removeBorderNodes(g); });
  time("    normalize.undo",         function() { normalize.undo(g); });
  time("    fixupEdgeLabelCoords",   function() { fixupEdgeLabelCoords(g); });
  time("    undoCoordinateSystem",   function() { coordinateSystem.undo(g); });
  time("    translateGraph",         function() { translateGraph(g); });
  time("    assignNodeIntersects",   function() { assignNodeIntersects(g); });
  time("    reversePoints",          function() { reversePointsForReversedEdges(g); });
  time("    acyclic.undo",           function() { acyclic.undo(g); });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  _.each(inputGraph.nodes(), function(v) {
    var inputLabel = inputGraph.node(v),
        layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  _.each(inputGraph.edges(), function(e) {
    var inputLabel = inputGraph.edge(e),
        layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (_.has(layoutLabel, "x")) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
    graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" },
    graphAttrs = ["acyclicer", "ranker", "rankdir", "align"],
    nodeNumAttrs = ["width", "height"],
    nodeDefaults = { width: 0, height: 0 },
    edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"],
    edgeDefaults = {
      minlen: 1, weight: 1, width: 0, height: 0,
      labeloffset: 10, labelpos: "r"
    },
    edgeAttrs = ["labelpos"];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new Graph({ multigraph: true, compound: true }),
      graph = canonicalize(inputGraph.graph());

  g.setGraph(_.merge({},
    graphDefaults,
    selectNumberAttrs(graph, graphNumAttrs),
    _.pick(graph, graphAttrs)));

  _.each(inputGraph.nodes(), function(v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, _.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  _.each(inputGraph.edges(), function(e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(e, _.merge({},
      edgeDefaults,
      selectNumberAttrs(edge, edgeNumAttrs),
      _.pick(edge, edgeAttrs)));
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph = g.graph();
  graph.ranksep /= 2;
  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== "c") {
      if (graph.rankdir === "TB" || graph.rankdir === "BT") {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v),
          w = g.node(e.w),
          label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      util.addDummyNode(g, "edge-proxy", label, "_ep");
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  _.each(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      maxRank = _.max(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  _.each(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.dummy === "edge-proxy") {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY,
      maxX = 0,
      minY = Number.POSITIVE_INFINITY,
      maxY = 0,
      graphLabel = g.graph(),
      marginX = graphLabel.marginx || 0,
      marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x,
        y = attrs.y,
        w = attrs.width,
        h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  _.each(g.nodes(), function(v) { getExtremes(g.node(v)); });
  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    if (_.has(edge, "x")) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  _.each(g.nodes(), function(v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    _.each(edge.points, function(p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (_.has(edge, "x")) { edge.x -= minX; }
    if (_.has(edge, "y")) { edge.y -= minY; }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  _.each(g.edges(), function(e) {
    var edge = g.edge(e),
        nodeV = g.node(e.v),
        nodeW = g.node(e.w),
        p1, p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(util.intersectRect(nodeV, p1));
    edge.points.push(util.intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    if (_.has(edge, "x")) {
      if (edge.labelpos === "l" || edge.labelpos === "r") {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
        case "l": edge.x -= edge.width / 2 + edge.labeloffset; break;
        case "r": edge.x += edge.width / 2 + edge.labeloffset; break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  _.each(g.nodes(), function(v) {
    if (g.children(v).length) {
      var node = g.node(v),
          t = g.node(node.borderTop),
          b = g.node(node.borderBottom),
          l = g.node(_.last(node.borderLeft)),
          r = g.node(_.last(node.borderRight));

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  _.each(g.nodes(), function(v) {
    if (g.node(v).dummy === "border") {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  _.each(g.edges(), function(e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = util.buildLayerMatrix(g);
  _.each(layers, function(layer) {
    var orderShift = 0;
    _.each(layer, function(v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      _.each(node.selfEdges, function(selfEdge) {
        util.addDummyNode(g, "selfedge", {
          width: selfEdge.label.width,
          height: selfEdge.label.height,
          rank: node.rank,
          order: i + (++orderShift),
          e: selfEdge.e,
          label: selfEdge.label
        }, "_se");
      });
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  _.each(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.dummy === "selfedge") {
      var selfNode = g.node(node.e.v),
          x = selfNode.x + selfNode.width / 2,
          y = selfNode.y,
          dx = node.x - x,
          dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [
        { x: x + 2 * dx / 3, y: y - dy },
        { x: x + 5 * dx / 6, y: y - dy },
        { x: x +     dx    , y: y },
        { x: x + 5 * dx / 6, y: y + dy },
        { x: x + 2 * dx / 3, y: y + dy },
      ];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return _.mapValues(_.pick(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  _.each(attrs, function(v, k) {
    newAttrs[k.toLowerCase()] = v;
  });
  return newAttrs;
}

},{"./acyclic":2,"./add-border-segments":3,"./coordinate-system":4,"./graphlib":7,"./lodash":10,"./nesting-graph":11,"./normalize":12,"./order":17,"./parent-dummy-chains":22,"./position":24,"./rank":26,"./util":29}],10:[function(require,module,exports){
/* global window */

var lodash;

if (typeof require === "function") {
  try {
    lodash = require("lodash");
  } catch (e) {}
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;

},{"lodash":undefined}],11:[function(require,module,exports){
var _ = require("./lodash"),
    util = require("./util");

module.exports = {
  run: run,
  cleanup: cleanup
};

/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function run(g) {
  var root = util.addDummyNode(g, "root", {}, "_root"),
      depths = treeDepths(g),
      height = _.max(depths) - 1,
      nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  _.each(g.edges(), function(e) { g.edge(e).minlen *= nodeSep; });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  _.each(g.children(), function(child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = util.addBorderNode(g, "_bt"),
      bottom = util.addBorderNode(g, "_bb"),
      label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  _.each(children, function(child) {
    dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child),
        childTop = childNode.borderTop ? childNode.borderTop : child,
        childBottom = childNode.borderBottom ? childNode.borderBottom : child,
        thisWeight = childNode.borderTop ? weight : 2 * weight,
        minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      _.each(children, function(child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  _.each(g.children(), function(v) { dfs(v, 1); });
  return depths;
}

function sumWeights(g) {
  return _.reduce(g.edges(), function(acc, e) {
    return acc + g.edge(e).weight;
  }, 0);
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  _.each(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}

},{"./lodash":10,"./util":29}],12:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    util = require("./util");

module.exports = {
  run: run,
  undo: undo
};

/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function run(g) {
  g.graph().dummyChains = [];
  _.each(g.edges(), function(edge) { normalizeEdge(g, edge); });
}

function normalizeEdge(g, e) {
  var v = e.v,
      vRank = g.node(v).rank,
      w = e.w,
      wRank = g.node(w).rank,
      name = e.name,
      edgeLabel = g.edge(e),
      labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0, height: 0,
      edgeLabel: edgeLabel, edgeObj: e,
      rank: vRank
    };
    dummy = util.addDummyNode(g, "edge", attrs, "_d");
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      attrs.dummy = "edge-label";
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function undo(g) {
  _.each(g.graph().dummyChains, function(v) {
    var node = g.node(v),
        origLabel = node.edgeLabel,
        w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === "edge-label") {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}

},{"./lodash":10,"./util":29}],13:[function(require,module,exports){
var _ = require("../lodash");

module.exports = addSubgraphConstraints;

function addSubgraphConstraints(g, cg, vs) {
  var prev = {},
      rootPrev;

  _.each(vs, function(v) {
    var child = g.parent(v),
        parent,
        prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });

  /*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}

},{"../lodash":10}],14:[function(require,module,exports){
var _ = require("../lodash");

module.exports = barycenter;

function barycenter(g, movable) {
  return _.map(movable, function(v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = _.reduce(inV, function(acc, e) {
        var edge = g.edge(e),
            nodeU = g.node(e.v);
        return {
          sum: acc.sum + (edge.weight * nodeU.order),
          weight: acc.weight + edge.weight
        };
      }, { sum: 0, weight: 0 });

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight
      };
    }
  });
}


},{"../lodash":10}],15:[function(require,module,exports){
var _ = require("../lodash"),
    Graph = require("../graphlib").Graph;

module.exports = buildLayerGraph;

/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph(g, rank, relationship) {
  var root = createRootNode(g),
      result = new Graph({ compound: true }).setGraph({ root: root })
                  .setDefaultNodeLabel(function(v) { return g.node(v); });

  _.each(g.nodes(), function(v) {
    var node = g.node(v),
        parent = g.parent(v);

    if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      _.each(g[relationship](v), function(e) {
        var u = e.v === v ? e.w : e.v,
            edge = result.edge(u, v),
            weight = !_.isUndefined(edge) ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if (_.has(node, "minRank")) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank]
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode((v = _.uniqueId("_root"))));
  return v;
}

},{"../graphlib":7,"../lodash":10}],16:[function(require,module,exports){
"use strict";

var _ = require("../lodash");

module.exports = crossCount;

/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i-1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = _.zipObject(southLayer,
                             _.map(southLayer, function (v, i) { return i; }));
  var southEntries = _.flatten(_.map(northLayer, function(v) {
    return _.chain(g.outEdges(v))
            .map(function(e) {
              return { pos: southPos[e.w], weight: g.edge(e).weight };
            })
            .sortBy("pos")
            .value();
  }), true);

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) firstIndex <<= 1;
  var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = _.map(new Array(treeSize), function() { return 0; });

  // Calculate the weighted crossings
  var cc = 0;
  _.each(southEntries.forEach(function(entry) {
    var index = entry.pos + firstIndex;
    tree[index] += entry.weight;
    var weightSum = 0;
    while (index > 0) {
      if (index % 2) {
        weightSum += tree[index + 1];
      }
      index = (index - 1) >> 1;
      tree[index] += entry.weight;
    }
    cc += entry.weight * weightSum;
  }));

  return cc;
}

},{"../lodash":10}],17:[function(require,module,exports){
"use strict";

var _ = require("../lodash"),
    initOrder = require("./init-order"),
    crossCount = require("./cross-count"),
    sortSubgraph = require("./sort-subgraph"),
    buildLayerGraph = require("./build-layer-graph"),
    addSubgraphConstraints = require("./add-subgraph-constraints"),
    Graph = require("../graphlib").Graph,
    util = require("../util");

module.exports = order;

/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order(g) {
  var maxRank = util.maxRank(g),
      downLayerGraphs = buildLayerGraphs(g, _.range(1, maxRank + 1), "inEdges"),
      upLayerGraphs = buildLayerGraphs(g, _.range(maxRank - 1, -1, -1), "outEdges");

  var layering = initOrder(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
      best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = util.buildLayerMatrix(g);
    var cc = crossCount(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = _.cloneDeep(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return _.map(ranks, function(rank) {
    return buildLayerGraph(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new Graph();
  _.each(layerGraphs, function(lg) {
    var root = lg.graph().root;
    var sorted = sortSubgraph(lg, root, cg, biasRight);
    _.each(sorted.vs, function(v, i) {
      lg.node(v).order = i;
    });
    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  _.each(layering, function(layer) {
    _.each(layer, function(v, i) {
      g.node(v).order = i;
    });
  });
}

},{"../graphlib":7,"../lodash":10,"../util":29,"./add-subgraph-constraints":13,"./build-layer-graph":15,"./cross-count":16,"./init-order":18,"./sort-subgraph":20}],18:[function(require,module,exports){
"use strict";

var _ = require("../lodash");

module.exports = initOrder;

/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder(g) {
  var visited = {},
      simpleNodes = _.filter(g.nodes(), function(v) {
        return !g.children(v).length;
      }),
      maxRank = _.max(_.map(simpleNodes, function(v) { return g.node(v).rank; })),
      layers = _.map(_.range(maxRank + 1), function() { return []; });

  function dfs(v) {
    if (_.has(visited, v)) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    _.each(g.successors(v), dfs);
  }

  var orderedVs = _.sortBy(simpleNodes, function(v) { return g.node(v).rank; });
  _.each(orderedVs, dfs);

  return layers;
}

},{"../lodash":10}],19:[function(require,module,exports){
"use strict";

var _ = require("../lodash");

module.exports = resolveConflicts;

/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts(entries, cg) {
  var mappedEntries = {};
  _.each(entries, function(entry, i) {
    var tmp = mappedEntries[entry.v] = {
      indegree: 0,
      "in": [],
      out: [],
      vs: [entry.v],
      i: i
    };
    if (!_.isUndefined(entry.barycenter)) {
      tmp.barycenter = entry.barycenter;
      tmp.weight = entry.weight;
    }
  });

  _.each(cg.edges(), function(e) {
    var entryV = mappedEntries[e.v],
        entryW = mappedEntries[e.w];
    if (!_.isUndefined(entryV) && !_.isUndefined(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = _.filter(mappedEntries, function(entry) {
    return !entry.indegree;
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function(uEntry) {
      if (uEntry.merged) {
        return;
      }
      if (_.isUndefined(uEntry.barycenter) ||
          _.isUndefined(vEntry.barycenter) ||
          uEntry.barycenter >= vEntry.barycenter) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function(wEntry) {
      wEntry["in"].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    _.each(entry["in"].reverse(), handleIn(entry));
    _.each(entry.out, handleOut(entry));
  }

  return _.chain(entries)
          .filter(function(entry) { return !entry.merged; })
          .map(function(entry) {
            return _.pick(entry, ["vs", "i", "barycenter", "weight"]);
          })
          .value();
}

function mergeEntries(target, source) {
  var sum = 0,
      weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}

},{"../lodash":10}],20:[function(require,module,exports){
var _ = require("../lodash"),
    barycenter = require("./barycenter"),
    resolveConflicts = require("./resolve-conflicts"),
    sort = require("./sort");

module.exports = sortSubgraph;

function sortSubgraph(g, v, cg, biasRight) {
  var movable = g.children(v),
      node = g.node(v),
      bl = node ? node.borderLeft : undefined,
      br = node ? node.borderRight: undefined,
      subgraphs = {};

  if (bl) {
    movable = _.filter(movable, function(w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  _.each(barycenters, function(entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (_.has(subgraphResult, "barycenter")) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = sort(entries, biasRight);

  if (bl) {
    result.vs = _.flatten([bl, result.vs, br], true);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
          brPred = g.node(g.predecessors(br)[0]);
      if (!_.has(result, "barycenter")) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter = (result.barycenter * result.weight +
                           blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  _.each(entries, function(entry) {
    entry.vs = _.flatten(entry.vs.map(function(v) {
      if (subgraphs[v]) {
        return subgraphs[v].vs;
      }
      return v;
    }), true);
  });
}

function mergeBarycenters(target, other) {
  if (!_.isUndefined(target.barycenter)) {
    target.barycenter = (target.barycenter * target.weight +
                         other.barycenter * other.weight) /
                        (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}

},{"../lodash":10,"./barycenter":14,"./resolve-conflicts":19,"./sort":21}],21:[function(require,module,exports){
var _ = require("../lodash"),
    util = require("../util");

module.exports = sort;

function sort(entries, biasRight) {
  var parts = util.partition(entries, function(entry) {
    return _.has(entry, "barycenter");
  });
  var sortable = parts.lhs,
      unsortable = _.sortBy(parts.rhs, function(entry) { return -entry.i; }),
      vs = [],
      sum = 0,
      weight = 0,
      vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  _.each(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: _.flatten(vs, true) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last;
  while (unsortable.length && (last = _.last(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function(entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}

},{"../lodash":10,"../util":29}],22:[function(require,module,exports){
var _ = require("./lodash");

module.exports = parentDummyChains;

function parentDummyChains(g) {
  var postorderNums = postorder(g);

  _.each(g.graph().dummyChains, function(v) {
    var node = g.node(v),
        edgeObj = node.edgeObj,
        pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w),
        path = pathData.path,
        lca = pathData.lca,
        pathIdx = 0,
        pathV = path[pathIdx],
        ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca &&
               g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (pathIdx < path.length - 1 &&
               g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [],
      wPath = [],
      low = Math.min(postorderNums[v].low, postorderNums[w].low),
      lim = Math.max(postorderNums[v].lim, postorderNums[w].lim),
      parent,
      lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent &&
           (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function postorder(g) {
  var result = {},
      lim = 0;

  function dfs(v) {
    var low = lim;
    _.each(g.children(v), dfs);
    result[v] = { low: low, lim: lim++ };
  }
  _.each(g.children(), dfs);

  return result;
}

},{"./lodash":10}],23:[function(require,module,exports){
"use strict";

var _ = require("../lodash"),
    Graph = require("../graphlib").Graph,
    util = require("../util");

/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */

module.exports = {
  positionX: positionX,
  findType1Conflicts: findType1Conflicts,
  findType2Conflicts: findType2Conflicts,
  addConflict: addConflict,
  hasConflict: hasConflict,
  verticalAlignment: verticalAlignment,
  horizontalCompaction: horizontalCompaction,
  alignCoordinates: alignCoordinates,
  findSmallestWidthAlignment: findSmallestWidthAlignment,
  balance: balance
};

/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var
      // last visited node in the previous layer that is incident on an inner
      // segment.
      k0 = 0,
      // Tracks the last node in this layer scanned for crossings with a type-1
      // segment.
      scanPos = 0,
      prevLayerLength = prevLayer.length,
      lastNode = _.last(layer);

    _.each(layer, function(v, i) {
      var w = findOtherInnerSegmentNode(g, v),
          k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        _.each(layer.slice(scanPos, i +1), function(scanNode) {
          _.each(g.predecessors(scanNode), function(u) {
            var uLabel = g.node(u),
                uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) &&
                !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  _.reduce(layering, visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    _.each(_.range(southPos, southEnd), function(i) {
      v = south[i];
      if (g.node(v).dummy) {
        _.each(g.predecessors(v), function(u) {
          var uNode = g.node(u);
          if (uNode.dummy &&
              (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }


  function visitLayer(north, south) {
    var prevNorthPos = -1,
        nextNorthPos,
        southPos = 0;

    _.each(south, function(v, southLookahead) {
      if (g.node(v).dummy === "border") {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  _.reduce(layering, visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    return _.find(g.predecessors(v), function(u) {
      return g.node(u).dummy;
    });
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return _.has(conflicts[v], w);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
      align = {},
      pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  _.each(layering, function(layer) {
    _.each(layer, function(v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  _.each(layering, function(layer) {
    var prevIdx = -1;
    _.each(layer, function(v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws = _.sortBy(ws, function(w) { return pos[w]; });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v &&
              prevIdx < pos[w] &&
              !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
      blockG = buildBlockGraph(g, layering, root, reverseSep);

  // First pass, assign smallest coordinates via DFS
  var visited = {};
  function pass1(v) {
    if (!_.has(visited, v)) {
      visited[v] = true;
      xs[v] = _.reduce(blockG.inEdges(v), function(max, e) {
        pass1(e.v);
        return Math.max(max, xs[e.v] + blockG.edge(e));
      }, 0);
    }
  }
  _.each(blockG.nodes(), pass1);

  var borderType = reverseSep ? "borderLeft" : "borderRight";
  function pass2(v) {
    if (visited[v] !== 2) {
      visited[v]++;
      var node = g.node(v);
      var min = _.reduce(blockG.outEdges(v), function(min, e) {
        pass2(e.w);
        return Math.min(min, xs[e.w] - blockG.edge(e));
      }, Number.POSITIVE_INFINITY);
      if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
        xs[v] = Math.max(xs[v], min);
      }
    }
  }
  _.each(blockG.nodes(), pass2);

  // Assign x coordinates to all nodes
  _.each(align, function(v) {
    xs[v] = xs[root[v]];
  });

  return xs;
}


function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new Graph(),
      graphLabel = g.graph(),
      sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  _.each(layering, function(layer) {
    var u;
    _.each(layer, function(v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
            prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {
  return _.min(xss, function(xs) {
    var min = _.min(xs, function(x, v) { return x - width(g, v) / 2; }),
        max = _.max(xs, function(x, v) { return x + width(g, v) / 2; });
    return max - min;
  });
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToMin = _.min(alignTo),
      alignToMax = _.max(alignTo);

  _.each(["u", "d"], function(vert) {
    _.each(["l", "r"], function(horiz) {
      var alignment = vert + horiz,
          xs = xss[alignment],
          delta;
      if (xs === alignTo) return;

      delta = horiz === "l" ? alignToMin - _.min(xs) : alignToMax - _.max(xs);

      if (delta) {
        xss[alignment] = _.mapValues(xs, function(x) { return x + delta; });
      }
    });
  });
}

function balance(xss, align) {
  return _.mapValues(xss.ul, function(ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = _.sortBy(_.pluck(xss, v));
      return (xs[1] + xs[2]) / 2;
    }
  });
}

function positionX(g) {
  var layering = util.buildLayerMatrix(g),
      conflicts = _.merge(findType1Conflicts(g, layering),
                          findType2Conflicts(g, layering));

  var xss = {},
      adjustedLayering;
  _.each(["u", "d"], function(vert) {
    adjustedLayering = vert === "u" ? layering : _.values(layering).reverse();
    _.each(["l", "r"], function(horiz) {
      if (horiz === "r") {
        adjustedLayering = _.map(adjustedLayering, function(inner) {
          return _.values(inner).reverse();
        });
      }

      var neighborFn = _.bind(vert === "u" ? g.predecessors : g.successors, g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering,
                                    align.root, align.align,
                                    horiz === "r");
      if (horiz === "r") {
        xs = _.mapValues(xs, function(x) { return -x; });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function(g, v, w) {
    var vLabel = g.node(v),
        wLabel = g.node(w),
        sum = 0,
        delta;

    sum += vLabel.width / 2;
    if (_.has(vLabel, "labelpos")) {
      switch (vLabel.labelpos.toLowerCase()) {
        case "l": delta = -vLabel.width / 2; break;
        case "r": delta = vLabel.width / 2; break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (_.has(wLabel, "labelpos")) {
      switch (wLabel.labelpos.toLowerCase()) {
        case "l": delta = wLabel.width / 2; break;
        case "r": delta = -wLabel.width / 2; break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}

},{"../graphlib":7,"../lodash":10,"../util":29}],24:[function(require,module,exports){
"use strict";

var _ = require("../lodash"),
    util = require("../util"),
    positionX = require("./bk").positionX;

module.exports = position;

function position(g) {
  g = util.asNonCompoundGraph(g);

  positionY(g);
  _.each(positionX(g), function(x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = util.buildLayerMatrix(g),
      rankSep = g.graph().ranksep,
      prevY = 0;
  _.each(layering, function(layer) {
    var maxHeight = _.max(_.map(layer, function(v) { return g.node(v).height; }));
    _.each(layer, function(v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}


},{"../lodash":10,"../util":29,"./bk":23}],25:[function(require,module,exports){
"use strict";

var _ = require("../lodash"),
    Graph = require("../graphlib").Graph,
    slack = require("./util").slack;

module.exports = feasibleTree;

/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree(g) {
  var t = new Graph({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0],
      size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    _.each(g.nodeEdges(v), function(e) {
      var edgeV = e.v,
          w = (v === edgeV) ? e.w : edgeV;
      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  _.each(t.nodes(), dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  return _.min(g.edges(), function(e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e);
    }
  });
}

function shiftRanks(t, g, delta) {
  _.each(t.nodes(), function(v) {
    g.node(v).rank += delta;
  });
}

},{"../graphlib":7,"../lodash":10,"./util":28}],26:[function(require,module,exports){
"use strict";

var rankUtil = require("./util"),
    longestPath = rankUtil.longestPath,
    feasibleTree = require("./feasible-tree"),
    networkSimplex = require("./network-simplex");

module.exports = rank;

/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank(g) {
  switch(g.graph().ranker) {
    case "network-simplex": networkSimplexRanker(g); break;
    case "tight-tree": tightTreeRanker(g); break;
    case "longest-path": longestPathRanker(g); break;
    default: networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  networkSimplex(g);
}

},{"./feasible-tree":25,"./network-simplex":27,"./util":28}],27:[function(require,module,exports){
"use strict";

var _ = require("../lodash"),
    feasibleTree = require("./feasible-tree"),
    slack = require("./util").slack,
    initRank = require("./util").longestPath,
    preorder = require("../graphlib").alg.preorder,
    postorder = require("../graphlib").alg.postorder,
    simplify = require("../util").simplify;

module.exports = networkSimplex;

// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;

/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex(g) {
  g = simplify(g);
  initRank(g);
  var t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  _.each(vs, function(v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child),
      parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child),
      parent = childLab.parent,
      // True if the child is on the tail end of the edge in the directed graph
      childIsTail = true,
      // The graph's view of the tree edge we're inspecting
      graphEdge = g.edge(child, parent),
      // The accumulated cut value for the edge between this node and its parent
      cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  _.each(g.nodeEdges(child), function(e) {
    var isOutEdge = e.v === child,
        other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
          otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim,
      label = tree.node(v);

  visited[v] = true;
  _.each(tree.neighbors(v), function(w) {
    if (!_.has(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  return _.find(tree.edges(), function(e) {
    return tree.edge(e).cutvalue < 0;
  });
}

function enterEdge(t, g, edge) {
  var v = edge.v,
      w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v),
      wLabel = t.node(w),
      tailLabel = vLabel,
      flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = _.filter(g.edges(), function(edge) {
    return flip === isDescendant(t, t.node(edge.v), tailLabel) &&
           flip !== isDescendant(t, t.node(edge.w), tailLabel);
  });

  return _.min(candidates, function(edge) { return slack(g, edge); });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v,
      w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = _.find(t.nodes(), function(v) { return !g.node(v).parent; }),
      vs = preorder(t, root);
  vs = vs.slice(1);
  _.each(vs, function(v) {
    var parent = t.node(v).parent,
        edge = g.edge(v, parent),
        flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

},{"../graphlib":7,"../lodash":10,"../util":29,"./feasible-tree":25,"./util":28}],28:[function(require,module,exports){
"use strict";

var _ = require("../lodash");

module.exports = {
  longestPath: longestPath,
  slack: slack
};

/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (_.has(visited, v)) {
      return label.rank;
    }
    visited[v] = true;

    var rank = _.min(_.map(g.outEdges(v), function(e) {
      return dfs(e.w) - g.edge(e).minlen;
    }));

    if (rank === Number.POSITIVE_INFINITY) {
      rank = 0;
    }

    return (label.rank = rank);
  }

  _.each(g.sources(), dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

},{"../lodash":10}],29:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    Graph = require("./graphlib").Graph;

module.exports = {
  addDummyNode: addDummyNode,
  simplify: simplify,
  asNonCompoundGraph: asNonCompoundGraph,
  successorWeights: successorWeights,
  predecessorWeights: predecessorWeights,
  intersectRect: intersectRect,
  buildLayerMatrix: buildLayerMatrix,
  normalizeRanks: normalizeRanks,
  removeEmptyRanks: removeEmptyRanks,
  addBorderNode: addBorderNode,
  maxRank: maxRank,
  partition: partition,
  time: time,
  notime: notime
};

/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = _.uniqueId(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify(g) {
  var simplified = new Graph().setGraph(g.graph());
  _.each(g.nodes(), function(v) { simplified.setNode(v, g.node(v)); });
  _.each(g.edges(), function(e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 },
        label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen)
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  _.each(g.nodes(), function(v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  _.each(g.edges(), function(e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

function successorWeights(g) {
  var weightMap = _.map(g.nodes(), function(v) {
    var sucs = {};
    _.each(g.outEdges(v), function(e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });
    return sucs;
  });
  return _.zipObject(g.nodes(), weightMap);
}

function predecessorWeights(g) {
  var weightMap = _.map(g.nodes(), function(v) {
    var preds = {};
    _.each(g.inEdges(v), function(e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });
    return preds;
  });
  return _.zipObject(g.nodes(), weightMap);
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error("Not possible to find intersection inside of the rectangle");
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = h * dx / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = w * dy / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = _.map(_.range(maxRank(g) + 1), function() { return []; });
  _.each(g.nodes(), function(v) {
    var node = g.node(v),
        rank = node.rank;
    if (!_.isUndefined(rank)) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks(g) {
  var min = _.min(_.map(g.nodes(), function(v) { return g.node(v).rank; }));
  _.each(g.nodes(), function(v) {
    var node = g.node(v);
    if (_.has(node, "rank")) {
      node.rank -= min;
    }
  });
}

function removeEmptyRanks(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = _.min(_.map(g.nodes(), function(v) { return g.node(v).rank; }));

  var layers = [];
  _.each(g.nodes(), function(v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0,
      nodeRankFactor = g.graph().nodeRankFactor;
  _.each(layers, function(vs, i) {
    if (_.isUndefined(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      _.each(vs, function(v) { g.node(v).rank += delta; });
    }
  });
}

function addBorderNode(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, "border", node, prefix);
}

function maxRank(g) {
  return _.max(_.map(g.nodes(), function(v) {
    var rank = g.node(v).rank;
    if (!_.isUndefined(rank)) {
      return rank;
    }
  }));
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  _.each(collection, function(value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function time(name, fn) {
  var start = _.now();
  try {
    return fn();
  } finally {
    console.log(name + " time: " + (_.now() - start) + "ms");
  }
}

function notime(name, fn) {
  return fn();
}

},{"./graphlib":7,"./lodash":10}],30:[function(require,module,exports){
module.exports = "0.7.4";

},{}]},{},[1])(1)
});
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dagreD3 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @license
 * Copyright (c) 2012-2013 Chris Pettitt
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
module.exports =  {
  graphlib: require("./lib/graphlib"),
  dagre: require("./lib/dagre"),
  intersect: require("./lib/intersect"),
  render: require("./lib/render"),
  util: require("./lib/util"),
  version: require("./lib/version")
};

},{"./lib/dagre":8,"./lib/graphlib":9,"./lib/intersect":10,"./lib/render":25,"./lib/util":27,"./lib/version":28}],2:[function(require,module,exports){
var util = require("./util");

module.exports = {
  "default": normal,
  "normal": normal,
  "vee": vee,
  "undirected": undirected
};

function normal(parent, id, edge, type) {
  var marker = parent.append("marker")
    .attr("id", id)
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 9)
    .attr("refY", 5)
    .attr("markerUnits", "strokeWidth")
    .attr("markerWidth", 8)
    .attr("markerHeight", 6)
    .attr("orient", "auto");

  var path = marker.append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .style("stroke-width", 1)
    .style("stroke-dasharray", "1,0");
  util.applyStyle(path, edge[type + "Style"]);
}

function vee(parent, id, edge, type) {
  var marker = parent.append("marker")
    .attr("id", id)
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 9)
    .attr("refY", 5)
    .attr("markerUnits", "strokeWidth")
    .attr("markerWidth", 8)
    .attr("markerHeight", 6)
    .attr("orient", "auto");

  var path = marker.append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z")
    .style("stroke-width", 1)
    .style("stroke-dasharray", "1,0");
  util.applyStyle(path, edge[type + "Style"]);
}

function undirected(parent, id, edge, type) {
  var marker = parent.append("marker")
    .attr("id", id)
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 9)
    .attr("refY", 5)
    .attr("markerUnits", "strokeWidth")
    .attr("markerWidth", 8)
    .attr("markerHeight", 6)
    .attr("orient", "auto");

  var path = marker.append("path")
    .attr("d", "M 0 5 L 10 5")
    .style("stroke-width", 1)
    .style("stroke-dasharray", "1,0");
  util.applyStyle(path, edge[type + "Style"]);
}

},{"./util":27}],3:[function(require,module,exports){
var util = require("./util"),
    addLabel = require("./label/add-label");

module.exports = createClusters;

function createClusters(selection, g) {
  var clusters = g.nodes().filter(function(v) { return util.isSubgraph(g, v); }),
      svgClusters = selection.selectAll("g.cluster")
        .data(clusters, function(v) { return v; });

  svgClusters.selectAll("*").remove();
  svgClusters.enter()
    .append("g")
      .attr("class", "cluster")
      .attr("id",function(v){
          var node = g.node(v);
          return node.id;
      })
      .style("opacity", 0);

  util.applyTransition(svgClusters, g)
    .style("opacity", 1);

  svgClusters.each(function(v) {
    var node = g.node(v),
        thisGroup = d3.select(this);
    d3.select(this).append("rect");
    var labelGroup = thisGroup.append("g").attr("class", "label");
    addLabel(labelGroup, node, node.clusterLabelPos);
  });

  svgClusters.selectAll("rect").each(function(c) {
    var node = g.node(c);
    var domCluster = d3.select(this);
    util.applyStyle(domCluster, node.style);
  });

  util.applyTransition(svgClusters.exit(), g)
    .style("opacity", 0)
    .remove();

  return svgClusters;
}

},{"./label/add-label":18,"./util":27}],4:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    addLabel = require("./label/add-label"),
    util = require("./util"),
    d3 = require("./d3");

module.exports = createEdgeLabels;

function createEdgeLabels(selection, g) {
  var svgEdgeLabels = selection.selectAll("g.edgeLabel")
    .data(g.edges(), function(e) { return util.edgeToId(e); })
    .classed("update", true);

  svgEdgeLabels.selectAll("*").remove();
  svgEdgeLabels.enter()
    .append("g")
      .classed("edgeLabel", true)
      .style("opacity", 0);
  svgEdgeLabels.each(function(e) {
    var edge = g.edge(e),
        label = addLabel(d3.select(this), g.edge(e), 0, 0).classed("label", true),
        bbox = label.node().getBBox();

    if (edge.labelId) { label.attr("id", edge.labelId); }
    if (!_.has(edge, "width")) { edge.width = bbox.width; }
    if (!_.has(edge, "height")) { edge.height = bbox.height; }
  });

  util.applyTransition(svgEdgeLabels.exit(), g)
    .style("opacity", 0)
    .remove();

  return svgEdgeLabels;
}

},{"./d3":7,"./label/add-label":18,"./lodash":21,"./util":27}],5:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    intersectNode = require("./intersect/intersect-node"),
    util = require("./util"),
    d3 = require("./d3");

module.exports = createEdgePaths;

function createEdgePaths(selection, g, arrows) {
  var svgPaths = selection.selectAll("g.edgePath")
    .data(g.edges(), function(e) { return util.edgeToId(e); })
    .classed("update", true);

  enter(svgPaths, g);
  exit(svgPaths, g);

  util.applyTransition(svgPaths, g)
    .style("opacity", 1);

  // Save DOM element in the path group, and set ID and class
  svgPaths.each(function(e) {
    var domEdge = d3.select(this);
    var edge = g.edge(e);
    edge.elem = this;

    if (edge.id) {
      domEdge.attr("id", edge.id);
    }

    util.applyClass(domEdge, edge["class"],
      (domEdge.classed("update") ? "update " : "") + "edgePath");
  });

  svgPaths.selectAll("path.path")
    .each(function(e) {
      var edge = g.edge(e);
      edge.arrowheadId = _.uniqueId("arrowhead");

      var domEdge = d3.select(this)
        .attr("marker-end", function() {
          return "url(#" + edge.arrowheadId + ")";
        })
        .style("fill", "none");

      util.applyTransition(domEdge, g)
        .attr("d", function(e) { return calcPoints(g, e); });

      util.applyStyle(domEdge, edge.style);
    });

  svgPaths.selectAll("defs *").remove();
  svgPaths.selectAll("defs")
    .each(function(e) {
      var edge = g.edge(e),
          arrowhead = arrows[edge.arrowhead];
      arrowhead(d3.select(this), edge.arrowheadId, edge, "arrowhead");
    });

  return svgPaths;
}

function calcPoints(g, e) {
  var edge = g.edge(e),
      tail = g.node(e.v),
      head = g.node(e.w),
      points = edge.points.slice(1, edge.points.length - 1);
  points.unshift(intersectNode(tail, points[0]));
  points.push(intersectNode(head, points[points.length - 1]));

  return createLine(edge, points);
}

function createLine(edge, points) {
  var line = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; });

  if (_.has(edge, "lineInterpolate")) {
    line.interpolate(edge.lineInterpolate);
  }

  if (_.has(edge, "lineTension")) {
    line.tension(Number(edge.lineTension));
  }

  return line(points);
}

function getCoords(elem) {
  var bbox = elem.getBBox(),
      matrix = elem.getTransformToElement(elem.ownerSVGElement)
        .translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}

function enter(svgPaths, g) {
  var svgPathsEnter = svgPaths.enter()
    .append("g")
      .attr("class", "edgePath")
      .style("opacity", 0);
  svgPathsEnter.append("path")
    .attr("class", "path")
    .attr("d", function(e) {
      var edge = g.edge(e),
          sourceElem = g.node(e.v).elem,
          points = _.range(edge.points.length).map(function() { return getCoords(sourceElem); });
      return createLine(edge, points);
    });
  svgPathsEnter.append("defs");
}

function exit(svgPaths, g) {
  var svgPathExit = svgPaths.exit();
  util.applyTransition(svgPathExit, g)
    .style("opacity", 0)
    .remove();

  util.applyTransition(svgPathExit.select("path.path"), g)
    .attr("d", function(e) {
      var source = g.node(e.v);

      if (source) {
        var points = _.range(this.pathSegList.length).map(function() { return source; });
        return createLine({}, points);
      } else {
        return d3.select(this).attr("d");
      }
    });
}

},{"./d3":7,"./intersect/intersect-node":14,"./lodash":21,"./util":27}],6:[function(require,module,exports){
"use strict";

var _ = require("./lodash"),
    addLabel = require("./label/add-label"),
    util = require("./util"),
    d3 = require("./d3");

module.exports = createNodes;

function createNodes(selection, g, shapes) {
  var simpleNodes = g.nodes().filter(function(v) { return !util.isSubgraph(g, v); });
  var svgNodes = selection.selectAll("g.node")
    .data(simpleNodes, function(v) { return v; })
    .classed("update", true);

  svgNodes.selectAll("*").remove();
  svgNodes.enter()
    .append("g")
      .attr("class", "node")
      .style("opacity", 0);
  svgNodes.each(function(v) {
    var node = g.node(v),
        thisGroup = d3.select(this),
        labelGroup = thisGroup.append("g").attr("class", "label"),
        labelDom = addLabel(labelGroup, node),
        shape = shapes[node.shape],
        bbox = _.pick(labelDom.node().getBBox(), "width", "height");

    node.elem = this;

    if (node.id) { thisGroup.attr("id", node.id); }
    if (node.labelId) { labelGroup.attr("id", node.labelId); }
    util.applyClass(thisGroup, node["class"],
      (thisGroup.classed("update") ? "update " : "") + "node");

    if (_.has(node, "width")) { bbox.width = node.width; }
    if (_.has(node, "height")) { bbox.height = node.height; }

    bbox.width += node.paddingLeft + node.paddingRight;
    bbox.height += node.paddingTop + node.paddingBottom;
    labelGroup.attr("transform", "translate(" +
      ((node.paddingLeft - node.paddingRight) / 2) + "," +
      ((node.paddingTop - node.paddingBottom) / 2) + ")");

    var shapeSvg = shape(d3.select(this), bbox, node);
    util.applyStyle(shapeSvg, node.style);

    var shapeBBox = shapeSvg.node().getBBox();
    node.width = shapeBBox.width;
    node.height = shapeBBox.height;
  });

  util.applyTransition(svgNodes.exit(), g)
    .style("opacity", 0)
    .remove();

  return svgNodes;
}

},{"./d3":7,"./label/add-label":18,"./lodash":21,"./util":27}],7:[function(require,module,exports){
// Stub to get D3 either via NPM or from the global object
module.exports = window.d3;

},{}],8:[function(require,module,exports){
/* global window */

var dagre;

if (require) {
  try {
    dagre = require("dagre");
  } catch (e) {}
}

if (!dagre) {
  dagre = window.dagre;
}

module.exports = dagre;

},{"dagre":undefined}],9:[function(require,module,exports){
/* global window */

var graphlib;

if (require) {
  try {
    graphlib = require("graphlib");
  } catch (e) {}
}

if (!graphlib) {
  graphlib = window.graphlib;
}

module.exports = graphlib;

},{"graphlib":undefined}],10:[function(require,module,exports){
module.exports = {
  node: require("./intersect-node"),
  circle: require("./intersect-circle"),
  ellipse: require("./intersect-ellipse"),
  polygon: require("./intersect-polygon"),
  rect: require("./intersect-rect")
};

},{"./intersect-circle":11,"./intersect-ellipse":12,"./intersect-node":14,"./intersect-polygon":15,"./intersect-rect":16}],11:[function(require,module,exports){
var intersectEllipse = require("./intersect-ellipse");

module.exports = intersectCircle;

function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}

},{"./intersect-ellipse":12}],12:[function(require,module,exports){
module.exports = intersectEllipse;

function intersectEllipse(node, rx, ry, point) {
  // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html

  var cx = node.x;
  var cy = node.y;

  var px = cx - point.x;
  var py = cy - point.y;

  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);

  var dx = Math.abs(rx * ry * px / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs(rx * ry * py / det);
  if (point.y < cy) {
    dy = -dy;
  }

  return {x: cx + dx, y: cy + dy};
}


},{}],13:[function(require,module,exports){
module.exports = intersectLine;

/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */
function intersectLine(p1, p2, q1, q2) {
  // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
  // p7 and p473.

  var a1, a2, b1, b2, c1, c2;
  var r1, r2 , r3, r4;
  var denom, offset, num;
  var x, y;

  // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
  // b1 y + c1 = 0.
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = (p2.x * p1.y) - (p1.x * p2.y);

  // Compute r3 and r4.
  r3 = ((a1 * q1.x) + (b1 * q1.y) + c1);
  r4 = ((a1 * q2.x) + (b1 * q2.y) + c1);

  // Check signs of r3 and r4. If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if ((r3 !== 0) && (r4 !== 0) && sameSign(r3, r4)) {
    return /*DONT_INTERSECT*/;
  }

  // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = (q2.x * q1.y) - (q1.x * q2.y);

  // Compute r1 and r2
  r1 = (a2 * p1.x) + (b2 * p1.y) + c2;
  r2 = (a2 * p2.x) + (b2 * p2.y) + c2;

  // Check signs of r1 and r2. If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if ((r1 !== 0) && (r2 !== 0) && (sameSign(r1, r2))) {
    return /*DONT_INTERSECT*/;
  }

  // Line segments intersect: compute intersection point.
  denom = (a1 * b2) - (a2 * b1);
  if (denom === 0) {
    return /*COLLINEAR*/;
  }

  offset = Math.abs(denom / 2);

  // The denom/2 is to get rounding instead of truncating. It
  // is added or subtracted to the numerator, depending upon the
  // sign of the numerator.
  num = (b1 * c2) - (b2 * c1);
  x = (num < 0) ? ((num - offset) / denom) : ((num + offset) / denom);

  num = (a2 * c1) - (a1 * c2);
  y = (num < 0) ? ((num - offset) / denom) : ((num + offset) / denom);

  return { x: x, y: y };
}

function sameSign(r1, r2) {
  return r1 * r2 > 0;
}

},{}],14:[function(require,module,exports){
module.exports = intersectNode;

function intersectNode(node, point) {
  return node.intersect(point);
}

},{}],15:[function(require,module,exports){
var intersectLine = require("./intersect-line");

module.exports = intersectPolygon;

/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */
function intersectPolygon(node, polyPoints, point) {
  var x1 = node.x;
  var y1 = node.y;

  var intersections = [];

  var minX = Number.POSITIVE_INFINITY,
      minY = Number.POSITIVE_INFINITY;
  polyPoints.forEach(function(entry) {
    minX = Math.min(minX, entry.x);
    minY = Math.min(minY, entry.y);
  });

  var left = x1 - node.width / 2 - minX;
  var top =  y1 - node.height / 2 - minY;

  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = intersectLine(node, point,
      {x: left + p1.x, y: top + p1.y}, {x: left + p2.x, y: top + p2.y});
    if (intersect) {
      intersections.push(intersect);
    }
  }

  if (!intersections.length) {
    console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", node);
    return node;
  }

  if (intersections.length > 1) {
    // More intersections, find the one nearest to edge end point
    intersections.sort(function(p, q) {
      var pdx = p.x - point.x,
          pdy = p.y - point.y,
          distp = Math.sqrt(pdx * pdx + pdy * pdy),

          qdx = q.x - point.x,
          qdy = q.y - point.y,
          distq = Math.sqrt(qdx * qdx + qdy * qdy);

      return (distp < distq) ? -1 : (distp === distq ? 0 : 1);
    });
  }
  return intersections[0];
}

},{"./intersect-line":13}],16:[function(require,module,exports){
module.exports = intersectRect;

function intersectRect(node, point) {
  var x = node.x;
  var y = node.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }

  return {x: x + sx, y: y + sy};
}

},{}],17:[function(require,module,exports){
var util = require("../util");

module.exports = addHtmlLabel;

function addHtmlLabel(root, node) {
  var fo = root
    .append("foreignObject")
      .attr("width", "100000");

  var div = fo
    .append("xhtml:div");

  var label = node.label;
  switch(typeof label) {
    case "function":
      div.insert(label);
      break;
    case "object":
      // Currently we assume this is a DOM object.
      div.insert(function() { return label; });
      break;
    default: div.html(label);
  }

  util.applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  // Fix for firefox
  div.style("white-space", "nowrap");

  // TODO find a better way to get dimensions for foreignObjects...
  var w, h;
  div
    .each(function() {
      w = this.clientWidth;
      h = this.clientHeight;
    });

  fo
    .attr("width", w)
    .attr("height", h);

  return fo;
}

},{"../util":27}],18:[function(require,module,exports){
var addTextLabel = require("./add-text-label"),
    addHtmlLabel = require("./add-html-label"),
    addSVGLabel  = require("./add-svg-label");

module.exports = addLabel;

function addLabel(root, node, location) {
  var label = node.label;
  var labelSvg = root.append("g");

  // Allow the label to be a string, a function that returns a DOM element, or
  // a DOM element itself.
  if (node.labelType === "svg") {
    addSVGLabel(labelSvg, node);
  } else if (typeof label !== "string" || node.labelType === "html") {
    addHtmlLabel(labelSvg, node);
  } else {
    addTextLabel(labelSvg, node);
  }

  var labelBBox = labelSvg.node().getBBox();
  var y;
  switch(location) {
    case "top":
      y = (-node.height / 2);
      break;
    case "bottom":
      y = (node.height / 2) - labelBBox.height;
      break;
    default:
      y = (-labelBBox.height / 2);
  }
  labelSvg.attr("transform",
                "translate(" + (-labelBBox.width / 2) + "," + y + ")");

  return labelSvg;
}

},{"./add-html-label":17,"./add-svg-label":19,"./add-text-label":20}],19:[function(require,module,exports){
var util = require("../util");

module.exports = addSVGLabel;

function addSVGLabel(root, node) {
  var domNode = root;

  domNode.node().appendChild(node.label);

  util.applyStyle(domNode, node.labelStyle);

  return domNode;
}

},{"../util":27}],20:[function(require,module,exports){
var util = require("../util");

module.exports = addTextLabel;

/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */
function addTextLabel(root, node) {
  var domNode = root.append("text");

  var lines = processEscapeSequences(node.label).split("\n");
  for (var i = 0; i < lines.length; i++) {
    domNode
      .append("tspan")
        .attr("xml:space", "preserve")
        .attr("dy", "1em")
        .attr("x", "1")
        .text(lines[i]);
  }

  util.applyStyle(domNode, node.labelStyle);

  return domNode;
}

function processEscapeSequences(text) {
  var newText = "",
      escaped = false,
      ch;
  for (var i = 0; i < text.length; ++i) {
    ch = text[i];
    if (escaped) {
      switch(ch) {
        case "n": newText += "\n"; break;
        default: newText += ch;
      }
      escaped = false;
    } else if (ch === "\\") {
      escaped = true;
    } else {
      newText += ch;
    }
  }
  return newText;
}

},{"../util":27}],21:[function(require,module,exports){
/* global window */

var lodash;

if (require) {
  try {
    lodash = require("lodash");
  } catch (e) {}
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;

},{"lodash":undefined}],22:[function(require,module,exports){
"use strict";

var util = require("./util"),
    d3 = require("./d3");

module.exports = positionClusters;

function positionClusters(selection, g) {
  var created = selection.filter(function() { return !d3.select(this).classed("update"); });

  function translate(v) {
    var node = g.node(v);
    return "translate(" + node.x + "," + node.y + ")";
  }

  created.attr("transform", translate);

  util.applyTransition(selection, g)
      .style("opacity", 1)
      .attr("transform", translate);

  util.applyTransition(created.selectAll("rect"), g)
      .attr("width", function(v) { return g.node(v).width; })
      .attr("height", function(v) { return g.node(v).height; })
      .attr("x", function(v) {
        var node = g.node(v);
        return -node.width / 2;
      })
      .attr("y", function(v) {
        var node = g.node(v);
        return -node.height / 2;
      });

}

},{"./d3":7,"./util":27}],23:[function(require,module,exports){
"use strict";

var util = require("./util"),
    d3 = require("./d3"),
    _ = require("./lodash");

module.exports = positionEdgeLabels;

function positionEdgeLabels(selection, g) {
  var created = selection.filter(function() { return !d3.select(this).classed("update"); });

  function translate(e) {
    var edge = g.edge(e);
    return _.has(edge, "x") ? "translate(" + edge.x + "," + edge.y + ")" : "";
  }

  created.attr("transform", translate);

  util.applyTransition(selection, g)
    .style("opacity", 1)
    .attr("transform", translate);
}

},{"./d3":7,"./lodash":21,"./util":27}],24:[function(require,module,exports){
"use strict";

var util = require("./util"),
    d3 = require("./d3");

module.exports = positionNodes;

function positionNodes(selection, g) {
  var created = selection.filter(function() { return !d3.select(this).classed("update"); });

  function translate(v) {
    var node = g.node(v);
    return "translate(" + node.x + "," + node.y + ")";
  }

  created.attr("transform", translate);

  util.applyTransition(selection, g)
    .style("opacity", 1)
    .attr("transform", translate);
}

},{"./d3":7,"./util":27}],25:[function(require,module,exports){
var _ = require("./lodash"),
    layout = require("./dagre").layout;

module.exports = render;

// This design is based on http://bost.ocks.org/mike/chart/.
function render() {
  var createNodes = require("./create-nodes"),
      createClusters = require("./create-clusters"),
      createEdgeLabels = require("./create-edge-labels"),
      createEdgePaths = require("./create-edge-paths"),
      positionNodes = require("./position-nodes"),
      positionEdgeLabels = require("./position-edge-labels"),
      positionClusters = require("./position-clusters"),
      shapes = require("./shapes"),
      arrows = require("./arrows");

  var fn = function(svg, g) {
    preProcessGraph(g);

    var outputGroup = createOrSelectGroup(svg, "output"),
        clustersGroup = createOrSelectGroup(outputGroup, "clusters"),
        edgePathsGroup = createOrSelectGroup(outputGroup, "edgePaths"),
        edgeLabels = createEdgeLabels(createOrSelectGroup(outputGroup, "edgeLabels"), g),
        nodes = createNodes(createOrSelectGroup(outputGroup, "nodes"), g, shapes);

    layout(g);

    positionNodes(nodes, g);
    positionEdgeLabels(edgeLabels, g);
    createEdgePaths(edgePathsGroup, g, arrows);

    var clusters = createClusters(clustersGroup, g);
    positionClusters(clusters, g);

    postProcessGraph(g);
  };

  fn.createNodes = function(value) {
    if (!arguments.length) return createNodes;
    createNodes = value;
    return fn;
  };

  fn.createClusters = function(value) {
    if (!arguments.length) return createClusters;
    createClusters = value;
    return fn;
  };

  fn.createEdgeLabels = function(value) {
    if (!arguments.length) return createEdgeLabels;
    createEdgeLabels = value;
    return fn;
  };

  fn.createEdgePaths = function(value) {
    if (!arguments.length) return createEdgePaths;
    createEdgePaths = value;
    return fn;
  };

  fn.shapes = function(value) {
    if (!arguments.length) return shapes;
    shapes = value;
    return fn;
  };

  fn.arrows = function(value) {
    if (!arguments.length) return arrows;
    arrows = value;
    return fn;
  };

  return fn;
}

var NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
};

var EDGE_DEFAULT_ATTRS = {
  arrowhead: "normal",
  lineInterpolate: "linear"
};

function preProcessGraph(g) {
  g.nodes().forEach(function(v) {
    var node = g.node(v);
    if (!_.has(node, "label") && !g.children(v).length) { node.label = v; }

    if (_.has(node, "paddingX")) {
      _.defaults(node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX
      });
    }

    if (_.has(node, "paddingY")) {
      _.defaults(node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY
      });
    }

    if (_.has(node, "padding")) {
      _.defaults(node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding
      });
    }

    _.defaults(node, NODE_DEFAULT_ATTRS);

    _.each(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], function(k) {
      node[k] = Number(node[k]);
    });

    // Save dimensions for restore during post-processing
    if (_.has(node, "width")) { node._prevWidth = node.width; }
    if (_.has(node, "height")) { node._prevHeight = node.height; }
  });

  g.edges().forEach(function(e) {
    var edge = g.edge(e);
    if (!_.has(edge, "label")) { edge.label = ""; }
    _.defaults(edge, EDGE_DEFAULT_ATTRS);
  });
}

function postProcessGraph(g) {
  _.each(g.nodes(), function(v) {
    var node = g.node(v);

    // Restore original dimensions
    if (_.has(node, "_prevWidth")) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }

    if (_.has(node, "_prevHeight")) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }

    delete node._prevWidth;
    delete node._prevHeight;
  });
}

function createOrSelectGroup(root, name) {
  var selection = root.select("g." + name);
  if (selection.empty()) {
    selection = root.append("g").attr("class", name);
  }
  return selection;
}

},{"./arrows":2,"./create-clusters":3,"./create-edge-labels":4,"./create-edge-paths":5,"./create-nodes":6,"./dagre":8,"./lodash":21,"./position-clusters":22,"./position-edge-labels":23,"./position-nodes":24,"./shapes":26}],26:[function(require,module,exports){
"use strict";

var intersectRect = require("./intersect/intersect-rect"),
    intersectEllipse = require("./intersect/intersect-ellipse"),
    intersectCircle = require("./intersect/intersect-circle"),
    intersectPolygon = require("./intersect/intersect-polygon");

module.exports = {
  rect: rect,
  ellipse: ellipse,
  circle: circle,
  diamond: diamond
};

function rect(parent, bbox, node) {
  var shapeSvg = parent.insert("rect", ":first-child")
        .attr("rx", node.rx)
        .attr("ry", node.ry)
        .attr("x", -bbox.width / 2)
        .attr("y", -bbox.height / 2)
        .attr("width", bbox.width)
        .attr("height", bbox.height);

  node.intersect = function(point) {
    return intersectRect(node, point);
  };

  return shapeSvg;
}

function ellipse(parent, bbox, node) {
  var rx = bbox.width / 2,
      ry = bbox.height / 2,
      shapeSvg = parent.insert("ellipse", ":first-child")
        .attr("x", -bbox.width / 2)
        .attr("y", -bbox.height / 2)
        .attr("rx", rx)
        .attr("ry", ry);

  node.intersect = function(point) {
    return intersectEllipse(node, rx, ry, point);
  };

  return shapeSvg;
}

function circle(parent, bbox, node) {
  var r = Math.max(bbox.width, bbox.height) / 2,
      shapeSvg = parent.insert("circle", ":first-child")
        .attr("x", -bbox.width / 2)
        .attr("y", -bbox.height / 2)
        .attr("r", r);

  node.intersect = function(point) {
    return intersectCircle(node, r, point);
  };

  return shapeSvg;
}

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond(parent, bbox, node) {
  var w = (bbox.width * Math.SQRT2) / 2,
      h = (bbox.height * Math.SQRT2) / 2,
      points = [
        { x:  0, y: -h },
        { x: -w, y:  0 },
        { x:  0, y:  h },
        { x:  w, y:  0 }
      ],
      shapeSvg = parent.insert("polygon", ":first-child")
        .attr("points", points.map(function(p) { return p.x + "," + p.y; }).join(" "));

  node.intersect = function(p) {
    return intersectPolygon(node, points, p);
  };

  return shapeSvg;
}

},{"./intersect/intersect-circle":11,"./intersect/intersect-ellipse":12,"./intersect/intersect-polygon":15,"./intersect/intersect-rect":16}],27:[function(require,module,exports){
var _ = require("./lodash");

// Public utility functions
module.exports = {
  isSubgraph: isSubgraph,
  edgeToId: edgeToId,
  applyStyle: applyStyle,
  applyClass: applyClass,
  applyTransition: applyTransition
};

/*
 * Returns true if the specified node in the graph is a subgraph node. A
 * subgraph node is one that contains other nodes.
 */
function isSubgraph(g, v) {
  return !!g.children(v).length;
}

function edgeToId(e) {
  return escapeId(e.v) + ":" + escapeId(e.w) + ":" + escapeId(e.name);
}

var ID_DELIM = /:/g;
function escapeId(str) {
  return str ? String(str).replace(ID_DELIM, "\\:") : "";
}

function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}

function applyClass(dom, classFn, otherClasses) {
  if (classFn) {
    dom
      .attr("class", classFn)
      .attr("class", otherClasses + " " + dom.attr("class"));
  }
}

function applyTransition(selection, g) {
  var graph = g.graph();

  if (_.isPlainObject(graph)) {
    var transition = graph.transition;
    if (_.isFunction(transition)) {
      return transition(selection);
    }
  }

  return selection;
}

},{"./lodash":21}],28:[function(require,module,exports){
module.exports = "0.4.11";

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9hcnJvd3MuanMiLCJsaWIvY3JlYXRlLWNsdXN0ZXJzLmpzIiwibGliL2NyZWF0ZS1lZGdlLWxhYmVscy5qcyIsImxpYi9jcmVhdGUtZWRnZS1wYXRocy5qcyIsImxpYi9jcmVhdGUtbm9kZXMuanMiLCJsaWIvZDMuanMiLCJsaWIvZGFncmUuanMiLCJsaWIvZ3JhcGhsaWIuanMiLCJsaWIvaW50ZXJzZWN0L2luZGV4LmpzIiwibGliL2ludGVyc2VjdC9pbnRlcnNlY3QtY2lyY2xlLmpzIiwibGliL2ludGVyc2VjdC9pbnRlcnNlY3QtZWxsaXBzZS5qcyIsImxpYi9pbnRlcnNlY3QvaW50ZXJzZWN0LWxpbmUuanMiLCJsaWIvaW50ZXJzZWN0L2ludGVyc2VjdC1ub2RlLmpzIiwibGliL2ludGVyc2VjdC9pbnRlcnNlY3QtcG9seWdvbi5qcyIsImxpYi9pbnRlcnNlY3QvaW50ZXJzZWN0LXJlY3QuanMiLCJsaWIvbGFiZWwvYWRkLWh0bWwtbGFiZWwuanMiLCJsaWIvbGFiZWwvYWRkLWxhYmVsLmpzIiwibGliL2xhYmVsL2FkZC1zdmctbGFiZWwuanMiLCJsaWIvbGFiZWwvYWRkLXRleHQtbGFiZWwuanMiLCJsaWIvbG9kYXNoLmpzIiwibGliL3Bvc2l0aW9uLWNsdXN0ZXJzLmpzIiwibGliL3Bvc2l0aW9uLWVkZ2UtbGFiZWxzLmpzIiwibGliL3Bvc2l0aW9uLW5vZGVzLmpzIiwibGliL3JlbmRlci5qcyIsImxpYi9zaGFwZXMuanMiLCJsaWIvdXRpbC5qcyIsImxpYi92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxMyBDaHJpcyBQZXR0aXR0XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAge1xuICBncmFwaGxpYjogcmVxdWlyZShcIi4vbGliL2dyYXBobGliXCIpLFxuICBkYWdyZTogcmVxdWlyZShcIi4vbGliL2RhZ3JlXCIpLFxuICBpbnRlcnNlY3Q6IHJlcXVpcmUoXCIuL2xpYi9pbnRlcnNlY3RcIiksXG4gIHJlbmRlcjogcmVxdWlyZShcIi4vbGliL3JlbmRlclwiKSxcbiAgdXRpbDogcmVxdWlyZShcIi4vbGliL3V0aWxcIiksXG4gIHZlcnNpb246IHJlcXVpcmUoXCIuL2xpYi92ZXJzaW9uXCIpXG59O1xuIiwidmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJkZWZhdWx0XCI6IG5vcm1hbCxcbiAgXCJub3JtYWxcIjogbm9ybWFsLFxuICBcInZlZVwiOiB2ZWUsXG4gIFwidW5kaXJlY3RlZFwiOiB1bmRpcmVjdGVkXG59O1xuXG5mdW5jdGlvbiBub3JtYWwocGFyZW50LCBpZCwgZWRnZSwgdHlwZSkge1xuICB2YXIgbWFya2VyID0gcGFyZW50LmFwcGVuZChcIm1hcmtlclwiKVxuICAgIC5hdHRyKFwiaWRcIiwgaWQpXG4gICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwIDEwXCIpXG4gICAgLmF0dHIoXCJyZWZYXCIsIDkpXG4gICAgLmF0dHIoXCJyZWZZXCIsIDUpXG4gICAgLmF0dHIoXCJtYXJrZXJVbml0c1wiLCBcInN0cm9rZVdpZHRoXCIpXG4gICAgLmF0dHIoXCJtYXJrZXJXaWR0aFwiLCA4KVxuICAgIC5hdHRyKFwibWFya2VySGVpZ2h0XCIsIDYpXG4gICAgLmF0dHIoXCJvcmllbnRcIiwgXCJhdXRvXCIpO1xuXG4gIHZhciBwYXRoID0gbWFya2VyLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImRcIiwgXCJNIDAgMCBMIDEwIDUgTCAwIDEwIHpcIilcbiAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSlcbiAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMSwwXCIpO1xuICB1dGlsLmFwcGx5U3R5bGUocGF0aCwgZWRnZVt0eXBlICsgXCJTdHlsZVwiXSk7XG59XG5cbmZ1bmN0aW9uIHZlZShwYXJlbnQsIGlkLCBlZGdlLCB0eXBlKSB7XG4gIHZhciBtYXJrZXIgPSBwYXJlbnQuYXBwZW5kKFwibWFya2VyXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBpZClcbiAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgMTAgMTBcIilcbiAgICAuYXR0cihcInJlZlhcIiwgOSlcbiAgICAuYXR0cihcInJlZllcIiwgNSlcbiAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAuYXR0cihcIm1hcmtlcldpZHRoXCIsIDgpXG4gICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNilcbiAgICAuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIik7XG5cbiAgdmFyIHBhdGggPSBtYXJrZXIuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiZFwiLCBcIk0gMCAwIEwgMTAgNSBMIDAgMTAgTCA0IDUgelwiKVxuICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAxKVxuICAgIC5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIxLDBcIik7XG4gIHV0aWwuYXBwbHlTdHlsZShwYXRoLCBlZGdlW3R5cGUgKyBcIlN0eWxlXCJdKTtcbn1cblxuZnVuY3Rpb24gdW5kaXJlY3RlZChwYXJlbnQsIGlkLCBlZGdlLCB0eXBlKSB7XG4gIHZhciBtYXJrZXIgPSBwYXJlbnQuYXBwZW5kKFwibWFya2VyXCIpXG4gICAgLmF0dHIoXCJpZFwiLCBpZClcbiAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgMTAgMTBcIilcbiAgICAuYXR0cihcInJlZlhcIiwgOSlcbiAgICAuYXR0cihcInJlZllcIiwgNSlcbiAgICAuYXR0cihcIm1hcmtlclVuaXRzXCIsIFwic3Ryb2tlV2lkdGhcIilcbiAgICAuYXR0cihcIm1hcmtlcldpZHRoXCIsIDgpXG4gICAgLmF0dHIoXCJtYXJrZXJIZWlnaHRcIiwgNilcbiAgICAuYXR0cihcIm9yaWVudFwiLCBcImF1dG9cIik7XG5cbiAgdmFyIHBhdGggPSBtYXJrZXIuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiZFwiLCBcIk0gMCA1IEwgMTAgNVwiKVxuICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAxKVxuICAgIC5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIxLDBcIik7XG4gIHV0aWwuYXBwbHlTdHlsZShwYXRoLCBlZGdlW3R5cGUgKyBcIlN0eWxlXCJdKTtcbn1cbiIsInZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKSxcbiAgICBhZGRMYWJlbCA9IHJlcXVpcmUoXCIuL2xhYmVsL2FkZC1sYWJlbFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDbHVzdGVycztcblxuZnVuY3Rpb24gY3JlYXRlQ2x1c3RlcnMoc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBjbHVzdGVycyA9IGcubm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24odikgeyByZXR1cm4gdXRpbC5pc1N1YmdyYXBoKGcsIHYpOyB9KSxcbiAgICAgIHN2Z0NsdXN0ZXJzID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcImcuY2x1c3RlclwiKVxuICAgICAgICAuZGF0YShjbHVzdGVycywgZnVuY3Rpb24odikgeyByZXR1cm4gdjsgfSk7XG5cbiAgc3ZnQ2x1c3RlcnMuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcbiAgc3ZnQ2x1c3RlcnMuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2x1c3RlclwiKVxuICAgICAgLmF0dHIoXCJpZFwiLGZ1bmN0aW9uKHYpe1xuICAgICAgICAgIHZhciBub2RlID0gZy5ub2RlKHYpO1xuICAgICAgICAgIHJldHVybiBub2RlLmlkO1xuICAgICAgfSlcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnQ2x1c3RlcnMsIGcpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblxuICBzdmdDbHVzdGVycy5lYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KSxcbiAgICAgICAgdGhpc0dyb3VwID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoXCJyZWN0XCIpO1xuICAgIHZhciBsYWJlbEdyb3VwID0gdGhpc0dyb3VwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gICAgYWRkTGFiZWwobGFiZWxHcm91cCwgbm9kZSwgbm9kZS5jbHVzdGVyTGFiZWxQb3MpO1xuICB9KTtcblxuICBzdmdDbHVzdGVycy5zZWxlY3RBbGwoXCJyZWN0XCIpLmVhY2goZnVuY3Rpb24oYykge1xuICAgIHZhciBub2RlID0gZy5ub2RlKGMpO1xuICAgIHZhciBkb21DbHVzdGVyID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgIHV0aWwuYXBwbHlTdHlsZShkb21DbHVzdGVyLCBub2RlLnN0eWxlKTtcbiAgfSk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnQ2x1c3RlcnMuZXhpdCgpLCBnKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHN2Z0NsdXN0ZXJzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcIi4vbG9kYXNoXCIpLFxuICAgIGFkZExhYmVsID0gcmVxdWlyZShcIi4vbGFiZWwvYWRkLWxhYmVsXCIpLFxuICAgIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpLFxuICAgIGQzID0gcmVxdWlyZShcIi4vZDNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRWRnZUxhYmVscztcblxuZnVuY3Rpb24gY3JlYXRlRWRnZUxhYmVscyhzZWxlY3Rpb24sIGcpIHtcbiAgdmFyIHN2Z0VkZ2VMYWJlbHMgPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiZy5lZGdlTGFiZWxcIilcbiAgICAuZGF0YShnLmVkZ2VzKCksIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIHV0aWwuZWRnZVRvSWQoZSk7IH0pXG4gICAgLmNsYXNzZWQoXCJ1cGRhdGVcIiwgdHJ1ZSk7XG5cbiAgc3ZnRWRnZUxhYmVscy5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuICBzdmdFZGdlTGFiZWxzLmVudGVyKClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmNsYXNzZWQoXCJlZGdlTGFiZWxcIiwgdHJ1ZSlcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIHN2Z0VkZ2VMYWJlbHMuZWFjaChmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSksXG4gICAgICAgIGxhYmVsID0gYWRkTGFiZWwoZDMuc2VsZWN0KHRoaXMpLCBnLmVkZ2UoZSksIDAsIDApLmNsYXNzZWQoXCJsYWJlbFwiLCB0cnVlKSxcbiAgICAgICAgYmJveCA9IGxhYmVsLm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICBpZiAoZWRnZS5sYWJlbElkKSB7IGxhYmVsLmF0dHIoXCJpZFwiLCBlZGdlLmxhYmVsSWQpOyB9XG4gICAgaWYgKCFfLmhhcyhlZGdlLCBcIndpZHRoXCIpKSB7IGVkZ2Uud2lkdGggPSBiYm94LndpZHRoOyB9XG4gICAgaWYgKCFfLmhhcyhlZGdlLCBcImhlaWdodFwiKSkgeyBlZGdlLmhlaWdodCA9IGJib3guaGVpZ2h0OyB9XG4gIH0pO1xuXG4gIHV0aWwuYXBwbHlUcmFuc2l0aW9uKHN2Z0VkZ2VMYWJlbHMuZXhpdCgpLCBnKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHN2Z0VkZ2VMYWJlbHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwiLi9sb2Rhc2hcIiksXG4gICAgaW50ZXJzZWN0Tm9kZSA9IHJlcXVpcmUoXCIuL2ludGVyc2VjdC9pbnRlcnNlY3Qtbm9kZVwiKSxcbiAgICB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKSxcbiAgICBkMyA9IHJlcXVpcmUoXCIuL2QzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVkZ2VQYXRocztcblxuZnVuY3Rpb24gY3JlYXRlRWRnZVBhdGhzKHNlbGVjdGlvbiwgZywgYXJyb3dzKSB7XG4gIHZhciBzdmdQYXRocyA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCJnLmVkZ2VQYXRoXCIpXG4gICAgLmRhdGEoZy5lZGdlcygpLCBmdW5jdGlvbihlKSB7IHJldHVybiB1dGlsLmVkZ2VUb0lkKGUpOyB9KVxuICAgIC5jbGFzc2VkKFwidXBkYXRlXCIsIHRydWUpO1xuXG4gIGVudGVyKHN2Z1BhdGhzLCBnKTtcbiAgZXhpdChzdmdQYXRocywgZyk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnUGF0aHMsIGcpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblxuICAvLyBTYXZlIERPTSBlbGVtZW50IGluIHRoZSBwYXRoIGdyb3VwLCBhbmQgc2V0IElEIGFuZCBjbGFzc1xuICBzdmdQYXRocy5lYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZG9tRWRnZSA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICBlZGdlLmVsZW0gPSB0aGlzO1xuXG4gICAgaWYgKGVkZ2UuaWQpIHtcbiAgICAgIGRvbUVkZ2UuYXR0cihcImlkXCIsIGVkZ2UuaWQpO1xuICAgIH1cblxuICAgIHV0aWwuYXBwbHlDbGFzcyhkb21FZGdlLCBlZGdlW1wiY2xhc3NcIl0sXG4gICAgICAoZG9tRWRnZS5jbGFzc2VkKFwidXBkYXRlXCIpID8gXCJ1cGRhdGUgXCIgOiBcIlwiKSArIFwiZWRnZVBhdGhcIik7XG4gIH0pO1xuXG4gIHN2Z1BhdGhzLnNlbGVjdEFsbChcInBhdGgucGF0aFwiKVxuICAgIC5lYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBlZGdlID0gZy5lZGdlKGUpO1xuICAgICAgZWRnZS5hcnJvd2hlYWRJZCA9IF8udW5pcXVlSWQoXCJhcnJvd2hlYWRcIik7XG5cbiAgICAgIHZhciBkb21FZGdlID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hdHRyKFwibWFya2VyLWVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gXCJ1cmwoI1wiICsgZWRnZS5hcnJvd2hlYWRJZCArIFwiKVwiO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcblxuICAgICAgdXRpbC5hcHBseVRyYW5zaXRpb24oZG9tRWRnZSwgZylcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGNhbGNQb2ludHMoZywgZSk7IH0pO1xuXG4gICAgICB1dGlsLmFwcGx5U3R5bGUoZG9tRWRnZSwgZWRnZS5zdHlsZSk7XG4gICAgfSk7XG5cbiAgc3ZnUGF0aHMuc2VsZWN0QWxsKFwiZGVmcyAqXCIpLnJlbW92ZSgpO1xuICBzdmdQYXRocy5zZWxlY3RBbGwoXCJkZWZzXCIpXG4gICAgLmVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSksXG4gICAgICAgICAgYXJyb3doZWFkID0gYXJyb3dzW2VkZ2UuYXJyb3doZWFkXTtcbiAgICAgIGFycm93aGVhZChkMy5zZWxlY3QodGhpcyksIGVkZ2UuYXJyb3doZWFkSWQsIGVkZ2UsIFwiYXJyb3doZWFkXCIpO1xuICAgIH0pO1xuXG4gIHJldHVybiBzdmdQYXRocztcbn1cblxuZnVuY3Rpb24gY2FsY1BvaW50cyhnLCBlKSB7XG4gIHZhciBlZGdlID0gZy5lZGdlKGUpLFxuICAgICAgdGFpbCA9IGcubm9kZShlLnYpLFxuICAgICAgaGVhZCA9IGcubm9kZShlLncpLFxuICAgICAgcG9pbnRzID0gZWRnZS5wb2ludHMuc2xpY2UoMSwgZWRnZS5wb2ludHMubGVuZ3RoIC0gMSk7XG4gIHBvaW50cy51bnNoaWZ0KGludGVyc2VjdE5vZGUodGFpbCwgcG9pbnRzWzBdKSk7XG4gIHBvaW50cy5wdXNoKGludGVyc2VjdE5vZGUoaGVhZCwgcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSkpO1xuXG4gIHJldHVybiBjcmVhdGVMaW5lKGVkZ2UsIHBvaW50cyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmUoZWRnZSwgcG9pbnRzKSB7XG4gIHZhciBsaW5lID0gZDMuc3ZnLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcbiAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pO1xuXG4gIGlmIChfLmhhcyhlZGdlLCBcImxpbmVJbnRlcnBvbGF0ZVwiKSkge1xuICAgIGxpbmUuaW50ZXJwb2xhdGUoZWRnZS5saW5lSW50ZXJwb2xhdGUpO1xuICB9XG5cbiAgaWYgKF8uaGFzKGVkZ2UsIFwibGluZVRlbnNpb25cIikpIHtcbiAgICBsaW5lLnRlbnNpb24oTnVtYmVyKGVkZ2UubGluZVRlbnNpb24pKTtcbiAgfVxuXG4gIHJldHVybiBsaW5lKHBvaW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XG4gIHZhciBiYm94ID0gZWxlbS5nZXRCQm94KCksXG4gICAgICBtYXRyaXggPSBlbGVtLmdldFRyYW5zZm9ybVRvRWxlbWVudChlbGVtLm93bmVyU1ZHRWxlbWVudClcbiAgICAgICAgLnRyYW5zbGF0ZShiYm94LndpZHRoIC8gMiwgYmJveC5oZWlnaHQgLyAyKTtcbiAgcmV0dXJuIHsgeDogbWF0cml4LmUsIHk6IG1hdHJpeC5mIH07XG59XG5cbmZ1bmN0aW9uIGVudGVyKHN2Z1BhdGhzLCBnKSB7XG4gIHZhciBzdmdQYXRoc0VudGVyID0gc3ZnUGF0aHMuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZWRnZVBhdGhcIilcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIHN2Z1BhdGhzRW50ZXIuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBlZGdlID0gZy5lZGdlKGUpLFxuICAgICAgICAgIHNvdXJjZUVsZW0gPSBnLm5vZGUoZS52KS5lbGVtLFxuICAgICAgICAgIHBvaW50cyA9IF8ucmFuZ2UoZWRnZS5wb2ludHMubGVuZ3RoKS5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiBnZXRDb29yZHMoc291cmNlRWxlbSk7IH0pO1xuICAgICAgcmV0dXJuIGNyZWF0ZUxpbmUoZWRnZSwgcG9pbnRzKTtcbiAgICB9KTtcbiAgc3ZnUGF0aHNFbnRlci5hcHBlbmQoXCJkZWZzXCIpO1xufVxuXG5mdW5jdGlvbiBleGl0KHN2Z1BhdGhzLCBnKSB7XG4gIHZhciBzdmdQYXRoRXhpdCA9IHN2Z1BhdGhzLmV4aXQoKTtcbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnUGF0aEV4aXQsIGcpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgIC5yZW1vdmUoKTtcblxuICB1dGlsLmFwcGx5VHJhbnNpdGlvbihzdmdQYXRoRXhpdC5zZWxlY3QoXCJwYXRoLnBhdGhcIiksIGcpXG4gICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBnLm5vZGUoZS52KTtcblxuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICB2YXIgcG9pbnRzID0gXy5yYW5nZSh0aGlzLnBhdGhTZWdMaXN0Lmxlbmd0aCkubWFwKGZ1bmN0aW9uKCkgeyByZXR1cm4gc291cmNlOyB9KTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxpbmUoe30sIHBvaW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJkXCIpO1xuICAgICAgfVxuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcIi4vbG9kYXNoXCIpLFxuICAgIGFkZExhYmVsID0gcmVxdWlyZShcIi4vbGFiZWwvYWRkLWxhYmVsXCIpLFxuICAgIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpLFxuICAgIGQzID0gcmVxdWlyZShcIi4vZDNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTm9kZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHNlbGVjdGlvbiwgZywgc2hhcGVzKSB7XG4gIHZhciBzaW1wbGVOb2RlcyA9IGcubm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24odikgeyByZXR1cm4gIXV0aWwuaXNTdWJncmFwaChnLCB2KTsgfSk7XG4gIHZhciBzdmdOb2RlcyA9IHNlbGVjdGlvbi5zZWxlY3RBbGwoXCJnLm5vZGVcIilcbiAgICAuZGF0YShzaW1wbGVOb2RlcywgZnVuY3Rpb24odikgeyByZXR1cm4gdjsgfSlcbiAgICAuY2xhc3NlZChcInVwZGF0ZVwiLCB0cnVlKTtcblxuICBzdmdOb2Rlcy5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuICBzdmdOb2Rlcy5lbnRlcigpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICBzdmdOb2Rlcy5lYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KSxcbiAgICAgICAgdGhpc0dyb3VwID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICBsYWJlbEdyb3VwID0gdGhpc0dyb3VwLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIiksXG4gICAgICAgIGxhYmVsRG9tID0gYWRkTGFiZWwobGFiZWxHcm91cCwgbm9kZSksXG4gICAgICAgIHNoYXBlID0gc2hhcGVzW25vZGUuc2hhcGVdLFxuICAgICAgICBiYm94ID0gXy5waWNrKGxhYmVsRG9tLm5vZGUoKS5nZXRCQm94KCksIFwid2lkdGhcIiwgXCJoZWlnaHRcIik7XG5cbiAgICBub2RlLmVsZW0gPSB0aGlzO1xuXG4gICAgaWYgKG5vZGUuaWQpIHsgdGhpc0dyb3VwLmF0dHIoXCJpZFwiLCBub2RlLmlkKTsgfVxuICAgIGlmIChub2RlLmxhYmVsSWQpIHsgbGFiZWxHcm91cC5hdHRyKFwiaWRcIiwgbm9kZS5sYWJlbElkKTsgfVxuICAgIHV0aWwuYXBwbHlDbGFzcyh0aGlzR3JvdXAsIG5vZGVbXCJjbGFzc1wiXSxcbiAgICAgICh0aGlzR3JvdXAuY2xhc3NlZChcInVwZGF0ZVwiKSA/IFwidXBkYXRlIFwiIDogXCJcIikgKyBcIm5vZGVcIik7XG5cbiAgICBpZiAoXy5oYXMobm9kZSwgXCJ3aWR0aFwiKSkgeyBiYm94LndpZHRoID0gbm9kZS53aWR0aDsgfVxuICAgIGlmIChfLmhhcyhub2RlLCBcImhlaWdodFwiKSkgeyBiYm94LmhlaWdodCA9IG5vZGUuaGVpZ2h0OyB9XG5cbiAgICBiYm94LndpZHRoICs9IG5vZGUucGFkZGluZ0xlZnQgKyBub2RlLnBhZGRpbmdSaWdodDtcbiAgICBiYm94LmhlaWdodCArPSBub2RlLnBhZGRpbmdUb3AgKyBub2RlLnBhZGRpbmdCb3R0b207XG4gICAgbGFiZWxHcm91cC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICtcbiAgICAgICgobm9kZS5wYWRkaW5nTGVmdCAtIG5vZGUucGFkZGluZ1JpZ2h0KSAvIDIpICsgXCIsXCIgK1xuICAgICAgKChub2RlLnBhZGRpbmdUb3AgLSBub2RlLnBhZGRpbmdCb3R0b20pIC8gMikgKyBcIilcIik7XG5cbiAgICB2YXIgc2hhcGVTdmcgPSBzaGFwZShkMy5zZWxlY3QodGhpcyksIGJib3gsIG5vZGUpO1xuICAgIHV0aWwuYXBwbHlTdHlsZShzaGFwZVN2Zywgbm9kZS5zdHlsZSk7XG5cbiAgICB2YXIgc2hhcGVCQm94ID0gc2hhcGVTdmcubm9kZSgpLmdldEJCb3goKTtcbiAgICBub2RlLndpZHRoID0gc2hhcGVCQm94LndpZHRoO1xuICAgIG5vZGUuaGVpZ2h0ID0gc2hhcGVCQm94LmhlaWdodDtcbiAgfSk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc3ZnTm9kZXMuZXhpdCgpLCBnKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHN2Z05vZGVzO1xufVxuIiwiLy8gU3R1YiB0byBnZXQgRDMgZWl0aGVyIHZpYSBOUE0gb3IgZnJvbSB0aGUgZ2xvYmFsIG9iamVjdFxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuZDM7XG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5cbnZhciBkYWdyZTtcblxuaWYgKHJlcXVpcmUpIHtcbiAgdHJ5IHtcbiAgICBkYWdyZSA9IHJlcXVpcmUoXCJkYWdyZVwiKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuaWYgKCFkYWdyZSkge1xuICBkYWdyZSA9IHdpbmRvdy5kYWdyZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkYWdyZTtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cblxudmFyIGdyYXBobGliO1xuXG5pZiAocmVxdWlyZSkge1xuICB0cnkge1xuICAgIGdyYXBobGliID0gcmVxdWlyZShcImdyYXBobGliXCIpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5pZiAoIWdyYXBobGliKSB7XG4gIGdyYXBobGliID0gd2luZG93LmdyYXBobGliO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYXBobGliO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5vZGU6IHJlcXVpcmUoXCIuL2ludGVyc2VjdC1ub2RlXCIpLFxuICBjaXJjbGU6IHJlcXVpcmUoXCIuL2ludGVyc2VjdC1jaXJjbGVcIiksXG4gIGVsbGlwc2U6IHJlcXVpcmUoXCIuL2ludGVyc2VjdC1lbGxpcHNlXCIpLFxuICBwb2x5Z29uOiByZXF1aXJlKFwiLi9pbnRlcnNlY3QtcG9seWdvblwiKSxcbiAgcmVjdDogcmVxdWlyZShcIi4vaW50ZXJzZWN0LXJlY3RcIilcbn07XG4iLCJ2YXIgaW50ZXJzZWN0RWxsaXBzZSA9IHJlcXVpcmUoXCIuL2ludGVyc2VjdC1lbGxpcHNlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdENpcmNsZTtcblxuZnVuY3Rpb24gaW50ZXJzZWN0Q2lyY2xlKG5vZGUsIHJ4LCBwb2ludCkge1xuICByZXR1cm4gaW50ZXJzZWN0RWxsaXBzZShub2RlLCByeCwgcngsIHBvaW50KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0RWxsaXBzZTtcblxuZnVuY3Rpb24gaW50ZXJzZWN0RWxsaXBzZShub2RlLCByeCwgcnksIHBvaW50KSB7XG4gIC8vIEZvcm11bGFlIGZyb206IGh0dHA6Ly9tYXRod29ybGQud29sZnJhbS5jb20vRWxsaXBzZS1MaW5lSW50ZXJzZWN0aW9uLmh0bWxcblxuICB2YXIgY3ggPSBub2RlLng7XG4gIHZhciBjeSA9IG5vZGUueTtcblxuICB2YXIgcHggPSBjeCAtIHBvaW50Lng7XG4gIHZhciBweSA9IGN5IC0gcG9pbnQueTtcblxuICB2YXIgZGV0ID0gTWF0aC5zcXJ0KHJ4ICogcnggKiBweSAqIHB5ICsgcnkgKiByeSAqIHB4ICogcHgpO1xuXG4gIHZhciBkeCA9IE1hdGguYWJzKHJ4ICogcnkgKiBweCAvIGRldCk7XG4gIGlmIChwb2ludC54IDwgY3gpIHtcbiAgICBkeCA9IC1keDtcbiAgfVxuICB2YXIgZHkgPSBNYXRoLmFicyhyeCAqIHJ5ICogcHkgLyBkZXQpO1xuICBpZiAocG9pbnQueSA8IGN5KSB7XG4gICAgZHkgPSAtZHk7XG4gIH1cblxuICByZXR1cm4ge3g6IGN4ICsgZHgsIHk6IGN5ICsgZHl9O1xufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdExpbmU7XG5cbi8qXG4gKiBSZXR1cm5zIHRoZSBwb2ludCBhdCB3aGljaCB0d28gbGluZXMsIHAgYW5kIHEsIGludGVyc2VjdCBvciByZXR1cm5zXG4gKiB1bmRlZmluZWQgaWYgdGhleSBkbyBub3QgaW50ZXJzZWN0LlxuICovXG5mdW5jdGlvbiBpbnRlcnNlY3RMaW5lKHAxLCBwMiwgcTEsIHEyKSB7XG4gIC8vIEFsZ29yaXRobSBmcm9tIEouIEF2cm8sIChlZC4pIEdyYXBoaWNzIEdlbXMsIE5vIDIsIE1vcmdhbiBLYXVmbWFubiwgMTk5NCxcbiAgLy8gcDcgYW5kIHA0NzMuXG5cbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7XG4gIHZhciByMSwgcjIgLCByMywgcjQ7XG4gIHZhciBkZW5vbSwgb2Zmc2V0LCBudW07XG4gIHZhciB4LCB5O1xuXG4gIC8vIENvbXB1dGUgYTEsIGIxLCBjMSwgd2hlcmUgbGluZSBqb2luaW5nIHBvaW50cyAxIGFuZCAyIGlzIEYoeCx5KSA9IGExIHggK1xuICAvLyBiMSB5ICsgYzEgPSAwLlxuICBhMSA9IHAyLnkgLSBwMS55O1xuICBiMSA9IHAxLnggLSBwMi54O1xuICBjMSA9IChwMi54ICogcDEueSkgLSAocDEueCAqIHAyLnkpO1xuXG4gIC8vIENvbXB1dGUgcjMgYW5kIHI0LlxuICByMyA9ICgoYTEgKiBxMS54KSArIChiMSAqIHExLnkpICsgYzEpO1xuICByNCA9ICgoYTEgKiBxMi54KSArIChiMSAqIHEyLnkpICsgYzEpO1xuXG4gIC8vIENoZWNrIHNpZ25zIG9mIHIzIGFuZCByNC4gSWYgYm90aCBwb2ludCAzIGFuZCBwb2ludCA0IGxpZSBvblxuICAvLyBzYW1lIHNpZGUgb2YgbGluZSAxLCB0aGUgbGluZSBzZWdtZW50cyBkbyBub3QgaW50ZXJzZWN0LlxuICBpZiAoKHIzICE9PSAwKSAmJiAocjQgIT09IDApICYmIHNhbWVTaWduKHIzLCByNCkpIHtcbiAgICByZXR1cm4gLypET05UX0lOVEVSU0VDVCovO1xuICB9XG5cbiAgLy8gQ29tcHV0ZSBhMiwgYjIsIGMyIHdoZXJlIGxpbmUgam9pbmluZyBwb2ludHMgMyBhbmQgNCBpcyBHKHgseSkgPSBhMiB4ICsgYjIgeSArIGMyID0gMFxuICBhMiA9IHEyLnkgLSBxMS55O1xuICBiMiA9IHExLnggLSBxMi54O1xuICBjMiA9IChxMi54ICogcTEueSkgLSAocTEueCAqIHEyLnkpO1xuXG4gIC8vIENvbXB1dGUgcjEgYW5kIHIyXG4gIHIxID0gKGEyICogcDEueCkgKyAoYjIgKiBwMS55KSArIGMyO1xuICByMiA9IChhMiAqIHAyLngpICsgKGIyICogcDIueSkgKyBjMjtcblxuICAvLyBDaGVjayBzaWducyBvZiByMSBhbmQgcjIuIElmIGJvdGggcG9pbnQgMSBhbmQgcG9pbnQgMiBsaWVcbiAgLy8gb24gc2FtZSBzaWRlIG9mIHNlY29uZCBsaW5lIHNlZ21lbnQsIHRoZSBsaW5lIHNlZ21lbnRzIGRvXG4gIC8vIG5vdCBpbnRlcnNlY3QuXG4gIGlmICgocjEgIT09IDApICYmIChyMiAhPT0gMCkgJiYgKHNhbWVTaWduKHIxLCByMikpKSB7XG4gICAgcmV0dXJuIC8qRE9OVF9JTlRFUlNFQ1QqLztcbiAgfVxuXG4gIC8vIExpbmUgc2VnbWVudHMgaW50ZXJzZWN0OiBjb21wdXRlIGludGVyc2VjdGlvbiBwb2ludC5cbiAgZGVub20gPSAoYTEgKiBiMikgLSAoYTIgKiBiMSk7XG4gIGlmIChkZW5vbSA9PT0gMCkge1xuICAgIHJldHVybiAvKkNPTExJTkVBUiovO1xuICB9XG5cbiAgb2Zmc2V0ID0gTWF0aC5hYnMoZGVub20gLyAyKTtcblxuICAvLyBUaGUgZGVub20vMiBpcyB0byBnZXQgcm91bmRpbmcgaW5zdGVhZCBvZiB0cnVuY2F0aW5nLiBJdFxuICAvLyBpcyBhZGRlZCBvciBzdWJ0cmFjdGVkIHRvIHRoZSBudW1lcmF0b3IsIGRlcGVuZGluZyB1cG9uIHRoZVxuICAvLyBzaWduIG9mIHRoZSBudW1lcmF0b3IuXG4gIG51bSA9IChiMSAqIGMyKSAtIChiMiAqIGMxKTtcbiAgeCA9IChudW0gPCAwKSA/ICgobnVtIC0gb2Zmc2V0KSAvIGRlbm9tKSA6ICgobnVtICsgb2Zmc2V0KSAvIGRlbm9tKTtcblxuICBudW0gPSAoYTIgKiBjMSkgLSAoYTEgKiBjMik7XG4gIHkgPSAobnVtIDwgMCkgPyAoKG51bSAtIG9mZnNldCkgLyBkZW5vbSkgOiAoKG51bSArIG9mZnNldCkgLyBkZW5vbSk7XG5cbiAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xufVxuXG5mdW5jdGlvbiBzYW1lU2lnbihyMSwgcjIpIHtcbiAgcmV0dXJuIHIxICogcjIgPiAwO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3ROb2RlO1xuXG5mdW5jdGlvbiBpbnRlcnNlY3ROb2RlKG5vZGUsIHBvaW50KSB7XG4gIHJldHVybiBub2RlLmludGVyc2VjdChwb2ludCk7XG59XG4iLCJ2YXIgaW50ZXJzZWN0TGluZSA9IHJlcXVpcmUoXCIuL2ludGVyc2VjdC1saW5lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdFBvbHlnb247XG5cbi8qXG4gKiBSZXR1cm5zIHRoZSBwb2ludCAoe3gsIHl9KSBhdCB3aGljaCB0aGUgcG9pbnQgYXJndW1lbnQgaW50ZXJzZWN0cyB3aXRoIHRoZVxuICogbm9kZSBhcmd1bWVudCBhc3N1bWluZyB0aGF0IGl0IGhhcyB0aGUgc2hhcGUgc3BlY2lmaWVkIGJ5IHBvbHlnb24uXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdFBvbHlnb24obm9kZSwgcG9seVBvaW50cywgcG9pbnQpIHtcbiAgdmFyIHgxID0gbm9kZS54O1xuICB2YXIgeTEgPSBub2RlLnk7XG5cbiAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcblxuICB2YXIgbWluWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgIG1pblkgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIHBvbHlQb2ludHMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuICAgIG1pblggPSBNYXRoLm1pbihtaW5YLCBlbnRyeS54KTtcbiAgICBtaW5ZID0gTWF0aC5taW4obWluWSwgZW50cnkueSk7XG4gIH0pO1xuXG4gIHZhciBsZWZ0ID0geDEgLSBub2RlLndpZHRoIC8gMiAtIG1pblg7XG4gIHZhciB0b3AgPSAgeTEgLSBub2RlLmhlaWdodCAvIDIgLSBtaW5ZO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwMSA9IHBvbHlQb2ludHNbaV07XG4gICAgdmFyIHAyID0gcG9seVBvaW50c1tpIDwgcG9seVBvaW50cy5sZW5ndGggLSAxID8gaSArIDEgOiAwXTtcbiAgICB2YXIgaW50ZXJzZWN0ID0gaW50ZXJzZWN0TGluZShub2RlLCBwb2ludCxcbiAgICAgIHt4OiBsZWZ0ICsgcDEueCwgeTogdG9wICsgcDEueX0sIHt4OiBsZWZ0ICsgcDIueCwgeTogdG9wICsgcDIueX0pO1xuICAgIGlmIChpbnRlcnNlY3QpIHtcbiAgICAgIGludGVyc2VjdGlvbnMucHVzaChpbnRlcnNlY3QpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaW50ZXJzZWN0aW9ucy5sZW5ndGgpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5PIElOVEVSU0VDVElPTiBGT1VORCwgUkVUVVJOIE5PREUgQ0VOVEVSXCIsIG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaWYgKGludGVyc2VjdGlvbnMubGVuZ3RoID4gMSkge1xuICAgIC8vIE1vcmUgaW50ZXJzZWN0aW9ucywgZmluZCB0aGUgb25lIG5lYXJlc3QgdG8gZWRnZSBlbmQgcG9pbnRcbiAgICBpbnRlcnNlY3Rpb25zLnNvcnQoZnVuY3Rpb24ocCwgcSkge1xuICAgICAgdmFyIHBkeCA9IHAueCAtIHBvaW50LngsXG4gICAgICAgICAgcGR5ID0gcC55IC0gcG9pbnQueSxcbiAgICAgICAgICBkaXN0cCA9IE1hdGguc3FydChwZHggKiBwZHggKyBwZHkgKiBwZHkpLFxuXG4gICAgICAgICAgcWR4ID0gcS54IC0gcG9pbnQueCxcbiAgICAgICAgICBxZHkgPSBxLnkgLSBwb2ludC55LFxuICAgICAgICAgIGRpc3RxID0gTWF0aC5zcXJ0KHFkeCAqIHFkeCArIHFkeSAqIHFkeSk7XG5cbiAgICAgIHJldHVybiAoZGlzdHAgPCBkaXN0cSkgPyAtMSA6IChkaXN0cCA9PT0gZGlzdHEgPyAwIDogMSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdGlvbnNbMF07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdFJlY3Q7XG5cbmZ1bmN0aW9uIGludGVyc2VjdFJlY3Qobm9kZSwgcG9pbnQpIHtcbiAgdmFyIHggPSBub2RlLng7XG4gIHZhciB5ID0gbm9kZS55O1xuXG4gIC8vIFJlY3RhbmdsZSBpbnRlcnNlY3Rpb24gYWxnb3JpdGhtIGZyb206XG4gIC8vIGh0dHA6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xMDgxMTMvZmluZC1lZGdlLWJldHdlZW4tdHdvLWJveGVzXG4gIHZhciBkeCA9IHBvaW50LnggLSB4O1xuICB2YXIgZHkgPSBwb2ludC55IC0geTtcbiAgdmFyIHcgPSBub2RlLndpZHRoIC8gMjtcbiAgdmFyIGggPSBub2RlLmhlaWdodCAvIDI7XG5cbiAgdmFyIHN4LCBzeTtcbiAgaWYgKE1hdGguYWJzKGR5KSAqIHcgPiBNYXRoLmFicyhkeCkgKiBoKSB7XG4gICAgLy8gSW50ZXJzZWN0aW9uIGlzIHRvcCBvciBib3R0b20gb2YgcmVjdC5cbiAgICBpZiAoZHkgPCAwKSB7XG4gICAgICBoID0gLWg7XG4gICAgfVxuICAgIHN4ID0gZHkgPT09IDAgPyAwIDogaCAqIGR4IC8gZHk7XG4gICAgc3kgPSBoO1xuICB9IGVsc2Uge1xuICAgIC8vIEludGVyc2VjdGlvbiBpcyBsZWZ0IG9yIHJpZ2h0IG9mIHJlY3QuXG4gICAgaWYgKGR4IDwgMCkge1xuICAgICAgdyA9IC13O1xuICAgIH1cbiAgICBzeCA9IHc7XG4gICAgc3kgPSBkeCA9PT0gMCA/IDAgOiB3ICogZHkgLyBkeDtcbiAgfVxuXG4gIHJldHVybiB7eDogeCArIHN4LCB5OiB5ICsgc3l9O1xufVxuIiwidmFyIHV0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRIdG1sTGFiZWw7XG5cbmZ1bmN0aW9uIGFkZEh0bWxMYWJlbChyb290LCBub2RlKSB7XG4gIHZhciBmbyA9IHJvb3RcbiAgICAuYXBwZW5kKFwiZm9yZWlnbk9iamVjdFwiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMDAwMFwiKTtcblxuICB2YXIgZGl2ID0gZm9cbiAgICAuYXBwZW5kKFwieGh0bWw6ZGl2XCIpO1xuXG4gIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gIHN3aXRjaCh0eXBlb2YgbGFiZWwpIHtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIGRpdi5pbnNlcnQobGFiZWwpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgLy8gQ3VycmVudGx5IHdlIGFzc3VtZSB0aGlzIGlzIGEgRE9NIG9iamVjdC5cbiAgICAgIGRpdi5pbnNlcnQoZnVuY3Rpb24oKSB7IHJldHVybiBsYWJlbDsgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OiBkaXYuaHRtbChsYWJlbCk7XG4gIH1cblxuICB1dGlsLmFwcGx5U3R5bGUoZGl2LCBub2RlLmxhYmVsU3R5bGUpO1xuICBkaXYuc3R5bGUoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAvLyBGaXggZm9yIGZpcmVmb3hcbiAgZGl2LnN0eWxlKFwid2hpdGUtc3BhY2VcIiwgXCJub3dyYXBcIik7XG5cbiAgLy8gVE9ETyBmaW5kIGEgYmV0dGVyIHdheSB0byBnZXQgZGltZW5zaW9ucyBmb3IgZm9yZWlnbk9iamVjdHMuLi5cbiAgdmFyIHcsIGg7XG4gIGRpdlxuICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdyA9IHRoaXMuY2xpZW50V2lkdGg7XG4gICAgICBoID0gdGhpcy5jbGllbnRIZWlnaHQ7XG4gICAgfSk7XG5cbiAgZm9cbiAgICAuYXR0cihcIndpZHRoXCIsIHcpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaCk7XG5cbiAgcmV0dXJuIGZvO1xufVxuIiwidmFyIGFkZFRleHRMYWJlbCA9IHJlcXVpcmUoXCIuL2FkZC10ZXh0LWxhYmVsXCIpLFxuICAgIGFkZEh0bWxMYWJlbCA9IHJlcXVpcmUoXCIuL2FkZC1odG1sLWxhYmVsXCIpLFxuICAgIGFkZFNWR0xhYmVsICA9IHJlcXVpcmUoXCIuL2FkZC1zdmctbGFiZWxcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTGFiZWw7XG5cbmZ1bmN0aW9uIGFkZExhYmVsKHJvb3QsIG5vZGUsIGxvY2F0aW9uKSB7XG4gIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gIHZhciBsYWJlbFN2ZyA9IHJvb3QuYXBwZW5kKFwiZ1wiKTtcblxuICAvLyBBbGxvdyB0aGUgbGFiZWwgdG8gYmUgYSBzdHJpbmcsIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgRE9NIGVsZW1lbnQsIG9yXG4gIC8vIGEgRE9NIGVsZW1lbnQgaXRzZWxmLlxuICBpZiAobm9kZS5sYWJlbFR5cGUgPT09IFwic3ZnXCIpIHtcbiAgICBhZGRTVkdMYWJlbChsYWJlbFN2Zywgbm9kZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGxhYmVsICE9PSBcInN0cmluZ1wiIHx8IG5vZGUubGFiZWxUeXBlID09PSBcImh0bWxcIikge1xuICAgIGFkZEh0bWxMYWJlbChsYWJlbFN2Zywgbm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGV4dExhYmVsKGxhYmVsU3ZnLCBub2RlKTtcbiAgfVxuXG4gIHZhciBsYWJlbEJCb3ggPSBsYWJlbFN2Zy5ub2RlKCkuZ2V0QkJveCgpO1xuICB2YXIgeTtcbiAgc3dpdGNoKGxvY2F0aW9uKSB7XG4gICAgY2FzZSBcInRvcFwiOlxuICAgICAgeSA9ICgtbm9kZS5oZWlnaHQgLyAyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgIHkgPSAobm9kZS5oZWlnaHQgLyAyKSAtIGxhYmVsQkJveC5oZWlnaHQ7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgeSA9ICgtbGFiZWxCQm94LmhlaWdodCAvIDIpO1xuICB9XG4gIGxhYmVsU3ZnLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArICgtbGFiZWxCQm94LndpZHRoIC8gMikgKyBcIixcIiArIHkgKyBcIilcIik7XG5cbiAgcmV0dXJuIGxhYmVsU3ZnO1xufVxuIiwidmFyIHV0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRTVkdMYWJlbDtcblxuZnVuY3Rpb24gYWRkU1ZHTGFiZWwocm9vdCwgbm9kZSkge1xuICB2YXIgZG9tTm9kZSA9IHJvb3Q7XG5cbiAgZG9tTm9kZS5ub2RlKCkuYXBwZW5kQ2hpbGQobm9kZS5sYWJlbCk7XG5cbiAgdXRpbC5hcHBseVN0eWxlKGRvbU5vZGUsIG5vZGUubGFiZWxTdHlsZSk7XG5cbiAgcmV0dXJuIGRvbU5vZGU7XG59XG4iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRleHRMYWJlbDtcblxuLypcbiAqIEF0dGFjaGVzIGEgdGV4dCBsYWJlbCB0byB0aGUgc3BlY2lmaWVkIHJvb3QuIEhhbmRsZXMgZXNjYXBlIHNlcXVlbmNlcy5cbiAqL1xuZnVuY3Rpb24gYWRkVGV4dExhYmVsKHJvb3QsIG5vZGUpIHtcbiAgdmFyIGRvbU5vZGUgPSByb290LmFwcGVuZChcInRleHRcIik7XG5cbiAgdmFyIGxpbmVzID0gcHJvY2Vzc0VzY2FwZVNlcXVlbmNlcyhub2RlLmxhYmVsKS5zcGxpdChcIlxcblwiKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGRvbU5vZGVcbiAgICAgIC5hcHBlbmQoXCJ0c3BhblwiKVxuICAgICAgICAuYXR0cihcInhtbDpzcGFjZVwiLCBcInByZXNlcnZlXCIpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIFwiMVwiKVxuICAgICAgICAudGV4dChsaW5lc1tpXSk7XG4gIH1cblxuICB1dGlsLmFwcGx5U3R5bGUoZG9tTm9kZSwgbm9kZS5sYWJlbFN0eWxlKTtcblxuICByZXR1cm4gZG9tTm9kZTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0VzY2FwZVNlcXVlbmNlcyh0ZXh0KSB7XG4gIHZhciBuZXdUZXh0ID0gXCJcIixcbiAgICAgIGVzY2FwZWQgPSBmYWxzZSxcbiAgICAgIGNoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHtcbiAgICBjaCA9IHRleHRbaV07XG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHN3aXRjaChjaCkge1xuICAgICAgICBjYXNlIFwiblwiOiBuZXdUZXh0ICs9IFwiXFxuXCI7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBuZXdUZXh0ICs9IGNoO1xuICAgICAgfVxuICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiXFxcXFwiKSB7XG4gICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VGV4dCArPSBjaDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld1RleHQ7XG59XG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5cbnZhciBsb2Rhc2g7XG5cbmlmIChyZXF1aXJlKSB7XG4gIHRyeSB7XG4gICAgbG9kYXNoID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuaWYgKCFsb2Rhc2gpIHtcbiAgbG9kYXNoID0gd2luZG93Ll87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbG9kYXNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKSxcbiAgICBkMyA9IHJlcXVpcmUoXCIuL2QzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvc2l0aW9uQ2x1c3RlcnM7XG5cbmZ1bmN0aW9uIHBvc2l0aW9uQ2x1c3RlcnMoc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBjcmVhdGVkID0gc2VsZWN0aW9uLmZpbHRlcihmdW5jdGlvbigpIHsgcmV0dXJuICFkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInVwZGF0ZVwiKTsgfSk7XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBub2RlLnggKyBcIixcIiArIG5vZGUueSArIFwiKVwiO1xuICB9XG5cbiAgY3JlYXRlZC5hdHRyKFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZSk7XG5cbiAgdXRpbC5hcHBseVRyYW5zaXRpb24oc2VsZWN0aW9uLCBnKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcblxuICB1dGlsLmFwcGx5VHJhbnNpdGlvbihjcmVhdGVkLnNlbGVjdEFsbChcInJlY3RcIiksIGcpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGcubm9kZSh2KS53aWR0aDsgfSlcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGcubm9kZSh2KS5oZWlnaHQ7IH0pXG4gICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24odikge1xuICAgICAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICAgICAgcmV0dXJuIC1ub2RlLndpZHRoIC8gMjtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24odikge1xuICAgICAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcbiAgICAgICAgcmV0dXJuIC1ub2RlLmhlaWdodCAvIDI7XG4gICAgICB9KTtcblxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKSxcbiAgICBkMyA9IHJlcXVpcmUoXCIuL2QzXCIpLFxuICAgIF8gPSByZXF1aXJlKFwiLi9sb2Rhc2hcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25FZGdlTGFiZWxzO1xuXG5mdW5jdGlvbiBwb3NpdGlvbkVkZ2VMYWJlbHMoc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBjcmVhdGVkID0gc2VsZWN0aW9uLmZpbHRlcihmdW5jdGlvbigpIHsgcmV0dXJuICFkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInVwZGF0ZVwiKTsgfSk7XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKGUpIHtcbiAgICB2YXIgZWRnZSA9IGcuZWRnZShlKTtcbiAgICByZXR1cm4gXy5oYXMoZWRnZSwgXCJ4XCIpID8gXCJ0cmFuc2xhdGUoXCIgKyBlZGdlLnggKyBcIixcIiArIGVkZ2UueSArIFwiKVwiIDogXCJcIjtcbiAgfVxuXG4gIGNyZWF0ZWQuYXR0cihcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuXG4gIHV0aWwuYXBwbHlUcmFuc2l0aW9uKHNlbGVjdGlvbiwgZylcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIiksXG4gICAgZDMgPSByZXF1aXJlKFwiLi9kM1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvbk5vZGVzO1xuXG5mdW5jdGlvbiBwb3NpdGlvbk5vZGVzKHNlbGVjdGlvbiwgZykge1xuICB2YXIgY3JlYXRlZCA9IHNlbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24oKSB7IHJldHVybiAhZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJ1cGRhdGVcIik7IH0pO1xuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZSh2KSB7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbm9kZS54ICsgXCIsXCIgKyBub2RlLnkgKyBcIilcIjtcbiAgfVxuXG4gIGNyZWF0ZWQuYXR0cihcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuXG4gIHV0aWwuYXBwbHlUcmFuc2l0aW9uKHNlbGVjdGlvbiwgZylcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbn1cbiIsInZhciBfID0gcmVxdWlyZShcIi4vbG9kYXNoXCIpLFxuICAgIGxheW91dCA9IHJlcXVpcmUoXCIuL2RhZ3JlXCIpLmxheW91dDtcblxubW9kdWxlLmV4cG9ydHMgPSByZW5kZXI7XG5cbi8vIFRoaXMgZGVzaWduIGlzIGJhc2VkIG9uIGh0dHA6Ly9ib3N0Lm9ja3Mub3JnL21pa2UvY2hhcnQvLlxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgY3JlYXRlTm9kZXMgPSByZXF1aXJlKFwiLi9jcmVhdGUtbm9kZXNcIiksXG4gICAgICBjcmVhdGVDbHVzdGVycyA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1jbHVzdGVyc1wiKSxcbiAgICAgIGNyZWF0ZUVkZ2VMYWJlbHMgPSByZXF1aXJlKFwiLi9jcmVhdGUtZWRnZS1sYWJlbHNcIiksXG4gICAgICBjcmVhdGVFZGdlUGF0aHMgPSByZXF1aXJlKFwiLi9jcmVhdGUtZWRnZS1wYXRoc1wiKSxcbiAgICAgIHBvc2l0aW9uTm9kZXMgPSByZXF1aXJlKFwiLi9wb3NpdGlvbi1ub2Rlc1wiKSxcbiAgICAgIHBvc2l0aW9uRWRnZUxhYmVscyA9IHJlcXVpcmUoXCIuL3Bvc2l0aW9uLWVkZ2UtbGFiZWxzXCIpLFxuICAgICAgcG9zaXRpb25DbHVzdGVycyA9IHJlcXVpcmUoXCIuL3Bvc2l0aW9uLWNsdXN0ZXJzXCIpLFxuICAgICAgc2hhcGVzID0gcmVxdWlyZShcIi4vc2hhcGVzXCIpLFxuICAgICAgYXJyb3dzID0gcmVxdWlyZShcIi4vYXJyb3dzXCIpO1xuXG4gIHZhciBmbiA9IGZ1bmN0aW9uKHN2ZywgZykge1xuICAgIHByZVByb2Nlc3NHcmFwaChnKTtcblxuICAgIHZhciBvdXRwdXRHcm91cCA9IGNyZWF0ZU9yU2VsZWN0R3JvdXAoc3ZnLCBcIm91dHB1dFwiKSxcbiAgICAgICAgY2x1c3RlcnNHcm91cCA9IGNyZWF0ZU9yU2VsZWN0R3JvdXAob3V0cHV0R3JvdXAsIFwiY2x1c3RlcnNcIiksXG4gICAgICAgIGVkZ2VQYXRoc0dyb3VwID0gY3JlYXRlT3JTZWxlY3RHcm91cChvdXRwdXRHcm91cCwgXCJlZGdlUGF0aHNcIiksXG4gICAgICAgIGVkZ2VMYWJlbHMgPSBjcmVhdGVFZGdlTGFiZWxzKGNyZWF0ZU9yU2VsZWN0R3JvdXAob3V0cHV0R3JvdXAsIFwiZWRnZUxhYmVsc1wiKSwgZyksXG4gICAgICAgIG5vZGVzID0gY3JlYXRlTm9kZXMoY3JlYXRlT3JTZWxlY3RHcm91cChvdXRwdXRHcm91cCwgXCJub2Rlc1wiKSwgZywgc2hhcGVzKTtcblxuICAgIGxheW91dChnKTtcblxuICAgIHBvc2l0aW9uTm9kZXMobm9kZXMsIGcpO1xuICAgIHBvc2l0aW9uRWRnZUxhYmVscyhlZGdlTGFiZWxzLCBnKTtcbiAgICBjcmVhdGVFZGdlUGF0aHMoZWRnZVBhdGhzR3JvdXAsIGcsIGFycm93cyk7XG5cbiAgICB2YXIgY2x1c3RlcnMgPSBjcmVhdGVDbHVzdGVycyhjbHVzdGVyc0dyb3VwLCBnKTtcbiAgICBwb3NpdGlvbkNsdXN0ZXJzKGNsdXN0ZXJzLCBnKTtcblxuICAgIHBvc3RQcm9jZXNzR3JhcGgoZyk7XG4gIH07XG5cbiAgZm4uY3JlYXRlTm9kZXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGNyZWF0ZU5vZGVzO1xuICAgIGNyZWF0ZU5vZGVzID0gdmFsdWU7XG4gICAgcmV0dXJuIGZuO1xuICB9O1xuXG4gIGZuLmNyZWF0ZUNsdXN0ZXJzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjcmVhdGVDbHVzdGVycztcbiAgICBjcmVhdGVDbHVzdGVycyA9IHZhbHVlO1xuICAgIHJldHVybiBmbjtcbiAgfTtcblxuICBmbi5jcmVhdGVFZGdlTGFiZWxzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjcmVhdGVFZGdlTGFiZWxzO1xuICAgIGNyZWF0ZUVkZ2VMYWJlbHMgPSB2YWx1ZTtcbiAgICByZXR1cm4gZm47XG4gIH07XG5cbiAgZm4uY3JlYXRlRWRnZVBhdGhzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjcmVhdGVFZGdlUGF0aHM7XG4gICAgY3JlYXRlRWRnZVBhdGhzID0gdmFsdWU7XG4gICAgcmV0dXJuIGZuO1xuICB9O1xuXG4gIGZuLnNoYXBlcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gc2hhcGVzO1xuICAgIHNoYXBlcyA9IHZhbHVlO1xuICAgIHJldHVybiBmbjtcbiAgfTtcblxuICBmbi5hcnJvd3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGFycm93cztcbiAgICBhcnJvd3MgPSB2YWx1ZTtcbiAgICByZXR1cm4gZm47XG4gIH07XG5cbiAgcmV0dXJuIGZuO1xufVxuXG52YXIgTk9ERV9ERUZBVUxUX0FUVFJTID0ge1xuICBwYWRkaW5nTGVmdDogMTAsXG4gIHBhZGRpbmdSaWdodDogMTAsXG4gIHBhZGRpbmdUb3A6IDEwLFxuICBwYWRkaW5nQm90dG9tOiAxMCxcbiAgcng6IDAsXG4gIHJ5OiAwLFxuICBzaGFwZTogXCJyZWN0XCJcbn07XG5cbnZhciBFREdFX0RFRkFVTFRfQVRUUlMgPSB7XG4gIGFycm93aGVhZDogXCJub3JtYWxcIixcbiAgbGluZUludGVycG9sYXRlOiBcImxpbmVhclwiXG59O1xuXG5mdW5jdGlvbiBwcmVQcm9jZXNzR3JhcGgoZykge1xuICBnLm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgdmFyIG5vZGUgPSBnLm5vZGUodik7XG4gICAgaWYgKCFfLmhhcyhub2RlLCBcImxhYmVsXCIpICYmICFnLmNoaWxkcmVuKHYpLmxlbmd0aCkgeyBub2RlLmxhYmVsID0gdjsgfVxuXG4gICAgaWYgKF8uaGFzKG5vZGUsIFwicGFkZGluZ1hcIikpIHtcbiAgICAgIF8uZGVmYXVsdHMobm9kZSwge1xuICAgICAgICBwYWRkaW5nTGVmdDogbm9kZS5wYWRkaW5nWCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBub2RlLnBhZGRpbmdYXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoXy5oYXMobm9kZSwgXCJwYWRkaW5nWVwiKSkge1xuICAgICAgXy5kZWZhdWx0cyhub2RlLCB7XG4gICAgICAgIHBhZGRpbmdUb3A6IG5vZGUucGFkZGluZ1ksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5vZGUucGFkZGluZ1lcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChfLmhhcyhub2RlLCBcInBhZGRpbmdcIikpIHtcbiAgICAgIF8uZGVmYXVsdHMobm9kZSwge1xuICAgICAgICBwYWRkaW5nTGVmdDogbm9kZS5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IG5vZGUucGFkZGluZyxcbiAgICAgICAgcGFkZGluZ1RvcDogbm9kZS5wYWRkaW5nLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBub2RlLnBhZGRpbmdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF8uZGVmYXVsdHMobm9kZSwgTk9ERV9ERUZBVUxUX0FUVFJTKTtcblxuICAgIF8uZWFjaChbXCJwYWRkaW5nTGVmdFwiLCBcInBhZGRpbmdSaWdodFwiLCBcInBhZGRpbmdUb3BcIiwgXCJwYWRkaW5nQm90dG9tXCJdLCBmdW5jdGlvbihrKSB7XG4gICAgICBub2RlW2tdID0gTnVtYmVyKG5vZGVba10pO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSBkaW1lbnNpb25zIGZvciByZXN0b3JlIGR1cmluZyBwb3N0LXByb2Nlc3NpbmdcbiAgICBpZiAoXy5oYXMobm9kZSwgXCJ3aWR0aFwiKSkgeyBub2RlLl9wcmV2V2lkdGggPSBub2RlLndpZHRoOyB9XG4gICAgaWYgKF8uaGFzKG5vZGUsIFwiaGVpZ2h0XCIpKSB7IG5vZGUuX3ByZXZIZWlnaHQgPSBub2RlLmhlaWdodDsgfVxuICB9KTtcblxuICBnLmVkZ2VzKCkuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVkZ2UgPSBnLmVkZ2UoZSk7XG4gICAgaWYgKCFfLmhhcyhlZGdlLCBcImxhYmVsXCIpKSB7IGVkZ2UubGFiZWwgPSBcIlwiOyB9XG4gICAgXy5kZWZhdWx0cyhlZGdlLCBFREdFX0RFRkFVTFRfQVRUUlMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9zdFByb2Nlc3NHcmFwaChnKSB7XG4gIF8uZWFjaChnLm5vZGVzKCksIGZ1bmN0aW9uKHYpIHtcbiAgICB2YXIgbm9kZSA9IGcubm9kZSh2KTtcblxuICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgZGltZW5zaW9uc1xuICAgIGlmIChfLmhhcyhub2RlLCBcIl9wcmV2V2lkdGhcIikpIHtcbiAgICAgIG5vZGUud2lkdGggPSBub2RlLl9wcmV2V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLndpZHRoO1xuICAgIH1cblxuICAgIGlmIChfLmhhcyhub2RlLCBcIl9wcmV2SGVpZ2h0XCIpKSB7XG4gICAgICBub2RlLmhlaWdodCA9IG5vZGUuX3ByZXZIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLmhlaWdodDtcbiAgICB9XG5cbiAgICBkZWxldGUgbm9kZS5fcHJldldpZHRoO1xuICAgIGRlbGV0ZSBub2RlLl9wcmV2SGVpZ2h0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3JTZWxlY3RHcm91cChyb290LCBuYW1lKSB7XG4gIHZhciBzZWxlY3Rpb24gPSByb290LnNlbGVjdChcImcuXCIgKyBuYW1lKTtcbiAgaWYgKHNlbGVjdGlvbi5lbXB0eSgpKSB7XG4gICAgc2VsZWN0aW9uID0gcm9vdC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBuYW1lKTtcbiAgfVxuICByZXR1cm4gc2VsZWN0aW9uO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpbnRlcnNlY3RSZWN0ID0gcmVxdWlyZShcIi4vaW50ZXJzZWN0L2ludGVyc2VjdC1yZWN0XCIpLFxuICAgIGludGVyc2VjdEVsbGlwc2UgPSByZXF1aXJlKFwiLi9pbnRlcnNlY3QvaW50ZXJzZWN0LWVsbGlwc2VcIiksXG4gICAgaW50ZXJzZWN0Q2lyY2xlID0gcmVxdWlyZShcIi4vaW50ZXJzZWN0L2ludGVyc2VjdC1jaXJjbGVcIiksXG4gICAgaW50ZXJzZWN0UG9seWdvbiA9IHJlcXVpcmUoXCIuL2ludGVyc2VjdC9pbnRlcnNlY3QtcG9seWdvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlY3Q6IHJlY3QsXG4gIGVsbGlwc2U6IGVsbGlwc2UsXG4gIGNpcmNsZTogY2lyY2xlLFxuICBkaWFtb25kOiBkaWFtb25kXG59O1xuXG5mdW5jdGlvbiByZWN0KHBhcmVudCwgYmJveCwgbm9kZSkge1xuICB2YXIgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KFwicmVjdFwiLCBcIjpmaXJzdC1jaGlsZFwiKVxuICAgICAgICAuYXR0cihcInJ4XCIsIG5vZGUucngpXG4gICAgICAgIC5hdHRyKFwicnlcIiwgbm9kZS5yeSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIC1iYm94LndpZHRoIC8gMilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC1iYm94LmhlaWdodCAvIDIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgYmJveC53aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgYmJveC5oZWlnaHQpO1xuXG4gIG5vZGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0UmVjdChub2RlLCBwb2ludCk7XG4gIH07XG5cbiAgcmV0dXJuIHNoYXBlU3ZnO1xufVxuXG5mdW5jdGlvbiBlbGxpcHNlKHBhcmVudCwgYmJveCwgbm9kZSkge1xuICB2YXIgcnggPSBiYm94LndpZHRoIC8gMixcbiAgICAgIHJ5ID0gYmJveC5oZWlnaHQgLyAyLFxuICAgICAgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KFwiZWxsaXBzZVwiLCBcIjpmaXJzdC1jaGlsZFwiKVxuICAgICAgICAuYXR0cihcInhcIiwgLWJib3gud2lkdGggLyAyKVxuICAgICAgICAuYXR0cihcInlcIiwgLWJib3guaGVpZ2h0IC8gMilcbiAgICAgICAgLmF0dHIoXCJyeFwiLCByeClcbiAgICAgICAgLmF0dHIoXCJyeVwiLCByeSk7XG5cbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBpbnRlcnNlY3RFbGxpcHNlKG5vZGUsIHJ4LCByeSwgcG9pbnQpO1xuICB9O1xuXG4gIHJldHVybiBzaGFwZVN2Zztcbn1cblxuZnVuY3Rpb24gY2lyY2xlKHBhcmVudCwgYmJveCwgbm9kZSkge1xuICB2YXIgciA9IE1hdGgubWF4KGJib3gud2lkdGgsIGJib3guaGVpZ2h0KSAvIDIsXG4gICAgICBzaGFwZVN2ZyA9IHBhcmVudC5pbnNlcnQoXCJjaXJjbGVcIiwgXCI6Zmlyc3QtY2hpbGRcIilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIC1iYm94LndpZHRoIC8gMilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC1iYm94LmhlaWdodCAvIDIpXG4gICAgICAgIC5hdHRyKFwiclwiLCByKTtcblxuICBub2RlLmludGVyc2VjdCA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIGludGVyc2VjdENpcmNsZShub2RlLCByLCBwb2ludCk7XG4gIH07XG5cbiAgcmV0dXJuIHNoYXBlU3ZnO1xufVxuXG4vLyBDaXJjdW1zY3JpYmUgYW4gZWxsaXBzZSBmb3IgdGhlIGJvdW5kaW5nIGJveCB3aXRoIGEgZGlhbW9uZCBzaGFwZS4gSSBkZXJpdmVkXG4vLyB0aGUgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBkaWFtb25kIHNoYXBlIGZyb206XG4vLyBodHRwOi8vbWF0aGZvcnVtLm9yZy9rYi9tZXNzYWdlLmpzcGE/bWVzc2FnZUlEPTM3NTAyMzZcbmZ1bmN0aW9uIGRpYW1vbmQocGFyZW50LCBiYm94LCBub2RlKSB7XG4gIHZhciB3ID0gKGJib3gud2lkdGggKiBNYXRoLlNRUlQyKSAvIDIsXG4gICAgICBoID0gKGJib3guaGVpZ2h0ICogTWF0aC5TUVJUMikgLyAyLFxuICAgICAgcG9pbnRzID0gW1xuICAgICAgICB7IHg6ICAwLCB5OiAtaCB9LFxuICAgICAgICB7IHg6IC13LCB5OiAgMCB9LFxuICAgICAgICB7IHg6ICAwLCB5OiAgaCB9LFxuICAgICAgICB7IHg6ICB3LCB5OiAgMCB9XG4gICAgICBdLFxuICAgICAgc2hhcGVTdmcgPSBwYXJlbnQuaW5zZXJ0KFwicG9seWdvblwiLCBcIjpmaXJzdC1jaGlsZFwiKVxuICAgICAgICAuYXR0cihcInBvaW50c1wiLCBwb2ludHMubWFwKGZ1bmN0aW9uKHApIHsgcmV0dXJuIHAueCArIFwiLFwiICsgcC55OyB9KS5qb2luKFwiIFwiKSk7XG5cbiAgbm9kZS5pbnRlcnNlY3QgPSBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuIGludGVyc2VjdFBvbHlnb24obm9kZSwgcG9pbnRzLCBwKTtcbiAgfTtcblxuICByZXR1cm4gc2hhcGVTdmc7XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuL2xvZGFzaFwiKTtcblxuLy8gUHVibGljIHV0aWxpdHkgZnVuY3Rpb25zXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTdWJncmFwaDogaXNTdWJncmFwaCxcbiAgZWRnZVRvSWQ6IGVkZ2VUb0lkLFxuICBhcHBseVN0eWxlOiBhcHBseVN0eWxlLFxuICBhcHBseUNsYXNzOiBhcHBseUNsYXNzLFxuICBhcHBseVRyYW5zaXRpb246IGFwcGx5VHJhbnNpdGlvblxufTtcblxuLypcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIG5vZGUgaW4gdGhlIGdyYXBoIGlzIGEgc3ViZ3JhcGggbm9kZS4gQVxuICogc3ViZ3JhcGggbm9kZSBpcyBvbmUgdGhhdCBjb250YWlucyBvdGhlciBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gaXNTdWJncmFwaChnLCB2KSB7XG4gIHJldHVybiAhIWcuY2hpbGRyZW4odikubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBlZGdlVG9JZChlKSB7XG4gIHJldHVybiBlc2NhcGVJZChlLnYpICsgXCI6XCIgKyBlc2NhcGVJZChlLncpICsgXCI6XCIgKyBlc2NhcGVJZChlLm5hbWUpO1xufVxuXG52YXIgSURfREVMSU0gPSAvOi9nO1xuZnVuY3Rpb24gZXNjYXBlSWQoc3RyKSB7XG4gIHJldHVybiBzdHIgPyBTdHJpbmcoc3RyKS5yZXBsYWNlKElEX0RFTElNLCBcIlxcXFw6XCIpIDogXCJcIjtcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZShkb20sIHN0eWxlRm4pIHtcbiAgaWYgKHN0eWxlRm4pIHtcbiAgICBkb20uYXR0cihcInN0eWxlXCIsIHN0eWxlRm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2xhc3MoZG9tLCBjbGFzc0ZuLCBvdGhlckNsYXNzZXMpIHtcbiAgaWYgKGNsYXNzRm4pIHtcbiAgICBkb21cbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgY2xhc3NGbilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgb3RoZXJDbGFzc2VzICsgXCIgXCIgKyBkb20uYXR0cihcImNsYXNzXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRyYW5zaXRpb24oc2VsZWN0aW9uLCBnKSB7XG4gIHZhciBncmFwaCA9IGcuZ3JhcGgoKTtcblxuICBpZiAoXy5pc1BsYWluT2JqZWN0KGdyYXBoKSkge1xuICAgIHZhciB0cmFuc2l0aW9uID0gZ3JhcGgudHJhbnNpdGlvbjtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHRyYW5zaXRpb24pKSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbihzZWxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rpb247XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiMC40LjExXCI7XG4iXX0=

var DagreFlow=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";!function(){r(1),r(2);var e=r(3),n=r(4),i=r(5),o=function(t){e.init(t),n.init()},a=function(){n.render()},s=function(t,e){n.setNodeStatus(t,e)},h=function(t,e){n.setNodeLabel(t,e)},S=function(){return i.getNodes()};t.exports={init:o,render:a,setNodeStatus:s,setNodeLabel:h,getFlow:S}}()},function(t,e){"use strict";!function(){window.SVGElement.prototype.getTransformToElement=SVGElement.prototype.getTransformToElement||function(t){return t.getScreenCTM().inverse().multiply(this.getScreenCTM())}}()},function(t,e){"use strict";!function(){"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,r){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=r},SVGPathSeg.PATHSEG_UNKNOWN=0,SVGPathSeg.PATHSEG_CLOSEPATH=1,SVGPathSeg.PATHSEG_MOVETO_ABS=2,SVGPathSeg.PATHSEG_MOVETO_REL=3,SVGPathSeg.PATHSEG_LINETO_ABS=4,SVGPathSeg.PATHSEG_LINETO_REL=5,SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,SVGPathSeg.PATHSEG_ARC_ABS=10,SVGPathSeg.PATHSEG_ARC_REL=11,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},SVGPathSegClosePath.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},SVGPathSegClosePath.prototype.clone=function(){return new SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,r){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=r},SVGPathSegMovetoAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegMovetoAbs.prototype.clone=function(){return new SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,r){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=r},SVGPathSegMovetoRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegMovetoRel.prototype.clone=function(){return new SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,r){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=r},SVGPathSegLinetoAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegLinetoAbs.prototype.clone=function(){return new SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,r){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=r},SVGPathSegLinetoRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegLinetoRel.prototype.clone=function(){return new SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,r,n,i,o,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=r,this._x1=n,this._y1=i,this._x2=o,this._y2=a},SVGPathSegCurvetoCubicAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,r,n,i,o,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=r,this._x1=n,this._y1=i,this._x2=o,this._y2=a},SVGPathSegCurvetoCubicRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,r,n,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=r,this._x1=n,this._y1=i},SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,r,n,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=r,this._x1=n,this._y1=i},SVGPathSegCurvetoQuadraticRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,r,n,i,o,a,s){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=r,this._r1=n,this._r2=i,this._angle=o,this._largeArcFlag=a,this._sweepFlag=s},SVGPathSegArcAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},SVGPathSegArcAbs.prototype.clone=function(){return new SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,r,n,i,o,a,s){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=r,this._r1=n,this._r2=i,this._angle=o,this._largeArcFlag=a,this._sweepFlag=s},SVGPathSegArcRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},SVGPathSegArcRel.prototype.clone=function(){return new SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},SVGPathSegLinetoHorizontalAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},SVGPathSegLinetoHorizontalRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},SVGPathSegLinetoVerticalAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},SVGPathSegLinetoVerticalRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,r,n,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=r,this._x2=n,this._y2=i},SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,r,n,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=r,this._x2=n,this._y2=i},SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,r){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=r},SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,r){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=r},SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new SVGPathSegClosePath(void 0)},SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new SVGPathSegMovetoAbs(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new SVGPathSegMovetoRel(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new SVGPathSegLinetoAbs(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new SVGPathSegLinetoRel(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,r,n,i,o){return new SVGPathSegCurvetoCubicAbs(void 0,t,e,r,n,i,o)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,r,n,i,o){return new SVGPathSegCurvetoCubicRel(void 0,t,e,r,n,i,o)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,r,n){return new SVGPathSegCurvetoQuadraticAbs(void 0,t,e,r,n)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,r,n){return new SVGPathSegCurvetoQuadraticRel(void 0,t,e,r,n)},SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,r,n,i,o,a){return new SVGPathSegArcAbs(void 0,t,e,r,n,i,o,a)},SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,r,n,i,o,a){return new SVGPathSegArcRel(void 0,t,e,r,n,i,o,a)},SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new SVGPathSegLinetoHorizontalAbs(void 0,t)},SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new SVGPathSegLinetoHorizontalRel(void 0,t)},SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new SVGPathSegLinetoVerticalAbs(void 0,t)},SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new SVGPathSegLinetoVerticalRel(void 0,t)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,r,n){return new SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,r,n)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,r,n){return new SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,r,n)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)}),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},Object.defineProperty(SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(this._pathElement){var e=!1;t.forEach(function(t){"d"==t.attributeName&&(e=!0)}),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(t){t._owningPathSegList=null}),this._list=[],this._writeListToPath()},SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||0>t||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),this._list[e]=t,t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList._pathSegArrayAsString=function(t){var e="",r=!0;return t.forEach(function(t){r?(r=!1,e+=t._asPathString()):e+=" "+t._asPathString()}),e},SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[];var e=this,r=function(){this.pathSegList=[]};r.prototype.appendSegment=function(t){this.pathSegList.push(t)};var n=function(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};n.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex];return" ">=t&&(" "==t||"\n"==t||"	"==t||"\r"==t||"\f"==t)},n.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},n.prototype._skipOptionalSpacesOrDelimiter=function(){return this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex)?!1:(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},n.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},n.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex];return this._pathSegTypeFromChar(t)},n.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return SVGPathSeg.PATHSEG_LINETO_REL;case"C":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return SVGPathSeg.PATHSEG_ARC_ABS;case"a":return SVGPathSeg.PATHSEG_ARC_REL;case"H":return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return SVGPathSeg.PATHSEG_UNKNOWN}},n.prototype._nextCommandHelper=function(t,e){return("+"==t||"-"==t||"."==t||t>="0"&&"9">=t)&&e!=SVGPathSeg.PATHSEG_CLOSEPATH?e==SVGPathSeg.PATHSEG_MOVETO_ABS?SVGPathSeg.PATHSEG_LINETO_ABS:e==SVGPathSeg.PATHSEG_MOVETO_REL?SVGPathSeg.PATHSEG_LINETO_REL:e:SVGPathSeg.PATHSEG_UNKNOWN},n.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var t=this.peekSegmentType();return t==SVGPathSeg.PATHSEG_MOVETO_ABS||t==SVGPathSeg.PATHSEG_MOVETO_REL},n.prototype._parseNumber=function(){var t=0,e=0,r=1,n=0,i=1,o=1,a=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,i=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&"."!=this._string.charAt(this._currentIndex))){for(var s=this._currentIndex;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=s)for(var h=this._currentIndex-1,S=1;h>=s;)e+=S*(this._string.charAt(h--)-"0"),S*=10;if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;
for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)n+=(this._string.charAt(this._currentIndex++)-"0")*(r*=.1)}if(this._currentIndex!=a&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,o=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var u=e+n;if(u*=i,t&&(u*=Math.pow(10,o*t)),a!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),u}},n.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,e=this._string.charAt(this._currentIndex++);if("0"==e)t=!1;else{if("1"!=e)return;t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},n.prototype.parseSegment=function(){var t=this._string[this._currentIndex],r=this._pathSegTypeFromChar(t);if(r==SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==SVGPathSeg.PATHSEG_UNKNOWN)return null;if(r=this._nextCommandHelper(t,this._previousCommand),r==SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;switch(this._previousCommand=r,r){case SVGPathSeg.PATHSEG_MOVETO_REL:return new SVGPathSegMovetoRel(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_MOVETO_ABS:return new SVGPathSegMovetoAbs(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_REL:return new SVGPathSegLinetoRel(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_ABS:return new SVGPathSegLinetoAbs(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new SVGPathSegLinetoHorizontalRel(e,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new SVGPathSegLinetoHorizontalAbs(e,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new SVGPathSegLinetoVerticalRel(e,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new SVGPathSegLinetoVerticalAbs(e,this._parseNumber());case SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new SVGPathSegClosePath(e);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var n={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicRel(e,n.x,n.y,n.x1,n.y1,n.x2,n.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:var n={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicAbs(e,n.x,n.y,n.x1,n.y1,n.x2,n.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:var n={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicSmoothRel(e,n.x,n.y,n.x2,n.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:var n={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicSmoothAbs(e,n.x,n.y,n.x2,n.y2);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:var n={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoQuadraticRel(e,n.x,n.y,n.x1,n.y1);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:var n={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoQuadraticAbs(e,n.x,n.y,n.x1,n.y1);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new SVGPathSegCurvetoQuadraticSmoothRel(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new SVGPathSegCurvetoQuadraticSmoothAbs(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_ARC_REL:var n={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegArcRel(e,n.x,n.y,n.x1,n.y1,n.arcAngle,n.arcLarge,n.arcSweep);case SVGPathSeg.PATHSEG_ARC_ABS:var n={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegArcAbs(e,n.x,n.y,n.x1,n.y1,n.arcAngle,n.arcLarge,n.arcSweep);default:throw"Unknown path seg type."}};var i=new r,o=new n(t);if(!o.initialCommandIsMoveTo())return[];for(;o.hasMoreData();){var a=o.parseSegment();if(!a)return[];i.appendSegment(a)}return i.pathSegList})}()},function(t,e){"use strict";!function(){var e={shortLabels:!1,shortLabelLength:4,statuses:["SUCCESS","FAILED","PENDING","RUNNING"]},r=function(t){e=_.extend(e,t)},n=function(t){return e[t]};t.exports={init:r,get:n}}()},function(t,e,r){"use strict";!function(){var e,n,i,o,a=r(3),s=r(5),h=r(6),S=r(7),u=function(){e=a.get("svg"),n=e.select("g"),i=a.get("graph"),o=new dagreD3.render,s.create(i)},c=function(){P();var t=400;i.graph().transition=function(e){return e.transition().duration(t)},o(n,i),setTimeout(function(){y(),_()},t+100),g(),S.setZoom(e,n,i)},_=function(){var t=a.get("shortLabels");if(!t)return!1;var r=function(t,e){return"<div class='description'>"+e+"</div>"};e.selectAll("g.node").attr("title",function(t){var e=i.node(t).description;return e?r(t,e):""}).each(function(t){var e=i.node(t).description;e&&jQuery(this).tipsy({gravity:"n",opacity:1,html:!0})})},g=function(){var t=s.getNodes(),e=!0,r=!1,n=void 0;try{for(var i,o=Object.keys(t)[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value,h=t[a];h.properties.status&&p(a,h.properties.status)}}catch(S){r=!0,n=S}finally{try{!e&&o["return"]&&o["return"]()}finally{if(r)throw n}}},p=function(t,e){s.setNodeStatus(t,e);var r=f(t),n=a.get("statuses"),i=!0,o=!1,h=void 0;try{for(var S,u=n[Symbol.iterator]();!(i=(S=u.next()).done);i=!0){var c=S.value;r.classed(c,!1)}}catch(_){o=!0,h=_}finally{try{!i&&u["return"]&&u["return"]()}finally{if(o)throw h}}r.classed(e,!0)},l=function(t,e){var r=f(t);r.select("tspan").text(e)},P=function(){var t=!0,e=!1,r=void 0;try{for(var n,o=Object.keys(i._edgeLabels)[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var a=n.value,s=i._edgeLabels[a];s.lineInterpolate="bundle"}}catch(h){e=!0,r=h}finally{try{!t&&o["return"]&&o["return"]()}finally{if(e)throw r}}},y=function(){var t=s.getClusters();t.forEach(function(t){d(t)})},d=function(t){var e=f(t.id);if(0===e[0].length)return!1;var r=h.icons,n=e.select("rect"),i=e.select(".label g");if(!n[0][0]||!e[0][0])return!1;var o=n.attr("width"),a=n.attr("height");if(!o||!a)return!1;t.cluster.isExpanded?i.attr("transform","translate("+-o/2+","+-a/2+")").classed("toggle-link expanded",!0):(i.attr("transform","translate("+-o/2+","+-a/4+")").classed("toggle-link collapsed",!0),n.attr("width",parseFloat(o)+10)),t.cluster.isExpanded&&(i.selectAll("*").remove(),i.append("text").append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(t.properties.flowLabel)),i.select("text").transition().attr("transform","translate(25, 0)").duration(300);var s=i.insert("path",":first-child");s.attr("d",function(e){return t.cluster.isExpanded?r.minus:r.plus}).attr("transform","translate(0, -4) scale(0.8)"),i.on("click",function(e){t.cluster.isExpanded?G(e):V(e)})},f=function(t){var r=e.selectAll(".cluster,.node");return r.filter(function(e){return e===t})},G=function(t){s.collapseCluster(t);var e=s.getNodes(),r=e[t];if(r.isCluster){var n=r.cluster.contents,o=r.cluster.edges,a=!0,h=!1,S=void 0;try{for(var u,_=Object.keys(n)[Symbol.iterator]();!(a=(u=_.next()).done);a=!0){var g=u.value;i.removeNode(g)}}catch(p){h=!0,S=p}finally{try{!a&&_["return"]&&_["return"]()}finally{if(h)throw S}}o.outer.input.forEach(function(r){var n=r.v;r.linkToCluster&&!e[r.linkToCluster].cluster.isExpanded&&(n=r.linkToCluster),i.setEdge(n,t)}),o.outer.output.forEach(function(r){var n=r.w;r.linkToCluster&&!e[r.linkToCluster].cluster.isExpanded&&(n=r.linkToCluster),i.setEdge(t,n)}),i._nodes[t].label=i._nodes[t].flowLabel}c()},V=function(t){s.expandCluster(t);var e=s.getNodes(),r=e[t];r.isCluster&&!function(){i.removeNode(t),i.setNode(t,r.properties);var n=r.cluster.contents,o=r.cluster.edges,a=[],h=[];Object.keys(n).forEach(function(t){e[t].isCluster?h.push(t):a.push(t)});var S=!0,u=!1,c=void 0;try{for(var _,g=a[Symbol.iterator]();!(S=(_=g.next()).done);S=!0){var p=_.value;i.setNode(p,e[p].properties),i.setParent(p,t)}}catch(l){u=!0,c=l}finally{try{!S&&g["return"]&&g["return"]()}finally{if(u)throw c}}var P=!0,y=!1,d=void 0;try{for(var f,G=h[Symbol.iterator]();!(P=(f=G.next()).done);P=!0){var p=f.value;i.setNode(p,e[p].properties),i.setParent(p,t),s.expandCluster(p);for(var V in e[p].cluster.contents)i.setParent(V,p)}}catch(l){y=!0,d=l}finally{try{!P&&G["return"]&&G["return"]()}finally{if(y)throw d}}var b=!0,A=!1,C=void 0;try{for(var v,m=Object.keys(r.parents)[Symbol.iterator]();!(b=(v=m.next()).done);b=!0){var x=v.value;i.setParent(t,x)}}catch(l){A=!0,C=l}finally{try{!b&&m["return"]&&m["return"]()}finally{if(A)throw C}}o.inner.forEach(function(t){i.setEdge(t.v,t.w)}),o.outer.input.forEach(function(t){var r=t.v;t.linkToCluster&&!e[t.linkToCluster].cluster.isExpanded&&(r=t.linkToCluster),i.setEdge(r,t.w)}),o.outer.output.forEach(function(t){var r=t.w;t.linkToCluster&&!e[t.linkToCluster].cluster.isExpanded&&(r=t.linkToCluster),i.setEdge(t.v,r)}),i._nodes[t].label=""}(),c()};t.exports={init:u,render:c,setNodeLabel:l,setNodeStatus:p}}()},function(t,e,r){"use strict";!function(){var e=r(3),n={},i=function(){return n},o=function(){return n.nodes},a=function(){var t=[];return Object.keys(n.nodes).forEach(function(e){n.nodes[e].isCluster&&t.push(n.nodes[e])}),t},s=function(t){n.nodes={};var e=!0,r=!1,i=void 0;try{for(var o,a=Object.keys(t._nodes)[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;n.nodes[s]={};var _=n.nodes[s];_.id=s,_.properties=h(t,s),_.children=S(t,s),_.parents=u(t,s),_.isCluster=y(t,s),_.isCluster&&(_.cluster=c(t,s))}}catch(g){r=!0,i=g}finally{try{!e&&a["return"]&&a["return"]()}finally{if(r)throw i}}p(),l(t),t._flow=n},h=function(t,r){var n=t._nodes[r];if(y(t,r)){var i=n.label;n.label="",n.flowLabel=i}else{var o=e.get("shortLabels");if(o&&n.shortLabel){var a=e.get("shortLabelLength");n.label.length>a&&(n.description=n.label,n.label=n.label.substring(0,a)+"...")}}return n},S=function(t,e){var r=t._out[e],n={},i=!0,o=!1,a=void 0;try{for(var s,h=Object.keys(r)[Symbol.iterator]();!(i=(s=h.next()).done);i=!0){var S=s.value;n[r[S].w]=!0}}catch(u){o=!0,a=u}finally{try{!i&&h["return"]&&h["return"]()}finally{if(o)throw a}}return n},u=function(t,e){var r={},n=t._in[e],i=!0,o=!1,a=void 0;try{for(var s,h=Object.keys(n)[Symbol.iterator]();!(i=(s=h.next()).done);i=!0){var S=s.value;r[n[S].v]=!0}}catch(u){o=!0,a=u}finally{try{!i&&h["return"]&&h["return"]()}finally{if(o)throw a}}return r},c=function(t,e){var r={isExpanded:!0,contents:{}},n=t._children[e];return r.contents=_(t,n),r.edges=g(t,Object.keys(r.contents)),r},_=function V(t,e){var r={},n=!0,i=!1,o=void 0;try{for(var a,s=Object.keys(e)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var h=a.value;if(r[h]=!0,y(t,h)){var S=V(t,t._children[h]);Object.assign(r,S)}}}catch(u){i=!0,o=u}finally{try{!n&&s["return"]&&s["return"]()}finally{if(i)throw o}}return r},g=function(t,e){var r={inner:[],outer:{input:[],output:[]}},n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var h=a.value,S=t._out[h],u=!0,c=!1,_=void 0;try{for(var g,p=function(){var t=g.value,n=S[t],i=e.filter(function(t){return t===n.w});i.length>0?r.inner.push({v:n.v,w:n.w}):r.outer.output.push({v:n.v,w:n.w})},l=Object.keys(S)[Symbol.iterator]();!(u=(g=l.next()).done);u=!0)p()}catch(P){c=!0,_=P}finally{try{!u&&l["return"]&&l["return"]()}finally{if(c)throw _}}var y=t._in[h],d=!0,f=!1,G=void 0;try{for(var V,b=function(){var t=V.value,n=y[t],i=e.filter(function(t){return t===n.v});0===i.length&&r.outer.input.push({v:n.v,w:n.w})},A=Object.keys(y)[Symbol.iterator]();!(d=(V=A.next()).done);d=!0)b()}catch(P){f=!0,G=P}finally{try{!d&&A["return"]&&A["return"]()}finally{if(f)throw G}}}}catch(P){i=!0,o=P}finally{try{!n&&s["return"]&&s["return"]()}finally{if(i)throw o}}return r},p=function(){var t=a(),e=!0,r=!1,n=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value,h=s.cluster.edges.outer.output,S=!0,u=!1,c=void 0;try{for(var _,g=h[Symbol.iterator]();!(S=(_=g.next()).done);S=!0){var p=_.value,l=P(p,s.id);l&&(p.linkToCluster=l.id)}}catch(y){u=!0,c=y}finally{try{!S&&g["return"]&&g["return"]()}finally{if(u)throw c}}}}catch(y){r=!0,n=y}finally{try{!e&&o["return"]&&o["return"]()}finally{if(r)throw n}}},l=function(t){var e=a(),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var h=o.value,S=h.id,u=!0,c=!1,_=void 0;try{for(var g,p=e[Symbol.iterator]();!(u=(g=p.next()).done);u=!0){var l=g.value;t._children[l.id][S]&&(h.parents[l.id]=!0)}}catch(P){c=!0,_=P}finally{try{!u&&p["return"]&&p["return"]()}finally{if(c)throw _}}}}catch(P){n=!0,i=P}finally{try{!r&&s["return"]&&s["return"]()}finally{if(n)throw i}}},P=function(t,e){var r=a(),n=null,i=!0,o=!1,s=void 0;try{for(var h,S=r[Symbol.iterator]();!(i=(h=S.next()).done);i=!0){var u=h.value,c=u.cluster.edges.outer.input,_=c.filter(function(e){return JSON.stringify(t)===JSON.stringify(e)});if(_.length>0){_[0].linkToCluster=e,n=u;break}}}catch(g){o=!0,s=g}finally{try{!i&&S["return"]&&S["return"]()}finally{if(o)throw s}}return n},y=function(t,e){return Object.keys(t._children[e]).length>0},d=function(t){n.nodes[t]&&n.nodes[t].cluster&&(n.nodes[t].cluster.isExpanded=!0)},f=function(t){n.nodes[t]&&n.nodes[t].cluster&&(n.nodes[t].cluster.isExpanded=!1)},G=function(t,e){n.nodes[t].properties.status=e};t.exports={create:s,getFlow:i,getNodes:o,getClusters:a,expandCluster:d,collapseCluster:f,setNodeStatus:G}}()},function(t,e){"use strict";!function(){var e={plus:"M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z",minus:"M25.979,12.896,5.979,12.896,5.979,19.562,25.979,19.562z"};t.exports={icons:e}}()},function(t,e){"use strict";!function(){var e=1,r=function(t,r,i){var o=d3.behavior.zoom().on("zoom",function(){e=d3.event.scale,r.attr("transform","translate("+d3.event.translate+")scale("+e+")")});t.call(o),n(t,i,o)},n=function(t,r,n){n.translate([(parseInt(t.attr("width"))-r.graph().width*e)/2,20]).scale(e).event(t),t.attr("height",r.graph().height*e+40)};t.exports={setZoom:r}}()}]);
!function(t){function e(t,e){return"function"==typeof t?t.call(e):t}function i(e,i){this.$element=t(e),this.options=i,this.enabled=!0,this.fixTitle()}i.prototype={show:function(){var i=this.getTitle();if(i&&this.enabled){var n=this.tip();n.find(".tipsy-inner")[this.options.html?"html":"text"](i),n[0].className="tipsy",n.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var o=t.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth||0,height:this.$element[0].offsetHeight||0});if("object"==typeof this.$element[0].nearestViewportElement){var s=this.$element[0],l=s.getBoundingClientRect();o.width=l.width,o.height=l.height}var a,h=n[0].offsetWidth,r=n[0].offsetHeight,f=e(this.options.gravity,this.$element[0]);switch(f.charAt(0)){case"n":a={top:o.top+o.height+this.options.offset,left:o.left+o.width/2-h/2};break;case"s":a={top:o.top-r-this.options.offset,left:o.left+o.width/2-h/2};break;case"e":a={top:o.top+o.height/2-r/2,left:o.left-h-this.options.offset};break;case"w":a={top:o.top+o.height/2-r/2,left:o.left+o.width+this.options.offset}}2==f.length&&("w"==f.charAt(1)?a.left=o.left+o.width/2-15:a.left=o.left+o.width/2-h+15),n.css(a).addClass("tipsy-"+f),n.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+f.charAt(0),this.options.className&&n.addClass(e(this.options.className,this.$element[0])),this.options.fade?n.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):n.css({visibility:"visible",opacity:this.options.opacity});var d=this,p=function(t){return function(){d.$tip.stop(),d.tipHovered=t,t||(0===d.options.delayOut?d.hide():setTimeout(function(){"out"==d.hoverState&&d.hide()},d.options.delayOut))}};n.hover(p(!0),p(!1))}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()}):this.tip().remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",t.attr("title")||"").removeAttr("title"),"object"==typeof t.context.nearestViewportElement&&t.children("title").length&&t.append("<original-title>"+(t.children("title").text()||"")+"</original-title>").children("title").remove()},getTitle:function(){var t,e=this.$element,i=this.options;if(this.fixTitle(),"string"==typeof i.title){var n="title"==i.title?"original-title":i.title;t=e.children(n).length?e.children(n).html():e.attr(n)}else"function"==typeof i.title&&(t=i.title.call(e[0]));return t=(""+t).replace(/(^\s*|\s*$)/,""),t||i.fallback},tip:function(){return this.$tip||(this.$tip=t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},t.fn.tipsy=function(e){function n(n){var o=t.data(n,"tipsy");return o||(o=new i(n,t.fn.tipsy.elementOptions(n,e)),t.data(n,"tipsy",o)),o}function o(){var t=n(this);t.hoverState="in",0===e.delayIn?t.show():(t.fixTitle(),setTimeout(function(){"in"==t.hoverState&&t.show()},e.delayIn))}function s(){var t=n(this);if(t.hoverState="out",0===e.delayOut)t.hide();else{var i=function(){t.tipHovered&&e.hoverlock||"out"==t.hoverState&&t.hide()};setTimeout(i,e.delayOut)}}if(e===!0)return this.data("tipsy");if("string"==typeof e){var l=this.data("tipsy");return l&&l[e](),this}if(e=t.extend({},t.fn.tipsy.defaults,e),e.hoverlock&&0===e.delayOut&&(e.delayOut=100),"manual"!=e.trigger){var a=e.live?"live":"bind",h="hover"==e.trigger?"mouseenter":"focus",r="hover"==e.trigger?"mouseleave":"blur";this[a](h,o)[a](r,s)}return this},t.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover",hoverlock:!1},t.fn.tipsy.elementOptions=function(e,i){return t.metadata?t.extend({},i,t(e).metadata()):i},t.fn.tipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"},t.fn.tipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"},t.fn.tipsy.autoBounds=function(e,i){return function(){var n={ns:i[0],ew:i.length>1?i[1]:!1},o=t(document).scrollTop()+e,s=t(document).scrollLeft()+e,l=t(this);return l.offset().top<o&&(n.ns="n"),l.offset().left<s&&(n.ew="w"),t(window).width()+t(document).scrollLeft()-l.offset().left<e&&(n.ew="e"),t(window).height()+t(document).scrollTop()-l.offset().top<e&&(n.ns="s"),n.ns+(n.ew?n.ew:"")}}}(jQuery);