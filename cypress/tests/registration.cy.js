/// <reference types="cypress" />
import {HomePage} from '../page-objects/pages/home';
import {HeaderComponent} from '../page-objects/components/header';
import {SignUpPage} from '../page-objects/pages/signUp';

describe('Registering new user tests', () => {
    beforeEach(() => {
        HomePage.navigate();
    });

    it('Should not be able to sign up without populated fields', { tags: ['TestCase2', '@required'] }, () => {
        HeaderComponent.clickOnTryNow();
        cy.origin(SignUpPage.url, {args: {SignUpPage}}, ({SignUpPage}) => {
            cy.get(SignUpPage.signUpButton).click()
            cy.get(SignUpPage.getFieldRequiredErrors)
                .should('have.length', 5)
                .each(($err) => {
                    cy.wrap($err)
                        .should('be.visible')
                        .and('contain.text', 'is required')
                });
        })
    });

    it('Should be able to sign up with valid credentials', { tags: ['TestCase2', '@required'] }, () => {
        HeaderComponent.clickOnTryNow();
        cy.origin(SignUpPage.url, {args: {SignUpPage}}, ({SignUpPage}) => {
            let r = (Math.random() + 1).toString(36).substring(7);
            cy.fixture('sign-up-valid-data').then((data) => {
                cy.get(SignUpPage.emailField).type(data.emailField+r+".com");
                cy.get(SignUpPage.firstName).type(data.firstName);
                cy.get(SignUpPage.lastName).type(data.lastName);
                cy.get(SignUpPage.companyName).type(r);
                cy.get(SignUpPage.jobFunction).click();
                cy.contains(data.jobFunction).click();
            })
            cy.get(SignUpPage.signUpButton).click()
            cy.get(SignUpPage.signUpButtonLoadingIcon).should('be.visible')
            cy.contains(SignUpPage.signUpConfirmation, {timeout:15000}).should('be.visible')
            cy.url().should('include', SignUpPage.signUpConfirmationUrl);

        })
    });
})