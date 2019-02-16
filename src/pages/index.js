import React from 'react';
import { graphql } from 'gatsby';

// Assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// Partials
import About from '../components/partials/about';
import Intro from '../components/partials/intro';
import Work from '../components/partials/work';

// Query
export const query = graphql`
  query FrontPageQuery {
    dataJson {
      name
      e_mail
    }
    
    pagesJson {
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

// Main Page
const IndexPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Portfolio" 
      keywords={['portfolio', 'Jason Yeung', 'Front-end Developer', 'design', 'development']} 
    />

    <Intro data={data.dataJson}/>
    <Work data={data.allMarkdownRemark}/>
    <About data={data.pagesJson}/>
  </Layout>
);

export default IndexPage;
