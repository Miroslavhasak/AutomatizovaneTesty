const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Pridaj tento riadok, aby Cypress videl všetky .js súbory v e2e
    specPattern: 'cypress/e2e/**/*.js'
  },
});