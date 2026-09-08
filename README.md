# Sari Lab Astro Website

A lightweight, responsive academic lab website built with Astro.

## Pages
- Home
- Research
- People
- Publications
- News
- Join Us
- Contact
- 404

## Run locally

Install a current supported Node.js release, then:

```bash
npm install
npm run dev
```

Open the local address Astro prints in the terminal, typically:

```text
http://localhost:4321
```

## Main files to edit

Lab information and email:
```text
src/data/site.ts
```

People:
```text
src/data/people.ts
```

Publications:
```text
src/data/publications.ts
```

Home page:
```text
src/pages/index.astro
```

Research:
```text
src/pages/research.astro
```

Styles:
```text
src/styles/global.css
```

## Add photos

Put image files in:
```text
public/images/
```

Then reference them with paths such as:
```text
/images/levent-sari.jpg
```

## Build

```bash
npm run build
```

The production site will be created in:
```text
dist/
```

## GitHub

Create a repository named `sarilab`, then:

```bash
git init
git add .
git commit -m "Initial Sari Lab website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Cloudflare Pages

In Cloudflare:
1. Open **Workers & Pages**
2. Create a **Pages** application
3. Connect your GitHub repository
4. Choose the `sarilab` repository
5. Framework preset: **Astro**
6. Build command: `npm run build`
7. Build output directory: `dist`
8. Deploy
9. Add custom domain: `sarilab.org`

## First edits to make

- Replace `YOUR_EMAIL@uh.edu`
- Add your real Google Scholar URL
- Add GitHub URL
- Add University of Houston faculty profile URL
- Replace publication placeholders
- Add your PI photo and later lab-member photos
- Add lab address/building/room

## Faculty profile content

The project has been updated with current public information from Levent Sari's University of Houston faculty profile, including:

- Faculty title and research division
- Office and UH email
- Education
- Google Scholar and UH faculty-profile links
- Faculty profile photo (loaded from the UH profile URL)
- Research interests, adapted into the Research page
- The amyloid lag/dark-phase research figure (loaded from the UH profile URL)
- The selected-publication list shown on the UH faculty profile
- Department address and phone number

The externally hosted faculty photo and research figure can later be downloaded into `public/images/` if you prefer the site to be fully self-contained.
