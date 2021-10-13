/// <reference types="cypress" />


describe('Search bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/page-wide-search')
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Page Search');
    });

    it('should filter data when searching', () => {
        cy.get('#mat-input-0').click().type('grape')
        cy.get('[data-cy=list-view]').should('contain', 'Grape').and('have.length', (1))
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-0').click().type('water')
        cy.get('[data-cy=list-view]').should('contain', 'Watermelon').and('have.length', (1))

    });

    it('should return no results when data does not exist', () => {
        cy.get('#mat-input-0').click().type('123')
        cy.get('body').should('contain', 'No Results.')

    });
});