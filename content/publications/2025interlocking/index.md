---
title: 'Interlocking-free Selective Rationalization Through Genetic-based Learning'

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Federico Ruggeri
  - Gaetano Signorelli

# Author notes (optional)
author_notes:
  - 'Equal Contribution'
  - 'Equal Contribution'

date: '2025-08-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-08-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *ACL*
publication_short: In *ACL*

abstract: "A popular end-to-end architecture for selective rationalization is the select-then-predict pipeline, comprising a generator to extract highlights fed to a predictor. Such a cooperative system suffers from suboptimal equilibrium minima due to the dominance of one of the two modules, a phenomenon known as interlocking. While several contributions aimed at addressing interlocking, they only mitigate its effect, often by introducing feature-based heuristics, sampling, and ad-hoc regularizations. We present GenSPP, the first interlocking-free architecture for selective rationalization that does not require any learning overhead, as the above-mentioned. GenSPP avoids interlocking by performing disjoint training of the generator and predictor via genetic global search. Experiments on a synthetic and a real-world benchmark show that our model outperforms several state-of-the-art competitors."

# Summary. An optional shortened abstract.
summary: "We present GenSPP, a selective rationalization framework that eliminates interlocking via genetic-based search"

tags:
    - track:conference
    - selective rationalization
    - highlights
    - XAI
    - genetic algorithms
    - select-then-predict
    - SPP
    - text classification

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.18653/v1/2025.acl-long.59

# Custom links
links:
  - type: pdf
    url: "paper.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - FAIR

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

#### Citation

Federico Ruggeri and Gaetano Signorelli. 2025. Interlocking-free Selective Rationalization Through Genetic-based Learning. In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1175–1191, Vienna, Austria. Association for Computational Linguistics.