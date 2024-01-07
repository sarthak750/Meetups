import { useState } from "react";
import FavoritesContext from "./FavoritesContext";

function FavoritesState(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteButtonText, setFavoriteButtonText] = useState("To Favorites");

  return (
    <FavoritesContext.Provider
      value={{
        isFavorite,
        setIsFavorite,
        favoriteButtonText,
        setFavoriteButtonText,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesState;
