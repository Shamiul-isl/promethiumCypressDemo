/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import {HomePage} from '../page-objects/pages/home';
import {ResourcesPage} from '../page-objects/pages/resources';
import {HeaderComponent} from '../page-objects/components/header';

describe('Resources page tests', () => {
    beforeEach(() => {
        HomePage.navigate();
    });

    it('Validate solutions for dbt file download', { tags: ['TestCase4', '@optional'] }, () => {
        HeaderComponent.hoverOverResources()
        HeaderComponent.collateralAndWaivers().click()
        ResourcesPage.downloadSolutionsForDbtFile()
        cy.task("readPdf", "cypress/downloads/dbtSolutions.pdf").then(({text, numpages}) => {
            expect(text).to.contain("Reimagining data analytics")
            expect(text).to.contain("Why Promethium + dbt")
            expect(text).to.contain("From Traditional to Modern In Days, Not Years")
            expect(text).to.contain("Learn more, try for yourself, visit promethium.ai")
            expect(numpages).to.equal(4)
        })
    });

    
})
