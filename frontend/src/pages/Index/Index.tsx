import {TopBar} from "../../components/TopBar/TopBar.tsx";
import {Radios} from "./Radios/Radios.tsx";
import {NewReleases} from "./NewReleases/NewReleases.tsx";
import {Chart} from "./Chart/Chart.tsx";
import {Mine} from "./Mine/Mine.tsx";

import useLocalStorage from "use-local-storage";

interface SubPage {
    name: string;
    element: () => JSX.Element;
}

export const Index = () => {
    const subPages: SubPage[] = [
        {
            name: "Моё",
            element: Mine,
        },
        {
            name: "Радио",
            element: Radios,
        },
        {
            name: "Новые релизы",
            element: NewReleases,
        },
        {
            name: "Чарт",
            element: Chart,
        },

    ]

    const [linkId, setLinkId] = useLocalStorage("linkId", 0);
    const CurrentElement = subPages[linkId].element;
    return (
        <div className="main_page">
            <TopBar activeLinkId={linkId} onChangeLink={setLinkId} links={subPages.map(a => a.name)}/>
            <div className="main_page_container">
                <CurrentElement/>
            </div>
        </div>
    );
};