import React, { useState } from "react";
import ReactModal from 'react-modal';

import './Show.css';


export default function Show({idx, show}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = (src) => {
        console.log(`modal is open: ${isOpen}`)
        console.log(`image source: ${src}`)
        setIsOpen(!isOpen);
    }

    return (
        <li key={idx} className='show-date-li'>
            <img
                className='show-flyer'
                src={show.flyer}
                alt={show.alt}
                onClick={() => toggleModal(show.flyer)}
            />
            {/* bands go here (create component and pass in)*/}
            <div>placeholder text BAND LIST</div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className='flyer-modal'
                overlayClassName='flyer-overlay'
            >
                <button className="close-modal-button" onClick={toggleModal}>Close</button>
                <img src={show.flyer} alt='fullscreen flyer' className='modal-flyer-image' />
            </ReactModal>
        </li>
    )
}