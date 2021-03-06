import React from 'react';
import styled from 'styled-components';
import 'url-search-params-polyfill';
import { encrypt, decrypt } from 'caesar-shift';

// Assets
import Social from '../blocks/Social';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';

const Header = styled.header`
  ${tw`flex flex-wrap`}
`;

const Ref = styled.span`
  ${tw`text-primary capitalize`}
`;

// Main
const Shoutout = (() => {
  if (typeof window === 'undefined') return;
  const urlParams = new URLSearchParams(window.location.search);
  const ref = localStorage.getItem('ref') || urlParams.get('ref') || '';
  const decryptRef = decrypt(12, ref);
  
  if (decryptRef.slice(-6) === 'jyeung') {
    localStorage.setItem('ref', ref);
    return decryptRef.slice(0, decryptRef.length-6);
  }
})();

const getShoutout = (() => {
  if (typeof window === 'undefined') return;
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('getref')) {
    const ref = prompt('Enter referral name');
    const url = window.location.href.split('?')[0];
    const encryptRef = encrypt(12, ref+'jyeung');

    localStorage.removeItem('ref');
    return alert(`${url}?ref=${encryptRef}`);
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