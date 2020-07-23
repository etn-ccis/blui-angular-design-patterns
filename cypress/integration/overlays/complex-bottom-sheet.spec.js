/// <reference types="cypress" />


describe('Complex bottom sheet', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/overlays/complex-bottom-sheet');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Complex Bottom Sheet');
    });

    it('should open and action items display', () => {
        cy.get('[data-cy=action-menu]').click()
        cy.get('[data-cy=btm-sheet-sort]').should('contain', 'Sort by')
        .and('contain', 'Time')
        .and('contain', 'Type')
        cy.get('[data-cy=btm-sheet-show]').should('contain', 'Show')
        .and('contain', 'Active Alarms')
        .and('contain', 'Alarms')
        .and('contain', 'Settings')
        .and('contain', 'Session')
        cy.get('[data-cy=btm-sheet-close]').should('contain', 'Close')
    });

    it('should dismiss when page is selected', () => {
        cy.get('[data-cy=action-menu]').click()
        cy.get('[data-cy=btm-sheet-sort]').should('be.visible')
        cy.get('.cdk-overlay-backdrop').click({ force : true})
        cy.get('[data-cy=btm-sheet-sort]').should('not.be.visible')
    });
});