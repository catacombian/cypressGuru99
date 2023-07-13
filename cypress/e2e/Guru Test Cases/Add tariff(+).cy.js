const data = require ('../../fixtures/Tariff.json') 

describe('Add Tariff PLans', () => {

it.only('Valid tariff added', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
    cy.get('h3')
    .contains('Monthly Rental')
    cy.get('h3')
    .contains('Free Local Minutes')
    .parents().should('have.attr', 'style', 'text-align:center;')
    cy.get('h3')
    .contains('Free International Minutes')
    .parents().should('have.attr', 'style', 'text-align:center;')
    cy.get('h3')
    .contains('SMS Pack')
    .parents()
    .should('have.attr', 'style', 'text-align:center;')
    cy.get('h3')
    .contains('Local Per Minutes Charges')
    .parents()
    .should('have.attr', 'style', 'text-align:center;')
    cy.get('h3')
    .contains('International Per Minutes Charges')
    .parents()
    .should('have.attr', 'style', 'text-align:center;')
    cy.get('h3')
    .contains('SMS Per Charges')
    .parents()
    .should('have.attr', 'style', 'text-align:center;');
    cy.log('Field titles UI checked');
    cy.getAndFillTariff(data.Tariff.monthlyRental, data.Tariff.freeLocalMinutes, 
        data.Tariff.freeInternationalMinutes, 
        data.Tariff.freeSMS, data.Tariff.localPerMinutes, 
        data.Tariff.intPerMinutes, data.Tariff.smsPerCharges)   
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit')
    .and('have.css', 'background-color', 'rgb(246, 117, 94)')
    .click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});


it('Valid tariff min', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
        cy.getAndFillTariff('1', '1', '1', '1', '1', '1', '1') 
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});


it('Valid tariff max', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
        cy.getAndFillTariff('99999', '99999', '99999', '99999', '999', '999', '999') 
        cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});


it('Reset button check', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
    cy.getAndFillTariff('1', '1', '1', '1', '1', '1', '1') 
    cy.get('input[type="Reset"]').click()
    cy.get('input[type="submit"]').click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
        cy.on('window:confirm', () => true)
    });
});
})
