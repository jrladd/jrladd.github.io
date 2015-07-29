---
layout: default
---

# Miscellanies

{% for f in site.miscellanies %}
   {{ f.title }}
   {{ f.output }}
{% end for %}