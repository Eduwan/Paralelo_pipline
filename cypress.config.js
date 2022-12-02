const { defineConfig } = require("cypress");

// {
//   "viewportWidth": 1500,
//   "viewportHeight": 900,
//   "chromewebSecurity": false,
//   "defaultCommandTimeout": 20000,
//   "pageLoadTimeout":  9000

// }

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {

//       // implement node event listeners here
//     },
//   },
// });

const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = {
  ...(on, config) => {
    on("file:preprocessor", cucumber());
  },

  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
  projectId: "fr5hdc"
};
