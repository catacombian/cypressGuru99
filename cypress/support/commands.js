// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('checkFieldsTitles', (id, value) => {
  cy.get(id).should('be.visible').type(value) // add tariff
  }); // enter data


Cypress.Commands.add('getAndFillCustomer', (fname, lname, email, address, phone) => {
  cy.get('#fname').type(fname),  
  cy.log('First Name entered')
  cy.get('#lname').type(lname) 
  cy.log('Last Name entered')
  cy.get('#email').type(email)
  cy.log('Email entered')
  cy.get('textarea[name=addr]').type(address)
  cy.log('Address entered')
  cy.get('#telephoneno').type(phone)
  cy.log('Phone entered')
});


Cypress.Commands.add('getAndFillTariff', (monthlyRental, freeLocalMinutes, freeInternationalMinutes, 
  freeSMS, localPerMinutes, intPerMinutes, smsPerCharges) => {
  cy.get('#rental1').type(monthlyRental),  
  cy.log('Monthly Rental entered')
  cy.get('#local_minutes').type(freeLocalMinutes) 
  cy.log('Free Local Minutes entered')
  cy.get('#inter_minutes').type(freeInternationalMinutes)
  cy.log('Free International Minutes entered')
  cy.get('#sms_pack').type(freeSMS)
  cy.log('Free SMS Pack entered')
  cy.get('#minutes_charges').type(localPerMinutes)
  cy.log('Local Per Minutes Charges entered')
  cy.get('#inter_charges').type(intPerMinutes)
  cy.log('International Per Minutes Charges entered')
  cy.get('#sms_charges').type(smsPerCharges)
  cy.log('sms_charges entered')
});

Cypress.Commands.add('getAndFillCard', (number, month, year, cvv) => {
  cy.get('#card_nmuber').type(number),  
  cy.log('Card entered')
  cy.get('#month').select(month)
  cy.log('Month selected')
  cy.get('#year').select(year)
  cy.log('Year selected')
  cy.get('#cvv_code').type(cvv)
  cy.log('CVV entered')

});

Cypress.Commands.add('getTextAreaById', (labelID, val) => {
  cy.get(labelID).type(val)
});