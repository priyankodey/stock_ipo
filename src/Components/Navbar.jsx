import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgCloseR, CgMenuBoxed } from "react-icons/cg";
import styled from 'styled-components';

const Navbar = () => {
  
    const [openNav, setOpenNav] = useState(false); 

  return (
    <NAV>
        <div className={openNav ? 'nav-bar active' : 'nav-bar' }>
            <ul className='nav-list'>
                <li>
                    <NavLink onClick={()=>setOpenNav(false)} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setOpenNav(false)} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setOpenNav(false)} to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setOpenNav(false)} to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className='mobile-menu'>
                <CgMenuBoxed name='icon-menu' className='mobile-nav-icon' onClick={()=>setOpenNav(true)} />
                <CgCloseR name='icon-close' className='icon-close mobile-nav-icon' onClick={()=>setOpenNav(false)}  />
            </div>
        </div>
    </NAV>
  )
}

const NAV = styled.nav`
    @media screen and (min-width: 768px) {
        .mobile-menu .mobile-nav-icon{
            display: none;
        }
    }   
    @media screen and (max-width: 767px) {    
        /* display: inline-block ; */
        .nav-list {
            display: flex;
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            top: 0;
            left: 0;
            margin-top: -10rem;
            background-color: ${({theme}) =>theme.colors.header };;
            z-index: 9999;
            position: absolute;
            transform: translate(100%);
        }
        .mobile-nav-icon {
            position: absolute;
            top: 1.5%;
            right: 4%;
            font-size: 2rem;
            color: #fff;
            z-index: 9999;
        }
        .icon-close {
            display: none;
        }
        .active .mobile-nav-icon {
            display: none;            
        }        
        .active .icon-close.mobile-nav-icon {
            display: inline-block;
        }
        .active .nav-list {
            display: flex;
            transform: translate(0%);
        }
    }
`

export default Navbar