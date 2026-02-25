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
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: cv/cv.pdf
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
  - block: markdown
    content:
      title: '📚 Research Topics'
      subtitle: ''
      text: |-
        I'm a postdoctoral research fellow in Bologna, Italy, at Language Technologies Lab.
        
        The aim of my research is to devise Natural Language Processing (NLP) systems that learn to generate, distill, and use knowledge from unstructured text.\
        During my research activity, I have taken several steps towards this ultimate goal of learning with knowledge, with applications in Argument Mining and Legal Analytics. 
        
        I'm pursuing these efforts by focusing on two main directions: 
        
        **Unstructured Knowledge Integration**\
        The capability of models to leverage a large amount of unstructured textual knowledge to address specific problems.
        
        **Structured Knowledge Extraction from Text**\
        The capability of models to extract structured knowledge from raw text.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
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
      view: article-grid
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
