import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';
import Hr from '../elements/Hr';
import InlineList from '../elements/InlineList';

const ArticleItem = ({ data }) => {
  return (
    <div className='mt-60 xl:mt-80'>
      <div className='flex flex-wrap justify-between items-baseline'>
        <InlineList className='text-primary' list={data.frontmatter.tags}/>
        <time><Label>{data.frontmatter.date}</Label></time>
      </div>
      <h4 className='w-full sm:w-auto mt-8'>
        <Link alt='unstyled' to={data.fields.slug}>{data.frontmatter.title}</Link>
      </h4>

      <Link className='mt-12' alt='alt' to={data.fields.slug}>Read More</Link>
    </div>
  );
};

const Articles = ({ exclude }) => (
  <StaticQuery
  query = {graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/articles/"} },
        sort: {fields: [frontmatter___date], order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `}

  render = {({ allMarkdownRemark: articles }) => (
    <Container id='articles'>
      <Hr />

      <div className='flex flex-wrap -mx-12'>
        <div className='md:w-4/12 px-12 md:pr-60 mb-40'>
          <Label className='mb-8' alt='em'>Articles & Writing</Label>
          <p className='text-gray-darker mb-16'>
            Writing about my progress and things I'm
            learning about
          </p>
        </div>

        <div className='md:w-8/12 px-12 xl:pr-120 -mt-60'>
          { articles.edges.map((article, i) => {
            const slug = article.node.fields.slug;
            if (!exclude || !exclude.includes(slug))
              return <ArticleItem key={`article-${i}`} data={article.node}/>
          }) }
        </div>
      </div>
    </Container>
  )}/>
);

export default Articles;