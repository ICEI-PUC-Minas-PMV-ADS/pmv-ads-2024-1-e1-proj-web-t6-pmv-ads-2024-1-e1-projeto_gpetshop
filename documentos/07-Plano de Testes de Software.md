# Plano de Testes de Software
<br>

| Caso de Teste | CT-001 - Página Inicial - Menu Lateral - Itens "Inicio", "Quem Somos", "Depoimentos"e "Suporte"|
|:---|:---|
| Requisitos Associados | RF 01 - Página Inicial |
| Objetivo do Teste | Navegação pelo menu lateral da página inicial nas opções "Inicio", "Quem Somos", "Depoimentos"e "Suporte" |
| Passos | <li>Estar na página inicial<li>Clicar nas opções "Inicio", "Quem Somos", "Depoimentos"e "Suporte"</li>
| Critérios de êxito | <li>Ser direcionado para as sessões correspondentes dentro da própria página inicial</li> |
| Responsável pela elaboração do caso de teste | João Henrique Andrade Leite|

<br>

| Caso de Teste | CT-001.1 - Página Inicial - Menu Lateral - Item "Agende Aqui"|
|:---|:---|
| Requisitos Associados | RF 01 - Página Inicial |
| Objetivo do Teste | Navegação pelo menu lateral da página inicial na opção "Agende Aqui" |
| Passos | <li>Estar na página inicial<li>Clicar na opção "Agende Aqui"</li>
| Critérios de êxito | <li>Ser direcionado para a página de agendamento pelo cliente onde encontrará o formulário de agendamento para preencher</li> |
| Responsável pela elaboração do caso de teste | João Henrique Andrade Leite|

<br>

<br>

| Caso de Teste | CT-001.2 - Página Inicial - Sessão Redes Sociais |
|:---|:---|
| Requisitos Associados | RF 01 - Página Inicial |
| Objetivo do Teste | Navegação pelos icones de redes sociais |
| Passos | <li>Estar na página inicial<li>Rolar até a sessão redes socias (final da página)<li>Clicar em qualquer um dos ícones |
| Critérios de êxito | <li> Ser direcionado para as páginas correspondentes aos ícones através da abertura de uma nova guia no navegador</li> |
| Responsável pela elaboração do caso de teste | João Henrique Andrade Leite|

<br>

| Caso de Teste | CT-002 - Criação de agendamento pelo cliente |
|:---|:---|
| Requisitos Associados | RF 02 - Agendamento de Serviço pelo Cliente |
| Objetivo do Teste | Agendamento do serviço online feito pelo cliente. |
| Passos | <li>Estar na página inicial<li>Clicar no botao de AGENDAR para entrar na página de agendamento pelo cliente <li>Preencher todas as informações necessárias para o agendamento<li>Clicar na opção "Agendar" 
| Critérios de êxito | <li>Preenchimento de todos os campos corretamente. <li>Clique no botão AGENDAR. <li> Exibição de mensagem de sucesso "Criado novo agendamento!" |
| Responsável pela elaboração do caso de teste | Rafael Santos Carvalho|
<br>

---

| Caso de Teste | CT-003 - Criação de agendamento pelo colaborador |
|:---|:---|
| Requisitos Associados | RF 03 - Agendamento de Serviço pelo Colaborador |
| Objetivo do Teste | Executar a criação de uma novo agendamento sem impedimentos. Levando em conta a possível e evidente possibilidade do atendente do estabelecimento ter de agendar um ou mais serviços presencialmente. |
| Passos | <li>Estar na tela inicial e logado como atendente <li>Clicar no ícone do menu lateral para abri-lo <li>Estando no menu lateral deve-se clicar no item "Agenda" que abrirá um dropdown de opções <li>Clicar na opção "Novo Agendamento" para abrir a tela do mesmo <li>Preencher todos os campos corretamente <li>Clicar no botão "AGENDAR" que está localizado ao final do formulário. 
| Critérios de êxito | <li>Preenchimento de todos os campos corretamente. <li>Clique no botão AGENDAR. <li> Exibição de mensagem de sucesso "Criado novo agendamento!" |
| Responsável pela elaboração do caso de teste | Paulo Henrique Sousa Carvalho|
<br>

<br>

| Caso de Teste | CT-004 - Preenchimento e envio da Solicitação de Suporte pelo cliente|
|:---|:---|
| Requisitos Associados | RF 04 - Solicitação de Suporte |
| Objetivo do Teste | Preenchimento e envio de solicitação de suporte pelo cliente através do preenchimento do formulário na página inícial |
| Passos | <li>Estar na página inicial<li>Rolar a página até a sessão "Contato com o Suporte (final da página)<li>Preencher todos os dados<li>clicar no botão "Enviar Mensagem"|
| Critérios de êxito | <li>Ao deixar algum campo vazio: Exbir a mensagem "! Preencha este campo" no campo vazio<li> Ao preencher todos os campos: Exibir a mensagem de alerta "Recebemos a sua solicitação e logo retornaremos o contato!" |
| Responsável pela elaboração do caso de teste | João Henrique Andrade Leite|

<br>


| Caso de Teste | CT-005 - Tratamento das solicitações para agendamento de serviços |
|:---|:---|
| Requisitos Associados | RF 05 - Tratamento das Solicitações de Serviço |
| Objetivo do Teste | Visualizar, avaliar, aceitar ou recusar perante a avaliação  |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor <li>Clicar no ícone do menu lateral para abri-lo <li>Estando no menu lateral deve-se clicar no item "Agenda" que abrirá um dropdown de opções <li>Clicar na opção "Tratar Solicitações" para abrir a tela do mesmo <li>Visualizando uma lista com as informações fornecidas pelo cliente, clicando em um item/nome da lista o sistema levará para a tela da solicitação <li>Avaliar os dados<li>Se caso possível realizar o serviço clicar no botão "ACEITAR" que está localizado ao final do formulário. <li>Caso não seja possível, o usuário(atendente ou gestor) deverá entrar em contato com o cliente, caso não haja uma concordância de horários ou quaisquer outros motivos, o usuário(atendente ou gestor) poderá editar ou recusar a solicitação clicando em nos botões "ALTERAR" e "RECUSAR" dispostos ao fim do formulário.
| Critérios de êxito | <li>Visualização em lista das solicitações pendentes. <li>Avaliar as informações, alterar, recusar ou aceitar a respectiva solicitação. <li>Exibição de mensagem de sucesso para as ações de Recusar: "Solicitação recusada!" e Aceitar: "Solicitação aceita!" |
| Responsável pela elaboração do caso de teste | Paulo Henrique Sousa Carvalho|
<br>


| Caso de Teste | CT-006 - Tratamento das mensagens enviadas à equipe de suporte |
|:---|:---|
| Requisitos Associados | RF 06 - Tratamento de Solicitações de Suporte |
| Objetivo do Teste | Visualizar, excluir ou responder as mensagens recebidas. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral para abri-lo. <li>Estando no menu lateral deve-se clicar no item "Suporte" para abrir a tela do mesmo. <li>Visualizando uma lista com os dados do cliente e sua respectiva mensagem, clicando em um item/nome da lista o sistema levará para a tela de tratamendo do suporte. <li>Avaliar os dados recebidos. <li>Para inserir a resposta que será enviada ao cliente é preciso clicar no botão "INSERIR RESPOSTA" localizado ao fim do formulário para assim habilitar o campo. <li>Para enviar a resposta digitada o usuário (atendente ou gestor) deve clicar no botão "ENVIAR" ao fim do formulário. <li>Caso haja um possível motivo para exclusão da mensagem, o usuário (atendente ou gestor) poderá excluir a mensagem clicando no botão "EXCLUIR" disposto ao fim do formulário. 
| Critérios de êxito | <li>Visualização em lista das mensagens que aguardam resposta. <li>Avaliar a mensagem, inserir resposta, excluir ou responder a respectiva mensagem. <li>Exibição de mensagem de sucesso para as ações de Excluir: "Mensagem excluída!" e Enviar: "Mensagem respondida!" |
| Responsável pela elaboração do caso de teste | Paulo Henrique Sousa Carvalho|
<br>


| Caso de Teste | CT-007 - Tratamento das tarefas que serão exibidas no calendário |
|:---|:---|
| Requisitos Associados | RF 07 - Visualização de Painel de Serviços Agendados |
| Objetivo do Teste | Visualizar as tarefas recebidas. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral e selecionar "Agenda". <li>Na página da agenda, as tarefas com seus respectivos horários devem ser exibidas. <li>Pesquisar pelos componentes disponíveis e testar seu funcionamento. |
| Responsável pela Elaboração do Caso de Teste | Gabriel Marchi Ziviani |
<br>


| Caso de Teste | CT-008 - Cadastro de Serviços Disponíveis |
|:---|:---|
| Requisitos Associados | RF 08 Tela de Cadastro de Serviços Disponíveis |
| Objetivo do Teste | Cadastrar novo serviço orferecido pelo estabelecimento|
| Passos | <li>Estar na tela inicial e logado como gestor. <li>Clicar no ícone do menu lateral e selecionar "Cadastros" e em seguida "Cadastro de Serviços". <li>Clicar na opção "Novo" para abrir os campos disponibilizados no mesmo. <li>Preencher todos os campos corretamente, com informações como nome, preço e categoria. <li>É necessário ter um crud, para inserir o novo registro de serviço, alterar, excluir ou salvar as alterações. <li>Deve ser possível pesquisar por um serviço pelo filtro (Parametro de busca).|
| Critérios de êxito | <li>Preenchimento de todos os campos corretamente. <li>Funcionamento do CRUD. <li> Exibição de registros na lista dinâmica " Lista de Serviços" |
| Responsável pela Elaboração do Caso de Teste | Felipe Costa Moreira |
<br>


| Caso de Teste | CT-009 - Cadastro de Usuários Colaboradores |
|:---|:---|
| Requisitos Associados | RF 09 - Tela de Cadastro de Usuários Colaboradores |
| Objetivo do Teste | Cadastrar um novo cliente no sistema. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral e selecionar "Cadastros" e em seguida "Clientes". <li>Na página de cadastro, devem aparecer os campos necessários para que um cliente seja inserido no sistema. <li>É necessário ter um crud, para inserir o novo registro, editar, excluir ou salvar as alterações. <li>Deve ter uma lista dinâmica para ser preenchida com os dados do cadastro. <li>Deve ser possível pesquisar por um cliente pelo filtro, através de seu nome.|
| Critérios de êxito | <li>Preenchimento de todos os campos corretamente. <li>Funcionamento do CRUD. <li> Exibição de registros na lista dinâmica | <li>Funcionamento correto do filtro.
| Responsável pela Elaboração do Caso de Teste | Thainá Crisóstomo Bernardes |
<br>


| Caso de Teste | CT-011 - Tratamento do Relatório |
|:---|:---|
| Requisitos Associados | RF 11 - Dashboard de performance |
| Objetivo do Teste | Visualização em dashboard quantitativo de todas as atividades existentes. |
| Passos | <li>Estar na tela inicial e logado como atendente ou gestor. <li>Clicar no ícone do menu lateral e selecionar "Relatório". <li>Na página do relatório, devem aparecer os números corretos sobre os agendamentos, solicitações e cancelamentos, além dos clientes que possuem solicitações em aberto. <li>Deve ser possível pesquisar por um cliente específico com uma solicitação em aberto. <li>Pesquisar pelos componentes disponíveis e testar seu funcionamento.|
| Responsável pela Elaboração do Caso de Teste | Gabriel Marchi Ziviani |
<br>

