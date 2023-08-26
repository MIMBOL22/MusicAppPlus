import "react";
import {Route, Routes} from "react-router-dom";

import {Index} from "../../pages/Index/Index.tsx";
import {Podcasts} from "../../pages/Podcasts/Podcasts.tsx";
import {Kids} from "../../pages/Kids/Kids.tsx";
import {Streams} from "../../pages/Streams/Streams.tsx";
import {Collections} from "../../pages/Collections/Collections.tsx";
import {Tracks} from "../../pages/Tracks/Tracks.tsx";
import {Artists} from "../../pages/Artists/Artists.tsx";
import {Albums} from "../../pages/Albums/Albums.tsx";
import {Playlists} from "../../pages/Playlists/Playlists.tsx";
import {Settings} from "../../pages/Settings/Settings.tsx";

import "./Main.css"

export const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/podcasts' element={<Podcasts/>}/>
                <Route path='/kids' element={<Kids/>}/>
                <Route path='/streams' element={<Streams/>}/>
                <Route path='/collections' element={<Collections/>}/>
                <Route path='/tracks' element={<Tracks/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/albums' element={<Albums/>}/>
                <Route path='/playlists' element={<Playlists/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    );
};