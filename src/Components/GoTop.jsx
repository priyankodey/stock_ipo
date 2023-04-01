import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const GoTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const goTopBtn = () => {
    window.scrollTo({top:0, behavior: "smooth"});
  }

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
        setIsVisible(true)
    }
    else {
        setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return() => window.removeEventListener("scroll",listenToScroll);
  }, [])
  

  return (
    <Wrapper>
        {isVisible && (
        <div className='top-btn' onClick={goTopBtn}>
            <FaArrowUp className='top-btn--icon' />
        </div>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .top-btn {
        position: fixed;
        bottom: 4rem;
        right: 2rem;
        z-index: 999;
        font-size: 1.5rem;
        width: 3rem;
        height: 3rem;
        background-color: ${({theme}) =>theme.colors.header };
        box-shadow: ${({theme}) =>theme.colors.boxShadow };
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid #fff;

        &--icon {
            animation: gototop 1.2s linear infinite alternate-reverse;
            color: #fff;
        }

        @keyframes gototop {
            0% {
                transform: translateY(-.3rem);
            }
            100% {
                transform: translateY(.3rem);
            }
        }


    }
`

export default GoTop