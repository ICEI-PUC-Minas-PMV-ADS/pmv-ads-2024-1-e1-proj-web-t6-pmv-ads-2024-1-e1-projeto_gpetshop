/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/TratamentoSuporte/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/TratamentoSuporte/index.css ***!
  \*******************************************************************************/
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
.header {
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
.label-title-cliente,
.label-title-resp {
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

.text-title-cliente,
.text-title-resp {
	display: flex;
	height: 1.25em;
	padding-top: 0.0625em;
	margin-left: 0.625em;
	align-items: center;
	color: #fdce6d;
	font-size: 1.25em;
}

.name-client-container,
.email-client-container,
.fone-client-container {
	display: flex;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0.625em;
	align-items: center;
	width: 97%;
	height: 1.875em;
	gap: 0.15625em;
}

.fa-user {
	color: #2f435a;
	font-size: 1.6em;
	padding-left: 3px;
	filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.fa-envelope {
	color: #2f435a;
	font-size: 1.78125em;
	filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.fa-phone {
	color: #2f435a;
	font-size: 1.7em;
	filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

#nameClient,
#emailClient,
#foneClient {
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

#nameClient::placeholder,
#emailClient::placeholder,
#foneClient::placeholder,
#text-value-msg::placeholder,
#text-value-resp::placeholder {
	color: #2f435a8a;
}

#msg {
	display: flex;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
}

#text-value-resp,
#text-value-msg {
	display: flex;
	margin-left: auto;
	margin-right: auto;
	width: 97%;
	height: 6.25em;
	margin-top: 0.625em;
	padding: 0.3125em;
	color: #2F435A;
	background-color: #FFF1D4;
	border: none;
	outline: none;
	border-radius: 0.5em;
	font-size: 1em;
	resize: none;
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

/* FIM FORMULÁRIO */


/* INICIO AÇÕES */

#actions {
	display: flex;
	margin-top: 1.875em;
	width: 43.75em;
	margin-right: auto;
	margin-left: auto;
	flex-direction: row;
	justify-content: center;
	gap: 1.25em;
}

#inserir-resposta,
#excluir-mensagem,
#enviar-resposta {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 100px;
	width: 11em;
	height: 2em;
	background-color: #2F435A;
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
	outline: 0;
	border: none;
	border-radius: 3.125em;
	color: #FDCE6D;
	font-size: 1em;
	transition: 0.5s;
	cursor: pointer;
}

#inserir-resposta:hover,
#excluir-mensagem:hover,
#enviar-resposta:hover {
	display: flex;
	background-color: #FDCE6D;
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
	outline: 0;
	border: none;
	border-radius: 3.125em;
	color: #2F435A;
	transition: 0.5s;
	cursor: pointer;
}

/* FIM AÇÕES */


/* MEDIA QUERIES */
@media screen and (max-width: 1024px) {}

@media screen and (max-width: 575px) {
	body {
		width: 575px;
		margin-left: auto;
		margin-right: auto;
	}

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

	main {
		width: 100%;
	}

	footer {
		width: 100%;
	}

	#actions {
		display: flex;
		width: 93%;
		margin: 1.875em auto 50px auto;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25em;
	}

	#inserir-resposta,
	#excluir-mensagem,
	#enviar-resposta {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		margin: 0;
		height: 2.1875em;
		background-color: #2F435A;
		box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
		outline: 0;
		border: none;
		border-radius: 3.125em;
		color: #FDCE6D;
		font-size: 1.1em;
		transition: 0.5s;
		cursor: pointer;
	}
}

@media screen and (max-width: 480px) {
	body {
		width: 480px;
		margin-left: auto;
		margin-right: auto;
	}



	main {
		width: 100%;
	}

	footer {
		width: 100%;
	}

	#actions {
		display: flex;
		width: 93%;
		margin: 1.875em auto 50px auto;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25em;
	}

	#inserir-resposta,
	#excluir-mensagem,
	#enviar-resposta {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		margin: 0;
		height: 2.1875em;
		background-color: #2F435A;
		box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
		outline: 0;
		border: none;
		border-radius: 3.125em;
		color: #FDCE6D;
		font-size: 1.1em;
		transition: 0.5s;
		cursor: pointer;
	}
}`, "",{"version":3,"sources":["webpack://./src/TratamentoSuporte/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\twidth: 700px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n/* INICIO CABEÇALHO */\r\n.header {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: 95%;\r\n\tmargin-right: auto;\r\n\tmargin-left: auto;\r\n\tmargin-top: 2.5em;\r\n}\r\n\r\n.menu-icon-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n\theight: 43px;\r\n\twidth: 80px;\r\n\tcursor: pointer;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.fa-arrow-left {\r\n\tmargin-top: 2px;\r\n\twidth: 80px;\r\n\tfont-weight: 600;\r\n\tfont-size: 36px;\r\n\tcolor: #2f435a;\r\n\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-arrow-left:hover {\r\n\tfont-weight: 600;\r\n\tcolor: #fdce6d;\r\n\ttransition: 0.2s all;\r\n}\r\n\r\n.menu-icon-container>button {\r\n\tbackground-color: transparent;\r\n\twidth: 80px;\r\n\theight: 43px;\r\n\toutline: 0;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.title-principal {\r\n\tdisplay: block;\r\n\talign-items: center;\r\n\tcolor: #2f435a;\r\n\tfont-size: 24px;\r\n}\r\n\r\n.logo {\r\n\tdisplay: flex;\r\n\tborder: none;\r\n\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.title-pagina {\r\n\tdisplay: none;\r\n}\r\n\r\n/* FIM CABEÇALHO */\r\n\r\n\r\n/* INICIO FORMULÁRIO */\r\n\r\nform {\r\n\twidth: 95%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n/* INICIO CLIENTE */\r\n.label-title-cliente,\r\n.label-title-resp {\r\n\tdisplay: flex;\r\n\tmargin-right: auto;\r\n\tmargin-left: auto;\r\n\tmargin-top: 2.5em;\r\n\twidth: 100%;\r\n\theight: 1.875em;\r\n\tborder-radius: 3.125em;\r\n\talign-items: center;\r\n\tbackground-color: #2f435a;\r\n\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.text-title-cliente,\r\n.text-title-resp {\r\n\tdisplay: flex;\r\n\theight: 1.25em;\r\n\tpadding-top: 0.0625em;\r\n\tmargin-left: 0.625em;\r\n\talign-items: center;\r\n\tcolor: #fdce6d;\r\n\tfont-size: 1.25em;\r\n}\r\n\r\n.name-client-container,\r\n.email-client-container,\r\n.fone-client-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: 0.625em;\r\n\talign-items: center;\r\n\twidth: 97%;\r\n\theight: 1.875em;\r\n\tgap: 0.15625em;\r\n}\r\n\r\n.fa-user {\r\n\tcolor: #2f435a;\r\n\tfont-size: 1.6em;\r\n\tpadding-left: 3px;\r\n\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-envelope {\r\n\tcolor: #2f435a;\r\n\tfont-size: 1.78125em;\r\n\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-phone {\r\n\tcolor: #2f435a;\r\n\tfont-size: 1.7em;\r\n\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n#nameClient,\r\n#emailClient,\r\n#foneClient {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tline-height: 1.875em;\r\n\tmargin-left: 0.08em;\r\n\tpadding-top: 0.0625em;\r\n\tpadding-left: 0.5em;\r\n\twidth: 40.25em;\r\n\theight: 1.875em;\r\n\tcolor: rgb(47, 67, 90);\r\n\tfont-size: 1em;\r\n\tborder: none;\r\n\tbackground-color: #fff1d4;\r\n\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n\tborder-radius: 0.5em;\r\n\toutline: 0;\r\n}\r\n\r\n#nameClient::placeholder,\r\n#emailClient::placeholder,\r\n#foneClient::placeholder,\r\n#text-value-msg::placeholder,\r\n#text-value-resp::placeholder {\r\n\tcolor: #2f435a8a;\r\n}\r\n\r\n#msg {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n#text-value-resp,\r\n#text-value-msg {\r\n\tdisplay: flex;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\twidth: 97%;\r\n\theight: 6.25em;\r\n\tmargin-top: 0.625em;\r\n\tpadding: 0.3125em;\r\n\tcolor: #2F435A;\r\n\tbackground-color: #FFF1D4;\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 0.5em;\r\n\tfont-size: 1em;\r\n\tresize: none;\r\n\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* FIM FORMULÁRIO */\r\n\r\n\r\n/* INICIO AÇÕES */\r\n\r\n#actions {\r\n\tdisplay: flex;\r\n\tmargin-top: 1.875em;\r\n\twidth: 43.75em;\r\n\tmargin-right: auto;\r\n\tmargin-left: auto;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tgap: 1.25em;\r\n}\r\n\r\n#inserir-resposta,\r\n#excluir-mensagem,\r\n#enviar-resposta {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tmargin-bottom: 100px;\r\n\twidth: 11em;\r\n\theight: 2em;\r\n\tbackground-color: #2F435A;\r\n\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n\toutline: 0;\r\n\tborder: none;\r\n\tborder-radius: 3.125em;\r\n\tcolor: #FDCE6D;\r\n\tfont-size: 1em;\r\n\ttransition: 0.5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n#inserir-resposta:hover,\r\n#excluir-mensagem:hover,\r\n#enviar-resposta:hover {\r\n\tdisplay: flex;\r\n\tbackground-color: #FDCE6D;\r\n\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n\toutline: 0;\r\n\tborder: none;\r\n\tborder-radius: 3.125em;\r\n\tcolor: #2F435A;\r\n\ttransition: 0.5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n/* FIM AÇÕES */\r\n\r\n\r\n/* MEDIA QUERIES */\r\n@media screen and (max-width: 1024px) {}\r\n\r\n@media screen and (max-width: 575px) {\r\n\tbody {\r\n\t\twidth: 575px;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\r\n\tbody {\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t\tpadding: 0;\r\n\t\twidth: 575px;\r\n\t}\r\n\r\n\theader {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\twidth: 95%;\r\n\t\tmargin-right: auto;\r\n\t\tmargin-left: auto;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.menu-icon-container {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: flex-start;\r\n\t\theight: 43px;\r\n\t\twidth: 80px;\r\n\t\tcursor: pointer;\r\n\t\tborder-radius: 2px;\r\n\t}\r\n\r\n\t.fa-arrow-left {\r\n\t\tmargin-top: 2px;\r\n\t\twidth: 80px;\r\n\t\tfont-weight: 600;\r\n\t\tfont-size: 40px;\r\n\t\tcolor: #2f435a;\r\n\t\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n\t}\r\n\r\n\t.fa-arrow-left:hover {\r\n\t\tfont-weight: 600;\r\n\t\tcolor: #fdce6d;\r\n\t\ttransition: 0.2s all;\r\n\t}\r\n\r\n\t.menu-icon-container>button {\r\n\t\tbackground-color: transparent;\r\n\t\twidth: 80px;\r\n\t\theight: 43px;\r\n\t\toutline: 0;\r\n\t\tborder: none;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.title-principal {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.title-pagina {\r\n\t\tdisplay: block;\r\n\t\twidth: max-content;\r\n\t\talign-self: center;\r\n\t\tjustify-self: center;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t\tmargin-top: 40px;\r\n\t\tcolor: #2f435a;\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t.logo {\r\n\t\tdisplay: flex;\r\n\t\tposition: absolute;\r\n\t\tleft: 42%;\r\n\t\tborder: none;\r\n\t\tfilter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n\t}\r\n\r\n\tmain {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\tfooter {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t#actions {\r\n\t\tdisplay: flex;\r\n\t\twidth: 93%;\r\n\t\tmargin: 1.875em auto 50px auto;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: center;\r\n\t\tgap: 1.25em;\r\n\t}\r\n\r\n\t#inserir-resposta,\r\n\t#excluir-mensagem,\r\n\t#enviar-resposta {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\twidth: 200px;\r\n\t\tmargin: 0;\r\n\t\theight: 2.1875em;\r\n\t\tbackground-color: #2F435A;\r\n\t\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n\t\toutline: 0;\r\n\t\tborder: none;\r\n\t\tborder-radius: 3.125em;\r\n\t\tcolor: #FDCE6D;\r\n\t\tfont-size: 1.1em;\r\n\t\ttransition: 0.5s;\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\tbody {\r\n\t\twidth: 480px;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\r\n\r\n\r\n\tmain {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\tfooter {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t#actions {\r\n\t\tdisplay: flex;\r\n\t\twidth: 93%;\r\n\t\tmargin: 1.875em auto 50px auto;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: center;\r\n\t\tgap: 1.25em;\r\n\t}\r\n\r\n\t#inserir-resposta,\r\n\t#excluir-mensagem,\r\n\t#enviar-resposta {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\twidth: 200px;\r\n\t\tmargin: 0;\r\n\t\theight: 2.1875em;\r\n\t\tbackground-color: #2F435A;\r\n\t\tbox-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n\t\toutline: 0;\r\n\t\tborder: none;\r\n\t\tborder-radius: 3.125em;\r\n\t\tcolor: #FDCE6D;\r\n\t\tfont-size: 1.1em;\r\n\t\ttransition: 0.5s;\r\n\t\tcursor: pointer;\r\n\t}\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/TratamentoSuporte/index.css":
/*!*****************************************!*\
  !*** ./src/TratamentoSuporte/index.css ***!
  \*****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/TratamentoSuporte/index.css");

      
      
      
      
      
      
      
      
      

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
/*!****************************************!*\
  !*** ./src/TratamentoSuporte/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/TratamentoSuporte/index.css");
/* harmony import */ var _assets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts/fonts.css */ "./src/assets/fonts/fonts.css");
/* harmony import */ var _Imagens_nomesemfundo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Imagens/nomesemfundo.png */ "./src/Imagens/nomesemfundo.png");




// Função para deletar um suporte específico pelo ID da key minhaLista
function deleteSupport(id) {
  const minhaLista = readSupport();
  const updatedList = minhaLista
    .map((client) => {
      if (client.id === parseInt(id)) {
        client.status = "Concluído"; // Atualiza o status para "Concluído"
      }
      return client;
    })
    .filter((client) => client.id !== parseInt(id));
  setLocalStorageSupport(updatedList);
}

// Chama a função de deletar suporte e exibe um alerta informando que a mensagem foi excluída.
function onClickButtonDelete() {
  const id = document.getElementById("id").value.trim();
  if (id) {
    deleteSupport(id);
    alert("Mensagem excluída!");
    window.location.href = "/codigo-fonte/src/ListagemSuporte/index.html"; // Redireciona para a página de listagem após a exclusão
  } else {
    alert("ID não encontrado. Não foi possível excluir a mensagem.");
  }
  // Após cada operação
  console.log("Lista atualizada: ", getLocalStorageSupport());
}

// Recupera os dados de suporte do local storage da key minhaLista
function getLocalStorageSupport() {
  return JSON.parse(localStorage.getItem("minhaLista")) ?? [];
}

// Lê os dados de suporte do local storage da key minhaLista
function readSupport() {
  return getLocalStorageSupport();
}

// Salva os dados de suporte no local storage na key minhaLista
function setLocalStorageSupport(minhaLista) {
  return localStorage.setItem("minhaLista", JSON.stringify(minhaLista));
}

// Recupera as mensagens de suporte do local storage.
function getLocalStorageSupportMessage() {
  return JSON.parse(localStorage.getItem("db_support_reply")) ?? [];
}

// Lê as mensagens de suporte do local storage.
function readSupportMessage() {
  return getLocalStorageSupportMessage();
}

// Salva a mensagem de suporte no local storage.
function setLocalStorageSupportMessage(db_support_reply) {
  return localStorage.setItem(
    "db_support_reply",
    JSON.stringify(db_support_reply)
  );
}

// Recupera os parâmetros da query string da URL.
function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const regex = /([^&=]+)=([^&]*)/g;
  let m;
  while ((m = regex.exec(queryString))) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return params;
}

// Se houver dados nos parâmetros da query string, preenche o formulário com esses dados.
const queryParams = getQueryParams();
if (queryParams.data) {
  const clientData = JSON.parse(decodeURIComponent(queryParams.data));
  fillFormWithData(clientData);
}

// Função para preencher o formulário com os dados fornecidos.
function fillFormWithData(clientData) {
  const idField = document.getElementById("id");
  const nameField = document.getElementById("nameClient");
  const emailField = document.getElementById("emailClient");
  const phoneField = document.getElementById("foneClient");
  const messageField = document.getElementById("text-value-msg");

  if (idField && nameField && emailField && phoneField && messageField) {
    idField.value = clientData.id;
    nameField.value = clientData.nome;
    emailField.value = clientData.email;
    phoneField.value = clientData.telefone;
    messageField.value = clientData.mensagem;
  } else {
    console.error("Um ou mais elementos do formulário não foram encontrados.");
  }
}

// Seta as infos para o evento de carregamento da janela.
window.addEventListener("load", () => {
  // Define os campos de entrada como somente leitura.
  setInputReadOnly("nameClient", true);
  setInputReadOnly("emailClient", true);
  setInputReadOnly("foneClient", true);
  setInputReadOnly("text-value-msg", true);
  setInputReadOnly("text-value-resp", true);
});

// Função para definir um campo de entrada como somente leitura ou editável.
function setInputReadOnly(id, isReadOnly) {
  const element = document.getElementById(id);
  if (element) {
    element.readOnly = isReadOnly;
  } else {
    console.error(`Elemento com ID ${id} não encontrado.`);
  }
}

// Torna o campo de resposta editável quando o botão de inserir resposta é clicado.
function onClickButtonEnterAnswer() {
  setInputReadOnly("text-value-resp", false);
}

function sendReply() {
  const id = document.getElementById("id").value.trim();
  const nome = document.getElementById("nameClient").value.trim();
  const email = document.getElementById("emailClient").value.trim();
  const celular = document.getElementById("foneClient").value.trim();
  const mensagem = document.getElementById("text-value-msg").value.trim();
  const resposta = document.getElementById("text-value-resp").value.trim();

  // Validar se todos os campos são preenchidos
  if (!id || !nome || !email || !celular || !mensagem || !resposta) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Cria um objeto de mensagem com os dados do cliente e da resposta.
  const message = {
    id: id,
    nome: nome,
    email: email,
    celular: celular,
    mensagem: mensagem,
    resposta: resposta,
    status: "Concluído", // Define o status como "Concluído"
  };

  // Salva a mensagem de suporte respondida no local storage.
  createSupportMessage(message);

  // Exclui a mensagem da minhaLista
  deleteSupport(id);

  // Limpa os campos do formulário.
  clearFields();

  // Exibe um alerta informando que a mensagem foi respondida.
  alert("Mensagem respondida!");
  console.log("Lista atualizada: ", getLocalStorageSupport());
}

// Verifica se os campos do formulário são válidos.
function isValidFields() {
  return document.getElementById("form").reportValidity();
}

// Limpa todos os campos do formulário.
function clearFields() {
  const dataSupport = document.querySelectorAll(".dataSupport");
  dataSupport.forEach(function (field) {
    field.value = "";
  });
}

// Chama a função de enviar resposta quando o botão enviar é clicado.
function onClickButtonSend() {
  sendReply();
}

// Cria uma nova mensagem de suporte e a salva no local storage na key db_support_reply
function createSupportMessage(client) {
  const db_support_reply = getLocalStorageSupportMessage();
  db_support_reply.push(client);
  setLocalStorageSupportMessage(db_support_reply);
}

})();

/******/ })()
;
//# sourceMappingURL=tratamentoSuporte.js.map