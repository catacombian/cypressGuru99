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

import { faker } from '@faker-js/faker';



Cypress.Commands.add('checkFieldsTitles', (id, value) => {
  cy.get(id).should('be.visible').type(value) // add tariff
  }); // enter data



Cypress.Commands.add('getAndFillCustomer', () => {
  let fname = faker.person.firstName()
  let lname = faker.person.fullName({ lastName:'' })
  let email = faker.internet.email()
  let address = faker.location.streetAddress()
  let phone = faker.phone.number('#########')
  cy.get('#fname').type(fname)
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

Cypress.Commands.add('getAndFillCustomerOption', (fname, lname, email, address, phone) => {

  cy.get('#fname').type(fname)
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

Cypress.Commands.add('getAndFillTariff', (five, three) => {
cy.get('#rental1').type(five),  
cy.log('Monthly Rental entered')
cy.get('#local_minutes').type(five) 
cy.log('Free Local Minutes entered')
cy.get('#inter_minutes').type(five)
cy.log('Free International Minutes entered')
cy.get('#sms_pack').type(five)
cy.log('Free SMS Pack entered')
cy.get('#minutes_charges').type(three)
cy.log('Local Per Minutes Charges entered')
cy.get('#inter_charges').type(three)
cy.log('International Per Minutes Charges entered')
cy.get('#sms_charges').type(three)
cy.log('sms_charges entered')
});

Cypress.Commands.add('getAndFillTariffrandom', () => {
  cy.get('#rental1').type(faker.number.int(99999)),  
  cy.log('Monthly Rental entered')
  cy.get('#local_minutes').type(faker.number.int(99999)) 
  cy.log('Free Local Minutes entered')
  cy.get('#inter_minutes').type(faker.number.int(99999))
  cy.log('Free International Minutes entered')
  cy.get('#sms_pack').type(faker.number.int(99999))
  cy.log('Free SMS Pack entered')
  cy.get('#minutes_charges').type(faker.number.int(999))
  cy.log('Local Per Minutes Charges entered')
  cy.get('#inter_charges').type(faker.number.int(999))
  cy.log('International Per Minutes Charges entered')
  cy.get('#sms_charges').type(faker.number.int(999))
  cy.log('sms_charges entered')
});


Cypress.Commands.add('expired', (month, year) => {
  cy.get('#card_nmuber').type(  faker.finance.creditCardNumber({ issuer: '52##############' })),  
  cy.log('Card entered')
  cy.get('#month').select(month)
  cy.log('Month selected')
  cy.get('#year').select(year)
  cy.log('Year selected')
  cy.get('#cvv_code').type(faker.finance.creditCardCVV())
  cy.log('CVV entered')
});

Cypress.Commands.add('getAndFillCardVisa', (month, year) => {
  cy.get('#card_nmuber').type(  faker.finance.creditCardNumber({ issuer: '52##############' })),  
  cy.log('Card entered')
  cy.get('#month').select(month)
  cy.log('Month selected')
  cy.get('#year').select(year)
  cy.log('Year selected')
  cy.get('#cvv_code').type(faker.finance.creditCardCVV())
  cy.log('CVV entered')
});

Cypress.Commands.add('getAndFillCardMasterCard', (month, year) => {
  cy.get('#card_nmuber').type(  faker.finance.creditCardNumber({ issuer: '430#############' })),  
  cy.log('Card entered')
  cy.get('#month').select(month)
  cy.log('Month selected')
  cy.get('#year').select(year)
  cy.log('Year selected')
  cy.get('#cvv_code').type(faker.finance.creditCardCVV())
  cy.log('CVV entered')
});

Cypress.Commands.add('getAndFillCardAmerican', (month, year, cvv) => {
  cy.get('#card_nmuber').type(  faker.finance.creditCardNumber({ issuer: '52#############' })),  
  cy.log('Card entered')
  cy.get('#month').select(month)
  cy.log('Month selected')
  cy.get('#year').select(year)
  cy.log('Year selected')
  cy.get('#cvv_code').type(cvv)
  cy.log('CVV entered')
});

Cypress.Commands.add('getAndFillCardDiscover', (month, year) => {
  cy.get('#card_nmuber').type(  faker.finance.creditCardNumber({ issuer: '62##############' })),  
  cy.log('Card entered')
  cy.get('#month').select(month)
  cy.log('Month selected')
  cy.get('#year').select(year)
  cy.log('Year selected')
  cy.get('#cvv_code').type(faker.finance.creditCardCVV())
  cy.log('CVV entered')
});



Cypress.Commands.add('getAndFillLogin', (id, password) => {
  cy.get(`input[name="uid"]`).should('be.visible').type(id),  
  cy.log('ID entered')
  cy.get('input[name="password"]').should('be.visible').type(password)
  cy.log('Passeord entered')
});

Cypress.Commands.add('getTextAreaById', (labelID, val) => {
  cy.get(labelID).type(val)
});


// Cypress.Commands.add('getTextAreaById', (userID_Alpha) => 
// function userID_Alpha() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   for (var i = 0; i < 10; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// })