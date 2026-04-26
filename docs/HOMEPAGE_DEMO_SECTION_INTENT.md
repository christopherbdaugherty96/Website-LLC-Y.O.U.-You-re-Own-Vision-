# Homepage Demo Section Intent

Date: 2026-04-26

## Purpose

This document records the intended change for the Auralis Digital homepage demo section so future review passes, Codex sessions, or local edits do not miss the requested direction.

---

## User Request

The homepage currently shows individual demo examples and also links to the full demo library.

This creates duplication because the full demo library already contains the individual demo categories.

The requested behavior is:

- Do **not** show separate individual demo cards on the main homepage.
- Remove the homepage cards for individual demos such as:
  - Restaurant Website Example
  - Lawn Care Website Example
- Leave the full demo category page intact.
- Keep one clear homepage card/link that sends visitors to the full demo library.

---

## Desired Homepage Behavior

The homepage Example Work section should act as a simple gateway to the full demo library.

Preferred structure:

```html
<div class="grid">
  <a class="card featured showroom-card" href="projects/demo-index.html">
    <span class="pill">Demo library</span>
    <h3>Industry Demo Library</h3>
    <p>Browse example website categories for restaurants, lawn care, barbershops, salons, trades, cleaning services, detailing, photographers, and more.</p>
    <span class="pill">Browse examples</span>
  </a>
</div>
```

---

## Files Involved

Primary file to edit:

- `index.html`

Related files:

- `projects/demo-index.html`
- `assets/homepage-visual-enhancements.css`
- `docs/ASSET_MANIFEST.md`
- `docs/HOMEPAGE_VISUAL_INTEGRATION_PATCH.md`

---

## Scope Rules

When applying this change:

- Do not rewrite the whole homepage.
- Do not touch the hero section.
- Do not touch pricing.
- Do not touch services.
- Do not touch founder section.
- Do not touch contact form.
- Do not remove footer, mobile CTA, or JavaScript.
- Only update the Example Work section enough to remove duplicate individual demo cards.

---

## Current Known Limitation

The GitHub connector used in the ChatGPT session was truncating `index.html`, so the homepage could not be safely patched directly from that session.

Because of that, this document exists as a source of truth for a local editor or Codex to complete the change safely.

---

## Success Criteria

The change is complete when:

- The homepage no longer has separate Restaurant and Lawn Care demo cards.
- The homepage has one clear featured card linking to `projects/demo-index.html`.
- The full demo library page remains unchanged.
- The homepage still loads normally.
- The contact form, hero, pricing, and service sections remain intact.

---

## Honest Status

This is a requested homepage cleanup, not a full visual realism upgrade.

The realistic cinematic hero replacement is still a separate future task.
