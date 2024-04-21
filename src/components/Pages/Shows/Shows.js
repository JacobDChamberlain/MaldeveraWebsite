import React from 'react';
import './Shows.css';

export default function Shows() {
    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>2024 Dates:</h2>
            <ul className='show-dates-ul'>
                <li className='show-date-li'>
                    <h3>May 28th 2024 @ DoubleWide</h3>
                    <span>
                        With ASCENDED DEAD
                    </span>
                </li>
                <li className='show-date-li'>
                    <h3>May 31st 2024 @ Rubber Gloves</h3>
                    <span>
                        With Herakleion
                    </span>
                </li>
            </ul>
        </div>
    )
}