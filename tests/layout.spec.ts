import { test, expect } from '@playwright/test';

test('should navigate to "/" when clicking outside of container', async ({ page }) => {
  await page.goto('http://localhost:4173/your-page');

  // Select the container and NavMenuWrapper elements
  const container = await page.$('div');
  const navMenuWrapper = await page.$('div');

  // Simulate a click outside the container and NavMenuWrapper
  await page.mouse.click(0, 0);

  // Check that the URL has changed to "/"
  expect(page.url()).toBe('http://localhost:4173/');
});

test('should not navigate when clicking inside the container', async ({ page }) => {
  await page.goto('http://localhost:4173/your-page');

  // Simulate a click inside the container
  const container = await page.$('div');
  await container?.click();

  // Check that the URL hasn't changed
  expect(page.url()).toBe('http://localhost:4173/your-page');
});

// Additional test to check if video is autoplaying and is muted
test('video should autoplay and be muted', async ({ page }) => {
  await page.goto('http://localhost:4173/your-page');

  // Check video attributes
  const video = await page.$('video');
  expect(await video?.getAttribute('autoplay')).toBe('autoplay');
  expect(await video?.getAttribute('muted')).toBe('muted');
});
