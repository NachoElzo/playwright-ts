import { test, expect } from "@playwright/test";
import random from "../../../helpers/random.ts";
import { createUser, deleteAccount, logNewUser } from "../utils/users.utils.ts";

test.describe("Given a new user", () => {
  let userId: string;
  let token: string;
  const username = `${random.randomString()}`;
  const email = `${username}${random.randomEmail()}`;
  const password = random.randomString();
  let localStorageKey = `jwtToken`;

  test.beforeAll("Create user", async () => {
    const newUser = await createUser(username, email, password);
    token = newUser.token;
    userId = newUser.userId;
    console.log(
      `user created: ${username} \n email created: ${email} \n password created: ${password}`
    );
  });

  test("Log User", async ({ page }) => {
    await logNewUser(page, localStorageKey, token);
    await page.goto("https://conduit.bondaracademy.com");
    await page.waitForTimeout(2000);
    console.log("login values: " + localStorageKey, token);
    expect(page.getByRole("link", { name: `${username}` })).toBeVisible;
    console.log(
      "Congratulations, your new user is validates and loged into the app"
    );
  });

  test.afterAll("delete user", async () => {
    await deleteAccount(userId, token);
  });
});
