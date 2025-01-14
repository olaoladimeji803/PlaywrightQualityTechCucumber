
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import { Page } from "playwright";

export default class BasePage {

    // 1. create constructor
    protected page: Page;          // private change to protected
    protected log: ICreateLog    // ICreateLog
    
    constructor(page: Page,  log: ICreateLog) {
        this.page = page; 
        this.log = log;
    }

    
    async clickGetByRole(object:any){
        // this.page.locator(object['locator'], object['locatorOption']).click(object['actionOption'] )
        await this.getlocator(object).click(object['actionOption']);
        this.log(`clicked on ${object['description']}`)
     }

    async click(object:any, roleFlag= false){
      if (!roleFlag){
        await this.getlocator(object).click(object['actionOption']);
      }else{
        await this.getlocatorByRole(object).click(object['actionOption']);
        }
      
       this.log(`clicked on ${object['description']}`)
    }


    async enter(object:any, data:string){
       // this.page.locator(object['locator'], object['locatorOption']).fill(data, object['actionOption'] )
        await this.getlocator(object).fill(data, object['actionOption'] );
        this.log(`entered value ${data} on ${object['description']}`)
    }

    async check(){
        
    }

    async unheck(){
        
    }

    getlocator(object: any){
        return this.page.locator(object['locator'], object['locatorOption']);
    }

    getlocatorByRole(object: any){
        const element = object['locator'] as "link" | "list" | "listbox";
        return this.page.getByRole(element, object['locatorOption']); // object['locatorOption']);  // actionOption
    }  
}
