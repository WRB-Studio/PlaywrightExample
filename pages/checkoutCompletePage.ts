import { Page } from '@playwright/test';

export class CheckoutCompletePage {
  private page: Page;

  public url = 'https://www.saucedemo.com/checkout-complete.html';

  public btnBackHome;

  constructor(page: Page) {
    this.page = page;
    
    this.btnBackHome = this.page.locator('[data-test="back-to-products"]');
  }

}