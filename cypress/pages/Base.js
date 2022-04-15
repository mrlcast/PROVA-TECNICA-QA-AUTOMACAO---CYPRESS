class Base {
    go(){
        cy.visit('/')
    }
    search() {
        cy.get('input[name="field-keywords"]').type("tenis adidas")
        cy.get('input[id="nav-search-submit-button"]').click()
    }

    select(){
        cy.get('[data-asin="B07ZHXCZPT"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()    
        cy.get('#native_dropdown_selected_size_name').select('12')
    }    
    
    addToCart(){
        cy.wait(2000)
        cy.get('#add-to-cart-button').click()
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    }

    asserts(){
        cy.get('h1').should('have.text', '\nCarrinho de compras\n')
        cy.get('.a-truncate-cut').should('have.text', 'adidas Originals Tênis masculino Top Ten, Branco/Giz Branco/Branco, 12')
        cy.get('.a-unordered-list > :nth-child(5)').should('have.text', '\n\nTamanho: \n\n\n12\n\n')
        cy.get(':nth-child(6) > .a-list-item > :nth-child(2)').should('have.text', '\nCalçado branco/giz branco/calçado branco\n')

    }
}

export default new Base;