import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button'

const Contact = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2 className='com-heading'>Contact Us</h2>
        <div className='grid grid-two-column contact-map'>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7228211392307!2d91.27620251478494!3d23.792882684568454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f4900fffead1%3A0x669c4672852f8b10!2sAgartala%20Railway%20Station!5e0!3m2!1sen!2sin!4v1672306917210!5m2!1sen!2sin" width="100%" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='contact-form'>
            <form>
              <input type="text" name='usrname' placeholder='Enter your name' autoComplete='off' required />
              <input type="email" name='usremail' placeholder='Enter your email' autoComplete='off' required />
              <textarea name="message" placeholder='Write your query or suggestion' cols="40" rows="8" autoComplete='off' required ></textarea>
              <input type="submit" className='btn' value="Submit" />
            </form>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-map {
    padding-top: 2rem;
  }
  .contact-form {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    width: 24rem;
  }
  input, textarea {
    width: 100%;
  }
  .btn {
    font-size: 1.1rem;
  }
  input[type="submit"] {
    cursor: pointer;
    background-color: #0276FF;
    border-radius: 0.5rem;
    border-style: none;
    box-shadow: ${({theme}) =>theme.colors.boxShadow };
    color: #fff;
    width: 10rem;
    &:active, &:hover {
      background-color: #006AE8;
      transform: scale(.99);
    }
  }

  @media all and (max-width: ${({theme}) =>theme.media.tab }) {
    .contact-form {
      padding: 0 1rem;
      align-items: flex-start;
    }
  }
  @media all and (max-width: ${({theme}) =>theme.media.mobile }) {
    .contact-form {
      padding: 2rem 1rem;
    }
    form {
      width: 100%;
    } 
  }
`
export default Contact