import { test } from "@playwright/test";
import { WebInputs } from "../pages/web-inputs-page";
import { practiceUrl } from "../../../envconfig";

test.describe("Scenario: User that interacs with inputs fields", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${practiceUrl}/inputs`);
  });

  test("Giving a user that fill's values in inputs fields", async ({
    page,
  }) => {
    const webInputs = new WebInputs(page);
    await webInputs.validateTtile();
    await webInputs.setNumberInputRange(3, 10);
    await page.pause();
  });
});
