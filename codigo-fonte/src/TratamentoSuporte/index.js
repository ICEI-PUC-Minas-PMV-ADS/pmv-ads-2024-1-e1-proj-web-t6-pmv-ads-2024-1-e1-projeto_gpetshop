/* import { openSlide } from "./js/actionsTratamento";
import { dropDownIdade } from "./js/actionsTratamento";
import { dropDownPelagem } from "./js/actionsTratamento";
import { dropDownPorte } from "./js/actionsTratamento";
import { dropDownRaca } from "./js/actionsTratamento";
import { dropDownServico } from "./js/actionsTratamento";
import { idade } from "./js/actionsTratamento";
import { pelagem } from "./js/actionsTratamento";
import { porte } from "./js/actionsTratamento";
import { raca } from "./js/actionsTratamento";
import { servico } from "./js/actionsTratamento";

import "./css/TratamentoSolicitacao.css";
import "./css/fonts.css"; */

// Evendo que executa o abrir e fechar da barra lateral
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});

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
  element.readOnly = isReadOnly;
}

// Torna o campo de resposta editável quando o botão de inserir resposta é clicado.
function onClickButtonEnterAnswer() {
  setInputReadOnly("text-value-resp", false);
}

// Envia a resposta se os campos forem válidos.
function sendReply() {
  if (isValidFields()) {
    // Cria um objeto de mensagem com os dados do cliente e da resposta.
    const message = {
      cliente: {
        nome: document.getElementById("nameClient").value,
        email: document.getElementById("emailClient").value,
        celular: document.getElementById("foneClient").value,
        mensagem: document.getElementById("text-value-msg").value,
      },
      estabelecimento: {
        resposta: document.getElementById("text-value-resp").value,
      },
    };
    // Salva a mensagem de suporte no local storage.
    createSupportMessage(message);
    // Deleta a mensagem de suporte existente.
    deleteSupport();
    // Limpa os campos do formulário.
    clearFields();
    // Exibe um alerta informando que a mensagem foi respondida.
    alert("Mensagem respondida!");
  }
}

// Verifica se os campos do formulário são válidos.
const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

// Limpa todos os campos do formulário.
function clearFields() {
  const dataSupport = document.querySelectorAll(".dataSupport");
  dataSupport.forEach(function (field) {
    field.value = "";
  });
}

// Chama a função de enviar resposta quando o botão enviar é clicado.
function onClickbButtonSend() {
  sendReply();
}

// Salva a mensagem de suporte no local storage.
function setLocalStorageSupportMessage(db_support_reply) {
  return localStorage.setItem(
    "db_support_reply",
    JSON.stringify(db_support_reply)
  );
}

// Recupera as mensagens de suporte do local storage.
function getLocalStorageSupportMessage() {
  return JSON.parse(localStorage.getItem("db_support_reply")) ?? [];
}

// Lê as mensagens de suporte do local storage.
function readSupportMessage() {
  return getLocalStorageSupportMessage();
}

// Deleta uma mensagem de suporte específica pelo índice.
function deleteSupportMessage(index) {
  const db_client = readSupportMessage();
  db_client.splice(index, 1);
  console.log("Mensagem", index, "excluída!");
  setLocalStorageSupportMessage(db_client);
}

// Cria uma nova mensagem de suporte e a salva no local storage na key db_support_reply
function createSupportMessage(client) {
  const db_support_reply = getLocalStorageSupportMessage();
  db_support_reply.push(client);
  setLocalStorageSupportMessage(db_support_reply);
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
  fillFormWithData(queryParams.data);
}

// Preenche o formulário com os dados fornecidos.
function fillFormWithData(data) {
  const clientData = JSON.parse(decodeURIComponent(data));
  document.getElementById("nameClient").value = clientData.cliente.nome;
  document.getElementById("emailClient").value = clientData.cliente.email;
  document.getElementById("foneClient").value = clientData.cliente.celular;
  document.getElementById("text-value-msg").value = clientData.cliente.mensagem;
}

// Salva os dados de suporte no local storage na key db_support
function setLocalStorageSupport(db_support) {
  return localStorage.setItem("db_support", JSON.stringify(db_support));
}

// Recupera os dados de suporte do local storage da key db_support
function getLocalStorageSupport() {
  return JSON.parse(localStorage.getItem("db_support")) ?? [];
}

// Lê os dados de suporte do local storage da key db_support
function readSupport() {
  return getLocalStorageSupport();
}

// Deleta um suporte específico pelo índice da key db_support
function deleteSupport(index) {
  const db_support = readSupport();
  db_support.splice(index, 1);
  setLocalStorageSupport(db_support);
}

// Chama a função de deletar suporte e exibe um alerta informando que a mensagem foi excluída.
function onClickbButtonDelete() {
  deleteSupport();
  alert("Mensagem excluída!");
}