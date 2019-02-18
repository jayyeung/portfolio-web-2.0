import React, { Component } from 'react';
import styled from 'styled-components';

// Elements
import Container from '../elements/Container';
import Label from '../elements/Label';
import Link from '../elements/Link';
import Button from '../elements/Button';

// Local Elements
const ContactContainer = styled.div`
  ${tw`bg-white border border-primary text-center mt-120 -mb-4 md:mt-180`}
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

  ${({ hidden }) => hidden && `display: none;`}
  ${({ expand }) => expand && `
    height: auto;
    &::after { display: none; }
  `}
`;

const TextContainer = styled.div`
  ${tw`md:w-10/12 lg:w-7/12 px-24 pb-72 mx-auto -mt-32`}
`;

const ContactLabel = styled(Label)`
  ${tw`inline-block text-primary bg-white border border-primary py-12 px-32 mb-40`}
`;

const ContactForm = styled.form`
  ${tw`flex flex-wrap text-left -mx-12 -mb-24`}
`;

const FormMessageSent = styled.div`
  ${tw`flex flex-wrap justify-center items-center text-center my-80`}
  z-index: 1;
  ${({ hidden }) => hidden && `display: none;`}
`;

const Checkmark = styled.div`
  ${tw`relative inline-block rounded-full shadow bg-primary`}
  width: 5rem;
  height: 5rem;

  &::after {
    ${tw`absolute border-primary-lighter`}
    content: '';
    width: 30%;
    height: 50%;

    left: 50%; top: 45%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-width: 0.4em;
    border-left: none;
    border-top: none;
  }
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

// Main
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formHidden: true,
      formSending: false,
      formSent: false,

      name: '',
      email: '',
      message: '',
    };
  }

  componentDidMount() {
    // Check if message already sent in session
    this.setState({ formSent: !!sessionStorage.getItem('formSent') });
  }

  toggleForm = () => { 
    const val = this.state.formHidden;
    this.setState({formHidden: !val});
  }

  onFormSubmit = e => {
    const { 
      formHidden, 
      formSending, formSent, 
      ...formInfo 
    } = this.state;
    
    e.preventDefault();
    if (formSent || formSending) return;
    this.setState({ formSending: true });
    
    fetch("/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': e.target.getAttribute('name'), ...formInfo })
    })
    .then(res => {
      this.setState({ formSending: false });
      if (res.status !== 200) return;

      sessionStorage.setItem('formSent', true);
      this.setState({ formHidden: true, formSent: true });
    })
    .catch(error => alert(error));
  }

  inputChange = e => this.setState({ [e.target.id]: e.target.value });
  
  render() {
    const { 
      formHidden,
      formSent, 
      name, email, message 
    } = this.state;

    return (
      <Container id='contact'> 
        <ContactContainer className='-mb-4'>
          <TextContainer>
            <ContactLabel className='-mt-32' alt='em'>Contact Me</ContactLabel>
            
            <h3 className='hidden sm:block mb-4'>Get in touch with me</h3>
            <p>
              If you have any concerns, feedback or want to say hi, 
              you can contact me using my e-mail below! Thanks!
            </p>

            <div className='inline-block mt-24'>
              <Label className='mr-24' alt='hl'>E-mail</Label>
              <Link alt='primary'>contact@jason-yeung.me</Link>        
            </div>
            
            <FormContainer expand={!formHidden} hidden={formSent}>
              <HideFormButton hidden={!formHidden} onClick={this.toggleForm} alt='alt'>
                Use Contact Form
              </HideFormButton>
            
              <ContactForm onSubmit={this.onFormSubmit} name='contact'
                method='POST' data-netlify netlify-honeypot='bot'>
                <ContactForm.row className='hidden'>
                  <label htmlFor='bot'>Don't fill this out</label>
                  <input id='bot' name='bot'/>
                </ContactForm.row>

                <ContactForm.row className='sm:w-6/12'>
                  <label htmlFor='name'>Name</label>
                  <input id='name' name='name' type='text' value={name} onChange={this.inputChange} required/>
                </ContactForm.row>

                <ContactForm.row className='sm:w-6/12'>
                  <label htmlFor='email'>E-mail</label>
                  <input id='email' name='email' type='email' value={email} onChange={this.inputChange} required/>
                </ContactForm.row>
                  
                <ContactForm.row>
                  <label htmlFor='message'>Message</label>
                  <textarea id='message' name='message' className='mb-24' value={message} onChange={this.inputChange} required/>
                  <div className='flex justify-between items-center'>
                    <Button alt='primary' type='submit'>Send message</Button>
                    <Link alt='alt' onClick={this.toggleForm}>Hide Form</Link>
                  </div>
                </ContactForm.row>
              </ContactForm>
            </FormContainer>

            <FormMessageSent hidden={!formSent}>
              <div>
                <Checkmark />
                <h4 className='text-primary'>Message Sent!</h4>
                <p>
                  Thanks for the response!
                  I'll get in touch with you as soon as possible!
                </p>
              </div>
            </FormMessageSent>

          </TextContainer>
        </ContactContainer>
      </Container>
    );
  }
}
  
  export default Contact;