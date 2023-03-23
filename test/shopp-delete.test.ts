import { driverInstance } from "../src/core/driver";
import { InventoryPage } from "../src/pages/inventory-page";
import { Login } from "../src/pages/login";
import { CheckoutPage } from "../src/pages/checkout-page";

describe('Shop-Delete Feature', () => {
    let login: Login;
    let invetoryPage: InventoryPage;
    let checkoutPage: CheckoutPage;
    
    beforeAll( async () => {
        await driverInstance.start();        
        login = new Login();
        await login.navigateTo('https://www.demoblaze.com/index.html');
        await login.login('karenlq', '6522903Lq');
        invetoryPage =  new InventoryPage();
        checkoutPage= new CheckoutPage();
    },20000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Add Products Items from Inventory Table', async () => {
        const item= "1"
        await invetoryPage.addToCartItem(item);
        
    },10000);

    it('Delete Item from CartBadge', async () => {        
        await invetoryPage.deleteItem();
       
    },10000);

    it('Logout the page', async () => {        
        await checkoutPage.checkoutPage();
        
    },10000);
});