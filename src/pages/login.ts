import { Driver, driverInstance } from "../core/driver";
import { BasePage } from "./base-pages";

export class Login extends BasePage{
    // Locators
    private logintab: string = '#login2';
    private username: string = '#loginusername';
    private password: string = '#loginpassword';
    private loginButton: string = '//button[@class="btn btn-primary"][text()="Log in"]';
    private welcomeTab: string = '#nameofuser';
    constructor(){
        super();
    }
    async login(username: string, password: string) {

        await this.driver.Page.click(this.logintab);
        await this.driver.Page.fill(this.username, username);
        await this.driver.Page.fill(this.password, password );
        await this.driver.Page.click(this.loginButton);
        await driverInstance.Page.waitForTimeout(5000);
        
    }

    async validatelogin() {

        return this.driver.isElementDisplayed(this.welcomeTab);
    }
}
export const login = new Login ();