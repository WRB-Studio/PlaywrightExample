import { Page } from '@playwright/test';

export class ShoppingCartPage {
  private page: Page;

  public url = 'https://www.saucedemo.com/cart.html';

  public btnCheckout;

  constructor(page: Page) {
    this.page = page;

    this.btnCheckout = this.page.locator('[data-test="checkout"]');
  }

}