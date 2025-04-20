import React, { useState, useEffect } from 'react';

const Profilo = ({ onDataChange }) => {

  const visibleFirstCard = false;
  const titleCard = "Ciao";
  const paragraphCard = "Bentornato";

  useEffect(() => {
    // Appena montato, passa un oggetto con tutte le info
    onDataChange({
      visible: visibleFirstCard,
      title: titleCard,
      paragraph: paragraphCard,
    });

    // Quando si smonta, passa solo visibilità falsa
    return () => {
      onDataChange({ visible: false });
    };
  }, []);



  return (
    <div className="min-h-screen bg-[#fff4ed] text-[#1f2937] p-8 space-y-8">
      {/* Header */}
      <header className="bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-3xl font-bold">Benvenuto nella tua piattaforma di psicologia</h1>
        <p className="text-[#4b5563] mt-2">Uno spazio sicuro per il tuo benessere mentale.</p>
      </header>

      {/* Call to Action Section */}
      <section className="bg-[#ffe5d4] rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Prenota una sessione</h2>
        <p className="text-[#374151] mb-4">Parla con uno specialista oggi stesso.</p>
        <button className="bg-[#dbeafe] text-[#1f2937] font-semibold px-4 py-2 rounded-lg hover:bg-[#bfdbfe] transition">Prenota Ora</button>
      </section>

      {/* Emozioni / Stato */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#d1e7dd] p-4 rounded-xl shadow">Conferma inviata con successo.</div>
        <div className="bg-[#fef9c3] p-4 rounded-xl shadow">Nota: Ricorda il tuo prossimo appuntamento.</div>
        <div className="bg-[#fee2e2] p-4 rounded-xl shadow">Errore: qualcosa non ha funzionato.</div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#6b7280] mt-10">
        © 2025 Psicologia Serena. Tutti i diritti riservati.
      </footer>
    </div>
  );
};

export default Profilo;