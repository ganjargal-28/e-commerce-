const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Тестлэх апп-ийн URL
    setupNodeEvents(on, config) {
      // Node.js event-үүдийг тохируулах
    },
  },
});
