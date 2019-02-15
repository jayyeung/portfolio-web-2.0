import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// Assets
import avatar from '../images/avatar-pic.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

// Blocks
import Avatar from '../components/blocks/Avatar';
import Social from '../components/blocks/Social';

// Elements
import Container from '../components/elements/Container';
import Label from '../components/elements/Label';
import Link from '../components/elements/Link';

// Query
export const query = graphql`
  query FrontPageQuery {
    dataJson {
      name
      e_mail
    }
    
    pagesJson {
      role
      experience {
        label
        skills
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/work/"} },
      sort: {fields: [frontmatter___order], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            demo
            source
            description
          }
        }
      }
    }
  }
`;


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
  ${tw`border sm:float-left md:float-right px-32 py-16 mb-32 sm:mb-none sm:mr-32 md:mr-none md:ml-32`}
`;

const SkillRow = Skills.row = styled.ul`
  ${tw`list-reset`}
`;

const SkillItem = Skills.item = styled.li`
  span { ${tw`text-gray-dark`} }
`;

const WorkItem = ({ data }) => {
  const { title, type, description, demo, source } = data;

  return (
    <div className='mt-60 xl:mt-80'>
      <div className='flex flex-wrap justify-between'>
        <h4 className='w-full sm:w-auto'>
          <a href={demo || source || '#'} target='_blank'>{title}</a>
        </h4>
        <Label className='text-gray-darker mb-4'>{type}</Label>
      </div>
      <p>{description}</p>

      <div className='mt-8'>
        { (demo) ? <Link className='mr-16' alt={['alt','primary']} to={demo}>Demo</Link> : ''}
        { (source) ? <Link alt='alt' to={source}>Source</Link> : ''}
      </div>
    </div>
  );
};

// Sub Components
const Introduction = ({ data }) => (
  <Container id='intro'>
    <Header>
      <h1 className='w-full'>
        Welcome there!<br/>
        My name's <span className='text-primary inline-block'>{data.name},</span><br/>
        I am an aspiring Front-end Developer.
      </h1>

      <div className='md:w-6/12 lg:w-4/12 pr-24 mt-32'>
        <Label className='mr-24' alt='hl'>E-mail</Label>
        <Link className='inline-block' to={`mailto:${data.e_mail}`}>{data.e_mail}</Link>                
      </div>
      
      <div className='md:w-6/12 lg:w-8/12 mt-24 sm:mt-32'>
        <Social className='flex' labelled />
      </div>
    </Header>

    <Hr />
  </Container>
);

const Work = ({ data }) => (
  <Container id='work'>
    <Section>
      <div className='lg:w-4/12 px-12 md:pr-60 mb-40'>
        <Label className='mb-8' alt='em'>My Work</Label>
        <p className='text-gray-darker mb-16'>
          Projects that I have been working on. 
          Check out my work on social media as well!
        </p>
        
      </div>

      <div className='lg:w-8/12 px-12 xl:pr-120 -mt-60'>
        { data.edges.map(({ node }, i) => (
          <WorkItem key={`work-${i}`} data={node.frontmatter} />
        )) }
      </div>
    </Section>

    <Hr />
  </Container>
);

const About = ({ data }) => (
  <Container id='about'>
    <Section>
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
const IndexPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Portfolio" 
      keywords={['portfolio', 'Jason Yeung', 'Front-end Developer', 'design', 'development']} 
    />

    <Introduction data={data.dataJson}/>
    <Work data={data.allMarkdownRemark}/>
    <About data={data.pagesJson}/>
  </Layout>
);

export default IndexPage;
