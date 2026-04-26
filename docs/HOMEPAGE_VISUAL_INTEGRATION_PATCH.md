# Homepage Visual Integration Patch

Date: 2026-04-26

## Purpose

This document records the remaining homepage integration work after the demo thumbnail and asset manifest pass.

The repo now contains the visual assets and stylesheet needed for a safer homepage upgrade, but the homepage itself has not yet been patched because the current `index.html` is large, inline-heavy, and was truncated by the GitHub connector during review.

This file prevents the repo from overstating that the homepage integration is complete.

---

## Current truth

Completed:

- `assets/demo-thumbnails/detailing.svg` exists.
- `assets/demo-thumbnails/photographer.svg` exists.
- `assets/demo-thumbnails/handyman.svg` exists.
- `projects/demo-index.html` uses thumbnails on demo cards.
- `docs/ASSET_MANIFEST.md` reflects the thumbnail assets as created placeholders.
- `assets/homepage-visual-enhancements.css` exists.

Not completed:

- `index.html` does not yet link `assets/homepage-visual-enhancements.css`.
- Homepage Example Work cards do not yet show thumbnail images.
- The realistic homepage hero image is still missing.
- The homepage still relies on the CSS-art hero prototype.

---

## Required homepage patch

Add this line before `</head>` in `index.html`:

```html
<link rel="stylesheet" href="assets/homepage-visual-enhancements.css" />
```

Then replace the current three Example Work cards with this structure:

```html
<div class="grid">
  <a class="card showroom-card" href="projects/bryans-neighborhood-coney-final-demo/index.html">
    <img class="showroom-thumb" src="assets/demo-thumbnails/restaurant.svg" alt="Restaurant website demo preview" loading="lazy" />
    <div class="showroom-body">
      <span class="pill">Restaurant</span>
      <h3>Restaurant Website Example</h3>
      <p>Menus, hours, location, trust signals, and quick calls from mobile visitors.</p>
      <span class="pill">View example</span>
    </div>
  </a>
  <a class="card showroom-card" href="https://christopherbdaugherty96.github.io/RobsLawnCare/">
    <img class="showroom-thumb" src="assets/demo-thumbnails/lawn-care.svg" alt="Lawn care website demo preview" loading="lazy" />
    <div class="showroom-body">
      <span class="pill">Lawn care</span>
      <h3>Lawn Care Website Example</h3>
      <p>Service details, credibility, quote requests, and phone-first inquiry flow.</p>
      <span class="pill">View example</span>
    </div>
  </a>
  <a class="card featured showroom-card" href="projects/demo-index.html">
    <div class="showroom-body">
      <div class="demo-thumb-grid" aria-hidden="true">
        <img src="assets/demo-thumbnails/barbershop.svg" alt="" loading="lazy" />
        <img src="assets/demo-thumbnails/detailing.svg" alt="" loading="lazy" />
        <img src="assets/demo-thumbnails/photographer.svg" alt="" loading="lazy" />
        <img src="assets/demo-thumbnails/handyman.svg" alt="" loading="lazy" />
        <img src="assets/demo-thumbnails/cleaning.svg" alt="" loading="lazy" />
        <img src="assets/demo-thumbnails/roofing.svg" alt="" loading="lazy" />
      </div>
      <span class="pill">Demo library</span>
      <h3>Industry Demo Library</h3>
      <p>Browse niche examples for restaurants, barbershops, painters, roofers, cleaners, salons, and more.</p>
      <span class="pill">Browse examples</span>
    </div>
  </a>
</div>
```

---

## Implementation warning

Do not replace the full homepage blindly.

Recommended safe approach:

1. Pull the current `index.html` locally.
2. Apply only the stylesheet link and Example Work section replacement.
3. Preview desktop and mobile.
4. Commit as a small targeted patch.

---

## Honest asset status

These thumbnails are still placeholders. They improve visual completeness and demo navigation, but they are not final photorealistic or portfolio-grade artwork.

The realistic cinematic hero still requires:

- `assets/hero-desert-city.jpg`
- optional `assets/hero-desert-city-mobile.jpg`
- future optional `assets/hero-vehicle-overlay.webm`
