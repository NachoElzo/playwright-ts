import { expect, Page, Locator } from "@playwright/test";

export class Inputs {
  readonly page: Page;
  readonly form: Locator;

  constructor(page: Page) {
    this.page = page;
    this.form = this.page.locator(".col");
  }

  async inputNumber(number: string, arrowPresses: number) {
    const inputNumberSelector = this.form.locator("#input-number");
    await expect(inputNumberSelector).toBeVisible();
    await inputNumberSelector.fill(number);
    // Loop that will increment the number of arrow presses
    for (let i = 0; i < arrowPresses; i++) {
      await inputNumberSelector.press("ArrowUp");
    }
  }

  async inputText(text: string, addText: string) {
    const textInput = this.form.locator("#input-text");
    await textInput.fill(text);
    //will add a new text sequentially //delay config will write slowly
    await textInput.pressSequentially(addText, {
      delay: 100,
    });
    // Gets the current value from the input field
    const textInputValue = await textInput.innerText();
    // Validates that the input values is a string
    if (typeof textInputValue !== "string") {
      throw new Error("Invalid type of data");
    }
  }

  async inputPassword(password: string) {
    const textInput = this.form.locator("#input-password");
    await textInput.fill(password);
    await textInput.clear();
  }

  async setFutureDate(days: number) {
    let date = new Date();
    date.setDate(date.getDate() + days); //add future days incrementing date
    // Convert the date to "YYYY-MM-DD" format
    let formattedDate = date.toISOString().split("T")[0];
    let inputDate = this.form.locator("#input-date");
    await inputDate.fill(formattedDate); // Use the correctly formatted date
  }

  async clickDisplay() {
    await this.page.locator("#btn-display-inputs").click();
  }

  async clickCleanInputs() {
    await this.page.locator("#btn-clear-inputs").click();
  }

  // This function validates that the input values match the output values after they are displayed.
  async validateInputs() {
    const inputs = ["number", "text", "password", "date"];
    for (const input of inputs) {
      const inputValue = await this.form
        .locator(`#input-${input}`)
        .inputValue();
      const outputValue = await this.form
        .locator(`#output-${input}`)
        .textContent();
      expect(inputValue).toBe(outputValue);
    }
  }
}
