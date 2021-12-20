/// <reference types="cypress" />


describe('Form validation in a list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/in-a-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'In a List');
    });

    it('should display ip address left aligned', () => {
        cy.get('[data-cy=ip-address]').invoke('css', 'text-align').should('equal', 'left')
    });

    it('should display unselected toggle', () => {
        cy.get('.mat-slide-toggle-bar')
        .find('input')
        .filter('#mat-slide-toggle-1-input')
        .should('have.attr', 'aria-checked', 'false')
    });

    it('should display selected toggle', () => {
        cy.get('.mat-slide-toggle-bar').click()
        cy.get('.mat-slide-toggle-bar')
        .find('input')
        .filter('#mat-slide-toggle-1-input')
        .should('have.attr', 'aria-checked', 'true')
    });
});