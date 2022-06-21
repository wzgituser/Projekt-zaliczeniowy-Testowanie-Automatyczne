class HomePageTestFour{
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
}
export default HomePageTestFour;