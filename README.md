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
