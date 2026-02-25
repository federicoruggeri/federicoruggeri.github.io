---
title: 'Assessing the Reasoning Capabilities of LLMs in the context of Evidence-based Claim Verification'

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - John Dougrez-Lewis
  - Mahmud Elahi Akhter
  - Federico Ruggeri
  - Sebastian Löbbers
  - Yulan He
  - Maria Liakata

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2025-08-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-08-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *ACL (Findings)*
publication_short: In *ACL (Findings)*

abstract: Although LLMs have shown great performance on Mathematics and Coding related reasoning tasks, the reasoning capabilities of LLMs regarding other forms of reasoning are still an open problem. Here, we examine the issue of reasoning from the perspective of claim verification. We propose a framework designed to break down any claim paired with evidence into atomic reasoning types that are necessary for verification. We use this framework to create RECV, the first claim verification benchmark, incorporating real-world claims, to assess the deductive and abductive reasoning capabilities of LLMs. The benchmark comprises of three datasets, covering reasoning problems of in creasing complexity. We evaluate three state of-the-art proprietary LLMs under multiple prompt settings. Our results show that while LLMs can address deductive reasoning prob lems, they consistently fail in cases of abductive reasoning. Moreover, we observe that enhancing LLMs with rationale generation is not always beneficial. Nonetheless, we find that generated rationales are semantically similar to those provided by humans, especially in deduc tive reasoning cases.

# Summary. An optional shortened abstract.
summary: Evaluation of LLMs in context of Evidence-based Claim verification to show that LLMs fail at abductive reasoning and CoT methods performance are task complexity and data domain dependant.

tags:
  - track:findings
  - benchmark
  - reasoning
  - LLM
  - evaluation
  - data resources
  - claim verification
  - fact checking

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.18653/v1/2025.findings-acl.1059

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

John Dougrez-Lewis, Mahmud Elahi Akhter, Federico Ruggeri, Sebastian Löbbers, Yulan He, and Maria Liakata. 2025. Assessing the Reasoning Capabilities of LLMs in the context of Evidence-based Claim Verification. In Findings of the Association for Computational Linguistics: ACL 2025, pages 20604–20628, Vienna, Austria. Association for Computational Linguistics.