import React from 'react';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
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
import Link from '../components/elements/Link';
import Label from '../components/elements/Label';

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

// converts custom React components in Markdown
// to actual components
const renderAST = new rehypeReact({
  createElement: React.createElement,
  components: { 
    'start': Label,
    a: (props) => <Link alt='primary' {...props}/>
  }
}).Compiler;

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

          <main className='text-center'>
            <Content>{renderAST(article.htmlAst)}</Content>
          </main>
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
      htmlAst
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default Article;