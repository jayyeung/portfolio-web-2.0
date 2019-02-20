import React from 'react';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';
import Hr from '../elements/Hr';


// Main
const WorkItem = ({ data }) => {
  const { title, type, description, demo, source } = data;

  return (
    <div className='mt-60 xl:mt-80'>
      <div className='flex flex-wrap justify-between items-center'>
        <h4 className='w-full sm:w-auto'>
          <Link to={demo || source || '#'} alt='unstyled'>{title}</Link>
        </h4>
        <Label className='mb-4'>{type}</Label>
      </div>
      <p>{description}</p>

      <div className='mt-8'>
        { (demo) ? <Link className='mr-16' alt={['alt','primary']} to={demo}>Demo</Link> : ''}
        { (source) ? <Link alt='alt' to={source}>Source</Link> : ''}
      </div>
    </div>
  );
};

const Work = ({ data }) => (
  <Container id='work'>
    <Hr />

    <div className='flex flex-wrap -mx-12'>
      <div className='md:w-4/12 px-12 md:pr-60 mb-40'>
        <Label className='mb-8' alt='em'>My Work</Label>
        <p className='text-gray-darker mb-16'>
          Projects that I have been working on. 
          Check out my work on social media as well!
        </p>
        
      </div>

      <div className='md:w-8/12 px-12 xl:pr-120 -mt-60'> 
        { data.edges.map(({ node }, i) => (
          <WorkItem key={`work-${i}`} data={node.frontmatter} />
        )) }
      </div>
    </div>
  </Container>
);

export default Work;
