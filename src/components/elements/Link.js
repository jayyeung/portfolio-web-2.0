import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Link as GatsbyLink } from 'gatsby';


const MODIFIERS = {
  alt: () => ({
    styles: css`
      ${tw`inline-block uppercase font-alt font-normal tracking-normal text-xs text-black`};
      padding-bottom: 0;
  `}),

  primary: () => ({
    styles: css`
      ${tw`text-primary border-primary-lighter`};
  `}),
};

const LinkRoot = styled.div`
  ${tw`inline-block relative text-black pb-4 border-b-2 border-color`}
  cursor: pointer;

  &::before {
    ${tw`absolute pin-l w-full h-full`} 
    content: '';
    background: currentColor;
    opacity: 0;
    z-index: -1;
    transform: scaleY(0.7);
  }
  
  &:hover::before { opacity: 0.05; }
  &:active::before { opacity: 0.1; }

  ${applyStyleModifiers(MODIFIERS, 'alt')};
`;

const Link = ({ to, children, className, alt, ...other }) => {
  const internal = /^\/(?!\/)/.test(to);
  return (
    <LinkRoot className={className} alt={alt}>
      {(internal) ? 
        <GatsbyLink to={to} {...other}>{children}</GatsbyLink> :
        <a href={to} target='_blank' {...other}>{children}</a>
      }
    </LinkRoot>
  );
};

export default Link;