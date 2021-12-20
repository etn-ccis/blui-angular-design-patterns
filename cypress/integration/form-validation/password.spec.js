/// <reference types="cypress" />


describe('Form validation password', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/password');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Password Validation');
    });

    it('should display password does not match', () => {
        cy.get('[data-cy=old-password]').click().type('somepassword')
        cy.get('[data-cy=new-password]').click().type('Test321!')
        cy.get('[data-cy=confirm-password]').click().type('Test321').blur()
        cy.get('[data-cy=error-matching-password]').should('contain', 'Passwords do not match')
    });

    it('should display submit button disabled', () => {
        cy.get('[data-cy=old-password]').click().type('somepassword')
        cy.get('[data-cy=new-password]').click().type('Test321!')
        cy.get('[data-cy=confirm-password]').click().type('Test321').blur()
        cy.get('[data-cy=submit-btn]').should('be.disabled')
    });

    it('should display submit button enabled', () => {
        cy.get('[data-cy=old-password]').click().type('somepassword')
        cy.get('[data-cy=new-password]').click().type('Test321!')
        cy.get('[data-cy=confirm-password]').click().type('Test321!').blur()
        cy.get('[data-cy=submit-btn]').should('be.enabled')
    });

    it('should clear form on cancel', () => {
        cy.get('[data-cy=old-password]').click().type('somepassword')
        cy.get('[data-cy=new-password]').click().type('Test321!')
        cy.get('[data-cy=confirm-password]').click().type('Test321!').blur()
        cy.get('[data-cy=cancel-btn]').click()
        cy.get('[data-cy=old-password]').should('be.empty')
        cy.get('[data-cy=new-password]').should('be.empty')
        cy.get('[data-cy=confirm-password]').should('be.empty')
    });
});