import { expect } from "chai";
import { Given, Then } from "cucumber";
import { User } from "~environments/environments";
import { loginPage, env } from "../../support/utils";
import { ErrorSessionMessages, SucessSessionMessages } from "../../support/pages/session_page";
import { TimeOutOptions } from "../../support/times.constant";

async function login(user2: User) {
    await loginPage.login(user2.username, user2.password, env.url);
}
//First test Scenario
Given('a user sets wrong username and password', { timeout: TimeOutOptions.huge }, async () => {
    await login(env.users.user2);
});

Then('a error message is displayed', {timeout: TimeOutOptions.medium}, async() =>{
    expect(ErrorSessionMessages.sessionFailed).to.exist;
});

//Second test Scenario
Then('the user is able to see a message about the success login process',{timeout: TimeOutOptions.medium}, async()=>{
    expect(SucessSessionMessages.sucessLogin).to.exist;
});

//Thrid test Scenario
Then('the user is able to see a message about the success logOut process',{timeout: TimeOutOptions.medium}, async()=>{
    expect(SucessSessionMessages.sucessLogOut).to.exist;
}); 