## Automated UI testing project, implemented with Cypress
Cypress is a next generation front end testing tool built for the modern web. It address the key pain points developers and QA engineers face when testing modern applications.
For more information visit: https://www.cypress.io/

### Local setup
macOS:
- First install NodeJs: `brew install node`
- Then install the dependencies from `package.json` with the following command: `npm install`
- If this is your first time running cypress, then also run `npx cypress install`
- For more info, [check the official install guide](https://docs.cypress.io/guides/getting-started/installing-cypress)

### Running tests locally
- To open Cypress' GUI run `npx cypress open`. The you will be able to run the tests from there
- If you want to run the tests from your terminal, simply run: `npm run test:chrome`
- Also, if you are interested in running tests that belong to a specific tag:
  - First declare the following variable: `export CYPRESS_grepTags=@YourTag`
  - And then run the tests using the npm command mentioned above

### Tests implemented:
- 4 tests in total (3 required, 1 optional) were implemented as part of this framework using JavaScript as the backbone programming language
- The page object pattern and page factory approach were used
- Application Under Test: "http://promethium.ai/"

