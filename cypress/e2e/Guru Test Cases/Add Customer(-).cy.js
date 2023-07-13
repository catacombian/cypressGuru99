let maxName = 'oamPJUEhdZQwkldZSBkwtuNdLEqfZvGMgAUHLEPfMWGUBORQXT';
let maxAddress = 'echCqdombkpeqEKNvSOgngKqhUzfMxMWfwwMrUsdldkmhJuIPfPuoOysCYVxBuXldKaIrAGzhPDWTShMhRhKuNJcjKhagVCWvQct';
let maxEmail = 'EnPfVYOHOMOSWXJOKTdtivLmYGqVbNpHciSkXQJEzFbBsaBgZMnCNIthMChaURwU@xqXJmJicjNSAJmOSOQIYEybvfkqWfkctTlEVkoXcrwSxBDKffKAVlwcwVoRwQwtoLCTMHfnaBIVcIBYMnOYpZwOehBksSRiKtCHWmUBednMuHHeqKMigtwHONtsiVaZtKDprAARBDTlkHkTvsvYyHxWYoJyEmYyoVhwPtOlFqqvZZoUkIjlrFbFKeMehhVtcRdZUTKBacdTiVtKhzjkohVFKgiBuymTOEXASJBNWnLpAwMSmEIEBhINzVJym.la';
let maxTel = '123456789112';
const data = require ('../../fixtures/Customer.json') 

describe('Negative Add customer', () => {
it('Invalid Customer min-1, radio button not checked', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.getAndFillCustomer('t', 'e', 
        't@et', 's', 123456)
    cy.get('input[type="submit"]').click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields');
        }); // alert
    });
 
it('Invalid Customer max+1', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.getAndFillCustomer(maxName+'a', maxName+'a', 
        maxEmail+'a', maxAddress+'a', maxTel+'2');
    cy.get('#message').should('be.visible')
    cy.log('Error appears');
    cy.get('#message50').should('be.visible')
    cy.log('Lname Error appears');
    cy.get('#message9').should('be.visible')
    cy.log('Email Error appears');
    cy.get('#message3').should('be.visible')
    cy.log(' Address Error appears');
    cy.get('#message7').should('be.visible')
    cy.log('Number Error appears');
    cy.get('input[type="submit"]').click() 
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields')
    }); 
})

it('Empty fields error check', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php") 
    cy.get('#fname').click()  
    cy.log('First Name entered')
    cy.get('#lname').click()  
    cy.get('#email').click()  
    cy.get('textarea[name=addr]').click()  
    cy.get('#telephoneno').click()  
    cy.get('#fname').click()  
    cy.get('#message').should('be.visible')
    .and('have.text', 'Customer name must not be blank')
    cy.log('Error appears');
    cy.get('#message50').should('be.visible')
    .and('have.text', 'Customer name must not be blank')
    cy.log('Lname Error appears');
    cy.get('#message9').should('be.visible')
    .and('have.text', 'Email-ID must not be blank')
    cy.log('Email Error appears');
    cy.get('#message3').should('be.visible')
    .and('have.text', 'Address Field must not be blank')
    cy.log(' Address Error appears');
    cy.get('#message7').should('be.visible')
    .and('have.text', 'Mobile no must not be blank')
    cy.log('Number Error appears');
    cy.get('input[type="submit"]').click() 
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields')
    }); 
  })
})
