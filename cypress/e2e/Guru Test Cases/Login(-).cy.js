const data = require ('../../fixtures/login.json') 
describe('Login page negative', () => {
    

it.skip('Valid ID invalid password ', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.getAndFillLogin(data.invalidPassword.UserID, data.invalidPassword.Password);
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click()
    cy.log('Login checked');
    cy.on('window:alert',(txt)=>{
        expect(txt).to.be.calledWithExactly('User or Password is not valid');
        cy.on('window:confirm', () => true)
    });
});


it.skip('Invalid ID and valid password', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.getAndFillLogin(data.invalidID.UserID, data.invalidID.Password)
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click()
    cy.log('Login checked');
    cy.on('window:alert',(txt)=>{
        expect(txt).to.be.calledWithExactly('User or Password is not valid');
        cy.on('window:confirm', () => true)
        });
    });
})