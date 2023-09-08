import useLocalStorage from "use-local-storage";
import useSWR from "swr";
import {fetcher} from "./fetcher.ts";
import {IPlaylist} from "./interfaces/IPlaylist.ts";


export const useYMPlaylist = (props: { playlist: IPlaylist }) => {
    const [ymToken, _] = useLocalStorage("ym_token", "");
    let error: string = "";
    let isLoading = false;
    let playlist: IPlaylist | undefined = props.playlist;

    if (!playlist.animatedCoverUri || !playlist.uid || !playlist.title || !playlist.description) {
        const playlistAPI = useSWR<IPlaylist, string>(['/users/' + props.playlist.uid + '/playlists/' + props.playlist.kind, ymToken], fetcher);
        error = playlistAPI.error || "";
        if (playlistAPI.error) console.error("Ошибка плейлиста: ", playlistAPI.error);
        isLoading = playlistAPI.isLoading;
        playlist = playlistAPI.data;
    }

    return {playlist, error, isLoading};
}