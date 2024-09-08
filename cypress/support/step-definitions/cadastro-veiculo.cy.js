import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuario esta na aba do portal da Tricentis', () => {
    cy.visit('/app.php')
})
When('o usuario clicar na aba Motorcyle', () => {
    cy.motorcycle()
})

And('preenche o formulario da aba Vehicle Data', () =>{
    cy.vehicleData()
}) 

And('preenche o formulario da aba Insurant Data', () =>{
    cy.insurantData()
})

And('preenche o formulario da aba Product Data', () =>{
    cy.productData()
})

And('preenche o formulario da aba Price Option', () =>{
    cy.priceOption()
})

Then('valida a aba Send Quote', () =>{
    cy.sendQuote()
})
