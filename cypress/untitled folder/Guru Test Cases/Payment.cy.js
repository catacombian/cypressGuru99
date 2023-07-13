/// <reference types="Cypress" />

describe('Payment', () => {

Cypress.on('uncaught:exception', (err, runnable) => {
    // remove bootstrap error
    return false;
});

it.skip('Check quantity and price', () => {

    const quantity = 'select[name="quantity"]'
    const checkingPrice = {
    '1': '$20',
    // '2': '$40',
    // '3': '$60',
    // '4': '$80',
    // '5': '$100',
    // '6': '$120',
    // '7': '$140',
    // '8': '$160',
    // '9': '$180'
}

    cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        for (const [qnt, price] of Object.entries(checkingPrice)) {
        cy.get(quantity).select(qnt)
        .get('h3')
        .should('have.text', 'Price: ' + price)
        }
        cy.get('.button.special').click()
});


    
    
it.skip('Check all links', () => {

    let links = {
      'Insurance Project': '/insurance/v1/index.php',
      'Agile Project': '/Agile_Project/Agi_V1/',
      'Bank Project': '/V1/index.php',
      'Security Project': '/Security/SEC_V1/index.php', 
      'Telecom Project': '/telecom/index.html',
      'Flash Movie Demo': '/test/flash-testing.html',
      'Radio & Checkbox Demo': '/test/radio.html',
      'Table Demo': '/test/table.html',
      'Accessing Link': '/test/link.html',
      'Ajax Demo': '/test/ajax.html',
      'Inside & Outside Block Level Tag': '/test/block.html',
      'Delete Customer Form': '/test/delete_customer.php',
      'Yahoo': '/test/yahoo.html',
      'Tooltip': '/test/tooltip.html',
      'File Upload': '/test/upload/',
      'Login': '/test/login.html',
      'Social Icon': '/test/social-icon.html',
      'Selenium Auto IT': '/test/autoit.html',
      'Selenium IDE Test': '/test/facebook.html',
      'Guru99 Demo Page': '/test/guru99home/',
      'Scrollbar Demo': '/test/guru99home/scrolling.html',
      'File Upload using Sikuli Demo': '/test/image_upload/',
      'Cookie Handling Demo': '/test/cookie/selenium_aut.php',
      'Drag and Drop Action': '/test/drag_drop.html',
      'Selenium DatePicker Demo': '/test/',
      'Page-1': '/seo/page-1',
      'Page-2': '/seo/page-2.html',
      'Page-3': '/seo/page-3.html',
      'Page-4': '/seo/page-4.html',
      'Page-5': '/seo/page-5.html',
      'Page-6': '/seo/page-6.html'
    };

    cy.visit('https://demo.guru99.com/payment-gateway/index.php');
    for (const [title, link] of Object.entries(links)) {
      cy.contains(title).click({force: true});
      cy.url().should('contain', link)
      cy.go('back')
    }
  
  });
}); 

it('Payment page - Valid VISA', () => {
  cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
  cy.get('#card_nmuber').should('be.visible')
  .should('have.attr', 'placeholder', 'Enter Your Card Number')
  .type('4512345678901234')
  cy.log('Card entered');

  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  for (const month of Object.values(months)) {
    cy.get('#month').select(month);
  }
  cy.log('Each month dropdown option checked');

  let years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', 
  '2024', '2025', '2026', '2027', '2028']
  for (const year of Object.values(years)) {
    cy.get('#year').select(year);
  }
  cy.log('Each year dropdown option checked');

  cy.get('#cvv_code').should('be.visible').should('have.attr', 'placeholder', 'CVV Code')
  .type('123')

  cy.get('.button.special').should('be.visible').click({force:true}) //get input type xubmit
  cy.url().should('contain', 'genearte_orderid.php?uid')   
});




it('Payment page - Valid MASTER CARD', () => {
  cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
  cy.get('#card_nmuber').type('42035178957390306')
  cy.log('Card entered');
  cy.get('#month').select(1);
  cy.log('Month checked');
  cy.get('#year').select('2023');
  cy.log('Year checked');
  cy.get('#cvv_code').type('748')
  cy.get('.button.special').should('be.visible').click({force:true})
  cy.url().should('contain', 'genearte_orderid.php?uid')   
});


it('Payment page - Valid  AMERICAN EXPRESS', () => {
  cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
  cy.get('#card_nmuber').type('3782517895739036') // 15-digit card
  cy.log('Card entered');
  cy.get('#month').select(4);
  cy.log('Month checked');
  cy.get('#year').select('2024');
  cy.log('Year checked');
  cy.get('#cvv_code').type('230')
  cy.get('.button.special').should('be.visible').click({force:true})
  cy.url().should('contain', 'genearte_orderid.php?uid')   
});


it('Payment page - Valid  DISCOVER CARD', () => {
  cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
  cy.get('#card_nmuber').type('3782517895739034')
  cy.log('Card entered');
  cy.get('#month').select(7);
  cy.log('Month checked');
  cy.get('#year').select('2024');
  cy.log('Year checked');
  cy.get('#cvv_code').type('829')
  cy.get('.button.special').should('be.visible').click({force:true})
  cy.url().should('contain', 'genearte_orderid.php?uid')   
});

it('Payment page - Valid  4-DIGIT CVV', () => {
  cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
  cy.get('#card_nmuber').type('4782517895739034')
  cy.log('Card entered');
  cy.get('#month').select(10);
  cy.log('Month checked');
  cy.get('#year').select('2024');
  cy.log('Year checked');
  cy.get('#cvv_code').type('1295')
  cy.get('.button.special').should('be.visible').click({force:true})
  cy.url().should('contain', 'genearte_orderid.php?uid')   
});

it('Payment page - Valid  4-DIGIT CVV', () => {
  cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
  cy.get('#card_nmuber').type('4782517895739034')
  cy.log('Card entered');
  cy.get('#month').select(10);
  cy.log('Month checked');
  cy.get('#year').select('2024');
  cy.log('Year checked');
  cy.get('#cvv_code').type('1295')
  cy.get('.button.special').should('be.visible').click({force:true})
  cy.url().should('contain', 'genearte_orderid.php?uid')   
});


