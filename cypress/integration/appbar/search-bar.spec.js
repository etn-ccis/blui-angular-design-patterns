/// <reference types="cypress" />


describe('Search bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/global-search')
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Search');
    });

    it('should filter data when searching', () => {
        cy.get('[data-cy=search-btn]').click()
        cy.get('[data-cy=searchfield]').type('grape')
        cy.get('[data-cy=list-view] > .mat-list-item > .mat-list-item-content').should('contain', 'Grape').and('have.length', (1))
        cy.get('[data-cy=search-close-btn]').click()
        cy.get('[data-cy=searchfield]').type('water')
        cy.get('[data-cy=list-view]').should('contain', 'Watermelon').and('have.length', (1))

    });

    it('should return no results when data does not exist', () => {
        cy.get('[data-cy=search-btn]').click()
        cy.get('[data-cy=searchfield]').type('123')
        cy.get('body').should('contain', 'No Results')

    });
});