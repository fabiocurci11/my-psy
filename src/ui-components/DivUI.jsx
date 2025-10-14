import React, { forwardRef } from 'react';

const DivUI = forwardRef(({
    paddingProp = "p-6",
    bgColorProp = "bg-[#fff4ed]",
    borderProp = "rounded-lg",
    shadowProp = "shadow-md",
    widthProp = "w-full",
    flexProp = "flex",
    flexDirectionProp = "flex-col",
    flexGap = "gap-4",
    visibleProp = true,
    className = "",
    onClick,
    children
}, ref) => {

    const cssClasses = [
        paddingProp,
        bgColorProp,
        borderProp,
        shadowProp,
        widthProp,
        flexProp,
        flexDirectionProp,
        flexGap,
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        visibleProp ? (
            <div
                className={cssClasses}
                ref={ref}
                onClick={onClick}
            >
                {children}
            </div>
        ) : null
    );
});

export default DivUI;
