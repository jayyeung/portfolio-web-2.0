import styled from 'styled-components';

const Container = styled.div`
  ${tw`px-16`}
  margin: auto;
  max-width: 1480px;

  width: 90vw;
  @media screen and (min-width: 768px) { width: 80vw; }
`;

export default Container;