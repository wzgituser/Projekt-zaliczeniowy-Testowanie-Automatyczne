///<reference types ='cypress' />
require('cypress-xpath')
import tc2Wikipedia from '../../fixtures/tc2Wikipedia.json'

context('UI website test, diferant scenarios scenarios on "https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna"',()=>{
    describe('functional test of the search input on the main page', ()=>{
        before(()=>{
            cy.visit('https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna')
            cy.url().as('url')
        })
        it('functional test of the input "search"',()=>{
            cy.xpath('//*[@id="searchInput"]')
                .clear()
                .type(tc2Wikipedia.text)
            cy.xpath('//*[@id="searchInput"]').invoke('val').then(val=>{
                expect(val).to.be.a('string')
                expect(val).to.eql(tc2Wikipedia.text)
            })
            cy.xpath('//*[@id="searchInput"]').type('{enter}')
            cy.wait(2000)
            cy.get('@url').then(data =>{
                cy.url().then(dataTwo =>{
                    const newUrl = dataTwo;
                    cy.log(data)
                    cy.log(newUrl)
                    expect(dataTwo).not.to.equal(data)
                })
            })
        })
    })
})