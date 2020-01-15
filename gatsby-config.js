module.exports = {
  siteMetadata: {
    title: "Accenture - Employee CarbonLab - Automatically calculate your carbon footprint and act accordingly!",
    author: "carbonlab.me",
    description: "Automatically calculate your carbon footprint and act accordingly!"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Carbonlab',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
