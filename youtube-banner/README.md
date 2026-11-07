# The Instant Regrets Channel: YouTube banner

| File | What it is |
| --- | --- |
| `instant-regrets-banner.png` | Main banner, ready to upload (2560 × 1440 PNG, 1.9 MB) |
| `instant-regrets-banner-dark.png` | Dark version of the same layout |
| `instant-regrets-banner-preview.jpg` | How the banner crops on desktop, tablet, mobile and TV |
| `source/` | Editable source: HTML/SVG, fonts and a render script |

## Specs

- 2560 × 1440 px, under YouTube's 6 MB limit.
- The logo, channel name and tagline all sit inside the **1546 × 423 safe area** with about 38 px of margin on each side and 13 px top and bottom, so nothing gets cut off on any device.
- The props (bomb, traffic cone, banana peel) only show on desktop and tablet. The caution tape only shows on TV.

## Upload

YouTube Studio → **Customization** → **Branding** → **Banner image** → **Upload**, then choose `instant-regrets-banner.png`. The crop preview YouTube shows should match `instant-regrets-banner-preview.jpg`.

## Edit and re-render

1. Open `source/banner.html` in a browser. Add `?guides=1` to see the device zones, or `?theme=dark` to see the dark version.
2. Change the text, colours (`THEMES` and `C` near the top of the script) or layout.
3. Export both PNGs:

   ```sh
   cd youtube-banner/source
   npm install playwright && npx playwright install chromium
   node render.cjs
   ```

Fonts: Luckiest Guy and Permanent Marker (Apache-2.0), and Bebas Neue (OFL-1.1). All three come from Google Fonts by way of Fontsource, and their licenses are in `source/fonts/`.
