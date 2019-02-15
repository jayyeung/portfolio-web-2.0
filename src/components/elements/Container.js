import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIERS = {
};

const Container = styled.div`
  ${tw`px-16`}
  width: 90vw;
  max-width: 1400px;
  
  margin: auto;
  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

export default Container;