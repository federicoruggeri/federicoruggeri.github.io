---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-02-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: cta-button-list
    content:
      buttons:
        - text: Download CV
          url: /cv/cv.pdf
          icon: hero/arrow-down-tray
        - text: Research statement
          url: /research/statement/statement.pdf
          icon: hero/document-text
    design:
      spacing:
        padding: [0, 0, 2rem, 0]
  - block: markdown
    content:
      title: '📚 Research Focus'
      subtitle: ''
      text: |-
        I study how natural language processing systems can generate, distill, and use
        knowledge from unstructured text. My work focuses on interpretable methods for
        argument mining and legal analytics along two complementary directions:

        - **Unstructured Knowledge Integration (UKI):** enabling models to use large collections of textual knowledge when addressing a task.
        - **Structured Knowledge Extraction from Text:** distilling structured, human-interpretable knowledge from raw text.

        [Read my research statement](/research/statement/)
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Selected Publications
      filters:
        folders:
          - publications_selected
        featured_only: false
    design:
      view: citation
      columns: '2'
  - block: collection
    content:
      title: Recent News
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 4
      # Filter on criteria
      filters:
        folders:
          - news
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      columns: 2
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
