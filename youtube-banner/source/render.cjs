// Renders banner.html to the upload-ready PNG (2560 x 1440) in the parent folder.
// Usage: npm install playwright && npx playwright install chromium && node render.cjs
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'banner.html'));
  await page.waitForFunction(() => window.__ready === true);
  await page.locator('#banner').screenshot({ path: path.join(__dirname, '..', 'instant-regrets-banner.png') });
  console.log('wrote instant-regrets-banner.png');
  await browser.close();
})();
