import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar-wrapper">
            <div>
                <NavLink className="nav-link" to="/" >HOME</NavLink>
                <NavLink className="nav-link" to='/merch'>MERCH</NavLink>
                <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
                <NavLink className="nav-link" to='/shows'>SHOWS</NavLink>
                <NavLink className="nav-link" to='/contact'>CONTACT</NavLink>
            </div>
            <div>
                <SocialMediaBar />
            </div>
        </div>
    )
}