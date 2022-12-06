<main class="bg-cover" style="background-image: url({{ "/assets/images/background.png" | relative_url }})">
	<div class="max-w-4xl mx-auto bg-transparent">
		{% for section in site.socials %}
			<section class="first:pt-8 last:mb-4 bg-slate-300 odd:bg-black odd:text-white transform-none md:skew-y-6">
				<div class="p-12  transform-none md:-skew-y-6">
					<h3 class="text-xl text-center">{{ section.heading }}</h3>
					<p>{{ section.content | markdownify }}</p>
				</div>
			</section>
		{% endfor %} 
	</div>
</main>