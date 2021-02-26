import { By, until, WebElement } from "selenium-webdriver";
import { TimeOutOptions } from "../times.constant";
import { driver } from "../utils";

export class LoginPage {
      ///WebElements on Login page.
    private readonly userField = { id: 'username'};
    private readonly passwordField = { id: 'password' };
    private readonly LoginButton = { className: 'radius' };
  
    async login(username: string, password: string, url: string) {
      await driver.get(url);
      await driver.wait(until.elementLocated(this.userField));
      await this.setUsername(username);
      await this.setPassword(password);
      await this.pressLoginButton();
      await driver.wait(until.elementLocated(By.xpath('//h4')), 60000, 'Welcome to the Secure Area. When you are done click logout below.');
    }
  
    async setUsername(username: string) {
      return driver.findElement(this.userField).sendKeys(username);
    }
  
    async setPassword(password: string) {
      return driver.findElement(this.passwordField).sendKeys(password);
    }
  
    async pressLoginButton() {
      return driver.findElement(this.LoginButton).click();
    }
  
  }
  
  export class LogoutPage {
    constructor() { }
  
    async waitForLogoutButton(): Promise<WebElement> {
      return driver.wait(until.elementLocated(By.className('button secondary radius')), TimeOutOptions.medium);
    }
  
    async waitForLoginUserName(): Promise<any> {
      return driver.wait(until.elementLocated(By.id('username')), TimeOutOptions.small);
    }
  
    async logout() {
      const logoutButton: WebElement = await this.waitForLogoutButton();
      await logoutButton.click();
      await this.waitForLoginUserName();    
    }
  
  }
  
  export enum SucessSessionMessages {
    sucessLogin = 'You logged into a secure area!',
    sucessLogOut = 'You logged out of the secure area!',
  }

  export enum ErrorSessionMessages {
    sessionFailed = 'Your username is invalid!',
  }
  
