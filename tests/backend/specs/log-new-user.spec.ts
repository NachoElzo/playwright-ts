import { test, expect } from "@playwright/test";
import random from "../../../helpers/random.ts";
import { createUser, deleteUser, logUser } from "../utils/users.utils.ts";

test.describe("Given a new user tha logs into the app", () => {
  let userId: string;
  let token: string;
  const username = `${random.randomString()}`;
  const email = `${username}${random.randomEmail()}`;
  const password = random.randomString();
  let localStorageKey = `jwtToken`;

  test.beforeAll("When the user is created", async () => {
    const newUser = await createUser(username, email, password);
    token = newUser.token;
    userId = newUser.userId;
    console.log(
      `user created: ${username} \n email created: ${email} \n password created: ${password}`
    );
  });

  test("Then he/she will be loged in the app", async ({ page }) => {
    await logUser(page, token);
    await page.goto("https://conduit.bondaracademy.com");
    await page.waitForTimeout(2000);
    console.log("login values: " + localStorageKey, token);
    expect(page.getByRole("link", { name: `${username}` })).toBeVisible;
    console.log(
      "Congratulations, your new user is validates and loged into the app"
    );
  });

  test.afterAll("And the user will be delated", async () => {
    await deleteUser(userId, token);
  });
});
