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
    <>
      <div>
        <h1>Profilo</h1>
      </div>
    </>

  );
};

export default Profilo;