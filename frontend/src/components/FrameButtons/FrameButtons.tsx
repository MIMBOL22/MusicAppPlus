import "./FrameButtons.css"
import {Quit, WindowMinimise, WindowToggleMaximise} from "../../../wailsjs/runtime";

export const FrameButtons = () => {
    return (
        <div className="frame_buttons">
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