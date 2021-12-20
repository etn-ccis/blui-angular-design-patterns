/// <reference types="cypress" />


describe('Form validation in a table', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/in-a-table');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'In A Table');
    });

    it('should have Min placeholder', () => {
        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('contain', 'Min')
    });

    it('should have Max placeholder', () => {
        cy.get('#mat-input-1').invoke('attr', 'placeholder').should('contain', 'Max')
    });

    it('should display Min Max align right', () => {
        cy.get('#mat-input-1').invoke('css', 'text-align').should('equal', 'right')
    });
});