# Portfolio — Mohamed Hasan

Personal portfolio for **Mohamed Hasan** — Full-Stack Developer & Computer Engineering student at
AASTMT, Lattakia, Syria.

A single-page static site built with **vanilla HTML, CSS, and JavaScript** — no framework, no build
step. It mirrors the way I build my projects: small, fast, and dependency-light.

## Features

- 🌗 **Dark / light theme** (dark by default), persisted.
- 🌐 **Bilingual AR / EN** with a full RTL flip — `data-i18n` dictionary in `script.js`.
- ✨ **Animated hero** — a Canvas constellation (cyan→purple), gradient title, and a typing role loop.
- 🖥️ **Working terminal / command palette** — press `/` or `⌘/Ctrl + K`. Try `help`, `whoami`,
  `projects`, `open projects`, `theme`, `lang`.
- 📈 Animated stat counters, 3D-tilt project cards, magnetic buttons, cursor spotlight.
- ♿ Every motion effect respects `prefers-reduced-motion`; keyboard-navigable terminal + skip link.
- 📄 Printable **`resume.html`** (print-to-PDF), SEO meta + Open Graph, `robots.txt` + `sitemap.xml`.

Colors are taken verbatim from the reference palette (cyan `#06b6d4`, purple, green, orange, pink on a
`#0a0f1a` dark base).

## Featured projects

- **[UniManager](https://unimanager-sy.pages.dev)** — offline-first PWA for university students:
  schedule, a 7-system / 4-type GPA engine, real-time collaborative groups. Supabase + IndexedDB +
  service worker, bilingual AR/EN. ([source](https://github.com/andrewleko19-boop/unimanager))
- **[رُقِيّ | Ruqi](https://andrewleko19-boop.github.io/nsams/)** — National School Attendance Monitoring
  System for the Syrian Ministry of Education. Multi-portal (teacher → school → directorate → ministry)
  on Supabase with PostgreSQL Row-Level Security, GitHub Actions CI/CD, Arabic RTL UI.
  ([source](https://github.com/andrewleko19-boop/nsams))

## Structure

```
index.html              # the whole page (sections + i18n attributes + JSON-LD)
resume.html             # printable bilingual résumé (print-to-PDF)
styles.css              # tokens (dark/light), all sections, animations, RTL-safe, @media print
script.js               # theme, i18n, reveal, counters, typing, terminal, canvas, tilt, magnetic
favicon.svg             # MH + >_ gradient logo
robots.txt / sitemap.xml
assets/
  og-image.svg          # social card
.github/workflows/      # GitHub Pages deploy
```

The project-card images are referenced directly from my public repos via
`raw.githubusercontent.com` (UniManager screenshots and the Ruqi eagle mark), so
the portfolio repo stays text-only and light.

## Run locally

No build step — just serve the folder:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open <http://localhost:8000>.

## Notes

- **Images:** the project-card screenshots load from `raw.githubusercontent.com` (my UniManager and Ruqi
  repos) and are `loading="lazy"`. To self-host instead, drop the PNGs into `assets/` and point the
  `<img src>` at them (optionally convert to WebP, e.g. `cwebp -q 80 in.png -o out.webp`).
- **CV PDF:** the "Download CV" buttons open `resume.html`; use its **Print / Save as PDF** button to
  generate a PDF (or drop a committed `assets/Mohamed-Hasan-CV.pdf` and point the buttons at it).
- **OG image:** `assets/og-image.svg` works when viewed directly; for maximum social-scraper
  compatibility, export it to a 1200×630 PNG and update the `og:image` / `twitter:image` URLs.

## Deploy

Pushing to `main` triggers the GitHub Pages workflow (`.github/workflows/deploy.yml`). Enable
**Settings → Pages → Source: GitHub Actions** once, and the site publishes automatically.

## Contact

- Email: mh6127880@gmail.com
- GitHub: [andrewleko19-boop](https://github.com/andrewleko19-boop)
