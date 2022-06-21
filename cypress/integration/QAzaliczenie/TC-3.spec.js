///<reference types = 'cypress' />
require('cypress-xpath')
import tc3WikiTwo from '../../fixtures/tc3WikiTwo.json'
import WikipediaPageObject from '../../pages/tc3WikiTwo.js'

context('Validation of the feature "losowy tekst" at "Wikipedia',()=>{
    describe('Feature testing from the entry state of subpage, after search action',()=>{
        before(()=>{
            cy.visit('https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna')
            const pageObject = new WikipediaPageObject;
            pageObject.typeText().type(tc3WikiTwo.text)
            pageObject.typeText().type('{enter}')
            cy.url().as('url')
            })
            //can//not//take//responsibility///for//the//result///of///the///random//content//
            it('getting directed feature and assaertion of its values',()=>{
                cy.get('#n-randompage > a').click()
                cy.get('@url').then(url =>{
                    cy.url().then(newUrl =>{
                        cy.log('entry url:' + url)
                        cy.log('newUrl:' + newUrl)
                        expect(newUrl).not.to.equal(url)
                    })
                cy.wait(2000)
                cy.xpath('//*[@id="mw-content-text"]/div[1]/p[1]/b/text()').as('title')
                cy.get('body').then((body) =>{
                    if((body.find('#firstHeading').lenght > 0)&&(body.find('#mw-content-text > div.mw-parser-output > table').length > 0)){
                        cy.get('@title').then(function(title){
                            let titleJ = JSON.stringify(title)
                            cy.get('#mw-content-text > div.mw-parser-output > table')
                                    .screenshot('this is random text about:' + titleJ)
                                    cy.log('random text is in the screen shot folder')
                            })
                    }else{
                            cy.get('@title').then(function(title){
                            let titleJ = JSON.stringify(title)
                            cy.get('#mw-content-text > div.mw-parser-output')
                            .screenshot('this is random text about:' + titleJ)
                            cy.log('you can find the random text in the screenshot folder')
                        })     
                    }
                })   
            })
        })
    })
})