import { Locator, Page, BrowserContext, expect } from "@playwright/test";
import { WebActions } from "@lib/WebActions";
let webActions: WebActions;


export class ProductListingPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly SLBACKPACK: Locator;
  readonly ADDTOCART: Locator;
  readonly REMOVEBUTTON: Locator;
  readonly CARTBADGE: Locator;


  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.SLBACKPACK = page.getByRole('link', { name: 'Sauce Labs Backpack' }).getByText('Sauce Labs Backpack');
    this.ADDTOCART = page.getByRole('button', { name: 'Add to cart' });
    this.REMOVEBUTTON = page.getByRole('button', { name: 'Remove' });
    this.CARTBADGE = page.locator('.shopping_cart_badge')

  }

  async gotoProductListingPage() {
    await this.page.goto("/inventory.html")
    console.log(" - Going to inventory page ");
  }

  async selectSLBackpack() {
    await expect(this.SLBACKPACK).toBeVisible
    await this.SLBACKPACK.click();
    console.log(" - Clicking on the Sauce Lap Backpack ");
  }

  async clickAddToCart() {
    await expect(this.ADDTOCART).toHaveText('Add to cart');
    await this.ADDTOCART.click();
    console.log(" - Clicking Add to cart on the 'Sauce Lap Backpack' Item ");
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
  async gotoCart() {
  await this.page.locator('.shopping_cart_badge').click
  console.log(" - Going to Cart");
  }
}
