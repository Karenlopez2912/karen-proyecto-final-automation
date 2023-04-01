import { BasePage } from "./base-pages";

export class CheckoutPage extends BasePage {
    
    private logoutbutton: string = '#logout2';
    private logintab: string = '#login2';
    constructor() {
        super();
    }
    async checkoutPage() {
        
        await this.driver.Page.click(this.logoutbutton);
    }
    async validateLoginTab() {

        return this.driver.isElementDisplayed(this.logintab);
    }
}
