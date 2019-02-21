import styled, { css } from 'styled-components';
import { applyStyleModifiers, styleModifierPropTypes } from 'styled-components-modifiers';

const MODIFIERS = {
  primary: () => ({
    styles: css`
      ${tw`bg-primary`}
      &:hover { ${tw`bg-primary-light`} }
  `}),
};

const Button = styled.button`
  ${tw`inline-block bg-black text-white text-sm py-24 px-32`};

  transition: background 0.2s;
  &:hover { ${tw`bg-black-light`} }
  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

Button.propTypes = {
  alt: styleModifierPropTypes(MODIFIERS)
};

export default Button;