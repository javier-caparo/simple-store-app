describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')

      cy.contains('Products').click()
       // go to products
      cy.url().should('include', 'products')

      cy.get('table').contains('thead', 'Name').should('be.visible');
      cy.get('table').contains('thead', 'Price').should('be.visible');
      cy.get('table').contains('thead', 'Available').should('be.visible');
      
      

    })
  })