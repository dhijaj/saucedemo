# 🎭 Playwright TypeScript Sauce Demo 🎭



## 🛠️ Tech Stack

| Tool                                                                                     | Description                                                  |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------|
|                        |
| [@types/node](https://www.npmjs.com/package/@types/node)                                 | TypeScript definitions for Node.js                           |
| [Playwright](https://www.npmjs.com/package/@playwright/test)                             | A framework for Web Testing and Automation                   |
| [TypeScript](https://www.npmjs.com/package/typescript)                                   | A typed superset of JavaScript                               |                       |

## ⚙️ Setup Instructions

### Clone the project

```bash
git clone https://github.com/dhijaj/saucedemo.git
cd saucedemo
```

### Install dependencies

```bash
npm install
```

### Install playwright browsers

```bash
npx playwright install --with-deps
```

### Multi Env support

The framework support multiple env like dev, preprod, prod. User shall define the TEST_ENV for execution on any particular env.

| Parameter  | Description                  | Example Value         |
|------------|------------------------------|-----------------------|
| TEST_ENV   | Test Execution Environment  |dev or preprod or prod|

## 📁 Structure

```sh
 |- lib #  # Predefined fixture sets & their factory functions
    |- basetest # custom test fixture that provides reusable objects and actions  
    |- webactions #  class that encapsulates common web interaction methods using Playwright
 |- pages # page object for all test pages
    |- cartPage.ts
    |- checkoutPage.ts
    |- loginPage.ts
    |- productListingPage.ts
 |- tests # Test folder
    |- test-data # Test users accounts
       |- test-data.json
    |- 001-loginPage.test.ts
    |- 002-productListingPage.test.ts
    |- 003-cart.test.ts
    |- 004-checkout.test.ts
 |- Dockerfile
 |- authUser.json
 |- globalTeardown.ts
 |- package.json
 |- playwright.config.ts
 |- readMe.md
 |- testconfig.ts
 |- tsconfig.json
```

## 🏃‍♂️ Running Tests

Run tests:

```bash
npx playwright test
```

Run the test with on windows using the script:

```bash
 npm run demoOnWindows  
```

### Browser support

The framework is configured to support chromium, firefox, webkit, Mobile Chrome, Mobile Safari. By default, test will run on all browser unless specified using --project opiton as below

```bash
npx playwright test --project=chromium
```

## Test Description:

| Test scenarios                                                                                     | Description                                                  |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------|
|                        |
| Login | Homepage where user Logs in to the shopping site. Tests include happy path Login and saves the user session info                           |
| Product Listing Page | Test includes adding Saucedemo backpage product to the cart, Verify remove option loads after adding, verify the Cart badge          |
| Cart page                                   | Verify Cart page loads with the product added in previous step.   |
| Checkout Page | Test includes adding user details to checkout, Verify summary of the cart, Finish and Complete Checkout, Clear session data       |          

## 📊 Viewing Test Results

Following reportersd are configured,   
```bash
  ["line"],  ['junit', { outputFile: 'junit/results.xml' }], ["html"]
```
Playwright HTML report is saved in the = playwright-report folder

### GitHub Actions

Framework is integrated with Git Actions. Impletemented Vanilla CI actions to run and upload test artifcates when there is a new check in to main repo.

Artifacts link is saved the github actions to download and view. Sample report available [here](https://github.com/dhijaj/saucedemo/actions/runs/13532704124/artifacts/2652344265) 

### Logs

Console logs are added for additional information
