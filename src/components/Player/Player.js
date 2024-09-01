import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


//* can the player scroll the song titles to the left for the longer ones?
export default function Player({ track }) {
    return (
        <AudioPlayer
            autoPlay
            src={ track }
            // onPlay={e => console.log("onPlay")}
            // style={{height: '120px'}}
            style={{backgroundColor: '#336'}}
        />
    )
};