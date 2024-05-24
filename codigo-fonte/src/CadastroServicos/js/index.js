const tempClient = {
  nome: "Joao da silva", email: "rodrigo@gmail.com", celular: "13", cidade: "Mortugaba"
}


// CRUD

//aula

//pegar
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []

//enviar
function setLocalStorage(dbClient) {
  localStorage.setItem("db_client", JSON.stringify(dbClient))
}


// CRIAÇÃO - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push(client)
  setLocalStorage(dbClient)
}


// LEITURA - READ
const readClient = () => getLocalStorage()


// ALTERAÇÃO - UPDATE
const updateClient = (index, client) => {
  const dbClient = readClient()
  dbClient[index] = client
  setLocalStorage(dbClient)
}


// EXCLUSÃO - DELETE
const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index, 1)
  setLocalStorage(dbClient)
}


const isValidFields = () => {
  return document.getElementById('client').reportValidity()
};

//interação com layout
const saveClient = () => {
  if (isValidFields()) {
    console.log("Enviando solicitação...")
  }
}


//eventos
document.getElementById('aceitar-solicitacao').addEventListener('click', saveClient)
