import {ChangeEventHandler, useState} from "react";
import "./Input.css"

export interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: InputProps): JSX.Element => {
    const [inputText, setInputText] = useState("")
    return (
        <div className="input">
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                {...props}
            />
        </div>
    ) as JSX.Element;
};