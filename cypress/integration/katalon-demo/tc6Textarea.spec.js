///<reference types = 'cypress' />
require('cypress-xpath');
import HomePageTestFour from '../../pages/KatalonObject.js';
import KatalonFixture from '../../fixtures/KatalonFixture.json'


context('Test Case#6: Validation of the "Comment" field at Katalon-demo" website',()=>{
    describe('functional testing of the form elements',()=>{
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
            cy.fixture('KatalonFixture').as('testData')
        });
        it('validation of the "comment" textarea ',()=>{
            cy.xpath('//*[@id="txt_visit_date"]')
                    .clear()
                    .type(KatalonFixture.date)
            // cy.xpath('//*[@id="txt_visit_date"]')        
            //         .type({esc})
            cy.xpath('//*[@id="appointment"]/div/div/form/div[5]/label').click()
            cy.xpath('//*[@id="appointment"]/div/div/form/div[5]/label')
                .invoke('text')
                .then(text =>{
                    const compareText = text
                    cy.xpath('//*[@id="appointment"]/div/div/form/div[5]/label')
                        .should('have.text', compareText)
                })
            cy.xpath('//*[@id="txt_comment"]')
                    .clear()
                    .type(KatalonFixture.stringValue)          
            cy.xpath('//*[@id="txt_comment"]')
                .invoke('val').then(val =>{
                    const textVal = val
                    expect(textVal).to.eql(KatalonFixture.stringValue)
                    expect(textVal).to.be.a('string')
                    expect(textVal).to.have.lengthOf(31)
                })
            cy.xpath('//*[@id="txt_comment"]')
                .clear()
                .type(KatalonFixture.intigerValue)
            cy.xpath('//*[@id="txt_comment"]')
                .invoke('val').then(val =>{
                    const textVal = val
                    expect(textVal).to.contain(KatalonFixture.intigerValue)
                    expect(textVal).to.be.a('string')
                    expect(textVal).to.have.lengthOf(10)
                })
            cy.xpath('//*[@id="txt_comment"]').clear()
            cy.xpath('//*[@id="txt_comment"]')
                .clear()
                .type(KatalonFixture.shiftPlusSigns)
            cy.xpath('//*[@id="txt_comment"]')
                .invoke('val').then(val =>{
                    const textVal = val
                    expect(textVal).to.contain(KatalonFixture.shiftPlusSigns)
                    expect(textVal).to.be.a('string')
                  
                })
            cy.xpath('//*[@id="txt_comment"]').clear()
            });
        });
});