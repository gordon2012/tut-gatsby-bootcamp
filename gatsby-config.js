module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp!',
    author: 'Gordon Doskas',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};
