import ui from '../support/ui';

describe('Test TOC appearance on page run-for-the-first-time.html', () => {
  describe('Wider window', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.visit('run-for-the-first-time.html');
    });

    it('TOC menu is displayed', () => {
      cy.get(ui.tocRoot).should('be.visible');
    });
  });

  describe('More narrow window', () => {
    beforeEach(() => {
      cy.viewport('ipad-mini');
      cy.visit('run-for-the-first-time.html');
    });

    it('TOC menu is not displayed', () => {
      cy.get(ui.tocRoot).should('not.be', 'visible');
    });
  });
});
