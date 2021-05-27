import {
  LOAD_FAVORITES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./actionTypes";

import {
  LoadFavoritesRequest,
  AddToFavoritesRequest,
  RemoveFromFavorites,
  FavoritesPayload,
  IMovieList,
} from "./types";

export const loadFavoritesRequest = (
  payload: FavoritesPayload
): LoadFavoritesRequest => ({
  type: LOAD_FAVORITES,
  payload,
});

export const addToFavoritesRequest = (
  movie: IMovieList
): AddToFavoritesRequest => ({
  type: ADD_TO_FAVORITES,
  movie,
});

export const removeFromFavorites = (imdbID: string): RemoveFromFavorites => ({
  type: REMOVE_FROM_FAVORITES,
  imdbID,
});
