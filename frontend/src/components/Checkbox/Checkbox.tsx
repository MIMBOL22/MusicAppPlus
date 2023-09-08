import "./Checkbox.css"
import React from "react";

interface CheckboxProps {
    checked: boolean;
    name?: string;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = (props:CheckboxProps) => {
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                name={props.name || "checkbox"}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label htmlFor={props.name || "checkbox"}>
                {props.placeholder}
            </label>
        </div>
    );
};