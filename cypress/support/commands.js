// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('sel_txt', (selector, texto) => {
    cy.get(selector).should("be.visible").clear().type(texto)
    cy.wait(1000)
})

Cypress.Commands.add('sel_txt_time', (selector, texto,t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").clear().type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('xpath_txt', (selector, texto) => {
    cy.xpath(selector).should("be.visible").clear().type(texto)
    cy.wait(1000)
})

Cypress.Commands.add('Click', (selector,t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force', (selector,t) => {
    let tiempo=t
    cy.get(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force_xpath', (selector,t) => {
    let tiempo=t
    cy.xpath(selector).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('validar_campo', (selector, msj, campo, t) => {
    let tiempo=t
    cy.xpath(selector).should("be.visible").then((val)=>{
            let dato=val.text()
            let mensaje=msj
            cy.log(dato)
            cy.log(mensaje)

            expect(dato).to.contain(mensaje) 
            
            cy.log("#############################")
            cy.log("El " +campo +" no es valido")
            cy.log("#############################")
             
        })
})

Cypress.Commands.add('validar_campo2', (selector, msj, campo, t) => {
    let tiempo=t
    cy.xpath(selector).should("be.visible").should("contain",msj).then((val)=>{
            let dato=val.text()
            let mensaje=msj
            cy.log(dato)
            cy.log(mensaje)
            
            cy.log("#############################")
            cy.log("El " +campo +" no es valido")
            cy.log("#############################")
             
        })
})




// FUNCIONES POR CONJUNTO o COMPLETAS
// CREANDO LA FUNCION TestingQaRvn

Cypress.Commands.add('TestingQaRvn_all', (name, ap, mail, phone, dir, t) => {
    let tiempo=t
    cy.get("#wsf-1-field-21").should("be.visible").clear().type(name)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-22").should("be.visible").clear().type(ap)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-23").should("be.visible").clear().type(mail)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-24").should("be.visible").clear().type(phone)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-28").should("be.visible").clear().type(dir)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-27").should("be.visible").click({force:true})
    cy.wait(tiempo)

})

Cypress.Commands.add('ComboBox_all', (name, ap, mail, phone, dir, lang, radio, os, t) => {
    let tiempo=t
    cy.get("#wsf-1-field-45").should("be.visible").clear().type(name)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-46").should("be.visible").clear().type(ap)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-47").should("be.visible").clear().type(mail)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-48").should("be.visible").clear().type(phone)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-49").should("be.visible").clear().type(dir)
    cy.wait(tiempo)
    cy.get("#wsf-1-label-50-row-2").should("be.visible").type(lang)
    cy.wait(tiempo)
    cy.get("#wsf-1-label-51-row-3").should("be.visible").type(radio)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-53").should("be.visible").select(os)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-52").should("be.visible").click({force:true})
    cy.wait(tiempo)

})

Cypress.Commands.add('Form_all', (title, name, ap, phone, cp, mail, url, t) => {
    let tiempo=t
    cy.get('#title1').should("be.visible").select(title)
    cy.wait(tiempo)
    cy.get('#fname1').should("be.visible").clear().type(name)
    cy.wait(tiempo)
    cy.get('#lname1').should("be.visible").clear().type(ap)
    cy.wait(tiempo)
    cy.get("#tel1").should("be.visible").clear().type(phone)
    cy.wait(tiempo)
    cy.get('#pcodeca1').should("be.visible").clear().type(cp)
    cy.wait(tiempo)
    cy.get('#email1').should("be.visible").clear().type(mail)
    cy.wait(tiempo)
    cy.get('#url1').should("be.visible").type(url)
    cy.wait(tiempo)
    const ruta="cat1.jpg"
    cy.get('[type="file"]').attachFile(ruta)
    cy.wait(tiempo)
    cy.get('#agree1').check()
    cy.wait(tiempo)
    cy.get('#animal2').should("be.visible").click()
    cy.wait(tiempo)
    cy.get('#status3').should("be.visible").click()
    cy.wait(2*tiempo)
    cy.get('#validation-example > .btn-primary').should("be.visible").click({force:true})
    cy.wait(tiempo)

})