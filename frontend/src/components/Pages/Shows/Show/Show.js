import React, { useState } from "react";
import ReactModal from 'react-modal';
import './Show.css';


export default function Show({idx, show}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (src) => {
        setIsOpen(!isOpen);
    }

    return (
        <li key={idx} className='show-date-li'>
            <img
                className='show-flyer-0'
                src={show.flyer}
                alt={show.alt}
                onClick={() => toggleModal(show.flyer)}
            />
            <div className="show-description">
                {show.date}<br />
                @ <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(show.address)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='venue-map-link'
                >
                    {show.venue}
                </a><br />
                {show.bands.map((band, idx) => (
                    <div key={idx}>{
                        idx === 0 && band.toUpperCase() !== 'FESTIVAL'
                            ? 'w/ ' + band.toUpperCase()
                            : band.toUpperCase()
                    }</div>
                ))}
            </div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className='flyer-modal'
                overlayClassName='flyer-overlay'
            >
                <img
                    src={show.flyer}
                    alt='fullscreen flyer'
                    className='modal-flyer-image'
                    onClick={toggleModal}
                />
            </ReactModal>
        </li>
    )
}