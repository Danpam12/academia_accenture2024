const INPUT_SELECT_GOLD = '#selectgold'
const BTN_NEXT_SEND_QUOTE = '#nextsendquote'

Cypress.Commands.add('priceOption', () =>{
cy.get(INPUT_SELECT_GOLD).click({force:true}) 
cy.get(BTN_NEXT_SEND_QUOTE).click({force:true})
})