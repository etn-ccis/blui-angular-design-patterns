/// <reference types="cypress" />


describe('Collapsible app bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/collapsible');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Timeline');
    });

    it('should display collapsed appbar on scroll', () => {
        cy.get('.mat-toolbar-row').scrollIntoView({ duration: 1000, offset:{ top: 200, left: 0 }})
        cy.get('[data-cy=blui-toolbar]').scrollIntoView().should('be.visible')
        .invoke('prop', 'offsetHeight').should('equal', 64)
    });

    it('should display expanded appbar on scroll', () => {
        cy.get('.mat-toolbar-row').scrollIntoView({ duration: 1000, offset:{ bottom: 200, left: 0 }})
        cy.get('[data-cy=blui-toolbar]').scrollIntoView().should('be.visible')
        .invoke('prop', 'offsetHeight').should('equal', 200)
    });
});