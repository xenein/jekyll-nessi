<main class="bg-cover md:mt-24 transform-none md:skew-y-6" style="background-image: url({{ "/assets/images/background.webp" | relative_url }})">
	<div class="max-w-4xl mx-auto bg-transparent transform-none md:-skew-y-6 shadow-inner shadow-white">
		{% for section in include.collection %}
			{% if section.web and section.web != "" and section.web != "nil" %}
				{% assign link_set = true %}
			{% endif %}
			<section class="py-6 last:pb-16 last:mb-4 bg-stone-50 odd:bg-stone-900 odd:text-stone-50 transform-none md:skew-y-6 even:shadow-inner even:shadow-stone-900"
			style="">
				<div class="p-16  transform-none md:-skew-y-6">
					{% if section.bigicon and section.bigicon != "" and section.bigicon != "nil" %}
						{% if link_set %}<a target="_blank" href="{{ section.web }}">{% endif %}
						<img src="{{ section.bigicon }}"
							class="hover:-scale-x-100 w-36 aspect-square {% cycle "float-left mr-4", "float-right ml-4" %}"
							/>
						{% if link_set %}</a>{% endif %}	
					{% endif %}
					<h3 class="text-xl text-center">
						{% if link_set %}<a target="_blank" href="{{ section.web }}">{% endif %}
						{{ section.heading }}
						{% if link_set %}</a>{% endif %}
					</h3>
					<p>{{ section.content | markdownify }}</p>
				</div>
			</section>
		{% endfor %} 
	</div>
</main>