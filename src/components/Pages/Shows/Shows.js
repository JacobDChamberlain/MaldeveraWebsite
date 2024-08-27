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
        { flyer: '.'+may28th, alt: 'may_28th_2024_DoubleWide', date: 'May 28th, 2024', venue: 'DoubleWide', address: '3510 Commerce St, Dallas, TX', bands: ['Ascended Dead', 'Cognizant', 'Psychiatric Regurgitation'] },
        { flyer: '.'+may31st, alt: 'may_31st_2024_RubberGloves', date: 'May 31st, 2024', venue: 'Rubber Gloves', address: '411 E Sycamore St, Denton, TX 76205', bands: ['HERAKLEION', 'Morgue Meat', 'Kudu'] },
        { flyer: '.'+june4th, alt: 'june_4th_2024_SunshineBar', date: 'June 4th, 2024', venue: 'Sunshine Bar', address: '902 W Division St, Arlington, TX 76012', bands: ['Viogression', 'Yotuma'] },
        { flyer: '.'+june22nd, alt: 'june_22nd_2024_DoubleWide', date: 'June 22nd, 2024', venue: 'DoubleWide', address: '3510 Commerce St, Dallas, TX', bands: ['Spiter', 'Desolus', 'Nocturnal Wolf', 'Hofaker'] },
        { flyer: '.'+june27th, alt: 'june_27th_2024_HaltomTheater', date: 'June 27th, 2024', venue: 'Haltom Theater', address: '5601 E Belknap St, Haltom City, TX 76117', bands: ['Distain', 'Void', 'Odius', 'Kudu'] },
        { flyer: '.'+june30th, alt: 'june_30th_2024_CharliesStarLounge', date: 'June 30th, 2024', venue: 'Charlie\'s Star Lounge', address: '4319 Main St, Dallas, TX 75226', bands: ['Festival'] },
        { flyer: '.'+august16h, alt: 'august_16th_2024_DoubleWide', date: 'August 16th, 2024', venue: 'DoubleWide', address: '3510 Commerce St, Dallas, TX', bands: ['Oxygen Destroyer', 'Morgue Meat'] },
        { flyer: '.'+sept14th, alt: 'sept_14th_2024_GrowlRecords', date: 'September 14th, 2024', venue: 'Growl Records', address: '09 E Abram St, Arlington, TX 76010', bands: ['Festival'] },
        { flyer: '.'+fm2m, alt: 'sept_27th_2024_ZoundsBSide', date: 'September 27th, 2024', venue: 'Zounds B-Side', address: '10050 Shoreview Rd, Dallas, TX 75238', bands: ['Festival'] },
        { flyer: '.'+fm2m, alt: 'october_13th_2024_DoubleWide', date: 'October 13th, 2024', venue: 'DoubleWide', address: '3510 Commerce St, Dallas, TX', bands: ['Civil Serpents'] },
        { flyer: '.'+fm2m, alt: 'december_7th_2024_RenosChopShop', date: 'December 7th, 2024', venue: 'Reno\'s Chop Shop', address: '210 N Crowdus St, Dallas, TX 75226', bands: ['Festival'] }
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