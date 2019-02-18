import React, { Component } from 'react';
import styled from 'styled-components';

// Elements
import Link from '../elements/Link';

const PenContainer = styled.div`
  ${tw`flex overflow-hidden overflow-x-auto mt-16 -mx-12`}
`;

const PenItem = styled.a`
  ${tw`w-full shadow mx-12`}
  min-width: 250px;
`;

const PenImage = PenItem.img = styled.img`
  ${tw`w-full h-full object-cover`}
`;


class Codepen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: null,
      profile: 'https://codepen.io/jyeung/'
    };
  }

  componentDidMount() {
    fetch('https://cpv2api.com/pens/popular/jyeung')
      .then(res => (res.status === 200) && res.json().then(({ data }) => {
        const limit = 3;
        this.setState({ data: data.slice(0, limit) });
      }))
      .catch(err => {});
  }

  render() {
    const { data, profile } = this.state;
    return (
      <section className={this.props.className}>
        { (!data) ? '' : (
          <div className='flex justify-between items-center'>
            <Link alt='alt' to={profile}>
              <em className='icon-codepen mr-8'/>
              Codepen
            </Link>
            <Link alt='primary' to={profile}>View all pens</Link>
          </div> 
        )}

        <PenContainer className='-mx-12'>
          { data && data.map((item, i) => (
            <PenItem href={item.link} target='_blank' key={`pen-${i}`}>
              <PenItem.img src={item.images.small} />
            </PenItem>
          ))}
        </PenContainer>
      </section>
    );
  }
}
  
export default Codepen;