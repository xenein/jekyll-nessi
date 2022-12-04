---
layout: default
title: "Über mich"
---
<nav>
	<ul class="flex flex-wrap items-center mb-4">
	    <li>
		<a href="#" class="mr-4 hover:underline md:mr-6 ">FiNessi</a>
	    </li>
	    <li>
		<a href="#" class="mr-4 hover:underline md:mr-6">Socials</a>
	    </li>
	    <li>
		<a href="#" class="mr-4 hover:underline md:mr-6 ">Projekte</a>
	    </li>
	    <li>
		<a href="#" class="mr-4 hover:underline md:mr-6">Referenzen</a>
	    </li>
	    <li>
		<a href="#" class="mr-4 hover:underline md:mr-6">Service</a>
	    </li>
	</ul>
</nav>

<header class="py-12 max-w-xl mx-auto text-center">
  <h1 class="text-4xl mb-8">
      FiNessi
  </h1>
  <h2 class="text-2xl">{{ page.title }}</h2>
</header>
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
<footer class="mt-4">
	<nav>   
		<ul class="flex flex-wrap justify-center items-center mb-4">
		    <li>
			<a href="#" class="mr-4 hover:underline md:mr-6 ">Kontakt</a>
		    </li>
		    <li>
			<a href="#" class="mr-4 hover:underline md:mr-6">Impressum</a>
		    </li>
		    <li>
			<a href="#" class="mr-4 hover:underline md:mr-6">Datenschutz</a>
		    </li>
		</ul>
	</nav>  

</footer>
