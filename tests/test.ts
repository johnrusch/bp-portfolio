import { test, expect, chromium } from '@playwright/test';

test.describe('index.svelte page', () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:5173'); // replace with your svelte app URL
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('should load the page and display the background video', async () => {
    const videoElement = await page.waitForSelector('#bg-video');
    expect(videoElement).toBeTruthy();
  });

  test('should select a tab on click', async () => {
    await page.click('.tab-button'); // simulate clicking the first tab button
    const selected = await page.$eval('.tab-button.selected', el => el.textContent);
    expect(selected).toBeTruthy();
  });


  test('should find "Video" tab and expect video thumbnail', async () => {
    // await page.goto('http://localhost:5173/');

    // Find the tab with role "tab" and text content "Video" and click on it
    await page.locator('text=Video').click();

    // Expect an img element with the class "video-thumbnail"
    const videoThumbnail = await page.locator('.video-thumbnail');
    expect(videoThumbnail).toBeTruthy();
  });


  test('should find "Audio" tab and expect album thumbnail', async () => {
    // await page.goto('http://localhost:5173/');

    // Find the tab with role "tab" and text content "Audio" and click on it
    await page.locator('text=Audio').click();

    // Expect an img element with the class "album-thumbnail"
    const albumThumbnail = await page.locator('.album-thumbnail');
    expect(albumThumbnail).toBeTruthy();
  });

  test('should find "Live" tab and expect video thumbnail', async () => {
    // await page.goto('http://localhost:5173/');

    // Find the tab with role "tab" and text content "Live" and click on it
    await page.locator('text=Live').click();

    // Expect an img element with the class "video-thumbnail"
    const videoThumbnail = await page.locator('.video-thumbnail');
    expect(videoThumbnail).toBeTruthy();
  });

  test('should find "Image" tab and expect album thumbnail', async () => {
    // await page.goto('http://localhost:5173/');

    // Find the tab with role "tab" and text content "Image" and click on it
    await page.locator('text=Image').click();

    // Expect an img element with the class "album-thumbnail"
    const albumThumbnail = await page.locator('.album-thumbnail');
    expect(albumThumbnail).toBeTruthy();
  });


});



