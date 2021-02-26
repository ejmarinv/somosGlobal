
import { Then, When } from "cucumber";
import { TimeOutOptions } from "support/times.constant";
import { ADDREMOVE_ENVIRONMENT } from "~environments/environment.local";
import { addRemoveElements, driver} from "../../support/utils";

When('the user is able to press the AddElement button', {timeout: TimeOutOptions.medium}, async() =>{
    await driver.navigate().to(ADDREMOVE_ENVIRONMENT.url);
    await addRemoveElements.addingElements(5);
});


Then('the user is able also to remove that element from the screen', {timeout: TimeOutOptions.medium}, async() =>{
    await addRemoveElements.removingAllElements(); 
});
 