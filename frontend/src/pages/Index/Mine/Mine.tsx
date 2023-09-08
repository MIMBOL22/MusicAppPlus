import "./Mine.css"
import {MyWave} from "../../../components/MyWave/MyWave.tsx";
import {MinePlaylists} from "./MinePlaylists.tsx";

export const Mine = () => {

    return (
        <>
            <MyWave/>
            <div className="mine_playlists">
                <MinePlaylists/>
            </div>
        </>
    );
};