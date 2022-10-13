import ui from './ui';

Cypress.Commands.add('getTocRootList', () => {
  const items = [];
  cy.get(ui.tocRoot).find(ui.tocListItems)
    .each(($item) => items.push($item.text().trim()))
    .then(() => {
      cy.wrap(items);
    });
});

Cypress.Commands.add('collapseTocItem', (toscroll) => {
  cy.get(ui.tocItemArrow(toscroll)).click();
});

Cypress.Commands.add('showTocMenu', () => {
  cy.get(ui.tocMenuButton).click();
});

Cypress.Commands.add('clickTocItem', (name) => {
  cy.get(ui.tocListItem(name)).click();
});

// Cypress.Commands.add('type_invalid_url', (url) => {
//   cy.intercept('/qr/custom', cy.spy().as('custom'));
//   cy.get('@custom').should('not.have.been.called');
// });
