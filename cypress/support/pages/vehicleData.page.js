
const SELECT_MAKE = '#make'
const SELECT_MODEL = '#model'
const INPUT_CYLINDER_CAPACITY = '#cylindercapacity'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_OF_MANUFACTURE = '#dateofmanufacture'
const SELECT_NUMBER_OF_SEATS_MOTORCYCLE = '#numberofseatsmotorcycle'
const INPUT_LISTPRICE = '#listprice'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT_ENTER_INSURANT_DATA = '#nextenterinsurantdata'


Cypress.Commands.add('vehicleData', () => {
    cy.get(SELECT_MAKE).select('Audi')
    cy.get(SELECT_MODEL).select('Three-Wheeler')
    cy.get(INPUT_CYLINDER_CAPACITY).type('800')
    cy.get(INPUT_ENGINE_PERFORMANCE).type('1000')
    cy.get(INPUT_DATE_OF_MANUFACTURE).type('09/01/2024')
    cy.get(SELECT_NUMBER_OF_SEATS_MOTORCYCLE).select('3')
    cy.get(INPUT_LISTPRICE).type('5000')
    cy.get(INPUT_ANNUAL_MILEAGE).type('300')
    cy.get(BTN_NEXT_ENTER_INSURANT_DATA).click()
   
})