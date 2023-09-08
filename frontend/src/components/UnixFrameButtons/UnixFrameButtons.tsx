import "./UnixFrameButtons.css"
import {Environment, Quit, WindowMinimise, WindowToggleMaximise} from "../../../wailsjs/runtime";
import {useState} from "react";

export const UnixFrameButtons = () => {
    const [display, setDisplay] = useState(false);

    Environment().then(a=>setDisplay(a.platform!=="windows"));
    return (
        <div className="frame_buttons" style={{opacity:display?1:0}}>
            <div className="frame_button_close" onClick={Quit}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#FF1818"/>
                </svg>
            </div>
            <div className="frame_button_hide" onClick={WindowMinimise}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#FFA012"/>
                </svg>
            </div>
            <div className="frame_button_screen" onClick={WindowToggleMaximise}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#39FF18"/>
                </svg>
            </div>
        </div>
    );
};