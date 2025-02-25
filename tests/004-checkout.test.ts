import test from "@lib/basetest";
const authUser = "./authUser.json";

test.describe.configure({ mode: "serial" });
test.use({ storageState: authUser });
test.describe("Sauce Demo checkout page", async () => {
    test(
        "Verify Sauce demo checkout ",
        {
            tag: ["@regression", "@UITest", "@SauceDemoCheckout"],
        },
        async ({ cartPage, checkoutPage, loginPage }) => {
            await cartPage.gotoCartPage();
            await checkoutPage.clickCheckout();
            await checkoutPage.enterInformation();
            await checkoutPage.isSummary();
            await checkoutPage.finishCheckout();
            await checkoutPage.checkoutComplete();
            await loginPage.saveAuthState();
        }
    );
});
