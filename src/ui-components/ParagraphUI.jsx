import React, { useState } from 'react';

const ParagraphUI = ({
    textProp,
    textColor = "text-[#50d71e]",
    fontWeight = "font-normal"
    
}) => {


    const cssClasses = `
        ${textColor},
        ${fontWeight}
    `;
    

    return (
        <>
            <p className={cssClasses}>
                {textProp}
            </p>
        </>
    );
};

export default ParagraphUI;