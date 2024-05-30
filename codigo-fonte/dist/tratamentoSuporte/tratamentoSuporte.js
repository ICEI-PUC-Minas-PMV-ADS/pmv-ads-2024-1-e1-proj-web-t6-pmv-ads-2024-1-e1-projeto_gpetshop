/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/TratamentoSuporte/index.js ***!
  \****************************************/
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

/******/ })()
;
//# sourceMappingURL=tratamentoSuporte.js.map