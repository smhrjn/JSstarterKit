webpackJsonp([0],[,function(e,t,n){"use strict";function r(){return u("users")}function o(e){return c("users/"+e)}function u(e){return fetch(f+e).then(a,i)}function c(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(a,i)}function a(e){return e.json()}function i(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=r,t.deleteUser=o,n(0);var s=n(3),d=function(e){return e&&e.__esModule?e:{default:e}}(s),f=(0,d.default)()},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(){return o("useMockApi")?"http://localhost:3001/":"https://vast-meadow-41938.herokuapp.com/"}function o(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";(function(e){n(!function(){var e=new Error('Cannot find module "./index.css"');throw e.code="MODULE_NOT_FOUND",e}());var t=n(1);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+=' </tr>\n\t\t\t<td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n\t\t\t<td>'+e.id+"</td>\n\t\t\t<td>"+e.firstName+"</td>\n\t\t\t</tr>\n\t\t"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,n(2))}],[4]);