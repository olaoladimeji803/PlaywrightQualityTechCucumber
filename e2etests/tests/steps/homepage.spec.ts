import {Given, When, Then, setDefaultTimeout, Before, After} from '@cucumber/cucumber';
import HomePage from '../pages/homepage';
import { getPage } from '../../corelib/corelib.spec';
import LogingPage from '../pages/loginpage';

let homepage: HomePage;
let loginpage: LogingPage;

Then('Home page should be displayed', async function () {
    homepage = new HomePage(getPage(), this.log);
    await homepage.viewTheEditPage();
    this.log('logout is done.........')
    // await getPage().locator("xpath=//a[contains(.,'Edit your account information')]").waitFor({timeout: 5000})
    // expect(getPage().locator("xpath=//a[contains(.,'Edit your account information')]")).toBeVisible(); 
});

When('Upon logout', async function () {
     loginpage = new LogingPage(getPage(), this.log);
     await loginpage.logout();
     this.log('logout is done.........')
  });