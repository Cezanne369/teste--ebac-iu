///<reference types="cypress"/>

describe('funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
    
        cy.get('#username').type('saopaulojean74@gmail.com')
        cy.get('#password'). type ('teste 123') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saopaulojean74')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

       
        cy.get('#username').type('saopaulon74@gmail.com')
        cy.get('#password'). type ('teste 123') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('eve exibir uma mensagem de erro ao inserir senha inválido', () => {
 
        cy.get('#username').type('saopaulojean74@gmail.com')
        cy.get('#password'). type ('teste123') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail saopaulojean74@gmail.com está incorreta')

    });

})