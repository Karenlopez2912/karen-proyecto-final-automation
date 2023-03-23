import { driverInstance } from "./driver";

export class ElementActions {
    static async clickElement(locator: string) {
        await driverInstance.Page.click(locator);
    }
}