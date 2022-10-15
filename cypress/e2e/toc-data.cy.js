import ui from '../support/ui';

describe('Test TOC items on page run-for-the-first-time.html', () => {
  const testData = require('../fixtures/test_toc_content.json');

  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('run-for-the-first-time.html');
  });

  const titles = testData.rootTitles;

  it('The list of root level items is correct', () => {
    cy.get(ui.tocItemArrow('Getting started')).click();
    cy.getTocRootList().then((items) => {
      expect(items).to.have.same.members(titles);
    });
  });

  const articles = testData.rootArticles;

  articles.forEach((test) => {
    describe(test.toc, () => {
      beforeEach(() => {
        cy.visit('run-for-the-first-time.html');
      });

      it(`${test.toc} navigates to ${test.article} page `, () => {
        cy.get(ui.tocListItem(test.toc)).click();
        cy.get(ui.tocArticleTitle).should('have.text', test.article);
      });
    });
  });
});
