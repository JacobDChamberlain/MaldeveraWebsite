import React from 'react';
import { Link } from 'react-router-dom';
import './SocialMediaBar.css';

import instagramLogo from '../../images/social_media-icons/icon-ig.png';
import facebookLogo from '../../images/social_media-icons/icon-fb.png';
import twitterLogo from '../../images/social_media-icons/icon-tw.png';
import spotifyLogo from '../../images/social_media-icons/icon-spot.png';
import youtubeLogo from '../../images/social_media-icons/icon-yt.png';
import appleLogo from '../../images/social_media-icons/icon-apple.png';


const socialMediaLinks = [
    {
        name: 'instagram',
        url: 'https://www.instagram.com/maldevera',
        imagePath: instagramLogo
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/Maldevera',
        imagePath: facebookLogo
    },
    {
        name: 'twitter',
        url: 'https://twitter.com/maldevera',
        imagePath: twitterLogo
    },
    {
        name: 'spotify',
        url: 'https://open.spotify.com/artist/0CP5nqR6lT3g3StExsINGG',
        imagePath: spotifyLogo
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/watch?v=kkldG6rwKF8&t=21s',
        imagePath: youtubeLogo
    },
    {
        name: 'appleMusic',
        url: 'https://music.apple.com/us/artist/maldevera/546342013',
        imagePath: appleLogo
    }
];


export default function SocialMediaBar() {
    return (
        <ul className='social-media-links-ul'>
            { socialMediaLinks.map( link => (
                <Link to={ link.url } key={ link.name }>
                    <img
                        className='social-media-icon'
                        src={ link.imagePath }
                        alt='social media icon'
                        data-url={ link.url }
                    />
                </Link>
            ) ) }
        </ul>
    )
}