import "./Header.css"
import Logo from "../Logo/Logo.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import {UnixFrameButtons} from "../UnixFrameButtons/UnixFrameButtons.tsx";
export const Header = () => {

    return (
        <div className="header">
            <UnixFrameButtons/>
            <Logo/>
            <NavBar/>
        </div>
    );
};