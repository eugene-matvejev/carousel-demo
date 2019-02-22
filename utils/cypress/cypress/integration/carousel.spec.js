describe('carousel', () => {
    it('as a user, I should see carousel images after page been loaded', () => {
        cy.server();
        cy.route(/api/).as('api');

        cy.visit('/');

        cy.wait('@api').then(() => {
            cy.get('[data-cy^="carousel-item"]').should('exist');
        });
    });
});