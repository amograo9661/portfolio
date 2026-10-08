# Amog Rao — Portfolio

Personal portfolio for Amog Rao, a Computer Science Engineering student at KL University. Dark, single-page site with a large hero, portrait, and typed headline.

Editable copy, links, and facts live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Components only handle layout.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43123](http://127.0.0.1:43123).

Production build:

```bash
npm run build
npm run preview
```

`npm run build` typechecks with `tsc -b`, then writes the static site to `dist/`.

## What to replace

| What | Where |
| --- | --- |
| Profile photo | `src/assets/profile.jpg` |
| Resume | `src/assets/resume.pdf` (served as `/resume.pdf`) |
| LinkedIn | `site.linkedinUrl` in `src/data/portfolio.ts` |
| GitHub profile | `site.githubUrl` |
| Project repositories | each `githubUrl` |
| Live demos | each `liveUrl` |
| All other copy | `src/data/portfolio.ts` |

Search `portfolio.ts` for `REPLACE`. The portrait shipped with the site is a stand-in. Drop your photo in `src/assets/profile.jpg` and keep the face near the upper center so the crop still works.

The first item in the `projects` array is the large featured project. Reorder the array to feature a different one.

The contact form checks name, email, and message in the browser, shows a short sending state, then a success message. It does not send email.

## File structure

```
index.html
package.json
vite.config.ts
public/favicon.svg
public/resume.pdf          generated from src/assets/resume.pdf
src/
  main.tsx
  App.tsx
  assets/
    profile.jpg
    resume.pdf
  styles/global.css
  data/portfolio.ts
  hooks/
    useActiveSection.ts
    usePrefersReducedMotion.ts
    useTypingEffect.ts
  lib/contactForm.ts
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx
    *.module.css
```
