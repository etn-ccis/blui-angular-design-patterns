/// <reference types="cypress" />


describe('Form validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/forms-and-validation/sectioned-form');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Sectioned Form');
    });

    it('should display required for fields on submit color #ca3c3d', () => {
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=name-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.get('[data-cy=address-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.get('[data-cy=city-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.get('[data-cy=state-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.get('[data-cy=zip-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.get('[data-cy=fname-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.get('[data-cy=email-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
    });

    it('should display not required for fields after refresh', () => {
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=name-required]')
        .should('contain', 'Required')
        .invoke('css', 'color').should('equal', 'rgb(202, 60, 61)')
        cy.reload()
        cy.get('[data-cy=name-required]').should('not.exist')
    });

    it('should display factory name char count 15/50', () => {
        cy.get('[data-cy=name]').click().type('Enter some text')
        cy.get('[data-cy=char-count]').should('contain', '15/50')
    });

    it('should display tooltip info on hover', () => {
        cy.get('[data-cy=tool-tip]').invoke('show').click()
        .should('be.visible')
        cy.contains('PXB Protection provides a three-year power expert warranty')
    });

    it('should display error invalid email', () => {
        cy.get('[data-cy=email-address]').type('admin')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=email-error]').should('contain', 'Please enter a valid email address')
    });
});