import { test } from "@playwright/test";
import random from "../../../helpers/random.ts";
import { userCreation, deleteAccount } from "../utils/users-setup.ts";
import { createArticle } from "../utils/articles-setup.ts";

test.describe.skip("Given a new user that creates an article", () => {
  // Defining variables in the describe will allow you to read globally
  let userId: string;
  let token: string;
  const username = random.randomString();
  const password = random.randomString();
  const email = `${random.randomString()}_${username}@newmail.com`;

  test.beforeAll("Tear-up create user", async () => {
    const userResponse = await userCreation(email, password, username);
    userId = userResponse.userId;
    token = userResponse.token;
    console.log(`The user token is: ${token}`);
    console.log(`The user id is: ${userId}`);
    console.log(`The user password is: ${password}`);
    console.log(`The user email is: ${email}`);
  });

  test("Then the user will create a new article", async ({ page }) => {
    const articleSlug = await createArticle("article4", token);
    console.log(`you article slug is: ${articleSlug}`);
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
