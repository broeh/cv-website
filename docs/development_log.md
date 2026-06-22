# Development Log

## 2026-06-22

- Synced `index.html` content with the latest `cv-brain` work-stories information: richer Klaverblad Scrum Master details, Q-Delft / Netcompany lintjes.nl work, Ahold innovation/Product Owner highlights, AH Belgium Scrum origin, offshore testing, early IT-support roles, education, and work style.
- Updated CV metadata and JSON-LD keywords to match the refined positioning.
- Added hero fact cards, a "Wat ik meebreng" highlights section, expanded selected-work cards, education, and work-style content.
- Polished `styles.css` after screenshot reviews: balanced the hero, added a subtle CV watermark, improved panel depth, added card accent bars, date pills, richer project-card backgrounds, and stronger section accents.
- Captured and reviewed screenshots at `screenshots/cv-pass-1.png`, `screenshots/cv-pass-2.png`, and `screenshots/cv-final.png`.

## 2026-06-15

- Visual polish pass on `index.html` and `styles.css`: monogram avatar in the hero, gradient headline, accent bars before section titles, timeline dots, hover lift on cards and tags, primary gradient call-to-action, a staggered entrance animation (with reduced-motion fallback), a footer, and a clean print stylesheet. No content or structure changes beyond the avatar and footer.
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
