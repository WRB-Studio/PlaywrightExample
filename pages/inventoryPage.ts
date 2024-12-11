import { Page } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  public url = 'https://www.saucedemo.com/inventory.html';

  public btnAddToCartProduct2;
  public btnShoppingCart;

  constructor(page: Page) {
    this.page = page;

    this.btnAddToCartProduct2 = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.btnShoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
  }

}