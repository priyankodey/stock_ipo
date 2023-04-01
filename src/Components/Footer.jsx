import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className='footer-top'>
        <div>
          <h3>Company Address</h3>  
          <address>          
          Room No - 8, 7th Floor,<br/>
          Stephe House, 6 BBD Bag,<br/>
          Kolkata - 700001, India<br/>
          Phone: <a href="tel:123-456-7890">123-456-7890</a>
          </address>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
        <div>
          <h3>Company Policy</h3>
          <ul>
            <li><NavLink to="#">Privacy Policy</NavLink></li>
            <li><NavLink to="#">Terms and Conditions</NavLink></li>
          </ul>
        </div>
        <div>
          <h3>Social Existence</h3>
          <ul>
            <li><NavLink to="#"><FaFacebookSquare /> Facebook</NavLink></li>
            <li><NavLink to="#"><FaTwitterSquare /> Twitter</NavLink></li>
            <li><NavLink to="#"><FaInstagramSquare /> Instagram</NavLink></li>
          </ul>
        </div>
      </section>
      <section className='footer-bottom'><small>&#169; Copyright {(new Date().getFullYear())}. All rights reserved.</small></section>
    </Wrapper>
  )
};

const Wrapper = styled.footer`
  .footer-top {
    padding: 3rem 2rem;
    margin-top: 5rem;
    color: #fff;
    background-color: ${({theme}) =>theme.colors.header };
    display: flex;
    justify-content: space-around;
    h3 {
      margin-bottom: .5rem;
    }
    ul {
      list-style-type: none;
    }
    a {
      color: #FFF;
      text-decoration: none;
    }
  }
  .footer-bottom {
    padding: 1rem 0;
    color: #fff;
    background-color: #4e5bb6;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media all and (max-width: ${({theme}) =>theme.media.mobile }) {
    .footer-top {
      flex-direction: column;
      gap: 2rem;
    }
  }  
`

export default Footer