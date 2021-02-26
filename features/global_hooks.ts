import { After, AfterAll, BeforeAll } from "cucumber";
import { LogoutPage } from "../support/pages/session_page";
import { TimeOutOptions } from "../support/times.constant";
import { driver, initConfig } from "../support/utils";

BeforeAll(async () => {
    await initConfig();
});

After({timeout: TimeOutOptions.huge },async () => {  
    if("@testToSkipLogout"){
        console.log('skipped');
    }else{
        const logoutPage = new LogoutPage();
        await logoutPage.logout();
    }   
});
  

AfterAll(async () => {
    await driver.close();
});
  
  