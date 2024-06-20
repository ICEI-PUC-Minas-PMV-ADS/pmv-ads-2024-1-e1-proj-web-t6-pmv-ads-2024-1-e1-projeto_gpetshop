/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DashboardPerfomance/styles.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DashboardPerfomance/styles.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */

body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
}

/*menu-lateral*/
#slide {
  display: none;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  align-items: flex-start;
  top: 0;
  left: 0;
  padding: 40px 20px;
  background-color: #fdce6d;
  height: 100%;
  width: 250px;
  z-index: 1000;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  border-radius: 0px 10px 10px 0px;
}

#slide>li {
  display: flex;
  list-style-type: none;
  align-items: center;
  margin-bottom: 20px;
}

#slide>li:hover>.drop-down-agenda {
  display: block;
  position: absolute;
  left: 210px;
  top: 95px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 100;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

#slide>li:hover>.drop-down-cadastro {
  display: block;
  position: absolute;
  left: 210px;
  top: 135px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 90;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

#slide>li>a {
  line-height: 18px;
  color: #2f435a;
  text-decoration: none;
  font-size: 20px;
  margin-left: 10px;
}

.menu-container {
  display: flex;
}

.um {
  margin-left: 75px;
}

.dois {
  margin-left: 45px;
}

.drop-down-agenda {
  display: none;
  position: absolute;
  left: 210px;
  top: 90px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 100;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.drop-down-agenda>ul {
  list-style-type: none;
  margin: 0;
}

.drop-down-agenda>ul>li {
  margin-bottom: 8px;
  margin-left: 0;
}

.drop-down-agenda>ul>li>a {
  color: #2f435a;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-agenda>ul>li>a:hover {
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
}

.drop-down-cadastro {
  display: none;
  position: absolute;
  left: 210px;
  top: 135px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.drop-down-cadastro>ul {
  list-style-type: none;
}

.drop-down-cadastro>ul>li {
  margin-bottom: 8px;
}

.drop-down-cadastro>ul>li>a {
  color: #2f435a;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-cadastro>ul>li>a:hover {
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
}

.fa-home,
.fa-power-off {
  color: #2f435a;
  font-size: 24px;
}

.fa-headset {
  font-size: 23px;
  color: #2f435a;
}

.fa-calendar {
  font-size: 23px;
  padding-left: 3px;
  color: #2f435a;
}

.fa-user-group {
  font-size: 22px;
  color: #2f435a;
}

.fa-file-lines {
  font-size: 25px;
  padding-left: 3px;
  color: #2f435a;
}

/*menu-lateral*/

/*cabeçalho*/

header {
  display: flex;
  width: 1024px;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  margin-top: 40px;
}

.header-pagina {
  display: none;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #2f435a;
  font-size: 20px;
}

.menu-icon-container {
  display: flex;
  align-items: center;
  width: 80px;
  height: 43px;
  top: 0px;
  left: 0px;
  padding-top: 5px;
  cursor: pointer;
  border-radius: 2px;
}

.fa-bars {
  font-weight: 600;
  font-size: 36px;
  color: #2f435a;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.fa-bars:hover {
  font-weight: 600;
  color: #fdce6d;
  transition: 0.2s all;
}

.menu-icon-container>button {
  background-color: transparent;
  width: 34px;
  height: 30px;
  outline: 0;
  border: none;
  cursor: pointer;
}

.title-principal {
  display: flex;
  align-items: center;
  color: #2f435a;
  font-size: 24px;
}

.logo {
  display: flex;
  border: none;
}


.container {
  display: flex;
  width: 1024px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 1.5em;
  color: #333;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
  background-color: #2E3B55;
  color: #FFC107;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 10rem;
  /* Ajuste a largura conforme necessário */
  margin-bottom: 20px;
}

.card-f {
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: #2E3B55;
  color: #FFC107;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: start;
  width: 10rem;
  /* Ajuste a largura conforme necessário */
  margin-bottom: 20px;
}

.title {
  text-align: start;
  font-size: 1.2em;
  margin: 0;
}

.number {
  font-size: 2.5em;
  margin: 0;
}

.date-range {
  margin: 30px;
  margin-top: 0.4125em;
  display: flex;
  gap: 20px;
}

.date-picker {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.3125em;
}

.date-picker label {
  font-size: 1em;
  color: #2E3B55;
  margin-bottom: 5px;
  align-items: flex-start;
  padding-left: 0.625em;
  font-weight: bold;
}

.date-picker input {
  display: flex;
  height: 1.5625em;
  margin-left: 0.3125em;
  margin-top: 0.3125em;
  padding-left: 0.625em;
  padding-right: 0.3125em;
  align-items: flex-start;
  background-color: #FFF1D4;
  border: none;
  border-radius: 3.125em;
  color: #2F435A;
  font-size: 0.9em;
  outline: 0;
}

.card-container {
  margin-top: 2.3125em;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.title-search-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  margin-bottom: 20px;
}

.title-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 232px;
  height: 20px;
  font-size: 20px;
  color: #2F435A;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  border-bottom: 2px solid #fdce6d;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.search-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.search-bar input {
  color: #FDCE6D;
}

#searchBarList {
  display: flex;
  justify-content: center;
  padding-left: 15px;
  width: 305px;
  height: 30px;
  color: #fddb89;
  font-size: 16px;
  background: #2F435A;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  outline: 0;
}

#searchBarList::placeholder {
  color: rgba(255, 231, 190, 0.79);
}

.box-list {
  display: flex;
  position: relative;
  width: 63.75em;
  height: 20.25em;
  background-color: rgba(47, 67, 90, 0.05);
  border-radius: 10px;
  margin-bottom: 100px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.box-title {
  display: flex;
  margin-top: 0.3125em;
  width: 63.75em;
  height: 1em;
  flex-direction: row;
  color: #2F435A;
}

.box-title-name {
  display: flex;
  margin-left: 1.5625em;
  width: 3.375em;
  height: 1em;
  color: #2F435A;
}

.box-title-email {
  display: flex;
  margin-left: 18.75em;
  width: 3.9375em;
  height: 1em;
  color: #2F435A;
}

.box-title-fone {
  display: flex;
  margin-left: 18.75em;
  width: 5.6875em;
  height: 1em;
  color: #2F435A;
}

.border-box-list {
  box-sizing: border-box;
  position: absolute;
  width: 62.5em;
  height: 17.9375em;
  margin-left: 0.625em;
  margin-right: 0.625em;
  margin-top: 1.5625em;
  border: 2px solid #2F435A;
  border-radius: 10px;
}

.lista {
  display: flex;
  position: absolute;
  justify-content: flex-start;
  margin-top: 1.8em;
  margin-left: 14px;
  margin-right: auto;
  width: 62em;
  height: 17.5em;
  color: #2F435A;
  overflow-y: auto;
}

.lista::-webkit-scrollbar {
  width: 10px;
  justify-content: flex-end;
}

.lista::-moz-list-bullet {
  width: 10px;
  justify-content: flex-end;
}

.lista::-webkit-scrollbar-track {
  background-color: rgba(253, 206, 109, 0.3);
  border-radius: 6px;
}

.lista::-webkit-scrollbar-thumb {
  background-color: #2F435A;
  border-radius: 6px;
}

.listNameClient {
  display: flex;
  position: absolute;
  margin-left: -29px;
  margin-top: -15px;
  flex-direction: column;
  gap: 5px;
  max-width: 21.5625em;
}

.list-name-item {
  list-style-type: none;
  font-size: 16px;
}

.list-name-item a {
  text-decoration: none;
}

/*lista email*/
.listEmailClient {
  display: flex;
  position: absolute;
  margin-left: 22.700em;
  flex-direction: column;
  gap: 5px;
  max-width: 21.5625em;
  padding: 0;
}

.list-email-item {
  list-style-type: none;
  font-size: 16px;
  margin-top: -15px;
  margin-left: -40px;
}

/*lista telefone*/
.listFoneClient {
  display: flex;
  position: absolute;
  margin-left: 45.5em;
  flex-direction: column;
  gap: 5px;
  max-width: 21.5625em;
}

.list-fone-item {
  list-style-type: none;
  font-size: 16px;
  margin-top: -12px;
  margin-left: -40px;
}

/*=================================*/`, "",{"version":3,"sources":["webpack://./src/DashboardPerfomance/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* styles.css */\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #ffffff;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/*menu-lateral*/\r\n#slide {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  position: fixed;\r\n  align-items: flex-start;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 40px 20px;\r\n  background-color: #fdce6d;\r\n  height: 100%;\r\n  width: 250px;\r\n  z-index: 1000;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  border-radius: 0px 10px 10px 0px;\r\n}\r\n\r\n#slide>li {\r\n  display: flex;\r\n  list-style-type: none;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#slide>li:hover>.drop-down-agenda {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 95px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide>li:hover>.drop-down-cadastro {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 90;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide>li>a {\r\n  line-height: 18px;\r\n  color: #2f435a;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n}\r\n\r\n.um {\r\n  margin-left: 75px;\r\n}\r\n\r\n.dois {\r\n  margin-left: 45px;\r\n}\r\n\r\n.drop-down-agenda {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 90px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-agenda>ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n\r\n.drop-down-agenda>ul>li {\r\n  margin-bottom: 8px;\r\n  margin-left: 0;\r\n}\r\n\r\n.drop-down-agenda>ul>li>a {\r\n  color: #2f435a;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-agenda>ul>li>a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.drop-down-cadastro {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-cadastro>ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-cadastro>ul>li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-cadastro>ul>li>a {\r\n  color: #2f435a;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-cadastro>ul>li>a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.fa-home,\r\n.fa-power-off {\r\n  color: #2f435a;\r\n  font-size: 24px;\r\n}\r\n\r\n.fa-headset {\r\n  font-size: 23px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-calendar {\r\n  font-size: 23px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-user-group {\r\n  font-size: 22px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-file-lines {\r\n  font-size: 25px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n/*menu-lateral*/\r\n\r\n/*cabeçalho*/\r\n\r\nheader {\r\n  display: flex;\r\n  width: 1024px;\r\n  justify-content: center;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: inherit;\r\n  margin-top: 40px;\r\n}\r\n\r\n.header-pagina {\r\n  display: none;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #2f435a;\r\n  font-size: 20px;\r\n}\r\n\r\n.menu-icon-container {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 80px;\r\n  height: 43px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding-top: 5px;\r\n  cursor: pointer;\r\n  border-radius: 2px;\r\n}\r\n\r\n.fa-bars {\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  color: #2f435a;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-bars:hover {\r\n  font-weight: 600;\r\n  color: #fdce6d;\r\n  transition: 0.2s all;\r\n}\r\n\r\n.menu-icon-container>button {\r\n  background-color: transparent;\r\n  width: 34px;\r\n  height: 30px;\r\n  outline: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-principal {\r\n  display: flex;\r\n  align-items: center;\r\n  color: #2f435a;\r\n  font-size: 24px;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: none;\r\n}\r\n\r\n\r\n.container {\r\n  display: flex;\r\n  width: 1024px;\r\n  flex-direction: column;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.5em;\r\n  color: #333;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin: 30px;\r\n  background-color: #2E3B55;\r\n  color: #FFC107;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  text-align: center;\r\n  width: 10rem;\r\n  /* Ajuste a largura conforme necessário */\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card-f {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 30px;\r\n  background-color: #2E3B55;\r\n  color: #FFC107;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  text-align: start;\r\n  width: 10rem;\r\n  /* Ajuste a largura conforme necessário */\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.title {\r\n  text-align: start;\r\n  font-size: 1.2em;\r\n  margin: 0;\r\n}\r\n\r\n.number {\r\n  font-size: 2.5em;\r\n  margin: 0;\r\n}\r\n\r\n.date-range {\r\n  margin: 30px;\r\n  margin-top: 0.4125em;\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.date-picker {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin-left: 0.3125em;\r\n}\r\n\r\n.date-picker label {\r\n  font-size: 1em;\r\n  color: #2E3B55;\r\n  margin-bottom: 5px;\r\n  align-items: flex-start;\r\n  padding-left: 0.625em;\r\n  font-weight: bold;\r\n}\r\n\r\n.date-picker input {\r\n  display: flex;\r\n  height: 1.5625em;\r\n  margin-left: 0.3125em;\r\n  margin-top: 0.3125em;\r\n  padding-left: 0.625em;\r\n  padding-right: 0.3125em;\r\n  align-items: flex-start;\r\n  background-color: #FFF1D4;\r\n  border: none;\r\n  border-radius: 3.125em;\r\n  color: #2F435A;\r\n  font-size: 0.9em;\r\n  outline: 0;\r\n}\r\n\r\n.card-container {\r\n  margin-top: 2.3125em;\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.title-search-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1050px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.title-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 232px;\r\n  height: 20px;\r\n  font-size: 20px;\r\n  color: #2F435A;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  border-bottom: 2px solid #fdce6d;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.search-bar input {\r\n  color: #FDCE6D;\r\n}\r\n\r\n#searchBarList {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-left: 15px;\r\n  width: 305px;\r\n  height: 30px;\r\n  color: #fddb89;\r\n  font-size: 16px;\r\n  background: #2F435A;\r\n  border: none;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 50px;\r\n  outline: 0;\r\n}\r\n\r\n#searchBarList::placeholder {\r\n  color: rgba(255, 231, 190, 0.79);\r\n}\r\n\r\n.box-list {\r\n  display: flex;\r\n  position: relative;\r\n  width: 63.75em;\r\n  height: 20.25em;\r\n  background-color: rgba(47, 67, 90, 0.05);\r\n  border-radius: 10px;\r\n  margin-bottom: 100px;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.box-title {\r\n  display: flex;\r\n  margin-top: 0.3125em;\r\n  width: 63.75em;\r\n  height: 1em;\r\n  flex-direction: row;\r\n  color: #2F435A;\r\n}\r\n\r\n.box-title-name {\r\n  display: flex;\r\n  margin-left: 1.5625em;\r\n  width: 3.375em;\r\n  height: 1em;\r\n  color: #2F435A;\r\n}\r\n\r\n.box-title-email {\r\n  display: flex;\r\n  margin-left: 18.75em;\r\n  width: 3.9375em;\r\n  height: 1em;\r\n  color: #2F435A;\r\n}\r\n\r\n.box-title-fone {\r\n  display: flex;\r\n  margin-left: 18.75em;\r\n  width: 5.6875em;\r\n  height: 1em;\r\n  color: #2F435A;\r\n}\r\n\r\n.border-box-list {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 62.5em;\r\n  height: 17.9375em;\r\n  margin-left: 0.625em;\r\n  margin-right: 0.625em;\r\n  margin-top: 1.5625em;\r\n  border: 2px solid #2F435A;\r\n  border-radius: 10px;\r\n}\r\n\r\n.lista {\r\n  display: flex;\r\n  position: absolute;\r\n  justify-content: flex-start;\r\n  margin-top: 1.8em;\r\n  margin-left: 14px;\r\n  margin-right: auto;\r\n  width: 62em;\r\n  height: 17.5em;\r\n  color: #2F435A;\r\n  overflow-y: auto;\r\n}\r\n\r\n.lista::-webkit-scrollbar {\r\n  width: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.lista::-moz-list-bullet {\r\n  width: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.lista::-webkit-scrollbar-track {\r\n  background-color: rgba(253, 206, 109, 0.3);\r\n  border-radius: 6px;\r\n}\r\n\r\n.lista::-webkit-scrollbar-thumb {\r\n  background-color: #2F435A;\r\n  border-radius: 6px;\r\n}\r\n\r\n.listNameClient {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-left: -29px;\r\n  margin-top: -15px;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  max-width: 21.5625em;\r\n}\r\n\r\n.list-name-item {\r\n  list-style-type: none;\r\n  font-size: 16px;\r\n}\r\n\r\n.list-name-item a {\r\n  text-decoration: none;\r\n}\r\n\r\n/*lista email*/\r\n.listEmailClient {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-left: 22.700em;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  max-width: 21.5625em;\r\n  padding: 0;\r\n}\r\n\r\n.list-email-item {\r\n  list-style-type: none;\r\n  font-size: 16px;\r\n  margin-top: -15px;\r\n  margin-left: -40px;\r\n}\r\n\r\n/*lista telefone*/\r\n.listFoneClient {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-left: 45.5em;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  max-width: 21.5625em;\r\n}\r\n\r\n.list-fone-item {\r\n  list-style-type: none;\r\n  font-size: 16px;\r\n  margin-top: -12px;\r\n  margin-left: -40px;\r\n}\r\n\r\n/*=================================*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/fonts/fonts.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/fonts/fonts.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

/***/ "./src/DashboardPerfomance/styles.css":
/*!********************************************!*\
  !*** ./src/DashboardPerfomance/styles.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/DashboardPerfomance/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/fonts/fonts.css":
/*!************************************!*\
  !*** ./src/assets/fonts/fonts.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./src/DashboardPerfomance/calculos.js":
/*!*********************************************!*\
  !*** ./src/DashboardPerfomance/calculos.js ***!
  \*********************************************/
/***/ (() => {

// Funções para manipulação do localStorage
function getLocalStorageSolicitation() {
    return JSON.parse(localStorage.getItem("solicitacoes")) ?? [];
  }
  
  function getLocalStorageRefused() {
    return JSON.parse(localStorage.getItem("db_agenda_refused")) ?? [];
  }
  
  function getLocalStorageAgenda() {
    return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
  }
  
  // Função para calcular os totais
  function calculateAndSaveTotals() {
    const solicitacoes = getLocalStorageSolicitation();
    const agendamentos = getLocalStorageAgenda();
    const refused = getLocalStorageRefused();
  
    const totalSolicitations = solicitacoes.length;
    const totalAgendamentos = agendamentos.length;
    const totalRefused = refused.length;
  
    // Supondo que cada cliente seja único pelo id
    const allClients = new Set();
    solicitacoes.forEach(client => allClients.add(client.id));
    agendamentos.forEach(client => allClients.add(client.id));
    refused.forEach(client => allClients.add(client.id));
    const totalClients = allClients.size;
  
    // Salvar os totais no localStorage
    localStorage.setItem('total_solicitations', totalSolicitations);
    localStorage.setItem('total_agendamentos', totalAgendamentos);
    localStorage.setItem('total_refused', totalRefused);
    localStorage.setItem('total_clients', totalClients);
  }
  
  // Chama a função para calcular e salvar os totais ao carregar a janela
  window.addEventListener("load", () => {
    calculateAndSaveTotals();
  });
  

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************!*\
  !*** ./src/DashboardPerfomance/main.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/DashboardPerfomance/styles.css");
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts/fonts.css */ "./src/assets/fonts/fonts.css");
/* harmony import */ var _calculos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculos.js */ "./src/DashboardPerfomance/calculos.js");
/* harmony import */ var _calculos_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calculos_js__WEBPACK_IMPORTED_MODULE_2__);




// Função para obter os totais do localStorage
function getTotalsFromLocalStorage() {
  const totalSolicitations = localStorage.getItem("total_solicitations");
  const totalAgendamentos = localStorage.getItem("total_agendamentos");
  const totalRefused = localStorage.getItem("total_refused");
  const totalClients = localStorage.getItem("total_clients");

  return {
    totalSolicitations,
    totalAgendamentos,
    totalRefused,
    totalClients,
  };
}

// Função para atualizar os valores no HTML
function updateTotalsInHTML() {
  const totals = getTotalsFromLocalStorage();

  document.querySelector(
    ".card-container .card:nth-child(1) .number"
  ).textContent = totals.totalSolicitations || 0;
  document.querySelector(
    ".card-container .card:nth-child(2) .number"
  ).textContent = totals.totalAgendamentos || 0;
  document.querySelector(
    ".card-container .card:nth-child(3) .number"
  ).textContent = totals.totalClients || 0;
  document.querySelector(
    ".card-container .card:nth-child(4) .number"
  ).textContent = totals.totalRefused || 0;

  // Atualizar o total de clientes na seção "BASE DE CLIENTES"
  document.querySelector(".card-f .number").textContent =
    totals.totalClients || 0;
}

// Função para ler solicitações do localStorage e preencher a lista no HTML
function fillClientList() {
  const solicitacoes = JSON.parse(localStorage.getItem("solicitacoes")) ?? [];

  const listaNomeElement = document.getElementById("listaNome");
  const listaEmailElement = document.querySelector(".listEmailClient ul");
  const listaFoneElement = document.querySelector(".listFoneClient ul");

  // Limpar listas existentes
  listaNomeElement.innerHTML = "";
  listaEmailElement.innerHTML = "";
  listaFoneElement.innerHTML = "";

  // Preencher listas com dados das solicitações
  solicitacoes.forEach((client) => {
    const nomeItem = document.createElement("li");
    nomeItem.classList.add("list-name-item");
    nomeItem.textContent = client.clientName;
    listaNomeElement.appendChild(nomeItem);

    const emailItem = document.createElement("li");
    emailItem.classList.add("list-email-item");
    emailItem.textContent = client.clientEmail;
    listaEmailElement.appendChild(emailItem);

    const foneItem = document.createElement("li");
    foneItem.classList.add("list-fone-item");
    foneItem.textContent = client.clientPhone;
    listaFoneElement.appendChild(foneItem);
  });
}

// Chama a função para atualizar os valores no HTML e preencher a lista de clientes ao carregar a janela
window.addEventListener("load", () => {
  updateTotalsInHTML();
  fillClientList();
});

var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function (event) {
  event.stopPropagation(); // Impede que o clique se propague para o documento
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.classList.remove("animate__fadeInLeft");
    slide.classList.add("animate__fadeOutLeft");

    slide.addEventListener("animationend", function handleAnimationEnd() {
      slide.style.display = "none";
      slide.classList.remove("animate__fadeOutLeft");
      slide.removeEventListener("animationend", handleAnimationEnd);
    });
  } else {
    slide.style.display = "block";
    slide.classList.add("animate__fadeInLeft");
    slide.classList.remove("animate__fadeOutLeft");

    slide.addEventListener("animationend", function handleAnimationEnd() {
      slide.classList.remove("animate__fadeInLeft");
      slide.removeEventListener("animationend", handleAnimationEnd);
    });
  }
});

// Evento de clique no documento para fechar a barra lateral quando clicar fora dela
document.addEventListener("click", function (event) {
  var slide = document.querySelector("#slide");

  // Verifica se o clique foi fora da barra lateral e do botão de ativação
  if (
    !slide.contains(event.target) &&
    !openSlide.contains(event.target) &&
    slide.style.display === "block"
  ) {
    slide.classList.remove("animate__fadeInLeft");
    slide.classList.add("animate__fadeOutLeft");

    slide.addEventListener("animationend", function handleAnimationEnd() {
      slide.style.display = "none";
      slide.classList.remove("animate__fadeOutLeft");
      slide.removeEventListener("animationend", handleAnimationEnd);
    });
  }
});

function getPermitions() {
  let userJson = localStorage.getItem("user");
  let user = JSON.parse(userJson);
  switch (user.cargo) {
    case "Banhista":
    case "Atendente":
      document.getElementById("cadastros").style.display = "none";
      document.getElementById("relatorios").style.display = "none";
      break;

    default:
      break;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getPermitions();
});

})();

/******/ })()
;
//# sourceMappingURL=dashboardPerfomance.js.map