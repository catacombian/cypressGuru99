it('Invalid tariff max+1', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
    cy.log('Page Opened');
    cy.getAndFillTariff('99999', '99999', '99999', '99999', '999', '999', '999') 
    cy.get('#rental1')
    .should('have.value', '99999')
    cy.log('Monthly Rental');
    cy.get('#local_minutes')
    .should('have.value', '99999')
    cy.log('Free local minutes');
    cy.get('#inter_minutes')
    .should('have.value', '99999')
    cy.log('Free int Minutes');
    cy.get('#sms_pack')
    .should('have.value', '99999')
    cy.log('SMS Pack');
    cy.get('#minutes_charges')
    .should('have.value', '999')
    cy.log('Local per minutes charges');
    cy.get('#inter_charges')
    .should('have.value', '999')
    cy.log('Int per minutes charges');
    cy.get('#sms_charges')
    .should('have.value', '999')
    cy.log('SMS per charges')
    cy.get('input[type="submit')
    .should('have.attr', 'value', 'submit')
    cy.get('h2')
    .should('have.text', 'Congratulation you add Tariff Plan')
});
 
it.skip('Invalid tariff min-1', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened');
        cy.getAndFillTariff('0', '0', '0', '0', '0', '0', '0') 
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
    cy.getAndFillTariff('ttt', 'ttt', 'ttt', 'ttt', 'ttt', 'ttt', 'ttt') 
    cy.get('#message2')
    .should('have.text', 'Characters are not allowed');
        cy.log('Invalid Monthly Rental');
    cy.get('#message3')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Free local minutes');
    cy.get('#message4')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Free int Minutes');
    cy.get('#message5')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid SMS Pack');
    cy.get('#message6')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Local per minutes charges');
    cy.get('#message7')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid Int per minutes charges');
    cy.get('#message8')
    .should('have.text', 'Characters are not allowed')
        cy.log('Invalid SMS per charge');
    cy.get('input[type="submit"]').click()
    });


it.only('Invalid tariff added - Special Characters error', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Page Opened')
        cy.getAndFillTariff('1.1', '1.1', '1.1', '1.1', '1.1', '1.1', '1.1')     
    cy.get('#message2')
    .should('have.text', 'Special characters are not allowed');
        cy.log('Invalid Monthly Rental');
    cy.get('#message3')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Free local minutes');
    cy.get('#message4')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Free int Minutes');
    cy.get('#message5')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid SMS Pack');
    cy.get('#message6')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Local per minutes charges');
    cy.get('#message7')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Invalid Int per minutes charges');
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
    cy.get('#rental1').click();
    cy.get('#local_minutes').click();
    cy.get('#inter_minutes').click();
    cy.get('#sms_pack').click();
    cy.get('#minutes_charges').click();
    cy.get('#inter_charges').click();
    cy.get('#sms_charges').click();
    cy.get('#rental1').click();
    cy.get('#message2')
    .should('have.text', 'Field cant be blank');
        cy.log('Invalid Monthly Rental');
    cy.get('#message3')
    .should('have.text', 'Field cant be blank')
        cy.log('Invalid Free local minutes');
    cy.get('#message4')
    .should('have.text', 'Field cant be blan')
        cy.log('Invalid Free int Minutes');
    cy.get('#message5')
    .should('have.text', 'Field cant be blan')
        cy.log('Invalid SMS Pack');
    cy.get('#message6')
    .should('have.text', 'Field cant be blan')
        cy.log('Invalid Local per minutes charges');
    cy.get('#message7')
    .should('have.text', 'Field cant be blan')
        cy.log('Invalid Int per minutes charges');
    cy.get('#message8')
    .should('have.text', 'Field cant be blan')
    cy.get('input[type="submit"]')
    .click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
    });
});
