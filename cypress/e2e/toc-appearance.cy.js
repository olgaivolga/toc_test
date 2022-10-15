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

    it('TOC menu does not disappear after item is chosen', () => {
      cy.get(ui.tocListItem('Installation guide')).click();
      cy.get(ui.tocArticleTitle).should('have.text', 'Install IntelliJ\u00a0IDEA');
      cy.get(ui.tocRoot).should('be.visible');
    });

    it('TOC item is a word 50 characters long', () => {
      cy.get(ui.tocListItem('Accessibility')).then(($element) => {
        // eslint-disable-next-line no-param-reassign
        $element[0].textContent = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        cy.compareSnapshot('very-long-word', 0.2, { limit: 3, delay: 500 });
      });
    });

    it('TOC item is a very long sentence', () => {
      cy.get(ui.tocListItem('Accessibility')).then(($element) => {
        // eslint-disable-next-line no-param-reassign
        $element[0].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        cy.compareSnapshot('very-long-sentence', 0.2, { limit: 3, delay: 500 });
      });
    });

    it('TOC item contains some special characters', () => {
      cy.get(ui.tocListItem('Accessibility')).then(($element) => {
        // eslint-disable-next-line no-param-reassign
        $element[0].textContent = '* ? / \\ | < > , . ( ) [ ] { } ; : ‘ “ ! @ # $ % ^ &';
        cy.compareSnapshot('special-chars', 0.2, { limit: 3, delay: 500 });
      });
    });
  });

  describe('More narrow window', () => {
    beforeEach(() => {
      cy.viewport('ipad-mini');
      cy.visit('run-for-the-first-time.html');
    });

    it('TOC menu is not displayed by default', () => {
      cy.get(ui.tocRoot).should('not.be', 'visible');
    });

    it('TOC menu can be displayed', () => {
      cy.get(ui.tocMenuButton).click();
      cy.get(ui.tocRoot).should('be.visible');
    });

    it('TOC menu can be hidden', () => {
      cy.get(ui.tocMenuButton).click();
      cy.get(ui.tocRoot).should('be.visible');
      cy.get(ui.tocMenuClose).click();
      cy.get(ui.tocRoot).should('not.be', 'visible');
    });

    it('TOC menu disappears after item is chosen', () => {
      cy.get(ui.tocMenuButton).click();
      cy.get(ui.tocListItem('Installation guide')).click();
      cy.get(ui.tocArticleTitle).should('have.text', 'Install IntelliJ\u00a0IDEA');
      cy.get(ui.tocRoot).should('not.be', 'visible');
    });

    // TBD test long words, sentences and special chars for mobile view as well
  });
});
