import "./WindowsFrameButtons.css"
import {Environment, Quit, WindowMinimise, WindowToggleMaximise} from "../../../wailsjs/runtime";

import cross from "../../../assets/cross.svg"
import square from "../../../assets/square.svg"
import line from "../../../assets/line.svg"
import {useState} from "react";


export const WindowsFrameButtons = () => {
    const [display, setDisplay] = useState(false);

    Environment().then(a=>setDisplay(a.platform=="windows"));
    if(!display) return <></>

    return (
        <div className="windows_frame_buttons">
            <div className="windows_frame_button_hide" onClick={WindowMinimise}>
                <img src={line} alt=""/>
            </div>
            <div className="windows_frame_button_screen" onClick={WindowToggleMaximise}>
                <img src={square} alt=""/>
            </div>
            <div className="windows_frame_button_close" onClick={Quit}>
                <img src={cross} alt=""/>
            </div>
        </div>
    );
};