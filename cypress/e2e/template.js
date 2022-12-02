/// <reference types="Cypress" />

require("cypress-plugin-tab")
require('cypress-xpath');
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"


//para que funcionen los comandos

describe("Descripcion General", () => {

    before(()=>{
        cy.log("Esto inicia al principio, solo una vez")
        cy.visit("    ")
        cy.title().should("eq",'  ')
        cy.wait(1500)

    })

    Cypress.on("uncaught:exception", (err, runnable)=>{
        // returning false here prevents Cypress from
        // failing the test
        return false

    })

    it("Test#1", () => {
        cy.visit("   ")

    })


})  //Cierre describe