# INSTANT REGRETS: YouTube banner

| File | What it is |
| --- | --- |
| `instant-regrets-banner.png` | The banner, ready to upload (2560 × 1440 PNG, 0.3 MB) |
| `instant-regrets-banner-preview.jpg` | How the banner crops on desktop, tablet, mobile and TV |
| `source/` | Editable source: HTML/SVG, image assets, fonts and a render script |

## Taken from the channel and its Shorts

- **Wordmark:** "instant regrets." is rebuilt to match the Shorts header: Poppins ExtraBold for "instant" and Roboto Medium for "regrets.", with the same spacing and proportions.
- **Channel logo:** the crossed-out "regrets" from the profile picture, shown in white.
- **Mascot:** the paper-bag "LOSER" mascot, cut from the panel of the Short "She didn't SEE the mirror coming". `source/assets/mascot.png` contains only the mascot.
- **Shorts design:** the black panel, the red header rule, Anton headlines with the last words in gold, the THE FACTS block (questions in white, answers in gold), the WAIT. and 0.5x SLOW-MO tags, and the torn edge.
- **Copy:** all text comes from the channel description: the tagline "That split second between 'watch this' and 'oh no.'", "New Shorts daily", "Nobody was seriously hurt" and "Daily YouTube Shorts".
- **Colours:** black `#090909`, gold `#E0AD38`, red `#D01F27`, all sampled from the Shorts.

## What each screen shows

- **Every device:** the wordmark, red rule, tagline and mascot sit inside YouTube's 1546 × 423 safe area, so they always show.
- **Desktop only:** THE FACTS block (left) and the crossed-out logo with "Daily YouTube Shorts" (right). Both are kept clear of the tablet crop, so tablets show clean black edges instead of half-cut text.
- **TV only:** the top and bottom strips, which carry the WAIT. and 0.5x SLOW-MO tags and the torn edge.

## Upload

YouTube Studio → **Customization** → **Branding** → **Banner image** → **Upload**, then choose `instant-regrets-banner.png`.

## Edit and re-render

1. Open `source/banner.html` in a browser. Add `?guides=1` to see the device zones.
2. Edit the text, colours (`C` near the top of the script) or layout.
3. Export the PNG:

   ```sh
   cd youtube-banner/source
   npm install playwright && npx playwright install chromium
   node render.cjs
   ```

Fonts: Poppins, Roboto and Anton, all OFL-1.1, from Google Fonts by way of Fontsource. Their licenses are in `source/fonts/`.
