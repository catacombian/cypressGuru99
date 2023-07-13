it.skip('Invalid Customer min-1, radio button not checked', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.getFieldById('#email', 't@et')
    cy.log('Email entered');
    cy.getFieldById('#telephoneno', 123456)
    cy.log('Tel number filled');
    cy.get('input[type="submit"]').click()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.equal('please fill all fields');
        }); // alert
    });

it.skip('Invalid Customer max+1', () => {
    cy.visit("https://demo.guru99.com/telecom/addcustomer.php");
    cy.log('Page Add Customer opened')
    cy.getFieldById('#fname', 1234)
    cy.log('First Name filled');
    
    cy.getFieldById('#lname',  maxName + 'a')
    cy.log('Last Name filled');

    cy.getFieldById('#email', maxEmail + 's')
    cy.log('Email entered');
    
    cy.getFieldById('textarea[name=addr]', maxAddress)
    cy.log('Address filled');
    
    cy.getFieldById('#telephoneno', maxTel + '2')
    cy.log('Tel number filled');
    

    cy.get('#message').should('be.visible')
    cy.log('Error appears');


    // cy.get('#message50').should('be.visible')
    // cy.log('Lname Error appears');

    // cy.get('#message9').should('be.visible')
    // cy.log('Email Error appears');
    // cy.get('#message3').should('be.visible')
    // cy.log(' Address Error appears');

    // cy.get('#message7').should('be.visible')
    // cy.log('Number Error appears');

    cy.get('input[type="submit"]').click() 
    // get an error
    });