//As chamadas da classe de testes (spec.js) referenciam o base abaixo, onde constam os códigos do caminho dos testes do usuário
class Base {
    //Aqui o código manda um comando para visitar a URL base, que está apontada no cypress.json
    go(){
        cy.visit('/')
    }
    //Aqui o código digita o nome do produto e clica em pesquisar
    search() {
        cy.get('input[name="field-keywords"]').type("adidas Originals Tênis masculino Top Ten")
        cy.get('input[id="nav-search-submit-button"]').click()
    }
    //Aqui o código seleciona o produto e o tamanho dele
    select(){
        cy.get('[data-asin="B07ZHXP3NJ"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .s-image-padding > .rush-component > .a-link-normal > .a-section > .s-image').click()    
        cy.wait(4000)
        cy.get('#size_name_5 > .a-button-inner > .a-button-input').click()
    }    
    //Aqui o código adiciona ao carrinho e entra no carrinho
    addToCart(){
        cy.wait(2000)
        cy.get('#add-to-cart-button').click()
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    }
    //Aqui o código faz os asserts dos dados do produto
    asserts(){
        cy.get('h1').should('have.text', '\nCarrinho de compras\n')
        cy.get('.a-truncate-cut').should('have.text', 'adidas Originals Tênis masculino Top Ten, Branco/Giz Branco/Branco, 12')
        cy.get('.a-unordered-list > :nth-child(5)').should('have.text', '\n\nTamanho: \n\n\n12\n\n')
        cy.get(':nth-child(6) > .a-list-item > :nth-child(2)').should('have.text', '\nCalçado branco/giz branco/calçado branco\n')

    }
}
//Aqui é exportado o base, que será referenciado 
export default new Base;