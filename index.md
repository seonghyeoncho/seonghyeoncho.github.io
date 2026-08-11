---
layout: default
---

## Biography

Seonghyeon Cho is a researcher/engineer. (Write your biography here.)

## Education

{% for e in site.data.education %}* **{{ e.period }}**: {{ e.degree }}, {{ e.school }}
{% endfor %}

## Work Experiences

{% for w in site.data.experience %}* **{{ w.period }}**: {{ w.org }}, {{ w.role }}
{% endfor %}

## Publications

Please see my <a href="{{ site.data.profile.scholar }}"><img class="icon-sm" src="images/googlescholar.svg" alt=""> Google Scholar profile</a> for the full list.

## Contact

<a href="mailto:{{ site.data.profile.email }}"><img class="icon" src="images/gmail.svg" alt="Email"></a><a href="{{ site.data.profile.github }}"><img class="icon" src="images/github.svg" alt="GitHub"></a><a href="{{ site.data.profile.linkedin }}"><img class="icon" src="images/linkedin.svg" alt="LinkedIn"></a><a href="{{ site.data.profile.scholar }}"><img class="icon" src="images/googlescholar.svg" alt="Google Scholar"></a>
