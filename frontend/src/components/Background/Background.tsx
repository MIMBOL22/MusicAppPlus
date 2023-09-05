import "./Background.css"
import background from "../../../assets/background.png"

export const Background = () => {
    return (
        <div className="background">
            <img src={background} alt=""/>
        </div>
    );
};