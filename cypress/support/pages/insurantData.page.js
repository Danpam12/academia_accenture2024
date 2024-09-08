const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTH_DATE = '#birthdate'
const IMPUT_GENDER_MALE = '#gendermale'
const INPUT_STREET_ADDRESS = '#streetaddress'
const SELECT_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCCUPATION = '#occupation'
const INPUT_HOBBIES_SPEEDING = '#speeding'
const INPUT_WEBSITE = '#website'
//const BTN_OPEN = '.ideal-file-upload'
const BTN_NEXT_PRODUCT_DATA = '#nextenterproductdata'


Cypress.Commands.add('insurantData', () =>{
    cy.get(INPUT_FIRST_NAME).type(Cypress.env('firstname'), {log: false})
    cy.get(INPUT_LAST_NAME).type(Cypress.env('lastname'), {log: false})
    cy.get(INPUT_BIRTH_DATE).type(Cypress.env('birthdate'), {log: false})
    cy.get(IMPUT_GENDER_MALE).click({force:true}) 
    cy.get(INPUT_STREET_ADDRESS).type(Cypress.env('streetaddress'), {log: false})
    cy.get(SELECT_COUNTRY).select('United States')
    cy.get(INPUT_ZIPCODE).type(Cypress.env('zipcode'), {log: false})
    cy.get(INPUT_CITY).type(Cypress.env('city'), {log: false})
    cy.get(INPUT_OCCUPATION).select('Employee')
    cy.get(INPUT_HOBBIES_SPEEDING).click({force:true})  
    cy.get(INPUT_WEBSITE).type(Cypress.env('website'), {log: false})
    //cy.get(BTN_OPEN).click();
    cy.get(BTN_NEXT_PRODUCT_DATA).click() 
})