import type { Page } from "@playwright/test";
import { BrowserContext } from "@playwright/test";

export class WebActions {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }
  async delay(time: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }
  async goToPage(url) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }
  async closeBrowser(): Promise<void> {
    await this.page.close();
  }
}
