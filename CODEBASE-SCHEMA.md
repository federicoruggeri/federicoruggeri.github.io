# Codebase schema

This file lists the templates of the site, the data each one reads, and the partials each one calls.

## Templates

| Template | Renders | Reads | Calls |
| --- | --- | --- | --- |
| `layouts/baseof.html` | Every page: head, header, footer | `config/_default/hugo.yaml` (`params`, `menus`) | `assets/css/site.css`, `assets/js/site.js` |
| `layouts/home.html` | `/`: hero, research explorer with minimap, latest news | `data/graph.yaml`, `content/news/`, `assets/media/authors/me.jpg` | `graph-labels`, `icon`, `stage`, `news-item` |
| `layouts/publications/section.html` | `/publications/`: search, type and topic filters, cards by year | `content/publications/`, `data/graph.yaml` | `pub-kind`, `pub` |
| `layouts/news/section.html` | `/news/`: timeline grouped by year | `content/news/` | `news-item` |
| `layouts/teaching/section.html` | `/teaching/`: timeline by academic year | `years` in `content/teaching/_index.md` | `icon` |
| `layouts/cv/section.html` | `/cv/` | `data/cv.yaml` | none |
| `layouts/section.html` | Personal projects | section pages | none |
| `layouts/page.html` | Any other page | page content | none |
| `layouts/redirect/page.html` | Pages with `type: redirect` | `target` | none |
| `layouts/robots.txt` | `robots.txt` | none | none |

Publications and news items have no page of their own: their sections set `build.render: never` through `cascade`.

## Partials

| Partial | Returns | Called by |
| --- | --- | --- |
| `_partials/graph-labels.html` | Map from node id to label | `home.html`, `pub.html` |
| `_partials/stage.html` | View of one node: parent, node content, children | `home.html`; calls `pub` |
| `_partials/pub.html` | Publication card with tags and DOI, PDF, Abstract, and Cite buttons | `stage.html`, `publications/section.html`; calls `pub-kind`, `pub-directions`, `graph-labels` |
| `_partials/pub-kind.html` | Kind of a publication: Journal, Conference, Workshop, Book, Thesis, or Preprint | `pub.html`, `publications/section.html` (cached) |
| `_partials/pub-directions.html` | Map from publication bundle to graph directions | `pub.html` (cached) |
| `_partials/news-item.html` | One news item with kind pill and link chips | `home.html`, `news/section.html`; calls `icon` |
| `_partials/icon.html` | Inline SVG from `assets/icons/` | `home.html`, `news-item.html`, `teaching/section.html` |

## Scripts

`assets/js/site.js` has three parts, and it has no dependencies.
The explorer part animates the switch between node views and marks the shown node in the minimap.
It reads the `data-map` and `data-up` attributes of the minimap links.
The publications part runs the search box and the filters, which read `data-tags` and `data-search` of each card.
The last part adds the Copy BibTeX buttons.
`scripts/check_internal_links.py` checks the links of the built site in CI.
