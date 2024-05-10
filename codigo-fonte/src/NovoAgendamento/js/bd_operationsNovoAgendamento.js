// Função para obter os dados armazenados no localStorage
function getLocalStorageData() {
    // Verifica se há dados armazenados no localStorage
    var storedData = localStorage.getItem('db_client');
    
    // Se não houver dados armazenados, retorna um array vazio
    // Caso contrário, retorna os dados convertidos de JSON para um objeto JavaScript
    return storedData ? JSON.parse(storedData) : [];
}




// Função para atualizar os dados armazenados no localStorage
function setLocalStorage(dbClient) {
    localStorage.setItem("db_client", JSON.stringify(dbClient));
}


// Função para criar um novo cliente e atualizar os dados armazenados no localStorage
function createOrUpdateClient(client, index) {
    var dbClient = getLocalStorageData();
    if (index === undefined || index === null) {
        // Se o índice não for especificado, adicione o cliente ao final do array
        dbClient.push(client);
    } else {
        // Se o índice for especificado, atualize o cliente no array
        dbClient[index] = client;
    }
    setLocalStorage(dbClient);
}





// Função para ler os dados armazenados no localStorage
function readClient() {
    return getLocalStorageData();
}





// Função para excluir um cliente do array e atualizar os dados armazenados no localStorage
function deleteClient(index) {
    var dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
}





// Exemplo de como usar os dados armazenados
var storedDataArray = getLocalStorageData();
console.log(storedDataArray); // Exibe os dados armazenados no console
