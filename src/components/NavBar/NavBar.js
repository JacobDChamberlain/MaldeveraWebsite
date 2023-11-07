import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar-wrapper">
            <NavLink to="/" >HOME</NavLink>
            <NavLink to='/merch'>MERCH</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/shows'>SHOWS</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
        </div>
    )
}