import React from 'react';
import styled from 'styled-components';

// Assets
import avatar from '../../images/avatar-pic.png';

// Blocks
import Avatar from '../blocks/Avatar';
import Codepen from './codepen';

// Elements
import Container from '../elements/Container';
import Link from '../elements/Link';
import Label from '../elements/Label';
import Hr from '../elements/Hr';
import InlineList from '../elements/InlineList';

const Skills = styled.aside`
  ${tw`border sm:float-left md:float-right px-32 py-16 mb-24 sm:mr-32 md:mr-none md:ml-32`}
  max-width: 22rem;
`;

// Main
const About = ({ data }) => (
  <Container id='about'>
    <Hr />

    <div className='flex flex-wrap -mx-12'>
      <div className='lg:w-2/12 xl:w-3/12 px-12 md:pr-40 mb-40'>
        <Label className='mb-8' alt='em'>About Me</Label>
      </div>

      <div className='w-full lg:w-10/12 xl:w-9/12 px-12 mb-40'>

        <Skills>
          { data.experience.map((item, i) => (
            <div className='my-16' key={`row-${i}`}>
              <Label alt={['hl']}>{item.label}</Label>
              <InlineList className='block' list={item.skills}/>
            </div> 
          ))}
        </Skills>

        <div>
          <div className='flex flex-wrap items-center mb-32'>
            <Avatar>
              <Avatar.img src={avatar}/>
              <Avatar.name status={data.role}>Jason Yeung</Avatar.name>
            </Avatar>
          </div>

          <p className='mb-32'>
            <Label className='inline mr-8'>I AM PASSIONATE ABOUT THE WEB.</Label> 
            I've been learning web development starting from HTML & JQuery to 
            JavaScript libraries like React and Vue on web apps. 
          </p>

          <p>
            Currently, I am a Computer Science student at{' '}
            <Link alt='primary' to='https://sfu.ca'>Simon Fraser University</Link> in BC, Canada. 
            I am looking to become a Front-end developer.
          </p>
        </div>
      </div>
    </div>

    <div className='flex -mx-12'>
      <div className='lg:w-4/12 lg:mr-24'></div>

      <div className='lg:w-8/12 xl:pr-12'>
        <blockquote className='mt-none lg:mr-none'>
          It's always satisfying creating something that everyday people can use, 
          whether it be a website or an application.
        </blockquote>

        <div className='lg:pr-120'>
          <p className='mb-32'>
            My eagerness to learn has also led me to discover design, and how something 
            looks and feels is just as important as how it should function. 
          </p>
        </div>
      </div>
    </div>

    <div className='flex flex-wrap -mx-12'>
      <div className='lg:w-2/12 xl:w-3/12 px-12 md:pr-40 mb-40'></div>
      <div className='w-full lg:w-10/12 xl:w-9/12 px-12 mb-40'>
        <Codepen />
      </div>
    </div>


  </Container>
);

export default About;