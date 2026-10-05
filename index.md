---
layout: default
title: Anurag Khandelwal
seo_title: Anurag Khandelwal | Computer Systems Researcher at Yale
description: Anurag Khandelwal is a Yale computer science professor researching distributed systems, computer networks, security, disaggregated memory, and AI infrastructure.
schema_type: ProfilePage
og_type: profile
---
# {{ site.data.profile.name }}
{: .page-title}

{{ site.data.profile.title }} of {{ site.data.profile.department | remove_first: "Department of " }} at {{ site.data.profile.institution }}
{: .page-lede}

<div class="content-box" markdown="1">

I lead the [NOVA Lab](/group/) in the [{{ site.data.profile.department }}]({{ site.data.profile.department_url }})
at [{{ site.data.profile.institution }}]({{ site.data.profile.institution_url }}). {{ site.data.research_focus.summary }}

_I am always looking for motivated graduate students and postdoctoral researchers!_

</div>

## Recent News

{% include news.html %}

## Research

Browse the [full list of publications](/publications/), or read about the main research directions below.

{% include research.html %}

## Teaching

{% include teaching.html %}

## Service

{% include service.html %}
