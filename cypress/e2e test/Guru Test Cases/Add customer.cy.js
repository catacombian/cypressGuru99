let maxName = 'oamPJUEhdZQwkldZSBkwtuNdLEqfZvGMgAUHLEPfMWGUBORQXT';
let maxAddress = 'echCqdombkpeqEKNvSOgngKqhUzfMxMWfwwMrUsdldkmhJuIPfPuoOysCYVxBuXldKaIrAGzhPDWTShMhRhKuNJcjKhagVCWvQct';
let maxEmail = 'EnPfVYOHOMOSWXJOKTdtivLmYGqVbNpHciSkXQJEzFbBsaBgZMnCNIthMChaURwU@xqXJmJicjNSAJmOSOQIYEybvfkqWfkctTlEVkoXcrwSxBDKffKAVlwcwVoRwQwtoLCTMHfnaBIVcIBYMnOYpZwOehBksSRiKtCHWmUBednMuHHeqKMigtwHONtsiVaZtKDprAARBDTlkHkTvsvYyHxWYoJyEmYyoVhwPtOlFqqvZZoUkIjlrFbFKeMehhVtcRdZUTKBacdTiVtKhzjkohVFKgiBuymTOEXASJBNWnLpAwMSmEIEBhINzVJym.la';
let maxTel = '123456789112';

Cypress.on('uncaught:exception', (err, runnable) => {
    // remove bootstrap error
    return false;
});

describe('Add Customer', () => {

    
it.only('Valid Customer, check ACTIVE status', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.get('a[href="index.html"]').eq(0).should('have.text', 'Guru99 telecom')
    cy.get('#done')
    .check('ACTIVE', {force: true})
    .should('be.checked')
    .and('have.css', 'background-color', 'rgb(246, 117, 94)')	
    cy.get('label[for="done"]').should('have.text', 'Done')
    cy.log('Done checked')
    cy.getFieldById('#fname', 'TestName')
    cy.log('First Name filled');
    cy.getFieldById('#lname', 'TLastName')
    cy.log('Last Name filled');
    cy.getFieldById('#email', 'test@mail.com')
    cy.log('Emeail entered');
    cy.get('textarea[name=addr]').type('text')
    cy.log('Address filled');
    cy.getFieldById('#telephoneno', 123123123)
    cy.log('Tel number filled');
    cy.get('input[type="submit"]')
    .should('have.css', 'background-color', 'rgb(246, 117, 94)')	
    .click()
    cy.url() // add link check
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
})

it('Valid Customer min value and Pending radio, Check customer status - INACTIVE', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.get('#pending')
    .check({force: true})
    cy.get('label[for="pending"]').should('have.text', 'Pending')
    cy.log('Pending checked')
    cy.getFieldById('#fname', 'S')
    cy.log('First Name filled');
    cy.getFieldById('#lname', 'B')
    cy.log('Last Name filled');
    cy.getFieldById('#email', 'ts@e.st')
    cy.log('Email entered');
    cy.get('textarea[name=addr]')
    .type('s')
    cy.log('Address filled');
    cy.getFieldById('#telephoneno', 1234457)
    cy.log('Tel number filled');
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
    cy.get('[type="radio"]').check('ACTIVE', {force: true})
    cy.getFieldById('#fname', maxName)
    cy.log('First Name filled');
    cy.getFieldById('#lname', maxName)
    cy.log('Last Name filled');
    cy.getFieldById('#email', maxEmail)
    cy.log('Email entered');
    cy.getFieldById('textarea[name=addr]', maxAddress)
    cy.log('Address filled');
    cy.getFieldById('#telephoneno', maxTel)
    cy.log('Tel number filled');
    cy.get('input[type="submit"]').click()
    cy.url().should('contain', 'access.php?uid')
    });


it.skip('Valid Customer Reset Button', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.get('[type="radio"]').check('ACTIVE', {force: true})
    cy.getFieldById('#fname', 'A')
    cy.log('First Name filled');
    cy.get('#message').should('not.be.visible')
    cy.log('Error has not appear');
    cy.getFieldById('#lname', 'B')
    cy.log('Last Name filled');
    cy.get('#message50').should('not.be.visible')
    cy.log('Error has not appear');
    cy.getFieldById('#email', 't@e.st')
    cy.log('Email entered');
    cy.get('#message9').should('not.be.visible')
    cy.log('Error has not appear');
    cy.get('textarea[name=addr]').type('t')
    cy.log('Address filled');
    cy.get('#message3').should('not.be.visible')
    cy.log('Error has not appear');
    cy.getFieldById('#telephoneno', 1234567)
    cy.log('Tel number filled');
    cy.get('#message7').should('not.be.visible')
    cy.log('Error has not appear');
    cy.get('input[type="reset"]')
    .click()
    cy.get('input[type="submit"]')
    .click() 
});// an error notification should appear   
// label should.have visability:hidden




    
 
