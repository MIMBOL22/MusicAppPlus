import 'react';
import "./NavBar.css"
import NavElement from "../NavElement/NavElement.tsx";

const NavBar = () => {
    return <div className="nav_bar">
        <NavElement name="Главная" link="/"/>
        <NavElement name="Подкасты" link="/podcasts"/>
        <NavElement name="Детям" link="/kids"/>
        <NavElement name="Потоки" link="/streams"/>
        <NavElement name="Коллекция" link="/collections"/>
        <NavElement name="Треки" link="/tracks"/>
        <NavElement name="Исполнители" link="/artists"/>
        <NavElement name="Альбомы" link="/albums"/>
        <NavElement name="Плейлисты" link="/playlists"/>
    </div>
};

export default NavBar;