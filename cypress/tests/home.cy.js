/// <reference types="cypress" />
import {HomePage} from '../page-objects/pages/home';
import {HeaderComponent} from '../page-objects/components/header';

describe('Home page tests', () => {
    beforeEach(() => {
        HomePage.navigate();
    });

    it('Home page should contain key elements', { tags: ['TestCase1', '@required'] }, () => {
        HeaderComponent.logo().should('be.visible');
        HomePage.contains('Promethium Collaborative Data Analytics').should('be.visible');
        HomePage.contains('Never miss an opportunity.').should('be.visible');
    });


})