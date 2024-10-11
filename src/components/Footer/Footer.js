import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import './Footer.css';

import Guts from './audio/1Guts.wav';
import SusDigoCity from './audio/2SusDigoCity.wav';
import MouthfulOfConcrete from './audio/3MouthfulOfConcrete.wav';
import HydraulicInjectionInjury from './audio/4HydraulicInjectionInjury.wav';
import Jukai from './audio/5Jukai.wav';
import IconOfSin from './audio/6IconOfSin.wav';
import WinterPalace from './audio/7WinterPalace.wav';
import MoMurda from './audio/8gangstapat-momurda.mp3';

const albumTracks = [
    { title: 'Guts', path: Guts, },
    { title: 'Sus Digo City', path: SusDigoCity, },
    { title: 'Mouthful Of Concrete', path: MouthfulOfConcrete, },
    { title: 'Hydraulic Injection Injury', path: HydraulicInjectionInjury, },
    { title: 'Jukai', path: Jukai, },
    { title: 'Icon Of Sin', path: IconOfSin, },
    { title: 'Winter Palace', path: WinterPalace },
    { title: 'Gangsta Pat - Mo Murda', path: MoMurda }
]


export default function Footer() {
    const [selectedTrack, setSelectedTrack] = useState(null); // Initialize with null
    const [isMinimized, setIsMinimized] = useState(false);

    // Function to select a random track
    const getRandomTrack = () => {
        const randomIndex = Math.floor(Math.random() * albumTracks.length);
        return albumTracks[randomIndex].path;
    };

    // useEffect(() => {
    //     // Set a random track when the component mounts
    //     setSelectedTrack(getRandomTrack());
    // }, []); // Empty dependency array ensures it runs once

    useEffect(() => {
        const randomTrackIndex = Math.floor(Math.random() * albumTracks.length);
        setSelectedTrack(albumTracks[randomTrackIndex].path);
    }, []); // better randomness than above? (ask the robot why idk)

    const handleTrackSelection = (e) => {
        setSelectedTrack(e.target.value);
    };

    const toggleFooter = () => {
        setIsMinimized(!isMinimized);
    }

    return (
        <div className={`footer-wrapper ${isMinimized ? 'minimized' : ''}`}>
            <button className='footer-toggle' onClick={toggleFooter}>
                {isMinimized ? '▲' : '▼'}
            </button>
            {!isMinimized && (
                <>
                    <select className='song-select' onChange={handleTrackSelection} value={selectedTrack}>
                        {albumTracks.map((track, idx) => (
                            <option key={idx} value={track.path}>{track.title}</option>
                        ))}
                    </select>
                    {selectedTrack && <Player track={selectedTrack} />} {/* Check if selectedTrack is not null */}
                </>
            )}
        </div>
    );
}
