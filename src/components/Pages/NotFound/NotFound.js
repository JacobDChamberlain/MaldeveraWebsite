import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';


export default function NotFound() {
    return (
        <NavLink className='not-found-wrapper' to='/'></NavLink>
    )
}