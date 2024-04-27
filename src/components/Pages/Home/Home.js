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

            <YouTubeEmbed className='music-video-youtube-embed' embedId='4ED07rhu3jg?si=Ft4T8YRWoER6YBW8' />
        </div>
    )
}

// embedIds
// Icon Music Video: 4ED07rhu3jg?si=Ft4T8YRWoER6YBW8
// From Man To Mist: kkldG6rwKF8?si=lKwV5JJKX3dArdou