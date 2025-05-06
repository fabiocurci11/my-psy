import DivUI from "./DivUI";
import React, { useEffect, useRef, useState } from 'react';
import ButtonUI from './ButtonUI';

const FormAddUI = ({
    refModalProp,
    className = "",
    onButtonClick = () => console.log("Default Click button")
}) => {

    const cssClasses = [

    ]
        .filter((cssClass) => cssClass !== undefined)
        .join(" ");


    return (
        <>
            <DivUI
                ref={refModalProp}
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
                widthProp="w-1/2"
                className={`
                shadow-lg relative overflow-auto max-h-3/4
                ${className}
            `}
            >


                <div className="flex items-center gap-4 mb-4">
               
                </div>


                <ButtonUI
                    className="transition duration-200"
                    textProp="Chiudi"
                    paddingProp="p-2 px-6"
                    widthProp="w-auto"
                    fontWeight="font-bold"
                    bgColorProp="bg-[#ffd8c2]"
                    hoverProp="hover: bg-[#eabca2]"
                    onClick={() => onButtonClick()}

                />

            </DivUI>
        </>
    );
};

export default FormAddUI;















