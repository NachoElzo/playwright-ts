import { test } from "@playwright/test";
import { practiceUrl } from "../../../envconfig";
import { NavBar } from "../pages/nav-bar-page";
import { HomePage } from "../pages/home-page";

test.describe("Giving users in the home page", () => {
  test("Navigate", async ({ page }) => {
    await page.goto(practiceUrl);
    const navBar = new NavBar(page);
    await navBar.navBarValidation();
    await navBar.clickTestCases();
    const homePage = new HomePage(page);
    await homePage.validatesHeader();
  });
});
