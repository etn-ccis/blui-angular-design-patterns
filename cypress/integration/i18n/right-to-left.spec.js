/// <reference types="cypress" />

describe('R2L', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/internationalization');
    });

    it('should display default page title', () => {
        cy.get('.app-bar').should('contain', 'Internationalization');
    });

    it('should display page title RTL', () => {
        cy.get('[data-cy=change-language]').click()
        cy.contains('Arabic').click()
        cy.get('.app-bar').should('contain', 'تدويل')
            .invoke('prop', 'offsetLeft').should('be.lessThan', 20)
    });

    it('should display R2L menu RTL', () => {
        cy.get('[data-cy=change-language]').click()
        cy.contains('Arabic').click()
        cy.get('[data-cy=R2L-menu]')
            .invoke('prop', 'offsetLeft').should('be.greaterThan', 5)
    });

    it('should display language selector RTL', () => {
        cy.get('[data-cy=change-language]').click()
        cy.contains('Arabic').click()
        cy.get('[data-cy=change-language]')
            .invoke('prop', 'offsetLeft').should('eq', 0)
    });

    // it('should display item list RTL', () => {
    //     cy.get('[data-cy=change-language]').click()
    //     cy.contains('Arabic').click()
    //     // cy.get('[data-cy=list-items] > :nth-child(2) > .mat-list-item > .mat-list-item-content').first()
    //     cy.get('[data-cy=list-items]').first()
    //     .invoke('prop', 'offsetLeft').should('be.greaterThan', 10)
    // });
});