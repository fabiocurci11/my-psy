import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';
import ButtonUI from '../../ui-components/ButtonUI';

const Counter = () => {
  const [amount, setAmount] = useState(0);  // Stato per l'input della quantità
  const count = useSelector((state) => state.counter.value);  // Prendi il valore dal Redux store
  const dispatch = useDispatch();  // Ottieni il dispatch per inviare azioni

  const handleIncrement = () => {
    dispatch(increment());  // Incrementa il contatore
  };

  const handleDecrement = () => {
    dispatch(decrement());  // Decrementa il contatore
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(amount)));  // Incrementa di una quantità specificata
    setAmount(0);  // Resetta l'input
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <ButtonUI
            textProp="Increment by amount" 
            onClick={handleIncrementByAmount}
        />
      </div>
    </div>
  );
};

export default Counter;
