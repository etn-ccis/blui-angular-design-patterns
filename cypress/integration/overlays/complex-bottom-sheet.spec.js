/// <reference types="cypress" />


describe('Complex bottom sheet', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/overlays/complex-bottom-sheet');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Complex Bottom Sheet');
    });

    it('should open and action items display', () => {
        cy.get('[data-cy=action-menu]').click()
        cy.get('[data-cy=btm-sheet-sort]').should('contain', 'Sort By')
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
    it('should display empty state', () => {
        cy.get('[data-cy=action-menu]').click()
        cy.get('[data-cy=active-alarms] > .blui-hero-content').click()
        cy.get('[data-cy=alarms]').click()
        cy.get('[label="Settings"] > .blui-hero-content').click()
        cy.get('[data-cy=sessions] > .blui-hero-content').click()
        cy.get('[data-cy=btm-sheet-close-btn]').click()
        cy.get('.blui-empty-state-content').should('contain', 'No Events Available')
    });
});
