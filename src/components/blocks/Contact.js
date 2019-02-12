import React, { Component } from 'react';
import styled from 'styled-components';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';
import Button from '../elements/Button';

// Local Elements
const ContactContainer = styled.div`
  ${tw`bg-white border border-primary text-center mt-120 md:mt-180 -mb-4`}
`;

const TextContainer = styled.div`
  ${tw`md:w-10/12 lg:w-7/12 px-24 pb-72 -mt-32 mx-auto`}
`;

const FormContainer = styled.div`
  ${tw`relative overflow-hidden my-52`} 
  height: 6rem;

  &::after {
    ${tw`absolute pin-t pin-b pin-l pin-r`}
    content: '';
    background: linear-gradient(to bottom,
      rgba(255,255,255, 0.5) 0%,
      white 100%
    );
  }

  ${({ expand }) => expand && `
    height: auto;
    &::after { display: none; }
  `}
`;

const ContactLabel = styled(Label)`
  ${tw`text-primary bg-white border border-primary py-12 px-32 mb-40`}
`;

const ContactForm = styled.form`
  ${tw`flex flex-wrap text-left -mx-12 -mb-24`}
`;

const ContactRow = ContactForm.row = styled.div`
  ${tw`w-full px-12 mb-24`}
  & > * { display: block; }
  & > input, & > textarea { width: 100%; }
`;

const HideFormButton = styled(Button)`
  ${tw`absolute`}
  top: 1rem; left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  ${({ hidden }) => hidden && `display: none;`}
`;

// Class
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formHidden: true
    };
  }

  toggleForm = () => { 
    const val = this.state.formHidden;
    this.setState({formHidden: !val});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { formHidden } = this.state;

    return (
      <Container> 
        <ContactContainer>
          <TextContainer>
            <ContactLabel alt='em'>Contact Me</ContactLabel>
            
            <h4 className='hidden sm:block mb-16'>Thanks for viewing my site!</h4>
            <p>If you have any concerns, feedback or want to say hi, you can contact me using my e-mail below! Thanks!</p>

            <div className='inline-block mt-16'>
              <Label className='mr-24' alt='hl'>E-mail</Label>
              <Link alt='primary'>contact@jason-yeung.me</Link>        
            </div>
            
            <FormContainer expand={!formHidden}>
              <HideFormButton hidden={!formHidden} onClick={this.toggleForm} alt='alt'>
                Use Contact Form
              </HideFormButton>
            
              <ContactForm onSubmit={this.onFormSubmit}>
                <ContactForm.row className='sm:w-6/12'>
                  <label>Name</label>
                  <input type='text'/>
                </ContactForm.row>

                <ContactForm.row className='sm:w-6/12'>
                  <label>E-mail</label>
                  <input type='text'/>
                </ContactForm.row>
                  
                <ContactForm.row>
                  <label>Message</label>
                  <textarea className='mb-24' type='text'/>
                  <div className='flex justify-between items-center'>
                    <Button alt='primary' type='submit'>Send message</Button>
                    <Link alt='alt' onClick={this.toggleForm}>Hide Form</Link>
                  </div>
                </ContactForm.row>
              </ContactForm>
            </FormContainer>

          </TextContainer>
        </ContactContainer>
      </Container>
    );
  }
}
  
  export default Contact;