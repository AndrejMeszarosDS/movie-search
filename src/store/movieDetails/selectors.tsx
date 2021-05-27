import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getMovieDetailsPending = (state: AppState) => state.movieDetails.pending;

const getMovieDetailsData = (state: AppState) =>
  state.movieDetails.movieDetails;

const getMovieDetailsError = (state: AppState) => state.movieDetails.error;

export const getMovieDetailsDataSelector = createSelector(
  getMovieDetailsData,
  (movieDetails) => movieDetails
);

export const getMovieDetailsPendingSelector = createSelector(
  getMovieDetailsPending,
  (pending) => pending
);

export const getMovieDetailsErrorSelector = createSelector(
  getMovieDetailsError,
  (error) => error
);
