import React from 'react';
import './Shows.css';

import may28th from './Flyers/may28thDWshow.jpg';
import may31st from './Flyers/may31RGshow.png';

export default function Shows() {
    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>Upcoming Shows:</h2>
            <ul className='show-dates-ul'>
                <li className='show-date-li'>
                    <img className='show-flyer' src={ may28th } alt='may_28th_2024_at_Doublewide'></img>
                    <div className='show-description'>
                        May 28th, 2024<br />
                        @ DoubleWide<br />
                        w/ ASCENDED DEAD
                    </div>
                </li>
                <li className='show-date-li'>
                <img className='show-flyer' src={ may31st } alt='may_31st_2024_at_RubberGloves'></img>
                    <div className='show-description'>
                        May 31st, 2024<br />
                        @ Rubber Gloves<br />
                        w/ HERAKLEION
                    </div>
                </li>
            </ul>
        </div>
    )
}