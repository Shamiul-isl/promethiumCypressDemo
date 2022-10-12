const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require("fs");
const path = require('path')
const pdf = require('pdf-parse');

module.exports = defineConfig({
  video: true,
  reporter: 'node_modules/mochawesome',
  reporterOptions: {
    reportDir: 'results',
    overwrite: false,
    html: true,
    timestamp: 'mmddyyyy_HHMMss',
    showSkipped: true,
    charts: true,
  },
  screenshotsFolder: 'results/assets/screenshots',
  videosFolder: 'results/assets/videos',
  viewportWidth: 1920,
  viewportHeight: 1080,
  requestTimeout: 10000,
  responseTimeout: 10000,
  defaultCommandTimeout: 10000,
  retries: 1,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', {
        downloadFile,
        readPdf(pathToPdf) {
          return new Promise((resolve) => {
            const pdfPath = path.resolve(pathToPdf)
            let dataBuffer = fs.readFileSync(pdfPath);
            resolve(pdf(dataBuffer))
    
          })
        }
      })
    },
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://promethium.ai/',
    experimentalSessionAndOrigin: true
  },
})
