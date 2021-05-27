import {
  LOAD_FAVORITES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./actionTypes";

import { FavoritesActions, FavoritesState } from "./types";

const initialState: FavoritesState = {
  movieList: [],
  loaded: false,
};

const fn = (state = initialState, action: FavoritesActions) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return {
        ...state,
        loaded: true,
        movieList: action.payload.movieList,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        movieList: [...state.movieList, action.movie],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        movieList: [
          ...state.movieList.filter((a) => a.imdbID !== action.imdbID),
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

export default fn;
