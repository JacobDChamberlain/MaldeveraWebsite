import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar-wrapper">
            <NavLink className="nav-link" to="/" >HOME</NavLink>
            <NavLink className="nav-link" to='/merch'>MERCH</NavLink>
            <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
            <NavLink className="nav-link" to='/shows'>SHOWS</NavLink>
            <NavLink className="nav-link" to='/contact'>CONTACT</NavLink>
        </div>
    )
}