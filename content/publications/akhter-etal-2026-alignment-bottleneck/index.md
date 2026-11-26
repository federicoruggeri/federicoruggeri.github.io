---
title: 'The Alignment Bottleneck in Decomposition-Based Claim Verification'
authors: ['Mahmud Elahi Akhter', 'Federico Ruggeri', 'Iman Munire Bilal', 'Robert Procter', 'Maria Liakata']
date: '2026-09-01'
publication: 'Proceedings of the Thirty-Fifth International Joint Conference on Artificial Intelligence, IJCAI-26'
publication_types: ['paper-conference']
featured: true
doi: '10.24963/ijcai.2026/608'
links:
  - {name: 'PDF', url: 'https://www.ijcai.org/proceedings/2026/0608.pdf'}
abstract: 'Structured claim decomposition is often proposed as a solution for verifying complex, multi-faceted claims, yet empirical results have been inconsistent. We argue that these inconsistencies stem from two overlooked bottlenecks: evidence alignment and sub-claim error profiles. To better understand these factors, we introduce a new dataset of real-world complex claims, featuring temporally bounded evidence and human-annotated sub-claim evidence spans. We evaluate decomposition under two evidence alignment setups: Sub-claim Aligned Evidence (SAE) and Repeated Claim-level Evidence (SRE). Our results reveal that decomposition brings significant performance improvement only when evidence is granular and strictly aligned. By contrast, standard setups that rely on repeated claim-level evidence (SRE) fail to improve and often degrade performance as shown across different datasets and domains (PHEMEPlus, MMM-Fact, COVID-Fact). Furthermore, we demonstrate that in the presence of noisy sub-claim labels, the nature of the error ends up determining downstream robustness. We find that conservative "abstention" significantly reduces error propagation compared to aggressive but incorrect predictions. These findings suggest that future claim decomposition frameworks must prioritize precise evidence synthesis and calibrate the label bias of sub-claim verification models.'
---
