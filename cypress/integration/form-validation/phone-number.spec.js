/// <reference types="cypress" />


describe('Form validation phone number format', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/phone-number-format');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Phone Number Format');
    });

    it('should display error for each country', () => {
        cy.get('[data-cy=country-selector]').should('contain', 'US')
        cy.get('[data-cy=phone-input]').click()
        cy.get('body').click(top, {force: true})
        cy.get('[data-cy=phone-helper-error]').should('contain', 'Please enter a valid U.S. phone number.')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('CA').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('body').click(top, {force: true})
        cy.get('[data-cy=phone-helper-error]').should('contain', 'Please enter a valid Canadian phone number.')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('RU').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('body').click(top, {force: true})
        cy.get('[data-cy=phone-helper-error]').should('contain', 'Please enter a valid Russian phone number.')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('EG').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('body').click(top, {force: true})
        cy.get('[data-cy=phone-helper-error]').should('contain', 'Please enter a valid Egyptian phone number.')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('IN').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('body').click(top, {force: true})
        cy.get('[data-cy=phone-helper-error]').should('contain', 'Please enter a valid Indian phone number.')
    });

    it('should display correct format placeholders', () => {
        cy.get('[data-cy=country-selector]').should('contain', 'US')
        cy.get('[data-cy=phone-input]').click()
        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('contain', '### ### ####')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('CA').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('contain', '### ### ####')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('RU').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('contain', '### ### ## ##')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('EG').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('contain', '# #######')
        cy.get('[data-cy=country-selector]').click()
        cy.get('#mat-select-0-panel').contains('IN').click()
        cy.get('[data-cy=phone-input]').click()
        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('contain', '#### ### ###')
    });
});