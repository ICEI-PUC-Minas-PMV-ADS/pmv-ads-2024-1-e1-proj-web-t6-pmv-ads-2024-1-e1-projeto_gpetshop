import { setImages } from './images';
import './index.css';

const mockPetshop = {
  id: 1,
  nome: "Pet Puc",
  services: [
    {id: 1, nome: "Banho"},
    {id: 2, nome: "Banho e tosa"},
    {id: 3, nome: "Hidratação"}
  ]
}

const mockPetshopJson = JSON.stringify(mockPetshop);

localStorage.setItem("petshop", mockPetshopJson);

function setOptionsSelect() {
  const mockPetshopJson = localStorage.getItem("petshop");
  
  const mockPetshop = JSON.parse(mockPetshopJson);

  const select = document.getElementById("service-select");
  
  mockPetshop.services.forEach(service => {
    const option = document.createElement("option");
    option.value = service.nome;
    option.innerHTML = service.nome;
    select.appendChild(option);
  })
}

function setOptionsRaca(racas) {
  const select = document.getElementById("raca-select");
  racas.forEach(raca => {
    const option = document.createElement("option");
    option.value = raca;
    option.innerHTML = raca;
    select.appendChild(option);
  })
}

function setSolicitacaoDeAgendamento() {
  let solicitacoes = localStorage.getItem("solicitacoes");

  if (!solicitacoes)
    solicitacoes = [];
  else
    solicitacoes = JSON.parse(solicitacoes);

  const solicitacao = {
      id: solicitacoes.length + 1,
      clientName: document.getElementById("name-input").value,
      clientEmail: document.getElementById("email-input").value,
      clientPhone: document.getElementById("tel-input").value,
      petName: document.getElementById("pet-name").value,
      pelagemType: document.getElementById("dog-info-select").value,
      raca: document.getElementById("raca-select").value,
      idade: document.getElementById("idade-input").value,
      porte: document.getElementById("porte-input").value,
      service: document.getElementById("service-select").value,
      agenda: document.getElementById("time-input").value,
      observacoes: document.getElementById("observacoes-input").value.length > 0 ? document.getElementById("observacoes-input").value : null,
      status: "ANDAMENTO",
  }

  solicitacoes.push(solicitacao);

  localStorage.setItem("solicitacoes", JSON.stringify(solicitacoes));

  alert("Sua solicitação foi enviada com sucesso vai chegar um email com seu processo");

  document.getElementById("form").reset();

  window.location.href = "./paginaInicial.html";
}

function attachFormSubmitEvent() {
  const formAgendar = document.getElementById("form");
  formAgendar.addEventListener("submit", (event) => {
    event.preventDefault();
    setSolicitacaoDeAgendamento();
  })
}

function getRacasDosCachorros() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      setOptionsRaca(Object.keys(data.message));
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
}


window.addEventListener("DOMContentLoaded", (event) => {
  setOptionsSelect();
  setImages();
  getRacasDosCachorros()
  attachFormSubmitEvent();
});
