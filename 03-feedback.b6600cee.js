!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,a=setTimeout(O,t),d?j(e):f}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(w(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function T(e){return a=void 0,y&&r?j(e):(r=i=void 0,f)}function E(){var e=p(),n=w(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(O,t),j(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=g(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},E.flush=function(){return void 0===a?f:T(p())},E}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j=document.querySelector("form");window.addEventListener("load",(function(){Array.from(j.elements).forEach((function(e){if(e.name){var t=localStorage.getItem(e.name);e.value=t}}))})),j.addEventListener("input",(function(e){e.preventDefault(),Array.from(j.elements).forEach((function(e){e.name&&localStorage.setItem(e.name,e.value)}))}))}();
//# sourceMappingURL=03-feedback.b6600cee.js.map
