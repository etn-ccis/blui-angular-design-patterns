/// <reference types="cypress" />


describe('Account menu in appbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/account-menu/in-an-app-bar')
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'In an App Bar');
    });

    it('should display menu from generic avatar', () => {
        cy.get('[data-cy=generic-avatar-menu]').click()
        cy.contains('Log In')
    });

    it('should dismiss menu from generic avatar', () => {
        cy.get('[data-cy=generic-avatar-menu]').click()
        cy.get('body').click().should('not.contain', 'Log In')
    });
});