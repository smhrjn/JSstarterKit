webpackJsonp([0],[,function(e,t,o){"use strict";function r(){return a("users")}function n(e){return l("users/"+e)}function a(e){return fetch(c+e).then(s,d)}function l(e){var t=new Request(c+e,{method:"DELETE"});return fetch(t).then(s,d)}function s(e){return e.json()}function d(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=r,t.deleteUser=n,o(0);var u=o(4),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=(0,i.default)()},function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'fastparse'\n    at Function.Module._resolveFilename (module.js:485:15)\n    at Function.Module._load (module.js:437:25)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\css-loader\\node_modules\\css-selector-tokenizer\\lib\\parse.js:3:14)\n    at Module._compile (module.js:569:30)\n    at Module._extensions..js (module.js:580:10)\n    at Object.require.extensions.(anonymous function) [as .js] (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\babel-register\\lib\\node.js:152:7)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\css-loader\\node_modules\\css-selector-tokenizer\\lib\\index.js:1:17)\n    at Module._compile (module.js:569:30)\n    at Module._extensions..js (module.js:580:10)\n    at runLoaders (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at E:\\SM\\Workspace\\JSstarterKit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at E:\\SM\\Workspace\\JSstarterKit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:170:18\n    at loadLoader (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\loader-runner\\lib\\loadLoader.js:27:11)\n    at iteratePitchingLoaders (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\NormalModule.js:179:3)\n    at NormalModule.build (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\NormalModule.js:268:15)\n    at Compilation.buildModule (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\Compilation.js:146:10)\n    at moduleFactory.create (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\Compilation.js:433:9)\n    at factory (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\NormalModuleFactory.js:99:14)\n    at E:\\SM\\Workspace\\JSstarterKit\\node_modules\\tapable\\lib\\Tapable.js:204:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\tapable\\lib\\Tapable.js:208:13)\n    at resolver (E:\\SM\\Workspace\\JSstarterKit\\node_modules\\webpack\\lib\\NormalModuleFactory.js:74:11)")},function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){"use strict";function r(){return n("useMockApi")?"http://localhost:3001/":"https://vast-meadow-41938.herokuapp.com/"}function n(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=o.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,o){"use strict";(function(e){o(2);var t=o(1);(0,t.getUsers)().then(function(o){var r="";o.forEach(function(e){r+=' </tr>\n\t\t\t<td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n\t\t\t<td>'+e.id+"</td>\n\t\t\t<td>"+e.firstName+"</td>\n\t\t\t</tr>\n\t\t"}),e.document.getElementById("users").innerHTML=r;var n=e.document.getElementsByClassName("deleteUser");Array.from(n,function(e){e.onclick=function(e){var o=e.target;e.preventDefault(),(0,t.deleteUser)(o.attributes["data-id"].value);var r=o.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,o(3))}],[5]);