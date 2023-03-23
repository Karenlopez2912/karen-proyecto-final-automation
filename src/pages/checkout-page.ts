import { BasePage } from "./base-pages";

export class CheckoutPage extends BasePage {
    
    private logoutbutton: string = '#logout2';

    constructor() {
        super();
    }
    async checkoutPage() {
        
        await this.driver.Page.click(this.logoutbutton);
    }
}
