import {Given, When, Then, setDefaultTimeout, Before, After} from '@cucumber/cucumber';
import {Browser, BrowserContext, chromium, Locator, Page} from 'playwright';
import {expect} from '@playwright/test';
import { getPage } from "../../corelib/corelib.spec";
import LoginPage from "../pages/loginpage"

let loginpage: LoginPage

Given('User is on home page', async function () {
    this.log('this is start if useris on loging page step.........!')
    loginpage= new LoginPage(getPage(), this.log);
    await loginpage.goToLoginPage();
    this.log('login is successful.........')
    
});

When('User enter login details', async function () {                       
     await loginpage.loginToApp();   
     this.log('login is successful.........') 
});


Then('Logout should be successful', async function () {
    console.log('Logout is success........')
    this.log('login is successful.........')
});

Then('This is a dummy step to fail', async function () {
    this.log('login is successful.........')
});

//  Amend or chaniging initial commit
// Then('This is a dummy step to fail', async function () {
//     this.log('login is successful.........')
// });