describe('Test TOC behavior', () => {
  it('Test default location', () => {
    cy.visit('');
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/help/idea/getting-started.html');
    });
  });

  it('Failed test', () => {
    cy.get('[data-test="header-hamburger-1"]');
  });
});
