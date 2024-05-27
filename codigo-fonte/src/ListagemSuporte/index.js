// Função para salvar os dados de suporte no local storage.
function setLocalStorageSupport(minhaLista) {
  return localStorage.setItem("minhaLista", JSON.stringify(minhaLista));
}

// Função para recuperar os dados de suporte do local storage.
function getLocalStorageSupport() {
  return JSON.parse(localStorage.getItem("minhaLista")) ?? [];
}

// Função para identificar o cliente quando uma linha da tabela é clicada.
function identifyingCustomer(event) {
  const row = event.currentTarget; // A linha (tr) que foi clicada.
  const id = row.getAttribute("data-id"); // Obtém o ID da linha.
  console.log("Este é o cliente de ID", id);

  // Obter os dados do cliente do localStorage usando o ID.
  const minhaLista = getLocalStorageSupport();
  const clientData = minhaLista.find((client) => client.id === parseInt(id));
  // Verificar se os dados do cliente existem.
  if (clientData) {
      // Serializar os dados do cliente como uma string JSON.
      const serializedData = JSON.stringify(clientData);
      // Redirecionar para a página de edição com os dados do cliente como parâmetros de consulta.
      window.location.href = `/codigo-fonte/src/TratamentoSuporte/index.html?data=${encodeURIComponent(serializedData)}`;
  } else {
      console.log("Não foram encontrados dados para o ID", id);
  }
}

// Função para preencher os campos do formulário com os dados do cliente.
function fillFields(client) {
  document.getElementsByName("nome")[id].value = client.nome;
  document.getElementsByName("email")[id].value = client.email;
  document.getElementsByName("telefone")[id].value = client.telefone;
  document.getElementsByName("mensagem")[id].value = client.mensagem;
}

// Função para criar uma nova linha na tabela para um cliente.
function createRow(client) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("data-id", client.id); // Adiciona um atributo de dados com o ID.
  newRow.innerHTML = `
      <td class="td-nome">${client.nome}</td>
      <td class="td-mensagem">${client.mensagem}</td>
      `;
      /*     <td class="td-status">${client.status}</td> */
  document.querySelector("#tableClient>tbody").appendChild(newRow);
  newRow.addEventListener("click", identifyingCustomer); // Adiciona o event listener à nova linha.
}

// Função para limpar todas as linhas da tabela.
function clearTable() {
  const tbody = document.querySelector("#tableClient>tbody");
  tbody.innerHTML = ""; // Limpa o conteúdo da tabela.
}

// Função para atualizar a tabela com os dados de suporte do local storage.
function updateTable(filteredData = null) {
  const minhaLista = filteredData || readSupport();
  clearTable();
  minhaLista.forEach(createRow);
}

// CRUD: Lê os dados de suporte do local storage.
function readSupport() {
  return getLocalStorageSupport();
}

// Função de pesquisa
function searchMessages() {
  const input = document.getElementById('searchBarList');
  const filter = input.value.toUpperCase();
  const minhaLista = readSupport();
  
  const filteredData = minhaLista.filter(client => {
    return client.nome.toUpperCase().includes(filter) || client.mensagem.toUpperCase().includes(filter);
  });
  
  updateTable(filteredData);
}

// Evento que executa o abrir e fechar da barra lateral
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
      slide.style.display = "none";
  } else {
      slide.style.display = "block";
  }
});

// Atualiza a tabela quando a página é carregada.
updateTable();
