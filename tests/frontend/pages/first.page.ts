import { Page, expect, Locator } from "@playwright/test";

export default class First {
  readonly page: Page;
  readonly elementoRepetitivo: Locator;
  constructor(page: Page) {
    this.page = page;
    this.elementoRepetitivo = this.page.locator("h1").nth(1);
  }

  async element() {
    const form = this.page.getByText(
      "A place to learn and practice test automation."
    );
    await expect(form).toBeVisible();
    await expect(this.elementoRepetitivo).toBeVisible();
  }
}
