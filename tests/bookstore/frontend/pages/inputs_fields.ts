import { expect, Page, Locator } from "@playwright/test";

export class Inputs {
  readonly page: Page;
  readonly form: Locator;

  constructor(page: Page) {
    this.page = page;
    this.form = this.page.locator(".col");
  }

  async inputNumber(number: number, arrowPresses: number) {
    const inputNumberSelector = this.form.locator("#input-number");
    await inputNumberSelector.scrollIntoViewIfNeeded();
    await expect(inputNumberSelector).toBeVisible();

    // If the argument number of arrow presses is negative, set it to 1
    if (arrowPresses < 0) {
      arrowPresses = 1;
    }

    // Stop pressing if more than 5 presses are requested
    if (arrowPresses > 5) {
      arrowPresses = 5;
    }

    let numberToString = number.toString();
    await inputNumberSelector.fill(numberToString);
    // Loop that will increment the number of arrow presses
    for (let i = 0; i < arrowPresses; i++) {
      await inputNumberSelector.press("ArrowUp");
    }
    return number + arrowPresses;
  }

  async inputText() {
    const textInput = this.form.locator("#input-text");
    await textInput.fill("58987");
    // Gets the current value from the input field
    const textInputValue = await textInput.innerText();
    // Validates that the input values is a string
    if (typeof textInputValue !== "string") {
      throw new Error("Invalid type of data");
    }
  }
}
