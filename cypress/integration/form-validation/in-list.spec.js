/// <reference types="cypress" />


describe('Form validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/in-a-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'In a List');
    });

    it('should display ip address left aligned', () => {
        cy.get('[data-cy=ip-address]').invoke('css', 'text-align').should('equal', 'left')
    });

    it('should display unselected toggle in #424e54 opacity 0.3', () => {
        cy.get('.mat-slide-toggle-bar').invoke('css', 'background-color').should('equal', 'rgba(66, 78, 84, 0.3)')
    });

    it('should display selected toggle in #0088f2 opacity 0.5 ', () => {
        cy.get('.mat-slide-toggle-bar').click()
        .invoke('css', 'background-color').should('equal', 'rgba(0, 136, 242, 0.5)')
    });
});