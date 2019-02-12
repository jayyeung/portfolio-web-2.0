import React from 'react';
import styled from 'styled-components';

// Assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// Blocks
import Avatar from '../components/blocks/Avatar';
import Social from '../components/blocks/Social';

// Elements
import Container from '../components/elements/Container';
import Label from '../components/elements/Label';
import Link from '../components/elements/Link';

// Sub Elements
const Header = styled.header`
  ${tw`flex flex-wrap md:mt-60 lg:mt-120 pt-120`}
`;

const Hr = styled.hr`
  ${tw`my-60 lg:my-80`}
`;

const Section = styled.section`
  ${tw`flex flex-wrap -mx-12`}
`;

const Skills = styled.aside`
  ${tw`border sm:float-left md:float-right p-32 mb-32 sm:mr-32 md:mr-none md:ml-32`}
  max-width: 400px;
`;

const SkillRow = Skills.row = styled.ul`
  ${tw`list-reset`}
  &:not(last-child) { ${tw`mb-24`} }
`;

const SkillItem = Skills.item = styled.li`
  span { ${tw`text-gray-dark`} }
`;

const WorkItem = () => (
  <div className='mt-60 xl:mt-80'>
    <div className='flex flex-wrap justify-between'>
      <h4 className='w-full sm:w-auto'><a href='#'>Modular Type</a></h4>
      <Label className='text-gray-darker mb-4'>Javascript Plugin</Label>
    </div>
    <p className='mt-12'>
      Love Fluffy is a simple web game using plain JavaScript, SVGs, 
      and GSAP for the animations and interactions in the game.
    </p>

    <div className='mt-12'>
      <Link alt={['alt','primary']} to='http://google.ca'>Demo</Link>
      <Link className='ml-16' alt='alt'>Source</Link>
    </div>
  </div>
);

// Sub Components
const Introduction = () => (
  <Container>
    <Header>
      <h1 className='w-full'>
        Welcome there!<br/>
        My name's <span className='font-bold text-primary inline-block'>Jason Yeung,</span><br/>
        I am an aspiring Front-end Developer.
      </h1>

      <div className='md:w-6/12 lg:w-4/12 pr-24 mt-32'>
        <Label className='mr-24' alt='hl'>E-mail</Label>
        <Link className='inline-block'>contact@jason-yeung.me</Link>                
      </div>
      
      <div className='md:w-6/12 lg:w-8/12 mt-24 sm:mt-32'>
        <Social className='flex' labelled />
      </div>
    </Header>

    <Hr />
  </Container>
);

const Work = () => (
  <Container>
    <Section>
      <div className='lg:w-4/12 px-12 md:pr-60 mb-40'>
        <Label className='mb-8' alt='em'>My Work</Label>
        <p className='text-gray-darker mb-16'>
          Projects that I have been working on. 
          Check out my work on social media as well!
        </p>
        
      </div>

      <div className='lg:w-8/12 px-12 xl:pr-120 -mt-60'>
        <WorkItem />
      </div>
    </Section>

    <Hr />
  </Container>
);

const About = () => (
  <Container>
    <Section>
      <div className='lg:w-2/12 xl:w-3/12 px-12 md:pr-40 mb-40'>
        <Label className='mb-8' alt='em'>About Me</Label>
      </div>

      <div className='w-full lg:w-10/12 xl:w-9/12 px-12 mb-40'>

        <Skills>
          <Label alt={['hl']}>Main Skills</Label>
          <Skills.row>
            <Skills.item>HTML/CSS <span>–</span> SCSS</Skills.item>
            <Skills.item>JavaScript <span>–</span> React • Vue • JQuery</Skills.item>
          </Skills.row>
          
          <Label alt={['hl']}>Prior Experience</Label>
          <Skills.row>
            <Skills.item>Languages <span>–</span> Python • Java • Go • C/C++</Skills.item>
            <Skills.item>Design Tools <span>–</span> React • Vue</Skills.item>
          </Skills.row>
        </Skills>

        <div>
          <div className='flex flex-wrap items-center mb-32'>
            <Avatar>
              <Avatar.img src='http://placehold.it/500x500'/>
              <Avatar.name status='Feeling Curious'>Jason Yeung</Avatar.name>
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
    </Section>

    <Section className='flex-no-wrap'>
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
    </Section>
  </Container>
);


// Main Page
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} />

    <Introduction />
    <Work />
    <About />
  </Layout>
);

export default IndexPage;
