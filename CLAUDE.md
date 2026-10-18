# AV Guardian public website (av-guardian)

The marketing site for AV Guardian at **home.avedge.io**. One page, React 18 + Vite +
Tailwind 3, TypeScript. Owner: Jonathan Arndt (Automation & Integration, LLC).

The product itself (Pi appliance, cloud, portal) lives in the sibling repo
`../rpi-av-guardian`. Its `docs/engineering/plans/roadmap.md` holds the agreed website
changes and the product facts the site must match. Read it before changing copy.

## Publishing: pushing `main` makes the site live

`.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages on every push to
`main`. So:

- Work on a branch; commit locally. **Push only when Jonathan asks**, and never push `main`
  without his explicit go-ahead: it publishes to the public site at once.
- `public/CNAME` (`home.avedge.io`) must stay.
- The repo is public: no secrets, prices he hasn't approved, customer names or internal notes.

## Layout

| Path | What |
|---|---|
| `src/App.tsx` | Section order |
| `src/sections/` | `Hero`, `Features`, `HowItWorks`, `Hardware`, `Pricing`, `Dealers`, `Contact` |
| `src/components/` | `Nav`, `Footer` |
| `tailwind.config.ts` | Brand colours (`brand.dark #0a0e1a`, `brand.blue #3b82f6`, ...), Inter |
| `.github/ISSUE_TEMPLATE/` | Public bug / feature forms (role options say "End-User", not "Homeowner") |

```bash
npm ci
npm run dev        # local preview
npm run build      # tsc + vite build into dist/ (what the deploy runs)
```

## Rules for the copy

- **Only claim what works today on a Pi.** If a feature is built but not released (for
  example the JSON-RPC integration API, until the React Local UI ships), leave it out or
  mark it "coming soon" only with Jonathan's OK.
- **Raspberry Pi 5 only.** The firmware is built for the Pi 5; never mention the Pi 4.
- **Video:** MP4 (H.264), up to 4K, smoothest at 24 fps in 4K and 60 fps in 1080p,
  **40 MB (about 1 minute) per video** today. Update this when the upload cap is lifted.
- **Pricing (approved 2026-10-17):** Starter $6/month (1 screen, 1 Pi, 1 cloud connection);
  Stand-alone $10 lifetime licence on the firmware it was installed with, each firmware
  update on request another $10; Dealer by volume. Pre-imaged 32 GB A2 microSD card: $50 each,
  plus shipping and handling (set high on purpose, as card prices move). Never invent a
  price that isn't listed here.
- Plain, concrete language for AV integrators and venue owners. No invented statistics or
  testimonials; a real quote needs the pilot site's permission.
- Mockups for this round: https://claude.ai/artifact/F7fZmNxXUJcwexNH9S7RwU

Skill: `.claude/skills/update-website/` has the step-by-step procedure.
