import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

//* add current playing song title?
//* can the player scroll the song titles to the left for the longer ones?
//* skip buttons go to next song in select?
//* make it smaller, with rounded edges, and maybe a glassy look with box-shadow
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