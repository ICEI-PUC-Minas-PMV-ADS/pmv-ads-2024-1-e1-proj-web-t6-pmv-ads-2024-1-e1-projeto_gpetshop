# Plano de Testes de Software

| Caso de Teste | CT-002 - Criação de agendamento pelo colaborador |
|:---|:---|
| Requisitos Associados | RF 02 - Agendamento de Serviço pelo Cliente |
| Objetivo do Teste | Agendamento do serviço online feito pelo cliente. |
| Passos | <li>Estar na página inicial<li>Clicar no botao de AGENDAR para entrar na página de agendamento pelo cliente <li>Preencher todas as informações necessárias para o agendamento<li>Clicar na opção "Agendar" 
| Critérios de êxito | <li>Preenchimento de todos os campos corretamente. <li>Clique no botão AGENDAR. <li> Exibição de mensagem de sucesso "Criado novo agendamento!" |
| Responsável pela elaboração do caso de teste | Rafael Santos Carvalho|
<br>

| Caso de Teste | CT-003 - Criação de agendamento pelo colaborador |
|:---|:---|
| Requisitos Associados | RF 03 - Agendamento de Serviço pelo Colaborador |
| Objetivo do Teste | Executar a criação de uma novo agendamento sem impedimentos. Levando em conta a possível e evidente possibilidade do atendente do estabelecimento ter de agendar um ou mais serviços presencialmente. |
| Passos | <li>Estar na tela inicial e logado como atendente <li>Clicar no ícone do menu lateral para abri-lo <li>Estando no menu lateral deve-se clicar no item "Agenda" que abrirá um dropdown de opções <li>Clicar na opção "Novo Agendamento" para abrir a tela do mesmo <li>Preencher todos os campos corretamente <li>Clicar no botão "AGENDAR" que está localizado ao final do formulário. 
| Critérios de êxito | <li>Preenchimento de todos os campos corretamente. <li>Clique no botão AGENDAR. <li> Exibição de mensagem de sucesso "Criado novo agendamento!" |
| Responsável pela elaboração do caso de teste | Paulo Henrique Sousa Carvalho|
<br>


| Caso de Teste | CT-005 - Tratamento das solicitações para agendamento de serviços |
|:---|:---|
| Requisitos Associados | RF 05 - Tratamento das Solicitações de Serviço |
| Objetivo do Teste | Visualizar, avaliar, aceitar ou recusar perante a avaliação  |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor <li>Clicar no ícone do menu lateral para abri-lo <li>Estando no menu lateral deve-se clicar no item "Agenda" que abrirá um dropdown de opções <li>Clicar na opção "Tratar Solicitações" para abrir a tela do mesmo <li>Visualizando uma lista com as informações fornecidas pelo cliente, clicando em um item/nome da lista o sistema levará para a tela da solicitação <li>Avaliar os dados<li>Se caso possível realizar o serviço clicar no botão "ACEITAR" que está localizado ao final do formulário. <li>Caso não seja possível, o usuário(atendente ou gestor) deverá entrar em contato com o cliente, caso não haja uma concordância de horários ou quaisquer outros motivos, o usuário(atendente ou gestor) poderá editar ou recusar a solicitação clicando em nos botões "ALTERAR" e "RECUSAR" dispostos ao fim do formulário.
| Critérios de êxito | <li>Visualização em lista das solicitações pendentes. <li>Avaliar as informações, alterar, recusar ou aceitar a respectiva solicitação. <li>Exibição de mensagem de sucesso para as ações de Recusar: "Solicitação recusada!" e Aceitar: "Solicitação aceita!" |
| Responsável pela elaboração do caso de teste | Paulo Henrique Sousa Carvalho|
<br>


| Caso de Teste | CT-006 - Tratamento das mensagens enviado à equipe de suporte |
|:---|:---|
| Requisitos Associados | RF 06 - Tratamento de Solicitações de Suporte |
| Objetivo do Teste | Visualizar, excluir ou responder as mensagens recebidas. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral para abri-lo. <li>Estando no menu lateral deve-se clicar no item "Suporte" para abrir a tela do mesmo. <li>Visualizando uma lista com os dados do cliente e sua respectiva mensagem, clicando em um item/nome da lista o sistema levará para a tela de tratamendo do suporte. <li>Avaliar os dados recebidos. <li>Para inserir a resposta que será enviada ao cliente é preciso clicar no botão "INSERIR RESPOSTA" localizado ao fim do formulário para assim habilitar o campo. <li>Para enviar a resposta digitada o usuário (atendente ou gestor) deve clicar no botão "ENVIAR" ao fim do formulário. <li>Caso haja um possível motivo para exclusão da mensagem, o usuário (atendente ou gestor) poderá excluir a mensagem clicando no botão "EXCLUIR" disposto ao fim do formulário. 
| Critérios de êxito | <li>Visualização em lista das mensagens que aguardam resposta. <li>Avaliar a mensagem, inserir resposta, excluir ou responder a respectiva mensagem. <li>Exibição de mensagem de sucesso para as ações de Excluir: "Mensagem excluída!" e Enviar: "Mensagem respondida!" |
| Responsável pela elaboração do caso de teste | Paulo Henrique Sousa Carvalho|
<br>


---

| Caso de Teste | CT-007 - Tratamento das tarefas que serão exibidas no calendário |
|:---|:---|
| Requisitos Associados | RF 07 - Visualização de Painel de Serviços Agendados |
| Objetivo do Teste | Visualizar as tarefas recebidas. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral e selecionar "Agenda". <li>Na página da agenda, as tarefas com seus respectivos horários devem ser exibidas. <li>Pesquisar pelos componentes disponíveis e testar seu funcionamento. |
| Responsável pela Elaboração do Caso de Teste | Gabriel Marchi Ziviani |

---
<br>



---

| Caso de Teste | CT-008 - Tratamento do Relatório |
|:---|:---|
| Requisitos Associados | RF 07 - Visualização dos Dados Presentes no Relatório |
| Objetivo do Teste | Visualizar as tarefas recebidas. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral e selecionar "Relatório". <li>Na página do relatório, devem aparecer os números corretos sobre os agendamentos, solicitações e cancelamentos, além dos clientes que possuem solicitações em aberto. <li>Deve ser possível pesquisar por um cliente específico com uma solicitação em aberto. <li>Pesquisar pelos componentes disponíveis e testar seu funcionamento.|||||
| Responsável pela Elaboração do Caso de Teste | Gabriel Marchi Ziviani |

---

<br>

