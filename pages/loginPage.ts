import { expect, Locator, Page, BrowserContext } from "@playwright/test";
import { WebActions } from "@lib/WebActions";
let webActions: WebActions;

export class LoginPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly USERNAME: Locator;
  readonly PASSWORD: Locator;
  readonly LOGINBUTTON: Locator;
  readonly LOOUTBUTTON: Locator;
 
  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);

    this.USERNAME = page.getByPlaceholder("Username");
    this.PASSWORD = page.getByPlaceholder("Password");
    this.LOGINBUTTON = page.getByRole('button', { name: 'Login' });
  }
  async gotoHomepage() {
    await this.page.goto("/");
    console.log(" - Launching test website - " + this.page.url());
    await this.page.waitForURL("/");
  }
  async enterUserName(username: string) {
    await this.USERNAME.fill(username);
    console.log(" - Entering Username ");
  }
  async enterPassword(password: string) {
    await this.PASSWORD.fill(password);
    console.log(" - Entering Password  ");
  }
  async clickLogin() {
    await this.LOGINBUTTON.click();
    console.log(" - Click Login in Sauce Demo Page ");
  }

  async saveAuthState() {
    await this.context.storageState({ path: './authUser.json' });
  }
  async logout() {
    await expect(this.LOOUTBUTTON).toBeVisible();
    await this.LOOUTBUTTON.click();
    console.log(" - Logged out from Account Drawer Footer ");
  }
 
  async checkHomePageTitle() {
    const title = await this.page.title();
    // Assert the title
    if (title !== "Swag Labs") {
      console.error(
        `Title is incorrect. Expected 'Expected Title', but got '${title}'`
      );
      process.exit(1); // Exit with an error code
    } else {
      console.log(` - Title is as Expected - '${title}'`);
    }
  }
}
