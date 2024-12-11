import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { CheckoutStepOnePage } from '../pages/checkoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';

test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    //Open login page and login
    await page.goto(loginPage.url);
    await loginPage.login('standard_user', 'secret_sauce');

    //Add product to cart and go to cart
    await inventoryPage.btnAddToCartProduct2.click();
    await inventoryPage.btnShoppingCart.click();

    //go to checkout step one
    await shoppingCartPage.btnCheckout.click();

    //add delivery infos and go to checkout step two
    await checkoutStepOnePage.setInfos('John', 'Doe', '12345');
    await checkoutStepOnePage.btnContinue.click();

    //finish checkout
    await checkoutStepTwoPage.btnCheckout.click();

    //go back to inventory
    await checkoutCompletePage.btnBackHome.click();
});





















/*
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('#login_button_container div').nth(3).click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$9.99');

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Benny');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Test');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $10.79');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await page.locator('[data-test="back-to-products"]').click();
});
*/