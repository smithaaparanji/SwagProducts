export class LoginPage {

    constructor() {
        this.loginPageTitle = 'Swag Labs';
    }

    //getter methods for all the locators in login page
    getPageTitle() {
        return cy.get('.login_logo');
    }

    getUserName() {
        return cy.get('#user-name');
    }

    getPassword() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#login-button');
    }

    //Login method 

    loginToSwagLabs(username, password) {
        cy.visit(Cypress.env('baseURL'));
        this.getPageTitle().should('have.text', this.loginPageTitle);
        this.getUserName().clear().type(username);
        this.getPassword().clear().type(password);
        this.getLoginButton().click()
    }

}