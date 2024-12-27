import { Page, Locator, expect } from "@playwright/test";
import { isMobile } from "../../../helpers/validates-mobile";

export class NavBar {
  readonly page: Page;
  readonly navBar: Locator;
  readonly navBarCollapseButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.navBar = this.page.locator("#main-navbar a");
    this.navBarCollapseButton = this.page.getByLabel("Toggle navigation");
  }

  async navBarValidation() {
    const navBarItems = await this.navBar.count();
    expect(navBarItems).toEqual(13);
  }

  async clickTestCases() {
    const testCasesLink = this.navBar.locator("text=Test Cases");
    // If the app is in mobile view, click the nav-bar button
    if (isMobile()) {
      await this.navBarCollapseButton.scrollIntoViewIfNeeded();
      await this.navBarCollapseButton.click();
      await testCasesLink.click();
    } else {
      await testCasesLink.click();
    }
  }
}
