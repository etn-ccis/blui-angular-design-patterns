/// <reference types="cypress" />


describe('Progress bar loading', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/loading-states/progress-bars');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Progress Bars')
    });

    it('Should trigger progress bar on load', () => {
        cy.get('[data-cy=upload-btn] > .mat-focus-indicator').click()
        cy.get('[data-cy=upload-status] > .pxb-info-list-item > .mat-list-item > .mat-list-item-content').should('be.visible',{ force: true })
    });
});