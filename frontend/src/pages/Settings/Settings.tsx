import {Input} from "../../components/Input/Input.tsx";

export const Settings = () => {
    return (
        <div className="settings">
            <div className="oauth">
                <Input placeholder="OAuth токен"/>
            </div>
        </div>
    );
};