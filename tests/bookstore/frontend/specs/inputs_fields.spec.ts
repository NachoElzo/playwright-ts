import { test } from "@playwright/test";
import urls from "../../../../global/data/urls";
import { Inputs } from "../pages/inputs_fields";
import { randomString, randomNumber } from "../../../../global/data/random";

test.describe("User are able to fill the form and validate data types", () => {
  let inputs: Inputs;

  test.beforeEach(async ({ page }) => {
    inputs = new Inputs(page);
    await page.goto(`${urls.ui.bookstore}/inputs`);
  });

  test("Users can fill the form with valid values", async () => {
    // Enter a number and increment it with arrow up.
    await inputs.inputNumber(randomNumber(), 3);
    await inputs.inputText(`${randomString()}`, ` -  ${randomString()}`);
    await inputs.inputPassword(randomString());
    await inputs.setFutureDate(7);
    await test.step("Verify outputs values match filled inputs", async () => {
      await inputs.clickDisplay();
      await inputs.validateInputs();
      await inputs.clickCleanInputs();
    });
  });
});
