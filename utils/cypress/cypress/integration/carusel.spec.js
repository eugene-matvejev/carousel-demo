describe('carusel', () => {
    it('as a user, I should see carusel images after page been loaded', () => {
        cy.server();
        cy.route(/api/).as('api');

        cy.visit('/');

        cy.wait('@api').then(() => {
            cy.get('[data-cy^="carusel-item"]').should('exist');
        });
    });
});