# Auralis Digital Asset Manifest

Date: 2026-04-26

## Purpose

This manifest tracks visual assets created for the Auralis Digital homepage and demo library.

It separates what is already usable from what is only a placeholder, so the repo does not overstate the current visual quality.

---

## Status labels

- **Prototype** — proves a direction, but should not be treated as final.
- **Placeholder** — useful temporary asset, but needs replacement or improvement.
- **Support asset** — used for overlays, texture, atmosphere, or motion support.
- **Ready to integrate** — good enough to wire into the site now.
- **Final candidate** — strong enough to be considered production-quality after visual QA.
- **Missing** — still needs to be created.

---

## Homepage hero assets

| Asset | Purpose | Current status | Integrated live? | Notes |
|---|---|---:|---:|---|
| `assets/hero-desert-city.svg` | Stylized desert road / moon / distant city hero concept | Prototype | No | Useful as a bridge asset, but not the final realistic hero. Still too stylized to fully solve the realism problem. |
| `assets/hero-haze-overlay.svg` | Atmospheric haze overlay for hero depth and motion | Support asset | No | Can be layered over a real hero image or SVG hero. Good candidate for subtle animation. |
| `assets/hero-desert-city.jpg` | Final realistic cinematic desktop hero image | Missing | No | Needed to replace the current CSS-art look. |
| `assets/hero-desert-city-mobile.jpg` | Mobile crop of realistic hero image | Missing | No | Needed if desktop crop loses moon, road, or city on phone screens. |
| `assets/hero-vehicle-overlay.webm` | Optional realistic vehicle/headlight motion layer | Missing | No | Optional future upgrade. Start with CSS light streaks first if needed. |

---

## Demo thumbnail assets

| Asset | Demo type | Current status | Integrated live? | Notes |
|---|---|---:|---:|---|
| `assets/demo-thumbnails/restaurant.svg` | Restaurant / Coney Island | Placeholder | No | Warmer local restaurant identity. Useful for homepage/demo index cards. |
| `assets/demo-thumbnails/lawn-care.svg` | Lawn care | Placeholder | No | Green outdoor identity. Useful for homepage/demo index cards. |
| `assets/demo-thumbnails/barbershop.svg` | Barbershop | Placeholder | No | Black/gold shop identity. Needs final page styling later. |
| `assets/demo-thumbnails/painter.svg` | Painter | Placeholder | No | Bright interior/color palette identity. |
| `assets/demo-thumbnails/cleaning.svg` | Cleaning service | Placeholder | No | Fresh blue/white identity. |
| `assets/demo-thumbnails/roofing.svg` | Roofing / contractor | Placeholder | No | Rugged roofline identity. |
| `assets/demo-thumbnails/salon.svg` | Salon | Placeholder | No | Soft beauty/booking identity. |
| `assets/demo-thumbnails/detailing.svg` | Mobile detailing | Placeholder | No | Glossy, dark, reflective, car-focused placeholder. Created to complete the demo thumbnail set, but not final portfolio-grade artwork. |
| `assets/demo-thumbnails/photographer.svg` | Photographer | Placeholder | No | Gallery/camera-led placeholder. Created to complete the demo thumbnail set, but not final portfolio-grade artwork. |
| `assets/demo-thumbnails/handyman.svg` | Maintenance / handyman | Placeholder | No | Practical tool/workshop-oriented placeholder. Created to complete the demo thumbnail set, but should be visually upgraded later. |

---

## Important visual truth

The current SVG assets are not final high-end realism assets.

They are useful for:

- establishing visual categories;
- making cards less text-only;
- supporting layout experiments;
- creating a structured visual pipeline.

They are not yet sufficient for:

- photorealistic hero presentation;
- true vehicle motion;
- final portfolio-grade demo previews;
- a full “wow” visual standard.

---

## Integration priority

### Priority 1 — complete placeholder thumbnail set

Completed as placeholders:

- `assets/demo-thumbnails/detailing.svg`
- `assets/demo-thumbnails/photographer.svg`
- `assets/demo-thumbnails/handyman.svg`

### Priority 2 — integrate existing thumbnails

Use thumbnails in:

- homepage Example Work section;
- demo index page;
- eventually each demo page header if appropriate.

### Priority 3 — replace hero prototype with realistic image

Create and integrate:

- `assets/hero-desert-city.jpg`
- optional `assets/hero-desert-city-mobile.jpg`

### Priority 4 — split styles for maintainability

Move large inline CSS into:

- `assets/styles.css`
- optional `assets/hero-scene.css`

---

## Quality rule

Do not call an asset final until it has been visually checked on:

- desktop;
- iPhone-sized mobile screen;
- at least one wider screen crop;
- with homepage text over it;
- with motion enabled and reduced-motion disabled/enabled.
