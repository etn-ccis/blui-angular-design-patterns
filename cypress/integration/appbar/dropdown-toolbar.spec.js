/// <reference types="cypress" />


describe('Dropdown app bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/dropdown-toolbar')
    });

    it('should display page title', () => {
        cy.get('.blui-dropdown-toolbar-title').should('contain', 'Title');
    });

    it('should display correct subtitle on selected', () => {
        cy.contains('subtitle').click()
        cy.contains('All Locations').click()
        cy.get('.blui-dropdown-toolbar-subtitle').should('contain', 'All Locations')
    });
});