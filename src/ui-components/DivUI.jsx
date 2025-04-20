import React, { Children, useState } from 'react';


const DivUI = ({
    ref,
    paddingProp = "p-6",
    bgColorProp = "bg-[#fff4ed]",
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