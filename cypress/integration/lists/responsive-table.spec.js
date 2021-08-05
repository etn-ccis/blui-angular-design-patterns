/// <reference types="cypress" />


describe('Responsive table', () => {

    it('should display title and table header on desktop', () => {
        cy.viewport(1024, 635)
        cy.visit('localhost:4200/lists/responsive-table')
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Responsive Table')
        cy.get('.mat-header-row').should('contain', 'Name').and('contain', 'Details')
        cy.get('[data-cy=pxb-toolbar]').should('not.contain.value', 'data-cy=toolbar-menu')
        
    });

    it('should display title and table header on tablet', () => {
        cy.viewport(768, 1024)
        cy.visit('localhost:4200/lists/responsive-table')
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Responsive Table')
        cy.get('.mat-header-row').should('contain', 'Name').and('contain', 'Details')
        cy.get('[data-cy=toolbar-menu]').should('be.visible')       

    });

    it('should display title and no table header on phone', () => {
        cy.viewport(375, 812)
        cy.visit('localhost:4200/lists/responsive-table')
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Responsive Table')
        cy.get('.mat-header-row').should('not.be.visible')
        cy.get('[data-cy=toolbar-menu]').should('be.visible')


    });
});