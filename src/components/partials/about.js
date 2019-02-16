import React from 'react';
import styled from 'styled-components';

// Assets
import avatar from '../../images/avatar-pic.png';

// Blocks
import Avatar from '../blocks/Avatar';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';

const Skills = styled.aside`
  ${tw`border sm:float-left md:float-right px-32 py-16 mb-32 sm:mb-none sm:mr-32 md:mr-none md:ml-32`}
`;

const SkillRow = Skills.row = styled.ul`
  ${tw`list-reset`}
`;

const SkillItem = Skills.item = styled.li`
  span { ${tw`text-gray-dark`} }
`;


// Main
const About = ({ data }) => (
  <Container id='about'>
    <div className='flex flex-wrap -mx-12'>
      <div className='lg:w-2/12 xl:w-3/12 px-12 md:pr-40 mb-40'>
        <Label className='mb-8' alt='em'>About Me</Label>
      </div>

      <div className='w-full lg:w-10/12 xl:w-9/12 px-12 mb-40'>

        <Skills>
          { data.experience.map(({ label, skills }, i) => (
            <div className='my-16' key={`row-${i}`}>
              <Label alt={['hl']}>{label}</Label>
              <Skills.row>
                <Skills.item>{skills}</Skills.item>
              </Skills.row>
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
            Currently, I am a Computer Science student at Simon Fraser University in BC, Canada. 
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
          <p>
            My eagerness to learn has also led me to discover design, and how something 
            looks and feels is just as important as how it should function. 
          </p>

          <div>
            
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default About;