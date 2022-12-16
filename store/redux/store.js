import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites";
export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});

// reducer are the different slices of state (data) and actions that ca change that data used by redux to then
// construct an overall store of data and actions.
// after we add <Provider> into App.js file that embody all content. After that we give store props that the store we have
// been created in here.
