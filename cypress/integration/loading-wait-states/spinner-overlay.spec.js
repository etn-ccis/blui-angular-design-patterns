/// <reference types="cypress" />


describe('Loading states', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/loading-states/spinner-overlays');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Spinner Overlays')
    });

    it('Should trigger spinner loading overlay on reload ', () => {
        cy.get('[data-cy=reload]').click()
        cy.get('[data-cy=loading-overlay-spinner] > .mat-spinner > svg > .ng-star-inserted').should('be.visible')
    });
});