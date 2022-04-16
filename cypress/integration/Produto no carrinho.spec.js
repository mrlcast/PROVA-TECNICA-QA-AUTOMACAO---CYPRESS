//Aqui é importado o base, onde constam as regras do negócio
import Base from '../pages/Base'

//Essa é a descrição do objetivo do código
describe('Adicionando produto no carrinho e validando o mesmo', ()=>{  
    //Trecho para evitar que erros fora do contexto falhem o teste
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })
    
    //As regras de negócio estão encapsuladas no Base, que será chamado em cada uma das suítes de testes
    //Acesso do usuário ao e-commerce Amazon
    it('Usuario acessa o e-commerce', function(){
        Base.go()   
    })
    //Pesquisa do usuário pelo produto escolhido
    it('Usuário pesquisa o produto', function(){
        Base.search()
    })
    //Seleção do produto e tamanho
    it('Usuário seleciona o produto e o tamanho', function(){
         Base.select()
    })
    //Adicionando o produto ao carrinho e indo à página do carrinho
    it('Usuário adiciona o produto ao carrinho',function(){
        Base.addToCart()
    })
    //Validações dos dados do produto selecionado
    it('Usuário valida os dados do carrinho',function(){
        Base.asserts()
    })
})