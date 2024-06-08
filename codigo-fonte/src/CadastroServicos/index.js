import "./CadastroServicos.css";
import "./ListagemCadastroServicos.css";
import "../assets/fonts/fonts.css";
import logopetpuc from "../assets/svg/petPuc.svg"

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


// Event listener para o botão "Aceitar"
document.getElementById("salvar-solicitacao").addEventListener("click", function() {
  // Obter os valores dos campos do formulário
  var nomeServico = document.getElementById("nomeServico").value;
  var precoServico = document.getElementById("precoServico").value;
 
  // Verificar se algum campo está vazio
  if (nomeServico === "" || precoServico === "") {
    // Se algum campo estiver vazio, exibir uma mensagem de erro
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
    return; // Parar a execução da função
  }

  // Criar um objeto com os dados do serviço
  var servico = {
      nome: nomeServico,
      preco: precoServico
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

  // Atualizar a tabela na página com os novos dados
  atualizarListaServicos();
});

// Event listener para o botão "Alterar"
document.getElementById("alterar-solicitacao").addEventListener("click", function() {
  // Permitir a edição dos campos
  document.getElementById("nomeServico").readOnly = false;
  document.getElementById("precoServico").readOnly = false;
});

// Event listener para o botão "Novo"
document.getElementById("novo-solicitacao").addEventListener("click", function() {
  // Limpar os campos do formulário
  document.getElementById("nomeServico").value = "";
  document.getElementById("precoServico").value = "";

  // Permitir a edição dos campos
  document.getElementById("nomeServico").readOnly = false;
  document.getElementById("precoServico").readOnly = false;

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
      `;
      newRow.innerHTML = newRowContent;
      tabelaServicos.appendChild(newRow);

      // Adicionar evento de clique a cada linha da lista
      newRow.addEventListener("click", function() {
          // Preencher os campos do formulário com os dados do serviço selecionado
          document.getElementById("nomeServico").value = servico.nome;
          document.getElementById("precoServico").value = servico.preco;
 
          // Definir os campos como somente leitura
          document.getElementById("nomeServico").readOnly = true;
          document.getElementById("precoServico").readOnly = true;

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
          `;
          newRow.innerHTML = newRowContent;
          tabelaServicos.appendChild(newRow);

          // Adicionar evento de clique a cada linha da lista
          newRow.addEventListener("click", function() {
              // Preencher os campos do formulário com os dados do serviço selecionado
              document.getElementById("nomeServico").value = servico.nome;
              document.getElementById("precoServico").value = servico.preco;
   
              // Definir os campos como somente leitura
              document.getElementById("nomeServico").readOnly = true;
              document.getElementById("precoServico").readOnly = true;
     
              // Definir o índice do serviço para edição
              document.getElementById("alterar-solicitacao").setAttribute("data-index", servicos.indexOf(servico));
          });
      }
  });
});
