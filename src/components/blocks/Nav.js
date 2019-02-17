import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";

// Assets
import logo from '../../images/logo.svg';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';

const Root = styled.nav`
  ${tw`absolute pin-t pin-l pin-r py-24 md:py-40`}
  z-index: 9999;
`;

const NavMenu = styled.div`
  ${tw`relative`}
  &:hover > * { 
    display: initial;

    top: 100%;
    opacity: 1;
    visibility: visible;
  }
`;

const MenuContainer = styled.div`
  ${tw`absolute pin-r pt-16`}
  top: 90%;
  right: 50%;

  transition: all 0.25s;
  text-align: center;
  transform: translate(50%);

  visibility: hidden;
  opacity: 0;
`;

const Menu = styled.ul`
  ${tw`list-reset p-24 border border-gray bg-white`}
`;

const MenuButton = styled(Label)`
  cursor: pointer;
`;

const MenuItem = Menu.Li = styled.li`
  ${tw`block text-sm border-none mb-12`}
`;

const Logo = styled.img`
  width: 3.5rem;
`;

// Main
const Nav = () => (
  <StaticQuery
  query = {graphql`
    query {
      allNavJson {
        edges {
          node {
            label
            to
          }
        }
      }
    }
  `}
  
  render = {({ allNavJson }) => (
    <Root>
      <Container className='flex items-center justify-between'>
        <Link className='flex items-center' to='/' alt='primary'>
          <Logo src={logo} alt='logo' />
        </Link>

        <NavMenu>
          <MenuButton>
            <em className='icon-menu mr-4'/>
            Menu
          </MenuButton>

          <MenuContainer>
            <Menu>
            { allNavJson.edges.map(({ node }, i) => (
                <Menu.Li key={`navLink-${i}`}>
                  <Link to={node.to} alt={['alt','primary']}>{node.label}</Link>
                </Menu.Li>
            )) }
            </Menu>
          </MenuContainer>
        </NavMenu>
      </Container>
    </Root>
  )}/>
);

export default Nav;