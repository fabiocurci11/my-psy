import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import DivUI from "../ui-components/DivUI";

const Modal = ({ closeModal }) => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Mostra la modale con animazione entrata
    useEffect(() => {
        setIsVisible(true);
        if (modalRef.current) {
            modalRef.current.focus();
        }
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


            <DivUI
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
                widthProp = "w-1/2"
                className={`
          bg-white p-8 rounded-lg shadow-lg w-96 relative
          transform transition-all duration-200 ease-in-out
          ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
            >
                <h2 className="text-xl font-bold mb-4">Titolo della Modale</h2>
                <p className="mb-4">Modale con animazione di entrata e uscita 👌</p>
                <button
                    onClick={handleClose}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Chiudi
                </button>
            </DivUI>
        </div>,
        document.body
    );
};

export default Modal;
