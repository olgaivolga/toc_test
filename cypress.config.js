const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  video: true,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.jetbrains.com/help/idea/',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
