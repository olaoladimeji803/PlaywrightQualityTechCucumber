import { After, AfterAll, AfterStep, Before, BeforeAll, BeforeStep, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext, chromium, firefox, webkit } from "playwright";
import dotenv from "dotenv";

setDefaultTimeout(1000 * 60 * 2);

let page: Page;
let browser: Browser;
let bContext: BrowserContext;

BeforeAll(async function () {

    dotenv.config({ 
      path:`${process.cwd()}/config/.env.${process.env.npm_config_env}`
    });
    let browserType = process.env.browser;
  
    switch (browserType) {
      case 'chrome':
      case 'googlechrome':
        browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
        break;
      case 'edge':
      case 'msedge':
        browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
        break;
        case 'firefox':
      case 'ff':
        browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
        break;
        case 'webkit':
      case 'wkit':
        browser = await webkit.launch({ headless: false, args: ['--start-maximized'] });
        break;
      default:
        throw new Error(`invalid browser type ${browserType}) is passed..! pls correct it. `);
    } 
  });

Before(async function (scenario) {
   this.log(`---------${scenario.pickle.name} ----------- started`)
    bContext = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    page = await bContext.newPage();   
    await page.goto(process.env.url_app!);
});

BeforeStep(async function (scenario) {
  this.log(`---------${scenario.pickleStep.text} -----------is started`)
  
});

AfterStep(async function (scenario) {
  this.log(`---------${scenario.pickleStep.text} ----------- is ended`)
  this.log(`SCENARIO STATUS IS >>>>>>>>>> ${scenario.result?.status} >>>>>>>`)
  if (scenario.result?.status==Status.FAILED){
    console.log('Iamtaking sceenshot')
  }   
});


After(async function (scenario) {
        await page.close();
        await bContext.close();
      this.log(`---------${scenario.pickle.name} is ended------`)
      this.log(`SCENARIO STATUS IS >>>>>>>>>> ${scenario.result?.status} >>>>>>>`)
      if (scenario.result?.status==Status.FAILED){
        console.log('Iamtaking sceenshot')
  }  
});

AfterAll(async function () {
    await browser.close();
});

export function getPage(): Page {
    return page;
}
// export {page}
    
