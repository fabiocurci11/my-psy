import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    isLoggedIn: false
};

//slice chiamato dallo store
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
        console.log("login")
        state.name = action.payload;
        state.isLoggedIn = true;
    },
    logout: (state) => {
        console.log("logout")
        state.name = '';
        state.isLoggedIn = false;
    },
    setName: (state, action) => {
        console.log("setName")
        state.name = action.payload;
    },
    
  },
});

//action del reducer
export const { login, logout, setName } = userSlice.actions;

export default userSlice.reducer;
