import { faker } from '@faker-js/faker';
const data = require ('../../fixtures/Customer.json');
let maxEmail = 'EnPfVYOHOMOSWXJOKTdtivLmYGqVbNpHciSkXQJEzFbBsaBgZMnCNIthMChaURwU@xqXJmJicjNSAJmOSOQIYEybvfkqWfkctTlEVkoXcrwSxBDKffKAVlwcwVoRwQwtoLCTMHfnaBIVcIBYMnOYpZwOehBksSRiKtCHWmUBednMuHHeqKMigtwHONtsiVaZtKDprAARBDTlkHkTvsvYyHxWYoJyEmYyoVhwPtOlFqqvZZoUkIjlrFbFKeMehhVtcRdZUTKBacdTiVtKhzjkohVFKgiBuymTOEXASJBNWnLpAwMSmEIEBhINzVJym.la';
let maxName = faker.string.alpha(50)
let maxAddress = faker.string.alpha(50)
let maxTel = faker.string.numeric(12)


Cypress.on('uncaught:exception', (err, runnable) => {
    // remove bootstrap error
    return false;
});

    
it.only('Valid Customer, check ACTIVE status', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened');
    cy.get('a[href="index.html"]').eq(0).should('have.text', 'Guru99 telecom');
    cy.get('#done')
    .check('ACTIVE', {force: true})
    .should('be.checked') ;
    cy.get('label[for="done"]').within(($el) => {
        cy.window().then((win) => {
          const before = win.getComputedStyle($el[0], "::before");
          const background = before.getPropertyValue("background");
          expect(background).to.contains('rgb(246, 117, 94)');
        });
      });
      cy.log('Done checked')
      cy.getAndFillCustomer()
    cy.get('input[type="submit"]')
    .should('have.css', 'background-color', 'rgb(246, 117, 94)')	
    .click();
    cy.url().should('contain', 'telecom/access.php?') ;
    let customerId;
    cy.location('search').then(path => {
        customerId = path.split('=')[1];
        cy.log(customerId)
        cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()
        cy.get('p').should('have.text', 'ACTIVE')
        cy.log('Active status checked');
        cy.visit('https://demo.guru99.com/telecom/billing.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()
        cy.contains(customerId)
        cy.log('Customer ID checked');
    });  
});
 

it('Valid Customer min value and Pending radio, Check customer status - INACTIVE', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.get('#pending')
    .check({force: true})
    cy.get('label[for="pending"]').should('have.text', 'Pending')
    cy.get('label[for="pending"]').within(($el) => {
        cy.window().then((win) => {
          const before = win.getComputedStyle($el[0], "::before");
          const background = before.getPropertyValue("background");
          expect(background).to.contains('rgb(246, 117, 94)');
        });
      });
    cy.getAndFillCustomer()
    cy.get('input[type="submit"]')
    .click()
    let customerId;
    cy.location('search').then(path => {
        customerId = path.split('=')[1];
        cy.log(customerId)
        cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()
        cy.get('p').should('have.text', 'INACTIVE')
    });    
});


it('Valid Customer max value', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.getAndFillCustomerOption(maxName, maxName, 
        maxEmail, maxAddress, maxTel);
    cy.get('#message').should('not.be.visible')
    cy.log('Error has not appear');
    cy.get('#message50').should('not.be.visible')
    cy.log('Error has not appear');
    cy.getAndFillCustomer('#email', 't@e.st')
    cy.log('Email entered');
    cy.get('#message9').should('not.be.visible')
    cy.log('Error has not appear');
    cy.get('#message3').should('not.be.visible')
    cy.log('Error has not appear');
    cy.get('#message7').should('not.be.visible')
    cy.log('Error has not appear');    
    cy.get('input[type="submit"]').click()
    cy.url().should('contain', 'access.php?uid')
    });


it.skip('Valid Customer Reset Button', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.get('[type="radio"]').check('ACTIVE', {force: true})
    cy.getAndFillCustomer(data.Vcustomer.firstName, data.Vcustomer.lastName, 
        data.Vcustomer.email, data.Vcustomer.address, data.Vcustomer.mobile)
    cy.get('input[type="reset"]')
    .click()
    cy.get('input[type="submit"]')
    .click() 
});





    
 
