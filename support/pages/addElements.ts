import { By, until } from "selenium-webdriver";
import { driver } from "../../support/utils";


export class AddRemoveElements {

    private readonly deleteElement = 'Delete';
   
    async addingElements(howManyElements:number){
        driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Add Element')]"))); 
        for(let i=0; i<=howManyElements; i++){
            const addButton = await driver.findElement(By.xpath("//button[contains(text(),'Add Element')]"));
            addButton.click();
        }
    } 

    async removingAllElements(){

        const deletingButtons = await driver.wait(until.elementsLocated(By.xpath("//button[contains(text(),"+this.deleteElement+")]")));
        for(const i of deletingButtons){
            await i.click();
        }
    } 
}