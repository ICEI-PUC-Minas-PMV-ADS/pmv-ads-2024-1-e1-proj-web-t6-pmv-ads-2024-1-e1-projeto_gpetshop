/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/NovoAgendamento/index.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/NovoAgendamento/index.css ***!
  \*****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}


/* INICIO CABEÇALHO */

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2.5em;
  }

  .menu-icon-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
      height: 43px;
      width: 80px;
    cursor: pointer;
    border-radius: 2px;
  }

  .fa-arrow-left {
    margin-top: 2px;
      width: 80px;
    font-weight: 600;
    font-size: 36px;
    color: #2f435a;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .fa-arrow-left:hover {
    font-weight: 600;
    color: #fdce6d;
    transition: 0.2s all;
  }

  .menu-icon-container>button {
    background-color: transparent;
    width: 80px;
      height: 43px;
    outline: 0;
    border: none;
    cursor: pointer;
  }

  .title-principal {
    display: block;
    align-items: center;
    color: #2f435a;
    font-size: 24px;
  }

  .logo {
    display: flex;
    border: none;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .title-pagina {
    display: none;
  }

/* FIM CABEÇALHO */


/* INICIO FORMULÁRIO */

  form {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

/* INICIO CLIENTE */

  .label-title-cliente {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2.5em;
    width: 100%;
    height: 1.875em;
    border-radius: 3.125em;
    align-items: center;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-title-cliente {
    display: flex;
    height: 1.25em;
    padding-top: 0.0625em;
    margin-left: 0.625em;
    align-items: center;
    color: #fdce6d;
    font-size: 1.25em;
  }

  .name-client-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.625em;
    align-items: center;
    width: 98%;
    height: 1.875em;
    gap: 0.15625em;
  }

  .fa-user {
    color: #2f435a;
    font-size: 1.6em;
    padding-left: 3px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .name-client-container input {
    color: #fdce6d;
  }

  #nameClient {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.875em;
    margin-left: 0.08em;
    padding-top: 0.0625em;
    padding-left: 0.5em;
    width: 40.25em;
    height: 1.875em;
    color: rgb(47, 67, 90);
    font-size: 1em;
    border: none;
    background-color: #fff1d4;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    outline: 0;
  }

  #nameClient::placeholder {
    color: #2f435a8a;
  }

  .email-client-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.625em;
    align-items: center;
    width: 98%;
    height: 1.875em;
    gap: 0.15625em;
  }

  .fa-envelope {
    color: #2f435a;
    font-size: 1.78125em;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .email-client-container input {
    color: #fdce6d;
    height: 1.875em;
  }

  #emailClient {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.875em;
    margin-left: 0.08em;
    padding-top: 0.0625em;
    padding-left: 0.5em;
    width: 40.25em;
    height: 1.875em;
    color: rgb(47, 67, 90);
    font-size: 1em;
    border: none;
    background-color: #fff1d4;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    outline: 0;
  }

  #emailClient::placeholder {
    color: #2f435a8a;
  }

  .fone-client-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.625em;
    align-items: center;
    width: 98%;
    height: 1.875em;
    gap: 0.15625em;
  }

  .fa-phone {
    color: #2f435a;
    font-size: 1.7em;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .fone-client-container input {
    color: #2f435a;
  }

  #foneClient {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.875em;
    margin-left: 0.1875em;
    padding-left: 0.5em;
    width: 40.25em;
    height: 1.875em;
    color: rgb(47, 67, 90);
    font-size: 1em;
    border: none;
    background-color: #fff1d4;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    outline: 0;
  }

  #foneClient::placeholder {
    color: #2f435a8a;
  }

/* FIM CLIENTE */


/* INICIO PET */

  #pet {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .label-title-pet {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 25px;
    width: 100%;
    height: 1.875em;
    border-radius: 3.125em;
    align-items: center;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-title-pet {
    display: flex;
    height: 1.25em;
    padding-top: 0.0625em;
    margin-left: 0.625em;
    align-items: center;
    color: #fdce6d;
    font-size: 1.25em;
  }

  .name-pet-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.625em;
    align-items: center;
    width: 98%;
    height: 1.875em;
    gap: 0.15625em;
  }

  .name-pet-container input {
    height: 1.875em;
  }

  #namePet {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.875em;
    margin-left: 0.1875em;
    padding-left: 0.5em;
    width: 41em;
    height: 1.875em;
    color: rgb(47, 67, 90);
    font-size: 1em;
    border: none;
    background-color: #fff1d4;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    outline: 0;
  }

  #namePet::placeholder {
    color: #2f435a8a;
  }

  .dog-name-icon {
    width: 30px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .pet-properties {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 98%;
  }

  .pet-properties-um, 
  .pet-properties-dois {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    gap: 5px;
  }

  #petIdade, #petPorte, 
  #petPelagem, #petRaca {
    display: flex;
    flex-direction: column;
  }

  .text-idade, .text-porte, 
  .text-pelagem, .text-raca {
    display: flex;
    width: 322px;
    align-items: center;
    height: 1.5625em;
    padding: 0.3125em;
    gap: 5px;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;

    color: #fdce6d;
    font-size: 1.125em;
  }

  #idade, #porte, 
  #pelagem, #raca {
    width: 100%;
    height: 1.875em;
    margin-top: 0.3125em;
    padding: 0 0.3125em;
    align-items: center;
    outline: 0;
    border: none;
    border-radius: 0.5em;
    font-size: 1em;
    line-height: 1.875em;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff1d4;
    color: #2f435a;
  }

  #idade::placeholder, #porte::placeholder, 
  #pelagem::placeholder, #raca::placeholder {
    color: #2f435a8a;
  }

  .containerIdade, .containerPorte, 
  .containerPelagem, .containerRaca {
    position: relative;
  }

  .dropDownIdade {
    position: absolute;
    align-items: flex-start;
    width: 100%;
    height: 5em;
    background-color: #fdce6d;
    border-radius: 0.3125em;
    margin-top: 5px;
    overflow: auto;
    display: none;
    transform: translate(0px, -10px);
    transition: 0.5s;
    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));
    z-index: 100;
  }

  .dropDownPorte {
    position: absolute;
    align-items: flex-start;
    width: 100%;
    height: 5em;
    background-color: #fdce6d;
    border-radius: 0.3125em;
    margin-top: 5px;
    overflow: auto;
    display: none;
    transform: translate(0px, -10px);
    transition: 0.5s;
    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));
    z-index: 90;
  }

  .dropDownPelagem {
    position: absolute;
    align-items: flex-start;
    width: 100%;
    height: 5em;
    background-color: #fdce6d;
    border-radius: 0.3125em;
    margin-top: 5px;
    overflow: auto;
    display: none;
    transform: translate(0px, -10px);
    transition: 0.5s;
    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));
    z-index: 80;
  }

  .dropDownRaca {
    position: absolute;
    align-items: flex-start;
    width: 100%;
    height: 5em;
    background-color: #fdce6d;
    border-radius: 0.3125em;
    margin-top: 5px;
    overflow: auto;
    display: none;
    transform: translate(0px, -10px);
    transition: 0.5s;
    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));
    z-index: 70;
  }

  .dropDownIdade::-webkit-scrollbar, .dropDownPorte::-webkit-scrollbar,
  .dropDownPelagem::-webkit-scrollbar, .dropDownRaca::-webkit-scrollbar {
    background-color: rgba(255, 231, 190, 0.9);
    width: 0.3125em;
    border-radius: 3.125em;
  }

  .dropDownIdade::-webkit-scrollbar-thumb, .dropDownPorte::-webkit-scrollbar-thumb,
  .dropDownPelagem::-webkit-scrollbar-thumb, .dropDownRaca::-webkit-scrollbar-thumb {
    background: #2f435a;
    width: 0.3125em;
    border-radius: 3.125em;
  }

  .itemIdade, .itemPorte,
  .itemPelagem, .itemRaca {
    height: 1.5625em;
    padding-left: 0.3125em;
    padding-top: 0.3125em;
    box-sizing: border-box;
    transition: 0.3s;
    cursor: pointer;
    color: #2f435a;
    font-size: 1em;
  }

  .itemIdade:hover, .itemPorte:hover,
  .itemPelagem:hover, .itemRaca:hover {
    background-color: rgba(255, 231, 190, 0.9);
    padding-left: 0.4375em;
    transition: 0.3s;
  }

/* FIM PET */


/* SERVIÇOS */

  #servicos {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #servicos label {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1.25em;
    padding-left: 10px;
    width: 100%;
    height: 30px;
    border-radius: 3.125em;
    align-items: center;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-servicos {
    display: flex;
    height: 1.25em;
    padding-top: 0.0625em;
    align-items: center;
    color: #fdce6d;
    font-size: 1.25em;
  }

  .containerServicos {
    position: relative;
    width: 98%;
    border-radius: 0.5em;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.3125em;
    line-height: 1.875em;
  }

  .containerServicos input {
    margin-top: 0.3125em;
    height: 1.875em;
    align-items: center;
    line-height: 1.875em;
    width: 100%;
    background-color: #fff1d4;
    padding: 0 0.3125em;
    box-sizing: border-box;
    border-radius: 0.5em;
    outline: 0;
    border: none;
    color: #2f435a;
    font-size: 1em;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  #servicos::placeholder {
    color: #2f435a8a;
  }

  .dropDownServico {
    position: absolute;
    align-items: flex-start;
    width: 100%;
    height: 5em;
    background-color: #fdce6d;
    border-radius: 0.3125em;
    margin-top: 0.3125em;
    overflow: auto;
    display: none;
    transform: translate(0px, -10px);
    transition: 0.5s;
    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));
  }

  .dropDownServico::-webkit-scrollbar {
    background-color: rgba(255, 231, 190, 0.9);
    width: 0.3125em;
    border-radius: 3.125em;
  }

  .dropDownServico::-webkit-scrollbar-thumb {
    background: #2f435a;
    width: 0.3125em;
    border-radius: 3.125em;
  }

  .itemServico {
    height: 1.5625em;
    padding-left: 0.3125em;
    box-sizing: border-box;
    transition: 0.3s;
    cursor: pointer;
    color: #2f435a;
    font-size: 1em;
  }

  .itemServico:hover {
    background-color: rgba(255, 231, 190, 0.9);
    padding-left: 0.4375em;
    transition: 0.3s;
  }

/* FIM SERVIÇOS */


/* AGENDA */

  .label-title-agenda {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1.25em;
    width: 100%;
    height: 1.875em;
    border-radius: 3.125em;
    align-items: center;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-title-agenda {
    display: flex;
    height: 1.25em;
    padding-top: 0.0625em;
    margin-left: 0.625em;
    align-items: center;
    color: #fdce6d;
    font-size: 1.25em;
  }

  #agenda {
    justify-content: flex-start;
    width: 40%;
    margin-top: 0.625em;
  }

  #agenda input {
    display: flex;
    height: 1.875em;
    margin-left: 0.4375em;
    margin-top: 0.3125em;
    padding-left: 0.625em;
    padding-right: 0.3125em;
    align-items: center;
    background-color: #fff1d4;
    border: none;
    border-radius: 8px;
    color: #2f435a;
    font-size: 0.9375em;
    outline: 0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

/* FIM AGENDA */


/* OBSERVAÇÕES */

  .label-title-obs {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1.25em;
    width: 100%;
    height: 1.875em;
    border-radius: 3.125em;
    align-items: center;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-title-obs {
    display: flex;
    height: 1.25em;
    padding-top: 0.0625em;
    margin-left: 0.625em;
    align-items: center;
    color: #fdce6d;
    font-size: 1.25em;
  }

  #text-value-obs {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 98%;
    height: 6.25em;
    margin-top: 0.625em;
    padding: 0.3125em;
    color: #2f435a;
    background-color: #fff1d4;
    border: none;
    outline: none;
    border-radius: 0.5em;
    font-size: 1em;
  }

  #obs textarea {
    resize: none;
    color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

/* FIM OBSERVAÇÕES */


/* BOTÕES */

  #actions {
    display: flex;
    margin-top: 1.875em;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
  }

  #agendar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    width: 220px;
    height: 35px;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 3.125em;
    color: #fdce6d;
    font-size: 1.1em;
    transition: 0.5s;
    cursor: pointer;
  }

  #agendar:hover {
    display: flex;
    background-color: #fdce6d;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 3.125em;
    color: #2f435a;
    transition: 0.5s;
    cursor: pointer;
  }

/* FIM BOTÕES */



@media screen and (max-width: 1024px) {
  body {
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 700px;
  }

}


@media screen and (max-width: 575px) {
  body {
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 575px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2.5em;
    position: relative;
  }

  .menu-icon-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 43px;
    width: 80px;
    cursor: pointer;
    border-radius: 2px;
  }

  .fa-arrow-left {
    margin-top: 2px;
    width: 80px;
    font-weight: 600;
    font-size: 40px;
    color: #2f435a;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .fa-arrow-left:hover {
    font-weight: 600;
    color: #fdce6d;
    transition: 0.2s all;
  }

  .menu-icon-container>button {
    background-color: transparent;
    width: 80px;
      height: 43px;
    outline: 0;
    border: none;
    cursor: pointer;
  }

  .title-principal {
    display: none;
  }

  .title-pagina {
    display: block;
    width: max-content;
    align-self: center;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    color: #2f435a;
    font-size: 24px;
  }

  .logo {
    display: flex;
    position: absolute;
    left: 42%;
    border: none;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .text-idade, .text-porte, 
  .text-pelagem, .text-raca {
    display: flex;
    width: 260px;
    align-items: center;
    height: 1.5625em;
    padding: 0.3125em;
    gap: 5px;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;

    color: #fdce6d;
    font-size: 1.125em;
  }

}


@media screen and (max-width: 480px) {
  body {
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 480px;
  }

  .pet-properties-um, 
  .pet-properties-dois {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;
    gap: 5px;
  }

  .text-idade, .text-porte, 
  .text-pelagem, .text-raca {
    display: flex;
    width: 447px;
    align-items: center;
    height: 1.875em;
    padding: 0.3125em;
    gap: 5px;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;

    color: #fdce6d;
    font-size: 1.125em;
  }

  #idade, #porte, 
  #pelagem, #raca {
    width: 100%;
    height: 1.875em;
    margin-top: 0.3125em;
    margin-bottom: 10px;
    padding: 0 0.3125em;
    align-items: center;
    outline: 0;
    border: none;
    border-radius: 0.5em;
    font-size: 1em;
    line-height: 1.875em;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff1d4;
    color: #2f435a;
  }

  #servicos label {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1em;
    padding-left: 10px;
    width: 100%;
    height: 30px;
    border-radius: 3.125em;
    align-items: center;
    background-color: #2f435a;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }
}
`, "",{"version":3,"sources":["webpack://./src/NovoAgendamento/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n/* INICIO CABEÇALHO */\r\n\r\n  header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 95%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 2.5em;\r\n  }\r\n\r\n  .menu-icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n      height: 43px;\r\n      width: 80px;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  .fa-arrow-left {\r\n    margin-top: 2px;\r\n      width: 80px;\r\n    font-weight: 600;\r\n    font-size: 36px;\r\n    color: #2f435a;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .fa-arrow-left:hover {\r\n    font-weight: 600;\r\n    color: #fdce6d;\r\n    transition: 0.2s all;\r\n  }\r\n\r\n  .menu-icon-container>button {\r\n    background-color: transparent;\r\n    width: 80px;\r\n      height: 43px;\r\n    outline: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .title-principal {\r\n    display: block;\r\n    align-items: center;\r\n    color: #2f435a;\r\n    font-size: 24px;\r\n  }\r\n\r\n  .logo {\r\n    display: flex;\r\n    border: none;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .title-pagina {\r\n    display: none;\r\n  }\r\n\r\n/* FIM CABEÇALHO */\r\n\r\n\r\n/* INICIO FORMULÁRIO */\r\n\r\n  form {\r\n    width: 95%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n/* INICIO CLIENTE */\r\n\r\n  .label-title-cliente {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 2.5em;\r\n    width: 100%;\r\n    height: 1.875em;\r\n    border-radius: 3.125em;\r\n    align-items: center;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .text-title-cliente {\r\n    display: flex;\r\n    height: 1.25em;\r\n    padding-top: 0.0625em;\r\n    margin-left: 0.625em;\r\n    align-items: center;\r\n    color: #fdce6d;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  .name-client-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0.625em;\r\n    align-items: center;\r\n    width: 98%;\r\n    height: 1.875em;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .fa-user {\r\n    color: #2f435a;\r\n    font-size: 1.6em;\r\n    padding-left: 3px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .name-client-container input {\r\n    color: #fdce6d;\r\n  }\r\n\r\n  #nameClient {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    line-height: 1.875em;\r\n    margin-left: 0.08em;\r\n    padding-top: 0.0625em;\r\n    padding-left: 0.5em;\r\n    width: 40.25em;\r\n    height: 1.875em;\r\n    color: rgb(47, 67, 90);\r\n    font-size: 1em;\r\n    border: none;\r\n    background-color: #fff1d4;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n    outline: 0;\r\n  }\r\n\r\n  #nameClient::placeholder {\r\n    color: #2f435a8a;\r\n  }\r\n\r\n  .email-client-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0.625em;\r\n    align-items: center;\r\n    width: 98%;\r\n    height: 1.875em;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .fa-envelope {\r\n    color: #2f435a;\r\n    font-size: 1.78125em;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .email-client-container input {\r\n    color: #fdce6d;\r\n    height: 1.875em;\r\n  }\r\n\r\n  #emailClient {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    line-height: 1.875em;\r\n    margin-left: 0.08em;\r\n    padding-top: 0.0625em;\r\n    padding-left: 0.5em;\r\n    width: 40.25em;\r\n    height: 1.875em;\r\n    color: rgb(47, 67, 90);\r\n    font-size: 1em;\r\n    border: none;\r\n    background-color: #fff1d4;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n    outline: 0;\r\n  }\r\n\r\n  #emailClient::placeholder {\r\n    color: #2f435a8a;\r\n  }\r\n\r\n  .fone-client-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0.625em;\r\n    align-items: center;\r\n    width: 98%;\r\n    height: 1.875em;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .fa-phone {\r\n    color: #2f435a;\r\n    font-size: 1.7em;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .fone-client-container input {\r\n    color: #2f435a;\r\n  }\r\n\r\n  #foneClient {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    line-height: 1.875em;\r\n    margin-left: 0.1875em;\r\n    padding-left: 0.5em;\r\n    width: 40.25em;\r\n    height: 1.875em;\r\n    color: rgb(47, 67, 90);\r\n    font-size: 1em;\r\n    border: none;\r\n    background-color: #fff1d4;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n    outline: 0;\r\n  }\r\n\r\n  #foneClient::placeholder {\r\n    color: #2f435a8a;\r\n  }\r\n\r\n/* FIM CLIENTE */\r\n\r\n\r\n/* INICIO PET */\r\n\r\n  #pet {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  .label-title-pet {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 25px;\r\n    width: 100%;\r\n    height: 1.875em;\r\n    border-radius: 3.125em;\r\n    align-items: center;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .text-title-pet {\r\n    display: flex;\r\n    height: 1.25em;\r\n    padding-top: 0.0625em;\r\n    margin-left: 0.625em;\r\n    align-items: center;\r\n    color: #fdce6d;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  .name-pet-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0.625em;\r\n    align-items: center;\r\n    width: 98%;\r\n    height: 1.875em;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .name-pet-container input {\r\n    height: 1.875em;\r\n  }\r\n\r\n  #namePet {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    line-height: 1.875em;\r\n    margin-left: 0.1875em;\r\n    padding-left: 0.5em;\r\n    width: 41em;\r\n    height: 1.875em;\r\n    color: rgb(47, 67, 90);\r\n    font-size: 1em;\r\n    border: none;\r\n    background-color: #fff1d4;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n    outline: 0;\r\n  }\r\n\r\n  #namePet::placeholder {\r\n    color: #2f435a8a;\r\n  }\r\n\r\n  .dog-name-icon {\r\n    width: 30px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .pet-properties {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    column-gap: 10px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 98%;\r\n  }\r\n\r\n  .pet-properties-um, \r\n  .pet-properties-dois {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    gap: 5px;\r\n  }\r\n\r\n  #petIdade, #petPorte, \r\n  #petPelagem, #petRaca {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .text-idade, .text-porte, \r\n  .text-pelagem, .text-raca {\r\n    display: flex;\r\n    width: 322px;\r\n    align-items: center;\r\n    height: 1.5625em;\r\n    padding: 0.3125em;\r\n    gap: 5px;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n\r\n    color: #fdce6d;\r\n    font-size: 1.125em;\r\n  }\r\n\r\n  #idade, #porte, \r\n  #pelagem, #raca {\r\n    width: 100%;\r\n    height: 1.875em;\r\n    margin-top: 0.3125em;\r\n    padding: 0 0.3125em;\r\n    align-items: center;\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 0.5em;\r\n    font-size: 1em;\r\n    line-height: 1.875em;\r\n    box-sizing: border-box;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    background-color: #fff1d4;\r\n    color: #2f435a;\r\n  }\r\n\r\n  #idade::placeholder, #porte::placeholder, \r\n  #pelagem::placeholder, #raca::placeholder {\r\n    color: #2f435a8a;\r\n  }\r\n\r\n  .containerIdade, .containerPorte, \r\n  .containerPelagem, .containerRaca {\r\n    position: relative;\r\n  }\r\n\r\n  .dropDownIdade {\r\n    position: absolute;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n    height: 5em;\r\n    background-color: #fdce6d;\r\n    border-radius: 0.3125em;\r\n    margin-top: 5px;\r\n    overflow: auto;\r\n    display: none;\r\n    transform: translate(0px, -10px);\r\n    transition: 0.5s;\r\n    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));\r\n    z-index: 100;\r\n  }\r\n\r\n  .dropDownPorte {\r\n    position: absolute;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n    height: 5em;\r\n    background-color: #fdce6d;\r\n    border-radius: 0.3125em;\r\n    margin-top: 5px;\r\n    overflow: auto;\r\n    display: none;\r\n    transform: translate(0px, -10px);\r\n    transition: 0.5s;\r\n    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));\r\n    z-index: 90;\r\n  }\r\n\r\n  .dropDownPelagem {\r\n    position: absolute;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n    height: 5em;\r\n    background-color: #fdce6d;\r\n    border-radius: 0.3125em;\r\n    margin-top: 5px;\r\n    overflow: auto;\r\n    display: none;\r\n    transform: translate(0px, -10px);\r\n    transition: 0.5s;\r\n    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));\r\n    z-index: 80;\r\n  }\r\n\r\n  .dropDownRaca {\r\n    position: absolute;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n    height: 5em;\r\n    background-color: #fdce6d;\r\n    border-radius: 0.3125em;\r\n    margin-top: 5px;\r\n    overflow: auto;\r\n    display: none;\r\n    transform: translate(0px, -10px);\r\n    transition: 0.5s;\r\n    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));\r\n    z-index: 70;\r\n  }\r\n\r\n  .dropDownIdade::-webkit-scrollbar, .dropDownPorte::-webkit-scrollbar,\r\n  .dropDownPelagem::-webkit-scrollbar, .dropDownRaca::-webkit-scrollbar {\r\n    background-color: rgba(255, 231, 190, 0.9);\r\n    width: 0.3125em;\r\n    border-radius: 3.125em;\r\n  }\r\n\r\n  .dropDownIdade::-webkit-scrollbar-thumb, .dropDownPorte::-webkit-scrollbar-thumb,\r\n  .dropDownPelagem::-webkit-scrollbar-thumb, .dropDownRaca::-webkit-scrollbar-thumb {\r\n    background: #2f435a;\r\n    width: 0.3125em;\r\n    border-radius: 3.125em;\r\n  }\r\n\r\n  .itemIdade, .itemPorte,\r\n  .itemPelagem, .itemRaca {\r\n    height: 1.5625em;\r\n    padding-left: 0.3125em;\r\n    padding-top: 0.3125em;\r\n    box-sizing: border-box;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    color: #2f435a;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .itemIdade:hover, .itemPorte:hover,\r\n  .itemPelagem:hover, .itemRaca:hover {\r\n    background-color: rgba(255, 231, 190, 0.9);\r\n    padding-left: 0.4375em;\r\n    transition: 0.3s;\r\n  }\r\n\r\n/* FIM PET */\r\n\r\n\r\n/* SERVIÇOS */\r\n\r\n  #servicos {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  #servicos label {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 1.25em;\r\n    padding-left: 10px;\r\n    width: 100%;\r\n    height: 30px;\r\n    border-radius: 3.125em;\r\n    align-items: center;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .text-servicos {\r\n    display: flex;\r\n    height: 1.25em;\r\n    padding-top: 0.0625em;\r\n    align-items: center;\r\n    color: #fdce6d;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  .containerServicos {\r\n    position: relative;\r\n    width: 98%;\r\n    border-radius: 0.5em;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0.3125em;\r\n    line-height: 1.875em;\r\n  }\r\n\r\n  .containerServicos input {\r\n    margin-top: 0.3125em;\r\n    height: 1.875em;\r\n    align-items: center;\r\n    line-height: 1.875em;\r\n    width: 100%;\r\n    background-color: #fff1d4;\r\n    padding: 0 0.3125em;\r\n    box-sizing: border-box;\r\n    border-radius: 0.5em;\r\n    outline: 0;\r\n    border: none;\r\n    color: #2f435a;\r\n    font-size: 1em;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  #servicos::placeholder {\r\n    color: #2f435a8a;\r\n  }\r\n\r\n  .dropDownServico {\r\n    position: absolute;\r\n    align-items: flex-start;\r\n    width: 100%;\r\n    height: 5em;\r\n    background-color: #fdce6d;\r\n    border-radius: 0.3125em;\r\n    margin-top: 0.3125em;\r\n    overflow: auto;\r\n    display: none;\r\n    transform: translate(0px, -10px);\r\n    transition: 0.5s;\r\n    filter: drop-shadow(0px 0px 250px rgb(0, 0, 0));\r\n  }\r\n\r\n  .dropDownServico::-webkit-scrollbar {\r\n    background-color: rgba(255, 231, 190, 0.9);\r\n    width: 0.3125em;\r\n    border-radius: 3.125em;\r\n  }\r\n\r\n  .dropDownServico::-webkit-scrollbar-thumb {\r\n    background: #2f435a;\r\n    width: 0.3125em;\r\n    border-radius: 3.125em;\r\n  }\r\n\r\n  .itemServico {\r\n    height: 1.5625em;\r\n    padding-left: 0.3125em;\r\n    box-sizing: border-box;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    color: #2f435a;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .itemServico:hover {\r\n    background-color: rgba(255, 231, 190, 0.9);\r\n    padding-left: 0.4375em;\r\n    transition: 0.3s;\r\n  }\r\n\r\n/* FIM SERVIÇOS */\r\n\r\n\r\n/* AGENDA */\r\n\r\n  .label-title-agenda {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 1.25em;\r\n    width: 100%;\r\n    height: 1.875em;\r\n    border-radius: 3.125em;\r\n    align-items: center;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .text-title-agenda {\r\n    display: flex;\r\n    height: 1.25em;\r\n    padding-top: 0.0625em;\r\n    margin-left: 0.625em;\r\n    align-items: center;\r\n    color: #fdce6d;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  #agenda {\r\n    justify-content: flex-start;\r\n    width: 40%;\r\n    margin-top: 0.625em;\r\n  }\r\n\r\n  #agenda input {\r\n    display: flex;\r\n    height: 1.875em;\r\n    margin-left: 0.4375em;\r\n    margin-top: 0.3125em;\r\n    padding-left: 0.625em;\r\n    padding-right: 0.3125em;\r\n    align-items: center;\r\n    background-color: #fff1d4;\r\n    border: none;\r\n    border-radius: 8px;\r\n    color: #2f435a;\r\n    font-size: 0.9375em;\r\n    outline: 0;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n/* FIM AGENDA */\r\n\r\n\r\n/* OBSERVAÇÕES */\r\n\r\n  .label-title-obs {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 1.25em;\r\n    width: 100%;\r\n    height: 1.875em;\r\n    border-radius: 3.125em;\r\n    align-items: center;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .text-title-obs {\r\n    display: flex;\r\n    height: 1.25em;\r\n    padding-top: 0.0625em;\r\n    margin-left: 0.625em;\r\n    align-items: center;\r\n    color: #fdce6d;\r\n    font-size: 1.25em;\r\n  }\r\n\r\n  #text-value-obs {\r\n    display: flex;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 98%;\r\n    height: 6.25em;\r\n    margin-top: 0.625em;\r\n    padding: 0.3125em;\r\n    color: #2f435a;\r\n    background-color: #fff1d4;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 0.5em;\r\n    font-size: 1em;\r\n  }\r\n\r\n  #obs textarea {\r\n    resize: none;\r\n    color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n/* FIM OBSERVAÇÕES */\r\n\r\n\r\n/* BOTÕES */\r\n\r\n  #actions {\r\n    display: flex;\r\n    margin-top: 1.875em;\r\n    width: 100%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    justify-content: center;\r\n  }\r\n\r\n  #agendar {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 100px;\r\n    width: 220px;\r\n    height: 35px;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 3.125em;\r\n    color: #fdce6d;\r\n    font-size: 1.1em;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #agendar:hover {\r\n    display: flex;\r\n    background-color: #fdce6d;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 3.125em;\r\n    color: #2f435a;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n  }\r\n\r\n/* FIM BOTÕES */\r\n\r\n\r\n\r\n@media screen and (max-width: 1024px) {\r\n  body {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 0;\r\n    width: 700px;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 575px) {\r\n  body {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 0;\r\n    width: 575px;\r\n  }\r\n\r\n  header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 95%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 2.5em;\r\n    position: relative;\r\n  }\r\n\r\n  .menu-icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    height: 43px;\r\n    width: 80px;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  .fa-arrow-left {\r\n    margin-top: 2px;\r\n    width: 80px;\r\n    font-weight: 600;\r\n    font-size: 40px;\r\n    color: #2f435a;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .fa-arrow-left:hover {\r\n    font-weight: 600;\r\n    color: #fdce6d;\r\n    transition: 0.2s all;\r\n  }\r\n\r\n  .menu-icon-container>button {\r\n    background-color: transparent;\r\n    width: 80px;\r\n      height: 43px;\r\n    outline: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .title-principal {\r\n    display: none;\r\n  }\r\n\r\n  .title-pagina {\r\n    display: block;\r\n    width: max-content;\r\n    align-self: center;\r\n    justify-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 40px;\r\n    color: #2f435a;\r\n    font-size: 24px;\r\n  }\r\n\r\n  .logo {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 42%;\r\n    border: none;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .text-idade, .text-porte, \r\n  .text-pelagem, .text-raca {\r\n    display: flex;\r\n    width: 260px;\r\n    align-items: center;\r\n    height: 1.5625em;\r\n    padding: 0.3125em;\r\n    gap: 5px;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n\r\n    color: #fdce6d;\r\n    font-size: 1.125em;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 480px) {\r\n  body {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 0;\r\n    width: 480px;\r\n  }\r\n\r\n  .pet-properties-um, \r\n  .pet-properties-dois {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    gap: 5px;\r\n  }\r\n\r\n  .text-idade, .text-porte, \r\n  .text-pelagem, .text-raca {\r\n    display: flex;\r\n    width: 447px;\r\n    align-items: center;\r\n    height: 1.875em;\r\n    padding: 0.3125em;\r\n    gap: 5px;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.5em;\r\n\r\n    color: #fdce6d;\r\n    font-size: 1.125em;\r\n  }\r\n\r\n  #idade, #porte, \r\n  #pelagem, #raca {\r\n    width: 100%;\r\n    height: 1.875em;\r\n    margin-top: 0.3125em;\r\n    margin-bottom: 10px;\r\n    padding: 0 0.3125em;\r\n    align-items: center;\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 0.5em;\r\n    font-size: 1em;\r\n    line-height: 1.875em;\r\n    box-sizing: border-box;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    background-color: #fff1d4;\r\n    color: #2f435a;\r\n  }\r\n\r\n  #servicos label {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 1em;\r\n    padding-left: 10px;\r\n    width: 100%;\r\n    height: 30px;\r\n    border-radius: 3.125em;\r\n    align-items: center;\r\n    background-color: #2f435a;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/svg/icon_pet.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/icon_pet.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/icon_pet.svg");

/***/ }),

/***/ "./src/assets/svg/icon_pet_idade.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/icon_pet_idade.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/icon_pet_idade.svg");

/***/ }),

/***/ "./src/assets/svg/icon_pet_pelagem.svg":
/*!*********************************************!*\
  !*** ./src/assets/svg/icon_pet_pelagem.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/icon_pet_pelagem.svg");

/***/ }),

/***/ "./src/assets/svg/icon_pet_porte.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/icon_pet_porte.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/icon_pet_porte.svg");

/***/ }),

/***/ "./src/assets/svg/icon_pet_raca.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/icon_pet_raca.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/icon_pet_raca.svg");

/***/ }),

/***/ "./src/Imagens/nomesemfundo.png":
/*!**************************************!*\
  !*** ./src/Imagens/nomesemfundo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "Imagens/nomesemfundo.png");

/***/ }),

/***/ "./src/NovoAgendamento/index.css":
/*!***************************************!*\
  !*** ./src/NovoAgendamento/index.css ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/NovoAgendamento/index.css");

      
      
      
      
      
      
      
      
      

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
/*!**************************************!*\
  !*** ./src/NovoAgendamento/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/NovoAgendamento/index.css");
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts/fonts.css */ "./src/assets/fonts/fonts.css");
/* harmony import */ var _Imagens_nomesemfundo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Imagens/nomesemfundo.png */ "./src/Imagens/nomesemfundo.png");
/* harmony import */ var _assets_svg_icon_pet_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/icon_pet.svg */ "./src/assets/svg/icon_pet.svg");
/* harmony import */ var _assets_svg_icon_pet_idade_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/svg/icon_pet_idade.svg */ "./src/assets/svg/icon_pet_idade.svg");
/* harmony import */ var _assets_svg_icon_pet_porte_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/svg/icon_pet_porte.svg */ "./src/assets/svg/icon_pet_porte.svg");
/* harmony import */ var _assets_svg_icon_pet_pelagem_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/svg/icon_pet_pelagem.svg */ "./src/assets/svg/icon_pet_pelagem.svg");
/* harmony import */ var _assets_svg_icon_pet_raca_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/svg/icon_pet_raca.svg */ "./src/assets/svg/icon_pet_raca.svg");









const clearFields = () => {
  const dataClient = document.querySelectorAll(".dataClient");
  dataClient.forEach((field) => (field.value = ""));
};

const sendRequest = () => {
  if (isValidFields()) {
    const db_client = getLocalStorage();
    const newClientId = db_client.length + 1; // Gera o ID baseado na posição no localStorage

    const clientRequest = {
      cliente: {
        id: newClientId, // Usa o ID gerado
        nome: document.getElementById("nameClient").value,
        email: document.getElementById("emailClient").value,
        celular: document.getElementById("foneClient").value,
      },

      pet: {
        nome: document.getElementById("namePet").value,
        idade: document.getElementById("idade").value,
        porte: document.getElementById("porte").value,
        pelagem: document.getElementById("pelagem").value,
        raca: document.getElementById("raca").value,
      },

      servico: {
        servicos: document.getElementById("services").value,
      },

      agendamento: {
        horario: document.getElementById("dt-agenda").value,
      },

      observacao: {
        observacao: document.getElementById("text-value-obs").value,
      },
    };
    createClient(clientRequest);
    clearFields();
    alert("Criado novo agendamento!");
  }
};

function onClickButtonAgendar() {
  sendRequest();
}

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

function setLocalStorage(db_agenda) {
  return localStorage.setItem("db_agenda", JSON.stringify(db_agenda));
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
}

function findClientIndexById(id) {
  const db_agenda = getLocalStorage();
  return db_agenda.findIndex((client) => client.cliente.id === id);
}

// CRUD
function createClient(client) {
  const db_agenda = getLocalStorage();
  db_agenda.push(client);
  setLocalStorage(db_agenda);
}

function readClient() {
  return getLocalStorage();
}

function updateClient(id, updatedClient) {
  const db_agenda = getLocalStorage();
  const index = findClientIndexById(id);
  if (index !== -1) {
    db_agenda[index] = updatedClient;
    setLocalStorage(db_agenda);
  } else {
    console.error("Client not found");
  }
}

function deleteClient(id) {
  const db_agenda = getLocalStorage();
  const index = findClientIndexById(id);
  if (index !== -1) {
    db_agenda.splice(index, 1);
    setLocalStorage(db_agenda);
  } else {
    console.error("Client not found");
  }
}

// DROPDOWN
function dropDownIdade(parameterIdade) {
  const elementsIdade = document.getElementsByClassName("dropDownIdade")[0];
  if (parameterIdade === 0) {
    elementsIdade.style.display = "block";
    const translateIdade = ["0px", "0px, -10px"];
    setTimeout(function () {
      elementsIdade.style.transform =
        "translate(" + translateIdade[parameterIdade] + ")";
    }, 0);
  } else {
    elementsIdade.style.display = "none";
  }
}

function idade(idade) {
  const itemIdade = document.getElementById("itemIdade-" + idade).innerHTML;
  document.getElementsByTagName("input")[5].value = itemIdade;
}

function dropDownPorte(parameterPorte) {
  const elementsPorte = document.getElementsByClassName("dropDownPorte")[0];

  if (parameterPorte === 0) {
    elementsPorte.style.display = "block";

    const translatePorte = ["0px", "0px, -10px"];
    setTimeout(function () {
      elementsPorte.style.transform =
        "translate(" + translatePorte[parameterPorte] + ")";
    }, 0);
  } else {
    elementsPorte.style.display = "none";
  }
}

function porte(porte) {
  const itemPorte = document.getElementById("itemPorte-" + porte).innerHTML;
  document.getElementsByTagName("input")[6].value = itemPorte;
}

function dropDownPelagem(parameterPelagem) {
  const elementsPelagem = document.getElementsByClassName("dropDownPelagem")[0];

  if (parameterPelagem === 0) {
    elementsPelagem.style.display = "block";

    const translatePelagem = ["0px", "0px, -10px"];
    setTimeout(function () {
      elementsPelagem.style.transform =
        "translate(" + translatePelagem[parameterPelagem] + ")";
    }, 0);
  } else {
    elementsPelagem.style.display = "none";
  }
}

function pelagem(pelagem) {
  const itemPelagem = document.getElementById(
    "itemPelagem-" + pelagem
  ).innerHTML;
  document.getElementsByTagName("input")[7].value = itemPelagem;
}

function dropDownRaca(parameterRaca) {
  const elementsRaca = document.getElementsByClassName("dropDownRaca")[0];

  if (parameterRaca === 0) {
    elementsRaca.style.display = "block";

    const translateRaca = ["0px", "0px, -10px"];
    setTimeout(function () {
      elementsRaca.style.transform =
        "translate(" + translateRaca[parameterRaca] + ")";
    }, 0);
  } else {
    elementsRaca.style.display = "none";
  }
}

function raca(raca) {
  const itemRaca = document.getElementById("itemRaca-" + raca).innerHTML;
  document.getElementsByTagName("input")[8].value = itemRaca;
}

function dropDownServico(parameterServico) {
  const elementsServico = document.getElementsByClassName("dropDownServico")[0];

  if (parameterServico === 0) {
    elementsServico.style.display = "block";

    const translateServico = ["0px", "0px, -10px"];
    setTimeout(function () {
      elementsServico.style.transform =
        "translate(" + translateServico[parameterServico] + ")";
    }, 0);
  } else {
    elementsServico.style.display = "none";
  }
}

function servico(servico) {
  const itemServico = document.getElementById(
    "itemServico-" + servico
  ).innerHTML;
  document.getElementsByTagName("input")[9].value = itemServico;
}

})();

/******/ })()
;
//# sourceMappingURL=novoAgendamento.js.map