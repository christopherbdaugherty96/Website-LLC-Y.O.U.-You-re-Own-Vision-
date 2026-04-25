# Auralis Digital Current State Checkpoint — 2026-04-25

This checkpoint records the current working website state after the founder-photo pass and homepage restoration.

## Confirmed Working State

The main homepage is `index.html` and should remain a complete single-page marketing site. It currently includes:

- premium dark visual style
- Auralis Digital SVG logo in the hero
- clear headline and local business positioning
- services section
- example work / portfolio section
- pricing section
- process section
- founder photo in the Meet the Founder section
- why-it-matters / local trust section
- proof-point messaging
- Michigan service area links
- FAQ section
- contact section with mailto-based inquiry flow
- mobile sticky CTA
- desktop sticky contact buttons
- footer with service-area and sitemap links
- SEO metadata
- local business structured data
- branded social preview asset (`assets/social-preview.svg`)

## Founder Photo

The founder photo is currently referenced from:

`website%20building%20LLC/25e7f6af-bc55-47ba-811d-2c0a5ea43978.jpeg`

This path works, but the cleaner future improvement is to copy or move the image to:

`assets/founder-photo.jpeg`

Then update `index.html` to use the cleaner asset path.

Do not change the homepage image path unless the replacement asset has been verified in the repo first.

## Service Area Pages

The site currently has local SEO/service-area pages for:

- Belleville
n- Ypsilanti
- Ann Arbor
- Detroit Metro

The sitemap and robots file are present and should continue pointing search engines to the live domain.

## Current Known Gaps

1. Contact form is still mailto-based, not backend-backed.
2. Founder image path is functional but messy.
3. PNG social preview variant does not exist yet (current asset is SVG).
4. No analytics are installed yet.
5. Testimonials and case studies are still placeholders / conceptual proof points until real client permission exists.

## Regression Guard

Do not replace `index.html` with a short placeholder file.

Before editing `index.html`, preserve the complete homepage structure, including:

- `<style>` block
- navigation
- hero section
- services
- work examples
- pricing
- process
- founder section
- service areas
- FAQ
- contact form
- footer
- JavaScript mailto form handler

If using GitHub Contents API, remember it replaces the whole file. Fetch the current file first, edit the full content, then update.

## Safe Next Steps

1. Add a true backend form provider.
2. Add `assets/social-preview.png` only if needed for platform compatibility.
3. Copy founder photo to `assets/founder-photo.jpeg`, then update HTML.
4. Add analytics.
5. Add real testimonials/case studies after first paying client.
