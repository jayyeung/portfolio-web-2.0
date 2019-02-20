import React from 'react';
import styled from 'styled-components';

const ListRoot = styled.ul`
  ${tw`list-reset inline-block`}
  & > *:not(:last-child)::after {
    ${tw`mx-4`}
    content: '•';
  }
`;

const ListLi = ListRoot.li = styled.li`
  ${tw`inline-block`}
`;

const InlineList = ({ list, ...props }) => (
  <ListRoot {...props}>
    { list && list.map((item, i) => (
      <ListLi key={`inline-${i}`}>{item}</ListLi>
    )) }
  </ListRoot>
);

export default InlineList;