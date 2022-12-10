const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_includes/**/*.md',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_socials/*.md',
    './_projects/*.md',
    './_references/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: ['Impact', ...defaultTheme.fontFamily.sans],
			},
    },
  },
  plugins: []
}
