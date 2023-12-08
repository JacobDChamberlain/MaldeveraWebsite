import React from 'react';
import './SocialMediaBar.css';


const socialMediaLinks = {
    1: {
        name: 'instagram',
        links: [
            'https://www.instagram.com/maldevera',
            // Instagram circle image link here
        ],
    },
    2: {
        name: 'facebook',
        links: [
            'https://www.facebook.com/Maldevera',
            // Facebook circle image link here
        ],
    },
    3: {
        name: 'twitter',
        links: [
            'https://twitter.com/maldevera',
            // Twitter ( 'X' ) circle image link here
        ],
    },
    4: {
        name: 'spotify',
        links: [
            'https://open.spotify.com/artist/0CP5nqR6lT3g3StExsINGG',
            // Spotify circle image link here
        ],
    },
    5: {
        name: 'youtube',
        links: [
            'https://www.youtube.com/watch?v=kkldG6rwKF8&t=4s',
            // YouTube circle image link here
        ],
    },
    6: {
        name: 'appleMusic',
        links: [
            'https://music.apple.com/us/artist/maldevera/546342013'
            // Apple Music circle image link here
        ]
    }
}


/*
*  socialMediaLinks[i] = platform
*  socialMediaLinks[i][0] = link
*  socialMediaLinks[i][1] = circle image
*/


export default function SocialMediaBar() {
    return (
        <div className='social-media-bar-wrapper'>
            <ul className='social-media-circles'>
                { socialMediaLinks.map( link => (
                    <div>

                    </div>
                ) ) }
            </ul>
        </div>
    )
}