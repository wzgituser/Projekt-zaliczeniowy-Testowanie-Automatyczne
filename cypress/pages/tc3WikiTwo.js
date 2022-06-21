class WikipediaPageObject{
    typeText(){
        return   cy.xpath('//*[@id="searchInput"]')
    }
     tableDir(){
        return cy.get('#mw-content-text > div.mw-parser-output > table')
    }
    definicionDir(){
        return cy.get('#mw-content-text')
    }
}
export default WikipediaPageObject;