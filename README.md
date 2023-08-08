# *Teste Desenvolvimento Pontua Web*
> Esse é o teste para desenvolvedores na Pontua Web.<br>
> Sinta-se livre para editar a partir do título "Documentação da Aplicação".<br>
> Essa aplicação deve ser criada com base e utilização na api fornecida pela Marvel 
[https://developer.marvel.com/](https://developer.marvel.com/)<br>
---

> Qualquer dúvida poderá ser enviada por e-mail em tecnologia@pontua.com.br;<br>
> O prazo para finalização do teste deverá ser fornecido pelo RH;<br>
>***Não deixe de entregar sua aplicação*** mesmo que não esteja pronta ou perfeita;<br>
> A entrega do código deverá ser feita no GitHub e após o término, notificar o time atráves do e-mail tecnologia@pontua.com.br e gente@pontua.com.br.

---

>Link para layout no Figma: [layout]('https://www.figma.com/file/QFEzv3O4PWCzmvicy7e7sm/Teste-de-Desenvolvimento?node-id=0-1&t=D2fOR8TxhmRi52td-0')

---

## Página de Login

***Eu como usuário:***<br>
> Irei inserir o meu e-mail e senha de acesso para navegar para a tela de Agentes.

***Quando eu:***<br>
> Clicar no botão entrar, se sucesso deverá navegar para a próxima tela, caso ocorra erro, ver uma notificação;<br> 
> informando que o email ou senha está inválido.

### *Opcional*
> Quando eu clicar deverá redirecionar para a tela de esqueci minha senha.

### *Critérios de aceite*
>- Validação de e-mail e senha;
>- Navegar para próxima página;
>- Exibir mensagem de erro;
>- Ser o mais fiel possível ao layout do Figma.

---

## Página de seleção de Agente

***Eu como usuário:***<br>
> Irei selecionar o agente de minha escolha para acessar a página de perfil do agente.

***Quando eu:***<br>
> Clicar no campo de escolha deverá ser exibido uma lista com os nomes e foto do perfil de cada agente,
e ao clicar no botão entrar ser redirecionado para a tela de perfil do agente;

### *Critérios de aceite*
>- Se não houver agente selecionado mostrar o placeholder "Selecione um agente" conforme Figma;
>- Se já exitir um agente selecionado e eu clicar no campo de escolha, exibir a lista de agentes com uma flag no agente; 
>- já selecionado;
>- Ao clicar no botão entrar deverá navegar para a página de perfil do agente selecionado;
>- Ser o mais fiel possível ao layout do Figma.

---

## Página de Perfil de Agente

***Eu como usuário:***<br>
> Ao acessar a tela preciso ver a aba de visão geral com o descritivo sobre o agente, 
bem como seu nome e imagem;<br>
> Quero poder navegar nas abas de características, conforme layout do Figma;<br>
> Preciso visualizar o menu com as opções de acessar a Home, Perfil e sair do sistema.

***Quando eu:***<br>
> Clicar em uma das abas disponíveis daquele agente, preciso ver uma lista com as informações daquela aba.

### *Critérios de aceite*
>- Exibir as informações dos agentes;
>- As abas do perfil devem ser dinâmicas de acordo com cada agente;
>- Ao clicar nas abas mostrar as listagens com as informações relativas;
>- Exibir o menu lateral com link para Home, Perfil e Logout;
>- Ser o mais fiel possível ao layout do Figma;

---

## Página Home

***Eu como usuário:***<br>
> Desejo visualizar uma lista de cards com fotos de perfil e um resumo de personagens;<br>
> Quero poder navegar na lista pela paginação no final da página;<br>
> Quando eu clicar no campo de pesquisa e digitar o nome do agente, me mostre somente os personagens que contém aquele termo buscado.

***Quando eu:***<br>
> Clicar no card do personagem, deverei ser redirecionado para a página de perfil do personagem escolhido;<br>
> Fizer uma busca, o sistema deverá exibir na lista somente os personagens que contém aquele nome.<br>
> Clicar no botão "Próxima" deverá exibir os próximos cards da lista (próxima página);<br>
> Clicar no botão "Anterior" deverá exibir os cards anteriores da lista (página anterior);<br>
> Quando eu clicar no botão com número de páginação, exibir os cards relativos aquela página selecionada.<br>

### *Critérios de aceite*
>- Exibir resumo e foto de perfil;
>- Listagem mínima de 11 personagens
>- Exibição de no mínimo na primeira página
>- Exibição de no máximo 10 personagens por página;
>- Ao clicar em um card ser redirecionado à página de perfil do mesmo;
>- Ser o mais fiel possível ao layout do Figma;

---

># *Opcional* *
## Página Recuperação de Senha 

***Eu como usuário:***<br>
> Irei inserir o email que realizei o cadastro na plataforma no campo disponivel e, clicarei no botão enviar link.

***Quando eu:***<br>
> Clicar no botão de enviar link, deverá aparecer a mensagem de envio com sucesso.

### *Critérios de aceite*
>- Ser o mais fiel possível ao layout do Figma;

---
>Você pode escrever a documentação da sua aplicação a partir daqui...
---

# Documentação <br>"Marvel Api Pontua" ⏰

## Tópicos da Documentação

📌 [Deploy da Aplicação](#deploy-da-aplicação-)

📌 [Pré-requisitos](#pré-requisitos-)

📌 [Como rodar a Aplicação](#como-rodar-a-aplicação-)

📌 [Tecnologias usadas na Aplicação](#tecnologias-usadas-na-aplicação-)

📌 [Fluxo da Aplicação](#fluxo-da-aplicação-)

📌 [Testes Unitários ](#testes-unitários-)

📌 [Tarefas em aberto](#tarefas-em-aberto-)

📌 [Desenvolvedor](#desenvolvedor-)

📌 [Licença](#licença-)

---


# Deploy da Aplicação ☁️
Acesse aqui aplicação hospedada na plataforma Vercel
>https://marvel-api-pontua.vercel.app/login
---

# Pré-requisitos 📋
>Para rodar o projeto na sua máquina, é necessário ter o seguinte item instalados:
```
Versão Node >= 18
```

# Como rodar a Aplicação ▶️
No seu terminal, clone o projeto a partir da url do repositório:
```
git clone https://github.com/felipealvarenga01/marvel-api-pontua.git
```
Entre na pasta do projeto clonado:
```
cd pontua-api-marvel
```

Faça a instalação das dependencias do projeto usando as opções a seguir:

```
npm install
```


```
yarn install
```

Após a instalação das dependecias, execute a aplicação:

```
npm run dev
```

```
yarn run dev
```

O projeto será iniciado e estará disponível na URL: ```http://localhost:3001```

---

# Tecnologias usadas na Aplicação 📚


>Colar um print das tecnologias! e descreve-las
>

---

# Fluxo da Aplicação 🚀

>Ao realizar o acesso no link da aplicação ```http://localhost:3001```, o usuário será direcionado a tela de login, sendo necessário inserir usuário e senha para poder realizar seu primeiro acesso.
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/09076670-2df2-4fa4-9bf2-f542f6841376)

### Usuário para Login:

| E-mail                         | Password |
|--------------------------------|----------
| ```tecnologia@pontua.com.br``` | ```pontua@123```  |

>Feito o login, seremos direcionados para a página de seleção de agentes, aqui voce precisará escolher o seu personagem favorito e entrar em seu perfil!
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/580afeda-7c50-4367-b259-e2e8831b3df9)

>Ao clicar em enviar, escolhemos o nosso agente mais legal! Seremos direcionado para sua página de perfil, onde visualizaremos seu nome, descrição e avatar.
>> A tela de /Perfil conta com algumas "Abas": ```Visão Geral``` - ```Quadrinhos``` - ```Histórias``` - ```Séries``` - ```Eventos```, todas as abas são clicáveis e apresentam informações pertinentes relacionadas a ela e seu personagem escolhido
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/ccbaeaaa-830d-4835-905b-b10b53b2f28c)

>Botão Home: Direciona para a tela com todos os agentes disponibilizados pela api da Marvel, você poderá fazer uma busca de algum específico através do campo de busca localizado no topo da página, também poderá usar a paginação encontrada no rodapé da página para ver todos os agentes disponíveis. Todos eles sendo possível clicar para ser direcionado a suas informações existentes.
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/2442e145-e366-4d38-82f5-d044a70aa124)

>Botão Perfil: direciona você para a página do agente escolhido na tela após o login.
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/f1179876-6b1a-48c3-b038-4809d430a68a)

>Botão Sair: Você será direcionado para a página de login


## Testes Unitários ⚙️

### O que são?

>Os testes unitários tem como objetivo identificar falhas e quebras no código afim de garantir a qualidade do código. Tendo como função principal testar as funções presentes em sua aplicação e garantir que nao irá ocorrer problemas futuramente.

### Como executar?
>Neste projeto foi implementado os testes unitários a partir do framework "Vitest", onde é possível executá-lo de 2 formas:

```
npm run test
```
>O ```test``` irá realizar uma varredura na aplicação inteira, trazendo um retorno das informações sobre falhas e sucessos dos testes.

![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/c3e38495-50dc-4cc3-b2e1-9c2740106314)


```
npm run test:coverage
```
>O ```test:coverage``` irá realizar uma varredura na aplicação inteira, trazendo um retorno das informações sobre falhas e sucessos dos testes e criar um relatório com dashboard sobre os testes.
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/e7b5b34a-42b7-4c66-a3bd-8c4ccd8931b3)
![image](https://github.com/felipealvarenga01/marvel-api-pontua/assets/80013127/a77c4e93-90b1-4d90-9f7a-891db6567bb5)


```
npm run test:coverage "commons"
```
> Já a opção com o path, realiza o teste isoladamente na pasta em que foi escolhido, criando também um relatório com dashboard sobre os testes.

>>É possível visualizar todos os resultados através do dashboard gerado em ```HTML```, ao término da execução dos testes, acesse o seguinte caminho dentro do projeto:

```
pontua-api-marvel/coverage/Icov-report/index.html
```

## Tarefas em aberto

📝 Tarefa 1: Terminar os Testes Unitários

📝 Tarefa 2: Implantação de Testes Integrados

📝 Tarefa 3: Implantação de recurso de recuperação de senha

📝 Tarefa 4: Paginação na busca de agente

📝 Tarefa 5: Padronização de Temas e Cores


## Desenvolvedor 💻
 
Responsável pelo desenvolvimento do projeto

| [<img src="https://avatars.githubusercontent.com/u/80013127?v=4" width=115><br><sub>Felipe Alvarenga</sub>](https://github.com/felipealvarenga01) |
|:-------------------------------------------------------------------------------------------------------------------------------------------------:|

---
## Licença

The [MIT License]() (MIT)

Copyright ©️ 2023 - Api Marvel Pontua
