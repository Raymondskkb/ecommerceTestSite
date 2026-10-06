import { type Page, type Locator } from "@playwright/test";

export default class LoginPage {
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  page: Page;
  
  constructor( page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'username' });
    this.passwordInput = page.getByRole('textbox', { name: 'password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  userLogin = async (username: string, password: string) => {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  userLogout = async () => {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.getByRole('button', { name: 'Logout' }).click();
  }
}