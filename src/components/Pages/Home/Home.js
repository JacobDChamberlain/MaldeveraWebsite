import React from 'react';
// import MusicVideo from './MusicVideo/MusicVideo';
import YouTubeEmbed from '../../YouTubeEmbed/YouTubeEmbed';
import './Home.css';

export default function Home() {
    // const musicVideos = [
    //     {
    //         title: 'JUKAI MUSIC VIDEO',
    //         description: 'TEXT ABOUT THE VIDEO, DIRECTED BY WY MAN,SHOT IN NOLA. SONG IS ABOUT ETC. SUICIDE PREVENTION HOTLINE ETC.'
    //     },
    //     {
    //         title: 'ICON MUSIC VIDEO',
    //         description: 'TEXT ABOUT THE VIDEO, DIRECTED BY WILL MECCA. SONG ABOUT DOOM 2 ETC'
    //     }
    // ];

    return (
        <div className="home-wrapper">
            {/* { musicVideos.map( musicVideo => (
                <MusicVideo musicVideo={ musicVideo } />
            ))} */}

            <YouTubeEmbed embedId='kkldG6rwKF8?si=lKwV5JJKX3dArdou' />
        </div>
    )
}