export default {
  tocMenuButton: '[data-test="header-hamburger"]',
  tocRoot: '[data-test="toc"]',
  tocArticleBlock: '[data-test="app__article"]',
  tocArticleTitle: '[data-test="starting-page-title"],h1 > .article__header > .article__title',
  tocListItems: '[data-test="internal-link toc-item"],[data-test="toc-item"]',
  tocItemArrow: (tocscroll) => `[data-toc-scroll=${tocscroll}] > [data-test="internal-link toc-item"] > [data-test="toc-expander"]`,
  tocListItem: (name) => `[data-test="internal-link toc-item"]:contains(${name}),[data-test="toc-item"]:contains(${name})`,
  cookiesBanner: '.jetbrains-cookies-banner__body',
  cookiesBannerClose: '.jetbrains-cookies-close-button',
};
