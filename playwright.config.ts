import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  //Resolves as global setup from global-setup file
  globalSetup: require.resolve("./global-setup"),
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  /* Avoid slow test warning */
  reportSlowTests: null,
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 900 },
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: "MobileChrome",
    //   use: { ...devices["Pixel 5"] },
    // },
    /* Back-end exclusive */
    {
      name: "backend",
      use: { ...devices["Desktop Firefox"] },
      grep: /@api/, //Grep' filters tests based on a regular expression.
      //Add at the end of test description @api
    },
  ],
});
