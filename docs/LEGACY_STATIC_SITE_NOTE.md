# Legacy static site note

This branch is intended to migrate Auralis Digital from a handcrafted static `index.html` site to the Lovable-generated React/Vite homepage from `christopherbdaugherty96/local-look-pro`.

The existing production site should be treated as the rollback baseline until the new Vite build is previewed and approved.

Recommended deployment settings for the new app:

- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Do not point the live domain at the new deployment until the preview has been checked on mobile and desktop.
