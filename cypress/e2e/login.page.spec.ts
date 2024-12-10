describe('Prueba E2E de Formulario Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Debe cargar el Formulario correctamente', () => {
    cy.get('[data-testid="Usuario-input"]').should('exist');
    cy.get('[data-testid="Password-input"]').should('exist');
    cy.get('[data-testid="IniciarSesion-button"]').should('exist');
    cy.get('[data-testid="Registrar-button"]').should('exist');
  });

});
