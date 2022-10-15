import ui from './ui';

const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');

compareSnapshotCommand();

Cypress.Commands.add('getTocRootList', () => {
  const items = [];
  cy.get(ui.tocRoot).find(ui.tocListItems)
    .each(($item) => items.push($item.text().trim()))
    .then(() => {
      cy.wrap(items);
    });
});
