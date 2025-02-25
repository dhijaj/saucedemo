import test from "@lib/basetest";
import testData from "tests/test-data/test-data.json";

test.describe.configure({ mode: "serial" });
test.describe("Sauce Demo unauthenticated HomePage", async () => {
  test(
    "Verify unauthenticated Homepage and Login ",
    {
      tag: ["@regression", "@UITest", "@SaucelabLogin"],
    },
    async ({ loginPage }) => {
      await loginPage.gotoHomepage();
      await loginPage.checkHomePageTitle();
      await loginPage.enterUserName(testData.login.validUser.userName);
      await loginPage.enterPassword(testData.login.validUser.password);
      await loginPage.clickLogin();
      await loginPage.saveAuthState();
    }
  );
});
