import "./Button.css"
import {MouseEventHandler} from "react";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    children?: JSX.Element | string | undefined | never[];
    className?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={"button " + props.className}
            onClick={props.onClick}
        >
            {props.children && props.children}
        </button>
    );
};