import {test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import { testData } from '../data/testData';

const username = testData.validUser.username;
const password = testData.validUser.password;
const url_dev = testData.url_dev;

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => await page.goto(url_dev));

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin(username, password);
    expect(page.url()).toBe(url_dev + 'inventory.html');
  });
  test('should logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin(username, password);
    await loginPage.userLogout();
}); 
});