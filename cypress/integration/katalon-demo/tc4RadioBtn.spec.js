///<reference types = 'cypress' />
require('cypress-xpath');
import HomePageTestFour from '../../pages/KatalonObject.js';
import KatalonFixture from '../../fixtures/KatalonFixture.json'


context('Test Case #4:"Health Program" radio-buttons, functional test',()=>{
    describe('functional testing of the radio button elements',()=>{
        beforeEach(()=>{
            cy.visit('/');
            const homePage = new HomePageTestFour;
            cy.url().then(url =>{cy.log('entry url:'+ url)})
            homePage.getBtn().click();
            homePage.typeUser();
            homePage.typePassword();
            homePage.getEnterBtn().click();
            cy.url().then(url =>{
                cy.log('current url' + url)
            })
            cy.fixture('KatalonFixture').as('testData')
                
           
        });
        it('test of the radio-button "Health Program"',()=>{
            cy.get('#radio_program_medicare')
                .should('be.checked')
            cy.xpath('//*[@id="radio_program_medicaid"]')
                .check().should('be.checked')
            cy.get('#radio_program_medicare')
                .check().should('be.checked')
            cy.xpath('//*[@id="radio_program_none"]')
                .check().should('be.checked')
            cy.get('#radio_program_medicare')
                .check().should('be.checked')    
        });
    });
});