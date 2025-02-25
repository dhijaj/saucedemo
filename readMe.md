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

### Browser support

The framework is configured to support chromium, firefox, webkit, Mobile Chrome, Mobile Safari. By default, test will run on all browser unless specified using --project opiton as below

```bash
npx playwright test --project=chromium
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

## 📊 Viewing Test Results

Following reportersd are configured,   
```bash
  ["line"],  ['junit', { outputFile: 'junit/results.xml' }], ["html"]
```
Playwright HTML report is saved in the = playwright-report folder

### Logs

Console logs are added for additional information
