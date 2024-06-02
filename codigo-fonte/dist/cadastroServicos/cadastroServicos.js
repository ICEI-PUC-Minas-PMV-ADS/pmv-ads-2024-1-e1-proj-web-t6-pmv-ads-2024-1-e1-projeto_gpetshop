/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/CadastroServicos.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/CadastroServicos.css ***!
  \*****************************************************************************************/
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

/*cabeçalho*/
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: poppinsmedium, sans-serif;
  width: 43.75em;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2.5em;
}

.menu-icon-container {
  display: flex;
  align-items: center;
  height: 16px;
  width: 30px;
  top: 0px;
  left: 0px;
  padding-top: 16px;
  cursor: pointer;
  border-radius: 2px;
}

.fa-bars {
  font-weight: 600;
  font-size: 36px;
  color: #2F435A;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.fa-bars:hover {
  font-weight: 600;
  color: #FDCE6D;
  transition: .2s all;
}

.menu-icon-container > button {
  background-color: transparent;
  width: 34px;
  height: 30px;
  outline: 0;
  border: none;
  cursor: pointer;
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
  background-color: #FDCE6D;
  height: 100%;
  width: 250px;
  font-family: poppinssemibold, sans-serif;
  z-index: 1000;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  border-radius: 0px 10px 10px 0px;
}

.animate__animated.animate__fadeInLeft::before {
  --animate-duration: .5s;
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
}

.drop-down-agenda>ul>li {
  margin-bottom: 8px;
}

.drop-down-agenda>ul>li>a {
  color: #2F435A;
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
  color: #2F435A;
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

.title-principal {
  display: block;
  align-items: center;
  color: #2F435A;
  font-family: poppinsmedium, sans-serif;
}

.logo {
  display: flex;
  border: none;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}
/* FIM CABEÇALHO */

/*formulário*/
form {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* SERVIÇO */
.label-title-servico {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  width: 700px;
  height: 30px;
  border-radius: 50px;
  align-items: center;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.text-title-servico {
  display: flex;
  height: 20px;
  padding-top: 1px;
  margin-left: 10px;
  align-items: center;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 20px;
}

/*--> preço servico <--*/
.preco-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.preco-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.preco-servico-container input {
  color: #FDCE6D;
  height: 30px;
}

#precoServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> categoria servico <--*/
.categoria-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.categoria-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.categoria-servico-container input {
  color: #FDCE6D;
  height: 30px;
}

#categoriaServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> duracao servico <--*/
.duracao-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.duracao-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.duracao-servico-container input {
  color: #FDCE6D;
  height: 30px;
}

#duracaoServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> servico-pai servico <--*/
.servico-pai-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.servico-pai-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.servico-pai-container input {
  color: #FDCE6D;
  height: 30px;
}

#servicoPaiServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> nome do serviço <--*/
.nome-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.nome-servico-icon {
  color: #2F435A;
  font-size: 1.7em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.nome-servico-container input {
  color: #FDCE6D;
}

#nomeServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> AÇOES <--*/
#actions {
  display: flex;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
  gap: 34px;
}

#novo-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}

#novo-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}

#alterar-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}

#alterar-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}

#excluir-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}

#excluir-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}

#aceitar-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
}

#aceitar-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}


@media screen and (max-width: 414px) {
    /* INICIO CABEÇALHO */
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      font-family: poppinsmedium, sans-serif;
      margin-left: auto;
      margin-right: auto;
      width: 25em;
      height: 3.125em;
      margin-top: 1.5625em;
  }
  
  .menu-icon-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-top: 0.1875em;
      width: 2.5em;
      height: 1.875em;
  }
  
  .fa-bars {
      font-weight: 600;
      font-size: 1.875em;
      color: #2F435A;
      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }
  
  .fa-bars:hover {
      font-weight: 600;
      color: #FDCE6D;
      transition: .2s all;
  }
  
  .title-principal {
      display: flex;
      width: 8.75em;
      align-items: center;
      text-align: center;
      color: #2F435A;
      font-family: poppinsmedium, sans-serif;
      font-size: 0.9375em;
  }
  
  .logo {
      display: flex;
      justify-content: flex-start;
      width: 3.125em;
      height: 2.3125em;
      border: none;
      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }
  /* FIM CABEÇALHO */
  /*formulário*/
  form {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  /* SERVIÇO */
  .label-title-servico {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 25px;
    width: 400px;
    height: 25px;
    border-radius: 50px;
    align-items: center;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-title-servico {
    display: flex;
    height: 20px;
    padding-top: 1px;
    margin-left: 10px;
    align-items: center;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
  }
  
  /*--> preço serviço <--*/
  .preco-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .preco-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .preco-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #precoServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> duracao serviço <--*/
  .duracao-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .duracao-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .duracao-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #duracaoServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> categoria serviço <--*/
  .categoria-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .categoria-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .categoria-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #categoriaServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }
  
  /*--> servico pai serviço <--*/
  .servico-pai-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .servico-pai-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .servico-pai-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #servicoPaiServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> nome do serviço <--*/
  .nome-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .nome-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  .nome-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  #nomeServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> AÇOES <--*/
  #actions {
    display: none;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: row;
    gap: 34px;
  }

  #novo-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
  }

  #novo-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }

  #alterar-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
  }

  #alterar-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }

  #excluir-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
  }

  #excluir-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }

  #aceitar-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
  }

  #aceitar-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/CadastroServicos/CadastroServicos.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/*cabeçalho*/\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: poppinsmedium, sans-serif;\n  width: 43.75em;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 2.5em;\n}\n\n.menu-icon-container {\n  display: flex;\n  align-items: center;\n  height: 16px;\n  width: 30px;\n  top: 0px;\n  left: 0px;\n  padding-top: 16px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.fa-bars {\n  font-weight: 600;\n  font-size: 36px;\n  color: #2F435A;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.fa-bars:hover {\n  font-weight: 600;\n  color: #FDCE6D;\n  transition: .2s all;\n}\n\n.menu-icon-container > button {\n  background-color: transparent;\n  width: 34px;\n  height: 30px;\n  outline: 0;\n  border: none;\n  cursor: pointer;\n}\n\n/*menu-lateral*/\n#slide {\n  display: none;\n  flex-direction: column;\n  gap: 20px;\n  position: fixed;\n  align-items: flex-start;\n  top: 0;\n  left: 0;\n  padding: 40px 20px;\n  background-color: #FDCE6D;\n  height: 100%;\n  width: 250px;\n  font-family: poppinssemibold, sans-serif;\n  z-index: 1000;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  border-radius: 0px 10px 10px 0px;\n}\n\n.animate__animated.animate__fadeInLeft::before {\n  --animate-duration: .5s;\n}\n\n#slide>li {\n  display: flex;\n  list-style-type: none;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n#slide>li:hover>.drop-down-agenda {\n  display: block;\n  position: absolute;\n  left: 210px;\n  top: 95px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  z-index: 100;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n#slide>li:hover>.drop-down-cadastro {\n  display: block;\n  position: absolute;\n  left: 210px;\n  top: 135px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  z-index: 90;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n#slide>li>a {\n  line-height: 18px;\n  color: #2f435a;\n  text-decoration: none;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n.menu-container {\n  display: flex;\n}\n\n.um {\n  margin-left: 75px;\n}\n\n.dois {\n  margin-left: 45px;\n}\n\n.drop-down-agenda {\n  display: none;\n  position: absolute;\n  left: 210px;\n  top: 90px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  z-index: 100;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n.drop-down-agenda>ul {\n  list-style-type: none;\n}\n\n.drop-down-agenda>ul>li {\n  margin-bottom: 8px;\n}\n\n.drop-down-agenda>ul>li>a {\n  color: #2F435A;\n  font-size: 18px;\n  text-decoration: none;\n}\n\n.drop-down-agenda>ul>li>a:hover {\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\n}\n\n.drop-down-cadastro {\n  display: none;\n  position: absolute;\n  left: 210px;\n  top: 135px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n.drop-down-cadastro>ul {\n  list-style-type: none;\n}\n\n.drop-down-cadastro>ul>li {\n  margin-bottom: 8px;\n}\n\n.drop-down-cadastro>ul>li>a {\n  color: #2F435A;\n  font-size: 18px;\n  text-decoration: none;\n}\n\n.drop-down-cadastro>ul>li>a:hover {\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\n}\n\n.fa-home,\n.fa-power-off {\n  color: #2f435a;\n  font-size: 24px;\n}\n\n.fa-headset {\n  font-size: 23px;\n  color: #2f435a;\n}\n\n.fa-calendar {\n  font-size: 23px;\n  padding-left: 3px;\n  color: #2f435a;\n}\n\n.fa-user-group {\n  font-size: 22px;\n  color: #2f435a;\n}\n\n.fa-file-lines {\n  font-size: 25px;\n  padding-left: 3px;\n  color: #2f435a;\n}\n\n/*menu-lateral*/\n\n.title-principal {\n  display: block;\n  align-items: center;\n  color: #2F435A;\n  font-family: poppinsmedium, sans-serif;\n}\n\n.logo {\n  display: flex;\n  border: none;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n/* FIM CABEÇALHO */\n\n/*formulário*/\nform {\n  width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* SERVIÇO */\n.label-title-servico {\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 40px;\n  width: 700px;\n  height: 30px;\n  border-radius: 50px;\n  align-items: center;\n  background-color: #2F435A;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.text-title-servico {\n  display: flex;\n  height: 20px;\n  padding-top: 1px;\n  margin-left: 10px;\n  align-items: center;\n  color: #FDCE6D;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 20px;\n}\n\n/*--> preço servico <--*/\n.preco-servico-container {\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  align-items: center;\n  width: 42.5em;\n  height: 30px;\n  gap: 0.15625em;\n}\n\n.preco-servico-icon {\n  color: #2F435A;\n  font-size: 1.78125em;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.preco-servico-container input {\n  color: #FDCE6D;\n  height: 30px;\n}\n\n#precoServico {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.08em;\n  padding-top: 1px;\n  padding-left: 8px;\n  width: 644px;\n  height: 30px;\n  color: rgb(47, 67, 90);\n  font-family: poppinsmedium, sans-serif;\n  font-size: 16px;\n  border: none;\n  background-color: rgba(255, 231, 190, 0.79);\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  outline: 0;\n}\n\n/*--> categoria servico <--*/\n.categoria-servico-container {\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  align-items: center;\n  width: 42.5em;\n  height: 30px;\n  gap: 0.15625em;\n}\n\n.categoria-servico-icon {\n  color: #2F435A;\n  font-size: 1.78125em;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.categoria-servico-container input {\n  color: #FDCE6D;\n  height: 30px;\n}\n\n#categoriaServico {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.08em;\n  padding-top: 1px;\n  padding-left: 8px;\n  width: 644px;\n  height: 30px;\n  color: rgb(47, 67, 90);\n  font-family: poppinsmedium, sans-serif;\n  font-size: 16px;\n  border: none;\n  background-color: rgba(255, 231, 190, 0.79);\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  outline: 0;\n}\n\n/*--> duracao servico <--*/\n.duracao-servico-container {\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  align-items: center;\n  width: 42.5em;\n  height: 30px;\n  gap: 0.15625em;\n}\n\n.duracao-servico-icon {\n  color: #2F435A;\n  font-size: 1.78125em;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.duracao-servico-container input {\n  color: #FDCE6D;\n  height: 30px;\n}\n\n#duracaoServico {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.08em;\n  padding-top: 1px;\n  padding-left: 8px;\n  width: 644px;\n  height: 30px;\n  color: rgb(47, 67, 90);\n  font-family: poppinsmedium, sans-serif;\n  font-size: 16px;\n  border: none;\n  background-color: rgba(255, 231, 190, 0.79);\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  outline: 0;\n}\n\n/*--> servico-pai servico <--*/\n.servico-pai-servico-container {\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  align-items: center;\n  width: 42.5em;\n  height: 30px;\n  gap: 0.15625em;\n}\n\n.servico-pai-servico-icon {\n  color: #2F435A;\n  font-size: 1.78125em;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.servico-pai-container input {\n  color: #FDCE6D;\n  height: 30px;\n}\n\n#servicoPaiServico {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.08em;\n  padding-top: 1px;\n  padding-left: 8px;\n  width: 644px;\n  height: 30px;\n  color: rgb(47, 67, 90);\n  font-family: poppinsmedium, sans-serif;\n  font-size: 16px;\n  border: none;\n  background-color: rgba(255, 231, 190, 0.79);\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  outline: 0;\n}\n\n/*--> nome do serviço <--*/\n.nome-servico-container {\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  align-items: center;\n  width: 42.5em;\n  height: 30px;\n  gap: 0.15625em;\n}\n\n.nome-servico-icon {\n  color: #2F435A;\n  font-size: 1.7em;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.nome-servico-container input {\n  color: #FDCE6D;\n}\n\n#nomeServico {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 3px;\n  padding-left: 8px;\n  width: 644px;\n  height: 30px;\n  color: rgb(47, 67, 90);\n  font-family: poppinsmedium, sans-serif;\n  font-size: 16px;\n  border: none;\n  background-color: rgba(255, 231, 190, 0.79);\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  outline: 0;\n}\n\n/*--> AÇOES <--*/\n#actions {\n  display: flex;\n  margin-top: 30px;\n  margin-right: auto;\n  margin-left: auto;\n  flex-direction: row;\n  gap: 34px;\n}\n\n#novo-solicitacao {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 30px;\n  background-color: #2F435A;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #FDCE6D;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 16px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n#novo-solicitacao:hover {\n  display: flex;\n  background-color: #FDCE6D;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #2F435A;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 17px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n#alterar-solicitacao {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 30px;\n  background-color: #2F435A;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #FDCE6D;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 16px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n#alterar-solicitacao:hover {\n  display: flex;\n  background-color: #FDCE6D;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #2F435A;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 17px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n#excluir-solicitacao {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 30px;\n  background-color: #2F435A;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #FDCE6D;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 16px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n#excluir-solicitacao:hover {\n  display: flex;\n  background-color: #FDCE6D;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #2F435A;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 17px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n#aceitar-solicitacao {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 30px;\n  background-color: #2F435A;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #FDCE6D;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 16px;\n  transition: 0.2s;\n}\n\n#aceitar-solicitacao:hover {\n  display: flex;\n  background-color: #FDCE6D;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  outline: 0;\n  border: none;\n  border-radius: 50px;\n  color: #2F435A;\n  font-family: poppinssemibold, sans-serif;\n  font-size: 17px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n\n@media screen and (max-width: 414px) {\n    /* INICIO CABEÇALHO */\n    .header {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-around;\n      font-family: poppinsmedium, sans-serif;\n      margin-left: auto;\n      margin-right: auto;\n      width: 25em;\n      height: 3.125em;\n      margin-top: 1.5625em;\n  }\n  \n  .menu-icon-container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      padding-top: 0.1875em;\n      width: 2.5em;\n      height: 1.875em;\n  }\n  \n  .fa-bars {\n      font-weight: 600;\n      font-size: 1.875em;\n      color: #2F435A;\n      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n  \n  .fa-bars:hover {\n      font-weight: 600;\n      color: #FDCE6D;\n      transition: .2s all;\n  }\n  \n  .title-principal {\n      display: flex;\n      width: 8.75em;\n      align-items: center;\n      text-align: center;\n      color: #2F435A;\n      font-family: poppinsmedium, sans-serif;\n      font-size: 0.9375em;\n  }\n  \n  .logo {\n      display: flex;\n      justify-content: flex-start;\n      width: 3.125em;\n      height: 2.3125em;\n      border: none;\n      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n  /* FIM CABEÇALHO */\n  /*formulário*/\n  form {\n    width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  /* SERVIÇO */\n  .label-title-servico {\n    display: flex;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 25px;\n    width: 400px;\n    height: 25px;\n    border-radius: 50px;\n    align-items: center;\n    background-color: #2F435A;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .text-title-servico {\n    display: flex;\n    height: 20px;\n    padding-top: 1px;\n    margin-left: 10px;\n    align-items: center;\n    color: #FDCE6D;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 16px;\n  }\n  \n  /*--> preço serviço <--*/\n  .preco-servico-container {\n    display: flex;\n    justify-content: space-between;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    align-items: center;\n    width: 23.75em;\n    height: 25px;\n    gap: 0.15625em;\n  }\n\n  .preco-servico-icon {\n    color: #2F435A;\n    font-size: 20px;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  .preco-servico-container input {\n    color: #FDCE6D;\n    height: 25px;\n  }\n\n  #precoServico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.08em;\n    padding-top: 1px;\n    padding-left: 5px;\n    width: 644px;\n    height: 25px;\n    color: rgb(47, 67, 90);\n    font-family: poppinsmedium, sans-serif;\n    font-size: 14px;\n    border: none;\n    background-color: rgba(255, 231, 190, 0.79);\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    outline: 0;\n  }\n\n  /*--> duracao serviço <--*/\n  .duracao-servico-container {\n    display: flex;\n    justify-content: space-between;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    align-items: center;\n    width: 23.75em;\n    height: 25px;\n    gap: 0.15625em;\n  }\n\n  .duracao-servico-icon {\n    color: #2F435A;\n    font-size: 20px;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  .duracao-servico-container input {\n    color: #FDCE6D;\n    height: 25px;\n  }\n\n  #duracaoServico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.08em;\n    padding-top: 1px;\n    padding-left: 5px;\n    width: 644px;\n    height: 25px;\n    color: rgb(47, 67, 90);\n    font-family: poppinsmedium, sans-serif;\n    font-size: 14px;\n    border: none;\n    background-color: rgba(255, 231, 190, 0.79);\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    outline: 0;\n  }\n\n  /*--> categoria serviço <--*/\n  .categoria-servico-container {\n    display: flex;\n    justify-content: space-between;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    align-items: center;\n    width: 23.75em;\n    height: 25px;\n    gap: 0.15625em;\n  }\n\n  .categoria-servico-icon {\n    color: #2F435A;\n    font-size: 20px;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  .categoria-servico-container input {\n    color: #FDCE6D;\n    height: 25px;\n  }\n\n  #categoriaServico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.08em;\n    padding-top: 1px;\n    padding-left: 5px;\n    width: 644px;\n    height: 25px;\n    color: rgb(47, 67, 90);\n    font-family: poppinsmedium, sans-serif;\n    font-size: 14px;\n    border: none;\n    background-color: rgba(255, 231, 190, 0.79);\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    outline: 0;\n  }\n  \n  /*--> servico pai serviço <--*/\n  .servico-pai-servico-container {\n    display: flex;\n    justify-content: space-between;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    align-items: center;\n    width: 23.75em;\n    height: 25px;\n    gap: 0.15625em;\n  }\n\n  .servico-pai-servico-icon {\n    color: #2F435A;\n    font-size: 20px;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  .servico-pai-servico-container input {\n    color: #FDCE6D;\n    height: 25px;\n  }\n\n  #servicoPaiServico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.08em;\n    padding-top: 1px;\n    padding-left: 5px;\n    width: 644px;\n    height: 25px;\n    color: rgb(47, 67, 90);\n    font-family: poppinsmedium, sans-serif;\n    font-size: 14px;\n    border: none;\n    background-color: rgba(255, 231, 190, 0.79);\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    outline: 0;\n  }\n\n  /*--> nome do serviço <--*/\n  .nome-servico-container {\n    display: flex;\n    justify-content: space-between;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    align-items: center;\n    width: 23.75em;\n    height: 25px;\n    gap: 0.15625em;\n  }\n\n  .nome-servico-container input {\n    color: #FDCE6D;\n    height: 25px;\n  }\n\n  .nome-servico-icon {\n    color: #2F435A;\n    font-size: 20px;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  #nomeServico {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.08em;\n    padding-top: 1px;\n    padding-left: 5px;\n    width: 644px;\n    height: 25px;\n    color: rgb(47, 67, 90);\n    font-family: poppinsmedium, sans-serif;\n    font-size: 14px;\n    border: none;\n    background-color: rgba(255, 231, 190, 0.79);\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    outline: 0;\n  }\n\n  /*--> AÇOES <--*/\n  #actions {\n    display: none;\n    margin-top: 30px;\n    margin-right: auto;\n    margin-left: auto;\n    flex-direction: row;\n    gap: 34px;\n  }\n\n  #novo-solicitacao {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    height: 30px;\n    background-color: #2F435A;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #FDCE6D;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 16px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  #novo-solicitacao:hover {\n    display: none;\n    background-color: #FDCE6D;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #2F435A;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 17px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  #alterar-solicitacao {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    height: 30px;\n    background-color: #2F435A;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #FDCE6D;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 16px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  #alterar-solicitacao:hover {\n    display: none;\n    background-color: #FDCE6D;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #2F435A;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 17px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  #excluir-solicitacao {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    height: 30px;\n    background-color: #2F435A;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #FDCE6D;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 16px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  #excluir-solicitacao:hover {\n    display: none;\n    background-color: #FDCE6D;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #2F435A;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 17px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n\n  #aceitar-solicitacao {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    height: 30px;\n    background-color: #2F435A;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #FDCE6D;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 16px;\n    transition: 0.2s;\n  }\n\n  #aceitar-solicitacao:hover {\n    display: none;\n    background-color: #FDCE6D;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    outline: 0;\n    border: none;\n    border-radius: 50px;\n    color: #2F435A;\n    font-family: poppinssemibold, sans-serif;\n    font-size: 17px;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/ListagemCadastroServicos.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/ListagemCadastroServicos.css ***!
  \*************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `
* {
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
  width: 231px;
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
  color: rgba(255, 231, 190, 0.79);
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
  min-width: 195px;
  max-width: 195px;
  color: #2f435a;
  text-align: start;
  font-size: 17px;
  border-collapse: collapse;
}

.th-servicos {
  display: none;
}

.th-telefone-cliente {
  min-width: 270px;
  max-width: 270px;
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

.td-lista {
  padding-left: 3px;
  align-self: center;
  min-width: 195px;
  max-width: 195px;
  color: #2f435a;
  text-align: left;
  border-collapse: collapse;
  text-wrap: nowrap;
  cursor: pointer;
}

.td-nome-pet {
  align-self: center;
  min-width: 350px;
  max-width: 350px;
  color: #2f435a;
  text-align: left;
  border-collapse: collapse;
  text-wrap: nowrap;
  cursor: pointer;

  white-space: nowrap; /* Impede a quebra de linha */
  overflow: hidden; /* Esconde o texto que ultrapassa a largura máxima */
  text-overflow: ellipsis; /* Adiciona reticências (...) para indicar que o texto foi cortado */
}

.td-celular {
  /*   margin-left: 200px; */
  align-self: center;
  min-width: 270px;
  max-width: 270px;
  color: #2f435a;
  text-align: left;
  border-collapse: collapse;
  text-wrap: nowrap;
  cursor: pointer;
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
    width: 243px;
    height: 20px;
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

  thead>tr {
    display: flex;
    gap: 5px;
    border-collapse: collapse;
  }

  thead>tr>th {
    align-self: flex-start;
    min-width: 195px;
    max-width: 195px;
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

  tbody>tr {
    padding-left: 3px;
    display: flex;
    height: 30px;
    width: 99%;
    gap: 5px;
    border-collapse: collapse;
    font-size: 18px;
  }

  tbody>tr:hover {
    background-color: #ffd889;
    border-radius: 50px;
    transition: 0.2s all;

    font-size: 17px;
  }

  .td-nome {
    /*   border-bottom: 1px solid #dee0e4; */
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

  .td-lista {
    /*   border-bottom: 1px solid #dee0e4; */
    padding-left: 3px;
    align-self: center;
    min-width: 195px;
    max-width: 195px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;
  }

  .td-nome-pet {
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

  .td-celular {
    /*   margin-left: 200px; */
    align-self: center;
    min-width: 240px;
    max-width: 240px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;
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
    width: 243px;
    height: 20px;
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

  thead>tr {
    display: flex;
    gap: 5px;
    border-collapse: collapse;
  }

  thead>tr>th {
    align-self: flex-start;
    min-width: 195px;
    max-width: 195px;
    color: #2f435a;
    text-align: start;
    font-size: 16px;
    border-collapse: collapse;
  }

  .th-nome-pet {
    min-width: 190px;
    max-width: 190px;
  }

  .th-telefone-cliente {
    min-width: 150px;
    max-width: 150px;
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

  tbody>tr {
    padding-left: 3px;
    display: flex;
    height: 30px;
    width: 99%;
    gap: 5px;
    border-collapse: collapse;
    font-size: 18px;
  }

  tbody>tr:hover {
    background-color: #ffd889;
    border-radius: 50px;
    transition: 0.2s all;

    font-size: 17px;
  }

  .td-nome {
    /*   border-bottom: 1px solid #dee0e4; */
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

  .td-nome {
    /*   border-bottom: 1px solid #dee0e4; */
    padding-left: 3px;
    align-self: center;
    min-width: 150px;
    max-width: 150px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;
  }

  .td-nome-pet {
    align-self: center;
    min-width: 200px;
    max-width: 200px;
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

  .td-celular {
    /*   margin-left: 200px; */
    align-self: center;
    min-width: 150px;
    max-width: 150px;
    color: #2f435a;
    text-align: left;
    border-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;
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

  .th-servicos {
    display: flex;
    width: 100px;
  }

  .th-nome-cliente {
    display: none;
  }

  .th-nome-pet {
    display: none;
  }

  .th-telefone-cliente {
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

  .tbody>tr {
    display: flex;
    flex-direction: column;
    padding: 5px;
    height: 180px;
    width: 100%;
    gap: 0;

    border-bottom: 1px solid #ced5dd;
  }

  .tbody>tr:hover {
    border: none;
    background-color: transparent;
    font-size: 16px;
  }


  .td {
    min-width: min-content;
    max-width: max-content;
    display: flex;
    width: 90%;
    padding: 0;
    margin: 0;
    height: 25px;
  }

  .td-nome {
    width: 80%;
    height: 25px;
    padding: 0;
    align-self: flex-start;
  }

  .td-lista {
    width: 80%;
    height: 25px;
    padding: 0;
    align-self: flex-start;
  }

  .td-nome-pet {
    height: 25px;
    padding: 0;
    align-self: flex-start;
  }

  .td-celular {
    height: 25px;
    padding: 0;
    align-self: flex-start;
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

  #slide>li {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin-bottom: 20px;
  }

  #slide>li:hover>.drop-down-agenda {
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

  #slide>li:hover>.drop-down-cadastro {
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

  #slide>li>a {
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

  .drop-down-agenda>ul {
    list-style-type: none;
  }

  .drop-down-agenda>ul>li {
    margin-bottom: 8px;
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

}`, "",{"version":3,"sources":["webpack://./src/CadastroServicos/ListagemCadastroServicos.css"],"names":[],"mappings":"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","sourcesContent":["\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 1024px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/*menu-lateral*/\n#slide {\n  display: none;\n  flex-direction: column;\n  gap: 20px;\n  position: fixed;\n  align-items: flex-start;\n  top: 0;\n  left: 0;\n  padding: 40px 20px;\n  background-color: #fdce6d;\n  height: 100%;\n  width: 250px;\n  z-index: 1000;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  border-radius: 0px 10px 10px 0px;\n}\n\n#slide > li {\n  display: flex;\n  list-style-type: none;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n#slide > li:hover > .drop-down-agenda {\n  display: block;\n  position: absolute;\n  left: 210px;\n  top: 95px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  z-index: 100;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n#slide > li:hover > .drop-down-cadastro {\n  display: block;\n  position: absolute;\n  left: 210px;\n  top: 135px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  z-index: 90;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n#slide > li > a {\n  line-height: 18px;\n  color: #2f435a;\n  text-decoration: none;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n.menu-container {\n  display: flex;\n}\n\n.um {\n  margin-left: 75px;\n}\n\n.dois {\n  margin-left: 45px;\n}\n\n.drop-down-agenda {\n  display: none;\n  position: absolute;\n  left: 210px;\n  top: 90px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  z-index: 100;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n.drop-down-agenda > ul {\n  list-style-type: none;\n}\n\n.drop-down-agenda > ul > li {\n  margin-bottom: 8px;\n}\n\n.drop-down-agenda > ul > li > a {\n  color: #2f435a;\n  font-size: 18px;\n  text-decoration: none;\n}\n\n.drop-down-agenda > ul > li > a:hover {\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\n}\n\n.drop-down-cadastro {\n  display: none;\n  position: absolute;\n  left: 210px;\n  top: 135px;\n  width: 210px;\n  background-color: rgb(255, 231, 190);\n  padding: 7px;\n  border-radius: 8px;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n}\n\n.drop-down-cadastro > ul {\n  list-style-type: none;\n}\n\n.drop-down-cadastro > ul > li {\n  margin-bottom: 8px;\n}\n\n.drop-down-cadastro > ul > li > a {\n  color: #2f435a;\n  font-size: 18px;\n  text-decoration: none;\n}\n\n.drop-down-cadastro > ul > li > a:hover {\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\n}\n\n.fa-home,\n.fa-power-off {\n  color: #2f435a;\n  font-size: 24px;\n}\n\n.fa-headset {\n  font-size: 23px;\n  color: #2f435a;\n}\n\n.fa-calendar {\n  font-size: 23px;\n  padding-left: 3px;\n  color: #2f435a;\n}\n\n.fa-user-group {\n  font-size: 22px;\n  color: #2f435a;\n}\n\n.fa-file-lines {\n  font-size: 25px;\n  padding-left: 3px;\n  color: #2f435a;\n}\n\n/*menu-lateral*/\n\n/*cabeçalho*/\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: inherit;\n  margin-top: 40px;\n}\n\n.header-pagina {\n  display: none;\n  justify-content: center;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  color: #2f435a;\n  font-size: 20px;\n}\n\n.menu-icon-container {\n  display: flex;\n  align-items: center;\n  width: 80px;\n  height: 43px;\n  top: 0px;\n  left: 0px;\n  padding-top: 5px;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.fa-bars {\n  font-weight: 600;\n  font-size: 36px;\n  color: #2f435a;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.fa-bars:hover {\n  font-weight: 600;\n  color: #fdce6d;\n  transition: 0.2s all;\n}\n\n.menu-icon-container>button {\n  background-color: transparent;\n  width: 34px;\n  height: 30px;\n  outline: 0;\n  border: none;\n  cursor: pointer;\n}\n.title-principal {\n  display: flex;\n  align-items: center;\n  color: #2f435a;\n  font-size: 24px;\n}\n\n.logo {\n  display: flex;\n  border: none;\n}\n\nmain {\n  width: inherit;\n}\n/*lista*/\n/*cabeçalho da lista*/\n.list-container {\n  display: flex;\n  width: inherit;\n  margin-top: 60px;\n}\n\n.title {\n  display: flex;\n  width: inherit;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title-list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 231px;\n  height: 20px;\n  font-size: 20px;\n  color: #2f435a;\n  border-bottom: 2px solid #fdce6d;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n}\n\n.search-bar {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.search-bar input {\n  color: #fdce6d;\n}\n\n#searchBarList {\n  display: flex;\n  justify-content: center;\n  padding-left: 15px;\n  width: 405px;\n  height: 30px;\n  color: #fddb89;\n  font-size: 16px;\n  background: #2f435a;\n  border: none;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 50px;\n  outline: 0;\n}\n\n#searchBarList::placeholder {\n  color: rgba(255, 231, 190, 0.79);\n}\n\n.material-symbols-rounded {\n  margin-right: 10px;\n  color: #fdce6d;\n  position: absolute;\n}\n\ntable {\n  display: flex;\n  position: relative;\n  width: inherit;\n  margin-top: 15px;\n  padding: 5px;\n  border-collapse: collapse;\n  height: 324px;\n  background: rgba(47, 67, 90, 0.05);\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\nthead {\n  padding-left: 10px;\n  position: absolute;\n  width: 98%;\n  margin-top: -3px;\n  border-collapse: collapse;\n}\n\nthead > tr {\n  display: flex;\n  gap: 5px;\n  border-collapse: collapse;\n}\n\nthead > tr > th {\n  align-self: flex-start;\n  min-width: 195px;\n  max-width: 195px;\n  color: #2f435a;\n  text-align: start;\n  font-size: 17px;\n  border-collapse: collapse;\n}\n\n.th-servicos {\n  display: none;\n}\n\n.th-telefone-cliente {\n  min-width: 270px;\n  max-width: 270px;\n}\ntbody {\n  width: 1020px;\n  padding-left: 2px;\n  padding-top: 5px;\n  margin-top: 21px;\n  border: 2px solid #2f435a;\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  border-radius: 10px;\n  overflow-y: auto;\n  overflow-x: auto;\n  border-collapse: collapse;\n}\n\ntbody > tr {\n  padding-left: 3px;\n  display: flex;\n  height: 25px;\n  width: 99%;\n  gap: 5px;\n  border-collapse: collapse;\n  font-size: 16px;\n}\n\ntbody > tr:hover {\n  background-color: #ffd889;\n  border-radius: 50px;\n  transition: 0.2s all;\n\n  font-size: 16px;\n}\n\n.td-nome {\n  padding-left: 3px;\n  align-self: center;\n  min-width: 353px;\n  max-width: 353px;\n  color: #2f435a;\n  text-align: left;\n  border-collapse: collapse;\n  text-wrap: nowrap;\n  cursor: pointer;\n}\n\n.td-lista {\n  padding-left: 3px;\n  align-self: center;\n  min-width: 195px;\n  max-width: 195px;\n  color: #2f435a;\n  text-align: left;\n  border-collapse: collapse;\n  text-wrap: nowrap;\n  cursor: pointer;\n}\n\n.td-nome-pet {\n  align-self: center;\n  min-width: 350px;\n  max-width: 350px;\n  color: #2f435a;\n  text-align: left;\n  border-collapse: collapse;\n  text-wrap: nowrap;\n  cursor: pointer;\n\n  white-space: nowrap; /* Impede a quebra de linha */\n  overflow: hidden; /* Esconde o texto que ultrapassa a largura máxima */\n  text-overflow: ellipsis; /* Adiciona reticências (...) para indicar que o texto foi cortado */\n}\n\n.td-celular {\n  /*   margin-left: 200px; */\n  align-self: center;\n  min-width: 270px;\n  max-width: 270px;\n  color: #2f435a;\n  text-align: left;\n  border-collapse: collapse;\n  text-wrap: nowrap;\n  cursor: pointer;\n}\n\n/* scroll da tabela */\ntbody::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  border-top-right-radius: 6px;\n  background-color: transparent;\n}\n\ntbody::-moz-list-bullet {\n  width: 10px;\n  border-top-right-radius: 6px;\n}\n\ntbody::-webkit-scrollbar-track {\n  background-color: rgba(253, 206, 109, 0.3);\n  border-top-right-radius: 6px;\n}\n\ntbody::-webkit-scrollbar-thumb {\n  background-color: #2f435a;\n  border-radius: 6px;\n}\n\n/* Media Queries */\n@media screen and (max-width: 1024px) {\n  header {\n    width: 980px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .title-principal {\n    display: flex;\n    align-items: center;\n    color: #2f435a;\n    font-size: 24px;\n  }\n\n  main {\n    width: 980px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  /*lista*/\n  /*cabeçalho da lista*/\n  .list-container {\n    display: flex;\n    width: inherit;\n    margin-top: 60px;\n  }\n\n  .title {\n    display: flex;\n    width: inherit;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .title-list {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 243px;\n    height: 20px;\n    font-size: 21px;\n    color: #2f435a;\n    border-bottom: 2px solid #fdce6d;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .search-bar input {\n    color: #fdce6d;\n  }\n\n  #searchBarList {\n    display: flex;\n    justify-content: center;\n    padding-left: 15px;\n    width: 405px;\n    height: 35px;\n    color: #fddb89;\n    font-size: 17px;\n    line-height: 35px;\n    background: #2f435a;\n    border: none;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 50px;\n    outline: 0;\n  }\n\n  #searchBarList::placeholder {\n    color: rgba(255, 231, 190, 0.79);\n  }\n\n  .material-symbols-rounded {\n    margin-right: 10px;\n    font-size: 26px;\n    color: #fdce6d;\n    position: absolute;\n  }\n\n  table {\n    display: flex;\n    position: relative;\n    width: inherit;\n    margin-top: 15px;\n    padding: 5px;\n    border-collapse: collapse;\n    height: 324px;\n    background: rgba(47, 67, 90, 0.05);\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n  }\n\n  thead {\n    padding-left: 10px;\n    position: absolute;\n    width: 98%;\n    border-collapse: collapse;\n  }\n\n  thead>tr {\n    display: flex;\n    gap: 5px;\n    border-collapse: collapse;\n  }\n\n  thead>tr>th {\n    align-self: flex-start;\n    min-width: 195px;\n    max-width: 195px;\n    color: #2f435a;\n    text-align: start;\n    font-size: 16px;\n    border-collapse: collapse;\n  }\n\n  tbody {\n    width: 1500px;\n    padding-left: 2px;\n    padding-top: 5px;\n    margin-top: 21px;\n    border: 2px solid #2f435a;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n    border-radius: 10px;\n    overflow-y: auto;\n    overflow-x: auto;\n    border-collapse: collapse;\n  }\n\n  tbody>tr {\n    padding-left: 3px;\n    display: flex;\n    height: 30px;\n    width: 99%;\n    gap: 5px;\n    border-collapse: collapse;\n    font-size: 18px;\n  }\n\n  tbody>tr:hover {\n    background-color: #ffd889;\n    border-radius: 50px;\n    transition: 0.2s all;\n\n    font-size: 17px;\n  }\n\n  .td-nome {\n    /*   border-bottom: 1px solid #dee0e4; */\n    padding-left: 3px;\n    align-self: center;\n    min-width: 353px;\n    max-width: 353px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n  }\n\n  .td-lista {\n    /*   border-bottom: 1px solid #dee0e4; */\n    padding-left: 3px;\n    align-self: center;\n    min-width: 195px;\n    max-width: 195px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n  }\n\n  .td-nome-pet {\n    align-self: center;\n    min-width: 350px;\n    max-width: 350px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n\n    white-space: nowrap;\n    /* Impede a quebra de linha */\n    overflow: hidden;\n    /* Esconde o texto que ultrapassa a largura máxima */\n    text-overflow: ellipsis;\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\n  }\n\n  .td-celular {\n    /*   margin-left: 200px; */\n    align-self: center;\n    min-width: 240px;\n    max-width: 240px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  body {\n    display: flex;\n    flex-direction: column;\n    width: 758px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  header {\n    width: 758px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .menu-icon-container {\n    display: flex;\n    align-items: center;\n    height: 16px;\n    width: 80px;\n    top: 0px;\n    left: 0px;\n    padding-top: 16px;\n    cursor: pointer;\n    border-radius: 2px;\n  }\n\n  .title-principal {\n    display: flex;\n    align-items: center;\n    color: #2f435a;\n    font-size: 24px;\n  }\n\n  main {\n    width: 758px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  /*lista*/\n  /*cabeçalho da lista*/\n  .list-container {\n    display: flex;\n    width: inherit;\n    margin-top: 60px;\n  }\n\n  .title {\n    display: flex;\n    width: inherit;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .title-list {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 243px;\n    height: 20px;\n    font-size: 21px;\n    color: #2f435a;\n    border-bottom: 2px solid #fdce6d;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n  .search-bar {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .search-bar input {\n    color: #fdce6d;\n  }\n\n  #searchBarList {\n    display: flex;\n    justify-content: center;\n    padding-left: 15px;\n    width: 405px;\n    height: 35px;\n    color: #fddb89;\n    font-size: 17px;\n    line-height: 35px;\n    background: #2f435a;\n    border: none;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 50px;\n    outline: 0;\n  }\n\n  #searchBarList::placeholder {\n    color: rgba(255, 231, 190, 0.79);\n  }\n\n  .material-symbols-rounded {\n    margin-right: 10px;\n    font-size: 26px;\n    color: #fdce6d;\n    position: absolute;\n  }\n\n  table {\n    display: flex;\n    position: relative;\n    width: inherit;\n    margin-top: 15px;\n    padding: 5px;\n    border-collapse: collapse;\n    height: 324px;\n    background: rgba(47, 67, 90, 0.05);\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n  }\n\n  thead {\n    padding-left: 10px;\n    position: absolute;\n    width: 98%;\n    border-collapse: collapse;\n  }\n\n  thead>tr {\n    display: flex;\n    gap: 5px;\n    border-collapse: collapse;\n  }\n\n  thead>tr>th {\n    align-self: flex-start;\n    min-width: 195px;\n    max-width: 195px;\n    color: #2f435a;\n    text-align: start;\n    font-size: 16px;\n    border-collapse: collapse;\n  }\n\n  .th-nome-pet {\n    min-width: 190px;\n    max-width: 190px;\n  }\n\n  .th-telefone-cliente {\n    min-width: 150px;\n    max-width: 150px;\n  }\n\n  tbody {\n    width: 758px;\n    padding-left: 2px;\n    padding-top: 5px;\n    margin-top: 21px;\n    border: 2px solid #2f435a;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n    border-radius: 10px;\n    overflow-y: auto;\n    overflow-x: auto;\n    border-collapse: collapse;\n  }\n\n  tbody>tr {\n    padding-left: 3px;\n    display: flex;\n    height: 30px;\n    width: 99%;\n    gap: 5px;\n    border-collapse: collapse;\n    font-size: 18px;\n  }\n\n  tbody>tr:hover {\n    background-color: #ffd889;\n    border-radius: 50px;\n    transition: 0.2s all;\n\n    font-size: 17px;\n  }\n\n  .td-nome {\n    /*   border-bottom: 1px solid #dee0e4; */\n    padding-left: 3px;\n    align-self: center;\n    min-width: 353px;\n    max-width: 353px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n  }\n\n  .td-nome {\n    /*   border-bottom: 1px solid #dee0e4; */\n    padding-left: 3px;\n    align-self: center;\n    min-width: 150px;\n    max-width: 150px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n  }\n\n  .td-nome-pet {\n    align-self: center;\n    min-width: 200px;\n    max-width: 200px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n\n    white-space: nowrap;\n    /* Impede a quebra de linha */\n    overflow: hidden;\n    /* Esconde o texto que ultrapassa a largura máxima */\n    text-overflow: ellipsis;\n    /* Adiciona reticências (...) para indicar que o texto foi cortado */\n  }\n\n  .td-celular {\n    /*   margin-left: 200px; */\n    align-self: center;\n    min-width: 150px;\n    max-width: 150px;\n    color: #2f435a;\n    text-align: left;\n    border-collapse: collapse;\n    text-wrap: nowrap;\n    cursor: pointer;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  html {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 0;\n  }\n\n  header {\n    display: flex;\n    justify-content: flex-start;\n    width: 90%;\n    margin: 0;\n    padding: 0;\n  }\n\n  .header {\n    display: flex;\n    position: relative;\n    width: 100%;\n    align-items: center;\n  }\n\n  .menu-icon-container>button {\n    background-color: transparent;\n    width: 80px;\n      height: 43px;\n    outline: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .title-principal {\n    display: none;\n  }\n\n  .title-pagina {\n    display: block;\n    width: max-content;\n    align-self: center;\n    justify-self: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 40px;\n    color: #2f435a;\n    font-size: 20px;\n  }\n\n  .logo {\n    display: flex;\n    position: absolute;\n    left: 42%;\n    border: none;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n  }\n\n\n  main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .header-pagina {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    color: #2f435a;\n    font-size: 20px;\n  }\n\n  /*lista*/\n  /*cabeçalho da lista*/\n  .list-container {\n    display: flex;\n    width: 90%;\n    margin-top: 20px;\n  }\n\n  .title {\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .title-list {\n    display: none;\n  }\n\n  .search-bar {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    position: relative;\n  }\n\n  .search-bar input {\n    color: #fdce6d;\n  }\n\n  #searchBarList {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 15px;\n    width: 100%;\n    height: 35px;\n    color: #fddb89;\n    font-size: 17px;\n    line-height: 35px;\n    background: #2f435a;\n    border: none;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 50px;\n    outline: 0;\n  }\n\n  #searchBarList::placeholder {\n    color: rgba(255, 231, 190, 0.79);\n  }\n\n  .material-symbols-rounded {\n    font-size: 26px;\n    color: #fdce6d;\n    position: absolute;\n    right: 0;\n  }\n\n  #tableClient {\n    display: flex;\n    position: relative;\n    justify-content: center;\n    width: 90%;\n    margin-top: 15px;\n    padding: 5px;\n    border-collapse: collapse;\n    height: 435px;\n    background: rgba(47, 67, 90, 0.05);\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n  }\n\n  .thead {\n    padding-left: 10px;\n    position: absolute;\n    width: 98%;\n    border-collapse: collapse;\n  }\n\n  .thead-tr {\n    display: flex;\n    gap: 5px;\n    border-collapse: collapse;\n  }\n\n  .th {\n    align-self: flex-start;\n    min-width: 100px;\n    max-width: 100px;\n    color: #2f435a;\n    text-align: start;\n    font-size: 16px;\n    border-collapse: collapse;\n  }\n\n  .th-servicos {\n    display: flex;\n    width: 100px;\n  }\n\n  .th-nome-cliente {\n    display: none;\n  }\n\n  .th-nome-pet {\n    display: none;\n  }\n\n  .th-telefone-cliente {\n    display: none;\n  }\n\n  .tbody {\n    display: flex;\n    flex-direction: column;\n    width: 99%;\n    height: 400px;\n    padding: 5px;\n    margin-top: 21px;\n    border: 2px solid #2f435a;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n    border-radius: 10px;\n    overflow-y: auto;\n    overflow-x: auto;\n    border-collapse: collapse;\n  }\n\n  .tbody>tr {\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n    height: 180px;\n    width: 100%;\n    gap: 0;\n\n    border-bottom: 1px solid #ced5dd;\n  }\n\n  .tbody>tr:hover {\n    border: none;\n    background-color: transparent;\n    font-size: 16px;\n  }\n\n\n  .td {\n    min-width: min-content;\n    max-width: max-content;\n    display: flex;\n    width: 90%;\n    padding: 0;\n    margin: 0;\n    height: 25px;\n  }\n\n  .td-nome {\n    width: 80%;\n    height: 25px;\n    padding: 0;\n    align-self: flex-start;\n  }\n\n  .td-lista {\n    width: 80%;\n    height: 25px;\n    padding: 0;\n    align-self: flex-start;\n  }\n\n  .td-nome-pet {\n    height: 25px;\n    padding: 0;\n    align-self: flex-start;\n  }\n\n  .td-celular {\n    height: 25px;\n    padding: 0;\n    align-self: flex-start;\n  }\n\n  /*menu-lateral*/\n  #slide {\n    display: none;\n    flex-direction: column;\n    gap: 20px;\n    position: fixed;\n    align-items: flex-start;\n    top: 0;\n    left: 0;\n    padding: 40px 20px;\n    background-color: #fdce6d;\n    height: 100%;\n    width: 200px;\n    z-index: 1000;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\n    border-radius: 0px 10px 10px 0px;\n  }\n\n  #slide>li {\n    display: flex;\n    list-style-type: none;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  #slide>li:hover>.drop-down-agenda {\n    display: block;\n    position: absolute;\n    left: 170px;\n    top: 95px;\n    width: 210px;\n    background-color: rgb(255, 231, 190);\n    padding: 7px;\n    border-radius: 8px;\n    z-index: 100;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n  }\n\n  #slide>li:hover>.drop-down-cadastro {\n    display: block;\n    position: absolute;\n    left: 170px;\n    top: 135px;\n    width: 210px;\n    background-color: rgb(255, 231, 190);\n    padding: 7px;\n    border-radius: 8px;\n    z-index: 90;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n  }\n\n  #slide>li>a {\n    display: flex;\n    align-items: center;\n    line-height: 18px;\n    color: #2f435a;\n    text-decoration: none;\n    font-size: 16px;\n    margin-left: 10px;\n  }\n\n  .menu-container {\n    display: flex;\n  }\n\n  .um {\n    margin-left: 55px;\n  }\n\n  .dois {\n    margin-left: 30px;\n  }\n\n  .drop-down-agenda {\n    display: none;\n    position: absolute;\n    left: 210px;\n    top: 135px;\n    width: 210px;\n    background-color: rgb(255, 231, 190);\n    padding: 7px;\n    border-radius: 8px;\n    z-index: 100;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n  }\n\n  .drop-down-agenda>ul {\n    list-style-type: none;\n  }\n\n  .drop-down-agenda>ul>li {\n    margin-bottom: 8px;\n  }\n\n  .drop-down-agenda>ul>li>a {\n    color: #2f435a;\n    font-size: 18px;\n    text-decoration: none;\n  }\n\n  .drop-down-agenda>ul>li>a:hover {\n    filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\n  }\n\n  .drop-down-cadastro {\n    display: none;\n    position: absolute;\n    left: 210px;\n    top: 135px;\n    width: 210px;\n    background-color: rgb(255, 231, 190);\n    padding: 7px;\n    border-radius: 8px;\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\n  }\n\n  .drop-down-cadastro>ul {\n    list-style-type: none;\n  }\n\n  .drop-down-cadastro>ul>li {\n    margin-bottom: 8px;\n  }\n\n  .drop-down-cadastro>ul>li>a {\n    color: #2f435a;\n    font-size: 18px;\n    text-decoration: none;\n  }\n\n  .drop-down-cadastro>ul>li>a:hover {\n    filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\n  }\n\n  .fa-home,\n  .fa-power-off {\n    color: #2f435a;\n    font-size: 23px;\n  }\n\n  .fa-headset {\n    font-size: 22px;\n    color: #2f435a;\n  }\n\n  .fa-calendar {\n    font-size: 22px;\n    padding-left: 3px;\n    color: #2f435a;\n  }\n\n  .fa-user-group {\n    font-size: 21px;\n    color: #2f435a;\n  }\n\n  .fa-file-lines {\n    font-size: 24px;\n    padding-left: 3px;\n    color: #2f435a;\n  }\n\n  /*menu-lateral*/\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/svg/petPuc.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/petPuc.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/petPuc.svg");

/***/ }),

/***/ "./src/CadastroServicos/CadastroServicos.css":
/*!***************************************************!*\
  !*** ./src/CadastroServicos/CadastroServicos.css ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./CadastroServicos.css */ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/CadastroServicos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/CadastroServicos/ListagemCadastroServicos.css":
/*!***********************************************************!*\
  !*** ./src/CadastroServicos/ListagemCadastroServicos.css ***!
  \***********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ListagemCadastroServicos.css */ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/ListagemCadastroServicos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  !*** ./src/CadastroServicos/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CadastroServicos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CadastroServicos.css */ "./src/CadastroServicos/CadastroServicos.css");
/* harmony import */ var _ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListagemCadastroServicos.css */ "./src/CadastroServicos/ListagemCadastroServicos.css");
/* harmony import */ var _assets_svg_petPuc_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/petPuc.svg */ "./src/assets/svg/petPuc.svg");




// OPEN CLOSE
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});

// Event listener para o botão "Aceitar"
document.getElementById("aceitar-solicitacao").addEventListener("click", function() {
  // Obter os valores dos campos do formulário
  var nomeServico = document.getElementById("nomeServico").value;
  var precoServico = document.getElementById("precoServico").value;
  var duracaoServico = document.getElementById("duracaoServico").value;
  var categoriaServico = document.getElementById("categoriaServico").value;
  var servicoPaiServico = document.getElementById("servicoPaiServico").value;
 
  // Verificar se algum campo está vazio
  if (nomeServico === "" || precoServico === "" || duracaoServico === "" || categoriaServico === "" || servicoPaiServico === "") {
    // Se algum campo estiver vazio, exibir uma mensagem de erro
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
    return; // Parar a execução da função
  }

  // Criar um objeto com os dados do serviço
  var servico = {
      nome: nomeServico,
      preco: precoServico,
      duracao: duracaoServico,
      categoriaServico: categoriaServico,
      servicoPaiServico: servicoPaiServico
  };

  // Verificar se o índice do serviço a ser alterado está definido
  var index = document.getElementById("alterar-solicitacao").getAttribute("data-index");
  if (index !== null && index !== undefined) {
    // Obter a lista de serviços do local storage
    var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    // Verificar se o índice é válido
    if (index >= 0 && index < servicos.length) {
      // Atualizar o serviço na lista
      servicos[index] = servico;

      // Atualizar o local storage com os dados atualizados
      localStorage.setItem("servicos", JSON.stringify(servicos));

      // Limpar os campos do formulário após alterar o serviço
      document.getElementById("nomeServico").value = "";
      document.getElementById("precoServico").value = "";
      document.getElementById("duracaoServico").value = "";
      document.getElementById("categoriaServico").value = "";
      document.getElementById("servicoPaiServico").value = "";

      // Atualizar a tabela na página com os novos dados
      atualizarListaServicos();

      // Remover o atributo data-index após a atualização
      document.getElementById("alterar-solicitacao").removeAttribute("data-index");

      return; // Finalizar a função após atualizar o serviço
    }
  }

  // Se não houver índice definido ou o índice não for válido, criar um novo serviço
  var servicos = JSON.parse(localStorage.getItem("servicos")) || [];
  servicos.push(servico);
  localStorage.setItem("servicos", JSON.stringify(servicos));

  // Limpar os campos do formulário após adicionar o serviço
  document.getElementById("nomeServico").value = "";
  document.getElementById("precoServico").value = "";
  document.getElementById("duracaoServico").value = "";
  document.getElementById("categoriaServico").value = "";
  document.getElementById("servicoPaiServico").value = "";

  // Atualizar a tabela na página com os novos dados
  atualizarListaServicos();
});

// Event listener para o botão "Alterar"
document.getElementById("alterar-solicitacao").addEventListener("click", function() {
  // Permitir a edição dos campos
  document.getElementById("nomeServico").readOnly = false;
  document.getElementById("precoServico").readOnly = false;
  document.getElementById("duracaoServico").readOnly = false;
  document.getElementById("categoriaServico").readOnly = false;
  document.getElementById("servicoPaiServico").readOnly = false;
});

// Event listener para o botão "Novo"
document.getElementById("novo-solicitacao").addEventListener("click", function() {
  // Limpar os campos do formulário
  document.getElementById("nomeServico").value = "";
  document.getElementById("precoServico").value = "";
  document.getElementById("duracaoServico").value = "";
  document.getElementById("categoriaServico").value = "";
  document.getElementById("servicoPaiServico").value = "";

  // Permitir a edição dos campos
  document.getElementById("nomeServico").readOnly = false;
  document.getElementById("precoServico").readOnly = false;
  document.getElementById("duracaoServico").readOnly = false;
  document.getElementById("categoriaServico").readOnly = false;
  document.getElementById("servicoPaiServico").readOnly = false;

  // Remover o atributo data-index para garantir que um novo serviço seja criado
  document.getElementById("alterar-solicitacao").removeAttribute("data-index");
});

// Event listener para o botão "Excluir"
document.getElementById("excluir-solicitacao").addEventListener("click", function() {
  var index = document.getElementById("alterar-solicitacao").getAttribute("data-index");
  if (index !== null && index !== undefined) {
    var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    if (index >= 0 && index < servicos.length) {
      // Remover o serviço da lista
      servicos.splice(index, 1);

      // Atualizar o local storage com os dados atualizados
      localStorage.setItem("servicos", JSON.stringify(servicos));

      // Limpar os campos do formulário após excluir o serviço
      document.getElementById("nomeServico").value = "";
      document.getElementById("precoServico").value = "";
      document.getElementById("duracaoServico").value = "";
      document.getElementById("categoriaServico").value = "";
      document.getElementById("servicoPaiServico").value = "";

      // Atualizar a tabela na página com os novos dados
      atualizarListaServicos();

      // Remover o atributo data-index após a exclusão
      document.getElementById("alterar-solicitacao").removeAttribute("data-index");
    }
  }
});

// Função para atualizar a lista de serviços na página
function atualizarListaServicos() {
  var tabelaServicos = document.getElementById("tableClient").getElementsByTagName("tbody")[0];
  tabelaServicos.innerHTML = ""; // Limpar a tabela antes de adicionar os novos dados

  // Obter a lista de serviços do local storage
  var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

  // Iterar sobre a lista de serviços e adicionar cada um à tabela
  servicos.forEach(function(servico, index) {
      const newRow = document.createElement("tr");

      // Criar o conteúdo da nova linha
      var newRowContent = `
          <td class="poppins-regular td td-lista">${servico.nome}</td>
          <td class="poppins-light td td-lista">${servico.preco}</td>
          <td class="poppins-light td td-lista">${servico.duracao}</td>
          <td class="poppins-light td td-lista">${servico.categoriaServico}</td>
          <td class="poppins-light td td-lista">${servico.servicoPaiServico}</td>
      `;
      newRow.innerHTML = newRowContent;
      tabelaServicos.appendChild(newRow);

      // Adicionar evento de clique a cada linha da lista
      newRow.addEventListener("click", function() {
          // Preencher os campos do formulário com os dados do serviço selecionado
          document.getElementById("nomeServico").value = servico.nome;
          document.getElementById("precoServico").value = servico.preco;
          document.getElementById("duracaoServico").value = servico.duracao;
          document.getElementById("categoriaServico").value = servico.categoriaServico;
          document.getElementById("servicoPaiServico").value = servico.servicoPaiServico;

          // Definir os campos como somente leitura
          document.getElementById("nomeServico").readOnly = true;
          document.getElementById("precoServico").readOnly = true;
          document.getElementById("duracaoServico").readOnly = true;
          document.getElementById("categoriaServico").readOnly = true;
          document.getElementById("servicoPaiServico").readOnly = true;

          // Definir o índice do serviço para edição
          document.getElementById("alterar-solicitacao").setAttribute("data-index", index);
      });
  });
}

// Atualizar a lista de serviços ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  atualizarListaServicos();
});


// Atualizar a lista de serviços ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  atualizarListaServicos();
});



// Adicione um evento de entrada (input) ao campo de filtro
document.getElementById("searchBarList").addEventListener("input", function() {
  // Obtenha o valor digitado no campo de filtro
  var filtro = this.value.toLowerCase();

  // Obter a lista de serviços do local storage
  var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

  // Limpar a tabela antes de adicionar os novos dados
  var tabelaServicos = document.getElementById("tableClient").getElementsByTagName("tbody")[0];
  tabelaServicos.innerHTML = "";

  // Iterar sobre a lista de serviços
  servicos.forEach(function(servico) {
      // Verificar se o nome do serviço contém a string de pesquisa
      if (servico.nome.toLowerCase().includes(filtro)) {
          const newRow = document.createElement("tr");

          // Criar o conteúdo da nova linha
          var newRowContent = `
              <td class="poppins-regular td td-lista">${servico.nome}</td>
              <td class="poppins-light td td-lista">${servico.preco}</td>
              <td class="poppins-light td td-lista">${servico.duracao}</td>
              <td class="poppins-light td td-lista">${servico.categoriaServico}</td>
              <td class="poppins-light td td-lista">${servico.servicoPaiServico}</td>
          `;
          newRow.innerHTML = newRowContent;
          tabelaServicos.appendChild(newRow);

          // Adicionar evento de clique a cada linha da lista
          newRow.addEventListener("click", function() {
              // Preencher os campos do formulário com os dados do serviço selecionado
              document.getElementById("nomeServico").value = servico.nome;
              document.getElementById("precoServico").value = servico.preco;
              document.getElementById("duracaoServico").value = servico.duracao;
              document.getElementById("categoriaServico").value = servico.categoriaServico;
              document.getElementById("servicoPaiServico").value = servico.servicoPaiServico;

              // Definir os campos como somente leitura
              document.getElementById("nomeServico").readOnly = true;
              document.getElementById("precoServico").readOnly = true;
              document.getElementById("duracaoServico").readOnly = true;
              document.getElementById("categoriaServico").readOnly = true;
              document.getElementById("servicoPaiServico").readOnly = true;

              // Definir o índice do serviço para edição
              document.getElementById("alterar-solicitacao").setAttribute("data-index", servicos.indexOf(servico));
          });
      }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=cadastroServicos.js.map