/// <reference types="Cypress" />

require("cypress-plugin-tab")
require('cypress-xpath');
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"


//para que funcionen los comandos

describe("Reto Cypress Custom commands", () => {

    beforeEach(()=>{
        cy.log("Esto inicia al principio, solo una vez")
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should("eq",'ComboBox | TestingQaRvn')
        cy.wait(1500)

    })

    Cypress.on("uncaught:exception", (err, runnable)=>{
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it("Test#1, invalida por numeros en nombre", () => {
        cy.log("Hola")
        cy.ComboBox_all("12345","Ruiz Pérez", "edu@gmail.com", "678654321", "Texto de pruebas", "PYTHON", "Selenium", "Linux", 1000)

    })

    it.only("Test#2, invalida por mail incorrecto", () => {
        cy.log("Hola")
        cy.ComboBox_all("Eduardo","Ruiz Pérez", "edugmail.com", "678654321", "Texto de pruebas", "PYTHON", "Selenium", "Linux", 1000)

    })

    it("Test#3, valida", () => {
        cy.log("Hola")
        cy.ComboBox_all("Eduardo","Ruiz Pérez", "edu@gmail.com", "678654321", "Texto de pruebas", "PYTHON", "Selenium", "Linux", 1000)
    
        })


})  //Cierre describe