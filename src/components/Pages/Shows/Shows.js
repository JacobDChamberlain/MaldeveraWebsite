import React from 'react';
import './Shows.css';

export default function Shows() {
    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>Upcoming Shows:</h2>
            <ul className='show-dates-ul'>
                <li className='show-date-li'>
                    <span>
                        May 28th, 2024<br />
                        @ DoubleWide<br />
                        w/ ASCENDED DEAD
                    </span>
                </li>
                <li className='show-date-li'>
                    <span>
                        May 31st, 2024<br />
                        @ Rubber Gloves<br />
                        w/ HERAKLEION
                    </span>
                </li>
            </ul>
        </div>
    )
}