describe('Profile Page', () => {
  it('should redirect to login if not authenticated', () => {
    cy.visit('/profile');
    cy.url().should('include', '/login');
  });
}); 