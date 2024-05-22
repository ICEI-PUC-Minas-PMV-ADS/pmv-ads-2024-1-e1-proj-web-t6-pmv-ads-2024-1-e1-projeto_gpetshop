// Evendo que executa o abrir e fechar da barra lateral
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});

// Função para salvar os dados de suporte no local storage.
function setLocalStorageSupport(minhaLista) {
  return localStorage.setItem("minhaLista", JSON.stringify(minhaLista));
}

// Função para recuperar os dados de suporte do local storage.
function getLocalStorageSupport() {
  return JSON.parse(localStorage.getItem("minhaLista")) ?? [];
}

// CRUD: Lê os dados de suporte do local storage.
function readSupport() {
  return getLocalStorageSupport();
}

// Função para identificar o cliente quando uma linha da tabela é clicada.
function identifyingCustomer(event) {
  const row = event.currentTarget; // A linha (tr) que foi clicada.
  const index = row.getAttribute("data-index"); // Obtém o índice da linha.
  console.log("Este é o cliente de índice", index);

  // Obter os dados do cliente do localStorage usando o índice.
  const minhaLista = getLocalStorageSupport();
  const clientData = minhaLista[index];
  // Verificar se os dados do cliente existem.
  if (clientData) {
    // Serializar os dados do cliente como uma string JSON.
    const serializedData = JSON.stringify(clientData);
    // Redirecionar para a página de edição com os dados do cliente como parâmetros de consulta.
    window.open(
      `/codigo-fonte/src/TratamentoSuporte/index.html?data=${encodeURIComponent(
        serializedData
      )}`,
      "_blank"
    );
  } else {
    console.log("Não foram encontrados dados para o índice", index);
  }
}

// Função para preencher os campos do formulário com os dados do cliente.
function fillFields(client) {
  /*   document.getElementsByName("id").value = client.cliente.nome; */
  document.getElementsByName("nome").value = client.nome;
  document.getElementsByName("email").value = client.email;
  document.getElementsByName("telefone").value = client.telefone;
  document.getElementsByName("mensagem").value = client.mensagem;
}

// Função para criar uma nova linha na tabela para um cliente.
function createRow(client, index) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("data-index", index); // Adiciona um atributo de dados com o índice.
  newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.mensagem}</td>
        `;
  document.querySelector("#tableClient>tbody").appendChild(newRow);
  newRow.addEventListener("click", identifyingCustomer); // Adiciona o event listener à nova linha.
}
/*       <td>${client.cliente.email}</td>
      <td>${client.cliente.celular}</td> */

// Função para limpar todas as linhas da tabela.
function clearTable() {
  const rows = document.querySelectorAll("#tableClient>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
}

// Função para atualizar a tabela com os dados de suporte do local storage.
function updateTable() {
  const minhaLista = readSupport();
  clearTable();
  minhaLista.forEach(createRow);
}

// Atualiza a tabela quando a página é carregada.
updateTable();
