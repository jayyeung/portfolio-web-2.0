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

      &::before {
        content: '';
        ${tw`absolute pin-b pin-r pin-l px-4`}
        z-index: -1;
        top: 0.1em;
        background: linear-gradient(
          to bottom,
          #EFEFEF,
          transparent
        );
      }
  `}),

  undl: () => ({
    styles: css`
      ${tw`pb-4 border-b-2 border-color`}
  `}),
};

const Label = styled.span`
  ${tw`inline-block align-middle uppercase font-alt font-medium tracking-normal text-xs text-black`};
  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

export default Label;