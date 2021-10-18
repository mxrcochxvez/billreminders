import React, { HTMLInputTypeAttribute } from "react"

type InputProps = {
    type?: HTMLInputTypeAttribute;
    label: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

/**
 * Input with default styling
 */
export default function Input(props: InputProps) {
    return (
        <div>
            {props.label && <label>{props.label}: </label>}
            <input {...props} className="bg-gray-300 px-2" />
        </div>
    )
}
