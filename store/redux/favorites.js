import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;

// this part of file we create a slice.
// first call the createSlice objet from @redux.js/toolki
// create objet via createSlice mathod whict this methods accepts an object includes name and initialState.
// we create initial state as array with empty, that all we wanted.
// Now we need functions that change the state (initial state).
// In redux there is a separation between intialState and reducer which we going to create function inside it.
// Reducers  are functions that we are use to change the state.
// First give name the function after that use arrow function which take (in this senario) 2 arguments ones state other
// action: state gives the latest state snapshot. With redux toolkit we can mutate our state in immutable way.
// action can hold an extra payload which we can pass along when invoking this method later.
