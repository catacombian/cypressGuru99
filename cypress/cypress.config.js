const { defineConfig } = require("cypress");
c

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config)
    
    {
      // implement node event listeners here
    },
  },
});

