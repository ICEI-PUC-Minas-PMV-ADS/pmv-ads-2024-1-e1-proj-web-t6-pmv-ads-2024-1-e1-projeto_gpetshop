import "./CadastroServicos.css";
import "./ListagemCadastroServicos.css";
import logopetpuc from "../assets/svg/petPuc.svg"

// OPEN CLOSE
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});

// Event listener para o botão "Aceitar"
document.getElementById("aceitar-solicitacao").addEventListener("click", function() {
  // Obter os valores dos campos do formulário
  var nomeServico = document.getElementById("nomeServico").value;
  var precoServico = document.getElementById("precoServico").value;
  var duracaoServico = document.getElementById("duracaoServico").value;
  var categoriaServico = document.getElementById("categoriaServico").value;
  var servicoPaiServico = document.getElementById("servicoPaiServico").value;
 
  // Verificar se algum campo está vazio
  if (nomeServico === "" || precoServico === "" || duracaoServico === "" || categoriaServico === "" || servicoPaiServico === "") {
    // Se algum campo estiver vazio, exibir uma mensagem de erro
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
    return; // Parar a execução da função
  }

  // Criar um objeto com os dados do serviço
  var servico = {
      nome: nomeServico,
      preco: precoServico,
      duracao: duracaoServico,
      categoriaServico: categoriaServico,
      servicoPaiServico: servicoPaiServico
  };

  // Verificar se o índice do serviço a ser alterado está definido
  var index = document.getElementById("alterar-solicitacao").getAttribute("data-index");
  if (index !== null && index !== undefined) {
    // Obter a lista de serviços do local storage
    var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    // Verificar se o índice é válido
    if (index >= 0 && index < servicos.length) {
      // Atualizar o serviço na lista
      servicos[index] = servico;

      // Atualizar o local storage com os dados atualizados
      localStorage.setItem("servicos", JSON.stringify(servicos));

      // Limpar os campos do formulário após alterar o serviço
      document.getElementById("nomeServico").value = "";
      document.getElementById("precoServico").value = "";
      document.getElementById("duracaoServico").value = "";
      document.getElementById("categoriaServico").value = "";
      document.getElementById("servicoPaiServico").value = "";

      // Atualizar a tabela na página com os novos dados
      atualizarListaServicos();

      // Remover o atributo data-index após a atualização
      document.getElementById("alterar-solicitacao").removeAttribute("data-index");

      return; // Finalizar a função após atualizar o serviço
    }
  }

  // Se não houver índice definido ou o índice não for válido, criar um novo serviço
  var servicos = JSON.parse(localStorage.getItem("servicos")) || [];
  servicos.push(servico);
  localStorage.setItem("servicos", JSON.stringify(servicos));

  // Limpar os campos do formulário após adicionar o serviço
  document.getElementById("nomeServico").value = "";
  document.getElementById("precoServico").value = "";
  document.getElementById("duracaoServico").value = "";
  document.getElementById("categoriaServico").value = "";
  document.getElementById("servicoPaiServico").value = "";

  // Atualizar a tabela na página com os novos dados
  atualizarListaServicos();
});

// Event listener para o botão "Alterar"
document.getElementById("alterar-solicitacao").addEventListener("click", function() {
  // Permitir a edição dos campos
  document.getElementById("nomeServico").readOnly = false;
  document.getElementById("precoServico").readOnly = false;
  document.getElementById("duracaoServico").readOnly = false;
  document.getElementById("categoriaServico").readOnly = false;
  document.getElementById("servicoPaiServico").readOnly = false;
});

// Event listener para o botão "Novo"
document.getElementById("novo-solicitacao").addEventListener("click", function() {
  // Limpar os campos do formulário
  document.getElementById("nomeServico").value = "";
  document.getElementById("precoServico").value = "";
  document.getElementById("duracaoServico").value = "";
  document.getElementById("categoriaServico").value = "";
  document.getElementById("servicoPaiServico").value = "";

  // Permitir a edição dos campos
  document.getElementById("nomeServico").readOnly = false;
  document.getElementById("precoServico").readOnly = false;
  document.getElementById("duracaoServico").readOnly = false;
  document.getElementById("categoriaServico").readOnly = false;
  document.getElementById("servicoPaiServico").readOnly = false;

  // Remover o atributo data-index para garantir que um novo serviço seja criado
  document.getElementById("alterar-solicitacao").removeAttribute("data-index");
});

// Event listener para o botão "Excluir"
document.getElementById("excluir-solicitacao").addEventListener("click", function() {
  var index = document.getElementById("alterar-solicitacao").getAttribute("data-index");
  if (index !== null && index !== undefined) {
    var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    if (index >= 0 && index < servicos.length) {
      // Remover o serviço da lista
      servicos.splice(index, 1);

      // Atualizar o local storage com os dados atualizados
      localStorage.setItem("servicos", JSON.stringify(servicos));

      // Limpar os campos do formulário após excluir o serviço
      document.getElementById("nomeServico").value = "";
      document.getElementById("precoServico").value = "";
      document.getElementById("duracaoServico").value = "";
      document.getElementById("categoriaServico").value = "";
      document.getElementById("servicoPaiServico").value = "";

      // Atualizar a tabela na página com os novos dados
      atualizarListaServicos();

      // Remover o atributo data-index após a exclusão
      document.getElementById("alterar-solicitacao").removeAttribute("data-index");
    }
  }
});

// Função para atualizar a lista de serviços na página
function atualizarListaServicos() {
  var tabelaServicos = document.getElementById("tableClient").getElementsByTagName("tbody")[0];
  tabelaServicos.innerHTML = ""; // Limpar a tabela antes de adicionar os novos dados

  // Obter a lista de serviços do local storage
  var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

  // Iterar sobre a lista de serviços e adicionar cada um à tabela
  servicos.forEach(function(servico, index) {
      const newRow = document.createElement("tr");

      // Criar o conteúdo da nova linha
      var newRowContent = `
          <td class="poppins-regular td td-lista">${servico.nome}</td>
          <td class="poppins-light td td-lista">${servico.preco}</td>
          <td class="poppins-light td td-lista">${servico.duracao}</td>
          <td class="poppins-light td td-lista">${servico.categoriaServico}</td>
          <td class="poppins-light td td-lista">${servico.servicoPaiServico}</td>
      `;
      newRow.innerHTML = newRowContent;
      tabelaServicos.appendChild(newRow);

      // Adicionar evento de clique a cada linha da lista
      newRow.addEventListener("click", function() {
          // Preencher os campos do formulário com os dados do serviço selecionado
          document.getElementById("nomeServico").value = servico.nome;
          document.getElementById("precoServico").value = servico.preco;
          document.getElementById("duracaoServico").value = servico.duracao;
          document.getElementById("categoriaServico").value = servico.categoriaServico;
          document.getElementById("servicoPaiServico").value = servico.servicoPaiServico;

          // Definir os campos como somente leitura
          document.getElementById("nomeServico").readOnly = true;
          document.getElementById("precoServico").readOnly = true;
          document.getElementById("duracaoServico").readOnly = true;
          document.getElementById("categoriaServico").readOnly = true;
          document.getElementById("servicoPaiServico").readOnly = true;

          // Definir o índice do serviço para edição
          document.getElementById("alterar-solicitacao").setAttribute("data-index", index);
      });
  });
}

// Atualizar a lista de serviços ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  atualizarListaServicos();
});


// Atualizar a lista de serviços ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  atualizarListaServicos();
});



// Adicione um evento de entrada (input) ao campo de filtro
document.getElementById("searchBarList").addEventListener("input", function() {
  // Obtenha o valor digitado no campo de filtro
  var filtro = this.value.toLowerCase();

  // Obter a lista de serviços do local storage
  var servicos = JSON.parse(localStorage.getItem("servicos")) || [];

  // Limpar a tabela antes de adicionar os novos dados
  var tabelaServicos = document.getElementById("tableClient").getElementsByTagName("tbody")[0];
  tabelaServicos.innerHTML = "";

  // Iterar sobre a lista de serviços
  servicos.forEach(function(servico) {
      // Verificar se o nome do serviço contém a string de pesquisa
      if (servico.nome.toLowerCase().includes(filtro)) {
          const newRow = document.createElement("tr");

          // Criar o conteúdo da nova linha
          var newRowContent = `
              <td class="poppins-regular td td-lista">${servico.nome}</td>
              <td class="poppins-light td td-lista">${servico.preco}</td>
              <td class="poppins-light td td-lista">${servico.duracao}</td>
              <td class="poppins-light td td-lista">${servico.categoriaServico}</td>
              <td class="poppins-light td td-lista">${servico.servicoPaiServico}</td>
          `;
          newRow.innerHTML = newRowContent;
          tabelaServicos.appendChild(newRow);

          // Adicionar evento de clique a cada linha da lista
          newRow.addEventListener("click", function() {
              // Preencher os campos do formulário com os dados do serviço selecionado
              document.getElementById("nomeServico").value = servico.nome;
              document.getElementById("precoServico").value = servico.preco;
              document.getElementById("duracaoServico").value = servico.duracao;
              document.getElementById("categoriaServico").value = servico.categoriaServico;
              document.getElementById("servicoPaiServico").value = servico.servicoPaiServico;

              // Definir os campos como somente leitura
              document.getElementById("nomeServico").readOnly = true;
              document.getElementById("precoServico").readOnly = true;
              document.getElementById("duracaoServico").readOnly = true;
              document.getElementById("categoriaServico").readOnly = true;
              document.getElementById("servicoPaiServico").readOnly = true;

              // Definir o índice do serviço para edição
              document.getElementById("alterar-solicitacao").setAttribute("data-index", servicos.indexOf(servico));
          });
      }
  });
});
