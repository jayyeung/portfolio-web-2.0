import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

// Elements
import Label from '../elements/Label';

const List = styled.div`
  ${tw`inline-block`}
  span { display: none; }
  & > * { ${tw`mr-12`} }

  ${({ labelled }) => labelled && css`
    & > * { ${tw`block mr-none mb-8`} }
    span { display: inline-block; }
    & > *:not(:last-child)::after { 
      ${tw`mx-16`}
      content: '•'; 
    }
  `}
`;

const ListLink = List.Link = styled.a`
  ${tw`text-black p-none`}
  &:hover { ${tw`text-black-light`} }
`;

const Social = (props) => (
  <StaticQuery
  query = {graphql`
    query {
      dataJson {
        social {
          label
          to
        }
      }
    }
  `}

  render = {({ dataJson }) => (
    <List {...props}>
      { dataJson.social.map((node, i) => (
        <List.Link href={node.to} target='_blank' key={`social-${i}`}>
          <em className={`icon-${node.label.toLowerCase()} mr-12`}/>
          <Label className='p-none' alt='undl'>{node.label}</Label>
        </List.Link>
      )) }
    </List>
  )}/>
);
  
export default Social;