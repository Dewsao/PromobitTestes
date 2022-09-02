/// <reference types="cypress"/>

beforeEach(() => {
    //visitar site
     cy.visit('https://www.promobit.com.br/')
     cy.viewport(1100, 600)
   })
 
   describe('testesLogin', () => {
    it('loginValido', () => {
       cy.xpath("//button[.='Entre ou Cadastre-se']").click()
       cy.contains('Faça o Login').click()
       cy.get('#E-mail').type('wendell.amaral@promobit.com.br')
       cy.get('#Senha').type('Promobit@1')
       cy.xpath("//button[.='Entrar']").click()
       cy.xpath("//button[.='Meu Perfil']").should('be.visible')

     })
     it('loginInvalido', () => {
        cy.xpath("//button[.='Entre ou Cadastre-se']").click()
        cy.contains('Faça o Login').click()
        cy.get('#E-mail').type('wendelll.amaral@promobit.com.br')
        cy.get('#Senha').type('Promobit@1')
        cy.xpath("//button[.='Entrar']").click()
        cy.xpath("//div[.='Senha ou e-mail inválido']",{timeout: 5000})
        .should('contain','Senha ou e-mail inválido')
 
      })
      it('senhaInvalida', () => {
        cy.xpath("//button[.='Entre ou Cadastre-se']").click()
        cy.contains('Faça o Login').click()
        cy.get('#E-mail').type('wendell.amaral@promobit.com.br')
        cy.get('#Senha').type('Promobit@1')
        cy.xpath("//button[.='Entrar']").click()
        cy.xpath("//div[.='Senha ou e-mail inválido']",{timeout: 5000})
        .should('contain','Senha ou e-mail inválido')
 
      })
      
  })