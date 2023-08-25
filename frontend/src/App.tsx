import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";
import {RightBar} from "./components/RightBar/RightBar.tsx";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
    return (
        <>
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
