describe('E-shop Test - Automation Exercise', () => {
  it('Mal by vyhľadať produkt a pridať ho do košíka', () => {

    cy.visit('https://automationexercise.com');

    cy.get('a[href="/products"]').click();

    cy.get('#search_product').type('Premium Polo T-Shirts');
    cy.get('#submit_search').click();

    cy.get('.add-to-cart').first().click();

    cy.get('u').contains('View Cart').click();

    cy.get('#cart_info_table').should('contain', 'Premium Polo T-Shirts');
  });
});