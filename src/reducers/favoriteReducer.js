import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES,MAIN_MOVIE_SILINIRSE } from "../actions/favoritesActions";

const initialState ={
    favorites:[],
    displayFavorites:false
}

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
        return {
          ...state,
          displayFavorites:!state.displayFavorites
        }
        case ADD_FAVORITE:
            return {
            ...state,
              favorites:[...state.favorites,action.payload]
            }
        case REMOVE_FAVORITE:
            return {
            ...state,
            favorites:state.favorites.filter((item)=> item.id !== action.payload)
            }    
        case MAIN_MOVIE_SILINIRSE:
            return {
            ...state,
            favorites:state.favorites.filter((item)=> item.id !== action.payload)
            }    
    default:
      return state;
  }
}

export default reducer