!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("vscode")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const r=n(0),i=(0,n(2).loggerFactory)("<Your Logger Name>","Trace");t.activate=function(e){i.info("[Custom Message] Start extension successed."),e.subscriptions.push(r.commands.registerCommand("HelloOpenSumi",()=>o(this,void 0,void 0,(function*(){i.info("execute HelloOpenSumi"),r.window.showInformationMessage("Hello Kaitian")}))))},t.deactivate=function(){}},function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.loggerFactory=t.Logger=void 0;var u=i(n(0));function c(e,t,n){return void 0===n&&(n=" "),n.repeat(Math.max(0,t-e.length))+e}var a,s=function(){function e(e,t){this.name=e,this.level=t}return Object.defineProperty(e.prototype,"output",{get:function(){return u.window.createOutputChannel(this.name)},enumerable:!1,configurable:!0}),e.prototype.data2String=function(e){return e instanceof Error?e.stack||e.message:!1===e.success&&e.message?e.message:e.toString()},e.prototype.now=function(){var e=new Date;return c(e.getUTCHours()+"",2,"0")+":"+c(e.getMinutes()+"",2,"0")+":"+c(e.getUTCSeconds()+"",2,"0")+"."+e.getMilliseconds()},e.prototype.show=function(){this.output.show()},e.prototype.error=function(e,t){this.logLevel("Error",e,t)},e.prototype.info=function(e,t){this.logLevel("Info",e,t)},e.prototype.warn=function(e,t){this.logLevel("Warn",e,t)},e.prototype.log=function(e,t){this.logLevel(this.level,e,t)},e.prototype.logLevel=function(e,t,n){this.output.appendLine("[".concat(e," - ").concat(this.now(),"] ").concat(t)),n&&this.output.appendLine(this.data2String(n))},e}();t.Logger=s;t.loggerFactory=function(e,t){return a||(a=new s(e,t))}}]));