import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIERS = {
  em: () => ({
    styles: css`
      ${tw`font-bold text-sm tracking-wide`};
  `}),

  hl: () => ({
    styles: css`
      ${tw`relative`}

      background: linear-gradient(to bottom,
        #E2E2E2,
        transparent
      );
  `}),

  undl: () => ({
    styles: css`
      ${tw`pb-4 border-b-2 border-color`}
  `}),
};

const Label = styled.span`
  ${tw`align-middle uppercase font-alt font-medium tracking-normal text-xs text-black`};
  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

export default Label;