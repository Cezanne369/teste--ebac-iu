///<reference types="cypress"/>

describe('Funcionalidade: produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(1)
        .contains('Apollo Running Short')
        .click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(6)').should('contain', 'Apollo Running Short')
    });


});