/// <reference types="cypress" />


describe('Sortable list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/lists/sortable-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Sortable List');
    });
    it('should enable sortable list items on edit', () => {
        cy.get('[data-cy=action-btn] > .mat-focus-indicator').click()

        cy.get('[data-cy=sortable-row-0] > .mat-list-item > .mat-list-item-content > .mat-list-icon').should('be.visible')

    });

    it('should drag item in list to location', () => {
        cy.get('[data-cy=action-btn] > .mat-focus-indicator').click()
        cy.get('[data-cy=sortable-row-0] > .mat-list-item > .mat-list-item-content > .mat-list-icon')
            .trigger('mousedown', { button: 0 }, { force: true })
            .trigger('mousemove', { force: true, x: 100, y: 100 })
        cy.get('[data-cy=sortable-row-1] > .mat-list-item > .mat-list-item-content').click()
        cy.get('[data-cy=sortable-row-1]').should('contain', 'Item 01')
        cy.get('[data-cy=action-btn] > .mat-focus-indicator').click()

    });
});