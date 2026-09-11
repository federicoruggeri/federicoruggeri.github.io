# Federico Ruggeri — personal academic website

Source for [federicoruggeri.github.io](https://federicoruggeri.github.io), built with [Hugo](https://gohugo.io/) and [HugoBlox](https://hugoblox.com/).

## Production

- Source branch: `academic-template`
- Host: GitHub Pages
- Deployment workflow: `.github/workflows/hugo.yml`
- Production URL: <https://federicoruggeri.github.io>

Pushing to `academic-template` starts the GitHub Pages deployment. Review and validate changes before pushing.

## Local development

Prerequisites:

- Hugo Extended `0.156.0` (the version declared in `hugoblox.yaml`)
- Node.js `22`
- pnpm `10.14.0` (the version declared in `package.json`, installed with `corepack`)
- Go, for Hugo modules

```bash
corepack enable
pnpm install
pnpm run dev
```

The development server is normally available at <http://localhost:1313>.

Build the production site and Pagefind index with:

```bash
pnpm run build
```

Generated output is written to `public/` and must not be edited manually.

Pull requests run `.github/workflows/ci.yml`, which builds the site with the same pinned toolchain and checks internal links with `scripts/check_internal_links.py`. Run the same check locally with:

```bash
python3 scripts/check_internal_links.py public
```

## Content map

| Area | Location |
|---|---|
| Homepage | `content/_index.md` |
| Profile, education, experience | `data/authors/me.yaml` |
| Research | `content/research/` |
| Publications | `content/publications*/` |
| Teaching | `content/teaching/` |
| News | `content/news/` |
| Tools and shared tasks | `content/tools/`, `content/sharedtasks/` |
| Personal projects and modding | `content/modding/` |
| Navigation | `config/_default/menus.yaml` |
| Site settings and metadata | `config/_default/params.yaml` |
| Static files such as the CV | `static/` |

## Common updates

### CV

Replace `static/cv/cv.pdf` while keeping the path unchanged, then verify:

- <https://federicoruggeri.github.io/cv/cv.pdf>

### Research statement

Update both the page and its PDF under `content/research/statement/`. The homepage links directly to:

- `/research/statement/statement.pdf`

### Publications

Publication records are Hugo leaf bundles. Keep each record in its own `index.md` and verify titles, authors, dates, publication type, and external links before publishing.

### Draft content

Set the following in front matter to keep unfinished content out of production:

```yaml
draft: true
```

## Pre-deployment checklist

1. Confirm `git status` contains only intended changes.
2. Run `pnpm run build` with the pinned local toolchain.
3. Review Hugo warnings and run `python3 scripts/check_internal_links.py public`.
4. Check the homepage, navigation, publication pages, CV, and research-statement links.
5. Test keyboard navigation and representative mobile layouts.
6. Push only after the production build passes.

## License

Website content uses the Creative Commons settings declared in `config/_default/params.yaml`. HugoBlox and other dependencies retain their own licenses.
