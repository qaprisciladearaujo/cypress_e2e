/// <reference types="Cypress" />

Cypress.Commands.add('visitPage', (sufixo) => {
    cy.visit(`/${sufixo}`)
})

Cypress.on('uncaught:exception', () => {
    return false;
});