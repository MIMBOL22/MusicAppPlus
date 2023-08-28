import "./MyWave.css"

import pause from "../../../assets/pause.svg"
import play from "../../../assets/play.svg"
import useLocalStorage from "use-local-storage";

export const MyWave = () => {
    const [isPlaying] = useLocalStorage("isPlaying", false)
    const [isRadio] = useLocalStorage("isRadio", false)
    const [radioSrc] = useLocalStorage("radioSrc", "")

    const isMyWave = isPlaying && isRadio && radioSrc == "myWave";
    return (
        <div className="my_wave">
            <div className="my_wave_left">
                <div className="first_line">
                    <img
                        src={isMyWave ? pause : play}
                        alt=""
                        className="my_wave_button"
                    />
                    <p className="my_wave_title">Моя волна</p>
                </div>
                <p className="my_wave_subtitle">
                    Бесконечный поток треков, который подстраивается под вас.
                </p>
            </div>
        </div>
    );
};