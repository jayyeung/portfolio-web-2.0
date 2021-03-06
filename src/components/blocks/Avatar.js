import React from 'react';
import styled from 'styled-components';

// Elements
import Label from '../elements/Label';

const Name = ({ status, children }) => (
  <div>
    <Label className='block mt-12' alt='em'>{children}</Label>
    { (status) ? <Label alt='hl'>{status}</Label> : '' }
  </div>
);

const Image = styled.img`
  ${tw`w-full h-auto rounded-full shadow mr-32`}
  width: 5em;
  height: 5em;
`;

const Avatar = styled.div`
  ${tw`flex flex-wrap items-center`}
`;

Avatar.name = Name;
Avatar.img = Image;

export default Avatar;