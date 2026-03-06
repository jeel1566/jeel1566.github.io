# Technical Backlog

## Ticket
- Problem: Missing robust global and route-level metadata.
- Root cause: CRA template defaults and no route metadata manager.
- Steps: Added `SEO` component with per-route title/description/canonical/OG/Twitter updates.
- Acceptance criteria: Route navigation updates metadata and canonical URL.
- KPI: CTR and snippet quality.
- Impact: 5
- Effort: 2
- Confidence: 5
- Dependencies: None
- Owner: Completed in this run
- Due date: Completed

## Ticket
- Problem: No sitemap discoverability path.
- Root cause: No `sitemap.xml`, no sitemap in robots.
- Steps: Added static `public/sitemap.xml`; updated `public/robots.txt` with sitemap URL.
- Acceptance criteria: Sitemap available at `/sitemap.xml`; robots references it.
- KPI: Crawl coverage and route discovery.
- Impact: 4
- Effort: 1
- Confidence: 5
- Dependencies: Deploy pipeline
- Owner: Completed in this run
- Due date: Completed

## Ticket
- Problem: Limited AI-answer extractability.
- Root cause: No explicit quick facts, no FAQ section, limited structured entity data.
- Steps: Added quick facts + FAQ section and schema enhancements.
- Acceptance criteria: Homepage exposes concise facts and FAQ blocks with clear entities.
- KPI: AI mention and citation quality.
- Impact: 5
- Effort: 3
- Confidence: 4
- Dependencies: Content review
- Owner: Completed in this run
- Due date: Completed

## Ticket
- Problem: No attribution for conversions.
- Root cause: No analytics events tied to key actions.
- Steps: Add GA4/Plausible + outbound click and contact submit events.
- Acceptance criteria: Dashboard shows organic and AI-assisted funnel behavior.
- KPI: Qualified lead attribution.
- Impact: 4
- Effort: 2
- Confidence: 3
- Dependencies: Tracking ID + privacy policy
- Owner: Jeel
- Due date: Next sprint

## Ticket
- Problem: CSR-only rendering can reduce route indexing consistency.
- Root cause: React SPA with runtime route rendering.
- Steps: Pilot prerender for key routes or migrate to static generation/SSR.
- Acceptance criteria: Key route HTML available without JS execution.
- KPI: Indexed route count and impressions by page type.
- Impact: 5
- Effort: 5
- Confidence: 3
- Dependencies: Framework decision
- Owner: Jeel
- Due date: 30-60 days
