import { Page } from "playwright";
import  * as loginPageLocator from "../locators/loginpagelocators.json"
import BasePage from "./basepage";
import dotenv from "dotenv";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class LogingPage extends BasePage{
    
    // 1. create a constructor
    // private page:Page;
    constructor(page: Page, log: ICreateLog){
        super(page, log) 
    }

    // async function loginToApp() {
        
       
    // };

    async goToLoginPage() {
        await this.page.locator(loginPageLocator.loginlink.locator).click();  //*[@id="input-email"]  //  "xpath=//a[contains(.,'My account') and @data-toggle]"
    }

    async loginToApp() {

        await this.enter(loginPageLocator.emailField, process.env.user_name!)
        await this.enter(loginPageLocator.passwordField, process.env.password!)
        await this.click(loginPageLocator.loginBtn);

        //  await this.page.locator(loginPageLocator.emailField.locator).fill('dummy1234@gmail.com'  process.env.username!);
        //  await this.page.locator(loginPageLocator.passwordField.locator).fill('dummy1234@gmail.com');
        //  await this.page.locator(loginPageLocator.loginBtn.locator).click();  // await page.locator('input.btn.btn-primary');
    }

     async logout() {
        await this.click(loginPageLocator.logoutBtn);
        await this.click(loginPageLocator.continueBtn, true );

        // await this.page.locator(loginPageLocator.logoutBtn.locator).click();
        //  const continueButton = loginPageLocator.continueBtn.locator as "link" | "list" | "listbox";
        //  await this.page.getByRole(continueButton, loginPageLocator.continueBtn.actionOption).click();

        //await this.page.getByRole("link", {name: "Continue" }).click();
    }
}