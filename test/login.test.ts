import { url } from "inspector";
import { driverInstance } from "../src/core/driver";
import { Login } from "../src/pages/login";


describe('Set Login', () => {
    let login: Login;

    beforeAll(async () => { 
        await driverInstance.start();
        login = new Login();
    });

    afterAll(async () => {
        await driverInstance.closeDriver();
          
    });

    it('Go to Login page', async () => {
        await login.navigateTo('https://www.demoblaze.com/index.html')
        
    },8000);

    it('Set Login', async () => {
  
        await login.login('karenlq', '6522903Lq');
             
    },8000);

});
