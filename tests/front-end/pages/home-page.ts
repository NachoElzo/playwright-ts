import { Page, expect } from "@playwright/test";
import scrollToElementIfNeeded from "../../../helpers/scroll_to_element";

export class HomePage {
  constructor(public page: Page) {}

  async validatesHeader() {
    const headerSelector = ".footer h4";

    // function from helpers to scroll down to the element
    await scrollToElementIfNeeded(this.page, headerSelector);
    const header = this.page.locator(headerSelector);
    await expect(header).toContainText("Test Automation");
  }
}
