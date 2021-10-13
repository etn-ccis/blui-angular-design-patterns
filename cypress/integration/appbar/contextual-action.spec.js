/// <reference types="cypress" />


describe('Contextual App Bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/contextual')
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Contextual App Bar');
    });

    it('should display delete button enabled & disabled', () => {
        cy.get('#mat-checkbox-2').click()
        cy.get('[data-cy=delete-btn]').should('be.enabled')
        cy.get('#mat-checkbox-2').click()
        cy.get('[data-cy=delete-btn]').should('be.disabled')
    });

    it('should display header checkbox indeterminate', () => {
        cy.get('#mat-checkbox-2').click()
        cy.get('[data-cy=table-header-checkbox]').find('input')
        .filter('input#mat-checkbox-1-input')
        .should('have.prop', 'indeterminate', true)
    });

    it('should not display header checkbox indeterminate', () => {
        cy.get('[data-cy=table-header-checkbox]').click()
        cy.get('[data-cy=table-header-checkbox]').find('input')
        .filter('input#mat-checkbox-1-input')
        .should('have.prop', 'indeterminate', false)
    });

    it('should display no items found', () => {
        cy.get('[data-cy=table-header-checkbox]').click()
        cy.get('[data-cy=delete-btn]').click()
        cy.get('[data-cy=empty-table]').should('contain', 'No items found.')
    });

    it('should reset table when no items found', () => {
        cy.get('[data-cy=table-header-checkbox]').click()
        cy.get('[data-cy=delete-btn]').click()
        cy.get('[data-cy=empty-table]').should('contain', 'No items found.')
        cy.contains('Reset table').click()
        cy.contains('Device')
    });
});