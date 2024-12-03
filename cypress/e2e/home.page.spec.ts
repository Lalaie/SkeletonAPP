describe('Prueba E2E de Formulario Home', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('Debe cargar el Formulario correctamente', () => {
    cy.get('[data-testid="Nombre-input"]').should('exist');
    cy.get('[data-testid="Apellido-input"]').should('exist');
    cy.get('[data-testid="Nivel-input"]').should('exist');
    cy.get('[data-testid="Fecha-input"]').should('exist');
    cy.get('[data-testid="MostrarDatos-button"]').should('exist');
  });

});