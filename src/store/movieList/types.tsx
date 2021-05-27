import {
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_FAILURE,
  FETCH_MOVIE_LIST_SUCCESS,
} from "./actionTypes";

export interface IMovieList {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieListState {
  pending: boolean;
  movieList: IMovieList[];
  totalResults: number;
  Response: boolean;
  Error: string | null;
  error: string | null;
  searchText: string;
  pageActual: number;
}

export interface FetchMovieListSuccessPayload {
  movieList: IMovieList[];
  totalResults: number;
  Response: boolean;
  Error: string | null;
  searchText: string;
  pageActual: number;
}

export interface FetchMovieListFailurePayload {
  error: string;
}

export interface FetchMovieListRequest {
  type: typeof FETCH_MOVIE_LIST_REQUEST;
  searchText: string;
  pageActual: number;
}

export type FetchMovieListSuccess = {
  type: typeof FETCH_MOVIE_LIST_SUCCESS;
  payload: FetchMovieListSuccessPayload;
};

export type FetchMovieListFailure = {
  type: typeof FETCH_MOVIE_LIST_FAILURE;
  payload: FetchMovieListFailurePayload;
};

export type MovieListActions =
  | FetchMovieListRequest
  | FetchMovieListSuccess
  | FetchMovieListFailure;
