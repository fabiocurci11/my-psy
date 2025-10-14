import React from 'react';
import DivUI from "../ui-components/DivUI";
import ButtonUI from '../ui-components/ButtonUI';

const CardPatientUI = ({
    refModalProp,
    patientSelectedProp,
    className = "",
    onClick, // <-- questo arriva dal Modal
    onButtonClick = () => {}
}) => {
    return (
        <DivUI
            ref={refModalProp}
            tabIndex={-1}
            widthProp="w-1/2"
            onClick={onClick} // <-- fondamentale per fermare propagazione
            className={`
                shadow-lg relative overflow-auto max-h-3/4
                ${className}
            `}
        >
            <div className="flex items-center gap-4 mb-4">
                <img
                    src="https://placehold.co/400"
                    alt="Descrizione immagine"
                    className="w-25 h-25 object-cover rounded-full"
                />
                <h1 className="text-xl font-bold">
                    {`${patientSelectedProp.firstName} ${patientSelectedProp.lastName}`}
                </h1>
            </div>

            <h2 className="font-bold uppercase">Problematica</h2>
            <p>
                Il paziente presenta episodi ricorrenti di ansia generalizzata e difficoltà nella gestione dello stress quotidiano, con sintomi come insonnia, irrequietezza e tensione muscolare...
            </p>

            <h2 className="font-bold uppercase">Terapia</h2>
            <p>
                Il percorso terapeutico proposto si basa su un approccio cognitivo-comportamentale...
            </p>

            <h2 className="font-bold uppercase">Contatti</h2>
            <p>
                Per informazioni o per prenotare un appuntamento...
            </p>

            <ButtonUI
                className="transition duration-200"
                textProp="Chiudi"
                paddingProp="p-2 px-6"
                widthProp="w-auto"
                fontWeight="font-bold"
                bgColorProp="bg-[#ffd8c2]"
                hoverProp="hover: bg-[#eabca2]"
                onClick={onButtonClick}
            />
        </DivUI>
    );
};

export default CardPatientUI;
