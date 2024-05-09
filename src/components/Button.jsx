import React from "react";

const Button = ({ children, backgroundColor, width,color }) => {
    // Define a default background color in case none is provided
    const defaultBackgroundColor = "bg-yellow-400";
    const buttonBackgroundColor = backgroundColor ? backgroundColor : defaultBackgroundColor;

    // Define a default width in case none is provided
    const defaultWidth = "w-48"; // You can change this to any default width you prefer
    const buttonWidth = width ? width : defaultWidth;

    const defaultColor = "text-white";
    const buttonColor = color? color: defaultColor;

    return (
        <button className={`h-12 text-white font-bold ${buttonBackgroundColor} ${buttonWidth} ${buttonColor}`}>
            {children}
        </button>
    );
};

export default Button;
