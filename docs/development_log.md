# Development Log

## 2026-09-26 (drie varianten voor Chapter Lead)

- Drie nieuwe ontwerpen van de site gebouwd onder `varianten/`, gericht op de interne vacature Chapter Lead bij Klaverblad. De live site `index.html` is niet gewijzigd. Keuzepagina: `varianten/index.html`.
  - **A, Klaver** (`varianten/a-klaver/`): dicht bij de huisstijl van Klaverblad. Donkergroen `#004312`/`#035f1b`, Anton voor koppen en Lato voor tekst, zoals werkenbijklaverblad.nl en klaverblad.nl. Een klavertje vier als motief: de vier leiderschapsprincipes zijn de vier bladen, met een klaver die oplicht bij het blad waar je met de muis op staat.
  - **B, Hoofdstukken** (`varianten/b-hoofdstukken/`): redactioneel magazine. De loopbaan in zeven hoofdstukken, als knipoog naar Chapter Lead. Fraunces en DM Sans, bordeauxrood `#89001d` en groen uit het Klaverblad-logo. Meelopende inhoudsopgave, tekst die oplicht tijdens het lezen, een vraag-en-antwoordhoofdstuk en een epiloog "Wordt vervolgd."
  - **C, Chapter** (`varianten/c-chapter/`): donker en technisch. Geist en Geist Mono. De hero is een canvas-matrix waarin mensen teams vormen en een vakgebied dwars door alle teams oplicht; met de muis kies je zelf een vakgebied. Verder bento-cijfers, spotlight-kaarten en werkkaarten die over elkaar schuiven.
- Alle drie gebruiken dezelfde teksten en feiten, opgebouwd volgens `~/Projects/Sollicitatie/plan_cv_chapter_lead.md`: nadruk op mensen en vakmanschap, geen claim op lijnverantwoordelijkheid of de HR-cyclus, geen functietitel uit de vacature als eigen titel. Nieuw ten opzichte van de live site: de vier principes uit het plan, een sectie die elke vacature-eis koppelt aan een voorbeeld, Q-Delft als bewijs voor teamsamenstelling (ruim twintig mensen, balans senior/medior/junior), selectie en sollicitatiegesprekken, een visie in drie punten, certificeringen met PSM II voorop, en ondernemingsraad en zomerkamp onder "Naast het werk".
- Bewust vaag gehouden op een openbare site: "een grote systeemtransitie" in plaats van het standaardpakket of Klaxon.
- `varianten/assets/portret-vrij.webp`: vrijstaande versie van de portretfoto, gemaakt uit `versions/assets-pre-v2-replace/bron-profielfoto-v2.png` door de groene achtergrond weg te filteren op tint en verzadiging, met een zachte rand en groenonderdrukking op de randpixels. 1120×961, 82 kB.
- Lettertypen zelf gehost in `varianten/fonts/` met hun OFL-licenties: Anton, Lato, Fraunces, Geist en Geist Mono, via Fontsource 5.3.0. Geen externe verzoeken tijdens het laden.
- Alle varianten hebben `noindex, nofollow` en zijn niet gelinkt vanaf de live site.
- Verificatie: lokaal geserveerd en met Playwright/Chromium doorgescrold op 320, 390, 768, 1024, 1280 en 1440 pixels. Geen horizontale overflow, geen console- of laadfouten, precies een H1 per pagina, alle afbeeldingen geladen. Met `prefers-reduced-motion` blijft alle tekst zichtbaar. Printen werkt, maar is nog niet geoptimaliseerd: 11 tot 13 A4-pagina's per variant tegenover 4 bij de live site.

## 2026-09-09 (profielfoto v2)

- `assets/portret.jpg` vervangen door de nieuwe foto `Profiel Photo v2.png` uit `~/Downloads/`.
- Foto omgezet naar JPEG (760×760, gecentreerde uitsnede, progressief, 90% kwaliteit), waardoor de bestandsgrootte afneemt van 1,58 MB (PNG) naar ~81 KB (JPEG). Dit bespaart 95% laadgewicht en bevordert snelle weergave op mobiel en desktop (LCP/FCP) zonder kwaliteitsverlies.
- Groenfilter hersteld: de felgroene bokeh-achtergrond selectief getemperd in verzadiging (-55%) en helderheid (-25%), zodat het groen zacht en natuurlijk aansluit bij het papierpalet (`#f5f2e9`) zonder dat de warme huidtinten flets worden.
- `assets/og-image.png` bijgewerkt met de nieuwe foto in de cirkelvormige uitsnede (390×390 px) met vloeiende antialiasing, zodat link previews (LinkedIn, WhatsApp e.d.) gelijk lopen met de site.
- Vorige versies en bronbestand gearchiveerd in `versions/assets-pre-v2-replace/`.
- Verificatie: lokaal gerenderd en gecontroleerd via Chromium headless screenshots op desktop (1440px) en mobiel (390px).

## 2026-09-09

Tekstuele synchronisatie met het concept-CV (versie 3) uit `~/Projects/Sollicitatie/concept_cv.md`, dat is opgebouwd uit een interview en aangescherpt met vier onafhankelijke AI-reviews. Het ontwerp is bewust ongewijzigd gebleven: geen wijzigingen in `styles.css`, geen nieuwe componenten, alleen bestaande patronen en teksten.

Feitelijke correcties:

- "Sinds 2014 in Agile-rollen" is overal "sinds 2011" geworden. Hans was in 2011 al Scrum Master bij Albert Heijn; de oude formulering verkocht hem drie jaar te kort op precies de ervaring die de doelfunctie vraagt.
- "Ruim 25 jaar" in de profielkop is vervangen door "Sinds 1998", omdat de loopbaan in 1998 begint en dat inmiddels achtentwintig jaar is.
- "Meerdere softwareontwikkelingsteams" is overal "vijf teams" geworden, door Hans bevestigd op 9 september 2026. De feitenstrip toont nu "7 jaar · 5 teams".

Inhoudelijke aanvullingen:

- Klaverblad-werkitem herschreven: het lage vertrouwen in Scrum bij binnenkomst, de uitrol over vijf teams, de Jira-werkwijze voor de softwareontwikkelteams, de SAFe-workshops en team Data met dashboards voor de business.
- Q-Delft-werkitem aangevuld met de twee cijfers uit het CV uit 2019: demovoorbereiding van bijna twee dagen naar een paar uur voor een medewerker, en het team dat naar ruim twintig mensen groeide. Het resultaat noemt nu de ontwikkelsnelheid en de productiegang in plaats van een algemene formulering.
- Vierde werkitem toegevoegd voor project WINK bij Albert Heijn (2017-2018): wekelijkse workshops met winkelmedewerkers en wireframe-proeven in de winkel. Dit is het sterkste bewijs voor workshops met eindgebruikers en draagvlak opbouwen, en ontbrak op de site.
- Werkitems staan nu omgekeerd chronologisch. Met vier items was de oude volgorde (2019, 2014, 2018, 2017) niet meer te volgen.
- Sectie Richting herschreven: eigen server, programmeren met AI-assistenten, lokale modellen en lokale spraaksynthese; het produceren van professionele Nederlandse stemmen voor een AI-stemplatform; en Copilot binnen de kaders die op het werk gelden, expliciet gekoppeld aan waarom een verzekeraar niet alles openzet.
- De vermelding van Home Assistant is verwijderd. Hans gebruikt dat juist zo min mogelijk en bouwt liever zelf.
- "Ik verdiep me in ADKAR" is vervangen door "bekend met ADKAR, zonder daarin getraind te zijn". De oude formulering suggereerde een lopend leertraject dat er niet is.

Beelden:

- `assets/portret.jpg` vervangen door een uitsnede uit de nieuwe professionele portretfoto van 9 september 2026. Dezelfde kadrering en dezelfde gedempte verzadiging als de vorige versie, gemeten en gematcht op achtergrondtint (hue 94, verzadiging 0,20) zodat de foto niet met het papierpalet vloekt.
- `assets/og-image.png` opnieuw gegenereerd met dezelfde opmaak, posities en kleuren als de vorige versie, met de nieuwe foto en met "25 jaar IT" vervangen door "Sinds 1998 in IT".
- De vervangen bestanden en de originele bronfoto staan onder `versions/assets-pre-2026-09-09/`.

Bewust niet overgenomen uit het concept-CV:

- De positie van de ElevenLabs-stem in de Nederlandse lijst en het aantal gegenereerde credits. Dat staat wel in het sollicitatiedocument, maar dit is een openbare site en de stem is van iemand anders. De cijfers maken die persoon vindbaar. De site noemt alleen dat Hans professionele Nederlandse stemmen voor een AI-stemplatform produceerde.

Kleuraccent, geprobeerd en teruggedraaid op dezelfde dag:

- Het oranje accent is tijdelijk vervangen door het merkgroen van Klaverblad Verzekeringen (`#035f1b` uit hun eigen `main.css`, met een afgeleide lichte tint `#82c493` voor de donkere secties). Hans vond het resultaat minder mooi en vond dat het rood beter opviel, dus die commit is teruggedraaid.
- Het oranje `#ad3a1c`, de lichte zalmkleur `#f0a184` op de donkere secties en het oranje stipje in de favicon staan weer zoals ze waren. De variabele heet weer `--orange`.
- Bewaard voor als het ooit weer opkomt: Klaverblads primaire merkgroen is `#035f1b`, met `#2a7c27` en `#004312` als secundaire tinten. Het groen haalde een beter contrast dan het oranje (7,06:1 tegen 5,52:1 op papier), dus de terugdraai is een smaakkeuze, geen toegankelijkheidskwestie. `#2a7c27` is sowieso ongeschikt: dat zakt naar 4,35:1 op de panelen.

Verificatie: lokaal geserveerd op 127.0.0.1:8765 en met Chromium gerenderd op 1440 en 390 pixels breed. Volledige pagina beoordeeld op beide breedtes, HTML-tags gecontroleerd op balans, alle ankers verwijzen naar bestaande doelen, geen resterende verwijzingen naar de oude feiten.

## 2026-09-08 (tweede ronde)

Doorgevoerd op basis van vier onafhankelijke reviews (Claude, Codex, Gemini, Muse) met als doel een volwassener, zakelijker uitstraling voor de interne sollicitatie.

- Hero herzien: het gedraaide memoblok met plakband-effect en de decoratieve code "HB / 01" verwijderd, evenals de 1-2-3 routekaart. Vervangen door een portretfoto en een feitenstrip met vijf controleerbare gegevens.
- Portretfoto toegevoegd (`assets/portret.jpg`), bijgesneden en gedempt in verzadiging zodat de achtergrond niet met het papierpalet vloekt.
- Slogankoppen vervangen door vakkoppen: "Daar heb ik aan gewerkt" werd "Geselecteerd werk", "Mijn route tot nu toe" werd "Loopbaan", "Verder praten? Lijkt me goed" werd "Neem gerust contact op". De opening "Ik ben Hans" is vervangen door een feitelijke propositie.
- Certificaatafbeeldingen gerepareerd: alle drie de Credly-bestanden bevatten een ingebakken Credly-icoon en een dekkend vierkant in de linkerbovenhoek. Via een cirkelmasker teruggebracht tot schone badges, alle vier genormaliseerd op 512 pixels. Originelen bewaard onder `versions/assets-pre-2026-09-08/`.
- Certificeringen herbalanceerd: het uitvergrote PSM AI Essentials-blok is vervangen door een gelijkwaardige rij van vier kaarten, met een verwijzing naar de publieke certificeringslijst van Scrum.org voor verificatie. Alle badges hebben nu beschrijvende alt-teksten.
- Inhoud aangescherpt op de vacature AI Adoptie Consultant: facilitatie en workshops expliciet benoemd, ondernemingsraad en Jira-assetmanagement als organisatiebreed netwerk, eigen praktijkgebruik van generatieve AI, en een eerlijke regel over ADKAR en AI-assistenten als leerpunten.
- Per geselecteerd werk een blok Resultaat en Relevantie toegevoegd in plaats van alleen "Wat ik meeneem".
- Loopbaan verzakelijkt: contractvormen bij de Ahold-klantperiode expliciet gemaakt met het label "Klantperiode", "De eerste jaren in IT" hernoemd naar "Helpdesk- en supportfuncties", HAVO verwijderd.
- Vier profielpijlers in plaats van drie, waaronder de nieuwe pijler "Faciliteren en uitleggen".
- Rustiger vlakverdeling: het mintgroene motivatieblok is een gewone papiersectie geworden, waardoor de pagina nog twee donkere secties heeft in plaats van vier kleurwissels. Oranje verdiept van #bd4020 naar #ad3a1c en muted van #526067 naar #4f5d64, waardoor alle tekstcombinaties nu AA halen voor normale tekst. De gedraaide onderstreping in de H1 is rechtgetrokken en de H1 is een maat kleiner.
- Navigatie uitgebreid met "Werk"; "Ervaring" hernoemd naar "Loopbaan". De lege `href="#"` verwijzingen wijzen nu naar `#top`. De footer staat buiten `<main>`. De carrièrestrip is een echte lijst.
- Print-CSS herzien: de harde `break-before: page` regels zijn vervangen door `break-after: avoid` op koppen, waardoor de lege vijfde pagina verdween. Resultaat is vier goed gevulde A4-pagina's. Contactgegevens staan nu ook op pagina 1, externe links drukken hun URL af en de vroegere `h2 br`-onderdrukking die woorden aan elkaar plakte is verwijderd.
- Metadata: `og:image` toegevoegd met een eigen gegenereerde deelafbeelding, Twitter-card naar `summary_large_image`, JSON-LD aangevuld met portret, `alumniOf`, `knowsLanguage` en PSM I. `sitemap.xml` bijgewerkt naar 2026-09-08.
- Geverifieerd met Chromium op 320, 360, 390, 768, 1024, 1280 en 1440 pixels: geen horizontale overflow op enige breedte (na een navigatiefix voor 320 pixels). Alle ankers verwijzen naar bestaande doelen, precies een H1, alle afbeeldingen hebben alt-tekst, alle aria-labelledby verwijzingen kloppen. Contrastverhoudingen herberekend: alle combinaties halen minimaal 5,1:1. Print-PDF gerenderd en pagina voor pagina beoordeeld.

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
