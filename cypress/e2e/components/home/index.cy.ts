// e2e component home index 

describe('Home Page', () => {
  it('Should render home page', () => {
    cy.visit('/home')
    cy.get('h1').contains('Test')

  })
 })