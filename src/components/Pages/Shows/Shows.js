import React from 'react';
import './Shows.css';

import may28th from './Flyers/may28thDWshow.jpg';
import may31st from './Flyers/may31RGshow.png';
import june4th from './Flyers/june4thSunshineBar.jpg'
import june22nd from './Flyers/june22ndDWshow.jpg'
import june27th from './Flyers/june27th.PNG';
import june30th from './Flyers/june30thCharliesShow.PNG';
import august16h from './Flyers/august16th.jpg';
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
                        w/ ASCENDED DEAD, COGNIZANT, PSYCHIATRIC REGURGITATION
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer' src={ may31st } alt='may_31st_2024_at_RubberGloves'></img>
                    <div className='show-description'>
                        May 31st, 2024<br />
                        @ Rubber Gloves<br />
                        w/ HERAKLEION, MORGUE MEAT,<br />KUDU
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ june4th } alt='june_4th_2024_at_SunshineBar'></img>
                    <div className='show-description'>
                        June 4th, 2024<br />
                        @ Sunshine Bar<br />
                        w/ VIOGRESSION,<br />YOTUMA
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer' src={ june22nd } alt='june_22nd_2024_at_DoubleWide'></img>
                    <div className='show-description'>
                        June 22nd, 2024<br />
                        @ DoubleWide<br />
                        w/ SPITER,<br />DESOLUS,<br />NOCTURNAL WOLF, HOFAKER
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ june27th } alt='june_27th_2024_at_RubberGloves'></img>
                    <div className='show-description'>
                        June 27th, 2024<br />
                        @ Haltom Theater<br />
                        w/ DISTAIN,<br />VOID,<br />ODIOUS,<br />KUDU
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ june30th } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        June 30th, 2024<br />
                        @ Charlie's Star Lounge<br />
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ august16h } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        August 16th, 2024<br />
                        @ DoubleWide<br />
                        w/ OXYGEN DESTROYER,<br />
                        MORGUE MEAT
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        September 13th, 2024<br />
                        @ Rubber Gloves<br />
                        w/ PRIMAL TYRANT
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        September 14th, 2024<br />
                        @ Growl Records<br />
                        FESTIVAL
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        September 27th, 2024<br />
                        @ Zounds B-Side<br />
                        FESTIVAL
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        October 1st, 2024<br />
                        @ TBD<br />
                        w/ YOTUMA
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        October 1st, 2024<br />
                        @ DoubleWide<br />
                        w/ CIVIL SERPENTS
                    </div>
                </li>
                <li className='show-date-li'>
                    <img className='show-flyer-0' src={ fm2m } alt='june_30th_2024_at_CharliesStarLounge'></img>
                    <div className='show-description'>
                        December 7th, 2024<br />
                        @ Reno's<br />
                        FESTIVAL
                    </div>
                </li>
            </ul>
        </div>
    )
}