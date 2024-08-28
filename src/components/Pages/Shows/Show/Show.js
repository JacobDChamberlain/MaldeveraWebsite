import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './Show.css';

export default function Show({ idx, show }) {
  return (
    <li key={idx} className='show-date-li'>
      <TransformWrapper
        options={{
          limitToBounds: false,  // Allow the image to go beyond the wrapper's boundaries
          minScale: 1,           // Start at 100% scale
          maxScale: 5,           // Set your desired maximum zoom level
        }}
        pan={{
          paddingSize: 0, // Prevent adding padding while panning
        }}
        wheel={{ disabled: true }} // Disable mouse wheel zoom
        doubleClick={{ disabled: true }} // Disable double-click zoom
      >
        <TransformComponent>
          <img
            className='show-flyer-0'
            src={show.flyer}
            alt={show.alt}
          />
        </TransformComponent>
      </TransformWrapper>
      {/* bands go here (create component and pass in) */}
      <div className="show-description">
        {show.date}<br />
        @ <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(show.address)}`}
          target='_blank'
          rel='noopener noreferrer'
          className='venue-map-link'
        >
          {show.venue}
        </a><br />
        {show.bands.map((band, idx) => (
          <div key={idx}>{
            idx === 0 && band.toUpperCase() !== 'FESTIVAL'
              ? 'w/ ' + band.toUpperCase()
              : band.toUpperCase()
          }</div>
        ))}
      </div>
    </li>
  );
}