import { Page } from '@playwright/test';

export class CheckoutStepTwoPage {
  private page: Page;

  public url = 'https://www.saucedemo.com/checkout-step-two.html';

  public btnCheckout;

  constructor(page: Page) {
    this.page = page;

    this.btnCheckout = this.page.locator('[data-test="finish"]');
  }


}