const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.jetbrains.com/help/idea/',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
