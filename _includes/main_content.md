<main class="bg-cover mt-24 transform-none md:skew-y-6" style="background-image: url({{ "/assets/images/background.png" | relative_url }})">
	<div class="max-w-4xl mx-auto bg-transparent transform-none md:-skew-y-6 shadow-inner shadow-white">
		{% for section in include.collection %}
			<section class=" py-6 last:pb-16 last:mb-4 bg-stone-50 odd:bg-stone-900 odd:text-stone-50 transform-none md:skew-y-6 even:shadow-inner even:shadow-stone-900"
			style="">
				<div class="p-16  transform-none md:-skew-y-6">
					{% if section.bigicon and section.bigicon != "" and section.bigicon != "nil" %}
						<img src="{{ section.bigicon }}"
							class="w-36 aspect-square {% cycle "float-left mr-4", "float-right ml-4" %}"
							/>
					{% endif %}
					<h3 class="text-xl text-center">{{ section.heading }}</h3>
					<p>{{ section.content | markdownify }}</p>
				</div>
			</section>
		{% endfor %} 
	</div>
</main>