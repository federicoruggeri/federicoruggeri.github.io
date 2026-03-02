---
title: Publications
cms_exclude: true

type: landing

# Optional header image (relative to `static/media/` folder).
banner:
  caption: ''
  image: ''

sections:
  - block: collection
    content:
      count: 0
      title: Selected
      text: ''
      filters:
        folders:
          - publications_selected
        exclude_featured: false
    design:
      view: citation
  - block: collection
    content:
      title: Preprints
      text: ''
      filters:
        folders:
          - publications_preprints
        exclude_featured: false
    design:
      view: citation
  - block: collection
    content:
      title: Journals
      text: ''
      filters:
        folders:
          - publications_journals
        exclude_featured: false
    design:
      view: citation
  - block: collection
    content:
      title: Conference
      text: ''
      filters:
        folders:
          - publications_conference
        exclude_featured: false
    design:
      view: citation
  - block: collection
    content:
      title: Workshops
      text: ''
      filters:
        folders:
          - publications_workshops
        exclude_featured: false
    design:
      view: citation
---
