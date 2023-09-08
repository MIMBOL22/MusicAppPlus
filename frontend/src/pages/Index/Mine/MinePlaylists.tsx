import {Playlist} from "../../../components/Playlist/Playlist.tsx";
import {useYMFeed} from "../../../ym_api/useYMFeed.ts";

export const MinePlaylists = () => {
    const feed = useYMFeed();

    if (feed.error) return <p>Ошибка</p>
    if (feed.isLoading) return <p>Загрузка</p>
    if (!feed.data) return <p>Ошибка</p>

    const playlistOfDay = feed.data.generatedPlaylists.find(p => p.data.generatedPlaylistType == "playlistOfTheDay")
    const neverHeard = feed.data.generatedPlaylists.find(p => p.data.generatedPlaylistType == "neverHeard")
    const recentTracks = feed.data.generatedPlaylists.find(p => p.data.generatedPlaylistType == "recentTracks")
    const missedLikes = feed.data.generatedPlaylists.find(p => p.data.generatedPlaylistType == "missedLikes")


    return (
        <div className="mine_playlists">
            {playlistOfDay && <Playlist playlist={playlistOfDay.data}/>}
            {neverHeard && <Playlist playlist={neverHeard.data}/>}
            {recentTracks && <Playlist playlist={recentTracks.data}/>}
            {missedLikes && <Playlist playlist={missedLikes.data}/>}
        </div>
    );
};