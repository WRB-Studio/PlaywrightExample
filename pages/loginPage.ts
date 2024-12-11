import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  public url = 'https://www.saucedemo.com/';

  //Locator
  public inpUsername;
  public inpPassword;
  public btnLogin;

  constructor(page: Page) {
    this.page = page;
    
    this.inpUsername = this.page.locator('[data-test="username"]');
    this.inpPassword = this.page.locator('[data-test="password"]');
    this.btnLogin = this.page.locator('[data-test="login-button"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.inpUsername.fill(username);
    await this.inpPassword.fill(password);
    await this.btnLogin.click();
  }

}