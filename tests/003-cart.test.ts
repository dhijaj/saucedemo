import test from "@lib/basetest";
const authUser = "./authUser.json";

test.describe.configure({ mode: "serial" });
test.use({ storageState: authUser });
test.describe("Sauce Demo cart page", async () => {
  test(
    "Verify sauce demo cart and the items ",
    {
      tag: ["@regression", "@UITest", "@SauceDemoCart"],
    },
    async ({ cartPage, checkoutPage }) => {
      await cartPage.gotoCartPage();
      await checkoutPage.clickCheckout
      await cartPage.isSLBackpackInCart();
    }
  );
});
