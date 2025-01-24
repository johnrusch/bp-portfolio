import { test, expect } from '@playwright/test';

test.describe('Navigation and Content Loading', () => {
    test('navigates between pages and loads content', async ({ page }) => {
        // Start at home page
        await page.goto('/');
        await expect(page).toHaveTitle('BPHouse');

        // Navigate to Audio page
        await page.click('text=Audio');
        await expect(page).toHaveTitle('BPHouse - Audio');
        await expect(page.locator('.item-container')).toBeVisible();

        // Navigate to Video page
        await page.click('text=Video');
        await expect(page).toHaveTitle('BPHouse - Video');
        await expect(page.locator('.item-container')).toBeVisible();

        // Navigate to Live page
        await page.click('text=Live');
        await expect(page).toHaveTitle('BPHouse - Live');
        await expect(page.locator('.item-container')).toBeVisible();
    });

    test('lazy loads images correctly', async ({ page }) => {
        await page.goto('/audio');
        
        // Wait for the first image to be visible
        const firstImage = page.locator('.thumbnail').first();
        await expect(firstImage).toBeVisible();
        
        // Check if image has loaded
        const loaded = await firstImage.evaluate((img: HTMLImageElement) => img.complete);
        expect(loaded).toBeTruthy();
    });

    test('handles item clicks correctly', async ({ page, context }) => {
        await page.goto('/video');

        // Create a promise that resolves when a new page is created
        const pagePromise = context.waitForEvent('page');
        
        // Click the first item
        await page.locator('.item-container').first().click();
        
        // Wait for the new page
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        
        // Verify the new page URL
        expect(newPage.url()).toContain('http');
    });
});
