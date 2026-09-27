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
- `main.js` - scroll and entrance animations
- `.vercelignore` - keeps `varianten/` off the live site
- `robots.txt` - crawler policy
- `sitemap.xml` - sitemap for crawlers
- `.well-known/security.txt` - security contact/trust signal
- `docs/development_log.md` - local project history

## Notes

The site is intentionally plain HTML/CSS. Content is based on the local `cv-brain` OKF bundle.

## Design and editing

Since 27 September 2026 the site uses variant D from `varianten/d-klaver-rustig/`, aimed at the internal Chapter Lead vacancy at Klaverblad. It pairs Klaverblad's deep green palette and a four-leaf clover motif with the Fraunces serif for headings and DM Sans for body text. Sections: hero, facts, profile, leadership (four leaves), from requirement to evidence, selected work, vision, certifications, career and contact. `main.js` handles scroll reveals, counters, the growing timeline stem and the statement that lights up word by word. All motion respects `prefers-reduced-motion`.

The previous formal AI-adoption version is tagged `site-v1-ai-adoptie`. Restore it with `git checkout site-v1-ai-adoptie -- index.html styles.css assets/og-image.png` and delete `main.js`, or roll back the deployment in Vercel.

- `assets/` - portrait, share image, certification badges, fonts, font licenses and favicon
- `versions/` - originals of replaced assets (portrait and share image per revision date)
- `docs/content_sources.md` - factual scope, source notes and asset attribution

Preview locally with `python -m http.server 8765 --bind 127.0.0.1`. Check desktop and mobile layouts, anchor links, keyboard access, loaded assets and print preview before publishing. The print button opens the browser print dialog, where visitors can save a PDF.

## Chapter Lead variants

`varianten/` holds four alternative designs aimed at the internal Chapter Lead vacancy at Klaverblad, built in September 2026 to choose from. The live `index.html` is unchanged. Open `varianten/` on the local preview server for a side-by-side chooser.

- `varianten/a-klaver/` - Klaverblad house style: deep green, Anton and Lato, four-leaf clover motif
- `varianten/b-hoofdstukken/` - editorial magazine: the career told in chapters, Fraunces, burgundy and green
- `varianten/c-chapter/` - dark and technical: interactive team/discipline matrix, Geist
- `varianten/d-klaver-rustig/` - merge of A and B: A's green layout and clover, B's Fraunces typography
- `varianten/fonts/` - self-hosted fonts with their OFL licenses
- `varianten/assets/` - cut-out portraits and chooser previews

Each variant is a standalone page with its own `style.css` and `main.js`, marked `noindex`. They are more expressive than the formal live design on purpose. Print styling is basic and not yet tuned to four pages.
