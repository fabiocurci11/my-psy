import React, { useRef } from 'react';
import DivUI from "./DivUI";
import ButtonUI from "./ButtonUI";
import InputUI from "./InputUI";

const FormAddUI = ({
    refModalProp,
    className = "",
    onButtonClick = () => console.log("Default Click button")
}) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        console.log("Dati inviati:", { name, email });
        // Puoi anche validare e chiamare API qui
    };

    return (
        <DivUI
            ref={refModalProp}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            widthProp="w-1/2"
            className={`shadow-lg relative overflow-auto max-h-3/4 ${className}`}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">Nome</label>
                    <InputUI
                        id="name"
                        name="name"
                        placeholder="Inserisci il tuo nome"
                        ref={nameRef}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                    <InputUI
                        id="email"
                        name="email"
                        placeholder="Inserisci la tua email"
                        ref={emailRef}
                    />
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <ButtonUI
                        type="submit"
                        textProp="Invia"
                        paddingProp="p-2 px-6"
                        widthProp="w-auto"
                        bgColorProp="bg-green-300"
                        hoverProp="hover:bg-green-400"
                    />
                    <ButtonUI
                        type="button"
                        textProp="Chiudi"
                        paddingProp="p-2 px-6"
                        widthProp="w-auto"
                        bgColorProp="bg-red-300"
                        hoverProp="hover:bg-red-400"
                        onClick={() => onButtonClick()}
                    />
                </div>
            </form>
        </DivUI>
    );
};

export default FormAddUI;
