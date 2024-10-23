import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMerchCart } from '../../context/MerchCartContext';
import './NavBar.css';


export default function NavBar() {
    const { openCart, cartQuantity } = useMerchCart();


    return (
        <div className="navbar-wrapper">
            <div className='navigation-links'>
                <NavLink className="my-nav-link" to="/" >HOME</NavLink>
                <NavLink className="my-nav-link" to='/tours'>TOUR</NavLink>
                <NavLink className="my-nav-link" to='/merch'>MERCH</NavLink>
                <NavLink className="my-nav-link" to='/about'>ABOUT</NavLink>
                <NavLink className="my-nav-link" to='/shows'>SHOWS</NavLink>
                <NavLink className="my-nav-link" to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    )
}