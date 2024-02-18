import {swagLabsData} from '../fixtures';

export class LoginPage{



getPageTitle(){
return cy.get('.login_logo');
}

getUserName(){
    return cy.get('#user-name');
}

getPassword(){
    return cy.get('#password')
}

getLoginButton(){
    return cy.get('#login-button');
}

loginToSwagLabs(username,password){
cy.visit('https://www.saucedemo.com');
this.getPageTitle().should('have.text',swagLabsData.loginPageTitle);
this.getUserName().clear().type(username);
this.getPassword().clear().type(password);
this.getLoginButton().click()
}

}