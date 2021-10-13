/// <reference types="cypress" />


describe('Contextual App Bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/dropdown-toolbar')
    });

    it('should display page title', () => {
        cy.get('.pxb-dropdown-toolbar-title').should('contain', 'Title');
    });

    it('should display correct subtitle on selected', () => {
        cy.contains('subtitle').click()
        cy.contains('All Locations').click()
        cy.get('.pxb-dropdown-toolbar-subtitle').should('contain', 'All Locations')
    });
});