# jekyll-nessi
Let's do this, Jekyll und Tailwind für Nessis Website.

## und wie geht das hier?

Wir brauchen eine Umgebung, in der wir Jekyll bauen können. Und für Tailwind brauchen noch yarn. 
in ruby brauchen wir bundler.

```bash
bundle install
yarn install
```

and we're good. Hopefully. 

### entwickeln?

```bash
bundle exec jekyll serve --watch --livereload
```
dann kann das im lokalen Browser auf 127.0.0.1:4000 begutachtet werden. Ruby schaut im Hintergrund, ob sich Dinge geändert haben, baut dann mit Jekyll automatisch neu und der Browser refresht das automatisch. Nice. 

- "Über mich", "Socials" und "Projekte" bauen sich über eine Collection und einen `_include`.
- "Service", "Referenzen", "Kontakt", "Impressum" und "Datenschutz" benutzen nicht den Include, sondern bauen sich komplett selbst 
- Die Links in allen drei Menüs (oben, unten und die Social-Buttons) generieren sich aus der jeweiligen Datei in `_data`


### bauen?

```bash
bundle exec jekyll build
```
dann liegt das ganze Ding in `_site/`

Die `config.yml` hat auch die baseurl - wenn sich die Domain ändert, wär ganz gut, das zu vermerken.

### deployment?

wir haben da eine github-action, die im wesentlichen die Dinge hier tut und dann das Ding mit rsync auf den Uberspace schiebt. Die ssh-Keys liegen als Secret im Repo.
