/// <reference types="Cypress" />
import {
    signInPages
} from '../../support/pages/signIn.pages'

describe("Feature: Sign In", function() {

    beforeEach(() => {
        cy.visitPage("")
    })

    context('Skip Sign In', () => {
        it('Clicar botão Skip Sign In', () => {
            signInPages.clicarBtnSkipSignIn()

        });
    });

    context('Sign Up', () => {
        it('Add Email for Sign Up', () => {
            signInPages.signUp()
        });
    });

    context('Sign In', () => {
        it('Clicar botão Sign In', () => {
            signInPages.clicarBtnSigIn()

        });
    });


})