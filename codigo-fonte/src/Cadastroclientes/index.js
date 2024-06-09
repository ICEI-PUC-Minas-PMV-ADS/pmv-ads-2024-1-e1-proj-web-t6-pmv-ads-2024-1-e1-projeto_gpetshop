const saveButton = document.getElementById("saveButton");
const newButton = document.getElementById("newButton");

function retrieveClientes() {
    const clientes = localStorage.getItem("listaClientes");
    return clientes ? JSON.parse(clientes) : [];
};

function storeClientes(clientes) {
    localStorage.setItem("listaClientes", JSON.stringify(clientes));
};

function getFormElements() {
    return {
        id: document.getElementById('id'),
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        telefone: document.getElementById('telefone'),
        endereco: document.getElementById('endereco'),
        nome_pet_1: document.getElementById('nome_pet_1'),
        observacao_pet_1: document.getElementById('observacao_pet_1'),
        combo_idade_1: document.getElementById('combo_idade_1'),
        combo_idade_2: document.getElementById('combo_idade_2'),
        combo_idade_3: document.getElementById('combo_idade_3'),
        combo_idade_4: document.getElementById('combo_idade_4'),
        nome_pet_2: document.getElementById('nome_pet_2'),
        observacao_pet_2: document.getElementById('observacao_pet_2'),
        combo_idade_5: document.getElementById('combo_idade_5'),
        combo_idade_6: document.getElementById('combo_idade_6'),
        combo_idade_7: document.getElementById('combo_idade_7'),
        combo_idade_8: document.getElementById('combo_idade_8')
    }
};

function getFormValues() {
    const elements = getFormElements();
    return {
        id: elements.id.value,
        nome: elements.nome.value,
        email: elements.email.value,
        telefone: elements.telefone.value,
        endereco: elements.endereco.value,
        nome_pet_1: elements.nome_pet_1.value,
        observacao_pet_1: elements.observacao_pet_1.value,
        combo_idade_1: elements.combo_idade_1.value,
        combo_idade_2: elements.combo_idade_2.value,
        combo_idade_3: elements.combo_idade_3.value,
        combo_idade_4: elements.combo_idade_4.value,
        nome_pet_2: elements.nome_pet_2.value,
        observacao_pet_2: elements.observacao_pet_2.value,
        combo_idade_5: elements.combo_idade_5.value,
        combo_idade_6: elements.combo_idade_6.value,
        combo_idade_7: elements.combo_idade_7.value,
        combo_idade_8: elements.combo_idade_8.value
    };
}

function fillFormValues() {
    const elements = getFormElements();
    return {
        id: elements.id.value = "",
        nome: elements.nome.value = "",
        email: elements.email.value = "",
        telefone: elements.telefone.value = "",
        endereco: elements.endereco.value = "",
        nome_pet_1: elements.nome_pet_1.value = "",
        observacao_pet_1: elements.observacao_pet_1.value = "",
        combo_idade_1: elements.combo_idade_1.value = "valor1",
        combo_idade_2: elements.combo_idade_2.value = "valor1",
        combo_idade_3: elements.combo_idade_3.value = "valor1",
        combo_idade_4: elements.combo_idade_4.value = "valor1",
        nome_pet_2: elements.nome_pet_2.value = "",
        observacao_pet_2: elements.observacao_pet_2.value = "",
        combo_idade_5: elements.combo_idade_5.value = "valor1",
        combo_idade_6: elements.combo_idade_6.value = "valor1",
        combo_idade_7: elements.combo_idade_7.value = "valor1",
        combo_idade_8: elements.combo_idade_8.value = "valor1"
    };
}

function newCliente() {
    const newClient = getFormValues();
    console.log("newClient", newClient);

    if (newClient.id === "") {
        alert("ID do cliente é obrigatório!");
        return
    };
    const savedCliente = retrieveClientes();

    const hasID = savedCliente.find((c) => c.id === newClient.id);

    if (hasID) {
        alert(`Cliente ${hasID.nome} cadastrado(a) com esse ID!`);
        return
    };

    storeClientes([...savedCliente, newClient]);
    fillFormValues();
};

saveButton.addEventListener('click', newCliente);
newButton.addEventListener('click', fillFormValues);

document.addEventListener("DOMContentLoaded", function () {
  getPermitions()
  const addInputButtons = document.querySelectorAll(".plus-pet-icon");

  addInputButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const divPetAdd = document.getElementById("div-pet-add");
      const newDivPetAdd = divPetAdd.cloneNode(true);

      const plusPetIcon = newDivPetAdd.querySelector(".plus-pet-icon");
      if (plusPetIcon) {
        plusPetIcon.remove();
      }

      newDivPetAdd
        .querySelectorAll('input[type="text"]')
        .forEach(function (input) {
          input.value = "";
        });

      divPetAdd.parentNode.insertBefore(newDivPetAdd, divPetAdd.nextSibling);
    });
  });
});

$(document).ready(function () {
    $('.add').click(function () {
        $('.pet1').toggle();
    });
});

function getPermitions() {
  let userJson = localStorage.getItem('user')
  let user = JSON.parse(userJson)
  switch (user.cargo) {
      case 'Banhista':
      case 'Atendente':
          document.getElementById('cadastros').style.display = 'none'
          document.getElementById('relatorios').style.display = 'none'
          break;

      default:
          break;
  }

}

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
    if (!slide.contains(event.target) && !openSlide.contains(event.target) && slide.style.display === "block") {
        slide.classList.remove("animate__fadeInLeft");
        slide.classList.add("animate__fadeOutLeft");

        slide.addEventListener("animationend", function handleAnimationEnd() {
            slide.style.display = "none";
            slide.classList.remove("animate__fadeOutLeft");
            slide.removeEventListener("animationend", handleAnimationEnd);
        });
    }
});