const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    URL:'http://localhost/wordpress/wp-login.php?loggedout=true&wp_lang=en_US'
    }
});
