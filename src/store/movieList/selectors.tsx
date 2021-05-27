import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getMovieListPending = (state: AppState) => state.movieList.pending;

const getMovieListData = (state: AppState) => state.movieList.movieList;

const getMovieListError = (state: AppState) => state.movieList.error;

const getMovieListApiError = (state: AppState) => state.movieList.Error;

const getMovieListResponse = (state: AppState) => state.movieList.Response;

const getMovieListCount = (state: AppState) => state.movieList.totalResults;

const getMovieListSearchText = (state: AppState) => state.movieList.searchText;

const getMovieListPageActual = (state: AppState) => state.movieList.pageActual;

export const getMovieListDataSelector = createSelector(
  getMovieListData,
  (movieList) => movieList
);

export const getMovieListPendingSelector = createSelector(
  getMovieListPending,
  (pending) => pending
);

export const getMovieListErrorSelector = createSelector(
  getMovieListError,
  (error) => error
);

export const getMovieListApiErrorSelector = createSelector(
  getMovieListApiError,
  (Error) => Error
);

export const getMovieListResponseSelector = createSelector(
  getMovieListResponse,
  (Response) => Response
);

export const getMovieListCountSelector = createSelector(
  getMovieListCount,
  (totalResults) => totalResults
);

export const getMovieListSearchTextSelector = createSelector(
  getMovieListSearchText,
  (searchText) => searchText
);

export const getMovieListPageActualSelector = createSelector(
  getMovieListPageActual,
  (pageActual) => pageActual
);
