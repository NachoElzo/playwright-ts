import { test, expect } from "@playwright/test";
import { getUserCredential, logUser } from "../utils/users.utils.ts";
import articles from "../utils/articles.utils.ts";

test.describe("Given a new user", () => {
  let token: string;
  let userId: string;

  test.beforeAll(async () => {
    const userCredentials = await getUserCredential("user2");
    token = userCredentials.token;
    userId = userCredentials.userId;
  });

  test.beforeEach(async ({ page }) => {
    await logUser(page, token);
  });

  test("Create Article", async ({ page }) => {
    const articleId = await articles.createArticle(token, "article2");
    console.log(`Your articleId is; ${articleId}`);
  });
});
