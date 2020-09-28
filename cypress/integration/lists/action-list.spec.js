/// <reference types="cypress" />


describe('Action list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/lists/action-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Action List');
    });

    it('should add list items when add is clicked', () => {
        cy.get('[data-cy=list-content]').children().should('have.length', '10');
        cy.get('[data-cy=toolbar-add]').click()
        cy.get('[data-cy=list-content]').children().should('have.length', '11');
        cy.get('[data-cy=toolbar-add]').click()
        cy.get('[data-cy=list-content]').children().should('have.length', '12');
    });

    it('should remove list items when delete is clicked', () => {
        cy.get('[data-cy=list-content]').children().should('have.length', '10');
        cy.get('[data-cy=action-menu]').first().click()
        cy.get('[data-cy=remove]').click()
        cy.get('[data-cy=list-content]').children().should('have.length', '9');
        cy.get('[data-cy=action-menu]').first().click()
        cy.get('[data-cy=remove]').click()
        cy.get('[data-cy=list-content]').children().should('have.length', '8');
    });

    it('should remove all items and display empty state', () => {
        cy.get('[data-cy=toolbar-delete]').click()
        cy.get('.pxb-empty-state').should('contain', 'No Items Found')
        cy.get('[data-cy=pxb-empty-state-add]').click()
        cy.get('[data-cy=list-content]').children().should('have.length', '1');
    });
});