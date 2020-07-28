/// <reference types="cypress" />


describe('Loading states', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/loading');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Loading States');
    });

    it('Should trigger loading state placeholders on refresh ', () => {
        cy.get('[data-cy=toolbar-refresh]').click()
        cy.get('.mat-figure > .mat-card > [data-cy=place-holder] > .ph-item').should('be.visible')
        cy.wait(300)
        cy.get('.mat-figure > .mat-card > [data-cy=place-holder] > .ph-item').should('not.be.visible')
    });
});