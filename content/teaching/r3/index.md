---
title: Robust and Reproducible Research
date: '2025-04-30'
summary: 'A PhD course on reproducibility in research: data collection, experimental setup, model comparison, and programming best practices.'
repository: https://github.com/federicoruggeri/phdlectures-r3
facts:
- label: Programme
  value: PhD in Computer Science and Engineering
- label: Format
  value: Eight 2-hour hybrid lectures
- label: Total
  value: 16 hours
prerequisites:
- topic: Programming
  level: Intermediate
- topic: Deep Learning theory
  level: Intermediate
- topic: Jupyter Notebook
  level: Beginner
history:
- year: 2026–2027
  title: Robust and Reproducible Research
  note: scheduled
- year: 2024–2025
  title: Robust and Reproducible Research
  note: 16 hours
- year: 2023–2024
  title: Robust and Reproducible Experimental Deep Learning Setting
  note: 10 hours
parts:
- title: Reproducibility in Research
  text: We discuss risks in contemporary research, including non-reproducible findings, unavailable resources such as data and code, and unsustainable pressure to publish quickly. Whether you are an aspiring or experienced researcher, assessing trust requires asking whether a study provides enough methodological detail, code, data or collection guidelines, hyperparameters, and data-partitioning information for independent reproduction.
  lectures:
  - name: Lecture 1
    title: Reproducibility in Research (Pt. I)
    url: https://zenodo.org/records/15622312
  - name: Lecture 2
    title: Reproducibility in Research (Pt. II)
    url: https://zenodo.org/records/15622333
  readings:
  - cite: Stodden and Miguez, 2013
    title: 'Best Practices for Computational Science: Software Infrastructure and Environments for Reproducible and Extensible Research'
    url: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2322276
  - cite: McNutt, 2014
    title: Reproducibility
    url: https://www.science.org/doi/epdf/10.1126/science.1250475
  - cite: Allison et al., 2016
    title: 'Reproducibility: A tragedy of errors'
    url: https://www.nature.com/articles/530027a
  - cite: Baker 2016
    title: 1,500 scientists lift the lid on reproducibility
    url: https://www.nature.com/articles/533452a
  - cite: Edwards and Roy, 2017
    title: 'Academic Research in the 21st Century: Maintaining Scientific Integrity in a Climate of Perverse Incentives and Hypercompetition'
    url: https://pubmed.ncbi.nlm.nih.gov/28115824/
  - cite: Raff, 2019
    title: A Step Toward Quantifying Independently Reproducible Machine Learning Research
    url: https://proceedings.neurips.cc/paper_files/paper/2019/file/c429429bf1f2af051f2021dc92a8ebea-Paper.pdf
  - cite: Bouthillier et al., 2019
    title: Unreproducible Research is Reproducible
    url: https://proceedings.mlr.press/v97/bouthillier19a/bouthillier19a.pdf
  - cite: Pineau et al., 2020
    title: Improving Reproducibility in Machine Learning Research
    url: https://www.jmlr.org/papers/volume22/20-303/20-303.pdf
  - cite: Garcia et al., 2021
    title: Nonreplicable publications are cited more than replicable ones
    url: https://www.science.org/doi/epdf/10.1126/sciadv.abd1705
  - cite: Leonelli, 2023
    title: Philosophy of Open Science
    url: https://www.cambridge.org/core/elements/philosophy-of-open-science/0D049ECF635F3B676C03C6868873E406
  - cite: Kapoor and Naranayan, 2023
    title: Leakage and the reproducibility crisis in machine-learning-based science
    url: https://www.sciencedirect.com/science/article/pii/S2666389923001599
- title: Data collection and Annotation
  text: Reproducibility can target different aspects of the research pipeline. From the conceptualization of ideas to collecting resources and doing experiments. We cover several aspects of data collection since it often represents the backbone of most produced machine learning research. In particular, we cover annotation paradigms, requirements for collecting and annotating data, issues and risks when collecting data, and evaluating annotation quality.
  lectures:
  - name: Lecture 3
    title: Data Collection and Annotation
    url: https://zenodo.org/records/15622351
  readings:
  - cite: Geva et al., 2019
    title: Are We Modeling the Task or the Annotator? An Investigation of Annotator Bias in Natural Language Understanding Datasets
    url: https://aclanthology.org/D19-1107.pdf
  - cite: Liao et al., 2021
    title: Are We Learning Yet? A Meta-Review of Evaluation Failures Across Machine Learning
    url: https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/file/757b505cfd34c64c85ca5b5690ee5293-Paper-round2.pdf
  - cite: Paullada et al., 2021
    title: 'Data and its (dis)contents: A survey of dataset development and use in machine learning research'
    url: https://www.sciencedirect.com/science/article/pii/S2666389921001847
  - cite: Koch et al., 2021
    title: 'Reduced, Reused and Recycled: The Life of a Dataset in Machine Learning Research'
    url: https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/file/3b8a614226a953a8cd9526fca6fe9ba5-Paper-round2.pdf
  - cite: Röttger et al., 2022
    title: Two Contrasting Data Annotation Paradigms for Subjective NLP Tasks
    url: https://aclanthology.org/2022.naacl-main.13/
  - cite: Cabitza et al., 2023
    title: Toward a Perspectivist Turn in Ground Truthing for Predictive Computing
    url: https://ojs.aaai.org/index.php/AAAI/article/view/25840
  - cite: Ruggeri et al., 2025
    title: 'Let Guidelines Guide You: A Prescriptive Guideline-Centered Data Annotation Methodology'
    url: https://arxiv.org/abs/2406.14099v2
- title: Modeling and Experimenting
  text: 'There are other aspects of a machine learning pipeline where talking about reproducibility is essential: modeling, experimenting, and evaluation. We talk about data partitioning, data leakage, random seeding, performance comparison, and metrics.'
  lectures:
  - name: Lecture 4
    title: Modeling and Experimenting
    url: https://zenodo.org/records/15622404
  readings:
  - cite: Blagec et al., 2008
    title: A critical analysis of metrics used for measuring progress in artificial intelligence
    url: https://arxiv.org/pdf/2008.02577
  - cite: Henderson et al., 2018
    title: Deep Reinforcement Learning That Matters
    url: https://aaai.org/papers/11694-deep-reinforcement-learning-that-matters/
  - cite: Dror et al., 2018
    title: The Hitchhiker’s Guide to Testing Statistical Significance in Natural Language Processing
    url: https://aclanthology.org/P18-1128.pdf
  - cite: Gorman and Bedrick, 2019
    title: We need to talk about standard splits
    url: https://aclanthology.org/P19-1267.pdf
  - cite: Amrhein et al., 2019
    title: Scientists rise up against statistical significance
    url: https://www.nature.com/articles/d41586-019-00857-9
  - cite: Forde and Paganini, 2019
    title: The Scientific Method in the Science of Machine Learning
    url: https://arxiv.org/pdf/1904.10922
  - cite: Hovy and Prabhumoye, 2020
    title: Five sources of bias in natural language processing
    url: https://compass.onlinelibrary.wiley.com/doi/epdf/10.1111/lnc3.12432
  - cite: Azer et al., 2020
    title: 'Not All Claims are Created Equal: Choosing the Right Statistical Approach to Assess Hypotheses'
    url: https://aclanthology.org/2020.acl-main.506.pdf
  - cite: Dehghani et al., 2021
    title: The Benchmark Lottery
    url: https://arxiv.org/pdf/2107.07002
  - cite: Søgaard et al., 2021
    title: We need to Talk About Random Splits
    url: https://aclanthology.org/2021.eacl-main.156v2.pdf
  - cite: Rob van der Goot, 2021
    title: We Need to Talk About train-dev-test Splits
    url: https://aclanthology.org/2021.emnlp-main.368.pdf
  - cite: Bethard, 2021
    title: We need to talk about random seeds
    url: https://arxiv.org/pdf/2210.13393
  - cite: Marie et al., 2021
    title: 'Scientific Credibility of Machine Translation Research: A Meta-Evaluation of 769 Papers'
    url: https://aclanthology.org/2021.acl-long.566.pdf
  - cite: Kapoor and Naranayan, 2023
    title: Leakage and the reproducibility crisis in machine-learning-based science
    url: https://www.sciencedirect.com/science/article/pii/S2666389923001599
  - cite: Lones, 2024
    title: 'How to avoid machine learning pitfalls: a guide for academic researchers'
    url: https://arxiv.org/pdf/2108.02497
- title: Responsible Research
  text: While there are several issues we might encounter concerning reproducibility, there is also effort in developing solutions to mitigate these issues. One of these solutions in accordance with reproducible research is represented by recommendations checklists.
  lectures:
  - name: Lecture 5
    title: Responsible Research
    url: https://zenodo.org/records/15622408
  readings:
  - cite: Arnold et al., 2019
    title: 'FactSheets: Increasing trust in AI services through supplier''s declarations of conformity'
    url: https://ieeexplore.ieee.org/document/8843893
  - cite: Mitchell et al., 2019
    title: Model Cards for Model Reporting
    url: https://dl.acm.org/doi/10.1145/3287560.3287596
  - cite: Gebru et al., 2021
    title: Datasheets for Datasets
    url: https://cacm.acm.org/research/datasheets-for-datasets/
  - cite: Pushkarna et al., 2022
    title: 'Data Cards: Purposeful and Transparent Dataset Documentation for Responsible AI'
    url: https://dl.acm.org/doi/pdf/10.1145/3531146.3533231
  - cite: Kapoor and Naranayan, 2023
    title: Leakage and the reproducibility crisis in machine-learning-based science
    url: https://www.sciencedirect.com/science/article/pii/S2666389923001599
  - cite: Mancini et al., 2025
    title: Promoting the Responsible Development of Speech Datasets for Mental Health and Neurological Disorders Research
    url: https://dl.acm.org/doi/10.1613/jair.1.16406
- title: Programming Best Practices
  text: 'Reproducible experimental work also requires sound programming practice. Research code should support:'
  points:
  - name: Transparency
    text: make assumptions and processing steps explicit.
  - name: Correctness
    text: ensure implementation matches claims in the paper.
  - name: Readability
    text: help collaborators and reviewers understand the code.
  - name: Efficiency
    text: use computational resources responsibly.
  - name: Maintainability
    text: make later reuse and extension practical.
  lectures:
  - name: Lecture 6
    title: Programming Best Practices (Pt. I)
    url: https://zenodo.org/records/15622426
  - name: Lecture 7
    title: Programming Best Practices (Pt. II)
    url: https://zenodo.org/records/15622430
  readings:
  - title: The Theory of Type Hints
    url: https://peps.python.org/pep-0483/
  - title: The state of type hints in Python
    url: https://bernat.tech/posts/the-state-of-type-hints-in-python/
  - title: The Correct Way to Overload Functions in Python
    url: https://martinheinz.dev/blog/50
  - title: Ultimate Guide to Python Debugging
    url: https://martinheinz.dev/blog/24
  - title: Pytest Features, That You Need in Your (Testing) Life
    url: https://martinheinz.dev/blog/7
  - title: Making Python Programs Blazingly Fast
    url: https://martinheinz.dev/blog/13
  - title: Optimizing Memory Usage in Python Applications
    url: https://martinheinz.dev/blog/68
  - title: Python CLI Tricks That Don't Require Any Code Whatsoever
    url: https://martinheinz.dev/blog/83
  - title: Profiling and Analyzing Performance of Python Programs
    url: https://martinheinz.dev/blog/64
- title: Cinnamon, a lightweight Python library for research
  text: Cinnamon is a lightweight library for separating configuration from application logic.
  lectures:
  - name: Lecture 8
    title: 'Cinnamon: a lightweight python library for research'
    url: https://zenodo.org/records/15622441
  readings:
  - title: Cinnamon Documentation
    url: https://nlp.unibo.it/cinnamon/overview.html
---

The number of scientific articles published in Computer Science (and similar fields) increases steadily every year. This is mainly due to breakthroughs like Deep Learning, and, more recently, Large Language Models.

Paradoxically, researchers are struggling even more to reproduce published research. This issue affects all possible aspects of research, including methodology, data curation, approach comparison, and implementation.

In this course, we will introduce and discuss the concept of 'reproducibility' in research. In particular, we will overview current issues in research and existing attempts to address them. We will focus on data curation, experimental setup, model comparison, and programming best practices.

This course is designed for researchers at different career stages, from those beginning their research journey to experienced practitioners seeking stronger reproducibility practices. See the prerequisites below for more details.

Lectures are meant to be interactive.
