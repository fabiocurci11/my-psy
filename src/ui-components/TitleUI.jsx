import React, { useState } from 'react';

const TitleUI = ({
    textProp, 
    paddingProp, 
    bgColorProp, 
    borderProp, 
    shadowProp, 
    widthProp,
    fontSizeProp = "text-lg",
    fontWeight = "font-bold"
}) => {

    
    const cssClasses = [
        paddingProp,
        bgColorProp,
        borderProp,
        shadowProp,
        widthProp,
        fontSizeProp,
        fontWeight
      ]
        .filter((cssClass) => cssClass !== undefined)
        .join(" ");
    

    return (
        <>
            <h1 className={cssClasses}>
                {textProp}
            </h1>
        </>
    );
};

export default TitleUI;