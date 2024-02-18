const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env:{
    baseURL : "https://www.saucedemo.com/",
    username : "standard_user",
    password : "secret_sauce"
    }
  },

});
