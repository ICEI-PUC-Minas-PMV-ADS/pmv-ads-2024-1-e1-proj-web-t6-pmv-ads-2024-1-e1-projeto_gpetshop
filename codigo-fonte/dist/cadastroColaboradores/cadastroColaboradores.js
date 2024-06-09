/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CadastroColaboradores/index.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CadastroColaboradores/index.css ***!
  \***********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body,
html {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

input:disabled,
button:disabled {
    background-color: #f0f0f0;
    color: #a0a0a0;
    border: 1px solid #d0d0d0;
    cursor: default;
    opacity: 0.6;
}

main {
    display: flex;
    padding: 30px;
}

#menu {
    width: 7%;
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
    padding: 3px 5px;
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

li:hover>ul {
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
    margin-bottom: 22px;
    font-weight: bold;
    margin-top: 30px;
    line-height: 1.2;
    text-align: center;
    color: #2F435A;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.botoes {
    width: 40%;
    display: flex;
    justify-content: space-between;
}

.botoes button {
    font-family: 'Poppins', sans-serif;
    border-radius: 20px;
    padding: 5px 25px;
    font-size: 12px;
    border: none;
    background-color: #2F435A;
    color: rgba(253, 206, 109, 1);
    cursor: pointer;
    width: 25%;
    max-width: fit-content;
}

.formulario {
    margin-top: 2px;
    width: 40%;
    padding: 10px;
}



.cabecalho {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 7px;
    background-color: #2F435A;
    color: rgba(253, 206, 109, 1);
    border-radius: 20px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: bold;
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
    align-self: start;
    border-radius: 10px;
}

.campo svg {
    width: 24px;
    height: 19px;
    margin-right: 6px;
    fill: var(--azul, #2F435A);
}

.campo input {
    padding: 2px 10px;
    border: 0px;
    border-radius: 8px;
    background-color: #FFF1D4;
    font-family: 'Poppins', sans-serif;
    color: #2F435A;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
}

.inputSelect {
    display: none;
}

.selectFunctionBox {
    position: relative;
}

.selectFunctionLabel {
    display: flex;
    padding: 2px 10px;
    align-items: center;
    justify-content: space-between;
    border: 0px;
    border-radius: 8px;
    font-size: 13px;
    background-color: #FFF1D4;
    font-family: 'Poppins', sans-serif;
    color: #2F435A;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
    cursor: pointer;
}

.selectFunctionLabel svg {
    width: 10px;
    height: 10px;
}

.selectFunctionOptions {
    position: absolute;
    left: 101%;
    top: -5%;
    padding: 10px;
    border-radius: 8px;
    background: #FFDE9A;
    display: none;
}

.campo input[type="checkbox"]:checked+.selectFunctionBox .selectFunctionOptions {
    display: block;
}

.radio-group-function {
    display: flex;
    align-items: center;
}

.radio-group-function label {
    color: #2F435A;
    font-size: 14px;
    margin-left: 3px;
}

.radio-group-function input {
    margin: 0;
}

.fillWidth {
    flex: 1;
}

.campo .idColaborador {
    width: 70px;
}

input .idColaborador {
    max-width: fit-content;
}

.lista-colaboradores {
    margin-left: 10px;
}

.lista-colaboradores-cabecalho {
    font-size: 16px;
    font-weight: bold;
    color: #2F435A;
    margin: 86px 0 10px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    text-decoration: underline;
    text-decoration-color: rgba(253, 206, 109, 1);
    text-decoration-thickness: 2px;
}

.search-bar-box {
    width: 50%;
    display: flex;
    padding: 5px 20px 5px 10px;
    height: 20px;
    border-radius: 50px;
    background: #2F435A;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
}

.search-bar {
    width: 100%;
    color: #fff;
    border: none;
    outline: none;
    background: #2F435A;
}

.search-bar-icon {
    cursor: pointer;
}

table {
    width: 100%;
    text-align: left;
    margin-top: 10px;
    border-radius: 10px;
    background: rgba(47, 67, 90, 0.05);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
    border-collapse: collapse;
    border-spacing: 0;
}

thead {
    color: #2F435A;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.20);
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
}

th {
    padding: 10px 20px 0px 20px;
}

.table-body {
    color: #2F435A;
    border: #2F435A;
    font-size: 12px;
    overflow-x: scroll;
    font-weight: bolder;
    border: 2px solid #2F435A;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.20);
}

.tr-hover:hover {
    border-radius: 50px;
    background: var(--campos_background, #FFF1D4);
    cursor: pointer;
}

td {
    padding: 5px 0px 5px 20px;
}`, "",{"version":3,"sources":["webpack://./src/CadastroColaboradores/index.css"],"names":[],"mappings":"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","sourcesContent":["body,\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\ninput:disabled,\r\nbutton:disabled {\r\n    background-color: #f0f0f0;\r\n    color: #a0a0a0;\r\n    border: 1px solid #d0d0d0;\r\n    cursor: default;\r\n    opacity: 0.6;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    padding: 30px;\r\n}\r\n\r\n#menu {\r\n    width: 7%;\r\n    height: 100vh;\r\n    background-color: rgba(253, 206, 109, 1);\r\n    float: left;\r\n    color: #2F435A;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nli {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 15px 10px;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n    position: relative;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\nli:hover {\r\n    background-color: rgba(253, 206, 109, 1);\r\n}\r\n\r\n.menu-icon {\r\n    width: 20px;\r\n    padding: 3px 5px;\r\n    margin-right: 10px;\r\n}\r\n\r\nul ul {\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 100%;\r\n    background-color: #FFF1D4;\r\n    width: 180px;\r\n}\r\n\r\nli:hover>ul {\r\n    display: block;\r\n}\r\n\r\n.geral {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 80%;\r\n}\r\n\r\n.titulo {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    margin-bottom: 22px;\r\n    font-weight: bold;\r\n    margin-top: 30px;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    color: #2F435A;\r\n    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.botoes {\r\n    width: 40%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.botoes button {\r\n    font-family: 'Poppins', sans-serif;\r\n    border-radius: 20px;\r\n    padding: 5px 25px;\r\n    font-size: 12px;\r\n    border: none;\r\n    background-color: #2F435A;\r\n    color: rgba(253, 206, 109, 1);\r\n    cursor: pointer;\r\n    width: 25%;\r\n    max-width: fit-content;\r\n}\r\n\r\n.formulario {\r\n    margin-top: 2px;\r\n    width: 40%;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n\r\n.cabecalho {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 7px;\r\n    background-color: #2F435A;\r\n    color: rgba(253, 206, 109, 1);\r\n    border-radius: 20px;\r\n    padding: 4px 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: left;\r\n    font-weight: bold;\r\n}\r\n\r\n.cabecalho svg {\r\n    margin-right: 5px;\r\n    vertical-align: middle;\r\n    fill: #FDCE6D;\r\n}\r\n\r\n.campo {\r\n    margin-bottom: 10px;\r\n    align-items: center;\r\n    display: flex;\r\n    height: 28px;\r\n    align-self: start;\r\n    border-radius: 10px;\r\n}\r\n\r\n.campo svg {\r\n    width: 24px;\r\n    height: 19px;\r\n    margin-right: 6px;\r\n    fill: var(--azul, #2F435A);\r\n}\r\n\r\n.campo input {\r\n    padding: 2px 10px;\r\n    border: 0px;\r\n    border-radius: 8px;\r\n    background-color: #FFF1D4;\r\n    font-family: 'Poppins', sans-serif;\r\n    color: #2F435A;\r\n    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.inputSelect {\r\n    display: none;\r\n}\r\n\r\n.selectFunctionBox {\r\n    position: relative;\r\n}\r\n\r\n.selectFunctionLabel {\r\n    display: flex;\r\n    padding: 2px 10px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border: 0px;\r\n    border-radius: 8px;\r\n    font-size: 13px;\r\n    background-color: #FFF1D4;\r\n    font-family: 'Poppins', sans-serif;\r\n    color: #2F435A;\r\n    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);\r\n    cursor: pointer;\r\n}\r\n\r\n.selectFunctionLabel svg {\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n.selectFunctionOptions {\r\n    position: absolute;\r\n    left: 101%;\r\n    top: -5%;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    background: #FFDE9A;\r\n    display: none;\r\n}\r\n\r\n.campo input[type=\"checkbox\"]:checked+.selectFunctionBox .selectFunctionOptions {\r\n    display: block;\r\n}\r\n\r\n.radio-group-function {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.radio-group-function label {\r\n    color: #2F435A;\r\n    font-size: 14px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.radio-group-function input {\r\n    margin: 0;\r\n}\r\n\r\n.fillWidth {\r\n    flex: 1;\r\n}\r\n\r\n.campo .idColaborador {\r\n    width: 70px;\r\n}\r\n\r\ninput .idColaborador {\r\n    max-width: fit-content;\r\n}\r\n\r\n.lista-colaboradores {\r\n    margin-left: 10px;\r\n}\r\n\r\n.lista-colaboradores-cabecalho {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #2F435A;\r\n    margin: 86px 0 10px;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.title {\r\n    text-decoration: underline;\r\n    text-decoration-color: rgba(253, 206, 109, 1);\r\n    text-decoration-thickness: 2px;\r\n}\r\n\r\n.search-bar-box {\r\n    width: 50%;\r\n    display: flex;\r\n    padding: 5px 20px 5px 10px;\r\n    height: 20px;\r\n    border-radius: 50px;\r\n    background: #2F435A;\r\n    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.search-bar {\r\n    width: 100%;\r\n    color: #fff;\r\n    border: none;\r\n    outline: none;\r\n    background: #2F435A;\r\n}\r\n\r\n.search-bar-icon {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n    background: rgba(47, 67, 90, 0.05);\r\n    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nthead {\r\n    color: #2F435A;\r\n    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.20);\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n}\r\n\r\nth {\r\n    padding: 10px 20px 0px 20px;\r\n}\r\n\r\n.table-body {\r\n    color: #2F435A;\r\n    border: #2F435A;\r\n    font-size: 12px;\r\n    overflow-x: scroll;\r\n    font-weight: bolder;\r\n    border: 2px solid #2F435A;\r\n    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.tr-hover:hover {\r\n    border-radius: 50px;\r\n    background: var(--campos_background, #FFF1D4);\r\n    cursor: pointer;\r\n}\r\n\r\ntd {\r\n    padding: 5px 0px 5px 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/fonts/fonts.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/fonts/fonts.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.poppins-thin {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.poppins-extralight {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.poppins-light {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.poppins-extrabold {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.poppins-black {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.poppins-thin-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.poppins-extralight-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.poppins-light-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.poppins-regular-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.poppins-medium-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.poppins-semibold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.poppins-bold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.poppins-extrabold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.poppins-black-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: italic;
}
`, "",{"version":3,"sources":["webpack://./src/assets/fonts/fonts.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n.poppins-thin {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 100;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-extralight {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 200;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-light {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-regular {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-medium {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-semibold {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-bold {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-extrabold {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 800;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-black {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 900;\r\n  font-style: normal;\r\n}\r\n\r\n.poppins-thin-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 100;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-extralight-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 200;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-light-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 300;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-regular-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-medium-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-semibold-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 600;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-bold-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-extrabold-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 800;\r\n  font-style: italic;\r\n}\r\n\r\n.poppins-black-italic {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 900;\r\n  font-style: italic;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/CadastroColaboradores/index.css":
/*!*********************************************!*\
  !*** ./src/CadastroColaboradores/index.css ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/CadastroColaboradores/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/fonts/fonts.css":
/*!************************************!*\
  !*** ./src/assets/fonts/fonts.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/fonts/fonts.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/CadastroColaboradores/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/CadastroColaboradores/index.css");
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts/fonts.css */ "./src/assets/fonts/fonts.css");



const saveButton = document.getElementById("saveButton");
const newButton = document.getElementById("newButton");
const editButton = document.getElementById("editButton");
const removeButton = document.getElementById("removeButton");
const searchButton = document.getElementById("search-bar-icon");

function retrieveColaboradores() {
    const colaboradores = localStorage.getItem("listaColab");
    return colaboradores ? JSON.parse(colaboradores) : [];
};

function storeColaboradores(colaboradores) {
    localStorage.setItem("listaColab", JSON.stringify(colaboradores));
};

function getFormElements() {
    return {
        id: document.getElementById('id'),
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        telefone: document.getElementById('telefone'),
        cargo: document.getElementsByName('cargo'),
        endereco: document.getElementById('endereco'),
        usuario: document.getElementById('usuario'),
        senha: document.getElementById('senha')
    }
}

function fillFormValues(event, colab = null, edit = false) {
    const formElements = getFormElements();

    if (edit) {
        formElements.id.disabled = true;
        saveButton.disabled = true;
        editButton.disabled = false;
        removeButton.disabled = false;
    }
    else {
        formElements.id.disabled = false;
        saveButton.disabled = false;
        editButton.disabled = true;
        removeButton.disabled = true;
    }

    formElements.id.value = colab?.id || "",
        formElements.nome.value = colab?.nome || "",
        formElements.email.value = colab?.email || "",
        formElements.telefone.value = colab?.telefone || "",
        formElements.endereco.value = colab?.endereco || "",
        formElements.usuario.value = colab?.usuario || "",
        formElements.senha.value = colab?.senha || ""

    if (colab) {
        for (const option of formElements.cargo) {
            if (option.value === colab.cargo) {
                option.checked = true;
                break;
            }
        }
    } else {
        for (const option of formElements.cargo) {
            if (option.value === 'Atendente') {
                option.checked = true;
                break;
            }
        }
    }
}

function getFormValues() {
    const formElements = getFormElements();
    let selectedFuncao;

    for (const option of formElements.cargo) {
        if (option.checked) {
            selectedFuncao = option.value;
            break;
        }
    }

    return {
        id: formElements.id.value,
        nome: formElements.nome.value,
        email: formElements.email.value,
        telefone: formElements.telefone.value,
        cargo: selectedFuncao,
        endereco: formElements.endereco.value,
        usuario: formElements.usuario.value,
        senha: formElements.senha.value
    }
};

function fillColabTable(searchColabs = null) {
    const colaboradores = searchColabs || retrieveColaboradores();
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";

    colaboradores.forEach(colab => {
        const row = document.createElement('tr');
        row.classList.add('tr-hover');

        const cellNome = document.createElement('td');
        cellNome.textContent = colab.nome;
        row.appendChild(cellNome);

        const cellEmail = document.createElement('td');
        cellEmail.textContent = colab.email;
        row.appendChild(cellEmail);

        const cellFuncao = document.createElement('td');
        cellFuncao.textContent = colab.cargo;
        row.appendChild(cellFuncao);

        tableBody.appendChild(row);
        row.addEventListener('click', () => fillFormValues(event, colab, true));
    });
};

function newColaborador() {
    const newColab = getFormValues();

    if (newColab.id === "") {
        alert("ID do colaborador é obrigatório!");
        return
    };
    const savedColaboradores = retrieveColaboradores();

    const hasID = savedColaboradores.find((c) => c.id === newColab.id);

    if (hasID) {
        alert(`Colaborador(a) ${hasID.nome} cadastrado(a) com esse ID!`);
        return
    };

    storeColaboradores([...savedColaboradores, newColab]);
    fillFormValues();
    fillColabTable();
};

function editColaborador() {
    const savedColaboradores = retrieveColaboradores();
    const editingColab = getFormValues();

    const newColabs = savedColaboradores.map((c) => {
        if (c.id === editingColab.id) return editingColab;
        else return c;
    });

    storeColaboradores(newColabs);
    fillColabTable();
    alert("Colaborador alterado com sucesso!");
};

function removeColaborador() {
    const savedColaboradores = retrieveColaboradores();
    const editingColab = getFormValues();

    storeColaboradores(savedColaboradores.filter((c) => c.id !== editingColab.id));
    fillColabTable();
    fillFormValues();
    alert("Colaborador excluído com sucesso!");
};

function searchColaborador() {
    const searchValue = document.getElementById('search-bar').value;

    const savedColaboradores = retrieveColaboradores();
    const findedColabs = savedColaboradores.filter((c) => c.nome.includes(searchValue));
    
    fillColabTable(findedColabs);
};

saveButton.addEventListener('click', newColaborador);
newButton.addEventListener('click', fillFormValues);
editButton.addEventListener('click', editColaborador);
removeButton.addEventListener('click', removeColaborador);
searchButton.addEventListener('click', searchColaborador);

window.onload = () => {
    fillColabTable();
};
})();

/******/ })()
;
//# sourceMappingURL=cadastroColaboradores.js.map