import React from "react";
import "./primarybutton.css";
export default function PrimaryButton({
    type = "submit",
    className = "",
    processing,
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `btn-primary uppercase font-bold rounded-full w-full py-2 sm:w-auto sm:py-3 sm:px-8 duration-300 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
