import Base from '../pages/Base'

describe('Adicionando produto no carrinho e validando o mesmo', ()=>{
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })
    
    it('Usuario acessa o ecommerce', function(){
        Base.go()   
    })

    it('Usuário pesquisa o produto', function(){
        Base.search()
    })

    it('Usuário seleciona o produto e o tamanho', function(){
         Base.select()
    })

    it('Usuário adiciona o produto ao carrinho',function(){
        Base.addToCart()
    })

    it('Usuário valida os dados do carrinho',function(){
        Base.asserts()
    })
})