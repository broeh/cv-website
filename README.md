# Hans Broerse CV Website

Static personal profile/CV website for Hans Broerse.

## Live site

- Primary: <https://hansbroerse.nl/>
- Redirect: <https://www.hansbroerse.nl/>
- GitHub: <https://github.com/broeh/cv-website>

## Hosting and deployment

- Source control: GitHub repo `broeh/cv-website`
- Hosting: Vercel project `cv-website`
- Production branch: `main`
- DNS provider: GoDaddy
- Apex DNS: `A @ -> 76.76.21.21`
- WWW DNS: `CNAME www -> cname.vercel-dns.com`

Pushing to `main` triggers a Vercel deployment.

## Files

- `index.html` - profile page content and metadata
- `styles.css` - visual styling
- `.vercelignore` - keeps `varianten/` off the live site
- `robots.txt` - crawler policy
- `sitemap.xml` - sitemap for crawlers
- `.well-known/security.txt` - security contact/trust signal
- `docs/development_log.md` - local project history

## Notes

The site is intentionally plain HTML/CSS. Content is based on the local `cv-brain` OKF bundle.

## Design and editing

The September 2026 design uses warm paper, dark ink, orange accents and self-hosted typography. Sections cover profile, selected work, certifications, AI-adoption direction, career history and contact, in that order. A portrait and a five-item facts strip open the page. Edit the semantic HTML directly; responsive and print layouts are in `styles.css`.

The design was deliberately made more formal in a second September 2026 pass: no rotated elements, no decorative tape effect, factual section headings rather than slogans, and a single accent colour. Keep it that way when editing.

- `assets/` - portrait, share image, certification badges, fonts, font licenses and favicon
- `versions/` - originals of replaced assets (portrait and share image per revision date)
- `docs/content_sources.md` - factual scope, source notes and asset attribution

Preview locally with `python -m http.server 8765 --bind 127.0.0.1`. Check desktop and mobile layouts, anchor links, keyboard access, loaded assets and print preview before publishing. The print button opens the browser print dialog, where visitors can save a PDF.

## Chapter Lead variants (parked)

A Chapter Lead version of the whole site (variant D) was live on 27 and 28 September 2026 and is parked under the tag `site-v2-chapter-lead`. To put it back live, run `git checkout site-v2-chapter-lead -- index.html styles.css main.js sitemap.xml assets/`, then commit and push.

`varianten/` holds alternative designs built in September 2026 to choose from. A to D are aimed at the internal Chapter Lead vacancy at Klaverblad. E is aimed at the AI Adoptie Consultant vacancy. The live `index.html` is unchanged. Open `varianten/` on the local preview server for a side-by-side chooser.

- `varianten/a-klaver/` - Klaverblad house style: deep green, Anton and Lato, four-leaf clover motif
- `varianten/b-hoofdstukken/` - editorial magazine: the career told in chapters, Fraunces, burgundy and green
- `varianten/c-chapter/` - dark and technical: interactive team/discipline matrix, Geist
- `varianten/d-klaver-rustig/` - merge of A and B: A's green layout and clover, B's Fraunces typography
- `varianten/e-ai-adoptie/` - AI Adoptie Consultant version of D, strictly in the Klaverblad brand manual style: Lato only, Klaverbladgroen and Klaverbladrood, the 85% green frame and a red call-to-action ball
- `varianten/fonts/` - self-hosted fonts with their OFL licenses
- `varianten/assets/` - cut-out portraits and chooser previews

Each variant is a standalone page with its own `style.css` and `main.js`, marked `noindex`. They are more expressive than the formal live design on purpose. Print styling is basic and not yet tuned to four pages.
