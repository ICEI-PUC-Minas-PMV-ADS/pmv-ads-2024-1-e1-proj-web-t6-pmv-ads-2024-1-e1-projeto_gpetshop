/* 
import "./css/TratamentoSolicitacao.css";
import "./css/fonts.css"; 
*/

// OPEN CLOSE
const openSlide = document.querySelector('#ativar');

openSlide.addEventListener('click', function () {

	const slide = document.querySelector('#slide');

	if (slide.style.display === 'block') {
		slide.style.display = 'none';
	} else {
		slide.style.display = 'block';
	}

})  

// DROPDOWN
function dropDownIdade(parameterIdade) {
	const elementsIdade = document.getElementsByClassName('dropDownIdade')[0];
	if (parameterIdade === 0) {
		elementsIdade.style.display = 'block';
		const translateIdade = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsIdade.style.transform = 'translate(' + translateIdade[parameterIdade] + ')';
		}, 0);
	} else {
		elementsIdade.style.display = 'none';
	}
}

function idade(idade) {
    const itemIdade = document.getElementById('itemIdade-' + idade).innerHTML;
    document.getElementsByTagName('input')[5].value = itemIdade;
}

function dropDownPorte(parameterPorte) {
	const elementsPorte = document.getElementsByClassName('dropDownPorte')[0];

	if (parameterPorte === 0) {
		elementsPorte.style.display = 'block';

		const translatePorte = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsPorte.style.transform = 'translate(' + translatePorte[parameterPorte] + ')';
		}, 0);
	} else {
		elementsPorte.style.display = 'none';
	}
}

function porte(porte) {
	const itemPorte = document.getElementById('itemPorte-' + porte).innerHTML;
	document.getElementsByTagName('input')[6].value = itemPorte;
}

function dropDownPelagem(parameterPelagem) {
	const elementsPelagem = document.getElementsByClassName('dropDownPelagem')[0];

	if (parameterPelagem === 0) {
		elementsPelagem.style.display = 'block';

		const translatePelagem = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsPelagem.style.transform = 'translate(' + translatePelagem[parameterPelagem] + ')';
		}, 0);
	} else {
		elementsPelagem.style.display = 'none';
	}
}

function pelagem(pelagem) {
	const itemPelagem = document.getElementById('itemPelagem-' + pelagem).innerHTML;
	document.getElementsByTagName('input')[7].value = itemPelagem;
}

function dropDownRaca(parameterRaca) {
	const elementsRaca = document.getElementsByClassName('dropDownRaca')[0];

	if (parameterRaca === 0) {
		elementsRaca.style.display = 'block';

		const translateRaca = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsRaca.style.transform = 'translate(' + translateRaca[parameterRaca] + ')';
		}, 0);
	} else {
		elementsRaca.style.display = 'none';
	}
}

function raca(raca) {
	const itemRaca = document.getElementById('itemRaca-' + raca).innerHTML;
	document.getElementsByTagName('input')[8].value = itemRaca;
}

function dropDownServico(parameterServico) {
	const elementsServico = document.getElementsByClassName('dropDownServico')[0];

	if (parameterServico === 0) {
		elementsServico.style.display = 'block';

		const translateServico = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsServico.style.transform = 'translate(' + translateServico[parameterServico] + ')';
		}, 0);
	} else {
		elementsServico.style.display = 'none';
	}
}

function servico(servico) {
	const itemServico = document.getElementById('itemServico-' + servico).innerHTML;
	document.getElementsByTagName('input')[9].value = itemServico;
}



// Seta as infos para o evento de carregamento da janela.
window.addEventListener("load", () => {
  // Define os campos de entrada como somente leitura.
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


// Torna o campo de resposta editável quando o botão de inserir resposta é clicado.
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

// Função para definir um campo de entrada como somente leitura ou editável.
function setInputReadOnly(id, isReadOnly) {
  const element = document.getElementById(id);
  element.readOnly = isReadOnly;
}

function onClickbButtonRecusar() {
  alert("Solicitação recusada!");
}

function clearFields() {
  const dataClient = document.querySelectorAll(".dataClient");
  dataClient.forEach(function (field) {
    field.value = "";
  });
}

// Envia a resposta se os campos forem válidos.
function sendClient() {
  if (isValidFields()) {
    // Cria um objeto de mensagem com os dados do cliente e da resposta.
    const clientRequest = {
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
    // Salva o agendamento no local storage.
    createAgendamento(clientRequest);
    // Deleta a solicitação de agendamento existente.
    deleteSolicitation();
    // Limpa os campos do formulário.
    clearFields();
    // Exibe um alerta informando que a mensagem foi respondida.
    alert("Solicitação aceita!",
          "Agendado!");
  }
}

// Verifica se os campos do formulário são válidos.
const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

// Limpa todos os campos do formulário.
function clearFields() {
  const dataSupport = document.querySelectorAll(".dataClient");
  dataSupport.forEach(function (field) {
    field.value = "";
  });
}

// Chama a função de enviar resposta quando o botão enviar é clicado.
function onClickbButtonAceitar() {
  sendClient();
}

// Salva a mensagem de suporte no local storage.
function setLocalStorageAgenda(db_agenda) {
  return localStorage.setItem(
    "db_agenda",
    JSON.stringify(db_agenda)
  );
}

// Recupera as mensagens de suporte do local storage.
function getLocalStorageAgenda() {
  return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
}

// Lê as mensagens de suporte do local storage.
function readAgendamento() {
  return getLocalStorageAgenda();
}

// Deleta uma mensagem de suporte específica pelo índice.
function deleteAgendamento(index) {
  const db_agenda = readAgendamento();
  db_agenda.splice(index, 1);
  console.log("Solicitação", index, "excluída!");
  setLocalStorageSolicitation(db_agenda);
}

// Cria uma nova mensagem de suporte e a salva no local storage na key db_support_reply
function createAgendamento(client) {
  const db_agenda = getLocalStorageAgenda();
  db_agenda.push(client);
  setLocalStorageAgenda(db_agenda);
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
function setLocalStorageSolicitation(db_solicitation) {
  return localStorage.setItem("db_solicitation", JSON.stringify(db_solicitation));
}

// Recupera os dados de suporte do local storage da key db_support
function getLocalStorageSolicitation() {
  return JSON.parse(localStorage.getItem("db_solicitation")) ?? [];
}

// Lê os dados de suporte do local storage da key db_support
function readSolicitation() {
  return getLocalStorageSolicitation();
}

// Deleta um suporte específico pelo índice da key db_support
function deleteSolicitation(index) {
  const db_solicitation = readSolicitation();
  db_solicitation.splice(index, 1);
  setLocalStorageSolicitation(db_solicitation);
}

// Chama a função de deletar suporte e exibe um alerta informando que a mensagem foi excluída.
function onClickbButtonDelete() {
  deleteSolicitation();
  alert("Mensagem excluída!");
}