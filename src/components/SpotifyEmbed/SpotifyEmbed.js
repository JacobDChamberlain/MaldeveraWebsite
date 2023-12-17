import React from "react";
import './SpotifyEmbed.css';


export default function SpotifyEmbed() {
    <>
        <div className="asdf">
            hello{ console.log( 'hello')}
        </div>
        <div className="spotify-wrapper">
            <iframe
                title="Maldevera - From Man To Mist"
                style="border-radius:12px"
                src={ "https://open.spotify.com/embed/album/5s208wsEJfmf57Wn0gSeLk?utm_source=generator"}
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {/* <iframe
                width="853"
                height="480"
                src={ `https://www.youtube.com/embed/${ embedId }` }
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube" // consider passing in title as props
            /> */}
        </div>
    </>
}