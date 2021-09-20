// <reference types="cypress" />


describe('Form validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/fixed-length-passcode');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Fixed Length Passcode');
    });

    it('should display incorrect passcode error', () => {
        cy.get('[data-cy=passcode]').type('789789')
        cy.get('[data-cy=passcode-error]').should('contain', 'Incorrect Passcode.')
    });

    it('should dismiss passcode error on edit', () => {
        cy.get('[data-cy=passcode]').type('789789')
        cy.get('[data-cy=passcode-error]').should('contain', 'Incorrect Passcode.')
        cy.get('[data-cy=passcode]').click().type(' {backspace} ')
        cy.get('[data-cy=passcode-error]').should('not.exist')
    });

    it('should display six-digit passcode error', () => {
        cy.get('[data-cy=passcode]').type('78978').blur()
        cy.get('[data-cy=six-digit-error]').should('contain', 'Please enter a six-digit passcode.')
    });

    it('should reset the form', () => {
        cy.get('[data-cy=reset]').click()
        cy.get('[data-cy=passcode]').should('be.empty')
    });

    it('should only allow numeric values', () => {
        cy.get('[data-cy=passcode]').type('test').blur()
        cy.get('[data-cy=passcode]').should('be.empty')
    });

    it('should display spinner with correct passcode', () => {
        cy.get('[data-cy=passcode]').type('123456')
        cy.get('[data-cy=loading-spinner]').should('be.visible')
    });

    it('should display success with correct passcode', () => {
        cy.get('[data-cy=passcode]').type('123456')
        cy.get('[data-cy=success]').should('be.visible')
    });
});