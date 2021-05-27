import {
  LOAD_FAVORITES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./actionTypes";

export interface IMovieList {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FavoritesState {
  movieList: IMovieList[];
  loaded: boolean;
}

export interface FavoritesPayload {
  movieList: IMovieList[];
  loaded: boolean;
}

export interface LoadFavoritesRequest {
  type: typeof LOAD_FAVORITES;
  payload: FavoritesPayload;
}

export type AddToFavoritesRequest = {
  type: typeof ADD_TO_FAVORITES;
  movie: IMovieList;
};

export type RemoveFromFavorites = {
  type: typeof REMOVE_FROM_FAVORITES;
  imdbID: string;
};

export type FavoritesActions =
  | LoadFavoritesRequest
  | AddToFavoritesRequest
  | RemoveFromFavorites;
