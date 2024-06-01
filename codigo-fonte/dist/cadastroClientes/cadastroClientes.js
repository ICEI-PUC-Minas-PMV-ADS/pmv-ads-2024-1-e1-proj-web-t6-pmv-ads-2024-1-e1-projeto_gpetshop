/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Cadastroclientes/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Cadastroclientes/index.css ***!
  \******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body, html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

#menu {
    
    width: 10%;
    height: 100vh;
    background-color: rgba(253, 206, 109, 1); 
    float: left;
    color: #2F435A; 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}



ul {
    list-style-type: none;
    padding: 0; 
    margin: 0; 
}

li {
    display: flex; 
    align-items: center; 
    padding: 15px 10px; 
    text-align: left; 
    cursor: pointer;
    transition: background-color 0.3s; 
    position: relative;
    font-size: 12px; 
}


    li:hover {
        background-color: rgba(253, 206, 109, 1); 
    }

.menu-icon {
    width: 20px;
     padding: 3px  5px;
    margin-right: 10px;
}

ul ul {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: #FFF1D4; 
    width: 180px; 
}

li:hover > ul {
    display: block;
}

.geral {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    height: 80%;
}

.titulo {
    font-size: 16px;
    text-align: center; 
    margin-bottom: 5px;
    font-weight: bold;
    margin-top: 10px;
    line-height: 1.2; 
    text-align: center;
    color: #2F435A;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.botoes {
    margin-top: 10px; 
    width: 40%;
    display: flex; 
    justify-content: center; 
}

    .botoes button {
        font-family: 'Poppins', sans-serif;
        border-radius: 20px;
        margin: 0 40px;
        padding: 5px 20px; 
        font-size: 12px;
        border: none;
        background-color: #2F435A; 
        color: rgba(253, 206, 109, 1);
        cursor: pointer; 
        width: 25%; 
        max-width: 200px; 
    }

.formulario {
    margin-top: 2px;
    width: 40%;
    padding: 10px;
}

 
.cabecalho {
    font-size: 14px; 
    font-weight: bold; 
    margin-bottom: 5px; 
    background-color: #2F435A;
    color: rgba(253, 206, 109, 1); 
    border-radius: 20px;
    padding: 4px 10px;
    display: flex; 
    align-items: center;
}

    .cabecalho svg {
        margin-right: 5px; 
        vertical-align: middle; 
        fill: #FDCE6D; 
    }

.campo {
    margin-bottom: 10px;
    align-items: center;
    display: flex;
    height: 28px;
}

    .campo img {
        width: 15px;
        margin-right: 15px;
    }

    .campo input {
        flex: 1;
        padding: 1px 6px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #FFF1D4;
        font-family: 'Poppins', sans-serif;
        margin-right: 15px;
    }

    .campo .add {
        margin-left: 15px;
    }


.nomecliente {
    flex: 1;
}

.nomepet {
    flex: 1; 
    margin-left:5px
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
}

.grupo {
    display: grid; 
    grid-template-rows: auto auto;
    grid-gap: 5px; 
}

.campo {
    align-self: start; 
    border-radius: 10px; 
}

   
    .campo select {
        width: 100%;
        background-color: #FFF1D4; 
        padding: 4px;
        border: 1px solid #ccc; 
        border-radius: 10px;
        font-weight: bold; 
        font-family: 'Poppins', sans-serif;
    }
       
        .campo select option {
            
            font-size: 14px;
            color: #2F435A; 
        }

.cabecalho {
    text-align: left;
    font-weight: bold;
}

.observacao {
    text-align: left;
    padding: 5px; 
    padding-top: 10px; 
    height: 80px;
    border: none;
    border-radius: 5px;
    background-color: #FFF1D4;
    resize: none; 
    margin-bottom: 10px
}
.pet1 {
    display: none;
}

.add {
    cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/Cadastroclientes/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,kCAAkC;AACtC;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,wCAAwC;IACxC,WAAW;IACX,cAAc;IACd,6BAA6B;IAC7B,gCAAgC;AACpC;;;;AAIA;IACI,qBAAqB;IACrB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iCAAiC;IACjC,kBAAkB;IAClB,eAAe;AACnB;;;IAGI;QACI,wCAAwC;IAC5C;;AAEJ;IACI,WAAW;KACV,iBAAiB;IAClB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,gCAAgC;IAChC,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,UAAU;IACV,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,4CAA4C;AAChD;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,uBAAuB;AAC3B;;IAEI;QACI,kCAAkC;QAClC,mBAAmB;QACnB,cAAc;QACd,iBAAiB;QACjB,eAAe;QACf,YAAY;QACZ,yBAAyB;QACzB,6BAA6B;QAC7B,eAAe;QACf,UAAU;QACV,gBAAgB;IACpB;;AAEJ;IACI,eAAe;IACf,UAAU;IACV,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;IAEI;QACI,iBAAiB;QACjB,sBAAsB;QACtB,aAAa;IACjB;;AAEJ;IACI,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;IAEI;QACI,WAAW;QACX,kBAAkB;IACtB;;IAEA;QACI,OAAO;QACP,gBAAgB;QAChB,sBAAsB;QACtB,kBAAkB;QAClB,yBAAyB;QACzB,kCAAkC;QAClC,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;;;AAGJ;IACI,OAAO;AACX;;AAEA;IACI,OAAO;IACP;AACJ;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;;IAGI;QACI,WAAW;QACX,yBAAyB;QACzB,YAAY;QACZ,sBAAsB;QACtB,mBAAmB;QACnB,iBAAiB;QACjB,kCAAkC;IACtC;;QAEI;;YAEI,eAAe;YACf,cAAc;QAClB;;AAER;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ;AACJ;AACA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["body, html {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n#menu {\r\n    \r\n    width: 10%;\r\n    height: 100vh;\r\n    background-color: rgba(253, 206, 109, 1); \r\n    float: left;\r\n    color: #2F435A; \r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding: 0; \r\n    margin: 0; \r\n}\r\n\r\nli {\r\n    display: flex; \r\n    align-items: center; \r\n    padding: 15px 10px; \r\n    text-align: left; \r\n    cursor: pointer;\r\n    transition: background-color 0.3s; \r\n    position: relative;\r\n    font-size: 12px; \r\n}\r\n\r\n\r\n    li:hover {\r\n        background-color: rgba(253, 206, 109, 1); \r\n    }\r\n\r\n.menu-icon {\r\n    width: 20px;\r\n     padding: 3px  5px;\r\n    margin-right: 10px;\r\n}\r\n\r\nul ul {\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 100%;\r\n    background-color: #FFF1D4; \r\n    width: 180px; \r\n}\r\n\r\nli:hover > ul {\r\n    display: block;\r\n}\r\n\r\n.geral {\r\n    display: flex; \r\n    flex-direction: column; \r\n    align-items: center;\r\n    height: 80%;\r\n}\r\n\r\n.titulo {\r\n    font-size: 16px;\r\n    text-align: center; \r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n    line-height: 1.2; \r\n    text-align: center;\r\n    color: #2F435A;\r\n    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.botoes {\r\n    margin-top: 10px; \r\n    width: 40%;\r\n    display: flex; \r\n    justify-content: center; \r\n}\r\n\r\n    .botoes button {\r\n        font-family: 'Poppins', sans-serif;\r\n        border-radius: 20px;\r\n        margin: 0 40px;\r\n        padding: 5px 20px; \r\n        font-size: 12px;\r\n        border: none;\r\n        background-color: #2F435A; \r\n        color: rgba(253, 206, 109, 1);\r\n        cursor: pointer; \r\n        width: 25%; \r\n        max-width: 200px; \r\n    }\r\n\r\n.formulario {\r\n    margin-top: 2px;\r\n    width: 40%;\r\n    padding: 10px;\r\n}\r\n\r\n \r\n.cabecalho {\r\n    font-size: 14px; \r\n    font-weight: bold; \r\n    margin-bottom: 5px; \r\n    background-color: #2F435A;\r\n    color: rgba(253, 206, 109, 1); \r\n    border-radius: 20px;\r\n    padding: 4px 10px;\r\n    display: flex; \r\n    align-items: center;\r\n}\r\n\r\n    .cabecalho svg {\r\n        margin-right: 5px; \r\n        vertical-align: middle; \r\n        fill: #FDCE6D; \r\n    }\r\n\r\n.campo {\r\n    margin-bottom: 10px;\r\n    align-items: center;\r\n    display: flex;\r\n    height: 28px;\r\n}\r\n\r\n    .campo img {\r\n        width: 15px;\r\n        margin-right: 15px;\r\n    }\r\n\r\n    .campo input {\r\n        flex: 1;\r\n        padding: 1px 6px;\r\n        border: 1px solid #ccc;\r\n        border-radius: 5px;\r\n        background-color: #FFF1D4;\r\n        font-family: 'Poppins', sans-serif;\r\n        margin-right: 15px;\r\n    }\r\n\r\n    .campo .add {\r\n        margin-left: 15px;\r\n    }\r\n\r\n\r\n.nomecliente {\r\n    flex: 1;\r\n}\r\n\r\n.nomepet {\r\n    flex: 1; \r\n    margin-left:5px\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n    grid-gap: 10px;\r\n}\r\n\r\n.grupo {\r\n    display: grid; \r\n    grid-template-rows: auto auto;\r\n    grid-gap: 5px; \r\n}\r\n\r\n.campo {\r\n    align-self: start; \r\n    border-radius: 10px; \r\n}\r\n\r\n   \r\n    .campo select {\r\n        width: 100%;\r\n        background-color: #FFF1D4; \r\n        padding: 4px;\r\n        border: 1px solid #ccc; \r\n        border-radius: 10px;\r\n        font-weight: bold; \r\n        font-family: 'Poppins', sans-serif;\r\n    }\r\n       \r\n        .campo select option {\r\n            \r\n            font-size: 14px;\r\n            color: #2F435A; \r\n        }\r\n\r\n.cabecalho {\r\n    text-align: left;\r\n    font-weight: bold;\r\n}\r\n\r\n.observacao {\r\n    text-align: left;\r\n    padding: 5px; \r\n    padding-top: 10px; \r\n    height: 80px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #FFF1D4;\r\n    resize: none; \r\n    margin-bottom: 10px\r\n}\r\n.pet1 {\r\n    display: none;\r\n}\r\n\r\n.add {\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/Imagens/agenda.png":
/*!********************************!*\
  !*** ./src/Imagens/agenda.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/agenda.png");

/***/ }),

/***/ "./src/Imagens/cadastro.png":
/*!**********************************!*\
  !*** ./src/Imagens/cadastro.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/cadastro.png");

/***/ }),

/***/ "./src/Imagens/file.png":
/*!******************************!*\
  !*** ./src/Imagens/file.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/file.png");

/***/ }),

/***/ "./src/Imagens/home.png":
/*!******************************!*\
  !*** ./src/Imagens/home.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/home.png");

/***/ }),

/***/ "./src/Imagens/power.png":
/*!*******************************!*\
  !*** ./src/Imagens/power.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/power.png");

/***/ }),

/***/ "./src/Imagens/suporte.png":
/*!*********************************!*\
  !*** ./src/Imagens/suporte.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/suporte.png");

/***/ }),

/***/ "./src/Cadastroclientes/index.css":
/*!****************************************!*\
  !*** ./src/Cadastroclientes/index.css ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/Cadastroclientes/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!***************************************!*\
  !*** ./src/Cadastroclientes/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/Cadastroclientes/index.css");
/* harmony import */ var _Imagens_agenda_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Imagens/agenda.png */ "./src/Imagens/agenda.png");
/* harmony import */ var _Imagens_cadastro_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Imagens/cadastro.png */ "./src/Imagens/cadastro.png");
/* harmony import */ var _Imagens_file_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Imagens/file.png */ "./src/Imagens/file.png");
/* harmony import */ var _Imagens_home_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Imagens/home.png */ "./src/Imagens/home.png");
/* harmony import */ var _Imagens_power_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Imagens/power.png */ "./src/Imagens/power.png");
/* harmony import */ var _Imagens_suporte_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Imagens/suporte.png */ "./src/Imagens/suporte.png");







document.addEventListener("DOMContentLoaded", function () {
  const addInputButtons = document.querySelectorAll(".plus-pet-icon");

  addInputButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const divPetAdd = document.getElementById("div-pet-add");
      const newDivPetAdd = divPetAdd.cloneNode(true);

      const plusPetIcon = newDivPetAdd.querySelector(".plus-pet-icon");
      if (plusPetIcon) {
        plusPetIcon.remove();
      }

      newDivPetAdd
        .querySelectorAll('input[type="text"]')
        .forEach(function (input) {
          input.value = "";
        });

      divPetAdd.parentNode.insertBefore(newDivPetAdd, divPetAdd.nextSibling);
    });
  });
});

})();

/******/ })()
;
//# sourceMappingURL=cadastroClientes.js.map