import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import todosReducer from '../features/todos/todosSlice';

//Middelware
const loggerMiddleware = storeAPI => next => action => {
  console.log('Middelware');
  console.log('dispatching:', action);
  let result = next(action);
  console.log('next state:', storeAPI.getState());
  return result;
};

//store che conterrà un oggetto reducer con gli slice 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});