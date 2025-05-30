import React, { useState, useEffect } from 'react';
import DivUI from "../ui-components/DivUI";

const Home = ({ onDataChange }) => {

  const visibleFirstCard = true;
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
      <div className='flex gap-4'>
        <DivUI
          widthProp="w-1/2"
        >

        </DivUI>

        <DivUI
          widthProp="w-1/2"
        >

        </DivUI>
      </div>
    </>

  );
};

export default Home;