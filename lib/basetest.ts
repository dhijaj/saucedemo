import { TestInfo, test as baseTest } from "@playwright/test";
import { WebActions } from "./WebActions";
import { LoginPage } from "@pages/loginPage";
import { ProductListingPage } from "@pages/productListingPage";
import { CartPage } from "@pages/cartPage";
import { CheckoutPage } from "@pages/checkoutPage";

const test = baseTest.extend<{
  webActions: WebActions;
  testInfo: TestInfo;
  loginPage: LoginPage;
  productListingPage: ProductListingPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;

}>({
  webActions: async ({ page, context }, use) => {
    await use(new WebActions(page, context));
  },
  loginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },
  productListingPage: async ({ page, context }, use) => {
    await use(new ProductListingPage(page, context));
  },
  cartPage: async ({ page, context }, use) => {
    await use(new CartPage(page, context));
  },
  checkoutPage: async ({ page, context }, use) => {
    await use(new CheckoutPage(page, context));
  }
});

export default test;
