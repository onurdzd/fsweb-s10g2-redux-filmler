export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const MAIN_MOVIE_SILINIRSE = "MAIN_MOVIE_SILINIRSE";

export const toggleFavorites = () => {
  return ({ type: TOGGLE_FAVORITES });
}

export const addFavorite = (movie) => {
  return ({ type: ADD_FAVORITE, payload: movie });
}

export const removeFavorite = (id) => {
  return ({ type: REMOVE_FAVORITE, payload: id });
}

export const mainMovieSilindi=(id)=>{
  return ({ type: REMOVE_FAVORITE, payload: id });
}