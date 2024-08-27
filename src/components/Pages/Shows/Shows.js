import React from 'react';
import Show from './Show/Show';
import './Shows.css';

import may28th from './Flyers/may28thDWshow.jpg';
import may31st from './Flyers/may31RGshow.png';
import june4th from './Flyers/june4thSunshineBar.jpg'
import june22nd from './Flyers/june22ndDWshow.jpg'
import june27th from './Flyers/june27th.PNG';
import june30th from './Flyers/june30thCharliesShow.PNG';
import august16h from './Flyers/august16th.jpg';
import sept14th from './Flyers/growlRecordsShowFlyer.jpeg'
import fm2m from './Flyers/from-man2mist-version2.png';

export default function Shows() {

    //* ADD BAND LIST TO EACH SHOW. bands: [Oxygen Destroyer, Morgue Meat, Psychiatric Regurgitation']
    //* then in description div, bands.forEach(bandName => bandName.ToUpper ) etc, to populate list
    //? have last band be preceded by '&'

    const shows = [
        { flyer: '.'+may28th, alt: 'may_28th_2024_DoubleWide', venue: 'DoubleWide', bands: ['Ascended Dead', 'Cognizant', 'Psychiatric Regurgitation'] },
        { flyer: '.'+may31st, alt: 'may_31st_2024_RubberGloves', venue: 'Rubber Gloves', bands: ['HERAKLEION', 'Morgue Meat', 'Kudu'] },
        { flyer: '.'+june4th, alt: 'june_4th_2024_SunshineBar', venue: 'Sunshine Bar', bands: ['Viogression', 'Yotuma'] },
        { flyer: '.'+june22nd, alt: 'june_22nd_2024_DoubleWide', venue: 'DoubleWide', bands: ['Spiter', 'Desolus', 'Nocturnal Wolf', 'Hofaker'] },
        { flyer: '.'+june27th, alt: 'june_27th_2024_HaltomTheater', venue: 'Haltom Theater', bands: ['Distain', 'Void', 'Odius', 'Kudu'] },
        { flyer: '.'+june30th, alt: 'june_30th_2024_CharliesStarLounge', venue: 'Charlie\'s Star Lounge', bands: [] },
        { flyer: '.'+august16h, alt: 'august_16th_2024_DoubleWide', venue: 'DoubleWide', bands: ['Oxygen Destroyer', 'Morgue Meat'] },
        { flyer: '.'+sept14th, alt: 'sept_14th_2024_GrowlRecords', venue: 'Growl Records', bands: ['Festival'] },
        { flyer: '.'+fm2m, alt: 'sept_27th_2024_ZoundsBSide', venue: 'Zounds B-Side', bands: ['Festival'] },
        { flyer: '.'+fm2m, alt: 'october_13th_2024_DoubleWide', venue: 'DoubleWide', bands: ['Civil Serpents'] },
        { flyer: '.'+fm2m, alt: 'december_7th_2024_RenosChopShop', venue: 'Reno\'s Chop Shop', bands: ['Festival'] }
    ];

    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>Upcoming Shows:</h2>
            <h4 className='shows-page-header'>(click or tap the venue name for directions)</h4>
            <ul className='show-dates-ul'>
                {shows.map((show, idx) => (
                    <Show show={show} idx={idx} />
                ))}
            </ul>
        </div>
    )
}