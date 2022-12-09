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
