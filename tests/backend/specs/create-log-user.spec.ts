import { test } from "@playwright/test";
import random from "../../../helpers/random.ts";
import {
  userCreation,
  deleteAccount,
  logNewUser,
} from "../utils/users-setup.ts";
import { createArticle } from "../utils/articles-setup.ts";

test.describe.skip("Given a new user that logs into the app", () => {
  // Defining variables in the describe will allow you to read globally
  let userId: string;
  let token: string;
  const username = random.randomString();
  const password = random.randomString();
  const email = `${random.randomString()}@example.com`;
  const localStorageKey = `jwtToken`;

  test.beforeAll("Tear-up create user", async () => {
    const userResponse = await userCreation(email, password, username);
    userId = userResponse.userId;
    token = userResponse.token;
    console.log(`The user token is: ${token}`);
    console.log(`The user id is: ${userId}`);
    console.log(`The user password is: ${password}`);
    console.log(`The user email is: ${email}`);
  });

  test("Then the new user is loged in the ap", async ({ page }) => {
    await logNewUser(page, localStorageKey, token);
    await page.goto("/");
    await page.waitForSelector("[class='navbar-brand']");
    const newArticle = await createArticle("article1", token);
    console.log(`Your new article id: ${newArticle}`);
  });

  test.afterAll("Tear-down delete User", async () => {
    if (!userId) {
      throw new Error("invalid userId");
    } else if (!token) {
      throw new Error("Invalid token");
    }
    await deleteAccount(userId, token);
  });
});
