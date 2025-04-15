import React, { Children, useState } from 'react';


const DivUI = ({
    paddingProp = "p-6",
    bgColorProp = "bg-[#FCF9F7]",
    borderProp = "rounded-lg",
    shadowProp = "shadow-md",
    widthProp = "w-full",
    flexProp = "flex",
    flexDirectionProp = "flex-col",
    flexGap = "gap-4",
    visibleProp = true,
    children
}) => {


    const cssClasses = [
        paddingProp,
        bgColorProp,
        borderProp,
        shadowProp,
        widthProp,
        flexProp,
        flexDirectionProp,
        flexGap
      ]
        .filter((cssClass) => cssClass !== undefined)
        .join(" ");


    return (
        <>
            {visibleProp ? (
                <div className={cssClasses}>
                    {children}
                </div>
            ) : null}
        </>
    );
};

export default DivUI;