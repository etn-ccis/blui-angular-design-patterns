/// <reference types="cypress" />

// todo add data-test=id to info list items
describe('status list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/lists/status-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Status List');
    });
});