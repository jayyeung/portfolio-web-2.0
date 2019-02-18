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

      name: '',
      email: '',
      message: '',
    };
  }

  toggleForm = () => { 
    const val = this.state.formHidden;
    this.setState({formHidden: !val});
  }

  formSent = () => sessionStorage.getItem('formSent');

  onFormSubmit = e => {
    const { 
      formHidden, formSending, 
      ...formInfo 
    } = this.state;
    
    e.preventDefault();
    if (this.formSent() || formSending) return;
    this.setState({ formSending: true });
    
    fetch("/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formInfo })
    })
    .then(res => {
      this.setState({ formSending: false });
      if (res.status !== 200) return;      
      sessionStorage.setItem('formSent', true);
      alert('sent!')
    })
    .catch(error => alert(error));
  }

  inputChange = e => this.setState({ [e.target.id]: e.target.value });
  
  render() {
    const { 
      formHidden, 
      name, email, message 
    } = this.state;

    return (
      <Container id='contact'> 
        <ContactContainer>
          <TextContainer>
            <ContactLabel alt='em'>Contact Me</ContactLabel>
            
            <h3 className='hidden sm:block mb-4'>Get in touch with me</h3>
            <p>
              If you have any concerns, feedback or want to say hi, 
              you can contact me using my e-mail below! Thanks!
            </p>

            <div className='inline-block mt-24'>
              <Label className='mr-24' alt='hl'>E-mail</Label>
              <Link alt='primary'>contact@jason-yeung.me</Link>        
            </div>
            
            <FormContainer expand={!formHidden} method='POST' data-netlify netlify-honeypot="bot">
              <HideFormButton hidden={!formHidden} onClick={this.toggleForm} alt='alt'>
                Use Contact Form
              </HideFormButton>
            
              <ContactForm onSubmit={this.onFormSubmit}>
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

          </TextContainer>
        </ContactContainer>
      </Container>
    );
  }
}
  
  export default Contact;