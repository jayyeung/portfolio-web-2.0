import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import PropTypes from 'prop-types';
import { applyStyleModifiers, styleModifierPropTypes } from 'styled-components-modifiers';

const MODIFIERS = {
  alt: () => ({
    styles: css`
      ${tw`inline-block uppercase font-alt font-normal tracking-normal text-xs text-black`};
      padding-bottom: 0;
  `}),

  primary: () => ({
    styles: css`
      ${tw`text-primary border-primary-lighter`};

      &:hover {
        background: repeating-linear-gradient(to bottom,
          transparent,
          transparent 20%,
          #EEF1FF 0,
          #EEF1FF 80%,
          transparent 0,
          transparent
        );
      }
  `}),

  unstyled: () => ({
    styles: css`
      ${tw`border-none`};
      background: none;
  `}),
};

const LinkRoot = styled.span`
  ${tw`inline relative text-black pb-4 border-b-2 border-color`}
  cursor: pointer;

  &:hover {
    background: repeating-linear-gradient(to bottom,
      transparent,
      transparent 20%,
      #F6F6F6 0,
      #F6F6F6 80%,
      transparent 0,
      transparent
    );
  }

  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

const Link = ({ to, href, children, className, alt, ...other }) => {
  const linkTo = to || href;
  const internal = /^\/(?!\/)/.test(linkTo);
  return (
    <LinkRoot className={className} alt={alt}>
      {(internal) ? 
        <GatsbyLink to={linkTo} {...other}>{children}</GatsbyLink> :
        <a href={linkTo} target='_blank' {...other}>{children}</a>
      }
    </LinkRoot>
  );
};

Link.propTypes = {
  alt: styleModifierPropTypes(MODIFIERS),
  to: PropTypes.string,
  href: PropTypes.string
};

export default Link;