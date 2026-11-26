# Federico Ruggeri, academic website

Source of [federicoruggeri.github.io](https://federicoruggeri.github.io), built with plain [Hugo](https://gohugo.io/) and no theme.

The homepage presents the research statement as an argument graph.
A central vision is supported by three research directions, and each direction is supported by its themes and a current focus.
The graph is explored one node at a time: the node shows its content, with its parent above it and its children below it.
A minimap beside the graph shows the whole structure and jumps to any node.

## Production

The source branch is `academic-template`, and the site is hosted on GitHub Pages.
Pushing to `academic-template` runs `.github/workflows/hugo.yml`.
That workflow builds and deploys the site.
Pull requests run `.github/workflows/ci.yml`.
That workflow builds the site, fails on any Hugo warning, and checks internal links.

## Local development

The only requirement is Hugo Extended 0.167.0, the version pinned in `.github/actions/setup-site/action.yml`.
Start a preview at <http://localhost:1313> with this command:

```bash
hugo server
```

Run the same checks as CI before opening a pull request:

```bash
hugo --minify --printPathWarnings --panicOnWarning
python3 scripts/check_internal_links.py public
```

The build writes the site to `public/`, which must not be edited by hand.

## Content map

| Area | Location |
| --- | --- |
| Argument graph on the homepage | `data/graph.yaml` |
| Name, role, and profile links | `config/_default/hugo.yaml` |
| Portrait and tab icon | `assets/media/authors/me.jpg`, `static/favicon.svg` |
| Icons | `assets/icons/` |
| Publications | `content/publications/<bundle>/index.md` |
| CV page | `data/cv.yaml` |
| Full CV and research statement | `static/cv/cv.pdf`, `static/research/statement/statement.pdf` |
| Teaching timeline | `years` in `content/teaching/_index.md` |
| News | `content/news/` |
| Personal projects | `content/modding/` |
| Templates and styles | see `CODEBASE-SCHEMA.md` |

## Common updates

### Argument graph

Each node in `data/graph.yaml` has an `id`, a `label`, and a `text`.
The `id` is also the URL fragment of the node.

A node view shows `summary`, the `flow` figure, `points`, `pubs`, and `links`.
A `flow` lists `steps`, each with a `label` and an optional `note`, and takes an optional `caption`.
Themes list the publication bundles they cite in `pubs`.
The build fails when `pubs` names a bundle that does not exist.
The `links` list connects open questions across directions.

### Publications

Each publication is a leaf bundle under `content/publications/`.
Its front matter holds `title`, `authors`, `date`, `publication`, `publication_types`, and `featured`.
The optional keys are `doi`, `links`, `abstract`, and `note`.
Publications have no page of their own, and each one appears as a card on `/publications/`.

Set `featured: true` to include the paper in the Selected filter.
A `cite.bib` file adds the Cite button, and a PDF in the bundle adds a PDF button.
Old publication URLs lead to `/publications/` through the `aliases` of `content/publications/_index.md`.

### News

Each news item is a bundle under `content/news/` without a page of its own.
Its front matter holds `title`, `date`, `kind`, `venue`, `summary`, and `links`.
The `kind` is `paper`, `workshop`, or `talk`, and it sets the pill and its icon.
An optional `pub` names a publication bundle and adds a link to its page.
The homepage shows the three latest items.

### Draft content

Set `draft: true` in the front matter to keep a page out of production.

## License

See `LICENSE.md`. The content is licensed under CC BY-NC-ND 4.0, and text and data mining is reserved.
