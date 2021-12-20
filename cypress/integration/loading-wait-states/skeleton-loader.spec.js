/// <reference types="cypress" />


describe('Skeleton loading state', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/loading-states/skeletons-loader');
    });

    it('should display page title', () => {
        cy.get('[data-cy=blui-toolbar]').should('contain', 'Skeletons')
    });

    it('Should trigger score card skeleton loading on refreash', () => {
        cy.reload()
        cy.get('.score-card-section > .mat-card > .ph-item').should('be.visible')
    });
});