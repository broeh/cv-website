# Development Log

## 2026-06-15

- Translated the live CV page (`index.html`) from English to Dutch: visible content, page title, meta description, Open Graph/Twitter metadata, and JSON-LD Person fields. Set `lang="nl"` and added `og:locale=nl_NL`.
- Used the correct Dutch institution name "Hogeschool van Amsterdam" for the former application-support role.
- Backed up the previous English `index.html` under `versions/` before editing.
- Updated README with the live site URL, GitHub repo, Vercel hosting setup, GoDaddy DNS records, and project file overview.
- Rechecked Vercel deployment state after the trust-signal release; deployment was `READY`. Later documentation-only commits also deploy automatically from `main`.
- Rechecked Vercel domain configuration: `hansbroerse.nl` is configured by A record and `www.hansbroerse.nl` is configured by CNAME, both not misconfigured.

## 2026-06-14

- Created the first static CV/profile website.
- Added `index.html`, `styles.css`, and project README.
- Content is based on the local `cv-brain` OKF bundle.
- Connected the project to GitHub and Vercel for public deployment.
- Added custom domains `hansbroerse.nl` and `www.hansbroerse.nl` in Vercel and updated GoDaddy DNS records.
- Verified latest Vercel deployment is ready and assigned to `hansbroerse.nl` and `www.hansbroerse.nl`.
- Verified Vercel domain configuration is no longer misconfigured; local resolver may temporarily show old GoDaddy WebsiteBuilder IPs until DNS cache expires.
- Added crawler and trust signals: robots.txt, sitemap.xml, `.well-known/security.txt`, expanded social metadata, canonical links, LinkedIn `rel=me`, and JSON-LD Person structured data.
