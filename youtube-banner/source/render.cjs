// Renders banner.html to upload-ready PNGs (2560 x 1440) in the parent folder.
// Usage: npm install playwright && npx playwright install chromium && node render.cjs
const { chromium } = require('playwright');
const path = require('path');

const outputs = [
  ['', 'instant-regrets-banner.png'],
  ['theme=dark', 'instant-regrets-banner-dark.png'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 1 });
  for (const [query, file] of outputs) {
    await page.goto('file://' + path.join(__dirname, 'banner.html') + (query ? `?${query}` : ''));
    await page.waitForFunction(() => window.__ready === true);
    await page.locator('#banner').screenshot({ path: path.join(__dirname, '..', file) });
    console.log(`wrote ${file}`);
  }
  await browser.close();
})();
