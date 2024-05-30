/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/NovoAgendamento/index.js ***!
  \**************************************/
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

function onClickbButtonAgendar() {
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

/******/ })()
;
//# sourceMappingURL=novoAgendamento.js.map