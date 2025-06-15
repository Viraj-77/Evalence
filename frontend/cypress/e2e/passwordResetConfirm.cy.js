describe('Password Reset Confirm Page', () => {
  it('should render password reset confirm form', () => {
    cy.visit('/password-reset-confirm');
    cy.get('input').should('have.length.at.least', 3); // token, new password, confirm
    cy.contains('button', /set password/i).should('exist');
  });
}); 