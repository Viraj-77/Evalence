describe('Login Page', () => {
  it('should render login form', () => {
    cy.visit('/login');
    cy.get('input[type=email]').should('exist');
    cy.get('input[type=password]').should('exist');
    cy.contains('button', /sign in/i).should('exist');
  });
}); 