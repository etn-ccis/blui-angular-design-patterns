/// <reference types="cypress" />


describe('Loading contextual spinner', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/loading-states/contextual-spinners');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Contextual Spinner')
    });

    it('Should trigger spinner loading overlay on login button ', () => {
        cy.get('[data-cy=login-btn]').click()
        cy.get('[data-cy=login-btn-spinner] > .mat-button-wrapper > .spinner-container > .mat-spinner > svg > .ng-star-inserted').should('be.visible')
    });
    it('Should trigger spinner loading overlay on start fab button ', () => {
        cy.get('[data-cy=start-btn]').click()
        cy.get('[data-cy=start-btn-spinner] > .mat-button-wrapper > .spinner-container > .mat-spinner > svg > .ng-star-inserted').should('be.visible')
    });
});