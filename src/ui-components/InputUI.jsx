import React, { forwardRef } from 'react';

const InputUI = forwardRef(({
    id,
    name,
    value,
    onChange,
    placeholder,
    bgColorProp = "bg-gray-100",
    borderProp = "border border-gray-400",
    shadowProp = "shadow-md",
    widthProp = "w-full",
    fontSizeProp = "text-lg",
    fontWeight = "font-bold",
    className = "",
    ...rest
}, ref) => {

    const cssClasses = [
        bgColorProp,
        borderProp,
        shadowProp,
        widthProp,
        fontSizeProp,
        fontWeight,
        className,
    ]
        .filter((cssClass) => cssClass !== undefined)
        .join(" ");

    return (
        <input
            ref={ref}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`p-2 px-4 rounded-lg ${cssClasses}`}
            {...rest}
        />
    );
});

export default InputUI;
