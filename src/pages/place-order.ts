import { Driver, driverInstance } from "../core/driver";
import { BasePage } from "./base-pages";

export class PlaceOrder extends BasePage{
    // Locators
    private name: string = '#name';
    private country: string = '#country';
    private city: string = '#city';
    private creditCard: string = '#card';
    private month: string = '#month';
    private year: string = '#year';
    private purchaseButton: string = '//button[@onclick="purchaseOrder()"]';
    private mesaggePurchase: string = '//h2[text()="Thank you for your purchase!"]';
    private okButton: string= '//button[@class="confirm btn btn-lg btn-primary"]';
    
    constructor(){
        super();
    }
    async placeOrder(name: string, country: string, city: string, creditCard: string, month: string, year: string) {

        await this.driver.Page.fill(this.name, name);
        await this.driver.Page.fill(this.country, country );
        await this.driver.Page.fill(this.city, city );
        await this.driver.Page.fill(this.creditCard, creditCard );
        await this.driver.Page.fill(this.month, month );
        await this.driver.Page.fill(this.year, year );
        await this.driver.Page.click(this.purchaseButton);    
    }

    async getCompleteOrderMessage() {

        return await this.driver.Page.innerText(this.mesaggePurchase);
    }
    async clickOkButton() {

        return await this.driver.Page.click(this.okButton);
    }
}
export const placeorder = new PlaceOrder();