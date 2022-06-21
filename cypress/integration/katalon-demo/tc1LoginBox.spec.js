///<reference types='cypress'/>
require('cypress-xpath');
import HomePage from '../../pages/tc1KataLogin.js';

context('TestCase#1: Test fo the login box with assertion of the typed values from "https://katalon-demo-cura.herokuapp.com/"',()=>{
    describe('Geting the direction of the action with functional test and assertions',()=>{
        before(()=>{
            const homePage = new HomePage();

            cy.visit('/');
            homePage.getBtn().click();
            cy.wait(600) ;
        });
        it('Coppying the values wity typping to the directed fields,and assertion of the values',()=>{
            
            cy.get('#login > div > div > div.col-sm-offset-3.col-sm-6 > form > div.alert.alert-info > div:nth-child(1) > div > div > input')
                .invoke('val').then((val)=>{
                    let user = val
                    cy.get('#txt-username').type(user)
                    cy.get('#txt-username').invoke('val').then(val =>{
                        expect(val).to.deep.equal(user)
                    })
                })
            cy.get('#login > div > div > div.col-sm-offset-3.col-sm-6 > form > div.alert.alert-info > div:nth-child(2) > div > div > input')
                .invoke('val').then(val =>{
                    let password = val
                    cy.get('#txt-password').type(password)
                    cy.get('#txt-password').invoke('val').then(val=>{
                        expect(val).to.eql(password)
                    })
                })
            cy.get('#btn-login').focus().screenshot('btnFocusTestThree').click()
        })
    })
})
