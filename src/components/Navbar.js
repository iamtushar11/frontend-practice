import React from 'react'
import "./Navbar.css"
import logo from "../images/logo.svg"
export const Navbar = () => {
    return (
        <div className='modal' id='modal'>
            <nav>
                <a href='/' className='brand'><img src={logo} alt='logo' /></a>
                <ul className='navLinks'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact-Us</a></li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/'>Careers</a></li>
                </ul>
                <button className='btn'>Request Invite</button>
            </nav>
        </div>

    )
}
