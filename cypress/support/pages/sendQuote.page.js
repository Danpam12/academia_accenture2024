const A_SEND_QUOTE = '#sendquote'

Cypress.Commands.add('sendQuote', () => {
    cy.get(A_SEND_QUOTE).should('contain.text', 'Send Quote')
})