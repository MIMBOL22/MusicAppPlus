import useSWR from "swr";
import {fetcher} from "./fetcher.ts";
import {IFeed} from "./interfaces/IFeed.ts";
import useLocalStorage from "use-local-storage";

export const useYMFeed = () => {
    const [ymToken, _] = useLocalStorage("ym_token", "");

    const feed = useSWR<IFeed, string>(['/feed', ymToken], fetcher);
    if (feed.error) {
        console.error("Ошибка /feed: ", feed.error)
    }

    return feed;
}