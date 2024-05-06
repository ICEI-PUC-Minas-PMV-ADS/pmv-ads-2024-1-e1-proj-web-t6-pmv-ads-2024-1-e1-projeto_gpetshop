import { setImages } from './images';
import './index.css';

const mockPetshop = {
  id: 1,
  nome: "Pet Puc",
  services: [{id: 1, nome: "Banho"}, {id: 2, nome: "Banho e tosa"}, {id: 3, nome: "Hidratação"}]
}

const mockPetshopJson = JSON.stringify(mockPetshop);

localStorage.setItem("petshop", mockPetshopJson);

function setOptionsSelect() {
  const mockPetshopJson = localStorage.getItem("petshop");
  
  const mockPetshop = JSON.parse(mockPetshopJson);

  const select = document.getElementById("select");
  
  mockPetshop.services.forEach(service => {
    const option = document.createElement("option");
    option.value = service.nome;
    option.innerHTML = service.nome;
    select.appendChild(option);
  })
}


window.addEventListener("load", (event) => {
  setOptionsSelect();
  setImages();
});