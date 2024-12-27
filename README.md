## Playwright Installation Process

- Install Node.js or NVM.
- Install Playwright:
  `npm init playwright@latest`

## If You Are Cloning This Repository

- Execute:
  `npm install`

## ESLint Commands

- Execute ESLint:
  `npx eslint "tests/" "data/" "helpers/"`
- Fix issues:
  `npx eslint "tests/" "data/" "helpers/" --fix`

## npm scrips for execiution

- Execute api project ui mode:
  `PROJECT=backend ENVIRONMENT=API npx playwright test --project=backend`
- Execute front-end project ui mode:
  `ENVIRONMENT=UI npx playwright test front-end/`
