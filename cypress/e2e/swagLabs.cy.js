import { productData, swagLabsData } from '../fixtures';
import {LoginPage,ProductsPage} from '../pages';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

//before each block to add steps like login and basic navigation
beforeEach(() =>{
  loginPage.loginToSwagLabs(Cypress.env('username'),Cypress.env('password'));
});

//Tests suite
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