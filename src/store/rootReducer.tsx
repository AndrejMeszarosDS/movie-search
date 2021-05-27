import { combineReducers } from "redux";

import movieListReducer from "./movieList/reducer";
import movieDetailsReducer from "./movieDetails/reducer";
import favoritesReducer from "./favorites/reducer";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
  favorites: favoritesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
