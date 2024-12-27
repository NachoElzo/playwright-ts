import { expect, Locator, Page } from "@playwright/test";
export class WebInputs {
  readonly aplicationsContainer: Locator;

  constructor(public page: Page) {
    this.aplicationsContainer = this.page.locator(".page-layout #examples");
  }

  async validateTtile() {
    const title = this.page.locator(".container").locator("h1");
    await expect(title).toContainText("Web inputs");
  }
  async setNumberInputRange(startNumber: number, endNumber: number) {
    if (endNumber < startNumber) {
      throw new Error("End number cannot be lower than start number");
    }
    const numberInput = this.page.locator("#input-number");
    // Convert to string, as .fill() does not accept numbers
    await numberInput.fill(startNumber.toString());
    for (let i = startNumber; i < endNumber; i++) {
      await numberInput.press("ArrowUp");
    }
  }
}
