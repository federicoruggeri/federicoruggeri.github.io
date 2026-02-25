---
title: "The Alignment Bottleneck in Decomposition-Based Claim Verification"
authors:
    - Mahmud Elahi Akhter
    - Federico Ruggeri
    - Iman Munire Bilal
    - Rob Procter
    - Maria Liakata
    
date: "2026-02-11T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-02-11T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: "ArXiv Preprint"
publication_short: "ArXiv Preprint"

abstract: "Structured claim decomposition is often proposed as a solution for verifying complex, multi-faceted claims, yet empirical results have been inconsistent. We argue that these inconsistencies stem from two overlooked bottlenecks: evidence alignment and sub-claim error profiles. To better understand these factors, we introduce a new dataset of real-world complex claims, featuring temporally bounded evidence and human-annotated sub-claim evidence spans. We evaluate decomposition under two evidence alignment setups: Sub-claim Aligned Evidence (SAE) and Repeated Claim-level Evidence (SRE). Our results reveal that decomposition brings significant performance improvement only when evidence is granular and strictly aligned. By contrast, standard setups that rely on repeated claim-level evidence (SRE) fail to improve and often degrade performance as shown across different datasets and domains (PHEMEPlus, MMM-Fact, COVID-Fact). Furthermore, we demonstrate that in the presence of noisy sub-claim labels, the nature of the error ends up determining downstream robustness. We find that conservative "abstention" significantly reduces error propagation compared to aggressive but incorrect predictions. These findings suggest that future claim decomposition frameworks must prioritize precise evidence synthesis and calibrate the label bias of sub-claim verification models."

# Summary. An optional shortened abstract.
summary: "we introduce a new dataset of real-world complex claims, featuring temporally bounded evidence and human-annotated sub-claim evidence spans."

tags:
  - claim verification
  - decomposition
  - alignment
  - LLM

featured: false

hugoblox:
  ids:
    arxiv: 2602.10380

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

#### Citation

Mahmud Elahi Akhter, Federico Ruggeri, Iman Munire Bilal, Robert Procter, and Maria Liakata. The Alignment Bottleneck in Decomposition-Based Claim Verification. ArXiv Preprint.

