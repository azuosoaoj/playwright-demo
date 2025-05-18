// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { validLogin, invalidLogin } from '../data/users.json'

test('Login User with correct email and password', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.goToLogin();

  await loginPage.verifyLoginPage();
  await loginPage.login(validLogin.user, validLogin.password);
  await loginPage.verifySucessufulLogin()
});

test('Login User with incorrect email and password', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.goToLogin();

  await loginPage.verifyLoginPage();
  await loginPage.login(invalidLogin.user, invalidLogin.password);
  await loginPage.verifyErrorMessage()
});