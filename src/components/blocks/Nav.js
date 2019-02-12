import React from 'react';
import styled from 'styled-components';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';

// Local Elements
const Root = styled.nav`
  ${tw`absolute pin-t pin-l pin-r py-24 md:py-40`}
  z-index: 9999;
`;

const NavMenu = styled.div`
  ${tw`relative`}
  &:hover > * { display: initial; }
`;

const MenuContainer = styled.div`
  ${tw`absolute pin-r pt-16`}
  display: none;
  top: 100%;
  right: 50%;

  text-align: center;
  transform: translate(50%);
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

// Class
const Nav = () => (
  <Root>
    <Container className='flex items-center justify-between'>
      <div className='flex items-center'>
        {/*<span className='font-heading font-bold text-lg text-primary' alt='em'>Jason Yeung</span>*/} 
      </div>

      <NavMenu>
        <MenuButton>Menu</MenuButton>

        <MenuContainer>
          <Menu>
            <Menu.Li><Link alt={['alt', 'primary']}>Work</Link></Menu.Li>
            <Menu.Li><Link alt={['alt', 'primary']}>About</Link></Menu.Li>
            <Menu.Li><Link alt={['alt', 'primary']}>Contact</Link></Menu.Li>
          </Menu>
        </MenuContainer>
      </NavMenu>
    </Container>
  </Root>
);

export default Nav;