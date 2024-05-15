import { sendRequest } from "./js/bdTratamento";
import "./css/TratamentoSolicitacao.css";
import "./css/fonts.css";

window.addEventListener("load", () => {
  setInputReadOnly("nameClient", true);
  setInputReadOnly("idClient", true);
  setInputReadOnly("emailClient", true);
  setInputReadOnly("foneClient", true);
  setInputReadOnly("namePet", true);
  setInputReadOnly("item", true);
  setInputReadOnly("porte", true);
  setInputReadOnly("pelagem", true);
  setInputReadOnly("raca", true);
  setInputReadOnly("services", true);
  setInputReadOnly("dt-agenda", true);
  setInputReadOnly("text-value-obs", true);
});

function onClickButtonAlterar() {
  setInputReadOnly("nameClient", false);
  setInputReadOnly("idClient", false);
  setInputReadOnly("emailClient", false);
  setInputReadOnly("foneClient", false);
  setInputReadOnly("namePet", false);
  setInputReadOnly("item", false);
  setInputReadOnly("porte", false);
  setInputReadOnly("pelagem", false);
  setInputReadOnly("raca", false);
  setInputReadOnly("services", false);
  setInputReadOnly("dt-agenda", false);
  setInputReadOnly("text-value-obs", false);
}

function setInputReadOnly(id, isReadOnly) {
  const element = document.getElementById(id);
  element.readOnly = isReadOnly;
}

function onClickbButtonRecusar() {
  alert("Solicitação recusada!");
}

function onClickbButtonAceitar() {
  sendRequest();
}
