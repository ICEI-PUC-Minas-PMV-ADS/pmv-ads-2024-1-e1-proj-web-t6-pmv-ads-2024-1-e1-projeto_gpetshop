/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/TratamentoSolicitacao/index.js ***!
  \********************************************/
// import "../TratamentoSolicitacao/index.css";
// import "../assets/fonts.css";

/*
RECUPERA OS DADOS DA KEY solicitacoes E PREENCHE OS CAMPOS DA TELA DE
TRATAMENTO DA SOLICITAÇÃO
*/

// Manipulação do localStorage para a key 'solicitacoes'
function setLocalStorageSolicitation(solicitacoes) {
  return localStorage.setItem("solicitacoes", JSON.stringify(solicitacoes));
}

function getLocalStorageSolicitation() {
  return JSON.parse(localStorage.getItem("solicitacoes")) ?? [];
}

function readSolicitation() {
  return getLocalStorageSolicitation();
}

// Manipulação do localStorage para a key 'db_agenda_refused'
function setLocalStorageRefused(db_refused) {
  return localStorage.setItem("db_agenda_refused", JSON.stringify(db_refused));
}

function getLocalStorageRefused() {
  return JSON.parse(localStorage.getItem("db_agenda_refused")) ?? [];
}

// Move solicitação para 'db_agenda_refused' e remove de 'solicitacoes'
function refuseSolicitation(id) {
  const solicitacoes = readSolicitation();
  const refusedSolicitation = solicitacoes.find(client => client.id === parseInt(id));
  const updatedList = solicitacoes.filter(client => client.id !== parseInt(id));

  if (refusedSolicitation) {
    const db_refused = getLocalStorageRefused();
    db_refused.push(refusedSolicitation);
    setLocalStorageRefused(db_refused);
  }

  setLocalStorageSolicitation(updatedList);
}

// Recupera os parâmetros da query string da URL
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

// Preenche o formulário com os dados da query string, se houver
const queryParams = getQueryParams();
if (queryParams.data) {
  fillFormWithData(queryParams.data);
}

// Preenche o formulário com os dados fornecidos pela key 'solicitacoes'
function fillFormWithData(data) {
  const clientData = JSON.parse(decodeURIComponent(data));
  document.getElementById("form").setAttribute("data-id", clientData.id);
  document.getElementById("nameClient").value = clientData.clientName;
  document.getElementById("emailClient").value = clientData.clientEmail;
  document.getElementById("foneClient").value = clientData.clientPhone;
  document.getElementById("namePet").value = clientData.petName;
  document.getElementById("pelagem").value = clientData.pelagemType;
  document.getElementById("raca").value = clientData.raca;
  document.getElementById("idade").value = clientData.idade;
  document.getElementById("porte").value = clientData.porte;
  document.getElementById("servicos").value = clientData.service;
  document.getElementById("dt-agenda").value = clientData.agenda;
  document.getElementById("text-value-obs").value = clientData.observacoes;
}

// Define campos como somente leitura ao carregar a janela
window.addEventListener("load", () => {
  setInputReadOnly("nameClient", true);
  setInputReadOnly("emailClient", true);
  setInputReadOnly("foneClient", true);
  setInputReadOnly("namePet", true);
  setInputReadOnly("idade", true);
  setInputReadOnly("porte", true);
  setInputReadOnly("pelagem", true);
  setInputReadOnly("raca", true);
  setInputReadOnly("services", true);
  setInputReadOnly("dt-agenda", true);
  setInputReadOnly("text-value-obs", true);
});

// Define um campo de entrada como somente leitura ou editável
function setInputReadOnly(id, isReadOnly) {
  const element = document.getElementById(id);
  element.readOnly = isReadOnly;
}

// Envia a solicitação confirmada para 'db_agenda' se os campos forem válidos
function sendClient() {
  if (isValidFields()) {
    const clientRequest = {
      id: document.getElementById("form").getAttribute("data-id"), // Adiciona o ID
      cliente: {
        nome: document.getElementById("nameClient").value,
        email: document.getElementById("emailClient").value,
        celular: document.getElementById("foneClient").value,
      },
      pet: {
        nome: document.getElementById("namePet").value,
        idade: document.getElementById("idade").value,
        porte: document.getElementById("porte").value,
        pelagem: document.getElementById("pelagem").value,
        raça: document.getElementById("raca").value,
      },
      serviço: {
        servicos: document.getElementById("services").value,
      },
      agendamento: {
        horário: document.getElementById("dt-agenda").value,
      },
      observação: {
        observação: document.getElementById("text-value-obs").value,
      },
    };
    createAgendamento(clientRequest);
    deleteSolicitation(clientRequest.id); // Remove solicitação aceita
    clearFields();
    alert("Solicitação aceita!");
  }
}

// Deleta uma solicitação da key 'solicitacoes'
function deleteSolicitation(id) {
  const solicitacoes = readSolicitation();
  const updatedList = solicitacoes.filter(client => client.id !== parseInt(id));
  setLocalStorageSolicitation(updatedList);
}

// Verifica se os campos do formulário são válidos
const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

// Limpa todos os campos do formulário
function clearFields() {
  const dataClient = document.querySelectorAll(".dataClient");
  dataClient.forEach(field => {
    field.value = "";
  });
}

// Manipulação do localStorage para a key 'db_agenda'
function setLocalStorageAgenda(db_agenda) {
  return localStorage.setItem("db_agenda", JSON.stringify(db_agenda));
}

function getLocalStorageAgenda() {
  return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
}

function readAgendamento() {
  return getLocalStorageAgenda();
}

function createAgendamento(client) {
  const db_agenda = getLocalStorageAgenda();
  db_agenda.push(client);
  setLocalStorageAgenda(db_agenda);
}

// Funções para botões da tela de tratamento da solicitação

// Permite edição dos campos do formulário
function onClickButtonEnterAnswer() {
  setInputReadOnly("nameClient", false);
  setInputReadOnly("emailClient", false);
  setInputReadOnly("foneClient", false);
  setInputReadOnly("namePet", false);
  setInputReadOnly("idade", false);
  setInputReadOnly("porte", false);
  setInputReadOnly("pelagem", false);
  setInputReadOnly("raca", false);
  setInputReadOnly("services", false);
  setInputReadOnly("dt-agenda", false);
  setInputReadOnly("text-value-obs", false);
}

// Aceita a solicitação
function onClickButtonAceitar() {
  sendClient();
}

// Recusa a solicitação
function onClickButtonRecusar() {
  const form = document.getElementById("form");
  const id = form.getAttribute("data-id");
  refuseSolicitation(id);
  clearFields();
  alert("Solicitação recusada!");
}

// Funções dropdown

// Mostra ou esconde dropdown de idade
function dropDownIdade(parameterIdade) {
  const elementsIdade = document.getElementsByClassName("dropDownIdade")[0];
  if (parameterIdade === 0) {
    elementsIdade.style.display = "block";
    const translateIdade = ["0px", "0px, -10px"];
    setTimeout(() => {
      elementsIdade.style.transform = "translate(" + translateIdade[parameterIdade] + ")";
    }, 0);
  } else {
    elementsIdade.style.display = "none";
  }
}

// Seleciona idade no dropdown
function idade(idade) {
  const itemIdade = document.getElementById("itemIdade-" + idade).innerHTML;
  document.getElementsByTagName("input")[5].value = itemIdade;
}

// Mostra ou esconde dropdown de porte
function dropDownPorte(parameterPorte) {
  const elementsPorte = document.getElementsByClassName("dropDownPorte")[0];
  if (parameterPorte === 0) {
    elementsPorte.style.display = "block";
    const translatePorte = ["0px", "0px, -10px"];
    setTimeout(() => {
      elementsPorte.style.transform = "translate(" + translatePorte[parameterPorte] + ")";
    }, 0);
  } else {
    elementsPorte.style.display = "none";
  }
}

// Seleciona porte no dropdown
function porte(porte) {
  const itemPorte = document.getElementById("itemPorte-" + porte).innerHTML;
  document.getElementsByTagName("input")[6].value = itemPorte;
}

// Mostra ou esconde dropdown de pelagem
function dropDownPelagem(parameterPelagem) {
  const elementsPelagem = document.getElementsByClassName("dropDownPelagem")[0];
  if (parameterPelagem === 0) {
    elementsPelagem.style.display = "block";
    const translatePelagem = ["0px", "0px, -10px"];
    setTimeout(() => {
      elementsPelagem.style.transform = "translate(" + translatePelagem[parameterPelagem] + ")";
    }, 0);
  } else {
    elementsPelagem.style.display = "none";
  }
}

// Seleciona pelagem no dropdown
function pelagem(pelagem) {
  const itemPelagem = document.getElementById("itemPelagem-" + pelagem).innerHTML;
  document.getElementsByTagName("input")[7].value = itemPelagem;
}

// Mostra ou esconde dropdown de raça
function dropDownRaca(parameterRaca) {
  const elementsRaca = document.getElementsByClassName("dropDownRaca")[0];
  if (parameterRaca === 0) {
    elementsRaca.style.display = "block";
    const translateRaca = ["0px", "0px, -10px"];
    setTimeout(() => {
      elementsRaca.style.transform = "translate(" + translateRaca[parameterRaca] + ")";
    }, 0);
  } else {
    elementsRaca.style.display = "none";
  }
}

// Seleciona raça no dropdown
function raca(raca) {
  const itemRaca = document.getElementById("itemRaca-" + raca).innerHTML;
  document.getElementsByTagName("input")[8].value = itemRaca;
}

// Mostra ou esconde dropdown de serviço
function dropDownServico(parameterServico) {
  const elementsServico = document.getElementsByClassName("dropDownServico")[0];
  if (parameterServico === 0) {
    elementsServico.style.display = "block";
    const translateServico = ["0px", "0px, -10px"];
    setTimeout(() => {
      elementsServico.style.transform = "translate(" + translateServico[parameterServico] + ")";
    }, 0);
  } else {
    elementsServico.style.display = "none";
  }
}

// Seleciona serviço no dropdown
function servico(servico) {
  const itemServico = document.getElementById("itemServico-" + servico).innerHTML;
  document.getElementsByTagName("input")[9].value = itemServico;
}

/******/ })()
;
//# sourceMappingURL=tratamentoSolicitacao.js.map