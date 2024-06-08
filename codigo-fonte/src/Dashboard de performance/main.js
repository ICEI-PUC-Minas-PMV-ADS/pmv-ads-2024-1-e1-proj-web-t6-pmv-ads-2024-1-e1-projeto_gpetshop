// Função para obter os totais do localStorage
function getTotalsFromLocalStorage() {
    const totalSolicitations = localStorage.getItem('total_solicitations');
    const totalAgendamentos = localStorage.getItem('total_agendamentos');
    const totalRefused = localStorage.getItem('total_refused');
    const totalClients = localStorage.getItem('total_clients');
  
    return {
      totalSolicitations,
      totalAgendamentos,
      totalRefused,
      totalClients
    };
  }
  
  // Função para atualizar os valores no HTML
  function updateTotalsInHTML() {
    const totals = getTotalsFromLocalStorage();
  
    document.querySelector(".card-container .card:nth-child(1) .number").textContent = totals.totalSolicitations || 0;
    document.querySelector(".card-container .card:nth-child(2) .number").textContent = totals.totalAgendamentos || 0;
    document.querySelector(".card-container .card:nth-child(3) .number").textContent = totals.totalClients || 0;
    document.querySelector(".card-container .card:nth-child(4) .number").textContent = totals.totalRefused || 0;
  
    // Atualizar o total de clientes na seção "BASE DE CLIENTES"
    document.querySelector(".card-f .number").textContent = totals.totalClients || 0;
  }
  
  // Função para ler solicitações do localStorage e preencher a lista no HTML
  function fillClientList() {
    const solicitacoes = JSON.parse(localStorage.getItem("solicitacoes")) ?? [];
  
    const listaNomeElement = document.getElementById('listaNome');
    const listaEmailElement = document.querySelector('.listEmailClient ul');
    const listaFoneElement = document.querySelector('.listFoneClient ul');
  
    // Limpar listas existentes
    listaNomeElement.innerHTML = '';
    listaEmailElement.innerHTML = '';
    listaFoneElement.innerHTML = '';
  
    // Preencher listas com dados das solicitações
    solicitacoes.forEach(client => {
      const nomeItem = document.createElement('li');
      nomeItem.classList.add('list-name-item');
      nomeItem.textContent = client.clientName;
      listaNomeElement.appendChild(nomeItem);
  
      const emailItem = document.createElement('li');
      emailItem.classList.add('list-email-item');
      emailItem.textContent = client.clientEmail;
      listaEmailElement.appendChild(emailItem);
  
      const foneItem = document.createElement('li');
      foneItem.classList.add('list-fone-item');
      foneItem.textContent = client.clientPhone;
      listaFoneElement.appendChild(foneItem);
    });
  }
  
  // Chama a função para atualizar os valores no HTML e preencher a lista de clientes ao carregar a janela
  window.addEventListener("load", () => {
    updateTotalsInHTML();
    fillClientList();
  });
  