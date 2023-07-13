it('Invalid tariff max+1', () => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
    cy.log('Page Opened');
    cy.getAndFillTariff('99999', '99999', '99999', '99999', '999', '999', '999') 
    cy.get('#rental1')
    .should('have.value', '99999')
    cy.log('Monthly Rental correct');
    cy.get('#local_minutes')
    .should('have.value', '99999')
    cy.log('Free local minutes correct');
    cy.get('#inter_minutes')
    .should('have.value', '99999')
    cy.log('Free int Minutes correct');
    cy.get('#sms_pack')
    .should('have.value', '99999')
    cy.log('SMS Pack correct');
    cy.get('#minutes_charges')
    .should('have.value', '999')
    cy.log('Local per minutes charges correct');
    cy.get('#inter_charges')
    .should('have.value', '999')
    cy.log('Int per minutes charges correct');
    cy.get('#sms_charges')
    .should('have.value', '999')
    cy.log('SMS per charges correct')
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
        cy.log('Monthly Rental error displayed');
    cy.get('#message3')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Free local minutes  error displayed');
    cy.get('#message4')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Free int Minutes  error displayed');
    cy.get('#message5')
    .should('have.text', 'Special characters are not allowed')
        cy.log('SMS Pack  error displayed');
    cy.get('#message6')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Local per minutes charges error displayed');
    cy.get('#message7')
    .should('have.text', 'Special characters are not allowed')
        cy.log('Int per minutes charge error displayeds');
    cy.get('#message8')
    .should('have.text', 'Special characters are not allowed')
        cy.log('SMS per charge error displayed');
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
        cy.log('Error displayed -Monthly Rental');
    cy.get('#message3')
    .should('have.text', 'Field cant be blank')
        cy.log('Error displayed -Free local minutes');
    cy.get('#message4')
    .should('have.text', 'Field cant be blan')
        cy.log('Error displayed -Free int Minutes');
    cy.get('#message5')
    .should('have.text', 'Field cant be blan')
        cy.log('Error displayed -SMS Pack');
    cy.get('#message6')
    .should('have.text', 'Field cant be blan')
        cy.log('Error displayed -Local per minutes charges');
    cy.get('#message7')
    .should('have.text', 'Field cant be blan')
        cy.log('Error displayed -Int per minutes charges');
    cy.get('#message8')
    .should('have.text', 'Field cant be blan')
    cy.get('input[type="submit"]')
    .click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields Correct Value');
    });
});
