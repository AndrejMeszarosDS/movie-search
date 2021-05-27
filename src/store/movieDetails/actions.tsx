import {
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from "./actionTypes";

import {
  FetchMovieDetailsRequest,
  FetchMovieDetailsSuccess,
  FetchMovieDetailsSuccessPayload,
  FetchMovieDetailsFailure,
  FetchMovieDetailsFailurePayload,
} from "./types";

export const fetchMovieDetailsRequest = (
  searchID: string
): FetchMovieDetailsRequest => ({
  type: FETCH_MOVIE_DETAILS_REQUEST,
  searchID,
});

export const fetchMovieDetailsSuccess = (
  payload: FetchMovieDetailsSuccessPayload
): FetchMovieDetailsSuccess => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload,
});

export const fetchMovieDetailsFailure = (
  payload: FetchMovieDetailsFailurePayload
): FetchMovieDetailsFailure => ({
  type: FETCH_MOVIE_DETAILS_FAILURE,
  payload,
});
