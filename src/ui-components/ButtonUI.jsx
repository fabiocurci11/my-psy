import React from 'react';

const ButtonUI = ({
    textProp, 
    paddingProp, 
    bgColorProp = "bg-[#fff4ed]", 
    borderProp, 
    shadowProp, 
    widthProp,
    fontWeight = "font-semibold",
    textColorProp = "",  // colore del testo per contrasto
    className,
    hoverProp="hover:bg-[#ffd8c2]",
    onClick
}) => {
    
    const cssClasses = [
        "cursor-pointer",
        "rounded-lg",           // sempre presente
        paddingProp,
        bgColorProp,
        borderProp,
        shadowProp,
        widthProp,
        fontWeight,
        className,
        hoverProp,
        textColorProp,          // aggiungiamo il colore del testo
        "transition-colors",    // aggiungiamo una transizione per hover
        "duration-200",         // durata della transizione
        "transform",            // per trasformazioni al passaggio del mouse
        "hover:text-gray-900"   // cambiamento colore testo su hover
    ]
    .filter((cssClass) => cssClass !== undefined)
    .join(" ");

    return (
        <button onClick={onClick} className={cssClasses}>
            {textProp}
        </button>
    );
};

export default ButtonUI;
