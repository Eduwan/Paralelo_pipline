/// <reference types="Cypress" />

require("cypress-plugin-tab")
require('cypress-xpath');
require("@4tw/cypress-drag-drop")
import "cypress-file-upload"


//para que funcionen los comandos

describe("Alerts en Cypress", () => {
    it("Alerta #1", () => {
        let tiempo=1500

        cy.visit("https://getbootstrap.com/docs/5.0/components/modal/")
        cy.title().should("eq",'Modal · Bootstrap v5.0')
        cy.wait(tiempo)

        cy.get(':nth-child(17) > .btn').click()
        cy.wait(tiempo)


        // cy.on("windows:alert" , (str) =>{
        //     cy.wait(tiempo)

        //     expect(str).to.equal("Woohoo, you're reading this text in a modal!")
        //     return true
        // })

        cy.xpath("//*[@id='exampleModalLive']/div/div/div[3]/button[1]").click({force:true})

        cy.get(':nth-child(17) > .btn').click()
        cy.wait(tiempo)
        cy.xpath("//*[@id='exampleModalLive']/div/div/div[3]/button[2]").click({force:true})


        //*[@id="exampleModalLive"]/div/div/div[3]/button[2]
    })


})  //Cierre describe