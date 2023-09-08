import "./UserBar.css"
import useLocalStorage from "use-local-storage";
import {IAccountInfo} from "../../interfaces/IAccountInfo.ts";
import default_logo from "../../../assets/default_avatar.png"
import plus from "../../../assets/plus.svg"

export const UserBar = () => {
    const [initInfo] = useLocalStorage<IAccountInfo>("init_info", {})

    return (
        <div className="userbar">
            <div className="userbar_text">
                <p className="userbar_fullname">{initInfo.firstName} {(initInfo.secondName|| "")[0] }.</p>
                <p className="userbar_username">{initInfo.login}</p>
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