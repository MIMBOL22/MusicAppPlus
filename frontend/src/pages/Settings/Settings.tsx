import "./Settings.css"

import {Input} from "../../components/Input/Input.tsx";
import useLocalStorage from "use-local-storage";
import {Checkbox} from "../../components/Checkbox/Checkbox.tsx";

export const Settings = () => {
    const [token, setToken] = useLocalStorage("ym_token", "");
    const [backgroundEnable, setBackgroundEnable] = useLocalStorage("background_enable",false);


    return (
        <div className="settings">
            <div className="oauth">
                <Input
                    placeholder="OAuth токен"
                    type="password"
                    className="input oauth_token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <Checkbox
                    onChange={(e)=>setBackgroundEnable(!e.target.checked)}
                    checked={!backgroundEnable}
                    name="background_checkbox"
                    placeholder="Прозрачный фон"
                />
            </div>
        </div>
    );
};