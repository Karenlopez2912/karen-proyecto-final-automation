import { driverInstance } from "../src/core/driver";
import { InventoryPage } from "../src/pages/inventory-page";
import { Login } from "../src/pages/login";
import { PlaceOrder, placeorder } from "../src/pages/place-order";
import { userData } from "../user-data";


describe('Feature Perform an Order', () => {
    let login: Login = new Login();
    let invetoryPage: InventoryPage =  new InventoryPage();
    let placeOrder: PlaceOrder = new PlaceOrder();
   

    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await login.navigateTo(userData.url);
        await login.login(userData.username, userData.password);
           
    }, 20000);

    afterAll(async () => {

        await driverInstance.closeDriver();

    });

    it('Add an item', async () => {
        const item= "3";
        await invetoryPage.addToCartItem(item);

    },25000);

    it('Purchase', async () => {

        await invetoryPage.clickplaceOrderButton();

    },25000);

    it('Place an Order', async () => {
        const name= 'Karen Lopez';
        const country= 'Bolivia';
        const city= 'Cochabamba';
        const creditCard= '0000';
        const month= '12';
        const year= '2025';

        await placeOrder.placeOrder(name,country,city,creditCard,month,year);
        await placeOrder.clickOkButton()

    },35000);

});