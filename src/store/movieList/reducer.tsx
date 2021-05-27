import {
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_SUCCESS,
} from "./actionTypes";

import { MovieListActions, MovieListState } from "./types";

const initialState: MovieListState = {
  pending: false,
  movieList: [],
  error: "",
  totalResults: 0,
  Response: false,
  Error: "",
  searchText: "",
  pageActual: 0,
};

const fn = (state = initialState, action: MovieListActions) => {
  switch (action.type) {
    case FETCH_MOVIE_LIST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        movieList: action.payload.movieList,
        totalResults: action.payload.totalResults,
        Response: action.payload.Response,
        Error: action.payload.Error,
        error: null,
        searchText: action.payload.searchText,
        pageActual: action.payload.pageActual,
      };
    case FETCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        pending: false,
        movieList: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default fn;
