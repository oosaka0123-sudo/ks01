# Claude proposal: 「鏡のような海で、波を待つ。」

Independent first implementation. No other AI proposal was opened. The main `index.html` in the parent folder was not read either.

## Visual idea

- **The horizon is the page's fold.** The strongest line in the clip is where sky meets water. Everything is placed relative to that line.
- **PC / tablet (>600px):** the headline (Shippori Mincho B1, horizontal) sits in the sky on the right and ends right on the video's horizon. A blurred, mirrored copy of it lies on the water below and sways once every 4 seconds, matching the clip's loop. JS calculates where the horizon actually falls for the current viewport (cover-crop math, source horizon ≈57.2%) and sets `--horizon`, so the headline stays on the horizon at any aspect ratio. The left side, where the surfer is, stays free of text.
- **Smartphone (≤600px):** the 9:16 clip is almost the same shape as the screen, so very little gets cropped. The headline becomes vertical (縦書き) in the top-right sky. There is no reflection here, so everything below the horizon is left to the surfer and the wave.
- **One orchestrated moment:** the headline lines rise up out of the horizon while the reflection descends from it. After that, the only motion is the 4-second sway and a chapter rule that draws once per section. Body text never animates.
- **Lower content:** 水平線 (composition, with PC and phone wireframe SVGs) → 色 (five colours sampled from sky to seabed, each with its computed contrast) → 四秒 (a live readout of the loop position synced to the hero video, plus the motion rules) → 注記 (unofficial, non-commercial, no affiliation or endorsement, no sales or contact, noindex).
- **Palette:** 空の群青 #0F2C6E, 雲の金 #E9C37A, 波の翠 #2FA9A0 (#1D6F6A for text on light backgrounds), 潮の白 #EEF3F0, 深い紺 #0B1F45.
- **Excluded on purpose:** `reference.jpg` (tobacco packaging) is not used. There is no brand name, product, sun or headdress imagery, purchase, or contact CTA.

## Implementation notes

- Single static file. Inline CSS and JS, no frameworks. All asset URLs are relative (`../../assets/hero.mp4`, `poster.jpg`, `logo.svg`, `favicon.svg`). `noindex, nofollow`.
- Header: `position: fixed`, translucent navy with `backdrop-filter`, and an opaque fallback where that isn't supported. It becomes denser once the hero is scrolled past. The transparent `logo.svg` is always top-left. Anchor nav uses `aria-current="location"`. At ≤720px it collapses into a menu button (`aria-expanded`, Esc closes and returns focus, closes on link click or outside click). Without JS the links stay visible.
- Video: `autoplay muted loop playsinline`, with the poster also set as the hero background for first paint. Play/pause and sound buttons are native `<button>`s with Japanese labels. If the browser reports no audio track, the sound button switches to `aria-disabled` and reads 「音声なし」.
- Reduced motion: an inline script right after `<video>` removes autoplay and pauses, so the poster shows. Headline rise, reflection sway, chapter-rule draw and smooth scroll are all turned off. The video can still be played by hand.
- Contrast ratios in the palette section were calculated by hand from WCAG relative luminance. They were not measured by a tool.

## Tested vs untested

**Done (static, by reading the code):**
- Checked relative asset paths against the folder structure.
- Hand-traced the layout math at 320 / 390 / 601 / 768 / 1440 / 1920px. This found and fixed: the mirror flipping upward over the headline (wrong `transform-origin`), the headline clipping at 601–960px, and the header height ignoring the safe-area inset.
- Hand-calculated contrast values (see palette section).
- Checked that `git status` only touches `proposals/claude/`.

**NOT tested (no rendering was possible in this session):**
- The chrome-devtools MCP `new_page` call was denied by the permission system, and shell access to Chrome was blocked. **No screenshots, no real-browser rendering, no Lighthouse, no axe, no console check.**
- Not visually checked at 320 / 390 / 768 / 1440: how vertical text renders on iOS Safari, text contrast over the bright clouds, and real font-swap layout shift (Google Fonts with `display=swap` are loaded from an external CDN).
- Audio-track detection in Chrome relies on `webkitAudioDecodedByteCount`, which is unverified for muted playback. The button might wrongly show 「音声なし」, or show a working toggle on a silent clip.
- Not done: keyboard walkthrough or screen-reader pass.
- Needs a real-device pass before merge.

## Skills / tools actually observed

- Called with the Skill tool before designing: `frontend-design:frontend-design`, `rss7-wireframe`, `rss7-interactive-prototype`. Each loaded its guidance text. The linked web-design-master docs (WORKFLOW_3AI.md, CLAUDE_DIRECTION.md, DIRECTION_QA.md) were **not** fetched.
- Tools used: Read (poster.jpg, reference.jpg, logo.svg, README.txt), Glob, Grep, Write/Edit. ToolSearch loaded the chrome-devtools schemas, but the browser call was denied.
- Nothing was pushed or deployed, and no external changes were made.
