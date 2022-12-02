describe("Bienveido al curso de cypress - seccion1", () =>{
    
    it("Mi primer test -> Hola mundo", () =>{
        cy.log("Hola mundo")
        cy.wait(2000)
    })


    it("Segundo test -> Campo name", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        
        cy.get("#wsf-1-field-21").type("Eduardo")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Ruiz Pérez")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("eduruizperez@hotmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("677566718")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("Malaga City address")
        cy.wait(1000)
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)
    })

})//Cierre describe{}