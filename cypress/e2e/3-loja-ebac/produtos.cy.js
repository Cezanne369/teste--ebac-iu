///<reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos-page";

produtosPage

describe('Funcionalidade: produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(6)').should('contain', 'Aero Daily Fitness Tee')
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProduto
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
       produtosPage.buscarProduto(produto) 
       cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zoltan Gym Tee')
        cy.get('.product_title').should('contain', 'Zoltan Gym Tee')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => { 
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

        })

        
        
    });


});