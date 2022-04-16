# PROVA-TECNICA-QA-AUTOMACAO---CYPRESS
Prova técnica QA Automação - Raízen, na linguagem Cypress...

---------------------

Entendendo a estrutura do projeto "PROVA TECNICA QA AUTOMAÇÃO - CYPRESS":
- Na pasta "Integration", temos o "Produto no carrinho.spec.js", que apresenta os cenários de testes e importa a página "Base.js".
- Na pasta "Pages", temos o "Base.js", que apresenta as regras de negócio por trás dos cenários propostos da prova técnica. 
- Na pasta principal, temos o cypress.json, que apresenta a URL base do teste e as configurações de tamanho de página.
- Ainda na pasta principal, temos o package.json, que traz o json de configurações iniciais do Cypress, onde temos "scripts" - que colocamos um script de abertura dos testes, onde "npx cypress open" abre o cypress e sua tela com os testes e "npx cypress run" apenas roda os testes em background, num navegador "headless".

---------------------

Para configurar o cypress:
https://softdesign.com.br/blog/cypress_passo_a_passo_para_comecar_a_usar#:~:text=Iniciando%20um%20projeto%20com%20o,Ele%20criar%C3%A1%20o%20arquivo%20package.

Iniciando um projeto com o Cypress
Para um Projeto Cypress, antes de qualquer coisa, é preciso preparar o ambiente com:
- Node.JS
- Visual Studio Code (VS Code). 

Em seguida, no console, execute o comando: code. para abrir o projeto no VS Code.

Com o projeto, iremos abrir o terminal do VS Code e executar o comando: 

npm install cypress

Que é o comando para instalar o Cypress no nosso projeto. 

Em seguida, será possível visualizar a versão instalada do framework no arquivo package.json, e nele iremos adicionar o script: 
“cypress:open”:”cypress open”.

No terminal do VS Code, dentro da pasta do projeto baixado, execute o comando: 
npm run cypress:open. 
