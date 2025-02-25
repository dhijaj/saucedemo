import test from "@lib/basetest";
const authUser = "./authUser.json";

test.describe.configure({ mode: "serial" });
test.use({ storageState: authUser });
test.describe("Sauce Demo Product listing page", async () => {
    test(
        "Verify Product Listing page ",
        {
          tag: ["@regression", "@UITest", "@SauceAddProduct"],
        },
        async ({loginPage, productListingPage }) => {
          await productListingPage.gotoProductListingPage();
          await productListingPage.selectSLBackpack();
          await productListingPage.clickAddToCart();
          await productListingPage.isRemoveButton();
          await productListingPage.checkCartBadge();
          await productListingPage.gotoCart();
          await loginPage.saveAuthState();
        }
      );
});


