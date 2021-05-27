import {
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from "./actionTypes";

import { MovieDetailsActions, MovieDetailsState } from "./types";

const movieDetailsInitialState = {
  Title: "",
  Year: 0,
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Poster: "",
  Ratings: [],
  Metascore: 0,
  imdbRating: "",
  imdbVotes: "",
  imdbID: "",
  Type: "",
  DVD: "",
  BoxOffice: "",
  Website: "",
  Response: false,
};

const initialState: MovieDetailsState = {
  pending: false,
  movieDetails: movieDetailsInitialState,
  error: "",
};

const fn = (state = initialState, action: MovieDetailsActions) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        movieDetails: action.payload.movieDetails,
        error: null,
      };
    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        pending: false,
        movieDetails: movieDetailsInitialState,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default fn;
