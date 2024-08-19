import React from "react";
import './Tours.css'


export default function Tours() {
    return (
        <div className="tours-wrapper">
            <div className="outer-border">
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
                            <li className="tour-li">11/14   Anaheim, CA</li>
                            <li className="tour-li">11/15   Los Vegas, NV</li>
                            <li className="tour-li">11/16   Phoenix, AZ</li>
                            <li className="tour-li">11/17   El Paso, TX</li>
                        </ul>
                        <img className="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt="vertical decoration" />
                    </div>
                </div>
            </div>
        </div>
    )
}