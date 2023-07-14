const data = require ('../../fixtures/login.json') 
describe('Login page', () => {
    

it.only('Valid Ligin', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.get('td').eq(5).should('have.text', 'UserID')
    cy.get('td').eq(7).should('have.text', 'Password')
    cy.get('.barone').eq(0).should('have.text', 'Guru99 Bank')
    cy.get('.barone').eq(1).should('have.text', 'Access')
    .parents()
    cy.getAndFillLogin(data.user1.UserID, data.user1.Password)
    cy.get('input[name="btnReset"]')
        .should('have.value', "RESET")
        .and('have.css', 'background-color', 'rgb(248, 248, 255)')
    cy.log('Reset checked');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN")
        .and('have.css', 'background-color', 'rgb(248, 248, 255)')
        .click()
    cy.log('Login checked');
    cy.url()
        .should('contain', 'Agile_Project/Agi_V1/customer/Customerhomepage.php');
    cy.get('.heading3')
        .should('contain.text', `Welcome To Customer's Page of Guru99 Bank`)
    });
});
 

it('Valid Login and Reset', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.getAndFillLogin(data.user1.UserID, data.user1.Password)
    cy.get('input[name="btnReset"]')
        .should('have.value', "RESET")
        .click()
    cy.log('Reset checked');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN")
        .click()
    cy.log('Login checked');
    cy.on('window:alert',(txt)=>{
            expect(txt).to.equal('User or Password is not valid');
        cy.log('alert checked');
    }); 
})