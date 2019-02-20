import React from 'react';
import { graphql } from 'gatsby';

// Assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// Blocks
import Articles from '../components/blocks/Articles';

// Partials
import About from '../components/partials/about';
import Intro from '../components/partials/intro';
import Work from '../components/partials/work';

// Main Page
const IndexPage = ({ data }) => (
  <Layout>
    <SEO 
      title={data.pagesJson.title} 
      keywords={data.pagesJson.keywords} 
    />

    <Intro data={data.dataJson} />
    <Work data={data.allMarkdownRemark} />
    <Articles />
    <About data={data.pagesJson} />
  </Layout>
);

// Query
export const query = graphql`
  query FrontPageQuery {
    dataJson {
      name
      e_mail
    }
    
    pagesJson {
      title
      keywords
      role
      experience {
        label
        skills
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/work/"} },
      sort: {fields: [frontmatter___order], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            demo
            source
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;
