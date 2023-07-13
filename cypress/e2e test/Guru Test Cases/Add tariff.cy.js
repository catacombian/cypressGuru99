describe('Add Tariff PLans', () => {

it('Valid tariff added', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
    cy.checkFieldsTitles('#rental1', 123)
    cy.get('h3')
    .contains('Monthly Rental')
        cy.log('Monthly Rental')
    cy.checkFieldsTitles('#local_minutes', 123)
    cy.get('h3')
    .contains('Free Local Minutes')
    .parents().should('have.attr', 'style', 'text-align:center;')
        cy.log('Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', 123)
    cy.get('h3')
    .contains('Free International Minutes')
    .parents().should('have.attr', 'style', 'text-align:center;')
        cy.log('Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', 123)
    cy.get('h3')
    .contains('SMS Pack')
    .parents()
    .should('have.attr', 'style', 'text-align:center;')
        cy.log('SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', 123)
    cy.get('h3')
    .contains('Local Per Minutes Charges')
    .parents()
    .should('have.attr', 'style', 'text-align:center;')
        cy.log('Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', 123)
    cy.get('h3')
    .contains('International Per Minutes Charges')
    .parents()
    .should('have.attr', 'style', 'text-align:center;')
        cy.log('Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', 123)
    cy.get('h3')
    .contains('SMS Per Charges')
    .parents()
    .should('have.attr', 'style', 'text-align:center;');
        cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});


it('Valid tariff min', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
    cy.checkFieldsTitles('#rental1', 1)
        cy.log('Monthly Rental')
    cy.checkFieldsTitles('#local_minutes', 1)
        cy.log('Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', 1)
        cy.log('Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', 1)
        cy.log('SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', 1)
        cy.log('Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', 1)
        cy.log('Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', 1)
        cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});


it('Valid tariff max', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
    cy.checkFieldsTitles('#rental1', 99999)
        cy.log('Monthly Rental')
    cy.checkFieldsTitles('#local_minutes', 99999)
        cy.log('Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', 99999)
        cy.log('Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', 99999)
        cy.log('SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', 999)
        cy.log('Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', 999)
        cy.log('Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', 999)
        cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});


it('Reset button check', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
    cy.checkFieldsTitles('input[id="rental1"]', 123)
    cy.checkFieldsTitles('input[id="local_minutes"]', 123)
    cy.checkFieldsTitles('input[id="inter_minutes"]', 123)
    cy.checkFieldsTitles('input[id="sms_pack"]', 123)
    cy.checkFieldsTitles('input[id="minutes_charges"]', 123)
    cy.checkFieldsTitles('input[id="inter_charges"]', 123)
    cy.checkFieldsTitles('input[id="sms_charges"]', 123)
    cy.get('input[type="Reset"]').click()
    cy.get('input[type="submit"]').click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
        cy.on('window:confirm', () => true)
    });
});
})
