/// <reference types="Cypress" />

require("cypress-plugin-tab")
require('cypress-xpath');
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"


//para que funcionen los comandos

describe("Reto Cypress Custom commands", () => {

    beforeEach(()=>{
        cy.log("Esto inicia al principio, solo una vez")
        cy.visit("https://wet-boew.github.io/v4.0-ci/demos/formvalid/formvalid-en.html")
        cy.title().should("eq",'Form validation - Working examples - Web Experience Toolkit')
        cy.wait(1500)

    })

    Cypress.on("uncaught:exception", (err, runnable)=>{
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    after(()=>{
        cy.log("Log de todas las pruebas:")
        cy.validar_campo2("//a[@href='#fname1']", "Please enter at least 2 characters", "Nombreeee", 1000)
        cy.validar_campo("//a[@href='#pcodeca1']", "Please specify a valid postal code", "Cod.Postal", 1000)
        cy.validar_campo("//a[@href='#url1']", "Please enter a valid URL", "Página web", 1000)

    })

    it("Test#0, todos los campos validos", () => {
        cy.log("Hola")
        cy.Form_all("Mr.", "Eduardo", "Ruiz Pérez", "+15784532134", "T7X 0A4", "edu@gmail.com", "https://www.edu.com", 500)

    })
    
    it("Test#1, invalida por falta de CosigoPostal de Canada", () => {
        cy.log("Hola")
        cy.Form_all("Mr.", "Eduardo", "Ruiz Pérez", "+15784532134", "B1N", "edu@gmail.com", "https://www.edu.com", 500)

    })

    it("Test#2, invalida por mail incorrecto", () => {
        cy.log("Hola")
        cy.Form_all("Mr.", "Eduardo", "Ruiz Pérez", "+15784532134", "B1N", "edugmail.com", "https://www.edu.com", 500)
        cy.xpath("//a[@href='#email1']").then((val)=>{
            let dato=val.text()
            let mensaje='Email address - Please enter a valid email address.'
            cy.log(dato)
            cy.log(mensaje)

             expect(dato).to.contain(mensaje) 
            
             cy.log("#############################")
             cy.log("El email no es valido")
             cy.log("#############################")

           // expect(dato).to.equal(mensaje)
             
        })


        cy.validar_campo("//a[@href='#pcodeca1']", "Please specify a valid postal code", "Cod.Postal", 1000)
    })

    it.only("Test#3, Comprueba valildaciones e informa por log", () => {
        cy.log("Hola")
        cy.Form_all("Mr.", "E", "Ruiz Pérez", "+15784532134", "B1N", "edu@gmail.com", "httpsww.edu.com", 500)
        cy.validar_campo("//a[@href='#pcodeca1']", "Please specify a valid postal code", "Cod.Postal", 1000)
        cy.validar_campo("//a[@href='#url1']", "Please enter a valid URL", "Página web", 1000)
      //  cy.validar_campo("//a[@href='#fname1']", "Please enter at least 2 characters", "Nombre", 1000)
        cy.validar_campo2("//a[@href='#fname1']", "Please enter at least 2 characters", "Nombreeee", 1000)
    })




})  //Cierre describe