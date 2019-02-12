import React from 'react';
import styled, { css } from 'styled-components';

// Elements
import Label from '../elements/Label';

// Local Elements
const List = styled.div`
  ${tw`inline-block`}
  span { display: none; }

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
  ${tw`text-black`}
  &:hover { ${tw`text-black-light`} }
`;

// Class
const Social = (props) => (
  <List {...props}>
    <List.Link href='http://Github.com' target='_blank'>
      <em className='icon-github mr-12'/>
      <Label alt='undl'>Github</Label>
    </List.Link>

    <List.Link href='http://Github.com' target='_blank'>
      <em className='icon-codepen mr-12'/>
      <Label alt='undl'>Codepen</Label>
    </List.Link>

    <List.Link href='http://Github.com' target='_blank'>
      <em className='icon-behance mr-12'/>
      <Label alt='undl'>Behance</Label>
    </List.Link>
  </List>
);
  
export default Social;