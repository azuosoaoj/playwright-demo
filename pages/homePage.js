import { expect } from "@playwright/test";

export class HomePage {
    constructor(page) {
        this.page = page;
        this.navBar = page.locator('ul[class="nav navbar-nav"]');
        this.sliderCarousel = page.locator('#slider-carousel');
        this.goToLoginButton = page.locator('a[href="/login"]');
    }

    async goToHomePage() {
        await this.page.goto('/')
    }

    async verifyHomePage() {
        await expect(this.navBar).toBeVisible();
        await expect(this.sliderCarousel).toBeVisible();
    }

    async goToLogin() {
        await this.goToLoginButton.click();
    }
}