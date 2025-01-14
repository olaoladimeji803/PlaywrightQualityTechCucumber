import { Page } from "playwright";
import { expect } from "playwright/test";
import * as homePagelocators from "../locators/homepagelocators.json"
import BasePage from "../pages/basepage"
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";


export default class HomePage extends BasePage {
    
    // 1. create a constructor
    constructor( page: Page, log: ICreateLog )  {
        super(page, log) 
    }


    // private page:Page;
    // constructor(page:Page) {
    //     this.page = page;
    // }

    // async function loginToApp() {
        
       
    // };

    async viewTheEditPage() {
        await this.page.locator(homePagelocators.editInfoLink.locator).waitFor(homePagelocators.editInfoLink.actionOptions)
        expect(this.page.locator(homePagelocators.editInfoLink.locator)).toBeVisible(); 
    }
}