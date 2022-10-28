const path = require("path")
const dotenv = require("dotenv")

dotenv.config()

const prismicConfig = require("./prismic-configuration")

module.exports = {
  siteMetadata: {
    title: `Master Roofing & Engineering Services`,
    author: {
      name: `abhilash ss & sandeep c nath`,
    },
    // description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://w3opines.com/`,
    social: {
      twitter: `Master Roofing & Engineering Services`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          contactinfo: require("./custom_types/contactInfo.json"),
          contact_info: require("./custom_types/dummy.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Master Roofing & Engineering Services`,
        short_name: `Master Roofing`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#0a0e67`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
