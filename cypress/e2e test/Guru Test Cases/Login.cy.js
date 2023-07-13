describe('Login page', () => {
    

it('Valid Ligin', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.get('td').eq(5).should('have.text', 'UserID')
    cy.get(`input[name="uid"]`).should('be.visible').type('1303')
        cy.log('UserID checked');
    cy.get('td').eq(7).should('have.text', 'Password')
    cy.get('input[name="password"]') .should('be.visible').type('Guru99')
        cy.log('Password checked');
    cy.get('input[name="btnReset"]')
        .should('have.value', "RESET")
        cy.log('Reset checked');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click()
        cy.log('Login checked');
    cy.url().contains('Agile_Project/Agi_V1/customer/Customerhomepage.php')
    cy.get('.heading3').should('contain.text', `Welcome To Customer's Page of Guru99 Bank`)
    });
});


it('Valid Ligin and Reset', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.get(`input[name="uid"]`).should('be.visible').type('1303')
        cy.log('UserID checked');
    cy.get('input[name="password"]') .should('be.visible').type('Guru99')
        cy.log('Password checked');
    cy.get('input[name="btnReset"]')
        .should('have.value', "RESET").click()
        cy.log('Reset checked');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click()
        cy.log('Login checked');
    // cy.on('window:alert',(txt)=>{
    //         expect(txt).to.equal('User or Password is not valid');
    //     cy.log('alert checked');
});

it('Valid ID invalid password ', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.get(`input[name="uid"]`).type('1303')
        cy.log('UserID checked');
    cy.get('input[name="password"]') .should('be.visible').type('Guru999')
        cy.log('Password checked');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click()
        cy.log('Login checked');

});


it.only('Invalid ID and valid passeord', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.get(`input[name="uid"]`).type('13039')
        cy.log('UserID checked');
    cy.get('input[name="password"]').type('Guru99')
        cy.log('Password checked');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click()
        cy.log('Login checked');
});


it('Inalid Ligin', () => {
    cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/index.php");
    cy.get(`input[name="uid"]`)
        .should('be.visible').type('111')
        cy.log('Invalid login entered');
    cy.get('input[name="password"]')
        .should('be.visible').type('Guru')
        cy.log('Invalid password entered');
    cy.get('input[name="btnLogin"]')
        .should('have.value', "LOGIN").click();

    cy.on('window:alert',(txt)=>{
        expect(txt).to.be.calledWithExactly('User or Password is not valid');
        cy.on('window:confirm', () => true)
    });
});

