import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getFavotiteMovies = (state: AppState) => state.favorites.movieList;

const getFavoritesLoaded = (state: AppState) => state.favorites.loaded;

export const getFavotiteMoviesSelector = createSelector(
  getFavotiteMovies,
  (movieList) => movieList
);

export const getFavoritesLoadedSelector = createSelector(
  getFavoritesLoaded,
  (loaded) => loaded
);
