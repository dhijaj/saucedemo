import { Locator, Page, BrowserContext, expect } from "@playwright/test";
import { WebActions } from "@lib/WebActions";
let webActions: WebActions;

export class CartPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly SLBACKPACK: Locator;
  readonly ADDTOCART: Locator;
  readonly REMOVEBUTTON: Locator;
  readonly CARTBADGE: Locator;
  readonly CHECKOUT: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);

    this.SLBACKPACK = page.getByRole('link', { name: 'Sauce Labs Backpack' }).getByText('Sauce Labs Backpack');
    this.ADDTOCART = page.getByRole('button', { name: 'Add to cart' });
    this.REMOVEBUTTON = page.getByRole('button', { name: 'Remove' });
    this.CARTBADGE = page.locator('.shopping_cart_badge')
    this.CHECKOUT = page.getByRole('button', { name: 'Checkout' });
  }

  async gotoCartPage() {
    await this.page.goto("/cart.html");
    console.log(" - Going to Cart page ");
  }

  async isSLBackpackInCart() {
    const cartList = await this.page.$('.cart_list');
    if (!cartList) {
      console.error(' - Cart list not found!');
      return;
    }
    const inventoryItemNameElement = await cartList.$('.inventory_item_name[data-test="inventory-item-name"]');
    if (!inventoryItemNameElement) {
      console.error(' - Inventory item name element not found within the cart list!');
      return;
    }
    const inventoryItemNameText = await inventoryItemNameElement.textContent();
    if (inventoryItemNameText?.trim() === 'Sauce Labs Backpack') {
      console.log(' - Inventory item "Sauce Labs Backpack" is available in the cart list');
    } else {
      console.error(` - Inventory item name in cart list is not "Sauce Labs Backpack", it is: ${inventoryItemNameText}`);
    }
  }

  async clickCheckout() {
    await expect(this.CHECKOUT).toHaveText('Checkout');
    await this.CHECKOUT.click();
    console.log(" - Clicking CHECKOUT on Cart ");
  }

  async isRemoveButton() {
    await expect(this.REMOVEBUTTON).toHaveText('Remove');
    await expect(this.REMOVEBUTTON).toBeVisible
    console.log(" - Remove Button is visible after adding the item to cart");
  }

  async checkCartBadge() {
    const cartBadgeValue = await this.page.textContent('.shopping_cart_badge');
    console.log(" - Cart Badge has :  " + cartBadgeValue + " item");
  }
}
