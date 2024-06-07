import "./index.css";
import "../assets/fonts/fonts.css";
import nomesemfundo from "../Imagens/nomesemfundo.png";
import "../assets/svg/icon_pet.svg";
import "../assets/svg/icon_pet_idade.svg";
import "../assets/svg/icon_pet_porte.svg";
import "../assets/svg/icon_pet_pelagem.svg";
import "../assets/svg/icon_pet_raca.svg";

const clearFields = () => {
  const dataClient = document.querySelectorAll(".dataClient");
  dataClient.forEach((field) => (field.value = ""));
};

function sendClient() {
  const db_client = getLocalStorage();
  const newClientId = db_client.length > 0 ? db_client[db_client.length - 1].id + 1 : 1; // Gera o ID de forma incremental

  const id = newClientId; // Usa o ID gerado
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
    !nome ||
    !email ||
    !celular ||
    !namePet ||
    !pelagem ||
    !raca ||
    !idade ||
    !porte ||
    !services ||
    !agenda
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
  createClient(client);

  // Limpa os campos do formulário.
  clearFields();

  // Exibe um alerta informando que a solicitação foi aceita.
  alert("Criado novo agendamento!");
  console.log("Lista atualizada: ", getLocalStorage());
}

function onClickButtonAgendar() {
  sendClient();
}

const buttonAgendar = document.getElementById("agendar");
buttonAgendar.addEventListener("click", onClickButtonAgendar);

function setLocalStorage(db_agenda) {
  return localStorage.setItem("db_agenda", JSON.stringify(db_agenda));
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
}

function findClientIndexById(id) {
  const db_agenda = getLocalStorage();
  return db_agenda.findIndex((client) => client.id === id);
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
  const db_agenda = readClient();
  const index = findClientIndexById(id);
  if (index !== -1) {
    db_agenda[index] = { ...db_agenda[index], ...updatedClient };
    setLocalStorage(db_agenda);
  } else {
    console.error("Client not found");
  }
}

function deleteClient(id) {
  const db_agenda = readClient();
  const index = findClientIndexById(id);
  if (index !== -1) {
    db_agenda.splice(index, 1);
    setLocalStorage(db_agenda);
  } else {
    console.error("Client not found");
  }
}
