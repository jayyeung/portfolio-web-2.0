module.exports = {
  siteMetadata: {
    title: `Jason Yeung`,
    description: `Personal portfolio for Jason Yeung`,
    author: `Jason Yeung`,
  },
  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 895,
              quality: 80
            }
          },
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`], // Purge only tailwind
      },
    },
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Domine:400,700`, `Barlow:500,500i,600,600i`, `Fira Mono:500`]
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134601382-1',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.png`,
        background: '#fff',
        theme_color: '#fff',
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
