/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/telaLogin/telaLogin.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/telaLogin/telaLogin.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  body > div {
    display: flex;
    width: 100%;
    
  }
  
  .container-login {
    display: flex;
    width: 50%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  
  .login {
    display: flex;
    width: 80%;
    height: 331px;
    flex-direction: column;
    gap: 70px;
    justify-content: center;
    align-items: center;
  }
  
  .header > h1 {
    width: 100%;
    font-family: poppinsmedium, sans-serif;
    font-size: 58px;
    color: #fdce6d;
  }
  
  .fields {
    width: 100%;
    max-width: 400px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .field-user {
    width: inherit;
    height: 50px;
    display: flex;
    align-items: center;
  }
  
  #user-field {
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: none;
    outline: 0;
    padding-left: 15px;
  
    font-size: 20px;
    font-family: poppinsmedium, sans-serif;
    color: #2f435a;
    background-color: #fff1d4;
  }
  
  #user-field::placeholder {
    color: rgba(47, 67, 90, 0.5);
  }
  
  .field-password {
    width: 100%;
    height: 50px;
  }
  
  #password-field {
    width: inherit;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
    border: none;
    outline: 0;
    padding: 5px 15px;
  
    font-size: 20px;
    font-family: poppinsmedium, sans-serif;
    color: #2f435a;
    background-color: #fff1d4;
  }
  
  #password-field::placeholder {
    color: rgba(47, 67, 90, 0.5);
  }
  
  .btn {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 50px;
    margin-top: -50px;
  }
  
  .btn > button {
    position: absolute;
    width: inherit;
    height: 100%;
    outline: 0;
    border: none;
  
    border-radius: 50px;
    color: #fdce6d;
    font-size: 24px;
    font-family: poppinssemibold, sans-serif;
    background-color: #2f435a;
    transition: all 0.8s;
  }
  
  .btn > button:hover {
    background-color: #fdce6d;
    color: #2f435a;
    transition: all 0.8s;
    cursor: pointer;
  }
  
  .container-img {
    display: flex;
    width: 50%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #fff1d4;
  }
  
  .container-img-765 {
    display: none;
  }
  
  @media screen and (max-width: 768px) {
    .container-img > img {
      width: 284px;
    }
  }
  
  @media screen and (max-width: 765px) {
    body > div {
      display: flex;
      width: 100%;
      flex-direction: column-reverse;
    }
  
    .container-login {
      display: flex;
      width: 80%;
      height: 50vh;
      justify-content: center;
      align-items: center;
      align-self: center;
      margin-top: 64px;
    }
  
    .container-img {
      display: none;
      width: 50%;
    }
  
    .container-img-765 {
      display: flex;
      margin-top: 80px;
      justify-content: center;
      align-items: center;
    }
  
    .container-img-765 > img {
      justify-self: center;
      align-items: center;
    }
  
    .header > h1 {
      width: 100%;
      font-family: poppinsmedium, sans-serif;
      font-size: 48px;
      color: #fdce6d;
      margin-top: -20px;
      margin-bottom: -20px;
    }
  
    .fields {
      width: 100%;
      max-width: 400px;
      display: flex;
      gap: 15px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    .field-user {
      width: inherit;
      height: 30px;
      display: flex;
      align-items: center;
    }
  
    #user-field {
      width: inherit;
      height: 40px;
      border-radius: 50px;
      border: none;
      outline: 0;
      padding: 5px 15px;
      line-height: 40px;
  
      font-size: 16px;
      font-family: poppinsmedium, sans-serif;
      color: #2f435a;
      background-color: #fff1d4;
    }
  
    #user-field::placeholder {
      color: rgba(47, 67, 90, 0.5);
    }
  
    .field-password {
      width: 100%;
      height: 30px;
    }
  
    #password-field {
      width: inherit;
      height: 40px;
      border-radius: 50px;
      border: none;
      outline: 0;
      padding: 5px 15px;
      line-height: 40px;
  
      font-size: 16px;
      font-family: poppinsmedium, sans-serif;
      color: #2f435a;
      background-color: #fff1d4;
    }
  
    #password-field::placeholder {
      color: rgba(47, 67, 90, 0.5);
    }
  
    .btn {
      position: relative;
      width: 100%;
      max-width: 400px;
      height: 40px;
      margin-top: -40px;
    }
  
    .btn > button {
      position: absolute;
  
      width: inherit;
      height: 100%;
      outline: 0;
      border: none;
  
      border-radius: 50px;
      color: #fdce6d;
      font-size: 20px;
      font-family: poppinssemibold, sans-serif;
      background-color: #2f435a;
      transition: all 0.8s;
    }
  
    .btn > button:hover {
      background-color: #fdce6d;
      color: #2f435a;
      transition: all 0.8s;
    }
  }
  `, "",{"version":3,"sources":["webpack://./src/telaLogin/telaLogin.css"],"names":[],"mappings":"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","sourcesContent":["  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  body > div {\r\n    display: flex;\r\n    width: 100%;\r\n    \r\n  }\r\n  \r\n  .container-login {\r\n    display: flex;\r\n    width: 50%;\r\n    height: 100vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .login {\r\n    display: flex;\r\n    width: 80%;\r\n    height: 331px;\r\n    flex-direction: column;\r\n    gap: 70px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .header > h1 {\r\n    width: 100%;\r\n    font-family: poppinsmedium, sans-serif;\r\n    font-size: 58px;\r\n    color: #fdce6d;\r\n  }\r\n  \r\n  .fields {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    display: flex;\r\n    gap: 15px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .field-user {\r\n    width: inherit;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  #user-field {\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 50px;\r\n    border: none;\r\n    outline: 0;\r\n    padding-left: 15px;\r\n  \r\n    font-size: 20px;\r\n    font-family: poppinsmedium, sans-serif;\r\n    color: #2f435a;\r\n    background-color: #fff1d4;\r\n  }\r\n  \r\n  #user-field::placeholder {\r\n    color: rgba(47, 67, 90, 0.5);\r\n  }\r\n  \r\n  .field-password {\r\n    width: 100%;\r\n    height: 50px;\r\n  }\r\n  \r\n  #password-field {\r\n    width: inherit;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border-radius: 50px;\r\n    border: none;\r\n    outline: 0;\r\n    padding: 5px 15px;\r\n  \r\n    font-size: 20px;\r\n    font-family: poppinsmedium, sans-serif;\r\n    color: #2f435a;\r\n    background-color: #fff1d4;\r\n  }\r\n  \r\n  #password-field::placeholder {\r\n    color: rgba(47, 67, 90, 0.5);\r\n  }\r\n  \r\n  .btn {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    height: 50px;\r\n    margin-top: -50px;\r\n  }\r\n  \r\n  .btn > button {\r\n    position: absolute;\r\n    width: inherit;\r\n    height: 100%;\r\n    outline: 0;\r\n    border: none;\r\n  \r\n    border-radius: 50px;\r\n    color: #fdce6d;\r\n    font-size: 24px;\r\n    font-family: poppinssemibold, sans-serif;\r\n    background-color: #2f435a;\r\n    transition: all 0.8s;\r\n  }\r\n  \r\n  .btn > button:hover {\r\n    background-color: #fdce6d;\r\n    color: #2f435a;\r\n    transition: all 0.8s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .container-img {\r\n    display: flex;\r\n    width: 50%;\r\n    height: 100vh;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #fff1d4;\r\n  }\r\n  \r\n  .container-img-765 {\r\n    display: none;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .container-img > img {\r\n      width: 284px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 765px) {\r\n    body > div {\r\n      display: flex;\r\n      width: 100%;\r\n      flex-direction: column-reverse;\r\n    }\r\n  \r\n    .container-login {\r\n      display: flex;\r\n      width: 80%;\r\n      height: 50vh;\r\n      justify-content: center;\r\n      align-items: center;\r\n      align-self: center;\r\n      margin-top: 64px;\r\n    }\r\n  \r\n    .container-img {\r\n      display: none;\r\n      width: 50%;\r\n    }\r\n  \r\n    .container-img-765 {\r\n      display: flex;\r\n      margin-top: 80px;\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n  \r\n    .container-img-765 > img {\r\n      justify-self: center;\r\n      align-items: center;\r\n    }\r\n  \r\n    .header > h1 {\r\n      width: 100%;\r\n      font-family: poppinsmedium, sans-serif;\r\n      font-size: 48px;\r\n      color: #fdce6d;\r\n      margin-top: -20px;\r\n      margin-bottom: -20px;\r\n    }\r\n  \r\n    .fields {\r\n      width: 100%;\r\n      max-width: 400px;\r\n      display: flex;\r\n      gap: 15px;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n  \r\n    .field-user {\r\n      width: inherit;\r\n      height: 30px;\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n  \r\n    #user-field {\r\n      width: inherit;\r\n      height: 40px;\r\n      border-radius: 50px;\r\n      border: none;\r\n      outline: 0;\r\n      padding: 5px 15px;\r\n      line-height: 40px;\r\n  \r\n      font-size: 16px;\r\n      font-family: poppinsmedium, sans-serif;\r\n      color: #2f435a;\r\n      background-color: #fff1d4;\r\n    }\r\n  \r\n    #user-field::placeholder {\r\n      color: rgba(47, 67, 90, 0.5);\r\n    }\r\n  \r\n    .field-password {\r\n      width: 100%;\r\n      height: 30px;\r\n    }\r\n  \r\n    #password-field {\r\n      width: inherit;\r\n      height: 40px;\r\n      border-radius: 50px;\r\n      border: none;\r\n      outline: 0;\r\n      padding: 5px 15px;\r\n      line-height: 40px;\r\n  \r\n      font-size: 16px;\r\n      font-family: poppinsmedium, sans-serif;\r\n      color: #2f435a;\r\n      background-color: #fff1d4;\r\n    }\r\n  \r\n    #password-field::placeholder {\r\n      color: rgba(47, 67, 90, 0.5);\r\n    }\r\n  \r\n    .btn {\r\n      position: relative;\r\n      width: 100%;\r\n      max-width: 400px;\r\n      height: 40px;\r\n      margin-top: -40px;\r\n    }\r\n  \r\n    .btn > button {\r\n      position: absolute;\r\n  \r\n      width: inherit;\r\n      height: 100%;\r\n      outline: 0;\r\n      border: none;\r\n  \r\n      border-radius: 50px;\r\n      color: #fdce6d;\r\n      font-size: 20px;\r\n      font-family: poppinssemibold, sans-serif;\r\n      background-color: #2f435a;\r\n      transition: all 0.8s;\r\n    }\r\n  \r\n    .btn > button:hover {\r\n      background-color: #fdce6d;\r\n      color: #2f435a;\r\n      transition: all 0.8s;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Imagens/LogoPetpuc.png":
/*!************************************!*\
  !*** ./src/Imagens/LogoPetpuc.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/LogoPetpuc.png");

/***/ }),

/***/ "./src/telaLogin/telaLogin.css":
/*!*************************************!*\
  !*** ./src/telaLogin/telaLogin.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_telaLogin_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./telaLogin.css */ "./node_modules/css-loader/dist/cjs.js!./src/telaLogin/telaLogin.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_telaLogin_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_telaLogin_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_telaLogin_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_telaLogin_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/telaLogin/telaLogin.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Imagens_LogoPetpuc_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Imagens/LogoPetpuc.png */ "./src/Imagens/LogoPetpuc.png");
/* harmony import */ var _telaLogin_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telaLogin.css */ "./src/telaLogin/telaLogin.css");



window.addEventListener('DOMContentLoaded', () => {
    onclickBtnLogar()
})

function onclickBtnLogar() {
    let btnLogar = document.getElementById('Btn-logar');
    btnLogar.addEventListener('click', () => {
        logar()
    })

}

function logar() {
    var login = document.getElementById('user-field').value;
    var senha = document.getElementById("password-field").value;

    // Recupera a lista do localStorage
    var listaColab = localStorage.getItem("listaColab");

    if (listaColab) {
        // Converte a string JSON em um array de objetos
        listaColab = JSON.parse(listaColab);

        // Percorre a lista de colaboradores e valida o login e a senha
        let colaboradorEncontrado = false;

        let colaborador = listaColab.find(item => item.usuario == login)
        if (colaborador) {

            colaboradorEncontrado = true
            localStorage.setItem('user', JSON.stringify(colaborador))
            switch (colaborador.cargo) {
                case "Gestor":
                    window.location.href = "/codigo-fonte/dist/cadastroServicos/CadastroServicos.html";
                    break;
                case "Atendente":
                    window.location.href = "/codigo-fonte/dist/listagemSolicitacoes/listagemSolicitacoes.html";
                    break;
                case "Banhista":
                    window.location.href = "/codigo-fonte/dist/visualizacaoPainelServicosAgendados/visualizacaoPainelServicosAgendados.html";
                    break;


                default:
                    break;
            }
        }



        if (!colaboradorEncontrado) {
            alert("Login ou senha incorretos.");
            // Limpa os campos de entrada
            document.getElementById('user-field').value = '';
            document.getElementById("password-field").value = '';
        }
    } else {
        alert("Nenhuma lista encontrada no localStorage.");
    }
}




})();

/******/ })()
;
//# sourceMappingURL=telaLogin.js.map