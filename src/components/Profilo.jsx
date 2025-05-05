import React, { useState, useEffect } from 'react';
import Counter from '../features/counter/Counter';
import User from '../features/user/User';
import TitleUI from '../ui-components/TitleUI';
import Todos from '../features/todos/Todos';

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
      <TitleUI textProp="Counter reducer"/>
     
      <Counter></Counter>
      <br />
      <br />
      <TitleUI textProp="User reducer"/>
      <User></User>
      <br />
      <br />
      <Todos/>
      </>

  );
};

export default Profilo;