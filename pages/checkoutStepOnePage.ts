import { Page } from '@playwright/test';

export class CheckoutStepOnePage {
  private page: Page;

  public inpUsername;
  public inpPassword;
  public inpZip;
  public btnContinue;

  constructor(page: Page) {
    this.page = page;

    this.inpUsername = this.page.locator('[data-test="firstName"]');
    this.inpPassword = this.page.locator('[data-test="lastName"]');
    this.inpZip = this.page.locator('[data-test="postalCode"]');
    this.btnContinue = this.page.locator('[data-test="continue"]');
  }

  async setInfos(firstName: string, lastName: string, zipCode: string) {
    await this.inpUsername.fill(firstName);
    await this.inpPassword.fill(lastName);
    await this.inpZip.fill(zipCode);
  }

}