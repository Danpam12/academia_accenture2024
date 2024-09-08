const BTN_NAV_MOTORCYCLE = '#nav_motorcycle'

Cypress.Commands.add('motorcycle', () => {
    cy.get(BTN_NAV_MOTORCYCLE).click()
})