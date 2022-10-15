import ui from '../support/ui';

describe('Test TOC behavior', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('');
  });

  it('Default location is Getting started article', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/help/idea/getting-started.html');
    });
  });

  it('Collapse by title', () => {
    cy.get(ui.tocListItem('Getting started'));
    cy.get(ui.tocListItem('Accessibility')).should('be.visible');
    cy.get(ui.tocListItem('Getting started')).click();
    cy.get(ui.tocListItem('Accessibility')).should('not.exist');
  });

  it('Expand by title', () => {
    cy.get(ui.tocListItem('Reference'));
    cy.get(ui.tocListItem('Dialogs')).should('not.exist');
    cy.get(ui.tocListItem('Reference')).click();
    cy.get(ui.tocListItem('Dialogs'))
      .scrollIntoView()
      .should('be.visible');
  });

  it('Collapse by arrow', () => {
    cy.get(ui.tocListItem('Getting started'));
    cy.get(ui.tocListItem('Accessibility')).should('be.visible');
    cy.get(ui.tocItemArrow('Getting started')).click();
    cy.get(ui.tocListItem('Accessibility')).should('not.exist');
  });

  it('Expand by arrow', () => {
    cy.get(ui.tocListItem('Reference'));
    cy.get(ui.tocListItem('Dialogs')).should('not.exist');
    cy.get(ui.tocItemArrow('Reference')).click();
    cy.get(ui.tocListItem('Dialogs'))
      .scrollIntoView()
      .should('be.visible');
  });

  it.skip('Failed test', () => {
    cy.get('[data-test="header-hamburger"]');
  });
});
