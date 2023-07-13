it.only('Invalid tariff max+1', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
    cy.checkFieldsTitles('#rental1', 999990)
    .should('have.value', '99999')
        cy.log('Monthly Rental')
    cy.checkFieldsTitles('#local_minutes', 999990)
    .should('have.value', '99999')
        cy.log('Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', 999990)
    .should('have.value', '99999')
        cy.log('Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', 999990)
    .should('have.value', '99999')
        cy.log('SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', 9990)
    .should('have.value', '999')
        cy.log('Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', 9990)
    .should('have.value', '999')
        cy.log('Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', 9990)
    .should('have.value', '999')
        cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});

it('Invalid tariff min-1', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
    cy.checkFieldsTitles('#rental1', 0)
        cy.log('Monthly Rental')
    cy.checkFieldsTitles('#local_minutes', 0)
        cy.log('Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', 0)
        cy.log('Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', 0)
        cy.log('SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', 0)
        cy.log('Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', 0)
        cy.log('Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', 0)
        cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit').click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
     });
});


it('Invalid tariff added - Characters error', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened')
    cy.checkFieldsTitles('#rental1', 'ttt')
    cy.get('#message2')
    .should('have.text', 'Characters are not allowed');
        cy.log('Invalid Monthly Rental');
    cy.checkFieldsTitles('#local_minutes', 'ttt')
    cy.get('#message3')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', 'ttt')
    cy.get('#message4')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', 'ttt')
    cy.get('#message5')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', 'ttt')
    cy.get('#message6')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', 'ttt')
    cy.get('#message7')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', 'ttt')
    cy.get('#message8')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid SMS per charge');
    cy.get('input[type="submit"]').click()
    });


it('Invalid tariff added - Special Characters error', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened')
    cy.checkFieldsTitles('#rental1', '12.2')
    cy.get('#message2')
    .should('have.text', 'Special characters are not allowed');
        cy.log('Invalid Monthly Rental');
    cy.checkFieldsTitles('#local_minutes', '12.2')
    cy.get('#message3')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Free local minutes');
    cy.checkFieldsTitles('#inter_minutes', '12.2')
    cy.get('#message4')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Free int Minutes');
    cy.checkFieldsTitles('#sms_pack', '12.2')
    cy.get('#message5')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid SMS Pack');
    cy.checkFieldsTitles('#minutes_charges', '1.2')
    cy.get('#message6')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Local per minutes charges');
    cy.checkFieldsTitles('#inter_charges', '1.2')
    cy.get('#message7')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Int per minutes charges');
    cy.checkFieldsTitles('#sms_charges', '1.2')
    cy.get('#message8')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid SMS per charge');
    cy.get('input[type="submit"]')
    .click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
     });
});


it('Blank fields and alert check', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
    cy.get('input[type="submit"]')
    .click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
    });
});
