// Funções para manipulação do localStorage
function getLocalStorageSolicitation() {
    return JSON.parse(localStorage.getItem("solicitacoes")) ?? [];
  }
  
  function getLocalStorageRefused() {
    return JSON.parse(localStorage.getItem("db_agenda_refused")) ?? [];
  }
  
  function getLocalStorageAgenda() {
    return JSON.parse(localStorage.getItem("db_agenda")) ?? [];
  }
  
  // Função para calcular os totais
  function calculateAndSaveTotals() {
    const solicitacoes = getLocalStorageSolicitation();
    const agendamentos = getLocalStorageAgenda();
    const refused = getLocalStorageRefused();
  
    const totalSolicitations = solicitacoes.length;
    const totalAgendamentos = agendamentos.length;
    const totalRefused = refused.length;
  
    // Supondo que cada cliente seja único pelo id
    const allClients = new Set();
    solicitacoes.forEach(client => allClients.add(client.id));
    agendamentos.forEach(client => allClients.add(client.id));
    refused.forEach(client => allClients.add(client.id));
    const totalClients = allClients.size;
  
    // Salvar os totais no localStorage
    localStorage.setItem('total_solicitations', totalSolicitations);
    localStorage.setItem('total_agendamentos', totalAgendamentos);
    localStorage.setItem('total_refused', totalRefused);
    localStorage.setItem('total_clients', totalClients);
  }
  
  // Chama a função para calcular e salvar os totais ao carregar a janela
  window.addEventListener("load", () => {
    calculateAndSaveTotals();
  });
  