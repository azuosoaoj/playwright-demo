import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.inputLoginEmail = page.locator('form[action="/login"]').getByPlaceholder('Email Address');
        this.inputLoginPassword = page.getByPlaceholder('Password');
        this.buttonLogin = page.locator('button[data-qa="login-button"]')
    }

    async verifyLoginPage() {
        await expect(this.page.getByText('Login to your account')).toBeVisible();
    }

    async login(email, password) {
        await this.inputLoginEmail.fill(email);
        await this.inputLoginPassword.fill(password);
        await this.buttonLogin.click();
    }

    async verifySucessufulLogin() {
        await expect(this.page.getByText('Logged in as')).toBeVisible();
    }

    async verifyErrorMessage() {
        await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible();
    }
}