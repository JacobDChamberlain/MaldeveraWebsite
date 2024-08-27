import React, { useState } from 'react';
import ReactModal from 'react-modal';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFlyer, setSelectedFlyer] = useState('');

    const openModal = (flyer) => {
        console.log('Modal opened for: ', flyer);
        setSelectedFlyer(flyer);
        setIsModalOpen(true);
    };

    const shows = [
        { flyer: may28th, alt: 'may_28th_2024_DoubleWide' },
        { flyer: may31st, alt: 'may_31st_2024_RubberGloves' },
        { flyer: june4th, alt: 'june_4th_2024_SunshineBar' },
        { flyer: june22nd, alt: 'june_22nd_2024_DoubleWide' },
        { flyer: june27th, alt: 'june_27th_2024_HaltomTheater' },
        { flyer: june30th, alt: 'june_30th_2024_CharliesStarLounge' },
        { flyer: august16h, alt: 'august_16th_2024_DoubleWide' },
        { flyer: sept14th, alt: 'sept_14th_2024_GrowlRecords' },
        { flyer: fm2m, alt: 'sept_27th_2024_ZoundsBSide' },
        { flyer: fm2m, alt: 'october_13th_2024_DoubleWide' },
        { flyer: fm2m, alt: 'december_7th_2024_RenosChopShop' }
    ];

    return (
        <div className="shows-wrapper">
            <h2 className='shows-page-header'>Upcoming Shows:</h2>
            <h4 className='shows-page-header'>(click or tap the venue name for directions)</h4>
            <ul className='show-dates-ul'>
                {shows.map((show, idx) => (
                    <li key={idx} className='show-date-li'>
                        <img
                            className='show-flyer'
                            src={show.flyer}
                            alt={show.alt}
                            onClick={() => openModal(show.flyer)}
                        />
                        {/* bands go here (create component and pass in)*/}
                        <div>placeholder text BAND LIST</div>
                    </li>
                ))}
            </ul>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className='flyer-modal'
                overlayClassName='flyer-overlay'
            >
                <img src={selectedFlyer} alt='fullscreen flyer' className='modal-flyer-image' />
            </ReactModal>
        </div>
    )
}