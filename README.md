# Portfolio — Mohamed Hasan

Personal portfolio for **Mohamed Hasan** — Full-Stack Developer & CS Student at AASTMT Lattakia, Syria.

A single-page static site built with **vanilla HTML, CSS, and JavaScript** — no framework, no build
step. It mirrors the way I build my projects: small, fast, and dependency-light.

## Featured projects

- **[Ruqi](https://github.com/andrewleko19-boop/nsams)** — National School Attendance Monitoring
  System, built for the Syrian Ministry of Education. Multi-portal web app (teacher → school →
  directorate → ministry) on Supabase with PostgreSQL Row-Level Security, GitHub Actions CI/CD, and an
  Arabic RTL UI.
- **[UniManager](https://unimanager-sy.pages.dev)** — Offline-first PWA for university students:
  schedule, GPA, exams, real-time group collaboration. Supabase + IndexedDB + service worker, bilingual
  Arabic/English. ([source](https://github.com/andrewleko19-boop/unimanager))

## Structure

```
index.html              # the whole page
styles.css              # dark/light theme, responsive layout
script.js               # theme toggle, reveal-on-scroll, footer year
favicon.svg             # MH monogram
.github/workflows/      # GitHub Pages deploy
```

## Run locally

No build step — just serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Pushing to `main` triggers the GitHub Pages workflow (`.github/workflows/deploy.yml`). Enable
**Settings → Pages → Source: GitHub Actions** once, and the site publishes automatically.

## Contact

- Email: mh6127880@gmail.com
- GitHub: [andrewleko19-boop](https://github.com/andrewleko19-boop)
