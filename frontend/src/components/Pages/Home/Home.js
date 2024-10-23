import React from 'react';
import YouTubeEmbed from '../../YouTubeEmbed/YouTubeEmbed';
import './Home.css';

export default function Home() {

    return (
        <div className="home-wrapper">
            <div className='yt-embed-wrapper'>
                <YouTubeEmbed className='music-video-youtube-embed' embedId='Lq7NMF8ZXJg?si=EMYYbxr63aFeqDZ6' />
                <YouTubeEmbed className='music-video-youtube-embed' embedId='4ED07rhu3jg?si=Ft4T8YRWoER6YBW8' />
                {/* <YouTubeEmbed className='music-video-youtube-embed' embedId='kkldG6rwKF8?si=lKwV5JJKX3dArdou' /> */}
            </div>
        </div>
    )
}

// embedIds
// Jukai Music Video: Lq7NMF8ZXJg?si=EMYYbxr63aFeqDZ6
// Icon Music Video: 4ED07rhu3jg?si=Ft4T8YRWoER6YBW8
// From Man To Mist: kkldG6rwKF8?si=lKwV5JJKX3dArdou