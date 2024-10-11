import React, { useState } from 'react';
import Player from '../Player/Player';
import './Footer.css';

import Guts from './audio/1Guts.wav';
import SusDigoCity from './audio/2SusDigoCity.wav';
import MouthfulOfConcrete from './audio/3MouthfulOfConcrete.wav';
import HydraulicInjectionInjury from './audio/4HydraulicInjectionInjury.wav';
import Jukai from './audio/5Jukai.wav';
import IconOfSin from './audio/6IconOfSin.wav';
import WinterPalace from './audio/7WinterPalace.wav';

const albumTracks = [
    { title: 'Guts', path: Guts, },
    { title: 'Sus Digo City', path: SusDigoCity, },
    { title: 'Mouthful Of Concrete', path: MouthfulOfConcrete, },
    { title: 'Hydraulic Injection Injury', path: HydraulicInjectionInjury, },
    { title: 'Jukai', path: Jukai, },
    { title: 'Icon Of Sin', path: IconOfSin, },
    { title: 'Winter Palace', path: WinterPalace }
]


export default function Footer() {
    const [selectedTrack, setSelectedTrack] = useState(albumTracks[4].path);
    const [isMinimized, setIsMinimized] = useState(false);

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
                        { albumTracks.map( (track, idx) => (
                            <option key={idx} value={track.path}>{track.title}</option>
                        ))}
                    </select>
                    <Player track={ selectedTrack } />
                </>
            )}
        </div>
    )
}