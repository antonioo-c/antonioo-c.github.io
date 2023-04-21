---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome! I am currently an undergraduate student in Computer Science at <b>Peking University</b>.

## Research Interests

- 3D Computer Vision
- Self-Supervised Learning
- Multi-Modal Learning
- Generative Models (learning)

## Pulications
<br>

<img align='left' src="../images/research/pimae_pipeline.png" alt="pipeline" width="180" style="padding: 0px 10px 10px px"/> 


{% include base_path %}
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


