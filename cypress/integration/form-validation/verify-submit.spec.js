/// <reference types="cypress" />


describe('Form validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/verify-on-submit');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Verify On Submit');
    });

    it('should display input field as focused by default', () => {
        cy.get('[data-cy=serial-number]').should('have.focus')
    });

    it('should display search button disabled', () => {
        cy.get('[data-cy=search-button]').should('be.disabled')
    });

    it('should display search button enabled', () => {
        cy.get('[data-cy=serial-number]').type('111')
        cy.get('[data-cy=search-button]').should('be.enabled')
    });

    it('should display spinner on search', () => {
        cy.get('[data-cy=serial-number]').type('111')
        cy.get('[data-cy=search-button]').click()
        cy.get('[data-cy=loading-spinner]').should('be.visible')
    });

    it('should display error message', () => {
        cy.get('[data-cy=serial-number]').type('111')
        cy.get('[data-cy=search-button]').click()
        cy.get('[data-cy=helper-error]').should('contain', 'Device not found')
    });

    it('should display error in correct color #ca3c3d', () => {
        cy.get('[data-cy=serial-number]').type('111')
        cy.get('[data-cy=search-button]').click()
        cy.get('[data-cy=helper-error]')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
    });

    it('should display success on valid search', () => {
        cy.get('[data-cy=serial-number]').type('123')
        cy.get('[data-cy=search-button]').click()
        cy.get('.pxb-empty-state-content').should('contain', 'Success')
    });

    it('should display search when add device is selected', () => {
        cy.get('[data-cy=add-device]').click()
        cy.get('[data-cy=serial-number]').should('have.focus')
    });
});