describe('Password Reset Request Page', () => {
  it('should render password reset request form', () => {
    cy.visit('/password-reset');
    cy.get('input[type=email]').should('exist');
    cy.contains('button', /send reset link/i).should('exist');
  });
}); 