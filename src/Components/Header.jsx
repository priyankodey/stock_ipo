import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MyHeader>
        <NavLink to="/">
            <img src='/assets/images/logo.png' alt='Logo' />
        </NavLink>
        <Navbar />
    </MyHeader>
  )
}

const MyHeader = styled.header`
  padding: 0 2rem;
  height: 3.75rem;
  background-color: ${({theme}) =>theme.colors.header };
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
  }
  a.active, a:focus {
    text-decoration: underline;
  }
  a img {
    width: 6rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    list-style-type: none;
  }
`;

export default Header