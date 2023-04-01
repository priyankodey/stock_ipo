import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Styles/Button'

const Error = () => {
  return (
    <Wrapper>
        <img src='assets/images/error_404.jpg' alt='Page not found' />
        <Button>
            <NavLink to="./">Go Back to Home</NavLink>
        </Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
        width: 40rem;
        margin: 2rem auto;
    }
`

export default Error