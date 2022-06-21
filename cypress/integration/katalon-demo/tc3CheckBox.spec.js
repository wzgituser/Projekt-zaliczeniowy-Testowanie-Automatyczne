///<reference types = 'cypress' />
require('cypress-xpath');
import HomePageTestFour from '../../pages/KatalonObject.js';

context('Test Case #3:"Apply for hospital readmission" check box functional test',()=>{
    describe('check box test',()=>{
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
            }); 
        });
        it('functional test of the check box element "Apply for hospital readmission"',()=>{
            cy.get('#chk_hospotal_readmission').check().should('be.checked')
            cy.get('#chk_hospotal_readmission').uncheck().should('not.be.checked')
        });
    });
});
