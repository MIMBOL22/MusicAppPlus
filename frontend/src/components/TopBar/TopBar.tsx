import "./TopBar.css"
import loupe from "../../../assets/loupe.svg"

interface TopBarProps {
    links: string[];
    onChangeLink: (id: number) => void;
    activeLinkId: number;
}

export const TopBar = ({links, onChangeLink, activeLinkId}: TopBarProps) => {
    return (
        <div className="top_bar">
            <div className="top_bar_links">
                {links.map((link_name, index) => {
                    return (
                        <a
                            className={activeLinkId === index ? "active" : ""}
                            href="#"
                            onClick={() => onChangeLink(index)}
                            key={index}
                        >
                            {link_name}
                        </a>
                    );
                })}
            </div>
            <div className="top_search">
                <img src={loupe}/>
            </div>
        </div>
    );
};