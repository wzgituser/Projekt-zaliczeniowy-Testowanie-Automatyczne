///<reference types = 'cypress' />
require('cypress-xpath');
import HomePageTestFour from '../../pages/KatalonObject.js';
import KatalonFixture from '../../fixtures/KatalonFixture.json'


context('Test Case#5: Validation of the date input"Visit Date (Required) at katalon-demo website"',()=>{
    describe('Assertion data in date input "Visit Date (Required)"',()=>{
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
        it('Validation of the date input, actions and assertions',()=>{
            cy.xpath('//*[@id="appointment"]/div/div/form/div[4]/label')
                .invoke('text')
                .then(text =>{
                    const textValue = text
                    cy.xpath('//*[@id="appointment"]/div/div/form/div[4]/label')
                        .should('have.text', textValue)
                });
            cy.get('@testData').then((data) =>{
                console.log(typeof data)
                console.log( data)
                cy.xpath('//*[@id="txt_visit_date"]')
                    .clear()
                    .type(data.date)
                cy.xpath('//*[@id="txt_visit_date"]')
                .should('have.value', data.date)
            });    
            cy.xpath('/html/body/div/div[1]/table')
                .should('be.visible')
            cy.get('body > div > div.datepicker-days > table > tbody > tr:nth-child(2) > td.active.day')
                .should('exist')
                .and('be.visible')
               cy.xpath('//*[@id="txt_visit_date"]').clear()
               cy.get('@testData').then(data=>{
                    cy.xpath('//*[@id="txt_visit_date"]').invoke('text').then(text=>{
                    expect(text).to.not.eql(data.date)
               })
               
            })
        });
    });
});