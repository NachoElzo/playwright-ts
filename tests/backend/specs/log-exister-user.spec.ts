import { test } from "@playwright/test";
import { getUserCredential, logUser } from "../utils/users.utils.ts";

test.describe("Given a new user", () => {
  let token: string;
  let userId: string;

  test.beforeAll("When he/she gets credentials", async () => {
    const userCredentials = await getUserCredential("user1");
    token = userCredentials.token;
    userId = userCredentials.userId;
  });

  test("Then: he/she will be loged in the app", async ({ page }) => {
    await logUser(page, token);
    await page.goto("https://conduit.bondaracademy.com");
    await page.waitForTimeout(2000);
    console.log(
      "Congratulations, your new user is validated and logged into the app"
    );
  });
});
