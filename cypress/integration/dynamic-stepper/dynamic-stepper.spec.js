/// <reference types="cypress" />


describe('Dynamic stepper', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/dynamic-stepper');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Dynamic Stepper');
    });

    it('should add steps to stepper when add is cllicked', () => {
        cy.contains('Cook Dinner').click()
        cy.get('[data-cy=add-step]').click()
        cy.contains('Go To Work').click({ force: true })
        cy.get('[data-cy=done]').click()
        cy.get('.pxb-empty-state').should('contain', 'Procedure created successfully')
    });

    it('should remove steps from stepper when step remove clicked', () => {
        cy.contains('Cook Dinner').click()
        cy.get('[data-cy=add-step]').click()
        cy.contains('Go To Work').click({ force: true })
        cy.contains('Go To Work').click()
        cy.get('[data-cy=delete-step]').click()
        cy.contains('Go To Work').should('not.be.visible')
        
    });

    it('should remove all steps from stepper', () => {
        cy.contains('Cook Dinner').click({ force: true })
        cy.get('[data-cy=add-step]').click()
        cy.contains('Go To Work').click({ force: true })
        cy.get('[data-cy=delete-all]').click()
        cy.get('.mat-drawer-content').should('contain', 'Add a Step').and('contain', 'DONE')

    });

    it('should reset the demo when reset is clicked', () => {
        cy.contains('Cook Dinner').click({ force: true })
        cy.get('[data-cy=add-step]').click()
        cy.contains('Go To Work').click({ force: true })
        cy.get('[data-cy=done]').click()
        cy.get('.pxb-empty-state').should('contain', 'Procedure created successfully')
        cy.get('[data-cy=reset]').click()
        cy.get('.mat-drawer-content').should('contain', 'Add a Step')

    });
});