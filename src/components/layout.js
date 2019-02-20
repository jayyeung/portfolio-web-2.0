import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

// Assets
import '../css/fonts.css';
import '../css/style.css';
import Footer from './footer';

// Blocks
import Nav from './blocks/Nav';

// Elements
const Root = styled.div`
  ${tw`pt-60 md:pt-80 lg:pt-120 mt-120`}
`;

const Layout = ({ children }) => ( 
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Root>
        <Nav/>
        {children}
        <Footer/>
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
