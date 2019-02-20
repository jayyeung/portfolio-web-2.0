import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// Assets
import Layout from '../components/layout';
import SEO from '../components/seo';
import circle from '../images/half-circle.svg';

// Blocks
import Articles from '../components/blocks/Articles';

// Elements
import Container from '../components/elements/Container';
import InlineList from '../components/elements/InlineList';

const Content = styled.div`
  ${tw`inline-block md:w-8/12 xl:w-6/12 text-left mb-40`}

  & > *:not(:last-child) { ${tw`block mb-32`} }

  h1, h2, h3, h4, h5, h6 {
    ${tw`font-bold`}
    margin: 1em 0 0.1em !important;
  }

  img { ${tw`my-32 shadow`} }

  & > *:last-child::after {
    ${tw`inline-block bg-primary ml-8`}
    content: '';
    width: 0.6em;
    height: 0.8em;
  }
`;

const Divider = styled.div`
  ${tw`m-auto mt-60 mb-40`} 
  background: url(${circle}) no-repeat center;
  background-size: contain;
  width: 1.2rem;
  height: 1.2rem;
`;

const Article = ({ data }) => {
  const article = data.markdownRemark;
  return (
    <Layout>
      <SEO 
        title={article.frontmatter.title} 
        keywords={article.frontmatter.tags} 
      />

      <Container>
        <article>
          <header className='text-center'>
            <InlineList className='text-primary' list={article.frontmatter.tags}/>
            <h2>{article.frontmatter.title}</h2>
            <time>{article.frontmatter.date}</time>
          </header>

          <Divider/>

          <section className='text-center'>
            <Content dangerouslySetInnerHTML={{__html: article.html}} />
          </section>
        </article>
      </Container>

      <Articles />
    </Layout>
  )
};

// Query
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default Article;