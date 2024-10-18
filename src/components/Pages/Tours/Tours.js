import React, { useState } from "react";
import ReactModal from "react-modal";
import './Tours.css'

import tourFlyer2024 from './TourFlyers/fall-tour-2024.jpeg';
import TourCancel_01 from './TourFlyers/TourCancel_01.jpg';
import TourCancel_02 from './TourFlyers/TourCancel_02.jpg';



export default function Tours() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (src) => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="tours-wrapper">
            <img
                className="tour-flyer"
                src={TourCancel_01}
                alt="tour-flyer-2024"
                onClick={() => toggleModal(TourCancel_01)}
            />
            <img
                className="tour-flyer"
                src={TourCancel_02}
                alt="tour-flyer-2024"
                onClick={() => toggleModal(TourCancel_02)}
            />
            <div className="tour-cancel-description">
                Our Fall 2024 tour has been cancelled. Last Thursday, our drummer Stephan was in a motorcycle accident. He fractured two discs, and is unable to lift his left shoulder. As terrible as it is, things could have been much worse, and we’re fortunate he’s expected to make a full recovery. We’re sorry to all our friends and fans, but what matters most right now is that Stephan gets better. We want to thank all the venues/promoters involved for your understanding and kind wishes. We plan to shake things up in 2025!<br /><br />Catch our pals in Morgue Meat as they’ll still be playing a number of the shows for their Apocolyptic Visions tour. Please wish Stephan a speedy recovery! Remember to take care of yourselves and others.<br />Fuck on!
                <div className="tour-cancel-updated-at">Updated Thurs, Oct 17, 2024</div>
            </div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="tour-flyer-modal"
                overlayClassName="tour-flyer-overlay"
            >
                <img
                    src={TourCancel_01}
                    alt="tour-flyer-2024"
                    className="modal-flyer-image"
                    onClick={toggleModal}
                />
                <img
                    src={TourCancel_02}
                    alt="tour-flyer-2024"
                    className="modal-flyer-image"
                    onClick={toggleModal}
                />
            </ReactModal>
        </div>
    )
}


















//* cool-ass border & css i worked really hard on
//* maybe use in another section, around shows?
//* around every page? lol

{/* <div className="outer-border">
    <div className="mid-border">
        <div className="inner-border">
            <img className="vertical-decoration top" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="vertical decoration" />
            <h2 className="tour header">Fall 2024</h2>
            <ul className="tour-list">
                <li className="tour-li">11/1    Abiliene, TX</li>
                <li className="tour-li">11/2    Albuquerque, NM</li>
                <li className="tour-li">11/3    Denver, CO</li>
                <li className="tour-li">11/5    Salt Lake City, UT</li>
                <li className="tour-li">11/6    Boise, ID</li>
                <li className="tour-li">11/7    Seattle, WA</li>
                <li className="tour-li">11/8    Portland, OR</li>
                <li className="tour-li">11/9    Eureka, CA</li>
                <li className="tour-li">11/10   Oakland, CA</li>
                <li className="tour-li">11/12   Los Angeles, CA</li>
                <li className="tour-li">11/13   Anaheim, CA</li>
                <li className="tour-li">11/14   Las Vegas, NV</li>
                <li className="tour-li">11/15   Phoenix, AZ</li>
                <li className="tour-li">11/16   El Paso, TX</li>
            </ul>
            <img className="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="vertical decoration" />
        </div>
    </div>
</div> */}



// .tour-list {
//     padding: 0;
//     list-style-type: none;
// }

// .tour-li {
//     list-style: none;
// }

// .outer-border {
//     border: 2px solid #DE9B72;
//     padding: 6px;
//     width: 90%; /* Adjust width for mobile responsiveness */
//     max-width: 1200px; /* Prevent growing too large on big screens */
//     margin: 0 auto;
//     position: relative;
//     box-sizing: border-box; /* Ensure padding and border are included in the width */
// }

// .mid-border {
//     border: 6px solid #DE9B72;
//     padding: 6px;
//     width: 100%; /* Full width within the outer border */
//     box-sizing: border-box; /* Include padding and border in the width */
// }

// .inner-border {
//     border: 2px solid #DE9B72;
//     padding: 6px;
//     width: 100%; /* Full width within the mid border */
//     box-sizing: border-box; /* Ensure padding and border are included in the width */
// }

// /* Decorations */
// .vertical-decoration {
//     width: 80%; /* Responsive width */
//     max-width: 300px; /* Limit maximum size */
//     margin: 10px auto; /* Center vertically */
// }

// .vertical-decoration.bottom {
//     transform: rotate(180deg); /* Flip the graphic upside-down */
// }