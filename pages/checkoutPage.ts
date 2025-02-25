import { Locator, Page, BrowserContext, expect } from "@playwright/test";
import { WebActions } from "@lib/WebActions";
import { faker } from '@faker-js/faker';
let webActions: WebActions;

export class CheckoutPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly FIRSTNAME: Locator;
    readonly LASTNAME: Locator;
    readonly ZIP: Locator;
    readonly CONTINUE: Locator;
    readonly CHECKOUT: Locator;
    readonly SUMMARY: Locator;
    readonly FINISH: Locator;
    readonly BACKHOME: Locator;
    readonly COMPLETECHECKOUT: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);

        this.FIRSTNAME = page.getByPlaceholder("First Name");
        this.LASTNAME = page.getByPlaceholder("Last Name");
        this.ZIP = page.getByPlaceholder("Zip/Postal Code");
        this.CONTINUE = page.locator('input[data-test="continue"]');
        this.CHECKOUT = page.getByRole('button', { name: 'Checkout' });
        this.SUMMARY = page.locator(".summary_info");
        this.FINISH = page.getByRole('button', { name: 'Finish' });
        this.COMPLETECHECKOUT = page.locator(".complete-header");
        this.BACKHOME = page.getByRole('button', { name: 'Back Home' });
    }

    async clickCheckout() {
        await this.CHECKOUT.click();
        console.log(" - Going to checkout step 1 ");
        const currentUrl = this.page.url();
        // Verify if the URL is /checkout-step-one.html
        if (currentUrl.endsWith('/checkout-step-one.html')) {
            console.log(' - The URL is correct: /checkout-step-one.html');
        } else {
            console.error(` - The URL is incorrect. Expected /checkout-step-one.html, but got: ${currentUrl}`);
        }
    } catch(error) {
        console.error(' - An error occurred:', error);
    }

    async enterInformation() {
        const FNAME: string = faker.person.firstName();
        const LNAME: string = faker.person.lastName();
        const ZIPCODE: string = faker.location.zipCode();

        await this.FIRSTNAME.fill(FNAME);
        await this.LASTNAME.fill(LNAME);
        await this.ZIP.fill(ZIPCODE);
        console.log(" - Entering User information ");
        await this.CONTINUE.click();
    }

    async isSummary() {
        await expect(this.SUMMARY).toBeVisible();
        console.log(" - Summary information present ");
    }

    async finishCheckout() {
        await expect(this.FINISH).toBeVisible();
        await this.FINISH.click();
        console.log(" - Finish checkout ");
    }
    
    async checkoutComplete() {
        await expect(this.COMPLETECHECKOUT).toBeVisible();
        console.log(" - Verified Complete checkout page ");
        await this.BACKHOME.click();
        console.log(" - Back Home button clicked on complete checkout page");
    }
}