import { Page } from "@playwright/test";

/**
 * Scrolls to an element if it is not visible in the viewport.
 * @param page - The Playwright page instance.
 * @param selector - The string selector of the element to scroll to.
 * @returns A Promise resolving to the element handle after ensuring it is visible.
 */
async function scrollToElementIfNeeded(page: Page, selector: string) {
  // Wait for the element to appear in the DOM
  const webElement = await page.waitForSelector(selector);

  if (!webElement) {
    throw new Error(`Element not found: ${selector}`);
  }
  await webElement.scrollIntoViewIfNeeded();
  return webElement;
}

export default scrollToElementIfNeeded;
