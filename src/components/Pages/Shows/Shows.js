import React from 'react';
import './Shows.css';

import may28th from './Flyers/may28thDWshow.jpg';
import may31st from './Flyers/may31RGshow.png';
import fm2m from './Flyers/from-man2mist-version2.png';

export default function Shows() {
    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>Upcoming Shows:</h2>
            <ul className='show-dates-ul'>
                <li className='show-date-li'>
                    <img className='show-flyer' src={ may28th } alt='may_28th_2024_at_DoubleWide'></img>
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
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_4th_2024_at_SunshineBar'></img>
                    <div className='show-description'>
                        June 4th, 2024<br />
                        @ Sunshine Bar<br />
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_22nd_2024_at_DoubleWide'></img>
                    <div className='show-description'>
                        June 22nd, 2024<br />
                        @ DoubleWide<br />
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_27th_2024_at_RubberGloves'></img>
                    <div className='show-description'>
                        June 27th, 2024<br />
                        @ Rubber Gloves<br />
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        June 30th, 2024<br />
                        @ Charlie's Star Lounge<br />
                    </div>
                </li>
            </ul>
        </div>
    )
}