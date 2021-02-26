import { Given } from "cucumber";
import { User } from "../environments/environments";
import { TimeOutOptions } from "../support/times.constant";
import { env, loginPage } from "../support/utils";

Given('a logged in user', { timeout: TimeOutOptions.huge }, async () => {
  await login(env.users.user1);
});

async function login(user: User) {
  await loginPage.login(user.username, user.password, env.url);
}