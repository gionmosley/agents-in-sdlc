# Instant Regrets — Shorts Layout v2: "The Regret Room"

The Paper Bag guy is no longer just an outro. He is **on screen for the entire Short** as a live
"reaction cam", reacting, talking in speech bubbles, and taking over the screen at the end.

**Files in this folder**
- `layout_blueprint.png`: annotated layout with every zone and the YouTube UI safe areas
- `beat_01…06_*.jpg`: one still per beat of the viral framework
- `shorts_layout_demo.mp4`: 14s working demo (1080×1920) built from trailer footage

---

## Canvas: 1080 × 1920 (9:16)

| # | Zone | Position | What lives there |
|---|---|---|---|
| 1 | **Header** | y 70–236 | `instant regrets.` wordmark (left) + black episode pill `regret #014` (right) |
| 2 | **Fail zone** | y 250–1330, 1080×1080 | The fail clip, square-cropped (vertical sources can fill it) |
| 3 | **Bag cam** | x 40, y 1120, 400px, tilted −3° | Polaroid-style "reaction cam" with blinking red REC dot. Overlaps the fail zone corner so he feels *inside* the video |
| 4 | **Bag says** | x 470–900, y 1150–1300 | Comic speech bubble, pops in with overshoot. 1–3 words max |
| 5 | **Regret meter** | x 480–900, y 1400 | Fills yellow → orange → red per fail, hits **MAX** |
| — | **Background** | full frame | Kraft-paper texture with creases. The bag *is* the brand surface |
| — | **YouTube UI zone** | bottom 360px + right 140px from y 900 | Kept empty (title, channel name, like/comment buttons sit here) |

**Type:** Poppins ExtraBold (headlines, bubbles), Poppins Bold (labels). All lowercase, matching the wordmark.
**Colors:** kraft `#BA9464`, ink `#141414`, white, regret red `#EB1C24`, meter yellow `#FFD600`.

---

## The viral framework (beat by beat)

| Beat | Time | Fail zone | Paper Bag |
|---|---|---|---|
| **1. Hook** | 0–1.6s | Blurred first frame + "3 instant regrets." / "#1 is the worst" | **Watching** (popcorn). Bubble: *"watch this."* |
| **2. Play** | per fail | Clip plays, countdown number `#3 / #2 / #1` top-right | Watching |
| **3. Impact freeze** | 0.5s | Freeze, punch-in, red-tint, white flash, rotated caption stamp | **Flinches**: cam punches in, shakes, red border. Bubble pops: *"nope." / "why." / "every. time."* |
| **4. Instant replay** | ~1.8s | Slow-mo ×0.5, punched in, red `replay x0.5` tag | **Shakes head** or **facepalms** |
| *(repeat 2–4 per fail; meter climbs)* | | | |
| **5. Takeover outro** | 2.6s | The bag cam **grows out of its polaroid to fill the fail zone**: full close-up head shake | Stamp `regret level: MAX` + comment bait *"rate it 1-10 in the comments"* |

Why it works: the hook opens an information gap ("#1 is the worst"), the countdown holds viewers to
the end, the freeze-and-replay pays off every fail twice, and the comment prompt drives engagement.
The Paper Bag guy gives every Short a recurring face, which makes the channel recognizable in the feed.

---

## Bag reaction library

| Reaction | Use on | Current source | Status |
|---|---|---|---|
| **watch** | idle / hook | cinema popcorn render | ✅ still image + slow breathing zoom |
| **facepalm** | dumb-decision fails | control-room render | ✅ still image + slow push |
| **shake** | impact / outro | trailer finale close-up | ✅ real motion (ping-pong loop) |
| flinch / slow clap / point at screen / thumbs down / lean in "wait for it" | — | — | ⏳ needs generating |

**Recommended next step:** generate a proper reaction-clip library with Seedance on Higgsfield
(the same character reference, white or kraft backdrop, 4–5s each, chest-up, locked-off camera).
At 720p that's about 7 credits/sec, so roughly **30–35 credits per reaction**, about **200 credits for 6**.
Once those exist, every reaction in the cam is real motion instead of a still.

---

## Producing a new Short with this layout

1. Pick 3 fails (or 1 long fail split into setup / impact / replay).
2. For each: in-time, impact time, crop centre, caption stamp, bag line, reaction.
3. Send the clips with those notes and I render it in this layout (about 1 minute per 15s Short).
4. Title formula: `<number> instant regrets 😬 #<specific thing>`. Keep the hook text identical to the title's promise.
