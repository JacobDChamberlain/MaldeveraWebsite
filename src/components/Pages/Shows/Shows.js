import React from 'react';
import './Shows.css';

export default function Shows() {
    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>2024 Dates:</h2>
            <ul className='show-dates-ul'>
                <li className='show-date-li'>
                    <h3>May 28th 2024 @ Treebomb Park</h3>
                    <span>
                        description about venue and<br/>
                        other bands playing that night
                    </span>
                </li>
                <li className='show-date-li'>
                    <h3>May 31st 2024 @ Rubber Boots</h3>
                    <span>
                        otherdescription about different venue<br/>
                        and even sicker bands on the lineup
                    </span>
                </li>
            </ul>
        </div>
    )
}