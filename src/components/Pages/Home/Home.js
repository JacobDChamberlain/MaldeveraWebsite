import React from 'react';
// import MusicVideo from './MusicVideo/MusicVideo';
import YouTubeEmbed from '../../YouTubeEmbed/YouTubeEmbed';
import './Home.css';

export default function Home() {

    return (
        <div className="home-wrapper">
            <div className='yt-embed-wrapper'>
                <YouTubeEmbed className='music-video-youtube-embed' embedId='4ED07rhu3jg?si=Ft4T8YRWoER6YBW8' />
            </div>
        </div>
    )
}

// embedIds
// Icon Music Video: 4ED07rhu3jg?si=Ft4T8YRWoER6YBW8
// From Man To Mist: kkldG6rwKF8?si=lKwV5JJKX3dArdou