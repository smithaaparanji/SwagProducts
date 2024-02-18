import {productData, swagLabsData} from '../fixtures';

export class ProductsPage {
    getTitle(){
        return cy.get('span.title');
    }

    getProductsList(){
        return cy.get('.inventory_item');
    }

    getAddToCartButton(){
        return this.getProductsList().find('.inventory_item_price')
        .get('.btn_primary');
    }

    getProductPrice(){
        return cy.get('.inventory_details_price').invoke('text');
    }

    getAddToCartInsideProductPage(){
        return cy.get('[id^="add-to-cart-sauce-labs-"]')
    }

    getNumberInCart(){
        return cy.get('.shopping_cart_link').find('.shopping_cart_badge');
     }

    getBackToProductsLink(){
        return cy.get('#back-to-products');
    }

    getRemoveButton(){
        return cy.get('[id^="remove-sauce-labs-"]')
    }

    getProductNameInCart(){
        return cy.get('.inventory_item_name');
    }
    
    getQuantityInCart(){
        return cy.get('.cart_quantity');
    }

    getPriceInCart(){
        return cy.get('.inventory_item_price');
    }

    getContinueShoppingButton(){
        return cy.get('#continue-shopping');
    }

    getCheckoutButton(){
        return cy.get('#checkout');
    }

    verifyProductsPage(){
        this.getTitle().should('have.text',swagLabsData.productsTitle);
        this.getProductsList().its('length').should('be.at.least',6);
        this. getAddToCartButton().should('be.visible');
    
    }

    addProductToCart(product){
        this.getProductsList().contains(product).click();
        this.getBackToProductsLink().should('have.text',swagLabsData.backToProducts);
        this.getProductPrice().should('be.equal',productData.productPrice);
        this.getAddToCartInsideProductPage().click();
        this.getRemoveButton().should('have.text',swagLabsData.remove);
        this.getNumberInCart().should('have.text',productData.quantity);
    }

    proceedToCheckout(){
        this.getNumberInCart().should('have.text','1').click();
        this.getTitle().should('have.text',swagLabsData.yourCart);
        this.getProductNameInCart().should('have.text',productData.productName);
        this.getQuantityInCart().should('have.text',productData.quantity);
        this.getPriceInCart().should('have.text',productData.productPrice);
        this.getRemoveButton().should('have.text',swagLabsData.remove);
        this.getContinueShoppingButton().should('have.text',swagLabsData.continue);
        this.getCheckoutButton().should('have.text',swagLabsData.checkout).click();
}
}