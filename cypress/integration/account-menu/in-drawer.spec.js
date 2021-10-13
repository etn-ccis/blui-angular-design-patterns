/// <reference types="cypress" />


describe('Search bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/account-menu/in-a-drawer')
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'In a Drawer');
    });

    it('should display drawer when toggled', () => {
        cy.get('[data-cy=toggle-drawer]').click({ force: true })
        cy.get('[data-cy=drawer-header]').should('be.visible')
    });

    it('should dismiss drawer on close', () => {
        cy.get('[data-cy=toggle-drawer]').click()
        cy.get('[data-cy=drawer-header]').should('be.visible')
        cy.get('[data-cy=close-drawer]').click()
        cy.get('[data-cy=drawer-header]').should('not.be.focused')
    });
});