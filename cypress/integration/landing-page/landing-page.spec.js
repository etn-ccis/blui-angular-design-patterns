/// <reference types="cypress" />


describe('Landing page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-page-content]').should('contain', 'The Patterns');
    });

    it('verify angular guide link', () => {
        cy.get('[data-cy=ng-guide]')
        .should('have.attr', 'href')
        .and('include', 'pxblue.github.io/development/frameworks-web/angular');
    });

    it('verify design pattern landing page link', () => {
        cy.get('[data-cy=patterns]')
        .should('have.attr', 'href')
        .and('include', 'https://pxblue.github.io/patterns');
    });

    it('verify ng components link', () => {
        cy.get('[data-cy=ng-comp-lib]')
        .should('have.attr', 'href')
        .and('include', 'https://pxblue-components.github.io/angular');
    });

    it('verify pxb GH link', () => {
        cy.get('[data-cy=pxb-github]')
        .should('have.attr', 'href')
        .and('include', 'https://github.com/pxblue');
    });

    it('verify ng patterns link', () => {
        cy.get('[data-cy=ng-patterns]')
        .should('have.attr', 'href')
        .and('include', 'https://github.com/pxblue/angular-design-patterns');
    });

    it('verify roadmap link', () => {
        cy.get('[data-cy=roadmap]')
        .should('have.attr', 'href')
        .and('include', 'https://pxblue.github.io/roadmap');
    });

    it('verify feedback link', () => {
        cy.get('[data-cy=feedback]')
        .should('have.attr', 'href')
        .and('include', 'https://pxblue.github.io/community/contactus');
    });
})