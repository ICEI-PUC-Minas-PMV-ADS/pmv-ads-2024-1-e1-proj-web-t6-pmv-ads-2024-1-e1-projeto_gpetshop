/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ListagemSuporte/index.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ListagemSuporte/index.css ***!
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
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin-right: auto;
  margin-left: auto;
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

#slide > li {
  display: flex;
  list-style-type: none;
  align-items: center;
  margin-bottom: 20px;
}

#slide > li:hover > .drop-down-agenda {
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

#slide > li:hover > .drop-down-cadastro {
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

#slide > li > a {
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

.drop-down-agenda > ul {
  list-style-type: none;
}

.drop-down-agenda > ul > li {
  margin-bottom: 8px;
}

.drop-down-agenda > ul > li > a {
  color: #2f435a;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-agenda > ul > li > a:hover {
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

.drop-down-cadastro > ul {
  list-style-type: none;
}

.drop-down-cadastro > ul > li {
  margin-bottom: 8px;
}

.drop-down-cadastro > ul > li > a {
  color: #2f435a;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-cadastro > ul > li > a:hover {
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
  margin-top: 10px;
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

main {
  width: inherit;
}

/*lista*/
/*cabeçalho da lista*/
.list-container {
  display: flex;
  width: inherit;
  margin-top: 60px;
}

.title {
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 213px;
  height: 20px;
  font-size: 20px;
  color: #2f435a;
  border-bottom: 2px solid #fdce6d;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.search-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.search-bar input {
  color: #fdce6d;
}

#searchBarList {
  display: flex;
  justify-content: center;
  padding-left: 15px;
  width: 405px;
  height: 30px;
  color: #fddb89;
  font-size: 16px;
  background: #2f435a;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  outline: 0;
}

#searchBarList::placeholder {
  color: rgba(255, 231, 190, 0.527);
}

.material-symbols-rounded {
  margin-right: 10px;
  color: #fdce6d;
  position: absolute;
}

table {
  display: flex;
  position: relative;
  width: inherit;
  margin-top: 15px;
  padding: 5px;
  border-collapse: collapse;
  height: 324px;
  background: rgba(47, 67, 90, 0.05);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

thead {
  padding-left: 10px;
  position: absolute;
  width: 98%;
  margin-top: -3px;
  border-collapse: collapse;
}

thead > tr {
  display: flex;
  gap: 5px;
  border-collapse: collapse;
}

thead > tr > th {
  align-self: flex-start;
  min-width: 350px;
  max-width: 350px;
  color: #2f435a;
  text-align: start;
  font-size: 17px;
  border-collapse: collapse;
}

.th-clientes {
  display: none;
}

.th-mensagens {
  display: none;
}

tbody {
  width: 1020px;
  padding-left: 2px;
  padding-top: 5px;
  margin-top: 21px;
  border: 2px solid #2f435a;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: auto;
  border-collapse: collapse;
}

tbody > tr {
  padding-left: 3px;
  display: flex;
  height: 25px;
  width: 99%;
  gap: 5px;
  border-collapse: collapse;
  font-size: 16px;
}

tbody > tr:hover {
  background-color: #ffd889;
  border-radius: 50px;
  transition: 0.2s all;

  font-size: 16px;
}

.td-nome {
  padding-left: 3px;
  align-self: center;
  min-width: 353px;
  max-width: 353px;
  color: #2f435a;
  text-align: left;
  border-collapse: collapse;
  text-wrap: nowrap;
  cursor: pointer;
}

.td-mensagem {
  align-self: center;
  min-width: 350px;
  max-width: 350px;
  color: #2f435a;
  text-align: left;
  border-collapse: collapse;
  text-wrap: nowrap;
  cursor: pointer;

  white-space: nowrap;
  /* Impede a quebra de linha */
  overflow: hidden;
  /* Esconde o texto que ultrapassa a largura máxima */
  text-overflow: ellipsis;
  /* Adiciona reticências (...) para indicar que o texto foi cortado */
}

/* scroll da tabela */
tbody::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-top-right-radius: 6px;
  background-color: transparent;
}

tbody::-moz-list-bullet {
  width: 10px;
  border-top-right-radius: 6px;
}

tbody::-webkit-scrollbar-track {
  background-color: rgba(253, 206, 109, 0.3);
  border-top-right-radius: 6px;
}

tbody::-webkit-scrollbar-thumb {
  background-color: #2f435a;
  border-radius: 6px;
}

/* Media Queries */
@media screen and (max-width: 1024px) {
  header {
    width: 980px;
    margin-right: auto;
    margin-left: auto;
  }

  .title-principal {
    display: flex;
    align-items: center;
    color: #2f435a;
    font-size: 24px;
  }

  main {
    width: 980px;
    margin-right: auto;
    margin-left: auto;
  }

  /*lista*/
  /*cabeçalho da lista*/
  .list-container {
    display: flex;
    width: inherit;
    margin-top: 60px;
  }

  .title {
    display: flex;
    width: inherit;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 232px;
    height: 20px;
    font-size: 22px;
    color: #2f435a;
    border-bottom: 2px solid #fdce6d;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .search-bar input {
    color: #fdce6d;
  }

  #searchBarList {
    display: flex;
    justify-content: center;
    padding-left: 15px;
    width: 405px;
    height: 35px;
    color: #fddb89;
    font-size: 17px;
    line-height: 35px;
    background: #2f435a;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    outline: 0;
  }

  #searchBarList::placeholder {
    color: rgba(255, 231, 190, 0.79);
  }

  .material-symbols-rounded {
    margin-right: 10px;
    font-size: 26px;
    color: #fdce6d;
    position: absolute;
  }

  table {
    display: flex;
    position: relative;
    width: inherit;
    margin-top: 15px;
    padding: 5px;
    border-collapse: collapse;
    height: 324px;
    background: rgba(47, 67, 90, 0.05);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  thead {
    padding-left: 10px;
    position: absolute;
    width: 98%;
    border-collapse: collapse;
  }

  thead > tr {
    display: flex;
    gap: 5px;
    border-collapse: collapse;
  }

  thead > tr > th {
    align-self: flex-start;
    min-width: 350px;
    max-width: 350px;
    color: #2f435a;
    text-align: start;
    font-size: 16px;
    border-collapse: collapse;
  }

  tbody {
    width: 1500px;
    padding-left: 2px;
    padding-top: 5px;
    margin-top: 21px;
    border: 2px solid #2f435a;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: auto;
    border-collapse: collapse;
  }

  tbody > tr {
    padding-left: 3px;
    display: flex;
    height: 30px;
    width: 99%;
    gap: 5px;
    border-collapse: collapse;
    font-size: 18px;
  }

  tbody > tr:hover {
    background-color: #ffd889;
    border-radius: 50px;
    transition: 0.2s all;

    font-size: 17px;
  }

  .td-nome {
    padding-left: 3px;
    align-self: center;
    min-width: 353px;
    max-width: 353px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;
  }

  .td-mensagem {
    align-self: center;
    min-width: 350px;
    max-width: 350px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;

    white-space: nowrap;
    /* Impede a quebra de linha */
    overflow: hidden;
    /* Esconde o texto que ultrapassa a largura máxima */
    text-overflow: ellipsis;
    /* Adiciona reticências (...) para indicar que o texto foi cortado */
  }
}

@media screen and (max-width: 768px) {
  body {
    display: flex;
    flex-direction: column;
    width: 758px;
    margin-right: auto;
    margin-left: auto;
  }

  header {
    width: 758px;
    margin-right: auto;
    margin-left: auto;
  }

  .menu-icon-container {
    display: flex;
    align-items: center;
    height: 16px;
    width: 80px;
    top: 0px;
    left: 0px;
    padding-top: 16px;
    cursor: pointer;
    border-radius: 2px;
  }

  .title-principal {
    display: flex;
    align-items: center;
    color: #2f435a;
    font-size: 24px;
  }

  main {
    width: 758px;
    margin-right: auto;
    margin-left: auto;
  }

  /*lista*/
  /*cabeçalho da lista*/
  .list-container {
    display: flex;
    width: inherit;
    margin-top: 60px;
  }

  .title {
    display: flex;
    width: inherit;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 225px;
    height: 21px;
    font-size: 21px;
    color: #2f435a;
    border-bottom: 2px solid #fdce6d;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .search-bar input {
    color: #fdce6d;
  }

  #searchBarList {
    display: flex;
    justify-content: center;
    padding-left: 15px;
    width: 405px;
    height: 35px;
    color: #fddb89;
    font-size: 17px;
    line-height: 35px;
    background: #2f435a;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    outline: 0;
  }

  #searchBarList::placeholder {
    color: rgba(255, 231, 190, 0.79);
  }

  .material-symbols-rounded {
    margin-right: 10px;
    font-size: 26px;
    color: #fdce6d;
    position: absolute;
  }

  table {
    display: flex;
    position: relative;
    width: inherit;
    margin-top: 15px;
    padding: 5px;
    border-collapse: collapse;
    height: 324px;
    background: rgba(47, 67, 90, 0.05);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  thead {
    padding-left: 10px;
    position: absolute;
    width: 98%;
    border-collapse: collapse;
  }

  thead > tr {
    display: flex;
    gap: 5px;
    border-collapse: collapse;
  }

  thead > tr > th {
    align-self: flex-start;
    min-width: 350px;
    max-width: 350px;
    color: #2f435a;
    text-align: start;
    font-size: 16px;
    border-collapse: collapse;
  }

  .th-mensagem {
    min-width: 200px;
    max-width: 200px;
  }

  tbody {
    width: 758px;
    padding-left: 2px;
    padding-top: 5px;
    margin-top: 21px;
    border: 2px solid #2f435a;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: auto;
    border-collapse: collapse;
  }

  tbody > tr {
    padding-left: 3px;
    display: flex;
    height: 30px;
    width: 99%;
    gap: 5px;
    border-collapse: collapse;
    font-size: 18px;
  }

  tbody > tr:hover {
    background-color: #ffd889;
    border-radius: 50px;
    transition: 0.2s all;

    font-size: 17px;
  }

  .td-nome {
    padding-left: 3px;
    align-self: center;
    min-width: 353px;
    max-width: 353px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;

    white-space: nowrap;
    /* Impede a quebra de linha */
    overflow: hidden;
    /* Esconde o texto que ultrapassa a largura máxima */
    text-overflow: ellipsis;
    /* Adiciona reticências (...) para indicar que o texto foi cortado */
  }

  .td-mensagem {
    align-self: center;
    width: 100%;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;

    white-space: nowrap;
    /* Impede a quebra de linha */
    overflow: hidden;
    /* Esconde o texto que ultrapassa a largura máxima */
    text-overflow: ellipsis;
    /* Adiciona reticências (...) para indicar que o texto foi cortado */
  }
}

@media screen and (max-width: 480px) {
  html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
  }

  header {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin: 0;
    padding: 0;
  }

  .header {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
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
    font-size: 20px;
  }

  .logo {
    display: flex;
    position: absolute;
    left: 42%;
    border: none;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .header-pagina {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    color: #2f435a;
    font-size: 20px;
  }

  /*lista*/
  /*cabeçalho da lista*/
  .list-container {
    display: flex;
    width: 90%;
    margin-top: 20px;
  }

  .title {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .title-list {
    display: none;
  }

  .search-bar {
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
  }

  .search-bar input {
    color: #fdce6d;
  }

  #searchBarList {
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    width: 100%;
    height: 35px;
    color: #fddb89;
    font-size: 17px;
    line-height: 35px;
    background: #2f435a;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    outline: 0;
  }

  #searchBarList::placeholder {
    color: rgba(255, 231, 190, 0.79);
  }

  .material-symbols-rounded {
    font-size: 26px;
    color: #fdce6d;
    position: absolute;
    right: 0;
  }

  #tableClient {
    display: flex;
    position: relative;
    justify-content: center;
    width: 90%;
    margin-top: 15px;
    padding: 5px;
    border-collapse: collapse;
    height: 435px;
    background: rgba(47, 67, 90, 0.05);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .thead {
    padding-left: 10px;
    position: absolute;
    width: 98%;
    border-collapse: collapse;
  }

  .thead-tr {
    display: flex;
    gap: 5px;
    border-collapse: collapse;
  }

  .th {
    align-self: flex-start;
    min-width: 100px;
    max-width: 100px;
    color: #2f435a;
    text-align: start;
    font-size: 16px;
    border-collapse: collapse;
  }

  .th-mensagem {
    display: none;
  }

  .th-mensagens {
    display: flex;
  }

  .th-nome-cliente {
    display: none;
  }

  .tbody {
    display: flex;
    flex-direction: column;
    width: 99%;
    height: 400px;
    padding: 5px;
    margin-top: 21px;
    border: 2px solid #2f435a;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: auto;
    border-collapse: collapse;
  }

  .tbody > tr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 180px;
    width: 100%;
    gap: 0;

    border-bottom: 1px solid #ced5dd;
  }

  .tbody > tr:hover {
    border: none;
    background-color: transparent;
    font-size: 16px;
  }

  .td-nome {
    margin: 0;
    padding: 0;
    min-width: 250px;
    max-width: 250px;
    font-size: 16px;
    height: 25px;
    padding: 0;
    align-self: flex-start;

    white-space: nowrap;
    /* Impede a quebra de linha */
    overflow: hidden;
    /* Esconde o texto que ultrapassa a largura máxima */
    text-overflow: ellipsis;
    /* Adiciona reticências (...) para indicar que o texto foi cortado */
  }

  .td-mensagem {
    margin: 0;
    padding: 0;
    height: 25px;
    min-width: 250px;
    max-width: 250px;
    justify-self: center;
    align-self: flex-start;

    white-space: nowrap;
    /* Impede a quebra de linha */
    overflow: hidden;
    /* Esconde o texto que ultrapassa a largura máxima */
    text-overflow: ellipsis;
    /* Adiciona reticências (...) para indicar que o texto foi cortado */
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
    width: 200px;
    z-index: 1000;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
    border-radius: 0px 10px 10px 0px;
  }

  #slide > li {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin-bottom: 20px;
  }

  #slide > li:hover > .drop-down-agenda {
    display: block;
    position: absolute;
    left: 170px;
    top: 95px;
    width: 210px;
    background-color: rgb(255, 231, 190);
    padding: 7px;
    border-radius: 8px;
    z-index: 100;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  }

  #slide > li:hover > .drop-down-cadastro {
    display: block;
    position: absolute;
    left: 170px;
    top: 135px;
    width: 210px;
    background-color: rgb(255, 231, 190);
    padding: 7px;
    border-radius: 8px;
    z-index: 90;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  }

  #slide > li > a {
    display: flex;
    align-items: center;
    line-height: 18px;
    color: #2f435a;
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
  }

  .menu-container {
    display: flex;
  }

  .um {
    margin-left: 55px;
  }

  .dois {
    margin-left: 30px;
  }

  .drop-down-agenda {
    display: none;
    position: absolute;
    left: 210px;
    top: 135px;
    width: 210px;
    background-color: rgb(255, 231, 190);
    padding: 7px;
    border-radius: 8px;
    z-index: 100;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  }

  .drop-down-agenda > ul {
    list-style-type: none;
  }

  .drop-down-agenda > ul > li {
    margin-bottom: 8px;
  }

  .drop-down-agenda > ul > li > a {
    color: #2f435a;
    font-size: 18px;
    text-decoration: none;
  }

  .drop-down-agenda > ul > li > a:hover {
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

  .drop-down-cadastro > ul {
    list-style-type: none;
  }

  .drop-down-cadastro > ul > li {
    margin-bottom: 8px;
  }

  .drop-down-cadastro > ul > li > a {
    color: #2f435a;
    font-size: 18px;
    text-decoration: none;
  }

  .drop-down-cadastro > ul > li > a:hover {
    filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
  }

  .fa-home,
  .fa-power-off {
    color: #2f435a;
    font-size: 23px;
  }

  .fa-headset {
    font-size: 22px;
    color: #2f435a;
  }

  .fa-calendar {
    font-size: 22px;
    padding-left: 3px;
    color: #2f435a;
  }

  .fa-user-group {
    font-size: 21px;
    color: #2f435a;
  }

  .fa-file-lines {
    font-size: 24px;
    padding-left: 3px;
    color: #2f435a;
  }

  /*menu-lateral*/
}
`, "",{"version":3,"sources":["webpack://./src/ListagemSuporte/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 1024px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n/*menu-lateral*/\r\n#slide {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  position: fixed;\r\n  align-items: flex-start;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 40px 20px;\r\n  background-color: #fdce6d;\r\n  height: 100%;\r\n  width: 250px;\r\n  z-index: 1000;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  border-radius: 0px 10px 10px 0px;\r\n}\r\n\r\n#slide > li {\r\n  display: flex;\r\n  list-style-type: none;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#slide > li:hover > .drop-down-agenda {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 95px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide > li:hover > .drop-down-cadastro {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 90;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide > li > a {\r\n  line-height: 18px;\r\n  color: #2f435a;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n}\r\n\r\n.um {\r\n  margin-left: 75px;\r\n}\r\n\r\n.dois {\r\n  margin-left: 45px;\r\n}\r\n\r\n.drop-down-agenda {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 90px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-agenda > ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-agenda > ul > li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-agenda > ul > li > a {\r\n  color: #2f435a;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-agenda > ul > li > a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.drop-down-cadastro {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-cadastro > ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-cadastro > ul > li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-cadastro > ul > li > a {\r\n  color: #2f435a;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-cadastro > ul > li > a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.fa-home,\r\n.fa-power-off {\r\n  color: #2f435a;\r\n  font-size: 24px;\r\n}\r\n\r\n.fa-headset {\r\n  font-size: 23px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-calendar {\r\n  font-size: 23px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-user-group {\r\n  font-size: 22px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-file-lines {\r\n  font-size: 25px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n/*menu-lateral*/\r\n\r\n/*cabeçalho*/\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: inherit;\r\n  margin-top: 40px;\r\n}\r\n\r\n.header-pagina {\r\n  display: none;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  color: #2f435a;\r\n  font-size: 20px;\r\n}\r\n\r\n.menu-icon-container {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 80px;\r\n  height: 43px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding-top: 5px;\r\n  cursor: pointer;\r\n  border-radius: 2px;\r\n}\r\n\r\n.fa-bars {\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  color: #2f435a;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-bars:hover {\r\n  font-weight: 600;\r\n  color: #fdce6d;\r\n  transition: 0.2s all;\r\n}\r\n\r\n.menu-icon-container>button {\r\n  background-color: transparent;\r\n  width: 34px;\r\n  height: 30px;\r\n  outline: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.title-principal {\r\n  display: flex;\r\n  align-items: center;\r\n  color: #2f435a;\r\n  font-size: 24px;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  width: inherit;\r\n}\r\n\r\n/*lista*/\r\n/*cabeçalho da lista*/\r\n.list-container {\r\n  display: flex;\r\n  width: inherit;\r\n  margin-top: 60px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  width: inherit;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 213px;\r\n  height: 20px;\r\n  font-size: 20px;\r\n  color: #2f435a;\r\n  border-bottom: 2px solid #fdce6d;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.search-bar input {\r\n  color: #fdce6d;\r\n}\r\n\r\n#searchBarList {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-left: 15px;\r\n  width: 405px;\r\n  height: 30px;\r\n  color: #fddb89;\r\n  font-size: 16px;\r\n  background: #2f435a;\r\n  border: none;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 50px;\r\n  outline: 0;\r\n}\r\n\r\n#searchBarList::placeholder {\r\n  color: rgba(255, 231, 190, 0.527);\r\n}\r\n\r\n.material-symbols-rounded {\r\n  margin-right: 10px;\r\n  color: #fdce6d;\r\n  position: absolute;\r\n}\r\n\r\ntable {\r\n  display: flex;\r\n  position: relative;\r\n  width: inherit;\r\n  margin-top: 15px;\r\n  padding: 5px;\r\n  border-collapse: collapse;\r\n  height: 324px;\r\n  background: rgba(47, 67, 90, 0.05);\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 10px;\r\n}\r\n\r\nthead {\r\n  padding-left: 10px;\r\n  position: absolute;\r\n  width: 98%;\r\n  margin-top: -3px;\r\n  border-collapse: collapse;\r\n}\r\n\r\nthead > tr {\r\n  display: flex;\r\n  gap: 5px;\r\n  border-collapse: collapse;\r\n}\r\n\r\nthead > tr > th {\r\n  align-self: flex-start;\r\n  min-width: 350px;\r\n  max-width: 350px;\r\n  color: #2f435a;\r\n  text-align: start;\r\n  font-size: 17px;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.th-clientes {\r\n  display: none;\r\n}\r\n\r\n.th-mensagens {\r\n  display: none;\r\n}\r\n\r\ntbody {\r\n  width: 1020px;\r\n  padding-left: 2px;\r\n  padding-top: 5px;\r\n  margin-top: 21px;\r\n  border: 2px solid #2f435a;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  border-radius: 10px;\r\n  overflow-y: auto;\r\n  overflow-x: auto;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntbody > tr {\r\n  padding-left: 3px;\r\n  display: flex;\r\n  height: 25px;\r\n  width: 99%;\r\n  gap: 5px;\r\n  border-collapse: collapse;\r\n  font-size: 16px;\r\n}\r\n\r\ntbody > tr:hover {\r\n  background-color: #ffd889;\r\n  border-radius: 50px;\r\n  transition: 0.2s all;\r\n\r\n  font-size: 16px;\r\n}\r\n\r\n.td-nome {\r\n  padding-left: 3px;\r\n  align-self: center;\r\n  min-width: 353px;\r\n  max-width: 353px;\r\n  color: #2f435a;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  text-wrap: nowrap;\r\n  cursor: pointer;\r\n}\r\n\r\n.td-mensagem {\r\n  align-self: center;\r\n  min-width: 350px;\r\n  max-width: 350px;\r\n  color: #2f435a;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  text-wrap: nowrap;\r\n  cursor: pointer;\r\n\r\n  white-space: nowrap;\r\n  /* Impede a quebra de linha */\r\n  overflow: hidden;\r\n  /* Esconde o texto que ultrapassa a largura máxima */\r\n  text-overflow: ellipsis;\r\n  /* Adiciona reticências (...) para indicar que o texto foi cortado */\r\n}\r\n\r\n/* scroll da tabela */\r\ntbody::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-top-right-radius: 6px;\r\n  background-color: transparent;\r\n}\r\n\r\ntbody::-moz-list-bullet {\r\n  width: 10px;\r\n  border-top-right-radius: 6px;\r\n}\r\n\r\ntbody::-webkit-scrollbar-track {\r\n  background-color: rgba(253, 206, 109, 0.3);\r\n  border-top-right-radius: 6px;\r\n}\r\n\r\ntbody::-webkit-scrollbar-thumb {\r\n  background-color: #2f435a;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* Media Queries */\r\n@media screen and (max-width: 1024px) {\r\n  header {\r\n    width: 980px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .title-principal {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #2f435a;\r\n    font-size: 24px;\r\n  }\r\n\r\n  main {\r\n    width: 980px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  /*lista*/\r\n  /*cabeçalho da lista*/\r\n  .list-container {\r\n    display: flex;\r\n    width: inherit;\r\n    margin-top: 60px;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    width: inherit;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .title-list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 232px;\r\n    height: 20px;\r\n    font-size: 22px;\r\n    color: #2f435a;\r\n    border-bottom: 2px solid #fdce6d;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .search-bar {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n  }\r\n\r\n  .search-bar input {\r\n    color: #fdce6d;\r\n  }\r\n\r\n  #searchBarList {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 15px;\r\n    width: 405px;\r\n    height: 35px;\r\n    color: #fddb89;\r\n    font-size: 17px;\r\n    line-height: 35px;\r\n    background: #2f435a;\r\n    border: none;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 50px;\r\n    outline: 0;\r\n  }\r\n\r\n  #searchBarList::placeholder {\r\n    color: rgba(255, 231, 190, 0.79);\r\n  }\r\n\r\n  .material-symbols-rounded {\r\n    margin-right: 10px;\r\n    font-size: 26px;\r\n    color: #fdce6d;\r\n    position: absolute;\r\n  }\r\n\r\n  table {\r\n    display: flex;\r\n    position: relative;\r\n    width: inherit;\r\n    margin-top: 15px;\r\n    padding: 5px;\r\n    border-collapse: collapse;\r\n    height: 324px;\r\n    background: rgba(47, 67, 90, 0.05);\r\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 10px;\r\n  }\r\n\r\n  thead {\r\n    padding-left: 10px;\r\n    position: absolute;\r\n    width: 98%;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  thead > tr {\r\n    display: flex;\r\n    gap: 5px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  thead > tr > th {\r\n    align-self: flex-start;\r\n    min-width: 350px;\r\n    max-width: 350px;\r\n    color: #2f435a;\r\n    text-align: start;\r\n    font-size: 16px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  tbody {\r\n    width: 1500px;\r\n    padding-left: 2px;\r\n    padding-top: 5px;\r\n    margin-top: 21px;\r\n    border: 2px solid #2f435a;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n    border-radius: 10px;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  tbody > tr {\r\n    padding-left: 3px;\r\n    display: flex;\r\n    height: 30px;\r\n    width: 99%;\r\n    gap: 5px;\r\n    border-collapse: collapse;\r\n    font-size: 18px;\r\n  }\r\n\r\n  tbody > tr:hover {\r\n    background-color: #ffd889;\r\n    border-radius: 50px;\r\n    transition: 0.2s all;\r\n\r\n    font-size: 17px;\r\n  }\r\n\r\n  .td-nome {\r\n    padding-left: 3px;\r\n    align-self: center;\r\n    min-width: 353px;\r\n    max-width: 353px;\r\n    color: #2f435a;\r\n    text-align: left;\r\n    border-collapse: collapse;\r\n    text-wrap: nowrap;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .td-mensagem {\r\n    align-self: center;\r\n    min-width: 350px;\r\n    max-width: 350px;\r\n    color: #2f435a;\r\n    text-align: left;\r\n    border-collapse: collapse;\r\n    text-wrap: nowrap;\r\n    cursor: pointer;\r\n\r\n    white-space: nowrap;\r\n    /* Impede a quebra de linha */\r\n    overflow: hidden;\r\n    /* Esconde o texto que ultrapassa a largura máxima */\r\n    text-overflow: ellipsis;\r\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 758px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  header {\r\n    width: 758px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .menu-icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 16px;\r\n    width: 80px;\r\n    top: 0px;\r\n    left: 0px;\r\n    padding-top: 16px;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  .title-principal {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #2f435a;\r\n    font-size: 24px;\r\n  }\r\n\r\n  main {\r\n    width: 758px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  /*lista*/\r\n  /*cabeçalho da lista*/\r\n  .list-container {\r\n    display: flex;\r\n    width: inherit;\r\n    margin-top: 60px;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    width: inherit;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .title-list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 225px;\r\n    height: 21px;\r\n    font-size: 21px;\r\n    color: #2f435a;\r\n    border-bottom: 2px solid #fdce6d;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .search-bar {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n  }\r\n\r\n  .search-bar input {\r\n    color: #fdce6d;\r\n  }\r\n\r\n  #searchBarList {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 15px;\r\n    width: 405px;\r\n    height: 35px;\r\n    color: #fddb89;\r\n    font-size: 17px;\r\n    line-height: 35px;\r\n    background: #2f435a;\r\n    border: none;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 50px;\r\n    outline: 0;\r\n  }\r\n\r\n  #searchBarList::placeholder {\r\n    color: rgba(255, 231, 190, 0.79);\r\n  }\r\n\r\n  .material-symbols-rounded {\r\n    margin-right: 10px;\r\n    font-size: 26px;\r\n    color: #fdce6d;\r\n    position: absolute;\r\n  }\r\n\r\n  table {\r\n    display: flex;\r\n    position: relative;\r\n    width: inherit;\r\n    margin-top: 15px;\r\n    padding: 5px;\r\n    border-collapse: collapse;\r\n    height: 324px;\r\n    background: rgba(47, 67, 90, 0.05);\r\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 10px;\r\n  }\r\n\r\n  thead {\r\n    padding-left: 10px;\r\n    position: absolute;\r\n    width: 98%;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  thead > tr {\r\n    display: flex;\r\n    gap: 5px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  thead > tr > th {\r\n    align-self: flex-start;\r\n    min-width: 350px;\r\n    max-width: 350px;\r\n    color: #2f435a;\r\n    text-align: start;\r\n    font-size: 16px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  .th-mensagem {\r\n    min-width: 200px;\r\n    max-width: 200px;\r\n  }\r\n\r\n  tbody {\r\n    width: 758px;\r\n    padding-left: 2px;\r\n    padding-top: 5px;\r\n    margin-top: 21px;\r\n    border: 2px solid #2f435a;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n    border-radius: 10px;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  tbody > tr {\r\n    padding-left: 3px;\r\n    display: flex;\r\n    height: 30px;\r\n    width: 99%;\r\n    gap: 5px;\r\n    border-collapse: collapse;\r\n    font-size: 18px;\r\n  }\r\n\r\n  tbody > tr:hover {\r\n    background-color: #ffd889;\r\n    border-radius: 50px;\r\n    transition: 0.2s all;\r\n\r\n    font-size: 17px;\r\n  }\r\n\r\n  .td-nome {\r\n    padding-left: 3px;\r\n    align-self: center;\r\n    min-width: 353px;\r\n    max-width: 353px;\r\n    color: #2f435a;\r\n    text-align: left;\r\n    border-collapse: collapse;\r\n    text-wrap: nowrap;\r\n    cursor: pointer;\r\n\r\n    white-space: nowrap;\r\n    /* Impede a quebra de linha */\r\n    overflow: hidden;\r\n    /* Esconde o texto que ultrapassa a largura máxima */\r\n    text-overflow: ellipsis;\r\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\r\n  }\r\n\r\n  .td-mensagem {\r\n    align-self: center;\r\n    width: 100%;\r\n    color: #2f435a;\r\n    text-align: left;\r\n    border-collapse: collapse;\r\n    text-wrap: nowrap;\r\n    cursor: pointer;\r\n\r\n    white-space: nowrap;\r\n    /* Impede a quebra de linha */\r\n    overflow: hidden;\r\n    /* Esconde o texto que ultrapassa a largura máxima */\r\n    text-overflow: ellipsis;\r\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  html {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 0;\r\n  }\r\n\r\n  header {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 90%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .header {\r\n    display: flex;\r\n    position: relative;\r\n    width: 100%;\r\n    align-items: center;\r\n  }\r\n\r\n  .menu-icon-container>button {\r\n    background-color: transparent;\r\n    width: 80px;\r\n      height: 43px;\r\n    outline: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .title-principal {\r\n    display: none;\r\n  }\r\n\r\n  .title-pagina {\r\n    display: block;\r\n    width: max-content;\r\n    align-self: center;\r\n    justify-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 40px;\r\n    color: #2f435a;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .logo {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 42%;\r\n    border: none;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .header-pagina {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n    color: #2f435a;\r\n    font-size: 20px;\r\n  }\r\n\r\n  /*lista*/\r\n  /*cabeçalho da lista*/\r\n  .list-container {\r\n    display: flex;\r\n    width: 90%;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .title-list {\r\n    display: none;\r\n  }\r\n\r\n  .search-bar {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    position: relative;\r\n  }\r\n\r\n  .search-bar input {\r\n    color: #fdce6d;\r\n  }\r\n\r\n  #searchBarList {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-left: 15px;\r\n    width: 100%;\r\n    height: 35px;\r\n    color: #fddb89;\r\n    font-size: 17px;\r\n    line-height: 35px;\r\n    background: #2f435a;\r\n    border: none;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 50px;\r\n    outline: 0;\r\n  }\r\n\r\n  #searchBarList::placeholder {\r\n    color: rgba(255, 231, 190, 0.79);\r\n  }\r\n\r\n  .material-symbols-rounded {\r\n    font-size: 26px;\r\n    color: #fdce6d;\r\n    position: absolute;\r\n    right: 0;\r\n  }\r\n\r\n  #tableClient {\r\n    display: flex;\r\n    position: relative;\r\n    justify-content: center;\r\n    width: 90%;\r\n    margin-top: 15px;\r\n    padding: 5px;\r\n    border-collapse: collapse;\r\n    height: 435px;\r\n    background: rgba(47, 67, 90, 0.05);\r\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .thead {\r\n    padding-left: 10px;\r\n    position: absolute;\r\n    width: 98%;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  .thead-tr {\r\n    display: flex;\r\n    gap: 5px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  .th {\r\n    align-self: flex-start;\r\n    min-width: 100px;\r\n    max-width: 100px;\r\n    color: #2f435a;\r\n    text-align: start;\r\n    font-size: 16px;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  .th-mensagem {\r\n    display: none;\r\n  }\r\n\r\n  .th-mensagens {\r\n    display: flex;\r\n  }\r\n\r\n  .th-nome-cliente {\r\n    display: none;\r\n  }\r\n\r\n  .tbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 99%;\r\n    height: 400px;\r\n    padding: 5px;\r\n    margin-top: 21px;\r\n    border: 2px solid #2f435a;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n    border-radius: 10px;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  .tbody > tr {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    height: 180px;\r\n    width: 100%;\r\n    gap: 0;\r\n\r\n    border-bottom: 1px solid #ced5dd;\r\n  }\r\n\r\n  .tbody > tr:hover {\r\n    border: none;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .td-nome {\r\n    margin: 0;\r\n    padding: 0;\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    font-size: 16px;\r\n    height: 25px;\r\n    padding: 0;\r\n    align-self: flex-start;\r\n\r\n    white-space: nowrap;\r\n    /* Impede a quebra de linha */\r\n    overflow: hidden;\r\n    /* Esconde o texto que ultrapassa a largura máxima */\r\n    text-overflow: ellipsis;\r\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\r\n  }\r\n\r\n  .td-mensagem {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 25px;\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    justify-self: center;\r\n    align-self: flex-start;\r\n\r\n    white-space: nowrap;\r\n    /* Impede a quebra de linha */\r\n    overflow: hidden;\r\n    /* Esconde o texto que ultrapassa a largura máxima */\r\n    text-overflow: ellipsis;\r\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\r\n  }\r\n\r\n  /*menu-lateral*/\r\n  #slide {\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    position: fixed;\r\n    align-items: flex-start;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 40px 20px;\r\n    background-color: #fdce6d;\r\n    height: 100%;\r\n    width: 200px;\r\n    z-index: 1000;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n    border-radius: 0px 10px 10px 0px;\r\n  }\r\n\r\n  #slide > li {\r\n    display: flex;\r\n    list-style-type: none;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  #slide > li:hover > .drop-down-agenda {\r\n    display: block;\r\n    position: absolute;\r\n    left: 170px;\r\n    top: 95px;\r\n    width: 210px;\r\n    background-color: rgb(255, 231, 190);\r\n    padding: 7px;\r\n    border-radius: 8px;\r\n    z-index: 100;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n  }\r\n\r\n  #slide > li:hover > .drop-down-cadastro {\r\n    display: block;\r\n    position: absolute;\r\n    left: 170px;\r\n    top: 135px;\r\n    width: 210px;\r\n    background-color: rgb(255, 231, 190);\r\n    padding: 7px;\r\n    border-radius: 8px;\r\n    z-index: 90;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n  }\r\n\r\n  #slide > li > a {\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 18px;\r\n    color: #2f435a;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .menu-container {\r\n    display: flex;\r\n  }\r\n\r\n  .um {\r\n    margin-left: 55px;\r\n  }\r\n\r\n  .dois {\r\n    margin-left: 30px;\r\n  }\r\n\r\n  .drop-down-agenda {\r\n    display: none;\r\n    position: absolute;\r\n    left: 210px;\r\n    top: 135px;\r\n    width: 210px;\r\n    background-color: rgb(255, 231, 190);\r\n    padding: 7px;\r\n    border-radius: 8px;\r\n    z-index: 100;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n  }\r\n\r\n  .drop-down-agenda > ul {\r\n    list-style-type: none;\r\n  }\r\n\r\n  .drop-down-agenda > ul > li {\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  .drop-down-agenda > ul > li > a {\r\n    color: #2f435a;\r\n    font-size: 18px;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .drop-down-agenda > ul > li > a:hover {\r\n    filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n  }\r\n\r\n  .drop-down-cadastro {\r\n    display: none;\r\n    position: absolute;\r\n    left: 210px;\r\n    top: 135px;\r\n    width: 210px;\r\n    background-color: rgb(255, 231, 190);\r\n    padding: 7px;\r\n    border-radius: 8px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n  }\r\n\r\n  .drop-down-cadastro > ul {\r\n    list-style-type: none;\r\n  }\r\n\r\n  .drop-down-cadastro > ul > li {\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  .drop-down-cadastro > ul > li > a {\r\n    color: #2f435a;\r\n    font-size: 18px;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .drop-down-cadastro > ul > li > a:hover {\r\n    filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n  }\r\n\r\n  .fa-home,\r\n  .fa-power-off {\r\n    color: #2f435a;\r\n    font-size: 23px;\r\n  }\r\n\r\n  .fa-headset {\r\n    font-size: 22px;\r\n    color: #2f435a;\r\n  }\r\n\r\n  .fa-calendar {\r\n    font-size: 22px;\r\n    padding-left: 3px;\r\n    color: #2f435a;\r\n  }\r\n\r\n  .fa-user-group {\r\n    font-size: 21px;\r\n    color: #2f435a;\r\n  }\r\n\r\n  .fa-file-lines {\r\n    font-size: 24px;\r\n    padding-left: 3px;\r\n    color: #2f435a;\r\n  }\r\n\r\n  /*menu-lateral*/\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/ListagemSuporte/index.css":
/*!***************************************!*\
  !*** ./src/ListagemSuporte/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/ListagemSuporte/index.css");

      
      
      
      
      
      
      
      
      

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
  !*** ./src/ListagemSuporte/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/ListagemSuporte/index.css");
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts/fonts.css */ "./src/assets/fonts/fonts.css");
/* harmony import */ var _Imagens_nomesemfundo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Imagens/nomesemfundo.png */ "./src/Imagens/nomesemfundo.png");




// Função para salvar os dados de suporte no local storage.
function setLocalStorageSupport(minhaLista) {
  return localStorage.setItem("minhaLista", JSON.stringify(minhaLista));
}

// Função para recuperar os dados de suporte do local storage.
function getLocalStorageSupport() {
  return JSON.parse(localStorage.getItem("minhaLista")) ?? [];
}

// Função para identificar o cliente quando uma linha da tabela é clicada.
function identifyingCustomer(event) {
  const row = event.currentTarget; // A linha (tr) que foi clicada.
  const id = row.getAttribute("data-id"); // Obtém o ID da linha.
  console.log("Este é o cliente de ID", id);

  // Obter os dados do cliente do localStorage usando o ID.
  const minhaLista = getLocalStorageSupport();
  const clientData = minhaLista.find((client) => client.id === parseInt(id));
  // Verificar se os dados do cliente existem.
  if (clientData) {
    // Serializar os dados do cliente como uma string JSON.
    const serializedData = JSON.stringify(clientData);
    // Redirecionar para a página de edição com os dados do cliente como parâmetros de consulta.
    window.location.href = `../tratamentoSuporte/tratamentoSuporte.html?data=${encodeURIComponent(
      serializedData
    )}`;
  } else {
    console.log("Não foram encontrados dados para o ID", id);
  }
}

// Função para preencher os campos do formulário com os dados do cliente.
function fillFields(client) {
  document.getElementsByName("nome")[id].value = client.nome;
  document.getElementsByName("email")[id].value = client.email;
  document.getElementsByName("telefone")[id].value = client.telefone;
  document.getElementsByName("mensagem")[id].value = client.mensagem;
}

// Função para criar uma nova linha na tabela para um cliente.
function createRow(client) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("data-id", client.id); // Adiciona um atributo de dados com o ID.
  newRow.innerHTML = `
      <td class="poppins-regular td td-nome">${client.nome}</td>
      <td class="poppins-light td td-mensagem">${client.mensagem}</td>
      `;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
  newRow.addEventListener("click", identifyingCustomer); // Adiciona o event listener à nova linha.
}

// Função para limpar todas as linhas da tabela.
function clearTable() {
  const tbody = document.querySelector("#tableClient>tbody");
  tbody.innerHTML = ""; // Limpa o conteúdo da tabela.
}

// Função para atualizar a tabela com os dados de suporte do local storage.
function updateTable(filteredData = null) {
  const minhaLista = filteredData || readSupport();
  clearTable();
  minhaLista.forEach(createRow);
}

// CRUD: Lê os dados de suporte do local storage.
function readSupport() {
  return getLocalStorageSupport();
}

// Função de pesquisa
function searchMessages() {
  const input = document.getElementById("searchBarList");
  const filter = input.value.toUpperCase();
  const minhaLista = readSupport();

  const filteredData = minhaLista.filter((client) => {
    return (
      client.nome.toUpperCase().includes(filter) ||
      client.mensagem.toUpperCase().includes(filter)
    );
  });

  updateTable(filteredData);
}

const searchInput = document.getElementById("searchBarList");
searchInput.addEventListener("input", searchMessages);


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

// Atualiza a tabela quando a página é carregada.
updateTable();

})();

/******/ })()
;
//# sourceMappingURL=listagemSuporte.js.map