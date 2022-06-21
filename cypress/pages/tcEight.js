class HomePageTestSix{
    getBtn(){
        return cy.get('#btn-make-appointment')
    }
    typeUser(){
        return   cy.get('#login > div > div > div.col-sm-offset-3.col-sm-6 > form > div.alert.alert-info > div:nth-child(1) > div > div > input')
                .invoke('val').then((val)=>{
                    let user = val
                    cy.get('#txt-username').type(user)
                })
    }
    typePassword(){
        return cy.get('#login > div > div > div.col-sm-offset-3.col-sm-6 > form > div.alert.alert-info > div:nth-child(2) > div > div > input')
                .invoke('val').then(val =>{
                    let password = val
                    cy.get('#txt-password').type(password)
                })
    }
    getEnterBtn(){
        return cy.get('#btn-login')
    }
    //////////////////////////////
    setDropDown(){
        return cy.xpath('//*[@id="combo_facility"]').select('Hongkong CURA Healthcare Center')
    }
    checkBox(){
        return cy.get('#chk_hospotal_readmission').check()
    }
    setRadioInput(){
        return  cy.xpath('//*[@id="radio_program_medicaid"]').check() 
    }
    getRadioText(){
        return  cy.xpath('//*[@id="radio_program_medicaid"]')
    }
    setDate(){
        return  cy.xpath('//*[@id="txt_visit_date"]')
                    
    }
    hideDateBox(){
        return cy.xpath('//*[@id="appointment"]/div/div/form/div[5]/label')
    }
    setRandomText(){
        return cy.get('#txt_comment')
    }
    getConfirmationBtn(){
        return cy.get('#btn-book-appointment')
    } 
}
export default HomePageTestSix;