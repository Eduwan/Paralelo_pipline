/// <reference types="Cypress" />

require("cypress-plugin-tab")
require('cypress-xpath');


//para que funcionen los comandos

describe("Pruebas de asserts", () => {
    it("asserts con contains", () => {
        cy.visit("https://bebetatum.com/")
        cy.title().should("eq","Home - Bebetatum")
        cy.wait(1500)

        cy.get("#menu-1-7a6c2e8").contains("Tienda").click({force:true})

    })

    it("asserts con find,eq", () => {
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/")
        cy.title().should("eq","ComboBox Dependiente | TestingQaRvn")
        cy.wait(1500)

        cy.get(".et_pb_module_inner").find("#wsf-1-section-9").find("#wsf-1-field-54").type("Edu")
        cy.get(".et_pb_module_inner").find("#wsf-1-section-9").eq(0).type("Edu@gmail.com")

    })


    it("asserts con find,eq,validando campos text y campo price", () => {
        cy.visit("https://bebetatum.com/")
        cy.title().should("eq","Home - Bebetatum")
        cy.wait(1500)

        cy.get("#menu-1-7a6c2e8").contains("Tienda").click({force:true})
        cy.get('.post-15 > .product-inner > .woo-entry-inner > .title > h2 > a').click()
        cy.get(".woocommerce-product-details__short-description").then((e)=>{
            cy.log(e.text())
            let Material=e.text()
            cy.log(Material)
            if(Material.includes("Algodón")){
                cy.log("El material es de algodón")
            }

        cy.get(".price").then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            precio=precio.slice(0,1)
            cy.log(precio)

        if(precio>7){
            cy.log("El precio sale de nuestro presupuesto")
        }else{
            cy.log("El precio es bueno, continúa con la compra")
        }

        })
   
    })
    })



    it("asserts con contain.text", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should("be.visible").type("Edu")
        cy.get('#wsf-1-field-22').should("be.visible").type("Ruiz Pérez")
        cy.get('#wsf-1-field-23').should("be.visible").type("edu@gmail.com")
        cy.get('#wsf-1-field-28').should("be.visible").type("Paseo maritimo malaga")
        cy.get('#wsf-1-field-28').should("contain.value","Paseo")
        cy.get('#wsf-1-help-28').should("contain.text","21 characters")
        cy.wait(2000)

       // cy.get('#wsf-1-field-27').should("be.visible").click()

    })

    it("asserts con have.text", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should("be.visible").type("Eduardo")
        cy.get('#wsf-1-field-21').should("contain.value","Edu").then(()=>{
      //  cy.get('#wsf-1-field-21').should("have.value","Edu").then(()=>{

            cy.get('#wsf-1-field-22').should("be.visible").type("Ruiz Pérez")
            cy.get('#wsf-1-field-23').should("be.visible").type("edu@gmail.com")
            cy.get('#wsf-1-field-28').should("be.visible").type("Paseo maritimo malaga")
        })
    })

    it("asserts con have.class", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should("be.visible").should("have.class","wsf-field nombre nom").then(()=>{
            cy.get('#wsf-1-field-21').type("Edu")
        })
      
    })

    it("asserts con have.class y AND", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should("be.visible").and("have.class","wsf-field nombre nom").then(()=>{
            cy.get('#wsf-1-field-21').type("Edu")
        })
      
    })

    it("asserts con not.have.class y AND", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get('#wsf-1-field-21').should("be.visible").and("not.have.class","wsf-field nombre nom124").then(()=>{
            cy.get('#wsf-1-field-21').type("Edu")
        })
      
    })

    it("asserts con length y css", () => {
        cy.visit("https://www.jquery-az.com/boots/demo.php?ex=39.0_1")
        cy.title().should("eq","A demo of table with pagination and search options")
        cy.wait(1000)

        cy.get("#DataTables_Table_0 > tbody >tr >td").should("have.length", 50).and("have.css", "padding", "8px")
       
       
    })

    it.only("asserts con contains por inicio", () => {
        let tiempo=1500

        cy.visit("https://syntaxprojects.com/basic-first-form-demo.php")
        cy.title().should("eq",'Syntax - Website to practice Syntax Automation Platform')
        cy.wait(tiempo)

        cy.get('.form-group > #user-message').should("be.visible").type("Mensaje de prueba")
        cy.wait(tiempo)
        cy.contains("[type='button']", "Show Message").should("be.visible").click()
        
       
    })



    

})  //Cierre describe