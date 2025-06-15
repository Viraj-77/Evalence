describe('Register Page', () => {
  it('should render registration form', () => {
    cy.visit('/register');
    cy.get('input[type=email]').should('exist');
    cy.get('input[type=password]').should('have.length.at.least', 2); // password + confirm
    cy.contains('button', /register/i).should('exist');
  });
}); 