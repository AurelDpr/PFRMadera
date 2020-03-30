describe('Connection', function() {
  it('Redirection vers le site', function() {
    cy.visit('http://localhost:4200/#/client');
  });

  it('Ajout client', function() {
    cy.get('.text-center.col-2 > .rounded-circle')
      .click()
  });

  // it('Saisi mot de passe', function() {
  //   cy.get('#password')
  //     .type('admin')
  // });
  //
  // it('Click connection', function() {
  //   cy.get('.btn')
  //     .click()
  // });
});
