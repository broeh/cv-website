# Development Log

## 2026-09-08

- Rebuilt the visual design with an editorial layout, warm paper, dark ink, orange accents, a career-route illustration and self-hosted Bricolage Grotesque / DM Sans fonts.
- Rewrote the profile around demonstrated team coaching, introducing ways of working, business analysis and innovation. Connected these strengths to the Klaverblad AI Adoptie Consultant vacancy while describing AI adoption as a next step, not past experience.
- Featured September 2026 PSM AI Essentials in the hero and certification section. Added PSM II and PSPO I from July 2026 and dated PSM I. Downloaded qualification badge artwork and retained earlier CSPO, TMAP and ITIL credentials.
- Added anchor navigation, keyboard skip link, visible focus, reduced-motion support, a print/PDF button and A4 print styling. The print version presents the CV without the separate vacancy-motivation section.
- Updated SEO/social metadata, Person credentials, favicon, README and `docs/content_sources.md`; included font licenses and badge attribution. Kept plain HTML/CSS with no build tooling or third-party runtime requests.
- Verified with Chromium/Playwright at 320, 390, 768, 1024 and 1440 pixels: no horizontal overflow, all images loaded, all local anchor targets present, one H1, valid JSON-LD and no page/request errors. Axe WCAG A/AA checks at 390 and 1440 pixels reported zero violations after contrast fixes. Checked keyboard skip navigation, navigation links, print handler and reduced-motion behavior. Reviewed desktop/mobile screenshots and the four-page A4 print output. `git diff --check` passed.

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
