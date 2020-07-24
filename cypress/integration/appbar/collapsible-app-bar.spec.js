/// <reference types="cypress" />


describe('Collapsible app bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/app-bar/collapsible');
    });

    it('should display banner', () => {
        cy.get('[data-cy=banner]').should('be.visible')
    });

    it('should display tool bar on scroll', () => {
        cy.get('[data-cy=banner]').scrollIntoView({ duration: 1000, offset:{ top: 200, left: 0 }})
        cy.get('[data-cy=app-bar]').scrollIntoView().should('be.visible')
    });
});