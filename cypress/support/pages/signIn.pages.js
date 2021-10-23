/// <reference types="Cypress" />

import { signInElements } from '../elements/signIn.elements'

class SignInPages {

    typeEmailSignUp() {
        cy.get(signInElements.inputEmail()).should('be.visible').type("qaprisciladearaujo@gmail.com")
    }

    signUp() {
        this.typeEmailSignUp()
        cy.get(signInElements.btnRegister()).should('be.visible').click()
        cy.url().should('include', '/Register.html')
    }

    clicarBtnSigIn() {
        cy.get(signInElements.btnSignIn()).should('be.visible').click()
        cy.url().should('include', '/SignIn.html')
    }

    clicarBtnSkipSignIn() {
        cy.get(signInElements.btnSkipSignIn()).should('be.visible').click()
        cy.url().should('include', '/Register.html')
    }

}

export const signInPages = new SignInPages()