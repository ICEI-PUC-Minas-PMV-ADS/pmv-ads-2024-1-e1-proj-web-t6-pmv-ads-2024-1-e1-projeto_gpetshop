import "./index.css";
import "../assets/fonts/fonts.css";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function getLocalStorageAgenda() {
  return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
}

function convertAgendaToEvents(db_agenda) {
  return db_agenda.map((item) => ({
    id: item.id,
    title: "Agendamento",
    name: item.cliente.nome,
    start: item.agendamento.horário, // Supondo que o horário está no formato 'YYYY-MM-DDTHH:mm:ss'
    end: item.agendamento.horário, // Ajuste conforme necessário
    extendedProps: {
      cliente: item.cliente,
      pet: item.pet,
      serviço: item.serviço,
      observação: item.observação,
    },
  }));
}

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  // Obtenha os dados do localStorage
  const db_agenda = getLocalStorageAgenda();
  const events = convertAgendaToEvents(db_agenda);

  var calendar = new Calendar(calendarEl, {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    locale: "pt-br",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true,
    selectable: true,
    events: events,
    eventClick: function (info) {
      var eventObj = info.event;
      var popupContent = `
          <div id="event-popup">
          <h2>${eventObj.title}</h2>
          <p><strong>Nome:</strong> ${eventObj.extendedProps.cliente.nome}</p>
          <p><strong>Email:</strong> ${eventObj.extendedProps.cliente.email}</p>
          <p><strong>Celular:</strong> ${
            eventObj.extendedProps.cliente.celular
          }</p>
          <p><strong>Nome do Pet:</strong> ${
            eventObj.extendedProps.pet.nome
          }</p>
          <p><strong>Idade do Pet:</strong> ${
            eventObj.extendedProps.pet.idade
          }</p>
          <p><strong>Porte do Pet:</strong> ${
            eventObj.extendedProps.pet.porte
          }</p>
          <p><strong>Pelagem do Pet:</strong> ${
            eventObj.extendedProps.pet.pelagem
          }</p>
          <p><strong>Raça do Pet:</strong> ${
            eventObj.extendedProps.pet.raça
          }</p>
          <p><strong>Serviços:</strong> ${
            eventObj.extendedProps.serviço.servicos
          }</p>
          <p><strong>Observações:</strong> ${
            eventObj.extendedProps.observação.observação
          }</p>
          <p><strong>Início:</strong> ${eventObj.start.toLocaleString()}</p>
          <p><strong>Fim:</strong> ${eventObj.end.toLocaleString()}</p>
          <button class='pop-button' onclick="closePopup()">Fechar</button>
          </div>
      `;
      document.getElementById("popup-container").innerHTML = popupContent;
      document.getElementById("popup-container").style.display = "block";
    },
  });

  calendar.render();
});

function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}

const close = document.getElementById("popup-container");
close.addEventListener("click", closePopup);

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
