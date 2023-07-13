// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.Commands.add('checkFieldsTitles', (id, value) => {
    cy.get(id).type(value)
    });


Cypress.Commands.add('getFieldById', (fieldID, val) => {
    cy.get(fieldID).type(val)
});

Cypress.Commands.add('getTextAreaById', (labelID, val) => {
    cy.get(labelID).type(val)
});

//     cy.get('#fname')
//     // cy.get('input').should('have.id', fieldId)
// Cypress.Commands.add('getidField', (idField) => {
//     cy.get('input').contains('id', idField)
//     })