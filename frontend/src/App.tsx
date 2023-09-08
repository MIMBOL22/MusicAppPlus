import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";
import {RightBar} from "./components/RightBar/RightBar.tsx";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';
import {useYMInit} from "./ym_api/useYMInit.ts";
import {Background} from "./components/Background/Background.tsx";
import useLocalStorage from "use-local-storage";
import {WindowsFrameButtons} from "./components/WindowsFrameButtons/WindowsFrameButtons.tsx";

export const App = () => {
    const [background] = useLocalStorage("background_enable",false);
    useYMInit();


    return (
        <>
            <WindowsFrameButtons/>
            {background && <Background/>}
            <Header/>
            <Main/>
            <RightBar/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};
