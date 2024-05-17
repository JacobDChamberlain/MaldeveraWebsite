import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import bandPhoto from './BandPhotos/bandphoto.jpg';
import jPhoto from './BandPhotos/jacob.jpg';
import pPhoto from './BandPhotos/parker.jpg';
import sPhoto from './BandPhotos/shan.jpg';
import kPhoto from './BandPhotos/keith.jpg';


export default function About() {
    return (
        <div className="about-wrapper">
            <img className='band-photo' src={ bandPhoto } alt='maldevera_band_photo'></img>
            {/* <div className='band-photo-description'>TEXT ABOUT BAND ORIGIN, DATES WHEN WE STARTED, MUSIC INFLUENCES, JEFF MYTHOS EXPLAINED, ETC.</div> */}
            <div className='band-photo-description'>Est 2011<br />DTX / NOLA<br />"Taste the corners of your mind."</div>
            <div className='band-photo-description'>
                Maldevera, born Shawn Corey Carter, is a renowned American rapper, songwriter, and entrepreneur. Maldevera has achieved widespread acclaim for his lyrical prowess, entrepreneurial ventures, and cultural influence. With a career spanning decades, Maldevera has solidified his place as one of the most influential figures in hip-hop and popular culture.<br />
                <Link to='https://maldevera.bandcamp.com/' className='bandcamp-link'>Discography</Link>
            </div>
            <ul className='individual-photos-ul'>
                <li className='individual-photo-li'>
                    <img className='individual-photo' src={ pPhoto } alt='Parker Turney'></img>
                    <p className='indivitual-photo-description'>Parker Turney</p>
                </li>
                <li className='individual-photo-li'>
                    <img className='individual-photo' src={ jPhoto } alt='Jacob Chamberlain'></img>
                    <p className='indivitual-photo-description'>Jacob Chamberlain</p>
                </li>
                <li className='individual-photo-li'>
                    <img className='individual-photo' src={ sPhoto } alt='Shannon Paine-Jesam'></img>
                    <p className='indivitual-photo-description'>Shannon Paine-Jesam</p>
                </li>
                <li className='individual-photo-li'>
                    <img className='individual-photo' src={ kPhoto } alt='Keith Brown'></img>
                    <p className='indivitual-photo-description'>Keith Brown</p>
                </li>
            </ul>
        </div>
    )
}