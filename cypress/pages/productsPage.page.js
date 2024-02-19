import { productData } from '../fixtures';

export class ProductsPage {

    constructor() {
        //Page Titles
        this.productsTitle = 'Products',
            this.yourCart = 'Your Cart',
            this.yourInfoTitle = 'Checkout: Your Information',
            this.overview = 'Checkout: Overview',
            this.checkoutComplete = 'Checkout: Complete!'
        this.Thanks = 'Thank you for your order!'

        //Field headings
        this.paymentInfo = 'Payment Information',
            this.shippingInfo = 'Shipping Information',
            this.priceTotal = 'Price Total',
            this.itemTotal = 'Item total: $',
            this.tax = 'Tax: $',
            this.total = 'Total: $'

        //buttons
        this.addToCartButton = 'Add to cart',
            this.backToProducts = 'Back to products',
            this.remove = 'Remove',
            this.continueShopping = 'Continue Shopping',
            this.checkout = 'Checkout',
            this.cancel = 'Cancel',
            this.finishButton = 'Finish',
            this.continue = 'Continue';

    }

    //getter methods for all the locators in login page
    getTitle() {
        return cy.get('span.title');
    }

    getProductsList() {
        return cy.get('.inventory_item');
    }

    getAddToCartButton() {
        return this.getProductsList().find('.inventory_item_price')
            .get('.btn_primary');
    }

    getProductPrice() {
        return cy.get('.inventory_details_price').invoke('text');
    }

    getAddToCartInsideProductPage() {
        return cy.get('[id^="add-to-cart-sauce-labs-"]')
    }

    getNumberInCart() {
        return cy.get('.shopping_cart_link').find('.shopping_cart_badge');
    }

    getBackToProductsLink() {
        return cy.get('#back-to-products');
    }

    getRemoveButton() {
        return cy.get('[id^="remove-sauce-labs-"]')
    }

    getProductNameInCart() {
        return cy.get('.inventory_item_name');
    }

    getQuantityInCart() {
        return cy.get('.cart_quantity');
    }

    getPriceInCart() {
        return cy.get('.inventory_item_price');
    }

    getContinueShoppingButton() {
        return cy.get('#continue-shopping');
    }

    getCheckoutButton() {
        return cy.get('#checkout');
    }

    getFirstname() {
        return cy.get('[placeholder="First Name"]');
    }

    getLastName() {
        return cy.get('[placeholder="Last Name"]');
    }

    getPostalCode() {
        return cy.get('[placeholder="Zip/Postal Code"]');
    }

    getCancelButton(id) {
        return cy.get('#cancel');
    }

    getContinueButton() {
        return cy.get('[id="continue"]');
    }

    getFinishButton() {
        return cy.get('#finish');
    }

    getOverviewLabel(text) {
        return cy.get('.summary_info_label').contains(text);
    }

    getOverviewValue(text) {
        return this.getOverviewLabel(text).siblings('div').get('.summary_value_label');
    }

    getItemTotal() {
        return cy.get('.summary_subtotal_label');
    }

    getTax() {
        return cy.get('.summary_tax_label');
    }

    getThanks() {
        return cy.get('.complete-header');
    }

    getBackHomeButton() {
        return cy.get('#back-to-products');
    }

    getTotalAtCheckout() {
        return cy.get('div.summary_total_label').invoke('text');
    }


    //Verification methods

    //Method to verify products page
    verifyProductsPage() {
        this.getTitle().should('have.text', this.productsTitle);
        this.getProductsList().its('length').should('be.at.least', 6);
        this.getAddToCartButton().should('be.visible');

    }

    //Method to verify adding given product to cart 
    addProductToCart(product) {
        this.getProductsList().contains(product).click();
        this.getBackToProductsLink().should('have.text', this.backToProducts);
        this.getProductPrice().should('be.equal', productData.productPrice);
        this.getAddToCartInsideProductPage().click();
        this.getRemoveButton().should('have.text', this.remove);
        this.getNumberInCart().should('have.text', productData.quantity);
    }

    //Method to verify proceeding to checkout page
    proceedToCheckout() {
        this.getNumberInCart().should('have.text', '1').click();
        this.getTitle().should('have.text', this.yourCart);
        this.getProductNameInCart().should('have.text', productData.productName);
        this.getQuantityInCart().should('have.text', productData.quantity);
        this.getPriceInCart().should('have.text', productData.productPrice);
        this.getRemoveButton().should('have.text', this.remove);
        this.getContinueShoppingButton().should('have.text', this.continueShopping);
        this.getCheckoutButton().should('have.text', this.checkout).click();
    }

    //Method to filling in personal info on checkout form
    fillInpersonalInfo(personalData) {
        this.getTitle().should('have.text', this.yourInfoTitle);
        this.getCancelButton()
            .should('have.text', this.cancel)
            .should('be.visible').should('be.enabled');
        this.getFirstname().click().type(personalData.firstName);
        this.getLastName().click().type(personalData.lastName);
        this.getPostalCode().click().type(personalData.zip);
        this.getContinueButton()
            .should('be.visible').should('be.enabled').click();
    }

    //Method to verify completion of checkout
    finishCheckout(productData) {
        this.getTitle().should('have.text', this.overview);
        this.getProductNameInCart().should('have.text', productData.productName);
        this.getQuantityInCart().should('have.text', productData.quantity);
        this.getPriceInCart().should('have.text', productData.productPrice);
        this.getOverviewValue(this.paymentInfo).eq(0).should('contain', productData.checkoutInfo.paymentInfo);
        this.getOverviewValue(this.shippingInfo).eq(1).should('have.text', productData.checkoutInfo.shippingInfo);
        this.getItemTotal().should('have.text', this.itemTotal + productData.checkoutInfo.itemTotal);
        this.getTax().should('have.text', this.tax + productData.checkoutInfo.tax);
        this.getTotalAtCheckout()
            .should('contain', (productData.checkoutInfo.itemTotal + productData.checkoutInfo.tax));
        this.getFinishButton().click();
    }

    // Method to verify order completion
    verifyOrder() {
        this.getTitle().should('have.text', this.checkoutComplete);
        this.getThanks().should('have.text', this.Thanks);
        this.getBackHomeButton().click();
        this.getTitle().should('have.text', this.productsTitle);
    }
}
