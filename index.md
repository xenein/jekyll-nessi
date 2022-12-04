---
layout: default
title: "Über mich"
---
<main class="bg-cover" style="background-image: url({{ "/assets/images/background.png" | relative_url }})">
	<div class="max-w-4xl mx-auto bg-white px-4">
		{% for section in site.about %}
			<section class="first:mt-4 last:mb-4 p-x-4 bg-slate-300 even:bg-black even:text-white transform-none md:-skew-y-6">
				<div class="p-8  transform-none md:skew-y-6">
					<h3 class="text-xl text-center">{{ section.heading }}</h3>
					<p>{{ section.content | markdownify }}</p>
				</div>
			</section>
		{% endfor %} 
	</div>
</main>
