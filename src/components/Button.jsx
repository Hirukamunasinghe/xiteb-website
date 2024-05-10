import React from "react";

// passing children, backgroundColor, width and color as props to the button component
const Button = ({ children, backgroundColor, width,color }) => {
    // Default bg color
    const defaultBackgroundColor = "bg-yellow-400";
    const buttonBackgroundColor = backgroundColor ? backgroundColor : defaultBackgroundColor;

    // Default width
    const defaultWidth = "w-48";
    const buttonWidth = width ? width : defaultWidth;

    // Default Color
    const defaultColor = "text-white";
    const buttonColor = color? color: defaultColor;

    return (
        <button className={`h-12 text-white font-bold ${buttonBackgroundColor} ${buttonWidth} ${buttonColor}`}>
            {children}
        </button>
    );
};

export default Button;
