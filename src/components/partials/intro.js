import React from 'react';
import styled from 'styled-components';
import 'url-search-params-polyfill';

// Assets
import Social from '../blocks/Social';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';

const Header = styled.header`
  ${tw`flex flex-wrap mt-60 md:mt-80 lg:mt-120 pt-120`}
`;

const Ref = styled.span`
  ${tw`text-primary capitalize`}
`;


// Main
const Shoutout = (() => {
  if (typeof window === 'undefined') return;
  const urlParams = new URLSearchParams(window.location.search);
  const ref = localStorage.getItem('ref') || urlParams.get('ref') || '';
  // Ceasar shifts 13
  const decode = str => (str.toUpperCase().replace(/[A-Z]/g, C => (
    String.fromCharCode((C.charCodeAt(0) % 26) + 65)))).toLowerCase();
  
  const decodeRef = decode(ref);
  if (decodeRef.slice(-6) === 'jyeung') {
    localStorage.setItem('ref', ref);
    return decodeRef.slice(0, decodeRef.length-6);
  }
})();

const Intro = ({ data }) => (
  <Container id='intro'>
    <Header>
      <h1 className='w-full'>
        { (Shoutout) ? <span>Hey <Ref>{Shoutout}</Ref>!</span> : 'Welcome there!' }
        <br/>
        My name's <span className='text-primary inline-block'>{data.name},</span><br/>
        I am an aspiring Front-end Developer.
      </h1>

      <div className='md:w-6/12 lg:w-4/12 pr-24 mt-32'>
        <Label className='mr-24' alt='hl'>E-mail</Label>
        <Link className='inline-block' to={`mailto:${data.e_mail}`}>{data.e_mail}</Link>                
      </div>
      
      <div className='md:w-6/12 lg:w-8/12 mt-24 sm:mt-32'>
        <Social className='flex flex-wrap' labelled />
      </div>
    </Header>
  </Container>
);

export default Intro;