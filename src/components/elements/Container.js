import styled, { css } from 'styled-components';
import { fluidRange } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIERS = {
};

const Container = styled.div`
  max-width: 1400px;
  width: 80vw;

  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin: auto;
  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

export default Container;