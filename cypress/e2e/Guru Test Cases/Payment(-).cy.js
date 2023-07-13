it('Payment page - invalid BLANK CVV', () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
    cy.get('#card_nmuber').type('4782517895739034')
    cy.log('Card entered');
    cy.get('#month').select(10);
    cy.log('Month checked');
    cy.get('#year').select('2024');
    cy.log('Year checked');
    cy.get('.button.special').should('be.visible').click({force:true})
    cy.url().should('contain', 'genearte_orderid.php?uid')   
  });
  
   
  it('Payment page - invalid ALL FIELDS UNFILLED', () => {
    cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
    cy.get('.button.special').should('be.visible').click({force:true})
    cy.get('#message1').should('have.text', 'Field must not be blank')
    cy.log('Card error message checked');
    cy.get('#message2').should('have.text', 'Field must not be blank')
    cy.log('CVV error message checked');
  });