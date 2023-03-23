import { BasePage } from "./base-pages";

export class InventoryPage extends BasePage {

    private shoppingCartBadge: string = '#cartur';    
    
    constructor() {
        super();
    }

    private itemNameButton = (item: string) => `//h4[@class="card-title"]//a[@href="prod.html?idp_=${item}"]`;
    private itemAddCartButton = (item: string) => `//a[@onclick="addToCart(${item})"]`;
    private itemRemoveCartButton =   '//tbody[@id="tbodyid"]//tr[1]//td[4]//a';
    private placeOrderButton: string = '//button[@class="btn btn-success"]';
    

    async addToCartItem(item: string) {

        await this.driver.Page.click(this.itemNameButton(item));
        await this.driver.Page.click(this.itemAddCartButton(item));
        await this.driver.Page.click(this.shoppingCartBadge);
    }

    async validateRemoveButton() {

        await this.driver.Page.click(this.shoppingCartBadge);
        return this.driver.isElementDisplayed(this.itemRemoveCartButton);
    }

    async deleteItem() {
        
        return await this.driver.Page.click(this.itemRemoveCartButton);
    }

    async clickplaceOrderButton() {
       return await this.driver.Page.click(this.placeOrderButton);
    }

    
}
