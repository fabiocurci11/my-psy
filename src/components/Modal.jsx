import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import DivUI from "../ui-components/DivUI";
import CardPatientUI from '../ui-components/CardPatientUI';

const Modal = ({
    closeModal,
    titleProp = "Titolo",
    itemSelectedProp,

}) => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    console.log("itemSelectedProp: ", itemSelectedProp)

    // Mostra la modale con animazione entrata
    useEffect(() => {
        setIsVisible(true);
        if (modalRef.current) {
            modalRef.current.focus();
        }

        // Blocca scroll al montaggio
        document.body.classList.add('overflow-hidden');

        return () => {
            // Sblocca scroll allo smontaggio
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    // Chiude la modale con animazione uscita
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeModal(); // smonta la modale dopo l'animazione
        }, 200); // deve combaciare con la durata della transition
    };

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-200"
            onClick={handleClose}
        >
            <CardPatientUI
                visibleProp={isVisible}
                refModalProp={modalRef}
                patientSelectedProp={itemSelectedProp}
                onButtonClick={handleClose}

            />

        </div>,
        document.body
    );
};

export default Modal;
