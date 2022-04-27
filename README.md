# PROVA-TECNICA-QA-AUTOMACAO---CYPRESS
Prova técnica QA Automação - Raízen, na linguagem Cypress...

---------------------

Entendendo a estrutura do projeto "PROVA TECNICA QA AUTOMAÇÃO - CYPRESS":
- Na pasta "Integration", temos o "Produto no carrinho.spec.js", que apresenta os cenários de testes e importa a página "Base.js".
- Na pasta "Pages", temos o "Base.js", que apresenta as regras de negócio por trás dos cenários propostos da prova técnica. 
- Na pasta principal, temos o cypress.json, que apresenta a URL base do teste e as configurações de tamanho de página.
- Ainda na pasta principal, temos o package.json, que traz o json de configurações iniciais do Cypress, onde temos "scripts" - que colocamos um script de abertura dos testes, onde "npx cypress open" abre o cypress e sua tela com os testes e "npx cypress run" apenas roda os testes em background, num navegador "headless".

---------------------

Para rodar o projeto:
- Instalar o Node.JS no site oficial deles (https://nodejs.org/en/download/);
- Instalar o Cmder (com git for windows já integrado) ou prompt de sua preferência - para chamar o Cypress via comando; 
- VSCode ou outra ferramenta de preferência para análise do código.

No terminal do Cmder, clonar o projeto:
- git clone https://github.com/mrlcast/PROVA-TECNICA-QA-AUTOMACAO---CYPRESS.git

Depois, execute o comando: 
- "npx cypress open" para abrir a interface do Cypress ou: 
- "npx cypress run" para que o cypress rode os testes em background. 

---------------------

Site para configuração do cypress:
https://softdesign.com.br/blog/cypress_passo_a_passo_para_comecar_a_usar#:~:text=Iniciando%20um%20projeto%20com%20o,Ele%20criar%C3%A1%20o%20arquivo%20package.
