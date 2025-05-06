import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';


const Modal = ({
    closeModal,
    children
}) => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        if (modalRef.current) modalRef.current.focus();

        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeModal();
        }, 200); // deve combaciare con la durata dell’animazione
    };

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-200 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            {React.cloneElement(children, {
                refModalProp: modalRef,
                onClick: (e) => e.stopPropagation(),
                onButtonClick: handleClose,
                className: `transform transition-all duration-200 ease-in-out ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`,
            })}
        </div>,
        document.body
    );
};

export default Modal;
