import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

// Assets
import '../css/fonts.css';
import '../css/style.css';
import Footer from './footer';

// Blocks
import Nav from './blocks/Nav';

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
      <div>
        <Nav />
        {children}
        <Footer/>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
