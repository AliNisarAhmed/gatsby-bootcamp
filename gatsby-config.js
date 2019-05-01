module.exports = {
  siteMetadata: {
    title: 'Gatsby Bootcamp 2019',
    author: 'Ali Nisar Ahmed',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
  ]
}
