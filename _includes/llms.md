{%- comment -%}
Shared body of /llms.txt and /llms-full.txt, rendered from the same _data files
as the website so neither drifts. Pass `full=true` to append every paper's
abstract. Site-relative Markdown links are made absolute because these files
are read outside the site.
{%- endcomment -%}
{%- assign profile = site.data.profile -%}
{%- assign root = '/' | absolute_url -%}
{%- assign link_prefix = '](' | append: root -%}
{%- assign years = site.pages | where_exp: 'item', 'item.entry' | group_by_exp: 'item', 'item.entry.year' | sort: 'name' | reverse -%}
# {{ profile.name }}

> {{ profile.name }} is an {{ profile.title }} of Computer Science at {{ profile.institution }}, where he leads the NOVA Lab. His research spans computer systems, networks, architecture, and security, including memory disaggregation, systems for AI and LLM serving, secure cloud systems, and serverless computing.

Canonical website: {{ root }}
Email: {{ profile.email }}

## Biography

{{ profile.bio }}

## Research directions
{% for direction in site.data.research %}
### {{ direction.name }}{% if direction.status == 'past' %} (past){% endif %}

{{ direction.summary | replace: '](/', link_prefix }}
{% for thread in direction.threads %}
- {{ thread | replace: '](/', link_prefix }}{% endfor %}
{% if direction.note %}
{{ direction.note | replace: '](/', link_prefix }}
{% endif %}{% endfor %}
## Real-world impact
{% for item in site.data.research_impact %}
- {{ item.year }}: {{ item.description | replace: '](/', link_prefix }}{% endfor %}

## Awards and honors
{% for award in site.data.awards_honors %}
- {{ award.name }}{% if award.work %}: "{{ award.work }}"{% elsif award.description %}: {{ award.description }}{% endif %}{% endfor %}

## Publications

Each paper has a landing page with its abstract, venue, DOI, PDF, and BibTeX.
{% for year in years %}{% for item in year.items %}{% assign entry = item.entry %}{% capture venue %}{{ entry.booktitle | default: entry.journal | default: entry.school | default: entry.publisher }}{% endcapture %}
- [{{ entry.title }}]({{ item.url | absolute_url }}). {{ venue }}, {{ entry.year }}.{% if entry.award %} {{ entry.award }}.{% endif %}{% endfor %}{% endfor %}

## Teaching
{% for course in site.data.teaching %}
- {{ course.number }}: {{ course.name }} ({% for offering in course.offerings %}{{ offering.term }}{% unless forloop.last %}, {% endunless %}{% endfor %}){% endfor %}

## Prospective students

{{ profile.name }} is looking for motivated graduate students and postdoctoral researchers. See {{ '/group/' | absolute_url }} for current lab members.

## Primary pages

- Profile and news: {{ root }}
- Publications: {{ '/publications/' | absolute_url }}
- Research impact and awards: {{ '/impact/' | absolute_url }}
- NOVA Lab: {{ '/group/' | absolute_url }}
- Biography: {{ '/bio/' | absolute_url }}
- CV (PDF): {{ '/cv/cv.pdf' | absolute_url }}
{% unless include.full %}- Full text for language models, including every abstract: {{ '/llms-full.txt' | absolute_url }}
{% endunless %}
## Authoritative identity links
{% for identity in profile.same_as %}
- {{ identity.name }}: {{ identity.url }}{% endfor %}
{% if include.full %}
## Paper abstracts
{% for year in years %}{% for item in year.items %}{% assign entry = item.entry %}{% assign details = site.data.paper_details[entry.key] %}{% capture venue %}{{ entry.booktitle | default: entry.journal | default: entry.school | default: entry.publisher }}{% endcapture %}
### {{ entry.title }}

- Authors: {% for author in entry.author_array %}{% if author.first %}{{ author.first }} {% endif %}{% if author.von %}{{ author.von }} {% endif %}{{ author.last }}{% unless forloop.last %}, {% endunless %}{% endfor %}
- Venue: {{ venue }}, {{ entry.year }}{% if entry.award %}
- Award: {{ entry.award }}{% endif %}
- Page: {{ item.url | absolute_url }}{% if details.doi %}
- DOI: https://doi.org/{{ details.doi }}{% endif %}{% if details.code %}
- Code: {{ details.code }}{% endif %}
{% if details.abstract %}
{{ details.abstract }}
{% endif %}{% endfor %}{% endfor %}{% endif %}
