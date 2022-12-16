import { createContext, useState } from "react";
// creating context constant
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  // create state to favorite meal corrensponding to meal Id and for its set's
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  // add function
  function addFavorite(id) {
    setFavoriteMealId((prevId) => [...prevId, id]);
  }

  //remove function
  function removeFavorite(id) {
    setFavoriteMealId((prevId) => prevId.filter((itemId) => itemId !== id));
  }

  // passing functions and data to context povider
  const value = {
    ids: favoriteMealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  // Contex provider.
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
