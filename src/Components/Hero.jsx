import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context';
import { Button } from '../Styles/Button';

const Hero = () => {

    const {headingName, mainImage, imageAlt} = useGlobalContext();

  return (
    <Wrapper>
        <div className="container ">
            <h2 className='com-heading'>{headingName}</h2>            
            <div className='grid grid-two-column'>
                <div className="hero-data">                    
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <Button>
                        <NavLink to="/contact">Get Started</NavLink>
                    </Button>
                </div>            
                <picture className="hero-image">
                    <img src={mainImage} alt={imageAlt} />
                </picture>
            </div>                        
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
    .hero-data {
        display: flex;
        margin-top: 5rem;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        padding: 0 4rem;
    }
    p {
        text-align: justify;
    }
    img {
        width: 15rem;
    }
    picture.hero-image {
        display: flex;
        justify-content: center;
        margin-top: 5rem;
    }
    @media all and (max-width: ${({theme}) =>theme.media.tab }) {
      .hero-data {
        margin-top: 2rem;
        padding: 0 2rem;
      }
      picture.hero-image {
        margin-top: 0;
      }
    }
    @media all and (max-width: ${({theme}) =>theme.media.mobile }) {
      .hero-data {
        order: 2;
      }
      picture.hero-image {
        margin-top: 2rem;
      }    
      img {
        width: 12rem;
      }
    }
`;

export default Hero