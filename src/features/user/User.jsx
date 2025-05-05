import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, setName } from './userSlice'
import ButtonUI from '../../ui-components/ButtonUI';

const User = () => {
  const [amount, setAmount] = useState(0);  // Stato per l'input della quantità
  const user = useSelector((state) => state.user);  // Prendi il valore dal Redux store
  const dispatch = useDispatch();  // Ottieni il dispatch per inviare azioni

  const handleLogin = () => {
    dispatch(login("Fabio"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleName = (name) => {
    dispatch(setName(name));
  };


  return (
    <div>
      <h1>User logged? {user.isLoggedIn ? "Yes: " : "No"} {user.name}</h1>
      <br />
      <ButtonUI
        textProp="Login"
        onClick={handleLogin}
      />

      <ButtonUI
        textProp="Logout"
        onClick={handleLogout}
      />

      <ButtonUI
        textProp="Set name"
        onClick={() => handleName("mimmo")} 
      />

    </div>
  );
};

export default User;
