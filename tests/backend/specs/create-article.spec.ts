import { test, expect } from "@playwright/test";
import { getUserCredential, logUser } from "../utils/users.utils.ts";
import articles from "../utils/articles.utils.ts";

test.describe("Given a valid user creating a new article", () => {
  let token: string;
  let userId: string;

  test.beforeAll("When he/she gets credentials", async () => {
    const userCredentials = await getUserCredential("user2");
    token = userCredentials.token;
    userId = userCredentials.userId;
  });

  test.beforeEach(
    "When he/she logs with valid credentials",
    async ({ page }) => {
      await logUser(page, token);
    }
  );

  test("Then he/she creates an article succesfully", async ({ page }) => {
    const articleId = await articles.createArticle(token, "article2");
    console.log(`Your articleId is; ${articleId}`);
  });
});
