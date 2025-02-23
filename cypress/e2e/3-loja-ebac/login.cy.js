///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json') 

describe('funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('deve exibir uma mensagem de erro ao inserir senha inválido', () => {
 
        cy.get('#username').type('saopaulojean74@gmail.com')
        cy.get('#password'). type ('teste123') 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail saopaulojean74@gmail.com está incorreta')

    });

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password'). type (perfil.senha) 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saopaulojean74')

    });

    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password'). type (dados.senha , { log: false}) 
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saopaulojean74')
        })
    });
    it.only('Deve fazer o Login com sucesso - usando comandos customizados', () => {
        cy.login('saopaulojean74@gmail.com', 'teste 123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, saopaulojean74')
    });
    })
