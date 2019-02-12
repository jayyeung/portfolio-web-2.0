import React from 'react';

// Assets
import Contact from './blocks/Contact';
import Social from './blocks/Social';

// Elements
import Container from './elements/Container';

const copyrightYear = (new Date()).getFullYear();
const Copyright = () => (
  <div className='bg-white pt-24 pb-16' style={{boxShadow: '0 -4px 6px rgba(225,225,225,0.4)'}}>
    <Container>
      <div className='relative text-center text-gray-darker text-sm'>
        <p className='absolute pin-l invisible sm:visible'>&copy; Copyright {copyrightYear}</p>
        <p className='absolute pin-r invisible md:visible'>Design & Code by Jason Yeung</p>

        <Social />
      </div>
    </Container>
  </div>
);

const Footer = () => (
  <footer className='bg-circle-pattern'>
    <Contact/>
    <Copyright/>    
  </footer>
);

export default Footer; 
  