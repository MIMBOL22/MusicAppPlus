import 'react';
import "./NavElement.css"
import {NavElementProps} from "../../interfaces/NavElementProps.ts";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const NavElement = (item:NavElementProps) => {
    const location = useLocation();

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        setIsActive(item.link == location.pathname)
    },[location]);

    return (
        <div className={(isActive ? "nav_element_active ":"")+"nav_element"}>
            <Link to={item.link}>{item.name}</Link>
        </div>
    );
};

export default NavElement;