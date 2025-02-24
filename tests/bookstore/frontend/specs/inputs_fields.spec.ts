import { test } from "@playwright/test";
import urls from "../../../../global/data/urls";
import { Inputs } from "../pages/inputs_fields";

test.describe("Giving users that navigates to the inputs page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${urls.ui.bookstore}/inputs`);
  });

  test("User will fill the input with numbers type", async ({ page }) => {
    const inputs = new Inputs(page);
    // Fills the input with a number and simulates pressing the arrow a specified number of times.
    // The function will break if the number of presses exceeds 5 allowing 5 times at max.
    console.log(
      `You number in the input field will be ${await inputs.inputNumber(
        64,
        14
      )}`
    );
    await inputs.inputText();
  });
});
