/// <reference types="cypress" />


describe('Form validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/form-validation');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Form Validation');
    });

    it('should display error states', () => {
        cy.get('[data-cy=basic-input]').click()
        cy.get('[data-cy=basic-email]').click()
        cy.get('[data-cy=basic-phone]').click()
        cy.get('[data-cy=basic-input]').click()
        cy.get('[data-cy=input-error-text]').should('contain', 'required')
        cy.get('[data-cy=email-error-text]').should('contain', 'required')
        cy.get('[data-cy=phone-number-error-text]').should('contain', 'required')
    });

    it('should display invalid entry on fields', () => {
        cy.get('[data-cy=basic-input]').click().type('info')
        cy.get('#mat-hint-0').should('contain', 'This is a regular input field')
        cy.get('[data-cy=basic-email]').click().type('admin@admin.n')
        cy.get('[data-cy=basic-input]').click()
        cy.get('#mat-error-3').should('contain', 'Invalid email address')
        cy.get('[data-cy=basic-phone]').click()
        cy.get('[data-cy=basic-phone]').click().type('123-123-123')
        cy.get('[data-cy=basic-email]').click()
        cy.get('#mat-error-4').should('contain', 'Invalid phone number')
    });

    it('should accept valid entry', () => {
        cy.get('[data-cy=basic-input]').click().type('info')
        cy.get('#mat-hint-0').should('contain', 'This is a regular input field')
        cy.get('[data-cy=basic-email]').click().type('admin@admin.net')
        cy.get('[data-cy=basic-phone]').click()
        cy.get('#mat-hint-1').should('contain', 'This field throws an error if the email format is incorrect')
        cy.get('[data-cy=basic-phone]').click().type('123-123-1231')
        cy.get('#mat-hint-2').should('contain', 'This field throws an error if the phone number format is incorrect. (Needs to be a valid U.S. number)')
    });

    it('should display character count 15/30', () => {
        cy.get('[data-cy=char-input]').click().type('Enter some text')
        cy.get('[data-cy=char-count]').should('contain', '15/30')
    });

    it('should display character count 30/30', () => {
        cy.get('[data-cy=char-input]').click().type('Enter some text')
        cy.get('[data-cy=char-count]').should('contain', '15/30')
        cy.get('[data-cy=char-input]').click().type('Enter some text')
        cy.get('[data-cy=char-count]').should('contain', '30/30')
        cy.get('[data-cy=char-input]').click().type('Enter some addtional text')
        cy.get('[data-cy=char-count]').should('contain', '30/30')
    });

    it('should display character count 30/30 when 45 entered', () => {
        cy.get('[data-cy=char-input]').click().type('Enter some text')
        cy.get('[data-cy=char-count]').should('contain', '15/30')
        cy.get('[data-cy=char-input]').click().type('Enter some text')
        cy.get('[data-cy=char-count]').should('contain', '30/30')
        cy.get('[data-cy=char-input]').click().type('Enter more text')
        cy.get('[data-cy=char-count]').should('contain', '30/30')
    });
});