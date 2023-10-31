/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/app.js":
/*!***********************!*\
  !*** ./dev/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_page_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-page-html.js */ \"./dev/js/import-page-html.js\");\n/* harmony import */ var _input_password_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-password.js */ \"./dev/js/input-password.js\");\n\n\n(0,_import_page_html_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_input_password_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://portfacil/./dev/js/app.js?");

/***/ }),

/***/ "./dev/js/import-page-html.js":
/*!************************************!*\
  !*** ./dev/js/import-page-html.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ importPageHTML; }\n/* harmony export */ });\nfunction importPageHTML() {\n  !function t() {\n    var e, n, i, o, r;\n    for (e = document.getElementsByTagName(\"*\"), n = 0; n < e.length; n++) if (o = (i = e[n]).getAttribute(\"include-html\")) return (r = new XMLHttpRequest()).onreadystatechange = function () {\n      4 == this.readyState && (200 == this.status && (i.innerHTML = this.responseText), 404 == this.status && (i.innerHTML = \"Page not found.\"), i.removeAttribute(\"include-html\"), t());\n    }, r.open(\"GET\", o, !0), void r.send();\n  }();\n}\n\n//# sourceURL=webpack://portfacil/./dev/js/import-page-html.js?");

/***/ }),

/***/ "./dev/js/input-password.js":
/*!**********************************!*\
  !*** ./dev/js/input-password.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ inputPassword; }\n/* harmony export */ });\nfunction inputPassword() {\n  document.addEventListener('DOMContentLoaded', function () {\n    var passwordField = document.getElementById('senha');\n    var passwordToggle = document.getElementById('togglePassword');\n    var isPasswordVisible = false;\n    passwordToggle.addEventListener('click', function () {\n      isPasswordVisible = !isPasswordVisible;\n      passwordField.type = isPasswordVisible ? 'text' : 'password';\n      passwordToggle.src = isPasswordVisible ? './assets/images/icon-olho.svg' : './assets/images/icon-olhoAberto.svg';\n    });\n  });\n}\n\n//# sourceURL=webpack://portfacil/./dev/js/input-password.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/js/app.js");
/******/ 	
/******/ })()
;