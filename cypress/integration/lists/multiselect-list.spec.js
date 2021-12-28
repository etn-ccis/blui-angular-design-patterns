/// <reference types="cypress" />


describe('Multi-select list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/lists/multi-select-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Multiselect List');
    });
});