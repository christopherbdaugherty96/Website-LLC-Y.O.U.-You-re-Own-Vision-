# Auralis Digital Regression Checklist — 2026-04-25

Use this after every website change.

## Required Homepage Sections

- Hero with Auralis Digital logo
- Services
- Example work
- Pricing
- Process
- Founder photo / Meet the Founder
- Why it matters / local trust
- Proof points
- Service areas
- FAQ
- Contact form
- Footer
- Mobile CTA
- Desktop sticky contact buttons

## Required Technical Checks

- `index.html` must remain the full homepage, not a placeholder.
- Founder photo path must resolve before being referenced.
- Contact form mailto handler must remain until a real backend form is active.
- `robots.txt` must point to `sitemap.xml`.
- `sitemap.xml` must include the homepage and service-area pages.
- Open Graph image should only point to an existing asset.

## Current Known Safe State

The restored homepage commit is:

`bc2f2831de5cab6f677a7e99bcf0294dfa28a894`

The current checkpoint document is:

`docs/CURRENT_STATE_CHECKPOINT_2026-04-25.md`
