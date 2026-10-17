---
name: update-website
description: Update the AV Guardian public website (home.avedge.io) so its copy matches what the product does, from approved mockups or a list of product changes. Use when Jonathan asks to update the website, change pricing or features on the site, add a section, or bring the site in line with a new release.
---

# Update the website

1. **Get the facts.** Read `../rpi-av-guardian/docs/engineering/plans/roadmap.md` (section
   "Public website") and the product changes since the site was last updated
   (`git log` in `../rpi-av-guardian`, `CHANGELOG.md`). Only things confirmed working on a
   Pi go on the site.
2. **Agree the change before coding.** For anything beyond a wording fix, show mockups first
   (a Design canvas artifact works well) and get Jonathan's approval. Record his decisions
   (prices, wording) in the roadmap.
3. **Branch**, then edit the sections in `src/sections/`. Keep the existing look: Tailwind
   classes and `brand.*` colours from `tailwind.config.ts`, Inter.
4. **Check it builds:** `npm ci && npm run build`. Run `npm run dev` and look at it at phone
   width as well as desktop if you can.
5. **Placeholders stay visible** (`[CARD PRICE]`) until Jonathan gives a value. Never invent
   prices, statistics or quotes.
6. **Commit locally and stop.** Pushing `main` publishes the live site immediately
   (GitHub Pages). Push only when he says so, and tell him it will go live.

Checklist of claims that drift (re-check each release):
- Raspberry Pi 5 only.
- Video limits (40 MB / about 1 minute per video today).
- Offline use: lifetime licence or 30-day demo, set-up from a laptop, update by file.
- Pricing tiers and what each includes.
- Anything about the integration API (not yet released).
