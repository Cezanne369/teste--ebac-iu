///<reference types="cypress"/>

describe('funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('saopaulojean74@gmail.com')
        cy.get('#password'). type ('teste 123') 
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saopaulojean74')

    })
})