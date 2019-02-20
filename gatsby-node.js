const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

// Generate Slugs
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// Article Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve('src/templates/article.js');

  return graphql(`{
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/articles/"} },
      sort: {fields: [frontmatter___date], order: ASC}
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }`)
  .then(res => {
    if (res.errors) return Promise.reject(res.errors);
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};