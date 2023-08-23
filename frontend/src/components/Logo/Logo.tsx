import 'react';
import "./Logo.css"

import plus_music from "../../../assets/plus_music.svg"

interface LogoProps {

}

const Logo = (_ : LogoProps) => {
    return <div className="logo">
        <img src={plus_music} alt=""/>
    </div>
};

export default Logo;