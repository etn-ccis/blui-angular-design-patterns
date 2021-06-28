/// <reference types="cypress" />

const sizes = ['iphone-6', 'ipad-2'];
const urls = ['http://localhost:4200/app-bar/collapsible', 'http://localhost:4200/app-bar/search',
'http://localhost:4200/loading-states/spinner-overlays','http://localhost:4200/loading-states/contextual-spinners','http://localhost:4200/loading-states/skeletons-loader',
'http://localhost:4200/loading-states/progress-bars','http://localhost:4200/form-validation', 'http://localhost:4200/internationalization',
'http://localhost:4200/lists/action-list', 'http://localhost:4200/lists/data-list', 'http://localhost:4200/lists/multi-select-list',
'http://localhost:4200/lists/sortable-list', 'http://localhost:4200/lists/status-list', 'http://localhost:4200/lists/responsive-table',
'http://localhost:4200/overlays/basic-bottom-sheet', 'http://localhost:4200/overlays/complex-bottom-sheet',
'http://localhost:4200/dynamic-stepper'];

describe('Hidden toolbar menu displays on small devices', () => {
    urls.forEach(url => {
    describe(`url: ${url}`, () => {
    sizes.forEach(size => {
    it(`should display menu icon ${url}`, () => {
    cy.visit(url);
    cy.viewport(size);
    cy.get('[data-cy=toolbar-menu]')
    .should('be.visible')
    });
    });
    });
    });
    });