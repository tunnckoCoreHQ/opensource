!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.gibon=t()}(this,function(){function n(n,e,r,o){function i(n){n=function(){return u(window.location.pathname)},n(),window.addEventListener("onpopstate",n),window.onclick=function(n){return r(n,u)}}function u(n,t){return n="string"==typeof n?f(n):n,o=e(n,t||{},o)}function f(e){return e=e||"/",window.history.pushState(0,0,e),t(n,e)}return e=e||function(n,t){return n(t)},r=r||function(n,t){if(!(n.metaKey||n.shiftKey||n.ctrlKey||n.altKey)){for(var e=n.target;e&&"a"!==e.localName;)e=e.parentNode;t=window.location,e&&e.host===t.host&&!e.hasAttribute("data-no-routing")&&(u(e.pathname),n.preventDefault())}},{start:i,render:u}}function t(n,t,r){if("function"==typeof n)return n;if(n[t])return n[t];for(var o in n)if(r=e(o),r.regex.test(t)){var i={};if(t.replace(r.regex,function(n){n=arguments;for(var t=1;t<n.length-2;t++)i[r.keys.shift()]=n[t];r.match=1}),r.match)return function(t,e){return e=e||i,n[o](t,e,i)}}}function e(n,t){var e=[];return t="^"+n.replace(/\//g,"\\/").replace(/:(\w+)/g,function(n,t){return e.push(t),"(\\w+)"})+"$",{regex:new RegExp(t,"i"),keys:e}}return n});
