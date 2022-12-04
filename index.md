---
layout: default
title: "Über mich"
---
<main class="bg-repeat" style="background-image: url({{ "/assets/images/background.png" | relative_url }})">
	<div class="max-w-4xl mx-auto bg-white px-4">
		{% for section in site.about %}
			<section class="mt-4 p-4 even:bg-black even:text-white">
				<h3 class="text-xl mb-2">{{ section.heading }}</h3>
				<p>{{ section.content | markdownify }}</p>
			</section>
		{% endfor %} 
	</div>
</main>
