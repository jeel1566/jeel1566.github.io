# Baseline Scorecard

## Technical
1. Homepage had only basic title and description metadata before changes.
2. Canonical, OG, Twitter metadata were missing.
3. robots.txt had no sitemap declaration.
4. sitemap.xml did not exist.
5. Manifest used generic CRA defaults.

## Content
1. Home page had multiple H1 tags and limited extractable factual summary.
2. Project links used placeholder values (#) and reduced trust signals.
3. Image alt text was generic.

## Authority
1. GitHub destination pointed to generic github.com instead of profile-level authority URL.
2. No explicit structured mention links in metadata layer.

## GEO/AIEO Visibility
1. No JSON-LD entity graph in baseline HTML.
2. No FAQ-style direct-answer block for AI retrieval.
3. Limited machine-readable facts for answer engines.

## Top Risks
1. CSR-only rendering may still limit some bot visibility compared to pre-rendered HTML.
2. Missing analytics setup prevents precise before/after attribution.
3. Project cards still use profile links; project-specific URLs should replace these when available.

## Completed in this run
1. Added route-level SEO manager component (`src/components/SEO.js`).
2. Added canonical + OG + Twitter defaults in `public/index.html`.
3. Added JSON-LD (WebSite + Person) in static HTML plus route-level Person JSON-LD.
4. Added `public/sitemap.xml` and linked it in `public/robots.txt`.
5. Improved heading structure on home page to a single semantic H1.
6. Added quick facts and FAQ sections for GEO/AIEO retrieval.
7. Updated project links to valid GitHub profile URL.
8. Added contextual image alt text support in `PhotoCard`.
9. Updated PWA manifest identity fields.
10. Verified production build compiles successfully.
