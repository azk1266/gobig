// const { defineConfig } = require('cypress');
import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer.js';

// module.exports = defineConfig({
// projectId: 'f9ifjg',
export default defineConfig({
  projectId: 'dekjxw',
  e2e: {
    baseUrl: 'https://gobigreviews.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
  env: { allure: true },
});
