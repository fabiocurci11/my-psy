import DivUI from "../ui-components/DivUI";
import React, { useEffect, useRef, useState } from 'react';
import ButtonUI from '../ui-components/ButtonUI';

const CardPatientUI = ({
    visibleProp,
    refModalProp,
    patientSelectedProp,
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
                    transform transition-all duration-200 ease-in-out
                    ${visibleProp ? "scale-100 opacity-100" : "scale-95 opacity-0"}
                `}
            >


                <div className="flex items-center gap-4 mb-4">
                    <img
                        src="https://placehold.co/400"
                        alt="Descrizione immagine"
                        className="w-25 h-25 object-cover rounded-full"
                    />
                    <h1 className="text-xl font-bold">{`${patientSelectedProp.firstName} ${patientSelectedProp.lastName}`}</h1>
                </div>

                <h2 className="font-bold uppercase">Problematica</h2>
                <p>
                    Il paziente presenta episodi ricorrenti di ansia generalizzata e difficoltà nella gestione dello stress quotidiano, con sintomi come insonnia, irrequietezza e tensione muscolare. La problematica è stata identificata come legata a fattori lavorativi e relazionali.
                </p>

                <h2 className="font-bold uppercase">Terapia</h2>
                <p>
                    Il percorso terapeutico proposto si basa su un approccio cognitivo-comportamentale, con incontri settimanali individuali. Le sedute si concentrano sul riconoscimento dei pensieri disfunzionali e sull'apprendimento di tecniche di rilassamento e gestione dell’ansia, come la respirazione diaframmatica e il training autogeno.
                </p>

                <h2 className="font-bold uppercase">Contatti</h2>
                <p>
                    Per informazioni o per prenotare un appuntamento, è possibile contattare il numero 345 678 9012 o inviare una mail a studio.psicologo@email.com. Lo studio riceve dal lunedì al venerdì dalle 9:00 alle 18:00 in Via della Serenità 12, Milano.
                </p>

                <ButtonUI
                    className="transition duration-200"
                    textProp="Chiudi"
                    paddingProp="p-2 px-6"
                    widthProp="w-auto"
                    fontWeight="font-bold"
                    bgColorProp="bg-[#ffd8c2]"
                    hoverProp="hover:bg-[#eabca2]"
                    onClick={() => onButtonClick()} 
            
                />

            </DivUI>
        </>
    );
};

export default CardPatientUI;















