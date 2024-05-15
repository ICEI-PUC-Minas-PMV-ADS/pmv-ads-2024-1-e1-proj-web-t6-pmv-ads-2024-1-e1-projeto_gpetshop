/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/paginaInicial/index.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/paginaInicial/index.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n\n}\n\nbody {\n  background: #f6f9ff;\n  height: 100vh;\n  width: 100%;\n\n  display: contents;\n  justify-content: center;\n  align-items: center;\n\n  color: #2F435A;\n\n}\n\n/* configuração titulos das sessões */\n\n\n.principalTitles {\n  height: 100%;\n  width: 100%;\n  padding: 32px;\n  padding-left: 64px;\n  background-color: 0;\n}\n\n/* configuração barra de navegação lateral oculta */\n\n\n.slide {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  background-color: #FDCE6D;\n  transition: 0.5s ease;\n  transform: translateX(-250px);\n}\n\nul li {\n  list-style: none;\n}\n\n.menu {\n  margin-top: 64px;\n}\n\nul li a {\n  padding: 16px;\n  display: block;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: 0.2s ease-out;\n  color: #2F435A;\n  \n}\n\nul li:hover a {\n  color: #fff;\n  background-color: #2F435A;\n}\n\nul li a i {\n  width: 40px;\n  text-align: center;\n\n}\n\n\n.inputMenu {\n  display: none;\n  visibility: hidden;\n}\n\n.toggle {\n  position: fixed;\n  height: 16px;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  padding-top: 16px;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color:0;\n}\n\n.toggle i {\n  font-size: 30px;\n  margin-left: 16px;\n}\n\n\n.inputMenu:checked~.slide {\n  transform: translateX(0);\n}\n\n\n\n/* configuração Cabeçalho logo*/\n\nmain.topo section.cabecalho {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  max-height: 1000px;\n  padding: 64px;\n  background-color: 0;\n}\n\nmain.topo section.cabecalho .logo img {\n  width: 500px;\n  margin-right: 32px;\n\n}\n\nmain.topo section.cabecalho .textlogo {\n  text-align: right;\n  margin-left: 64px;\n  margin-right: 32px;\n\n}\n\n/* configuração da sessão agendamento*/\n\nmain.cards {\n  display: flex;\n  flex-direction: row;\n  padding: 64px;\n  background-color: 0;\n\n}\n\nmain.cards section.card {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: #FDCE6D4D;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  max-height: 200px;\n  margin-left: 32px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n  \n}\n\nmain.cards section.card .text {\n\n  flex-direction: column;\n  text-align: left;\n  padding: 32px;\n  padding-left: 64px;\n  background-color: 0;\n\n\n\n}\n\n#title {\n  font: bold;\n  color: #11979C;\n\n}\n\nmain.cards section.card:first-child {\n  margin-left: 0;\n}\n\nmain.cards section.card .icon {\n\n  display: flex;\n  width: 180px;\n  height: 180px;\n  \n\n\n}\n\nmain.cards section.card img {\n  width: 150%;\n  padding: 1px;\n  border-radius: 5px;\n}\n\nmain.cards section.card button {\n  padding: 0.5rem 1rem;\n  text-transform: uppercase;\n  border-radius: 10px;\n  border: 0;\n  cursor: pointer;\n  font-size: auto;\n  font-weight: 700;\n  background: linear-gradient(to right, #2F435A, #8195ac);\n  color: #FDCE6D;\n\n}\n\n/* configuração Quem Somos*/\n\nmain.quem section.quemsomos {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 64px;\n  background-color: 0;\n}\n\n\nmain.quem section.quemsomos .textoquem {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-right: 64px;\n  align-self: center;\n}\n\nmain.quem section.quemsomos .foto img {\n\n  width: 350px;\n  margin-right: 32px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n/* configuração Depoimentos*/\n\n.grid1 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  max-width: 100%;\n  font-size: 14px;\n  grid-gap: 0px;\n  background-color: 0;\n  margin-top: 16px;\n  margin-bottom: 64px;\n}\n\n.grid1>div:nth-child(n + 1) {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  background-color: 0;\n  padding-right: 64px;\n  padding-left: 64px;\n  \n \n\n}\n\n#imgdepo {\n  width: 250px;\n}\n\n#depoTitles {\n  font: bold;\n  color: #11979C;\n  margin-bottom: 16px;\n}\n\n\n\n/* configuração Contato com o Suporte*/\n\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  background-color: 0;\n  padding-left: 32px;\n  margin-bottom: 64px;\n \n  \n\n}\n\n.form_box {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n\n}\n\n.form_box form {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  flex-wrap: flex;\n  padding: 16px;\n  margin-left: 16px;\n}\n\n.form_box input,\n.form_box textarea {\n  width: calc(50% - 8px);\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  padding-left: 16px;\n  margin-bottom: 16px;\n  font-size: 16px;\n  background-color: #FDCE6D4D;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n\n.form_box input:first-child {\n  margin-right: 16px;\n\n}\n\n.form_box input {\n  width: 100%;\n\n}\n\n.form_box textarea {\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n\n}\n\n.form_box button {\n  padding: 0.5rem 1rem;\n  text-transform: uppercase;\n  border-radius: 10px;\n  border: 0;\n  cursor: pointer;\n  font-size: auto;\n  font-weight: 700;\n  background: linear-gradient(to right, #2F435A, #8195ac);\n  color: #FDCE6D;\n}\n\n\n/* configuração Redes sociais */\n\n.grid2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: 0;\n\n}\n\n.grid2 img {\n  margin-right: 24px;\n\n\n}\n\n.grid2 .redessociais {\n  margin-left: 20%;\n  margin-top: 10%;\n\n\n}\n\n/* configuração Responsividade para tela de notebook --- não funciona ainda para celulares*/\n\n\n@media screen and (max-width: 720px) {\n  main.cards {\n      flex-direction: column;\n  }\n\n  main.cards section.card {\n      margin-left: 0;\n      margin-bottom: 32px;\n  }\n\n  main.quem section.quemsomos {\n      flex-direction: column;\n  }\n\n  main.quem section.quemsomos .textoquem {\n      text-align: center;\n      padding: 5px;\n      margin-left: 0px;\n      margin-right: 0px;\n      margin-top: 16px;\n      margin-bottom: 16px\n  }\n\n  main.topo section.cabecalho {\n      display: flex;\n      flex-direction: column;\n  }\n\n  main.topo section.cabecalho .textlogo {\n      text-align: center;\n      margin-left: 32px;\n      margin-right: 32px;\n\n  }\n\n  main.quem section.quemsomos .foto img {\n\n      align-items: center;\n      margin-left: 16px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .grid1 {\n      grid-template-columns: 1fr;\n  }\n\n  .grid2 {\n      grid-template-columns: 1fr;\n\n  }\n\n}", "",{"version":3,"sources":["webpack://src/paginaInicial/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n\n}\n\nbody {\n  background: #f6f9ff;\n  height: 100vh;\n  width: 100%;\n\n  display: contents;\n  justify-content: center;\n  align-items: center;\n\n  color: #2F435A;\n\n}\n\n/* configuração titulos das sessões */\n\n\n.principalTitles {\n  height: 100%;\n  width: 100%;\n  padding: 32px;\n  padding-left: 64px;\n  background-color: 0;\n}\n\n/* configuração barra de navegação lateral oculta */\n\n\n.slide {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  background-color: #FDCE6D;\n  transition: 0.5s ease;\n  transform: translateX(-250px);\n}\n\nul li {\n  list-style: none;\n}\n\n.menu {\n  margin-top: 64px;\n}\n\nul li a {\n  padding: 16px;\n  display: block;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: 0.2s ease-out;\n  color: #2F435A;\n  \n}\n\nul li:hover a {\n  color: #fff;\n  background-color: #2F435A;\n}\n\nul li a i {\n  width: 40px;\n  text-align: center;\n\n}\n\n\n.inputMenu {\n  display: none;\n  visibility: hidden;\n}\n\n.toggle {\n  position: fixed;\n  height: 16px;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  padding-top: 16px;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 2px;\n  background-color:0;\n}\n\n.toggle i {\n  font-size: 30px;\n  margin-left: 16px;\n}\n\n\n.inputMenu:checked~.slide {\n  transform: translateX(0);\n}\n\n\n\n/* configuração Cabeçalho logo*/\n\nmain.topo section.cabecalho {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  max-height: 1000px;\n  padding: 64px;\n  background-color: 0;\n}\n\nmain.topo section.cabecalho .logo img {\n  width: 500px;\n  margin-right: 32px;\n\n}\n\nmain.topo section.cabecalho .textlogo {\n  text-align: right;\n  margin-left: 64px;\n  margin-right: 32px;\n\n}\n\n/* configuração da sessão agendamento*/\n\nmain.cards {\n  display: flex;\n  flex-direction: row;\n  padding: 64px;\n  background-color: 0;\n\n}\n\nmain.cards section.card {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: #FDCE6D4D;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  max-height: 200px;\n  margin-left: 32px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n  \n}\n\nmain.cards section.card .text {\n\n  flex-direction: column;\n  text-align: left;\n  padding: 32px;\n  padding-left: 64px;\n  background-color: 0;\n\n\n\n}\n\n#title {\n  font: bold;\n  color: #11979C;\n\n}\n\nmain.cards section.card:first-child {\n  margin-left: 0;\n}\n\nmain.cards section.card .icon {\n\n  display: flex;\n  width: 180px;\n  height: 180px;\n  \n\n\n}\n\nmain.cards section.card img {\n  width: 150%;\n  padding: 1px;\n  border-radius: 5px;\n}\n\nmain.cards section.card button {\n  padding: 0.5rem 1rem;\n  text-transform: uppercase;\n  border-radius: 10px;\n  border: 0;\n  cursor: pointer;\n  font-size: auto;\n  font-weight: 700;\n  background: linear-gradient(to right, #2F435A, #8195ac);\n  color: #FDCE6D;\n\n}\n\n/* configuração Quem Somos*/\n\nmain.quem section.quemsomos {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 64px;\n  background-color: 0;\n}\n\n\nmain.quem section.quemsomos .textoquem {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-right: 64px;\n  align-self: center;\n}\n\nmain.quem section.quemsomos .foto img {\n\n  width: 350px;\n  margin-right: 32px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n/* configuração Depoimentos*/\n\n.grid1 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  max-width: 100%;\n  font-size: 14px;\n  grid-gap: 0px;\n  background-color: 0;\n  margin-top: 16px;\n  margin-bottom: 64px;\n}\n\n.grid1>div:nth-child(n + 1) {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  background-color: 0;\n  padding-right: 64px;\n  padding-left: 64px;\n  \n \n\n}\n\n#imgdepo {\n  width: 250px;\n}\n\n#depoTitles {\n  font: bold;\n  color: #11979C;\n  margin-bottom: 16px;\n}\n\n\n\n/* configuração Contato com o Suporte*/\n\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  background-color: 0;\n  padding-left: 32px;\n  margin-bottom: 64px;\n \n  \n\n}\n\n.form_box {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n\n}\n\n.form_box form {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  flex-wrap: flex;\n  padding: 16px;\n  margin-left: 16px;\n}\n\n.form_box input,\n.form_box textarea {\n  width: calc(50% - 8px);\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  padding-left: 16px;\n  margin-bottom: 16px;\n  font-size: 16px;\n  background-color: #FDCE6D4D;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n\n.form_box input:first-child {\n  margin-right: 16px;\n\n}\n\n.form_box input {\n  width: 100%;\n\n}\n\n.form_box textarea {\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n\n}\n\n.form_box button {\n  padding: 0.5rem 1rem;\n  text-transform: uppercase;\n  border-radius: 10px;\n  border: 0;\n  cursor: pointer;\n  font-size: auto;\n  font-weight: 700;\n  background: linear-gradient(to right, #2F435A, #8195ac);\n  color: #FDCE6D;\n}\n\n\n/* configuração Redes sociais */\n\n.grid2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: 0;\n\n}\n\n.grid2 img {\n  margin-right: 24px;\n\n\n}\n\n.grid2 .redessociais {\n  margin-left: 20%;\n  margin-top: 10%;\n\n\n}\n\n/* configuração Responsividade para tela de notebook --- não funciona ainda para celulares*/\n\n\n@media screen and (max-width: 720px) {\n  main.cards {\n      flex-direction: column;\n  }\n\n  main.cards section.card {\n      margin-left: 0;\n      margin-bottom: 32px;\n  }\n\n  main.quem section.quemsomos {\n      flex-direction: column;\n  }\n\n  main.quem section.quemsomos .textoquem {\n      text-align: center;\n      padding: 5px;\n      margin-left: 0px;\n      margin-right: 0px;\n      margin-top: 16px;\n      margin-bottom: 16px\n  }\n\n  main.topo section.cabecalho {\n      display: flex;\n      flex-direction: column;\n  }\n\n  main.topo section.cabecalho .textlogo {\n      text-align: center;\n      margin-left: 32px;\n      margin-right: 32px;\n\n  }\n\n  main.quem section.quemsomos .foto img {\n\n      align-items: center;\n      margin-left: 16px;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  .grid1 {\n      grid-template-columns: 1fr;\n  }\n\n  .grid2 {\n      grid-template-columns: 1fr;\n\n  }\n\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/paginaInicial/Imagens/ImagemQuemSomos.png":
/*!*******************************************************!*\
  !*** ./src/paginaInicial/Imagens/ImagemQuemSomos.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/ImagemQuemSomos.png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/LogoPetpuc.png":
/*!**************************************************!*\
  !*** ./src/paginaInicial/Imagens/LogoPetpuc.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/LogoPetpuc.png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/depoimentos1 (1).png":
/*!********************************************************!*\
  !*** ./src/paginaInicial/Imagens/depoimentos1 (1).png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/depoimentos1 (1).png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/depoimentos1 (2).png":
/*!********************************************************!*\
  !*** ./src/paginaInicial/Imagens/depoimentos1 (2).png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/depoimentos1 (2).png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/depoimentos1 (3).png":
/*!********************************************************!*\
  !*** ./src/paginaInicial/Imagens/depoimentos1 (3).png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/depoimentos1 (3).png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/depoimentos1 (4).png":
/*!********************************************************!*\
  !*** ./src/paginaInicial/Imagens/depoimentos1 (4).png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/depoimentos1 (4).png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/depoimentos1 (5).png":
/*!********************************************************!*\
  !*** ./src/paginaInicial/Imagens/depoimentos1 (5).png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/depoimentos1 (5).png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/depoimentos1 (6).png":
/*!********************************************************!*\
  !*** ./src/paginaInicial/Imagens/depoimentos1 (6).png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/depoimentos1 (6).png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/icon_facebook.png":
/*!*****************************************************!*\
  !*** ./src/paginaInicial/Imagens/icon_facebook.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/icon_facebook.png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/icon_instagram.png":
/*!******************************************************!*\
  !*** ./src/paginaInicial/Imagens/icon_instagram.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/icon_instagram.png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/icon_whatsapp.png":
/*!*****************************************************!*\
  !*** ./src/paginaInicial/Imagens/icon_whatsapp.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/icon_whatsapp.png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/servicoBanho.png":
/*!****************************************************!*\
  !*** ./src/paginaInicial/Imagens/servicoBanho.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/servicoBanho.png");

/***/ }),

/***/ "./src/paginaInicial/Imagens/servicoTosa.png":
/*!***************************************************!*\
  !*** ./src/paginaInicial/Imagens/servicoTosa.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/servicoTosa.png");

/***/ }),

/***/ "./src/paginaInicial/index.css":
/*!*************************************!*\
  !*** ./src/paginaInicial/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/paginaInicial/index.css");

      
      
      
      
      
      
      
      
      

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
/*!************************************!*\
  !*** ./src/paginaInicial/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/paginaInicial/index.css");
/* harmony import */ var _Imagens_depoimentos1_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Imagens/depoimentos1 (1).png */ "./src/paginaInicial/Imagens/depoimentos1 (1).png");
/* harmony import */ var _Imagens_depoimentos1_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Imagens/depoimentos1 (2).png */ "./src/paginaInicial/Imagens/depoimentos1 (2).png");
/* harmony import */ var _Imagens_depoimentos1_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Imagens/depoimentos1 (3).png */ "./src/paginaInicial/Imagens/depoimentos1 (3).png");
/* harmony import */ var _Imagens_depoimentos1_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Imagens/depoimentos1 (4).png */ "./src/paginaInicial/Imagens/depoimentos1 (4).png");
/* harmony import */ var _Imagens_depoimentos1_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Imagens/depoimentos1 (5).png */ "./src/paginaInicial/Imagens/depoimentos1 (5).png");
/* harmony import */ var _Imagens_depoimentos1_6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Imagens/depoimentos1 (6).png */ "./src/paginaInicial/Imagens/depoimentos1 (6).png");
/* harmony import */ var _Imagens_icon_facebook_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Imagens/icon_facebook.png */ "./src/paginaInicial/Imagens/icon_facebook.png");
/* harmony import */ var _Imagens_icon_instagram_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Imagens/icon_instagram.png */ "./src/paginaInicial/Imagens/icon_instagram.png");
/* harmony import */ var _Imagens_icon_whatsapp_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Imagens/icon_whatsapp.png */ "./src/paginaInicial/Imagens/icon_whatsapp.png");
/* harmony import */ var _Imagens_ImagemQuemSomos_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Imagens/ImagemQuemSomos.png */ "./src/paginaInicial/Imagens/ImagemQuemSomos.png");
/* harmony import */ var _Imagens_LogoPetpuc_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Imagens/LogoPetpuc.png */ "./src/paginaInicial/Imagens/LogoPetpuc.png");
/* harmony import */ var _Imagens_servicoBanho_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Imagens/servicoBanho.png */ "./src/paginaInicial/Imagens/servicoBanho.png");
/* harmony import */ var _Imagens_servicoTosa_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Imagens/servicoTosa.png */ "./src/paginaInicial/Imagens/servicoTosa.png");














})();

/******/ })()
;
//# sourceMappingURL=paginaInicial.js.map