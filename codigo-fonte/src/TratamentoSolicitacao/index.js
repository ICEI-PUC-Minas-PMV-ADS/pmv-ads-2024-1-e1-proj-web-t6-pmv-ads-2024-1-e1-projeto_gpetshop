import "./index.css";
import "../assets/fonts/fonts.css";
import nomesemfundo from "../Imagens/nomesemfundo.png";
import "../assets/svg/icon_pet.svg";
import "../assets/svg/icon_pet_idade.svg";
import "../assets/svg/icon_pet_porte.svg";
import "../assets/svg/icon_pet_pelagem.svg";
import "../assets/svg/icon_pet_raca.svg";

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
  const data = JSON.parse(localStorage.getItem("db_agenda_refused"));
  return Array.isArray(data) ? data : [];
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

// Se houver dados nos parâmetros da query string, preenche o formulário com esses dados.
const queryParams = getQueryParams();
if (queryParams.data) {
  const clientData = JSON.parse(decodeURIComponent(queryParams.data));
  fillFormWithData(clientData);
}

// Função para preencher o formulário com os dados fornecidos.
function fillFormWithData(clientData) {
  const idField = document.getElementById("idClient");
  const nameField = document.getElementById("nameClient");
  const emailField = document.getElementById("emailClient");
  const phoneField = document.getElementById("foneClient");
  const namePetField = document.getElementById("namePet");
  const pelagemField = document.getElementById("pelagem");
  const racaField = document.getElementById("raca");
  const idadeField = document.getElementById("idade");
  const porteField = document.getElementById("porte");
  const servicesField = document.getElementById("services");
  const agendaField = document.getElementById("dt-agenda");
  const obsField = document.getElementById("text-value-obs");

  if (
    idField &&
    nameField &&
    emailField &&
    phoneField &&
    namePetField &&
    pelagemField &&
    racaField &&
    idadeField &&
    porteField &&
    servicesField &&
    agendaField &&
    obsField
  ) {
    idField.value = clientData.id;
    nameField.value = clientData.clientName;
    emailField.value = clientData.clientEmail;
    phoneField.value = clientData.clientPhone;
    namePetField.value = clientData.petName;
    pelagemField.value = clientData.pelagemType;
    racaField.value = clientData.raca;
    idadeField.value = clientData.idade;
    porteField.value = clientData.porte;
    servicesField.value = clientData.service;
    agendaField.value = clientData.agenda;
    obsField.value = clientData.observacoes;
  } else {
    console.error("Um ou mais elementos do formulário não foram encontrados.");
  }
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
if (element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "INPUT") {
  element.disabled = isReadOnly;
} else {
  element.readOnly = isReadOnly;
}
}

// Envia a solicitação confirmada para 'db_agenda' se os campos forem válidos
function sendClient() {
  const id = document.getElementById("idClient").value.trim();
  const nome = document.getElementById("nameClient").value.trim();
  const email = document.getElementById("emailClient").value.trim();
  const celular = document.getElementById("foneClient").value.trim();
  const namePet = document.getElementById("namePet").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const porte = document.getElementById("porte").value.trim();
  const pelagem = document.getElementById("pelagem").value.trim();
  const raca = document.getElementById("raca").value.trim();
  const services = document.getElementById("services").value.trim();
  const agenda = document.getElementById("dt-agenda").value.trim();
  const obs = document.getElementById("text-value-obs").value;

  // Validar se todos os campos são preenchidos
  if (
    !id ||
    !nome ||
    !email ||
    !celular ||
    !namePet ||
    !pelagem ||
    !raca ||
    !idade ||
    !porte ||
    !services ||
    !agenda ||
    !obs
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Cria um objeto com os dados do cliente e manda para db_agenda.
  const client = {
    id: id,
    nome: nome,
    email: email,
    celular: celular,
    namePet: namePet,
    idade: idade,
    porte: porte,
    pelagem: pelagem,
    raca: raca,
    services: services,
    agenda: agenda,
    obs: obs,
    status: "Agendado", // Define o status como "Agendado"
  };

  // Salva a solicitação confirmada no local storage.
  createAgendamento(client);

  // Exclui a solicitação da lista de solicitações
  deleteSolicitation(id);

  // Limpa os campos do formulário.
  clearFields();

  // Exibe um alerta informando que a solicitação foi aceita.
  alert("Solicitação aceita!");
  console.log("Lista atualizada: ", getLocalStorageSolicitation());
  window.location.href =
    "/codigo-fonte/dist/listagemSolicitacoes/listagemSolicitacoes.html"; // Redireciona para a página de listagem após o envio do formulário com a resposta
}

// Função para deletar uma solicitação específica pelo ID da key 'solicitacoes'
function deleteSolicitation(id) {
  const solicitacoes = readSolicitation();
  const updatedList = solicitacoes.filter(
    (client) => client.id !== parseInt(id)
  );
  setLocalStorageSolicitation(updatedList);
}

// Limpa todos os campos do formulário
function clearFields() {
  const dataClient = document.querySelectorAll(".dataClient");
  dataClient.forEach((field) => {
    field.value = "";
  });
}

// Recupera as solicitações agendadas do local storage.
function getLocalStorageAgenda() {
  return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
}

// Salva a solicitação agendada no local storage.
function setLocalStorageAgenda(db_agenda) {
  return localStorage.setItem("db_agenda", JSON.stringify(db_agenda));
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
const buttonEnterAnswer = document.getElementById("alterar-solicitacao");
buttonEnterAnswer.addEventListener("click", onClickButtonEnterAnswer);

// Aceita a solicitação
function onClickButtonAceitar() {
  sendClient();
}
const buttonAceitar = document.getElementById("aceitar-solicitacao");
buttonAceitar.addEventListener("click", onClickButtonAceitar);

// Chama a função de deletar suporte e exibe um alerta informando que a mensagem foi excluída.
function onClickButtonRecusar() {
  const id = document.getElementById("idClient").value.trim();
  const nome = document.getElementById("nameClient").value.trim();
  const email = document.getElementById("emailClient").value.trim();
  const celular = document.getElementById("foneClient").value.trim();
  const namePet = document.getElementById("namePet").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const porte = document.getElementById("porte").value.trim();
  const pelagem = document.getElementById("pelagem").value.trim();
  const raca = document.getElementById("raca").value.trim();
  const services = document.getElementById("services").value.trim();
  const agenda = document.getElementById("dt-agenda").value.trim();
  const obs = document.getElementById("text-value-obs").value.trim();

  if (id) {
    const refusedClient = {
      id: id,
      nome: nome,
      email: email,
      celular: celular,
      namePet: namePet,
      idade: idade,
      porte: porte,
      pelagem: pelagem,
      raca: raca,
      services: services,
      agenda: agenda,
      obs: obs,
      status: "Recusado", // Define o status como "Recusado"
    };

    const db_refused = getLocalStorageRefused();
    db_refused.push(refusedClient);
    setLocalStorageRefused(db_refused);

    deleteSolicitation(id);
    alert("Solicitação recusada e excluída da Lista de Solicitações!");
    window.location.href =
      "/codigo-fonte/dist/listagemSolicitacoes/listagemSolicitacoes.html"; // Redireciona para a página de listagem após a exclusão
  } else {
    alert("ID não encontrado. Não foi possível excluir a mensagem.");
  }
  // Após cada operação
  console.log("Lista atualizada: ", getLocalStorageSolicitation());
}
const buttonRecusar = document.getElementById("excluir-solicitacao");
buttonRecusar.addEventListener("click", onClickButtonRecusar);
