import React from 'react';
import styled from 'styled-components';

// Elements
import Label from '../elements/Label';

// Local Elements
const Name = ({ status, children }) => (
  <div>
    <Label className='block font-bold mt-12'>{children}</Label>
    { (status) ? <Label>{status}</Label> : '' }
  </div>
);

const ImageEl = styled.img`
  ${tw`w-full h-auto rounded-full mr-32`}
`;

const ImageBG = styled.div`
  ${tw`relative mr-32`}
  width: 5rem;
  height: 5rem;

  @keyframes spinCircle {
    to { transform: rotate(360deg); }
  }
  
  &::before {
    ${tw`absolute w-full h-full rounded-full`}
    content: '';
    top: -0.6rem; right: -0.6rem;
    z-index: -1;

    animation: spinCircle 4s linear infinite;
    background: linear-gradient(45deg,
      #E2E2E2 0%,
      #F6F6F6 100%
    );
  }
`;

const Image = (props) => (
  <ImageBG><ImageEl {...props}/></ImageBG>
);

// Class
const Avatar = styled.div`
  ${tw`flex flex-wrap items-center`}
`;

Avatar.name = Name;
Avatar.img = Image;

export default Avatar;