const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stagging.contentatscale.ai",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
