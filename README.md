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
- `robots.txt` - crawler policy
- `sitemap.xml` - sitemap for crawlers
- `.well-known/security.txt` - security contact/trust signal
- `docs/development_log.md` - local project history

## Notes

The site is intentionally plain HTML/CSS. Content is based on the local `cv-brain` OKF bundle.

## Design and editing

The September 2026 design uses warm paper, dark ink, a single green accent and self-hosted typography. Sections cover profile, selected work, certifications, AI-adoption direction, career history and contact, in that order. A portrait and a five-item facts strip open the page. Edit the semantic HTML directly; responsive and print layouts are in `styles.css`.

The design was deliberately made more formal in a second September 2026 pass: no rotated elements, no decorative tape effect, factual section headings rather than slogans, and a single accent colour. Keep it that way when editing.

On 9 September 2026 the accent changed from orange to Klaverblad Verzekeringen's brand green. The variables are `--accent: #035f1b` for light backgrounds and `--accent-light: #82c493` for the dark ink sections. Both are defined in `:root`; do not hardcode accent colours anywhere else.

- `assets/` - portrait, share image, certification badges, fonts, font licenses and favicon
- `versions/` - originals of replaced assets (portrait and share image per revision date)
- `docs/content_sources.md` - factual scope, source notes and asset attribution

Preview locally with `python -m http.server 8765 --bind 127.0.0.1`. Check desktop and mobile layouts, anchor links, keyboard access, loaded assets and print preview before publishing. The print button opens the browser print dialog, where visitors can save a PDF.
