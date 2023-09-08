import "./Playlist.css"
import {useYMPlaylist} from "../../ym_api/useYMPlaylist.ts";
import {IPlaylist} from "../../ym_api/interfaces/IPlaylist.ts";

export const Playlist = (props: { playlist: IPlaylist }) => {
    const {playlist, error, isLoading} = useYMPlaylist({playlist: props.playlist})

    if (error) return <p>Ошибка</p>
    if (isLoading) return <p>Загрузка</p>

    const logo = playlist?.animatedCoverUri ? playlist?.animatedCoverUri : playlist?.cover?.uri

    return (
        <div className="playlist">
            <img src={"https://" + logo?.replace("%%", "300x300")} alt="" className="playlist_logo"/>
            <p className="playlist_title">{playlist?.title}</p>
            <p className="playlist_subtitle">{playlist?.description}</p>
        </div>
    );
};