import {
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from "./actionTypes";

export interface Ratings {
  Source: string;
  Value: string;
}

export interface IMovieDetail {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Poster: string;
  Ratings: Ratings[];
  Metascore: number;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Website: string;
  Response: boolean;
}

export interface MovieDetailsState {
  pending: boolean;
  movieDetails: IMovieDetail;
  error: string | null;
}

export interface FetchMovieDetailsSuccessPayload {
  movieDetails: IMovieDetail;
}

export interface FetchMovieDetailsFailurePayload {
  error: string;
}

export interface FetchMovieDetailsRequest {
  type: typeof FETCH_MOVIE_DETAILS_REQUEST;
  searchID: string;
}

export type FetchMovieDetailsSuccess = {
  type: typeof FETCH_MOVIE_DETAILS_SUCCESS;
  payload: FetchMovieDetailsSuccessPayload;
};

export type FetchMovieDetailsFailure = {
  type: typeof FETCH_MOVIE_DETAILS_FAILURE;
  payload: FetchMovieDetailsFailurePayload;
};

export type MovieDetailsActions =
  | FetchMovieDetailsRequest
  | FetchMovieDetailsSuccess
  | FetchMovieDetailsFailure;
