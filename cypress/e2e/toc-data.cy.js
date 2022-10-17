import ui from '../support/ui';

describe('Test TOC items on page run-for-the-first-time.html', () => {
  const testData = require('../fixtures/test_toc_content.json');
  const { rootTitles, rootTitlesDetailes } = testData;

  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('run-for-the-first-time.html');
  });

  it('The list of root level items is correct', () => {
    cy.get(ui.tocItemArrow('Getting started')).click();
    cy.getTocRootList().then((items) => {
      expect(items).to.have.same.members(rootTitles);
    });
  });

  rootTitlesDetailes.forEach((test) => {
    describe(test.toc, () => {
      beforeEach(() => {
        cy.visit('run-for-the-first-time.html');
      });

      it(`${test.toc} navigates to ${test.article} page `, () => {
        cy.get(ui.tocListItem(test.toc)).click();
        cy.get(ui.tocArticleTitle).should('have.text', test.article);
      });

      it(`The list of items under ${test.toc} is correct `, () => {
        cy.get(ui.tocListItem(test.toc)).click();
        cy.getTocRootList().then((items) => {
          expect(items).to.include.members(test.subItems);
        });
      });
    });
  });
});
