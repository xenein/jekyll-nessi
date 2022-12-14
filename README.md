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

entwickeln?

```bash
bundle exec jekyll serve --watch --livereload
```

bauen?

```bash
bundle exec jekyll build
```
dann liegt das ganze Ding in `_site/`

deployment?

wir haben da eine github-action, die im wesentlichen die Dinge hier tut und dann das Ding mit rsync auf den Uberspace schiebt. Die ssh-Keys liegen als Secret im Repo.
