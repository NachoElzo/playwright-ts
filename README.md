# Playwright Installation Process

- Install Node.js or NVM.
- Install Playwright:
  `npm init playwright@latest`

## If You Are Cloning This Repository

- Execute:
  `npm install`

## ESLint Installation

- Install TypeScript as a dev dependency:
  `npm install --save-dev typescript`
- Create `tsconfig.json` file: `npx tsc --init`
- Install ESLint dev dependencies:
  `npm install --save-dev eslint @eslint/js @types/eslint__js typescript-eslint`

## ESLint Commands

- Execute ESLint:
  `npx eslint "tests/" "data/" "helpers/"`
- Fix issues:
  `npx eslint "tests/" "data/" "helpers/" --fix`

## npm scrips for execiution

- Execute api project ui mode:
  `ENVIRONMENT=API npx playwright test back-end/`
  - Execute front-end project ui mode:
    `ENVIRONMENT=UI npx playwright test front-end/`
