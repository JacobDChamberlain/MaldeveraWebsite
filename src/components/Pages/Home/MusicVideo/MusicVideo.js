import React from 'react';
import './MusicVideo.css';

export default function MusicVideo( { musicVideo } ) {
    return (
        <div className='music-video-wrapper'>
            <div className='music-video-player'>
                { musicVideo.title }
            </div>
            <div className='music-video-description'>
                { musicVideo.description }
            </div>
        </div>
    )
}