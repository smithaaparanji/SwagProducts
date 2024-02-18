import { productData, swagLabsData } from '../fixtures';
import {LoginPage,ProductsPage} from '../pages';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();


beforeEach(() =>{
  
  loginPage.loginToSwagLabs(Cypress.env('username'),Cypress.env('password'));
});




describe('Swag lab tests', () => {
  it('Login and products page', () => {
    productsPage.verifyProductsPage();
    productsPage.addProductToCart(productData.productName);
    productsPage.proceedToCheckout();
    productsPage.fillInpersonalInfo(productData.personalInfo);
    productsPage.finishCheckout(productData);
    productsPage.verifyOrder();
  })
})