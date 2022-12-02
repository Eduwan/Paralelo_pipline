/// <reference types="Cypress" />

require("cypress-plugin-tab")
require('cypress-xpath');
import "cypress-file-upload"

//para que funcionen los comandos

describe("Carga de archivos", () => {
    it("Tests carga de archivos", () => {
        cy.visit("https://testingqarvn.com.es/upload-files/")
        cy.title().should("eq","Upload Files | TestingQaRvn")
        cy.wait(1000)

        const ruta="cat1.jpg"
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)

    })


})  //Cierre describe