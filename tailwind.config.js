module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        nessiPink: {
          100: '#BF0090',
          800: '#480051',
        }
      },
    },
  },
  plugins: []
}
