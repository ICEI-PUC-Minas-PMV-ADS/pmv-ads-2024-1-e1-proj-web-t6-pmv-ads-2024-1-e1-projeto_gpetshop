import './index.css';
import '../assets/fonts/fonts.css';

const saveButton = document.getElementById("saveButton");
const newButton = document.getElementById("newButton");
const editButton = document.getElementById("editButton");
const removeButton = document.getElementById("removeButton");
const searchButton = document.getElementById("search-bar-icon");

function retrieveColaboradores() {
    const colaboradores = localStorage.getItem("listaColab");
    return colaboradores ? JSON.parse(colaboradores) : [];
};

function storeColaboradores(colaboradores) {
    localStorage.setItem("listaColab", JSON.stringify(colaboradores));
};

function getFormElements() {
    return {
        id: document.getElementById('id'),
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        telefone: document.getElementById('telefone'),
        cargo: document.getElementsByName('cargo'),
        endereco: document.getElementById('endereco'),
        usuario: document.getElementById('usuario'),
        senha: document.getElementById('senha')
    }
}

function fillFormValues(event, colab = null, edit = false) {
    const formElements = getFormElements();

    if (edit) {
        formElements.id.disabled = true;
        saveButton.disabled = true;
        editButton.disabled = false;
        removeButton.disabled = false;
    }
    else {
        formElements.id.disabled = false;
        saveButton.disabled = false;
        editButton.disabled = true;
        removeButton.disabled = true;
    }

    formElements.id.value = colab?.id || "",
        formElements.nome.value = colab?.nome || "",
        formElements.email.value = colab?.email || "",
        formElements.telefone.value = colab?.telefone || "",
        formElements.endereco.value = colab?.endereco || "",
        formElements.usuario.value = colab?.usuario || "",
        formElements.senha.value = colab?.senha || ""

    if (colab) {
        for (const option of formElements.cargo) {
            if (option.value === colab.cargo) {
                option.checked = true;
                break;
            }
        }
    } else {
        for (const option of formElements.cargo) {
            if (option.value === 'Atendente') {
                option.checked = true;
                break;
            }
        }
    }
}

function getFormValues() {
    const formElements = getFormElements();
    let selectedFuncao;

    for (const option of formElements.cargo) {
        if (option.checked) {
            selectedFuncao = option.value;
            break;
        }
    }

    return {
        id: formElements.id.value,
        nome: formElements.nome.value,
        email: formElements.email.value,
        telefone: formElements.telefone.value,
        cargo: selectedFuncao,
        endereco: formElements.endereco.value,
        usuario: formElements.usuario.value,
        senha: formElements.senha.value
    }
};

function fillColabTable(searchColabs = null) {
    const colaboradores = searchColabs || retrieveColaboradores();
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";

    colaboradores.forEach(colab => {
        const row = document.createElement('tr');
        row.classList.add('tr-hover');

        const cellNome = document.createElement('td');
        cellNome.textContent = colab.nome;
        row.appendChild(cellNome);

        const cellEmail = document.createElement('td');
        cellEmail.textContent = colab.email;
        row.appendChild(cellEmail);

        const cellFuncao = document.createElement('td');
        cellFuncao.textContent = colab.cargo;
        row.appendChild(cellFuncao);

        tableBody.appendChild(row);
        row.addEventListener('click', () => fillFormValues(event, colab, true));
    });
};

function newColaborador() {
    const newColab = getFormValues();

    if (newColab.id === "") {
        alert("ID do colaborador é obrigatório!");
        return
    };
    const savedColaboradores = retrieveColaboradores();

    const hasID = savedColaboradores.find((c) => c.id === newColab.id);

    if (hasID) {
        alert(`Colaborador(a) ${hasID.nome} cadastrado(a) com esse ID!`);
        return
    };

    storeColaboradores([...savedColaboradores, newColab]);
    fillFormValues();
    fillColabTable();
};

function editColaborador() {
    const savedColaboradores = retrieveColaboradores();
    const editingColab = getFormValues();

    const newColabs = savedColaboradores.map((c) => {
        if (c.id === editingColab.id) return editingColab;
        else return c;
    });

    storeColaboradores(newColabs);
    fillColabTable();
    alert("Colaborador alterado com sucesso!");
};

function removeColaborador() {
    const savedColaboradores = retrieveColaboradores();
    const editingColab = getFormValues();

    storeColaboradores(savedColaboradores.filter((c) => c.id !== editingColab.id));
    fillColabTable();
    fillFormValues();
    alert("Colaborador excluído com sucesso!");
};

function searchColaborador() {
    const searchValue = document.getElementById('search-bar').value;

    const savedColaboradores = retrieveColaboradores();
    const findedColabs = savedColaboradores.filter((c) => c.nome.includes(searchValue));
    
    fillColabTable(findedColabs);
};

saveButton.addEventListener('click', newColaborador);
newButton.addEventListener('click', fillFormValues);
editButton.addEventListener('click', editColaborador);
removeButton.addEventListener('click', removeColaborador);
searchButton.addEventListener('click', searchColaborador);

window.onload = () => {
    fillColabTable();
    getPermitions()
};

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