///<reference types = 'cypress' />
require('cypress-xpath')
import tcEight from '../../fixtures/tcEight.json'
import HomePageTestSix from '../../pages/tcEight.js'

context('Test Case #8: Data Assertion in "Appointment Confirmation" at "https://katalon-demo-cura.herokuapp.com" ',()=>{
    describe('Compare of data from "Make Appointment" form with data in "Appointment Confirmation" form',()=>{
        before(()=>{
            cy.visit('/')
            const pageObject = new HomePageTestSix;
            cy.fixture('tcEight').as('testSix')
            pageObject.getBtn().click();
            pageObject.typeUser();
            pageObject.typePassword();
            pageObject.getEnterBtn().click();
            pageObject.setDropDown();
            pageObject.checkBox();
            pageObject.setRadioInput();
            pageObject.getRadioText().invoke('text').as('radioText')
            pageObject.setDate().type(tcEight.date);
            pageObject.hideDateBox().click();
            pageObject.setRandomText().clear().type(tcEight.text);
            pageObject.getConfirmationBtn().click();
            
        });
        it('Assertion of the form "Appointment Confirmation" fields',()=>{
            cy.get('@radioText').then(text=>{
                 cy.get('#facility').then(textTwo =>{
                        expect(textTwo).to.contain(text)
                });
            });
            cy.get('#hospital_readmission').invoke('text').then(text =>{
                        expect(text).to.contain('Yes')
                })
            cy.get('#visit_date').invoke('text').then(data =>{
                expect(data).to.deep.equal(tcEight.date)   
            });
            cy.get('#comment').invoke('text').then(data =>{ 
                    expect(data).to.deep.equal(tcEight.text)
                });   
        });
    });
});

