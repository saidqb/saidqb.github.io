---
layout: default-list
title: Link
description: Daftar url
permalink: /link
---

- [Development tools](/dev)


<ul>
	{% for cat in site.category-list %}
	<li><h2>{{ cat }}</h2></li>
	<ul class="mb-3">
		{% for page in site.pages %}
		{% if page.post == true %}
		{% for pc in page.categories %}
		{% if pc == cat %}
		<li><a href="{{ page.url }}">{{ page.title }}</a></li>
		{% endif %}   <!-- cat-match-p -->
		{% endfor %}  <!-- page-category -->
		{% endif %}   <!-- post-p -->
		{% endfor %}  <!-- page -->
	</ul>
	{% endfor %}  <!-- cat -->
</ul>