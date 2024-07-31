import { test, expect } from "@playwright/test";
import First from "../pages/first.page";
import { CONDUIT_URL } from "../../../envconfig.ts";

test.describe("This will be the first test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONDUIT_URL);
  });

  test("expect the page to contain bondaracademy", async ({ page }) => {
    await expect(page).toHaveURL(/.*bondaracademy/);
    await expect(page).toHaveTitle(/Conduit/); // Puedes ajustar esto para verificar el título de la página si es necesario.
    await expect(page.locator("body")).toContainText("bondaracademy"); // Ajusta el selector según el texto que esperas ver en la página.
    const first = new First(page);
    await first.element();
  });
});
