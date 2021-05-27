import {
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_SUCCESS,
} from "./actionTypes";

import {
  FetchMovieListRequest,
  FetchMovieListSuccess,
  FetchMovieListSuccessPayload,
  FetchMovieListFailure,
  FetchMovieListFailurePayload,
} from "./types";

export const fetchMovieListRequest = (
  searchText: string,
  pageActual: number
): FetchMovieListRequest => ({
  type: FETCH_MOVIE_LIST_REQUEST,
  searchText,
  pageActual,
});

export const fetchMovieListSuccess = (
  payload: FetchMovieListSuccessPayload
): FetchMovieListSuccess => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  payload,
});

export const fetchMovieListFailure = (
  payload: FetchMovieListFailurePayload
): FetchMovieListFailure => ({
  type: FETCH_MOVIE_LIST_FAILURE,
  payload,
});
