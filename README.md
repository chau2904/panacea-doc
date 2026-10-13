# Panacea Docs

Documentation site for **Panacea**, a distributed, full-stack test automation platform for web, APIs, databases, mobile, hardware, and cloud. Built with [Docusaurus](https://docusaurus.io/).

Live site: https://panacea-doc.vercel.app/

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run start     # local dev server with live reload
npm run build     # production build into ./build
npm run serve     # serve the production build locally
```

## Project structure

```
docs/                  Working copy for the next release (not published directly)
versioned_docs/        Published docs, one folder per release (e.g. version-2.4.1)
versioned_sidebars/    Sidebar config for each published version
versions.json          List of published versions (newest first)
sidebars.js            Sidebar config for docs/
src/
  pages/               Homepage
  components/          Homepage sections
  css/                 Global theme overrides
static/img/            Images, logos, and favicons served by the site
branding/              Source logo and favicon files (not served)
docusaurus.config.js   Site configuration
```

## Editing docs

- To fix something in a released version, edit the file under `versioned_docs/version-<x.y.z>/`.
- To prepare a new release, make the changes in `docs/`, then cut a version:

  ```bash
  npm run docusaurus docs:version <x.y.z>
  ```

  This copies `docs/` into `versioned_docs/version-<x.y.z>/` and adds the version to `versions.json`.
