import "./Settings.css"

import {Input} from "../../components/Input/Input.tsx";
import useLocalStorage from "use-local-storage";

export const Settings = () => {
    const [token, setToken] = useLocalStorage("token", "");
    return (
        <div className="settings">
            <div className="oauth">
                <Input
                    placeholder="OAuth токен"
                    type="password"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
            </div>
        </div>
    );
};