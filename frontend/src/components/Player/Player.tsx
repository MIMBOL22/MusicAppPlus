import "./Player.css"
import ReactAudioPlayer from "react-audio-player";

export const Player = () => {
    return (
        <div className="player">
            <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
            />
        </div>
    );
};