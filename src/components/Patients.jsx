import React, { useState, useEffect } from 'react';
import DivUI from "../ui-components/DivUI";

const Patients = ({ onDataChange }) => {

    const [patients, setPatients] = useState([]);

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
                console.log('Dati ricevuti:', data); // Aggiungi questo log per vedere i dati
                setPatients(data);
            })
            .catch(error => console.error('Error loading patients:', error));

        console.log(patients)

        // Quando si smonta, passa solo visibilità falsa
        return () => {
            onDataChange({ visible: false });
        };
    }, []);



    return (
        <>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        {patient.name} - Age: {patient.age}
                    </li>
                ))}
            </ul>
        </>

    );
};

export default Patients;