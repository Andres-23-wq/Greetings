describe('Die Startseite', () => {
  it('wird erfolgreich geladen', () => {
    cy.visit('/frontend/greeting.html')
  })
})