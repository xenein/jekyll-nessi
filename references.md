---
layout: default
title: "Referenzen"
---
<main class="bg-cover md:mt-24 transform-none md:skew-y-6" style="background-image: url({{ "/assets/images/background.webp" | relative_url }})">
	<div class="max-w-4xl mx-auto bg-transparent transform-none md:-skew-y-6 shadow-inner shadow-white ">
		{% for section in site.references %}
			<section class="py-6 last:pb-16 last:mb-4 bg-stone-50 odd:bg-stone-900 odd:text-stone-50 transform-none md:skew-y-6 even:shadow-inner even:shadow-stone-900"
			style="">
				<div class="p-10 transform-none md:-skew-y-6 pb-0">
                    <div class="flex flex-row">
                        <div class="pl-8 pt-4 basis-1/5">
                            <img src="{{ section.wall }}" class="h-2/3" />
                        </div>
                        <div class="basis-3/5">
                            <h3 class="text-xl text-center">
                                {{ section.heading }}
                            </h3>
                            <p class="pt-4">{{ section.content | markdownify }}</p>
                        </div>
                        <div class="pt-4 pl-4 basis-1/5">
                            <img src="{{ section.wall }}" class="h-2/3" />
                        </div>
                    </div>
				</div>
			</section>
		{% endfor %} 
	</div>
</main>