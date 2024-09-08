const INPUT_START_DATE ='#startdate'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_DAMAGE_INSURANCE= '#damageinsurance'
const INPUT_LEGAL_DEFENSE_INSURANCE='#LegalDefenseInsurance'
const BTN_NEXT_SELECT_PRICE_OPTION = '#nextselectpriceoption'


Cypress.Commands.add('productData', () =>{
    cy.get(INPUT_START_DATE).type('10/10/2024')
    cy.get(SELECT_INSURANCE_SUM).select('5.000.000,00')
    cy.get(SELECT_DAMAGE_INSURANCE).select('Partial Coverage')
    cy.get(INPUT_LEGAL_DEFENSE_INSURANCE).click({force:true})
    cy.get(BTN_NEXT_SELECT_PRICE_OPTION).click({force:true}) 
    
})