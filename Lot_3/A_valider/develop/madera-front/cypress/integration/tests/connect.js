describe('Connection', function() {
  it('Redirection vers le site', function() {
    cy.visit('http://localhost:4200/');
  });

  it('Saisi identifiant', function() {
    cy.get('#identifiant')
      .type('admin')
  });

  it('Saisi mot de passe', function() {
    cy.get('#password')
      .type('admin')
  });

  it('Click connection', function() {
    cy.get('.btn')
      .click()
  });
});
