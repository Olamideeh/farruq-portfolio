# Qosim Faruq Olamide - Portfolio

A responsive React, Next.js, TypeScript and Tailwind CSS portfolio. Eight project case studies, light/dark themes, contact links and a downloadable CV.

## Run locally on Windows

Install Node.js 22 LTS or newer. Extract the ZIP, open the `qosim-portfolio` folder in VS Code and run:

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Build and deploy

```powershell
npm run build
```

The static website is generated in `out/`. Upload the contents of `out/` to a static host, or connect your GitHub repository to a hosting provider supporting Next.js static exports. When asked, build command is `npm run build`, output directory is `out`.

No backend, database, Docker or environment secrets are required. There is no ChatGPT hosting dependency. Keep the source folder so you can edit it later.

## Edit

- `app/page.tsx`: introduction, experience, contact links.
- `app/projects.ts`: project descriptions, features, technology and repositories.
- `app/globals.css`: styling, themes and responsive layouts.
- `public/Qosim-Faruq-Olamide-CV.pdf`: replace this to update your downloadable CV.
- `app/layout.tsx`: title and SEO description.

Education is intentionally omitted. Twitter/Facebook and live project demos are omitted until exact links are provided.

## Verification

The portable edition passed a standard Next.js production build, TypeScript checks and static export. The ZIP includes the tested `out/` build as well as the editable source. Browser interaction testing was not run.
