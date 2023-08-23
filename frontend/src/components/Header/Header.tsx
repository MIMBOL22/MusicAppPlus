import "./Header.css"
import {FrameButtons} from "../FrameButtons/FrameButtons.tsx";
import Logo from "../Logo/Logo.tsx";
import NavBar from "../NavBar/NavBar.tsx";
export const Header = () => {

    return (
        <div className="header">
            <FrameButtons/>
            <Logo/>
            <NavBar/>
        </div>
    );
};