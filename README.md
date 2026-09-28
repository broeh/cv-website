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
- `main.js` - scroll reveals, counters, the lighting statement and the timeline stem
- `.vercelignore` - keeps `varianten/` off the live site
- `robots.txt` - crawler policy
- `sitemap.xml` - sitemap for crawlers
- `.well-known/security.txt` - security contact/trust signal
- `docs/development_log.md` - local project history

## Notes

The site is intentionally plain HTML/CSS. Content is based on the local `cv-brain` OKF bundle.

## Design and editing

Since 28 September 2026 the live design is variant E: the AI-adoption content set in the Klaverblad brand manual style. It uses Lato only, Klaverbladgroen (#32912f) headings, Klaverbladrood (#8c0f29) subheads and calls to action, black body copy on white, the 85% green frame with rounded corners and a red call-to-action ball. Small green text uses the slightly darker #287a25 for contrast. Grachtengroen and the official Klaverblad logo are deliberately not used. Sections: profile, approach (four leaves), requirement-to-evidence, selected work, AI in practice, certifications, career and contact. Edit the semantic HTML directly; responsive, reduced-motion and print layouts are in `styles.css`.

The previous design, with warm paper, orange accents and Bricolage Grotesque, is tagged `site-v1-ai-adoptie`. To restore it, run `git checkout site-v1-ai-adoptie -- index.html styles.css sitemap.xml assets/og-image.png`, delete `main.js`, then commit and push.

- `assets/` - portraits, share image, certification badges, fonts, font licenses and favicon
- `versions/` - originals of replaced assets (portrait and share image per revision date)
- `docs/content_sources.md` - factual scope, source notes and asset attribution

Preview locally by running `python -m http.server 8765 --bind 127.0.0.1` from the project root and opening <http://127.0.0.1:8765/>. Started from a subfolder, the relative asset paths return 404. Check desktop and mobile layouts, anchor links, keyboard access, loaded assets and print preview before publishing. The print button opens the browser print dialog, where visitors can save a PDF.

## Chapter Lead variants (parked)

A Chapter Lead version of the whole site (variant D) was live on 27 and 28 September 2026 and is parked under the tag `site-v2-chapter-lead`. To put it back live, run `git checkout site-v2-chapter-lead -- index.html styles.css main.js sitemap.xml assets/`, then commit and push.

`varianten/` holds alternative designs built in September 2026 to choose from. A to D are aimed at the internal Chapter Lead vacancy at Klaverblad. E is aimed at the AI Adoptie Consultant vacancy. The live `index.html` is unchanged. Open `varianten/` on the local preview server for a side-by-side chooser.

- `varianten/a-klaver/` - Klaverblad house style: deep green, Anton and Lato, four-leaf clover motif
- `varianten/b-hoofdstukken/` - editorial magazine: the career told in chapters, Fraunces, burgundy and green
- `varianten/c-chapter/` - dark and technical: interactive team/discipline matrix, Geist
- `varianten/d-klaver-rustig/` - merge of A and B: A's green layout and clover, B's Fraunces typography
- `varianten/e-ai-adoptie/` - live since 28 September 2026 - AI Adoptie Consultant version of D, strictly in the Klaverblad brand manual style: Lato only, Klaverbladgroen and Klaverbladrood, the 85% green frame and a red call-to-action ball
- `varianten/fonts/` - self-hosted fonts with their OFL licenses
- `varianten/assets/` - cut-out portraits and chooser previews

Each variant is a standalone page with its own `style.css` and `main.js`, marked `noindex`. They are more expressive than the formal live design on purpose. Print styling is basic and not yet tuned to four pages.
