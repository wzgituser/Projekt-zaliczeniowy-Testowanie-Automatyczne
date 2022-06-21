///<reference types = 'cypress' />
require('cypress-xpath')
import HomePageTestFive from '../../pages/tcSeven.js'

context('Test Case#7:Functional test of the sideMenu  navbar in logged state at "https://katalon-demo-cura.herokuapp.com/#appointment"',()=>{
    describe('testing of the  list elements in context of the text value, its functionality and visibility',()=>{
        beforeEach(()=>{
            cy.visit('/')
            const pageObject = new HomePageTestFive;
            pageObject.getBtn().click();
            pageObject.typeUser();
            pageObject.typePassword();
            pageObject.getEnterBtn().click();
            cy.url().then(url=>{cy.log('entry url:'+ url)})
            cy.wait(500)
        })
        it('Functional test of the side  bar menu elements ',()=>{
             cy.xpath('//*[@id="menu-toggle"]').click()
             cy.get('#sidebar-wrapper > ul > li.sidebar-brand > a')
                .should('be.visible')
                .and('have.text','CURA Healthcare')
        
            cy.xpath('//*[@id="menu-toggle"]').click()
            cy.get('#sidebar-wrapper > ul')
                .children()
                .should('have.length', 6)
            cy.url().then(entryUrl =>{
                cy.log(entryUrl)
                cy.xpath('//*[@id="menu-toggle"]').click()
                cy.get('#sidebar-wrapper > ul > li:nth-child(3) > a')
                    .should('be.visible')
                    .focus()
                    .click()
                cy.wait(1000)
                cy.url().then(newUrl =>{
                    expect(newUrl).to.not.equal(entryUrl)
                })
                cy.go('back')
            })  
        
            cy.url().then(entryUrl =>{
                cy.log(entryUrl)
                cy.xpath('//*[@id="menu-toggle"]').click()
                cy.get('#sidebar-wrapper > ul > li:nth-child(4) > a')
                    .should('be.visible')
                    .focus()
                    .click()
                cy.wait(1000)
                cy.url().then(newUrl =>{
                    expect(newUrl).to.not.equal(entryUrl)
                })
                cy.go('back')
            })  
       
            cy.url().then(entryUrl =>{
                cy.log(entryUrl)
                cy.xpath('//*[@id="menu-toggle"]').click()
                cy.get('#sidebar-wrapper > ul > li:nth-child(5) > a')
                    .should('be.visible')
                    .focus()
                    .click()
                cy.wait(1000)
                cy.url().then(newUrl =>{
                    expect(newUrl).to.not.equal(entryUrl)
                })
                cy.go('back')
            })  
       
            cy.url().then(entryUrl =>{
                cy.log(entryUrl)
                cy.xpath('//*[@id="menu-toggle"]').click()
                cy.get('#sidebar-wrapper > ul > li:nth-child(6) > a')
                    .should('be.visible')
                    .focus()
                    .click()
                cy.wait(1000)
                cy.url().then(newUrl =>{
                    expect(newUrl).to.not.equal(entryUrl)
                })
                cy.go('back')
            })   
        })
    })
})