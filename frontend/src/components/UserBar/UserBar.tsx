import "./UserBar.css"
import useLocalStorage from "use-local-storage";
import {AccountInfo} from "../../interfaces/AccountInfo.ts";
import default_logo from "../../../assets/default_avatar.png"
import plus from "../../../assets/plus.svg"

export const UserBar = () => {
    const [initInfo] = useLocalStorage<AccountInfo>("init_info", {})

    return (
        <div className="userbar">
            <div className="userbar_text">
                <p className="userbar_fullname"></p>
                <p className="userbar_username"></p>
            </div>
            <div className="userbar_avatar">
                <img
                    src={plus}
                    alt=""
                    className="userbar_plus_marker"
                />
                <img
                    src={initInfo.is_avatar_empty ? default_logo : initInfo.default_avatar_id}
                    alt=""
                    className="userbar_avatar"
                />
            </div>
        </div>
    );
};