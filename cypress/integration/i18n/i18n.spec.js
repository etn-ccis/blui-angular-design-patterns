/// <reference types="cypress" />


describe('i18n international', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/internationalization');
    });

    it('should display page title', () => {
        cy.get('.mat-toolbar.mat-primary').should('contain', 'Internationalization');
    });

    it('should display language in dropdown', () => {
        cy.get('.mat-select-value').click()
        cy.get('#mat-select-0-panel').should('contain', 'English')
        .should('contain', 'Spanish')
        .should('contain', 'German')
        .should('contain', 'Arabic')
        .should('contain', 'French')
        .should('contain', 'Portuguese')
        .should('contain', 'Chinese')
    });

    it('should display list items in english', () => {
        cy.get('[data-cy=list-items]').should('contain', 'Apple')
    });

    it('should display list items in spanish', () => {
        cy.get('.mat-select-value').click()
        cy.contains('Spanish').click()
        cy.get('[data-cy=list-items]').should('contain', 'Manzana')
    });

    it('should display list items in german', () => {
        cy.get('.mat-select-value').click()
        cy.contains('German').click()
        cy.get('[data-cy=list-items]').should('contain', 'Apfel')
    });

    it('should display list items in arabic', () => {
        cy.get('.mat-select-value').click()
        cy.contains('Arabic').click()
        cy.get('[data-cy=list-items]').should('contain', 'تفاحة')
    });

    it('should display list items in french', () => {
        cy.get('.mat-select-value').click()
        cy.contains('French').click()
        cy.get('[data-cy=list-items]').should('contain', 'Pomme')
    });

    it('should display list items in portuguese', () => {
        cy.get('.mat-select-value').click()
        cy.contains('Portuguese').click()
        cy.get('[data-cy=list-items]').should('contain', 'Maçã')
    });

    it('should display list items in chinese', () => {
        cy.get('.mat-select-value').click()
        cy.contains('Chinese').click()
        cy.get('[data-cy=list-items]').should('contain', '苹果')
    });
});