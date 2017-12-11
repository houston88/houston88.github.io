module.exports = {
plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
  siteMetadata: {
    title: `Houston's Landing`,
  }
}
