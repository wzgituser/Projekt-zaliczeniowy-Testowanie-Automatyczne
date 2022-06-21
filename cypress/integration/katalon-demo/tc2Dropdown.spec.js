///<reference types = 'cypress' />
require('cypress-xpath');
import tc2Wikipedia from '../../fixtures/tc2Wikipedia.json'
import HomePageTestFour from '../../pages/KatalonObject.js';

context('TestCase#2: Validation of the dropdown menu with validation of each element value',()=>{
    describe('functional testing of the dropdown  elements',()=>{
        before(()=>{
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
            cy.fixture('tc2Wikipedia').as('testData')
                
           
        });
        it('assertion of the dropdown elements lenght and its texts values',()=>{
            cy.xpath('//*[@id="combo_facility"]').children().should('have.length',3)
            cy.xpath('//*[@id="combo_facility"]')
                .select('Tokyo CURA Healthcare Center')
                .invoke('text')
                .then(text =>{
                    const textVal = text
                    cy.xpath('//*[@id="combo_facility"]').should('have.text', textVal)
                    cy.log(textVal)
                })
            cy.xpath('//*[@id="combo_facility"]')
                .select('Hongkong CURA Healthcare Center')
                .invoke('text')
                .then(text =>{
                    const textVal = text
                    cy.xpath('//*[@id="combo_facility"]').should('have.text', textVal)
                    cy.log(textVal)
                })
            cy.xpath('//*[@id="combo_facility"]')
                .select('Seoul CURA Healthcare Center')
                .invoke('text')
                .then(text =>{
                    const textVal = text
                    cy.xpath('//*[@id="combo_facility"]').should('have.text', textVal)
                    cy.log(textVal)
                })

        })
       
        
    });
});