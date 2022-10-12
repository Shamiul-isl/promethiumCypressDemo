/// <reference types="cypress" />
import {HomePage} from '../page-objects/pages/home';
import {ProductPage} from '../page-objects/pages/product';
import {HeaderComponent} from '../page-objects/components/header';

describe('Product page tests', () => {
    beforeEach(() => {
        HomePage.navigate();
    });

    it('Data connectors page shows databases used', { tags: ['TestCase3', '@required'] }, () => {
        HeaderComponent.hoverOverProduct()
        HeaderComponent.dataConnectors().click()
        cy.url().should('include', ProductPage.url);
        ProductPage.databasesUsedImages().should('have.length', 17)
        ProductPage.databasesUsedText()
            .should('have.length', 17)
            .and('contain.text', "Microsoft SQL Server")
            .and('contain.text', "MySQL")
            .and('contain.text', "PostgreSQL")
            .and('contain.text', "Teradata")
    });

    
})