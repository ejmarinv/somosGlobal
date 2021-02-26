import { Builder, ThenableWebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { AddRemoveElements } from '~pages/addElements';
import { currentEnvironment, Environment } from '../environments/environments';
import { LoginPage } from './pages/session_page';

export let driver: ThenableWebDriver;
export let loginPage: LoginPage;
export let env: Environment;
export let addRemoveElements: AddRemoveElements;

export async function initConfig() {
    let chromeOptions = `${process.env.HEADLESS}`.trim() === 'False'
      ? new chrome.Options() : new chrome.Options().headless();
    chromeOptions.addArguments('--start-maximized');
  
    chromeOptions.setUserPreferences({
      'download.default_directory': process.cwd()
    }); 
  
    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();
  
    loginPage = new LoginPage();
    addRemoveElements = new AddRemoveElements();
    env = currentEnvironment();
  }