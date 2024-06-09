import "./styles.css";
import "../assets/fonts/fonts.css";
import "./calculos.js";

// Função para obter os totais do localStorage
function getTotalsFromLocalStorage() {
  const totalSolicitations = localStorage.getItem("total_solicitations");
  const totalAgendamentos = localStorage.getItem("total_agendamentos");
  const totalRefused = localStorage.getItem("total_refused");
  const totalClients = localStorage.getItem("total_clients");

  return {
    totalSolicitations,
    totalAgendamentos,
    totalRefused,
    totalClients,
  };
}

// Função para atualizar os valores no HTML
function updateTotalsInHTML() {
  const totals = getTotalsFromLocalStorage();

  document.querySelector(
    ".card-container .card:nth-child(1) .number"
  ).textContent = totals.totalSolicitations || 0;
  document.querySelector(
    ".card-container .card:nth-child(2) .number"
  ).textContent = totals.totalAgendamentos || 0;
  document.querySelector(
    ".card-container .card:nth-child(3) .number"
  ).textContent = totals.totalClients || 0;
  document.querySelector(
    ".card-container .card:nth-child(4) .number"
  ).textContent = totals.totalRefused || 0;

  // Atualizar o total de clientes na seção "BASE DE CLIENTES"
  document.querySelector(".card-f .number").textContent =
    totals.totalClients || 0;
}

// Função para ler solicitações do localStorage e preencher a lista no HTML
function fillClientList() {
  const solicitacoes = JSON.parse(localStorage.getItem("solicitacoes")) ?? [];

  const listaNomeElement = document.getElementById("listaNome");
  const listaEmailElement = document.querySelector(".listEmailClient ul");
  const listaFoneElement = document.querySelector(".listFoneClient ul");

  // Limpar listas existentes
  listaNomeElement.innerHTML = "";
  listaEmailElement.innerHTML = "";
  listaFoneElement.innerHTML = "";

  // Preencher listas com dados das solicitações
  solicitacoes.forEach((client) => {
    const nomeItem = document.createElement("li");
    nomeItem.classList.add("list-name-item");
    nomeItem.textContent = client.clientName;
    listaNomeElement.appendChild(nomeItem);

    const emailItem = document.createElement("li");
    emailItem.classList.add("list-email-item");
    emailItem.textContent = client.clientEmail;
    listaEmailElement.appendChild(emailItem);

    const foneItem = document.createElement("li");
    foneItem.classList.add("list-fone-item");
    foneItem.textContent = client.clientPhone;
    listaFoneElement.appendChild(foneItem);
  });
}

// Chama a função para atualizar os valores no HTML e preencher a lista de clientes ao carregar a janela
window.addEventListener("load", () => {
  updateTotalsInHTML();
  fillClientList();
});

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

function getPermitions() {
  let userJson = localStorage.getItem("user");
  let user = JSON.parse(userJson);
  switch (user.cargo) {
    case "Banhista":
    case "Atendente":
      document.getElementById("cadastros").style.display = "none";
      document.getElementById("relatorios").style.display = "none";
      break;

    default:
      break;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getPermitions();
});
