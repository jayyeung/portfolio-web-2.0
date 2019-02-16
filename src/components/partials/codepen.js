import React, { Component } from 'react';

// Elements
import Link from '../elements/Link';

class SocialDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: null,
      profile: 'https://codepen.io/jyeung/'
    };
  }

  componentDidMount() {
    fetch('https://cpv2api.com/pens/popular/jyeung')
      .then(res => res.json().then(({ data }) => {
        const limit = 3;
        this.setState({ data: data.slice(0, limit) });
      }));
  }

  render() {
    const { data, profile } = this.state;
    return (
      <section className={this.props.className}>
        <div className='flex justify-between items-center'>
          <Link alt='alt' to={profile}>
            <em className='icon-codepen mr-8'/>
            Codepen
          </Link>
          <Link alt='primary' to={profile}>View all pens</Link>
        </div> 

        <div className='flex -mx-12 mt-16'>
          { data && data.map(item => (
            <a className='w-full shadow mx-12' href={item.link} target='_blank'>
              <img className='w-full h-full object-cover' src={item.images.small}/>
            </a>
          ))}
        </div>
      </section>
    );
  }
}
  
export default SocialDisplay;