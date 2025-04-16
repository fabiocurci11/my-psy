import React, { useState, useEffect } from 'react';
import DivUI from "../ui-components/DivUI";
import TableUI from '../ui-components/TableUI';

const Patients = ({ onDataChange }) => {

    const [patients, setPatients] = useState([]);
    const [columns, setColumns] = useState([]);

    //dati passati a Sidebar
    const visibleFirstCard = true;
    const titleCard = "Ecco i tuoi pazienti";
    const paragraphCard = "";

    useEffect(() => {
        // Appena montato, passa un oggetto a Sidebar con tutte le info
        onDataChange({
            visible: visibleFirstCard,
            title: titleCard,
            paragraph: paragraphCard,
        });

        fetch('/api/patients.json')
            .then(response => response.json())
            .then(data => {
                console.log('Dati ricevuti:', data);
                setPatients(data);

                const columnsFromData = Object.keys(data[0]);
                setColumns(columnsFromData);

                // Logga columns appena aggiornato
                console.log('Columns:', columnsFromData); // Usa la variabile appena settata, non il valore di columns
            })
            .catch(error => console.error('Error loading patients:', error));

        console.log(patients)

        // Quando si smonta, passa solo visibilità falsa
        return () => {
            onDataChange({ visible: false });
        };
    }, []);

    // Funzione che gestisce il click del bottone
    const handleButtonClick = (item) => {
        alert(`Hai cliccato il bottone per: ${item.firstName} con ID: ${item.id}`);
    };



    return (

        <TableUI
            columns={columns}
            data={patients}
            onButtonClick={handleButtonClick} // Passa la funzione per gestire il click

        />



    );
};

export default Patients;