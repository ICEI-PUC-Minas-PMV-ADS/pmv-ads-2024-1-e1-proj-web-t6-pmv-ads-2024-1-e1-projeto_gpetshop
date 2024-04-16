# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Cliente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Qualquer pessoa que deseje agendar banho e/ou tosa para o seu bichinho de estimação;

</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

1. Acesso fácil a uma forma de agendar os serviços de banho e/ou tosa para seus pets, sem precisar ficar esperando uma chamada telefônica ser atendida ou a atendente responder uma conversa assíncrona no whatsapp;

2. Ser lembrada periodicamente sobre o momento de retorno do Pet para refazer o banho e/ou tosa de forma rápida somente escolhendo o dia e horário disponíveis;

3. Ter acesso a promoções e descontos exclusivos do Pet Shop;


</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Banhista </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissional que atua dando banho e fazendo as tosas dos pets;
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

1. Receber diretamente as solicitações de banho e/ou tosa através;


2. Ter acesso a um painel de agendamentos em que consiga visualizar todos os bichinhos agendados para o dia/semana, a fim de entender de forma rápida a possibilidade daquele novo agendamento, bem como o melhor horário para encaixar o pet;

3. Não sendo possível o agendamento, ter a possibilidade de encaminhar a solicitação para a atendente checar agenda dos dias seguintes, verificando a melhor opção e alinhando com o cliente;



</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03: Atendente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissional que atua no atendimento telefônico, on-line e pessoal aos donos dos pets. Trabalha também fazendo vendas e divulgando promoções a esses clientes;
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

1. Ter acesso a uma lista de clientes para fazer a gestão das notificações de retorno para os banhos e/ou tosas dos pets, bem como a divulgação de promoções e descontos;


2. Ter acesso a um painel de agendamentos em que consiga visualizar todos os bichinhos agendados para o dia/semana, a fim de entender de forma rápida a possibilidade, melhor dia e horário para agendamento dos retornos;

3. Ter acesso a um painel de agendamentos em que consiga visualizar todos os bichinhos agendados para o dia/semana, a fim de entender de forma rápida a possibilidade, melhor dia e horário para agendamento dos pets recusados pelos banhistas para o dia;




</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 04: Gestor </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Donos de estabelecimentos de banho e tosa que necessitam transformar o processo de agendamento do seu negócio e desejam gerir melhor quando o pet entra e sai e quantos clientes possui;
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

1. Tem o acesso máximo do petshop que está gerindo podendo além de ver as áreas que todo mundo do petshop vê ainda consegue entrar na área de gestão que tem os dados de clientes do petshop e agendamentos.


</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|"Eu como..." [QUEM]   | "...quero/desejo..." [O QUE] |"...para..." [PORQUE]                 |
|--------------------|---------------------------|----------------------------------|
| Como CLIENTE,      | desejo um atendimento mais rápido e flexível ao meu horário    | porque o meu dia é bastante corrido .  |
| Como CLIENTE,      | eu quero poder ver como estão cuidando do meu pet,             | para ficar mais seguro  e poder confiar mais em quem está cuidando dele. |
| Como CLIENTE,      | eu desejo ver quais serviços e horários estão disponíveis para o meu pet,| porque é difícil encontrar vagas em ótimos pet shops.|
| Como ATENDENTE,    | eu quero poder aceitar ou não as solicitações de agendamento,  | para que os atendimentos não tenham contratempos. |
| Como BANHISTA,     | eu quero visualizar meus horários | para poder organizar meu dia e meus compromissos. |
| Como BANHISTA,     | eu quero visualizar informações sobre os pets que atendo com frequência e de seus donos | para saber lidar corretamente com gostos, preferências e comportamento |
| Como GESTOR,       | eu gostaria de poder armazenar os dados dos meus clientes e seus pets, | para lhes oferecer posteriormente, descontos, brindes e serviços de maneira exclusiva.|
| Como GESTOR,       | quero poder enviar notificações aos meus clientes para lhes lembrar dos cuidados com seus pets e assim poder agendar um novo atendimento | porque esse lembrete irá agregar valor aos serviços prestados no meu estabelecimento.  |
| Como GESTOR,       | eu desejo visualizar todos os agendamentos abertos para aquele dia em questão, | para assim poder organizar melhor o funcionamento das atividades. |

## Requisitos do Projeto

Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID| Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | <strong>Cadastro de Serviços Disponíveis</strong> <p> <li>O sistema deve categorizar os serviços disponíveis, como banho, tosa, tratamentos especiais, etc.</li>  <li>OAlém disso, pode incluir uma breve descrição de cada serviço e seus benefícios.</li>                       | ALTA   | 
| RF-02 |  <strong>Agendamento de Atendimento </strong> <p> <li> O sistema deve permitir que o usuário escolha o tipo de serviço desejado e selecione a data e hora preferidas para o agendamento. <li>Deve incluir um calendário interativo para facilitar a seleção de datas. </li>| ALTA   | 
| RF-03 | <strong>Aceitar ou Recusar Agendamentos</strong> <p> <li> Além de aceitar ou recusar os agendamentos, o administrador deve poder adicionar notas ou comentários para informar os clientes sobre a decisão. </li>| ALTA   | 
| RF-04 |  <strong>Acompanhamento de Solicitações de Agendamento </strong> <p> <li> A aplicação deve fornecer aos usuários uma forma de receber notificações sobre o status de sua solicitação de agendamento, incluindo confirmações, recusas ou necessidade de mais informações.</li>  | ALTA   | 
| RF-05 |  <strong>Visualização e Alteração dos Agendamentos </strong> <p> <li> O administrador deve poder visualizar todos os agendamentos de forma clara e intuitiva, com opções para filtrar por data, tipo de serviço, etc.</li> <li> Também deve ser possível editar ou cancelar agendamentos, se necessário.</li>| ALTA   | 
| RF-06 | <strong>Cadastro de Usuários</strong> <li>Além das informações básicas de contato, o sistema deve permitir que os usuários cadastrem informações adicionais sobre seus animais de estimação, como raça, idade, histórico médico, etc. </li> | ALTA   | 
| RF-07 |  <strong>Lembretes Periódicos</strong>  <p> <li>A aplicação  deve permitir ao usuário receber lembretes periódicos sobre o momento de retorno do pet para refazer o banho e/ou tosa.</li> | BAIXA   | 
| RF-08 |  <strong>Acesso a Promoções e Descontos</strong> <p> <li>O sistema deve exibir de forma proeminente as promoções e descontos atuais, além de permitir que os usuários optem por receber notificações sobre ofertas especiais.</li> | MÉDIA   | 
| RF-09 |  <strong>Visualização de Painel de Serviços Agendados</strong> <p> <li>O painel de serviços agendados deve ser atualizado em tempo real e incluir informações relevantes, como nome do cliente, tipo de serviço, horário agendado, etc.</li> | BAIXA   | 


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  <strong>Ambiente acessível publicamente na Internet</strong> <p> <li> A aplicação interativa deve ser publicada em um ambiente acessível publicamente na Internet </li> | ALTA   |
| RNF-02 |  <strong>Ambiente responsivo</strong> <p> <li>A aplicação interativa deverá ser responsiva permitindo a visualização em um celular de forma adequada. </li> | ALTA   | 
| RNF-03 | <strong>Aplicação compatível com navegadores web</strong> <p> <li> A aplicação interativa deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).</li>  | ALTA   | 
| RNF-04 | <strong>Linguagem web</strong> <p> <li> A aplicação deve ser implementada em uma linguagem para aplicação Web. </li>  | ALTA   | 
| RNF-05 | <strong>Disponibilidade</strong> <p> <li> A aplicação deve estar disponível pelo menos 99% das 24 horas do dia, nos 07 dias da semana.</li>  | ALTA   | 
| RNF-06 | <strong>Segurança dos Dados</strong> <p> <li>Garantir que todas as informações dos clientes e dos animais de estimação sejam armazenadas de forma segura, com criptografia adequada e medidas de proteção contra acesso não autorizado.</li>  | ALTA   | 
| RNF-07 | <strong>Desempenho do Sistema</strong> <p> <li>O sistema deve ser otimizado para carregar rapidamente, mesmo durante períodos de pico de tráfego.</li> <li>Além disso, deve ser capaz de lidar com múltiplos usuários simultaneamente sem comprometer a velocidade ou a qualidade do serviço. </li>  | ALTA   | 
| RNF-08 | <strong>Interface Amigável</strong> <p> <li>A interface do usuário deve ser intuitiva e fácil de usar, mesmo para pessoas com pouca experiência em tecnologia. </li> <li>Deve ser acessível para usuários com deficiências visuais ou motoras, seguindo as diretrizes de acessibilidade da web. </li> | MÉDIA  | 


**Prioridade: Alta / Média / Baixa. 

