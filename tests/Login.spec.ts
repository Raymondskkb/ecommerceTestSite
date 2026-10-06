import {test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
  });
  test('should logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin('standard_user', 'secret_sauce');
    await loginPage.userLogout();
}); 
});