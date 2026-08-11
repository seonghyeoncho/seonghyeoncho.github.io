---
layout: default
---

## Biography

<img class="profile-picture" src="images/profile_padded.jpg">

Seonghyeon Cho is a researcher and engineer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Research Interests

{% for i in site.data.interests %}* {{ i }}
{% endfor %}

## Education

{% for e in site.data.education %}* **{{ e.period }}**: {{ e.degree }}, {{ e.school }}{% if e.logo %} <img class="edu-logo" src="{{ e.logo }}" alt="">{% endif %}
{% endfor %}

## Work Experiences

{% for w in site.data.experience %}* **{{ w.period }}**: {{ w.org }}, {{ w.role }}
{% endfor %}

## Publications

Please see my <a href="{{ site.data.profile.scholar }}"><img class="icon-sm" src="images/googlescholar.svg" alt=""> Google Scholar profile</a> for the full list.

## Contact

<a href="mailto:{{ site.data.profile.email }}"><img class="icon" src="images/gmail.svg" alt="Email"></a><a href="{{ site.data.profile.github }}"><img class="icon" src="images/github.svg" alt="GitHub"></a><a href="{{ site.data.profile.linkedin }}"><img class="icon" src="images/linkedin.svg" alt="LinkedIn"></a><a href="{{ site.data.profile.scholar }}"><img class="icon" src="images/googlescholar.svg" alt="Google Scholar"></a>
